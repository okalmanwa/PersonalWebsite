# careymanwa.com

Personal research website for Carey Okal, built to `WEBSITE_DESIGN_BRIEF.md`.

Astro 5 · hand-rolled CSS token system (no Tailwind, no component library) ·
self-hosted variable fonts (Newsreader / Inter / IBM Plex Mono) ·
signature element: live multi-agent Canvas 2D simulation in the hero
(~2KB of JS total, pauses off-screen, fully static under `prefers-reduced-motion`).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

## Before you ship

1. **Photo**: drop your portrait at `public/portrait.jpg` and rebuild; the
   About page picks it up automatically (it's hidden until the file exists).
2. **Links**: add your real GitHub / LinkedIn / Google Scholar URLs in
   `src/components/Footer.astro` (marked TODO).
3. **Research links**: each project page has an `article-links` footer;
   add paper/repo/lab URLs in `src/pages/research/[slug].astro` or per-entry
   frontmatter as they become public.

## Editing content

Research pages are Markdown documents in `src/content/research/`:
frontmatter (title, lab, dates, status, abstract, methods, stack, order,
featured) plus the body following the Distill grammar: the question → the
system → what I built → what we learned. System diagrams live in
`src/components/Diagram.astro` (hand-drawn SVG, keyed by slug).

## Deploy

Static output: Vercel or Cloudflare Pages, zero config:

```bash
# Vercel
npx vercel --prod
# build command: npm run build, output dir: dist
```

Then point `careymanwa.com` at it and submit `https://careymanwa.com/sitemap-index.xml`
in Google Search Console.

## What's deliberately not here (phase 2 candidates)

- `/notes` research garden (Maggie-Appleton-style)
- Per-page generated OG images (one site-wide `public/og.png` ships now)
- Margin sidenotes (the CSS hooks exist; add when there's prose that needs them)
