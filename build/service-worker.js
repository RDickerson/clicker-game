"use strict";var precacheConfig=[["/index.html","3c30c35491bff6a5fc4390d3475594ac"],["/static/css/main.03f0556d.css","4fd35a22b58487c8562897ba879bc0fe"],["/static/js/main.a3a01b74.js","5c1a5b377fe44d576bb31c82c632ec34"],["/static/media/Gabuek Script.0041873a.otf","0041873a1f0c3638d25c2d7149f049be"],["/static/media/Walk-Around-the-Block.e04daa4f.ttf","e04daa4f5ca313309b643eb880116f85"],["/static/media/chaChing.dc2c4a33.wav","dc2c4a335d8b8209a6f37b8b41d882d7"],["/static/media/coffee.5a0e2c71.png","5a0e2c7101723d95ca5c861be3c6f934"],["/static/media/desk.eef38421.png","eef38421c6bc30f4a2b58b87c4797a45"],["/static/media/femaleUser.9434222d.png","9434222dd09efb10716213f8707630c0"],["/static/media/laptop.0a658ba3.png","0a658ba32810dcf03cfd9e333d279a34"],["/static/media/mainBackground.16737902.jpg","167379026595715a96fc56f8591c6e35"],["/static/media/maleUser.38064bad.png","38064bad6c41b590e04d9e0ddee20933"],["/static/media/mute.f8b78648.png","f8b78648df2b0c6918d78ce4c3ca60f1"],["/static/media/office1.31de9967.png","31de99676412c8af544260837f07793c"],["/static/media/office3.3f206e28.png","3f206e2862da08d023c781f578426940"],["/static/media/play.54fe2215.png","54fe2215321898c2e92b3cdf14429730"],["/static/media/pricedown bl.796446c4.ttf","796446c4820b0890b0d5f00f02efbd45"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});