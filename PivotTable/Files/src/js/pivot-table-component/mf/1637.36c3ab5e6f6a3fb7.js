(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[1637],{61637:(q,w,s)=>{s.r(w),s.d(w,{MAT_AUTOCOMPLETE_DEFAULT_OPTIONS:()=>M,MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY:()=>k,MAT_AUTOCOMPLETE_SCROLL_STRATEGY:()=>C,MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY:()=>U,MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>R,MAT_AUTOCOMPLETE_VALUE_ACCESSOR:()=>S,MatAutocomplete:()=>d,MatAutocompleteModule:()=>v,MatAutocompleteOrigin:()=>_,MatAutocompleteSelectedEvent:()=>x,MatAutocompleteTrigger:()=>h,_MatAutocompleteBase:()=>f,_MatAutocompleteOriginBase:()=>g,_MatAutocompleteTriggerBase:()=>y,getMatAutocompleteMissingPanelError:()=>B});var t=s(94450),l=s(66385),A=s(31134),E=s(17684),O=s(31892),W=s(71689),b=s(3127),P=s(67202),p=s(72310),u=s(21322),m=s(33297),V=s(83676),N=s(34560),D=s(70193),r=s(27049),L=s(99852);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const j=["panel"];function K(n,e){if(n&1&&(t.\u0275\u0275elementStart(0,"div",0,1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd()),n&2){const i=e.id,o=t.\u0275\u0275nextContext();t.\u0275\u0275property("id",o.id)("ngClass",o._classList)("@panelAnimation",o.isOpen?"visible":"hidden"),t.\u0275\u0275attribute("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby(i))}}const Y=["*"],F=(0,p.trigger)("panelAnimation",[(0,p.state)("void, hidden",(0,p.style)({opacity:0,transform:"scaleY(0.8)"})),(0,p.transition)(":enter, hidden => visible",[(0,p.group)([(0,p.animate)("0.03s linear",(0,p.style)({opacity:1})),(0,p.animate)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,p.style)({transform:"scaleY(1)"}))])]),(0,p.transition)(":leave, visible => hidden",[(0,p.animate)("0.075s linear",(0,p.style)({opacity:0}))])]);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let H=0;class x{constructor(e,i){this.source=e,this.option=i}}const G=(0,l.mixinDisableRipple)(class{}),M=new t.InjectionToken("mat-autocomplete-default-options",{providedIn:"root",factory:k});function k(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}class f extends G{get isOpen(){return this._isOpen&&this.showPanel}_setColor(e){this._color=e,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(e){this._autoActiveFirstOption=(0,b.coerceBooleanProperty)(e)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(e){this._autoSelectActiveOption=(0,b.coerceBooleanProperty)(e)}set classList(e){e&&e.length?this._classList=(0,b.coerceStringArray)(e).reduce((i,o)=>(i[o]=!0,i),{}):this._classList={},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(e,i,o,a){super(),this._changeDetectorRef=e,this._elementRef=i,this._defaults=o,this._activeOptionChanges=u.Subscription.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this._autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this._autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.optionSelected=new t.EventEmitter,this.opened=new t.EventEmitter,this.closed=new t.EventEmitter,this.optionActivated=new t.EventEmitter,this._classList={},this.id=`mat-autocomplete-${H++}`,this.inertGroups=a?.SAFARI||!1}ngAfterContentInit(){this._keyManager=new W.ActiveDescendantKeyManager(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){const i=new x(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;const i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_setVisibilityClasses(e){e[this._visibleClass]=this.showPanel,e[this._hiddenClass]=!this.showPanel}_setThemeClasses(e){e["mat-primary"]=this._color==="primary",e["mat-warn"]=this._color==="warn",e["mat-accent"]=this._color==="accent"}}f.\u0275fac=function(e){return new(e||f)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(M),t.\u0275\u0275directiveInject(P.Platform))},f.\u0275dir=t.\u0275\u0275defineDirective({type:f,viewQuery:function(e,i){if(e&1&&(t.\u0275\u0275viewQuery(t.TemplateRef,7),t.\u0275\u0275viewQuery(j,5)),e&2){let o;t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(i.template=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(i.panel=o.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(f,[{type:t.Directive}],function(){return[{type:t.ChangeDetectorRef},{type:t.ElementRef},{type:void 0,decorators:[{type:t.Inject,args:[M]}]},{type:P.Platform}]},{template:[{type:t.ViewChild,args:[t.TemplateRef,{static:!0}]}],panel:[{type:t.ViewChild,args:["panel"]}],ariaLabel:[{type:t.Input,args:["aria-label"]}],ariaLabelledby:[{type:t.Input,args:["aria-labelledby"]}],displayWith:[{type:t.Input}],autoActiveFirstOption:[{type:t.Input}],autoSelectActiveOption:[{type:t.Input}],panelWidth:[{type:t.Input}],optionSelected:[{type:t.Output}],opened:[{type:t.Output}],closed:[{type:t.Output}],optionActivated:[{type:t.Output}],classList:[{type:t.Input,args:["class"]}]})}();class d extends f{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=(0,b.coerceBooleanProperty)(e),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const e of this.options)e._changeDetectorRef.markForCheck()}}d.\u0275fac=function(){let n;return function(i){return(n||(n=t.\u0275\u0275getInheritedFactory(d)))(i||d)}}(),d.\u0275cmp=t.\u0275\u0275defineComponent({type:d,selectors:[["mat-autocomplete"]],contentQueries:function(e,i,o){if(e&1&&(t.\u0275\u0275contentQuery(o,l.MAT_OPTGROUP,5),t.\u0275\u0275contentQuery(o,l.MatOption,5)),e&2){let a;t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(i.optionGroups=a),t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(i.options=a)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[t.\u0275\u0275ProvidersFeature([{provide:l.MAT_OPTION_PARENT_COMPONENT,useExisting:d}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:Y,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(e,i){e&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275template(0,K,3,5,"ng-template"))},dependencies:[A.NgClass],styles:[".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[F]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(d,[{type:t.Component,args:[{selector:"mat-autocomplete",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,exportAs:"matAutocomplete",inputs:["disableRipple"],host:{class:"mat-mdc-autocomplete"},providers:[{provide:l.MAT_OPTION_PARENT_COMPONENT,useExisting:d}],animations:[F],template:`<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [ngClass]="_classList"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    [@panelAnimation]="isOpen ? 'visible' : 'hidden'"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,styles:[".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"]}]}],null,{optionGroups:[{type:t.ContentChildren,args:[l.MAT_OPTGROUP,{descendants:!0}]}],options:[{type:t.ContentChildren,args:[l.MatOption,{descendants:!0}]}],hideSingleSelectionIndicator:[{type:t.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class g{constructor(e){this.elementRef=e}}g.\u0275fac=function(e){return new(e||g)(t.\u0275\u0275directiveInject(t.ElementRef))},g.\u0275dir=t.\u0275\u0275defineDirective({type:g}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(g,[{type:t.Directive}],function(){return[{type:t.ElementRef}]},null)}();class _ extends g{}_.\u0275fac=function(){let n;return function(i){return(n||(n=t.\u0275\u0275getInheritedFactory(_)))(i||_)}}(),_.\u0275dir=t.\u0275\u0275defineDirective({type:_,selectors:[["","matAutocompleteOrigin",""]],exportAs:["matAutocompleteOrigin"],features:[t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(_,[{type:t.Directive,args:[{selector:"[matAutocompleteOrigin]",exportAs:"matAutocompleteOrigin"}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const S={provide:N.NG_VALUE_ACCESSOR,useExisting:(0,t.forwardRef)(()=>h),multi:!0};function B(){return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}const C=new t.InjectionToken("mat-autocomplete-scroll-strategy");function U(n){return()=>n.scrollStrategies.reposition()}const R={provide:C,deps:[O.Overlay],useFactory:U};class y{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(e){this._autocompleteDisabled=(0,b.coerceBooleanProperty)(e)}constructor(e,i,o,a,c,I,z,Q,X,$,Z){this._element=e,this._overlay=i,this._viewContainerRef=o,this._zone=a,this._changeDetectorRef=c,this._dir=z,this._formField=Q,this._document=X,this._viewportRuler=$,this._defaults=Z,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=u.Subscription.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new u.Subject,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,u.defer)(()=>{const T=this.autocomplete?this.autocomplete.options:null;return T?T.changes.pipe((0,r.startWith)(T),(0,r.switchMap)(()=>(0,u.merge)(...T.map(J=>J.onSelectionChange)))):this._zone.onStable.pipe((0,r.take)(1),(0,r.switchMap)(()=>this.optionSelections))}),this._scrollStrategy=I}ngAfterViewInit(){const e=this._getWindow();typeof e<"u"&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const e=this._getWindow();typeof e<"u"&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,u.merge)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,r.filter)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,r.filter)(()=>this._overlayAttached)):(0,u.of)()).pipe((0,r.map)(e=>e instanceof l.MatOptionSelectionChange?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,u.merge)((0,u.fromEvent)(this._document,"click"),(0,u.fromEvent)(this._document,"auxclick"),(0,u.fromEvent)(this._document,"touchend")).pipe((0,r.filter)(e=>{const i=(0,P._getEventTarget)(e),o=this._formField?this._formField._elementRef.nativeElement:null,a=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&i!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!o||!o.contains(i))&&(!a||!a.contains(i))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(i)}))}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){const i=e.keyCode,o=(0,m.hasModifierKey)(e);if(i===m.ESCAPE&&!o&&e.preventDefault(),this.activeOption&&i===m.ENTER&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){const a=this.autocomplete._keyManager.activeItem,c=i===m.UP_ARROW||i===m.DOWN_ARROW;i===m.TAB||c&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):c&&this._canOpen()&&this.openPanel(),(c||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,o=i.value;i.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o&&(this._previousValue=o,this._pendingAutoselectedOption=null,this._onChange(o),this._canOpen()&&this._document.activeElement===e.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const e=this._zone.onStable.pipe((0,r.take)(1)),i=this.autocomplete.options.changes.pipe((0,r.tap)(()=>this._positionStrategy.reapplyLastPosition()),(0,r.delay)(0));return(0,u.merge)(e,i).pipe((0,r.switchMap)(()=>(this._zone.run(()=>{const o=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,r.take)(1)).subscribe(o=>this._setValueAndClose(o))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(e){const i=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(e):e;this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){const i=e?e.source:this._pendingAutoselectedOption;i&&(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),this.autocomplete._emitSelectEvent(i),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(i=>{i!==e&&i.selected&&i.deselect()})}_attachOverlay(){if(!this.autocomplete&&(typeof ngDevMode>"u"||ngDevMode))throw B();let e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new V.TemplatePortal(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,this._handleOverlayEvents(e),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&e&&e.updateSize({width:this._getPanelWidth()})})),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const i=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this.panelOpen&&i!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new O.OverlayConfig({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){const i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}];let c;this.position==="above"?c=a:this.position==="below"?c=i:c=[...i,...a],e.withPositions(c)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const e=this.autocomplete;e.autoActiveFirstOption?e._keyManager.setFirstItemActive():e._keyManager.setActiveItem(-1)}_canOpen(){const e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(e){const i=this.autocomplete,o=(0,l._countGroupLabelsBeforeOption)(e,i.options,i.optionGroups);if(e===0&&o===1)i._setScrollTop(0);else if(i.panel){const a=i.options.toArray()[e];if(a){const c=a._getHostElement(),I=(0,l._getOptionScrollPosition)(c.offsetTop,c.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(I)}}}_handleOverlayEvents(e){e.keydownEvents().subscribe(i=>{(i.keyCode===m.ESCAPE&&!(0,m.hasModifierKey)(i)||i.keyCode===m.UP_ARROW&&(0,m.hasModifierKey)(i,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),i.stopPropagation(),i.preventDefault())}),e.outsidePointerEvents().subscribe()}}y.\u0275fac=function(e){return new(e||y)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(O.Overlay),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(C),t.\u0275\u0275directiveInject(L.Directionality,8),t.\u0275\u0275directiveInject(D.MAT_FORM_FIELD,9),t.\u0275\u0275directiveInject(A.DOCUMENT,8),t.\u0275\u0275directiveInject(E.ViewportRuler),t.\u0275\u0275directiveInject(M,8))},y.\u0275dir=t.\u0275\u0275defineDirective({type:y,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[t.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(y,[{type:t.Directive}],function(){return[{type:t.ElementRef},{type:O.Overlay},{type:t.ViewContainerRef},{type:t.NgZone},{type:t.ChangeDetectorRef},{type:void 0,decorators:[{type:t.Inject,args:[C]}]},{type:L.Directionality,decorators:[{type:t.Optional}]},{type:D.MatFormField,decorators:[{type:t.Optional},{type:t.Inject,args:[D.MAT_FORM_FIELD]},{type:t.Host}]},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[A.DOCUMENT]}]},{type:E.ViewportRuler},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[M]}]}]},{autocomplete:[{type:t.Input,args:["matAutocomplete"]}],position:[{type:t.Input,args:["matAutocompletePosition"]}],connectedTo:[{type:t.Input,args:["matAutocompleteConnectedTo"]}],autocompleteAttribute:[{type:t.Input,args:["autocomplete"]}],autocompleteDisabled:[{type:t.Input,args:["matAutocompleteDisabled"]}]})}();class h extends y{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}h.\u0275fac=function(){let n;return function(i){return(n||(n=t.\u0275\u0275getInheritedFactory(h)))(i||h)}}(),h.\u0275dir=t.\u0275\u0275defineDirective({type:h,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(e,i){e&1&&t.\u0275\u0275listener("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(a){return i._handleInput(a)})("keydown",function(a){return i._handleKeydown(a)})("click",function(){return i._handleClick()}),e&2&&t.\u0275\u0275attribute("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-owns",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[t.\u0275\u0275ProvidersFeature([S]),t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(h,[{type:t.Directive,args:[{selector:"input[matAutocomplete], textarea[matAutocomplete]",host:{class:"mat-mdc-autocomplete-trigger","[attr.autocomplete]":"autocompleteAttribute","[attr.role]":'autocompleteDisabled ? null : "combobox"',"[attr.aria-autocomplete]":'autocompleteDisabled ? null : "list"',"[attr.aria-activedescendant]":"(panelOpen && activeOption) ? activeOption.id : null","[attr.aria-expanded]":"autocompleteDisabled ? null : panelOpen.toString()","[attr.aria-owns]":"(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id","[attr.aria-haspopup]":'autocompleteDisabled ? null : "listbox"',"(focusin)":"_handleFocus()","(blur)":"_onTouched()","(input)":"_handleInput($event)","(keydown)":"_handleKeydown($event)","(click)":"_handleClick()"},exportAs:"matAutocompleteTrigger",providers:[S]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class v{}v.\u0275fac=function(e){return new(e||v)},v.\u0275mod=t.\u0275\u0275defineNgModule({type:v}),v.\u0275inj=t.\u0275\u0275defineInjector({providers:[R],imports:[O.OverlayModule,l.MatOptionModule,l.MatCommonModule,A.CommonModule,E.CdkScrollableModule,l.MatOptionModule,l.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(v,[{type:t.NgModule,args:[{imports:[O.OverlayModule,l.MatOptionModule,l.MatCommonModule,A.CommonModule],exports:[E.CdkScrollableModule,d,l.MatOptionModule,l.MatCommonModule,h,_],declarations:[d,h,_],providers:[R]}]}],null,null)}();/**
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
