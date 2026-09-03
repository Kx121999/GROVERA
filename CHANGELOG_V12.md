# GOLDEN ROOTS V12 — Live Commerce Engine

## Implemented
- Live Catalog homepage section that reads Shopify collections instead of relying on demo category cards.
- Menu-driven mega navigation with automatic live-collection fallback if the selected menu is empty.
- Auto product profile engine with optional `custom.catalog_profile` override and product-type/tag detection.
- Added irrigation and greenhouse product profiles/templates.
- Product media gallery supports images, native video, external video, and 3D model media.
- Variant changes now keep price, SKU, inventory, selected media, WhatsApp, and B2B variant context synchronized.
- Dynamic B2B MOQ per product via metafield with a global default.
- Smart cart matching pulls suggestions from the same live collection as the first cart item.
- UAE emirate delivery guidance supports per-emirate ETA text while Shopify checkout remains the source of truth for rates.
- Empty collection and catalog safeguards with optional global fallback collection.
- Customer account utility shortcuts for wishlist, saved cart, and new order.
- Retained V11 comparison, bundles, saved cart, search synonyms, brand index, quantity breaks, complementary products, Smart Finder, and Quick Buy.

## Shopify Admin still required
The theme cannot create metafield/metaobject definitions, payment gateways, shipping profiles, tax settings, customer accounts, discounts, or live products by itself. V12 is wired to consume those settings after they are created in Shopify Admin.
