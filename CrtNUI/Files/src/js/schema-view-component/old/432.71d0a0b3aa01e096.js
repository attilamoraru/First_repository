"use strict";(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[432],{37432:(f,c,i)=>{i.r(c),i.d(c,{CodemirrorComponent:()=>d,CodemirrorModule:()=>u});var o=i(36599),g=i.n(o),a=i(20092);const l=["ref"];function h(t){return t&&t.replace(/\r\n|\r/g,`
`)}let d=(()=>{class t{constructor(e,r){this._differs=e,this._ngZone=r,this.className="",this.name="codemirror",this.autoFocus=!1,this.preserveScrollPosition=!1,this.cursorActivity=new o.EventEmitter,this.focusChange=new o.EventEmitter,this.scroll=new o.EventEmitter,this.drop=new o.EventEmitter,this.value="",this.disabled=!1,this.isFocused=!1,this.onChange=s=>{},this.onTouched=()=>{}}set options(e){this._options=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}get codeMirrorGlobal(){return this._codeMirror?this._codeMirror:(this._codeMirror=typeof CodeMirror<"u"?CodeMirror:i(27476),this._codeMirror)}ngAfterViewInit(){!this.ref||this._ngZone.runOutsideAngular(()=>{this.codeMirror=this.codeMirrorGlobal.fromTextArea(this.ref.nativeElement,this._options),this.codeMirror.on("cursorActivity",e=>this._ngZone.run(()=>this.cursorActive(e))),this.codeMirror.on("scroll",this.scrollChanged.bind(this)),this.codeMirror.on("blur",()=>this._ngZone.run(()=>this.focusChanged(!1))),this.codeMirror.on("focus",()=>this._ngZone.run(()=>this.focusChanged(!0))),this.codeMirror.on("change",(e,r)=>this._ngZone.run(()=>this.codemirrorValueChanged(e,r))),this.codeMirror.on("drop",(e,r)=>{this._ngZone.run(()=>this.dropFiles(e,r))}),this.codeMirror.setValue(this.value)})}ngDoCheck(){if(!this._differ)return;const e=this._differ.diff(this._options);e&&(e.forEachChangedItem(r=>this.setOptionIfChanged(r.key,r.currentValue)),e.forEachAddedItem(r=>this.setOptionIfChanged(r.key,r.currentValue)),e.forEachRemovedItem(r=>this.setOptionIfChanged(r.key,r.currentValue)))}ngOnDestroy(){this.codeMirror&&this.codeMirror.toTextArea()}codemirrorValueChanged(e,r){r.origin!=="setValue"&&(this.value=e.getValue(),this.onChange(this.value))}setOptionIfChanged(e,r){!this.codeMirror||this.codeMirror.setOption(e,r)}focusChanged(e){this.onTouched(),this.isFocused=e,this.focusChange.emit(e)}scrollChanged(e){this.scroll.emit(e.getScrollInfo())}cursorActive(e){this.cursorActivity.emit(e)}dropFiles(e,r){this.drop.emit([e,r])}writeValue(e){if(e==null)return;if(!this.codeMirror){this.value=e;return}const r=this.codeMirror.getValue();if(e!==r&&h(r)!==h(e))if(this.value=e,this.preserveScrollPosition){const s=this.codeMirror.getScrollInfo();this.codeMirror.setValue(this.value),this.codeMirror.scrollTo(s.left,s.top)}else this.codeMirror.setValue(this.value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.setOptionIfChanged("readOnly",this.disabled)}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275directiveInject(o.KeyValueDiffers),o.\u0275\u0275directiveInject(o.NgZone))},t.\u0275cmp=o.\u0275\u0275defineComponent({type:t,selectors:[["ngx-codemirror"]],viewQuery:function(e,r){if(e&1&&o.\u0275\u0275viewQuery(l,7),e&2){let s;o.\u0275\u0275queryRefresh(s=o.\u0275\u0275loadQuery())&&(r.ref=s.first)}},inputs:{className:"className",name:"name",autoFocus:"autoFocus",preserveScrollPosition:"preserveScrollPosition",options:"options"},outputs:{cursorActivity:"cursorActivity",focusChange:"focusChange",scroll:"scroll",drop:"drop"},features:[o.\u0275\u0275ProvidersFeature([{provide:a.JU,useExisting:(0,o.forwardRef)(()=>t),multi:!0}])],decls:3,vars:7,consts:[["autocomplete","off",3,"name","autofocus"],["ref",""]],template:function(e,r){e&1&&(o.\u0275\u0275elementStart(0,"textarea",0,1),o.\u0275\u0275text(2,"    "),o.\u0275\u0275elementEnd()),e&2&&(o.\u0275\u0275classMapInterpolate1("ngx-codemirror ",r.className,""),o.\u0275\u0275classProp("ngx-codemirror--focused",r.isFocused),o.\u0275\u0275property("name",r.name)("autofocus",r.autoFocus))},encapsulation:2,changeDetection:0}),t})();(function(){typeof ngDevMode>"u"||ngDevMode})();let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=o.\u0275\u0275defineInjector({}),t})();(function(){typeof ngDevMode>"u"||ngDevMode})(),function(){(typeof ngJitMode>"u"||ngJitMode)&&o.\u0275\u0275setNgModuleScope(u,{declarations:[d],exports:[d]})}()}}]);
