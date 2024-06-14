(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[1345],{1345:(v,h,d)=>{d.r(h),d.d(h,{MatTreeHarness:()=>l,MatTreeNodeHarness:()=>s});var i=d(8239),a=d(21936),c=d(3127);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s extends a.ContentContainerComponentHarness{constructor(){super(...arguments),this._toggle=this.locatorForOptional("[matTreeNodeToggle]")}static with(e={}){return f(s,e)}isExpanded(){var e=this;return(0,i.Z)(function*(){return(0,c.coerceBooleanProperty)(yield(yield e.host()).getAttribute("aria-expanded"))})()}isDisabled(){var e=this;return(0,i.Z)(function*(){return(0,c.coerceBooleanProperty)(yield(yield e.host()).getProperty("aria-disabled"))})()}getLevel(){var e=this;return(0,i.Z)(function*(){return(0,c.coerceNumberProperty)(yield(yield e.host()).getAttribute("aria-level"))})()}getText(){var e=this;return(0,i.Z)(function*(){return(yield e.host()).text({exclude:".mat-tree-node, .mat-nested-tree-node, button"})})()}toggle(){var e=this;return(0,i.Z)(function*(){const t=yield e._toggle();if(t)return t.click()})()}expand(){var e=this;return(0,i.Z)(function*(){(yield e.isExpanded())||(yield e.toggle())})()}collapse(){var e=this;return(0,i.Z)(function*(){(yield e.isExpanded())&&(yield e.toggle())})()}}s.hostSelector=".mat-tree-node, .mat-nested-tree-node";function f(x,e){return new a.HarnessPredicate(x,e).addOption("text",e.text,(t,n)=>a.HarnessPredicate.stringMatches(t.getText(),n)).addOption("disabled",e.disabled,function(){var t=(0,i.Z)(function*(n,r){return(yield n.isDisabled())===r});return function(n,r){return t.apply(this,arguments)}}()).addOption("expanded",e.expanded,function(){var t=(0,i.Z)(function*(n,r){return(yield n.isExpanded())===r});return function(n,r){return t.apply(this,arguments)}}()).addOption("level",e.level,function(){var t=(0,i.Z)(function*(n,r){return(yield n.getLevel())===r});return function(n,r){return t.apply(this,arguments)}}())}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class l extends a.ComponentHarness{static with(e={}){return new a.HarnessPredicate(l,e)}getNodes(e={}){var t=this;return(0,i.Z)(function*(){return t.locatorForAll(s.with(e))()})()}getTreeStructure(){var e=this;return(0,i.Z)(function*(){const t=yield e.getNodes(),n=yield(0,a.parallel)(()=>t.map(r=>(0,a.parallel)(()=>[r.getLevel(),r.getText(),r.isExpanded()])));return e._getTreeStructure(n,1,!0)})()}_getTreeStructure(e,t,n){const r={};for(let o=0;o<e.length;o++){const[g,u,y]=e[o],_=e[o+1]?.[0]??-1;if(g<t)return r;if(!(g>t)&&n)if(_===t)this._addChildToNode(r,{text:u});else if(_>t){let p=this._getTreeStructure(e.slice(o+1),_,y)?.children,m=p?{text:u,children:p}:{text:u};this._addChildToNode(r,m)}else return this._addChildToNode(r,{text:u}),r}return r}_addChildToNode(e,t){e.children?e.children.push(t):e.children=[t]}}l.hostSelector=".mat-tree";/**
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
 */}}]);
