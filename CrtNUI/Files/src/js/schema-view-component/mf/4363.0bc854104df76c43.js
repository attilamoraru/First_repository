(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4363],{3272:(U,V,i)=>{i.d(V,{A:()=>I});var S=i(94450),u=i.n(S);const I=new S.InjectionToken("ROUTER_OUTLET_HISTORY_VIEW_LIMIT_TOKEN")},15915:(U,V,i)=>{i.d(V,{B:()=>M});var S=i(33177),u=i.n(S),I=i(49475),N=i.n(I),O=i(34617),R=i.n(O),g=i(97600),C=i.n(g),L=i(3272),m=i(32935),y=i(94450),A=i.n(y);class M{get lastTransition(){return this._lastTransition}get length(){return this._items.length}constructor(s,n,o){var c;this._window=s,this._featureValues=o,this._historyLimit=20,this._items=[],this._previous=-1,this._current=-1,n!==null&&(this._historyLimit=n),((c=this._window).__crtHistory??(c.__crtHistory=[])).push(this)}_assertIndexedState(s){if(!("historyIndex"in s)||isNaN(s.historyIndex))throw new Error("History state should have historyIndex.")}_enforceHistoryLimit(){for(let s=this._current+1;s<this._items.length;s++)this.destroy(s);for(let s=0;s<this._current-this._historyLimit;s++)this.destroy(s)}destroy(s){const n=this._items[s];n?.view&&(n.view.destroy(),n.view=null)}_hasChildrenState(s){const n=s.state;return!(0,g.isEmpty)(n.children)}_getRootViewForChildrenRouting(){let s=!0;const n=this._items[this._current].state;for(let o=this._current-1;o>=0;o--){const c=this._items[o];if((0,g.isEmpty)(c)||!s)return null;if((0,O.crtStatesEqual)(n,c.state)&&s&&!(0,g.isEmpty)(c?.view?.pageRef))return c.view;s=this._hasChildrenState(c)}return null}goTo(s){this._assertIndexedState(s),this._previous=this._current,this._current=s.historyIndex;const n=this._current<this._previous,o=n&&!this._items[this._current],c=this._current===this._previous,_=this._current>this._previous;this._lastTransition={isBack:n,isReplace:c,isPush:_},!(s.silent&&!s._internalNotSilentIn8x&&!n)&&(c&&this.destroy(this._previous),(o||c||_)&&(this._items[this._current]={state:s}),_&&this._items.splice(this._current+1),this._enforceHistoryLimit())}canRestoreView(){const n=this._getCurrentView()?.pageRef;return this._current<this._previous&&Boolean(n)}_getCurrentView(){const s=this._items[this._current],n=this._hasChildrenState(s);let o;return n&&(0,g.isEmpty)(s?.view?.pageRef)&&(o=this._getRootViewForChildrenRouting()),o?new m.f7(o.pageRef,s?.view?.modalRefs,o.schemaState,o.pageRefReusable,o.scrollPositions,this._featureValues):s?.view}getView(){if(!this.canRestoreView())throw new Error("Cannot restore view");return this._getCurrentView()}getViewByOffset(s){return this._items[this._current+s]?.view}validateBeforeStore(s){const n=this._items[this._current].view;if(n?.pageRef&&n?.pageRef!==s.pageRef)throw new Error("This history item already contain another view. If you want to change view, do replace history state first.")}storeView(s){this.validateBeforeStore(s),this._items[this._current].view=s}}M.\u0275fac=function(s){return new(s||M)(y.\u0275\u0275inject(S.WINDOW_TOKEN),y.\u0275\u0275inject(L.A,8),y.\u0275\u0275inject(I.FEATURE_VALUES))},M.\u0275prov=y.\u0275\u0275defineInjectable({token:M,factory:M.\u0275fac})},85431:(U,V,i)=>{i.d(V,{vq:()=>j,ex:()=>x});var S=i(27049);const u=1;class I{constructor(a,h){this._bindingContext=a,this._dataGridViewConfig=h}getViewModelItemsAttributeName(){const a=this._dataGridViewConfig.items;if(a&&typeof a=="string")return a.substring(u)}getViewModel(){return this._bindingContext.viewModel$.pipe((0,S.take)(1))}getDataSourceName(){return this.getViewModel().pipe((0,S.map)(a=>a.getBoundDataSourceName(this.getViewModelItemsAttributeName())))}}var N=i(41307),O=i(34038);const R="DisableCompiledCellView",g="EnableDataGridColumnEdit";function C(F){return F.getFeatureState(R).pipe((0,S.distinctUntilChanged)(),(0,S.map)(a=>!a))}const L={provide:O.USE_DATA_TABLE_COMPILED_CELLS_VIEW,useFactory:C,deps:[N.FeatureService]};var m=i(94450),y=i(14537);class A{resolve(a){return new I(a.get(y.BINDING_CONTEXT),a.get(y.VIEW_ELEMENT_CONFIG))}}A.\u0275fac=function(a){return new(a||A)},A.\u0275prov=m.\u0275\u0275defineInjectable({token:A,factory:A.\u0275fac,providedIn:"root"});var M=i(46338),D=i(21322);class s{constructor(a,h){this._featureService=a,this._rightsService=h}getFeatures(){return(0,D.forkJoin)([this._featureService.getFeatureState(M.DISABLE_DATA_GRID_EDITING_MODE_FEATURE_CODE),this._featureService.getFeatureState(g),this._rightsService.getCanExecuteOperation(M.CAN_CREATE_DEFAULT_GRID_SETTING_OPERATION_CODE)]).pipe((0,S.map)(([a,h,f])=>({rows:{toolbar:!0,numeration:!0,selection:{enable:!1,multiple:!1}},columns:{toolbar:!0,sorting:!0,resizing:!0,dragAndDrop:!0,editing:h,adding:!0},cells:{selection:!0},header:{visible:!0},operations:{canCreateDefaultGridSettings:f},editable:!a})))}}s.\u0275fac=function(a){return new(a||s)(m.\u0275\u0275inject(N.FeatureService),m.\u0275\u0275inject(N.RightsService))},s.\u0275prov=m.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"});let n={};const o={provide:O.DATA_GRID_FEATURES,useFactory:()=>n};class c{constructor(a){this._dataGridFeaturesService=a}init(){return this._dataGridFeaturesService.getFeatures().pipe((0,S.tap)(a=>n=a),(0,S.map)(()=>{}))}}c.\u0275fac=function(a){return new(a||c)(m.\u0275\u0275inject(s))},c.\u0275prov=m.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"});var _=i(8239),p=i(75378),v=i(49475),T=i(52045),B=i(24709),P=i(97600);class x extends M.BaseDataGridStateHandlerService{constructor(a,h,f,l,e,t,r){super(a),this._schemaPartsService=h,this._maskService=f,this._metadataModifierService=l,this._featureValues=e,this._dataGridDesignSettingsUpdater=t,this._dataGridActiveFolderDesignSettingsProvider=r}_getActiveFolderDataGridDesignSettings(a){return this.viewModel$.pipe((0,S.switchMap)(h=>this._dataGridActiveFolderDesignSettingsProvider.get({viewConfig:a,viewModel:h,metadata:this.schemaService.schema})))}_saveSettingsForFolder(a,h){const{columns:f,viewElementConfig:l}=h,e=(0,P.cloneDeep)(f),t=a.columns?.map(d=>d?.viewMetadata);this._metadataModifierService.revert(e),this._setColumnsCaptionResourceMacros(e,t);const r=this._dataGridDesignSettingsUpdater.updateColumns(a,e,l);return this.viewModel$.pipe((0,S.switchMap)(d=>this._dataGridActiveFolderDesignSettingsProvider.set({viewConfig:l,viewModel:d,metadata:this.schemaService.schema},r)),(0,S.switchMap)(()=>this._schemaPartsService.commit({silent:!1})),(0,S.map)(()=>{}))}_setColumnsCaptionResourceMacros(a,h){(a??[]).filter(f=>f&&!(0,v.isResourceMacros)(f.caption)).forEach(f=>{const l=this._getColumnCaptionResourceKey(f,h);f.caption=(0,v.toResourceMacros)(l)})}_getColumnCaptionResourceKey(a,h){const f=h?.find(t=>t?.id&&t.id===a.id),l=(0,v.extractResourcesKey)(f?.caption),e=(0,O.createDataGridColumnCaptionResourceKey)(a);return l||e}_saveSettingsToProfile(a){var h=this;const f=(0,P.cloneDeep)(a?.columns),l=a?.previousColumns,t=f?.length!==l?.length||f?.some(r=>r.changed);return(0,D.from)(this._schemaPartsService.apply(function(){var r=(0,_.Z)(function*([d,E]){h._updateDataSourceAttributes(a,d),h._updateViewModelAttributes(a,d),h._updateViewItem(a,d),t&&(yield h._updateLocalizations(a,E)),yield h._clearDeletedColumnsResources(a,E)});return function(d){return r.apply(this,arguments)}}())).pipe((0,S.switchMap)(()=>this._schemaPartsService.commit({silent:t===!1})),(0,S.map)(()=>{}))}_updateDataSourceAttributes(a,h){const{columns:f,dataSourceName:l}=a;if(f.length===0)return;const e=f.filter(E=>E.columnType!=="tools").map(E=>E.code.split(`${l}_`).pop()),r=(0,P.uniq)(e).map(E=>{const w=f.find(z=>z.code===`${l}_${E}`);if(!w)return;let G;w.aggregationConfig?.aggregationFunction&&(G=p.DataSchemaAttributeType.AggregationAttribute);const W=w.code.split(`${l}_`).pop(),H=w.path||W,k=(0,P.cloneDeep)(w.aggregationConfig);return{name:W,path:H,type:G,aggregationConfig:k,caption:w.caption}}),d=h.getEntityDataSourceConfigService(l);d&&d.setAttributes(r).apply()}_updateViewItem(a,h){const{viewElementConfig:f,columns:l,previousColumns:e}=a,r=h.getViewConfigInfoByName(f.name).viewConfig,d=l.map(E=>(0,P.omit)((0,P.cloneDeep)(E),["path","referenceSchemaName","aggregationConfig","originalCaption","captionResources","captionResourcesChanged"]));this._metadataModifierService.revert(d),this._setColumnsCaptionResourceMacros(d,e),r.columns=d}_updateViewModelAttributes(a,h){const{viewElementConfig:f,columns:l,dataSourceName:e}=a,r=f.items.toString().split("$").pop(),d=l.filter(w=>w.columnType!=="tools").map(w=>w.code).map(w=>(0,v.removeSpecialSymbols)(w)).map(w=>w.split(`${e}_`).pop());f.primaryColumnName&&d.push(f.primaryColumnName.split(`${e}_`).pop());const E=(0,P.uniq)(d);h.bindViewModelAttributeCollection(r,e,E,`${e}_`,T.ApplyChangedPropertyStrategy.Override)}_updateLocalizations(a,h){var f=this;return(0,_.Z)(function*(){const l={localizableStrings:{}},t=a.columns.filter(r=>r.captionResourcesChanged);t.filter(r=>r?.captionResources?.length).forEach(r=>{const d=f._getColumnCaptionResourceKey(r,a.previousColumns),E=(0,v.toResourceLocalizableStrings)(r.captionResources,d);(0,P.merge)(l.localizableStrings,E)}),t.length!==0&&(f._maskService.showBodyMask(),yield h?.upsertResources(l),f._maskService.hideBodyMask())})()}_clearDeletedColumnsResources({columns:a,previousColumns:h},f){return(0,_.Z)(function*(){if(!(a?.length<h?.length))return;const t={localizableStrings:(0,P.differenceBy)(h,a,r=>r.id).reduce((r,{code:d})=>({...r,[d]:void 0}),{})};yield f.upsertResources(t)})()}innerHandle(a){return this._featureValues.DisableDataGridSettingsByFolders?this._saveSettingsToProfile(a):this._getActiveFolderDataGridDesignSettings(a.viewElementConfig).pipe((0,S.switchMap)(h=>h?this._saveSettingsForFolder(h,a):this._saveSettingsToProfile(a)))}handle(a,h){return super.handle({...a},h)}}x.\u0275fac=function(a){return new(a||x)(m.\u0275\u0275inject(T.SchemaService),m.\u0275\u0275inject(T.SchemaPartsService),m.\u0275\u0275inject(p.MaskService),m.\u0275\u0275inject(B.MetadataModifierService),m.\u0275\u0275inject(v.FEATURE_VALUES),m.\u0275\u0275inject(O.DataGridDesignSettingsUpdater),m.\u0275\u0275inject(O.DataGridActiveFolderDesignSettingsProvider))},x.\u0275prov=m.\u0275\u0275defineInjectable({token:x,factory:x.\u0275fac});var b=i(74742);function K(F){return()=>(0,D.lastValueFrom)(F.init(),{defaultValue:null})}let j=class{};j.\u0275fac=function(a){return new(a||j)},j.\u0275mod=m.\u0275\u0275defineNgModule({type:j}),j.\u0275inj=m.\u0275\u0275defineInjector({providers:[o,L,{provide:m.APP_INITIALIZER,useFactory:K,deps:[c],multi:!0}],imports:[M.CrtDataGridCdkModule,O.CrtDataGridToolbarModule]}),j=(0,b.__decorate)([(0,p.CrtModule)({includes:[M.CrtDataGridCdkModule]})],j),function(){(typeof ngJitMode>"u"||ngJitMode)&&m.\u0275\u0275setNgModuleScope(j,{imports:[M.CrtDataGridCdkModule],exports:[O.CrtDataGridToolbarModule]})}()},32935:(U,V,i)=>{i.d(V,{aK:()=>u,Hi:()=>S,HO:()=>L,TV:()=>g,pb:()=>R,dh:()=>C,Vr:()=>M,f7:()=>N});class S{constructor(s){s&&(this.title=s.title,this.schemaName=s.schemaName)}}class u{}var I=i(21322);class N{constructor(s=null,n=new Map,o=s?.instance?.schemaState,c=!1,_=s?.instance?.scrollPositions,p={}){this.pageRef=s,this.modalRefs=n,this.schemaState=o,this.pageRefReusable=c,this.scrollPositions=_,this._featureValues=p,this.isDestroyed=!1}_destroyModalViews(){const s=this?.modalRefs;s?.size&&(Array.from(s.values()).forEach(n=>n.close()),this.modalRefs.clear())}destroy(){this._destroyModalViews(),this.pageRefReusable?(this.pageRef?.instance?.schemaComponent?.clearResources(this.schemaState.viewModel),this.schemaState.viewModel?.destroy().pipe((0,I.take)(1)).subscribe(),this.schemaState.viewModel=null,this.schemaState.models=null,this.schemaState=null):(this.pageRef?.instance?.schemaComponent?.schemaState?.viewModel?.destroy().pipe((0,I.take)(1)).subscribe(),this.pageRef?.destroy(),this.pageRef?.hostView?.destroy(),this.pageRef=null),this.isDestroyed=!0}get viewModel(){return this._featureValues?.UseSchemaOutletReuseViewStrategy?this?.schemaState?.viewModel:this?.pageRef?.instance?.schemaState?.viewModel}}var O=i(94450),R;(function(D){D.LookupValues="lookupValues",D.Filter="filter"})(R||(R={}));const g=R.LookupValues;var C;(function(D){D[D.Legacy=0]="Legacy",D[D.New=1]="New"})(C||(C={}));const L=new O.InjectionToken("PageLookupDataToken");var m=i(8239),y=i(75378),A=i(97600);class M{get canceled(){return this._canceled}get filter(){return this._filter}constructor(s){this._cachedLookupValues=[],this._entityName=s?.entityName,this._selectionState=s?.selectionState,this._filter=s?.filter,this._cachedLookupValues=s?.cachedLookupValues??[],this._canceled=s?.canceled??!1}_getFilterByPrimaryValues(s,n){const o=new y.EntitySchemaQuery("tempTable"),c=new y.ColumnExpression({columnPath:s}),_=n.map(T=>new y.ParameterExpression({value:T})),p=new y.InFilter(y.ComparisonType.Equal,c,_);return o.filters.add(p),o.getMetadata().filters}_loadLookupValues(s,n,o,c){return(0,m.Z)(function*(){const{primaryAttributeName:_,primaryDisplayAttributeName:p,primaryColorAttributeName:v}=n,T=[_,p,v].filter(Boolean);return(yield s.load({attributes:T,parameters:[{type:y.ModelParameterType.Filter,value:o}],options:c?{pagingConfig:c}:{}})).map(P=>({value:P[_],displayValue:P[p],primaryColorValue:P[v]}))})()}_loadLookupValuesByPrimaryValues(s,n){var o=this;return(0,m.Z)(function*(){if(!n.length)return[];const c=yield y.Model.create(s),_=yield c.getSchema(),p=o._getFilterByPrimaryValues(_.primaryAttributeName,n);return o._loadLookupValues(c,_,p)})()}_isCached(s){return this._cachedLookupValues.some(n=>n.value===s)}getLookupValues(s){var n=this;return(0,m.Z)(function*(){if(!n._selectionState||n.canceled)return[];const o=s?.pagingConfig;if(n._selectionState?.type==="specific"){let c;(0,A.isUndefined)(o?.rowsOffset)||(0,A.isUndefined)(o?.rowCount)?c=[...n._selectionState.selected]:c=n._selectionState.selected.slice(o?.rowsOffset,o?.rowsOffset+o?.rowCount);const _=c.filter(v=>!n._isCached(v)),p=yield n._loadLookupValuesByPrimaryValues(n._entityName,_);return c.map(v=>n._cachedLookupValues.find(T=>T.value===v)||p.find(T=>T.value===v))}else{const c=yield y.Model.create(n._entityName),_=yield c.getSchema();return n._loadLookupValues(c,_,n._filter,o)}})()}}},491:(U,V,i)=>{i.d(V,{jZ:()=>b,SX:()=>L,j_:()=>c,Tx:()=>f,b:()=>B,zi:()=>o,jW:()=>p,mJ:()=>_,dO:()=>P,am:()=>K.a,Gm:()=>C,F$:()=>j.F,Lu:()=>j.L,Q1:()=>T,N1:()=>m,FL:()=>M,Wn:()=>h});var S=i(2876),u=i(94450),I=i(75378),N=i(77207),O=i(49475),R=i(97600),g=i(21322),C;(function(l){l[l.AddRelatedRecords=0]="AddRelatedRecords",l[l.RemoveRelatedRecords=1]="RemoveRelatedRecords"})(C||(C={}));class L{constructor(){this._translateService=(0,u.inject)(N.TranslateService),this._httpClient=(0,u.inject)(S.HttpClient),this._userInfo=(0,u.inject)(O.UserInfo)}get _relatedInMainRecordsServiceEndpoint(){return(this._userInfo.isSSP?"ssp/":"")+`rest/${this.relatedInMainRecordsServiceName}/`}_isInvalidParameters(e){return(0,R.isEmpty)(e.relatedRecordsSchemaName)||(0,R.isEmpty)(e.relatedInMainRecordsSchemaName)||(0,R.isEmpty)(e.relatedRecordColumnName)||(0,R.isEmpty)(e.mainRecordColumnName)||!this._isValidFilters(e.relatedRecordsFilters)||!this._isValidFilters(e.mainRecordsFilters)}_isValidFilters(e){return(0,R.isObject)(e)&&"items"in e&&!(0,R.isEmpty)(e.items)}_catchHttpErrorResponse(e){return(0,g.of)({success:!1,message:e.error?.errorInfo?.message??e.message})}_createEsqWithFilters(e,t){const r=new I.EntitySchemaQuery(e);return this._addFiltersToEsq(r,t),r}_addFiltersToEsq(e,t){Object.entries(t.items).forEach(([r,d])=>{e.filters.add(d,r)})}getServiceResultMessage(e,t,r){if(e.success){const d=this.relatedRecordsActionsNames.get(t);return this._translateService.instant(`${this.relatedInMainRecordsServiceName}.ServiceResult.${d}${r}`,{count:(0,R.get)(e,"processedRecordsCount",null)})}return e.errorInfo?.message||this._translateService.instant("BaseRelatedInMainRecordsService.ServiceResult.ErrorMessage")}executeAction(e,t){return this._isInvalidParameters(t)?(0,g.of)({success:!1,message:this._translateService.instant("BaseRelatedInMainRecordsService.NotValidParametersMessage")}):this.process(e,t)}process(e,t){const r=this.createRelatedRecordsEsq(t),d=this.createMainRecordsEsq(t),E=this.createRequest(r,d,t);return this.callService(e,E,t)}createRelatedRecordsEsq(e){return this._createEsqWithFilters(e.relatedRecordsSchemaName,e.relatedRecordsFilters)}createMainRecordsEsq(e){return this._createEsqWithFilters(e.mainRecordsSchemaName,e.mainRecordsFilters)}callService(e,t,r){const d=this.relatedRecordsActionsNames.get(e);return this._httpClient.post(`${this._relatedInMainRecordsServiceEndpoint}${d}`,{request:t}).pipe((0,g.map)(E=>({success:E.success,message:this.getServiceResultMessage(E,e,"Message")})),(0,g.catchError)(E=>this._catchHttpErrorResponse(E)))}addRelatedRecords(e){return this.executeAction(C.AddRelatedRecords,e)}removeRelatedRecords(e){return this.executeAction(C.RemoveRelatedRecords,e)}}class m extends L{constructor(){super(...arguments),this.relatedInMainRecordsServiceName="StaticFolderService",this.relatedRecordsActionsNames=new Map([[C.AddRelatedRecords,"AddRecords"],[C.RemoveRelatedRecords,"RemoveRecords"]])}createRequest(e,t,r){return{recordsEsqSerialized:JSON.stringify(e.getMetadata()),foldersEsqSerialized:JSON.stringify(t.getMetadata()),recordInFolderRecordsSchemaName:r.relatedInMainRecordsSchemaName,recordColumnName:r.relatedRecordColumnName,folderColumnName:r.mainRecordColumnName,defaultValues:r.defaultValues?JSON.stringify(r.defaultValues):null}}}m.\u0275fac=function(){let l;return function(t){return(l||(l=u.\u0275\u0275getInheritedFactory(m)))(t||m)}}(),m.\u0275prov=u.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac});var y=i(41307),A=i(6523);class M extends L{constructor(){super(...arguments),this._featureValues=(0,u.inject)(O.FEATURE_VALUES),this._processEngineService=(0,u.inject)(y.ProcessEngineService),this._queryExecutor=(0,u.inject)(A.QueryExecutor),this._disableAsyncTaggingFeatureName="DisableAsyncTagging",this._taggingProcessName="TaggingProcess",this._syncRequestMaxRecordsCount=200,this.relatedInMainRecordsServiceName="TaggingService",this.relatedRecordsActionsNames=new Map([[C.AddRelatedRecords,"AddTags"],[C.RemoveRelatedRecords,"RemoveTags"]])}_isDisabledAsyncTagging(){return!!this._featureValues[this._disableAsyncTaggingFeatureName]}_callProcess(e,t){const r=this._createProcessParameters(e,t);return this._processEngineService.executeProcessByName(this._taggingProcessName,r).pipe((0,g.map)(d=>({success:d.success,message:super.getServiceResultMessage(d,e,"SuccessfulRunProcess")})))}_createProcessParameters(e,t){return{TaggingAction:this.relatedRecordsActionsNames.get(e),RecordsEsqSerialized:t.recordsEsqSerialized,TagsEsqSerialized:t.tagsEsqSerialized,TagInRecordSchemaName:t.tagInRecordSchemaName,RecordColumnName:t.recordColumnName,TagColumnName:t.tagColumnName,DefaultValues:t.defaultValues}}_getRecordsCount(e){const t=this.createRelatedRecordsEsq(e);this._addRowCountToEsq(t);const r=this.createMainRecordsEsq(e);return this._addRowCountToEsq(r),(0,g.forkJoin)([this._getEsqRecordsCount(t),this._getEsqRecordsCount(r)]).pipe((0,g.map)(([d,E])=>d*E))}_addRowCountToEsq(e){e.rowCount=this._syncRequestMaxRecordsCount+1}_getEsqRecordsCount(e){return this._queryExecutor.executeSelectQuery(e).pipe((0,g.map)(t=>t.length))}_isNeedCallService(e){return this._isDisabledAsyncTagging()?(0,g.of)(!0):this._getRecordsCount(e).pipe((0,g.map)(t=>t<=this._syncRequestMaxRecordsCount))}createRequest(e,t,r){return{recordsEsqSerialized:JSON.stringify(e.getMetadata()),tagsEsqSerialized:JSON.stringify(t.getMetadata()),tagInRecordSchemaName:r.relatedInMainRecordsSchemaName,recordColumnName:r.relatedRecordColumnName,tagColumnName:r.mainRecordColumnName,defaultValues:r.defaultValues?JSON.stringify(r.defaultValues):null}}callService(e,t,r){return this._isNeedCallService(r).pipe((0,g.switchMap)(d=>d?super.callService(e,t,r):this._callProcess(e,t)))}}M.\u0275fac=function(){let l;return function(t){return(l||(l=u.\u0275\u0275getInheritedFactory(M)))(t||M)}}(),M.\u0275prov=u.\u0275\u0275defineInjectable({token:M,factory:M.\u0275fac});var D=i(8239),s=i(27049),n=i(32935);const o="Desktop",c="CrtCurrentDesktop";class _{constructor(e,t,r,d){this._queryExecutor=e,this._sysSettingsService=t,this._rightsService=r,this._userProfileService=d,this._canEditDesktopOperationName="CanManageSolution",this._currentDesktopSchemaNameInitialized=!1,this._canEditDesktopSchemaInitialized=!1,this._canEditDesktopSchema=!1}_convertToDesktops(e,t){const r=t.get("schemaName"),d=t.get("title");return e.map(E=>new n.Hi({schemaName:E[r],title:E[d]}))}_requestDesktopSysSetting(){return(0,g.lastValueFrom)(this._sysSettingsService.getValueByCode(c,""))}_requestDesktopProfileSettings(){return(0,g.lastValueFrom)(this._userProfileService.getProfile(c))}getCurrentDesktopSchemaName(){var e=this;return(0,D.Z)(function*(){if(!e._currentDesktopSchemaNameInitialized){let t=yield e._requestDesktopProfileSettings();(0,R.isEmpty)(t)&&(t=yield e._requestDesktopSysSetting()),e._currentDesktopSchemaName=t,e._currentDesktopSchemaNameInitialized=!0}return e._currentDesktopSchemaName})()}getUserDesktops(){const e=new Map([["schemaName","DesktopSchemaName"],["title","Title"]]),t=new I.EntitySchemaQuery(o);return t.addSchemaColumn(e.get("schemaName")),t.addSchemaColumn(e.get("title")),(0,g.firstValueFrom)(this._queryExecutor.executeSelectQuery(t).pipe((0,g.map)(r=>this._convertToDesktops(r,e))))}setCurrentDesktop(e){var t=this;return(0,D.Z)(function*(){const r=e?e.schemaName:null;t._currentDesktopSchemaName=r,yield(0,g.firstValueFrom)(t._userProfileService.saveProfile(c,r))})()}canEditDesktop(){return this._canEditDesktopSchemaInitialized?Promise.resolve(this._canEditDesktopSchema):(0,g.lastValueFrom)(this._rightsService.getCanExecuteOperation(this._canEditDesktopOperationName).pipe((0,s.tap)(e=>{this._canEditDesktopSchema=e,this._canEditDesktopSchemaInitialized=!0})))}}_.\u0275fac=function(e){return new(e||_)(u.\u0275\u0275inject(A.QueryExecutor),u.\u0275\u0275inject(y.SysSettingsService),u.\u0275\u0275inject(y.RightsService),u.\u0275\u0275inject(y.UserProfileService))},_.\u0275prov=u.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac,providedIn:"root"});class p{constructor(){this._repository=new Map}set(e,t){this._repository.set(e,t)}get(e){return this._repository.get(e)}getAll(){return Array.from(this._repository.values())}}p.\u0275fac=function(e){return new(e||p)},p.\u0275prov=u.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"});var v=i(24709);class T extends v.DataSourceFactoryService{constructor(e,t,r){super(t,r),this._dataSourceRepository=e}create(e,t,r){return super.create(e,t,r).pipe((0,s.tap)(d=>{this._dataSourceRepository.set(e,d)}))}}T.\u0275fac=function(e){return new(e||T)(u.\u0275\u0275inject(p),u.\u0275\u0275inject(u.Injector),u.\u0275\u0275inject(v.DataSourceTypeResolver))},T.\u0275prov=u.\u0275\u0275defineInjectable({token:T,factory:T.\u0275fac});class B{constructor(e){this._configurationDataService=e}getConfigurationStructure(){return this._configurationDataService.getData(!0).pipe((0,g.map)(e=>{if(!e.success)throw new Error(e.errorInfo.message);return e.data}))}}B.\u0275fac=function(e){return new(e||B)(u.\u0275\u0275inject(y.ConfigurationDataService))},B.\u0275prov=u.\u0275\u0275defineInjectable({token:B,factory:B.\u0275fac,providedIn:"any"});class P extends O.BaseFileUploadProcessingService{constructor(e,t){super(e,t)}createFileErrorMessageForLogs(e){return super.createFileErrorMessageForLogs(e)}processSelectedFiles(e,t){var r=()=>super.processSelectedFiles,d=this;return(0,D.Z)(function*(){return r().call(d,e,t)})()}}P.\u0275fac=function(e){return new(e||P)(u.\u0275\u0275inject(N.TranslateService),u.\u0275\u0275inject(I.SysSettingsService))},P.\u0275prov=u.\u0275\u0275defineInjectable({token:P,factory:P.\u0275fac,providedIn:"root"});var x=i(34617);class b{getDefaultAppearanceSettings(e){return(0,g.from)(x.NavigationUtils.isMiniPage(e)).pipe((0,g.map)(t=>({modalSettings:{size:t?O.ModalSize.Small:O.ModalSize.ExtraLarge}})))}}var K=i(39630),j=i(76596),F=i(33177),a=i(15915);class h extends v.ViewModelDataDelayer{constructor(e,t,r,d){super(),this._crtRouter=e,this._routerOutletHistory=t,this._featureValues=r,this._window=d,this._disableDelayingModelEventsFeatureName="DisableDelayingModelEvents",this._disableDelayingModelsEventFeatureState=!1,this._disableOffsetForDelayingModelEventsFeatureName="DisableOffsetForDelayingModelEvents",this._disableOffsetForDelayingModelEventsFeatureState=!1,this._defaultViewLoadingOffset=-1,this._subscriptions=new g.Subscription,this._loadTriggerSubject=new g.Subject,this.loadTrigger$=this._loadTriggerSubject.asObservable(),this._isAngularHost=(0,R.get)(this._window,"Terrasoft")?.isAngularHost,this._isAngularHost&&(this._initFeatureStates(),this._disableDelayingModelsEventFeatureState||this._subscribeOnNavigation())}setViewModel(e){this._viewModel||(this._viewModel=e)}_initFeatureStates(){this._disableDelayingModelsEventFeatureState=this._featureValues[this._disableDelayingModelEventsFeatureName]??!1,this._disableDelayingModelsEventFeatureState||(this._disableOffsetForDelayingModelEventsFeatureState=this._featureValues[this._disableOffsetForDelayingModelEventsFeatureName]??!1),this._viewLoadingOffset=this._disableOffsetForDelayingModelEventsFeatureState?0:this._defaultViewLoadingOffset}_shouldLoadForModals(e,t){return e&&e.modalRefs?Array.from(e.modalRefs.values()).some(r=>r?.componentInstance?.page?.schemaState?.viewModel===t):!1}_shouldLoadForPage(e,t){return e?.viewModel===t}_getViews(){const e=[];if(this._viewLoadingOffset===0)return e.push(this._routerOutletHistory.getViewByOffset(this._viewLoadingOffset)),e;for(let t=this._viewLoadingOffset;t<0;t++)e.push(this._routerOutletHistory.getViewByOffset(t));return e}_shouldLoadForViews(){const e=(0,v.getRootViewModel)(this._viewModel);return this._getViews().some(r=>{const d=this._shouldLoadForPage(r,e),E=this._shouldLoadForModals(r,e);return d||E})}_shouldLoad(){return this?._routerOutletHistory?this._shouldLoadForViews():!1}_subscribeOnNavigation(){this._subscriptions.add(this._crtRouter?.navigateEnd$.subscribe(()=>{this._shouldLoad()&&this._loadTriggerSubject.next()}))}shouldBeDelayed(){return!this._isAngularHost||this._disableDelayingModelsEventFeatureState?!1:this._viewModel.State===v.ViewModelStates.Paused&&!this._shouldLoad()}setState(e,t){this._disableDelayingModelsEventFeatureState||e._setStateAttribute(t)}destroy(){this._subscriptions.unsubscribe(),this._loadTriggerSubject.complete(),this._viewModel=null}ngOnDestroy(){this.destroy()}}h.\u0275fac=function(e){return new(e||h)(u.\u0275\u0275inject(x.CrtRouter,8),u.\u0275\u0275inject(a.B,8),u.\u0275\u0275inject(O.FEATURE_VALUES),u.\u0275\u0275inject(F.WINDOW_TOKEN))},h.\u0275prov=u.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac});class f extends y.BaseCachedHttpService{constructor(){super(...arguments),this.serviceEndpoint="/ServiceModel/ClientUnitSchemaDesignerService.svc"}getParentSchemasLocalizableStrings(e){return this.getRequestWithCache("GetParentSchemasLocalizableStrings",{schemaUId:e})}}f.\u0275fac=function(){let l;return function(t){return(l||(l=u.\u0275\u0275getInheritedFactory(f)))(t||f)}}(),f.\u0275prov=u.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac})},39630:(U,V,i)=>{i.d(V,{a:()=>C});var S=i(41307),u=i.n(S),I=i(52045),N=i.n(I),O=i(32935),R=i(94450),g=i.n(R);class C extends I.ProfileSchemaProvider{constructor(m,y){super(m),this._data=y}getProfileKey(m){return super.getProfileKey(m)+"__"+this._data.entitySchemaName}}C.\u0275fac=function(m){return new(m||C)(R.\u0275\u0275inject(S.UserSchemaProfileService),R.\u0275\u0275inject(O.HO))},C.\u0275prov=R.\u0275\u0275defineInjectable({token:C,factory:C.\u0275fac})},76596:(U,V,i)=>{i.d(V,{F:()=>D,L:()=>s});var S=i(8239),u=i(94450),I=i.n(u),N=i(34038),O=i.n(N),R=i(49475),g=i.n(R),C=i(24709),L=i.n(C),m=i(21322),y=i.n(m),A=i(27049),M=i.n(A);const D=new u.InjectionToken("SCHEMA_MODAL_COMPONENT_TYPE");class s{constructor(o,c,_){this._modalProviderService=o,this._appearanceSettingsService=c,this._schemaModalComponentType=_,this._createdModalsMap=new Map,this._modalCreated=new m.Subject,this._modalClosed=new m.Subject,this.modalCreated$=this._modalCreated.asObservable(),this.modalClosed$=this._modalClosed.asObservable()}_getDialogConfig(o){var c=this;return(0,S.Z)(function*(){const _=yield c._appearanceSettingsService.getSchemaModalClasses(o);return{panelClass:["modal-container",..._],maxWidth:0,maxHeight:"90vh",closeOnNavigation:!1}})()}_onModalClose(o){this._createdModalsMap.delete(o),this._modalClosed.next(o)}_onModalCreate(o){this._createdModalsMap.set(o.id,o),this._modalCreated.next(o),o.beforeClosed().pipe((0,A.take)(1)).subscribe(()=>this._onModalClose(o.id))}hideModals(o){const c=this._createdModalsMap;for(const _ of o){const p=c.get(_);p&&(this._modalProviderService.hideModal(p),p.componentInstance.schemaOutletComponent.instance.componentRef.instance.onDetach(),p.componentInstance.detachContent())}}closeModals(){const o=this._createdModalsMap;for(const c of Array.from(o.keys())){const _=o.get(c);_&&_.close()}}restoreModals(o){const c=this._createdModalsMap;for(const _ of o){const p=c.get(_);if(p){this._modalProviderService.restoreModal(p);const v=p.componentInstance.schemaOutletComponent.instance;p.componentInstance.attachContent(),v.componentRef.instance.onAttach()}}}show(o,c){var _=this;return(0,S.Z)(function*(){const p=yield _._getDialogConfig(o.schemaName);p.injector=c?.injector;const v=_._modalProviderService.open(_._schemaModalComponentType,{data:o,...p});return v.keydownEvents().pipe((0,A.filter)(()=>v.componentInstance.visible),(0,A.switchMap)(T=>{const P=v.componentInstance.page.schemaState.viewModel,x=new C.HandleKeyboardHotkeysRequest(T,P);return P.executeRequest(x)})).subscribe(),v.disableClose=!0,_._onModalCreate(v),v})()}}s.\u0275fac=function(o){return new(o||s)(u.\u0275\u0275inject(N.ModalProvider),u.\u0275\u0275inject(R.AppearanceSettingsService),u.\u0275\u0275inject(D))},s.\u0275prov=u.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}}]);