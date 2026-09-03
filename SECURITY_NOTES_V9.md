# V9 Security & Production Notes

## Implemented in the theme
- `strict-origin-when-cross-origin` referrer policy.
- Safer external product WhatsApp links already use `rel="noopener"` where opened in a new tab.
- Search, cart and 404 templates receive `noindex,follow`.
- Modal/drawer keyboard behavior is hardened and focus is contained while open.
- AJAX cart requests use same-origin behavior.
- Debug console warnings from normal cart refresh failures are removed from production behavior.

## Intentionally NOT implemented in theme code
HTTP security headers such as HSTS and a strict CSP belong at the Shopify/platform or reverse-proxy layer. A theme-level CSP can break Shopify apps, checkout extensions, payment widgets and analytics. Shopify provides TLS and platform controls; verify live headers after domain launch.

## Before launch
- Enable Shopify customer/account security settings as required.
- Configure payment providers only in Shopify Admin.
- Configure shipping/taxes and test a complete order.
- Review installed apps and remove unused app embeds/scripts.
- Test contact/wholesale forms for spam handling after the live domain is connected.
