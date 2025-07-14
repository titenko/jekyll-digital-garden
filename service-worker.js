---
layout: null
---

const CACHE_NAME = 'jekyll-garden-v1';
const urlsToCache = [
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/index.html',
  '{{ site.baseurl }}/about.html',
  '{{ site.baseurl }}/blog.html',
  '{{ site.baseurl }}/credits.html',
  '{{ site.baseurl }}/notes.html',
  '{{ site.baseurl }}/404.html',
  '{{ site.baseurl }}/feed.xml',
  '{{ site.baseurl }}/sitemap.xml',
  '{{ site.baseurl }}/robots.txt',
  '{{ site.baseurl }}/SearchData.json',
  '{{ site.baseurl }}/autocomplete.txt',

  // CSS
  '{{ site.baseurl }}/assets/css/style.css',
  '{{ site.baseurl }}/assets/css/style2.css',
  '{{ site.baseurl }}/assets/css/header.css',
  '{{ site.baseurl }}/assets/css/fruity.css',
  '{{ site.baseurl }}/assets/css/vendor/Katex.css',

  // JS
  '{{ site.baseurl }}/assets/js/Search.js',

  // Изображения
  {% for file in site.static_files %}
    {% if file.path contains '/assets/img/' %}
      '{{ site.baseurl }}{{ file.path }}',
    {% endif %}
  {% endfor %}

  // Шрифты KaTeX
  {% assign katex_fonts = "KaTeX_AMS-Regular,KaTeX_Caligraphic-Bold,KaTeX_Caligraphic-Regular,KaTeX_Fraktur-Bold,KaTeX_Fraktur-Regular,KaTeX_Main-BoldItalic,KaTeX_Main-Bold,KaTeX_Main-Italic,KaTeX_Main-Regular,KaTeX_Math-BoldItalic,KaTeX_Math-Italic,KaTeX_SansSerif-Bold,KaTeX_SansSerif-Italic,KaTeX_SansSerif-Regular,KaTeX_Script-Regular,KaTeX_Size1-Regular,KaTeX_Size2-Regular,KaTeX_Size3-Regular,KaTeX_Size4-Regular,KaTeX_Typewriter-Regular" | split: "," %}
  {% for font in katex_fonts %}
    '{{ site.baseurl }}/assets/css/vendor/fonts/{{ font }}.ttf',
    '{{ site.baseurl }}/assets/css/vendor/fonts/{{ font }}.woff',
    '{{ site.baseurl }}/assets/css/vendor/fonts/{{ font }}.woff2',
  {% endfor %}

  // Иконки
  '{{ site.baseurl }}/assets/img/favicon.ico',
  '{{ site.baseurl }}/assets/img/favicon.svg',
  '{{ site.baseurl }}/assets/img/icon.png',
  '{{ site.baseurl }}/assets/img/icon-192.svg',
  '{{ site.baseurl }}/assets/img/icon-512.svg',
  '{{ site.baseurl }}/manifest.json',
  '{{ site.baseurl }}/manifest.webmanifest'
];

// Установка Service Worker и кэширование
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Обработка fetch-запросов
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Очистка устаревшего кэша
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
});
