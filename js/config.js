// Configuration file for EmailJS settings
// Copy this file to config.js and replace with your actual values
// For production, these will be set via Netlify environment variables in the HTML

const CONFIG = {
    // Replace with your actual EmailJS keys
    // Get these from: https://dashboard.emailjs.com/
    EMAILJS_PUBLIC_KEY: window.EMAILJS_PUBLIC_KEY || 'your_public_key_here',
    EMAILJS_SERVICE_ID: window.EMAILJS_SERVICE_ID || 'your_service_id_here',
    EMAILJS_TEMPLATE_ID: window.EMAILJS_TEMPLATE_ID || 'your_template_id_here'
};

// Make config available globally
window.CONFIG = CONFIG;