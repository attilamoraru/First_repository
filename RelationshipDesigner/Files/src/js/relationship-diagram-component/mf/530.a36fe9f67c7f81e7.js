(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[530],{80530:($,C,w)=>{w.r(C),w.d(C,{closeLintPanel:()=>R,diagnosticCount:()=>N,forEachDiagnostic:()=>ce,forceLinting:()=>q,lintGutter:()=>ae,lintKeymap:()=>J,linter:()=>Q,nextDiagnostic:()=>B,openLintPanel:()=>O,previousDiagnostic:()=>X,setDiagnostics:()=>M,setDiagnosticsEffect:()=>x});var a=w(63533),m=w(59292),c=w(62625);class g{constructor(e,n,i){this.from=e,this.to=n,this.diagnostic=i}}class u{constructor(e,n,i){this.diagnostics=e,this.panel=n,this.selected=i}static init(e,n,i){let o=e,s=i.facet(y).markerFilter;s&&(o=s(o,i));let l=a.Decoration.set(o.map(r=>r.from==r.to||r.from==r.to-1&&i.doc.lineAt(r.from).to==r.from?a.Decoration.widget({widget:new ee(r),diagnostic:r}).range(r.from):a.Decoration.mark({attributes:{class:"cm-lintRange cm-lintRange-"+r.severity+(r.markClass?" "+r.markClass:"")},diagnostic:r,inclusive:!0}).range(r.from,r.to)),!0);return new u(l,n,b(l))}}function b(t,e=null,n=0){let i=null;return t.between(n,1e9,(o,s,{spec:l})=>{if(!(e&&l.diagnostic!=e))return i=new g(o,s,l.diagnostic),!1}),i}function k(t,e){let n=t.startState.doc.lineAt(e.pos);return!!(t.effects.some(i=>i.is(x))||t.changes.touchesRange(n.from,n.to))}function A(t,e){return t.field(p,!1)?e:e.concat(m.StateEffect.appendConfig.of(W))}function M(t,e){return{effects:A(t,[x.of(e)])}}const x=m.StateEffect.define(),P=m.StateEffect.define(),I=m.StateEffect.define(),p=m.StateField.define({create(){return new u(a.Decoration.none,null,null)},update(t,e){if(e.docChanged){let n=t.diagnostics.map(e.changes),i=null;if(t.selected){let o=e.changes.mapPos(t.selected.from,1);i=b(n,t.selected.diagnostic,o)||b(n,null,o)}t=new u(n,t.panel,i)}for(let n of e.effects)n.is(x)?t=u.init(n.value,t.panel,e.state):n.is(P)?t=new u(t.diagnostics,n.value?T.open:null,t.selected):n.is(I)&&(t=new u(t.diagnostics,t.panel,n.value));return t},provide:t=>[a.showPanel.from(t,e=>e.panel),a.EditorView.decorations.from(t,e=>e.diagnostics)]});function N(t){let e=t.field(p,!1);return e?e.diagnostics.size:0}const z=a.Decoration.mark({class:"cm-lintRange cm-lintRange-active",inclusive:!0});function Y(t,e,n){let{diagnostics:i}=t.state.field(p),o=[],s=2e8,l=0;i.between(e-(n<0?1:0),e+(n>0?1:0),(d,f,{spec:h})=>{e>=d&&e<=f&&(d==f||(e>d||n>0)&&(e<f||n<0))&&(o.push(h.diagnostic),s=Math.min(d,s),l=Math.max(f,l))});let r=t.state.facet(y).tooltipFilter;return r&&(o=r(o,t.state)),o.length?{pos:s,end:l,above:t.state.doc.lineAt(s).to<l,create(){return{dom:F(t,o)}}}:null}function F(t,e){return(0,c.Z)("ul",{class:"cm-tooltip-lint"},e.map(n=>j(t,n,!1)))}const O=t=>{let e=t.state.field(p,!1);(!e||!e.panel)&&t.dispatch({effects:A(t.state,[P.of(!0)])});let n=(0,a.getPanel)(t,T.open);return n&&n.dom.querySelector(".cm-panel-lint ul").focus(),!0},R=t=>{let e=t.state.field(p,!1);return!e||!e.panel?!1:(t.dispatch({effects:P.of(!1)}),!0)},B=t=>{let e=t.state.field(p,!1);if(!e)return!1;let n=t.state.selection.main,i=e.diagnostics.iter(n.to+1);return!i.value&&(i=e.diagnostics.iter(0),!i.value||i.from==n.from&&i.to==n.to)?!1:(t.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0}),!0)},X=t=>{let{state:e}=t,n=e.field(p,!1);if(!n)return!1;let i=e.selection.main,o,s,l,r;return n.diagnostics.between(0,e.doc.length,(d,f)=>{f<i.to&&(o==null||o<d)&&(o=d,s=f),(l==null||d>l)&&(l=d,r=f)}),l==null||o==null&&l==i.from?!1:(t.dispatch({selection:{anchor:o??l,head:s??r},scrollIntoView:!0}),!0)},J=[{key:"Mod-Shift-m",run:O,preventDefault:!0},{key:"F8",run:B}],Z=a.ViewPlugin.fromClass(class{constructor(t){this.view=t,this.timeout=-1,this.set=!0;let{delay:e}=t.state.facet(y);this.lintTime=Date.now()+e,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,e)}run(){let t=Date.now();if(t<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-t);else{this.set=!1;let{state:e}=this.view,{sources:n}=e.facet(y);n.length&&Promise.all(n.map(i=>Promise.resolve(i(this.view)))).then(i=>{let o=i.reduce((s,l)=>s.concat(l));this.view.state.doc==e.doc&&this.view.dispatch(M(this.view.state,o))},i=>{(0,a.logException)(this.view.state,i)})}}update(t){let e=t.state.facet(y);(t.docChanged||e!=t.startState.facet(y)||e.needsRefresh&&e.needsRefresh(t))&&(this.lintTime=Date.now()+e.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,e.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}}),y=m.Facet.define({combine(t){return Object.assign({sources:t.map(e=>e.source).filter(e=>e!=null)},(0,m.combineConfig)(t.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null},{needsRefresh:(e,n)=>e?n?i=>e(i)||n(i):e:n}))}});function Q(t,e={}){return[y.of({source:t,config:e}),Z,W]}function q(t){let e=t.plugin(Z);e&&e.force()}function G(t){let e=[];if(t)e:for(let{name:n}of t){for(let i=0;i<n.length;i++){let o=n[i];if(/[a-zA-Z]/.test(o)&&!e.some(s=>s.toLowerCase()==o.toLowerCase())){e.push(o);continue e}}e.push("")}return e}function j(t,e,n){var i;let o=n?G(e.actions):[];return(0,c.Z)("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},(0,c.Z)("span",{class:"cm-diagnosticText"},e.renderMessage?e.renderMessage():e.message),(i=e.actions)===null||i===void 0?void 0:i.map((s,l)=>{let r=!1,d=de=>{if(de.preventDefault(),r)return;r=!0;let _=b(t.state.field(p).diagnostics,e);_&&s.apply(t,_.from,_.to)},{name:f}=s,h=o[l]?f.indexOf(o[l]):-1,v=h<0?f:[f.slice(0,h),(0,c.Z)("u",f.slice(h,h+1)),f.slice(h+1)];return(0,c.Z)("button",{type:"button",class:"cm-diagnosticAction",onclick:d,onmousedown:d,"aria-label":` Action: ${f}${h<0?"":` (access key "${o[l]})"`}.`},v)}),e.source&&(0,c.Z)("div",{class:"cm-diagnosticSource"},e.source))}class ee extends a.WidgetType{constructor(e){super(),this.diagnostic=e}eq(e){return e.diagnostic==this.diagnostic}toDOM(){return(0,c.Z)("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class V{constructor(e,n){this.diagnostic=n,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=j(e,n,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class T{constructor(e){this.view=e,this.items=[];let n=o=>{if(o.keyCode==27)R(this.view),this.view.focus();else if(o.keyCode==38||o.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(o.keyCode==40||o.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(o.keyCode==36)this.moveSelection(0);else if(o.keyCode==35)this.moveSelection(this.items.length-1);else if(o.keyCode==13)this.view.focus();else if(o.keyCode>=65&&o.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:s}=this.items[this.selectedIndex],l=G(s.actions);for(let r=0;r<l.length;r++)if(l[r].toUpperCase().charCodeAt(0)==o.keyCode){let d=b(this.view.state.field(p).diagnostics,s);d&&s.actions[r].apply(e,d.from,d.to)}}else return;o.preventDefault()},i=o=>{for(let s=0;s<this.items.length;s++)this.items[s].dom.contains(o.target)&&this.moveSelection(s)};this.list=(0,c.Z)("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:n,onclick:i}),this.dom=(0,c.Z)("div",{class:"cm-panel-lint"},this.list,(0,c.Z)("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>R(this.view)},"\xD7")),this.update()}get selectedIndex(){let e=this.view.state.field(p).selected;if(!e)return-1;for(let n=0;n<this.items.length;n++)if(this.items[n].diagnostic==e.diagnostic)return n;return-1}update(){let{diagnostics:e,selected:n}=this.view.state.field(p),i=0,o=!1,s=null;for(e.between(0,this.view.state.doc.length,(l,r,{spec:d})=>{let f=-1,h;for(let v=i;v<this.items.length;v++)if(this.items[v].diagnostic==d.diagnostic){f=v;break}f<0?(h=new V(this.view,d.diagnostic),this.items.splice(i,0,h),o=!0):(h=this.items[f],f>i&&(this.items.splice(i,f-i),o=!0)),n&&h.diagnostic==n.diagnostic?h.dom.hasAttribute("aria-selected")||(h.dom.setAttribute("aria-selected","true"),s=h):h.dom.hasAttribute("aria-selected")&&h.dom.removeAttribute("aria-selected"),i++});i<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)o=!0,this.items.pop();this.items.length==0&&(this.items.push(new V(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),o=!0),s?(this.list.setAttribute("aria-activedescendant",s.id),this.view.requestMeasure({key:this,read:()=>({sel:s.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:l,panel:r})=>{let d=r.height/this.list.offsetHeight;l.top<r.top?this.list.scrollTop-=(r.top-l.top)/d:l.bottom>r.bottom&&(this.list.scrollTop+=(l.bottom-r.bottom)/d)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),o&&this.sync()}sync(){let e=this.list.firstChild;function n(){let i=e;e=i.nextSibling,i.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)n();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)n()}moveSelection(e){if(this.selectedIndex<0)return;let n=this.view.state.field(p),i=b(n.diagnostics,this.items[e].diagnostic);!i||this.view.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0,effects:I.of(i)})}static open(e){return new T(e)}}function D(t,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`}function S(t){return D(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const te=a.EditorView.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:S("#d11")},".cm-lintRange-warning":{backgroundImage:S("orange")},".cm-lintRange-info":{backgroundImage:S("#999")},".cm-lintRange-hint":{backgroundImage:S("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});function H(t){return t=="error"?4:t=="warning"?3:t=="info"?2:1}class ie extends a.GutterMarker{constructor(e){super(),this.diagnostics=e,this.severity=e.reduce((n,i)=>H(n)<H(i.severity)?i.severity:n,"hint")}toDOM(e){let n=document.createElement("div");n.className="cm-lint-marker cm-lint-marker-"+this.severity;let i=this.diagnostics,o=e.state.facet(E).tooltipFilter;return o&&(i=o(i,e.state)),i.length&&(n.onmouseover=()=>oe(e,n,i)),n}}function ne(t,e){let n=i=>{let o=e.getBoundingClientRect();if(!(i.clientX>o.left-10&&i.clientX<o.right+10&&i.clientY>o.top-10&&i.clientY<o.bottom+10)){for(let s=i.target;s;s=s.parentNode)if(s.nodeType==1&&s.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",n),t.state.field(U)&&t.dispatch({effects:L.of(null)})}};window.addEventListener("mousemove",n)}function oe(t,e,n){function i(){let l=t.elementAtHeight(e.getBoundingClientRect().top+5-t.documentTop);t.coordsAtPos(l.from)&&t.dispatch({effects:L.of({pos:l.from,above:!1,create(){return{dom:F(t,n),getCoords:()=>e.getBoundingClientRect()}}})}),e.onmouseout=e.onmousemove=null,ne(t,e)}let{hoverTime:o}=t.state.facet(E),s=setTimeout(i,o);e.onmouseout=()=>{clearTimeout(s),e.onmouseout=e.onmousemove=null},e.onmousemove=()=>{clearTimeout(s),s=setTimeout(i,o)}}function se(t,e){let n=Object.create(null);for(let o of e){let s=t.lineAt(o.from);(n[s.from]||(n[s.from]=[])).push(o)}let i=[];for(let o in n)i.push(new ie(n[o]).range(+o));return m.RangeSet.of(i,!0)}const re=(0,a.gutter)({class:"cm-gutter-lint",markers:t=>t.state.field(K)}),K=m.StateField.define({create(){return m.RangeSet.empty},update(t,e){t=t.map(e.changes);let n=e.state.facet(E).markerFilter;for(let i of e.effects)if(i.is(x)){let o=i.value;n&&(o=n(o||[],e.state)),t=se(e.state.doc,o.slice(0))}return t}}),L=m.StateEffect.define(),U=m.StateField.define({create(){return null},update(t,e){return t&&e.docChanged&&(t=k(e,t)?null:Object.assign(Object.assign({},t),{pos:e.changes.mapPos(t.pos)})),e.effects.reduce((n,i)=>i.is(L)?i.value:n,t)},provide:t=>a.showTooltip.from(t)}),le=a.EditorView.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:D('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:D('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:D('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),W=[p,a.EditorView.decorations.compute([p],t=>{let{selected:e,panel:n}=t.field(p);return!e||!n||e.from==e.to?a.Decoration.none:a.Decoration.set([z.range(e.from,e.to)])}),(0,a.hoverTooltip)(Y,{hideOn:k}),te],E=m.Facet.define({combine(t){return(0,m.combineConfig)(t,{hoverTime:300,markerFilter:null,tooltipFilter:null})}});function ae(t={}){return[E.of(t),K,re,le,U]}function ce(t,e){let n=t.field(p,!1);if(n&&n.diagnostics.size)for(let i=m.RangeSet.iter([n.diagnostics]);i.value;i.next())e(i.value.spec.diagnostic,i.from,i.to)}},62625:($,C,w)=>{w.d(C,{Z:()=>a});function a(){var c=arguments[0];typeof c=="string"&&(c=document.createElement(c));var g=1,u=arguments[1];if(u&&typeof u=="object"&&u.nodeType==null&&!Array.isArray(u)){for(var b in u)if(Object.prototype.hasOwnProperty.call(u,b)){var k=u[b];typeof k=="string"?c.setAttribute(b,k):k!=null&&(c[b]=k)}g++}for(;g<arguments.length;g++)m(c,arguments[g]);return c}function m(c,g){if(typeof g=="string")c.appendChild(document.createTextNode(g));else if(g!=null)if(g.nodeType!=null)c.appendChild(g);else if(Array.isArray(g))for(var u=0;u<g.length;u++)m(c,g[u]);else throw new RangeError("Unsupported child node: "+g)}}}]);
