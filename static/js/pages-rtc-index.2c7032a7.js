(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-rtc-index"],{1973:function(t,e,r){"use strict";r.r(e);var n=r("e075"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},2634:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new O(n||[]);return i(a,"_invoke",{value:_(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=f;var h={};function v(){}function p(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==r&&o.call(w,c)&&(m=w);var b=y.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var r;i(this,"_invoke",{value:function(i,a){function c(){return new e((function(r,c){(function r(i,a,c,u){var s=d(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.default)(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)})(i,a,r,c)}))}return r=r?r.then(c,c):c()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),l(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t},r("6a54"),r("01a2"),r("e39c"),r("bf0f"),r("844d"),r("18f7"),r("de6c"),r("3872e"),r("4e9b"),r("114e"),r("c240"),r("926e"),r("7a76"),r("c9b5"),r("aa9c"),r("2797"),r("8a8d"),r("dc69"),r("f7a5");var n=function(t){return t&&t.__esModule?t:{default:t}}(r("fcf3"))},"2fdc":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}r("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}},r("bf0f")},6410:function(t,e,r){var n=r("c65a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("967d").default;o("687d8ad0",n,!0,{sourceMap:!1,shadowMode:!1})},6841:function(t,e,r){"use strict";var n=r("6410"),o=r.n(n);o.a},"9fe5":function(t,e,r){"use strict";r.r(e);var n=r("a29d"),o=r("1973");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("6841");var a=r("828b"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"e15b6a7a",null,!1,n["a"],void 0);e["default"]=c.exports},a29d:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{},[t._v("远程视频")]),r("v-uni-video",{staticClass:"video_",attrs:{id:"remoteVideo",muted:!0,autoplay:!0,"show-center-play-btn":!1,controls:!1}}),r("v-uni-view",{},[t._v("当前视频")]),r("v-uni-video",{staticClass:"video_",staticStyle:{width:"100%",height:"500rpx"},attrs:{"object-fit":"cover",id:"localVideo",muted:!0,autoplay:!0,controls:!1,"show-center-play-btn":!1}}),r("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.startLive.apply(void 0,arguments)}}},[t._v("开始")])],1)},o=[]},c65a:function(t,e,r){var n=r("c86c");e=n(!1),e.push([t.i,".video_[data-v-e15b6a7a]{width:100%;height:%?300?%}",""]),t.exports=e},e075:function(t,e,r){"use strict";r("6a54");var n=r("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("bf0f"),r("2797"),r("d4b5");var o=n(r("2634")),i=n(r("2fdc")),a={data:function(){return{remoteUrl:"",localUrl:"",peer:null,localVideo:null,remoteVideo:null,localStream:null}},onLoad:function(){this.localVideo=document.querySelector("#localVideo"),this.remoteVideo=document.querySelector("#remoteVideo"),this.peer=new RTCPeerConnection({sdpSemantics:"unified-plan",iceServers:[{urls:"turn:gxjk.one-health.com.cn:3478",username:"guest",credential:"guest"}]}),this.peer.ontrack=function(t){if(t&&t.streams){var e=document.getElementsByTagName("video")[0];e.srcObject=t.streams[0]}},this.connSocket()},methods:{startLive:function(){var t=this;return(0,i.default)((0,o.default)().mark((function e(){var r,n,i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.localStream,e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 4:t.localStream=e.sent,r=document.getElementsByTagName("video")[1],r.srcObject=t.localStream,t.localStream||uni.showToast({title:"获取摄像头失败",icon:"none"}),e.next=13;break;case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return");case 13:return t.localStream.getTracks().forEach((function(e){t.peer.addTrack(e,t.localStream)})),e.next=16,t.peer.createOffer();case 16:return n=e.sent,e.next=19,t.peer.setLocalDescription(n);case 19:i=new Promise((function(e){if("complete"===t.peer.iceGatheringState)e();else{var r=t;t.peer.addEventListener("icegatheringstatechange",(function t(){"complete"===r.peer.iceGatheringState&&(r.peer.removeEventListener("icegatheringstatechange",t),e())}))}})),i.then((function(){var e=t.peer.localDescription;uni.sendSocketMessage({data:JSON.stringify(e)})}));case 21:case"end":return e.stop()}}),e,null,[[1,10]])})))()},connSocket:function(){var t=this;uni.connectSocket({url:"wss://gxjk.one-health.com.cn:444/ws/websocket/offer"}),uni.onSocketOpen((function(t){uni.showToast({title:"连接服务器成功",icon:"none"})})),uni.onSocketError((function(t){uni.showToast({title:"WebSocket连接打开失败",icon:"none"})})),uni.onSocketMessage((function(e){var r=JSON.parse(e.data),n=r.type,o=r.sdp,i=r.iceCandidate;"answer"===n?t.peer.setRemoteDescription(new RTCSessionDescription({type:n,sdp:o})):"answer_ice"===n&&t.peer.addIceCandidate(i)}))}}};e.default=a}}]);