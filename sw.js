// 버전 이름을 v2로 올려서 스마트폰이 강제로 새로고침하게 만듭니다.
const CACHE_NAME = 'slow-jogging-v2';
const urlsToCache = [
  './',
  './index.html',
  './main.js',
  './style.css',
  './icon.jpeg'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // 즉시 설치 명령
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // 이전 버전 쓰레기통 비우기
          }
        })
      );
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