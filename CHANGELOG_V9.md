# GOLDEN ROOTS V9 — Performance, Security & Final Launch Hardening

- Added WebP theme/static assets while keeping original source assets.
- Removed the wasted homepage preload for an image not used in the homepage hero.
- Added intrinsic image sizing / async decoding in preview and optimized fallback assets in Shopify sections.
- Added `content-visibility` for below-the-fold sections where supported.
- Added reduced-motion support and visible keyboard focus states.
- Added dialog semantics and keyboard focus trapping for overlays/drawers/quick view.
- Throttled sticky-header scroll work through `requestAnimationFrame`.
- Added referrer policy, CDN preconnect, robots noindex for cart/search/404, and OG image fallback.
- Added BreadcrumbList schema on product and collection templates.
- GitHub preview pages are explicitly `noindex,nofollow` to avoid duplicate indexing.
- Kept Shopify platform security boundaries intact: no risky theme-level CSP that could break checkout/apps.

Static optimized asset set: 1041.2 KB → 554.9 KB (46.7% smaller for converted assets).
