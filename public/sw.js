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

// Advanced fetch strategies with intelligent caching
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const request = event.request;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Hero images - Cache First (instant loading)
  if (HERO_ASSETS.some(asset => url.href.includes(asset.split('/').pop()))) {
    event.respondWith(handleHeroAssets(request));
  }

  // Critical JS/CSS - Stale While Revalidate
  else if (CRITICAL_ASSETS.some(asset => url.pathname.includes(asset))) {
    event.respondWith(handleCriticalAssets(request));
  }

  // Static assets - Cache First with long TTL
  else if (STATIC_ASSETS.some(asset => url.pathname.includes(asset))) {
    event.respondWith(handleStaticAssets(request));
  }

  // Images - Cache First with image optimization
  else if (request.destination === 'image' || /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(url.pathname)) {
    event.respondWith(handleImageAssets(request));
  }

  // API calls - Network First with short cache
  else if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleAPIRequests(request));
  }

  // HTML pages - Network First
  else if (request.destination === 'document') {
    event.respondWith(handleDocumentRequests(request));
  }

  // Everything else - Network with cache fallback
  else {
    event.respondWith(handleGenericRequests(request));
  }
});

// Cache-First strategy for hero assets (0ms repeat visits)
async function handleHeroAssets(request) {
  const cache = await caches.open(CACHE_NAMES.HERO);
  const cached = await cache.match(request);

  if (cached) {
    return cached; // Instant return from cache
  }

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    // Fallback to optimized gradient
    return new Response(
      '<svg width="480" height="270" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0d9488"/><stop offset="100%" stop-color="#075985"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>',
      { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'max-age=31536000' } }
    );
  }
}

// Stale-While-Revalidate for critical assets
async function handleCriticalAssets(request) {
  const cache = await caches.open(CACHE_NAMES.CRITICAL);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    cache.put(request, response.clone());
    return response;
  });

  return cached || await fetchPromise;
}

// Cache-First for static assets
async function handleStaticAssets(request) {
  const cache = await caches.open(CACHE_NAMES.STATIC);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}

// Cache-First for images with optimization
async function handleImageAssets(request) {
  const cache = await caches.open(CACHE_NAMES.IMAGES);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Return a placeholder image
    return new Response('', { status: 404 });
  }
}

// Network-First for API requests with short cache
async function handleAPIRequests(request) {
  const cache = await caches.open(CACHE_NAMES.API);

  try {
    const response = await fetch(request);
    if (response.ok) {
      // Cache API responses for 5 minutes
      const responseClone = response.clone();
      setTimeout(() => cache.delete(request), 300000); // 5 minutes
      cache.put(request, responseClone);
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached || new Response('Network error', { status: 503 });
  }
}

// Network-First for documents
async function handleDocumentRequests(request) {
  try {
    return await fetch(request);
  } catch (error) {
    // Could implement offline page here
    return new Response('Offline', { status: 503 });
  }
}

// Generic network with cache fallback
async function handleGenericRequests(request) {
  const cache = await caches.open(CACHE_NAMES.STATIC);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached || new Response('Network error', { status: 503 });
  }
}

// Advanced background sync for performance optimization
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered', event.tag);

  switch (event.tag) {
    case 'hero-preload':
      event.waitUntil(preloadHeroAssets());
      break;
    case 'static-preload':
      event.waitUntil(preloadStaticAssets());
      break;
    case 'cache-cleanup':
      event.waitUntil(cleanupOldCaches());
      break;
  }
});

// Enhanced messaging system
self.addEventListener('message', (event) => {
  const { type, data } = event.data || {};

  switch (type) {
    case 'PRELOAD_HERO':
      preloadHeroAssets();
      break;
    case 'PRELOAD_CRITICAL':
      preloadCriticalAssets();
      break;
    case 'CACHE_STATS':
      getCacheStats().then(stats => {
        event.ports[0].postMessage({ type: 'CACHE_STATS_RESPONSE', data: stats });
      });
      break;
    case 'CLEAR_CACHE':
      clearSpecificCache(data.cacheName).then(() => {
        event.ports[0].postMessage({ type: 'CACHE_CLEARED', data: { cacheName: data.cacheName } });
      });
      break;
  }
});

// Preload functions
async function preloadHeroAssets() {
  const cache = await caches.open(CACHE_NAMES.HERO);
  return Promise.all(
    HERO_ASSETS.map(url =>
      fetch(url).then(response => {
        if (response.ok) {
          cache.put(url, response.clone());
        }
      }).catch(() => {})
    )
  );
}

async function preloadCriticalAssets() {
  const cache = await caches.open(CACHE_NAMES.CRITICAL);
  return Promise.all(
    CRITICAL_ASSETS.map(url =>
      fetch(url).then(response => {
        if (response.ok) {
          cache.put(url, response.clone());
        }
      }).catch(() => {})
    )
  );
}

async function preloadStaticAssets() {
  const cache = await caches.open(CACHE_NAMES.STATIC);
  return Promise.all(
    STATIC_ASSETS.map(url =>
      fetch(url).then(response => {
        if (response.ok) {
          cache.put(url, response.clone());
        }
      }).catch(() => {})
    )
  );
}

// Cache management functions
async function getCacheStats() {
  const cacheNames = await caches.keys();
  const stats = {};

  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    stats[cacheName] = keys.length;
  }

  return stats;
}

async function clearSpecificCache(cacheName) {
  return caches.delete(cacheName);
}

async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const expectedCaches = Object.values(CACHE_NAMES);

  return Promise.all(
    cacheNames.map(cacheName => {
      if (!expectedCaches.includes(cacheName)) {
        return caches.delete(cacheName);
      }
    })
  );
}

// Performance monitoring
self.addEventListener('notificationclick', (event) => {
  // Handle performance notifications
  event.notification.close();

  if (event.action === 'optimize') {
    // Trigger performance optimizations
    Promise.all([
      preloadHeroAssets(),
      preloadCriticalAssets(),
      cleanupOldCaches()
    ]);
  }
});
