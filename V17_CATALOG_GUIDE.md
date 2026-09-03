# V17 Catalog Guide

`catalog.json` is the canonical standalone catalog.

A product includes: `id`, Arabic/English names, category/subcategory, product type, price, stock, image, brand, SKU, variants and specifications.

All storefront surfaces read from the same data model: home, collections, search, product page, cart, wishlist, comparison, Quick Order and recommendations.

For direct `file://` preview only, `catalog-data.js` is a generated fallback copy. On GitHub Pages / HTTPS, the website loads `catalog.json` directly. If you edit the JSON and need direct-file preview too, regenerate the fallback with `tools/sync-catalog.mjs`.
