# V20 SEO Setup

The preview intentionally remains `noindex,nofollow` because the final public domain is not known.

Technical SEO already implemented in the storefront runtime:
- dynamic titles and descriptions
- canonical URL handling
- Open Graph
- Twitter card metadata
- Organization schema
- WebSite/SearchAction schema
- Product schema
- Breadcrumb schema

When the real domain is known, run:

`python tools/build_production_seo.py https://your-real-domain.example/`

This flips public pages to indexable, writes `sitemap.xml`, updates `robots.txt`, and stores the base URL in `site-config.js`.
