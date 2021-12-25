var serviceWorkerOption = {
  "assets": [
    "/2b56e79ae5013246de291c3bd46c2c1b.woff2",
    "/38c4d2499557ae0379fd160e190c331c.woff",
    "/defaultVendors~main~70f26f37.bundle.js",
    "/defaultVendors~main~7274e1de.bundle.js",
    "/main~29d6ecf2.bundle.js",
    "/3.bundle.js",
    "/4.bundle.js",
    "/5.bundle.js",
    "/favicon.png",
    "/manifest.json",
    "/css/index.css",
    "/icons/icon-128x128.png",
    "/icons/icon-144x144.png",
    "/icons/icon-152x152.png",
    "/icons/icon-192x192.png",
    "/icons/icon-384x384.png",
    "/icons/icon-512x512.png",
    "/icons/icon-72x72.png",
    "/icons/icon-96x96.png",
    "/images/user-profile.png",
    "/index.html"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){self.addEventListener("install",(function(e){console.log("Installing Service Worker ...")})),self.addEventListener("activate",(function(e){console.log("Activating Service Worker ...")})),self.addEventListener("fetch",(function(e){console.log(e.request),e.respondWith(fetch(e.request))}))}]);