# Master Small Business Website System

A practical static website system for rapidly generating polished local business websites from structured data.

This repo started as a set of high-quality Astro templates. The current system keeps that visual work and wraps it in a cleaner, configurable architecture for repeatable client delivery.

## What It Does

- Generates a client-ready small business site from one active config.
- Supports reusable industries, themes, templates, and business profiles.
- Ships as a static Astro site deployable to Cloudflare Pages, Netlify, or GitHub Pages.
- Includes compact example templates, premium examples, and a configurable `/site` output.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Typecheck / Lint

```bash
npm run lint
```

## Main Routes

- `/site/` - active generated client site
- `/site/services` - active services page
- `/site/about` - active about/trust page
- `/site/proof` - active gallery/reviews page
- `/site/contact` - active contact page
- `/examples/{slug}/` - original compact examples
- `/premium/{slug}/` - expanded premium examples

## Change The Active Site

Edit:

```ts
src/data/site.config.ts
```

Example:

```ts
export const activeSite = {
  businessId: 'drywall-demo',
  templateId: 'bold-contractor',
  themeId: 'warm-amber'
};
```

## Add A New Business

1. Create a new file in `src/data/businesses/`, for example:

```ts
src/data/businesses/example-business.ts
```

2. Export a `BusinessProfile`.
3. Add it to `src/data/businesses/index.ts`.
4. Point `src/data/site.config.ts` at the new `businessId`.
5. Run `npm run build`.

## Switch Industries

Industry defaults live in:

```text
src/data/industries/index.ts
```

Each industry includes default services, FAQs, CTA language, trust badges, SEO keywords, tone, suggested sections, and image hints.

## Switch Templates

Template definitions live in:

```text
src/data/templates/index.ts
```

Current template IDs:

- `classic-local-service`
- `premium-dark`
- `warm-family-business`
- `bold-contractor`

## Switch Themes

Theme definitions live in:

```text
src/data/themes.ts
```

Current theme IDs:

- `clean-blue`
- `warm-amber`
- `care-green`
- `premium-charcoal`

## Client Intake

Use:

- `src/data/client-intake.schema.ts`
- `docs/client-intake.md`

## Sales Offer

Use:

- `docs/offer.md`

## Deploy

Cloudflare Pages / Netlify:

- Build command: `npm run build`
- Output directory: `dist`

GitHub Pages:

- Build with `npm run build`
- Publish `dist/` using a GitHub Pages workflow

## Recommended Next Steps

- Add a small script to scaffold a new `BusinessProfile`.
- Add optional per-service static pages.
- Add a screenshot QA workflow.
- Add more industry configs as real client niches appear.
