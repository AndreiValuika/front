(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";n.r(e);var r=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{get(t){return""}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o{constructor({defaultEncapsulation:t=r.Emulated,useJit:e=!0,jitDevMode:n=!1,missingTranslation:s=null,preserveWhitespaces:o,strictInjectionParameters:i}={}){var l;this.defaultEncapsulation=t,this.useJit=!!e,this.jitDevMode=!!n,this.missingTranslation=s,this.preserveWhitespaces=function(t,e=!1){return null===t?e:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(void 0===(l=o)?null:l),this.strictInjectionParameters=!0===i
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function i(t){return"function"==typeof t}let l=!1;const u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else l&&console.log("RxJS: Back to a better error behavior. Thank you. <3");l=t},get useDeprecatedSynchronousErrorHandling(){return l}};function a(t){setTimeout(()=>{throw t},0)}const c={closed:!0,next(t){},error(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;a(t)},complete(){}},h=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))();function d(t){return null!==t&&"object"==typeof t}const f=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let p=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:r,_unsubscribe:s,_subscriptions:o}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(i(s)){r&&(this._unsubscribe=void 0);try{s.call(this)}catch(l){e=l instanceof f?_(l.errors):[l]}}if(h(o)){let t=-1,n=o.length;for(;++t<n;){const n=o[t];if(d(n))try{n.unsubscribe()}catch(l){e=e||[],l instanceof f?e=e.concat(_(l.errors)):e.push(l)}}}if(e)throw new f(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function _(t){return t.reduce((t,e)=>t.concat(e instanceof f?e.errors:e),[])}const g=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class y extends p{constructor(t,e,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=c;break;case 1:if(!t){this.destination=c;break}if("object"==typeof t){t instanceof y?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new m(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new m(this,t,e,n)}}[g](){return this}static create(t,e,n){const r=new y(t,e,n);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class m extends y{constructor(t,e,n,r){let s;super(),this._parentSubscriber=t;let o=this;i(e)?s=e:e&&(s=e.next,n=e.error,r=e.complete,e!==c&&(o=Object.create(e),i(o.unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=s,this._error=n,this._complete=r}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:n}=u;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):a(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;a(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw n;a(n)}}__tryOrSetError(t,e,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(a(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const v=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function b(t){return t}let w=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const n=new t;return n.source=this,n.operator=e,n}subscribe(t,e,n){const{operator:r}=this,s=function(t,e,n){if(t){if(t instanceof y)return t;if(t[g])return t[g]()}return t||e||n?new y(t,e,n):new y(c)}(t,e,n);if(s.add(r?r.call(s,this.source):this.source||u.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),u.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(t){try{return this._subscribe(t)}catch(e){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof y?n:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=C(e))((e,n)=>{let r;r=this.subscribe(e=>{try{t(e)}catch(s){n(s),r&&r.unsubscribe()}},n,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[v](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?b:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=C(t))((t,e)=>{let n;this.subscribe(t=>n=t,t=>e(t),()=>t(n))})}}return t.create=e=>new t(e),t})();function C(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const E=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class A extends p{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}class k extends y{constructor(t){super(t),this.destination=t}}let x=(()=>{class t extends w{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[g](){return new k(this)}lift(t){const e=new T(this,this);return e.operator=t,e}next(t){if(this.closed)throw new E;if(!this.isStopped){const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].next(t)}}error(t){if(this.closed)throw new E;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new E;this.isStopped=!0;const{observers:t}=this,e=t.length,n=t.slice();for(let r=0;r<e;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new E;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new E;return this.hasError?(t.error(this.thrownError),p.EMPTY):this.isStopped?(t.complete(),p.EMPTY):(this.observers.push(t),new A(this,t))}asObservable(){const t=new w;return t.source=this,t}}return t.create=(t,e)=>new T(t,e),t})();class T extends x{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):p.EMPTY}}function S(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new I(t,e))}}class I{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new V(t,this.project,this.thisArg))}}class V extends y{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const O=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()};function D(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const P=D(),M=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function j(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const N=t=>{if(t&&"function"==typeof t[v])return r=t,t=>{const e=r[v]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(M(t))return O(t);if(j(t))return n=t,t=>(n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,a),t);if(t&&"function"==typeof t[P])return e=t,t=>{const n=e[P]();for(;;){let e;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t};{const e=d(t)?"an invalid object":`'${t}'`;throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var e,n,r};function R(t,e){return new w(n=>{const r=new p;let s=0;return r.add(e.schedule(function(){s!==t.length?(n.next(t[s++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function H(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[v]}(t))return function(t,e){return new w(n=>{const r=new p;return r.add(e.schedule(()=>{const s=t[v]();r.add(s.subscribe({next(t){r.add(e.schedule(()=>n.next(t)))},error(t){r.add(e.schedule(()=>n.error(t)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(j(t))return function(t,e){return new w(n=>{const r=new p;return r.add(e.schedule(()=>t.then(t=>{r.add(e.schedule(()=>{n.next(t),r.add(e.schedule(()=>n.complete()))}))},t=>{r.add(e.schedule(()=>n.error(t)))}))),r})}(t,e);if(M(t))return R(t,e);if(function(t){return t&&"function"==typeof t[P]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new w(n=>{const r=new p;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(e.schedule(()=>{s=t[P](),r.add(e.schedule(function(){if(n.closed)return;let t,e;try{const n=s.next();t=n.value,e=n.done}catch(r){return void n.error(r)}e?n.complete():(n.next(t),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof w?t:new w(N(t))}class F extends y{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class L extends y{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function B(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(B((n,r)=>H(t(n,r)).pipe(S((t,s)=>e(n,t,r,s))),n)):("number"==typeof e&&(n=e),e=>e.lift(new U(t,n)))}class U{constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new Z(t,this.project,this.concurrent))}}class Z extends L{constructor(t,e,n=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(e)}_innerSub(t){const e=new F(this),n=this.destination;n.add(e);const r=function(t,e){if(e.closed)return;if(t instanceof w)return t.subscribe(e);let n;try{n=N(t)(e)}catch(r){e.error(r)}return n}(t,e);r!==e&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function $(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];var s;return(s=r)&&"function"==typeof s.schedule?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof w?t[0]:function(t=Number.POSITIVE_INFINITY){return B(b,t)}(e)(function(t,e){return e?R(t,e):new w(O(t))}(t,n))}function z(){return function(t){return t.lift(new W(t))}}class W{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new q(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class q extends y{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class G extends w{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new p,t.add(this.source.subscribe(new J(this.getSubject(),this))),t.closed&&(this._connection=null,t=p.EMPTY)),t}refCount(){return z()(this)}}const Q=(()=>{const t=G.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class J extends k{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function K(){return new x}
/**
 * @license Angular v11.0.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Y(t){for(let e in t)if(t[e]===Y)return e;throw Error("Could not find renamed property on target object.")}function X(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function tt(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(tt).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return""+t.overriddenName;if(t.name)return""+t.name;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function et(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const nt=Y({__forward_ref__:Y});function rt(t){return t.__forward_ref__=rt,t.toString=function(){return tt(this())},t}function st(t){return ot(t)?t():t}function ot(t){return"function"==typeof t&&t.hasOwnProperty(nt)&&t.__forward_ref__===rt}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function it(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function lt(t){return{factory:t.factory,providers:t.providers||[],imports:t.imports||[]}}function ut(t){return at(t,ht)||at(t,ft)}function at(t,e){return t.hasOwnProperty(e)?t[e]:null}function ct(t){return t&&(t.hasOwnProperty(dt)||t.hasOwnProperty(pt))?t[dt]:null}const ht=Y({\u0275prov:Y}),dt=Y({\u0275inj:Y}),ft=Y({ngInjectableDef:Y}),pt=Y({ngInjectorDef:Y});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var _t=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let gt;function yt(t){const e=gt;return gt=t,e}function mt(t,e,n){const r=ut(t);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&_t.Optional)return null;if(void 0!==e)return e;throw new Error(`Injector: NOT_FOUND [${tt(t)}]`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vt(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var bt=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}({}),wt=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ct="undefined"!=typeof globalThis&&globalThis,Et="undefined"!=typeof window&&window,At="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,kt="undefined"!=typeof global&&global,xt=Ct||kt||Et||At,Tt={},St=[],It=Y({\u0275cmp:Y}),Vt=Y({\u0275dir:Y}),Ot=Y({\u0275pipe:Y}),Dt=Y({\u0275mod:Y}),Pt=Y({\u0275loc:Y}),Mt=Y({\u0275fac:Y}),jt=Y({__NG_ELEMENT_ID__:Y});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Nt=0;function Rt(t){return vt(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===bt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||St,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||wt.Emulated,id:"c",styles:t.styles||St,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,o=t.pipes;return n.id+=Nt++,n.inputs=Ut(t.inputs,e),n.outputs=Ut(t.outputs),s&&s.forEach(t=>t(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(Ht):null,n.pipeDefs=o?()=>("function"==typeof o?o():o).map(Ft):null,n})}function Ht(t){return $t(t)||function(t){return t[Vt]||null}(t)}function Ft(t){return function(t){return t[Ot]||null}(t)}const Lt={};function Bt(t){const e={type:t.type,bootstrap:t.bootstrap||St,declarations:t.declarations||St,imports:t.imports||St,exports:t.exports||St,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&vt(()=>{Lt[t.id]=t.type}),e}function Ut(t,e){if(null==t)return Tt;const n={};for(const r in t)if(t.hasOwnProperty(r)){let s=t[r],o=s;Array.isArray(s)&&(o=s[1],s=s[0]),n[s]=r,e&&(e[s]=o)}return n}const Zt=Rt;function $t(t){return t[It]||null}function zt(t,e){const n=t[Dt]||null;if(!n&&!0===e)throw new Error(`Type ${tt(t)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wt(t){return Array.isArray(t)&&"object"==typeof t[1]}function qt(t){return Array.isArray(t)&&!0===t[1]}function Gt(t){return 0!=(8&t.flags)}function Qt(t){return 2==(2&t.flags)}function Jt(t){return 1==(1&t.flags)}function Kt(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yt(t,e){return t.hasOwnProperty(Mt)?t[Mt]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Xt extends Error{constructor(t,e){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}(t,e)),this.code=t}}function te(t){return"string"==typeof t?t:null==t?"":String(t)}function ee(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():te(t)}function ne(t,e){const n=e?" in "+e:"";throw new Xt("201",`No provider for ${ee(t)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class re{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function se(){return oe}function oe(t){return t.type.prototype.ngOnChanges&&(t.setInput=le),ie}function ie(){const t=ue(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===Tt)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function le(t,e,n,r){const s=ue(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:Tt,current:null}),o=s.current||(s.current={}),i=s.previous,l=this.declaredInputs[n],u=i[l];o[l]=new re(u&&u.currentValue,e,i===Tt),t[r]=e}function ue(t){return t.__ngSimpleChanges__||null}se.ngInherit=!0;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ae=void 0;function ce(t){return!!t.listen}const he={createRenderer:(t,e)=>void 0!==ae?ae:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function de(t){for(;Array.isArray(t);)t=t[0];return t}function fe(t,e){return de(e[t])}function pe(t,e){return de(e[t.index])}function _e(t,e){return t.data[e]}function ge(t,e){const n=e[t];return Wt(n)?n:n[0]}function ye(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function me(t){return 128==(128&t[2])}function ve(t,e){return null==e?null:t[e]}function be(t){t[18]=0}function we(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ce={lFrame:Le(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Ee(){return Ce.bindingsEnabled}function Ae(){return Ce.lFrame.lView}function ke(){return Ce.lFrame.tView}function xe(){let t=Te();for(;null!==t&&64===t.type;)t=t.parent;return t}function Te(){return Ce.lFrame.currentTNode}function Se(t,e){const n=Ce.lFrame;n.currentTNode=t,n.isParent=e}function Ie(){return Ce.lFrame.isParent}function Ve(){return Ce.isInCheckNoChangesMode}function Oe(t){Ce.isInCheckNoChangesMode=t}function De(){return Ce.lFrame.bindingIndex++}function Pe(t,e){const n=Ce.lFrame;n.bindingIndex=n.bindingRootIndex=t,Me(e)}function Me(t){Ce.lFrame.currentDirectiveIndex=t}function je(t){Ce.lFrame.currentQueryIndex=t}function Ne(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Re(t,e,n){if(n&_t.SkipSelf){let r=e,s=t;for(;r=r.parent,!(null!==r||n&_t.Host||(r=Ne(s),null===r)||(s=s[15],10&r.type)););if(null===r)return!1;e=r,t=s}const r=Ce.lFrame=Fe();return r.currentTNode=e,r.lView=t,!0}function He(t){const e=Fe(),n=t[1];Ce.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Fe(){const t=Ce.lFrame,e=null===t?null:t.child;return null===e?Le(t):e}function Le(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function Be(){const t=Ce.lFrame;return Ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Ue=Be;function Ze(){const t=Be();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function $e(){return Ce.lFrame.selectedIndex}function ze(t){Ce.lFrame.selectedIndex=t}function We(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:o,ngAfterViewChecked:i,ngOnDestroy:l}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),s&&((t.contentHooks||(t.contentHooks=[])).push(n,s),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,s)),o&&(t.viewHooks||(t.viewHooks=[])).push(-n,o),i&&((t.viewHooks||(t.viewHooks=[])).push(n,i),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,i)),null!=l&&(t.destroyHooks||(t.destroyHooks=[])).push(n,l)}}function qe(t,e,n){Je(t,e,3,n)}function Ge(t,e,n,r){(3&t[2])===n&&Je(t,e,n,r)}function Qe(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Je(t,e,n,r){const s=null!=r?r:-1,o=e.length-1;let i=0;for(let l=void 0!==r?65535&t[18]:0;l<o;l++)if("number"==typeof e[l+1]){if(i=e[l],null!=r&&i>=r)break}else e[l]<0&&(t[18]+=65536),(i<s||-1==s)&&(Ke(t,n,e,l),t[18]=(4294901760&t[18])+l+2),l++}function Ke(t,e,n,r){const s=n[r]<0,o=n[r+1],i=t[s?-n[r]:n[r]];s?t[2]>>11<t[18]>>16&&(3&t[2])===e&&(t[2]+=2048,o.call(i)):o.call(i)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ye{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function Xe(t,e,n){const r=ce(t);let s=0;for(;s<n.length;){const o=n[s];if("number"==typeof o){if(0!==o)break;s++;const i=n[s++],l=n[s++],u=n[s++];r?t.setAttribute(e,l,u,i):e.setAttributeNS(i,l,u)}else{const i=o,l=n[++s];tn(i)?r&&t.setProperty(e,i,l):r?t.setAttribute(e,i,l):e.setAttribute(i,l),s++}}return s}function tn(t){return 64===t.charCodeAt(0)}function en(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const s=e[r];"number"==typeof s?n=s:0===n||nn(t,n,s,null,-1===n||2===n?e[++r]:null)}}return t}function nn(t,e,n,r,s){let o=0,i=t.length;if(-1===e)i=-1;else for(;o<t.length;){const n=t[o++];if("number"==typeof n){if(n===e){i=-1;break}if(n>e){i=o-1;break}}}for(;o<t.length;){const e=t[o];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==s&&(t[o+1]=s));if(r===t[o+1])return void(t[o+2]=s)}o++,null!==r&&o++,null!==s&&o++}-1!==i&&(t.splice(i,0,e),o=i+1),t.splice(o++,0,n),null!==r&&t.splice(o++,0,r),null!==s&&t.splice(o++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rn(t){return 32767&t}function sn(t,e){let n=t>>16,r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let on=!0;function ln(t){const e=on;return on=t,e}let un=0;function an(t,e){const n=hn(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,cn(r.data,t),cn(e,null),cn(r.blueprint,null));const s=dn(t,e),o=t.injectorIndex;if(-1!==s){const t=rn(s),n=sn(s,e),r=n[1].data;for(let s=0;s<8;s++)e[o+s]=n[t+s]|r[t+s]}return e[o+8]=s,o}function cn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function hn(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function dn(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,s=e;for(;null!==s;){const t=s[1],e=t.type;if(r=2===e?t.declTNode:1===e?s[6]:null,null===r)return-1;if(n++,s=s[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function fn(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(jt)&&(r=n[jt]),null==r&&(r=n[jt]=un++);const s=255&r,o=1<<s,i=64&s,l=32&s,u=e.data;128&s?i?l?u[t+7]|=o:u[t+6]|=o:l?u[t+5]|=o:u[t+4]|=o:i?l?u[t+3]|=o:u[t+2]|=o:l?u[t+1]|=o:u[t]|=o}(t,e,n)}function pn(t,e,n){if(n&_t.Optional)return t;ne(e,"NodeInjector")}function _n(t,e,n,r){if(n&_t.Optional&&void 0===r&&(r=null),0==(n&(_t.Self|_t.Host))){const s=t[9],o=yt(void 0);try{return s?s.get(e,r,n&_t.Optional):mt(e,r,n&_t.Optional)}finally{yt(o)}}return pn(r,e,n)}function gn(t,e,n,r=_t.Default,s){if(null!==t){const o=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(jt)?t[jt]:void 0;return"number"==typeof e?e>=0?255&e:mn:e}(n);if("function"==typeof o){if(!Re(e,t,r))return r&_t.Host?pn(s,n,r):_n(e,n,r,s);try{const t=o();if(null!=t||r&_t.Optional)return t;ne(n)}finally{Ue()}}else if("number"==typeof o){let s=null,i=hn(t,e),l=-1,u=r&_t.Host?e[16][6]:null;for((-1===i||r&_t.SkipSelf)&&(l=-1===i?dn(t,e):e[i+8],-1!==l&&Cn(r,!1)?(s=e[1],i=rn(l),e=sn(l,e)):i=-1);-1!==i;){const t=e[1];if(wn(o,i,t.data)){const t=vn(i,e,n,s,r,u);if(t!==yn)return t}l=e[i+8],-1!==l&&Cn(r,e[1].data[i+8]===u)&&wn(o,i,e)?(s=t,i=rn(l),e=sn(l,e)):i=-1}}}return _n(e,n,r,s)}const yn={};function mn(){return new En(xe(),Ae())}function vn(t,e,n,r,s,o){const i=e[1],l=i.data[t+8],u=function(t,e,n,r,s){const o=t.providerIndexes,i=e.data,l=1048575&o,u=t.directiveStart,a=o>>20,c=s?l+a:t.directiveEnd;for(let h=r?l:l+a;h<c;h++){const t=i[h];if(h<u&&n===t||h>=u&&t.type===n)return h}if(s){const t=i[u];if(t&&Kt(t)&&t.type===n)return u}return null}(l,i,n,null==r?Qt(l)&&on:r!=i&&0!=(3&l.type),s&_t.Host&&o===l);return null!==u?bn(e,i,u,l):yn}function bn(t,e,n,r){let s=t[n];const o=e.data;if(s instanceof Ye){const i=s;i.resolving&&function(t,e){throw new Xt("200","Circular dependency in DI detected for "+t)}(ee(o[n]));const l=ln(i.canSeeViewProviders);i.resolving=!0;const u=i.injectImpl?yt(i.injectImpl):null;Re(t,r,_t.Default);try{s=t[n]=i.factory(void 0,o,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:o}=e.type.prototype;if(r){const r=oe(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,s),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,o))}(n,o[n],e)}finally{null!==u&&yt(u),ln(l),i.resolving=!1,Ue()}}return s}function wn(t,e,n){const r=64&t,s=32&t;let o;return o=128&t?r?s?n[e+7]:n[e+6]:s?n[e+5]:n[e+4]:r?s?n[e+3]:n[e+2]:s?n[e+1]:n[e],!!(o&1<<t)}function Cn(t,e){return!(t&_t.Self||t&_t.Host&&e)}class En{constructor(t,e){this._tNode=t,this._lView=e}get(t,e){return gn(this._tNode,this._lView,t,void 0,e)}}function An(t){const e=t;if(ot(t))return()=>{const t=An(st(e));return t?t():null};let n=Yt(e);if(null===n){const t=ct(e);n=t&&t.factory}return n||null}function kn(t){return vt(()=>{const e=t.prototype.constructor,n=e[Mt]||An(e),r=Object.prototype;let s=Object.getPrototypeOf(t.prototype).constructor;for(;s&&s!==r;){const t=s[Mt]||An(s);if(t&&t!==n)return t;s=Object.getPrototypeOf(s)}return t=>new t})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xn(t,e,n){return vt(()=>{const r=function(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}(e);function s(...t){if(this instanceof s)return r.apply(this,t),this;const e=new s(...t);return n.annotation=e,n;function n(t,n,r){const s=t.hasOwnProperty("__parameters__")?t.__parameters__:Object.defineProperty(t,"__parameters__",{value:[]}).__parameters__;for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(e),t}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Tn{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=it({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sn(t,e){t.forEach(t=>Array.isArray(t)?Sn(t,e):e(t))}function In(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function Vn(t,e,n){let r=Dn(t,e);return r>=0?t[1|r]=n:(r=~r,function(t,e,n,r){let s=t.length;if(s==e)t.push(n,r);else if(1===s)t.push(r,t[0]),t[0]=n;else{for(s--,t.push(t[s-1],t[s]);s>e;)t[s]=t[s-2],s--;t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function On(t,e){const n=Dn(t,e);if(n>=0)return t[1|n]}function Dn(t,e){return function(t,e,n){let r=0,s=t.length>>1;for(;s!==r;){const n=r+(s-r>>1),o=t[n<<1];if(e===o)return n<<1;o>e?s=n:r=n+1}return~(s<<1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Pn=xn("Inject",t=>({token:t})),Mn=xn("Optional"),jn=xn("Self"),Nn=xn("SkipSelf"),Rn=xn("Host"),Hn={},Fn=/\n/gm,Ln=Y({provide:String,useValue:Y});let Bn=void 0;function Un(t){const e=Bn;return Bn=t,e}function Zn(t,e=_t.Default){if(void 0===Bn)throw new Error("inject() must be called from an injection context");return null===Bn?mt(t,void 0,e):Bn.get(t,e&_t.Optional?null:void 0,e)}function $n(t,e=_t.Default){return(gt||Zn)(st(t),e)}function zn(t){const e=[];for(let n=0;n<t.length;n++){const r=st(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t=void 0,n=_t.Default;for(let e=0;e<r.length;e++){const s=r[e];s instanceof Mn||"Optional"===s.ngMetadataName||s===Mn?n|=_t.Optional:s instanceof Nn||"SkipSelf"===s.ngMetadataName||s===Nn?n|=_t.SkipSelf:s instanceof jn||"Self"===s.ngMetadataName||s===jn?n|=_t.Self:s instanceof Rn||"Host"===s.ngMetadataName||s===Rn?n|=_t.Host:t=s instanceof Pn||s===Pn?s.token:s}e.push($n(t,n))}else e.push($n(r))}return e}function Wn(t){return t.ngDebugContext}function qn(t){return t.ngOriginalError}function Gn(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qn{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=this._findContext(t),r=function(t){return t.ngErrorLogger||Gn}(t);r(this._console,"ERROR",t),e&&r(this._console,"ORIGINAL ERROR",e),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(t){return t?Wn(t)?Wn(t):this._findContext(qn(t)):null}_findOriginalError(t){let e=qn(t);for(;e&&qn(e);)e=qn(e);return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Jn(t,e){t.__ngContext__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Kn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(xt))();function Yn(t){return t instanceof Function?t():t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Xn=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function tr(t,e){return(void 0)(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function er(t){const e=t[3];return qt(e)?e[3]:e}function nr(t){return sr(t[13])}function rr(t){return sr(t[4])}function sr(t){for(;null!==t&&!qt(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function or(t,e,n,r,s){if(null!=r){let o,i=!1;qt(r)?o=r:Wt(r)&&(i=!0,r=r[0]);const l=de(r);0===t&&null!==n?null==s?cr(e,n,l):ar(e,n,l,s||null,!0):1===t&&null!==n?ar(e,n,l,s||null,!0):2===t?function(t,e,n){const r=function(t,e){return ce(t)?t.parentNode(e):e.parentNode}(t,e);r&&function(t,e,n,r){ce(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,l,i):3===t&&e.destroyNode(l),null!=o&&function(t,e,n,r,s){const o=n[7];o!==de(n)&&or(e,t,r,o,s);for(let i=10;i<n.length;i++){const s=n[i];pr(s[1],s,t,e,r,o)}}(e,t,o,n,s)}}function ir(t,e,n){return ce(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function lr(t,e){const n=t[9],r=n.indexOf(e),s=e[3];1024&e[2]&&(e[2]&=-1025,we(s,-1)),n.splice(r,1)}function ur(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const t=e[n[r]];if(!(t instanceof Ye)){const e=n[r+1];if(Array.isArray(e))for(let n=0;n<e.length;n+=2)e[n+1].call(t[e[n]]);else e.call(t)}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let s=-1;if(null!==n)for(let o=0;o<n.length-1;o+=2)if("string"==typeof n[o]){const t=n[o+1],i="function"==typeof t?t(e):de(e[t]),l=r[s=n[o+2]],u=n[o+3];"boolean"==typeof u?i.removeEventListener(n[o],l,u):u>=0?r[s=u]():r[s=-u].unsubscribe(),o+=2}else{const t=r[s=n[o+1]];n[o].call(t)}if(null!==r){for(let t=s+1;t<r.length;t++)(0,r[t])();e[7]=null}}(t,e),1===e[1].type&&ce(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&qt(e[3])){n!==e[3]&&lr(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function ar(t,e,n,r,s){ce(t)?t.insertBefore(e,n,r,s):e.insertBefore(n,r,s)}function cr(t,e,n){ce(t)?t.appendChild(e,n):e.appendChild(n)}function hr(t,e,n,r,s){null!==r?ar(t,e,n,r,s):cr(t,e,n)}function dr(t,e,n,r){const s=function(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===wt.None||e===wt.Emulated)return null}return pe(r,n)}(t,e.parent,n)}(t,r,e),o=e[11],i=function(t,e,n){return function(t,e,n){return 40&t.type?pe(t,n):null}(t,0,n)}(r.parent||e[6],0,e);if(null!=s)if(Array.isArray(n))for(let l=0;l<n.length;l++)hr(o,s,n[l],i,!1);else hr(o,s,n,i,!1)}function fr(t,e,n,r,s,o,i){for(;null!=n;){const l=r[n.index],u=n.type;if(i&&0===e&&(l&&Jn(de(l),r),n.flags|=4),64!=(64&n.flags))if(8&u)fr(t,e,n.child,r,s,o,!1),or(e,t,s,l,o);else if(32&u){const i=tr(n,r);let u;for(;u=i();)or(e,t,s,u,o);or(e,t,s,l,o)}else 16&u?_r(t,e,r,n,s,o):or(e,t,s,l,o);n=i?n.projectionNext:n.next}}function pr(t,e,n,r,s,o){fr(n,r,t.firstChild,e,s,o,!1)}function _r(t,e,n,r,s,o){const i=n[16],l=i[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)or(e,t,s,l[u],o);else fr(t,e,l,i[3],s,o,!0)}function gr(t,e,n){ce(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function yr(t,e,n){ce(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function mr(t,e,n){let r=t.length;for(;;){const s=t.indexOf(e,n);if(-1===s)return s;if(0===s||t.charCodeAt(s-1)<=32){const n=e.length;if(s+n===r||t.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vr(t,e,n){let r=0;for(;r<t.length;){let s=t[r++];if(n&&"class"===s){if(s=t[r],-1!==mr(s.toLowerCase(),e,0))return!0}else if(1===s){for(;r<t.length&&"string"==typeof(s=t[r++]);)if(s.toLowerCase()===e)return!0;return!1}}return!1}function br(t){return 4===t.type&&"ng-template"!==t.value}function wr(t,e,n){return e===(4!==t.type||n?t.value:"ng-template")}function Cr(t,e,n){let r=4;const s=t.attrs||[],o=function(t){for(let n=0;n<t.length;n++)if(3===(e=t[n])||4===e||6===e)return n;var e;return t.length}(s);let i=!1;for(let l=0;l<e.length;l++){const u=e[l];if("number"!=typeof u){if(!i)if(4&r){if(r=2|1&r,""!==u&&!wr(t,u,n)||""===u&&1===e.length){if(Er(r))return!1;i=!0}}else{const a=8&r?u:e[++l];if(8&r&&null!==t.attrs){if(!vr(t.attrs,a,n)){if(Er(r))return!1;i=!0}continue}const c=Ar(8&r?"class":u,s,br(t),n);if(-1===c){if(Er(r))return!1;i=!0;continue}if(""!==a){let t;t=c>o?"":s[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==mr(e,a,0)||2&r&&a!==t){if(Er(r))return!1;i=!0}}}}else{if(!i&&!Er(r)&&!Er(u))return!1;if(i&&Er(u))continue;i=!1,r=u|1&r}}return Er(r)||i}function Er(t){return 0==(1&t)}function Ar(t,e,n,r){if(null===e)return-1;let s=0;if(r||!n){let n=!1;for(;s<e.length;){const r=e[s];if(r===t)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++s];for(;"string"==typeof t;)t=e[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function kr(t,e,n=!1){for(let r=0;r<e.length;r++)if(Cr(t,e[r],n))return!0;return!1}function xr(t,e){return t?":not("+e.trim()+")":e}function Tr(t){let e=t[0],n=1,r=2,s="",o=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const e=t[++n];s+="["+i+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?s+="."+i:4&r&&(s+=" "+i);else""===s||Er(i)||(e+=xr(o,s),s=""),r=i,o=o||!Er(r);n++}return""!==s&&(e+=xr(o,s)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Sr={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ir(t){Vr(ke(),Ae(),$e()+t,Ve())}function Vr(t,e,n,r){if(!r)if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&qe(e,r,n)}else{const r=t.preOrderHooks;null!==r&&Ge(e,r,0,n)}ze(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Or(t,e){return t<<17|e<<2}function Dr(t){return t>>17&32767}function Pr(t){return 2|t}function Mr(t){return(131068&t)>>2}function jr(t,e){return-131069&t|e<<2}function Nr(t){return 1|t}function Rr(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],o=n[r+1];if(-1!==o){const n=t.data[o];je(s),n.contentQueries(2,e[o],o)}}}function Hr(t,e,n,r,s,o,i,l,u,a){const c=e.blueprint.slice();return c[0]=s,c[2]=140|r,be(c),c[3]=c[15]=t,c[8]=n,c[10]=i||t&&t[10],c[11]=l||t&&t[11],c[12]=u||t&&t[12]||null,c[9]=a||t&&t[9]||null,c[6]=o,c[16]=2==e.type?t[16]:c,c}function Fr(t,e,n,r,s){let o=t.data[e];if(null===o)o=function(t,e,n,r,s){const o=Te(),i=Ie(),l=t.data[e]=function(t,e,n,r,s,o){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:s,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,i?o:o&&o.parent,n,e,r,s);return null===t.firstChild&&(t.firstChild=l),null!==o&&(i?null==o.child&&null!==l.parent&&(o.child=l):null===o.next&&(o.next=l)),l}(t,e,n,r,s),Ce.lFrame.inI18n&&(o.flags|=64);else if(64&o.type){o.type=n,o.value=r,o.attrs=s;const t=function(){const t=Ce.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();o.injectorIndex=null===t?-1:t.injectorIndex}return Se(o,!0),o}function Lr(t,e,n,r){if(0===n)return-1;const s=e.length;for(let o=0;o<n;o++)e.push(r),t.blueprint.push(r),t.data.push(null);return s}function Br(t,e,n){He(e);try{const r=t.viewQuery;null!==r&&cs(1,r,n);const s=t.template;null!==s&&$r(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Rr(t,e),t.staticViewQueries&&cs(2,t.viewQuery,n);const o=t.components;null!==o&&function(t,e){for(let n=0;n<e.length;n++)os(t,e[n])}(e,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0),r}finally{e[2]&=-5,Ze()}}function Ur(t,e,n,r){const s=e[2];if(256==(256&s))return;He(e);const o=Ve();try{be(e),Ce.lFrame.bindingIndex=t.bindingStartIndex,null!==n&&$r(t,e,n,2,r);const i=3==(3&s);if(!o)if(i){const n=t.preOrderCheckHooks;null!==n&&qe(e,n,null)}else{const n=t.preOrderHooks;null!==n&&Ge(e,n,0,null),Qe(e,0)}if(function(t){for(let e=nr(t);null!==e;e=rr(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&we(r,1),n[2]|=1024}}}(e),function(t){for(let e=nr(t);null!==e;e=rr(e))for(let t=10;t<e.length;t++){const n=e[t],r=n[1];me(n)&&Ur(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&Rr(t,e),!o)if(i){const n=t.contentCheckHooks;null!==n&&qe(e,n)}else{const n=t.contentHooks;null!==n&&Ge(e,n,1),Qe(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)ze(~r);else{const s=r,o=n[++t],i=n[++t];Pe(o,s),i(2,e[s])}}}finally{ze(-1)}}(t,e);const l=t.components;null!==l&&function(t,e){for(let n=0;n<e.length;n++)rs(t,e[n])}(e,l);const u=t.viewQuery;if(null!==u&&cs(2,u,r),!o)if(i){const n=t.viewCheckHooks;null!==n&&qe(e,n)}else{const n=t.viewHooks;null!==n&&Ge(e,n,2),Qe(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),o||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,we(e[3],-1))}finally{Ze()}}function Zr(t,e,n,r){const s=e[10],o=!Ve(),i=4==(4&e[2]);try{o&&!i&&s.begin&&s.begin(),i&&Br(t,e,r),Ur(t,e,n,r)}finally{o&&!i&&s.end&&s.end()}}function $r(t,e,n,r,s){const o=$e();try{ze(-1),2&r&&e.length>20&&Vr(t,e,20,Ve()),n(r,s)}finally{ze(o)}}function zr(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=Wr(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function Wr(t,e,n,r,s,o,i,l,u,a){const c=20+r,h=c+s,d=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:Sr);return n}(c,h),f="function"==typeof a?a():a;return d[1]={type:t,blueprint:d,template:n,queries:null,viewQuery:l,declTNode:e,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:u,consts:f,incompleteFirstPass:!1}}function qr(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const s=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,s):n[r]=[e,s]}return n}function Gr(t,e,n,r,s,o){const i=o.hostBindings;if(i){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const o=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=o&&n.push(o),n.push(r,s,i)}}function Qr(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function Jr(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function Kr(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Kt(e)&&(n[""]=t)}}function Yr(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Xr(t,e,n,r,s){t.data[r]=s;const o=s.factory||(s.factory=Yt(s.type)),i=new Ye(o,Kt(s),null);t.blueprint[r]=i,n[r]=i,Gr(t,e,0,r,Lr(t,n,s.hostVars,Sr),s)}function ts(t,e,n){const r=pe(e,t),s=zr(n),o=t[10],i=is(t,Hr(t,s,null,n.onPush?64:16,r,e,o,o.createRenderer(r,n),null,null));t[e.index]=i}function es(t,e,n,r,s,o){const i=o[e];if(null!==i){const t=r.setInput;for(let e=0;e<i.length;){const s=i[e++],o=i[e++],l=i[e++];null!==t?r.setInput(n,l,s,o):n[o]=l}}}function ns(t,e){let n=null,r=0;for(;r<e.length;){const s=e[r];if(0!==s)if(5!==s){if("number"==typeof s)break;t.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,t[s],e[r+1])),r+=2}else r+=2;else r+=4}return n}function rs(t,e){const n=ge(e,t);if(me(n)){const t=n[1];80&n[2]?Ur(t,n,t.template,n[8]):n[5]>0&&ss(n)}}function ss(t){for(let n=nr(t);null!==n;n=rr(n))for(let t=10;t<n.length;t++){const e=n[t];if(1024&e[2]){const t=e[1];Ur(t,e,t.template,e[8])}else e[5]>0&&ss(e)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=ge(e[n],t);me(r)&&r[5]>0&&ss(r)}}function os(t,e){const n=ge(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Br(r,n,n[8])}function is(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function ls(t){for(;t;){t[2]|=64;const e=er(t);if(0!=(512&t[2])&&!e)return t;t=e}return null}function us(t,e,n){const r=e[10];r.begin&&r.begin();try{Ur(t,e,t.template,n)}catch(s){throw ps(e,s),s}finally{r.end&&r.end()}}function as(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=ye(n),s=r[1];Zr(s,r,s.template,n)}}(t[8])}function cs(t,e,n){je(0),e(t,n)}const hs=(()=>Promise.resolve(null))();function ds(t){return t[7]||(t[7]=[])}function fs(t){return t.cleanup||(t.cleanup=[])}function ps(t,e){const n=t[9],r=n?n.get(Qn,null):null;r&&r.handleError(e)}function _s(t,e,n,r,s){for(let o=0;o<n.length;){const i=n[o++],l=n[o++],u=e[i],a=t.data[i];null!==a.setInput?a.setInput(u,s,r,l):u[l]=s}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gs(t,e,n){let r=n?t.styles:null,s=n?t.classes:null,o=0;if(null!==e)for(let i=0;i<e.length;i++){const t=e[i];"number"==typeof t?o=t:1==o?s=et(s,t):2==o&&(r=et(r,t+": "+e[++i]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=s:t.classesWithoutHost=s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ys=new Tn("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ms{get(t,e=Hn){if(e===Hn){const e=new Error(`NullInjectorError: No provider for ${tt(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const vs=new Tn("Set Injector scope."),bs={},ws={},Cs=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Es=void 0;function As(){return void 0===Es&&(Es=new ms),Es}function ks(t,e=null,n=null,r){return new xs(t,n,e||As(),r)}class xs{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];e&&Sn(e,n=>this.processProvider(n,t,e)),Sn([t],t=>this.processInjectorType(t,[],s)),this.records.set(ys,Is(void 0,this));const o=this.records.get(vs);this.scope=null!=o?o.value:null,this.source=r||("object"==typeof t?null:tt(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=Hn,n=_t.Default){this.assertNotDestroyed();const r=Un(this);try{if(!(n&_t.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(s=t)||"object"==typeof s&&s instanceof Tn)&&ut(t);e=n&&this.injectableDefInScope(n)?Is(Ts(t),bs):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}return(n&_t.Self?As():this.parent).get(t,e=n&_t.Optional&&e===Hn?null:e)}catch(o){if("NullInjectorError"===o.name){if((o.ngTempTokenPath=o.ngTempTokenPath||[]).unshift(tt(t)),r)throw o;return function(t,e,n,r){const s=t.ngTempTokenPath;throw e.__source&&s.unshift(e.__source),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let s=tt(e);if(Array.isArray(e))s=e.map(tt).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):tt(r)))}s=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${t.replace(Fn,"\n  ")}`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}("\n"+t.message,s,n,r),t.ngTokenPath=s,t.ngTempTokenPath=null,t}(o,t,"R3InjectorError",this.source)}throw o}finally{Un(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((e,n)=>t.push(tt(n))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=st(t)))return!1;let r=ct(t);const s=null==r&&t.ngModule||void 0,o=void 0===s?t:s,i=-1!==n.indexOf(o);if(void 0!==s&&(r=ct(s)),null==r)return!1;if(null!=r.imports&&!i){let t;n.push(o);try{Sn(r.imports,r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))})}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Sn(r,t=>this.processProvider(t,n,r||Cs))}}this.injectorDefTypes.add(o),this.records.set(o,Is(r.factory,bs));const l=r.providers;if(null!=l&&!i){const e=t;Sn(l,t=>this.processProvider(t,e,l))}return void 0!==s&&void 0!==t.providers}processProvider(t,e,n){let r=Os(t=st(t))?t:st(t&&t.provide);const s=function(t,e,n){return Vs(t)?Is(void 0,t.useValue):Is(Ss(t),bs)}(t);if(Os(t)||!0!==t.multi)this.records.get(r);else{let e=this.records.get(r);e||(e=Is(void 0,bs,!0),e.factory=()=>zn(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,s)}hydrate(t,e){var n;return e.value===bs&&(e.value=ws,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){return!!t.providedIn&&("string"==typeof t.providedIn?"any"===t.providedIn||t.providedIn===this.scope:this.injectorDefTypes.has(t.providedIn))}}function Ts(t){const e=ut(t),n=null!==e?e.factory:Yt(t);if(null!==n)return n;const r=ct(t);if(null!==r)return r.factory;if(t instanceof Tn)throw new Error(`Token ${tt(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=function(t,e){const n=[];for(let r=0;r<t;r++)n.push("?");return n}(e);throw new Error(`Can't resolve all parameters for ${tt(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[ht]||t[ft]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function Ss(t,e,n){let r=void 0;if(Os(t)){const e=st(t);return Yt(e)||Ts(e)}if(Vs(t))r=()=>st(t.useValue);else if((s=t)&&s.useFactory)r=()=>t.useFactory(...zn(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>$n(st(t.useExisting));else{const e=st(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Yt(e)||Ts(e);r=()=>new e(...zn(t.deps))}var s;return r}function Is(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Vs(t){return null!==t&&"object"==typeof t&&Ln in t}function Os(t){return"function"==typeof t}const Ds=function(t,e,n){return function(t,e=null,n=null,r){const s=ks(t,e,n,r);return s._resolveInjectorDefTypes(),s}({name:n},e,t,n)};let Ps=(()=>{class t{static create(t,e){return Array.isArray(t)?Ds(t,e,""):Ds(t.providers,t.parent,t.name||"")}}return t.THROW_IF_NOT_FOUND=Hn,t.NULL=new ms,t.\u0275prov=it({token:t,providedIn:"any",factory:()=>$n(ys)}),t.__NG_ELEMENT_ID__=-1,t})();function Ms(t,e){We(ye(t)[1],xe())}function js(t){let e=Object.getPrototypeOf(t.type.prototype).constructor,n=!0;const r=[t];for(;e;){let s=void 0;if(Kt(t))s=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Error("Directives cannot inherit Components");s=e.\u0275dir}if(s){if(n){r.push(s);const e=t;e.inputs=Ns(t.inputs),e.declaredInputs=Ns(t.declaredInputs),e.outputs=Ns(t.outputs);const n=s.hostBindings;n&&Fs(t,n);const o=s.viewQuery,i=s.contentQueries;if(o&&Rs(t,o),i&&Hs(t,i),X(t.inputs,s.inputs),X(t.declaredInputs,s.declaredInputs),X(t.outputs,s.outputs),Kt(s)&&s.data.animation){const e=t.data;e.animation=(e.animation||[]).concat(s.data.animation)}}const e=s.features;if(e)for(let r=0;r<e.length;r++){const s=e[r];s&&s.ngInherit&&s(t),s===js&&(n=!1)}}e=Object.getPrototypeOf(e)}!function(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const s=t[r];s.hostVars=e+=s.hostVars,s.hostAttrs=en(s.hostAttrs,n=en(n,s.hostAttrs))}}(r)}function Ns(t){return t===Tt?{}:t===St?[]:t}function Rs(t,e){const n=t.viewQuery;t.viewQuery=n?(t,r)=>{e(t,r),n(t,r)}:e}function Hs(t,e){const n=t.contentQueries;t.contentQueries=n?(t,r,s)=>{e(t,r,s),n(t,r,s)}:e}function Fs(t,e){const n=t.hostBindings;t.hostBindings=n?(t,r)=>{e(t,r),n(t,r)}:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ls=null;function Bs(){if(!Ls){const t=xt.Symbol;if(t&&t.iterator)Ls=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Ls=n)}}}return Ls}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Us(t){return!!Zs(t)&&(Array.isArray(t)||!(t instanceof Map)&&Bs()in t)}function Zs(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $s(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zs(t,e=_t.Default){const n=Ae();return null===n?$n(t,e):gn(xe(),n,st(t),e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ws(t,e,n){const r=Ae();return $s(r,De(),e)&&function(t,e,n,r,s,o,i,l){const u=pe(e,n);let a,c=e.inputs;var h;null!=c&&(a=c[r])?(_s(t,n,a,r,s),Qt(e)&&function(t,e){const n=ge(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,s=null!=i?i(s,e.value||"",r):s,ce(o)?o.setProperty(u,r,s):tn(r)||(u.setProperty?u.setProperty(r,s):u[r]=s))}(ke(),function(){const t=Ce.lFrame;return _e(t.tView,t.selectedIndex)}(),r,t,e,r[11],n),Ws}function qs(t,e,n,r,s){const o=s?"class":"style";_s(t,n,e.inputs[o],o,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Gs(t,e,n,r){const s=Ae(),o=ke(),i=20+t,l=s[11],u=s[i]=ir(l,e,Ce.lFrame.currentNamespace),a=o.firstCreatePass?function(t,e,n,r,s,o,i){const l=e.consts,u=Fr(e,t,2,s,ve(l,o));return function(t,e,n,r){let s=!1;if(Ee()){const o=function(t,e,n){const r=t.directiveRegistry;let s=null;if(r)for(let o=0;o<r.length;o++){const i=r[o];kr(n,i.selectors,!1)&&(s||(s=[]),fn(an(n,e),t,i.type),Kt(i)?(Jr(t,n),s.unshift(i)):s.push(i))}return s}(t,e,n),i=null===r?null:{"":-1};if(null!==o){s=!0,Yr(n,t.data.length,o.length);for(let t=0;t<o.length;t++){const e=o[t];e.providersResolver&&e.providersResolver(e)}let r=!1,l=!1,u=Lr(t,e,o.length,null);for(let s=0;s<o.length;s++){const a=o[s];n.mergedAttrs=en(n.mergedAttrs,a.hostAttrs),Xr(t,n,e,u,a),Kr(u,a,i),null!==a.contentQueries&&(n.flags|=8),null===a.hostBindings&&null===a.hostAttrs&&0===a.hostVars||(n.flags|=128);const c=a.type.prototype;!r&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),l||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),l=!0),u++}!function(t,e){const n=e.directiveEnd,r=t.data,s=e.attrs,o=[];let i=null,l=null;for(let u=e.directiveStart;u<n;u++){const t=r[u],n=t.inputs,a=null===s||br(e)?null:ns(n,s);o.push(a),i=qr(n,u,i),l=qr(t.outputs,u,l)}null!==i&&(i.hasOwnProperty("class")&&(e.flags|=16),i.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=i,e.outputs=l}(t,n)}i&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const s=n[e[t+1]];if(null==s)throw new Xt("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],s)}}}(n,r,i)}n.mergedAttrs=en(n.mergedAttrs,n.attrs)}(e,n,u,ve(l,i)),null!==u.attrs&&gs(u,u.attrs,!1),null!==u.mergedAttrs&&gs(u,u.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,u),u}(i,o,s,0,e,n,r):o.data[i];Se(a,!0);const c=a.mergedAttrs;null!==c&&Xe(l,u,c);const h=a.classes;null!==h&&yr(l,u,h);const d=a.styles;null!==d&&gr(l,u,d),64!=(64&a.flags)&&dr(o,s,u,a),0===Ce.lFrame.elementDepthCount&&Jn(u,s),Ce.lFrame.elementDepthCount++,Jt(a)&&(function(t,e,n){Ee()&&(function(t,e,n,r){const s=n.directiveStart,o=n.directiveEnd;t.firstCreatePass||an(n,e),Jn(r,e);const i=n.initialInputs;for(let l=s;l<o;l++){const r=t.data[l],o=Kt(r);o&&ts(e,n,r);const u=bn(e,t,l,n);Jn(u,e),null!==i&&es(0,l-s,u,r,0,i),o&&(ge(n.index,e)[8]=u)}}(t,e,n,pe(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,s=n.directiveEnd,o=n.index,i=Ce.lFrame.currentDirectiveIndex;try{ze(o);for(let n=r;n<s;n++){const r=t.data[n],s=e[n];Me(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||Qr(r,s)}}finally{ze(-1),Me(i)}}(t,e,n))}(o,s,a),function(t,e,n){if(Gt(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const e=t.data[s];e.contentQueries&&e.contentQueries(1,n[s],s)}}}(o,a,s)),null!==r&&function(t,e,n=pe){const r=e.localNames;if(null!==r){let s=e.index+1;for(let o=0;o<r.length;o+=2){const i=r[o+1],l=-1===i?n(e,t):t[i];t[s++]=l}}}(s,a)}function Qs(){let t=xe();Ie()?Ce.lFrame.isParent=!1:(t=t.parent,Se(t,!1));const e=t;Ce.lFrame.elementDepthCount--;const n=ke();n.firstCreatePass&&(We(n,t),Gt(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&qs(n,e,Ae(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&qs(n,e,Ae(),e.stylesWithoutHost,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Js(t){return!!t&&"function"==typeof t.then}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ks(t,e,n=!1,r){const s=Ae(),o=ke(),i=xe();return function(t,e,n,r,s,o,i=!1,l){const u=Jt(r),a=t.firstCreatePass&&fs(t),c=ds(e);let h=!0;if(3&r.type){const d=pe(r,e),f=l?l(d):Tt,p=f.target||d,_=c.length,g=l?t=>l(de(t[r.index])).target:r.index;if(ce(n)){let i=null;if(!l&&u&&(i=function(t,e,n,r){const s=t.cleanup;if(null!=s)for(let o=0;o<s.length-1;o+=2){const t=s[o];if(t===n&&s[o+1]===r){const t=e[7],n=s[o+2];return t.length>n?t[n]:null}"string"==typeof t&&(o+=2)}return null}(t,e,s,r.index)),null!==i)(i.__ngLastListenerFn__||i).__ngNextListenerFn__=o,i.__ngLastListenerFn__=o,h=!1;else{o=Xs(r,e,o,!1);const t=n.listen(f.name||p,s,o);c.push(o,t),a&&a.push(s,g,_,_+1)}}else o=Xs(r,e,o,!0),p.addEventListener(s,o,i),c.push(o),a&&a.push(s,g,_,i)}else o=Xs(r,e,o,!1);const d=r.outputs;let f;if(h&&null!==d&&(f=d[s])){const t=f.length;if(t)for(let n=0;n<t;n+=2){const t=e[f[n]][f[n+1]].subscribe(o),i=c.length;c.push(o,t),a&&a.push(s,r.index,i,-(i+1))}}}(o,s,s[11],i,t,e,n,r),Ks}function Ys(t,e,n){try{return!1!==e(n)}catch(r){return ps(t,r),!1}}function Xs(t,e,n,r){return function s(o){if(o===Function)return n;const i=2&t.flags?ge(t.index,e):e;0==(32&e[2])&&ls(i);let l=Ys(e,n,o),u=s.__ngNextListenerFn__;for(;u;)l=Ys(e,u,o)&&l,u=u.__ngNextListenerFn__;return r&&!1===l&&(o.preventDefault(),o.returnValue=!1),l
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}const to=[];function eo(t,e,n,r,s){const o=t[n+1],i=null===e;let l=r?Dr(o):Mr(o),u=!1;for(;0!==l&&(!1===u||i);){const n=t[l+1];no(t[l],e)&&(u=!0,t[l+1]=r?Nr(n):Pr(n)),l=r?Dr(n):Mr(n)}u&&(t[n+1]=r?Pr(o):Nr(o))}function no(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Dn(t,e)>=0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ro(t,e){return function(t,e,n,r){const s=Ae(),o=ke(),i=function(t){const e=Ce.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+2,n}();o.firstUpdatePass&&function(t,e,n,r){const s=t.data;if(null===s[n+1]){const r=s[$e()],o=function(t,e){return e>=t.expandoStartIndex}(t,n);(function(t,e){return 0!=(16&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */)(r)&&null===e&&!o&&(e=!1),e=function(t,e,n,r){const s=function(t){const e=Ce.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}(t);let o=e.residualClasses;if(null===s)0===e.classBindings&&(n=oo(n=so(null,t,e,n,true),e.attrs,true),o=null);else{const r=e.directiveStylingLast;if(-1===r||t[r]!==s)if(n=so(s,t,e,n,true),null===o){let n=function(t,e,n){const r=e.classBindings;if(0!==Mr(r))return t[Dr(r)]}(t,e);void 0!==n&&Array.isArray(n)&&(n=so(null,t,e,n[1],true),n=oo(n,e.attrs,true),function(t,e,n,r){t[Dr(e.classBindings)]=r}(t,e,0,n))}else o=function(t,e,n){let r=void 0;const s=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<s;o++)r=oo(r,t[o].hostAttrs,true);return oo(r,e.attrs,true)}(t,e)}return void 0!==o&&(e.residualClasses=o),n}(s,r,e),function(t,e,n,r,s,o){let i=e.classBindings,l=Dr(i),u=Mr(i);t[r]=n;let a,c=!1;if(Array.isArray(n)){const t=n;a=t[1],(null===a||Dn(t,a)>0)&&(c=!0)}else a=n;if(s)if(0!==u){const e=Dr(t[l+1]);t[r+1]=Or(e,l),0!==e&&(t[e+1]=jr(t[e+1],r)),t[l+1]=131071&t[l+1]|r<<17}else t[r+1]=Or(l,0),0!==l&&(t[l+1]=jr(t[l+1],r)),l=r;else t[r+1]=Or(u,0),0===l?l=r:t[u+1]=jr(t[u+1],r),u=r;c&&(t[r+1]=Pr(t[r+1])),eo(t,a,r,!0),eo(t,a,r,!1),function(t,e,n,r,s){const o=t.residualClasses;null!=o&&"string"==typeof e&&Dn(o,e)>=0&&(n[r+1]=Nr(n[r+1]))}(e,a,t,r),i=Or(l,u),e.classBindings=i}(s,r,e,n,o)}}(o,t,i),e!==Sr&&$s(s,i,e)&&function(t,e,n,r,s,o,i,l){if(!(3&e.type))return;const u=t.data,a=u[l+1];lo(1==(1&a)?io(u,e,n,s,Mr(a),true):void 0)||(lo(o)||function(t){return 2==(2&t)}(a)&&(o=io(u,null,n,s,l,true)),function(t,e,n,r,s){const o=ce(t);s?o?t.addClass(n,r):n.classList.add(r):o?t.removeClass(n,r):n.classList.remove(r)}(r,0,fe($e(),n),s,o))}(o,o.data[$e()],s,s[11],t,s[i+1]=function(t,e){return null==t||"object"==typeof t&&(t=tt(function(t){return t instanceof
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return"SafeValue must use [property]=binding: "+this.changingThisBreaksApplicationSecurity+" (see https://g.co/ng/security#xss)"}}?t.changingThisBreaksApplicationSecurity:t}(t))),t}(e),0,i)}(t,e),ro}function so(t,e,n,r,s){let o=null;const i=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<i&&(o=e[l],r=oo(r,o.hostAttrs,s),o!==t);)l++;return null!==t&&(n.directiveStylingLast=l),r}function oo(t,e,n){const r=n?1:2;let s=-1;if(null!==e)for(let o=0;o<e.length;o++){const i=e[o];"number"==typeof i?s=i:s===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),Vn(t,i,!!n||e[++o]))}return void 0===t?null:t}function io(t,e,n,r,s,o){const i=null===e;let l=void 0;for(;s>0;){const e=t[s],o=Array.isArray(e),u=o?e[1]:e,a=null===u;let c=n[s+1];c===Sr&&(c=a?to:void 0);let h=a?On(c,r):u===r?c:void 0;if(o&&!lo(h)&&(h=On(e,r)),lo(h)&&(l=h,i))return l;const d=t[s+1];s=i?Dr(d):Mr(d)}if(null!==e){let t=o?e.residualClasses:e.residualStyles;null!=t&&(l=On(t,r))}return l}function lo(t){return void 0!==t}function uo(t,e=""){const n=Ae(),r=ke(),s=t+20,o=r.firstCreatePass?Fr(r,s,1,e,null):r.data[s],i=n[s]=function(t,e){return ce(t)?t.createText(e):t.createTextNode(e)}(n[11],e);dr(r,n,i,o),Se(o,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ao(t,e,n){const r=Ae(),s=function(t,e,n,r){return $s(t,De(),n)?e+te(n)+r:Sr}(r,t,e,n);return s!==Sr&&function(t,e,n){const r=fe(e,t);!function(t,e,n){ce(t)?t.setValue(e,n):e.textContent=n}(t[11],r,n)}(r,$e(),s),ao}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const co=void 0;var ho=["en",[["a","p"],["AM","PM"],co],[["AM","PM"],co,co],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],co,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],co,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",co,"{1} 'at' {0}",co],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){let e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let fo={};function po(t){return t in fo||(fo[t]=xt.ng&&xt.ng.common&&xt.ng.common.locales&&xt.ng.common.locales[t]),fo[t]}var _o=function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let go="en-US";function yo(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&function(t,e,n,r){throw new Error("ASSERTION ERROR: "+t+` [Expected=> null != ${e} <=Actual]`)}(n,e),"string"==typeof t&&(go=t.toLowerCase().replace(/_/g,"-"))}function mo(t,e,n,r,s){if(t=st(t),Array.isArray(t))for(let o=0;o<t.length;o++)mo(t[o],e,n,r,s);else{const o=ke(),i=Ae();let l=Os(t)?t:st(t.provide),u=Ss(t);const a=xe(),c=1048575&a.providerIndexes,h=a.directiveStart,d=a.providerIndexes>>20;if(Os(t)||!t.multi){const r=new Ye(u,s,zs),f=wo(l,e,s?c:c+d,h);-1===f?(fn(an(a,i),o,l),vo(o,t,e.length),e.push(l),a.directiveStart++,a.directiveEnd++,s&&(a.providerIndexes+=1048576),n.push(r),i.push(r)):(n[f]=r,i[f]=r)}else{const f=wo(l,e,c+d,h),p=wo(l,e,c,c+d),_=f>=0&&n[f],g=p>=0&&n[p];if(s&&!g||!s&&!_){fn(an(a,i),o,l);const c=function(t,e,n,r,s){const o=new Ye(t,n,zs);return o.multi=[],o.index=e,o.componentProviders=0,bo(o,s,r&&!n),o}(s?Eo:Co,n.length,s,r,u);!s&&g&&(n[p].providerFactory=c),vo(o,t,e.length,0),e.push(l),a.directiveStart++,a.directiveEnd++,s&&(a.providerIndexes+=1048576),n.push(c),i.push(c)}else vo(o,t,f>-1?f:p,bo(n[s?p:f],u,!s&&r));!s&&r&&g&&n[p].componentProviders++}}}function vo(t,e,n,r){const s=Os(e);if(s||e.useClass){const o=(e.useClass||e).prototype.ngOnDestroy;if(o){const i=t.destroyHooks||(t.destroyHooks=[]);if(!s&&e.multi){const t=i.indexOf(n);-1===t?i.push(n,[r,o]):i[t+1].push(r,o)}else i.push(n,o)}}}function bo(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function wo(t,e,n,r){for(let s=n;s<r;s++)if(e[s]===t)return s;return-1}function Co(t,e,n,r){return Ao(this.multi,[])}function Eo(t,e,n,r){const s=this.multi;let o;if(this.providerFactory){const t=this.providerFactory.componentProviders,e=bn(n,n[1],this.providerFactory.index,r);o=e.slice(0,t),Ao(s,o);for(let n=t;n<e.length;n++)o.push(e[n])}else o=[],Ao(s,o);return o}function Ao(t,e){for(let n=0;n<t.length;n++)e.push((0,t[n])());return e}function ko(t,e=[]){return n=>{n.providersResolver=(n,r)=>
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const r=ke();if(r.firstCreatePass){const s=Kt(t);mo(n,r.data,r.blueprint,s,!0),mo(e,r.data,r.blueprint,s,!1)}}(n,r?r(t):t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class xo{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class To{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${tt(t)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=t,e}(t)}}let So=(()=>{class t{}return t.NULL=new To,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Io(...t){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vo(t,e){return new Do(pe(t,e))}const Oo=function(){return Vo(xe(),Ae())};let Do=(()=>{class t{constructor(t){this.nativeElement=t}}return t.__NG_ELEMENT_ID__=Oo,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Po{}let Mo=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>jo(),t})();const jo=function(){const t=Ae(),e=ge(xe().index,t);return function(t){return t[11]}(Wt(e)?e:t)};let No=(()=>{class t{}return t.\u0275prov=it({token:t,providedIn:"root",factory:()=>null}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ro{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Ho=new Ro("11.0.9");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Fo{constructor(){}supports(t){return Us(t)}create(t){return new Bo(t)}}const Lo=(t,e)=>e;class Bo{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Lo}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,s=null;for(;e||n;){const o=!n||e&&e.currentIndex<zo(n,r,s)?e:n,i=zo(o,r,s),l=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(e=e._next,null==o.previousIndex)r++;else{s||(s=[]);const t=i-r,e=l-r;if(t!=e){for(let n=0;n<t;n++){const r=n<s.length?s[n]:s[n]=0,o=r+n;e<=o&&o<t&&(s[n]=r+1)}s[o.previousIndex]=e-t}}i!==l&&t(o,i,l)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!Us(t))throw new Error(`Error trying to diff '${tt(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,s=this._itHead,o=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,n,r,e)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,e),o=!0),s=s._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Bs()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,t=>{r=this._trackByFn(e,t),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,t,r,e)),Object.is(s.item,t)||this._addIdentityChange(s,t)):(s=this._mismatch(s,t,r,e),o=!0),s=s._next,e++}),this.length=e;return this._truncate(s),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,s,r)):null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,s,r)):t=this._addAfter(new Uo(e,n),s,r),t}_verifyReinsertion(t,e,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?t=this._reinsertAfter(s,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,s=t._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new $o),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new $o),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Uo{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Zo{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class $o{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new Zo,this.map.set(e,n)),n.add(t)}get(t,e){const n=this.map.get(t);return n?n.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function zo(t,e,n){const r=t.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+e+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wo{constructor(){}supports(t){return t instanceof Map||Zs(t)}create(){return new qo}}class qo{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||Zs(t)))throw new Error(`Error trying to diff '${tt(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,(t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new Go(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach(n=>e(t[n],n))}}class Go{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let Qo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(null!=n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return t.create(e,n)},deps:[[t,new Nn,new Mn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n}}return t.\u0275prov=it({token:t,providedIn:"root",factory:()=>new t([new Fo])}),t})(),Jo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return t.create(e,n)},deps:[[t,new Nn,new Mn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}return t.\u0275prov=it({token:t,providedIn:"root",factory:()=>new t([new Wo])}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ko(t,e,n,r,s=!1){for(;null!==n;){const o=e[n.index];if(null!==o&&r.push(de(o)),qt(o))for(let t=10;t<o.length;t++){const e=o[t],n=e[1].firstChild;null!==n&&Ko(e[1],e,n,r)}const i=n.type;if(8&i)Ko(t,e,n.child,r);else if(32&i){const t=tr(n,e);let s;for(;s=t();)r.push(s)}else if(16&i){const t=e[16],s=t[6].projection[n.projection];if(Array.isArray(s))r.push(...s);else{const e=er(t);Ko(e[1],e,s,r,!0)}}n=s?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Yo extends class{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,e=t[1];return Ko(e,t,e.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(qt(t)){const e=t[8],n=e?e.indexOf(this):-1;n>-1&&(function(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&lr(o,r),e>0&&(t[n-1][4]=r[4]);const i=In(t,10+e);pr(r[1],s=r,s[11],2,null,null),s[0]=null,s[6]=null;const l=i[19];null!==l&&l.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}var s}(t,n),In(e,n))}this._attachedToViewContainer=!1}!function(t,e){if(!(256&e[2])){const n=e[11];ce(n)&&n.destroyNode&&pr(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return ur(t[1],t);for(;e;){let n=null;if(Wt(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)Wt(e)&&ur(e[1],e),e=e[3];null===e&&(e=t),Wt(e)&&ur(e[1],e),n=e&&e[4]}e=n}}(e)}}(this._lView[1],this._lView)}onDestroy(t){!function(t,e,n,r){const s=ds(e);s.push(r)}(0,this._lView,0,t)}markForCheck(){ls(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){us(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Oe(!0);try{us(t,e,n)}finally{Oe(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,pr(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}{constructor(t){super(t),this._view=t}detectChanges(){as(this._view)}checkNoChanges(){!function(t){Oe(!0);try{as(t)}finally{Oe(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Xo=[new Wo],ti=new Qo([new Fo]),ei=new Jo(Xo);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ni{}const ri={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class si extends So{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=$t(t);return new li(e,this.ngModule)}}function oi(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const ii=new Tn("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Kn});class li extends xo{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(Tr).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return oi(this.componentDef.inputs)}get outputs(){return oi(this.componentDef.outputs)}create(t,e,n,r){const s=(r=r||this.ngModule)?function(t,e){return{get:(n,r,s)=>{const o=t.get(n,ri,s);return o!==ri||r===ri?o:e.get(n,r,s)}}}(t,r.injector):t,o=s.get(Po,he),i=s.get(No,null),l=o.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",a=n?function(t,e,n){if(ce(t))return t.selectRootElement(e,n===wt.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(l,n,this.componentDef.encapsulation):ir(o.createRenderer(null,this.componentDef),u,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(u)),c=this.componentDef.onPush?576:528,h={components:[],scheduler:Kn,clean:hs,playerHandler:null,flags:0},d=Wr(0,null,null,1,0,null,null,null,null,null),f=Hr(null,d,h,c,null,null,o,l,i,s);let p,_;He(f);try{const t=function(t,e,n,r,s,o){const i=n[1];n[20]=t;const l=Fr(i,20,2,"#host",null),u=l.mergedAttrs=e.hostAttrs;null!==u&&(gs(l,u,!0),null!==t&&(Xe(s,t,u),null!==l.classes&&yr(s,t,l.classes),null!==l.styles&&gr(s,t,l.styles)));const a=r.createRenderer(t,e),c=Hr(n,zr(e),null,e.onPush?64:16,n[20],l,r,a,null,null);return i.firstCreatePass&&(fn(an(l,n),i,e.type),Jr(i,l),Yr(l,n.length,1)),is(n,c),n[20]=c}(a,this.componentDef,f,o,l);if(a)if(n)Xe(l,a,["ng-version",Ho.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,s=2;for(;r<t.length;){let o=t[r];if("string"==typeof o)2===s?""!==o&&e.push(o,t[++r]):8===s&&n.push(o);else{if(!Er(s))break;s=o}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&Xe(l,a,t),e&&e.length>0&&yr(l,a,e.join(" "))}if(_=_e(d,20),void 0!==e){const t=_.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}p=function(t,e,n,r,s){const o=n[1],i=function(t,e,n){const r=xe();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Xr(t,r,e,Lr(t,e,1,null),n));const s=bn(e,t,r.directiveStart,r);Jn(s,e);const o=pe(r,e);return o&&Jn(o,e),s}(o,n,e);if(r.components.push(i),t[8]=i,s&&s.forEach(t=>t(i,e)),e.contentQueries){const t=xe();e.contentQueries(1,i,t.directiveStart)}const l=xe();return!o.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(ze(l.index),Gr(n[1],l,0,l.directiveStart,l.directiveEnd,e),Qr(e,i)),i}(t,this.componentDef,f,h,[Ms]),Br(d,f,null)}finally{Ze()}return new ui(this.componentType,p,Vo(_,f),f,_)}}class ui extends class{}{constructor(t,e,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.instance=e,this.hostView=this.changeDetectorRef=new Yo(r),this.componentType=t}get injector(){return new En(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ai=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ci extends ni{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new si(this);const n=zt(t),r=t[Pt]||null;r&&yo(r),this._bootstrapComponents=Yn(n.bootstrap),this._r3Injector=ks(t,e,[{provide:ni,useValue:this},{provide:So,useValue:this.componentFactoryResolver}],tt(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=Ps.THROW_IF_NOT_FOUND,n=_t.Default){return t===Ps||t===ni||t===ys?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class hi extends class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{constructor(t){super(),this.moduleType=t,null!==zt(t)&&function(t){const e=new Set;!function t(n){const r=zt(n,!0),s=r.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${tt(e)} vs ${tt(e.name)}`)}(s,ai.get(s),n),ai.set(s,n));const o=Yn(r.imports);for(const i of o)e.has(i)||(e.add(i),t(i))}(t)}(t)}create(t){return new ci(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const di=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){let r,s=t=>null,o=()=>null;t&&"object"==typeof t?(r=this.__isAsync?e=>{setTimeout(()=>t.next(e))}:e=>{t.next(e)},t.error&&(s=this.__isAsync?e=>{setTimeout(()=>t.error(e))}:e=>{t.error(e)}),t.complete&&(o=this.__isAsync?()=>{setTimeout(()=>t.complete())}:()=>{t.complete()})):(r=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)},e&&(s=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)}),n&&(o=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const i=super.subscribe(r,s,o);return t instanceof p&&t.add(i),i}},fi=new Tn("Application Initializer");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let pi=(()=>{class t{constructor(t){this.appInits=t,this.resolve=Io,this.reject=Io,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const e=this.appInits[n]();Js(e)&&t.push(e)}Promise.all(t).then(()=>{e()}).catch(t=>{this.reject(t)}),0===t.length&&e(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)($n(fi,8))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _i=new Tn("AppId"),gi={provide:_i,useFactory:function(){return`${yi()}${yi()}${yi()}`},deps:[]};function yi(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const mi=new Tn("Platform Initializer"),vi=new Tn("Platform ID"),bi=new Tn("appBootstrapListener");let wi=(()=>{class t{log(t){console.log(t)}warn(t){console.warn(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ci=new Tn("LocaleId"),Ei=new Tn("DefaultCurrencyCode");var Ai=function(t){return t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ki{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}const xi=function(t){return new hi(t)},Ti=xi,Si=function(t){return Promise.resolve(xi(t))},Ii=function(t){const e=xi(t),n=Yn(zt(t).declarations).reduce((t,e)=>{const n=$t(e);return n&&t.push(new li(n)),t},[]);return new ki(e,n)},Vi=Ii,Oi=function(t){return Promise.resolve(Ii(t))};let Di=(()=>{class t{constructor(){this.compileModuleSync=Ti,this.compileModuleAsync=Si,this.compileModuleAndAllComponentsSync=Vi,this.compileModuleAndAllComponentsAsync=Oi}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();const Pi=new Tn("compilerOptions"),Mi=(()=>Promise.resolve(0))();function ji(t){"undefined"==typeof Zone?Mi.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ni{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new di(!1),this.onMicrotaskEmpty=new di(!1),this.onStable=new di(!1),this.onError=new di(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=e,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let t=xt.requestAnimationFrame,e=xt.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=!!t.shouldCoalesceEventChangeDetection&&t.nativeRequestAnimationFrame&&(()=>{!function(t){-1===t.lastRequestAnimationFrameId&&(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(xt,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Fi(t),Hi(t)},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Fi(t))}(t)});t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:e},onInvokeTask:(n,r,s,o,i,l)=>{try{return Li(t),n.invokeTask(s,o,i,l)}finally{e&&"eventTask"===o.type&&e(),Bi(t)}},onInvoke:(e,n,r,s,o,i,l)=>{try{return Li(t),e.invoke(r,s,o,i,l)}finally{Bi(t)}},onHasTask:(e,n,r,s)=>{e.hasTask(r,s),n===r&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,Fi(t),Hi(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(e,n,r,s)=>(e.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Ni.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Ni.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,t,Ri,Io,Io);try{return s.runTask(o,e,n)}finally{s.cancelTask(o)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}const Ri={};function Hi(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Fi(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||t.shouldCoalesceEventChangeDetection&&-1!==t.lastRequestAnimationFrameId)}function Li(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Bi(t){t._nesting--,Hi(t)}class Ui{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new di,this.onMicrotaskEmpty=new di,this.onStable=new di,this.onError=new di}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}let Zi=(()=>{class t{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Ni.assertNotInAngularZone(),ji(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())ji(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(t=>t.timeoutId!==r),t(this._didWork,this.getPendingTasks())},e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}return t.\u0275fac=function(e){return new(e||t)($n(Ni))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})(),$i=(()=>{class t{constructor(){this._applications=new Map,qi.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return qi.findTestabilityInTree(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();class zi{addToWindow(t){}findTestabilityInTree(t,e,n){return null}}let Wi,qi=new zi,Gi=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qi(){return Gi=!0,!0}const Ji=new Tn("AllowMultipleToken");function Ki(t,e,n=[]){const r="Platform: "+e,s=new Tn(r);return(e=[])=>{let o=Yi();if(!o||o.injector.get(Ji,!1))if(t)t(n.concat(e).concat({provide:s,useValue:!0}));else{const t=n.concat(e).concat({provide:s,useValue:!0},{provide:vs,useValue:"platform"});!function(t){if(Wi&&!Wi.destroyed&&!Wi.injector.get(Ji,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Wi=t.get(Xi);const e=t.get(mi,null);e&&e.forEach(t=>t())}(Ps.create({providers:t,name:r}))}return function(t){const e=Yi();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(s)}}function Yi(){return Wi&&!Wi.destroyed?Wi:null}let Xi=(()=>{class t{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;return n="noop"===t?new Ui:("zone.js"===t?void 0:t)||new Ni({enableLongStackTrace:Qi(),shouldCoalesceEventChangeDetection:e}),n}(e?e.ngZone:void 0,e&&e.ngZoneEventCoalescing||!1),r=[{provide:Ni,useValue:n}];return n.run(()=>{const e=Ps.create({providers:r,parent:this.injector,name:t.moduleType.name}),s=t.create(e),o=s.injector.get(Qn,null);if(!o)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(()=>{const t=n.onError.subscribe({next:t=>{o.handleError(t)}});s.onDestroy(()=>{nl(this._modules,s),t.unsubscribe()})}),function(t,e,n){try{const r=n();return Js(r)?r.catch(n=>{throw e.runOutsideAngular(()=>t.handleError(n)),n}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(o,n,()=>{const t=s.injector.get(pi);return t.runInitializers(),t.donePromise.then(()=>(yo(s.injector.get(Ci,"en-US")||"en-US"),this._moduleDoBootstrap(s),s))})})}bootstrapModule(t,e=[]){const n=tl({},e);return function(t,e,n){const r=new hi(n);return Promise.resolve(r)}(0,0,t).then(t=>this.bootstrapModuleFactory(t,n))}_moduleDoBootstrap(t){const e=t.injector.get(el);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(t=>e.bootstrap(t));else{if(!t.instance.ngDoBootstrap)throw new Error(`The module ${tt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)($n(Ps))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();function tl(t,e){return Array.isArray(e)?e.reduce(tl,t):Object.assign(Object.assign({},t),e)}let el=(()=>{class t{constructor(t,e,n,r,s,o){this._zone=t,this._console=e,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=s,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new w(t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{t.next(this._stable),t.complete()})}),l=new w(t=>{let e;this._zone.runOutsideAngular(()=>{e=this._zone.onStable.subscribe(()=>{Ni.assertNotInAngularZone(),ji(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Ni.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{t.next(!1)}))});return()=>{e.unsubscribe(),n.unsubscribe()}});this.isStable=$(i,l.pipe(t=>{return z()((e=K,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,Q);return r.source=t,r.subjectFactory=n,r})(t));var e}))}bootstrap(t,e){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=t instanceof xo?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(ni),s=n.create(Ps.NULL,[],e||n.selector,r),o=s.location.nativeElement,i=s.injector.get(Zi,null),l=i&&s.injector.get($i);return i&&l&&l.registerApplication(o,i),s.onDestroy(()=>{this.detachView(s.hostView),nl(this.components,s),l&&l.unregisterApplication(o)}),this._loadComponent(s),Qi()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;nl(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(bi,[]).concat(this._bootstrapListeners).forEach(e=>e(t))}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)($n(Ni),$n(wi),$n(Ps),$n(Qn),$n(So),$n(pi))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();function nl(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const rl=Ki(null,"core",[{provide:vi,useValue:"unknown"},{provide:Xi,deps:[Ps]},{provide:$i,deps:[]},{provide:wi,deps:[]}]),sl=[{provide:el,useClass:el,deps:[Ni,wi,Ps,Qn,So,pi]},{provide:ii,deps:[Ni],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(t){e.push(t)}}},{provide:pi,useClass:pi,deps:[[new Mn,fi]]},{provide:Di,useClass:Di,deps:[]},gi,{provide:Qo,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return ti},deps:[]},{provide:Jo,useFactory:function(){return ei},deps:[]},{provide:Ci,useFactory:function(t){return yo(t=t||"undefined"!=typeof $localize&&$localize.locale||"en-US"),t},deps:[[new Pn(Ci),new Mn,new Nn]]},{provide:Ei,useValue:"USD"}];let ol=(()=>{class t{constructor(t){}}return t.\u0275mod=Bt({type:t}),t.\u0275inj=lt({factory:function(e){return new(e||t)($n(el))},providers:sl}),t})(),il=null;function ll(){return il}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ul=new Tn("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var al=function(t){return t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class cl{}let hl=(()=>{class t extends cl{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=po(e);if(n)return n;const r=e.split("-")[0];if(n=po(r),n)return n;if("en"===r)return ho;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[_o.PluralCase]}(e||this.locale)(t)){case al.Zero:return"zero";case al.One:return"one";case al.Two:return"two";case al.Few:return"few";case al.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)($n(Ci))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})(),dl=(()=>{class t{}return t.\u0275mod=Bt({type:t}),t.\u0275inj=lt({factory:function(e){return new(e||t)},providers:[{provide:cl,useClass:hl}]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fl extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.0.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{static makeCurrent(){var t;t=new fl,il||(il=t)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=_l||(_l=document.querySelector("base"),_l)?_l.getAttribute("href"):null;return null==e?null:(n=e,pl||(pl=document.createElement("a")),pl.setAttribute("href",n),"/"===pl.pathname.charAt(0)?pl.pathname:"/"+pl.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){_l=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}(document.cookie,t)}}let pl,_l=null;const gl=new Tn("TRANSITION_ID"),yl=[{provide:fi,useFactory:function(t,e,n){return()=>{n.get(pi).donePromise.then(()=>{const n=ll();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[gl,ul,Ps],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ml{static init(){var t;t=new ml,qi=t}addToWindow(t){xt.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},xt.getAllAngularTestabilities=()=>t.getAllTestabilities(),xt.getAllAngularRootElements=()=>t.getAllRootElements(),xt.frameworkStabilizers||(xt.frameworkStabilizers=[]),xt.frameworkStabilizers.push(t=>{const e=xt.getAllAngularTestabilities();let n=e.length,r=!1;const s=function(e){r=r||e,n--,0==n&&t(r)};e.forEach(function(t){t.whenStable(s)})})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?ll().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const vl=new Tn("EventManagerPlugins");let bl=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error("No event manager plugin found for event "+t)}}return t.\u0275fac=function(e){return new(e||t)($n(vl),$n(Ni))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();class wl{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=ll().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let Cl=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})(),El=(()=>{class t extends Cl{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>ll().remove(t))}}return t.\u0275fac=function(e){return new(e||t)($n(ul))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Al={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},kl=/%COMP%/g;function xl(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?xl(t,s,n):(s=s.replace(kl,t),n.push(s))}return n}function Tl(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let Sl=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new Il(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case wt.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new Vl(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case 1:case wt.ShadowDom:return new Ol(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=xl(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)($n(bl),$n(El),$n(_i))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();class Il{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(Al[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=Al[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=Al[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(Xn.DashCase|Xn.Important)?t.style.setProperty(e,n,r&Xn.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Xn.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,Tl(n)):this.eventManager.addEventListener(t,e,Tl(n))}}class Vl extends Il{constructor(t,e,n,r){super(t),this.component=n;const s=xl(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(kl,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(kl,r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class Ol extends Il{constructor(t,e,n,r){super(t),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=xl(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const t=document.createElement("style");t.textContent=s[o],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}const Dl=["alt","control","meta","shift"],Pl={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ml={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},jl={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Nl=[{provide:vi,useValue:"browser"},{provide:mi,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){fl.makeCurrent(),ml.init()},multi:!0},{provide:ul,useFactory:function(){return function(t){ae=t}(document),document},deps:[]}],Rl=[[],{provide:vs,useValue:"root"},{provide:Qn,useFactory:function(){return new Qn},deps:[]},{provide:vl,useClass:(()=>{class t extends wl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)($n(ul))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})(),multi:!0,deps:[ul,Ni,vi]},{provide:vl,useClass:(()=>{class t extends wl{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),o=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ll().onAndCancel(e,s.domEventName,o))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let o="";if(Dl.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),o+=t+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&Ml.hasOwnProperty(e)&&(e=Ml[e]))}return Pl[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),Dl.forEach(r=>{r!=n&&(0,jl[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)($n(ul))},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})(),multi:!0,deps:[ul]},[],{provide:Sl,useClass:Sl,deps:[bl,El,_i]},{provide:Po,useExisting:Sl},{provide:Cl,useExisting:El},{provide:El,useClass:El,deps:[ul]},{provide:Zi,useClass:Zi,deps:[Ni]},{provide:bl,useClass:bl,deps:[vl,Ni]},[]];let Hl=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:_i,useValue:e.appId},{provide:gl,useExisting:_i},yl]}}}return t.\u0275mod=Bt({type:t}),t.\u0275inj=lt({factory:function(e){return new(e||t)($n(t,12))},providers:Rl,imports:[dl,ol]}),t})();"undefined"!=typeof window&&window;const Fl=[{provide:Di,useFactory:()=>new Di}];function Ll(t){for(let e=t.length-1;e>=0;e--)if(void 0!==t[e])return t[e]}function Bl(t){const e=[];return t.forEach(t=>t&&e.push(...t)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ul=Ki(rl,"coreDynamic",[{provide:Pi,useValue:{},multi:!0},{provide:class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,useClass:class{constructor(t){this._defaultOptions=[{useJit:!0,defaultEncapsulation:wt.Emulated,missingTranslation:Ai.Warning},...t]}createCompiler(t=[]){const e={useJit:Ll((n=this._defaultOptions.concat(t)).map(t=>t.useJit)),defaultEncapsulation:Ll(n.map(t=>t.defaultEncapsulation)),providers:Bl(n.map(t=>t.providers)),missingTranslation:Ll(n.map(t=>t.missingTranslation)),preserveWhitespaces:Ll(n.map(t=>t.preserveWhitespaces))};var n;return Ps.create([Fl,{provide:o,useFactory:()=>new o({useJit:e.useJit,jitDevMode:Qi(),defaultEncapsulation:e.defaultEncapsulation,missingTranslation:e.missingTranslation,preserveWhitespaces:e.preserveWhitespaces}),deps:[]},e.providers]).get(Di)}},deps:[Pi]}]);let Zl=(()=>{class t extends s{get(t){let e,n;const r=new Promise((t,r)=>{e=t,n=r}),s=new XMLHttpRequest;return s.open("GET",t,!0),s.responseType="text",s.onload=function(){const r=s.response||s.responseText;let o=1223===s.status?204:s.status;0===o&&(o=r?200:0),200<=o&&o<=300?e(r):n("Failed to load "+t)},s.onerror=function(){n("Failed to load "+t)},s.send(),r}}return t.\u0275fac=function(e){return $l(e||t)},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})();const $l=kn(Zl),zl=Ki(Ul,"browserDynamic",[Nl,{provide:Pi,useValue:{providers:[{provide:s,useClass:Zl,deps:[]}]},multi:!0},{provide:vi,useValue:"browser"}]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wl(t,e){return new w(n=>{const r=t.length;if(0===r)return void n.complete();const s=new Array(r);let o=0,i=0;for(let l=0;l<r;l++){const u=H(t[l]);let a=!1;n.add(u.subscribe({next:t=>{a||(a=!0,i++),s[l]=t},error:t=>n.error(t),complete:()=>{o++,o!==r&&a||(i===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}
/**
 * @license Angular v11.0.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ql=new Tn("NgValueAccessor"),Gl={provide:ql,useExisting:rt(()=>Ql),multi:!0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ql=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do))},t.\u0275dir=Zt({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,e){1&t&&Ks("change",function(t){return e.onChange(t.target.checked)})("blur",function(){return e.onTouched()})},features:[ko([Gl])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Jl={provide:ql,useExisting:rt(()=>Yl),multi:!0},Kl=new Tn("CompositionEventMode");let Yl=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=ll()?ll().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do),zs(Kl,8))},t.\u0275dir=Zt({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&Ks("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[ko([Jl])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Xl(t){return null==t||0===t.length}function tu(t){return null!=t&&"number"==typeof t.length}const eu=new Tn("NgValidators"),nu=new Tn("NgAsyncValidators"),ru=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class su{static min(t){return e=>{if(Xl(e.value)||Xl(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(Xl(e.value)||Xl(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return Xl(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return Xl(t.value)||ru.test(t.value)?null:{email:!0}}static minLength(t){return e=>Xl(e.value)||!tu(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>tu(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return su.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(Xl(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(ou);return 0==e.length?null:function(t){return lu(uu(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(ou);return 0==e.length?null:function(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(...t){if(1===t.length){const e=t[0];if(h(e))return Wl(e,null);if(d(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return Wl(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return Wl(t=1===t.length&&h(t[0])?t[0]:t,null).pipe(S(t=>e(...t)))}return Wl(t,null)}(uu(t,e).map(iu)).pipe(S(lu))}}}function ou(t){return null!=t}function iu(t){const e=Js(t)?H(t):t;return e}function lu(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function uu(t,e){return e.map(e=>e(t))}function au(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function cu(t){return null!=t?su.compose(au(t)):null}function hu(t){return null!=t?su.composeAsync(au(t)):null}function du(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}let fu=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=cu(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=hu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=Zt({type:t}),t})(),pu=(()=>{class t extends fu{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return _u(e||t)},t.\u0275dir=Zt({type:t,features:[js]}),t})();const _u=kn(pu);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class gu extends fu{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}let yu=(()=>{class t extends class{constructor(t){this._cd=t}get ngClassUntouched(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.untouched)&&void 0!==n&&n}get ngClassTouched(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.touched)&&void 0!==n&&n}get ngClassPristine(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.pristine)&&void 0!==n&&n}get ngClassDirty(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.dirty)&&void 0!==n&&n}get ngClassValid(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.valid)&&void 0!==n&&n}get ngClassInvalid(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.invalid)&&void 0!==n&&n}get ngClassPending(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.pending)&&void 0!==n&&n}}{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(zs(gu,2))},t.\u0275dir=Zt({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&ro("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[js]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mu={provide:ql,useExisting:rt(()=>vu),multi:!0};let vu=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do))},t.\u0275dir=Zt({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&Ks("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[ko([mu])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const bu={provide:ql,useExisting:rt(()=>Cu),multi:!0};let wu=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=it({token:t,factory:t.\u0275fac}),t})(),Cu=(()=>{class t{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(gu),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do),zs(wu),zs(Ps))},t.\u0275dir=Zt({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,e){1&t&&Ks("change",function(){return e.onChange()})("blur",function(){return e.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[ko([bu])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Eu={provide:ql,useExisting:rt(()=>Au),multi:!0};let Au=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do))},t.\u0275dir=Zt({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,e){1&t&&Ks("change",function(t){return e.onChange(t.target.value)})("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[ko([Eu])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ku={provide:ql,useExisting:rt(()=>xu),multi:!0};let xu=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?""+e:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do))},t.\u0275dir=Zt({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&Ks("change",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[ko([ku])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Tu={provide:ql,useExisting:rt(()=>Su),multi:!0};let Su=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),s=this._getOptionValue(r.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(zs(Mo),zs(Do))},t.\u0275dir=Zt({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&Ks("change",function(t){return e.onChange(t.target)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[ko([Tu])]}),t})();function Iu(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Vu(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}const Ou=[Ql,Au,vu,xu,Su,Cu];function Du(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function Pu(t){return(Ru(t)?t.validators:t)||null}function Mu(t){return Array.isArray(t)?cu(t):t||null}function ju(t,e){return(Ru(e)?e.asyncValidators:t)||null}function Nu(t){return Array.isArray(t)?hu(t):t||null}function Ru(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class Hu{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Mu(this._rawValidators),this._composedAsyncValidatorFn=Nu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Mu(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Nu(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;const e=iu(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof Lu?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof Bu&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new di,this.statusChanges=new di}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Ru(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class Fu extends Hu{constructor(t=null,e,n){super(Pu(e),ju(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Du(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Du(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class Lu extends Hu{constructor(t,e,n){super(Pu(e),ju(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof Fu?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class Bu extends Hu{constructor(t,e,n){super(Pu(e),ju(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof Fu?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index "+t)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}const Uu={provide:gu,useExisting:rt(()=>$u)},Zu=(()=>Promise.resolve(null))();let $u=(()=>{class t extends gu{constructor(t,e,n,r){super(),this.control=new Fu,this._registered=!1,this.update=new di,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e);let n=void 0,r=void 0,s=void 0;return e.forEach(t=>{var e;t.constructor===Yl?n=t:(e=t,Ou.some(t=>e.constructor===t)?r=t:s=t)}),s||r||n||null}(0,r)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?[...this._parent.path,this.name]:[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){var t,e;(function(t,e,n){const r=function(t){return t._rawValidators}(t);null!==e.validator?t.setValidators(du(r,e.validator)):"function"==typeof r&&t.setValidators([r]);const s=function(t){return t._rawAsyncValidators}(t);null!==e.asyncValidator?t.setAsyncValidators(du(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]);{const n=()=>t.updateValueAndValidity();Iu(e._rawValidators,n),Iu(e._rawAsyncValidators,n)}})(t=this.control,e=this),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&Vu(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&Vu(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Zu.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;Zu.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(zs(pu,9),zs(eu,10),zs(nu,10),zs(ql,10))},t.\u0275dir=Zt({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[ko([Uu]),js,se]}),t})(),zu=(()=>{class t{}return t.\u0275mod=Bt({type:t}),t.\u0275inj=lt({factory:function(e){return new(e||t)}}),t})(),Wu=(()=>{class t{}return t.\u0275mod=Bt({type:t}),t.\u0275inj=lt({factory:function(e){return new(e||t)},providers:[wu],imports:[zu]}),t})(),qu=(()=>{class t{constructor(){this.name=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Rt({type:t,selectors:[["my-app"]],decls:5,vars:2,consts:[["placeholder","name",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(Gs(0,"label"),uo(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:"),Qs(),Gs(2,"input",0),Ks("ngModelChange",function(t){return e.name=t}),Qs(),Gs(3,"h1"),uo(4),Qs()),2&t&&(Ir(2),Ws("ngModel",e.name),Ir(2),ao("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c ",e.name,"!"))},directives:[Yl,yu,$u],encapsulation:2}),t})(),Gu=(()=>{class t{}return t.\u0275mod=Bt({type:t,bootstrap:[qu]}),t.\u0275inj=lt({factory:function(e){return new(e||t)},imports:[[Hl,Wu]]}),t})();zl().bootstrapModule(Gu)},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);