if(!self.define){let e,d={};const i=(i,n)=>(i=new URL(i+".js",n).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(d[s])return;let f={};const c=e=>i(e,s),o={module:{uri:s},exports:f,require:c};d[s]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"409.bundle.js",revision:"59c7516f1b67de29508829e41c17d1ab"},{url:"485.bundle.js",revision:"e97002352e042333b132f82b5651b715"},{url:"app.webmanifest",revision:"dfa71ee79da1cd365dbdddcebdfd1854"},{url:"app~3f56dba6.bundle.js",revision:"f2c1272c2d0a3bd6927423a64ef20254"},{url:"app~3f56dba6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~706d8e6a.bundle.js",revision:"b3154009f5cb3b896f2d2e5729a22999"},{url:"app~706d8e6a.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~bb986250.bundle.js",revision:"7caa96aa60b478f2ae9f801bc4d9259a"},{url:"app~f0ee897c.bundle.js",revision:"8267059054965f7d1aff3224f4c58f99"},{url:"app~f0ee897c.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"9782fe1e6065dd3bf2da9a543d577264"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"52a7cb372454b91fe6b66381412551fd"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
