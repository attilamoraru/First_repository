(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[257],{9645:(Kt,b,i)=>{"use strict";i.r(b),i.d(b,{AbstractHandler:()=>dt,AppRouteReuseStrategy:()=>Zt,BroadcastChannelFactory:()=>ot,BroadcastChannelService:()=>F,CONTAINS_EMAIL_PATTERN:()=>d,CONTAINS_EMAIL_REGEXP:()=>j,CURRENT_TAB_ID_PROVIDER:()=>xt,CURRENT_TAB_ID_TOKEN:()=>I,CrtHandlerChainAdapter:()=>Et,CrtLibTranslateModule:()=>D,CustomElementsBootstrapService:()=>Bt,CustomEventApplicationIdToken:()=>S,CustomEventService:()=>G,CustomEventServiceToken:()=>k,DOM_PURIFIER:()=>X,DOM_PURIFIER_DEFAULT_FORBID_CONTENTS:()=>V,EMAIL_PATTERN:()=>T,EMAIL_REGEXP:()=>C,Factory:()=>N,FactoryProvider:()=>pt,I18N_TRANSLATES:()=>f,IdGenerator:()=>et,Inject:()=>st,LoggerService:()=>ct,NAVIGATOR:()=>Lt,NameGenerator:()=>W,ObservableUtils:()=>it,SpeechRecognitionFactory:()=>x,StorybookLibBadges:()=>ut,StorybookScopeBadges:()=>lt,TAB_ID_APP_INITIALIZER:()=>Vt,VoiceToTextApi:()=>rt,WINDOW_PROVIDER:()=>Nt,WINDOW_TOKEN:()=>p,WebComponentLocationStrategy:()=>kt,WindowStateService:()=>Pt,concatMapWith:()=>Tt,containsEmail:()=>K,emptyFn:()=>Y,flattenObject:()=>O,getRandomArrayElement:()=>q,hexToRGBA:()=>Ft,isEmailAddress:()=>w,mergeMapWith:()=>Ct,mergeMapWithout:()=>jt,ngxTranslateExtract:()=>nt.J,randomInt:()=>L,replaceSubstring:()=>It,runInZone:()=>Ot,runOutsideZone:()=>_t,splitAndReplaceSubstringToMacros:()=>B,switchMapWith:()=>wt,switchMapWithout:()=>Mt,tapOnce:()=>Rt,toArray:()=>J,toObject:()=>Q,windowFactory:()=>E});var A=i(30660),o=i(36599),u=i(33376),Z=i(74970),h=i(27969),H=i(79676);const S=new o.InjectionToken("CustomEventApplicationIdToken"),k=new o.InjectionToken("CustomEventServiceToken");let G=(()=>{class e{constructor(t,n=null){this.document=t,this.appId=n,this.customEventName="TSCustomEventChannel",this.appId=n||Math.random().toString()}subscribe(t){return this.customEventObserver$=this.customEventObserver$||(0,u.fromEvent)(document,this.customEventName),this.customEventObserver$.pipe((0,Z.h)(n=>n.detail.eventName===t&&n.detail.sender!==this.appId),(0,h.U)(n=>n.detail.payload))}createOutboundChannel(t){const n=new u.Subject;return n.asObservable().subscribe(r=>{const a=new CustomEvent(this.customEventName,{detail:{eventName:t,sender:this.appId,payload:r}});this.document.dispatchEvent(a)}),n}getDataViaEvent(t,n={}){return new u.Observable(r=>{this.subscribe(t).pipe((0,H.P)()).subscribe(a=>{r.next(a),r.complete()}),this.createOutboundChannel(t).next(n)})}getDataStreamViaEvent(t,n={}){return new u.Observable(r=>{const a=this.subscribe(t).subscribe(c=>{r.next(c)},u.noop,()=>r.complete());return this.createOutboundChannel(t).next(n),()=>{a.unsubscribe()}})}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(A.DOCUMENT),o.\u0275\u0275inject(S,8))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const V=["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","title","video","xmp"];var z=i(23358),R=i.n(z);const d="[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9](?:[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9-]*[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9])?\\.)+[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9](?:[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9-]*[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9])?",T=`(?=^.{1,250}$)^${d}$`,C=()=>new RegExp(T,"g"),j=()=>new RegExp(d,"g");function w(e){return C().test(e)}function K(e){return j().test(e)}const M={name:"uponSanitizeElement",func:(e,s)=>{const t=s.tagName;w(t)&&e.insertAdjacentText("afterbegin",`<${t}>`)}},X=new o.InjectionToken("Represents a DOM purifier",{factory:()=>(R().addHook(M.name,M.func),R()),providedIn:"platform"});function J(e){return e?Array.isArray(e)?e:[e]:[]}function Q(e){return e||{}}function Y(){}function O(e,s){const t={};for(const n in e)if(!!Object.prototype.hasOwnProperty.call(e,n))if(typeof e[n]=="object"&&e[n]!==null){const r=O(e[n],s);for(const a in r)!Object.prototype.hasOwnProperty.call(r,a)||(t[n+s+a]=r[a])}else t[n]=e[n];return t}var _=i(55069);function L(e,s=0){return Math.floor(Math.random()*(e-s))+s}function q(e){_.ValidationUtilities.checkArrayEmpty("array",e);const s=L(e.length);return e[s]}var tt=i(18877);class et{static generate(){return"_"+this.generateUUID()}static generateUUID(){return(0,tt.Z)()}}var nt=i(38);function st(e){return(s,t,n)=>{for((s.$inject===void 0||s.$inject instanceof Array&&!s.hasOwnProperty("$inject"))&&(s.$inject=[]);s.$inject.length<=n;)s.$inject.push(null);s.$inject[n]=e||t}}class x{static create(s){return new s}}let rt=(()=>{class e{constructor(){this.speechResult=new u.Subject,this.speechEnd=new u.Subject}static _getInternalApiClass(){return window.SpeechRecognition||window.webkitSpeechRecognition}static isSupported(){return e._getInternalApiClass()!==void 0}_subscribeEvents(){this._internalApi.addEventListener("result",this.onResult.bind(this)),this._internalApi.addEventListener("speechend",this.onSpeechEnd.bind(this))}_unsubscribeEvents(){this._internalApi.removeEventListener("result",this.onResult),this._internalApi.removeEventListener("speechend",this.onSpeechEnd)}init(t){const n=e._getInternalApiClass();this._internalApi=x.create(n),this._internalApi.continuous=!0,this._internalApi.lang=t.lang||"en-US",this._subscribeEvents()}onResult(t){const{resultIndex:n,results:r}=t,a=r[n][0];if(!a)throw new Error("No results to transcript");this.speechResult.next(a.transcript)}onSpeechEnd(){this.speechEnd.next()}destroy(){this._unsubscribeEvents(),this._internalApi=null}startRecognition(){this._internalApi.start()}stopRecognition(){this._internalApi.stop()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();var at=i(37044);class F{get messages$(){return this._messages$}constructor(s,t){this._ngZone=t;const n=new u.Subject;this._messages$=n.pipe(this._runInZone(this._ngZone)),this._broadcastChannel=new at.g0(s),this._broadcastChannel.onmessage=r=>n.next(r)}_runInZone(s){return t=>new u.Observable(n=>{t.subscribe(r=>s.run(()=>n.next(r)))})}publish(s){return(0,u.from)(this._broadcastChannel.postMessage(s))}}let ot=(()=>{class e{constructor(t){this._ngZone=t}createInstance(t){return new F(t,this._ngZone)}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(o.NgZone))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class it{static toColdObservable(s){return new u.Observable(t=>{s().subscribe(r=>{t.next(r),t.complete()})})}}let ct=(()=>{class e{log(t,n,...r){console.log(t,...r)}warn(t,n,...r){console.warn(t,...r)}error(t,n,...r){console.error(t,...r)}exception(t,n,...r){(console.exception||console.error)(t,...r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const ut={dataAccess:"data-access",feature:"feature",ui:"ui",util:"util",components:"components",deprecated:"deprecated"},lt={studioFree:"studio-free",studioEnterprise:"studio-enterprise",sdk:"sdk"};let N=(()=>{class e{constructor(t,n,r=null){this._injector=t,this._registrationMap=n,this._defaultInstanceType=r}_getInstance(t,n){return n?"injectable"in n&&n.injectable!=null?this._injector.get(n.injectable):"useFactory"in n&&typeof n.useFactory=="function"?n.useFactory(t):"useValue"in n?n.useValue:null:null}_getDefaultInstance(t){return this._getInstance(t,this._defaultInstanceType)}_getInstanceByType(t){if(this._registrationMap.has(t)){const n=this._registrationMap.get(t);return this._getInstance(t,n)}}_getInstanceByPredicate(t){for(const[n,r]of this._registrationMap)if(typeof n=="function"&&n(t))return this._getInstance(t,r)}create(t=null){return t==null?this._getDefaultInstance(t):this._getInstanceByType(t)??this._getInstanceByPredicate(t)??this._getDefaultInstance(t)}}return e.\u0275fac=function(t){o.\u0275\u0275invalidFactory()},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var ht=i(7403);class pt{static _createMappings(s){const t=new Map;return s=s??[],s.forEach(n=>{const r=n.predicate,a=(0,ht.Z)(n,"predicate");t.set(r,a)}),t}static create(s){const{mappings:t,default:n,token:r}=s??{};return{provide:r,useFactory:a=>{const c=this._createMappings(t);return new N(a,c,n)},deps:[o.Injector]}}}class dt{setNext(s){return this.nextHandler=s,s}handle(s){if(this.nextHandler)return this.nextHandler.handle(s)}}const f=new o.InjectionToken("I18nTranslatesToken");var g=i(56707),ft=i(75079),gt=i(13528);let P=(()=>{class e{constructor(t,n){this._translateService=t,this._i18nTranslates=n,this._destroyed$=new u.Subject,this._init()}_init(){this._subscribe(),this._initDefaultLanguage()}_initDefaultLanguage(){const t=this._translateService.currentLang,n=this._translateService.defaultLang,r=t||n;r&&this._addTranslates(r)}_subscribe(){(0,u.merge)(this._translateService.onLangChange,this._translateService.onDefaultLangChange).pipe((0,gt.R)(this._destroyed$)).subscribe(t=>this._addTranslates(t.lang))}_addTranslates(t){const n=(0,ft.Z)(this._i18nTranslates),r=this._translateService.defaultLang;n.forEach(a=>{const c=a[t],l=a[r];this._translateService.setTranslation(t,c,!0),this._translateService.setTranslation(r,l,!0)})}ngOnDestroy(){this._destroyed$.next(),this._destroyed$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(g.sK),o.\u0275\u0275inject(f))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})(),D=(()=>{class e{constructor(t){this._crtLibTranslateService=t}static forRoot(t){return{ngModule:e,providers:[{multi:!0,provide:f,useValue:t.i18n},P]}}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(P))},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({imports:[g.aw]}),e})();(function(){(typeof ngJitMode>"u"||ngJitMode)&&o.\u0275\u0275setNgModuleScope(D,{exports:[g.aw]})})();var mt=i(78910);function m(e){return Array.isArray(e)?e:[e]}function vt(e,s){return s.forEach(({replaceMacros:t,replaceValue:n})=>{e=e.map(r=>r===t?n??"":r)}),e}function It(e,s){if(!e)return"";if(!s)return e;let t=[e];return s=m(s),t=B(t,s),t=vt(t,s),t.join("")}function B(e,s){if(!e)return[];let t=m(e);if(!s)return t;const n=m(s),r=n.map(({replaceMacros:a})=>a);return n.forEach(({searchValue:a,replaceMacros:c})=>{if(a&&c){const l=new RegExp(`(${c})`,"g"),zt=t.map(y=>r.includes(y)?y:y.split(a).join(c).split(l));t=(0,mt.Z)(zt)}}),t}var Xt=i(78320);function Et(e){return function(s){Reflect.defineMetadata("requestType",e.requestType,s)}}var yt=i(26903),bt=i(98168),At=i(65598),St=i(44551),U=i(54882),$=i(61528);function Rt(e){return s=>{const t=s.pipe((0,yt.B)()),n=t.pipe((0,bt.b)(e),(0,At.q)(1));return(0,u.concat)(n,t)}}function Tt(e){return s=>s.pipe((0,St.b)((t,n)=>e(t,n).pipe((0,h.U)(r=>[t,r]))))}function Ct(e){return s=>s.pipe((0,U.z)((t,n)=>e(t,n).pipe((0,h.U)(r=>[t,r]))))}function jt(e){return s=>s.pipe((0,U.z)((t,n)=>e(t,n).pipe((0,h.U)(()=>t))))}function wt(e){return s=>s.pipe((0,$.w)((t,n)=>e(t,n).pipe((0,h.U)(r=>[t,r]))))}function Mt(e){return s=>s.pipe((0,$.w)((t,n)=>e(t,n).pipe((0,h.U)(()=>t))))}function Ot(e){return s=>new u.Observable(t=>{const n=c=>e.run(()=>t.next(c)),r=c=>e.run(()=>t.error(c)),a=()=>e.run(()=>t.complete());return s.subscribe({next:n,error:r,complete:a})})}function _t(e){return s=>new u.Observable(t=>{const n=c=>e.runOutsideAngular(()=>t.next(c)),r=c=>e.runOutsideAngular(()=>t.error(c)),a=()=>e.runOutsideAngular(()=>t.complete());return s.subscribe({next:n,error:r,complete:a})})}var v=i(89387);class W{static initialize(){v.config({disableDefaultAlphabetLength:!0,disableDefaultIdLength:!0,idLength:7}),v.characters("0123456789abcdefghijklmnopqrstuvwxyz")}static generateUnique(s,t="",n="_"){const r=new RegExp(`^${t}`);return t+s.replace(r,"")+n+v.generate()}}W.initialize();const Lt=new o.InjectionToken("An abstraction over window.navigator object",{factory:()=>window.navigator,providedIn:"root"}),I=new o.InjectionToken("CURRENT_TAB_ID_TOKEN"),xt={provide:I,useValue:(0,_.generateGuid)()};function Ft(e,s){e=e.replace(/^#/,""),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let[t,n,r]=e.match(/.{2}/g);[t,n,r]=[parseInt(t,16),parseInt(n,16),parseInt(r,16)];const a=(t.length<2?"0":"")+t,c=(n.length<2?"0":"")+n,l=(r.length<2?"0":"")+r;return`rgba(${a},${c},${l},${s})`}const p=new o.InjectionToken("WindowToken",{providedIn:"root",factory:E});function E(){return window}const Nt={provide:p,useFactory:E};let Pt=(()=>{class e{constructor(t){this._window=t,this._hasFocus=!1,this._window.addEventListener("focus",()=>{this._hasFocus=!0}),this._window.addEventListener("blur",()=>{this._hasFocus=!1})}_getIsDocumentVisible(){return document.visibilityState!=="hidden"}get hasFocus(){return this._hasFocus}get isActive(){return this._getIsDocumentVisible()}focus(){this._window.focus()}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(p))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Dt=i(49651);let Bt=(()=>{class e{constructor(t){this._injector=t}defineComponent(t,n,r=null){const a=(0,Dt.createCustomElement)(n,{injector:r||this._injector});customElements.get(t)||customElements.define(t,a)}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(o.Injector))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Ut=i(27859),$t=i(4742),Wt=i(33569);let Zt=(()=>{class e extends Ut.wN{constructor(){super(...arguments),this.storedRouteHandles=new Map}_buildPathByParams(t){let n="";return(0,$t.Z)(t.params,r=>{n+=`${r}_`}),n}getPath(t){let n="";return t.data&&t.data.reusePath?t.data.reusePath:(t.routeConfig!=null&&t.routeConfig.path!=null&&(n=t.routeConfig.path),n)}shouldDetach(t){return!!(t.data&&t.data.shouldReuse)}store(t,n){this.storedRouteHandles.set(this.getPath(t),n)}shouldAttach(t){return this.storedRouteHandles.has(this.getPath(t))}retrieve(t){return this.storedRouteHandles.get(this.getPath(t))}shouldReuseRoute(t,n){const r=t.routeConfig===n.routeConfig;if(!r){const a=t.data||{},c=n.data||{};a.shouldReuse&&(a.reusePath=this._buildPathByParams(t)),c.shouldReuse&&(c.reusePath=this._buildPathByParams(n)),a.shouldReuse&&c.shouldReuse&&(this.storedRouteHandles.delete(this.getPath(t)),a.shouldReuse=!(0,Wt.Z)(n.params))}return r}}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.\u0275\u0275getInheritedFactory(e)))(n||e)}}(),e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();class Ht{constructor(s){this.newUrl=s,this.pop=!0,this.type="popstate"}}let kt=(()=>{class e extends A.LocationStrategy{constructor(){super(...arguments),this._internalBaseHref="/",this._internalPath="/",this._urlChanges=[],this._subject=new o.EventEmitter,this._stateChanges=[]}simulatePopState(t){this._internalPath=t,this._subject.emit(new Ht(this.path()))}path(t=!1){return this._internalPath}prepareExternalUrl(t){return t.startsWith("/")&&this._internalBaseHref.endsWith("/")?this._internalBaseHref+t.substring(1):this._internalBaseHref+t}pushState(t,n,r,a){this._stateChanges.push(t);const c=r+(a.length>0?"?"+a:"");this._internalPath=c;const l=this.prepareExternalUrl(c);this._urlChanges.push(l)}replaceState(t,n,r,a){this._stateChanges[(this._stateChanges.length||1)-1]=t;const c=r+(a.length>0?"?"+a:"");this._internalPath=c;const l=this.prepareExternalUrl(c);this._urlChanges.push("replace: "+l)}onPopState(t){this._subject.subscribe({next:t})}getBaseHref(){return this._internalBaseHref}back(){if(this._urlChanges.length>0){this._urlChanges.pop(),this._stateChanges.pop();const t=this._urlChanges.length>0?this._urlChanges[this._urlChanges.length-1]:"";this.simulatePopState(t)}}forward(){throw new Error("not implemented")}getState(){return this._stateChanges[(this._stateChanges.length||1)-1]}}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.\u0275\u0275getInheritedFactory(e)))(n||e)}}(),e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();function Gt(e,s){return e.creatio.tabId=s,(0,u.of)(void 0)}const Vt={provide:o.APP_INITIALIZER,multi:!0,useFactory:(e,s)=>()=>Gt(e,s),deps:[p,I]}},68211:()=>{}}]);