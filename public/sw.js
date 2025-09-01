// public/sw.js
const CACHE_NAME = 'pwa-cache-v1';
const APP_SHELL = [
  '/',                // главная
  '/offline',         // оффлайн-страница (app/offline/page.tsx)
  '/icon-192x192.png',
  '/icon-256x256.png',
  '/icon-384x384.png',
  '/icon-512x512.png',
  '/apple-touch-icon.png',
];

// Установка: предкэшируем shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Активация: чистим старые кэши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Навигация (HTML)
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          // Можно закэшировать свежую HTML-страницу, но осторожно с ISR/SSG
          return fresh;
        } catch {
          const cache = await caches.open(CACHE_NAME);
          const offline = await cache.match('/offline');
          return offline || new Response('Offline', { status: 503 });
        }
      })()
    );
    return;
  }

  // Статика с того же хоста: cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const resp = await fetch(request);
          // Кэшируем только ok-ответы GET
          if (request.method === 'GET' && resp.ok) {
            cache.put(request, resp.clone());
          }
          return resp;
        } catch {
          // Фоллбэк для иконок и т.п. можно добавить при желании
          return new Response('', { status: 408 });
        }
      })()
    );
  }
});
