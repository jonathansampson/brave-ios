!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}({12:function(e,t,n){n(13),n(14),e.exports=n(15)},13:function(e,t,n){"use strict";window.__firefox__||Object.defineProperty(window,"__firefox__",{enumerable:!1,configurable:!1,writable:!1,value:{userScripts:{},includeOnce:function(e,t){return!!__firefox__.userScripts[e]||(__firefox__.userScripts[e]=!0,"function"==typeof t&&t(),!1)}}})},14:function(e,t,n){"use strict";window.__firefox__.includeOnce("ContextMenu",(function(){window.addEventListener("touchstart",(function(e){var t=e.target,n=t.closest("a"),r=t.closest("img"),o={};n||r?(n&&(o.link=n.href,o.title=n.textContent),r&&(o.image=r.src,o.title=o.title||r.title,o.alt=r.alt),(o.link||o.image)&&webkit.messageHandlers.contextMenuMessageHandler.postMessage(o)):webkit.messageHandlers.contextMenuMessageHandler.postMessage(o)}),!0)}))},15:function(e,t,n){"use strict";window.__firefox__.includeOnce("FocusHelper",(function(){var e=function(e){var t=e.type,n=e.target.nodeName;("INPUT"===n||"TEXTAREA"===n||e.target.isContentEditable)&&(function(e){if("INPUT"!==e.nodeName)return!1;var t=e.type.toUpperCase();return"BUTTON"==t||"SUBMIT"==t||"FILE"==t}(e.target)||webkit.messageHandlers.focusHelper.postMessage({eventType:t,elementType:n}))},t={capture:!0,passive:!0},n=window.document.body;["focus","blur"].forEach((function(r){n.addEventListener(r,e,t)}))}))}});