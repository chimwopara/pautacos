// Configuration - Replace with your actual keys
const CONFIG = {
    GOOGLE_CLIENT_ID: '663687974776-hp2ua2o4u4osnafrerivmippjdn3cvp5.apps.googleusercontent.com',
    PAYSTACK_PUBLIC_KEY: 'pk_test_d08adaed6145e30243304d0e8db38f6c06db841c', // test public key
    SITE_URL: 'pautacos.com' // Your GitHub Pages URL
};

// Export CONFIG for use in other files (if using modules)
// If not using modules, CONFIG will be available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Alternative: Make it available on window object for browser compatibility
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}