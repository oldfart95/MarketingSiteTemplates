# Local Business Website Template Pack (Astro + Tailwind)

Static, mobile-friendly templates for fast delivery of 4–5 page local business websites.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Lint / checks

```bash
npm run lint
```

## Templates included

- Service Business (trades)
- Trust/Care Business
- Professional Local Business

Each includes:
- Home
- Services
- About/Trust
- Gallery & Testimonials
- Contact

## Content model

Edit `src/data/templates.ts` fields:
- businessName, tagline, city, serviceArea
- phone, email, address
- services[], testimonials[], galleryImages[]
- primaryCTA, secondaryCTA
- theme colors
- SEO title/description

## Create a new client site from a template

1. Duplicate an object in `src/data/templates.ts`.
2. Set a new `slug` and replace business details.
3. Add/revise services, testimonials, and images.
4. Build and preview.
5. Deploy.

## Routes

- Landing list: `/`
- Example sites: `/examples/{slug}/`
- Subpages: `/services`, `/about`, `/proof`, `/contact`

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro (or None with custom commands)

## Deploy to GitHub Pages

- Run `npm run build`.
- Publish `dist/` using GitHub Pages action or `gh-pages` workflow.
- If hosted under a subpath, set `site` and optional `base` in `astro.config.mjs`.
