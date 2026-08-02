const CACHE_VERSION = 'autn-shell-v2';
const STATIC_CACHE = CACHE_VERSION;
const scopeUrl = new URL(self.registration.scope);
const local = path => new URL(path, scopeUrl).href;

const APP_SHELL = [
  local('./'),
  local('./index.html'),
  local('./api-connection.html'),
  local('./api-connection.min.html'),
  local('./offline.html'),
  local('./manifest.webmanifest'),
  local('./icons/icon-192.png'),
  local('./icons/icon-512.png'),
  local('./icons/maskable-512.png')
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== STATIC_CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  // Never cache APIs, authentication, analytics, chat, billing or user-specific data.
  if (url.pathname.startsWith('/api/') || url.hostname.endsWith('azurewebsites.net')) {
    event.respondWith(fetch(request));
    return;
  }

  // HTML navigation: network first, then cached page, then offline fallback.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok && url.origin === self.location.origin) {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match(local('./offline.html'));
        })
    );
    return;
  }

  // Same-origin static assets: cache first with background refresh.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then(cached => {
        const network = fetch(request).then(response => {
          if (response.ok && response.type === 'basic') {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then(cache => cache.put(request, copy));
          }
          return response;
        });
        return cached || network;
      })
    );
    return;
  }

  // Third-party CDN resources remain network-only.
  event.respondWith(fetch(request));
});
