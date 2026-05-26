# Marketing Site

## Routes
- `/` — Primary sales homepage for the website-factory offer.
- `/offer-site/services`
- `/offer-site/examples`
- `/offer-site/pricing`
- `/offer-site/process`
- `/offer-site/faq`
- `/offer-site/contact`
- `/demo-library/` — Legacy template index for browsing generated demos.

## Editing copy and pricing
- Homepage messaging and CTA: `src/pages/index.astro`
- Service details: `src/pages/offer-site/services.astro`
- Pricing tier copy: `src/pages/offer-site/pricing.astro`
- FAQ and process details: corresponding files under `src/pages/offer-site/`

## Notes
- This marketing layer is static-only (no backend).
- Existing `/examples/[slug]/...` generator routes are preserved.
