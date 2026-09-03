# GOLDEN ROOTS V12 — Catalog Data Setup

V12 is designed so product content comes from Shopify product fields and metafields instead of being hard-coded in Liquid.

## Core product metafields (`custom`)
- `catalog_profile` — Single line text. Allowed values: `general`, `seeds`, `fertilizer`, `pesticide`, `irrigation`, `greenhouse`, `tool`. Optional; if blank, the theme auto-detects from Product type / profile tags.
- `badge` — Single line text. Optional custom product badge.
- `specifications` — Rich text. Optional technical specifications accordion.
- `package_size` — Single line text.
- `seed_count` — Single line text or number.
- `variety` — Single line text.
- `hybrid` — Single line text.
- `npk_formula` — Single line text.
- `weight` — Single line text.
- `formulation` — Single line text.
- `active_ingredient` — Single line text.
- `volume` — Single line text.
- `model` — Single line text.
- `power` — Single line text.
- `warranty` — Single line text.
- `flow_rate` — Single line text.
- `connection_size` — Single line text.
- `structure_size` — Single line text.
- `coverage_area` — Single line text.
- `b2b_moq` — Integer. Overrides the theme-wide B2B minimum quantity.
- `b2b_note` — Multi-line text. Optional commercial note.
- `b2b_disabled` — Boolean. Hides the bulk-quote form for that product.

## Collection metafields already supported from V11
- `custom.featured_products` — Product list used for merchandising/pinned items when configured.

## Metaobjects
No metaobject is mandatory for V12. This is intentional: products remain importable by CSV and manageable by normal Shopify product workflows. Metaobjects can be added later for richer brand/editorial content without changing the commerce data model.

## Import strategy
For large catalogs, import standard Shopify product/variant data first. Then populate optional metafields in bulk using Shopify's bulk editor, supported CSV workflow/app, or Admin API. Missing optional metafields do not break the storefront.
