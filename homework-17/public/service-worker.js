// This is the Service Worker Folder that holds all the files that need to be cached
// and stores them as an array. This file assists in offline first web application
// development.

//First, we inlude the files to cache, the cache name, and the data cache name.

const FILES_TO_CACHE = [
    "/",
    "/index.handlebars",
    "/layouts/main.handlebars",
    "/assets/css/burger_style.css",
    "/assets/js/burgers.js",
    "/assets/images/burger.png",
    "/assets/images/offline_button.png",
    "/assets/images/online_button.png",
    "/manifest.webmanifest",
];

const CACHE_NAME = 'static-cache-v2';

const DATA_CACHE_NAME = 'data-cache-v1';


//The Service worker file will also include **install**, **activate** and **fetch** listeners 


self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were pre-cached successfully!');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function (evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    // Tells our new service worker to take over.
    self.clients.claim();
})

self.addEventListener('fetch', function (evt) {
    if (evt.request.url.includes('/api/')) {
        console.log('[Service Worker] Fetch (data)', evt.request.url);
        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                    .then(response => {
                        // If the response was good, clone it and store it in the cache.
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                        }
                        return response;
                    })
                    .catch(err => {
                        return cache.match(evt.request);
                    })
            })
    )}
})