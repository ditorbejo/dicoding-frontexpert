(()=>{var e={929:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,i,r,a=e[1]||"",o=e[3];if(!o)return a;if(t&&"function"==typeof btoa){var s=(n=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(r," */")),u=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([s]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);i&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},86:(e,t,n)=>{function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,i){var r=t&&t.prototype instanceof b?t:b,a=Object.create(r.prototype),o=new N(i||[]);return a._invoke=function(e,t,n){var i=p;return function(r,a){if(i===f)throw new Error("Generator is already running");if(i===h){if("throw"===r)throw a;return E()}for(n.method=r,n.arg=a;;){var o=n.delegate;if(o){var s=z(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var u=d(e,t,n);if("normal"===u.type){if(i=n.done?h:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=h,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",m="suspendedYield",f="executing",h="completed",g={};function b(){}function y(){}function v(){}var x={};c(x,o,(function(){return this}));var w=Object.getPrototypeOf,q=w&&w(w(S([])));q&&q!==n&&r.call(q,o)&&(x=q);var k=v.prototype=b.prototype=Object.create(x);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(a,o,s,u){var c=d(e[a],e,o);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"===i(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,s,u)}),(function(e){n("throw",e,s,u)})):t.resolve(p).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,u)}))}u(c.arg)}var a;this._invoke=function(e,i){function r(){return new t((function(t,r){n(e,i,t,r)}))}return a=a?a.then(r,r):r()}}function z(e,n){var i=e.iterator[n.method];if(i===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,z(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=d(i,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,g;var a=r.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function S(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:E}}function E(){return{value:t,done:!0}}return y.prototype=v,c(k,"constructor",v),c(v,"constructor",y),y.displayName=c(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},j(L.prototype),c(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,i,r,a){void 0===a&&(a=Promise);var o=new L(l(t,n,i,r),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},j(k),c(k,u,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(i,r){return s.type="throw",s.arg=e,n.next=i,r&&(n.method="next",n.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var r=i.arg;I(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,i){return this.delegate={iterator:S(e),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),g}},e}("object"===i(e=n.nmd(e))?e.exports:{});try{regeneratorRuntime=r}catch(e){"object"===("undefined"==typeof globalThis?"undefined":i(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},429:(e,t,n)=>{(t=n(929)(!1)).push([e.id,"",""]),e.exports=t},144:(e,t,n)=>{(t=n(929)(!1)).push([e.id,"*{margin:0;padding:0;box-sizing:border-box;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif}body{width:100%;height:100vh}body a{min-width:44px;min-height:44px;color:white;text-decoration:none}body .skip-link{position:absolute;top:-45px;left:0;background-color:#bf1722;color:white;padding:10px;z-index:100}body .skip-link:focus{top:0}body header{padding:10px 40px;display:flex;justify-content:space-between;background-color:#9c6f46}body header a{display:flex;align-items:center}body header h1{color:white;font-size:28px}body header .hamburger-button{padding:0;border:none;background:none;opacity:1;height:44px;width:44px}body header .hamburger-button .hamburger-icon{font-size:20px;color:white}body header #drawer.open{transform:translate(0, 0);background-color:rgba(0,0,0,0.5);display:flex}body header nav{display:none;width:100%;height:100vh;position:fixed;top:0;left:0;transform:translate(-250px, 0);-webkit-transform:translate(-250px, 0);-moz-transform:translate(-250px, 0);-ms-transform:translate(-250px, 0);-o-transform:translate(-250px, 0);transition:transform 0.3s ease-in-out}body header nav ul{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#9c6f46;width:50%;gap:25px}body header nav ul li{list-style-type:none}body header nav ul li a{text-decoration:none;color:white;font-size:20px;font-weight:bold}body main .hero-image{width:100%;height:35vh;font-size:24px;color:white;background-position:top center;background-repeat:no-repeat}body main .hero-image .hero-content{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:10px 20px;background-color:rgba(0,0,0,0.3)}body main .content-menu{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px}body main .content-menu h2{text-align:center;font-size:20px;margin-top:20px;padding:10px 20px;background-color:#fff6ea;border-radius:20px;box-shadow:rgba(99,99,99,0.4) 0px 2px 8px 0px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px}body main .content-menu .list-restaurant-items{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 2fr));padding:20px 40px;gap:20px}body main .content-menu .list-restaurant-items .card-item{display:flex;flex-direction:column;align-items:center;padding:10px 20px;gap:20px;box-shadow:rgba(0,0,0,0.4) 0px 4px 12px}body main .content-menu .list-restaurant-items .card-item img{width:100%;height:200px}body main .content-menu .list-restaurant-items .card-item .information-item{padding:10px 20px;height:100%;background-color:rgba(0,0,0,0.1)}body main .about-us{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;width:100%}body main .about-us h2{width:40%;text-align:center;font-size:20px;padding:10px 20px;background-color:#9c6f46;color:white;border-radius:40px;-webkit-border-radius:40px;-moz-border-radius:40px;-ms-border-radius:40px;-o-border-radius:40px}body main .about-us img{width:40%;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}body main .about-us p{padding:20px 40px;font-size:18px}body main .about-us .logo-social-media{display:flex;padding:20px}body main .about-us .logo-social-media a{color:black;width:44px;height:44px}body main .about-us .logo-social-media a svg{font-size:40px}body footer{width:100%;text-align:center;background-color:#f7e9d7;padding:20px 0px}@media only screen and (max-width: 600px){body header .hamburger-button .hamburger-icon{font-size:18px}body header h1{font-size:20px}body main .hero-image h2{font-size:18px}body main .hero-image p{font-size:14px}body main .content-menu h2{font-size:16px}body main .content-menu .list-restaurant-items{font-size:14px}body main .about-us h2{font-size:16px}body main .about-us img{width:30%}body main .about-us p{text-align:center;font-size:12px}body footer p{font-size:12px}}@media only screen and (min-width: 768px){body header .hamburger-button .hamburger-icon{font-size:22px}body header h1{font-size:24px}body main .hero-image h2{font-size:18px}body main .hero-image p{font-size:14px}body main .content-menu h2{font-size:16px}body main .content-menu .list-restaurant-items{display:grid;grid-template-columns:repeat(3, 1fr);font-size:18px}body main .about-us h2{font-size:18px}body main .about-us img{width:30%}body main .about-us p{text-align:center;font-size:16px}body footer p{font-size:18px}}@media only screen and (min-width: 1024px){body header{width:100%;padding:10px 40px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}body header .hamburger-button{display:none}body header a{display:flex;width:100%}body header a h1{font-size:24px}body header nav{display:inherit;position:relative;height:100%;transform:translate(0, 0);-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0)}body header nav ul{width:100%;display:flex;flex-direction:row;justify-content:flex-end}body main .content-menu .list-restaurant-items{display:grid;grid-template-columns:repeat(4, 1fr)}}@media screen and (min-width: 1200px){body main .hero-image{min-width:1000px}body main .content-menu .list-restaurant-items{display:grid;grid-template-columns:repeat(5, 1fr)}}\n",""]),e.exports=t},41:(e,t,n)=>{var i=n(379),r=n(429);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);i(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},545:(e,t,n)=>{var i=n(379),r=n(144);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);i(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},379:(e,t,n)=>{"use strict";var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function o(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],u=t.base?s[0]+t.base:s[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=o(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:h(p,t),references:1}),i.push(l)}return i}function u(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function h(e,t){var n,i,r;if(t.singleton){var a=f++;n=m||(m=u(t)),i=d.bind(null,n,a,!1),r=d.bind(null,n,a,!0)}else n=u(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=o(n[i]);a[r].references--}for(var u=s(e,t),c=0;c<n.length;c++){var l=o(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=u}}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,loaded:!1,exports:{}};return e[i](a,a.exports,n),a.loaded=!0,a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";n(86),n(41),n(545);const e=n.p+"bd6b63650298f334a08b66446d66c536.jpg",t=n.p+"4708daf73a75ef8b401790dccf0d8e73.jpg",i=JSON.parse('{"O":[{"id":"6c7bqjgi84kcowlqdz","name":"Bring Your Phone Cafe","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/41","city":"Medan","rating":4.6},{"id":"ljx8i0qu2uckcowlqdz","name":"Run The Gun","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/07","city":"Bali","rating":4.6},{"id":"fe8bbxoazddkcowlqdz","name":"Pangsit Express","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/29","city":"Ternate","rating":4.8},{"id":"ik1zljmlf68kcowlqdz","name":"Ducky Duck","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/38","city":"Malang","rating":4.7},{"id":"9jpuzkm6n6jkcowlqdz","name":"Kafein","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/40","city":"Bali","rating":3.8},{"id":"cpl5jpsnuqkkcowlqdz","name":"Makan mudah","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/08","city":"Malang","rating":4.6},{"id":"iqtf9hmdzvbkcowlqdz","name":"Saya Suka","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/32","city":"Surabaya","rating":3.6},{"id":"8i06gqcc2dpkcowlqdz","name":"Gigitan Cepat","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/45","city":"Aceh","rating":4},{"id":"wf5o19xhxxkcowlqdz","name":"Fairy Cafe","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/04","city":"Malang","rating":3.9}]}');console.log("Hello Coders! :)"),document.querySelector(".hero-image").style.backgroundImage="url(".concat(e,")");var r,a,o=document.querySelector(".list-restaurant-items"),s=document.querySelector(".hamburger-button"),u=document.querySelector("#drawer");document.querySelector(".about-image").setAttribute("src",t),s.addEventListener("click",(function(e){u.classList.toggle("open"),e.stopPropagation()})),u.addEventListener("click",(function(e){u.classList.remove("open"),e.stopPropagation()})),o.innerHTML=(r=i.O,a="",r.forEach((function(e){a+='\n        <div class="card-item">\n            <img tabindex="0" src="'.concat(e.pictureId,'" alt="gambar-restaurant ').concat(e.name,'">\n            <div class="information-item">\n                <p tabindex="0" class="nama">Nama: ').concat(e.name,' </p>\n                <p tabindex="0" class="kota">Kota: ').concat(e.city,'</p>\n                <p tabindex="0" class="rating">Rating: ').concat(e.rating,' </p>\n                <p tabindex="0" class="deskripsi">Deskripsi: ').concat(e.description,"</p>\n            </div>\n        </div>\n        ")})),a)})()})();