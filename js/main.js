document.addEventListener('DOMContentLoaded', () => {
          // Emoji mapping for toppings
            const toppingEmojis = {
    // Original Toppings
    'Caramelized Onions': '🧅',
    'Smoked Suya': '🥩',
    'Yaji Spice Dust': '🌶️',
    'Kilishi Jerky': '🥓',
    'Crispy Fried Egg': '🍳',
    'Hard-Boiled Egg': '🥚',
    'Sweet Plantain': '🍌',
    'Smoked Sardine': '🐟',
    'Grilled Shrimp': '🦐',
    'Creamy Mayonnaise': '🥄',
    'Classic Ketchup': '🍅',
    'Smoky BBQ Sauce': '🔥',
    'Grilled Steak': '🥩',
    'Suya Chicken': '🐔',
    'Spiced Beef': '🥩',
    'Akara Fritter': '🫘',
    'Roasted Corn': '🌽',
    'Crisp Lettuce': '🥬',
    'Fresh Spinach': '🥬',
    'Shredded Cabbage': '🥬',
    'Julienned Carrot': '🥕',
    'More Meat': '🥩',
    
    // Sweet Toppings
    'White Chocolate Curls': '🤍',
    'Dark Chocolate Shavings': '🍫',
    'Milk Chocolate Chunks': '🍫',
    'Snickers Pieces': '🍫',
    "M&M's": '🍬',
    'Smarties': '🍬',
    'Crushed Oreos': '🍪',
    'Fresh Banana Blend': '🍌',
    'Spiced Apple Blend': '🍎',
    'Maple Syrup': '🍁',
    'Honey': '🍯',
    'Chocolate Sauce': '🍫',
    'Fresh Berries': '🫐',
    'Whipped Cream': '🥛',
    
    // Proteins & Meat
    'Cow Meat': '🐄',
    'Goat Meat': '🐐',
    'Turkey': '🦃',
    'Grilled Chicken': '🐔',
    'Fried Chicken': '🍗',
    'Asun': '🐐',
    'Bacon': '🥓',
    'Snail': '🐌',
    'Crab': '🦀',
    'Lobster': '🦞',
    'Peri Winkle': '🐚',
    'Pomo': '🥩',
    'Suya': '🍢',
    'Corned Beef': '🥩',
    
    // Fish & Seafood
    'Catfish': '🐟',
    'Croaker Fish': '🐟',
    'Tilapia Fish': '🐟',
    'Grilled Fish': '🐟',
    'Fried Fish': '🐟',
    'Fried Sardine': '🐟',
    'Fried Prawns': '🦐',
    'Stockfish': '🐟',
    'Dried Fish': '🐟',
    
    // Eggs & Dairy
    'Boiled Egg': '🥚',
    'Fried Egg': '🍳',
    'Scrambled Egg': '🥚',
    
    // Plantain & Starchy Vegetables
    'Fried Plantain': '🍌',
    'Boiled Plantain': '🍌',
    'Unripe Plantain': '🍌',
    'Plantain Chips': '🍌',
    'Boiled Yam': '🍠',
    'Fried Yam': '🍠',
    'Pounded Yam': '🍠',
    'Water Yam': '🍠',
    'Water Yam Fritters': '🍠',
    'Fried Potato': '🥔',
    'Sweet Potato': '🍠',
    
    // Rice & Grains
    'White Rice': '🍚',
    'Coconut Rice': '🥥',
    'Ofada Rice': '🍚',
    'Fried Rice': '🍚',
    'Jollof Rice': '🍚',
    'Jollof Coconut Rice': '🥥',
    'Pineapple Fried Rice': '🍍',
    'Pineapple Jollof Rice': '🍍',
    'Jollof Beans': '🫘',
    'Tuwo Shinkafa': '🍚',
    'Massa': '🍞',
    
    // Beans & Legumes
    'Boiled Beans': '🫘',
    'Baked Beans': '🫘',
    'Ewa Agoyin': '🫘',
    'Black Eyed Peas': '🫘',
    'Adalu': '🫘',
    
    // Nigerian Staples
    'Fufu': '🍞',
    'Pounded Yam': '🍠',
    'Semo': '🍞',
    'Amala': '🍞',
    'Eba': '🍞',
    'Starch': '🍚',
    'Agidi': '🍞',
    'Akpu': '🍞',
    'Bole': '🍌',
    'Ukodo': '🍲',
    
    // Soups & Stews
    'Egusi Soup': '🍲',
    'Okra Soup': '🍲',
    'Ewedu Soup': '🍲',
    'Gbegiri Soup': '🍲',
    'Afang Soup': '🍲',
    'Edikang Ikong': '🍲',
    'Bitterleaf Soup': '🍲',
    'Oha Soup': '🍲',
    'Ofe Oha': '🍲',
    'Ofe Owere': '🍲',
    'Ofe Owerri': '🍲',
    'Ofe Utazi': '🍲',
    'Ogbono Soup': '🍲',
    'White Soup': '🍲',
    'Pepper Soup': '🍲',
    'Fisherman Soup': '🍲',
    'Banga Soup': '🍲',
    'Atama Soup': '🍲',
    'Native Soup': '🍲',
    'Vegetable Soup': '🍲',
    'Eforiro': '🍲',
    'Stew': '🍲',
    'Ofada Stew': '🍲',
    'Banga Stew': '🍲',
    'Black Soup': '🍲',
    'Owo Soup': '🍲',
    'Ewedu Soup': '🍲',
    
    // Nigerian Specials
    'Abacha (African Salad)': '🥗',
    'Nkwobi': '🥩',
    'Ekpang Nkukwo': '🍲',
    'Ekuru': '🫘',
    'Okpa': '🫘',
    'Onunu': '🍲',
    'Akidi': '🌽',
    'Echere': '🥬',
    'Echicha': '🫘',
    'Kekefia': '🍲',
    'Fiofio': '🍲',
    
    // Vegetables & Greens
    'Ugwu Leaves': '🥬',
    'Waterleaf': '🥬',
    'Spinach': '🥬',
    'Bitter Leaf': '🥬',
    'Pumpkin Leaves': '🥬',
    'Garden Egg': '🍆',
    'Mushrooms': '🍄',
    'Okra': '🌶️',
    'Tomatoes': '🍅',
    'Bell Peppers': '🫑',
    
    // Spices & Seasonings
    'Suya Spice': '🌶️',
    'Pepper': '🌶️',
    'Ginger': '🫚',
    'Garlic': '🧄',
    'Crayfish': '🦐',
    'Locust Beans': '🫘',
    'Palm Oil': '🫒',
    'Groundnut Oil': '🥜',
    'Scotch Bonnet': '🌶️',
    
    // Nigerian Snacks & Sides
    'Chin Chin': '🍪',
    'Puff Puff': '🍩',
    'Akara': '🫘',
    'Buns': '🍞',
    'Donut': '🍩',
    'Roasted Corn': '🌽',
    'Tiger Nuts': '🥜',
    'Coconut': '🥥',
    'Groundnuts': '🥜',
    
    // Sauces & Condiments
    'Spicy Sauce': '🌶️',
    'Garden Egg Sauce': '🍆',
    'Egg Sauce': '🥚',
    'Tomato Stew': '🍅',
    'Palm Nut Sauce': '🥥',
    'Ketchup': '🍅',
    'Mayonnaise': '🥄',
    
    // Sausages & Processed Meats
    'Boiled Sausage': '🌭',
    'Fried Sausage': '🌭',
    'Grilled Sausage': '🌭',
    
    // Bread & Pastries
    'Agege Bread': '🍞',
    'Meat Pie': '🥧',
    'Fish Pie': '🥧',
    'Chicken Pie': '🥧',
    'Sausage Roll': '🌭',
    'Egg Roll': '🥚',
    'Scotch Roll': '🥚',
    'Fish Roll': '🐟',
    'Spring Rolls': '🌯',
    'Samosa': '🥟',
    
    // Pasta & Grains
    'Noodles': '🍜',
    'Spaghetti': '🍝',
    'Jollof Spaghetti': '🍝',
    'Meat Balls': '🍖',
    
    // Drinks & Beverages
    'Zobo': '🧃',
    'Tiger Nuts Juice': '🥤',
    'Kunu': '🥤',
    'Palm Wine': '🍷',
    'Fura da Nono': '🥛',
    'Pap': '🥛',
    
    // Smoothies
    'Apple Smoothie': '🍎',
    'Orange Smoothie': '🍊',
    'Pineapple Smoothie': '🍍',
    'Banana Smoothie': '🍌',
    'Grape Smoothie': '🍇',
    'Strawberry Smoothie': '🍓',
    'Tangerine Smoothie': '🍊',
    
    // International Items
    'Pizza': '🍕',
    'Cheese': '🧀',
    'Lettuce': '🥬',
    'Cabbage': '🥬',
    'Carrots': '🥕',
    'Cucumber': '🥒',
    'Avocado': '🥑',
    'Parfait': '🍨'
};



    // --- DOM ELEMENTS ---
    const body = document.body;
    const menuContainer = document.getElementById('menu-items');
    const exoticsContainer = document.getElementById('exotics-container');
    const locationsContainer = document.getElementById('locations-container');
    const orderModal = document.getElementById('order-modal');
    const cartModal = document.getElementById('cart-modal');
    const noteModal = document.getElementById('note-modal');
    const noteContent = document.getElementById('note-content');
    const searchModal = document.getElementById('search-modal');
    const giftModal = document.getElementById('gift-modal');
    const giftLinkModal = document.getElementById('gift-link-modal');
    const smsApprovalModal = document.getElementById('sms-approval-modal');
    const cartButton = document.getElementById('cart-button');
    const searchButton = document.getElementById('search-button');
    const giftButton = document.getElementById('gift-button');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const buyNowButton = document.getElementById('buy-now-button');
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('theme-toggle');

    // --- UTILITY FUNCTIONS ---
    function isTouchDevice() {
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
    }

    function checkFormCompletion() {
        const nameField = document.getElementById('customer-name');
        const phoneField = document.getElementById('customer-phone');
        const pickupField = document.getElementById('pickup-spot');
        const buyNowButton = document.getElementById('buy-now-button');
        const currencyText = document.getElementById('currency-text');
        
        const hasName = nameField && nameField.value.trim().length > 0;
        const hasPhone = phoneField && phoneField.value.trim().length > 0;
        const hasPickup = pickupField && pickupField.value.trim().length > 0;
        const hasItems = cart.length > 0;

        if (hasName && hasPhone && hasPickup && hasItems && buyNowButton) {
            buyNowButton.classList.remove('hidden');
            if (currencyText) currencyText.classList.remove('hidden');
            updateTotal();
            
            // Simple pulse animation
            setTimeout(() => {
                buyNowButton.classList.add('animate-pulse');
            }, 1000);
        } else {
            if (buyNowButton) buyNowButton.classList.add('hidden');
            if (currencyText) currencyText.classList.add('hidden');
        }
    }

    // --- MENU RENDERING ---
    let currentMenuPage = 0;
    const itemsPerPage = 6;
    let currentCategory = 'all';

    function renderMenu(showAll = false, category = 'all') {
        // Filter and sort menu items
        let filteredItems = Object.entries(menuData);
        
        if (category !== 'all') {
            filteredItems = filteredItems.filter(([, item]) => item.category === category);
        }
        
        const sortedItems = filteredItems.sort(([,a], [,b]) => (a.order || 999) - (b.order || 999));
        
        const itemsToShow = showAll ? sortedItems : sortedItems.slice(0, (currentMenuPage + 1) * itemsPerPage);
        
        menuContainer.innerHTML = '';
        
        itemsToShow.forEach(([key, item]) => {
            const card = document.createElement('div');
            card.className = 'menu-card rounded-3xl shadow-lg overflow-hidden';
            card.dataset.item = key;
            card.innerHTML = `
                <div class="aspect-2-3">
                   <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='https://placehold.co/1024x1536/1a1a1a/333333?text=Image+Coming+Soon';">
                </div>
                <div class="p-8 flex-grow flex flex-col">
                    <h3 class="text-2xl font-bold text-white text-center flex-grow flex items-center justify-center">${item.name}</h3>
                </div>
            `;
            menuContainer.appendChild(card);
        });
        
        // Add "Continue your Exploration" button if there are more items
        const totalItems = sortedItems.length;
        const itemsShown = (currentMenuPage + 1) * itemsPerPage;
        
        if (!showAll && itemsShown < totalItems) {
            const continueButton = document.createElement('div');
            continueButton.className = 'col-span-2 lg:col-span-3 text-center mt-8';
            continueButton.innerHTML = `
                <button id="continue-quest-btn" class="cta-button px-8 py-4 rounded-full font-bold text-lg">
                    Continue your Exploration
                </button>
            `;
            menuContainer.appendChild(continueButton);
        }
    }

    function renderExotics() {
        exoticsContainer.innerHTML = '';
        for (const key in exoticsData) {
            const item = exoticsData[key];
            const card = document.createElement('div');
            card.className = 'menu-card exotic-card rounded-3xl shadow-lg overflow-hidden';
            card.dataset.exoticKey = key;
            card.innerHTML = `
                <div class="aspect-2-3">
                   <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='https://placehold.co/1024x1536/1a1a1a/333333?text=Image+Coming+Soon';">
                </div>
                <div class="p-8">
                    <h3 class="text-2xl font-bold mb-2 text-white">${item.name}</h3>
                    <p class="text-gray-300">${item.description}</p>
                </div>
            `;
            exoticsContainer.appendChild(card);
        }
    }
    
    function renderLocations() {
        locationsContainer.innerHTML = '';
        for (const key in locationsData) {
            const item = locationsData[key];
            const card = document.createElement('div');
            card.className = 'menu-card location-card h-80 rounded-3xl shadow-lg overflow-hidden';
            card.style.backgroundImage = `url('${item.image}')`;
            card.dataset.locationKey = key;
            card.innerHTML = `
                <div class="p-8 h-full flex flex-col justify-end relative z-10">
                    <h3 class="text-3xl font-bold text-white text-center">${item.name}</h3>
                </div>
            `;
            locationsContainer.appendChild(card);
        }
    }

    // --- THEME MANAGEMENT ---
    function applyTheme() {
    const headerLogo = document.querySelector('header img');
    const footerLogo = document.querySelector('footer img');
    const signatureImages = document.querySelectorAll('.signature-image');
    
    if (isSiteDarkMode) {
        body.classList.remove('light-mode');
        
        // Set dark mode images
        if (headerLogo) headerLogo.src = 'assets/logos/logo.png';
        if (footerLogo) footerLogo.src = 'assets/logos/logo.png';
        signatureImages.forEach(img => img.src = 'assets/logos/whitesig.png');

    } else {
        body.classList.add('light-mode');
        
        // Set light mode images
        if (headerLogo) headerLogo.src = 'assets/logos/darklogo.png';
        if (footerLogo) footerLogo.src = 'assets/logos/darklogo.png';
        signatureImages.forEach(img => img.src = 'assets/logos/signature.png');
    }
}

    function applyNoteTheme() {
        if (isSiteDarkMode) {
            noteContent.classList.add('dark');
            noteContent.classList.remove('light');
        } else {
            noteContent.classList.remove('dark');
            noteContent.classList.add('light');
        }
    }

    // --- SEARCH FUNCTIONALITY ---
    function performSearch(query) {
        const results = [];
        const addedItems = new Set();
        const searchTerm = query.toLowerCase().trim();
        
        if (!searchTerm) return results;

        // Helper function for more precise word matching
        function containsWord(text, term) {
            const words = text.toLowerCase().split(/\s+/);
            return words.some(word => word.includes(term));
        }

        // Search menu items
        Object.keys(menuData).forEach(key => {
            const item = menuData[key];
            let hasItemMatch = false;
            
            // Check name (more precise matching)
            if (containsWord(item.name, searchTerm)) {
                hasItemMatch = true;
            }
            // Check aliases (more precise matching)
            else if (item.aliases && item.aliases.some(alias => containsWord(alias, searchTerm))) {
                hasItemMatch = true;
            }
            
            // Add item result only once if it's a direct match
            if (hasItemMatch && !addedItems.has(key)) {
                results.push({
                    type: 'item',
                    key: key,
                    name: item.name,
                    image: item.image,
                    match: 'Direct match'
                });
                addedItems.add(key);
            }
            
            // Search toppings only if no direct item match and only for exact topping word matches
            if (!hasItemMatch && !addedItems.has(key)) {
                const exactToppingMatches = item.toppings.filter(topping => {
                    // Only match if the search term appears as a complete word in the topping
                    const toppingWords = topping.toLowerCase().split(/\s+/);
                    return toppingWords.some(word => word === searchTerm || word.includes(searchTerm));
                });
                
                if (exactToppingMatches.length > 0) {
                    results.push({
                        type: 'topping',
                        key: key,
                        name: item.name,
                        image: item.image,
                        topping: exactToppingMatches[0],
                        match: `Available as addition: ${exactToppingMatches[0]}`
                    });
                    addedItems.add(key);
                }
            }
        });

        return results;
    }

    function displaySearchResults(results) {
        const searchResults = document.getElementById('search-results');
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-gray-400 text-center py-8">No results found. Try searching for menu items or toppings.</p>';
            // Keep suggestions hidden even when no results found
            document.getElementById('suggested-items-section').classList.add('hidden');
            return;
        }

        const resultsHtml = results.map(result => `
            <div class="search-result-item p-4 border border-gray-600 rounded-xl flex items-center space-x-4" data-item="${result.key}" data-type="${result.type}" ${result.topping ? `data-topping="${result.topping}"` : ''}>
                <div class="w-16 flex-shrink-0">
                    <img src="${result.image}" alt="${result.name}" class="w-full h-auto rounded-lg" onerror="this.onerror=null;this.src='https://placehold.co/64x96/1a1a1a/333333?text=?';">
                </div>
                <div class="flex-grow">
                    <h4 class="font-bold text-lg">${result.name}</h4>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHtml;
        
        // Keep suggestions hidden when there are search results
        document.getElementById('suggested-items-section').classList.add('hidden');
    }

    // Search storage and suggestions
    let recentSearches = JSON.parse(localStorage.getItem('pautacos-recent-searches') || '[]');
    
    function saveRecentSearch(query, itemKey = null) {
        if (query.trim().length < 2) return;
        
        const searchEntry = {
            query: query.trim(),
            itemKey: itemKey,
            timestamp: Date.now()
        };
        
        // Remove if already exists
        recentSearches = recentSearches.filter(search => 
            (typeof search === 'string' ? search.toLowerCase() : search.query.toLowerCase()) !== query.toLowerCase()
        );
        
        // Add to beginning
        recentSearches.unshift(searchEntry);
        
        // Keep only last 6
        recentSearches = recentSearches.slice(0, 6);
        
        localStorage.setItem('pautacos-recent-searches', JSON.stringify(recentSearches));
        displayRecentSearches();
    }
    
    function displayRecentSearches() {
        const container = document.getElementById('recently-searched-items');
        const section = document.getElementById('recently-searched-section');
        
        if (recentSearches.length === 0) {
            section.classList.add('hidden');
            return;
        }
        
        section.classList.remove('hidden');
        container.innerHTML = recentSearches.map(search => {
            // Handle old format (string) and new format (object)
            const query = typeof search === 'string' ? search : search.query;
            const itemKey = typeof search === 'object' ? search.itemKey : null;
            
            if (itemKey && menuData[itemKey]) {
                const item = menuData[itemKey];
                return `
                    <div class="recently-searched-item flex items-center space-x-3 bg-[#2a2a2a] rounded-2xl p-3 cursor-pointer hover:bg-[#3a3a3a] transition-colors" data-search="${query}" data-item="${itemKey}">
                        <div class="w-12 flex-shrink-0 rounded-xl overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/48x72/1a1a1a/333333?text=?';">
                        </div>
                        <div class="flex-grow min-w-0">
                            <p class="text-white font-medium text-sm truncate">${item.name}</p>
                            <p class="text-gray-400 text-xs truncate">Searched: "${query}"</p>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="recently-searched-item flex items-center space-x-3 bg-[#2a2a2a] rounded-2xl p-3 cursor-pointer hover:bg-[#3a3a3a] transition-colors" data-search="${query}">
                        <div class="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                        <div class="flex-grow min-w-0">
                            <p class="text-white font-medium text-sm truncate">"${query}"</p>
                            <p class="text-gray-400 text-xs">Search term</p>
                        </div>
                    </div>
                `;
            }
        }).join('');
    }
    
    function displaySuggestedItems(excludeKeys = []) {
        const container = document.getElementById('suggested-items');
        const allSuggestedKeys = ['taco', 'burger', 'jollof', 'boba', 'icecream', 'pizza', 'burrito', 'spaghetti', 'salad', 'shawarma', 'sandwich', 'friedrice'];
        
        // Filter out already shown items and recently searched items
        const recentlySearchedKeys = recentSearches
            .map(search => typeof search === 'object' ? search.itemKey : null)
            .filter(key => key !== null);
        
        const allExcludeKeys = [...new Set([...excludeKeys, ...recentlySearchedKeys])];
        const availableKeys = allSuggestedKeys.filter(key => !allExcludeKeys.includes(key));
        
        // Get unique items (maximum 3 items)
        const suggestedKeys = availableKeys.slice(0, 3);
        
        container.innerHTML = suggestedKeys.map(key => {
            const item = menuData[key];
            if (!item) return '';
            
            return `
                <div class="suggested-item p-4 border border-gray-600 rounded-xl flex items-center space-x-4 cursor-pointer hover:bg-[#2a2a2a] transition-colors" data-item="${key}">
                    <div class="w-16 flex-shrink-0">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-auto rounded-lg" onerror="this.onerror=null;this.src='https://placehold.co/64x96/1a1a1a/333333?text=?';">
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-bold text-lg">${item.name}</h4>
                    </div>
                </div>
            `;
        }).filter(html => html !== '').join('');
    }

    // --- GIFT LINK FUNCTIONALITY ---
    function generateGiftId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    function createGiftLink(limit, uses, hours) {
        const giftId = generateGiftId();
        const expiresAt = Date.now() + (hours * 60 * 60 * 1000); // hours from now
        
        const giftLink = {
            id: giftId,
            limit: limit,
            usesLeft: parseInt(uses),
            originalUses: parseInt(uses),
            expiresAt: expiresAt,
            createdAt: Date.now()
        };
        
        giftLinks.push(giftLink);
        localStorage.setItem('pautacos-gift-links', JSON.stringify(giftLinks));
        
        return giftLink;
    }

    function validateGiftLink(giftId) {
        const giftLink = giftLinks.find(link => link.id === giftId);
        
        if (!giftLink) return { valid: false, reason: 'Gift link not found' };
        if (Date.now() > giftLink.expiresAt) return { valid: false, reason: 'Gift link has expired' };
        if (giftLink.usesLeft <= 0) return { valid: false, reason: 'Gift link has been fully used' };
        
        return { valid: true, giftLink: giftLink };
    }

    function applyGiftToCart(giftLink) {
        currentGiftInfo = giftLink;
        updateGiftDisplay();
        updateTotal();
        
        // Show success message
        setTimeout(() => {
            alert(`Gift applied! ${giftLink.limit === 'unlimited' ? 'Unlimited' : '₦' + parseInt(giftLink.limit).toLocaleString()} gift with ${giftLink.usesLeft} uses remaining.`);
        }, 500);
        
        console.log('Gift applied:', giftLink);
    }

    function updateGiftDisplay() {
        const giftContainer = document.getElementById('gift-info-container');
        const giftText = document.getElementById('gift-info-text');
        
        if (currentGiftInfo) {
            giftContainer.classList.remove('hidden');
            const limitText = currentGiftInfo.limit === 'unlimited' ? '♾️ Unlimited' : `₦${parseInt(currentGiftInfo.limit).toLocaleString()}`;
            giftText.textContent = `Chim's ${limitText} gift (${currentGiftInfo.usesLeft} uses left)`;
        } else {
            giftContainer.classList.add('hidden');
        }
    }

    function consumeGiftLink(giftId) {
        const giftIndex = giftLinks.findIndex(link => link.id === giftId);
        if (giftIndex !== -1) {
            giftLinks[giftIndex].usesLeft--;
            
            // Remove gift link if no uses left
            if (giftLinks[giftIndex].usesLeft <= 0) {
                giftLinks.splice(giftIndex, 1);
                console.log('Gift link removed - no uses left');
            }
            
            localStorage.setItem('pautacos-gift-links', JSON.stringify(giftLinks));
            console.log('Gift links updated:', giftLinks);
        }
    }

    function simulateSMSApproval(orderTotal, giftId) {
        const modal = document.getElementById('sms-approval-modal');
        const detailsDiv = document.getElementById('sms-approval-details');
        
        detailsDiv.innerHTML = `
            <p class="text-white mb-2"><strong>Order Total:</strong> ₦${orderTotal.toLocaleString()}</p>
            <p class="text-white mb-2"><strong>Gift ID:</strong> ${giftId}</p>
            <p class="text-gray-300 text-sm">Approve this unlimited gift order?</p>
        `;
        
        modal.style.display = 'flex';
        body.classList.add('modal-open');
        
        return new Promise((resolve) => {
            const approveBtn = document.getElementById('approve-unlimited-order');
            const denyBtn = document.getElementById('deny-unlimited-order');
            
            const handleApprove = () => {
                cleanup();
                resolve(true);
            };
            
            const handleDeny = () => {
                cleanup();
                resolve(false);
            };
            
            const cleanup = () => {
                approveBtn.removeEventListener('click', handleApprove);
                denyBtn.removeEventListener('click', handleDeny);
                closeModal(modal);
            };
            
            approveBtn.addEventListener('click', handleApprove);
            denyBtn.addEventListener('click', handleDeny);
        });
    }

    // --- MODAL FUNCTIONS ---
    function openNoteModal(itemKey, type = 'menu') {
        const item = type === 'menu' ? menuData[itemKey] : (type === 'exotic' ? exoticsData[itemKey] : locationsData[itemKey]);
        let buttonHtml = '';

            // Determine which signature to use based on the theme
            const signatureSrc = isSiteDarkMode ? 'assets/logos/whitesig.png' : 'assets/logos/signature.png';
            const signatureHtml = `<img src="${signatureSrc}" class="h-5 ml-auto signature-image" alt="Signature">`;        if (type === 'menu') {
            buttonHtml = `<button id="experience-now-button" class="blur-button mt-6" data-item="${itemKey}">Experience at Home</button>`;
        } else if (type === 'exotic') {
            buttonHtml = `<a href="#newsletter" id="update-letter-button" class="blur-button mt-6">${isTouchDevice() ? 'Tap' : 'Click'} to Intercept Future Updates</a>`;
        }

        noteContent.innerHTML = `
            <div class="absolute top-2 right-4 flex items-center space-x-2">
                <button id="close-note-modal" class="text-gray-500 hover:text-black text-3xl">&times;</button>
            </div>
            <div class="font-kalam text-lg leading-relaxed mt-8">${item.letter.replace('{{SIGNATURE}}', signatureHtml)}</div>
            <div class="text-center">${buttonHtml}</div>
        `;
        noteModal.style.display = 'flex';
        applyNoteTheme();
        body.classList.add('modal-open');
    }

    function openOrderModal(itemKey, searchTopping = null) {
        const item = menuData[itemKey];
        const modalContent = orderModal.querySelector('.modal-content');
        
        let toppingsHtml = item.toppings.length > 0 ? item.toppings.map(topping => {
            const isPreselected = searchTopping && topping === searchTopping;
            const emoji = toppingEmojis[topping] || '🍽️';
            return `
                <label class="flex items-center space-x-3 bg-[#2a2a2a] p-4 rounded-xl cursor-pointer hover:bg-[#3a3a3a] transition-colors border border-gray-700 hover:border-red-500">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500" value="${topping}" ${isPreselected ? 'checked' : ''}>
                    <span class="text-2xl">${emoji}</span>
                    <span class="text-gray-300 flex-grow">${topping}</span>
                </label>
            `;
        }).join('') : '<p class="text-gray-400 col-span-2 md:col-span-3">This item is perfect as it is.</p>';

        modalContent.innerHTML = `
            <button id="close-order-modal" class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl">&times;</button>
            <h2 class="font-playfair text-4xl text-white mb-6">Customize ${item.name}</h2>
            
            <div class="mb-6">
                <h3 class="font-bold text-xl mb-3 text-brand-red">Select Size</h3>
                <div class="flex flex-col md:flex-row gap-4">
                    <label class="flex-1 cursor-pointer">
                        <input type="radio" name="size" value="big" class="peer sr-only" checked />
                        <span class="block text-center p-4 rounded-3xl border border-gray-600 hover:border-red-500 peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600">Big</span>
                    </label>
                    <label class="flex-1 cursor-pointer">
                        <input type="radio" name="size" value="bigger" class="peer sr-only" />
                        <span class="block text-center p-4 rounded-3xl border border-gray-600 hover:border-red-500 peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600">Bigger</span>
                    </label>
                    <label class="flex-1 cursor-pointer">
                        <input type="radio" name="size" value="biggest" class="peer sr-only" />
                        <span class="block text-center p-4 rounded-3xl border border-gray-600 hover:border-red-500 peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600">Biggest</span>
                    </label>
                </div>
            </div>

            <div>
                <h3 class="font-bold text-xl mb-3 text-brand-red">Select Additions</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${toppingsHtml}</div>
            </div>

            <button id="add-to-cart-button" class="cta-button w-full font-bold py-4 mt-8 rounded-full text-lg" data-item="${itemKey}">${typeof window.editingCartIndex !== 'undefined' ? 'Update Box' : 'Add to Box'}</button>
        `;
        orderModal.style.display = 'flex';
        
        // Scroll to top of modal
        modalContent.scrollTop = 0;
        
        body.classList.add('modal-open');
    }

    // --- CART FUNCTIONALITY ---
    function addToCart(itemKey) {
        const size = document.querySelector('input[name="size"]:checked').value;
        const selectedToppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
        
        const newItem = {
            id: Date.now(),
            key: itemKey,
            name: menuData[itemKey].name,
            size: size,
            toppings: selectedToppings
        };
        
        const wasEditing = typeof window.editingCartIndex !== 'undefined';
        
        // Check if we're editing an existing item
        if (wasEditing) {
            cart[window.editingCartIndex] = newItem;
            delete window.editingCartIndex;
        } else {
            cart.push(newItem);
        }

        updateCart();
        closeModal(orderModal);
        
        // If we were editing, reopen the cart
        if (wasEditing) {
            setTimeout(() => {
                cartModal.style.display = 'flex';
                setTimeout(() => cartModal.classList.add('active'), 10);
                renderCartItems();
                loadPermanentDeliveryInfo();
                setupStepByStepForm();
                body.classList.add('modal-open');
            }, 300);
        }
    }

    function updateCart() {
        cartCount.textContent = cart.length;
        renderCartItems();
        saveDeliveryInfo();
        saveCart();
    }

    function renderCartItems() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="text-gray-400 text-center py-8">Your cart is empty.</p>`;
            const buyNowButton = document.getElementById('buy-now-button');
            if (buyNowButton) {
                buyNowButton.textContent = 'Your cart is empty';
                buyNowButton.classList.add('hidden');
            }
            return;
        }

        const cartItemsHtml = cart.map((item, index) => `
            <div class="cart-item flex justify-between items-start py-4 border-b border-gray-700" data-index="${index}">
                <div class="flex-grow cursor-pointer">
                    <h4 class="font-bold text-lg text-white">${item.name} <span class="text-sm capitalize text-gray-400">(${item.size})</span></h4>
                    <p class="text-gray-500 text-sm">${item.toppings.join(', ') || 'No extra additions'}</p>
                    <p class="text-xs text-gray-600 mt-1">Tap to edit</p>
                </div>
                <button class="text-gray-500 hover:text-red-500 remove-item-button" data-index="${index}">&times;</button>
            </div>
        `).join('');
        
        const clearButtonHtml = `
            <div class="pt-4 border-t border-gray-600 mt-4">
                <button id="clear-cart-button" class="w-full font-medium py-2 rounded-3xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm">Clear All Items</button>
            </div>
        `;
        
        cartItemsContainer.innerHTML = cartItemsHtml + clearButtonHtml;
        
        checkFormCompletion();
    }

    function clearCart() {
        cart = [];
        localStorage.removeItem('pautacos-cart');
        currentGiftInfo = null;
        updateCart();
        updateGiftDisplay();
        checkFormCompletion();
        
        // Force re-render of cart items
        renderCartItems();
        
        // Reset cart count
        cartCount.textContent = '0';
    }

    function editCartItem(index) {
        const item = cart[index];
        window.editingCartIndex = index;
        
        // Close cart modal first
        saveDeliveryInfo();
        cartModal.classList.remove('active');
        setTimeout(() => {
            closeModal(cartModal);
            body.classList.remove('cart-open');
        }, 300);
        
        // Open order modal after cart closes
        setTimeout(() => {
            openOrderModal(item.key);
            
            // Pre-select size and toppings after modal opens
            setTimeout(() => {
                const sizeRadio = document.querySelector(`input[name="size"][value="${item.size}"]`);
                if (sizeRadio) sizeRadio.checked = true;
                
                item.toppings.forEach(topping => {
                    const toppingCheckbox = document.querySelector(`input[type="checkbox"][value="${topping}"]`);
                    if (toppingCheckbox) toppingCheckbox.checked = true;
                });
            }, 100);
        }, 400);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
        saveCart();
    }

    function updateTotal() {
        let total = 0;
        cart.forEach(item => {
            total += menuData[item.key].prices[item.size];
            total += item.toppings.length * toppingPrice;
        });
        
        let finalTotal = total;
        let giftApplied = false;
        
        if (currentGiftInfo && currentGiftInfo.limit !== 'unlimited') {
            const giftLimit = parseInt(currentGiftInfo.limit);
            if (total <= giftLimit) {
                finalTotal = 0;
                giftApplied = true;
            } else {
                finalTotal = total - giftLimit;
                giftApplied = true;
            }
        } else if (currentGiftInfo && currentGiftInfo.limit === 'unlimited') {
            finalTotal = 0; // Will require SMS approval
            giftApplied = true;
        }
        
        const buyNowButton = document.getElementById('buy-now-button');
        if (buyNowButton && !buyNowButton.classList.contains('hidden')) {
            if (giftApplied && finalTotal === 0) {
                buyNowButton.textContent = currentGiftInfo.limit === 'unlimited' ? 
                    `Requires Approval` : 
                    `Gift Applied`;
            } else if (giftApplied) {
                const totalInWords = numberToWords(finalTotal);
                buyNowButton.textContent = `${totalInWords} (after gift)`;
            } else {
                const totalInWords = numberToWords(total);
                buyNowButton.textContent = totalInWords;
            }
        }
    }

    function numberToWords(num) {
        if (num === 0) return "Zero";
        
        const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        const thousands = ["", "Thousand", "Million", "Billion"];
        
        function convertHundreds(n) {
            let result = "";
            
            if (n >= 100) {
                result += ones[Math.floor(n / 100)] + " Hundred ";
                n %= 100;
            }
            
            if (n >= 20) {
                result += tens[Math.floor(n / 10)] + " ";
                n %= 10;
            } else if (n >= 10) {
                result += teens[n - 10] + " ";
                return result;
            }
            
            if (n > 0) {
                result += ones[n] + " ";
            }
            
            return result;
        }
        
        let result = "";
        let thousandCounter = 0;
        
        while (num > 0) {
            if (num % 1000 !== 0) {
                result = convertHundreds(num % 1000) + thousands[thousandCounter] + " " + result;
            }
            num = Math.floor(num / 1000);
            thousandCounter++;
        }
        
        return result.trim();
    }

    // --- DELIVERY INFO MANAGEMENT ---
    function saveDeliveryInfo() {
        try {
            const nameField = document.getElementById('customer-name');
            const phoneField = document.getElementById('customer-phone');
            const pickupField = document.getElementById('pickup-spot');

            const deliveryInfo = {
                name: nameField ? nameField.value : '',
                phone: phoneField ? phoneField.value : '',
                pickupSpot: pickupField ? pickupField.value : ''
            };
            
            localStorage.setItem('pautacos-delivery-info', JSON.stringify(deliveryInfo));
        } catch (e) {
            console.warn('Could not save delivery info to localStorage:', e);
        }
    }

    function savePermanentDeliveryInfo() {
        try {
            const nameField = document.getElementById('customer-name');
            const phoneField = document.getElementById('customer-phone');
            const pickupField = document.getElementById('pickup-spot');

            const permanentInfo = {
                name: nameField ? nameField.value : '',
                phone: phoneField ? phoneField.value : '',
                pickupSpot: pickupField ? pickupField.value : '',
                savedAt: Date.now()
            };
            
            localStorage.setItem('pautacos-permanent-info', JSON.stringify(permanentInfo));
        } catch (e) {
            console.warn('Could not save permanent delivery info to localStorage:', e);
        }
    }

    function loadPermanentDeliveryInfo() {
        const saved = localStorage.getItem('pautacos-permanent-info');
        if (saved) {
            try {
                const permanentInfo = JSON.parse(saved);
                
                // Load values if they exist
                if (permanentInfo.name) document.getElementById('customer-name').value = permanentInfo.name;
                if (permanentInfo.phone) document.getElementById('customer-phone').value = permanentInfo.phone;
                if (permanentInfo.pickupSpot) document.getElementById('pickup-spot').value = permanentInfo.pickupSpot;
                
                // Auto-reveal fields based on filled data
                const nameStep = document.getElementById('name-step');
                const phoneStep = document.getElementById('phone-step');
                const pickupStep = document.getElementById('pickup-step');
                
                if (permanentInfo.name && permanentInfo.name.length >= 2) {
                    nameStep.classList.add('completed');
                    nameStep.classList.remove('active');
                    phoneStep.classList.add('visible');
                    
                    if (permanentInfo.phone && permanentInfo.phone.replace(/\D/g, '').length >= 9) {
                        phoneStep.classList.add('completed');
                        phoneStep.classList.remove('active');
                        pickupStep.classList.add('visible');
                        
                        if (permanentInfo.pickupSpot) {
                            pickupStep.classList.add('completed');
                            pickupStep.classList.remove('active');
                        } else {
                            pickupStep.classList.add('active');
                        }
                    } else {
                        phoneStep.classList.add('active');
                    }
                }
                
            } catch (e) {
                console.error('Error loading permanent delivery info:', e);
            }
        }
        
        // Check if form is complete after loading
        setTimeout(checkFormCompletion, 100);
    }

    function saveCart() {
        try {
            localStorage.setItem('pautacos-cart', JSON.stringify(cart));
        } catch (e) {
            console.warn('Could not save cart to localStorage:', e);
        }
    }

    function loadCart() {
        const savedCart = localStorage.getItem('pautacos-cart');
        if (savedCart) {
            try {
                cart = JSON.parse(savedCart);
                updateCart();
            } catch (e) {
                console.error('Error loading cart from localStorage:', e);
                cart = [];
            }
        }
    }

    // --- STEP BY STEP FORM ---
    function setupStepByStepForm() {
        // Prevent duplicate setup
        if (window.formSetupComplete) return;
        window.formSetupComplete = true;
        
        const nameInput = document.getElementById('customer-name');
        const phoneInput = document.getElementById('customer-phone');
        const pickupInput = document.getElementById('pickup-spot');
        
        const nameStep = document.getElementById('name-step');
        const phoneStep = document.getElementById('phone-step');
        const pickupStep = document.getElementById('pickup-step');
        
        // Mobile navigation buttons
        const nameNextBtn = document.getElementById('name-next-btn');
        const phoneNextBtn = document.getElementById('phone-next-btn');
        
        function showNextStep(currentStep, nextStep, currentInput) {
            // Mark current step as completed
            currentStep.classList.remove('active');
            currentStep.classList.add('completed');
            
            // Show and activate next step
            setTimeout(() => {
                if (nextStep) {
                    nextStep.classList.add('visible');
                    setTimeout(() => {
                        nextStep.classList.add('active');
                        const input = nextStep.querySelector('input, textarea');
                        if (input) input.focus();
                    }, 150);
                }
                checkFormCompletion();
            }, 100);
        }
        
        // Auto-reveal handlers with character counting (no focus jumping)
        nameInput.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            if (value.length >= 2 && !phoneStep.classList.contains('visible')) {
                // Just reveal, don't move focus
                phoneStep.classList.add('visible');
                setTimeout(() => {
                    phoneStep.classList.add('active');
                }, 150);
            }
            saveDeliveryInfo();
            checkFormCompletion();
        });

        phoneInput.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            if (value.length >= 9 && !pickupStep.classList.contains('visible')) {
                // Just reveal, don't move focus
                pickupStep.classList.add('visible');
                setTimeout(() => {
                    pickupStep.classList.add('active');
                }, 150);
            }
            saveDeliveryInfo();
            checkFormCompletion();
        });
        
        // Desktop Enter key handlers
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (nameInput.value.trim().length >= 2) {
                    if (!phoneStep.classList.contains('visible')) {
                        showNextStep(nameStep, phoneStep, nameInput);
                    } else {
                        phoneInput.focus();
                    }
                }
            }
        });
        
        phoneInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const value = phoneInput.value.replace(/\D/g, '');
                if (value.length >= 9) {
                    if (!pickupStep.classList.contains('visible')) {
                        showNextStep(phoneStep, pickupStep, phoneInput);
                    } else {
                        pickupInput.focus();
                    }
                }
            }
        });
        
        pickupInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                pickupInput.blur();
                checkFormCompletion();
            }
        });
        
        // Mobile button handlers
        if (nameNextBtn) {
            nameNextBtn.addEventListener('click', () => {
                if (nameInput.value.trim().length >= 2) {
                    if (!phoneStep.classList.contains('visible')) {
                        showNextStep(nameStep, phoneStep, nameInput);
                    } else {
                        phoneInput.focus();
                    }
                }
            });
        }
        
        if (phoneNextBtn) {
            phoneNextBtn.addEventListener('click', () => {
                const value = phoneInput.value.replace(/\D/g, '');
                if (value.length >= 9) {
                    if (!pickupStep.classList.contains('visible')) {
                        showNextStep(phoneStep, pickupStep, phoneInput);
                    } else {
                        pickupInput.focus();
                    }
                }
            });
        }
        
        // Allow clicking on completed fields to reactivate them
        [nameStep, phoneStep, pickupStep].forEach((step, index) => {
            step.addEventListener('click', (e) => {
                if (step.classList.contains('completed')) {
                    // Remove active from all steps
                    [nameStep, phoneStep, pickupStep].forEach(s => s.classList.remove('active'));
                    // Activate clicked step
                    step.classList.remove('completed');
                    step.classList.add('active');
                    const input = step.querySelector('input, textarea');
                    if (input) input.focus();
                }
            });
        });
        
        // Initial check when form is set up
        checkFormCompletion();
    }

    // Profile menu navigation
function showProfilePage(pageId) {
    // Hide main menu
    document.getElementById('profile-main-menu').classList.add('hidden');
    
    // Hide all pages
    document.querySelectorAll('[id$="-page"]').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');
}

function showProfileMainMenu() {
    // Show main menu
    document.getElementById('profile-main-menu').classList.remove('hidden');
    
    // Hide all pages
    document.querySelectorAll('[id$="-page"]').forEach(page => {
        page.classList.add('hidden');
    });
}

// Profile button click handlers
document.getElementById('receipts-button')?.addEventListener('click', () => {
    showProfilePage('orders-receipts-page');
});

document.getElementById('gift-receipts-button')?.addEventListener('click', () => {
    showProfilePage('gifts-receipts-page');
});

document.getElementById('invite-chef-button')?.addEventListener('click', () => {
    showProfilePage('invite-chef-page');
});

document.getElementById('become-member-button')?.addEventListener('click', () => {
    showProfilePage('become-member-page');
});

document.getElementById('become-chef-button')?.addEventListener('click', () => {
    showProfilePage('become-chef-page');
});

document.getElementById('delivery-preferences-button')?.addEventListener('click', () => {
    showProfilePage('delivery-preferences-page');
});

document.getElementById('dietary-preferences-button')?.addEventListener('click', () => {
    showProfilePage('dietary-preferences-page');
});

document.getElementById('chef-preferences-button')?.addEventListener('click', () => {
    showProfilePage('chef-preferences-page');
});

document.getElementById('nutrition-tracker-button')?.addEventListener('click', () => {
    showProfilePage('nutrition-tracker-page');
});

// Back buttons
document.addEventListener('click', (e) => {
    if (e.target.closest('.profile-back-btn')) {
        showProfileMainMenu();
    }
});

    // --- LOCATION FUNCTIONALITY ---
    function initializeLocationButton() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('#find-location-btn')) {
                e.preventDefault();
                e.stopPropagation();
                
                const pickupInput = document.getElementById('pickup-spot');
                const btn = document.getElementById('find-location-btn');
                
                if (!navigator.geolocation) {
                    alert('Geolocation is not supported by this browser. Please enter your location manually.');
                    return;
                }
                
                // Show loading state
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `
                    <svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg>
                `;
                btn.disabled = true;
                
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        
                        try {
                            // Get the approximate address
                            const approximateAddress = await reverseGeocode(latitude, longitude);
                            
                            // Show a more specific prompt for Edmonton users
                            const isEdmonton = approximateAddress.toLowerCase().includes('edmonton');
                            const placeholder = isEdmonton ? 
                                'e.g. 10909 103 Ave, Edmonton' : 
                                'e.g. 123 Main Street, Your City';
                            
                            // Pre-fill with approximate location but make it clear they should edit
                            pickupInput.value = approximateAddress;
                            pickupInput.placeholder = placeholder;
                            
                            // Focus and select all so they can easily replace
                            setTimeout(() => {
                                pickupInput.focus();
                                pickupInput.select();
                            }, 100);
                            
                        } catch (error) {
                            // Fallback to coordinates
                            pickupInput.value = `Near ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                            pickupInput.focus();
                            pickupInput.select();
                        }
                        
                        // Restore button
                        btn.innerHTML = originalHTML;
                        btn.disabled = false;
                        
                        saveDeliveryInfo();
                        checkFormCompletion();
                        pickupInput.dispatchEvent(new Event('input', { bubbles: true }));
                    },
                    (error) => {
                        console.error('Geolocation error:', error);
                        btn.innerHTML = originalHTML;
                        btn.disabled = false;
                        
                        let errorMessage = 'Unable to get your location. ';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage += 'Please allow location access and try again.';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage += 'Location information is unavailable.';
                                break;
                            case error.TIMEOUT:
                                errorMessage += 'Location request timed out.';
                                break;
                            default:
                                errorMessage += 'Please enter your location manually.';
                                break;
                        }
                        
                        alert(errorMessage);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 300000
                    }
                );
            }
        });
    }

    // Simple reverse geocoding function
    async function reverseGeocode(lat, lon) {
        try {
            // Using nominatim with higher zoom for more precision
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=19&addressdetails=1&extratags=1`);
            
            if (!response.ok) {
                throw new Error('Geocoding service unavailable');
            }
            
            const data = await response.json();
            
            if (data && data.address) {
                const address = data.address;
                
                // Try to build a proper street address first
                let streetAddress = '';
                
                // Method 1: Try to get exact house number and street
                if (address.house_number && address.road) {
                    streetAddress = `${address.house_number} ${address.road}`;
                } 
                // Method 2: Try to get just the road with nearby numbers
                else if (address.road) {
                    streetAddress = `Near ${address.road}`;
                }
                // Method 3: Look for any street-like information
                else if (address.pedestrian || address.footway) {
                    streetAddress = `Near ${address.pedestrian || address.footway}`;
                }
                
                // Add neighborhood or area information
                const areaInfo = [];
                if (address.neighbourhood && !streetAddress.includes(address.neighbourhood)) {
                    areaInfo.push(address.neighbourhood);
                }
                if (address.suburb && !streetAddress.includes(address.suburb)) {
                    areaInfo.push(address.suburb);
                }
                
                // Build final address
                let finalAddress = streetAddress;
                if (areaInfo.length > 0) {
                    finalAddress += `, ${areaInfo[0]}`; // Add just the first area info
                }
                
                // Add city if we have it
                if (address.city || address.town) {
                    const city = address.city || address.town;
                    if (!finalAddress.includes(city)) {
                        finalAddress += `, ${city}`;
                    }
                }
                
                // If we still don't have a good address, use display_name parts
                if (!streetAddress || streetAddress === '') {
                    const parts = data.display_name.split(',');
                    finalAddress = parts.slice(0, 2).join(', ').trim();
                }
                
                return finalAddress || `Location at ${lat.toFixed(5)}, ${lon.toFixed(5)}`;
            } else {
                throw new Error('No address found');
            }
        } catch (error) {
            console.error('Reverse geocoding failed:', error);
            
            // Enhanced fallback - try to give a more useful coordinate description
            return `Current Location (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
        }
    }

    // --- GIFT LINK CHECKING ---
    function checkForGiftLink() {
        const urlParams = new URLSearchParams(window.location.search);
        const giftId = urlParams.get('gift');
        
        if (giftId) {
            const validation = validateGiftLink(giftId);
            if (validation.valid) {
                applyGiftToCart(validation.giftLink);
                // Store gift in session for persistence
                sessionStorage.setItem('applied-gift', JSON.stringify(validation.giftLink));
                // Remove gift parameter from URL without refresh
                const newURL = new URL(window.location);
                newURL.searchParams.delete('gift');
                window.history.replaceState({}, document.title, newURL.pathname + newURL.hash);
            } else {
                alert(`Gift link error: ${validation.reason}`);
            }
        } else {
            // Check if we have a gift in session storage
            const sessionGift = sessionStorage.getItem('applied-gift');
            if (sessionGift) {
                try {
                    const giftData = JSON.parse(sessionGift);
                    const validation = validateGiftLink(giftData.id);
                    if (validation.valid) {
                        applyGiftToCart(validation.giftLink);
                    } else {
                        sessionStorage.removeItem('applied-gift');
                    }
                } catch (e) {
                    sessionStorage.removeItem('applied-gift');
                }
            }
        }
    }

    // --- DRAFT EMAIL MODAL ---
    function initializeDraftEmailModal() {
        const draftEmailBtn = document.getElementById('draft-email-btn');
        const modal = document.getElementById('draft-email-modal');
        const closeModalBtn = document.getElementById('close-draft-modal-btn');
        const emailNameField = document.getElementById('email-name');
        const emailEmailField = document.getElementById('email-email');
        const emailPhoneField = document.getElementById('email-phone');
        const emailMessageField = document.getElementById('email-message');
        const emailNameFieldContainer = document.getElementById('email-name-field');
        const emailEmailFieldContainer = document.getElementById('email-email-field');
        const emailPhoneFieldContainer = document.getElementById('email-phone-field');
        const emailMessageFieldContainer = document.getElementById('email-message-field');
        const emailUrgencyFieldContainer = document.getElementById('email-urgency-field');
        const emailSubmitFieldContainer = document.getElementById('email-submit-field');
        const draftEmailSubmitBtn = document.getElementById('draft-email-submit-btn');
        const phoneError = document.getElementById('phone-error');
        const urgencyOptions = document.querySelectorAll('.urgency-option');
        let selectedUrgency = '';

        if (!draftEmailBtn || !modal || !closeModalBtn) return;

        function showField(fieldContainer) {
            if (fieldContainer) fieldContainer.classList.add('active');
        }

        function hideField(fieldContainer) {
            if (fieldContainer) fieldContainer.classList.remove('active');
        }

        function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
        function isValidPhone(phone) { return phone.replace(/\D/g, '').length >= 10; }

        urgencyOptions.forEach(option => {
            option.addEventListener('click', function() {
                urgencyOptions.forEach(opt => opt.classList.remove('border-white', 'bg-gray-800'));
                this.classList.add('border-white', 'bg-gray-800');
                selectedUrgency = this.getAttribute('data-urgency');
                checkFormCompletion();
            });
        });

        function checkFormCompletion() {
            if (emailNameField.value.trim().length > 2 &&
                isValidEmail(emailEmailField.value.trim()) &&
                isValidPhone(emailPhoneField.value.trim()) &&
                emailMessageField.value.trim().length > 10 &&
                selectedUrgency) {
                showField(emailSubmitFieldContainer);
            } else {
                hideField(emailSubmitFieldContainer);
            }
        }

        draftEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('hidden');
            body.classList.add('modal-open');
        });

        function closeModal() {
            modal.classList.add('hidden');
            body.classList.remove('modal-open');
            document.getElementById('email-draft-form').reset();
            hideField(emailEmailFieldContainer);
            hideField(emailPhoneFieldContainer);
            hideField(emailMessageFieldContainer);
            hideField(emailUrgencyFieldContainer);
            hideField(emailSubmitFieldContainer);
            urgencyOptions.forEach(opt => opt.classList.remove('border-white', 'bg-gray-800'));
            selectedUrgency = '';
        }

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => e.target === modal && closeModal());

        function setupFieldListener(field, condition, nextField) {
            const allNextFields = [emailEmailFieldContainer, emailPhoneFieldContainer, emailMessageFieldContainer, emailUrgencyFieldContainer, emailSubmitFieldContainer];
            const nextFieldIndex = allNextFields.indexOf(nextField);
            
            field.addEventListener('input', () => {
                if (condition(field.value.trim())) {
                    showField(nextField);
                } else {
                    for (let i = nextFieldIndex; i < allNextFields.length; i++) {
                        hideField(allNextFields[i]);
                        const input = allNextFields[i].querySelector('input, textarea');
                        if(input) input.value = '';
                    }
                    urgencyOptions.forEach(opt => opt.classList.remove('border-white', 'bg-gray-800'));
                    selectedUrgency = '';
                }
                checkFormCompletion();
            });
        }

        setupFieldListener(emailNameField, val => val.length > 2, emailEmailFieldContainer);
        setupFieldListener(emailEmailField, val => isValidEmail(val), emailPhoneFieldContainer);
        setupFieldListener(emailPhoneField, val => isValidPhone(val), emailMessageFieldContainer);
        setupFieldListener(emailMessageField, val => val.length > 10, emailUrgencyFieldContainer);
        
        emailPhoneField.addEventListener('input', () => {
            const isValid = isValidPhone(emailPhoneField.value.trim());
            phoneError.classList.toggle('hidden', isValid || emailPhoneField.value.trim().length === 0);
        });

        if (draftEmailSubmitBtn) {
            draftEmailSubmitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                checkFormCompletion();
                if(emailSubmitFieldContainer.classList.contains('active') === false) return;

                const subject = `${selectedUrgency} from ${emailNameField.value.trim()}`;
                const body = `Hello,\n\nI am writing to you with the following message:\n\n${emailMessageField.value.trim()}\n\nPlease feel free to contact me:\nEmail: ${emailEmailField.value.trim()}\nPhone: ${emailPhoneField.value.trim()}\n\nNature of this email: ${selectedUrgency}\n\nBest regards,\n${emailNameField.value.trim()}`;
                const mailtoLink = `mailto:frontman@pautacos.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                window.open(mailtoLink, '_self');
                setTimeout(closeModal, 500);
            });
        }
    }

    // --- PROFILE FUNCTIONALITY ---
    function updateProfileUI() {
        const profileButton = document.getElementById('profile-button');
        const userInfoSection = document.getElementById('user-info-section');
        const signInSection = document.getElementById('sign-in-section');
        const signOutButton = document.getElementById('sign-out-button');
        const userAvatar = document.getElementById('user-avatar');
        const userName = document.getElementById('user-name');
        const userEmail = document.getElementById('user-email');
        const themeIndicator = document.getElementById('theme-indicator');
        
        // Update theme indicator
        themeIndicator.textContent = isSiteDarkMode ? 'Dark' : 'Light';
        
        if (window.currentUser) {
            // User is signed in
            userInfoSection.classList.remove('hidden');
            signInSection.classList.add('hidden');
            signOutButton.classList.remove('hidden');
            
            userAvatar.src = window.currentUser.picture || '';
            userName.textContent = window.currentUser.name || '';
            userEmail.textContent = window.currentUser.email || '';
        } else {
            // User is not signed in
            userInfoSection.classList.add('hidden');
            signInSection.classList.remove('hidden');
            signOutButton.classList.add('hidden');
            
            // Render Google Sign-In button in profile dropdown
            renderProfileGoogleButton();
        }
    }
    
    function renderProfileGoogleButton() {
        const container = document.getElementById('profile-google-signin-button');
        if (!container) {
            console.log('Profile Google button container not found');
            return;
        }
        
        if (!window.google || !window.google.accounts) {
            console.log('Google SDK not loaded, showing fallback');
            container.innerHTML = `
                <button onclick="alert('Google Sign-In is loading. Please try again in a moment.')" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-3xl transition-colors text-sm">
                    Sign in with Google (Loading...)
                </button>
            `;
            return;
        }
        
        try {
            // Clear container first
            container.innerHTML = '';
            window.google.accounts.id.renderButton(
                container,
                {
                    theme: isSiteDarkMode ? 'filled_black' : 'outline',
                    size: 'medium',
                    text: 'signin_with',
                    width: 200
                }
            );
            console.log('Google button rendered successfully');
        } catch (error) {
            console.error('Error rendering profile Google button:', error);
            container.innerHTML = `
                <button onclick="showSignInModal()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-3xl transition-colors text-sm">
                    Sign in with Google (Fallback)
                </button>
            `;
        }
    }

    // --- INITIALIZATION ---
    renderMenu(false, 'all');
    renderExotics();
    renderLocations();
    applyTheme();
    loadCart();
    checkForGiftLink();
    initializeDraftEmailModal();
    
    // Initialize location functionality with error handling
    try {
        initializeLocationButton();
    } catch (error) {
        console.error('Failed to initialize location functionality:', error);
    }

    // --- EVENT LISTENERS ---
    
    // Continue quest button handler
    document.addEventListener('click', (e) => {
        if (e.target.id === 'continue-quest-btn') {
            currentMenuPage++;
            renderMenu(false, currentCategory);
        }
    });

    // Category filter handlers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-filter-btn')) {
            // Remove active class from all buttons
            document.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Reset pagination and update category
            currentMenuPage = 0;
            currentCategory = e.target.dataset.category;
            
            // Re-render menu with new category
            renderMenu(false, currentCategory);
        }
    });

    menuContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.menu-card');
        if (card) {
            openNoteModal(card.dataset.item, 'menu');
        }
    });

    exoticsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.exotic-card');
        if (card) {
            openNoteModal(card.dataset.exoticKey, 'exotic');
        }
    });
    
    locationsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.location-card');
        if (card) {
            openNoteModal(card.dataset.locationKey, 'location');
        }
    });

    // Search functionality
    searchButton.addEventListener('click', () => {
        searchModal.style.display = 'flex';
setTimeout(() => searchModal.classList.add('active'), 10);
        body.classList.add('modal-open');
        document.getElementById('search-input').focus();
        displayRecentSearches();
        displaySuggestedItems();
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value;
        const results = performSearch(query);
        displaySearchResults(results);
        
        // Show/hide sections based on search
        const hasQuery = query.trim().length > 0;
        if (hasQuery) {
            // Hide suggestions when there are search results
            document.getElementById('suggested-items-section').classList.add('hidden');
            document.getElementById('recently-searched-section').classList.add('hidden');
        } else {
            // Show suggestions and recent searches when no search query
            displaySuggestedItems([]); // Reset suggestions when clearing search
            document.getElementById('suggested-items-section').classList.remove('hidden');
            document.getElementById('recently-searched-section').classList.remove('hidden');
        }
    });
    
    document.getElementById('search-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.trim();
            if (query) {
                saveRecentSearch(query);
            }
        }
    });

    document.getElementById('search-results').addEventListener('click', (e) => {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            const itemKey = resultItem.dataset.item;
            const type = resultItem.dataset.type;
            const topping = resultItem.dataset.topping;
            
            // Save search query with item key
            const searchInput = document.getElementById('search-input');
            if (searchInput.value.trim()) {
                saveRecentSearch(searchInput.value.trim(), itemKey);
            }
            
            searchModal.classList.remove('active');
setTimeout(() => closeModal(searchModal), 300);
            
            if (type === 'item') {
                openOrderModal(itemKey);
            } else if (type === 'topping') {
                openOrderModal(itemKey, topping);
            }
        }
    });
    
    // Handle recently searched items
    document.getElementById('recently-searched-items').addEventListener('click', (e) => {
        const item = e.target.closest('.recently-searched-item');
        if (item) {
            const searchQuery = item.dataset.search;
            const itemKey = item.dataset.item;
            
            if (itemKey) {
                // If it's a specific item, open it directly
                searchModal.classList.remove('active');
setTimeout(() => closeModal(searchModal), 300);
                openOrderModal(itemKey);
            } else {
                // If it's a search term, populate search input
                const searchInput = document.getElementById('search-input');
                searchInput.value = searchQuery;
                searchInput.dispatchEvent(new Event('input'));
                searchInput.focus();
            }
        }
    });
    
    // Handle suggested items
    document.getElementById('suggested-items').addEventListener('click', (e) => {
        const suggestedItem = e.target.closest('.suggested-item');
        if (suggestedItem) {
            const itemKey = suggestedItem.dataset.item;
            searchModal.classList.remove('active');
setTimeout(() => closeModal(searchModal), 300);
            openOrderModal(itemKey);
        }
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target.matches('.modal-backdrop') || e.target.id === 'close-search-modal') {
            searchModal.classList.remove('active');
setTimeout(() => closeModal(searchModal), 300);
        }
    });

    // Gift functionality
    giftButton.addEventListener('click', () => {
        giftModal.style.display = 'flex';
setTimeout(() => giftModal.classList.add('active'), 10);
        body.classList.add('modal-open');
    });



    document.querySelectorAll('.gift-limit-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.gift-limit-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

document.querySelectorAll('.gift-uses-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.gift-uses-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

document.querySelectorAll('.gift-duration-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.gift-duration-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

    document.getElementById('create-gift-link').addEventListener('click', () => {
    const selectedLimit = document.querySelector('.gift-limit-option.selected');
    const selectedUses = document.querySelector('.gift-uses-option.selected');
    const selectedDuration = document.querySelector('.gift-duration-option.selected');

    // Gift Receipts functionality
function formatGiftDateTime(timestamp) {
    const date = new Date(timestamp);
    const timeOptions = { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };
    const dateOptions = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    
    const time = date.toLocaleTimeString('en-US', timeOptions);
    const dateStr = date.toLocaleDateString('en-US', dateOptions);
    
    return `${time} ${dateStr}`;
}

function renderGiftReceipts() {
    const unopenedContainer = document.getElementById('unopened-gifts-container');
    const usedContainer = document.getElementById('used-gifts-container');
    
    if (!unopenedContainer || !usedContainer) return;
    
    // Get gift data
    const allGifts = JSON.parse(localStorage.getItem('pautacos-all-gifts') || '[]');
    const orderHistory = JSON.parse(localStorage.getItem('pautacos-order-history') || '[]');
    
    // Render unopened gifts
    const unopenedGifts = giftLinks.filter(gift => gift.usesLeft > 0 && Date.now() < gift.expiresAt);
    
    if (unopenedGifts.length === 0) {
        unopenedContainer.innerHTML = '<p class="text-gray-400 text-sm">No unopened gifts</p>';
    } else {
        unopenedContainer.innerHTML = unopenedGifts.map(gift => {
            const limitText = gift.limit === 'unlimited' ? '♾️ Unlimited' : `₦${parseInt(gift.limit).toLocaleString()}`;
            const createdTime = formatGiftDateTime(gift.createdAt);
            const expiresTime = formatGiftDateTime(gift.expiresAt);
            
            return `
                <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <p class="text-white font-medium">${limitText} Gift</p>
                            <p class="text-gray-400 text-sm">Created: ${createdTime}</p>
                            <p class="text-gray-400 text-sm">Expires: ${expiresTime}</p>
                            <p class="text-gray-400 text-sm">${gift.usesLeft}/${gift.originalUses} uses left</p>
                        </div>
                        <button onclick="expireGift('${gift.id}')" class="text-red-400 hover:text-red-300 text-sm">
                            Expire Now
                        </button>
                    </div>
                    <div class="mt-3">
                        <button onclick="copyGiftLink('${gift.id}')" class="text-blue-400 hover:text-blue-300 text-sm">
                            Copy Link
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Render used gifts (from order history)
    const usedGifts = orderHistory.filter(order => order.gift && order.gift.id);
    
    if (usedGifts.length === 0) {
        usedContainer.innerHTML = '<p class="text-gray-400 text-sm">No used gifts</p>';
    } else {
        usedContainer.innerHTML = usedGifts.map(order => {
            const limitText = order.gift.limit === 'unlimited' ? '♾️ Unlimited' : `₦${parseInt(order.gift.limit).toLocaleString()}`;
            const usedTime = formatGiftDateTime(new Date(order.timestamp).getTime());
            
            // Extract city from pickup location
            const pickupParts = order.customer.pickupLocation.split(',');
            const city = pickupParts.length > 1 ? pickupParts[pickupParts.length - 1].trim() : 'Unknown City';
            
            return `
                <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-white font-medium">${limitText} Gift</p>
                            <p class="text-gray-400 text-sm">Used by: ${order.customer.name}</p>
                            <p class="text-gray-400 text-sm">Location: ${city}</p>
                            <p class="text-gray-400 text-sm">Used: ${usedTime}</p>
                            <p class="text-gray-400 text-sm">Order: ${order.orderNumber}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Expire gift function
window.expireGift = function(giftId) {
    if (confirm('Are you sure you want to expire this gift? This action cannot be undone.')) {
        const giftIndex = giftLinks.findIndex(link => link.id === giftId);
        if (giftIndex !== -1) {
            giftLinks.splice(giftIndex, 1);
            localStorage.setItem('pautacos-gift-links', JSON.stringify(giftLinks));
            renderGiftReceipts();
        }
    }
};

// Copy gift link function
window.copyGiftLink = function(giftId) {
    const baseUrl = window.location.origin + window.location.pathname;
    const fullGiftLink = `${baseUrl}?gift=${giftId}`;
    
    navigator.clipboard.writeText(fullGiftLink).then(() => {
        alert('Gift link copied to clipboard!');
    }).catch(() => {
        prompt('Copy this gift link:', fullGiftLink);
    });
};
    
    if (!selectedLimit) {
        alert('Please select a gift limit');
        return;
    }
    if (!selectedUses) {
        alert('Please select number of uses');
        return;
    }
    if (!selectedDuration) {
        alert('Please select expiration time');
        return;
    }
    
    const limit = selectedLimit.dataset.limit;
    const uses = selectedUses.dataset.uses;
    const hours = parseInt(selectedDuration.dataset.hours);
        
        if (!uses || uses < 1) {
            alert('Please enter a valid number of uses');
            return;
        }
        
        const giftLink = createGiftLink(limit, uses, hours);
        const baseUrl = window.location.origin + window.location.pathname;
        const fullGiftLink = `${baseUrl}?gift=${giftLink.id}`;
        
        giftModal.classList.remove('active');
setTimeout(() => closeModal(giftModal), 300);
        
        const giftLinkContent = document.getElementById('gift-link-content');
        const limitText = limit === 'unlimited' ? '♾️ Unlimited' : `₦${parseInt(limit).toLocaleString()}`;
        const hoursText = hours === 1 ? '1 hour' : `${hours} hours`;
        
        giftLinkContent.innerHTML = `
            <div class="gift-link-display">
                <h3 class="font-bold text-lg mb-2">Your Gift Link Created!</h3>
                <p class="text-sm text-gray-300 mb-3">Chim's ${limitText} gift • ${uses} uses • Expires in ${hoursText}</p>
                <div class="gift-link-text" id="gift-link-url">${fullGiftLink}</div>
                <p class="text-xs text-gray-400 mt-2">Share this link with anyone you want to gift!</p>
            </div>
        `;
        
        // Store current gift link for copying/sharing
        window.currentGiftLinkUrl = fullGiftLink;
        
        giftLinkModal.style.display = 'flex';
        body.classList.add('modal-open');
    });

    document.getElementById('copy-gift-link').addEventListener('click', () => {
        if (window.currentGiftLinkUrl) {
            navigator.clipboard.writeText(window.currentGiftLinkUrl).then(() => {
                // Change button text temporarily
                const copyBtn = document.getElementById('copy-gift-link');
                const originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = `
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Copied!</span>
                `;
                copyBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
                copyBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                    copyBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    copyBtn.classList.add('bg-red-600', 'hover:bg-red-700');
                }, 2000);
                
                alert('Gift link copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = window.currentGiftLinkUrl;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    alert('Gift link copied to clipboard!');
                } catch (err) {
                    alert('Could not copy link. Please copy manually: ' + window.currentGiftLinkUrl);
                }
                document.body.removeChild(textArea);
            });
        }
    });

    document.getElementById('share-gift-link').addEventListener('click', () => {
        if (window.currentGiftLinkUrl && navigator.share) {
            navigator.share({
                title: 'Pautacos Gift Link',
                text: 'I\'ve sent you a gift link for Pautacos!',
                url: window.currentGiftLinkUrl
            });
        } else if (window.currentGiftLinkUrl) {
            // Fallback for browsers without native sharing
            const shareText = `I've sent you a gift link for Pautacos! ${window.currentGiftLinkUrl}`;
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Gift link copied to clipboard for sharing!');
            });
        }
    });

    giftModal.addEventListener('click', (e) => {
        if (e.target.matches('.modal-backdrop') || e.target.id === 'close-gift-modal') {
            giftModal.classList.remove('active');
setTimeout(() => closeModal(giftModal), 300);
        }
    });

    giftLinkModal.addEventListener('click', (e) => {
        if (e.target.matches('.modal-backdrop') || e.target.id === 'close-gift-link-modal') {
            closeModal(giftLinkModal);
        }
    });

    orderModal.addEventListener('click', (e) => {
        if (e.target.matches('.modal-backdrop') || e.target.id === 'close-order-modal') {
            closeModal(orderModal);
        }
        if (e.target.id === 'add-to-cart-button') {
            addToCart(e.target.dataset.item);
        }
    });

    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        setTimeout(() => cartModal.classList.add('active'), 10);
        renderCartItems();
        loadPermanentDeliveryInfo();
        if (!window.formSetupComplete) {
            setupStepByStepForm();
        }
        updateGiftDisplay();
        body.classList.add('modal-open');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target.matches('.modal-backdrop') || e.target.id === 'close-cart-modal') {
            saveDeliveryInfo();
            cartModal.classList.remove('active');
            setTimeout(() => closeModal(cartModal), 300);
        }
        if (e.target.matches('.remove-item-button')) {
            e.stopPropagation();
            removeFromCart(e.target.dataset.index);
        }
        // Clear cart button functionality
        if (e.target.id === 'clear-cart-button') {
            e.stopPropagation();
            if (confirm('Are you sure you want to clear all items from your cart?')) {
                clearCart();
            }
        }
        // Add cart item editing
        if (e.target.closest('.cart-item') && !e.target.matches('.remove-item-button')) {
            const index = parseInt(e.target.closest('.cart-item').dataset.index);
            editCartItem(index);
        }
    });

    // Clear cart button functionality
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'clear-cart-button') {
            e.preventDefault();
            e.stopPropagation();
            if (confirm('Are you sure you want to clear all items from your cart?')) {
                clearCart();
            }
        }
    });

    noteModal.addEventListener('click', (e) => {
        if (e.target.matches('.modal-backdrop') || e.target.id === 'close-note-modal') {
            closeModal(noteModal);
        }
        if(e.target.id === 'experience-now-button') {
            closeModal(noteModal);
            openOrderModal(e.target.dataset.item);
        }
        if(e.target.id === 'update-letter-button') {
            closeModal(noteModal);
            const newsletterSection = document.querySelector('footer');
            if (newsletterSection) {
                newsletterSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
            
            setTimeout(() => {
                const senderInput = document.querySelector('.sender-form-field input[type="email"], .sender-form-field input[type="text"]');
                if (senderInput) {
                    senderInput.focus();
                    senderInput.select();
                } else {
                    const fallbackInput = document.querySelector('footer input[type="email"], footer input[type="text"]');
                    if (fallbackInput) {
                        fallbackInput.focus();
                        fallbackInput.select();
                    }
                }
            }, 1000);
        }
    });

 // Profile dropdown toggle
document.getElementById('profile-button').addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.style.display = 'flex';
        setTimeout(() => dropdown.classList.add('active'), 10);
        updateProfileUI();
        header.classList.remove('scrolled');
        
        // Small delay to ensure dropdown is visible before rendering button
        if (!dropdown.classList.contains('hidden') && !window.currentUser) {
            setTimeout(() => {
                renderProfileGoogleButton();
                // Retry after 1 second if Google SDK wasn't ready
                setTimeout(renderProfileGoogleButton, 1000);
            }, 50);
        }
    } else {
        dropdown.classList.remove('active');
        setTimeout(() => {
            dropdown.classList.add('hidden');
            dropdown.style.display = 'none';
        }, 300);
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('profile-dropdown');
    const profileButton = document.getElementById('profile-button');
    if (dropdown && !dropdown.contains(e.target) && !profileButton.contains(e.target)) {
        dropdown.classList.remove('active');
        setTimeout(() => {
            dropdown.classList.add('hidden');
            dropdown.style.display = 'none';
        }, 300);
    }
});

