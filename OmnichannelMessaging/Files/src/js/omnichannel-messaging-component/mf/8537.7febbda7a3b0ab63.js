(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[8537],{78537:(W,E,m)=>{m.r(E),m.d(E,{MAT_LEGACY_SELECT_CONFIG:()=>g.MAT_SELECT_CONFIG,MAT_LEGACY_SELECT_SCROLL_STRATEGY:()=>g.MAT_SELECT_SCROLL_STRATEGY,MAT_LEGACY_SELECT_SCROLL_STRATEGY_PROVIDER:()=>g.MAT_SELECT_SCROLL_STRATEGY_PROVIDER,MAT_LEGACY_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>g.MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,MAT_LEGACY_SELECT_TRIGGER:()=>g.MAT_SELECT_TRIGGER,MatLegacySelect:()=>p,MatLegacySelectChange:()=>P,MatLegacySelectModule:()=>h,MatLegacySelectTrigger:()=>_,matLegacySelectAnimations:()=>v});var C=m(31892),u=m(31134),e=m(94450),w=m(66385),c=m(73539),S=m(66868),M=m(17684),g=m(19717),T=m(27049),s=m(72310);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function x(l,a){if(l&1&&(e.\u0275\u0275elementStart(0,"span",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),l&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.placeholder)}}function R(l,a){if(l&1&&(e.\u0275\u0275elementStart(0,"span",12),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),l&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.triggerValue)}}function k(l,a){l&1&&e.\u0275\u0275projection(0,0,["*ngSwitchCase","true"])}function A(l,a){if(l&1&&(e.\u0275\u0275elementStart(0,"span",9),e.\u0275\u0275template(1,R,2,1,"span",10),e.\u0275\u0275template(2,k,1,0,"ng-content",11),e.\u0275\u0275elementEnd()),l&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngSwitch",!!t.customTrigger),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngSwitchCase",!0)}}function D(l,a){if(l&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",13)(1,"div",14,15),e.\u0275\u0275listener("@transformPanel.done",function(i){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r._panelDoneAnimatingStream.next(i.toState))})("keydown",function(i){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r._handleKeydown(i))}),e.\u0275\u0275projection(3,1),e.\u0275\u0275elementEnd()()}if(l&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("@transformPanelWrap",void 0),e.\u0275\u0275advance(1),e.\u0275\u0275classMapInterpolate1("mat-select-panel ",t._getPanelTheme(),""),e.\u0275\u0275styleProp("transform-origin",t._transformOrigin)("font-size",t._triggerFontSize,"px"),e.\u0275\u0275property("ngClass",t.panelClass)("@transformPanel",t.multiple?"showing-multiple":"showing"),e.\u0275\u0275attribute("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}const I=[[["mat-select-trigger"]],"*"],Y=["mat-select-trigger","*"],v={transformPanelWrap:(0,s.trigger)("transformPanelWrap",[(0,s.transition)("* => void",(0,s.query)("@transformPanel",[(0,s.animateChild)()],{optional:!0}))]),transformPanel:(0,s.trigger)("transformPanel",[(0,s.state)("void",(0,s.style)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,s.state)("showing",(0,s.style)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,s.state)("showing-multiple",(0,s.style)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,s.transition)("void => *",(0,s.animate)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,s.transition)("* => void",(0,s.animate)("100ms 25ms linear",(0,s.style)({opacity:0})))])},O=256,y=16,G=y*2,H=3,L=y*1.5+16,b=8;class P{constructor(a,t){this.source=a,this.value=t}}class _{}_.\u0275fac=function(a){return new(a||_)},_.\u0275dir=e.\u0275\u0275defineDirective({type:_,selectors:[["mat-select-trigger"]],features:[e.\u0275\u0275ProvidersFeature([{provide:g.MAT_SELECT_TRIGGER,useExisting:_}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(_,[{type:e.Directive,args:[{selector:"mat-select-trigger",providers:[{provide:g.MAT_SELECT_TRIGGER,useExisting:_}]}]}],null,null)}();class p extends g._MatSelectBase{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(a,t,n){const i=this._getItemHeight(),r=i*a,o=i/2,d=r-t+o;return Math.min(Math.max(0,d),n)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,T.takeUntil)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,T.take)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(a){const t=(0,c._countGroupLabelsBeforeLegacyOption)(a,this.options,this.optionGroups),n=this._getItemHeight();a===0&&t===1?this.panel.nativeElement.scrollTop=0:this.panel.nativeElement.scrollTop=(0,c._getLegacyOptionScrollPosition)((a+t)*n,n,this.panel.nativeElement.scrollTop,O)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(a){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(a)}_getChangeEvent(a){return new P(this,a)}_getOverlayMinWidth(){return this._triggerRect?.width}_calculateOverlayOffsetX(){const a=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),n=this._isRtl(),i=this.multiple?L+y:y*2;let r;if(this.multiple)r=L;else if(this.disableOptionCentering)r=y;else{let f=this._selectionModel.selected[0]||this.options.first;r=f&&f.group?G:y}n||(r*=-1);const o=0-(a.left+r-(n?i:0)),d=a.right+r-t.width+(n?0:i);o>0?r+=o+b:d>0&&(r-=d+b),this._overlayDir.offsetX=Math.round(r),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(a,t,n){const i=this._getItemHeight(),r=(i-this._triggerRect.height)/2,o=Math.floor(O/i);let d;if(this.disableOptionCentering)return 0;if(this._scrollTop===0)d=a*i;else if(this._scrollTop===n){const f=this._getItemCount()-o,B=a-f;let F=i-(this._getItemCount()*i-O)%i;d=B*i+F}else d=t-i/2;return Math.round(d*-1-r)}_checkOverlayWithinViewport(a){const t=this._getItemHeight(),n=this._viewportRuler.getViewportSize(),i=this._triggerRect.top-b,r=n.height-this._triggerRect.bottom-b,o=Math.abs(this._offsetY),f=Math.min(this._getItemCount()*t,O)-o-this._triggerRect.height;f>r?this._adjustPanelUp(f,r):o>i?this._adjustPanelDown(o,i,a):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(a,t){const n=Math.round(a-t);this._scrollTop-=n,this._offsetY-=n,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(a,t,n){const i=Math.round(a-t);if(this._scrollTop+=i,this._offsetY+=i,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=n){this._scrollTop=n,this._offsetY=0,this._transformOrigin="50% top 0px";return}}_calculateOverlayPosition(){const a=this._getItemHeight(),t=this._getItemCount(),n=Math.min(t*a,O),r=t*a-n;let o;this.empty?o=0:o=Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),o+=(0,c._countGroupLabelsBeforeLegacyOption)(o,this.options,this.optionGroups);const d=n/2;this._scrollTop=this._calculateOverlayScroll(o,d,r),this._offsetY=this._calculateOverlayOffsetY(o,d,r),this._checkOverlayWithinViewport(r)}_getOriginBasedOnOption(){const a=this._getItemHeight(),t=(a-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+a/2}px 0px`}_getItemHeight(){return this._triggerFontSize*H}_getItemCount(){return this.options.length+this.optionGroups.length}}p.\u0275fac=function(){let l;return function(t){return(l||(l=e.\u0275\u0275getInheritedFactory(p)))(t||p)}}(),p.\u0275cmp=e.\u0275\u0275defineComponent({type:p,selectors:[["mat-select"]],contentQueries:function(a,t,n){if(a&1&&(e.\u0275\u0275contentQuery(n,g.MAT_SELECT_TRIGGER,5),e.\u0275\u0275contentQuery(n,c.MatLegacyOption,5),e.\u0275\u0275contentQuery(n,c.MAT_LEGACY_OPTGROUP,5)),a&2){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t.customTrigger=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t.options=i),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t.optionGroups=i)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:19,hostBindings:function(a,t){a&1&&e.\u0275\u0275listener("keydown",function(i){return t._handleKeydown(i)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),a&2&&(e.\u0275\u0275attribute("id",t.id)("tabindex",t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),e.\u0275\u0275classProp("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty)("mat-select-multiple",t.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[e.\u0275\u0275ProvidersFeature([{provide:S.MatLegacyFormFieldControl,useExisting:p},{provide:c.MAT_LEGACY_OPTION_PARENT_COMPONENT,useExisting:p}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:Y,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(a,t){if(a&1&&(e.\u0275\u0275projectionDef(I),e.\u0275\u0275elementStart(0,"div",0,1),e.\u0275\u0275listener("click",function(){return t.toggle()}),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275template(4,x,2,1,"span",3),e.\u0275\u0275template(5,A,3,2,"span",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",5),e.\u0275\u0275element(7,"div",6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(8,D,4,14,"ng-template",7),e.\u0275\u0275listener("backdropClick",function(){return t.close()})("attach",function(){return t._onAttached()})("detach",function(){return t.close()})),a&2){const n=e.\u0275\u0275reference(1);e.\u0275\u0275attribute("aria-owns",t.panelOpen?t.id+"-panel":null),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngSwitch",t.empty),e.\u0275\u0275attribute("id",t._valueId),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",!1),e.\u0275\u0275advance(3),e.\u0275\u0275property("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",t._getOverlayMinWidth())("cdkConnectedOverlayOffsetY",t._offsetY)}},dependencies:[u.NgClass,u.NgSwitch,u.NgSwitchCase,u.NgSwitchDefault,C.CdkConnectedOverlay,C.CdkOverlayOrigin],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[v.transformPanelWrap,v.transformPanel]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(p,[{type:e.Component,args:[{selector:"mat-select",exportAs:"matSelect",inputs:["disabled","disableRipple","tabIndex"],encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,host:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true",class:"mat-select","[attr.id]":"id","[attr.tabindex]":"tabIndex","[attr.aria-controls]":'panelOpen ? id + "-panel" : null',"[attr.aria-expanded]":"panelOpen","[attr.aria-label]":"ariaLabel || null","[attr.aria-required]":"required.toString()","[attr.aria-disabled]":"disabled.toString()","[attr.aria-invalid]":"errorState","[attr.aria-activedescendant]":"_getAriaActiveDescendant()","[class.mat-select-disabled]":"disabled","[class.mat-select-invalid]":"errorState","[class.mat-select-required]":"required","[class.mat-select-empty]":"empty","[class.mat-select-multiple]":"multiple","(keydown)":"_handleKeydown($event)","(focus)":"_onFocus()","(blur)":"_onBlur()"},animations:[v.transformPanelWrap,v.transformPanel],providers:[{provide:S.MatLegacyFormFieldControl,useExisting:p},{provide:c.MAT_LEGACY_OPTION_PARENT_COMPONENT,useExisting:p}],template:`<!--
 Note that the select trigger element specifies \`aria-owns\` pointing to the listbox overlay.
 While aria-owns is not required for the ARIA 1.2 \`role="combobox"\` interaction pattern,
 it fixes an issue with VoiceOver when the select appears inside of an \`aria-model="true"\`
 element (e.g. a dialog). Without this \`aria-owns\`, the \`aria-modal\` on a dialog prevents
 VoiceOver from "seeing" the select's listbox overlay for aria-activedescendant.
 Using \`aria-owns\` re-parents the select overlay so that it works again.
 See https://github.com/angular/components/issues/20694
-->
<div cdk-overlay-origin
     [attr.aria-owns]="panelOpen ? id + '-panel' : null"
     class="mat-select-trigger"
     (click)="toggle()"
     #origin="cdkOverlayOrigin"
     #trigger>
  <div class="mat-select-value" [ngSwitch]="empty" [attr.id]="_valueId">
    <span class="mat-select-placeholder mat-select-min-line" *ngSwitchCase="true">{{placeholder}}</span>
    <span class="mat-select-value-text" *ngSwitchCase="false" [ngSwitch]="!!customTrigger">
      <span class="mat-select-min-line" *ngSwitchDefault>{{triggerValue}}</span>
      <ng-content select="mat-select-trigger" *ngSwitchCase="true"></ng-content>
    </span>
  </div>

  <div class="mat-select-arrow-wrapper"><div class="mat-select-arrow"></div></div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="origin"
  [cdkConnectedOverlayOpen]="panelOpen"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayMinWidth]="_getOverlayMinWidth()"
  [cdkConnectedOverlayOffsetY]="_offsetY"
  (backdropClick)="close()"
  (attach)="_onAttached()"
  (detach)="close()">
  <div class="mat-select-panel-wrap" [@transformPanelWrap]>
    <div
      #panel
      role="listbox"
      tabindex="-1"
      class="mat-select-panel {{ _getPanelTheme() }}"
      [attr.id]="id + '-panel'"
      [attr.aria-multiselectable]="multiple"
      [attr.aria-label]="ariaLabel || null"
      [attr.aria-labelledby]="_getPanelAriaLabelledby()"
      [ngClass]="panelClass"
      [@transformPanel]="multiple ? 'showing-multiple' : 'showing'"
      (@transformPanel.done)="_panelDoneAnimatingStream.next($event.toState)"
      [style.transformOrigin]="_transformOrigin"
      [style.font-size.px]="_triggerFontSize"
      (keydown)="_handleKeydown($event)">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}']}]}],null,{options:[{type:e.ContentChildren,args:[c.MatLegacyOption,{descendants:!0}]}],optionGroups:[{type:e.ContentChildren,args:[c.MAT_LEGACY_OPTGROUP,{descendants:!0}]}],customTrigger:[{type:e.ContentChild,args:[g.MAT_SELECT_TRIGGER]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class h{}h.\u0275fac=function(a){return new(a||h)},h.\u0275mod=e.\u0275\u0275defineNgModule({type:h}),h.\u0275inj=e.\u0275\u0275defineInjector({providers:[g.MAT_SELECT_SCROLL_STRATEGY_PROVIDER],imports:[u.CommonModule,C.OverlayModule,c.MatLegacyOptionModule,w.MatCommonModule,M.CdkScrollableModule,S.MatLegacyFormFieldModule,c.MatLegacyOptionModule,w.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(h,[{type:e.NgModule,args:[{imports:[u.CommonModule,C.OverlayModule,c.MatLegacyOptionModule,w.MatCommonModule],exports:[M.CdkScrollableModule,S.MatLegacyFormFieldModule,p,_,c.MatLegacyOptionModule,w.MatCommonModule],declarations:[p,_],providers:[g.MAT_SELECT_SCROLL_STRATEGY_PROVIDER]}]}],null,null)}();/**
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
