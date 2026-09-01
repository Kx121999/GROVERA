# GROVERA — GitHub Pages + Shopify Theme

This repository is arranged so GitHub Pages opens the GROVERA storefront preview directly.

## GitHub Pages preview files at repository root

- `index.html` — homepage
- `product.html` — product page preview
- `collection.html` — collection page preview
- `assets/` — images, logo, CSS and theme assets
- `preview-extra.css` — static preview helpers
- `preview.js` — static preview interactions
- `.nojekyll` — GitHub Pages compatibility

## Shopify theme source

The production Shopify Online Store 2.0 source is inside:

`shopify-theme/`

Upload the contents of that folder through Shopify CLI, or use the separate Shopify theme ZIP supplied with the project.

## Enable GitHub Pages

GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

The root `index.html` means Pages will show the storefront instead of README.

> The GitHub Pages version is a static visual preview. Checkout, real catalog, inventory, customer accounts and Shopify dynamic data only work on Shopify.
