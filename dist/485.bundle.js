(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[485],{91:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);a&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},606:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(r," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},445:e=>{!function(t,n){var a=function(e,t,n){"use strict";var a,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var i,o,s,c,l,u,d,f,p,h,v,g,m,y,b,z,C,w,E,A,L,D,M,B,I,N,_,S,x,k,W,F,j,P,T,R,O,$,H,V,q,U,K,Q,J=t.documentElement,X=e.HTMLPictureElement,G="addEventListener",Y="getAttribute",Z=e[G].bind(e),ee=e.setTimeout,te=e.requestAnimationFrame||ee,ne=e.requestIdleCallback,ae=/^picture$/i,re=["load","error","lazyincluded","_lazyloaded"],ie={},oe=Array.prototype.forEach,se=function(e,t){return ie[t]||(ie[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),ie[t].test(e[Y]("class")||"")&&ie[t]},ce=function(e,t){se(e,t)||e.setAttribute("class",(e[Y]("class")||"").trim()+" "+t)},le=function(e,t){var n;(n=se(e,t))&&e.setAttribute("class",(e[Y]("class")||"").replace(n," "))},ue=function(e,t,n){var a=n?G:"removeEventListener";n&&ue(e,t),re.forEach((function(n){e[a](n,t)}))},de=function(e,n,r,i,o){var s=t.createEvent("Event");return r||(r={}),r.instance=a,s.initEvent(n,!i,!o),s.detail=r,e.dispatchEvent(s),s},fe=function(t,n){var a;!X&&(a=e.picturefill||r.pf)?(n&&n.src&&!t[Y]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},pe=function(e,t){return(getComputedStyle(e,null)||{})[t]},he=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ve=(q=[],U=V=[],Q=function(e,n){$&&!n?e.apply(this,arguments):(U.push(e),H||(H=!0,(t.hidden?ee:te)(K)))},Q._lsFlush=K=function(){var e=U;for(U=V.length?q:V,$=!0,H=!1;e.length;)e.shift()();$=!1},Q),ge=function(e,t){return t?function(){ve(e)}:function(){var t=this,n=arguments;ve((function(){e.apply(t,n)}))}},me=function(e){var t,a,r=function(){t=null,e()},i=function(){var e=n.now()-a;e<99?ee(i,99-e):(ne||r)(r)};return function(){a=n.now(),t||(t=ee(i,99))}},ye=(C=/^img$/i,w=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,A=0,L=0,D=-1,M=function(e){L--,(!e||L<0||!e.target)&&(L=0)},B=function(e){return null==z&&(z="hidden"==pe(t.body,"visibility")),z||!("hidden"==pe(e.parentNode,"visibility")&&"hidden"==pe(e,"visibility"))},I=function(e,n){var a,r=e,i=B(e);for(g-=n,b+=n,m-=n,y+=n;i&&(r=r.offsetParent)&&r!=t.body&&r!=J;)(i=(pe(r,"opacity")||1)>0)&&"visible"!=pe(r,"overflow")&&(a=r.getBoundingClientRect(),i=y>a.left&&m<a.right&&b>a.top-1&&g<a.bottom+1);return i},_=function(e){var t,a=0,i=r.throttleDelay,o=r.ricTimeout,s=function(){t=!1,a=n.now(),e()},c=ne&&o>49?function(){ne(s,{timeout:o}),o!==r.ricTimeout&&(o=r.ricTimeout)}:ge((function(){ee(s)}),!0);return function(e){var r;(e=!0===e)&&(o=33),t||(t=!0,(r=i-(n.now()-a))<0&&(r=0),e||r<9?c():ee(c,r))}}(N=function(){var e,n,i,o,s,c,d,p,C,w,M,N,_=a.elements;if((f=r.loadMode)&&L<8&&(e=_.length)){for(n=0,D++;n<e;n++)if(_[n]&&!_[n]._lazyRace)if(!E||a.prematureUnveil&&a.prematureUnveil(_[n]))P(_[n]);else if((p=_[n][Y]("data-expand"))&&(c=1*p)||(c=A),w||(w=!r.expand||r.expand<1?J.clientHeight>500&&J.clientWidth>500?500:370:r.expand,a._defEx=w,M=w*r.expFactor,N=r.hFac,z=null,A<M&&L<1&&D>2&&f>2&&!t.hidden?(A=M,D=0):A=f>1&&D>1&&L<6?w:0),C!==c&&(h=innerWidth+c*N,v=innerHeight+c,d=-1*c,C=c),i=_[n].getBoundingClientRect(),(b=i.bottom)>=d&&(g=i.top)<=v&&(y=i.right)>=d*N&&(m=i.left)<=h&&(b||y||m||g)&&(r.loadHidden||B(_[n]))&&(u&&L<3&&!p&&(f<3||D<4)||I(_[n],c))){if(P(_[n]),s=!0,L>9)break}else!s&&u&&!o&&L<4&&D<4&&f>2&&(l[0]||r.preloadAfterLoad)&&(l[0]||!p&&(b||y||m||g||"auto"!=_[n][Y](r.sizesAttr)))&&(o=l[0]||_[n]);o&&!s&&P(o)}}),x=ge(S=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(M(e),ce(t,r.loadedClass),le(t,r.loadingClass),ue(t,k),de(t,"lazyloaded"))}),k=function(e){x({target:e.target})},W=function(e,t){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},F=function(e){var t,n=e[Y](r.srcsetAttr);(t=r.customMedia[e[Y]("data-media")||e[Y]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},j=ge((function(e,t,n,a,i){var o,s,c,l,u,f;(u=de(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?ce(e,r.autosizesClass):e.setAttribute("sizes",a)),s=e[Y](r.srcsetAttr),o=e[Y](r.srcAttr),i&&(l=(c=e.parentNode)&&ae.test(c.nodeName||"")),f=t.firesLoad||"src"in e&&(s||o||l),u={target:e},ce(e,r.loadingClass),f&&(clearTimeout(d),d=ee(M,2500),ue(e,k,!0)),l&&oe.call(c.getElementsByTagName("source"),F),s?e.setAttribute("srcset",s):o&&!l&&(w.test(e.nodeName)?W(e,o):e.src=o),i&&(s||l)&&fe(e,{src:o})),e._lazyRace&&delete e._lazyRace,le(e,r.lazyClass),ve((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ce(e,r.fastLoadedClass),S(u),e._lazyCache=!0,ee((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&L--}),!0)})),P=function(e){if(!e._lazyRace){var t,n=C.test(e.nodeName),a=n&&(e[Y](r.sizesAttr)||e[Y]("sizes")),i="auto"==a;(!i&&u||!n||!e[Y]("src")&&!e.srcset||e.complete||se(e,r.errorClass)||!se(e,r.lazyClass))&&(t=de(e,"lazyunveilread").detail,i&&be.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,L++,j(e,t,i,a,n))}},T=me((function(){r.loadMode=3,_()})),O=function(){u||(n.now()-p<999?ee(O,999):(u=!0,r.loadMode=3,_(),Z("scroll",R,!0)))},{_:function(){p=n.now(),a.elements=t.getElementsByClassName(r.lazyClass),l=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),Z("scroll",_,!0),Z("resize",_,!0),Z("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&te((function(){n.forEach((function(e){e.complete&&P(e)}))}))}})),e.MutationObserver?new MutationObserver(_).observe(J,{childList:!0,subtree:!0,attributes:!0}):(J[G]("DOMNodeInserted",_,!0),J[G]("DOMAttrModified",_,!0),setInterval(_,999)),Z("hashchange",_,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[G](e,_,!0)})),/d$|^c/.test(t.readyState)?O():(Z("load",O),t[G]("DOMContentLoaded",_),ee(O,2e4)),a.elements.length?(N(),ve._lsFlush()):_()},checkElems:_,unveil:P,_aLSL:R=function(){3==r.loadMode&&(r.loadMode=2),T()}}),be=(o=ge((function(e,t,n,a){var r,i,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),ae.test(t.nodeName||""))for(i=0,o=(r=t.getElementsByTagName("source")).length;i<o;i++)r[i].setAttribute("sizes",a);n.detail.dataAttr||fe(e,n.detail)})),s=function(e,t,n){var a,r=e.parentNode;r&&(n=he(e,r,n),(a=de(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&o(e,r,a,n))},{_:function(){i=t.getElementsByClassName(r.autosizesClass),Z("resize",c)},checkElems:c=me((function(){var e,t=i.length;if(t)for(e=0;e<t;e++)s(i[e])})),updateElem:s}),ze=function(){!ze.i&&t.getElementsByClassName&&(ze.i=!0,be._(),ye._())};return ee((function(){r.init&&ze()})),a={cfg:r,autoSizer:be,loader:ye,init:ze,uP:fe,aC:ce,rC:le,hC:se,fire:de,gW:he,rAF:ve}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})},768:(e,t,n)=>{var a,r,i;!function(o,s){o&&(s=s.bind(null,o,o.document),e.exports?s(n(445)):(r=[n(445)],void 0===(i="function"==typeof(a=s)?a.apply(t,r):a)||(e.exports=i)))}("undefined"!=typeof window?window:0,(function(e,t,n){"use strict";if(e.addEventListener){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,i=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,o=/^picture$/i,s=n.cfg,c={getParent:function(t,n){var a=t,r=t.parentNode;return n&&"prev"!=n||!r||!o.test(r.nodeName||"")||(r=r.parentNode),"self"!=n&&(a="prev"==n?t.previousElementSibling:n&&(r.closest||e.jQuery)&&(r.closest?r.closest(n):jQuery(r).closest(n)[0])||r),a},getFit:function(e){var t,n,a=getComputedStyle(e,null)||{},o=a.content||a.fontFamily,s={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!s.fit&&o&&(t=o.match(r))&&(s.fit=t[1]),s.fit?(!(n=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&o&&(t=o.match(i))&&(n=t[1]),s.parent=c.getParent(e,n)):s.fit=a.objectFit,s},getImageRatio:function(t){var n,r,i,c,l,u,d,f=t.parentNode,p=f&&o.test(f.nodeName||"")?f.querySelectorAll("source, img"):[t];for(n=0;n<p.length;n++)if(r=(t=p[n]).getAttribute(s.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",i=t._lsMedia||t.getAttribute("media"),i=s.customMedia[t.getAttribute("data-media")||i]||i,r&&(!i||(e.matchMedia&&matchMedia(i)||{}).matches)){(c=parseFloat(t.getAttribute("data-aspectratio")))||((l=r.match(a))?"w"==l[2]?(u=l[1],d=l[3]):(u=l[3],d=l[1]):(u=t.getAttribute("width"),d=t.getAttribute("height")),c=u/d);break}return c},calculateSize:function(e,t){var n,a,r,i=this.getFit(e),o=i.fit,s=i.parent;return"width"==o||("contain"==o||"cover"==o)&&(a=this.getImageRatio(e))?(s?t=s.clientWidth:s=e,r=t,"width"==o?r=t:(n=t/s.clientHeight)&&("cover"==o&&n<a||"contain"==o&&n>a)&&(r=t*(a/n)),r):t}};n.parentFit=c,t.addEventListener("lazybeforesizes",(function(e){if(!e.defaultPrevented&&e.detail.instance==n){var t=e.target;e.detail.width=c.calculateSize(t,e.detail.width)}}))}}))},311:(e,t,n)=>{"use strict";n.d(t,{X3:()=>v});const a=(e,t)=>t.some((t=>e instanceof t));let r,i;const o=new WeakMap,s=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(h(this),e),p(o.get(this))}:function(...e){return p(t.apply(h(this),e))}:function(e,...n){const a=t.call(h(this),e,...n);return c.set(a,e.sort?e.sort():[e]),p(a)}:(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));s.set(e,t)}(e),a(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,d):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(p(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),u.set(t,e)),t}const h=e=>u.get(e);function v(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),s=p(o);return a&&o.addEventListener("upgradeneeded",(e=>{a(p(o.result),e.oldVersion,e.newVersion,p(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const g=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],y=new Map;function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=m.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!g.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return y.set(t,i),i}var z;z=d,d={...z,get:(e,t,n)=>b(e,t)||z.get(e,t,n),has:(e,t)=>!!b(e,t)||z.has(e,t)}}}]);
//# sourceMappingURL=485.bundle.js.map