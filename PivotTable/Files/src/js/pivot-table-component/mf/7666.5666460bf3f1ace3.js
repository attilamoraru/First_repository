(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[7666],{7666:(V,T,o)=>{o.r(T),o.d(T,{MAT_SNACK_BAR_DATA:()=>w,MAT_SNACK_BAR_DEFAULT_OPTIONS:()=>A,MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY:()=>j,MatSnackBar:()=>f,MatSnackBarAction:()=>h,MatSnackBarActions:()=>b,MatSnackBarConfig:()=>k,MatSnackBarContainer:()=>l,MatSnackBarLabel:()=>p,MatSnackBarModule:()=>u,MatSnackBarRef:()=>S,SimpleSnackBar:()=>v,_MatSnackBarBase:()=>m,_MatSnackBarContainerBase:()=>y,matSnackBarAnimations:()=>I});var t=o(94450),M=o(21322),C=o(31134),O=o(13459),d=o(72310),_=o(83676),R=o(67202),P=o(27049),D=o(71689),B=o(43267),g=o(31892),E=o(66385);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function L(r,e){if(r&1){const a=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",2)(1,"button",3),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(a);const i=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(i.action())}),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd()()}if(r&2){const a=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",a.data.action," ")}}const z=["label"];function F(r,e){}const N=Math.pow(2,31)-1;class S{constructor(e,a){this._overlayRef=a,this._afterDismissed=new M.Subject,this._afterOpened=new M.Subject,this._onAction=new M.Subject,this._dismissedByAction=!1,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,N))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const w=new t.InjectionToken("MatSnackBarData");class k{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275dir=t.\u0275\u0275defineDirective({type:p,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.Directive,args:[{selector:"[matSnackBarLabel]",host:{class:"mat-mdc-snack-bar-label mdc-snackbar__label"}}]}],null,null)}();class b{}b.\u0275fac=function(e){return new(e||b)},b.\u0275dir=t.\u0275\u0275defineDirective({type:b,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(b,[{type:t.Directive,args:[{selector:"[matSnackBarActions]",host:{class:"mat-mdc-snack-bar-actions mdc-snackbar__actions"}}]}],null,null)}();class h{}h.\u0275fac=function(e){return new(e||h)},h.\u0275dir=t.\u0275\u0275defineDirective({type:h,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(h,[{type:t.Directive,args:[{selector:"[matSnackBarAction]",host:{class:"mat-mdc-snack-bar-action mdc-snackbar__action"}}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class v{constructor(e,a){this.snackBarRef=e,this.data=a}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}v.\u0275fac=function(e){return new(e||v)(t.\u0275\u0275directiveInject(S),t.\u0275\u0275directiveInject(w))},v.\u0275cmp=t.\u0275\u0275defineComponent({type:v,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions","",4,"ngIf"],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,a){e&1&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(2,L,3,1,"div",1)),e&2&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",a.data.message,`
`),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",a.hasAction))},dependencies:[C.NgIf,O.MatButton,p,b,h],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(v,[{type:t.Component,args:[{selector:"simple-snack-bar",exportAs:"matSnackBar",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,host:{class:"mat-mdc-simple-snack-bar"},template:`<div matSnackBarLabel>
  {{data.message}}
</div>

<div matSnackBarActions *ngIf="hasAction">
  <button mat-button matSnackBarAction (click)="action()">
    {{data.action}}
  </button>
</div>
`,styles:[".mat-mdc-simple-snack-bar{display:flex}"]}]}],function(){return[{type:S},{type:void 0,decorators:[{type:t.Inject,args:[w]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const I={snackBarState:(0,d.trigger)("state",[(0,d.state)("void, hidden",(0,d.style)({transform:"scale(0.8)",opacity:0})),(0,d.state)("visible",(0,d.style)({transform:"scale(1)",opacity:1})),(0,d.transition)("* => visible",(0,d.animate)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,d.transition)("* => void, * => hidden",(0,d.animate)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,d.style)({opacity:0})))])};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let U=0;class y extends _.BasePortalOutlet{constructor(e,a,n,i,s){super(),this._ngZone=e,this._elementRef=a,this._changeDetectorRef=n,this._platform=i,this.snackBarConfig=s,this._document=(0,t.inject)(C.DOCUMENT),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new M.Subject,this._onExit=new M.Subject,this._onEnter=new M.Subject,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${U++}`,this.attachDomPortal=c=>{this._assertNotAttached();const x=this._portalOutlet.attachDomPortal(c);return this._afterPortalAttached(),x},s.politeness==="assertive"&&!s.announcementMessage?this._live="assertive":s.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();const a=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),a}attachTemplatePortal(e){this._assertNotAttached();const a=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),a}onAnimationEnd(e){const{fromState:a,toState:n}=e;if((n==="void"&&a!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){const i=this._onEnter;this._ngZone.run(()=>{i.next(),i.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,P.take)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const e=this._elementRef.nativeElement,a=this.snackBarConfig.panelClass;a&&(Array.isArray(a)?a.forEach(n=>e.classList.add(n)):e.classList.add(a)),this._exposeToModals()}_exposeToModals(){const e=this._liveElementId,a=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<a.length;n++){const i=a[n],s=i.getAttribute("aria-owns");this._trackedModals.add(i),s?s.indexOf(e)===-1&&i.setAttribute("aria-owns",s+" "+e):i.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{const a=e.getAttribute("aria-owns");if(a){const n=a.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){if(this._portalOutlet.hasAttached()&&(typeof ngDevMode>"u"||ngDevMode))throw Error("Attempting to attach snack bar content after content is already attached")}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),a=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&a){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(n=document.activeElement),e.removeAttribute("aria-hidden"),a.appendChild(e),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}y.\u0275fac=function(e){return new(e||y)(t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(R.Platform),t.\u0275\u0275directiveInject(k))},y.\u0275dir=t.\u0275\u0275defineDirective({type:y,viewQuery:function(e,a){if(e&1&&t.\u0275\u0275viewQuery(_.CdkPortalOutlet,7),e&2){let n;t.\u0275\u0275queryRefresh(n=t.\u0275\u0275loadQuery())&&(a._portalOutlet=n.first)}},features:[t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(y,[{type:t.Directive}],function(){return[{type:t.NgZone},{type:t.ElementRef},{type:t.ChangeDetectorRef},{type:R.Platform},{type:k}]},{_portalOutlet:[{type:t.ViewChild,args:[_.CdkPortalOutlet,{static:!0}]}]})}();class l extends y{_afterPortalAttached(){super._afterPortalAttached();const e=this._label.nativeElement,a="mdc-snackbar__label";e.classList.toggle(a,!e.querySelector(`.${a}`))}}l.\u0275fac=function(){let r;return function(a){return(r||(r=t.\u0275\u0275getInheritedFactory(l)))(a||l)}}(),l.\u0275cmp=t.\u0275\u0275defineComponent({type:l,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,a){if(e&1&&t.\u0275\u0275viewQuery(z,7),e&2){let n;t.\u0275\u0275queryRefresh(n=t.\u0275\u0275loadQuery())&&(a._label=n.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(e,a){e&1&&t.\u0275\u0275syntheticHostListener("@state.done",function(i){return a.onAnimationEnd(i)}),e&2&&t.\u0275\u0275syntheticHostProperty("@state",a._animationState)},features:[t.\u0275\u0275InheritDefinitionFeature],decls:6,vars:3,consts:[[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["label",""],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,a){e&1&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1,2)(3,"div",3),t.\u0275\u0275template(4,F,0,0,"ng-template",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"div"),t.\u0275\u0275elementEnd()()),e&2&&(t.\u0275\u0275advance(5),t.\u0275\u0275attribute("aria-live",a._live)("role",a._role)("id",a._liveElementId))},dependencies:[_.CdkPortalOutlet],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__dismiss .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size, var(--mdc-snackbar-icon-size, 24px))}.mat-mdc-snack-bar-container .mdc-snackbar__dismiss svg,.mat-mdc-snack-bar-container .mdc-snackbar__dismiss img{width:var(--mdc-icon-button-icon-size, var(--mdc-snackbar-icon-size, 24px));height:var(--mdc-icon-button-icon-size, var(--mdc-snackbar-icon-size, 24px))}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color, inherit)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color, inherit)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size, inherit);font-family:var(--mdc-snackbar-supporting-text-font, inherit);font-weight:var(--mdc-snackbar-supporting-text-weight, inherit);line-height:var(--mdc-snackbar-supporting-text-line-height, inherit)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-mdc-snack-bar-button-color, transparent);--mat-mdc-button-persistent-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{background-color:currentColor;opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[I.snackBarState]}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(l,[{type:t.Component,args:[{selector:"mat-snack-bar-container",changeDetection:t.ChangeDetectionStrategy.Default,encapsulation:t.ViewEncapsulation.None,animations:[I.snackBarState],host:{class:"mdc-snackbar mat-mdc-snack-bar-container mdc-snackbar--open","[@state]":"_animationState","(@state.done)":"onAnimationEnd($event)"},template:`<div class="mdc-snackbar__surface">
  <!--
    This outer label wrapper will have the class \`mdc-snackbar__label\` applied if
    the attached template/component does not contain it.
  -->
  <div class="mat-mdc-snack-bar-label" #label>
    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->
    <div aria-hidden="true">
      <ng-template cdkPortalOutlet></ng-template>
    </div>

    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->
    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>
  </div>
</div>
`,styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__dismiss .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size, var(--mdc-snackbar-icon-size, 24px))}.mat-mdc-snack-bar-container .mdc-snackbar__dismiss svg,.mat-mdc-snack-bar-container .mdc-snackbar__dismiss img{width:var(--mdc-icon-button-icon-size, var(--mdc-snackbar-icon-size, 24px));height:var(--mdc-icon-button-icon-size, var(--mdc-snackbar-icon-size, 24px))}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color, inherit)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color, inherit)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size, inherit);font-family:var(--mdc-snackbar-supporting-text-font, inherit);font-weight:var(--mdc-snackbar-supporting-text-weight, inherit);line-height:var(--mdc-snackbar-supporting-text-line-height, inherit)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-mdc-snack-bar-button-color, transparent);--mat-mdc-button-persistent-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{background-color:currentColor;opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}']}]}],null,{_label:[{type:t.ViewChild,args:["label",{static:!0}]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=t.\u0275\u0275defineInjector({imports:[g.OverlayModule,_.PortalModule,C.CommonModule,O.MatButtonModule,E.MatCommonModule,E.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(u,[{type:t.NgModule,args:[{imports:[g.OverlayModule,_.PortalModule,C.CommonModule,O.MatButtonModule,E.MatCommonModule],exports:[E.MatCommonModule,l,p,b,h],declarations:[v,l,p,b,h]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function j(){return new k}const A=new t.InjectionToken("mat-snack-bar-default-options",{providedIn:"root",factory:j});class m{get _openedSnackBarRef(){const e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(e,a,n,i,s,c){this._overlay=e,this._live=a,this._injector=n,this._breakpointObserver=i,this._parentSnackBar=s,this._defaultConfig=c,this._snackBarRefAtThisLevel=null}openFromComponent(e,a){return this._attach(e,a)}openFromTemplate(e,a){return this._attach(e,a)}open(e,a="",n){const i={...this._defaultConfig,...n};return i.data={message:e,action:a},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,a){const n=a&&a.viewContainerRef&&a.viewContainerRef.injector,i=t.Injector.create({parent:n||this._injector,providers:[{provide:k,useValue:a}]}),s=new _.ComponentPortal(this.snackBarContainerComponent,a.viewContainerRef,i),c=e.attach(s);return c.instance.snackBarConfig=a,c.instance}_attach(e,a){const n={...new k,...this._defaultConfig,...a},i=this._createOverlay(n),s=this._attachSnackBarContainer(i,n),c=new S(s,i);if(e instanceof t.TemplateRef){const x=new _.TemplatePortal(e,null,{$implicit:n.data,snackBarRef:c});c.instance=s.attachTemplatePortal(x)}else{const x=this._createInjector(n,c),K=new _.ComponentPortal(e,void 0,x),W=s.attachComponentPortal(K);c.instance=W.instance}return this._breakpointObserver.observe(B.Breakpoints.HandsetPortrait).pipe((0,P.takeUntil)(i.detachments())).subscribe(x=>{i.overlayElement.classList.toggle(this.handsetCssClass,x.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,a){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),a.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),a.duration&&a.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(a.duration))}_createOverlay(e){const a=new g.OverlayConfig;a.direction=e.direction;let n=this._overlay.position().global();const i=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!i||e.horizontalPosition==="end"&&i,c=!s&&e.horizontalPosition!=="center";return s?n.left("0"):c?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),a.positionStrategy=n,this._overlay.create(a)}_createInjector(e,a){const n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return t.Injector.create({parent:n||this._injector,providers:[{provide:S,useValue:a},{provide:w,useValue:e.data}]})}}m.\u0275fac=function(e){return new(e||m)(t.\u0275\u0275inject(g.Overlay),t.\u0275\u0275inject(D.LiveAnnouncer),t.\u0275\u0275inject(t.Injector),t.\u0275\u0275inject(B.BreakpointObserver),t.\u0275\u0275inject(m,12),t.\u0275\u0275inject(A))},m.\u0275prov=t.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(m,[{type:t.Injectable}],function(){return[{type:g.Overlay},{type:D.LiveAnnouncer},{type:t.Injector},{type:B.BreakpointObserver},{type:m,decorators:[{type:t.Optional},{type:t.SkipSelf}]},{type:k,decorators:[{type:t.Inject,args:[A]}]}]},null)}();class f extends m{constructor(e,a,n,i,s,c){super(e,a,n,i,s,c),this.simpleSnackBarComponent=v,this.snackBarContainerComponent=l,this.handsetCssClass="mat-mdc-snack-bar-handset"}}f.\u0275fac=function(e){return new(e||f)(t.\u0275\u0275inject(g.Overlay),t.\u0275\u0275inject(D.LiveAnnouncer),t.\u0275\u0275inject(t.Injector),t.\u0275\u0275inject(B.BreakpointObserver),t.\u0275\u0275inject(f,12),t.\u0275\u0275inject(A))},f.\u0275prov=t.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac,providedIn:u}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(f,[{type:t.Injectable,args:[{providedIn:u}]}],function(){return[{type:g.Overlay},{type:D.LiveAnnouncer},{type:t.Injector},{type:B.BreakpointObserver},{type:f,decorators:[{type:t.Optional},{type:t.SkipSelf}]},{type:k,decorators:[{type:t.Inject,args:[A]}]}]},null)}();/**
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