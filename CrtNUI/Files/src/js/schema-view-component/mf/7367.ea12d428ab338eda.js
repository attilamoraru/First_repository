(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[7367],{77367:(K,L,t)=>{t.r(L),t.d(L,{CodemirrorComponent:()=>d,CodemirrorModule:()=>g,LineSeparator:()=>f});var r=t(94450),V=t(34560),y=t(38993),o=t(59292),a=t(63533),n=t(58895),m=t(78412),h=t(57960),M=t(50985),S=t(85430),E=t(8035),v=t(59428),_=t(81742),p=t(44098),x=t(91644),u=t(90212),c=t(53176),j=t(47679);class i{static lintCode(e,l,C={}){const O=[];return l===n.Y.Javascript?t.e(4301).then(t.t.bind(t,4301,23)).then(({Linter:w})=>(0,S.esLint)(new w,C)(e)):([n.Y.Json,n.Y.Less,n.Y.Css,n.Y.Xml].includes(l)&&i.supportedLanguages[l].parser.parse(e.state.doc.toString()).iterate({enter:({type:P,from:A,to:J,...F})=>{P.isError&&O.push({from:A,to:J,severity:"warning",message:"Uncompleted condition"})}}),Promise.resolve(O))}}i.supportedLanguages={[n.Y.Markdown]:{lang:_.markdown,parser:_.markdownLanguage.parser},[n.Y.Javascript]:{lang:S.javascript,parser:S.javascriptLanguage.parser},[n.Y.Less]:{lang:v.less,parser:v.lessLanguage.parser},[n.Y.Css]:{lang:v.less,parser:M.cssLanguage.parser},[n.Y.Sql]:{lang:p.sql,parser:p.StandardSQL.language.parser},[n.Y.PgSql]:{lang:p.sql,parser:p.StandardSQL.language.parser},[n.Y.SqlServer]:{lang:p.sql,parser:p.StandardSQL.language.parser},[n.Y.Json]:{lang:E.json,parser:E.jsonLanguage.parser},[n.Y.Csharp]:{lang:j.csharp,parser:j.csharpLanguage.parser},[n.Y.Xml]:{lang:x.xml,parser:x.xmlLanguage.parser},[n.Y.Http]:{lang:x.xml,parser:_.markdownLanguage.parser}},i.onChangeExtension=s=>a.EditorView.updateListener.of(e=>{if(!e.docChanged)return;const l=e.state.doc.toString();s(l)}),i.defaultExtensions=()=>[(0,u.syntaxHighlighting)(u.defaultHighlightStyle,{fallback:!0}),(0,y.lintGutter)(),(0,a.highlightSpecialChars)(),(0,a.highlightActiveLineGutter)(),(0,a.highlightActiveLine)(),(0,c.highlightSelectionMatches)(),(0,m.autocompletion)(),(0,u.bracketMatching)(),(0,m.closeBrackets)(),(0,u.foldGutter)(),(0,a.lineNumbers)(),(0,a.rectangularSelection)(),a.EditorView.lineWrapping,(0,h.history)()],i.defaultKeyMaps=()=>[...y.lintKeymap,...c.searchKeymap,...h.historyKeymap,...h.defaultKeymap,...m.completionKeymap,h.indentWithTab,{key:"Alt-g",run:c.gotoLine},{key:"Ctrl-Shift-f",run:c.replaceNext},{key:"Ctrl-Shift-r",run:c.replaceAll},{key:"Ctrl-Shift-z",run:h.redo},{key:"Ctrl-y",run:h.deleteLine},{key:"Ctrl-Space",run:m.startCompletion}];const Y=["host"];var f;(function(s){s.CR="\r",s.LF=`
`,s.CRLF=`\r
`})(f||(f={}));class d{constructor(){this._value="",this._language=n.Y.Javascript,this._languageCompartment=new o.Compartment,this._editable=!0,this._editableCompartment=new o.Compartment,this._readOnly=!1,this._readonlyCompartment=new o.Compartment,this._lineSeparator=f.LF,this._lineSeparatorCompartment=new o.Compartment,this.keyBinding=[],this.languageOptions={},this.valueChanged=new r.EventEmitter,this.onChange=e=>{},this.onTouched=()=>{}}set value(e){typeof e=="string"&&this._editorView?.state.doc.toString()!==e&&(this._value=e,this._editorView?.dispatch({changes:{from:0,to:this._editorView.state.doc.length,insert:this._value}}))}get value(){return this._value}get lineNumbers(){return this._editorView.state.doc.lines}set editable(e){this._editable!==e&&(this._editable=e,this._editorView?.dispatch({effects:this._editableCompartment.reconfigure(a.EditorView.editable.of(e))}))}set readOnly(e){this._readOnly!==e&&(this._readOnly=e,this._editorView?.dispatch({effects:this._readonlyCompartment.reconfigure(o.EditorState.readOnly.of(e))}))}set language(e){if(e||(e=n.Y.Markdown),this._language!==e){if(!i.supportedLanguages[e])throw new Error(`Unsupported language: ${e}`);this._language=e,this._editorView?.dispatch({effects:this._languageCompartment.reconfigure(i.supportedLanguages[e].lang())})}}set lineSeparator(e){this._lineSeparator!==e&&(this._lineSeparator=e,this._editorView?.dispatch({effects:this._lineSeparatorCompartment.reconfigure(o.EditorState.lineSeparator.of(this._lineSeparator))}))}_onEditorValueChanged(e){this.value=e,this.onChange(e),this.valueChanged.emit(e),this.onTouched()}_initEditorView(){return new a.EditorView({doc:this.value,extensions:[this._lineSeparatorCompartment.of(o.EditorState.lineSeparator.of(this._lineSeparator)),this._languageCompartment.of(i.supportedLanguages[this._language].lang()),this._editableCompartment.of(a.EditorView.editable.of(this._editable)),this._readonlyCompartment.of(o.EditorState.readOnly.of(this._readOnly)),(0,y.linter)(e=>i.lintCode(e,this._language,this.languageOptions)),i.onChangeExtension(this._onEditorValueChanged.bind(this)),...i.defaultExtensions(),a.keymap.of([...i.defaultKeyMaps(),...this.keyBinding])],parent:this.hostContainer?.nativeElement})}ngAfterViewInit(){this._editorView=this._initEditorView()}ngOnDestroy(){this._editorView.destroy()}writeValue(e){typeof e=="string"&&(this.value=e.toString())}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=r.\u0275\u0275defineComponent({type:d,selectors:[["ts-codemirror"]],viewQuery:function(e,l){if(e&1&&r.\u0275\u0275viewQuery(Y,5),e&2){let C;r.\u0275\u0275queryRefresh(C=r.\u0275\u0275loadQuery())&&(l.hostContainer=C.first)}},inputs:{value:"value",editable:"editable",readOnly:"readOnly",language:"language",lineSeparator:"lineSeparator",keyBinding:"keyBinding",languageOptions:"languageOptions"},outputs:{valueChanged:"valueChanged"},features:[r.\u0275\u0275ProvidersFeature([{provide:V.NG_VALUE_ACCESSOR,useExisting:(0,r.forwardRef)(()=>d),multi:!0}])],decls:3,vars:0,consts:[[1,"ts-codemirror"],[1,"ts-codemirror-container"],["host",""]],template:function(e,l){e&1&&(r.\u0275\u0275elementStart(0,"div",0),r.\u0275\u0275element(1,"div",1,2),r.\u0275\u0275elementEnd())},styles:[".ts-codemirror[_ngcontent-%COMP%]{position:relative;background-color:#fff;height:100%}.ts-codemirror[_ngcontent-%COMP%]   .ts-codemirror-container[_ngcontent-%COMP%]{height:100%}.ts-codemirror[_ngcontent-%COMP%]   .ts-codemirror-container[_ngcontent-%COMP%]     .cm-editor{height:100%}.ts-codemirror[_ngcontent-%COMP%]   .ts-codemirror-container[_ngcontent-%COMP%]     .cm-editor .cm-specialChar{display:none}"],changeDetection:0});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=r.\u0275\u0275defineNgModule({type:g}),g.\u0275inj=r.\u0275\u0275defineInjector({}),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(g,{declarations:[d],exports:[d]})}()}}]);
