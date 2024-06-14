(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[2079,8239,5036,6118,7344,8160,1034,4775],{4775:(j,V,c)=>{c.r(V),c.d(V,{EntityRecordColumnType:()=>v,EntityRecordPrimaryValueType:()=>S,ExpressionEngineModule:()=>m,ExpressionEngineType:()=>g,ExpressionVariableAggregationType:()=>x,ExpressionVariableType:()=>f,RecordExpressionVariableType:()=>E});var v;(function(n){n.Column="Column",n.AggregationColumn="AggregationColumn"})(v||(v={}));var S;(function(n){n.Constant="Constant",n.Parameter="Parameter",n.SysSetting="SysSetting",n.SysValue="SysValue"})(S||(S={}));var g;(function(n){n.PowerFx="PowerFx"})(g||(g={}));var f;(function(n){n.SysSetting="SysSetting",n.SysValue="SysValue",n.Parameter="Parameter",n.Record="Record",n.Collection="Collection",n.EsqAggregation="EsqAggregation"})(f||(f={}));var E;(function(n){n.Entity="Entity",n.Custom="Custom"})(E||(E={}));var x;(function(n){n.None="None",n.Count="Count",n.Sum="Sum",n.Avg="Avg",n.Min="Min",n.Max="Max",n.TopOne="TopOne"})(x||(x={}));var d=c(74742),_=c(31134),s=c(75378);let p=class{convert(e,a){const r={type:"crt.ExecuteExpressionRequest",$context:a,metadata:e};return s.HandlerChainService.instance.process(r).then(t=>t?.result).catch(t=>(console.warn(t),null))}};p=(0,d.__decorate)([(0,s.CrtConverter)({type:"crt.ExecuteExpression"})],p);var i=c(8239),C=c(2876),u=c(21322),y=c(94450);class T{_getDataValueTypeName(e){switch(e){case s.DataValueType.FLOAT1:return"Float1";case s.DataValueType.FLOAT2:return"Float2";case s.DataValueType.FLOAT3:return"Float3";case s.DataValueType.FLOAT4:return"Float4";case s.DataValueType.FLOAT8:return"Float8";case s.DataValueType.CUSTOM_OBJECT:return"Object";case s.DataValueType.COMPOSITE_OBJECT_LIST:return"CompositeObjectList";default:return s.DataValueType[e]}}_getRequestParameterValueDto(e){const a=e.value;if(Array.isArray(a)){const r=a[0];return Array.isArray(r)?a.map(t=>t.map(o=>({...o,value:this._encodeValue(o.value,o.dataValueType),dataValueType:this._getDataValueTypeName(o.dataValueType)}))):a.map(t=>({...t,value:this._encodeValue(t.value,t.dataValueType),dataValueType:this._getDataValueTypeName(t.dataValueType)}))}return this._encodeValue(a,e.dataValueType)}_encodeValue(e,a){return[s.DataValueType.Date,s.DataValueType.Time,s.DataValueType.DateTime].includes(a)?(0,s.toLocalISOString)(e):e}decodeValue(e,a){return[s.DataValueType.Date,s.DataValueType.Time,s.DataValueType.DateTime].includes(a)?new Date(e):e}getExecutionMetadata(e){const a=e.parameters.map(t=>({...t,dataValueType:this._getDataValueTypeName(t.dataValueType),value:this._getRequestParameterValueDto(t)})),r=e.expressionVariables.map(t=>({...t,dataValueType:this._getDataValueTypeName(t.dataValueType)}));return JSON.stringify({...e,parameters:a,expressionVariables:r,resultDataValueType:this._getDataValueTypeName(e.resultDataValueType)})}}T.\u0275fac=function(e){return new(e||T)},T.\u0275prov=y.\u0275\u0275defineInjectable({token:T,factory:T.\u0275fac,providedIn:"root"});class h{constructor(e,a,r,t){this._httpClient=e,this._featureService=a,this._sysSettingsService=r,this._expressionMetadataAdapter=t,this._expressionEngineEndpoint="ServiceModel/ExpressionService.svc/Execute",this._expressionsEngineEndpoint="ServiceModel/ExpressionService.svc/ExecuteMany",this._defaultDebounceTime=200,this._defaultBundleCount=20,this._debounceTimeSysSettingName="ExpressionEngineDebounceTime",this._bundleCountSysSettingName="ExpressionEngineBundleCount",this._requests=new u.Subject}_executeImmediate(e){const a={metadata:e};return(0,u.lastValueFrom)(this._httpClient.post(this._expressionEngineEndpoint,a,{headers:new C.HttpHeaders({"Content-Type":"application/json"})}))}_getBundleSettings(){var e=this;return(0,i.Z)(function*(){const a=yield e._sysSettingsService.getByCodes([e._debounceTimeSysSettingName,e._bundleCountSysSettingName]),r=a.values[e._debounceTimeSysSettingName]?.value||e._defaultDebounceTime,t=a.values[e._bundleCountSysSettingName]?.value||e._defaultBundleCount;return{executionDebounceTime:r,bundleCount:t}})()}_prepareDebouncedResponsesStream(){var e=this;return(0,i.Z)(function*(){const{executionDebounceTime:a,bundleCount:r}=yield e._getBundleSettings();if(e._responses)return;const t=new u.BehaviorSubject(0),o=(0,u.merge)(t.pipe((0,u.filter)(l=>l>=r)),e._requests.pipe((0,u.tap)(()=>{t.next(t.value+1)}),(0,u.debounceTime)(a)));e._responses=e._requests.pipe((0,u.buffer)(o),(0,u.filter)(l=>!!l.length),(0,u.mergeMap)(l=>(t.next(0),e._httpClient.post(e._expressionsEngineEndpoint,l,{headers:new C.HttpHeaders({"Content-Type":"application/json"})}))),(0,u.share)())})()}_executeThrottled(e){var a=this;return(0,i.Z)(function*(){yield a._prepareDebouncedResponsesStream();const r=(0,s.generateGuid)(),t=(0,u.firstValueFrom)(a._responses.pipe((0,u.filter)(o=>o.some(l=>l.executionId===r)),(0,u.map)(o=>o.find(l=>l.executionId===r).result)));return a._requests.next({executionId:r,metadata:e}),t})()}safeExecute(e,a={immediate:!1}){var r=this;return(0,i.Z)(function*(){try{return yield r.execute(e,a)}catch(t){return{success:!1,errorInfo:t,result:null}}})()}execute(e,a={immediate:!1}){var r=this;return(0,i.Z)(function*(){let t;const o=r._expressionMetadataAdapter.getExecutionMetadata(e),l=yield r._featureService.getFeatureState("ExpressionEngineDisableBundling");if(a.immediate||l?t=yield r._executeImmediate(o):t=yield r._executeThrottled(o),!t.success){const b=t.errorInfo;return Promise.reject(`${b.errorCode} ${b.message}`)}return{...t,result:r._expressionMetadataAdapter.decodeValue(t.result,e.resultDataValueType)}})()}}h.\u0275fac=function(e){return new(e||h)(y.\u0275\u0275inject(C.HttpClient),y.\u0275\u0275inject(s.FeatureService),y.\u0275\u0275inject(s.SysSettingsService),y.\u0275\u0275inject(T))},h.\u0275prov=y.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac,providedIn:"root"});let M=class extends s.BaseRequest{constructor(){super(...arguments),this.type="crt.ExecuteExpressionRequest"}};M=(0,d.__decorate)([(0,s.CrtRequest)({type:"crt.ExecuteExpressionRequest"})],M);let D=class extends s.BaseRequestHandler{constructor(e){super(),this._engine=e}handle(e){return this._engine.execute(e.metadata)}};D=(0,d.__decorate)([(0,s.CrtRequestHandler)({type:"crt.ExecuteExpressionHandler",requestType:"crt.ExecuteExpressionRequest"}),(0,d.__metadata)("design:paramtypes",[h])],D);let m=class{};m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=y.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=y.\u0275\u0275defineInjector({providers:[h,T],imports:[_.CommonModule]}),m=(0,d.__decorate)([(0,s.CrtModule)({converters:[p],requestHandlers:[D]})],m),function(){(typeof ngJitMode>"u"||ngJitMode)&&y.\u0275\u0275setNgModuleScope(m,{imports:[_.CommonModule]})}()},8239:(j,V,c)=>{c.d(V,{Z:()=>S});function v(g,f,E,x,d,_,s){try{var p=g[_](s),i=p.value}catch(C){E(C);return}p.done?f(i):Promise.resolve(i).then(x,d)}function S(g){return function(){var f=this,E=arguments;return new Promise(function(x,d){var _=g.apply(f,E);function s(i){v(_,x,d,s,p,"next",i)}function p(i){v(_,x,d,s,p,"throw",i)}s(void 0)})}}}}]);