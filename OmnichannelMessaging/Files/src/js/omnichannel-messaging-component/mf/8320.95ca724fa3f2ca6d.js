(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[8320],{78320:()=>{/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var x;(function(U){(function(d){var p=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),w=E(U);typeof p.Reflect>"u"?p.Reflect=U:w=E(p.Reflect,w),d(w);function E(_,b){return function(M,g){typeof _[M]!="function"&&Object.defineProperty(_,M,{configurable:!0,writable:!0,value:g}),b&&b(M,g)}}})(function(d){var p=Object.prototype.hasOwnProperty,w=typeof Symbol=="function",E=w&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",_=w&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",b=typeof Object.create=="function",M={__proto__:[]}instanceof Array,g=!b&&!M,O={create:b?function(){return C(Object.create(null))}:M?function(){return C({__proto__:null})}:function(){return C({})},has:g?function(t,e){return p.call(t,e)}:function(t,e){return e in t},get:g?function(t,e){return p.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},G=Object.getPrototypeOf(Function),S=typeof process=="object"&&process["env"]&&process["env"].REFLECT_METADATA_USE_MAP_POLYFILL==="true",P=!S&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:_t(),Z=!S&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:wt(),z=!S&&typeof WeakMap=="function"?WeakMap:Mt(),I=new z;function J(t,e,n,r){if(c(n)){if(!H(t))throw new TypeError;if(!q(e))throw new TypeError;return it(t,e)}else{if(!H(t))throw new TypeError;if(!l(e))throw new TypeError;if(!l(r)&&!c(r)&&!m(r))throw new TypeError;return m(r)&&(r=void 0),n=y(n),ut(t,e,n,r)}}d("decorate",J);function Q(t,e){function n(r,a){if(!l(r))throw new TypeError;if(!c(a)&&!ht(a))throw new TypeError;L(t,e,r,a)}return n}d("metadata",Q);function X(t,e,n,r){if(!l(n))throw new TypeError;return c(r)||(r=y(r)),L(t,e,n,r)}d("defineMetadata",X);function $(t,e,n){if(!l(e))throw new TypeError;return c(n)||(n=y(n)),R(t,e,n)}d("hasMetadata",$);function K(t,e,n){if(!l(e))throw new TypeError;return c(n)||(n=y(n)),j(t,e,n)}d("hasOwnMetadata",K);function tt(t,e,n){if(!l(e))throw new TypeError;return c(n)||(n=y(n)),D(t,e,n)}d("getMetadata",tt);function et(t,e,n){if(!l(e))throw new TypeError;return c(n)||(n=y(n)),W(t,e,n)}d("getOwnMetadata",et);function nt(t,e){if(!l(t))throw new TypeError;return c(e)||(e=y(e)),F(t,e)}d("getMetadataKeys",nt);function rt(t,e){if(!l(t))throw new TypeError;return c(e)||(e=y(e)),V(t,e)}d("getOwnMetadataKeys",rt);function at(t,e,n){if(!l(e))throw new TypeError;c(n)||(n=y(n));var r=T(e,n,!1);if(c(r)||!r.delete(t))return!1;if(r.size>0)return!0;var a=I.get(e);return a.delete(n),a.size>0||I.delete(e),!0}d("deleteMetadata",at);function it(t,e){for(var n=t.length-1;n>=0;--n){var r=t[n],a=r(e);if(!c(a)&&!m(a)){if(!q(a))throw new TypeError;e=a}}return e}function ut(t,e,n,r){for(var a=t.length-1;a>=0;--a){var h=t[a],u=h(e,n,r);if(!c(u)&&!m(u)){if(!l(u))throw new TypeError;r=u}}return r}function T(t,e,n){var r=I.get(t);if(c(r)){if(!n)return;r=new P,I.set(t,r)}var a=r.get(e);if(c(a)){if(!n)return;a=new P,r.set(e,a)}return a}function R(t,e,n){var r=j(t,e,n);if(r)return!0;var a=A(e);return m(a)?!1:R(t,a,n)}function j(t,e,n){var r=T(e,n,!1);return c(r)?!1:ct(r.has(t))}function D(t,e,n){var r=j(t,e,n);if(r)return W(t,e,n);var a=A(e);if(!m(a))return D(t,a,n)}function W(t,e,n){var r=T(e,n,!1);if(!c(r))return r.get(t)}function L(t,e,n,r){var a=T(n,r,!0);a.set(t,e)}function F(t,e){var n=V(t,e),r=A(t);if(r===null)return n;var a=F(r,e);if(a.length<=0)return n;if(n.length<=0)return a;for(var h=new Z,u=[],o=0,i=n;o<i.length;o++){var f=i[o],s=h.has(f);s||(h.add(f),u.push(f))}for(var v=0,Y=a;v<Y.length;v++){var f=Y[v],s=h.has(f);s||(h.add(f),u.push(f))}return u}function V(t,e){var n=[],r=T(t,e,!1);if(c(r))return n;for(var a=r.keys(),h=dt(a),u=0;;){var o=vt(h);if(!o)return n.length=u,n;var i=yt(o);try{n[u]=i}catch(f){try{pt(h)}finally{throw f}}u++}}function B(t){if(t===null)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return t===null?1:6;default:return 6}}function c(t){return t===void 0}function m(t){return t===null}function ot(t){return typeof t=="symbol"}function l(t){return typeof t=="object"?t!==null:typeof t=="function"}function ft(t,e){switch(B(t)){case 0:return t;case 1:return t;case 2:return t;case 3:return t;case 4:return t;case 5:return t}var n=e===3?"string":e===5?"number":"default",r=N(t,E);if(r!==void 0){var a=r.call(t,n);if(l(a))throw new TypeError;return a}return st(t,n==="default"?"number":n)}function st(t,e){if(e==="string"){var n=t.toString;if(k(n)){var r=n.call(t);if(!l(r))return r}var a=t.valueOf;if(k(a)){var r=a.call(t);if(!l(r))return r}}else{var a=t.valueOf;if(k(a)){var r=a.call(t);if(!l(r))return r}var h=t.toString;if(k(h)){var r=h.call(t);if(!l(r))return r}}throw new TypeError}function ct(t){return!!t}function lt(t){return""+t}function y(t){var e=ft(t,3);return ot(e)?e:lt(e)}function H(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:Object.prototype.toString.call(t)==="[object Array]"}function k(t){return typeof t=="function"}function q(t){return typeof t=="function"}function ht(t){switch(B(t)){case 3:return!0;case 4:return!0;default:return!1}}function N(t,e){var n=t[e];if(n!=null){if(!k(n))throw new TypeError;return n}}function dt(t){var e=N(t,_);if(!k(e))throw new TypeError;var n=e.call(t);if(!l(n))throw new TypeError;return n}function yt(t){return t.value}function vt(t){var e=t.next();return e.done?!1:e}function pt(t){var e=t.return;e&&e.call(t)}function A(t){var e=Object.getPrototypeOf(t);if(typeof t!="function"||t===G||e!==G)return e;var n=t.prototype,r=n&&Object.getPrototypeOf(n);if(r==null||r===Object.prototype)return e;var a=r.constructor;return typeof a!="function"||a===t?e:a}function _t(){var t={},e=[],n=function(){function u(o,i,f){this._index=0,this._keys=o,this._values=i,this._selector=f}return u.prototype["@@iterator"]=function(){return this},u.prototype[_]=function(){return this},u.prototype.next=function(){var o=this._index;if(o>=0&&o<this._keys.length){var i=this._selector(this._keys[o],this._values[o]);return o+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:i,done:!1}}return{value:void 0,done:!0}},u.prototype.throw=function(o){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),o},u.prototype.return=function(o){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:o,done:!0}},u}();return function(){function u(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(u.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),u.prototype.has=function(o){return this._find(o,!1)>=0},u.prototype.get=function(o){var i=this._find(o,!1);return i>=0?this._values[i]:void 0},u.prototype.set=function(o,i){var f=this._find(o,!0);return this._values[f]=i,this},u.prototype.delete=function(o){var i=this._find(o,!1);if(i>=0){for(var f=this._keys.length,s=i+1;s<f;s++)this._keys[s-1]=this._keys[s],this._values[s-1]=this._values[s];return this._keys.length--,this._values.length--,o===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},u.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},u.prototype.keys=function(){return new n(this._keys,this._values,r)},u.prototype.values=function(){return new n(this._keys,this._values,a)},u.prototype.entries=function(){return new n(this._keys,this._values,h)},u.prototype["@@iterator"]=function(){return this.entries()},u.prototype[_]=function(){return this.entries()},u.prototype._find=function(o,i){return this._cacheKey!==o&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=o)),this._cacheIndex<0&&i&&(this._cacheIndex=this._keys.length,this._keys.push(o),this._values.push(void 0)),this._cacheIndex},u}();function r(u,o){return u}function a(u,o){return o}function h(u,o){return[u,o]}}function wt(){return function(){function t(){this._map=new P}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._map.has(e)},t.prototype.add=function(e){return this._map.set(e,e),this},t.prototype.delete=function(e){return this._map.delete(e)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[_]=function(){return this.keys()},t}()}function Mt(){var t=16,e=O.create(),n=r();return function(){function i(){this._key=r()}return i.prototype.has=function(f){var s=a(f,!1);return s!==void 0?O.has(s,this._key):!1},i.prototype.get=function(f){var s=a(f,!1);return s!==void 0?O.get(s,this._key):void 0},i.prototype.set=function(f,s){var v=a(f,!0);return v[this._key]=s,this},i.prototype.delete=function(f){var s=a(f,!1);return s!==void 0?delete s[this._key]:!1},i.prototype.clear=function(){this._key=r()},i}();function r(){var i;do i="@@WeakMap@@"+o();while(O.has(e,i));return e[i]=!0,i}function a(i,f){if(!p.call(i,n)){if(!f)return;Object.defineProperty(i,n,{value:O.create()})}return i[n]}function h(i,f){for(var s=0;s<f;++s)i[s]=Math.random()*255|0;return i}function u(i){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(i)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(i)):h(new Uint8Array(i),i):h(new Array(i),i)}function o(){var i=u(t);i[6]=i[6]&79|64,i[8]=i[8]&191|128;for(var f="",s=0;s<t;++s){var v=i[s];(s===4||s===6||s===8)&&(f+="-"),v<16&&(f+="0"),f+=v.toString(16).toLowerCase()}return f}}function C(t){return t.__=void 0,delete t.__,t}})})(x||(x={}))}}]);