// New button handlers
document.getElementById('invite-chef-button')?.addEventListener('click', () => {
    alert('Invite a Chef feature coming soon!');
    // Add your invite chef functionality here
});

document.getElementById('become-member-button')?.addEventListener('click', () => {
    alert('Become a Member feature coming soon!');
    // Add your membership functionality here
});

document.getElementById('become-chef-button')?.addEventListener('click', () => {
    alert('Become a Chef feature coming soon!');
    // Add your chef application functionality here
});

// Preferences and tracking button handlers
document.getElementById('dietary-preferences-button')?.addEventListener('click', () => {
    alert('Dietary Preferences: Set your dietary restrictions and preferences here (vegetarian, vegan, gluten-free, etc.)');
    // Add your dietary preferences functionality here
});

document.getElementById('chef-preferences-button')?.addEventListener('click', () => {
    alert('Chef Preferences: Choose your favorite chefs and get notified of their special dishes!');
    // Add your chef preferences functionality here
});

document.getElementById('nutrition-tracker-button')?.addEventListener('click', () => {
    alert('Nutrition Tracker: Track your daily nutrition intake and calorie goals!');
    // Add your nutrition tracking functionality here
});
// Delivery preferences button handler
document.getElementById('delivery-preferences-button')?.addEventListener('click', () => {
    alert('Delivery Preferences: Set your preferred pickup locations, delivery times, and save favorite addresses!');
    // Add your delivery preferences functionality here
});

// Sign out button
document.getElementById('sign-out-button').addEventListener('click', () => {
    window.currentUser = null;
    localStorage.removeItem('pautacos-user');
    document.getElementById('profile-dropdown').classList.add('hidden');
    updateProfileUI();
    alert('Signed out successfully');
});

themeToggle.addEventListener('click', () => {
    isSiteDarkMode = !isSiteDarkMode;
    localStorage.setItem('siteDarkMode', isSiteDarkMode);
    applyTheme();
    
    // Re-render Google button with new theme
    const dropdown = document.getElementById('profile-dropdown');
    if (!dropdown.classList.contains('hidden') && !window.currentUser) {
        setTimeout(renderProfileGoogleButton, 100);
    }
});

// NOTE: The listener for 'gift-receipts-modal' is now removed as it's no longer used.
    
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
});