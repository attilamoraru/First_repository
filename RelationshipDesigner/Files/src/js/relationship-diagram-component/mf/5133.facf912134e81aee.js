(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[5133],{45133:(et,G,H)=>{H.d(G,{Gv:()=>Y,QR:()=>q,Vp:()=>m,bW:()=>J,pJ:()=>n});var P=H(82064);let L=0;class m{constructor(t,a,i){this.set=t,this.base=a,this.modified=i,this.id=L++}static define(t){if(t?.base)throw new Error("Can not derive from a modified tag");let a=new m([],null,[]);if(a.set.push(a),t)for(let i of t.set)a.set.push(i);return a}static defineModifier(){let t=new S;return a=>a.modified.indexOf(t)>-1?a:S.get(a.base||a,a.modified.concat(t).sort((i,l)=>i.id-l.id))}}let Q=0;class S{constructor(){this.instances=[],this.id=Q++}static get(t,a){if(!a.length)return t;let i=a[0].instances.find(r=>r.base==t&&U(a,r.modified));if(i)return i;let l=[],s=new m(l,t,a);for(let r of a)r.instances.push(s);let c=X(a);for(let r of t.set)if(!r.modified.length)for(let p of c)l.push(S.get(r,p));return s}}function U(o,t){return o.length==t.length&&o.every((a,i)=>a==t[i])}function X(o){let t=[[]];for(let a=0;a<o.length;a++)for(let i=0,l=t.length;i<l;i++)t.push(t[i].concat(o[a]));return t.sort((a,i)=>i.length-a.length)}function Y(o){let t=Object.create(null);for(let a in o){let i=o[a];Array.isArray(i)||(i=[i]);for(let l of a.split(" "))if(l){let s=[],c=2,r=l;for(let f=0;;){if(r=="..."&&f>0&&f+3==l.length){c=1;break}let h=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r);if(!h)throw new RangeError("Invalid path: "+l);if(s.push(h[0]=="*"?"":h[0][0]=='"'?JSON.parse(h[0]):h[0]),f+=h[0].length,f==l.length)break;let d=l[f++];if(f==l.length&&d=="!"){c=0;break}if(d!="/")throw new RangeError("Invalid path: "+l);r=l.slice(f)}let p=s.length-1,g=s[p];if(!g)throw new RangeError("Invalid path: "+l);let y=new R(i,c,p>0?s.slice(0,p):null);t[g]=y.sort(t[g])}}return j.add(t)}const j=new P.md;class R{constructor(t,a,i,l){this.tags=t,this.mode=a,this.context=i,this.next=l}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}R.empty=new R([],2,null);function q(o,t){let a=Object.create(null);for(let s of o)if(!Array.isArray(s.tag))a[s.tag.id]=s.class;else for(let c of s.tag)a[c.id]=s.class;let{scope:i,all:l=null}=t||{};return{style:s=>{let c=l;for(let r of s)for(let p of r.set){let g=a[p.id];if(g){c=c?c+" "+g:g;break}}return c},scope:i}}function Z(o,t){let a=null;for(let i of o){let l=i.style(t);l&&(a=a?a+" "+l:l)}return a}function J(o,t,a,i=0,l=o.length){let s=new $(i,Array.isArray(t)?t:[t],a);s.highlightRange(o.cursor(),i,l,"",s.highlighters),s.flush(l)}function at(o,t,a,i,l,s=0,c=o.length){let r=s;function p(g,y){if(!(g<=r)){for(let f=o.slice(r,g),h=0;;){let d=f.indexOf(`
`,h),E=d<0?f.length:d;if(E>h&&i(f.slice(h,E),y),d<0)break;l(),h=d+1}r=g}}J(t,a,(g,y,f)=>{p(g,""),p(y,f)},s,c),p(c,"")}class ${constructor(t,a,i){this.at=t,this.highlighters=a,this.span=i,this.class=""}startSpan(t,a){a!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=a)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,a,i,l,s){let{type:c,from:r,to:p}=t;if(r>=i||p<=a)return;c.isTop&&(s=this.highlighters.filter(d=>!d.scope||d.scope(c)));let g=l,y=tt(t)||R.empty,f=Z(s,y.tags);if(f&&(g&&(g+=" "),g+=f,y.mode==1&&(l+=(l?" ":"")+f)),this.startSpan(Math.max(a,r),g),y.opaque)return;let h=t.tree&&t.tree.prop(P.md.mounted);if(h&&h.overlay){let d=t.node.enter(h.overlay[0].from+r,1),E=this.highlighters.filter(v=>!v.scope||v.scope(h.tree.type)),z=t.firstChild();for(let v=0,_=r;;v++){let O=v<h.overlay.length?h.overlay[v]:null,D=O?O.from+r:p,F=Math.max(a,_),I=Math.min(i,D);if(F<I&&z)for(;t.from<I&&(this.highlightRange(t,F,I,l,s),this.startSpan(Math.min(I,t.to),g),!(t.to>=D||!t.nextSibling())););if(!O||D>i)break;_=O.to+r,_>a&&(this.highlightRange(d.cursor(),Math.max(a,O.from+r),Math.min(i,_),"",E),this.startSpan(Math.min(i,_),g))}z&&t.parent()}else if(t.firstChild()){h&&(l="");do if(!(t.to<=a)){if(t.from>=i)break;this.highlightRange(t,a,i,l,s),this.startSpan(Math.min(i,t.to),g)}while(t.nextSibling());t.parent()}}}function tt(o){let t=o.type.prop(j);for(;t&&t.context&&!o.matchContext(t.context);)t=t.next;return t||null}const e=m.define,C=e(),N=e(),V=e(N),W=e(N),w=e(),T=e(w),B=e(w),u=e(),x=e(u),k=e(),b=e(),K=e(),M=e(K),A=e(),n={comment:C,lineComment:e(C),blockComment:e(C),docComment:e(C),name:N,variableName:e(N),typeName:V,tagName:e(V),propertyName:W,attributeName:e(W),className:e(N),labelName:e(N),namespace:e(N),macroName:e(N),literal:w,string:T,docString:e(T),character:e(T),attributeValue:e(T),number:B,integer:e(B),float:e(B),bool:e(w),regexp:e(w),escape:e(w),color:e(w),url:e(w),keyword:k,self:e(k),null:e(k),atom:e(k),unit:e(k),modifier:e(k),operatorKeyword:e(k),controlKeyword:e(k),definitionKeyword:e(k),moduleKeyword:e(k),operator:b,derefOperator:e(b),arithmeticOperator:e(b),logicOperator:e(b),bitwiseOperator:e(b),compareOperator:e(b),updateOperator:e(b),definitionOperator:e(b),typeOperator:e(b),controlOperator:e(b),punctuation:K,separator:e(K),bracket:M,angleBracket:e(M),squareBracket:e(M),paren:e(M),brace:e(M),content:u,heading:x,heading1:e(x),heading2:e(x),heading3:e(x),heading4:e(x),heading5:e(x),heading6:e(x),contentSeparator:e(u),list:e(u),quote:e(u),emphasis:e(u),strong:e(u),link:e(u),monospace:e(u),strikethrough:e(u),inserted:e(),deleted:e(),changed:e(),invalid:e(),meta:A,documentMeta:e(A),annotation:e(A),processingInstruction:e(A),definition:m.defineModifier(),constant:m.defineModifier(),function:m.defineModifier(),standard:m.defineModifier(),local:m.defineModifier(),special:m.defineModifier()},it=q([{tag:n.link,class:"tok-link"},{tag:n.heading,class:"tok-heading"},{tag:n.emphasis,class:"tok-emphasis"},{tag:n.strong,class:"tok-strong"},{tag:n.keyword,class:"tok-keyword"},{tag:n.atom,class:"tok-atom"},{tag:n.bool,class:"tok-bool"},{tag:n.url,class:"tok-url"},{tag:n.labelName,class:"tok-labelName"},{tag:n.inserted,class:"tok-inserted"},{tag:n.deleted,class:"tok-deleted"},{tag:n.literal,class:"tok-literal"},{tag:n.string,class:"tok-string"},{tag:n.number,class:"tok-number"},{tag:[n.regexp,n.escape,n.special(n.string)],class:"tok-string2"},{tag:n.variableName,class:"tok-variableName"},{tag:n.local(n.variableName),class:"tok-variableName tok-local"},{tag:n.definition(n.variableName),class:"tok-variableName tok-definition"},{tag:n.special(n.variableName),class:"tok-variableName2"},{tag:n.definition(n.propertyName),class:"tok-propertyName tok-definition"},{tag:n.typeName,class:"tok-typeName"},{tag:n.namespace,class:"tok-namespace"},{tag:n.className,class:"tok-className"},{tag:n.macroName,class:"tok-macroName"},{tag:n.propertyName,class:"tok-propertyName"},{tag:n.operator,class:"tok-operator"},{tag:n.comment,class:"tok-comment"},{tag:n.meta,class:"tok-meta"},{tag:n.invalid,class:"tok-invalid"},{tag:n.punctuation,class:"tok-punctuation"}])}}]);
