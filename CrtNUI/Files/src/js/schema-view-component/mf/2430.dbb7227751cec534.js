(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[2430],{7502:rn=>{var b=/,?([a-z]),?/gi,H=parseFloat,v=Math,J=v.PI,U=v.min,K=v.max,$=v.pow,N=v.abs,Z=/([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/ig,p=/(-?\d*\.?\d*(?:e[-+]?\d+)?)[\s]*,?[\s]*/ig,k=Array.isArray||function(n){return n instanceof Array};function z(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function C(n){if(typeof n=="function"||Object(n)!==n)return n;var t=new n.constructor;for(var e in n)z(n,e)&&(t[e]=C(n[e]));return t}function I(n,t){for(var e=0,u=n.length;e<u;e++)if(n[e]===t)return n.push(n.splice(e,1)[0])}function D(n){function t(){var e=Array.prototype.slice.call(arguments,0),u=e.join("\u2400"),g=t.cache=t.cache||{},d=t.count=t.count||[];return z(g,u)?(I(d,u),g[u]):(d.length>=1e3&&delete g[d.shift()],d.push(u),g[u]=n.apply(0,e),g[u])}return t}function V(n){if(!n)return null;var t=a(n);if(t.arr)return C(t.arr);var e={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},u=[];return k(n)&&k(n[0])&&(u=C(n)),u.length||String(n).replace(Z,function(g,d,_){var h=[],f=d.toLowerCase();for(_.replace(p,function(o,y){y&&h.push(+y)}),f=="m"&&h.length>2&&(u.push([d].concat(h.splice(0,2))),f="l",d=d=="m"?"l":"L");h.length>=e[f]&&(u.push([d].concat(h.splice(0,e[f]))),!!e[f]););}),u.toString=a.toString,t.arr=C(u),u}function a(n){var t=a.ps=a.ps||{};return t[n]?t[n].sleep=100:t[n]={sleep:100},setTimeout(function(){for(var e in t)z(t,e)&&e!=n&&(t[e].sleep--,!t[e].sleep&&delete t[e])}),t[n]}function l(n,t,e,u){return arguments.length===1&&(t=n.y,e=n.width,u=n.height,n=n.x),{x:n,y:t,width:e,height:u,x2:n+e,y2:t+u}}function s(){return this.join(",").replace(b,"$1")}function c(n){var t=C(n);return t.toString=s,t}function E(n,t,e,u,g,d,_,h,f){var o=1-f,y=$(o,3),M=$(o,2),m=f*f,r=m*f,i=y*n+M*3*f*e+o*3*f*f*g+r*_,P=y*t+M*3*f*u+o*3*f*f*d+r*h;return{x:A(i),y:A(P)}}function O(n){var t=Pn.apply(null,n);return l(t.x0,t.y0,t.x1-t.x0,t.y1-t.y0)}function F(n,t,e){return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height}function Q(n,t){return n=l(n),t=l(t),F(t,n.x,n.y)||F(t,n.x2,n.y)||F(t,n.x,n.y2)||F(t,n.x2,n.y2)||F(n,t.x,t.y)||F(n,t.x2,t.y)||F(n,t.x,t.y2)||F(n,t.x2,t.y2)||(n.x<t.x2&&n.x>t.x||t.x<n.x2&&t.x>n.x)&&(n.y<t.y2&&n.y>t.y||t.y<n.y2&&t.y>n.y)}function Y(n,t,e,u,g){var d=-3*t+9*e-9*u+3*g,_=n*d+6*t-12*e+6*u;return n*_-3*t+3*e}function q(n,t,e,u,g,d,_,h,f){f==null&&(f=1),f=f>1?1:f<0?0:f;for(var o=f/2,y=12,M=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],r=0,i=0;i<y;i++){var P=o*M[i]+o,B=Y(P,n,e,g,_),T=Y(P,t,u,d,h),W=B*B+T*T;r+=m[i]*v.sqrt(W)}return o*r}function G(n,t,e,u,g,d,_,h){if(!(K(n,e)<U(g,_)||U(n,e)>K(g,_)||K(t,u)<U(d,h)||U(t,u)>K(d,h))){var f=(n*u-t*e)*(g-_)-(n-e)*(g*h-d*_),o=(n*u-t*e)*(d-h)-(t-u)*(g*h-d*_),y=(n-e)*(d-h)-(t-u)*(g-_);if(!!y){var M=A(f/y),m=A(o/y),r=+M.toFixed(2),i=+m.toFixed(2);if(!(r<+U(n,e).toFixed(2)||r>+K(n,e).toFixed(2)||r<+U(g,_).toFixed(2)||r>+K(g,_).toFixed(2)||i<+U(t,u).toFixed(2)||i>+K(t,u).toFixed(2)||i<+U(d,h).toFixed(2)||i>+K(d,h).toFixed(2)))return{x:M,y:m}}}}function A(n){return Math.round(n*1e11)/1e11}function en(n,t,e){var u=O(n),g=O(t);if(!Q(u,g))return e?0:[];for(var d=q.apply(0,n),_=q.apply(0,t),h=sn(n)?1:~~(d/5)||1,f=sn(t)?1:~~(_/5)||1,o=[],y=[],M={},m=e?0:[],r=0;r<h+1;r++){var i=E.apply(0,n.concat(r/h));o.push({x:i.x,y:i.y,t:r/h})}for(r=0;r<f+1;r++)i=E.apply(0,t.concat(r/f)),y.push({x:i.x,y:i.y,t:r/f});for(r=0;r<h;r++)for(var P=0;P<f;P++){var B=o[r],T=o[r+1],W=y[P],x=y[P+1],R=N(T.x-B.x)<.01?"y":"x",w=N(x.x-W.x)<.01?"y":"x",X=G(B.x,B.y,T.x,T.y,W.x,W.y,x.x,x.y),S;if(X){if(S=X.x.toFixed(9)+"#"+X.y.toFixed(9),M[S])continue;M[S]=!0;var L=B.t+N((X[R]-B[R])/(T[R]-B[R]))*(T.t-B.t),nn=W.t+N((X[w]-W[w])/(x[w]-W[w]))*(x.t-W.t);L>=0&&L<=1&&nn>=0&&nn<=1&&(e?m++:m.push({x:X.x,y:X.y,t1:L,t2:nn}))}}return m}function Mn(n,t,e){n=cn(n),t=cn(t);for(var u,g,d,_,h,f,o,y,M,m,r=e?0:[],i=0,P=n.length;i<P;i++){var B=n[i];if(B[0]=="M")u=h=B[1],g=f=B[2];else{B[0]=="C"?(M=[u,g].concat(B.slice(1)),u=M[6],g=M[7]):(M=[u,g,u,g,h,f,h,f],u=h,g=f);for(var T=0,W=t.length;T<W;T++){var x=t[T];if(x[0]=="M")d=o=x[1],_=y=x[2];else{x[0]=="C"?(m=[d,_].concat(x.slice(1)),d=m[6],_=m[7]):(m=[d,_,d,_,o,y,o,y],d=o,_=y);var R=en(M,m,e);if(e)r+=R;else{for(var w=0,X=R.length;w<X;w++)R[w].segment1=i,R[w].segment2=T,R[w].bez1=M,R[w].bez2=m;r=r.concat(R)}}}}}return r}function mn(n){var t=a(n);if(t.abs)return c(t.abs);if((!k(n)||!k(n&&n[0]))&&(n=V(n)),!n||!n.length)return[["M",0,0]];var e=[],u=0,g=0,d=0,_=0,h=0,f;n[0][0]=="M"&&(u=+n[0][1],g=+n[0][2],d=u,_=g,h++,e[0]=["M",u,g]);for(var o,y,M=h,m=n.length;M<m;M++){if(e.push(o=[]),y=n[M],f=y[0],f!=f.toUpperCase())switch(o[0]=f.toUpperCase(),o[0]){case"A":o[1]=y[1],o[2]=y[2],o[3]=y[3],o[4]=y[4],o[5]=y[5],o[6]=+y[6]+u,o[7]=+y[7]+g;break;case"V":o[1]=+y[1]+g;break;case"H":o[1]=+y[1]+u;break;case"M":d=+y[1]+u,_=+y[2]+g;default:for(var r=1,i=y.length;r<i;r++)o[r]=+y[r]+(r%2?u:g)}else for(var P=0,B=y.length;P<B;P++)o[P]=y[P];switch(f=f.toUpperCase(),o[0]){case"Z":u=+d,g=+_;break;case"H":u=o[1];break;case"V":g=o[1];break;case"M":d=o[o.length-2],_=o[o.length-1];default:u=o[o.length-2],g=o[o.length-1]}}return e.toString=s,t.abs=c(e),e}function sn(n){return n[0]===n[2]&&n[1]===n[3]&&n[4]===n[6]&&n[5]===n[7]}function un(n,t,e,u){return[n,t,e,u,e,u]}function fn(n,t,e,u,g,d){var _=.3333333333333333,h=2/3;return[_*n+h*e,_*t+h*u,_*g+h*e,_*d+h*u,g,d]}function an(n,t,e,u,g,d,_,h,f,o){var y=J*120/180,M=J/180*(+g||0),m=[],r,i=D(function(Cn,En,on){var Ln=Cn*v.cos(on)-En*v.sin(on),xn=Cn*v.sin(on)+En*v.cos(on);return{x:Ln,y:xn}});if(o)S=o[0],L=o[1],w=o[2],X=o[3];else{r=i(n,t,-M),n=r.x,t=r.y,r=i(h,f,-M),h=r.x,f=r.y;var P=(n-h)/2,B=(t-f)/2,T=P*P/(e*e)+B*B/(u*u);T>1&&(T=v.sqrt(T),e=T*e,u=T*u);var W=e*e,x=u*u,R=(d==_?-1:1)*v.sqrt(N((W*x-W*B*B-x*P*P)/(W*B*B+x*P*P))),w=R*e*B/u+(n+h)/2,X=R*-u*P/e+(t+f)/2,S=v.asin(((t-X)/u).toFixed(9)),L=v.asin(((f-X)/u).toFixed(9));S=n<w?J-S:S,L=h<w?J-L:L,S<0&&(S=J*2+S),L<0&&(L=J*2+L),_&&S>L&&(S=S-J*2),!_&&L>S&&(L=L-J*2)}var nn=L-S;if(N(nn)>y){var On=L,Bn=h,An=f;L=S+y*(_&&L>S?1:-1),h=w+e*v.cos(L),f=X+u*v.sin(L),m=an(h,f,e,u,g,0,_,Bn,An,[L,On,w,X])}nn=L-S;var Dn=v.cos(S),wn=v.sin(S),In=v.cos(L),Tn=v.sin(L),ln=v.tan(nn/4),hn=4/3*e*ln,vn=4/3*u*ln,gn=[n,t],tn=[n+hn*wn,t-vn*Dn],_n=[h+hn*Tn,f-vn*In],yn=[h,f];if(tn[0]=2*gn[0]-tn[0],tn[1]=2*gn[1]-tn[1],o)return[tn,_n,yn].concat(m);m=[tn,_n,yn].concat(m).join().split(",");for(var dn=[],j=0,Fn=m.length;j<Fn;j++)dn[j]=j%2?i(m[j-1],m[j],M).y:i(m[j],m[j+1],M).x;return dn}function Pn(n,t,e,u,g,d,_,h){for(var f=[],o=[[],[]],y,M,m,r,i,P,B,T,W=0;W<2;++W){if(W==0?(M=6*n-12*e+6*g,y=-3*n+9*e-9*g+3*_,m=3*e-3*n):(M=6*t-12*u+6*d,y=-3*t+9*u-9*d+3*h,m=3*u-3*t),N(y)<1e-12){if(N(M)<1e-12)continue;r=-m/M,0<r&&r<1&&f.push(r);continue}B=M*M-4*m*y,T=v.sqrt(B),!(B<0)&&(i=(-M+T)/(2*y),0<i&&i<1&&f.push(i),P=(-M-T)/(2*y),0<P&&P<1&&f.push(P))}for(var x=f.length,R=x,w;x--;)r=f[x],w=1-r,o[0][x]=w*w*w*n+3*w*w*r*e+3*w*r*r*g+r*r*r*_,o[1][x]=w*w*w*t+3*w*w*r*u+3*w*r*r*d+r*r*r*h;return o[0][R]=n,o[1][R]=t,o[0][R+1]=_,o[1][R+1]=h,o[0].length=o[1].length=R+2,{x0:U.apply(0,o[0]),y0:U.apply(0,o[1]),x1:K.apply(0,o[0]),y1:K.apply(0,o[1])}}function cn(n){var t=a(n);if(t.curve)return c(t.curve);for(var e=mn(n),u={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(r,i,P){var B,T;if(!r)return["C",i.x,i.y,i.x,i.y,i.x,i.y];switch(!(r[0]in{T:1,Q:1})&&(i.qx=i.qy=null),r[0]){case"M":i.X=r[1],i.Y=r[2];break;case"A":r=["C"].concat(an.apply(0,[i.x,i.y].concat(r.slice(1))));break;case"S":P=="C"||P=="S"?(B=i.x*2-i.bx,T=i.y*2-i.by):(B=i.x,T=i.y),r=["C",B,T].concat(r.slice(1));break;case"T":P=="Q"||P=="T"?(i.qx=i.x*2-i.qx,i.qy=i.y*2-i.qy):(i.qx=i.x,i.qy=i.y),r=["C"].concat(fn(i.x,i.y,i.qx,i.qy,r[1],r[2]));break;case"Q":i.qx=r[1],i.qy=r[2],r=["C"].concat(fn(i.x,i.y,r[1],r[2],r[3],r[4]));break;case"L":r=["C"].concat(un(i.x,i.y,r[1],r[2]));break;case"H":r=["C"].concat(un(i.x,i.y,r[1],i.y));break;case"V":r=["C"].concat(un(i.x,i.y,i.x,r[1]));break;case"Z":r=["C"].concat(un(i.x,i.y,i.X,i.Y));break}return r},d=function(r,i){if(r[i].length>7){r[i].shift();for(var P=r[i];P.length;)_[i]="A",r.splice(i++,0,["C"].concat(P.splice(0,6)));r.splice(i,1),y=e.length}},_=[],h="",f="",o=0,y=e.length;o<y;o++){e[o]&&(h=e[o][0]),h!="C"&&(_[o]=h,o&&(f=_[o-1])),e[o]=g(e[o],u,f),_[o]!="A"&&h=="C"&&(_[o]="C"),d(e,o);var M=e[o],m=M.length;u.x=M[m-2],u.y=M[m-1],u.bx=H(M[m-4])||u.x,u.by=H(M[m-3])||u.y}return t.curve=c(e),e}rn.exports=Mn},86463:(rn,b,H)=>{H.d(b,{Hz:()=>I,JA:()=>p,Re:()=>V,T8:()=>C,aR:()=>N,ex:()=>Z,wS:()=>z,z_:()=>k});var v=H(83612),J=H.n(v),U=H(41741),K=H(7502),$=H.n(K);function N(a){return{x:Math.round(a.x),y:Math.round(a.y),width:Math.round(a.width),height:Math.round(a.height)}}function Z(a){return{x:Math.round(a.x),y:Math.round(a.y)}}function p(a){return{top:a.y,right:a.x+(a.width||0),bottom:a.y+(a.height||0),left:a.x}}function k(a){return{x:a.left,y:a.top,width:a.right-a.left,height:a.bottom-a.top}}function z(a){return Z({x:a.x+(a.width||0)/2,y:a.y+(a.height||0)/2})}function C(a,l,s){s=s||0,(0,v.isObject)(s)||(s={x:s,y:s});var c=p(a),E=p(l),O=c.bottom+s.y<=E.top,F=c.left-s.x>=E.right,Q=c.top-s.y>=E.bottom,Y=c.right+s.x<=E.left,q=O?"top":Q?"bottom":null,G=Y?"left":F?"right":null;return G&&q?q+"-"+G:G||q||"intersect"}function I(a,l,s){var c=D(a,l);return c.length===1||c.length===2&&(0,U.tW)(c[0],c[1])<1?Z(c[0]):c.length>1?(c=(0,v.sortBy)(c,function(E){var O=Math.floor(E.t2*100)||1;return O=100-O,O=(O<10?"0":"")+O,E.segment2+"#"+O}),Z(c[s?0:c.length-1])):null}function D(a,l){return $()(a,l)}function V(a){a=a.slice();for(var l=0,s,c,E;a[l];)s=a[l],c=a[l-1],E=a[l+1],(0,U.tW)(s,E)===0||(0,U.ZS)(c,E,s)?a.splice(l,1):l++;return a}},64960:(rn,b,H)=>{H.d(b,{He:()=>V,PB:()=>k,RH:()=>I,cd:()=>U,jY:()=>C,oL:()=>D,om:()=>N,vA:()=>z});var v=H(83612),J=H.n(v);function U(l){return(0,v.filter)(l,function(s){return!(0,v.find)(l,function(c){return c!==s&&K(s,c)})})}function K(l,s){if(!!s){if(l===s)return s;if(!!l.parent)return K(l.parent,s)}}function $(l,s,c){var E=!c||l.indexOf(s)===-1;return E&&l.push(s),E}function N(l,s,c){c=c||0,(0,v.isArray)(l)||(l=[l]),(0,v.forEach)(l,function(E,O){var F=s(E,O,c);(0,v.isArray)(F)&&F.length&&N(F,s,c+1)})}function Z(l,s,c){var E=[],O=[];return N(l,function(F,Q,Y){$(E,F,s);var q=F.children;if((c===-1||Y<c)&&q&&$(O,q,s))return q}),E}function p(l,s){return Z(l,!s,1)}function k(l,s){return Z(l,!s,-1)}function z(l,s,c){(0,v.isUndefined)(s)&&(s=!0),(0,v.isObject)(s)&&(c=s,s=!0),c=c||{};var E=a(c.allShapes),O=a(c.allConnections),F=a(c.enclosedElements),Q=a(c.enclosedConnections),Y=a(c.topLevel,s&&(0,v.groupBy)(l,function(A){return A.id}));function q(A){Y[A.source.id]&&Y[A.target.id]&&(Y[A.id]=[A]),E[A.source.id]&&E[A.target.id]&&(Q[A.id]=F[A.id]=A),O[A.id]=A}function G(A){if(F[A.id]=A,A.waypoints)Q[A.id]=O[A.id]=A;else return E[A.id]=A,(0,v.forEach)(A.incoming,q),(0,v.forEach)(A.outgoing,q),A.children}return N(l,G),{allShapes:E,allConnections:O,topLevel:Y,enclosedConnections:Q,enclosedElements:F}}function C(l,s){s=!!s,(0,v.isArray)(l)||(l=[l]);var c,E,O,F;return(0,v.forEach)(l,function(Q){var Y=Q;Q.waypoints&&!s&&(Y=C(Q.waypoints,!0));var q=Y.x,G=Y.y,A=Y.height||0,en=Y.width||0;(q<c||c===void 0)&&(c=q),(G<E||E===void 0)&&(E=G),(q+en>O||O===void 0)&&(O=q+en),(G+A>F||F===void 0)&&(F=G+A)}),{x:c,y:E,height:F-E,width:O-c}}function I(l,s){var c={};return(0,v.forEach)(l,function(E){var O=E;O.waypoints&&(O=C(O)),!(0,v.isNumber)(s.y)&&O.x>s.x&&(c[E.id]=E),!(0,v.isNumber)(s.x)&&O.y>s.y&&(c[E.id]=E),O.x>s.x&&O.y>s.y&&((0,v.isNumber)(s.width)&&(0,v.isNumber)(s.height)&&O.width+O.x<s.width+s.x&&O.height+O.y<s.height+s.y||!(0,v.isNumber)(s.width)||!(0,v.isNumber)(s.height))&&(c[E.id]=E)}),c}function D(l){return"waypoints"in l?"connection":"x"in l?"shape":"root"}function V(l){return!!(l&&l.isFrame)}function a(l,s){return(0,v.assign)({},l||{},s||{})}},41741:(rn,b,H)=>{H.d(b,{Or:()=>N,SO:()=>z,ZS:()=>K,qr:()=>k,tW:()=>U});var v=H(83612),J=H.n(v);function U(C,I){return!C||!I?-1:Math.sqrt(Math.pow(C.x-I.x,2)+Math.pow(C.y-I.y,2))}function K(C,I,D,V){if(typeof V>"u"&&(V=5),!C||!I||!D)return!1;var a=(I.x-C.x)*(D.y-C.y)-(I.y-C.y)*(D.x-C.x),l=U(C,I);return Math.abs(a/l)<=V}var $=2;function N(C,I){var D;return(0,v.isArray)(C)?D=C:D=[C,I],Z(D)?"h":p(D)?"v":!1}function Z(C,I){var D;(0,v.isArray)(C)?D=C:D=[C,I];var V=D.slice().shift();return(0,v.every)(D,function(a){return Math.abs(V.y-a.y)<=$})}function p(C,I){var D;(0,v.isArray)(C)?D=C:D=[C,I];var V=D.slice().shift();return(0,v.every)(D,function(a){return Math.abs(V.x-a.x)<=$})}function k(C,I,D){return D=D||0,C.x>I.x-D&&C.y>I.y-D&&C.x<I.x+I.width+D&&C.y<I.y+I.height+D}function z(C,I){return{x:Math.round(C.x+(I.x-C.x)/2),y:Math.round(C.y+(I.y-C.y)/2)}}}}]);
