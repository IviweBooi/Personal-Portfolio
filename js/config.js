// Configuration file for EmailJS settings
// For local development, fallback values are used
// For production, these will be set via Netlify environment variables in the HTML

const CONFIG = {
    // These will be set dynamically in index.html
    EMAILJS_PUBLIC_KEY: window.EMAILJS_PUBLIC_KEY || 'n2T-nnmcDJay40Qp8',
    EMAILJS_SERVICE_ID: window.EMAILJS_SERVICE_ID || 'service_a2bfq95',
    EMAILJS_TEMPLATE_ID: window.EMAILJS_TEMPLATE_ID || 'template_8itonng'
};

// Make config available globally
window.CONFIG = CONFIG;
