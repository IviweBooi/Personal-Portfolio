# Environment Variables Setup for Netlify Deployment

This document explains how to configure environment variables for your personal portfolio website when deploying to Netlify.

## Required Environment Variables

Your website uses the following environment variables for EmailJS integration:

- `EMAILJS_PUBLIC_KEY` - Your EmailJS public key
- `EMAILJS_SERVICE_ID` - Your EmailJS service ID  
- `EMAILJS_TEMPLATE_ID` - Your EmailJS template ID

## Setting Up Environment Variables in Netlify

### Method 1: Via Netlify Dashboard (Recommended)

1. Log in to your [Netlify Dashboard](https://app.netlify.com/)
2. Navigate to your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** for each of the following:

   ```
   Key: EMAILJS_PUBLIC_KEY
   Value: n2T-nnmcDJay40Qp8
   
   Key: EMAILJS_SERVICE_ID
   Value: service_a2bfq95
   
   Key: EMAILJS_TEMPLATE_ID
   Value: template_8itonng
   ```

5. Click **Save** after adding each variable
6. Redeploy your site for changes to take effect

### Method 2: Via Netlify CLI

If you're using the Netlify CLI, you can set environment variables using:

```bash
netlify env:set EMAILJS_PUBLIC_KEY "n2T-nnmcDJay40Qp8"
netlify env:set EMAILJS_SERVICE_ID "service_a2bfq95"
netlify env:set EMAILJS_TEMPLATE_ID "template_8itonng"
```

## How It Works

1. **Local Development**: The website uses fallback values defined in `js/config.js`
2. **Production**: Netlify injects the environment variables into your HTML during build time
3. **Configuration**: The `js/config.js` file automatically uses production values when available

## Security Benefits

✅ **Before**: Sensitive EmailJS credentials were hard-coded and visible in your source code  
✅ **After**: Credentials are stored securely as environment variables and only injected during deployment

## Testing

After setting up the environment variables:

1. Deploy your site to Netlify
2. Test the contact form functionality
3. Verify that emails are sent successfully
4. Check browser console for any configuration errors

## Troubleshooting

If the contact form isn't working after deployment:

1. Verify all environment variables are set correctly in Netlify
2. Check that variable names match exactly (case-sensitive)
3. Redeploy your site after making changes
4. Check browser console for JavaScript errors

## Local Development

For local development, the website will use the fallback values defined in `js/config.js`. If you want to test with different values locally, you can temporarily modify the fallback values in that file (but don't commit those changes).
