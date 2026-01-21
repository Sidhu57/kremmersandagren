# Deploying Kremmer Sandegren Foundation Website to Hostinger

## ⚠️ CRITICAL NOTICE - READ THIS FIRST ⚠️

**This is a React + Vite application, NOT a WordPress website.**

- ❌ **Cannot** be installed as a WordPress theme or plugin
- ❌ **Cannot** run on WordPress hosting as-is
- ✅ **CAN** be deployed as static files to Hostinger Shared Hosting (non-VPS)
- ✅ **CAN** replace an existing WordPress site

**If you have WordPress currently installed:** You must remove WordPress first, then upload this React app's built files to `public_html`.

## Current Page Backgrounds (Alternating Image/Video)

✅ All pages properly alternate:
1. **Home** - Image background
2. **About** - Video background  
3. **Work** - Image background
4. **Events** - Video background
5. **Gallery** - Image background
6. **News** - Video background
7. **Volunteer** - Image background
8. **Contact** - Video background
9. **Audited Reports** - Image background
10. **Privacy Policy** - Video background
11. **Terms of Use** - Image background
12. **Donation Policy** - Video background

---

## Deployment Options for Hostinger

### Option 1: Deploy to Hostinger Shared Hosting (Non-VPS) ⭐ MOST COMMON

**Works with:** Hostinger Shared Hosting, Business Hosting, or any hosting plan with cPanel/File Manager access.

**This is the standard method for most Hostinger users.**

#### Step 1: Remove WordPress (If Currently Installed)

**⚠️ BACKUP FIRST!** If you have WordPress installed and want to keep it, backup everything before proceeding.

1. Log in to hPanel (Hostinger Control Panel)
2. Go to **File Manager**
3. Navigate to `public_html`
4. **Delete ALL WordPress files** (wp-admin, wp-content, wp-includes, etc.)
   - Or move them to a backup folder outside public_html

#### Step 2: Build the Application

**In Lovable:**
1. Click the "Publish" button (top right)
2. Download the build files if needed

**OR on your local machine:**
```bash
npm run build
```

This creates a `dist` folder with all the static files needed for deployment.

#### Step 3: Upload to Hostinger

