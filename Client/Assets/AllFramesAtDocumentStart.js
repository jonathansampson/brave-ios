!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){n(2),n(3),n(4),n(5),e.exports=n(6)},function(e,t,n){"use strict";window.__firefox__||Object.defineProperty(window,"__firefox__",{enumerable:!1,configurable:!1,writable:!1,value:{userScripts:{},includeOnce:function(e,t){return!!__firefox__.userScripts[e]||(__firefox__.userScripts[e]=!0,"function"==typeof t&&t(),!1)}}})},function(e,t,n){"use strict";webkit.messageHandlers.adsMediaReporting&&function(){function e(e){webkit.messageHandlers.adsMediaReporting.postMessage(e)}function t(){e(!1)}function n(){e(!0)}new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){!function(e){"HTMLVideoElement"==e.constructor.name&&document.querySelectorAll("video").forEach((function(e){e.addEventListener("pause",t,!1),e.addEventListener("playing",n,!1)}))}(e)}))}))})).observe(document,{subtree:!0,childList:!0})}()},function(e,t,n){"use strict";Object.defineProperty(window.__firefox__,"download",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){if(t===SECURITY_TOKEN){var n=document.createElement("a");n.href=e,n.dispatchEvent(new MouseEvent("click"))}}})},function(e,t,n){"use strict";window.__firefox__.includeOnce("LoginsHelper",(function(){function e(e){}var t={_getRandomId:function(){return Math.round(Math.random()*(Number.MAX_VALUE-Number.MIN_VALUE)+Number.MIN_VALUE).toString()},_messages:["RemoteLogins:loginsFound"],_requests:{},_takeRequest:function(e){var t=e,n=this._requests[t.requestId];return this._requests[t.requestId]=void 0,n},_sendRequest:function(e,t){var n=this._getRandomId();t.requestId=n,webkit.messageHandlers.loginsManagerMessageHandler.postMessage(t);var r=this;return new Promise((function(t,i){e.promise={resolve:t,reject:i},r._requests[n]=e}))},receiveMessage:function(e){var t=this._takeRequest(e);switch(e.name){case"RemoteLogins:loginsFound":t.promise.resolve({form:t.form,loginsFound:e.logins});break;case"RemoteLogins:loginsAutoCompleted":t.promise.resolve(e.logins)}},_asyncFindLogins:function(e,t){var i=this._getFormFields(e,!1);if(!i[0]||!i[1])return Promise.reject("No logins found");i[0].addEventListener("blur",r);var o=n._getPasswordOrigin(),s=n._getActionOrigin(e);if(null==s)return Promise.reject("Action origin is null");var u={form:e},a={type:"request",formOrigin:o,actionOrigin:s};return this._sendRequest(u,a)},loginsFound:function(e,t){this._fillForm(e,!0,!1,!1,!1,t)},onUsernameInput:function(t){var n=t.target;if(n.ownerDocument instanceof HTMLDocument&&this._isUsernameFieldType(n)){var r=n.form;if(r&&n.value){t.type;var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(this._getFormFields(r,!1),3),o=i[0],s=i[1];if(i[2],o==n&&s){var u=this;this._asyncFindLogins(r,{showMasterPassword:!1}).then((function(e){u._fillForm(e.form,!0,!0,!0,!0,e.loginsFound)})).then(null,e)}}}},_getPasswordFields:function(e,t){for(var n=[],r=0;r<e.elements.length;r++){var i=e.elements[r];i instanceof HTMLInputElement&&"password"==i.type&&(t&&!i.value||(n[n.length]={index:r,element:i}))}return 0==n.length?null:n.length>3?(n.length,null):n},_isUsernameFieldType:function(e){if(!(e instanceof HTMLInputElement))return!1;var t=e.hasAttribute("type")?e.getAttribute("type").toLowerCase():e.type;return"text"==t||"email"==t||"url"==t||"tel"==t||"number"==t},_getFormFields:function(e,t){var n,r,i=null,o=this._getPasswordFields(e,t);if(!o)return[null,null,null];for(var s=o[0].index-1;s>=0;s--){var u=e.elements[s];if(this._isUsernameFieldType(u)){i=u;break}}if(!t||1==o.length)return[i,o[0].element,null];var a=o[0].element.value,l=o[1].element.value,c=o[2]?o[2].element.value:null;if(3==o.length)if(a==l&&l==c)r=o[0].element,n=null;else if(a==l)r=o[0].element,n=o[2].element;else if(l==c)n=o[0].element,r=o[2].element;else{if(a!=c)return[null,null,null];r=o[0].element,n=o[1].element}else a==l?(r=o[0].element,n=null):(n=o[0].element,r=o[1].element);return[i,r,n]},_isAutocompleteDisabled:function(e){return!(!e||!e.hasAttribute("autocomplete")||"off"!=e.getAttribute("autocomplete").toLowerCase())},_onFormSubmit:function(e){var t=e.ownerDocument,r=t.defaultView,i=n._getPasswordOrigin(t.documentURI);if(i){var o=n._getActionOrigin(e),s=this._getFormFields(e,!0),u=s[0],a=s[1],l=s[2];if(null!=a){this._isAutocompleteDisabled(e)||this._isAutocompleteDisabled(u)||this._isAutocompleteDisabled(a)||this._isAutocompleteDisabled(l);var c=u?{name:u.name,value:u.value}:null,d={name:a.name,value:a.value};l&&(l.name,l.value),r.opener&&r.opener.top,webkit.messageHandlers.loginsManagerMessageHandler.postMessage({type:"submit",hostname:i,username:c.value,usernameField:c.name,password:d.value,passwordField:d.name,formSubmitURL:o})}}},_fillForm:function(e,t,n,r,i,o){var s=this._getFormFields(e,!1),a=s[0],l=s[1];if(null==l)return[!1,o];if(l.disabled||l.readOnly)return[!1,o];var c=Number.MAX_VALUE,d=Number.MAX_VALUE;a&&a.maxLength>=0&&(c=a.maxLength),l.maxLength>=0&&(d=l.maxLength);var f=(o=function(e,t){var n,r,i;if(null==e)throw new TypeError("Array is null or not defined");var o=Object(e),s=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(n=e),r=new Array(s),i=0;i<s;){var u,a;i in o&&(u=o[i],a=t.call(n,u,i,o),r[i]=a),i++}return r}(o,(function(e){return{hostname:e.hostname,formSubmitURL:e.formSubmitURL,httpReal:e.httpRealm,username:e.username,password:e.password,usernameField:e.usernameField,passwordField:e.passwordField}}))).filter((function(e){var t=e.username.length<=c&&e.password.length<=d;return t||e.username,t}),this);if(0==f.length)return[!1,o];if(l.value&&!r)return[!1,o];var m=!1;!n&&(this._isAutocompleteDisabled(e)||this._isAutocompleteDisabled(a)||this._isAutocompleteDisabled(l))&&(m=!0);var p=null;if(a&&(a.value||a.disabled||a.readOnly)){var h=a.value.toLowerCase();if((_=f.filter((function(e){return e.username.toLowerCase()==h}))).length){for(var v=0;v<_.length;v++){var g=_[v];g.username==a.value&&(p=g)}p||(p=_[0])}}else if(1==f.length)p=f[0];else{var _;p=(_=a?f.filter((function(e){return e.username})):f.filter((function(e){return!e.username})))[0]}var w=!1;if(p&&t&&!m){if(a){var b=a.disabled||a.readOnly,y=p.username!=a.value,L=i&&y&&a.value.toLowerCase()==p.username.toLowerCase();b||L||!y||(a.value=p.username,u(a,"keydown",40),u(a,"keyup",40))}l.value!=p.password&&(l.value=p.password,u(l,"keydown",40),u(l,"keyup",40)),w=!0}return[w,o]}},n={_getPasswordOrigin:function(e,t){return e},_getActionOrigin:function(e){var t=e.action;return""==t&&(t=e.baseURI),this._getPasswordOrigin(t,!0)}};function r(e){t.onUsernameInput(e)}var i=new MutationObserver((function(e){for(var t=0;t<e.length;++t)o(e[t].addedNodes)}));function o(e){for(var t=0;t<e.length;t++){var n=e[t];"FORM"===n.nodeName?s(n):n.hasChildNodes()&&o(n.childNodes)}return!1}function s(n){try{t._asyncFindLogins(n,{}).then((function(e){t.loginsFound(e.form,e.loginsFound)})).then(null,e)}catch(e){}}function u(e,t,n){var r=document.createEvent("KeyboardEvent");r.initKeyboardEvent(t,!0,!0,window,0,0,0,0,0,n),e.dispatchEvent(r)}window.addEventListener("load",(function(e){i.observe(document.body,{attributes:!1,childList:!0,characterData:!1,subtree:!0});for(var t=0;t<document.forms.length;t++)s(document.forms[t])})),window.addEventListener("submit",(function(e){try{t._onFormSubmit(e.target)}catch(e){}})),Object.defineProperty(window.__firefox__,"logins",{enumerable:!1,configurable:!1,writable:!1,value:Object.freeze(new function(){this.inject=function(e){try{t.receiveMessage(e)}catch(e){}}})})}))},function(e,t,n){"use strict";["https://www.twitch.tv","https://m.twitch.tv","https://player.twitch.tv","https://www.youtube.com","https://m.youtube.com","https://vimeo.com"].includes(document.location.origin)&&webkit.messageHandlers.rewardsReporting&&function(){function e(e,t,n,r){webkit.messageHandlers.rewardsReporting.postMessage({method:void 0===e?"GET":e,url:t,data:void 0===n||n instanceof Blob?null:n,referrerUrl:void 0===r?null:r})}var t=XMLHttpRequest.prototype.open,n=XMLHttpRequest.prototype.send,r=window.fetch,i=navigator.sendBeacon,o=Object.getOwnPropertyDescriptor(Image.prototype,"src");XMLHttpRequest.prototype.open=function(n,r){var i=function(){e(this._method,null===this.responseURL?this._url:this.responseURL,this._data,this._ref)};return this._method=n,this._url=r,this.addEventListener("load",i,!0),this.addEventListener("error",i,!0),t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(e){return this._ref=null,this._data=e,e instanceof Document&&(this._ref=e.referrer,this._data=null),n.apply(this,arguments)},window.fetch=function(t,n){var i=arguments,o=t instanceof Request?t.url:t,s=null!=n?n.method:"GET",u=null!=n?n.body:null,a=null!=n?n.referrer:null;return new Promise((function(t,n){r.apply(this,i).then((function(n){e(s,o,u,a),t(n)})).catch((function(t){e(s,o,u,a),n(t)}))}))},navigator.sendBeacon=function(t,n){return e("POST",t,n),i.apply(this,arguments)},delete Image.prototype.src,Object.defineProperty(Image.prototype,"src",{get:function(){return o.get.call(this)},set:function(t){var n=function(){e("GET",this.src)};this.addEventListener("load",n,!0),this.addEventListener("error",n,!0),o.set.call(this,t)}})}()}]);