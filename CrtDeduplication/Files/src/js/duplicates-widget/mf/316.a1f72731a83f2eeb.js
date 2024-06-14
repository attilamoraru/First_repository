(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[316],{96774:(h,S,s)=>{s.r(S),s.d(S,{NavigationUtils:()=>r,UITypePriority:()=>g});var c=s(8239),d=s(75378),f=s(97600),g;(function(m){m.Auto="auto",m.PreferFreedomUI="freedom-ui"})(g||(g={}));var y=s(11685);class p{static initialize(){y.config({disableDefaultAlphabetLength:!0,disableDefaultIdLength:!0,idLength:7}),y.characters("0123456789abcdefghijklmnopqrstuvwxyz")}static generateUnique(e,t="",u="_"){const n=new RegExp(`^${t}`);return t+e.replace(n,"")+u+y.generate()}}p.initialize();class r{static get angularSchemaType(){return r._angularSchemaType}static _getTypeColumnName(e,t){return r.getEntityStructure(e,t??g.Auto)?.pages.find(a=>a.typeColumnName)?.typeColumnName}static _getTypeColumnValue(e){return(0,c.Z)(function*(){const{entityName:t,typeColumnValue:u}=e;if(u)return u;const n=r._getTypeColumnName(t,e.uiTypePriority),a=r.getRecordLookupValue(e.recordId);return!n||!a?null:(yield(yield d.Model.create(t)).load({attributes:[n],parameters:[{type:d.ModelParameterType.Filter,value:new d.CompareFilter(d.ComparisonType.Equal,new d.ColumnExpression({columnPath:"Id"}),new d.ParameterExpression({value:a}))}]}))?.[0]?.[n]?.value})()}static _getModuleStructureBySectionSchema(e){return Object.values(Terrasoft.configuration.ModuleStructure).find(t=>t.sectionSchema===e)}static _getSectionModuleName(e){return r._getModuleStructureBySectionSchema(e)?.sectionModule}static _getSectionEditPageModuleName(e){return Object.values(Terrasoft.configuration.ModuleStructure).find(u=>u.cardSchema===e||u.pages?.some(n=>n.cardSchema===e))?.cardModule}static _getSchemaRequire(e){return new Promise(t=>{Terrasoft.require([e],u=>t(u))})}static _isSchemaInheritedFrom(e,t){return(0,c.Z)(function*(){let u=Terrasoft.configuration.Structures[t];u||(yield r._getSchemaRequire(t),u=Terrasoft.configuration.Structures[t]);const n=u?.structureParent;return n?n===e?!0:r._isSchemaInheritedFrom(e,n):!1})()}static _getModuleName(e){return(0,c.Z)(function*(){const t=r._getSectionModuleName(e)??r._getSectionEditPageModuleName(e);if(t)return t;if(yield r._isSchemaInheritedFrom("BasePageV2",e))return"CardModuleV2";switch(!0){case(yield r._isSchemaInheritedFrom("BaseHomePage",e)):return"HomePage";case(yield r._isSchemaInheritedFrom("BaseIntroPageSchema",e)):return"IntroPage";default:return"PageSchemaViewModule"}})()}static _getTypedPage(e,t){if(!t||t.length<=1)return;if(e.entityPageName){const n=t.find(a=>a.cardSchema===e.entityPageName);if(n)return n}let u=e.typeColumnValue;if(!u&&e.entityName){const a=r.getEntityStructure(e.entityName,e.uiTypePriority)?.attribute;if(a){const o=e.defaultValues?.find(i=>i.attributeName===a);u=o?.value?.value||o?.value}}if(u)return t.find(n=>n.UId===u)}static _getDefaultPages(e){return e?.filter(t=>r._isDefaultPage(t))}static _getNotTypedAddPage(e){return e?.find(t=>r._isAddPage(t)&&!t.UId)}static _getTypedAddPage(e){return e?.find(t=>r._isAddPage(t)&&t.UId)}static _getTypedDefaultPage(e){return e?.find(t=>r._isDefaultPage(t)&&t.UId)}static _getNotTypedDefaultPage(e){return e?.find(t=>r._isDefaultPage(t)&&!t.UId)}static _isDefaultPage(e){return e.isDefault||!e.actions}static _isAddPage(e){return e.actions?.add}static _getDefaultPage(e){const t=r.getEntityStructure(e.entityName,e.uiTypePriority);if(!t)return;const u=r._getDefaultPages(t.pages),a=r._getTypedPage(e,u)||r._getNotTypedDefaultPage(u);return!a&&t.pages?.length?(console.warn("Default page not found and random page is given instead. Please, check passed options."),t.pages[0]):a}static _getAddPage(e){const u=r.getEntityStructure(e.entityName,e.uiTypePriority)?.pages,n=r.getPagesForAddAction(u);if(n?.length<=1)return n?.[0];const a=r._getTypedPage(e,n);if(a)return a;const o=r._getNotTypedAddPage(u),i=r._getNotTypedDefaultPage(u);let l=o||i;return l||(console.warn("Add or default page not found and random page is given instead. Please, check options."),console.warn(e),l=u?.[0]),l}static _getEditPage(e){return r._getDefaultPage(e)}static _getGroupedTypedPages(e){const t={};for(const u of e){const{UId:n}=u;n&&(t[n]=t[n]??[],t[n].push(u))}return t}static _getModuleConfig(e){return Object.values(Terrasoft.configuration.ModuleStructure).find(t=>t.cardSchema===e||t.sectionSchema===e||t.pages?.some(u=>u.cardSchema===e))}static getPagesForAddAction(e){if((0,f.isEmpty)(e))return[];const t=r._getGroupedTypedPages(e),u=r._getNotTypedAddPage(e),n=r._getNotTypedDefaultPage(e),a=Object.values(t).map(i=>{const l=r._getTypedAddPage(i);if(l)return l;const P=r._getTypedDefaultPage(i);return P&&u?{...u,...(0,f.pick)(P,["caption","captionLcz","UId"])}:u||P||n});if(!(0,f.isEmpty)(a))return a;const o=u||n;return o?[o]:[]}static getCardSchemaName(e){return e?.cardSchema??e?.cardSchemaName}static getEntityStructure(e,t=g.Auto){if(!e)return;let u;return t===g.PreferFreedomUI&&(u=Object.values(Terrasoft.configuration.EntityStructure).find(n=>n.page8X&&n.entitySchemaName===e)),u??Terrasoft.ModuleUtils.getEntityStructureByName(e)}static getRecordLookupValue(e){return typeof e=="string"?e:e?.value}static getPageForActionAsync(e){return(0,c.Z)(function*(){const u={typeColumnValue:yield r._getTypeColumnValue(e),...e};return r.getPageForAction(u)})()}static getPageForAction(e){let t;return e.action===d.ModelInPageAction.Add?t=r._getAddPage(e):t=r._getEditPage(e),t||(t=r._getDefaultPage(e)),t}static getPageSchemaNameForAction(e){return(0,c.Z)(function*(){if(e.entityPageName)return e.entityPageName;const t=yield r.getPageForActionAsync(e);return r.getCardSchemaName(t)})()}static isAngularSchema(e){return(0,c.Z)(function*(){return yield r._getSchemaRequire(e),(yield r._getSchemaRequire(e+"Structure")).type===r._angularSchemaType})()}static generateChainModuleId(e){return p.generateUnique(e+"_chain")}static getValuePairs(e){return e&&e.map(t=>{let u,n;const a=t.value;return a?.value?(n=a.value,u=a.displayValue):n=a,{name:t.attributeName,value:n,displayValue:u}})}static getModuleName(e,t){return(0,c.Z)(function*(){if(!e&&!t)throw new d.ArgumentEmptyException("schemaName");return e&&!t&&(t=yield r._getModuleName(e)),t})()}static getEditPageModuleName(e,t=g.Auto){return r.getEntityStructure(e,t)?.cardModuleName}static hasEntityEditPage(e){return(0,c.Z)(function*(){const t=yield r.getPageForActionAsync(e);return Boolean(t)})()}static isSectionEditPage(e){return Boolean(r._getSectionEditPageModuleName(e))}static isAngularListPage(e){return(0,c.Z)(function*(){return(yield r.isAngularSchema(e))?r._isSchemaInheritedFrom("BaseGridSectionTemplate",e):!1})()}static isAngularRouting(e){return r._angularModules.includes(e)}static getSectionEntityName(e){return r._getModuleStructureBySectionSchema(e)?.entitySchemaName}static getPageEntitySchemaName(e){const t=this._getModuleConfig(e);return t?.entitySchemaName?t.entitySchemaName:Object.values(Terrasoft.configuration.EntityStructure).find(n=>n.pages?.some(a=>a.cardSchema===e))?.entitySchemaName}static getEntityPageStructure(e){return Object.values(Terrasoft.configuration.EntityStructure).find(u=>u.pages.find(n=>n.cardSchema===e))?.pages?.find(u=>u.cardSchema===e)}static isMiniPage(e){const t=r.getEntityPageStructure(e);if(t){const u=t.schemaGroup==="MiniPage";return Promise.resolve(u)}return r._isSchemaInheritedFrom("BaseMiniPageTemplate",e)}static getSysModuleId(e){return(r._getModuleConfig(e)||Object.values(Terrasoft.configuration.ModuleStructure).find(u=>u.sectionModule===e))?.moduleId}}r._angularSchemaType=9,r._angularModules=["PageSchemaViewModule","CardSchemaViewModule","HomePage","Desktop","SectionSchemaViewModule"]}}]);
