# V21 Control Center Guide

Open `control-center.html` from the same served site.

1. Edit Site, Homepage, Campaigns, Navigation, Brands, or Advanced JSON.
2. Click **Save Preview**. The preview is stored only in this browser.
3. Open the Preview tab and review mobile/tablet/desktop widths.
4. Export `GOLDEN_ROOTS_V21_CONTENT_BUNDLE.json`, or download an individual JSON config.
5. In Chromium browsers that support File System Access, **Write JSON to Folder** can write the seven JSON files into a selected project root `/config` folder after explicit permission.
6. Commit/upload the updated `/config/*.json` files to make the changes public.

## Central files
- `config/site-config.json` — identity, company data, contact, currency, theme, SEO state.
- `config/homepage.json` — hero, section order/visibility, category landing copy, trust, cross-sell.
- `config/campaigns.json` — active campaign and campaign content.
- `config/brands.json` — brand landing metadata.
- `config/navigation.json` — top bar, main navigation, mobile links and footer groups.
- `config/translations.json` — central override strings used by V21 chrome/home.
- `config/pages.json` — About, Contact, FAQ and policy-page content.

## Preview safety
Preview data is read only when `?adminPreview=1` is present. Regular storefront visitors never read the browser's Control Center preview bundle.

## Static-site limitation
There is no backend authentication or server-side write API in this version. The Control Center is a local content-authoring tool, not a remote CMS.
