(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[6018],{86018:(ne,$,p)=>{p.r($),p.d($,{ATTRIBUTE_REQUIREMENT_TYPE_ITEMS:()=>ee,AddonDesignerApiService:()=>S,AddonInfo:()=>k,AddonInfoFactory:()=>f,AddonMetadataNormalizerFactory:()=>y,AddonSchema:()=>D,AddonSchemaService:()=>ie,AttributeRequirementType:()=>v,BaseAddonMetadataNormalizer:()=>j,BaseDesignItem:()=>G,BaseDesignerApiService:()=>b,BaseSchema:()=>w,BaseSchemaConverterService:()=>ae,BaseSchemaParameter:()=>T,BuildResultType:()=>R,BusinessRulesMetadataNormalizer:()=>W,CurrentPackageApiService:()=>z,ImageListSchemaItem:()=>V,ManagerItem:()=>X,MetaItem:()=>m,MetaItemArray:()=>u,Package:()=>C,ParentItem:()=>Z,SCHEMA_DESIGNER_API_URL:()=>F,SCHEMA_DESIGNER_CONVERTER:()=>B,SchemaDesignerApiModule:()=>_,SchemaImageUploaderService:()=>U,SchemaLocalizableStringModel:()=>M,SchemaParameter:()=>E,SchemaTemplateApiService:()=>L,getSchemaDesignerApiUrlProvider:()=>te,getSchemaImageUploaderApiUrlProvider:()=>se,getServiceApiUrl:()=>Y,getServiceApiUrlProvider:()=>J});var x=p(31134),g=p(2876),r=p(94450),c=p(49475),Q=p(97600),N=p(21322),h=p(27049),P=p(75378);class m{constructor(e){e&&(this.uId=e.uId,this.name=e.name,this.parentSchemaUId=e.parentSchemaUId),this.uId=this.uId||(0,P.generateGuid)()}update(e){this.uId=e.uId,this.name=e.name}equal(e){if(e==null)return!1;let t=this.uId===e.uId&&this.name===e.name;return(this.parentSchemaUId||e.parentSchemaUId)&&(t=t&&this.parentSchemaUId===e.parentSchemaUId),t}clone(){return new m(this)}getLocalizableValues(e){}loadLocalizableValues(e,t=!1){}}class C{constructor(e,t){this.name=e,this.uId=t}equal(e){return e==null?!1:this.uId===e.uId&&this.name===e.name&&this.type===e.type&&this.isChanged===e.isChanged&&this.isLocked===e.isLocked}clone(){const e=new C(this.name,this.uId);return e.type=this.type,e.isChanged=this.isChanged,e.isLocked=this.isLocked,e}}class G extends m{constructor(e){if(super(e),this.isReadOnly=!1,this.useFullHierarchy=!1,this.addonTypes=[],this.addons=[],e){if(this.id=e.id,e.package){const t=e.package;t.clone?this.package=t.clone():(this.package=new C(t.name,t.uId),this.package.type=t.type,this.package.isChanged=t.isChanged,this.package.isLocked=t.isLocked)}if(this.body=e.body,this.isReadOnly=e.isReadOnly,this.useFullHierarchy=e.useFullHierarchy,this.parentSchema=e.parentSchema,e.dependencies){const t=e.dependencies;let a=t.requiredSchemas;a&&(a=[...a]);let s=t.requiredEntityColumns;s&&(s=s.map(n=>({entitySchemaName:n.entitySchemaName,columnPaths:[...n.columnPaths]}))),this.dependencies={requiredSchemas:a,requiredEntityColumns:s}}}}updateDescription(e){super.update(e),this.id=e.id,this.package=e.package}equal(e){if(e==null)return!1;let t=super.equal(e)&&this.id===e.id&&this.body===e.body&&this.isReadOnly===e.isReadOnly&&this.useFullHierarchy===e.useFullHierarchy;return(this.package||e.package)&&(t=t&&this.package?.equal(e.package)),t}getLocalizableValues(e){super.getLocalizableValues(e)}loadLocalizableValues(e,t=!1){super.loadLocalizableValues(e,t)}}class X extends m{constructor(e){super(e),e&&(this.caption=e.caption)}}class Z extends m{}class M extends m{constructor(e){super(e),this.values=new c.LocalizableStringArray(e?.values)}clone(){return new M(this)}getLocalizableValues(e){super.getLocalizableValues(e),e.values=this.values.clone()}loadLocalizableValues(e,t=!1){super.loadLocalizableValues(e,t),this.values.setValues(e.values,t)}}class u extends Array{constructor(e){super(),e&&Array.isArray(e)&&(this.push(...e.map(t=>t.clone())),this.uId=e.uId),this.uId=this.uId||(0,P.generateGuid)()}deleteItemByUId(e){const t=this.findItemIndex(e);return t<0?!1:(this.splice(t,1),!0)}findItemIndex(e){return this.findIndex(t=>t.uId===e)}findItem(e){return this.find(t=>t.uId===e)}addItem(e){this.unshift(e)}reloadAll(e){this.splice(0,this.length,...e||[])}equal(e){return e==null||this.length!==e?.length?!1:this.every(t=>{const a=e?.findItem(t.uId);return t.equal(a)})}clone(){return new u(this)}getLocalizableValues(e,t){this.forEach(a=>{const s={};a.getLocalizableValues(s),Object.entries(s).forEach(([n,o])=>{e[`${t}.${a.name}.${n}`]=o})})}loadLocalizableValues(e,t,a=!1){const s={};Object.entries(e).map(([n,o])=>{const d=n.split("."),l=d.shift(),I=d.shift(),A=d.join(".");return{itemGroupName:l,itemName:I,itemResourceName:A,values:o}}).filter(({itemGroupName:n})=>n===t).forEach(({itemName:n,itemResourceName:o,values:d})=>{const l=s[n]??{};l[o]=d,s[n]=l}),Object.entries(s).forEach(([n,o])=>{this.find(l=>l.name===n).loadLocalizableValues(o,a)})}}var R;(function(i){i[i.Success=0]="Success",i[i.Error=1]="Error",i[i.NoChanges=2]="NoChanges"})(R||(R={}));class w extends G{constructor(e){super(e),this.caption=new c.LocalizableStringArray,this.description=new c.LocalizableStringArray,this.localizableStrings=new u,e&&(this.caption=e.caption?e.caption.clone():e.caption,this.description=e.description?e.description.clone():e.description,this.localizableStrings=e.localizableStrings?e.localizableStrings.clone():e.localizableStrings)}get DefaultName(){return"BaseSchema"}findChildrenItem(e){return this.localizableStrings.findItem(e)}findGroup(e){return this.localizableStrings.uId===e?this.localizableStrings:null}updateDescription(e){super.updateDescription(e),this.caption=new c.LocalizableStringArray(e.caption),this.description=new c.LocalizableStringArray(e.description)}getIsOwnMetaItem(e){return this.uId===e.parentSchemaUId}equal(e){return e==null?!1:super.equal(e)&&(0,c.areLocalizableStringsEqual)(this.caption,e.caption,!0)&&(0,c.areLocalizableStringsEqual)(this.description,e.description,!0)}clone(){return new w(this)}getLocalizableValues(e){super.getLocalizableValues(e),e.caption=this.caption.clone(),e.description=this.description.clone(),this.localizableStrings.getLocalizableValues(e,"localizableStrings")}loadLocalizableValues(e,t=!1){super.loadLocalizableValues(e,t),this.caption.setValues(e.caption,t),this.description.setValues(e.description,t),this.localizableStrings.loadLocalizableValues(e,"localizableStrings",t)}}const B=new r.InjectionToken("SchemaDesignerConverter");class V extends m{constructor(e){super(e),this.isChanged=!1,e&&(this._data=e.data||{},this.image=e.image,this.caption=new c.LocalizableStringArray(e.caption)),this.caption||(this.caption=new c.LocalizableStringArray)}get data(){return this._data}get image(){return this.data?.name}set image(e){!e||e===this.data?.name||Object.assign(this._data,{name:e})}static _getIsFileChanged(e,t){const a=e?.name,s=t?.name,n=a&&!s,o=s&&!a,d=s&&a&&t.size>0;return o||n||d}updateFile(e){this.isChanged=V._getIsFileChanged(this.data,e),this._data=e}clone(){return new V(this)}getLocalizableValues(e){super.getLocalizableValues(e),e.caption=this.caption.clone()}loadLocalizableValues(e,t=!1){super.loadLocalizableValues(e,t),this.caption.setValues(e.caption,t)}}class T extends w{_findNestedProperties(e,t){const a=t.find(s=>s.uId===e);return a?a.itemProperties:null}_getNestedParametersGroup(e,t){return(0,c.findCollectionRecursive)(t,a=>this._findNestedProperties(e,a),a=>a.itemProperties)}_getParametersGroup(e,t){let a=this._getNestedParametersGroup(e,t);return a||(a=this.parameters.uId===e?this.parameters:null),a}_getParameter(e,t){return(0,c.findItemRecursive)(t,a=>a.uId===e,a=>a.itemProperties)}constructor(e){super(e),this.parameters=new u,e&&(this.parameters=e.parameters.clone())}findChildrenItem(e){return this._getParameter(e,this.parameters)||super.findChildrenItem(e)}findGroup(e){const t=this._getParametersGroup(e,this.parameters);return t||super.findGroup(e)}findNestedParametersGroup(e){return this._getNestedParametersGroup(e,this.parameters)||this.parameters}findParameterByUId(e){return this._getParameter(e,this.parameters)}clone(){return new T(this)}getLocalizableValues(e){super.getLocalizableValues(e),this.parameters.getLocalizableValues(e,"parameters")}loadLocalizableValues(e,t=!1){super.loadLocalizableValues(e,t),this.parameters.loadLocalizableValues(e,"parameters",t)}}class E extends m{constructor(e){super(e),e&&(this.caption=new c.LocalizableStringArray(e.caption),this.type=e.type,this.lookup=e.lookup,this.schema=e.schema,this.resulting=e.resulting,this.required=e.required,this.containsPerformerId=e.containsPerformerId,this.copyValue=e.copyValue,this.serializable=e.serializable,this.lazyLoad=e.lazyLoad,this.value=e.value,this.itemProperties=this._mapItemArray(e.itemProperties))}static updateLookupValue(e,t,a){const s=e[a]?e[a].key:null;s?t[a]=s:delete t[a]}_getSourceType(e){return e.type?.key}_mapItemArray(e){return e?new u(e.map(t=>new E(t))):new u}_resetItemProperties(e){this.type!==e&&(this.itemProperties=new u,this.itemProperties.uId=this.uId)}updateDescription(e){this.caption=e.caption,this.name=e.name;const t=this._getSourceType(e);this._resetItemProperties(t),this.type=t,E.updateLookupValue(e,this,"lookup"),this.schema=e.schema,this.resulting=e.resulting,this.required=e.required,this.containsPerformerId=e.containsPerformerId,this.copyValue=e.copyValue,this.serializable=e.serializable,this.lazyLoad=e.lazyLoad,this.value=e.value}clone(){return new E(this)}getLocalizableValues(e){super.getLocalizableValues(e),e.caption=this.caption.clone(),this.itemProperties.getLocalizableValues(e,"itemProperties")}loadLocalizableValues(e,t=!1){super.loadLocalizableValues(e,t),this.caption.setValues(e.caption,t),this.itemProperties.loadLocalizableValues(e,"itemProperties",t)}}var q=p(62365);class D extends c.BaseSchema{constructor(e){super(e),this.typeName="Terrasoft.Core.Addons.AddonSchema",this.metaData=e.metaData,this.addonName=e.addonName,this.targetSchemaUId=e.targetSchemaUId,this.targetSchemaManagerName=e.targetSchemaManagerName,this.typeName=e.typeName,this.id=e.id,this.parentSchemaUId=e.parentSchemaUId,this.package=e.package,this.resources=e.resources}clone(){return new D(this)}equal(e){return this.metaData===e.metaData&&this.addonName===e.addonName&&this.targetSchemaManagerName===e.targetSchemaManagerName&&this.targetSchemaUId===e.targetSchemaUId&&this.typeName===e.typeName&&this.extendParent===e.extendParent&&this.uId===e.uId&&this.name===e.name&&this.packageUId===e.packageUId&&this.caption===e.caption&&this.id===e.id&&this.parentSchemaUId===e.parentSchemaUId}}class k{constructor(...e){if(this._isLoaded=!1,this._isChanged=!1,this.id=(0,P.generateGuid)(),e[0]instanceof k){const t=e[0];this.addonName=t.addonName,this._targetSchemaUId=t.targetSchemaUId,this.targetSchemaManagerName=t.targetSchemaManagerName,this.targetParentSchemaUId=t.targetParentSchemaUId,this.targetPackageUId=t.targetPackageUId,this.id=t.id,this._apiService=t._apiService,this._isLoaded=t._isLoaded,this._metaData=t._metaData,this._isChanged=t._isChanged,t._schema&&(this._schema=t._schema.clone()),this.useFullHierarchy=t.useFullHierarchy}else this.addonName=e[0],this._targetSchemaUId=e[1],this.targetParentSchemaUId=e[2],this.targetPackageUId=e[3],this.targetSchemaManagerName=e[4],this._apiService=e[5],this.useFullHierarchy=e[6]}get targetSchemaUId(){return this._targetSchemaUId}set targetSchemaUId(e){this._targetSchemaUId=e,this._schema&&(this._schema.targetSchemaUId=e)}get addonConfig(){return this._isLoaded?(0,N.of)(this._metaData):this._load()}set addonConfig(e){e.subscribe(t=>{this._metaData=t,this._schema.metaData=JSON.stringify(t,null,"	"),this._isChanged=!0})}get isChanged(){return this._isChanged}get resources(){return this._resources}_setMetadataDefValues(){this.addonName===c.AddonName.BusinessRule&&this._metaData.rules?.forEach(t=>{t.name=t.name||(0,q.generateBusinessRuleName)(),t.enabled=t.enabled||t.enabled===void 0})}_setAddonResources(e){this._resources=e.map(t=>{const a=t.key.split(".");return{key:[a[2],a[3]].join("."),value:t.value}}),this._schema.resources=[...this._resources]}_load(){return this._addonConfig$?this._addonConfig$:(this._addonConfig$=this._apiService.getAddon({targetSchemaUId:this.targetSchemaUId,addonName:this.addonName,targetParentSchemaUId:this.targetParentSchemaUId,targetPackageUId:this.targetPackageUId,targetSchemaManagerName:this.targetSchemaManagerName,useFullHierarchy:this.useFullHierarchy}).pipe((0,h.tap)(e=>{if(e.success){try{this._metaData=JSON.parse(e.schema.metaData)}catch{throw new Error("Invalid addon JSON metadata received from server")}this._setMetadataDefValues(),this._schema=new D(e.schema),this._schema.typeName="Terrasoft.Core.Addons.AddonSchema",this._isLoaded=!0,this._setAddonResources(e.schema.resources??[])}}),(0,h.map)(()=>this._metaData),(0,h.share)()),this._addonConfig$)}save(){return this._isLoaded?this._apiService.saveAddon(this._schema).pipe((0,h.map)(e=>e.success),(0,h.tap)(()=>{this._isChanged=!1})):(0,N.of)(!0)}clone(){return new k(this)}equal(e){let t=this._isLoaded===e._isLoaded&&e.targetSchemaUId===this.targetSchemaUId&&e.addonName===this.addonName&&this.targetSchemaManagerName===e.targetSchemaManagerName;return t&&this._isLoaded&&(t=this._schema.equal(e._schema)),t}createOrUpdateResource(e){const t=this.resources.findIndex(a=>a.key===e.key);t===-1?this.resources.push(e):this.resources.splice(t,1,e),this._schema.resources=[...this._resources]}removeResource(e){const t=this.resources.findIndex(a=>a.key===e);this.resources.splice(t,1),this._schema.resources=[...this._resources]}}var v;(function(i){i[i.NO=0]="NO",i[i.YES=1]="YES"})(v||(v={}));const ee={[v.NO]:{type:v.NO,name:"No"},[v.YES]:{type:v.YES,name:"Yes"}};class S{constructor(e){this.getAddonMethodName="GetSchema",this.saveAddonMethodName="SaveSchema",this.serviceEndpoint="/ServiceModel/AddonSchemaDesignerService.svc/",this._httpClient=e.get(g.HttpClient),this._workplaceService=e.get(c.WorkplaceService)}getAddon(e){const t=`${this.serviceEndpoint}${this.getAddonMethodName}`;return this._httpClient.post(t,e)}saveAddon(e){const t=`${this.serviceEndpoint}${this.saveAddonMethodName}`;return this._httpClient.post(t,e).pipe((0,N.switchMap)(a=>this._workplaceService.resetWorkplaceScriptCache().pipe((0,h.map)(()=>a))))}}S.\u0275fac=function(e){return new(e||S)(r.\u0275\u0275inject(r.Injector))},S.\u0275prov=r.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac});class f{constructor(e){this._apiService=e.get(S),this._features=e.get(c.FEATURE_VALUES,{optional:!0})}_getParentSchemaUId(e){const t=e.parentSchema??e.parent;return t?.name===e.name?t.uId:P.EMPTY_GUID}create(e,t){return!e.addonTypes||e.addonTypes.length===0?[]:e.addonTypes.map(a=>{const s=this._getParentSchemaUId(e);return this.createAddonInfo(e,a,s,t)})}createAddonInfo(e,t,a,s){return new k(t,e.uId,a,e.package.uId,s,this._apiService,e.useFullHierarchy)}}f.\u0275fac=function(e){return new(e||f)(r.\u0275\u0275inject(r.Injector))},f.\u0275prov=r.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac});const F=new r.InjectionToken("SchemaDesignerApiUrl"),Y=i=>`/ServiceModel/${i}/`,J=(i,e)=>({multi:!1,provide:e,useValue:Y(i)}),te=i=>J(i,F);class b{constructor(e){this.createNewSchemaMethodName="CreateNewSchema",this.getSchemaMethodName="GetSchema",this.saveSchemaMethodName="SaveSchema",this.httpClient=e.get(g.HttpClient),this.serviceEndpoint=e.get(F),this._converter=e.get(B),this._addonInfoFactory=e.get(f),this._errorHandler=e.get(c.RestErrorHandler)}get converter(){return this._converter}getSchemaManagerName(){return null}getSchemaFromService(e,t,a=!1){const s=a?{headers:new g.HttpHeaders({"Content-Type":"application/json"})}:{};return this.httpClient.post(e,t,s).pipe((0,h.map)(n=>{if(n.schema){const o=this.getSchemaManagerName();return n.schema=this.convertToObject(n.schema),n.schema.addons=this._addonInfoFactory.create(n.schema,o),n}return n}),(0,h.share)())}getSchemasFromService(e,t,a=!1){const s=a?{headers:new g.HttpHeaders({"Content-Type":"application/json"})}:{};return this.httpClient.post(e,t,s).pipe((0,h.map)(n=>{if(n.schemas){const o=this.getSchemaManagerName();return n.schemas.forEach((d,l)=>{n.schemas[l]=this.convertToObject(d),n.schemas[l].addons=this._addonInfoFactory.create(d,o)}),n}return n}),(0,h.share)())}createObject(e,t){return Object.assign(new e,t)}convertToObject(e){return this._converter.convertToSchema(e)}convertSchemaToDTO(e){return e}_addonSaveHandler(e){const t=e.save();return this._errorHandler.handleRequest(t).pipe((0,h.catchError)(()=>(0,N.of)(!1)),(0,h.map)(a=>({message:`Addon ${e.addonName} was ${a?"successfully":"not"} saved!`,result:a})))}_saveAddons(e){return(0,N.forkJoin)(e.map(t=>this._addonSaveHandler(t))).pipe((0,h.map)(t=>{const a=t.filter(s=>!s.result).map(s=>s.message);return a.length>0?a:null}))}createSchema(e){const t=`${this.serviceEndpoint}${this.createNewSchemaMethodName}`;return this.getSchemaFromService(t,e)}getSchema(e){const t=`${this.serviceEndpoint}${this.getSchemaMethodName}`;return this.getSchemaFromService(t,e)}saveSchema(e,t=!1){t&&(e.useFullHierarchy=!0);const a=`${this.serviceEndpoint}${this.saveSchemaMethodName}`,s=e.addons?[...e.addons]:null,n=(0,Q.omit)(e,["addons"]),o=this.httpClient.post(a,n);return this._errorHandler.handleRequest(o).pipe((0,h.concatMap)(l=>{const I=s?.filter(A=>A.isChanged);return l.success&&I?.length>0?this._saveAddons(I).pipe((0,h.map)(A=>({...l,addonsErrors:A}))):(0,N.of)(l)}),(0,h.share)())}checkUniqueSchemaName(e,t,a){const s=this.serviceEndpoint+"CheckUniqueSchemaName",n={schemaName:e,excludeUId:t,managerName:a};return this.httpClient.post(s,n,{headers:new g.HttpHeaders({"Content-Type":"application/json"})}).pipe((0,h.share)())}}b.\u0275fac=function(e){return new(e||b)(r.\u0275\u0275inject(r.Injector))},b.\u0275prov=r.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});class ae{constructor(e){this.factory=e}createSchema(e){const t=new this.factory;return Object.assign(t,e),e.package&&(t.package=new C(e.package.name,e.package.uId),t.package.type=e.package.type,t.package.isChanged=e.package.isChanged,t.package.isLocked=e.package.isLocked),t}createLocalizableStrings(e){if(!e)return new u;const t=e.map(a=>new M(a));return new u(t)}}const K=new r.InjectionToken("SchemaImageUploaderApiUrl"),se=i=>({multi:!1,provide:K,useValue:`/ServiceModel/${i}`});class U{constructor(e,t){this._httpClient=e,this._endPointUrl=t}appendImageToSchema(e,t,a){const s=new FormData;return s.append("schemaUId",e),s.append("imageUId",t.uId),s.append("isLastImage",a.toString()),s.append("files",t.data,t.data.name),this._httpClient.post(`${this._endPointUrl}/SaveImage`,s)}}U.\u0275fac=function(e){return new(e||U)(r.\u0275\u0275inject(g.HttpClient),r.\u0275\u0275inject(K))},U.\u0275prov=r.\u0275\u0275defineInjectable({token:U,factory:U.\u0275fac});class L{constructor(e){this.httpClient=e,this._getTemplatesEndpoint="rest/schema.template.api/templates"}getTemplates(){return this.httpClient.get(this._getTemplatesEndpoint)}}L.\u0275fac=function(e){return new(e||L)(r.\u0275\u0275inject(g.HttpClient))},L.\u0275prov=r.\u0275\u0275defineInjectable({token:L,factory:L.\u0275fac,providedIn:"root"});class z{constructor(e){this._httpClient=e,this._appInstallerServiceUrl="ServiceModel/AppInstallerService.svc/",this._getDesignPackageUId="GetDesignPackageUId"}getDesignPackageUId(e){const t=`${this._appInstallerServiceUrl}${this._getDesignPackageUId}`;return this._httpClient.post(t,{schemaUId:e})}}z.\u0275fac=function(e){return new(e||z)(r.\u0275\u0275inject(g.HttpClient))},z.\u0275prov=r.\u0275\u0275defineInjectable({token:z,factory:z.\u0275fac,providedIn:"root"});class j{copy(e){return{...e}}isEmpty(e){return!1}}class W extends j{copy(e){const t=e.metadata,a=[],s=[];return t.rules.forEach(n=>{const o=new q.BusinessRuleDesign(n,new c.LocalizableStringArray,null,null,null),{uId:d,name:l}=o,I=o.copy();I.name=l;const A=I.uId,H=(e.resources||[]).find(O=>O.key?.includes(d));if(H){const O=H.key.replace(d,A);s.push({...H,key:O})}a.push(I.toMetadata())}),{metadata:{...e.metadata,rules:a},name:e.name,resources:s}}isEmpty(e){return!e.metadata?.rules||e.metadata.rules?.length===0}}class y{create(e){return e===c.AddonName.BusinessRule?new W:new j}}y.\u0275fac=function(e){return new(e||y)},y.\u0275prov=r.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac});class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=r.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=r.\u0275\u0275defineInjector({providers:[S,f,y],imports:[x.CommonModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(_,{imports:[x.CommonModule]})}();class ie{}}}]);
