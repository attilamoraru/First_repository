(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[2800],{32800:(de,_,C)=>{C.r(_),C.d(_,{RegExpCursor:()=>V,SearchCursor:()=>d,SearchQuery:()=>B,closeSearchPanel:()=>j,findNext:()=>W,findPrevious:()=>P,getSearchQuery:()=>Ae,gotoLine:()=>te,highlightSelectionMatches:()=>xe,openSearchPanel:()=>U,replaceAll:()=>ae,replaceNext:()=>K,search:()=>De,searchKeymap:()=>Te,searchPanelOpen:()=>_e,selectMatches:()=>le,selectNextOccurrence:()=>ie,selectSelectionMatches:()=>oe,setSearchQuery:()=>k});var h=C(63533),c=C(59292),u=C(62625);const p=typeof String.prototype.normalize=="function"?t=>t.normalize("NFKD"):t=>t;class d{constructor(e,r,n=0,i=e.length,s,o){this.test=o,this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(n,i),this.bufferStart=n,this.normalize=s?l=>s(p(l)):p,this.query=this.normalize(r)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return(0,c.codePointAt)(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let r=(0,c.fromCodePoint)(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=(0,c.codePointSize)(e);let i=this.normalize(r);for(let s=0,o=n;;s++){let l=i.charCodeAt(s),a=this.match(l,o,this.bufferPos+this.bufferStart);if(s==i.length-1){if(a)return this.value=a,this;break}o==n&&s<r.length&&r.charCodeAt(s)==l&&o++}}}match(e,r,n){let i=null;for(let s=0;s<this.matches.length;s+=2){let o=this.matches[s],l=!1;this.query.charCodeAt(o)==e&&(o==this.query.length-1?i={from:this.matches[s+1],to:n}:(this.matches[s]++,l=!0)),l||(this.matches.splice(s,2),s-=2)}return this.query.charCodeAt(0)==e&&(this.query.length==1?i={from:r,to:n}:this.matches.push(1,r)),i&&this.test&&!this.test(i.from,i.to,this.buffer,this.bufferStart)&&(i=null),i}}typeof Symbol<"u"&&(d.prototype[Symbol.iterator]=function(){return this});const M={from:-1,to:-1,match:/.*/.exec("")},y="gm"+(/x/.unicode==null?"":"u");class V{constructor(e,r,n,i=0,s=e.length){if(this.text=e,this.to=s,this.curLine="",this.done=!1,this.value=M,/\\[sWDnr]|\n|\r|\[\^/.test(r))return new Y(e,r,n,i,s);this.re=new RegExp(r,y+(n?.ignoreCase?"i":"")),this.test=n?.test,this.iter=e.iter();let o=e.lineAt(i);this.curLineStart=o.from,this.matchPos=F(e,i),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let r=this.matchPos<=this.to&&this.re.exec(this.curLine);if(r){let n=this.curLineStart+r.index,i=n+r[0].length;if(this.matchPos=F(this.text,i+(n==i?1:0)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<i||n>this.value.to)&&(!this.test||this.test(n,i,r)))return this.value={from:n,to:i,match:r},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}}const Q=new WeakMap;class E{constructor(e,r){this.from=e,this.text=r}get to(){return this.from+this.text.length}static get(e,r,n){let i=Q.get(e);if(!i||i.from>=n||i.to<=r){let l=new E(r,e.sliceString(r,n));return Q.set(e,l),l}if(i.from==r&&i.to==n)return i;let{text:s,from:o}=i;return o>r&&(s=e.sliceString(r,o)+s,o=r),i.to<n&&(s+=e.sliceString(i.to,n)),Q.set(e,new E(o,s)),new E(r,s.slice(r-o,n-o))}}class Y{constructor(e,r,n,i,s){this.text=e,this.to=s,this.done=!1,this.value=M,this.matchPos=F(e,i),this.re=new RegExp(r,y+(n?.ignoreCase?"i":"")),this.test=n?.test,this.flat=E.get(e,i,this.chunkEnd(i+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,r=this.re.exec(this.flat.text);if(r&&!r[0]&&r.index==e&&(this.re.lastIndex=e+1,r=this.re.exec(this.flat.text)),r){let n=this.flat.from+r.index,i=n+r[0].length;if((this.flat.to>=this.to||r.index+r[0].length<=this.flat.text.length-10)&&(!this.test||this.test(n,i,r)))return this.value={from:n,to:i,match:r},this.matchPos=F(this.text,i+(n==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=E.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}}typeof Symbol<"u"&&(V.prototype[Symbol.iterator]=Y.prototype[Symbol.iterator]=function(){return this});function pe(t){try{return new RegExp(t,y),!0}catch{return!1}}function F(t,e){if(e>=t.length)return e;let r=t.lineAt(e),n;for(;e<r.to&&(n=r.text.charCodeAt(e-r.from))>=56320&&n<57344;)e++;return e}function $(t){let e=String(t.state.doc.lineAt(t.state.selection.main.head).number),r=(0,u.Z)("input",{class:"cm-textfield",name:"line",value:e}),n=(0,u.Z)("form",{class:"cm-gotoLine",onkeydown:s=>{s.keyCode==27?(s.preventDefault(),t.dispatch({effects:w.of(!1)}),t.focus()):s.keyCode==13&&(s.preventDefault(),i())},onsubmit:s=>{s.preventDefault(),i()}},(0,u.Z)("label",t.state.phrase("Go to line"),": ",r)," ",(0,u.Z)("button",{class:"cm-button",type:"submit"},t.state.phrase("go")));function i(){let s=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(r.value);if(!s)return;let{state:o}=t,l=o.doc.lineAt(o.selection.main.head),[,a,f,g,S]=s,Z=g?+g.slice(1):0,A=f?+f:l.number;if(f&&S){let X=A/100;a&&(X=X*(a=="-"?-1:1)+l.number/o.doc.lines),A=Math.round(o.doc.lines*X)}else f&&a&&(A=A*(a=="-"?-1:1)+l.number);let ue=o.doc.line(Math.max(1,Math.min(o.doc.lines,A))),fe=c.EditorSelection.cursor(ue.from+Math.max(0,Math.min(Z,ue.length)));t.dispatch({effects:[w.of(!1),h.EditorView.scrollIntoView(fe.from,{y:"center"})],selection:fe}),t.focus()}return{dom:n}}const w=c.StateEffect.define(),ee=c.StateField.define({create(){return!0},update(t,e){for(let r of e.effects)r.is(w)&&(t=r.value);return t},provide:t=>h.showPanel.from(t,e=>e?$:null)}),te=t=>{let e=(0,h.getPanel)(t,$);if(!e){let r=[w.of(!0)];t.state.field(ee,!1)==null&&r.push(c.StateEffect.appendConfig.of([ee,ge])),t.dispatch({effects:r}),e=(0,h.getPanel)(t,$)}return e&&e.dom.querySelector("input").select(),!0},ge=h.EditorView.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),me={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},re=c.Facet.define({combine(t){return(0,c.combineConfig)(t,me,{highlightWordAroundCursor:(e,r)=>e||r,minSelectionLength:Math.min,maxMatches:Math.min})}});function xe(t){let e=[ve,Me];return t&&e.push(re.of(t)),e}const Se=h.Decoration.mark({class:"cm-selectionMatch"}),ye=h.Decoration.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function ne(t,e,r,n){return(r==0||t(e.sliceDoc(r-1,r))!=c.CharCategory.Word)&&(n==e.doc.length||t(e.sliceDoc(n,n+1))!=c.CharCategory.Word)}function Ce(t,e,r,n){return t(e.sliceDoc(r,r+1))==c.CharCategory.Word&&t(e.sliceDoc(n-1,n))==c.CharCategory.Word}const Me=h.ViewPlugin.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.selectionSet||t.docChanged||t.viewportChanged)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=t.state.facet(re),{state:r}=t,n=r.selection;if(n.ranges.length>1)return h.Decoration.none;let i=n.main,s,o=null;if(i.empty){if(!e.highlightWordAroundCursor)return h.Decoration.none;let a=r.wordAt(i.head);if(!a)return h.Decoration.none;o=r.charCategorizer(i.head),s=r.sliceDoc(a.from,a.to)}else{let a=i.to-i.from;if(a<e.minSelectionLength||a>200)return h.Decoration.none;if(e.wholeWords){if(s=r.sliceDoc(i.from,i.to),o=r.charCategorizer(i.head),!(ne(o,r,i.from,i.to)&&Ce(o,r,i.from,i.to)))return h.Decoration.none}else if(s=r.sliceDoc(i.from,i.to),!s)return h.Decoration.none}let l=[];for(let a of t.visibleRanges){let f=new d(r.doc,s,a.from,a.to);for(;!f.next().done;){let{from:g,to:S}=f.value;if((!o||ne(o,r,g,S))&&(i.empty&&g<=i.from&&S>=i.to?l.push(ye.range(g,S)):(g>=i.to||S<=i.from)&&l.push(Se.range(g,S)),l.length>e.maxMatches))return h.Decoration.none}}return h.Decoration.set(l)}},{decorations:t=>t.decorations}),ve=h.EditorView.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),Ee=({state:t,dispatch:e})=>{let{selection:r}=t,n=c.EditorSelection.create(r.ranges.map(i=>t.wordAt(i.head)||c.EditorSelection.cursor(i.head)),r.mainIndex);return n.eq(r)?!1:(e(t.update({selection:n})),!0)};function be(t,e){let{main:r,ranges:n}=t.selection,i=t.wordAt(r.head),s=i&&i.from==r.from&&i.to==r.to;for(let o=!1,l=new d(t.doc,e,n[n.length-1].to);;)if(l.next(),l.done){if(o)return null;l=new d(t.doc,e,0,Math.max(0,n[n.length-1].from-1)),o=!0}else{if(o&&n.some(a=>a.from==l.value.from))continue;if(s){let a=t.wordAt(l.value.from);if(!a||a.from!=l.value.from||a.to!=l.value.to)continue}return l.value}}const ie=({state:t,dispatch:e})=>{let{ranges:r}=t.selection;if(r.some(s=>s.from===s.to))return Ee({state:t,dispatch:e});let n=t.sliceDoc(r[0].from,r[0].to);if(t.selection.ranges.some(s=>t.sliceDoc(s.from,s.to)!=n))return!1;let i=be(t,n);return i?(e(t.update({selection:t.selection.addRange(c.EditorSelection.range(i.from,i.to),!1),effects:h.EditorView.scrollIntoView(i.to)})),!0):!1},v=c.Facet.define({combine(t){return(0,c.combineConfig)(t,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new Oe(e),scrollToMatch:e=>h.EditorView.scrollIntoView(e)})}});function De(t){return t?[v.of(t),J]:J}class B{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||pe(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(r,n)=>n=="n"?`
`:n=="r"?"\r":n=="t"?"	":"\\")}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord}create(){return this.regexp?new Pe(this):new Le(this)}getCursor(e,r=0,n){let i=e.doc?e:c.EditorState.create({doc:e});return n==null&&(n=i.doc.length),this.regexp?D(this,i,r,n):b(this,i,r,n)}}class se{constructor(e){this.spec=e}}function b(t,e,r,n){return new d(e.doc,t.unquoted,r,n,t.caseSensitive?void 0:i=>i.toLowerCase(),t.wholeWord?ke(e.doc,e.charCategorizer(e.selection.main.head)):void 0)}function ke(t,e){return(r,n,i,s)=>((s>r||s+i.length<n)&&(s=Math.max(0,r-2),i=t.sliceString(s,Math.min(t.length,n+2))),(e(R(i,r-s))!=c.CharCategory.Word||e(T(i,r-s))!=c.CharCategory.Word)&&(e(T(i,n-s))!=c.CharCategory.Word||e(R(i,n-s))!=c.CharCategory.Word))}class Le extends se{constructor(e){super(e)}nextMatch(e,r,n){let i=b(this.spec,e,n,e.doc.length).nextOverlapping();return i.done&&(i=b(this.spec,e,0,r).nextOverlapping()),i.done?null:i.value}prevMatchInRange(e,r,n){for(let i=n;;){let s=Math.max(r,i-1e4-this.spec.unquoted.length),o=b(this.spec,e,s,i),l=null;for(;!o.nextOverlapping().done;)l=o.value;if(l)return l;if(s==r)return null;i-=1e4}}prevMatch(e,r,n){return this.prevMatchInRange(e,0,r)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,r){let n=b(this.spec,e,0,e.doc.length),i=[];for(;!n.next().done;){if(i.length>=r)return null;i.push(n.value)}return i}highlight(e,r,n,i){let s=b(this.spec,e,Math.max(0,r-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!s.next().done;)i(s.value.from,s.value.to)}}function D(t,e,r,n){return new V(e.doc,t.search,{ignoreCase:!t.caseSensitive,test:t.wholeWord?We(e.charCategorizer(e.selection.main.head)):void 0},r,n)}function R(t,e){return t.slice((0,c.findClusterBreak)(t,e,!1),e)}function T(t,e){return t.slice(e,(0,c.findClusterBreak)(t,e))}function We(t){return(e,r,n)=>!n[0].length||(t(R(n.input,n.index))!=c.CharCategory.Word||t(T(n.input,n.index))!=c.CharCategory.Word)&&(t(T(n.input,n.index+n[0].length))!=c.CharCategory.Word||t(R(n.input,n.index+n[0].length))!=c.CharCategory.Word)}class Pe extends se{nextMatch(e,r,n){let i=D(this.spec,e,n,e.doc.length).next();return i.done&&(i=D(this.spec,e,0,r).next()),i.done?null:i.value}prevMatchInRange(e,r,n){for(let i=1;;i++){let s=Math.max(r,n-i*1e4),o=D(this.spec,e,s,n),l=null;for(;!o.next().done;)l=o.value;if(l&&(s==r||l.from>s+10))return l;if(s==r)return null}}prevMatch(e,r,n){return this.prevMatchInRange(e,0,r)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&\d+])/g,(r,n)=>n=="$"?"$":n=="&"?e.match[0]:n!="0"&&+n<e.match.length?e.match[n]:r)}matchAll(e,r){let n=D(this.spec,e,0,e.doc.length),i=[];for(;!n.next().done;){if(i.length>=r)return null;i.push(n.value)}return i}highlight(e,r,n,i){let s=D(this.spec,e,Math.max(0,r-250),Math.min(n+250,e.doc.length));for(;!s.next().done;)i(s.value.from,s.value.to)}}const k=c.StateEffect.define(),N=c.StateEffect.define(),x=c.StateField.define({create(t){return new z(O(t).create(),null)},update(t,e){for(let r of e.effects)r.is(k)?t=new z(r.value.create(),t.panel):r.is(N)&&(t=new z(t.query,r.value?H:null));return t},provide:t=>h.showPanel.from(t,e=>e.panel)});function Ae(t){let e=t.field(x,!1);return e?e.query.spec:O(t)}function _e(t){var e;return((e=t.field(x,!1))===null||e===void 0?void 0:e.panel)!=null}class z{constructor(e,r){this.query=e,this.panel=r}}const Fe=h.Decoration.mark({class:"cm-searchMatch"}),we=h.Decoration.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Re=h.ViewPlugin.fromClass(class{constructor(t){this.view=t,this.decorations=this.highlight(t.state.field(x))}update(t){let e=t.state.field(x);(e!=t.startState.field(x)||t.docChanged||t.selectionSet||t.viewportChanged)&&(this.decorations=this.highlight(e))}highlight({query:t,panel:e}){if(!e||!t.spec.valid)return h.Decoration.none;let{view:r}=this,n=new c.RangeSetBuilder;for(let i=0,s=r.visibleRanges,o=s.length;i<o;i++){let{from:l,to:a}=s[i];for(;i<o-1&&a>s[i+1].from-2*250;)a=s[++i].to;t.highlight(r.state,l,a,(f,g)=>{let S=r.state.selection.ranges.some(Z=>Z.from==f&&Z.to==g);n.add(f,g,S?we:Fe)})}return n.finish()}},{decorations:t=>t.decorations});function L(t){return e=>{let r=e.state.field(x,!1);return r&&r.query.spec.valid?t(e,r):U(e)}}const W=L((t,{query:e})=>{let{to:r}=t.state.selection.main,n=e.nextMatch(t.state,r,r);if(!n)return!1;let i=c.EditorSelection.single(n.from,n.to),s=t.state.facet(v);return t.dispatch({selection:i,effects:[G(t,n),s.scrollToMatch(i.main,t)],userEvent:"select.search"}),he(t),!0}),P=L((t,{query:e})=>{let{state:r}=t,{from:n}=r.selection.main,i=e.prevMatch(r,n,n);if(!i)return!1;let s=c.EditorSelection.single(i.from,i.to),o=t.state.facet(v);return t.dispatch({selection:s,effects:[G(t,i),o.scrollToMatch(s.main,t)],userEvent:"select.search"}),he(t),!0}),le=L((t,{query:e})=>{let r=e.matchAll(t.state,1e3);return!r||!r.length?!1:(t.dispatch({selection:c.EditorSelection.create(r.map(n=>c.EditorSelection.range(n.from,n.to))),userEvent:"select.search.matches"}),!0)}),oe=({state:t,dispatch:e})=>{let r=t.selection;if(r.ranges.length>1||r.main.empty)return!1;let{from:n,to:i}=r.main,s=[],o=0;for(let l=new d(t.doc,t.sliceDoc(n,i));!l.next().done;){if(s.length>1e3)return!1;l.value.from==n&&(o=s.length),s.push(c.EditorSelection.range(l.value.from,l.value.to))}return e(t.update({selection:c.EditorSelection.create(s,o),userEvent:"select.search.matches"})),!0},K=L((t,{query:e})=>{let{state:r}=t,{from:n,to:i}=r.selection.main;if(r.readOnly)return!1;let s=e.nextMatch(r,n,n);if(!s)return!1;let o=[],l,a,f=[];if(s.from==n&&s.to==i&&(a=r.toText(e.getReplacement(s)),o.push({from:s.from,to:s.to,insert:a}),s=e.nextMatch(r,s.from,s.to),f.push(h.EditorView.announce.of(r.phrase("replaced match on line $",r.doc.lineAt(n).number)+"."))),s){let g=o.length==0||o[0].from>=s.to?0:s.to-s.from-a.length;l=c.EditorSelection.single(s.from-g,s.to-g),f.push(G(t,s)),f.push(r.facet(v).scrollToMatch(l.main,t))}return t.dispatch({changes:o,selection:l,effects:f,userEvent:"input.replace"}),!0}),ae=L((t,{query:e})=>{if(t.state.readOnly)return!1;let r=e.matchAll(t.state,1e9).map(i=>{let{from:s,to:o}=i;return{from:s,to:o,insert:e.getReplacement(i)}});if(!r.length)return!1;let n=t.state.phrase("replaced $ matches",r.length)+".";return t.dispatch({changes:r,effects:h.EditorView.announce.of(n),userEvent:"input.replace.all"}),!0});function H(t){return t.state.facet(v).createPanel(t)}function O(t,e){var r,n,i,s,o;let l=t.selection.main,a=l.empty||l.to>l.from+100?"":t.sliceDoc(l.from,l.to);if(e&&!a)return e;let f=t.facet(v);return new B({search:((r=e?.literal)!==null&&r!==void 0?r:f.literal)?a:a.replace(/\n/g,"\\n"),caseSensitive:(n=e?.caseSensitive)!==null&&n!==void 0?n:f.caseSensitive,literal:(i=e?.literal)!==null&&i!==void 0?i:f.literal,regexp:(s=e?.regexp)!==null&&s!==void 0?s:f.regexp,wholeWord:(o=e?.wholeWord)!==null&&o!==void 0?o:f.wholeWord})}function ce(t){let e=(0,h.getPanel)(t,H);return e&&e.dom.querySelector("[main-field]")}function he(t){let e=ce(t);e&&e==t.root.activeElement&&e.select()}const U=t=>{let e=t.state.field(x,!1);if(e&&e.panel){let r=ce(t);if(r&&r!=t.root.activeElement){let n=O(t.state,e.query.spec);n.valid&&t.dispatch({effects:k.of(n)}),r.focus(),r.select()}}else t.dispatch({effects:[N.of(!0),e?k.of(O(t.state,e.query.spec)):c.StateEffect.appendConfig.of(J)]});return!0},j=t=>{let e=t.state.field(x,!1);if(!e||!e.panel)return!1;let r=(0,h.getPanel)(t,H);return r&&r.dom.contains(t.root.activeElement)&&t.focus(),t.dispatch({effects:N.of(!1)}),!0},Te=[{key:"Mod-f",run:U,scope:"editor search-panel"},{key:"F3",run:W,shift:P,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:W,shift:P,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:j,scope:"editor search-panel"},{key:"Mod-Shift-l",run:oe},{key:"Mod-Alt-g",run:te},{key:"Mod-d",run:ie,preventDefault:!0}];class Oe{constructor(e){this.view=e;let r=this.query=e.state.field(x).query.spec;this.commit=this.commit.bind(this),this.searchField=(0,u.Z)("input",{value:r.search,placeholder:m(e,"Find"),"aria-label":m(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=(0,u.Z)("input",{value:r.replace,placeholder:m(e,"Replace"),"aria-label":m(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=(0,u.Z)("input",{type:"checkbox",name:"case",form:"",checked:r.caseSensitive,onchange:this.commit}),this.reField=(0,u.Z)("input",{type:"checkbox",name:"re",form:"",checked:r.regexp,onchange:this.commit}),this.wordField=(0,u.Z)("input",{type:"checkbox",name:"word",form:"",checked:r.wholeWord,onchange:this.commit});function n(i,s,o){return(0,u.Z)("button",{class:"cm-button",name:i,onclick:s,type:"button"},o)}this.dom=(0,u.Z)("div",{onkeydown:i=>this.keydown(i),class:"cm-search"},[this.searchField,n("next",()=>W(e),[m(e,"next")]),n("prev",()=>P(e),[m(e,"previous")]),n("select",()=>le(e),[m(e,"all")]),(0,u.Z)("label",null,[this.caseField,m(e,"match case")]),(0,u.Z)("label",null,[this.reField,m(e,"regexp")]),(0,u.Z)("label",null,[this.wordField,m(e,"by word")]),...e.state.readOnly?[]:[(0,u.Z)("br"),this.replaceField,n("replace",()=>K(e),[m(e,"replace")]),n("replaceAll",()=>ae(e),[m(e,"replace all")])],(0,u.Z)("button",{name:"close",onclick:()=>j(e),"aria-label":m(e,"close"),type:"button"},["\xD7"])])}commit(){let e=new B({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:k.of(e)}))}keydown(e){(0,h.runScopeHandlers)(this.view,e,"search-panel")?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?P:W)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),K(this.view))}update(e){for(let r of e.transactions)for(let n of r.effects)n.is(k)&&!n.value.eq(this.query)&&this.setQuery(n.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(v).top}}function m(t,e){return t.state.phrase(e)}const q=30,I=/[\s\.,:;?!]/;function G(t,{from:e,to:r}){let n=t.state.doc.lineAt(e),i=t.state.doc.lineAt(r).to,s=Math.max(n.from,e-q),o=Math.min(i,r+q),l=t.state.sliceDoc(s,o);if(s!=n.from){for(let a=0;a<q;a++)if(!I.test(l[a+1])&&I.test(l[a])){l=l.slice(a);break}}if(o!=i){for(let a=l.length-1;a>l.length-q;a--)if(!I.test(l[a-1])&&I.test(l[a])){l=l.slice(0,a);break}}return h.EditorView.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${n.number}.`)}const qe=h.EditorView.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),J=[x,c.Prec.low(Re),qe]},62625:(de,_,C)=>{C.d(_,{Z:()=>h});function h(){var u=arguments[0];typeof u=="string"&&(u=document.createElement(u));var p=1,d=arguments[1];if(d&&typeof d=="object"&&d.nodeType==null&&!Array.isArray(d)){for(var M in d)if(Object.prototype.hasOwnProperty.call(d,M)){var y=d[M];typeof y=="string"?u.setAttribute(M,y):y!=null&&(u[M]=y)}p++}for(;p<arguments.length;p++)c(u,arguments[p]);return u}function c(u,p){if(typeof p=="string")u.appendChild(document.createTextNode(p));else if(p!=null)if(p.nodeType!=null)u.appendChild(p);else if(Array.isArray(p))for(var d=0;d<p.length;d++)c(u,p[d]);else throw new RangeError("Unsupported child node: "+p)}}}]);
