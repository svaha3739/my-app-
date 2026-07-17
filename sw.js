/* 파일명: sw.js */
// 버전 이름을 final-v2로 올려서 스마트폰이 기존 쓰레기 파일을 강제로 토해내게 만듭니다.
const CACHE_NAME = 'slow-jogging-final-v2';
const urlsToCache = [
  './',
  './index.html',
  './main.js',
  './icon.jpeg'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // 기다리지 말고 즉시 새 버전으로 덮어써라!
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
          // 이름이 final-v2가 아닌 옛날 기억들은 모조리 삭제(delete)해버립니다.
          if (cache !== CACHE_NAME) {
            console.log('오래된 캐시 삭제 완료:', cache);
            return caches.delete(cache); 
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
        // 캐시에 있으면 그걸 주고, 없으면 인터넷에서 새로 가져옵니다.
        return response || fetch(event.request);
      })
  );
});