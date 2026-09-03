# V9 Performance Checklist

- WebP fallbacks generated for brand, category and demo product assets.
- Product/catalog images from Shopify continue to use `image_url` responsive widths.
- Main product image remains eager/high priority; below-fold images remain lazy.
- Width/height and aspect-ratio strategies reduce layout shift.
- Scroll-state updates are rAF-throttled.
- Reduced motion is honored.
- Below-the-fold sections use content-visibility when supported.

Live Core Web Vitals must be measured after real products, apps, domain, fonts and third-party scripts are connected; static preview scores cannot guarantee the production score.
