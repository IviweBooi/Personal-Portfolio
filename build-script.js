#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Processing environment variables for production build...');

// Read the index.html file
const indexPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Get environment variables
const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;

console.log('📧 EmailJS Configuration:');
console.log(`  Public Key: ${emailjsPublicKey ? 'Set ✅' : 'Missing ❌'}`);
console.log(`  Service ID: ${emailjsServiceId ? 'Set ✅' : 'Missing ❌'}`);
console.log(`  Template ID: ${emailjsTemplateId ? 'Set ✅' : 'Missing ❌'}`);

// Replace template variables with actual environment variables
if (emailjsPublicKey) {
    htmlContent = htmlContent.replace(/\$\{EMAILJS_PUBLIC_KEY\}/g, emailjsPublicKey);
}
if (emailjsServiceId) {
    htmlContent = htmlContent.replace(/\$\{EMAILJS_SERVICE_ID\}/g, emailjsServiceId);
}
if (emailjsTemplateId) {
    htmlContent = htmlContent.replace(/\$\{EMAILJS_TEMPLATE_ID\}/g, emailjsTemplateId);
}

// Write the processed file back
fs.writeFileSync(indexPath, htmlContent);

console.log('✅ Environment variables processed successfully!');
console.log('🚀 Build complete - ready for deployment!');

// Exit with error if any required environment variables are missing
if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
    console.error('❌ Missing required environment variables!');
    console.error('Please set EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, and EMAILJS_TEMPLATE_ID in Netlify.');
    process.exit(1);
}