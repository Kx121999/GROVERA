# GOLDEN ROOTS V13 — Retention & Farm Account Setup

## Pages to create in Shopify
Create two normal Shopify Pages and assign these templates:
1. **Quick Order** → template `page.quick-order` → recommended handle `quick-order`.
2. **Saved Farm Lists** → template `page.saved-lists` → recommended handle `saved-lists`.

Set the same handles in Theme Settings → Store Operations V13.

## Quick Order
Choose a default collection in Theme Settings or directly in the Quick Order section. V13 can show up to 50 products in the one-screen order table. Variant availability and price are read from live Shopify data.

## Farm account tiers
The theme checks, in this order:
- `customer.metafields.loyalty.tier`
- customer tag matching the Platinum tag setting
- customer tag matching the Gold tag setting
- customer tag matching the Farm tag setting
- otherwise GREEN

## Loyalty points
Optional customer metafield:
- namespace/key: `loyalty.points`
- recommended type: integer

V13 only displays the balance. Awarding/redeeming points needs a loyalty app or backend automation.

## Subscriptions / recurring orders
If a product has Shopify Selling Plans from a compatible subscription setup, V13 automatically renders the available purchase plans inside the product form and submits the selected `selling_plan`. No fake recurring-order logic is used.

## Saved Farm Lists
V13 stores named lists in browser localStorage. This makes the feature fast and app-free, but the lists are device-local. Account-synced lists across phones/computers require an app/backend or customer metafield API workflow.

## Quote Cart
Enable `Request Quote from cart` in Theme Settings. The form uses Shopify's native contact form and includes each cart line plus the current subtotal.
