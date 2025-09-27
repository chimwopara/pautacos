document.addEventListener('DOMContentLoaded', () => {
    // Wait for other scripts to load
    setTimeout(() => {
        initializePaymentSystem();
    }, 100);
});

function initializePaymentSystem() {
    // Check if required dependencies are available
    if (typeof cart === 'undefined' || typeof menuData === 'undefined') {
        console.error('Payment system dependencies not loaded');
        return;
    }

    // Initialize Paystack if available
    let paystackLoaded = false;
    
    // Check if Paystack script is loaded
    if (typeof PaystackPop !== 'undefined') {
        paystackLoaded = true;
        console.log('Paystack loaded successfully');
    } else {
        console.warn('Paystack not loaded - using fallback payment method');
    }

    // Calculate order total
    function calculateOrderTotal() {
        let total = 0;
        cart.forEach(item => {
            if (menuData[item.key] && menuData[item.key].prices) {
                total += menuData[item.key].prices[item.size] || 0;
                total += (item.toppings ? item.toppings.length : 0) * toppingPrice;
            }
        });
        return total;
    }

    // Apply gift discount
    function calculateFinalTotal(orderTotal) {
        if (!currentGiftInfo) return orderTotal;
        
        if (currentGiftInfo.limit === 'unlimited') {
            return 0; // Will require approval
        }
        
        const giftLimit = parseInt(currentGiftInfo.limit);
        return Math.max(0, orderTotal - giftLimit);
    }

    // Format order details for processing
    function formatOrderDetails() {
        const customerName = document.getElementById('customer-name')?.value || '';
        const customerPhone = document.getElementById('customer-phone')?.value || '';
        const pickupSpot = document.getElementById('pickup-spot')?.value || '';
        
        const orderItems = cart.map(item => ({
            name: menuData[item.key]?.name || 'Unknown Item',
            size: item.size,
            basePrice: menuData[item.key]?.prices?.[item.size] || 0,
            toppings: item.toppings || [],
            toppingsPrice: (item.toppings?.length || 0) * toppingPrice,
            totalPrice: (menuData[item.key]?.prices?.[item.size] || 0) + ((item.toppings?.length || 0) * toppingPrice)
        }));

        const orderTotal = calculateOrderTotal();
        const finalTotal = calculateFinalTotal(orderTotal);

        return {
            customer: {
                name: customerName,
                phone: customerPhone,
                email: generateCustomerEmail(customerName, customerPhone),
                pickupLocation: pickupSpot
            },
            items: orderItems,
            pricing: {
                subtotal: orderTotal,
                giftDiscount: currentGiftInfo ? (orderTotal - finalTotal) : 0,
                finalTotal: finalTotal,
                giftApplied: !!currentGiftInfo
            },
            gift: currentGiftInfo ? {
                id: currentGiftInfo.id,
                limit: currentGiftInfo.limit,
                type: currentGiftInfo.limit === 'unlimited' ? 'unlimited' : 'limited'
            } : null,
            orderNumber: generateOrderNumber(),
            timestamp: new Date().toISOString()
        };
    }

    // Generate customer email from name and phone
    function generateCustomerEmail(name, phone) {
        const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
        const cleanPhone = phone.replace(/\D/g, '').slice(-4);
        return `${cleanName}.${cleanPhone}@customer.pautacos.com`;
    }

    // Generate unique order number
    function generateOrderNumber() {
        const timestamp = Date.now().toString();
        const random = Math.random().toString(36).substr(2, 4).toUpperCase();
        return `PAU${timestamp.slice(-6)}${random}`;
    }

    // Process payment with Paystack
    function processPaystackPayment(orderDetails) {
        if (!paystackLoaded) {
            console.error('Paystack not loaded');
            showPaymentFallback(orderDetails);
            return;
        }

        const handler = PaystackPop.setup({
            key: CONFIG.PAYSTACK_PUBLIC_KEY,
            email: orderDetails.customer.email,
            amount: orderDetails.pricing.finalTotal * 100, // Convert to kobo
            currency: 'NGN',
            ref: orderDetails.orderNumber,
            metadata: {
                custom_fields: [
                    {
                        display_name: "Order Details",
                        variable_name: "order_details",
                        value: JSON.stringify({
                            items: orderDetails.items.map(item => `${item.name} (${item.size})`),
                            pickup: orderDetails.customer.pickupLocation,
                            gift: orderDetails.gift
                        })
                    }
                ]
            },
            callback: function(response) {
                handlePaymentSuccess(response, orderDetails);
            },
            onClose: function() {
                console.log('Payment window closed');
                // Re-enable buy button
                const buyButton = document.getElementById('buy-now-button');
                if (buyButton) {
                    buyButton.disabled = false;
                    buyButton.textContent = buyButton.dataset.originalText || 'Buy Now';
                }
            }
        });
        
        handler.openIframe();
    }

    // Handle successful payment
    function handlePaymentSuccess(response, orderDetails) {
        console.log('Payment successful:', response);
        
        // Consume gift link if applied
        if (orderDetails.gift && orderDetails.gift.id) {
            consumeGiftLink(orderDetails.gift.id);
            currentGiftInfo = null;
            sessionStorage.removeItem('applied-gift');
        }
        
        // Clear cart and form
        clearOrderData();
        
        // Show success message
        showPaymentSuccess(response, orderDetails);
        
        // Save order to localStorage for receipt
        saveOrderToHistory(response, orderDetails);
        
        // Close cart modal
        const cartModal = document.getElementById('cart-modal');
        if (cartModal) {
            cartModal.classList.remove('active');
            setTimeout(() => {
                cartModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }, 300);
        }
    }

    // Handle unlimited gift orders (requires approval)
    async function processUnlimitedGiftOrder(orderDetails) {
        try {
            console.log('Processing unlimited gift order:', orderDetails);
            
            // Simulate SMS approval
            const approved = await simulateSMSApproval(
                orderDetails.pricing.subtotal, 
                orderDetails.gift.id
            );
            
            if (approved) {
                // Process as successful order without payment
                const mockResponse = {
                    reference: `GIFT_${orderDetails.orderNumber}`,
                    status: 'success',
                    transaction: orderDetails.orderNumber,
                    message: 'Unlimited gift order approved'
                };
                
                handlePaymentSuccess(mockResponse, orderDetails);
            } else {
                // Approval denied
                alert('Order approval was denied. Please try again or contact support.');
                
                // Re-enable buy button
                const buyButton = document.getElementById('buy-now-button');
                if (buyButton) {
                    buyButton.disabled = false;
                    buyButton.textContent = buyButton.dataset.originalText || 'Buy Now';
                }
            }
        } catch (error) {
            console.error('Error processing unlimited gift order:', error);
            alert('There was an error processing your order. Please try again.');
            
            // Re-enable buy button
            const buyButton = document.getElementById('buy-now-button');
            if (buyButton) {
                buyButton.disabled = false;
                buyButton.textContent = buyButton.dataset.originalText || 'Buy Now';
            }
        }
    }

    // Show payment fallback for when Paystack is not available
    function showPaymentFallback(orderDetails) {
        const fallbackModal = createFallbackModal(orderDetails);
        document.body.appendChild(fallbackModal);
        fallbackModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }

    // Create fallback payment modal
    function createFallbackModal(orderDetails) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
                <h2 class="text-2xl font-bold mb-4 text-center">Complete Your Order</h2>
                <div class="mb-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-2">Order Number: <strong>${orderDetails.orderNumber}</strong></p>
                    <p class="text-gray-600 dark:text-gray-300 mb-2">Total: <strong>₦${orderDetails.pricing.finalTotal.toLocaleString()}</strong></p>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Customer: <strong>${orderDetails.customer.name}</strong></p>
                </div>
                <div class="space-y-3">
                    <button onclick="handleFallbackPayment('transfer', '${orderDetails.orderNumber}')" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                        Pay via Bank Transfer
                    </button>
                    <button onclick="handleFallbackPayment('ussd', '${orderDetails.orderNumber}')" class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                        Pay via USSD
                    </button>
                    <button onclick="handleFallbackPayment('pos', '${orderDetails.orderNumber}')" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                        Pay on Pickup (POS)
                    </button>
                </div>
                <button onclick="closeFallbackModal()" class="w-full mt-4 text-gray-500 hover:text-gray-700 py-2">
                    Cancel
                </button>
            </div>
        `;
        
        // Store order details for fallback payment
        modal.dataset.orderDetails = JSON.stringify(orderDetails);
        
        return modal;
    }

    // Make fallback functions global
    window.handleFallbackPayment = function(method, orderNumber) {
        const modal = document.querySelector('.fixed.inset-0');
        const orderDetails = JSON.parse(modal.dataset.orderDetails);
        
        // Create mock response for fallback payment
        const mockResponse = {
            reference: `${method.toUpperCase()}_${orderNumber}`,
            status: 'pending',
            transaction: orderNumber,
            message: `Payment via ${method} initiated`,
            paymentMethod: method
        };
        
        // Show appropriate instructions based on method
        switch(method) {
            case 'transfer':
                showTransferInstructions(orderDetails);
                break;
            case 'ussd':
                showUSSDInstructions(orderDetails);
                break;
            case 'pos':
                showPOSInstructions(orderDetails);
                break;
        }
        
        // Close fallback modal
        closeFallbackModal();
        
        // Handle as successful order
        handlePaymentSuccess(mockResponse, orderDetails);
    };

    window.closeFallbackModal = function() {
        const modal = document.querySelector('.fixed.inset-0');
        if (modal) {
            modal.remove();
            document.body.classList.remove('modal-open');
        }
        
        // Re-enable buy button
        const buyButton = document.getElementById('buy-now-button');
        if (buyButton) {
            buyButton.disabled = false;
            buyButton.textContent = buyButton.dataset.originalText || 'Buy Now';
        }
    };

    // Show transfer instructions
    function showTransferInstructions(orderDetails) {
        alert(`Bank Transfer Instructions:\n\nAccount: Pautacos Ltd\nBank: Access Bank\nAccount Number: 1234567890\nAmount: ₦${orderDetails.pricing.finalTotal.toLocaleString()}\nReference: ${orderDetails.orderNumber}\n\nPlease send proof of payment to our WhatsApp: +234 123 456 7890`);
    }

    // Show USSD instructions
    function showUSSDInstructions(orderDetails) {
        alert(`USSD Payment Instructions:\n\nDial *737*1*${orderDetails.pricing.finalTotal}*1234567890# on your phone\n\nOr use your bank's USSD code to transfer ₦${orderDetails.pricing.finalTotal.toLocaleString()} to:\nAccount: 1234567890 (Access Bank)\nReference: ${orderDetails.orderNumber}`);
    }

    // Show POS instructions
    function showPOSInstructions(orderDetails) {
        alert(`Pay on Pickup Instructions:\n\nBring your card for POS payment when you arrive for pickup.\n\nOrder Number: ${orderDetails.orderNumber}\nAmount: ₦${orderDetails.pricing.finalTotal.toLocaleString()}\nPickup Location: ${orderDetails.customer.pickupLocation}\n\nShow this order number to our staff.`);
    }

    // Show payment success message
    function showPaymentSuccess(response, orderDetails) {
        const isGiftOrder = orderDetails.gift && orderDetails.pricing.finalTotal === 0;
        const message = isGiftOrder ? 
            `Order confirmed with gift! 🎁\n\nOrder Number: ${orderDetails.orderNumber}\nPickup Location: ${orderDetails.customer.pickupLocation}\n\nYou'll receive a confirmation shortly.` :
            `Payment successful! 🎉\n\nOrder Number: ${orderDetails.orderNumber}\nAmount Paid: ₦${orderDetails.pricing.finalTotal.toLocaleString()}\nPickup Location: ${orderDetails.customer.pickupLocation}\n\nYou'll receive a confirmation shortly.`;
        
        alert(message);
    }

    // Clear order data after successful payment
    function clearOrderData() {
        // Clear cart
        cart.length = 0;
        localStorage.removeItem('pautacos-cart');
        
        // Clear gift info
        currentGiftInfo = null;
        updateGiftDisplay();
        
        // Clear form
        const nameField = document.getElementById('customer-name');
        const phoneField = document.getElementById('customer-phone');
        const pickupField = document.getElementById('pickup-spot');
        
        if (nameField) nameField.value = '';
        if (phoneField) phoneField.value = '';
        if (pickupField) pickupField.value = '';
        
        // Update cart display
        updateCart();
        
        // Hide buy button
        const buyButton = document.getElementById('buy-now-button');
        if (buyButton) {
            buyButton.classList.add('hidden');
            buyButton.disabled = false;
        }
        
        // Reset form steps
        resetFormSteps();
    }

    // Reset form steps to initial state
    function resetFormSteps() {
        const nameStep = document.getElementById('name-step');
        const phoneStep = document.getElementById('phone-step');
        const pickupStep = document.getElementById('pickup-step');
        
        if (nameStep) {
            nameStep.classList.remove('completed', 'visible');
            nameStep.classList.add('active');
        }
        if (phoneStep) {
            phoneStep.classList.remove('completed', 'active', 'visible');
        }
        if (pickupStep) {
            pickupStep.classList.remove('completed', 'active', 'visible');
        }
        
        // Reset form setup flag
        window.formSetupComplete = false;
    }

    // Save order to localStorage for receipt history
    function saveOrderToHistory(response, orderDetails) {
        try {
            const orderHistory = JSON.parse(localStorage.getItem('pautacos-order-history') || '[]');
            
            const orderRecord = {
                ...orderDetails,
                payment: {
                    reference: response.reference,
                    status: response.status,
                    method: response.paymentMethod || 'paystack',
                    paidAt: new Date().toISOString()
                }
            };
            
            orderHistory.unshift(orderRecord); // Add to beginning
            
            // Keep only last 20 orders
            if (orderHistory.length > 20) {
                orderHistory.splice(20);
            }
            
            localStorage.setItem('pautacos-order-history', JSON.stringify(orderHistory));
        } catch (error) {
            console.error('Error saving order to history:', error);
        }
    }

    // Validate order before payment
    function validateOrder() {
        const nameField = document.getElementById('customer-name');
        const phoneField = document.getElementById('customer-phone');
        const pickupField = document.getElementById('pickup-spot');
        
        if (!nameField || !nameField.value.trim()) {
            alert('Please enter your name');
            if (nameField) nameField.focus();
            return false;
        }
        
        if (!phoneField || !phoneField.value.trim()) {
            alert('Please enter your phone number');
            if (phoneField) phoneField.focus();
            return false;
        }
        
        if (!pickupField || !pickupField.value.trim()) {
            alert('Please enter your pickup location');
            if (pickupField) pickupField.focus();
            return false;
        }
        
        if (!cart || cart.length === 0) {
            alert('Your cart is empty');
            return false;
        }
        
        // Validate phone number format
        const phoneValue = phoneField.value.replace(/\D/g, '');
        if (phoneValue.length < 10) {
            alert('Please enter a valid phone number');
            phoneField.focus();
            return false;
        }
        
        return true;
    }

    // Main buy now handler
    function handleBuyNow() {
        if (!validateOrder()) {
            return;
        }
        
        const buyButton = document.getElementById('buy-now-button');
        if (!buyButton) return;
        
        // Disable button and show loading
        buyButton.disabled = true;
        buyButton.dataset.originalText = buyButton.textContent;
        buyButton.textContent = 'Processing...';
        
        try {
            const orderDetails = formatOrderDetails();
            console.log('Processing order:', orderDetails);
            
            // Save permanent delivery info before payment
            savePermanentDeliveryInfo();
            
            // Handle different payment scenarios
            if (orderDetails.pricing.finalTotal === 0) {
                if (orderDetails.gift && orderDetails.gift.type === 'unlimited') {
                    // Unlimited gift requires approval
                    processUnlimitedGiftOrder(orderDetails);
                } else {
                    // Regular gift covers full amount
                    const mockResponse = {
                        reference: `GIFT_${orderDetails.orderNumber}`,
                        status: 'success',
                        transaction: orderDetails.orderNumber,
                        message: 'Gift order processed'
                    };
                    handlePaymentSuccess(mockResponse, orderDetails);
                }
            } else {
                // Regular payment required
                if (paystackLoaded) {
                    processPaystackPayment(orderDetails);
                } else {
                    showPaymentFallback(orderDetails);
                }
            }
        } catch (error) {
            console.error('Error processing order:', error);
            alert('There was an error processing your order. Please try again.');
            
            // Re-enable button
            buyButton.disabled = false;
            buyButton.textContent = buyButton.dataset.originalText || 'Buy Now';
        }
    }

    // Set up buy now button listener
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'buy-now-button') {
            e.preventDefault();
            handleBuyNow();
        }
    });

    // Test payment function for development
    window.testPayment = function() {
        if (typeof cart === 'undefined' || cart.length === 0) {
            console.log('Cart is empty - adding test item');
            if (typeof menuData !== 'undefined' && menuData.taco) {
                cart.push({
                    id: Date.now(),
                    key: 'taco',
                    name: menuData.taco.name,
                    size: 'big',
                    toppings: ['Smoked Suya', 'Yaji Spice Dust']
                });
                updateCart();
            }
        }
        
        // Fill test customer info
        const nameField = document.getElementById('customer-name');
        const phoneField = document.getElementById('customer-phone');
        const pickupField = document.getElementById('pickup-spot');
        
        if (nameField) nameField.value = 'Test Customer';
        if (phoneField) phoneField.value = '+234 123 456 7890';
        if (pickupField) pickupField.value = 'Test Location, Lagos';
        
        checkFormCompletion();
        
        console.log('Test data filled. Click Buy Now to test payment.');
    };

    console.log('Payment system initialized');
}