(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[5057,8239,5036,6118,7344,8160,1034,8056,1906],{25057:(N,F,m)=>{m.r(F),m.d(F,{ComponentHarness:()=>H,ContentContainerComponentHarness:()=>M,HarnessEnvironment:()=>Q,HarnessPredicate:()=>A,TestKey:()=>O,_getTextWithExcludedElements:()=>U,getNoKeysSpecifiedError:()=>I,handleAutoChangeDetectionStatus:()=>d,manualChangeDetection:()=>p,parallel:()=>g,stopHandlingAutoChangeDetectionStatus:()=>_});var s=m(8239),R=m(21322);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const a=new R.BehaviorSubject({isDisabled:!1});let h;function E(e){e.onDetectChangesNow?.()}function d(e){_(),h=a.subscribe(e)}function _(){h?.unsubscribe(),h=null}function f(e,t){return u.apply(this,arguments)}function u(){return u=(0,s.Z)(function*(e,t){if(a.getValue().isDisabled)return yield e();if(h||d(E),t){yield new Promise(n=>a.next({isDisabled:!0,onDetectChangesNow:n}));try{return yield e()}finally{yield new Promise(n=>a.next({isDisabled:!1,onDetectChangesNow:n}))}}else{a.next({isDisabled:!0});try{return yield e()}finally{a.next({isDisabled:!1})}}}),u.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=(0,s.Z)(function*(e){return f(e,!1)}),l.apply(this,arguments)}function g(e){return C.apply(this,arguments)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function C(){return C=(0,s.Z)(function*(e){return f(()=>Promise.all(e()),!0)}),C.apply(this,arguments)}class H{constructor(t){this.locatorFactory=t}host(){var t=this;return(0,s.Z)(function*(){return t.locatorFactory.rootElement})()}documentRootLocatorFactory(){return this.locatorFactory.documentRootLocatorFactory()}locatorFor(...t){return this.locatorFactory.locatorFor(...t)}locatorForOptional(...t){return this.locatorFactory.locatorForOptional(...t)}locatorForAll(...t){return this.locatorFactory.locatorForAll(...t)}forceStabilize(){var t=this;return(0,s.Z)(function*(){return t.locatorFactory.forceStabilize()})()}waitForTasksOutsideAngular(){var t=this;return(0,s.Z)(function*(){return t.locatorFactory.waitForTasksOutsideAngular()})()}}class M extends H{getChildLoader(t){var n=this;return(0,s.Z)(function*(){return(yield n.getRootHarnessLoader()).getChildLoader(t)})()}getAllChildLoaders(t){var n=this;return(0,s.Z)(function*(){return(yield n.getRootHarnessLoader()).getAllChildLoaders(t)})()}getHarness(t){var n=this;return(0,s.Z)(function*(){return(yield n.getRootHarnessLoader()).getHarness(t)})()}getHarnessOrNull(t){var n=this;return(0,s.Z)(function*(){return(yield n.getRootHarnessLoader()).getHarnessOrNull(t)})()}getAllHarnesses(t){var n=this;return(0,s.Z)(function*(){return(yield n.getRootHarnessLoader()).getAllHarnesses(t)})()}hasHarness(t){var n=this;return(0,s.Z)(function*(){return(yield n.getRootHarnessLoader()).hasHarness(t)})()}getRootHarnessLoader(){var t=this;return(0,s.Z)(function*(){return t.locatorFactory.rootHarnessLoader()})()}}class A{constructor(t,n){this.harnessType=t,this._predicates=[],this._descriptions=[],this._addBaseOptions(n)}static stringMatches(t,n){return(0,s.Z)(function*(){return t=yield t,n===null?t===null:t===null?!1:typeof n=="string"?t===n:n.test(t)})()}add(t,n){return this._descriptions.push(t),this._predicates.push(n),this}addOption(t,n,r){return n!==void 0&&this.add(`${t} = ${W(n)}`,o=>r(o,n)),this}filter(t){var n=this;return(0,s.Z)(function*(){if(t.length===0)return[];const r=yield g(()=>t.map(o=>n.evaluate(o)));return t.filter((o,i)=>r[i])})()}evaluate(t){var n=this;return(0,s.Z)(function*(){return(yield g(()=>n._predicates.map(o=>o(t)))).reduce((o,i)=>o&&i,!0)})()}getDescription(){return this._descriptions.join(", ")}getSelector(){if(!this._ancestor)return(this.harnessType.hostSelector||"").trim();const[t,n]=y(this._ancestor),[r,o]=y(this.harnessType.hostSelector||""),i=[];return t.forEach(c=>{const L=b(c,n);return r.forEach(P=>i.push(`${L} ${b(P,o)}`))}),i.join(", ")}_addBaseOptions(t){this._ancestor=t.ancestor||"",this._ancestor&&this._descriptions.push(`has ancestor matching selector "${this._ancestor}"`);const n=t.selector;n!==void 0&&this.add(`host matches selector "${n}"`,function(){var r=(0,s.Z)(function*(o){return(yield o.host()).matchesSelector(n)});return function(o){return r.apply(this,arguments)}}())}}function W(e){if(e===void 0)return"undefined";try{return JSON.stringify(e,(n,r)=>r instanceof RegExp?`\u25ECMAT_RE_ESCAPE\u25EC${r.toString().replace(/"/g,"\u25ECMAT_RE_ESCAPE\u25EC")}\u25ECMAT_RE_ESCAPE\u25EC`:r).replace(/"◬MAT_RE_ESCAPE◬|◬MAT_RE_ESCAPE◬"/g,"").replace(/◬MAT_RE_ESCAPE◬/g,'"')}catch{return"{...}"}}function y(e){const t=[];return[e.replace(/(["'][^["']*["'])/g,(r,o)=>{const i=`__cdkPlaceholder-${t.length}__`;return t.push(o),i}).split(",").map(r=>r.trim()),t]}function b(e,t){return e.replace(/__cdkPlaceholder-(\d+)__/g,(n,r)=>t[+r])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Q{get rootElement(){return this._rootElement=this._rootElement||this.createTestElement(this.rawRootElement),this._rootElement}set rootElement(t){this._rootElement=t}constructor(t){this.rawRootElement=t}documentRootLocatorFactory(){return this.createEnvironment(this.getDocumentRoot())}locatorFor(...t){return()=>S(this._getAllHarnessesAndTestElements(t),B(t))}locatorForOptional(...t){var n=this;return(0,s.Z)(function*(){return(yield n._getAllHarnessesAndTestElements(t))[0]||null})}locatorForAll(...t){return()=>this._getAllHarnessesAndTestElements(t)}rootHarnessLoader(){var t=this;return(0,s.Z)(function*(){return t})()}harnessLoaderFor(t){var n=this;return(0,s.Z)(function*(){return n.createEnvironment(yield S(n.getAllRawElements(t),[x(t)]))})()}harnessLoaderForOptional(t){var n=this;return(0,s.Z)(function*(){const r=yield n.getAllRawElements(t);return r[0]?n.createEnvironment(r[0]):null})()}harnessLoaderForAll(t){var n=this;return(0,s.Z)(function*(){return(yield n.getAllRawElements(t)).map(o=>n.createEnvironment(o))})()}getHarness(t){return this.locatorFor(t)()}getHarnessOrNull(t){return this.locatorForOptional(t)()}getAllHarnesses(t){return this.locatorForAll(t)()}hasHarness(t){var n=this;return(0,s.Z)(function*(){return(yield n.locatorForOptional(t)())!==null})()}getChildLoader(t){var n=this;return(0,s.Z)(function*(){return n.createEnvironment(yield S(n.getAllRawElements(t),[x(t)]))})()}getAllChildLoaders(t){var n=this;return(0,s.Z)(function*(){return(yield n.getAllRawElements(t)).map(r=>n.createEnvironment(r))})()}createComponentHarness(t,n){return new t(this.createEnvironment(n))}_getAllHarnessesAndTestElements(t){var n=this;return(0,s.Z)(function*(){if(!t.length)throw Error("CDK Component harness query must contain at least one element.");const{allQueries:r,harnessQueries:o,elementQueries:i,harnessTypes:c}=$(t),L=yield n.getAllRawElements([...i,...o.map(w=>w.getSelector())].join(",")),P=i.length===0&&c.size===1||o.length===0,z=yield g(()=>L.map(function(){var w=(0,s.Z)(function*(Z){const V=n.createTestElement(Z),J=yield g(()=>r.map(X=>n._getQueryResultForElement(X,Z,V,P)));return k(J)});return function(Z){return w.apply(this,arguments)}}()));return[].concat(...z)})()}_getQueryResultForElement(t,n,r,o=!1){var i=this;return(0,s.Z)(function*(){if(typeof t=="string")return o||(yield r.matchesSelector(t))?r:null;if(o||(yield r.matchesSelector(t.getSelector()))){const c=i.createComponentHarness(t.harnessType,n);return(yield t.evaluate(c))?c:null}return null})()}}function $(e){const t=[],n=[],r=[],o=new Set;for(const i of e)if(typeof i=="string")t.push(i),r.push(i);else{const c=i instanceof A?i:new A(i,{});t.push(c),n.push(c),o.add(c.harnessType)}return{allQueries:t,harnessQueries:n,elementQueries:r,harnessTypes:o}}function k(e){return D.apply(this,arguments)}function D(){return D=(0,s.Z)(function*(e){let t=!1,n=new Set;const r=[];for(const o of e)!o||(o instanceof H?n.has(o.constructor)||(n.add(o.constructor),r.push(o)):t||(t=!0,r.push(o)));return r}),D.apply(this,arguments)}function S(e,t){return v.apply(this,arguments)}function v(){return v=(0,s.Z)(function*(e,t){const n=(yield e)[0];if(n==null)throw Error(`Failed to find element matching one of the following queries:
`+t.map(r=>`(${r})`).join(`,
`));return n}),v.apply(this,arguments)}function B(e){return e.map(t=>typeof t=="string"?j(t):G(t))}function G(e){const t=e instanceof A?e:new A(e,{}),{name:n,hostSelector:r}=t.harnessType,o=`${n} with host element matching selector: "${r}"`,i=t.getDescription();return o+(i?` satisfying the constraints: ${t.getDescription()}`:"")}function j(e){return`TestElement for element matching selector: "${e}"`}function x(e){return`HarnessLoader for element matching selector: "${e}"`}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var O;(function(e){e[e.BACKSPACE=0]="BACKSPACE",e[e.TAB=1]="TAB",e[e.ENTER=2]="ENTER",e[e.SHIFT=3]="SHIFT",e[e.CONTROL=4]="CONTROL",e[e.ALT=5]="ALT",e[e.ESCAPE=6]="ESCAPE",e[e.PAGE_UP=7]="PAGE_UP",e[e.PAGE_DOWN=8]="PAGE_DOWN",e[e.END=9]="END",e[e.HOME=10]="HOME",e[e.LEFT_ARROW=11]="LEFT_ARROW",e[e.UP_ARROW=12]="UP_ARROW",e[e.RIGHT_ARROW=13]="RIGHT_ARROW",e[e.DOWN_ARROW=14]="DOWN_ARROW",e[e.INSERT=15]="INSERT",e[e.DELETE=16]="DELETE",e[e.F1=17]="F1",e[e.F2=18]="F2",e[e.F3=19]="F3",e[e.F4=20]="F4",e[e.F5=21]="F5",e[e.F6=22]="F6",e[e.F7=23]="F7",e[e.F8=24]="F8",e[e.F9=25]="F9",e[e.F10=26]="F10",e[e.F11=27]="F11",e[e.F12=28]="F12",e[e.META=29]="META"})(O||(O={}));/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function I(){return Error("No keys have been specified.")}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function U(e,t){const n=e.cloneNode(!0),r=n.querySelectorAll(t);for(let o=0;o<r.length;o++)r[o].remove();return(n.textContent||"").trim()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */},8239:(N,F,m)=>{m.d(F,{Z:()=>R});function s(a,h,E,d,_,f,u){try{var p=a[f](u),l=p.value}catch(g){E(g);return}p.done?h(l):Promise.resolve(l).then(d,_)}function R(a){return function(){var h=this,E=arguments;return new Promise(function(d,_){var f=a.apply(h,E);function u(l){s(f,d,_,u,p,"next",l)}function p(l){s(f,d,_,u,p,"throw",l)}u(void 0)})}}}}]);
