# GOLDEN ROOTS V19 — Usability Stress Test + Final Cleanup

## Fixed / hardened
- Migrates V17-era local state into a clean V19 namespace once, then sanitizes stale or malformed cart/wishlist/compare/list data.
- Cart and Quick Order quantities are clamped to available stock; duplicate cart lines are merged safely.
- Compare now gives a clear 4-product limit instead of silently failing.
- Cross-tab state sync added for cart, wishlist, compare, lists and orders.
- Drawers, search, menu and image zoom now expose dialog semantics, aria-hidden state, focus restoration and keyboard focus trapping.
- Quantity controls and comparison removal controls gained accessible labels and larger touch targets.
- Product variant and quantity indexes are clamped to valid values.
- Checkout fields gained autocomplete/minimum validation and step aria-current states.
- Product image failures fall back to the Golden Roots mark instead of leaving broken images.
- Mobile hides the secondary compare action on product cards to reduce feature density.
- Collection filters now include in-results search and preserve active filters when switching subcategories.
- PWA strategy changed so HTML/JS/CSS/catalog prefer the network while images use stale-while-revalidate, reducing stale-version problems.
- Removed unnecessary customer-facing “preview catalog” wording from home/offers while keeping checkout/order simulation disclosure explicit.
- No Shopify, Meta, Google or payment integration added.

## Deliberately unchanged
- Checkout still simulates an order locally; it does not send data or collect money.
- Contact and B2B forms remain local-only until a backend/service is connected.
- Business/legal policy wording still needs company approval before a real launch.
