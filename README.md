# Static site (HTML / CSS / JS)

**This is the live site.** Edit files here directly.

## Pages

- `/` — homepage (hero, research, projects, contact)
- `/teaching/` — teaching
- `/research/social-simulation/` — research articles (×4)
- `/404.html` — not found

## Run locally

```bash
npx serve site
```

Open http://localhost:3000

## Deploy

Upload the contents of `site/` to any static host (GitHub Pages, Cloudflare Pages, Netlify). Point your domain at it. `CNAME` is included for custom domains.

## Structure

```
site/
  index.html
  404.html
  teaching/index.html
  research/*/index.html
  css/main.css      ← edit styles here
  js/nav.js, hero.js, reveal.js
  fonts/
  images/
```
