# GOLDEN ROOTS V15 — Production Audit & Launch Readiness

## Production changes
- Consolidated the default homepage by removing duplicate / placeholder-heavy modules from the default section order.
- Streamlined product cards by default: wishlist + primary purchase action remain visible; compare and Farm Lists remain available on the product page.
- Removed storefront-facing implementation/version wording such as V13, Search V3, Shopify Admin and Theme Editor instructions.
- Loyalty/tier UI no longer renders unless real customer loyalty/tier data is configured.
- Removed manual review blocks to avoid accidental display of fabricated testimonials; reviews are now app/rating-data driven.
- Added accessible labels to close, zoom, filter and quantity controls.
- Improved mobile guardrails, focus visibility and 16px form controls to avoid iOS input zoom.
- Added safe empty states for unconfigured Quick Order and live catalog sections.

## Feature consolidation
Default homepage no longer includes the generic Promo, Shop-by-Need and manually seeded Brands blocks. They remain available as optional sections in the Theme Editor.

## Not activated by theme code
Payment gateways, shipping profiles/rates, taxes, legal policy content, customer-account mode, live product catalog, loyalty awarding logic and real contact details still require Shopify Admin / business configuration.
