const CACHE_NAME = 'jekyll-garden-v1';
const urlsToCache = [
  '/jekyll-digital-garden/',
  '/jekyll-digital-garden/index.html',
  '/jekyll-digital-garden/about.html',
  '/jekyll-digital-garden/blog.html',
  '/jekyll-digital-garden/credits.html',
  '/jekyll-digital-garden/notes.html',
  '/jekyll-digital-garden/404.html',
  '/jekyll-digital-garden/feed.xml',
  '/jekyll-digital-garden/sitemap.xml',
  '/jekyll-digital-garden/robots.txt',
  '/jekyll-digital-garden/SearchData.json',
  '/jekyll-digital-garden/autocomplete.txt',

  // CSS
  '/jekyll-digital-garden/assets/css/style.css',
  '/jekyll-digital-garden/assets/css/style2.css',
  '/jekyll-digital-garden/assets/css/header.css',
  '/jekyll-digital-garden/assets/css/fruity.css',
  '/jekyll-digital-garden/assets/css/vendor/Katex.css',

  // JS
  '/jekyll-digital-garden/assets/js/Search.js',
  '/jekyll-digital-garden/assets/js/vendor/lunr.min.js',

  // Иконки и изображения
  '/jekyll-digital-garden/assets/img/1-how-to.png',
  '/jekyll-digital-garden/assets/img/2-how-to.png',
  '/jekyll-digital-garden/assets/img/3-how-to.png',
  '/jekyll-digital-garden/assets/img/4-how-to.png',
  '/jekyll-digital-garden/assets/img/5-how-to.png',
  '/jekyll-digital-garden/assets/img/6-how-to.png',
  '/jekyll-digital-garden/assets/img/7-how-to.png',
  '/jekyll-digital-garden/assets/img/OGImg.png',
  '/jekyll-digital-garden/assets/img/Screenshot-Jekyll-Garden-Menu.png',
  '/jekyll-digital-garden/assets/img/Screenshot-Jekyll-Garden-New-Menu.png',
  '/jekyll-digital-garden/assets/img/Screenshot-Jekyll-Garden-New-Search.png',
  '/jekyll-digital-garden/assets/img/Screenshot-Jekyll-Garden-New.png',
  '/jekyll-digital-garden/assets/img/Screenshot-Jekyll-Garden.png',
  '/jekyll-digital-garden/assets/img/external-link.svg',
  '/jekyll-digital-garden/assets/img/favicon.ico',
  '/jekyll-digital-garden/assets/img/favicon.svg',
  '/jekyll-digital-garden/assets/img/icon-192.svg',
  '/jekyll-digital-garden/assets/img/icon-512.svg',
  '/jekyll-digital-garden/assets/img/icon.png',
  '/jekyll-digital-garden/assets/img/icon2.png',
  '/jekyll-digital-garden/assets/img/moon.svg',
  '/jekyll-digital-garden/assets/img/sun.svg',
  '/jekyll-digital-garden/assets/img/og-image.svg',

  // KaTeX шрифты
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_AMS-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Caligraphic-Bold.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Caligraphic-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Fraktur-Bold.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Fraktur-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Main-BoldItalic.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Main-Bold.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Main-Italic.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Main-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Math-BoldItalic.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Math-Italic.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_SansSerif-Bold.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_SansSerif-Italic.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_SansSerif-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Script-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Size1-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Size2-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Size3-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Size4-Regular.woff2',
  '/jekyll-digital-garden/assets/css/vendor/fonts/KaTeX_Typewriter-Regular.woff2',

  // PWA манифест
  '/jekyll-digital-garden/manifest.json',
  '/jekyll-digital-garden/manifest.webmanifest'
];

// Установка Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // немедленная активация нового SW
});

// Активация и удаление старых кэшей
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim(); // взять управление активными страницами
});

// Обработка запросов: сначала сеть, потом кэш
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
