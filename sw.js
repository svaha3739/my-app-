// 파일명: sw.js
const CACHE_NAME = 'slow-jogging-v1';
const urlsToCache = [
  './',
  './index.html',
  './main.js',
  './style.css',
  './icon.jpeg' // 대소문자 주의! 폴더에 있는 파일명과 정확히 같아야 합니다.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});