(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[6946],{6946:(q,M,h)=>{h.r(M),h.d(M,{AbstractHandler:()=>gt,AppRouteReuseStrategy:()=>b,BroadcastChannelFactory:()=>A,BroadcastChannelService:()=>J,CONTAINS_EMAIL_PATTERN:()=>C,CONTAINS_EMAIL_REGEXP:()=>f,CURRENT_TAB_ID_PROVIDER:()=>jt,CURRENT_TAB_ID_TOKEN:()=>B,CrtHandlerChainAdapter:()=>_t,CrtLibTranslateModule:()=>I,CustomElementsBootstrapService:()=>j,CustomEventApplicationIdToken:()=>x,CustomEventService:()=>g,CustomEventServiceToken:()=>p,DOM_PURIFIER:()=>tt,DOM_PURIFIER_DEFAULT_FORBID_CONTENTS:()=>Z,EMAIL_PATTERN:()=>o,EMAIL_REGEXP:()=>c,Factory:()=>S,FactoryProvider:()=>pt,I18N_TRANSLATES:()=>F,IdGenerator:()=>it,Inject:()=>ct,LoggerService:()=>R,NAVIGATOR:()=>Tt,NameGenerator:()=>Y,ObservableUtils:()=>lt,SpeechRecognitionFactory:()=>X,StorybookLibBadges:()=>ht,StorybookScopeBadges:()=>dt,TAB_ID_APP_INITIALIZER:()=>Lt,VoiceToTextApi:()=>_,WINDOW_PROVIDER:()=>wt,WINDOW_TOKEN:()=>D,WebComponentLocationStrategy:()=>E,WindowStateService:()=>T,concatMapWith:()=>yt,containsEmail:()=>v,emptyFn:()=>st,flattenObject:()=>G,getRandomArrayElement:()=>rt,hexToRGBA:()=>Ct,isEmailAddress:()=>m,mergeMapWith:()=>bt,mergeMapWithout:()=>Et,ngxTranslateExtract:()=>ot.marker,randomInt:()=>K,replaceSubstring:()=>mt,runInZone:()=>Rt,runOutsideZone:()=>St,splitAndReplaceSubstringToMacros:()=>Q,switchMapWith:()=>vt,switchMapWithout:()=>At,tapOnce:()=>It,toArray:()=>et,toObject:()=>nt,windowFactory:()=>$});var L=h(31134),a=h(94450),u=h(21322),d=h(27049);const x=new a.InjectionToken("CustomEventApplicationIdToken"),p=new a.InjectionToken("CustomEventServiceToken");class g{constructor(t,e=null){this.document=t,this.appId=e,this.customEventName="TSCustomEventChannel",this.appId=e||Math.random().toString()}subscribe(t){return this.customEventObserver$=this.customEventObserver$||(0,u.fromEvent)(document,this.customEventName),this.customEventObserver$.pipe((0,d.filter)(e=>e.detail.eventName===t&&e.detail.sender!==this.appId),(0,d.map)(e=>e.detail.payload))}createOutboundChannel(t){const e=new u.Subject;return e.asObservable().subscribe(s=>{const r=new CustomEvent(this.customEventName,{detail:{eventName:t,sender:this.appId,payload:s}});this.document.dispatchEvent(r)}),e}getDataViaEvent(t,e={}){return new u.Observable(s=>{this.subscribe(t).pipe((0,d.first)()).subscribe(r=>{s.next(r),s.complete()}),this.createOutboundChannel(t).next(e)})}getDataStreamViaEvent(t,e={}){return new u.Observable(s=>{const r=this.subscribe(t).subscribe(i=>{s.next(i)},u.noop,()=>s.complete());return this.createOutboundChannel(t).next(e),()=>{r.unsubscribe()}})}}g.\u0275fac=function(t){return new(t||g)(a.\u0275\u0275inject(L.DOCUMENT),a.\u0275\u0275inject(x,8))},g.\u0275prov=a.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac,providedIn:"root"});const Z=["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","title","video","xmp"];var H=h(89327),O=h.n(H);const C="[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9](?:[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9-]*[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9])?\\.)+[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9](?:[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9-]*[\u0430-\u044F\u0410-\u042Fa-zA-Z0-9])?",o=`(?=^.{1,250}$)^${C}$`,c=()=>new RegExp(o,"g"),f=()=>new RegExp(C,"g");function m(n){return c().test(n)}function v(n){return f().test(n)}const V={name:"uponSanitizeElement",func:(n,t)=>{const e=t.tagName;m(e)&&n.insertAdjacentText("afterbegin",`<${e}>`)}},tt=new a.InjectionToken("Represents a DOM purifier",{factory:()=>(O().addHook(V.name,V.func),O()),providedIn:"platform"});function et(n){return n?Array.isArray(n)?n:[n]:[]}function nt(n){return n||{}}function st(){}function G(n,t){const e={};for(const s in n)if(!!Object.prototype.hasOwnProperty.call(n,s))if(typeof n[s]=="object"&&n[s]!==null){const r=G(n[s],t);for(const i in r)!Object.prototype.hasOwnProperty.call(r,i)||(e[s+t+i]=r[i])}else e[s]=n[s];return e}var z=h(75378);function K(n,t=0){return Math.floor(Math.random()*(n-t))+t}function rt(n){z.ValidationUtilities.checkArrayEmpty("array",n);const t=K(n.length);return n[t]}var at=h(18877);class it{static generate(){return"_"+this.generateUUID()}static generateUUID(){return(0,at.Z)()}}var ot=h(67231);function ct(n){return(t,e,s)=>{for((t.$inject===void 0||t.$inject instanceof Array&&!t.hasOwnProperty("$inject"))&&(t.$inject=[]);t.$inject.length<=s;)t.$inject.push(null);t.$inject[s]=n||e}}class X{static create(t){return new t}}class _{constructor(){this.speechResult=new u.Subject,this.speechEnd=new u.Subject}static _getInternalApiClass(){return window.SpeechRecognition||window.webkitSpeechRecognition}static isSupported(){return _._getInternalApiClass()!==void 0}_subscribeEvents(){this._internalApi.addEventListener("result",this.onResult.bind(this)),this._internalApi.addEventListener("speechend",this.onSpeechEnd.bind(this))}_unsubscribeEvents(){this._internalApi.removeEventListener("result",this.onResult),this._internalApi.removeEventListener("speechend",this.onSpeechEnd)}init(t){const e=_._getInternalApiClass();this._internalApi=X.create(e),this._internalApi.continuous=!0,this._internalApi.lang=t.lang||"en-US",this._subscribeEvents()}onResult(t){const{resultIndex:e,results:s}=t,r=s[e][0];if(!r)throw new Error("No results to transcript");this.speechResult.next(r.transcript)}onSpeechEnd(){this.speechEnd.next()}destroy(){this._unsubscribeEvents(),this._internalApi=null}startRecognition(){this._internalApi.start()}stopRecognition(){this._internalApi.stop()}}_.\u0275fac=function(t){return new(t||_)},_.\u0275prov=a.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac});var ut=h(68108);class J{get messages$(){return this._messages$}constructor(t,e){this._ngZone=e;const s=new u.Subject;this._messages$=s.pipe(this._runInZone(this._ngZone)),this._broadcastChannel=new ut.BroadcastChannel(t),this._broadcastChannel.onmessage=r=>s.next(r)}_runInZone(t){return e=>new u.Observable(s=>{e.subscribe(r=>t.run(()=>s.next(r)))})}publish(t){return(0,u.from)(this._broadcastChannel.postMessage(t))}}class A{constructor(t){this._ngZone=t}createInstance(t){return new J(t,this._ngZone)}}A.\u0275fac=function(t){return new(t||A)(a.\u0275\u0275inject(a.NgZone))},A.\u0275prov=a.\u0275\u0275defineInjectable({token:A,factory:A.\u0275fac,providedIn:"root"});class lt{static toColdObservable(t){return new u.Observable(e=>{t().subscribe(r=>{e.next(r),e.complete()})})}}class R{log(t,e,...s){console.log(t,...s)}warn(t,e,...s){console.warn(t,...s)}error(t,e,...s){console.error(t,...s)}exception(t,e,...s){(console.exception||console.error)(t,...s)}}R.\u0275fac=function(t){return new(t||R)},R.\u0275prov=a.\u0275\u0275defineInjectable({token:R,factory:R.\u0275fac});const ht={dataAccess:"data-access",feature:"feature",ui:"ui",util:"util",components:"components",deprecated:"deprecated"},dt={studioFree:"studio-free",studioEnterprise:"studio-enterprise",sdk:"sdk"};class S{constructor(t,e,s=null){this._injector=t,this._registrationMap=e,this._defaultInstanceType=s}_getInstance(t,e){return e?"injectable"in e&&e.injectable!=null?this._injector.get(e.injectable):"useFactory"in e&&typeof e.useFactory=="function"?e.useFactory(t):"useValue"in e?e.useValue:null:null}_getDefaultInstance(t){return this._getInstance(t,this._defaultInstanceType)}_getInstanceByType(t){if(this._registrationMap.has(t)){const e=this._registrationMap.get(t);return this._getInstance(t,e)}}_getInstanceByPredicate(t){for(const[e,s]of this._registrationMap)if(typeof e=="function"&&e(t))return this._getInstance(t,s)}create(t=null){return t==null?this._getDefaultInstance(t):this._getInstanceByType(t)??this._getInstanceByPredicate(t)??this._getDefaultInstance(t)}}S.\u0275fac=function(t){a.\u0275\u0275invalidFactory()},S.\u0275prov=a.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac,providedIn:"root"});var w=h(97600);class pt{static _createMappings(t){const e=new Map;return t=t??[],t.forEach(s=>{const r=s.predicate,i=(0,w.omit)(s,"predicate");e.set(r,i)}),e}static create(t){const{mappings:e,default:s,token:r}=t??{};return{provide:r,useFactory:i=>{const l=this._createMappings(e);return new S(i,l,s)},deps:[a.Injector]}}}class gt{setNext(t){return this.nextHandler=t,t}handle(t){if(this.nextHandler)return this.nextHandler.handle(t)}}const F=new a.InjectionToken("I18nTranslatesToken");var N=h(77207);class y{constructor(t,e){this._translateService=t,this._i18nTranslates=e,this._destroyed$=new u.Subject,this._init()}_init(){this._subscribe(),this._initDefaultLanguage()}_initDefaultLanguage(){const t=this._translateService.currentLang,e=this._translateService.defaultLang,s=t||e;s&&this._addTranslates(s)}_subscribe(){(0,u.merge)(this._translateService.onLangChange,this._translateService.onDefaultLangChange).pipe((0,d.takeUntil)(this._destroyed$)).subscribe(t=>this._addTranslates(t.lang))}_addTranslates(t){const e=(0,w.uniq)(this._i18nTranslates),s=this._translateService.defaultLang;e.forEach(r=>{const i=r[t],l=r[s];this._translateService.setTranslation(t,i,!0),this._translateService.setTranslation(s,l,!0)})}ngOnDestroy(){this._destroyed$.next(),this._destroyed$.complete()}}y.\u0275fac=function(t){return new(t||y)(a.\u0275\u0275inject(N.TranslateService),a.\u0275\u0275inject(F))},y.\u0275prov=a.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac});class I{constructor(t){this._crtLibTranslateService=t}static forRoot(t){return{ngModule:I,providers:[{multi:!0,provide:F,useValue:t.i18n},y]}}}I.\u0275fac=function(t){return new(t||I)(a.\u0275\u0275inject(y))},I.\u0275mod=a.\u0275\u0275defineNgModule({type:I}),I.\u0275inj=a.\u0275\u0275defineInjector({imports:[N.TranslateModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&a.\u0275\u0275setNgModuleScope(I,{exports:[N.TranslateModule]})}();function P(n){return Array.isArray(n)?n:[n]}function ft(n,t){return t.forEach(({replaceMacros:e,replaceValue:s})=>{n=n.map(r=>r===e?s??"":r)}),n}function mt(n,t){if(!n)return"";if(!t)return n;let e=[n];return t=P(t),e=Q(e,t),e=ft(e,t),e.join("")}function Q(n,t){if(!n)return[];let e=P(n);if(!t)return e;const s=P(t),r=s.map(({replaceMacros:i})=>i);return s.forEach(({searchValue:i,replaceMacros:l})=>{if(i&&l){const k=new RegExp(`(${l})`,"g"),Ft=e.map(W=>r.includes(W)?W:W.split(i).join(l).split(k));e=(0,w.flatten)(Ft)}}),e}var Nt=h(90093);function _t(n){return function(t){Reflect.defineMetadata("requestType",n.requestType,t)}}function It(n){return t=>{const e=t.pipe((0,d.share)()),s=e.pipe((0,d.tap)(n),(0,d.take)(1));return(0,u.concat)(s,e)}}function yt(n){return t=>t.pipe((0,d.concatMap)((e,s)=>n(e,s).pipe((0,d.map)(r=>[e,r]))))}function bt(n){return t=>t.pipe((0,d.mergeMap)((e,s)=>n(e,s).pipe((0,d.map)(r=>[e,r]))))}function Et(n){return t=>t.pipe((0,d.mergeMap)((e,s)=>n(e,s).pipe((0,d.map)(()=>e))))}function vt(n){return t=>t.pipe((0,d.switchMap)((e,s)=>n(e,s).pipe((0,d.map)(r=>[e,r]))))}function At(n){return t=>t.pipe((0,d.switchMap)((e,s)=>n(e,s).pipe((0,d.map)(()=>e))))}function Rt(n){return t=>new u.Observable(e=>{const s=l=>n.run(()=>e.next(l)),r=l=>n.run(()=>e.error(l)),i=()=>n.run(()=>e.complete());return t.subscribe({next:s,error:r,complete:i})})}function St(n){return t=>new u.Observable(e=>{const s=l=>n.runOutsideAngular(()=>e.next(l)),r=l=>n.runOutsideAngular(()=>e.error(l)),i=()=>n.runOutsideAngular(()=>e.complete());return t.subscribe({next:s,error:r,complete:i})})}var U=h(11685);class Y{static initialize(){U.config({disableDefaultAlphabetLength:!0,disableDefaultIdLength:!0,idLength:7}),U.characters("0123456789abcdefghijklmnopqrstuvwxyz")}static generateUnique(t,e="",s="_"){const r=new RegExp(`^${e}`);return e+t.replace(r,"")+s+U.generate()}}Y.initialize();const Tt=new a.InjectionToken("An abstraction over window.navigator object",{factory:()=>window.navigator,providedIn:"root"}),B=new a.InjectionToken("CURRENT_TAB_ID_TOKEN"),jt={provide:B,useValue:(0,z.generateGuid)()};function Ct(n,t){n=n.replace(/^#/,""),n.length===3&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);let[e,s,r]=n.match(/.{2}/g);[e,s,r]=[parseInt(e,16),parseInt(s,16),parseInt(r,16)];const i=(e.length<2?"0":"")+e,l=(s.length<2?"0":"")+s,k=(r.length<2?"0":"")+r;return`rgba(${i},${l},${k},${t})`}const D=new a.InjectionToken("WindowToken",{providedIn:"root",factory:$});function $(){return window}const wt={provide:D,useFactory:$};class T{constructor(t){this._window=t,this._hasFocus=!1,this._window.addEventListener("focus",()=>{this._hasFocus=!0}),this._window.addEventListener("blur",()=>{this._hasFocus=!1})}_getIsDocumentVisible(){return document.visibilityState!=="hidden"}get hasFocus(){return this._hasFocus}get isActive(){return this._getIsDocumentVisible()}focus(){this._window.focus()}}T.\u0275fac=function(t){return new(t||T)(a.\u0275\u0275inject(D))},T.\u0275prov=a.\u0275\u0275defineInjectable({token:T,factory:T.\u0275fac,providedIn:"root"});var Mt=h(82275);class j{constructor(t){this._injector=t}defineComponent(t,e,s=null){const r=(0,Mt.createCustomElement)(e,{injector:s||this._injector});customElements.get(t)||customElements.define(t,r)}}j.\u0275fac=function(t){return new(t||j)(a.\u0275\u0275inject(a.Injector))},j.\u0275prov=a.\u0275\u0275defineInjectable({token:j,factory:j.\u0275fac,providedIn:"root"});var xt=h(57186);class b extends xt.RouteReuseStrategy{constructor(){super(...arguments),this.storedRouteHandles=new Map}_buildPathByParams(t){let e="";return(0,w.forEach)(t.params,s=>{e+=`${s}_`}),e}getPath(t){let e="";return t.data&&t.data.reusePath?t.data.reusePath:(t.routeConfig!=null&&t.routeConfig.path!=null&&(e=t.routeConfig.path),e)}shouldDetach(t){return!!(t.data&&t.data.shouldReuse)}store(t,e){this.storedRouteHandles.set(this.getPath(t),e)}shouldAttach(t){return this.storedRouteHandles.has(this.getPath(t))}retrieve(t){return this.storedRouteHandles.get(this.getPath(t))}shouldReuseRoute(t,e){const s=t.routeConfig===e.routeConfig;if(!s){const r=t.data||{},i=e.data||{};r.shouldReuse&&(r.reusePath=this._buildPathByParams(t)),i.shouldReuse&&(i.reusePath=this._buildPathByParams(e)),r.shouldReuse&&i.shouldReuse&&(this.storedRouteHandles.delete(this.getPath(t)),r.shouldReuse=!(0,w.isEmpty)(e.params))}return s}}b.\u0275fac=function(){let n;return function(e){return(n||(n=a.\u0275\u0275getInheritedFactory(b)))(e||b)}}(),b.\u0275prov=a.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac});class Ot{constructor(t){this.newUrl=t,this.pop=!0,this.type="popstate"}}class E extends L.LocationStrategy{constructor(){super(...arguments),this._internalBaseHref="/",this._internalPath="/",this._urlChanges=[],this._subject=new a.EventEmitter,this._stateChanges=[]}simulatePopState(t){this._internalPath=t,this._subject.emit(new Ot(this.path()))}path(t=!1){return this._internalPath}prepareExternalUrl(t){return t.startsWith("/")&&this._internalBaseHref.endsWith("/")?this._internalBaseHref+t.substring(1):this._internalBaseHref+t}pushState(t,e,s,r){this._stateChanges.push(t);const i=s+(r.length>0?"?"+r:"");this._internalPath=i;const l=this.prepareExternalUrl(i);this._urlChanges.push(l)}replaceState(t,e,s,r){this._stateChanges[(this._stateChanges.length||1)-1]=t;const i=s+(r.length>0?"?"+r:"");this._internalPath=i;const l=this.prepareExternalUrl(i);this._urlChanges.push("replace: "+l)}onPopState(t){this._subject.subscribe({next:t})}getBaseHref(){return this._internalBaseHref}back(){if(this._urlChanges.length>0){this._urlChanges.pop(),this._stateChanges.pop();const t=this._urlChanges.length>0?this._urlChanges[this._urlChanges.length-1]:"";this.simulatePopState(t)}}forward(){throw new Error("not implemented")}getState(){return this._stateChanges[(this._stateChanges.length||1)-1]}}E.\u0275fac=function(){let n;return function(e){return(n||(n=a.\u0275\u0275getInheritedFactory(E)))(e||E)}}(),E.\u0275prov=a.\u0275\u0275defineInjectable({token:E,factory:E.\u0275fac});function Dt(n,t){return n.creatio.tabId=t,(0,u.of)(void 0)}const Lt={provide:a.APP_INITIALIZER,multi:!0,useFactory:(n,t)=>()=>Dt(n,t),deps:[D,B]}},18877:(q,M,h)=>{h.d(M,{Z:()=>C});const a={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const d=new Uint8Array(16);function x(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(d)}const p=[];for(let o=0;o<256;++o)p.push((o+256).toString(16).slice(1));function g(o,c=0){return p[o[c+0]]+p[o[c+1]]+p[o[c+2]]+p[o[c+3]]+"-"+p[o[c+4]]+p[o[c+5]]+"-"+p[o[c+6]]+p[o[c+7]]+"-"+p[o[c+8]]+p[o[c+9]]+"-"+p[o[c+10]]+p[o[c+11]]+p[o[c+12]]+p[o[c+13]]+p[o[c+14]]+p[o[c+15]]}function Z(o,c=0){const f=g(o,c);if(!validate(f))throw TypeError("Stringified UUID is invalid");return f}const H=null;function O(o,c,f){if(a.randomUUID&&!c&&!o)return a.randomUUID();o=o||{};const m=o.random||(o.rng||x)();if(m[6]=m[6]&15|64,m[8]=m[8]&63|128,c){f=f||0;for(let v=0;v<16;++v)c[f+v]=m[v];return c}return g(m)}const C=O}}]);
