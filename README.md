# GROVERA — Shopify Theme V3

Custom Shopify Online Store 2.0 theme for **GROVERA**, an agricultural e-commerce brand.

## Theme highlights

- Premium GROVERA green / gold visual identity
- Arabic RTL with English-ready LTR support
- Responsive mobile-first storefront
- Homepage with hero, agricultural categories, featured products, brands, offers and trust content
- Mega menu and mobile navigation
- Predictive search overlay
- AJAX cart drawer and quantity controls
- Wishlist and recently viewed using browser local storage
- Shopify collection filters, sorting and pagination
- Product gallery, thumbnails, zoom, variants, quantity, dynamic checkout and WhatsApp CTA
- Product recommendations
- About, Contact, FAQ, Offers, Search, Cart, 404 and All Collections templates
- Canonical / social metadata and structured data
- Theme Editor configurable sections and settings

## Repository structure

```text
assets/      CSS, JavaScript, logo and image assets
config/      Shopify theme settings
layout/      Main theme layout
locales/     Arabic and English locale files
sections/    Theme sections
snippets/    Reusable Liquid snippets
templates/   JSON Shopify templates
```

## Development with Shopify CLI

After cloning the repository and authenticating Shopify CLI:

```bash
shopify theme dev --store your-store.myshopify.com
```

To push the theme as an unpublished theme:

```bash
shopify theme push --unpublished
```

Preview and QA the unpublished theme before publishing.

## Store setup still required

The repository contains the storefront theme, not the merchant's private Shopify Admin data. Before launch configure:

- Real products, prices, variants, inventory and product photos
- Collections and navigation menus
- GROVERA WhatsApp number
- Best Sellers / New Arrivals selections
- UAE shipping rules and rates
- VAT / tax configuration
- Payment methods and optional cash on delivery
- Domain and sender email
- Privacy, returns, shipping and terms policies
- Meta / Google / TikTok tracking through the approved Shopify setup

## Product page scope

The following custom informational blocks are intentionally excluded from the product page:

- لماذا هذا المنتج؟
- يستخدم في ماذا؟
- المحاصيل المناسبة
- المشكلة الزراعية
- مرحلة الاستخدام
- طريقة الاستخدام

The product page focuses on the product media, title, price, variants, quantity, stock state, description, specifications, shipping / returns, cart, checkout and WhatsApp.

## Important

Do not commit API keys, access tokens, passwords or `.env` files to this repository.
