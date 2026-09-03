# V17 PWA / App-like Web Experience

- `site.webmanifest` defines the installable Golden Roots web app.
- `sw.js` caches the core shell and previously opened pages/assets.
- `offline.html` is the navigation fallback when offline.
- Service workers require HTTPS or localhost; they do not activate from a direct `file://` URL.
- The install button appears only when the browser fires the PWA installation event.
