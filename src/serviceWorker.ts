import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

declare let self: ServiceWorkerGlobalScope;

// プリキャッシュするアセット
precacheAndRoute(self.__WB_MANIFEST);

// アプリケーションシェルのキャッシュ
registerRoute(
  ({ request }) => request.destination === 'document',
  new StaleWhileRevalidate({
    cacheName: 'app-shell',
  })
);

// 静的アセットのキャッシュ
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image',
  new CacheFirst({
    cacheName: 'static-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30日
      }),
    ],
  })
);

// オフライン時のフォールバックページ
const FALLBACK_HTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>オフライン - SIXPRO</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      background: #f5f5f5;
    }
    .container {
      max-width: 400px;
      padding: 40px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h1 { color: #333; margin-bottom: 16px; }
    p { color: #666; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>オフラインです</h1>
    <p>インターネット接続が復帰すると、自動的に再接続されます。</p>
    <p>基本的な機能はオフラインでもご利用いただけます。</p>
  </div>
</body>
</html>
`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-fallback').then((cache) => {
      return cache.put(new Request('/offline.html'), new Response(FALLBACK_HTML, {
        headers: { 'Content-Type': 'text/html' },
      }));
    })
  );
});

// オフライン時のフォールバック
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/offline.html');
      })
    );
  }
});