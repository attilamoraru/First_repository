(self.webpackChunkapp_studio_enterprise_error_list_dialog=self.webpackChunkapp_studio_enterprise_error_list_dialog||[]).push([[9205],{19205:(kn,ke,M)=>{M.r(ke),M.d(ke,{blockComment:()=>Pt,blockUncomment:()=>Gt,copyLineDown:()=>xt,copyLineUp:()=>Et,cursorCharBackward:()=>Zt,cursorCharForward:()=>Yt,cursorCharLeft:()=>ee,cursorCharRight:()=>te,cursorDocEnd:()=>de,cursorDocStart:()=>fe,cursorGroupBackward:()=>en,cursorGroupForward:()=>jt,cursorGroupLeft:()=>Ie,cursorGroupRight:()=>Re,cursorLineBoundaryBackward:()=>We,cursorLineBoundaryForward:()=>Je,cursorLineBoundaryLeft:()=>ze,cursorLineBoundaryRight:()=>Ke,cursorLineDown:()=>re,cursorLineEnd:()=>$e,cursorLineStart:()=>He,cursorLineUp:()=>ne,cursorMatchingBracket:()=>Qe,cursorPageDown:()=>V,cursorPageUp:()=>oe,cursorSubwordBackward:()=>nn,cursorSubwordForward:()=>tn,cursorSyntaxLeft:()=>Ge,cursorSyntaxRight:()=>Fe,defaultKeymap:()=>yn,deleteCharBackward:()=>z,deleteCharForward:()=>pe,deleteGroupBackward:()=>ge,deleteGroupForward:()=>pt,deleteLine:()=>Mt,deleteLineBoundaryBackward:()=>yt,deleteLineBoundaryForward:()=>St,deleteToLineEnd:()=>gt,deleteToLineStart:()=>dn,deleteTrailingWhitespace:()=>hn,emacsStyleKeymap:()=>It,history:()=>Vt,historyField:()=>Nt,historyKeymap:()=>Xt,indentLess:()=>Se,indentMore:()=>H,indentSelection:()=>bt,indentWithTab:()=>Sn,insertBlankLine:()=>Tt,insertNewline:()=>mn,insertNewlineAndIndent:()=>wt,insertTab:()=>gn,invertedEffects:()=>Ee,isolateHistory:()=>De,lineComment:()=>Ut,lineUncomment:()=>vt,moveLineDown:()=>At,moveLineUp:()=>Lt,redo:()=>v,redoDepth:()=>Wt,redoSelection:()=>we,selectAll:()=>ut,selectCharBackward:()=>cn,selectCharForward:()=>ln,selectCharLeft:()=>le,selectCharRight:()=>ce,selectDocEnd:()=>me,selectDocStart:()=>he,selectGroupBackward:()=>un,selectGroupForward:()=>sn,selectGroupLeft:()=>Xe,selectGroupRight:()=>Ye,selectLine:()=>at,selectLineBoundaryBackward:()=>ot,selectLineBoundaryForward:()=>rt,selectLineBoundaryLeft:()=>lt,selectLineBoundaryRight:()=>ct,selectLineDown:()=>se,selectLineEnd:()=>st,selectLineStart:()=>it,selectLineUp:()=>ie,selectMatchingBracket:()=>on,selectPageDown:()=>ae,selectPageUp:()=>ue,selectParentSyntax:()=>ft,selectSubwordBackward:()=>fn,selectSubwordForward:()=>an,selectSyntaxLeft:()=>je,selectSyntaxRight:()=>et,simplifySelection:()=>dt,splitLine:()=>kt,standardKeymap:()=>Rt,toggleBlockComment:()=>Le,toggleBlockCommentByLine:()=>Ae,toggleComment:()=>Be,toggleLineComment:()=>Ce,transposeChars:()=>Bt,undo:()=>Z,undoDepth:()=>Jt,undoSelection:()=>Me});var u=M(59292),E=M(63533),m=M(90212),q=M(82064);const Be=e=>{let{state:t}=e,r=t.doc.lineAt(t.selection.main.from),n=Q(e.state,r.from);return n.line?Ce(e):n.block?Ae(e):!1};function x(e,t){return({state:r,dispatch:n})=>{if(r.readOnly)return!1;let l=e(t,r);return l?(n(r.update(l)),!0):!1}}const Ce=x(X,0),Ut=x(X,1),vt=x(X,2),Le=x(I,0),Pt=x(I,1),Gt=x(I,2),Ae=x((e,t)=>I(e,t,_t(t)),0);function Q(e,t){let r=e.languageDataAt("commentTokens",t);return r.length?r[0]:{}}const O=50;function Ft(e,{open:t,close:r},n,l){let o=e.sliceDoc(n-O,n),c=e.sliceDoc(l,l+O),i=/\s*$/.exec(o)[0].length,s=/^\s*/.exec(c)[0].length,f=o.length-i;if(o.slice(f-t.length,f)==t&&c.slice(s,s+r.length)==r)return{open:{pos:n-i,margin:i&&1},close:{pos:l+s,margin:s&&1}};let a,d;l-n<=2*O?a=d=e.sliceDoc(n,l):(a=e.sliceDoc(n,n+O),d=e.sliceDoc(l-O,l));let h=/^\s*/.exec(a)[0].length,C=/\s*$/.exec(d)[0].length,S=d.length-C-r.length;return a.slice(h,h+t.length)==t&&d.slice(S,S+r.length)==r?{open:{pos:n+h+t.length,margin:/\s/.test(a.charAt(h+t.length))?1:0},close:{pos:l-C-r.length,margin:/\s/.test(d.charAt(S-1))?1:0}}:null}function _t(e){let t=[];for(let r of e.selection.ranges){let n=e.doc.lineAt(r.from),l=r.to<=n.to?n:e.doc.lineAt(r.to),o=t.length-1;o>=0&&t[o].to>n.from?t[o].to=l.to:t.push({from:n.from+/^\s*/.exec(n.text)[0].length,to:l.to})}return t}function I(e,t,r=t.selection.ranges){let n=r.map(o=>Q(t,o.from).block);if(!n.every(o=>o))return null;let l=r.map((o,c)=>Ft(t,n[c],o.from,o.to));if(e!=2&&!l.every(o=>o))return{changes:t.changes(r.map((o,c)=>l[c]?[]:[{from:o.from,insert:n[c].open+" "},{from:o.to,insert:" "+n[c].close}]))};if(e!=1&&l.some(o=>o)){let o=[];for(let c=0,i;c<l.length;c++)if(i=l[c]){let s=n[c],{open:f,close:a}=i;o.push({from:f.pos-s.open.length,to:f.pos+f.margin},{from:a.pos-a.margin,to:a.pos+s.close.length})}return{changes:o}}return null}function X(e,t,r=t.selection.ranges){let n=[],l=-1;for(let{from:o,to:c}of r){let i=n.length,s=1e9,f=Q(t,o).line;if(!!f){for(let a=o;a<=c;){let d=t.doc.lineAt(a);if(d.from>l&&(o==c||c>d.from)){l=d.from;let h=/^\s*/.exec(d.text)[0].length,C=h==d.length,S=d.text.slice(h,h+f.length)==f?h:-1;h<d.text.length&&h<s&&(s=h),n.push({line:d,comment:S,token:f,indent:h,empty:C,single:!1})}a=d.to+1}if(s<1e9)for(let a=i;a<n.length;a++)n[a].indent<n[a].line.text.length&&(n[a].indent=s);n.length==i+1&&(n[i].single=!0)}}if(e!=2&&n.some(o=>o.comment<0&&(!o.empty||o.single))){let o=[];for(let{line:i,token:s,indent:f,empty:a,single:d}of n)(d||!a)&&o.push({from:i.from+f,insert:s+" "});let c=t.changes(o);return{changes:c,selection:t.selection.map(c,1)}}else if(e!=1&&n.some(o=>o.comment>=0)){let o=[];for(let{line:c,comment:i,token:s}of n)if(i>=0){let f=c.from+i,a=f+s.length;c.text[a-c.from]==" "&&a++,o.push({from:f,to:a})}return{changes:o}}return null}const Y=u.Annotation.define(),De=u.Annotation.define(),Ee=u.Facet.define(),xe=u.Facet.define({combine(e){return(0,u.combineConfig)(e,{minDepth:100,newGroupDelay:500,joinToEvent:(t,r)=>r},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(t,r)=>(n,l)=>t(n,l)||r(n,l)})}}),R=u.StateField.define({create(){return L.empty},update(e,t){let r=t.state.facet(xe),n=t.annotation(Y);if(n){let s=g.fromTransaction(t,n.selection),f=n.side,a=f==0?e.undone:e.done;return s?a=P(a,a.length,r.minDepth,s):a=be(a,t.startState.selection),new L(f==0?n.rest:a,f==0?a:n.rest)}let l=t.annotation(De);if((l=="full"||l=="before")&&(e=e.isolate()),t.annotation(u.Transaction.addToHistory)===!1)return t.changes.empty?e:e.addMapping(t.changes.desc);let o=g.fromTransaction(t),c=t.annotation(u.Transaction.time),i=t.annotation(u.Transaction.userEvent);return o?e=e.addChanges(o,c,i,r,t):t.selection&&(e=e.addSelection(t.startState.selection,c,i,r.newGroupDelay)),(l=="full"||l=="after")&&(e=e.isolate()),e},toJSON(e){return{done:e.done.map(t=>t.toJSON()),undone:e.undone.map(t=>t.toJSON())}},fromJSON(e){return new L(e.done.map(g.fromJSON),e.undone.map(g.fromJSON))}});function Vt(e={}){return[R,xe.of(e),E.EditorView.domEventHandlers({beforeinput(t,r){let n=t.inputType=="historyUndo"?Z:t.inputType=="historyRedo"?v:null;return n?(t.preventDefault(),n(r)):!1}})]}const Nt=R;function U(e,t){return function({state:r,dispatch:n}){if(!t&&r.readOnly)return!1;let l=r.field(R,!1);if(!l)return!1;let o=l.pop(e,r,t);return o?(n(o),!0):!1}}const Z=U(0,!1),v=U(1,!1),Me=U(0,!0),we=U(1,!0);function Te(e){return function(t){let r=t.field(R,!1);if(!r)return 0;let n=e==0?r.done:r.undone;return n.length-(n.length&&!n[0].changes?1:0)}}const Jt=Te(0),Wt=Te(1);class g{constructor(t,r,n,l,o){this.changes=t,this.effects=r,this.mapped=n,this.startSelection=l,this.selectionsAfter=o}setSelAfter(t){return new g(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){var t,r,n;return{changes:(t=this.changes)===null||t===void 0?void 0:t.toJSON(),mapped:(r=this.mapped)===null||r===void 0?void 0:r.toJSON(),startSelection:(n=this.startSelection)===null||n===void 0?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map(l=>l.toJSON())}}static fromJSON(t){return new g(t.changes&&u.ChangeSet.fromJSON(t.changes),[],t.mapped&&u.ChangeDesc.fromJSON(t.mapped),t.startSelection&&u.EditorSelection.fromJSON(t.startSelection),t.selectionsAfter.map(u.EditorSelection.fromJSON))}static fromTransaction(t,r){let n=k;for(let l of t.startState.facet(Ee)){let o=l(t);o.length&&(n=n.concat(o))}return!n.length&&t.changes.empty?null:new g(t.changes.invert(t.startState.doc),n,void 0,r||t.startState.selection,k)}static selection(t){return new g(void 0,k,void 0,void 0,t)}}function P(e,t,r,n){let l=t+1>r+20?t-r-1:0,o=e.slice(l,t);return o.push(n),o}function zt(e,t){let r=[],n=!1;return e.iterChangedRanges((l,o)=>r.push(l,o)),t.iterChangedRanges((l,o,c,i)=>{for(let s=0;s<r.length;){let f=r[s++],a=r[s++];i>=f&&c<=a&&(n=!0)}}),n}function Kt(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((r,n)=>r.empty!=t.ranges[n].empty).length===0}function Oe(e,t){return e.length?t.length?e.concat(t):e:t}const k=[],Ht=200;function be(e,t){if(e.length){let r=e[e.length-1],n=r.selectionsAfter.slice(Math.max(0,r.selectionsAfter.length-Ht));return n.length&&n[n.length-1].eq(t)?e:(n.push(t),P(e,e.length-1,1e9,r.setSelAfter(n)))}else return[g.selection([t])]}function $t(e){let t=e[e.length-1],r=e.slice();return r[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),r}function j(e,t){if(!e.length)return e;let r=e.length,n=k;for(;r;){let l=qt(e[r-1],t,n);if(l.changes&&!l.changes.empty||l.effects.length){let o=e.slice(0,r);return o[r-1]=l,o}else t=l.mapped,r--,n=l.selectionsAfter}return n.length?[g.selection(n)]:k}function qt(e,t,r){let n=Oe(e.selectionsAfter.length?e.selectionsAfter.map(i=>i.map(t)):k,r);if(!e.changes)return g.selection(n);let l=e.changes.map(t),o=t.mapDesc(e.changes,!0),c=e.mapped?e.mapped.composeDesc(o):o;return new g(l,u.StateEffect.mapEffects(e.effects,t),c,e.startSelection.map(o),n)}const Qt=/^(input\.type|delete)($|\.)/;class L{constructor(t,r,n=0,l=void 0){this.done=t,this.undone=r,this.prevTime=n,this.prevUserEvent=l}isolate(){return this.prevTime?new L(this.done,this.undone):this}addChanges(t,r,n,l,o){let c=this.done,i=c[c.length-1];return i&&i.changes&&!i.changes.empty&&t.changes&&(!n||Qt.test(n))&&(!i.selectionsAfter.length&&r-this.prevTime<l.newGroupDelay&&l.joinToEvent(o,zt(i.changes,t.changes))||n=="input.type.compose")?c=P(c,c.length-1,l.minDepth,new g(t.changes.compose(i.changes),Oe(t.effects,i.effects),i.mapped,i.startSelection,k)):c=P(c,c.length,l.minDepth,t),new L(c,k,r,n)}addSelection(t,r,n,l){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:k;return o.length>0&&r-this.prevTime<l&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&Kt(o[o.length-1],t)?this:new L(be(this.done,t),this.undone,r,n)}addMapping(t){return new L(j(this.done,t),j(this.undone,t),this.prevTime,this.prevUserEvent)}pop(t,r,n){let l=t==0?this.done:this.undone;if(l.length==0)return null;let o=l[l.length-1],c=o.selectionsAfter[0]||r.selection;if(n&&o.selectionsAfter.length)return r.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:Y.of({side:t,rest:$t(l),selection:c}),userEvent:t==0?"select.undo":"select.redo",scrollIntoView:!0});if(o.changes){let i=l.length==1?k:l.slice(0,l.length-1);return o.mapped&&(i=j(i,o.mapped)),r.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:Y.of({side:t,rest:i,selection:c}),filter:!1,userEvent:t==0?"undo":"redo",scrollIntoView:!0})}else return null}}L.empty=new L(k,k);const Xt=[{key:"Mod-z",run:Z,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:v,preventDefault:!0},{linux:"Ctrl-Shift-z",run:v,preventDefault:!0},{key:"Mod-u",run:Me,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:we,preventDefault:!0}];function w(e,t){return u.EditorSelection.create(e.ranges.map(t),e.mainIndex)}function A(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function B({state:e,dispatch:t},r){let n=w(e.selection,r);return n.eq(e.selection,!0)?!1:(t(A(e,n)),!0)}function b(e,t){return u.EditorSelection.cursor(t?e.to:e.from)}function G(e,t){return B(e,r=>r.empty?e.moveByChar(r,t):b(r,t))}function p(e){return e.textDirectionAt(e.state.selection.main.head)==E.Direction.LTR}const ee=e=>G(e,!p(e)),te=e=>G(e,p(e)),Yt=e=>G(e,!0),Zt=e=>G(e,!1);function F(e,t){return B(e,r=>r.empty?e.moveByGroup(r,t):b(r,t))}const Ie=e=>F(e,!p(e)),Re=e=>F(e,p(e)),jt=e=>F(e,!0),en=e=>F(e,!1),Ue=typeof Intl<"u"&&Intl.Segmenter?new Intl.Segmenter(void 0,{granularity:"word"}):null;function ve(e,t,r){let n=e.state.charCategorizer(t.from),l=u.CharCategory.Space,o=t.from,c=0,i=!1,s=!1,f=!1,a=h=>{if(i)return!1;o+=r?h.length:-h.length;let C=n(h),S;if(C==u.CharCategory.Word&&h.charCodeAt(0)<128&&/[\W_]/.test(h)&&(C=-1),l==u.CharCategory.Space&&(l=C),l!=C)return!1;if(l==u.CharCategory.Word)if(h.toLowerCase()==h){if(!r&&s)return!1;f=!0}else if(f){if(r)return!1;i=!0}else{if(s&&r&&n(S=e.state.sliceDoc(o,o+1))==u.CharCategory.Word&&S.toLowerCase()==S)return!1;s=!0}return c++,!0},d=e.moveByChar(t,r,h=>(a(h),a));if(Ue&&l==u.CharCategory.Word&&d.from==t.from+c*(r?1:-1)){let h=Math.min(t.head,d.head),C=Math.max(t.head,d.head),S=e.state.sliceDoc(h,C);if(S.length>1&&/[\u4E00-\uffff]/.test(S)){let $=Array.from(Ue.segment(S));if($.length>1)return r?u.EditorSelection.cursor(t.head+$[1].index,-1):u.EditorSelection.cursor(d.head+$[$.length-1].index,1)}}return d}function Pe(e,t){return B(e,r=>r.empty?ve(e,r,t):b(r,t))}const tn=e=>Pe(e,!0),nn=e=>Pe(e,!1);function rn(e,t,r){if(t.type.prop(r))return!0;let n=t.to-t.from;return n&&(n>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function _(e,t,r){let n=(0,m.syntaxTree)(e).resolveInner(t.head),l=r?q.md.closedBy:q.md.openedBy;for(let s=t.head;;){let f=r?n.childAfter(s):n.childBefore(s);if(!f)break;rn(e,f,l)?n=f:s=r?f.to:f.from}let o=n.type.prop(l),c,i;return o&&(c=r?(0,m.matchBrackets)(e,n.from,1):(0,m.matchBrackets)(e,n.to,-1))&&c.matched?i=r?c.end.to:c.end.from:i=r?n.to:n.from,u.EditorSelection.cursor(i,r?-1:1)}const Ge=e=>B(e,t=>_(e.state,t,!p(e))),Fe=e=>B(e,t=>_(e.state,t,p(e)));function _e(e,t){return B(e,r=>{if(!r.empty)return b(r,t);let n=e.moveVertically(r,t);return n.head!=r.head?n:e.moveToLineBoundary(r,t)})}const ne=e=>_e(e,!1),re=e=>_e(e,!0);function Ve(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,r=0,n=0,l;if(t){for(let o of e.state.facet(E.EditorView.scrollMargins)){let c=o(e);c?.top&&(r=Math.max(c?.top,r)),c?.bottom&&(n=Math.max(c?.bottom,n))}l=e.scrollDOM.clientHeight-r-n}else l=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:r,marginBottom:n,selfScroll:t,height:Math.max(e.defaultLineHeight,l-5)}}function Ne(e,t){let r=Ve(e),{state:n}=e,l=w(n.selection,c=>c.empty?e.moveVertically(c,t,r.height):b(c,t));if(l.eq(n.selection))return!1;let o;if(r.selfScroll){let c=e.coordsAtPos(n.selection.main.head),i=e.scrollDOM.getBoundingClientRect(),s=i.top+r.marginTop,f=i.bottom-r.marginBottom;c&&c.top>s&&c.bottom<f&&(o=E.EditorView.scrollIntoView(l.main.head,{y:"start",yMargin:c.top-s}))}return e.dispatch(A(n,l),{effects:o}),!0}const oe=e=>Ne(e,!1),V=e=>Ne(e,!0);function D(e,t,r){let n=e.lineBlockAt(t.head),l=e.moveToLineBoundary(t,r);if(l.head==t.head&&l.head!=(r?n.to:n.from)&&(l=e.moveToLineBoundary(t,r,!1)),!r&&l.head==n.from&&n.length){let o=/^\s*/.exec(e.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length;o&&t.head!=n.from+o&&(l=u.EditorSelection.cursor(n.from+o))}return l}const Je=e=>B(e,t=>D(e,t,!0)),We=e=>B(e,t=>D(e,t,!1)),ze=e=>B(e,t=>D(e,t,!p(e))),Ke=e=>B(e,t=>D(e,t,p(e))),He=e=>B(e,t=>u.EditorSelection.cursor(e.lineBlockAt(t.head).from,1)),$e=e=>B(e,t=>u.EditorSelection.cursor(e.lineBlockAt(t.head).to,-1));function qe(e,t,r){let n=!1,l=w(e.selection,o=>{let c=(0,m.matchBrackets)(e,o.head,-1)||(0,m.matchBrackets)(e,o.head,1)||o.head>0&&(0,m.matchBrackets)(e,o.head-1,1)||o.head<e.doc.length&&(0,m.matchBrackets)(e,o.head+1,-1);if(!c||!c.end)return o;n=!0;let i=c.start.from==o.head?c.end.to:c.end.from;return r?u.EditorSelection.range(o.anchor,i):u.EditorSelection.cursor(i)});return n?(t(A(e,l)),!0):!1}const Qe=({state:e,dispatch:t})=>qe(e,t,!1),on=({state:e,dispatch:t})=>qe(e,t,!0);function y(e,t){let r=w(e.state.selection,n=>{let l=t(n);return u.EditorSelection.range(n.anchor,l.head,l.goalColumn,l.bidiLevel||void 0)});return r.eq(e.state.selection)?!1:(e.dispatch(A(e.state,r)),!0)}function N(e,t){return y(e,r=>e.moveByChar(r,t))}const le=e=>N(e,!p(e)),ce=e=>N(e,p(e)),ln=e=>N(e,!0),cn=e=>N(e,!1);function J(e,t){return y(e,r=>e.moveByGroup(r,t))}const Xe=e=>J(e,!p(e)),Ye=e=>J(e,p(e)),sn=e=>J(e,!0),un=e=>J(e,!1);function Ze(e,t){return y(e,r=>ve(e,r,t))}const an=e=>Ze(e,!0),fn=e=>Ze(e,!1),je=e=>y(e,t=>_(e.state,t,!p(e))),et=e=>y(e,t=>_(e.state,t,p(e)));function tt(e,t){return y(e,r=>e.moveVertically(r,t))}const ie=e=>tt(e,!1),se=e=>tt(e,!0);function nt(e,t){return y(e,r=>e.moveVertically(r,t,Ve(e).height))}const ue=e=>nt(e,!1),ae=e=>nt(e,!0),rt=e=>y(e,t=>D(e,t,!0)),ot=e=>y(e,t=>D(e,t,!1)),lt=e=>y(e,t=>D(e,t,!p(e))),ct=e=>y(e,t=>D(e,t,p(e))),it=e=>y(e,t=>u.EditorSelection.cursor(e.lineBlockAt(t.head).from)),st=e=>y(e,t=>u.EditorSelection.cursor(e.lineBlockAt(t.head).to)),fe=({state:e,dispatch:t})=>(t(A(e,{anchor:0})),!0),de=({state:e,dispatch:t})=>(t(A(e,{anchor:e.doc.length})),!0),he=({state:e,dispatch:t})=>(t(A(e,{anchor:e.selection.main.anchor,head:0})),!0),me=({state:e,dispatch:t})=>(t(A(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),ut=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"})),!0),at=({state:e,dispatch:t})=>{let r=K(e).map(({from:n,to:l})=>u.EditorSelection.range(n,Math.min(l+1,e.doc.length)));return t(e.update({selection:u.EditorSelection.create(r),userEvent:"select"})),!0},ft=({state:e,dispatch:t})=>{let r=w(e.selection,n=>{var l;let o=(0,m.syntaxTree)(e).resolveStack(n.from,1);for(let c=o;c;c=c.next){let{node:i}=c;if((i.from<n.from&&i.to>=n.to||i.to>n.to&&i.from<=n.from)&&((l=i.parent)===null||l===void 0?void 0:l.parent))return u.EditorSelection.range(i.to,i.from)}return n});return t(A(e,r)),!0},dt=({state:e,dispatch:t})=>{let r=e.selection,n=null;return r.ranges.length>1?n=u.EditorSelection.create([r.main]):r.main.empty||(n=u.EditorSelection.create([u.EditorSelection.cursor(r.main.head)])),n?(t(A(e,n)),!0):!1};function T(e,t){if(e.state.readOnly)return!1;let r="delete.selection",{state:n}=e,l=n.changeByRange(o=>{let{from:c,to:i}=o;if(c==i){let s=t(o);s<c?(r="delete.backward",s=W(e,s,!1)):s>c&&(r="delete.forward",s=W(e,s,!0)),c=Math.min(c,s),i=Math.max(i,s)}else c=W(e,c,!1),i=W(e,i,!0);return c==i?{range:o}:{changes:{from:c,to:i},range:u.EditorSelection.cursor(c,c<o.head?-1:1)}});return l.changes.empty?!1:(e.dispatch(n.update(l,{scrollIntoView:!0,userEvent:r,effects:r=="delete.selection"?E.EditorView.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function W(e,t,r){if(e instanceof E.EditorView)for(let n of e.state.facet(E.EditorView.atomicRanges).map(l=>l(e)))n.between(t,t,(l,o)=>{l<t&&o>t&&(t=r?o:l)});return t}const ht=(e,t)=>T(e,r=>{let n=r.from,{state:l}=e,o=l.doc.lineAt(n),c,i;if(!t&&n>o.from&&n<o.from+200&&!/[^ \t]/.test(c=o.text.slice(0,n-o.from))){if(c[c.length-1]=="	")return n-1;let s=(0,u.countColumn)(c,l.tabSize),f=s%(0,m.getIndentUnit)(l)||(0,m.getIndentUnit)(l);for(let a=0;a<f&&c[c.length-1-a]==" ";a++)n--;i=n}else i=(0,u.findClusterBreak)(o.text,n-o.from,t,t)+o.from,i==n&&o.number!=(t?l.doc.lines:1)?i+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(o.text.slice(i-o.from,n-o.from))&&(i=(0,u.findClusterBreak)(o.text,i-o.from,!1,!1)+o.from);return i}),z=e=>ht(e,!1),pe=e=>ht(e,!0),mt=(e,t)=>T(e,r=>{let n=r.head,{state:l}=e,o=l.doc.lineAt(n),c=l.charCategorizer(n);for(let i=null;;){if(n==(t?o.to:o.from)){n==r.head&&o.number!=(t?l.doc.lines:1)&&(n+=t?1:-1);break}let s=(0,u.findClusterBreak)(o.text,n-o.from,t)+o.from,f=o.text.slice(Math.min(n,s)-o.from,Math.max(n,s)-o.from),a=c(f);if(i!=null&&a!=i)break;(f!=" "||n!=r.head)&&(i=a),n=s}return n}),ge=e=>mt(e,!1),pt=e=>mt(e,!0),gt=e=>T(e,t=>{let r=e.lineBlockAt(t.head).to;return t.head<r?r:Math.min(e.state.doc.length,t.head+1)}),dn=e=>T(e,t=>{let r=e.lineBlockAt(t.head).from;return t.head>r?r:Math.max(0,t.head-1)}),yt=e=>T(e,t=>{let r=e.moveToLineBoundary(t,!1).head;return t.head>r?r:Math.max(0,t.head-1)}),St=e=>T(e,t=>{let r=e.moveToLineBoundary(t,!0).head;return t.head<r?r:Math.min(e.state.doc.length,t.head+1)}),hn=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=[];for(let n=0,l="",o=e.doc.iter();;){if(o.next(),o.lineBreak||o.done){let c=l.search(/\s+$/);if(c>-1&&r.push({from:n-(l.length-c),to:n}),o.done)break;l=""}else l=o.value;n+=o.value.length}return r.length?(t(e.update({changes:r,userEvent:"delete"})),!0):!1},kt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=e.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:u.Text.of(["",""])},range:u.EditorSelection.cursor(n.from)}));return t(e.update(r,{scrollIntoView:!0,userEvent:"input"})),!0},Bt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=e.changeByRange(n=>{if(!n.empty||n.from==0||n.from==e.doc.length)return{range:n};let l=n.from,o=e.doc.lineAt(l),c=l==o.from?l-1:(0,u.findClusterBreak)(o.text,l-o.from,!1)+o.from,i=l==o.to?l+1:(0,u.findClusterBreak)(o.text,l-o.from,!0)+o.from;return{changes:{from:c,to:i,insert:e.doc.slice(l,i).append(e.doc.slice(c,l))},range:u.EditorSelection.cursor(i)}});return r.changes.empty?!1:(t(e.update(r,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function K(e){let t=[],r=-1;for(let n of e.selection.ranges){let l=e.doc.lineAt(n.from),o=e.doc.lineAt(n.to);if(!n.empty&&n.to==o.from&&(o=e.doc.lineAt(n.to-1)),r>=l.number){let c=t[t.length-1];c.to=o.to,c.ranges.push(n)}else t.push({from:l.from,to:o.to,ranges:[n]});r=o.number+1}return t}function Ct(e,t,r){if(e.readOnly)return!1;let n=[],l=[];for(let o of K(e)){if(r?o.to==e.doc.length:o.from==0)continue;let c=e.doc.lineAt(r?o.to+1:o.from-1),i=c.length+1;if(r){n.push({from:o.to,to:c.to},{from:o.from,insert:c.text+e.lineBreak});for(let s of o.ranges)l.push(u.EditorSelection.range(Math.min(e.doc.length,s.anchor+i),Math.min(e.doc.length,s.head+i)))}else{n.push({from:c.from,to:o.from},{from:o.to,insert:e.lineBreak+c.text});for(let s of o.ranges)l.push(u.EditorSelection.range(s.anchor-i,s.head-i))}}return n.length?(t(e.update({changes:n,scrollIntoView:!0,selection:u.EditorSelection.create(l,e.selection.mainIndex),userEvent:"move.line"})),!0):!1}const Lt=({state:e,dispatch:t})=>Ct(e,t,!1),At=({state:e,dispatch:t})=>Ct(e,t,!0);function Dt(e,t,r){if(e.readOnly)return!1;let n=[];for(let l of K(e))r?n.push({from:l.from,insert:e.doc.slice(l.from,l.to)+e.lineBreak}):n.push({from:l.to,insert:e.lineBreak+e.doc.slice(l.from,l.to)});return t(e.update({changes:n,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Et=({state:e,dispatch:t})=>Dt(e,t,!1),xt=({state:e,dispatch:t})=>Dt(e,t,!0),Mt=e=>{if(e.state.readOnly)return!1;let{state:t}=e,r=t.changes(K(t).map(({from:l,to:o})=>(l>0?l--:o<t.doc.length&&o++,{from:l,to:o}))),n=w(t.selection,l=>e.moveVertically(l,!0)).map(r);return e.dispatch({changes:r,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0},mn=({state:e,dispatch:t})=>(t(e.update(e.replaceSelection(e.lineBreak),{scrollIntoView:!0,userEvent:"input"})),!0);function pn(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let r=(0,m.syntaxTree)(e).resolveInner(t),n=r.childBefore(t),l=r.childAfter(t),o;return n&&l&&n.to<=t&&l.from>=t&&(o=n.type.prop(q.md.closedBy))&&o.indexOf(l.name)>-1&&e.doc.lineAt(n.to).from==e.doc.lineAt(l.from).from&&!/\S/.test(e.sliceDoc(n.to,l.from))?{from:n.to,to:l.from}:null}const wt=Ot(!1),Tt=Ot(!0);function Ot(e){return({state:t,dispatch:r})=>{if(t.readOnly)return!1;let n=t.changeByRange(l=>{let{from:o,to:c}=l,i=t.doc.lineAt(o),s=!e&&o==c&&pn(t,o);e&&(o=c=(c<=i.to?i:t.doc.lineAt(c)).to);let f=new m.IndentContext(t,{simulateBreak:o,simulateDoubleBreak:!!s}),a=(0,m.getIndentation)(f,o);for(a==null&&(a=(0,u.countColumn)(/^\s*/.exec(t.doc.lineAt(o).text)[0],t.tabSize));c<i.to&&/\s/.test(i.text[c-i.from]);)c++;s?{from:o,to:c}=s:o>i.from&&o<i.from+100&&!/\S/.test(i.text.slice(0,o))&&(o=i.from);let d=["",(0,m.indentString)(t,a)];return s&&d.push((0,m.indentString)(t,f.lineIndent(i.from,-1))),{changes:{from:o,to:c,insert:u.Text.of(d)},range:u.EditorSelection.cursor(o+1+d[1].length)}});return r(t.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function ye(e,t){let r=-1;return e.changeByRange(n=>{let l=[];for(let c=n.from;c<=n.to;){let i=e.doc.lineAt(c);i.number>r&&(n.empty||n.to>i.from)&&(t(i,l,n),r=i.number),c=i.to+1}let o=e.changes(l);return{changes:l,range:u.EditorSelection.range(o.mapPos(n.anchor,1),o.mapPos(n.head,1))}})}const bt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=Object.create(null),n=new m.IndentContext(e,{overrideIndentation:o=>{let c=r[o];return c??-1}}),l=ye(e,(o,c,i)=>{let s=(0,m.getIndentation)(n,o.from);if(s==null)return;/\S/.test(o.text)||(s=0);let f=/^\s*/.exec(o.text)[0],a=(0,m.indentString)(e,s);(f!=a||i.from<o.from+f.length)&&(r[o.from]=s,c.push({from:o.from,to:o.from+f.length,insert:a}))});return l.changes.empty||t(e.update(l,{userEvent:"indent"})),!0},H=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(ye(e,(r,n)=>{n.push({from:r.from,insert:e.facet(m.indentUnit)})}),{userEvent:"input.indent"})),!0),Se=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(ye(e,(r,n)=>{let l=/^\s*/.exec(r.text)[0];if(!l)return;let o=(0,u.countColumn)(l,e.tabSize),c=0,i=(0,m.indentString)(e,Math.max(0,o-(0,m.getIndentUnit)(e)));for(;c<l.length&&c<i.length&&l.charCodeAt(c)==i.charCodeAt(c);)c++;n.push({from:r.from+c,to:r.from+l.length,insert:i.slice(c)})}),{userEvent:"delete.dedent"})),!0),gn=({state:e,dispatch:t})=>e.selection.ranges.some(r=>!r.empty)?H({state:e,dispatch:t}):(t(e.update(e.replaceSelection("	"),{scrollIntoView:!0,userEvent:"input"})),!0),It=[{key:"Ctrl-b",run:ee,shift:le,preventDefault:!0},{key:"Ctrl-f",run:te,shift:ce},{key:"Ctrl-p",run:ne,shift:ie},{key:"Ctrl-n",run:re,shift:se},{key:"Ctrl-a",run:He,shift:it},{key:"Ctrl-e",run:$e,shift:st},{key:"Ctrl-d",run:pe},{key:"Ctrl-h",run:z},{key:"Ctrl-k",run:gt},{key:"Ctrl-Alt-h",run:ge},{key:"Ctrl-o",run:kt},{key:"Ctrl-t",run:Bt},{key:"Ctrl-v",run:V}],Rt=[{key:"ArrowLeft",run:ee,shift:le,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:Ie,shift:Xe,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:ze,shift:lt,preventDefault:!0},{key:"ArrowRight",run:te,shift:ce,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:Re,shift:Ye,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Ke,shift:ct,preventDefault:!0},{key:"ArrowUp",run:ne,shift:ie,preventDefault:!0},{mac:"Cmd-ArrowUp",run:fe,shift:he},{mac:"Ctrl-ArrowUp",run:oe,shift:ue},{key:"ArrowDown",run:re,shift:se,preventDefault:!0},{mac:"Cmd-ArrowDown",run:de,shift:me},{mac:"Ctrl-ArrowDown",run:V,shift:ae},{key:"PageUp",run:oe,shift:ue},{key:"PageDown",run:V,shift:ae},{key:"Home",run:We,shift:ot,preventDefault:!0},{key:"Mod-Home",run:fe,shift:he},{key:"End",run:Je,shift:rt,preventDefault:!0},{key:"Mod-End",run:de,shift:me},{key:"Enter",run:wt},{key:"Mod-a",run:ut},{key:"Backspace",run:z,shift:z},{key:"Delete",run:pe},{key:"Mod-Backspace",mac:"Alt-Backspace",run:ge},{key:"Mod-Delete",mac:"Alt-Delete",run:pt},{mac:"Mod-Backspace",run:yt},{mac:"Mod-Delete",run:St}].concat(It.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),yn=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:Ge,shift:je},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Fe,shift:et},{key:"Alt-ArrowUp",run:Lt},{key:"Shift-Alt-ArrowUp",run:Et},{key:"Alt-ArrowDown",run:At},{key:"Shift-Alt-ArrowDown",run:xt},{key:"Escape",run:dt},{key:"Mod-Enter",run:Tt},{key:"Alt-l",mac:"Ctrl-l",run:at},{key:"Mod-i",run:ft,preventDefault:!0},{key:"Mod-[",run:Se},{key:"Mod-]",run:H},{key:"Mod-Alt-\\",run:bt},{key:"Shift-Mod-k",run:Mt},{key:"Shift-Mod-\\",run:Qe},{key:"Mod-/",run:Be},{key:"Alt-A",run:Le}].concat(Rt),Sn={key:"Tab",run:H,shift:Se}}}]);
