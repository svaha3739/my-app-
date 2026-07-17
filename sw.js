const CACHE_NAME = 'jogging-app-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

// 스마트폰이 앱으로 인식하기 위한 필수 조건 (가짜로라도 응답해주는 기능)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});