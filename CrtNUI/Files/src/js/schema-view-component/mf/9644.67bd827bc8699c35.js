(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[9644],{17016:(Ne,k,l)=>{l.r(k),l.d(k,{CommonExecutionDataCollectorService:()=>C,CompleteProcessElementHandler:()=>b,EXECUTION_DATA_INTERCEPTOR_PROVIDER:()=>U,ExecutionDataCollectorService:()=>x,ExecutionDataInterceptor:()=>f,ExecutionDataPreprocessor:()=>P,ObsoleteProcessExecutionDataCollectorService:()=>D,OpenProcessPageHandler:()=>j,OpenProcessPageRequest:()=>T,PROCESS_LISTENER_REGISTER_SERVICE_APP_INITIALIZER_PROVIDER:()=>J,ProcessListenerService:()=>S,ProcessModule:()=>h});var I=l(74742),B=l(31134),u=l(75378),p=l(33177),V=l(24709),_=l(8239),L=l(41307),g=l(49475),m=l(21322);let b=class extends u.BaseRequestHandler{constructor(e,t){super(),this._processEngineService=e,this._schemaParametersStore=t}handle(e){var t=this;return(0,_.Z)(function*(){const s=e.$context;if(yield(0,m.lastValueFrom)(s.save(g.PAGE_PARAMETERS_DATA_SOURCE_NAME,[])),(yield s.IsChanged)||!(yield s.isValid()))return{success:!1};const n={...t._schemaParametersStore.values,...e.parameterValues},o=e.outputParameterInfos;if(o)for(const a of o){const i=a.dataSourceName,d=a.dataSourceAttributeName,E=s.getViewModelAttributePath(i,d),y=yield s[E];n[a.parameterName]=y}return(0,m.lastValueFrom)(t._processEngineService.completeExecuting(e.processElementUId,n))})()}};b=(0,I.__decorate)([(0,u.CrtRequestHandler)({requestType:"crt.CompleteProcessElementRequest",type:"crt.CompleteProcessElementHandler"}),(0,I.__metadata)("design:paramtypes",[L.ProcessEngineService,V.SchemaParametersStore])],b);var A=l(2876),r=l(94450),H=l(77207),q=l(99293),v=l(34617),M=l(97600),R;(function(c){c[c.ElementExecutionData=0]="ElementExecutionData",c[c.CompletionData=1]="CompletionData"})(R||(R={}));class w{static _getExecutionData(e){const t=e?.executionData;return t?t[t.currentProcElUId]:null}static getExecutionDataFromState(e){const s=(0,v.getLastNestedChildState)(e)??e;return this._getExecutionData(s)}}class F{constructor(e,t){this._maxLength=e,this._isOnlyUniqueItems=t,this._tail=0,this._storage=new Array(this._maxLength)}pushItem(e){return this._isOnlyUniqueItems&&this.getIsItemExists(e)?!1:(this._storage[this._tail++]=e,this._tail===this._maxLength&&(this._tail=0),!0)}getIsItemExists(e){return Boolean(this._storage.indexOf(e)>=0)}clear(){this._storage.fill(void 0),this._tail=0}}class O{constructor(){this._buffer=new F(5e4,!0)}markAsCompleted(e){return this._buffer.pushItem(e)}getIsCompleted(e){return this._buffer.getIsItemExists(e)}}O.\u0275fac=function(e){return new(e||O)},O.\u0275prov=r.\u0275\u0275defineInjectable({token:O,factory:O.\u0275fac,providedIn:"root"});var N=l(27049);class f{constructor(){this._sessionId=(0,r.inject)(p.CURRENT_TAB_ID_TOKEN),this.executionDataInterceptedEvent$=new m.Subject}_getExecutionData(e){const t=e.headers.get("Creatio-ProcessEngine-ExecutionDataPath"),s=t!=null?e.body[t]:null;return s?{items:s}:null}intercept(e,t){var s=this;const n=e.clone({headers:e.headers.set("Creatio-ProcessEngine-CollectExecutionData","true").set("Creatio-ProcessEngine-SessionId",this._sessionId)});return t.handle(n).pipe((0,m.switchMap)(function(){var o=(0,_.Z)(function*(a){if(a instanceof A.HttpResponse){const i=s._getExecutionData(a);i&&(yield new Promise(d=>{i.onProcessed=d,s.executionDataInterceptedEvent$.next(i)}))}return a});return function(a){return o.apply(this,arguments)}}()))}ngOnDestroy(){this.executionDataInterceptedEvent$.complete()}shouldSkip(e){return Boolean(e?.sessionId)&&e.sessionId===this._sessionId}}f.\u0275fac=function(e){return new(e||f)},f.\u0275prov=r.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac,providedIn:"root"});const U={provide:A.HTTP_INTERCEPTORS,useExisting:f,multi:!0};class x{}class C{constructor(e,t,s,n){this._messageChannelService=e,this._executionDataInterceptor=t,this._windowStateService=s,this.executionDataReadyEvent$=new m.Subject,this._processEngineSender="ProcessEngine";const o=this._mapItemsToCollection.bind(this);this._subscription=(0,m.merge)(this._messageChannelService.messageEvent$.pipe((0,N.filter)(a=>a.header.sender===this._processEngineSender),(0,N.filter)(a=>a.body!=null),(0,N.filter)(a=>this._executionDataInterceptor.shouldSkip(a.body)?!1:this._windowStateService.isActive),(0,N.map)(a=>[a.body]),(0,N.map)(o)),this._executionDataInterceptor.executionDataInterceptedEvent$,n.subscribe("on7XProcessExecutionDataReady").pipe((0,N.map)(o))).subscribe(a=>this.executionDataReadyEvent$.next(a))}_mapItemsToCollection(e){return{items:e}}ngOnDestroy(){this._subscription?.unsubscribe(),this.executionDataReadyEvent$.complete()}publish(e){this.executionDataReadyEvent$.next({items:e.map(t=>({[t.procElUId]:t}))})}}C.\u0275fac=function(e){return new(e||C)(r.\u0275\u0275inject(g.MessageChannelService),r.\u0275\u0275inject(f),r.\u0275\u0275inject(p.WindowStateService),r.\u0275\u0275inject(p.CustomEventService))},C.\u0275prov=r.\u0275\u0275defineInjectable({token:C,factory:C.\u0275fac,providedIn:"root"});class S{constructor(e,t,s,n,o,a,i,d,E){this._executionDataCollector=e,this._navigationService=t,this._logger=s,this._completedElementsRegistry=n,this._translateService=o,this._userInfo=a,this._dialogService=i,this._crtZoneService=d,this._injector=E,this._isOpenBackgroundSignalProcessPagesEnabled=null,this._subscription=this._executionDataCollector.executionDataReadyEvent$.pipe((0,m.switchMap)(y=>this._handleExecutionDataItems(y))).subscribe()}get isOpenBackgroundSignalProcessPagesEnabled(){if(this._isOpenBackgroundSignalProcessPagesEnabled!==null)return this._isOpenBackgroundSignalProcessPagesEnabled;const t=this._injector.get(g.FEATURE_VALUES)?.["ProcessFeatures.OpenBackgroundSignalProcessPages"]??!1;return this._isOpenBackgroundSignalProcessPagesEnabled=t,t}_handleExecutionDataItems(e){var t=this;return(0,_.Z)(function*(){return t._crtZoneService.runInZone(v.NAVIGATION_ZONE_NAME,(0,_.Z)(function*(){try{yield t._handleProcessEngineMessages(e)}catch(s){t._logger.error(`Error while processing executionDataReadyEvent$: ${s}`,void 0,e,s)}e.onProcessed?.()}))})()}_getActiveElementExecutionData(){return w.getExecutionDataFromState(this._navigationService.getState())}_handleCompletionData(e){var t=this;return(0,_.Z)(function*(){const s=e.data,n=t._completedElementsRegistry.markAsCompleted(s.uId),o=t._getActiveElementExecutionData();if(!(!o||o.procElUId!==s.uId))if(t._userInfo.id!==s.performerId){const a="Dialog.ProcessElementCompletedNotification",i=yield(0,m.lastValueFrom)(t._translateService.get(a)),d=t._dialogService.openInfoDialog(i);yield(0,m.lastValueFrom)(d)}else n&&t._navigationService.back()})()}_handleProcessEngineMessages(e){var t=this;return(0,_.Z)(function*(){let s=null;const n=t.isOpenBackgroundSignalProcessPagesEnabled;for(const o of e.items)switch(o.type){case R.CompletionData:{const a=o;yield t._handleCompletionData(a);break}case void 0:case R.ElementExecutionData:{const a=o,i=t._findElementData(a);if(!i){t._logger.warn("Could not find process element data from message",a);break}const d=!a.isBackgroundMode||a.isBackgroundMode&&n&&i?.isProcessExecutedBySignal;!s&&d&&(s=i);break}default:t._logger.error("Unknown execution data item type",o.type)}if(!!s)return t._handleProcessExecutionData(s)})()}_handleProcessExecutionData(e){var t=this;return(0,_.Z)(function*(){const s=t._prepareNavigationConfig(e);s?yield t._navigationService.navigate(s):t._logger.warn(`Could not get navigationConfig for element ${e.procElUId}`,e)})()}_findElementData(e){const t=Object.keys(e).find(s=>(0,u.isGuid)(s)&&e[s].procElUId);return t?e[t]:null}_prepareNavigationConfig(e){const t=this._getActiveElementExecutionData();let s;if(e.navigationOptions)s=e.navigationOptions,delete e.navigationOptions;else{const o=this._prepareNavigationOptions(e);if(!o)return null;s=o}const n=e?.processId;return{mode:v.NavigationMode.Push,state:{executionData:{isOpened:!0,showNextPrcEl:!0,_forceReplaceHistoryState:!1,currentProcElUId:e.procElUId,[e.procElUId]:e},bypassPageOpeningRestrictions:!0,isProcessCardInChain:!0,isInChain:!0,moduleName:"ProcessCardModuleV2",replaceLastModuleInChain:Boolean(n)&&t?.processId===n},options:s}}_getIsEntityEditUserTask(e,t,s){return Boolean(e)&&(Boolean(s)||t)}_getNonEmptyId(...e){return e.find(t=>Boolean(t)&&!(0,u.isEmptyGuid)(t))}_getElementParameters(e){const t={};if(e.parameters){const s=(0,M.omit)(e.parameters,["Buttons"]);Object.entries(s).forEach(([n,o])=>{(!(0,u.isGuid)(o)||!(0,u.isEmptyGuid)(o))&&(t[n]=this._getConvertedValue(o))})}return t}_getConvertedValue(e){if(!e)return e;const t=e.dataValueType;return t&&(t===u.DataValueType.DateTime||t===u.DataValueType.Date||t===u.DataValueType.Time)?(0,g.parseDate)(e.value):e.value?e.value:e}_getAttributeDefValues(e){const t=e||{};return Object.keys(t).map(s=>{const n=t[s],o=this._getConvertedValue(n);return{attributeName:s,value:o}})}_prepareNavigationOptions(e){const t=e.entitySchemaName,s=this._getNonEmptyId(e.recordId,e.activityRecordId),n=Boolean(s),o=e.action,a=e.urlToken;if(a){const i=a.split("/")[1],d=this._getElementParameters(e);return{type:v.NavigationOptionsTypeEnum.Schema,schemaName:i,parameters:d,modelInitConfigs:e.modelInitConfigs}}else if(this._getIsEntityEditUserTask(t,n,o)){const i=this._getAttributeDefValues(e.defaultValues);return n&&i.push({attributeName:"Id",value:s}),{type:v.NavigationOptionsTypeEnum.Entity,action:o==="add"?u.ModelInPageAction.Add:u.ModelInPageAction.Edit,recordId:s,entityName:t,defaultValues:i,typeColumnValue:e.pageTypeId}}return null}ngOnDestroy(){this._subscription?.unsubscribe()}}S.\u0275fac=function(e){return new(e||S)(r.\u0275\u0275inject(x),r.\u0275\u0275inject(v.CrtNavigationService),r.\u0275\u0275inject(p.LoggerService),r.\u0275\u0275inject(O),r.\u0275\u0275inject(H.TranslateService),r.\u0275\u0275inject(g.UserInfo),r.\u0275\u0275inject(q.DialogService),r.\u0275\u0275inject(g.CrtZoneService),r.\u0275\u0275inject(r.Injector))},S.\u0275prov=r.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac,providedIn:"root"});const J={provide:r.APP_INITIALIZER,useFactory:()=>()=>{},deps:[S],multi:!0};class D{constructor(e,t){this._executionDataInterceptor=e,this._window=t}ngOnDestroy(){this._subscription?.unsubscribe()}init(){this._subscription=this._executionDataInterceptor.executionDataInterceptedEvent$.subscribe(e=>{(0,M.get)(this._window,"Terrasoft.ProcessExecutionDataCollector").add(e.items),e.onProcessed?.()})}}D.\u0275fac=function(e){return new(e||D)(r.\u0275\u0275inject(f),r.\u0275\u0275inject(p.WINDOW_TOKEN))},D.\u0275prov=r.\u0275\u0275defineInjectable({token:D,factory:D.\u0275fac,providedIn:"root"});let T=class extends u.BaseRequest{};T=(0,I.__decorate)([(0,u.CrtRequest)({type:"crt.OpenProcessPageRequest"})],T);let j=class extends u.BaseRequestHandler{constructor(e,t,s){super(),this._httpClient=e,this._executionDataCollectorService=t,this._logger=s}handle(e){var t=this;return(0,_.Z)(function*(){const s=yield(0,m.lastValueFrom)(t._httpClient.post("/ServiceModel/ProcessEngineService.svc/GetExecutionData",{elementUIds:[e.processElementUId]}));if(!s?.success){t._logger?.error(s);return}t._executionDataCollectorService.publish(s.batch.map(n=>JSON.parse(n.message)))})()}};j=(0,I.__decorate)([(0,u.CrtRequestHandler)({requestType:"crt.OpenProcessPageRequest",type:"crt.OpenProcessPageHandler"}),(0,I.__metadata)("design:paramtypes",[A.HttpClient,x,p.LoggerService])],j);class P{constructor(e){this._navigationService=e}_getExecutionDataFromState(){const e=this._navigationService.getState();return w.getExecutionDataFromState(e)}_assignDataSourceProperties(e,t,s){if(!e||!t)return;s.dataSourcesConfig?.forEach(o=>{const a=o.name||t,i=e[a];if(o.expectedTypes.indexOf(i.type)!==-1){const d=i.config;if(d)for(const[E,y]of Object.entries(o.config))d[E]=y;else i.config=o.config}})}_updateSaveButtonVisibility(e){const s=g.MetadataSchemaUtils.getViewConfigInfoByProperty("name","SaveButton",e.viewConfig).find(n=>n.viewConfig.type==="crt.Button");s&&(s.viewConfig.visible=!0)}_updateDataSourceProperties(e,t){if(e.dataSourcesConfig&&t.modelConfig){const s=t.modelConfig;this._assignDataSourceProperties(s.dataSources,s.primaryDataSourceName,e)}}_getCompleteProcessElementRequestConfig(e,t,s,n){const o={request:"crt.CompleteProcessElementRequest",params:{processElementUId:t}};return s&&(o.params.parameterValues={[s]:e.tag}),n&&(o.params.outputParameterInfos=n),o}_findButtonViewConfigInfo(e,t){return g.MetadataSchemaUtils.getViewConfigInfoByProperty("name",e,t).find(n=>n.viewConfig.type==="crt.Button")}_getButtonsViewConfigInfo(e){return g.MetadataSchemaUtils.getViewConfigInfoByProperty("type","crt.Button",e)}_updateButtonHandlerEvents(e,t,s){if(!t||!s)return;const n=t.viewConfig;let o=n[s],a;const i=this._getMaskRequestConfig(!0);o?(o=Array.isArray(o)?o:[o],o.push(e),a=[i,...o]):a=[i,e],n[s]=a,a.push(this._getMaskRequestConfig(!1))}_getIsRequestMatch(e,t,s){const n=Array.isArray(e);if(!s&&n)return!1;const a=(n?e:[e]).find(i=>i.request===t);return Boolean(a)}_updateButtonsHandlerEvents(e,t,s){const n=s.event,o=s.requestName||"",a=s.searchInMultipleRequests||!1;for(const i of t){const E=i.viewConfig?.[n];!E||!this._getIsRequestMatch(E,o,a)||this._updateButtonHandlerEvents(e,i,n)}}_updateButtonActions(e,t){if(!e.completionInfo)return;const s=e.completionInfo;for(const n of s.handlers){const o=this._getCompleteProcessElementRequestConfig(n,e.procElUId,s.parameterName,e.outputParameterInfos);if(n.name){const i=this._findButtonViewConfigInfo(n.name,t.viewConfig);this._updateButtonHandlerEvents(o,i,n.event);continue}if(!n.requestName)continue;const a=this._getButtonsViewConfigInfo(t.viewConfig);this._updateButtonsHandlerEvents(o,a,n)}}_getMaskRequestConfig(e){return{request:"crt.SchemaViewMaskRequest",params:{taskName:"process-interaction",action:e?u.SchemaViewMaskRequestAction.AddTask:u.SchemaViewMaskRequestAction.RemoveTask}}}crtOnMetaDataInit(e){const t=this._getExecutionDataFromState();if(t){const s=e;this._updateSaveButtonVisibility(s),this._updateDataSourceProperties(t,s),this._updateButtonActions(t,s)}return Promise.resolve(e)}crtGetIsPreventCaching(){const e=this._getExecutionDataFromState();return Promise.resolve(Boolean(e))}}P.\u0275fac=function(e){return new(e||P)(r.\u0275\u0275inject(v.CrtNavigationService))},P.\u0275prov=r.\u0275\u0275defineInjectable({token:P,factory:P.\u0275fac,providedIn:"any"});const Z=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Drugi korisnik je zavr\u0161io ovaj zadatak"}}'),G=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Egy m\xE1sik felhaszn\xE1l\xF3 elv\xE9gezte ezt a feladatot"}}'),$=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u5176\u5B83\u7528\u6237\u5DF2\u5B8C\u6210\u6B64\u4EFB\u52A1"}}'),z=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),K=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Nj\xEB p\xEBrdorues tjet\xEBr e ka p\xEBrfunduar k\xEBt\xEB detyre"}}'),W=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),X=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Q=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Y=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u304C\u3053\u306E\u30BF\u30B9\u30AF\u3092\u5B8C\u4E86\u3057\u307E\u3057\u305F"}}'),ee=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Un altro utente ha completato questa attivit\xE0"}}'),te=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),se=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D0\u05D7\u05E8 \u05D4\u05E9\u05DC\u05D9\u05DD \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D6\u05D5"}}'),oe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ne=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ae=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u0414\u0440\u0443\u0433 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u0435 \u0438\u0437\u043F\u044A\u043B\u043D\u0438\u043B \u0442\u0430\u0437\u0438 \u0437\u0430\u0434\u0430\u0447\u0430"}}'),ie=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),re=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ce=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Ein anderer Benutzer hat diese Aufgabe abgeschlossen"}}'),le=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ue=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Otro usuario ha completado esta tarea"}}'),de=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Un autre utilisateur a r\xE9alis\xE9 cette activit\xE9"}}'),pe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\uB2E4\uB978 \uC0AC\uC6A9\uC790\uAC00 \uC774 \uC791\uC5C5\uC744 \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4."}}'),me=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ge=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"En annen bruker har fullf\xF8rt denne oppgaven"}}'),fe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Outro usu\xE1rio concluiu esta tarefa"}}'),he=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Outro utilizador j\xE1 completou esta tarefa"}}'),_e=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Un alt utilizator a finalizat acest task"}}'),Ee=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 \u0443\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C"}}'),ve=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Ce=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Se=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u0414\u0430\u043D\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0432\u0436\u0435 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0435 \u0456\u043D\u0448\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C"}}'),Pe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Ie=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Oe={"hr-HR":Z,"hu-HU":G,"zh-CN":$,"tr-TR":z,"sq-AL":K,"pl-PL":W,"nl-NL":X,"kk-KZ":Q,"ja-JP":Y,"it-IT":ee,"id-ID":te,"he-IL":se,"fa-IR":oe,"en-GB":ne,"bg-BG":ae,"ar-SA":ie,"zh-TW":Ie,"vi-VN":Pe,"th-TH":Ce,"sv-SE":ve,"ro-RO":_e,"pt-PT":he,"pt-BR":fe,"no-NO":ge,"lv-LV":me,"ko-KR":pe,"fr-FR":de,"es-ES":ue,"de-DE":ce,"cs-CZ":re,"en-US":le,"uk-UA":Se,"ru-RU":Ee};let h=class{};h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=r.\u0275\u0275defineNgModule({type:h}),h.\u0275inj=r.\u0275\u0275defineInjector({providers:[U,J,{provide:x,useClass:C},p.CustomEventService,{provide:V.CRT_METADATA_NAVIGATION_PREPROCESSOR,useClass:P,multi:!0},p.LoggerService],imports:[B.CommonModule,p.CrtLibTranslateModule.forRoot({i18n:Oe})]}),h=(0,I.__decorate)([(0,u.CrtModule)({requestHandlers:[b,j]})],h),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(h,{imports:[B.CommonModule,p.CrtLibTranslateModule]})}()}}]);