**Via File Manager (Easiest):**
1. Log in to hPanel (Hostinger Control Panel)
2. Go to **File Manager**
3. Navigate to `public_html` directory
4. Make sure `public_html` is EMPTY (or contains only backups in subfolders)
5. Upload ALL contents from the `dist` folder to `public_html`
6. **Critical:** Make sure `index.html` is directly in `public_html` (not in a subfolder!)
7. Your structure should look like:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-abc123.css
   │   └── index-xyz789.js
   ├── images/
   ├── videos/
   └── .htaccess (you'll add this next)
   ```

**Via FTP:**
1. Use an FTP client (FileZilla, WinSCP)
2. Connect to your Hostinger account:
   - Host: Your domain or ftp.yourdomain.com
   - Username: Your hosting username
   - Password: Your hosting password
   - Port: 21
3. Navigate to `public_html`
4. Upload all files from the `dist` folder

#### Step 4: Configure .htaccess for React Router

Create a `.htaccess` file in your `public_html` directory with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### Option 2: Deploy to Hostinger Website Builder

**Not Compatible.** Hostinger's Website Builder cannot run this React application. Use Option 1 instead.

---

### Option 3: Use Lovable's Built-in Deployment (Recommended Alternative!)

**Lovable provides free hosting:**

1. Click the **"Publish"** button in Lovable (top right)
2. Your site will be live at: `yoursite.lovable.app`
3. You can then:
   - **Connect Custom Domain**: Go to Project Settings → Domains
   - Point your Hostinger domain to Lovable:
     - Add a CNAME record: `www` → `yoursite.lovable.app`
     - Add an A record for root domain (Lovable will provide IP)

---

## Option 4: Migrate from WordPress to This React App

If you currently have WordPress on Hostinger and want to replace it:

### ⚠️ Backup First!
```bash
# Backup your WordPress database and files before proceeding
```

### Steps:
1. **Backup WordPress** (via hPanel → Backups)
2. **Delete WordPress files** from `public_html`
3. **Build this React app**: `npm run build`
4. **Upload the `dist` folder contents** to `public_html`
5. **Add .htaccess file** (see Option 1, Step 3)
6. **Update DNS** if needed
7. **Test the website**

---

## Connecting Your Domain (If Using Lovable Hosting)

### In Hostinger:
1. Log in to hPanel
2. Go to **Domains** → **DNS Zone**
3. Add these records:

**For www subdomain:**
```
Type: CNAME
Name: www
Points to: yoursite.lovable.app
TTL: 14400
```

**For root domain:**
```
Type: A
Name: @
Points to: [Lovable will provide this IP - check Lovable Settings]
TTL: 14400
```

### In Lovable:
1. Go to **Project Settings** → **Domains**
2. Click **"Add Custom Domain"**
3. Enter your domain: `kremmersandegren.org`
4. Follow the verification steps

---

## Post-Deployment Checklist

✅ All pages load correctly  
✅ Navigation works (all menu items)  
✅ Images and videos display properly  
✅ Forms submit (Contact, Volunteer)  
✅ Mobile responsive design works  
✅ SSL certificate is active (https://)  
✅ Google Maps displays on Contact page  
✅ All links in footer work  

---

## Troubleshooting

### Problem: "404 Not Found" on page refresh
**Solution**: Make sure `.htaccess` file is properly configured (see Option 1, Step 3)

### Problem: Images/Videos not loading
**Solution**: 
- Check if files uploaded correctly
- Verify image URLs in the code
- Check browser console for errors

### Problem: Blank white page
**Solution**:
- Check browser console for JavaScript errors
- Verify all files from `dist` folder were uploaded
- Check if `index.html` is in the root directory

### Problem: Styles not loading
**Solution**:
- Make sure CSS files in `assets` folder are uploaded
- Check if file paths are correct
- Clear browser cache

---

## Performance Optimization

After deployment, consider:

1. **Enable Cloudflare** (free via Hostinger)
2. **Compress images** before uploading
3. **Use CDN** for video files
4. **Enable GZIP compression** (included in .htaccess above)
5. **Monitor loading speed** with Google PageSpeed Insights

---

## Support

For Hostinger-specific issues:
- Hostinger Support: https://www.hostinger.com/contact
- Hostinger Tutorials: https://support.hostinger.com/

For Lovable-specific issues:
- Lovable Docs: https://docs.lovable.dev/
- Lovable Discord: https://discord.gg/lovable

---

## Recommended Approach

### For Hostinger Shared Hosting Users:
**🎯 We recommend Option 1 (Upload to Hostinger)** if you already have Hostinger hosting paid for.

### For New Projects or Easy Updates:
**🎯 We recommend Option 3 (Lovable Hosting) because:**
- ✅ Automatic deployments when you make changes in Lovable
- ✅ Free SSL certificate
- ✅ Built-in CDN for fast loading worldwide
- ✅ No manual file uploads needed
- ✅ Easy custom domain connection
- ✅ Automatic scaling
- ✅ No need to pay for separate hosting

Then simply point your Hostinger domain to your Lovable site using DNS records!

---

## Summary: WordPress vs React

| Feature | WordPress | This React App |
|---------|-----------|----------------|
| Technology | PHP + MySQL | React + JavaScript |
| Installation | Via WordPress dashboard | Upload built files to hosting |
| Updates | Via WordPress admin panel | Rebuild and re-upload (or use Lovable auto-deploy) |
| Themes/Plugins | Yes | No (custom code only) |
| Database | Required | Optional (can use Lovable Cloud if needed) |
| Hosting | PHP hosting | Any static file hosting |

**Bottom line:** This is a modern React web application that's faster and more secure than WordPress, but it's deployed differently.
