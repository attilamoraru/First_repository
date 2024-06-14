(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4063,8239,5036,6118,7344,8160,1034,8056,1906,1345],{1345:(x,h,d)=>{d.r(h),d.d(h,{MatTreeHarness:()=>s,MatTreeNodeHarness:()=>o});var i=d(8239),a=d(21936),u=d(3127);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends a.ContentContainerComponentHarness{constructor(){super(...arguments),this._toggle=this.locatorForOptional("[matTreeNodeToggle]")}static with(e={}){return _(o,e)}isExpanded(){var e=this;return(0,i.Z)(function*(){return(0,u.coerceBooleanProperty)(yield(yield e.host()).getAttribute("aria-expanded"))})()}isDisabled(){var e=this;return(0,i.Z)(function*(){return(0,u.coerceBooleanProperty)(yield(yield e.host()).getProperty("aria-disabled"))})()}getLevel(){var e=this;return(0,i.Z)(function*(){return(0,u.coerceNumberProperty)(yield(yield e.host()).getAttribute("aria-level"))})()}getText(){var e=this;return(0,i.Z)(function*(){return(yield e.host()).text({exclude:".mat-tree-node, .mat-nested-tree-node, button"})})()}toggle(){var e=this;return(0,i.Z)(function*(){const t=yield e._toggle();if(t)return t.click()})()}expand(){var e=this;return(0,i.Z)(function*(){(yield e.isExpanded())||(yield e.toggle())})()}collapse(){var e=this;return(0,i.Z)(function*(){(yield e.isExpanded())&&(yield e.toggle())})()}}o.hostSelector=".mat-tree-node, .mat-nested-tree-node";function _(c,e){return new a.HarnessPredicate(c,e).addOption("text",e.text,(t,n)=>a.HarnessPredicate.stringMatches(t.getText(),n)).addOption("disabled",e.disabled,function(){var t=(0,i.Z)(function*(n,r){return(yield n.isDisabled())===r});return function(n,r){return t.apply(this,arguments)}}()).addOption("expanded",e.expanded,function(){var t=(0,i.Z)(function*(n,r){return(yield n.isExpanded())===r});return function(n,r){return t.apply(this,arguments)}}()).addOption("level",e.level,function(){var t=(0,i.Z)(function*(n,r){return(yield n.getLevel())===r});return function(n,r){return t.apply(this,arguments)}}())}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s extends a.ComponentHarness{static with(e={}){return new a.HarnessPredicate(s,e)}getNodes(e={}){var t=this;return(0,i.Z)(function*(){return t.locatorForAll(o.with(e))()})()}getTreeStructure(){var e=this;return(0,i.Z)(function*(){const t=yield e.getNodes(),n=yield(0,a.parallel)(()=>t.map(r=>(0,a.parallel)(()=>[r.getLevel(),r.getText(),r.isExpanded()])));return e._getTreeStructure(n,1,!0)})()}_getTreeStructure(e,t,n){const r={};for(let l=0;l<e.length;l++){const[f,g,m]=e[l],p=e[l+1]?.[0]??-1;if(f<t)return r;if(!(f>t)&&n)if(p===t)this._addChildToNode(r,{text:g});else if(p>t){let y=this._getTreeStructure(e.slice(l+1),p,m)?.children,v=y?{text:g,children:y}:{text:g};this._addChildToNode(r,v)}else return this._addChildToNode(r,{text:g}),r}return r}_addChildToNode(e,t){e.children?e.children.push(t):e.children=[t]}}s.hostSelector=".mat-tree";/**
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
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */},8239:(x,h,d)=>{d.d(h,{Z:()=>a});function i(u,o,_,s,c,e,t){try{var n=u[e](t),r=n.value}catch(l){_(l);return}n.done?o(r):Promise.resolve(r).then(s,c)}function a(u){return function(){var o=this,_=arguments;return new Promise(function(s,c){var e=u.apply(o,_);function t(r){i(e,s,c,t,n,"next",r)}function n(r){i(e,s,c,t,n,"throw",r)}t(void 0)})}}}}]);
