# Jeme Beseka Foncham — Personal Site

Personal brand landing page for **Jeme Beseka Foncham** — Full-Stack Engineer.

**Live URL:** https://jemebeseka.com  
**Stack:** Vanilla HTML5 / CSS3 / JavaScript — zero dependencies, zero build step  
**Hosted on:** Netlify

---

## 🚀 Deploy to Netlify (3 ways)

### Option A — Netlify Drop (Fastest, no account needed)
1. Zip the entire project folder
2. Go to https://app.netlify.com/drop
3. Drag and drop the zip file
4. Site is live in seconds ✅

### Option B — GitHub + Netlify (Recommended for auto-deploys)
1. Push this project to a GitHub repository
2. Go to https://app.netlify.com → "Add new site" → "Import from Git"
3. Connect your GitHub account → select the repo
4. Build settings (auto-detected from `netlify.toml`):
    - **Build command:** *(leave empty)*
    - **Publish directory:** `.`
5. Click **Deploy site**
6. Every push to `main` will auto-deploy ✅

### Option C — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir .
```

---

## 🌐 Custom Domain Setup

1. In Netlify dashboard → **Domain management** → Add custom domain
2. Enter `jemebeseka.com`
3. Update your domain registrar DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5   (Netlify's load balancer IP)

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```
4. SSL/HTTPS is automatically provisioned by Netlify (Let's Encrypt)

---

## 📁 Project Structure

```
/
├── index.html          ← Main page (all sections)
├── style.css           ← Full design system + dark/light mode
├── main.js             ← Interactions: theme, nav, reveal, parallax
├── 404.html            ← Custom 404 page
├── robots.txt          ← SEO crawler instructions
├── sitemap.xml         ← Update lastmod date when content changes
├── site.webmanifest    ← PWA manifest
├── netlify.toml        ← Netlify config: headers, redirects, caching
└── assets/
    ├── profile.jpg     ← YOUR PHOTO (400×400px, WebP preferred)
    ├── og-image.jpg    ← Open Graph image (1200×630px)
    ├── icon-192.png    ← PWA icon
    └── icon-512.png    ← PWA icon
```

---

## ✅ Post-Deploy Checklist

```
[ ] Add your profile photo to /assets/profile.jpg
[ ] Create og-image.jpg (1200×630px) with your name/title
[ ] Update all social links in index.html with real handles
[ ] Verify JSON-LD schema at https://validator.schema.org
[ ] Submit to Google Search Console: https://search.google.com/search-console
[ ] Submit sitemap: https://jemebeseka.com/sitemap.xml
[ ] Test Lighthouse scores (target: 95+ all categories)
[ ] Test dark/light mode toggle
[ ] Check mobile layout at 375px
```

---

## 🎨 Customization

### Update your profile photo
Replace `/assets/profile.jpg` with your actual photo.  
Then update `index.html` — find the `.profile-placeholder` div and replace it:
```html
<img src="assets/profile.jpg" 
     alt="Jeme Beseka Foncham — Full-Stack Engineer" 
     width="400" height="400"
     class="profile-photo" />
```
Add to `style.css`:
```css
.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  position: relative;
  z-index: 1;
}
```

### Update social handles
Search `index.html` for placeholder handles and replace:
- `@jemebeseka` → your actual Twitter handle
- `linkedin.com/in/jeme-beseka` → your LinkedIn URL
- `instagram.com/jemebeseka` → your Instagram
- `youtube.com/@jemebeseka` → your YouTube channel

### Colors
All colors are in `style.css` under `:root` and `[data-theme="dark"]`.  
Change `--coral: #FF6B6B` to any color you prefer.

---

*Built with care for SEO, accessibility, and performance.*