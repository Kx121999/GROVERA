# GOLDEN ROOTS V16 — Standalone Preview Guide

Open `index.html` or upload the GitHub Pages ZIP.

Core routes:
- `collection.html?cat=seeds` — category
- `collection.html?cat=seeds&sub=cucumber` — subcategory
- `product.html?id=cucumber-f1` — product
- `search.html?q=سماد` — search
- `checkout.html` — checkout UI
- add `?lang=en` to switch to English, or use the language button.

Cart, wishlist, compare and farm lists persist in the browser using localStorage so the website can be reviewed without Shopify.

The visible catalog is presentation data only and is intentionally isolated in `catalog-data.js`. Replacing that file with real catalog data later does not require redesigning the pages.
