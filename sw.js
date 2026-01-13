const CACHE_NAME = 'gs-inmo-v2';

const FILES_TO_CACHE = [
  '/paginas/inicio/index.html',
  '/paginas/inicio/styles.css',
  '/public/manifest.json',
  '/activos/img/icon-192.png',
  '/activos/img/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});



