'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2386993f2398dd2daa68346f0f42916b",
"index.html": "cb7223c8e9e9472cadc3849c59a9da4c",
"/": "cb7223c8e9e9472cadc3849c59a9da4c",
"main.dart.js": "1176442cca1fe7ddfa1342cae22af7ff",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f252bdb160931cbe35ad349e6b08480d",
"assets/AssetManifest.json": "f8aa5db270b22ad7ce6a20760db5ce5c",
"assets/NOTICES": "ca2823aadfa4e2f46be8234c79e376a0",
"assets/FontManifest.json": "3a2eb8f3f13d16d81a1544acb5da3e2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "16832cc737f5f45cd6a5126591faa421",
"assets/fonts/Lora-SemiBold.ttf": "585af3507153b8b738555012c675662f",
"assets/fonts/Lora-SemiBoldItalic.ttf": "75e3cd0d410672cc745bd776f0c35512",
"assets/fonts/MaterialIcons-Regular.otf": "d44ef5ab00fe9a699b5a32e0dda2b5d5",
"assets/assets/imgmock/person.jpg": "74010bfa4341d0eefd3489dceb163e8a",
"assets/assets/imgmock/bg_image_2.jpg": "79c4fdfbd3f67581b66c041ef38026ad",
"assets/assets/imgmock/bg_image_1.jpg": "584a09552f5ac2cfff0e0efb1dd64cb9",
"assets/assets/imgmock/photo_2.jpg": "3f63a5efc9ee200a494ff8507bd2327a",
"assets/assets/imgmock/bg_banner.jpg": "2258a6e5f8b74b805d813a3ef219f0c6",
"assets/assets/svgimg/insta_color.svg": "d5368227272f1b9f38c5d2f2de975412",
"assets/assets/svgimg/medium.svg": "8835c0d5e2a66bc0aad1a2af8617d035",
"assets/assets/svgimg/linkedin_color.svg": "c29a1dc3ef77d690678140ac5f5d1d43",
"assets/assets/svgimg/gmail2.svg": "3f1b86806d4feec8ffec7eec9498fc96",
"assets/assets/svgimg/whatsapp_filled.svg": "019f4c06bc129ecddb311225ac8e0d23",
"assets/assets/svgimg/facebook_fiiled.svg": "7dcd8c81436d80106bc65ba90d5e0759",
"assets/assets/svgimg/github.svg": "cb073367aba4bca812aadfdf8cca82fc",
"assets/assets/svgimg/instagram.svg": "4eec003ab2d015127fbe67166f4970b0",
"assets/assets/svgimg/linkedin_filled.svg": "2fa056c3a645bacdb31d62f493a33878",
"assets/assets/svgimg/twitterx.svg": "82c3e133a8cc54b1ef3b28e311675722",
"assets/assets/svgimg/facebook_color.svg": "7d6832bc3b14cae8fe78543325e52af3",
"assets/assets/svgimg/twitter_color.svg": "558f2c1ec59982bcb66eec61d8a3e81e",
"assets/assets/svgimg/facebook.svg": "1f180fd07dedd4121acd8b8e8e82ba02",
"assets/assets/svgimg/github_filled.svg": "edd2906685e30d7b5ea8febe2a4bcec0",
"assets/assets/svgimg/whatsapp.svg": "ae14534c54f717c2b3dde29f8c481913",
"assets/assets/svgimg/github2.svg": "42c330fff3840797cc1e38bff8fc4608",
"assets/assets/svgimg/insta_filled.svg": "28acf6f98254bb84ed38aef5eb78bf26",
"assets/assets/svgimg/twitter.svg": "04fa46388b93604383bc80b452951a49",
"assets/assets/svgimg/twitter_filled.svg": "c4218d14f9670d19c7810ccd69ca2d07",
"assets/assets/svgimg/whatsapp_color.svg": "d9274e80fec0c32da6e7601a308ac977",
"assets/assets/img/person_mkp.jpg": "ec028c10e04d165132ca8e55ec90e20d",
"assets/assets/images3/coding1.gif": "23007e52365d93fa9c2629b33382751e",
"assets/assets/images3/walp4.jpg": "df43b15290f98095c747d79a02db8852",
"assets/assets/images3/walp2.jpg": "f45596ebe4373c5e852c4b9c73fcfafd",
"assets/assets/images3/walp3.jpg": "1bd12d960c12528f2b43c0619d7fe686",
"assets/assets/images3/walp1.jpg": "bfcf0bc0d92c7d5a6562fda3088a2744",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
