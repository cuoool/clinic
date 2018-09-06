(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{3040:function(t,e,r){"use strict";function n(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t,e){try{var r=i[t](e),a=r.value}catch(t){return void o(t)}r.done?n(a):Promise.resolve(a).then(s,c)}function s(t){a("next",t)}function c(t){a("throw",t)}s()})}}r.d(e,"a",function(){return n})},"60c8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{staticClass:"w-full flex flex-row items-center justify-between pt-4 pb-6"},[r("h1",{staticClass:"inline text-grey-darkest text-xl font-bold"},[t._v("Users")]),r("base-button",{attrs:{color:"accent"},on:{click:function(e){t.$router.push("/users/create")}}},[t._v("Create")])],1),r("div",{staticClass:"w-full bg-white shadow rounded overflow-hidden"},[r("base-table",[r("base-thead",[r("base-th",[t._v("Id")]),r("base-th",[t._v("Username")]),r("base-th",[t._v("Email")]),r("base-th",[t._v("Active")]),r("base-th",[t._v("Created At")]),r("base-th",{staticClass:"w-1"})],1),r("base-tbody",t._l(t.users,function(e){return r("base-tr",{key:e.id},[r("base-td",[t._v(t._s(e.id))]),r("base-td",[t._v(t._s(e.username))]),r("base-td",[t._v(t._s(e.email))]),r("base-td",[t._v(t._s(e.active))]),r("base-td",[t._v(t._s(e.created_at))]),r("base-td",{staticClass:"flex"},[r("base-button",{staticClass:"mr-2",attrs:{flat:"",color:"primary",title:"Edit user"},on:{click:function(r){t.edit(e)}}},[r("i",{staticClass:"fas fa-edit"})]),r("base-button",{staticClass:"mr-2",attrs:{flat:"",color:"primary",title:"Reset password"},on:{click:function(r){t.resetPassword(e)}}},[r("i",{staticClass:"fas fa-key"})]),r("base-button",{attrs:{flat:"",color:"danger",title:"Delete user"},on:{click:function(r){t.deleteUser(e)}}},[e._deleting?r("waiting"):r("i",{staticClass:"fas fa-trash"})],1)],1)],1)}))],1)],1)])},o=[],i=(r("96cf"),r("3040")),a=r("c93e"),s=(r("cadf"),r("551c"),r("097d"),r("2f62")),c=r("f984"),u={name:"Users",components:{Waiting:c["a"]},computed:Object(a["a"])({},Object(s["d"])("users",["users"])),created:function(){this.fetchUsers()},methods:{fetchUsers:function(){this.$store.dispatch("users/fetchUsers")},edit:function(t){this.$router.push({name:"users-edit",params:{id:t.id,user:t}})},resetPassword:function(t){this.$router.push({name:"users-reset-password",params:{id:t.id,user:t}})},deleteUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("del"),e._deleting=!0,t.prev=2,t.next=5,this.$store.dispatch("users/deleteUser",e);case 5:this.fetchUsers(),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](2);case 10:e._deleting=!1;case 11:case"end":return t.stop()}},t,this,[[2,8]])}));return function(e){return t.apply(this,arguments)}}()}},l=u,f=r("2877"),h=Object(f["a"])(l,n,o,!1,null,null,null);h.options.__file="index.vue";e["default"]=h.exports},"6d53":function(t,e,r){"use strict";var n=r("9b73"),o=r.n(n);o.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==n&&o.call(g,a)&&(y=g);var w=E.prototype=x.prototype=Object.create(y);L.prototype=w.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var o=new j(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(U),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),U(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;U(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=O(t,r,a),i}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function L(){}function E(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(r,n,i,a){var s=_(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=C(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9b73":function(t,e,r){},f984:function(t,e,r){"use strict";var n=function(t,e){var r=e._c;return r("span",{staticClass:"fas fa-spinner spin",attrs:{"aria-hidden":"true"}})},o=[],i={name:"waiting"},a=i,s=(r("6d53"),r("2877")),c=Object(s["a"])(a,n,o,!0,null,"b1faca08",null);c.options.__file="waiting.vue";e["a"]=c.exports}}]);