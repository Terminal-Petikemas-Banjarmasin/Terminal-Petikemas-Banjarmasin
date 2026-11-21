// Service worker: data dan halaman diambil dari internet dulu (selalu terbaru),
// salinan terakhir dipakai bila sedang offline.
const CACHE = 'kinerja-tpk-v2';
const CORE = ['./', 'index.html', 'perbarui.html', 'data.json', 'kapal.html', 'kapal.json', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const key = url.origin === location.origin ? url.pathname : req.url;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(key, copy));
      }
      return res;
    }).catch(() => caches.match(key).then(hit => hit || caches.match(req, { ignoreSearch: true })))
  );
});
