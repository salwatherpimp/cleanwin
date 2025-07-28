// Advanced Service Worker with comprehensive caching strategies
const CACHE_VERSION = 'v2';
const CACHE_NAMES = {
  CRITICAL: `cleanwin-critical-${CACHE_VERSION}`,
  HERO: `cleanwin-hero-${CACHE_VERSION}`,
  STATIC: `cleanwin-static-${CACHE_VERSION}`,
  API: `cleanwin-api-${CACHE_VERSION}`,
  IMAGES: `cleanwin-images-${CACHE_VERSION}`,
};

const HERO_ASSETS = [
  'https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif',
  'https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turquis_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif'
];

const CRITICAL_ASSETS = [
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js',
  '/styles/critical-inline.css',
  '/_next/static/css/app.css'
];

const STATIC_ASSETS = [
  '/styles/globals.css',
  '/styles/components.css',
  '/styles/hero-critical.css',
  '/favicon.ico',
  '/site.webmanifest'
];

// Install event - preload critical assets with priority
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Critical assets - highest priority
      caches.open(CACHE_NAMES.CRITICAL)
        .then((cache) => cache.addAll(CRITICAL_ASSETS)),

      // Hero assets - high priority
      caches.open(CACHE_NAMES.HERO)
        .then((cache) => cache.addAll(HERO_ASSETS)),

      // Static assets - medium priority
      caches.open(CACHE_NAMES.STATIC)
        .then((cache) => cache.addAll(STATIC_ASSETS))
    ]).then(() => {
      console.log('Service Worker: All assets cached successfully');
      return self.skipWaiting();
    }).catch((error) => {
      console.error('Service Worker: Cache installation failed', error);
    })
  );
});

// Activate event - cleanup old caches with versioning
self.addEventListener('activate', (event) => {
  const expectedCaches = Object.values(CACHE_NAMES);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCaches.includes(cacheName)) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated and ready');
      return self.clients.claim();
    })
  );
});

// Fetch event - cache-first strategy for hero images
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Handle hero images with cache-first strategy
  if (HERO_ASSETS.some(asset => url.includes(asset.split('/').pop()))) {
    event.respondWith(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((response) => {
              if (response) {
                // Cache hit - return immediately (0ms network delay)
                return response;
              }
              
              // Cache miss - fetch and cache
              return fetch(event.request)
                .then((fetchResponse) => {
                  // Clone response before caching
                  const responseClone = fetchResponse.clone();
                  cache.put(event.request, responseClone);
                  return fetchResponse;
                })
                .catch(() => {
                  // Fallback to gradient placeholder
                  return new Response(
                    `<svg width="480" height="270" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0d9488"/><stop offset="100%" stop-color="#075985"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
                    {
                      headers: {
                        'Content-Type': 'image/svg+xml',
                        'Cache-Control': 'max-age=31536000'
                      }
                    }
                  );
                });
            });
        })
    );
  }
  
  // Handle other requests normally
  else {
    event.respondWith(fetch(event.request));
  }
});

// Background sync for preloading hero images
self.addEventListener('sync', (event) => {
  if (event.tag === 'hero-preload') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(HERO_ASSETS);
        })
    );
  }
});

// Performance optimization: Immediate response for repeated requests
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRELOAD_HERO') {
    caches.open(CACHE_NAME)
      .then((cache) => {
        HERO_ASSETS.forEach((url) => {
          fetch(url).then((response) => {
            cache.put(url, response.clone());
          });
        });
      });
  }
});
