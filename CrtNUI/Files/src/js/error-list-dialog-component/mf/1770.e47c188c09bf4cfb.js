(self.webpackChunkapp_studio_enterprise_error_list_dialog=self.webpackChunkapp_studio_enterprise_error_list_dialog||[]).push([[1770],{11770:(b,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.StringBuilder=s.String=s.formatString=s.joinString=s.isNullOrWhiteSpace=s.emptyString=void 0;const c=`\r
`;function h(p){return n.isNullOrWhiteSpace(p)}function m(p,...t){return n.join(p,...t)}function f(p,...t){return n.format(p,...t)}s.emptyString="",s.isNullOrWhiteSpace=h,s.joinString=m,s.formatString=f;class n{static regexNumber=/{(\d+(:\w*)?)}/g;static regexObject=/{(\w+(:\w*)?)}/g;static empty="";static Empty="";static IsNullOrWhiteSpace(t){return n.isNullOrWhiteSpace(t)}static Join(t,...e){return n.join(t,...e)}static Format(t,...e){return n.format(t,...e)}static isNullOrWhiteSpace(t){try{return t==null||t=="undefined"?!0:t.toString().replace(/\s/g,"").length<1}catch(e){return console.log(e),!1}}static join(t,...e){try{var l=e[0];if(Array.isArray(l)||l instanceof Array){let i=n.empty;for(let o=0;o<l.length;o++){var a=l[o];o<l.length-1?i+=a+t:i+=a}return i}if(typeof l=="object"){let i=n.empty;const o=l;return Object.keys(l).forEach(u=>{i+=o[u]+t}),i=i.slice(0,i.length-t.length)}var r=e;return n.joinString(t,...r)}catch(i){return console.log(i),n.empty}}static format(t,...e){try{return t.match(n.regexNumber)?n.formatString(n.regexNumber,t,e):t.match(n.regexObject)?n.formatString(n.regexObject,t,e,!0):t}catch(l){return console.log(l),n.empty}}static formatString(t,e,l,a=!1){return e.replace(t,function(r,i){var o=r.split(":");1<o.length&&(i=o[0].replace("{",""),r=o[1].replace("}",""));let u;return(u=(a?l[0]:l)[i])==null||u==null||r.match(/{\d+}/)||(u=n.parsePattern(r,u))!==void 0&&u!=null?u:n.empty})}static parsePattern(t,e){switch(t){case"L":return e=e.toLocaleLowerCase();case"U":return e=e.toLocaleUpperCase();case"d":if(typeof e=="string")return n.getDisplayDateFromString(e);if(e instanceof Date)return n.format("{0:00}.{1:00}.{2:0000}",e.getDate(),e.getMonth(),e.getFullYear());break;case"s":if(typeof e=="string")return n.getSortableDateFromString(e);if(e instanceof Date)return n.format("{0:0000}-{1:00}-{2:00}",e.getFullYear(),e.getMonth(),e.getDate());break;case"n":{var r=(e=typeof e!="string"?e.toString():e).replace(/,/g,".");if(isNaN(parseFloat(r))||r.length<=3)break;r=r.split(/\D+/g);let i=r;var r=(i=1<r.length?[n.joinString("",...r.splice(0,r.length-1)),r[r.length-1]]:i)[0],l=r.length%3,a=0<l?r.substring(0,l):n.empty,r=r.substring(l).match(/.{3}/g);return e=a+"."+n.join(".",r)+(1<i.length?","+i[1]:"")}case"x":return this.decimalToHexString(e);case"X":return this.decimalToHexString(e,!0)}return typeof e!="number"&&isNaN(e)||isNaN(+t)||n.isNullOrWhiteSpace(e)?e:n.formatNumber(e,t)}static decimalToHexString(t,e=!1){return t=parseFloat(t).toString(16),e?t.toLocaleUpperCase():t}static getDisplayDateFromString(t){var e=t.split("-");if(e.length<=1)return t;let l=e[e.length-1];return t=e[e.length-2],e=e[e.length-3],(l=(l=l.split("T")[0]).split(" ")[0])+`.${t}.`+e}static getSortableDateFromString(t){var e=t.replace(",","").split(".");if(e.length<=1)return t;t=e[e.length-1].split(" ");let l=n.empty,a=(1<t.length&&(l=t[t.length-1]),e[e.length-1].split(" ")[0]+`-${e[e.length-2]}-`+e[e.length-3]);return!n.isNullOrWhiteSpace(l)&&1<l.length?a+="T"+l:a+="T00:00:00",a}static formatNumber(a,l){var l=l.length,a=a.toString();return l<=a.length?a:(l=l-a.length,++l,new Array(l).join("0")+a)}static joinString(t,...e){let l=n.empty;for(let r=0;r<e.length;r++)if(!(typeof e[r]=="string"&&n.isNullOrWhiteSpace(e[r])||typeof e[r]!="number"&&typeof e[r]!="string")){var a=""+e[r];l+=a;for(let i=r+1;i<e.length;i++)if(!n.isNullOrWhiteSpace(e[i])){l+=t,r=i-1;break}}return l}}s.String=n;class y{Values;constructor(t=""){this.Values=[],n.isNullOrWhiteSpace(t)||(this.Values=new Array(t))}toString(){return this.Values.join(n.empty)}ToString(){return this.toString()}append(t){this.Values.push(t)}Append(t){this.append(t)}appendLine(t){this.Values.push(c+t)}AppendLine(t){this.appendLine(t)}appendFormat(t,...e){this.Values.push(n.format(t,...e))}AppendFormat(t,...e){this.appendFormat(t,...e)}appendLineFormat(t,...e){this.Values.push(c+n.format(t,...e))}AppendLineFormat(t,...e){return this.appendLineFormat(t,...e)}clear(){this.Values=[]}Clear(){this.clear()}}s.StringBuilder=y}}]);