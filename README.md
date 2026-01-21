# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c1c042c7-2e36-4bfe-85bf-7970267d1e6e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c1c042c7-2e36-4bfe-85bf-7970267d1e6e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy via Lovable (Recommended)

Simply open [Lovable](https://lovable.dev/projects/c1c042c7-2e36-4bfe-85bf-7970267d1e6e) and click on Share → Publish.

You can connect a custom domain by navigating to Project > Settings > Domains and clicking Connect Domain.

### Option 2: Deploy to Hostinger Shared Hosting (Non-VPS)

**Important:** This is a React application, NOT a WordPress site. It cannot be installed as a WordPress theme or plugin.

**To deploy to Hostinger:**

1. **Build the application:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with all static files.

2. **Upload to Hostinger:**
   - Log in to hPanel (Hostinger Control Panel)
   - Go to File Manager → `public_html`
   - Delete existing WordPress/website files (backup first!)
   - Upload ALL files from the `dist` folder to `public_html`
   - Make sure `index.html` is in the root of `public_html`

3. **Add .htaccess file** to `public_html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

**📖 Detailed deployment guide:** See `DEPLOYMENT_HOSTINGER.md` for complete step-by-step instructions.

### Option 3: Self-hosting on Other Platforms

You can deploy the `dist` folder generated from running `npm run build` to any static file hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Can I connect a custom domain?

Yes! You can connect a custom domain through Lovable (Project > Settings > Domains) or by configuring DNS records at your domain registrar to point to your hosting.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
