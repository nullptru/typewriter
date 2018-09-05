!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function i(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function o(t){return"function"==typeof t}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function c(t){setTimeout(function(){throw t})}var h={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},a=Array.isArray||function(t){return t&&"number"==typeof t.length};function l(t){return null!=t&&"object"==typeof t}var f,p={e:{}};function d(){try{return f.apply(this,arguments)}catch(t){return p.e=t,p}}function b(t){return f=t,d}var y=function(t){function e(r){var n=t.call(this,r?r.length+" errors occurred during unsubscription:\n  "+r.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"")||this;return n.errors=r,n.name="UnsubscriptionError",Object.setPrototypeOf(n,e.prototype),n}return i(e,t),e}(Error),v=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var r=this._parent,n=this._parents,i=this._unsubscribe,s=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var u=-1,c=n?n.length:0;r;)r.remove(this),r=++u<c&&n[u]||null;if(o(i))b(i).call(this)===p&&(e=!0,t=t||(p.e instanceof y?_(p.e.errors):[p.e]));if(a(s))for(u=-1,c=s.length;++u<c;){var h=s[u];if(l(h))if(b(h.unsubscribe).call(h)===p){e=!0,t=t||[];var f=p.e;f instanceof y?t=t.concat(_(f.errors)):t.push(f)}}if(e)throw new y(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var r=e;switch(typeof e){case"function":r=new t(e);case"object":if(r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if("function"!=typeof r._addParent){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(r),r._addParent(this),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.prototype._addParent=function(t){var e=this._parent,r=this._parents;e&&e!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},t.EMPTY=((e=new t).closed=!0,e),t}();function _(t){return t.reduce(function(t,e){return t.concat(e instanceof y?e.errors:e)},[])}var w="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("rxSubscriber"):"@@rxSubscriber",m=function(t){function e(e,r,n){var i,o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=h;break;case 1:if(!e){o.destination=h;break}if("object"==typeof e){if((i=e)instanceof m||"syncErrorThrowable"in i&&i[w]){var s=e[w]();o.syncErrorThrowable=s.syncErrorThrowable,o.destination=s,s.add(o)}else o.syncErrorThrowable=!0,o.destination=new x(o,e);break}default:o.syncErrorThrowable=!0,o.destination=new x(o,e,r,n)}return o}return i(e,t),e.prototype[w]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this},e}(v),x=function(t){function e(e,r,n,i){var s,u=t.call(this)||this;u._parentSubscriber=e;var c=u;return o(r)?s=r:r&&(s=r.next,n=r.error,i=r.complete,r!==h&&(o((c=Object.create(r)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=n,u._complete=i,u}return i(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=u.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;c(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(c(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(m);var E="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(){}function S(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:g}var T=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,i=function(t,e,r){if(t){if(t instanceof m)return t;if(t[w])return t[w]()}return t||e||r?new m(t,e,r):new m(h)}(t,e,r);if(n?n.call(i,this.source):i.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),u.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=N(e))(function(e,n){var i;i=r.subscribe(function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}},n,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[E]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:S(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=N(t))(function(t,r){var n;e.subscribe(function(t){return n=t},function(t){return r(t)},function(){return t(n)})})},t.create=function(e){return new t(e)},t}();function N(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function O(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var I=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};var j=function(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();var P=function(t){return function(e){for(var r=0,n=t.length;r<n&&!e.closed;r++)e.next(t[r]);e.closed||e.complete()}};function C(t,e){return new T(e?function(r){var n=new v,i=0;return n.add(e.schedule(function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()})),n}:P(t))}var A=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,c),e}};var k=function(t){return function(e){for(var r=t[j]();;){var n=r.next();if(n.done){e.complete();break}if(e.next(n.value),e.closed)break}return"function"==typeof r.return&&e.add(function(){r.return&&r.return()}),e}};var H=function(t){return function(e){var r=t[E]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(e)}};var D=function(t){if(t instanceof T)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[E])return H(t);if(I(t))return P(t);if(O(t))return A(t);if(t&&"function"==typeof t[j])return k(t);var e=l(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function q(t,e){if(!e)return t instanceof T?t:new T(D(t));if(null!=t){if(function(t){return t&&"function"==typeof t[E]}(t))return function(t,e){return new T(e?function(r){var n=new v;return n.add(e.schedule(function(){var i=t[E]();n.add(i.subscribe({next:function(t){n.add(e.schedule(function(){return r.next(t)}))},error:function(t){n.add(e.schedule(function(){return r.error(t)}))},complete:function(){n.add(e.schedule(function(){return r.complete()}))}}))})),n}:H(t))}(t,e);if(O(t))return function(t,e){return new T(e?function(r){var n=new v;return n.add(e.schedule(function(){return t.then(function(t){n.add(e.schedule(function(){r.next(t),n.add(e.schedule(function(){return r.complete()}))}))},function(t){n.add(e.schedule(function(){return r.error(t)}))})})),n}:A(t))}(t,e);if(I(t))return C(t,e);if(function(t){return t&&"function"==typeof t[j]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new T(e?function(r){var n,i=new v;return i.add(function(){n&&"function"==typeof n.return&&n.return()}),i.add(e.schedule(function(){n=t[j](),i.add(e.schedule(function(){if(!r.closed){var t,e;try{var i=n.next();t=i.value,e=i.done}catch(t){return void r.error(t)}e?r.complete():(r.next(t),this.schedule())}}))})),i}:k(t))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function V(t){return t&&"function"==typeof t.schedule}var M=new T(function(t){return t.complete()});function Y(t){return t?function(t){return new T(function(e){return t.schedule(function(){return e.complete()})})}(t):M}function R(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r,n,i=t[t.length-1];switch(V(i)?t.pop():i=void 0,t.length){case 0:return Y(i);case 1:return i?C(t,i):(r=t[0],(n=new T(function(t){t.next(r),t.complete()}))._isScalar=!0,n.value=r,n);default:return C(t,i)}}var L=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return i(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,r){return t.call(this)||this}return i(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(v)),U=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),F=new(function(t){function e(r,n){void 0===n&&(n=U.now);var i=t.call(this,r,function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return i(e,t),e.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,i):t.prototype.schedule.call(this,r,n,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(U))(L);function Q(t){return!a(t)&&t-parseFloat(t)+1>=0}function z(t){var e=t.index,r=t.period,n=t.subscriber;if(n.next(e),!n.closed){if(-1===r)return n.complete();t.index=e+1,this.schedule(t,r)}}var B=function(t){function e(e,r,n){var i=t.call(this)||this;return i.parent=e,i.outerValue=r,i.outerIndex=n,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(m);var G=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(m);var J=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new K(t,this.project,this.thisArg))},t}(),K=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return i(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(m);function W(t,e,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof e?function(n){return n.pipe(W(function(r,n){return q(t(r,n)).pipe(function(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new J(t,e))}}(function(t,i){return e(r,t,n,i)}))},r))}:("number"==typeof e&&(r=e),function(e){return e.lift(new X(t,r))})}var X=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new Z(t,this.project,this.concurrent))},t}(),Z=function(t){function e(e,r,n){void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=r,i.concurrent=n,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,r)},e.prototype._innerSub=function(t,e,r){var n,i;this.add((n=t,i=new B(this,e,r),D(n)(i)))},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(G);function $(t){var e=t.error;t.subscriber.error(e)}var tt=function(){function t(t,e,r){this.kind=t,this.value=e,this.error=r,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,r){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return r&&r()}},t.prototype.accept=function(t,e,r){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,r)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return R(this.value);case"E":return t=this.error,new T(e?function(r){return e.schedule($,0,{error:t,subscriber:r})}:function(e){return e.error(t)});case"C":return Y()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();function et(t,e){void 0===e&&(e=F);var r,n=(r=t)instanceof Date&&!isNaN(+r)?+t-e.now():Math.abs(t);return function(t){return t.lift(new rt(n,e))}}var rt=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new nt(t,this.delay,this.scheduler))},t}(),nt=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.delay=r,i.scheduler=n,i.queue=[],i.active=!1,i.errored=!1,i}return i(e,t),e.dispatch=function(t){for(var e=t.source,r=e.queue,n=t.scheduler,i=t.destination;r.length>0&&r[0].time-n.now()<=0;)r.shift().notification.observe(i);if(r.length>0){var o=Math.max(0,r[0].time-n.now());this.schedule(t,o)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,r=new it(e.now()+this.delay,t);this.queue.push(r),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(tt.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t)},e.prototype._complete=function(){this.scheduleNotification(tt.createComplete())},e}(m),it=function(){return function(t,e){this.time=t,this.notification=e}}(),ot=function(t){function e(){var r=t.call(this,"argument out of range")||this;return r.name="ArgumentOutOfRangeError",Object.setPrototypeOf(r,e.prototype),r}return i(e,t),e}(Error);var st=function(){function t(t){if(this.total=t,this.total<0)throw new ot}return t.prototype.call=function(t,e){return e.subscribe(new ut(t,this.total))},t}(),ut=function(t){function e(e,r){var n=t.call(this,e)||this;return n.total=r,n.count=0,n}return i(e,t),e.prototype._next=function(t){var e=this.total,r=++this.count;r<=e&&(this.destination.next(t),r===e&&(this.destination.complete(),this.unsubscribe()))},e}(m);var ct=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new ht(t,this.nextOrObserver,this.error,this.complete))},t}(),ht=function(t){function e(e,r,n,i){var s=t.call(this,e)||this;return s._tapNext=g,s._tapError=g,s._tapComplete=g,s._tapError=n||g,s._tapComplete=i||g,o(r)?(s._context=s,s._tapNext=r):r&&(s._context=r,s._tapNext=r.next||g,s._tapError=r.error||g,s._tapComplete=r.complete||g),s}return i(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(m);r.d(e,"Typist",function(){return at});class at{constructor(t,e={}){this.el=document.getElementById(t),this.queue=[],this.waitTime=e.waitTime||100}type(t,e){let r;var n;return r=0===this.waitTime?[t]:[...t],this.addToQueue(q(r).pipe(W((t,r)=>{return R(r?{type:"insert",content:t}:{type:"insert",content:t,placeholder:e||"<span>"}).pipe(et(this.waitTime*r))},n,1))),this}wait(t){return this.addToQueue(Y().pipe(et(t||this.waitTime))),this}del(t){var e,r,n;return this.addToQueue(function(t,e,r){void 0===t&&(t=0);var n=-1;return Q(e)?n=Number(e)<1?1:Number(e):V(e)&&(r=e),V(r)||(r=F),new T(function(e){var i=Q(t)?t:+t-r.now();return r.schedule(z,i,{index:0,period:n,subscriber:e})})}(0,100).pipe(function(t){return function(e){return 0===t?Y():e.lift(new st(t))}}(t),(e=(()=>{this.singleRemove()}),function(t){return t.lift(new ct(e,r,n))}))),this}singleRemove(){const t=this.el.lastElementChild;if(1!==t.nodeType)throw new Error("Last Element should be a Element Node.");{const e=t.innerText,r=e.length;console.log(t,e,"Last"),r>1?t.innerText=e.slice(0,r-1):1===r?this.el.removeChild(t):(this.el.removeChild(t),this.singleRemove())}}addToQueue(t){console.log("Enter: ",this.queue.length),0===this.queue.length?(this.queue.push(t),this.runObservable()):this.queue.push(t)}runObservable(){Y().pipe(et(0)).subscribe({complete:()=>{this.queue.shift().subscribe({next:t=>{this.handleResult(t),console.log(t)},complete:()=>{this.queue.length&&this.runObservable()}})}})}handleResult(t){switch(t.type){case"insert":if(t.placeholder){const e=document.createElement("div");e.innerHTML=t.placeholder;const r=e.firstChild;r.innerHTML=t.content,this.el.appendChild(r)}else this.el.lastChild.innerHTML+=t.content}}}}])});