const CACHE_NAME = "autn-shell-v3";

const APP_SHELL = [
    "/api-connection.html",
    "/api-connection.min.html",
    "/offline.html",
    "/manifest.webmanifest",
    "/assets/icons/icon-192.png",
    "/assets/icons/icon-512.png",
    "/assets/icons/maskable-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;
    const url = new URL(request.url);

    // Ignore non-GET requests such as login, reports and chat submissions.
    if (request.method !== "GET") {
        return;
    }

    // Do not cache or intercept API requests.
    if (
        url.origin !== self.location.origin ||
        url.pathname.startsWith("/api/") ||
        url.pathname.includes("/api/v1/")
    ) {
        return;
    }

    // Handle full-page navigation.
    if (request.mode === "navigate") {
        event.respondWith(handleNavigation(request));
        return;
    }

    // Handle images, manifests and other same-origin static files.
    event.respondWith(handleStaticAsset(request));
});

async function handleNavigation(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);

            // Save a clone because a response body can only be consumed once.
            await cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        // The exact requested page may already have been cached.
        const cachedPage = await caches.match(request);

        if (cachedPage) {
            return cachedPage;
        }

        // Fall back to the dedicated offline page.
        const offlinePage = await caches.match("/offline.html");

        if (offlinePage) {
            return offlinePage;
        }

        // Last-resort response in case offline.html was not cached.
        return new Response(
            `
                <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    >
                    <title>Offline</title>
                </head>
                <body>
                    <h1>You are offline</h1>
                    <p>Check your network connection and try again.</p>
                </body>
                </html>
            `,
            {
                status: 503,
                headers: {
                    "Content-Type": "text/html; charset=utf-8"
                }
            }
        );
    }
}

async function handleStaticAsset(request) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);

        if (
            networkResponse &&
            networkResponse.ok &&
            networkResponse.type === "basic"
        ) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        return new Response("", {
            status: 504,
            statusText: "Offline"
        });
    }
}
