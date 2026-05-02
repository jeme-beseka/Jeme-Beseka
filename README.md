# Jeme Beseka Foncham — Personal Site

Personal brand landing page for **Jeme Beseka Foncham** — Full-Stack Engineer.

**Live URL:** https://jemebeseka.netlify.app/   
**Stack:** Vanilla HTML5 / CSS3 / JavaScript — zero dependencies, zero build step  
**Hosted on:** Netlify

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

## What This Is

This is a single-page personal website built to establish a strong, searchable digital identity for Jeme Beseka Foncham. It serves as the central hub of an online presence — connecting visitors to every professional profile, telling the story of who Jeme is, and ensuring that anyone searching his name on Google or any search engine finds accurate, well-structured information about him.

The site is intentionally minimal in its dependencies but maximal in its attention to detail — covering SEO, accessibility, performance, and design with equal care.

---

## Sections

**Hero** — The first thing visitors see. A bold typographic introduction with name, professional title, a short bio, and two calls to action — one pointing to the portfolio and one to the contact section. Animated on load with a subtle coral glow background and an interactive parallax orb that follows the cursor.

**About** — A written portrait of Jeme as an engineer and person. Covers his professional background, the kinds of systems he has built, his current role, education at the University of Buea, and the languages he speaks. Accompanied by a profile photo, a decorative animated frame, and four stat cards highlighting years of experience, projects shipped, developers mentored, and countries worked in.

**Stack** — A grouped display of every technology in Jeme's toolkit, organized into four categories: Frontend, Backend, Tools & DevOps, and Databases. Each technology is displayed as an interactive pill tag that responds on hover.

**Experience** — A vertical timeline of Jeme's full work history, from his internship at Genie Capital Ltd in 2020 through his current position at Choc-City Group. Each entry includes the role, company, dates, and a short description of the work done.

**Connect** — A grid of six cards linking to all of Jeme's social and professional profiles: GitHub, LinkedIn, Twitter/X, Instagram, YouTube, and his existing portfolio site. Each card is interactive with a hover state that fills with a coral accent.

**Contact** — A clean, minimal closing section with a large clickable email link and a pulsing green "Open to opportunities" availability badge.

---

## Design

The site uses a **Slate & Coral** color system — cool slate grays as the base with a warm coral (`#FF6B6B`) as the primary accent. The palette is fully implemented as CSS custom properties, making light and dark mode a clean token swap with no duplication.

**Typography** pairs **Sora** (a geometric sans-serif with personality) for headings and body text, with **Fira Code** (a monospace font) for code-style elements like the logo, section labels, and the hero tagline — giving the site a subtle developer aesthetic without being over-the-top.

Dark mode is the default. The theme toggles between dark and light via a button in the navbar, persists the user's preference to `localStorage`, and respects the OS-level `prefers-color-scheme` setting on first visit. There is no flash of the wrong theme on load.

Animations include staggered fade-in reveals on scroll, a blinking cursor in the hero, a slow rotating dashed ring around the profile photo, and a scanline effect on the scroll indicator. All animations are disabled for users who have `prefers-reduced-motion` enabled.

---

## SEO & Structured Data

The site is built with search engine visibility as a primary concern, not an afterthought.

Every page includes a full **JSON-LD Person schema** that describes Jeme as a named entity — his name, alternate name, job title, location, skills, education, email, and links to all his social profiles. This structured data is what feeds Google's Knowledge Graph and enables the AI Overview panel to generate an accurate summary when his name is searched.

Open Graph and Twitter Card meta tags are included for rich social sharing previews. The canonical URL, sitemap, and robots directives are all configured. The site is also a Progressive Web App with a web manifest, theme color, and PWA icons.

---

## Technical

- **Stack:** Vanilla HTML5, CSS3, JavaScript — no frameworks, no build step, no dependencies
- **Fonts:** Sora + Fira Code via Google Fonts
- **Icons:** Inline SVG — zero external icon library requests
- **Performance target:** Lighthouse score of 95+ across Performance, Accessibility, Best Practices, and SEO
- **Accessibility:** WCAG 2.1 AA compliant — semantic HTML, keyboard navigation, focus styles, ARIA labels, and screen reader support throughout
- **Hosting:** Netlify, with security headers, asset caching, and HTTPS redirects configured

---

## Author

**Jeme Beseka Foncham** · Full-Stack Engineer · Buea, Cameroon 🇨🇲  
[jemebeseka.com](https://jemebeseka.netlify.app/) · [github.com/jeme-beseka](https://github.com/jeme-beseka) · [j.beseka@gmail.com](mailto:j.beseka@gmail.com)
---

*Built with care for SEO, accessibility, and performance.*