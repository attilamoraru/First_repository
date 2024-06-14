(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[2064],{82064:(Le,ke,Ce)=>{Ce.d(ke,{FE:()=>Me,Jq:()=>M,L3:()=>he,Lj:()=>te,_b:()=>ze,hr:()=>Be,i9:()=>G,md:()=>v,mp:()=>B,vj:()=>k});const he=1024;let _e=0;class E{constructor(e,t){this.from=e,this.to=t}}class v{constructor(e={}){this.id=_e++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof e!="function"&&(e=M.match(e)),t=>{let r=e(t);return r===void 0?null:[this,r]}}}v.closedBy=new v({deserialize:l=>l.split(" ")}),v.openedBy=new v({deserialize:l=>l.split(" ")}),v.group=new v({deserialize:l=>l.split(" ")}),v.isolate=new v({deserialize:l=>{if(l&&l!="rtl"&&l!="ltr"&&l!="auto")throw new RangeError("Invalid value for isolate: "+l);return l||"auto"}}),v.contextHash=new v({perNode:!0}),v.lookAhead=new v({perNode:!0}),v.mounted=new v({perNode:!0});class K{constructor(e,t,r){this.tree=e,this.overlay=t,this.parser=r}static get(e){return e&&e.props&&e.props[v.mounted.id]}}const Ae=Object.create(null);class M{constructor(e,t,r,n=0){this.name=e,this.props=t,this.id=r,this.flags=n}static define(e){let t=e.props&&e.props.length?Object.create(null):Ae,r=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),n=new M(e.name||"",t,e.id,r);if(e.props){for(let i of e.props)if(Array.isArray(i)||(i=i(n)),i){if(i[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[i[0].id]=i[1]}}return n}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let t=this.prop(v.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let r in e)for(let n of r.split(" "))t[n]=e[r];return r=>{for(let n=r.prop(v.group),i=-1;i<(n?n.length:0);i++){let s=t[i<0?r.name:n[i]];if(s)return s}}}}M.none=new M("",Object.create(null),0,8);class te{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let t=[];for(let r of this.types){let n=null;for(let i of e){let s=i(r);s&&(n||(n=Object.assign({},r.props)),n[s[0].id]=s[1])}t.push(n?new M(r.name,n,r.id,r.flags):r)}return new te(t)}}const X=new WeakMap,fe=new WeakMap;var k;(function(l){l[l.ExcludeBuffers=1]="ExcludeBuffers",l[l.IncludeAnonymous=2]="IncludeAnonymous",l[l.IgnoreMounts=4]="IgnoreMounts",l[l.IgnoreOverlays=8]="IgnoreOverlays"})(k||(k={}));class B{constructor(e,t,r,n,i){if(this.type=e,this.children=t,this.positions=r,this.length=n,this.props=null,i&&i.length){this.props=Object.create(null);for(let[s,h]of i)this.props[typeof s=="number"?s:s.id]=h}}toString(){let e=K.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let r of this.children){let n=r.toString();n&&(t&&(t+=","),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new Y(this.topNode,e)}cursorAt(e,t=0,r=0){let n=X.get(this)||this.topNode,i=new Y(n);return i.moveTo(e,t),X.set(this,i._tree),i}get topNode(){return new N(this,0,0,null)}resolve(e,t=0){let r=Q(X.get(this)||this.topNode,e,t,!1);return X.set(this,r),r}resolveInner(e,t=0){let r=Q(fe.get(this)||this.topNode,e,t,!0);return fe.set(this,r),r}resolveStack(e,t=0){return Ne(this,e,t)}iterate(e){let{enter:t,leave:r,from:n=0,to:i=this.length}=e,s=e.mode||0,h=(s&k.IncludeAnonymous)>0;for(let f=this.cursor(s|k.IncludeAnonymous);;){let a=!1;if(f.from<=i&&f.to>=n&&(!h&&f.type.isAnonymous||t(f)!==!1)){if(f.firstChild())continue;a=!0}for(;a&&r&&(h||!f.type.isAnonymous)&&r(f),!f.nextSibling();){if(!f.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:se(M.none,this.children,this.positions,0,this.children.length,0,this.length,(t,r,n)=>new B(this.type,t,r,n,this.propValues),e.makeTree||((t,r,n)=>new B(M.none,t,r,n)))}static build(e){return Pe(e)}}B.empty=new B(M.none,[],[],0);class re{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new re(this.buffer,this.index)}}class U{constructor(e,t,r){this.buffer=e,this.length=t,this.set=r}get type(){return M.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],r=this.buffer[e+3],n=this.set.types[t],i=n.name;if(/\W/.test(i)&&!n.isError&&(i=JSON.stringify(i)),e+=4,r==e)return i;let s=[];for(;e<r;)s.push(this.childString(e)),e=this.buffer[e+3];return i+"("+s.join(",")+")"}findChild(e,t,r,n,i){let{buffer:s}=this,h=-1;for(let f=e;f!=t&&!(oe(i,n,s[f+1],s[f+2])&&(h=f,r>0));f=s[f+3]);return h}slice(e,t,r){let n=this.buffer,i=new Uint16Array(t-e),s=0;for(let h=e,f=0;h<t;){i[f++]=n[h++],i[f++]=n[h++]-r;let a=i[f++]=n[h++]-r;i[f++]=n[h++]-e,s=Math.max(s,a)}return new U(i,s,this.set)}}function oe(l,e,t,r){switch(l){case-2:return t<e;case-1:return r>=e&&t<e;case 0:return t<e&&r>e;case 1:return t<=e&&r>e;case 2:return r>e;case 4:return!0}}function Q(l,e,t,r){for(var n;l.from==l.to||(t<1?l.from>=e:l.from>e)||(t>-1?l.to<=e:l.to<e);){let s=!r&&l instanceof N&&l.index<0?null:l.parent;if(!s)return l;l=s}let i=r?0:k.IgnoreOverlays;if(r)for(let s=l,h=s.parent;h;s=h,h=s.parent)s instanceof N&&s.index<0&&((n=h.enter(e,t,i))===null||n===void 0?void 0:n.from)!=s.from&&(l=h);for(;;){let s=l.enter(e,t,i);if(!s)return l;l=s}}class ue{cursor(e=0){return new Y(this,e)}getChild(e,t=null,r=null){let n=ae(this,e,t,r);return n.length?n[0]:null}getChildren(e,t=null,r=null){return ae(this,e,t,r)}resolve(e,t=0){return Q(this,e,t,!1)}resolveInner(e,t=0){return Q(this,e,t,!0)}matchContext(e){return ne(this,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),r=this;for(;t;){let n=t.lastChild;if(!n||n.to!=t.to)break;n.type.isError&&n.from==n.to?(r=t,t=n.prevSibling):t=n}return r}get node(){return this}get next(){return this.parent}}class N extends ue{constructor(e,t,r,n){super(),this._tree=e,this.from=t,this.index=r,this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,r,n,i=0){for(let s=this;;){for(let{children:h,positions:f}=s._tree,a=t>0?h.length:-1;e!=a;e+=t){let o=h[e],d=f[e]+s.from;if(!!oe(n,r,d,d+o.length)){if(o instanceof U){if(i&k.ExcludeBuffers)continue;let p=o.findChild(0,o.buffer.length,t,r-d,n);if(p>-1)return new R(new Se(s,o,e,d),null,p)}else if(i&k.IncludeAnonymous||!o.type.isAnonymous||ie(o)){let p;if(!(i&k.IgnoreMounts)&&(p=K.get(o))&&!p.overlay)return new N(p.tree,d,e,s);let x=new N(o,d,e,s);return i&k.IncludeAnonymous||!x.type.isAnonymous?x:x.nextChild(t<0?o.children.length-1:0,t,r,n)}}}if(i&k.IncludeAnonymous||!s.type.isAnonymous||(s.index>=0?e=s.index+t:e=t<0?-1:s._parent._tree.children.length,s=s._parent,!s))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}enter(e,t,r=0){let n;if(!(r&k.IgnoreOverlays)&&(n=K.get(this._tree))&&n.overlay){let i=e-this.from;for(let{from:s,to:h}of n.overlay)if((t>0?s<=i:s<i)&&(t<0?h>=i:h>i))return new N(n.tree,n.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function ae(l,e,t,r){let n=l.cursor(),i=[];if(!n.firstChild())return i;if(t!=null){for(let s=!1;!s;)if(s=n.type.is(t),!n.nextSibling())return i}for(;;){if(r!=null&&n.type.is(r))return i;if(n.type.is(e)&&i.push(n.node),!n.nextSibling())return r==null?i:[]}}function ne(l,e,t=e.length-1){for(let r=l.parent;t>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(e[t]&&e[t]!=r.name)return!1;t--}}return!0}class Se{constructor(e,t,r,n){this.parent=e,this.buffer=t,this.index=r,this.start=n}}class R extends ue{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,r){super(),this.context=e,this._parent=t,this.index=r,this.type=e.buffer.set.types[e.buffer.buffer[r]]}child(e,t,r){let{buffer:n}=this.context,i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.context.start,r);return i<0?null:new R(this.context,this,i)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}enter(e,t,r=0){if(r&k.ExcludeBuffers)return null;let{buffer:n}=this.context,i=n.findChild(this.index+4,n.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return i<0?null:new R(this.context,this,i)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new R(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new R(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:r}=this.context,n=this.index+4,i=r.buffer[this.index+3];if(i>n){let s=r.buffer[this.index+1];e.push(r.slice(n,i,s)),t.push(0)}return new B(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function pe(l){if(!l.length)return null;let e=0,t=l[0];for(let i=1;i<l.length;i++){let s=l[i];(s.from>t.from||s.to<t.to)&&(t=s,e=i)}let r=t instanceof N&&t.index<0?null:t.parent,n=l.slice();return r?n[e]=r:n.splice(e,1),new Ie(n,t)}class Ie{constructor(e,t){this.heads=e,this.node=t}get next(){return pe(this.heads)}}function Ne(l,e,t){let r=l.resolveInner(e,t),n=null;for(let i=r instanceof N?r:r.context.parent;i;i=i.parent)if(i.index<0){let s=i.parent;(n||(n=[r])).push(s.resolve(e,t)),i=s}else{let s=K.get(i.tree);if(s&&s.overlay&&s.overlay[0].from<=e&&s.overlay[s.overlay.length-1].to>=e){let h=new N(s.tree,s.overlay[0].from+i.from,-1,i);(n||(n=[r])).push(Q(h,e,t,!1))}}return n?pe(n):r}class Y{get name(){return this.type.name}constructor(e,t=0){if(this.mode=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof N)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let r=e._parent;r;r=r._parent)this.stack.unshift(r.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:r,buffer:n}=this.buffer;return this.type=t||n.set.types[n.buffer[e]],this.from=r+n.buffer[e+1],this.to=r+n.buffer[e+2],!0}yield(e){return e?e instanceof N?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,r){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,r,this.mode));let{buffer:n}=this.buffer,i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.buffer.start,r);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,r=this.mode){return this.buffer?r&k.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,r))}parent(){if(!this.buffer)return this.yieldNode(this.mode&k.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&k.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,r=this.stack.length-1;if(e<0){let n=r<0?0:this.stack[r]+4;if(this.index!=n)return this.yieldBuf(t.findChild(n,this.index,-1,0,4))}else{let n=t.buffer[this.index+3];if(n<(r<0?t.buffer.length:t.buffer[this.stack[r]+3]))return this.yieldBuf(n)}return r<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,r,{buffer:n}=this;if(n){if(e>0){if(this.index<n.buffer.buffer.length)return!1}else for(let i=0;i<this.index;i++)if(n.buffer.buffer[i+3]<this.index)return!1;({index:t,parent:r}=n)}else({index:t,_parent:r}=this._tree);for(;r;{index:t,_parent:r}=r)if(t>-1)for(let i=t+e,s=e<0?-1:r._tree.children.length;i!=s;i+=e){let h=r._tree.children[i];if(this.mode&k.IncludeAnonymous||h instanceof U||!h.type.isAnonymous||ie(h))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,r=0;if(e&&e.context==this.buffer){e:for(let n=this.index,i=this.stack.length;i>=0;){for(let s=e;s;s=s._parent)if(s.index==n){if(n==this.index)return s;t=s,r=i+1;break e}n=this.stack[--i]}}for(let n=r;n<this.stack.length;n++)t=new R(this.buffer,t,this.stack[n]);return this.bufferNode=new R(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let r=0;;){let n=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){r++;continue}this.type.isAnonymous||(n=!0)}for(;n&&t&&t(this),n=this.type.isAnonymous,!this.nextSibling();){if(!r)return;this.parent(),r--,n=!0}}}matchContext(e){if(!this.buffer)return ne(this.node,e);let{buffer:t}=this.buffer,{types:r}=t.set;for(let n=e.length-1,i=this.stack.length-1;n>=0;i--){if(i<0)return ne(this.node,e,n);let s=r[t.buffer[this.stack[i]]];if(!s.isAnonymous){if(e[n]&&e[n]!=s.name)return!1;n--}}return!0}}function ie(l){return l.children.some(e=>e instanceof U||!e.type.isAnonymous||ie(e))}function Pe(l){var e;let{buffer:t,nodeSet:r,maxBufferLength:n=he,reused:i=[],minRepeatType:s=r.types.length}=l,h=Array.isArray(t)?new re(t,t.length):t,f=r.types,a=0,o=0;function d(y,w,u,_,b,m){let{id:c,start:g,end:A,size:C}=h,z=o;for(;C<0;)if(h.next(),C==-1){let W=i[c];u.push(W),_.push(g-y);return}else if(C==-3){a=c;return}else if(C==-4){o=c;return}else throw new RangeError(`Unrecognized record size: ${C}`);let H=f[c],q,J,we=g-y;if(A-g<=n&&(J=O(h.pos-w,b))){let W=new Uint16Array(J.size-J.skip),F=h.pos-J.size,D=W.length;for(;h.pos>F;)D=j(J.start,W,D);q=new U(W,A-J.start,r),we=J.start-y}else{let W=h.pos-C;h.next();let F=[],D=[],V=c>=s?c:-1,$=0,ee=A;for(;h.pos>W;)V>=0&&h.id==V&&h.size>=0?(h.end<=ee-n&&(S(F,D,g,$,h.end,ee,V,z),$=F.length,ee=h.end),h.next()):m>2500?p(g,W,F,D):d(g,W,F,D,V,m+1);if(V>=0&&$>0&&$<F.length&&S(F,D,g,$,g,ee,V,z),F.reverse(),D.reverse(),V>-1&&$>0){let ve=x(H);q=se(H,F,D,0,F.length,0,A-g,ve,ve)}else q=P(H,F,D,A-g,z-A)}u.push(q),_.push(we)}function p(y,w,u,_){let b=[],m=0,c=-1;for(;h.pos>w;){let{id:g,start:A,end:C,size:z}=h;if(z>4)h.next();else{if(c>-1&&A<c)break;c<0&&(c=C-n),b.push(g,A,C),m++,h.next()}}if(m){let g=new Uint16Array(m*4),A=b[b.length-2];for(let C=b.length-3,z=0;C>=0;C-=3)g[z++]=b[C],g[z++]=b[C+1]-A,g[z++]=b[C+2]-A,g[z++]=z;u.push(new U(g,b[2]-A,r)),_.push(A-y)}}function x(y){return(w,u,_)=>{let b=0,m=w.length-1,c,g;if(m>=0&&(c=w[m])instanceof B){if(!m&&c.type==y&&c.length==_)return c;(g=c.prop(v.lookAhead))&&(b=u[m]+c.length+g)}return P(y,w,u,_,b)}}function S(y,w,u,_,b,m,c,g){let A=[],C=[];for(;y.length>_;)A.push(y.pop()),C.push(w.pop()+u-b);y.push(P(r.types[c],A,C,m-b,g-m)),w.push(b-u)}function P(y,w,u,_,b=0,m){if(a){let c=[v.contextHash,a];m=m?[c].concat(m):[c]}if(b>25){let c=[v.lookAhead,b];m=m?[c].concat(m):[c]}return new B(y,w,u,_,m)}function O(y,w){let u=h.fork(),_=0,b=0,m=0,c=u.end-n,g={size:0,start:0,skip:0};e:for(let A=u.pos-y;u.pos>A;){let C=u.size;if(u.id==w&&C>=0){g.size=_,g.start=b,g.skip=m,m+=4,_+=4,u.next();continue}let z=u.pos-C;if(C<0||z<A||u.start<c)break;let H=u.id>=s?4:0,q=u.start;for(u.next();u.pos>z;){if(u.size<0)if(u.size==-3)H+=4;else break e;else u.id>=s&&(H+=4);u.next()}b=q,_+=C,m+=H}return(w<0||_==y)&&(g.size=_,g.start=b,g.skip=m),g.size>4?g:void 0}function j(y,w,u){let{id:_,start:b,end:m,size:c}=h;if(h.next(),c>=0&&_<s){let g=u;if(c>4){let A=h.pos-(c-4);for(;h.pos>A;)u=j(y,w,u)}w[--u]=g,w[--u]=m-y,w[--u]=b-y,w[--u]=_}else c==-3?a=_:c==-4&&(o=_);return u}let T=[],I=[];for(;h.pos>0;)d(l.start||0,l.bufferStart||0,T,I,-1,0);let L=(e=l.length)!==null&&e!==void 0?e:T.length?I[0]+T[0].length:0;return new B(f[l.topID],T.reverse(),I.reverse(),L)}const de=new WeakMap;function Z(l,e){if(!l.isAnonymous||e instanceof U||e.type!=l)return 1;let t=de.get(e);if(t==null){t=1;for(let r of e.children){if(r.type!=l||!(r instanceof B)){t=1;break}t+=Z(l,r)}de.set(e,t)}return t}function se(l,e,t,r,n,i,s,h,f){let a=0;for(let S=r;S<n;S++)a+=Z(l,e[S]);let o=Math.ceil(a*1.5/8),d=[],p=[];function x(S,P,O,j,T){for(let I=O;I<j;){let L=I,y=P[I],w=Z(l,S[I]);for(I++;I<j;I++){let u=Z(l,S[I]);if(w+u>=o)break;w+=u}if(I==L+1){if(w>o){let u=S[L];x(u.children,u.positions,0,u.children.length,P[L]+T);continue}d.push(S[L])}else{let u=P[I-1]+S[I-1].length-y;d.push(se(l,S,P,L,I,y,u,null,f))}p.push(y+T-i)}}return x(e,t,r,n,0),(h||f)(d,p,s)}class Be{constructor(){this.map=new WeakMap}setBuffer(e,t,r){let n=this.map.get(e);n||this.map.set(e,n=new Map),n.set(t,r)}getBuffer(e,t){let r=this.map.get(e);return r&&r.get(t)}set(e,t){e instanceof R?this.setBuffer(e.context.buffer,e.index,t):e instanceof N&&this.map.set(e.tree,t)}get(e){return e instanceof R?this.getBuffer(e.context.buffer,e.index):e instanceof N?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}}class G{constructor(e,t,r,n,i=!1,s=!1){this.from=e,this.to=t,this.tree=r,this.offset=n,this.open=(i?1:0)|(s?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,t=[],r=!1){let n=[new G(0,e.length,e,0,!1,r)];for(let i of t)i.to>e.length&&n.push(i);return n}static applyChanges(e,t,r=128){if(!t.length)return e;let n=[],i=1,s=e.length?e[0]:null;for(let h=0,f=0,a=0;;h++){let o=h<t.length?t[h]:null,d=o?o.fromA:1e9;if(d-f>=r)for(;s&&s.from<d;){let p=s;if(f>=p.from||d<=p.to||a){let x=Math.max(p.from,f)-a,S=Math.min(p.to,d)-a;p=x>=S?null:new G(x,S,p.tree,p.offset+a,h>0,!!o)}if(p&&n.push(p),s.to>d)break;s=i<e.length?e[i++]:null}if(!o)break;f=o.toA,a=o.toA-o.toB}return n}}class ze{startParse(e,t,r){return typeof e=="string"&&(e=new Ee(e)),r=r?r.length?r.map(n=>new E(n.from,n.to)):[new E(0,0)]:[new E(0,e.length)],this.createParse(e,t||[],r)}parse(e,t,r){let n=this.startParse(e,t,r);for(;;){let i=n.advance();if(i)return i}}}class Ee{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}function Me(l){return(e,t,r,n)=>new Fe(e,l,t,r,n)}class ce{constructor(e,t,r,n,i){this.parser=e,this.parse=t,this.overlay=r,this.target=n,this.from=i}}function ge(l){if(!l.length||l.some(e=>e.from>=e.to))throw new RangeError("Invalid inner parse ranges given: "+JSON.stringify(l))}class Te{constructor(e,t,r,n,i,s,h){this.parser=e,this.predicate=t,this.mounts=r,this.index=n,this.start=i,this.target=s,this.prev=h,this.depth=0,this.ranges=[]}}const le=new v({perNode:!0});class Fe{constructor(e,t,r,n,i){this.nest=t,this.input=r,this.fragments=n,this.ranges=i,this.inner=[],this.innerDone=0,this.baseTree=null,this.stoppedAt=null,this.baseParse=e}advance(){if(this.baseParse){let r=this.baseParse.advance();if(!r)return null;if(this.baseParse=null,this.baseTree=r,this.startInner(),this.stoppedAt!=null)for(let n of this.inner)n.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let r=this.baseTree;return this.stoppedAt!=null&&(r=new B(r.type,r.children,r.positions,r.length,r.propValues.concat([[le,this.stoppedAt]]))),r}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let r=Object.assign(Object.create(null),e.target.props);r[v.mounted.id]=new K(t,e.overlay,e.parser),e.target.props=r}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){if(this.stoppedAt=e,this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new Re(this.fragments),t=null,r=null,n=new Y(new N(this.baseTree,this.ranges[0].from,0,null),k.IncludeAnonymous|k.IgnoreMounts);e:for(let i,s;;){let h=!0,f;if(this.stoppedAt!=null&&n.from>=this.stoppedAt)h=!1;else if(e.hasNode(n)){if(t){let a=t.mounts.find(o=>o.frag.from<=n.from&&o.frag.to>=n.to&&o.mount.overlay);if(a)for(let o of a.mount.overlay){let d=o.from+a.pos,p=o.to+a.pos;d>=n.from&&p<=n.to&&!t.ranges.some(x=>x.from<p&&x.to>d)&&t.ranges.push({from:d,to:p})}}h=!1}else if(r&&(s=Oe(r.ranges,n.from,n.to)))h=s!=2;else if(!n.type.isAnonymous&&(i=this.nest(n,this.input))&&(n.from<n.to||!i.overlay)){n.tree||je(n);let a=e.findMounts(n.from,i.parser);if(typeof i.overlay=="function")t=new Te(i.parser,i.overlay,a,this.inner.length,n.from,n.tree,t);else{let o=xe(this.ranges,i.overlay||(n.from<n.to?[new E(n.from,n.to)]:[]));o.length&&ge(o),(o.length||!i.overlay)&&this.inner.push(new ce(i.parser,o.length?i.parser.startParse(this.input,be(a,o),o):i.parser.startParse(""),i.overlay?i.overlay.map(d=>new E(d.from-n.from,d.to-n.from)):null,n.tree,o.length?o[0].from:n.from)),i.overlay?o.length&&(r={ranges:o,depth:0,prev:r}):h=!1}}else t&&(f=t.predicate(n))&&(f===!0&&(f=new E(n.from,n.to)),f.from<f.to&&t.ranges.push(f));if(h&&n.firstChild())t&&t.depth++,r&&r.depth++;else for(;!n.nextSibling();){if(!n.parent())break e;if(t&&!--t.depth){let a=xe(this.ranges,t.ranges);a.length&&(ge(a),this.inner.splice(t.index,0,new ce(t.parser,t.parser.startParse(this.input,be(t.mounts,a),a),t.ranges.map(o=>new E(o.from-t.start,o.to-t.start)),t.target,a[0].from))),t=t.prev}r&&!--r.depth&&(r=r.prev)}}}}function Oe(l,e,t){for(let r of l){if(r.from>=t)break;if(r.to>e)return r.from<=e&&r.to>=t?2:1}return 0}function me(l,e,t,r,n,i){if(e<t){let s=l.buffer[e+1];r.push(l.slice(e,t,s)),n.push(s-i)}}function je(l){let{node:e}=l,t=[],r=e.context.buffer;do t.push(l.index),l.parent();while(!l.tree);let n=l.tree,i=n.children.indexOf(r),s=n.children[i],h=s.buffer,f=[i];function a(o,d,p,x,S,P){let O=t[P],j=[],T=[];me(s,o,O,j,T,x);let I=h[O+1],L=h[O+2];f.push(j.length);let y=P?a(O+4,h[O+3],s.set.types[h[O]],I,L-I,P-1):e.toTree();return j.push(y),T.push(I-x),me(s,h[O+3],d,j,T,x),new B(p,j,T,S)}n.children[i]=a(0,h.length,M.none,0,s.length,t.length-1);for(let o of f){let d=l.tree.children[o],p=l.tree.positions[o];l.yield(new N(d,p+l.from,o,l._tree))}}class ye{constructor(e,t){this.offset=t,this.done=!1,this.cursor=e.cursor(k.IncludeAnonymous|k.IgnoreMounts)}moveTo(e){let{cursor:t}=this,r=e-this.offset;for(;!this.done&&t.from<r;)t.to>=e&&t.enter(r,1,k.IgnoreOverlays|k.ExcludeBuffers)||t.next(!1)||(this.done=!0)}hasNode(e){if(this.moveTo(e.from),!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return!0;if(t.children.length&&t.positions[0]==0&&t.children[0]instanceof B)t=t.children[0];else break}return!1}}class Re{constructor(e){var t;if(this.fragments=e,this.curTo=0,this.fragI=0,e.length){let r=this.curFrag=e[0];this.curTo=(t=r.tree.prop(le))!==null&&t!==void 0?t:r.to,this.inner=new ye(r.tree,-r.offset)}else this.curFrag=this.inner=null}hasNode(e){for(;this.curFrag&&e.from>=this.curTo;)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){var e;if(this.fragI++,this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let t=this.curFrag=this.fragments[this.fragI];this.curTo=(e=t.tree.prop(le))!==null&&e!==void 0?e:t.to,this.inner=new ye(t.tree,-t.offset)}}findMounts(e,t){var r;let n=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let i=this.inner.cursor.node;i;i=i.parent){let s=(r=i.tree)===null||r===void 0?void 0:r.prop(v.mounted);if(s&&s.parser==t)for(let h=this.fragI;h<this.fragments.length;h++){let f=this.fragments[h];if(f.from>=i.to)break;f.tree==this.curFrag.tree&&n.push({frag:f,pos:i.from-f.offset,mount:s})}}}return n}}function xe(l,e){let t=null,r=e;for(let n=1,i=0;n<l.length;n++){let s=l[n-1].to,h=l[n].from;for(;i<r.length;i++){let f=r[i];if(f.from>=h)break;f.to<=s||(t||(r=t=e.slice()),f.from<s?(t[i]=new E(f.from,s),f.to>h&&t.splice(i+1,0,new E(h,f.to))):f.to>h?t[i--]=new E(h,f.to):t.splice(i--,1))}}return r}function De(l,e,t,r){let n=0,i=0,s=!1,h=!1,f=-1e9,a=[];for(;;){let o=n==l.length?1e9:s?l[n].to:l[n].from,d=i==e.length?1e9:h?e[i].to:e[i].from;if(s!=h){let p=Math.max(f,t),x=Math.min(o,d,r);p<x&&a.push(new E(p,x))}if(f=Math.min(o,d),f==1e9)break;o==f&&(s?(s=!1,n++):s=!0),d==f&&(h?(h=!1,i++):h=!0)}return a}function be(l,e){let t=[];for(let{pos:r,mount:n,frag:i}of l){let s=r+(n.overlay?n.overlay[0].from:0),h=s+n.tree.length,f=Math.max(i.from,s),a=Math.min(i.to,h);if(n.overlay){let o=n.overlay.map(p=>new E(p.from+r,p.to+r)),d=De(e,o,f,a);for(let p=0,x=f;;p++){let S=p==d.length,P=S?a:d[p].from;if(P>x&&t.push(new G(x,P,n.tree,-s,i.from>=x||i.openStart,i.to<=P||i.openEnd)),S)break;x=d[p].to}}else t.push(new G(f,a,n.tree,-s,i.from>=s||i.openStart,i.to<=h||i.openEnd))}return t}}}]);
