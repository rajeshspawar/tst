self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('github-pwa').then(cache => {
      return cache.addAll(['/index.html']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/index.html'))
  );
});
