# Deployment Guide for Netlify

## Security Setup for EmailJS

### 1. Generate New EmailJS Keys
**IMPORTANT:** The previous keys in your code have been exposed and should be regenerated.

1. Log into your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Generate new credentials:
   - **Public Key**: Go to Account → API Keys → Create New Public Key
   - **Service ID**: Go to Email Services → Create New Service or use existing
   - **Template ID**: Go to Email Templates → Create New Template or use existing

### 2. Configure Netlify Environment Variables

1. In your Netlify dashboard, go to: **Site Settings → Environment Variables**
2. Add these environment variables (EXACT names required):

```
Variable Name: EMAILJS_PUBLIC_KEY
Value: your_new_public_key_here

Variable Name: EMAILJS_SERVICE_ID
Value: your_new_service_id_here

Variable Name: EMAILJS_TEMPLATE_ID
Value: your_new_template_id_here
```

**⚠️ IMPORTANT:** 
- Variable names must be EXACTLY as shown above
- No quotes around the values
- After adding variables, redeploy your site

### 3. Deploy Safely

1. **Verify your .gitignore** excludes sensitive files:
   - ✅ `.env*` files are ignored
   - ✅ Local config files are ignored
   - ✅ API keys/secrets are ignored

2. **Test locally** with environment variables:
   ```bash
   # Create a .env.local file (this will be ignored by git)
   EMAILJS_PUBLIC_KEY=your_test_key
   EMAILJS_SERVICE_ID=your_test_service
   EMAILJS_TEMPLATE_ID=your_test_template
   ```

3. **Deploy to Netlify**:
   - Push your code to your repository
   - Netlify will automatically inject the environment variables
   - The contact form will use the secure environment variables

### 4. Verify Deployment

1. **Check the contact form** on your live site
2. **Monitor EmailJS usage** in your dashboard
3. **Test form submission** to ensure emails are sent correctly

### 5. Security Best Practices

- ✅ **No hardcoded keys** in your code
- ✅ **Environment variables** for all sensitive data
- ✅ **Proper .gitignore** configuration
- ✅ **Error handling** for missing configuration
- ✅ **Rate limiting** on EmailJS service

## Troubleshooting

### "Email service is not properly configured" Error

**This error means environment variables aren't being loaded properly.**

**Step 1: Check Console Logs**
1. Open your deployed site
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Look for "EmailJS Config Check" logs
5. Should show "Set" for all three variables

**Step 2: Verify Netlify Variables**
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Ensure you have exactly these three variables:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID` 
   - `EMAILJS_TEMPLATE_ID`
3. Variable names must match EXACTLY (case-sensitive)
4. No quotes around values

**Step 3: Force Redeploy**
1. After adding/updating variables, trigger a new deployment
2. Go to Deploys tab → Trigger deploy → Deploy site

**Step 4: Test EmailJS Credentials**
1. Log into [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Test your service and template work there
3. Verify the IDs match what you put in Netlify

### Contact Form Not Working?
1. Check browser console for errors
2. Verify environment variables are set in Netlify
3. Ensure EmailJS service is active
4. Check EmailJS quota limits

### Environment Variables Not Loading?
1. Redeploy your site after adding variables
2. Check variable names match exactly
3. Ensure no trailing spaces in values

## Security Notes

⚠️ **Your previous API keys were exposed in the code and should be considered compromised.**

✅ **Current setup is secure:**
- API keys are only in environment variables
- No sensitive data in version control
- Proper fallback handling for missing keys
- Enhanced .gitignore protection

---

**Ready to deploy!** Your portfolio is now secure for production deployment on Netlify.