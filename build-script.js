#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚨 NETLIFY BUILD SCRIPT EXECUTING - THIS SHOULD APPEAR IN BUILD LOGS 🚨');
console.log('🔧 Starting build script...');
console.log('📁 Working directory:', __dirname);

try {
    // Read the index.html file
    const indexPath = path.join(__dirname, 'index.html');
    console.log('📄 Reading index.html from:', indexPath);
    
    if (!fs.existsSync(indexPath)) {
        throw new Error(`index.html not found at ${indexPath}`);
    }
    
    let htmlContent = fs.readFileSync(indexPath, 'utf8');
    console.log('📄 index.html file size:', htmlContent.length, 'characters');

    // Get environment variables
    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;

    console.log('🌍 All environment variables:');
    Object.keys(process.env).forEach(key => {
        if (key.includes('EMAILJS')) {
            console.log(`  ${key}: ${process.env[key] ? 'Set ✅' : 'Missing ❌'}`);
        }
    });

    console.log('📧 EmailJS Configuration:');
    console.log(`  Public Key: ${emailjsPublicKey ? `Set ✅ (${emailjsPublicKey.substring(0, 10)}...)` : 'Missing ❌'}`);
    console.log(`  Service ID: ${emailjsServiceId ? `Set ✅ (${emailjsServiceId})` : 'Missing ❌'}`);
    console.log(`  Template ID: ${emailjsTemplateId ? `Set ✅ (${emailjsTemplateId})` : 'Missing ❌'}`);

    // Check if placeholders exist in HTML
    const hasPublicKeyPlaceholder = htmlContent.includes('${EMAILJS_PUBLIC_KEY}');
    const hasServiceIdPlaceholder = htmlContent.includes('${EMAILJS_SERVICE_ID}');
    const hasTemplateIdPlaceholder = htmlContent.includes('${EMAILJS_TEMPLATE_ID}');
    
    console.log('🔍 Placeholders in HTML:');
    console.log(`  Public Key placeholder: ${hasPublicKeyPlaceholder ? 'Found ✅' : 'Missing ❌'}`);
    console.log(`  Service ID placeholder: ${hasServiceIdPlaceholder ? 'Found ✅' : 'Missing ❌'}`);
    console.log(`  Template ID placeholder: ${hasTemplateIdPlaceholder ? 'Found ✅' : 'Missing ❌'}`);

    // Replace template variables with actual environment variables
    let replacements = 0;
    if (emailjsPublicKey && hasPublicKeyPlaceholder) {
        const before = htmlContent.match(/\$\{EMAILJS_PUBLIC_KEY\}/g)?.length || 0;
        htmlContent = htmlContent.replace(/\$\{EMAILJS_PUBLIC_KEY\}/g, emailjsPublicKey);
        const after = htmlContent.match(/\$\{EMAILJS_PUBLIC_KEY\}/g)?.length || 0;
        console.log(`🔄 Replaced ${before - after} instances of EMAILJS_PUBLIC_KEY`);
        replacements += before - after;
    }
    if (emailjsServiceId && hasServiceIdPlaceholder) {
        const before = htmlContent.match(/\$\{EMAILJS_SERVICE_ID\}/g)?.length || 0;
        htmlContent = htmlContent.replace(/\$\{EMAILJS_SERVICE_ID\}/g, emailjsServiceId);
        const after = htmlContent.match(/\$\{EMAILJS_SERVICE_ID\}/g)?.length || 0;
        console.log(`🔄 Replaced ${before - after} instances of EMAILJS_SERVICE_ID`);
        replacements += before - after;
    }
    if (emailjsTemplateId && hasTemplateIdPlaceholder) {
        const before = htmlContent.match(/\$\{EMAILJS_TEMPLATE_ID\}/g)?.length || 0;
        htmlContent = htmlContent.replace(/\$\{EMAILJS_TEMPLATE_ID\}/g, emailjsTemplateId);
        const after = htmlContent.match(/\$\{EMAILJS_TEMPLATE_ID\}/g)?.length || 0;
        console.log(`🔄 Replaced ${before - after} instances of EMAILJS_TEMPLATE_ID`);
        replacements += before - after;
    }

    console.log(`📊 Total replacements made: ${replacements}`);

    // Write the processed file back
    fs.writeFileSync(indexPath, htmlContent);
    console.log('💾 Updated index.html written successfully');

    console.log('✅ Environment variables processed successfully!');
    console.log('🚀 Build complete - ready for deployment!');

    // Only warn about missing variables, don't fail the build
    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
        console.warn('⚠️  Some environment variables are missing!');
        console.warn('Please set EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, and EMAILJS_TEMPLATE_ID in Netlify.');
        console.warn('The site will use fallback config.js values.');
    }

} catch (error) {
    console.error('❌ Build script failed:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
}