# GOLDEN ROOTS V11 — Catalog Intelligence + Merchandising

## Implemented
- Product comparison (up to 4 products) with compare page and floating compare tray.
- Product-specific templates: Seeds, Fertilizers, Pesticides/Crop Protection, Tools & Equipment.
- Admin-friendly metafield specification snapshot per product profile.
- Native Shopify quantity rules / quantity price breaks UI when available.
- Complementary product recommendations using Shopify product recommendations with complementary intent.
- Product bundle builder using `custom.bundle_products` list.product_reference or Theme Editor blocks; multi-item AJAX add.
- Collection merchandising spotlight using `collection.metafields.custom.featured_products` list.product_reference.
- Custom product badge metafield `custom.badge`.
- Search synonym normalization for predictive search + zero-results recovery collection.
- Brand/vendor index page.
- Save entire cart locally and restore it later on the same device.
- Restock request fallback form for unavailable products (manual follow-up; compatible with dedicated apps later).
- Existing V10.1 Smart Finder, Quick Buy, wishlist, B2B, reorder, mobile dock, AJAX cart and checkout flow preserved.

## Product templates
Assign these templates from Shopify Admin when desired:
- `product.seeds`
- `product.fertilizers`
- `product.pesticides`
- `product.tools`

## Important
Theme code does not create Shopify automatic collections, B2B catalogs, automatic discounts, or automated back-in-stock emails. V11 exposes the storefront UX and native integration points; configure those commercial rules in Shopify Admin / Search & Discovery / compatible apps.
