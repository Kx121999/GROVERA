# GOLDEN ROOTS V21 — Website Control Center

## Implemented
- Central JSON content architecture under `/config/`.
- `site-config.json` controls brand identity, contacts, currency, SEO state and design tokens.
- `homepage.json` controls hero content, homepage section order/visibility, trust content and category introductions.
- `campaigns.json`, `brands.json`, `navigation.json`, `translations.json`, and `pages.json`.
- New `content-loader-v21.js` with local fallback and isolated admin preview override.
- New `control-center.html` for structured editing plus advanced JSON editing.
- Homepage Composer supports drag/reorder and section on/off.
- Preview can be stored locally without affecting normal visitors.
- Import/export of a complete V21 content bundle.
- Optional File System Access write to the selected project folder in supporting browsers.
- Dynamic header/footer/navigation/company details from centralized config.
- Static About/Contact/Shipping/Returns/Privacy/Terms/FAQ content now reads from `pages.json`.
- Brand landing content reads from `brands.json`.
- Fixed the V20 latent `staticPages` runtime dependency by routing static pages through V21 page data.
- PWA cache bumped to V21 and now caches content config files.

## Boundaries
This remains a static GitHub Pages storefront. The Control Center cannot mutate deployed GitHub files by itself. Publish changes by exporting/writing the JSON files and committing/uploading them.
