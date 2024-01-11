import{v as tt,u as W,a5 as nt,n as rt,d as He,W as ot,q as X,s as N,X as qe,z as ie,r as st,w as ct}from"./@vue-dwwP_D35.js";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof window<"u";function it(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ae(e,t){const n={};for(const r in t){const o=t[r];n[r]=L(o)?o.map(e):e(o)}return n}const Q=()=>{},L=Array.isArray,at=/\/$/,lt=e=>e.replace(at,"");function le(e,t,n="/"){let r,o={},l="",d="";const m=t.indexOf("#");let i=t.indexOf("?");return m<i&&m>=0&&(i=-1),i>-1&&(r=t.slice(0,i),l=t.slice(i+1,m>-1?m:t.length),o=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=dt(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:o,hash:d}}function ut(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ft(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ht(e[n],t[n]))return!1;return!0}function ht(e,t){return L(e)?Ce(e,t):L(t)?Ce(t,e):e===t}function Ce(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function dt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let l=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var Y;(function(e){e.pop="pop",e.push="push"})(Y||(Y={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function pt(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lt(e)}const mt=/^[^#]+#/;function gt(e,t){return e.replace(mt,"#")+t}function vt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function yt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=vt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function be(e,t){return(history.state?history.state.position-t:-1)+e}const fe=new Map;function Rt(e,t){fe.set(e,t)}function Et(e){const t=fe.get(e);return fe.delete(e),t}let wt=()=>location.protocol+"//"+location.host;function Ge(e,t){const{pathname:n,search:r,hash:o}=t,l=e.indexOf("#");if(l>-1){let m=o.includes(e.slice(l))?e.slice(l).length:1,i=o.slice(m);return i[0]!=="/"&&(i="/"+i),Se(i,"")}return Se(n,e)+r+o}function Pt(e,t,n,r){let o=[],l=[],d=null;const m=({state:u})=>{const g=Ge(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=k?u.position-k.position:0}else r(g);o.forEach(E=>{E(n.value,R,{delta:b,type:Y.pop,direction:b?b>0?F.forward:F.back:F.unknown})})};function i(){d=n.value}function f(u){o.push(u);const g=()=>{const R=o.indexOf(u);R>-1&&o.splice(R,1)};return l.push(g),g}function s(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:te()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:i,listen:f,destroy:a}}function ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function St(e){const{history:t,location:n}=window,r={value:Ge(e,n)},o={value:t.state};o.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,f,s){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:wt()+e+i;try{t[s?"replaceState":"pushState"](f,"",u),o.value=f}catch(g){console.error(g),n[s?"replace":"assign"](u)}}function d(i,f){const s=S({},t.state,ke(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});l(i,s,!0),r.value=i}function m(i,f){const s=S({},o.value,t.state,{forward:i,scroll:te()});l(s.current,s,!0);const a=S({},ke(r.value,i,null),{position:s.position+1},f);l(i,a,!1),r.value=i}return{location:r,state:o,push:m,replace:d}}function un(e){e=pt(e);const t=St(e),n=Pt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const o=S({location:"",base:e,go:r,createHref:gt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Ct(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ve=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function G(e,t){return S(new Error,{type:e,[Ve]:!0},t)}function T(e,t){return e instanceof Error&&Ve in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",bt={sensitive:!1,strict:!1,start:!0,end:!0},kt=/[.+*?^${}()[\]/\\]/g;function At(e,t){const n=S({},bt,t),r=[];let o=n.start?"^":"";const l=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(o+="/"),o+=u.value.replace(kt,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=u;l.push({name:R,repeatable:k,optional:b});const P=E||Oe;if(P!==Oe){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let _=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(_=b&&f.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),o+=_,g+=20,b&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function m(f){const s=f.match(d),a={};if(!s)return null;for(let u=1;u<s.length;u++){const g=s[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function i(f){let s="",a=!1;for(const u of e){(!a||!s.endsWith("/"))&&(s+="/"),a=!1;for(const g of u)if(g.type===0)s+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in f?f[R]:"";if(L(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=L(E)?E.join("/"):E;if(!P)if(b)u.length<2&&(s.endsWith("/")?s=s.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);s+=P}}return s||"/"}return{re:d,score:r,keys:l,parse:m,stringify:i}}function Ot(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function _t(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const l=Ot(r[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-r.length)===1){if(_e(r))return 1;if(_e(o))return-1}return o.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const xt={type:0,value:""},Mt=/[a-zA-Z0-9_]/;function Lt(e){if(!e)return[[]];if(e==="/")return[[xt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const o=[];let l;function d(){l&&o.push(l),l=[]}let m=0,i,f="",s="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=i}for(;m<e.length;){if(i=e[m++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&a(),d()):i===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:i==="("?n=2:Mt.test(i)?u():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),o}function Nt(e,t,n){const r=At(Lt(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function It(e,t){const n=[],r=new Map;t=Le({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function l(s,a,u){const g=!u,R=Tt(s);R.aliasOf=u&&u.record;const k=Le(t,s),b=[R];if("alias"in s){const _=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of _)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,P;for(const _ of b){const{path:M}=_;if(a&&M[0]!=="/"){const B=a.record.path,I=B[B.length-1]==="/"?"":"/";_.path=a.record.path+(M&&I+M)}if(E=Nt(_,a,k),u?u.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&s.name&&!Me(E)&&d(s.name)),R.children){const B=R.children;for(let I=0;I<B.length;I++)l(B[I],E,u&&u.children[I])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return P?()=>{d(P)}:Q}function d(s){if(Ke(s)){const a=r.get(s);a&&(r.delete(s),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(s);a>-1&&(n.splice(a,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function m(){return n}function i(s){let a=0;for(;a<n.length&&_t(s,n[a])>=0&&(s.record.path!==n[a].record.path||!Ue(s,n[a]));)a++;n.splice(a,0,s),s.record.name&&!Me(s)&&r.set(s.record.name,s)}function f(s,a){let u,g={},R,k;if("name"in s&&s.name){if(u=r.get(s.name),!u)throw G(1,{location:s});k=u.record.name,g=S(xe(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),s.params&&xe(s.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in s)R=s.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw G(1,{location:s,currentLocation:a});k=u.record.name,g=S({},a.params,s.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:jt(b)}}return e.forEach(s=>l(s)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:o}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Tt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$t(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $t(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function jt(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const De=/#/g,Bt=/&/g,Ht=/\//g,qt=/=/g,zt=/\?/g,We=/\+/g,Gt=/%5B/g,Kt=/%5D/g,Qe=/%5E/g,Vt=/%60/g,Fe=/%7B/g,Ut=/%7C/g,Xe=/%7D/g,Dt=/%20/g;function pe(e){return encodeURI(""+e).replace(Ut,"|").replace(Gt,"[").replace(Kt,"]")}function Wt(e){return pe(e).replace(Fe,"{").replace(Xe,"}").replace(Qe,"^")}function he(e){return pe(e).replace(We,"%2B").replace(Dt,"+").replace(De,"%23").replace(Bt,"%26").replace(Vt,"`").replace(Fe,"{").replace(Xe,"}").replace(Qe,"^")}function Qt(e){return he(e).replace(qt,"%3D")}function Ft(e){return pe(e).replace(De,"%23").replace(zt,"%3F")}function Xt(e){return e==null?"":Ft(e).replace(Ht,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const l=r[o].replace(We," "),d=l.indexOf("="),m=ee(d<0?l:l.slice(0,d)),i=d<0?null:ee(l.slice(d+1));if(m in t){let f=t[m];L(f)||(f=t[m]=[f]),f.push(i)}else t[m]=i}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(l=>l&&he(l)):[r&&he(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Zt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Jt=Symbol(""),Ie=Symbol(""),me=Symbol(""),Ye=Symbol(""),de=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function j(e,t,n,r,o){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,m)=>{const i=a=>{a===!1?m(G(4,{from:n,to:t})):a instanceof Error?m(a):Ct(a)?m(G(2,{from:t,to:a})):(l&&r.enterCallbacks[o]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[o],t,n,i);let s=Promise.resolve(f);e.length<3&&(s=s.then(i)),s.catch(a=>m(a))})}function ue(e,t,n,r){const o=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(en(m)){const f=(m.__vccOpts||m)[t];f&&o.push(j(f,n,r,l,d))}else{let i=m();o.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const s=it(f)?f.default:f;l.components[d]=s;const u=(s.__vccOpts||s)[t];return u&&j(u,n,r,l,d)()}))}}return o}function en(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=X(me),n=X(Ye),r=N(()=>t.resolve(W(e.to))),o=N(()=>{const{matched:i}=r.value,{length:f}=i,s=i[f-1],a=n.matched;if(!s||!a.length)return-1;const u=a.findIndex(z.bind(null,s));if(u>-1)return u;const g=$e(i[f-2]);return f>1&&$e(s)===g&&a[a.length-1].path!==g?a.findIndex(z.bind(null,i[f-2])):u}),l=N(()=>o.value>-1&&on(n.params,r.value.params)),d=N(()=>o.value>-1&&o.value===n.matched.length-1&&ze(n.params,r.value.params));function m(i={}){return rn(i)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(Q):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const tn=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=ot(Te(e)),{options:r}=X(me),o=N(()=>({[je(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[je(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),nn=tn;function rn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function on(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((l,d)=>l!==o[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const je=(e,t,n)=>e??t??n,sn=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=X(de),o=N(()=>e.route||r.value),l=X(Ie,0),d=N(()=>{let f=W(l);const{matched:s}=o.value;let a;for(;(a=s[f])&&!a.components;)f++;return f}),m=N(()=>o.value.matched[d.value]);ie(Ie,N(()=>d.value+1)),ie(Jt,m),ie(de,o);const i=st();return ct(()=>[i.value,m.value,e.name],([f,s,a],[u,g,R])=>{s&&(s.instances[a]=f,g&&g!==s&&f&&f===u&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),f&&s&&(!g||!z(s,g)||!u)&&(s.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,a=m.value,u=a&&a.components[s];if(!u)return Be(n.default,{Component:u,route:f});const g=a.props[s],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=qe(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[s]=null)},ref:i}));return Be(n.default,{Component:b,route:f})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cn=sn;function fn(e){const t=It(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Ne,o=e.history,l=D(),d=D(),m=D(),i=tt($);let f=$;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=ae.bind(null,c=>""+c),a=ae.bind(null,Xt),u=ae.bind(null,ee);function g(c,p){let h,v;return Ke(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(c=>c.record)}function b(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||i.value),typeof c=="string"){const y=le(n,c,p.path),O=t.resolve({path:y.path},p),U=o.createHref(y.fullPath);return S(y,O,{params:u(O.params),hash:ee(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in c)h=S({},c,{path:le(n,c.path,p.path).path});else{const y=S({},c.params);for(const O in y)y[O]==null&&delete y[O];h=S({},c,{params:a(y)}),p.params=a(p.params)}const v=t.resolve(h,p),C=c.hash||"";v.params=s(u(v.params));const A=ut(r,S({},c,{hash:Wt(C),path:v.path})),w=o.createHref(A);return S({fullPath:A,hash:C,query:r===Ne?Zt(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?le(n,c,i.value.path):S({},c)}function _(c,p){if(f!==c)return G(8,{from:p,to:c})}function M(c){return K(c)}function B(c){return M(S(P(c),{replace:!0}))}function I(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function K(c,p){const h=f=E(c),v=i.value,C=c.state,A=c.force,w=c.replace===!0,y=I(h);if(y)return K(S(P(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:w}),p||h);const O=h;O.redirectedFrom=p;let U;return!A&&ft(r,v,h)&&(U=G(16,{to:O,from:v}),we(v,v,!0,!1)),(U?Promise.resolve(U):ve(O,v)).catch(x=>T(x)?T(x,2)?x:oe(x):re(x,O,v)).then(x=>{if(x){if(T(x,2))return K(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),p||O)}else x=Re(O,v,!0,w,C);return ye(O,v,x),x})}function Ze(c,p){const h=_(c,p);return h?Promise.reject(h):Promise.resolve()}function ge(c){const p=J.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(c):c()}function ve(c,p){let h;const[v,C,A]=an(c,p);h=ue(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(O=>{h.push(j(O,c,p))});const w=Ze.bind(null,c,p);return h.push(w),H(h).then(()=>{h=[];for(const y of l.list())h.push(j(y,c,p));return h.push(w),H(h)}).then(()=>{h=ue(C,"beforeRouteUpdate",c,p);for(const y of C)y.updateGuards.forEach(O=>{h.push(j(O,c,p))});return h.push(w),H(h)}).then(()=>{h=[];for(const y of A)if(y.beforeEnter)if(L(y.beforeEnter))for(const O of y.beforeEnter)h.push(j(O,c,p));else h.push(j(y.beforeEnter,c,p));return h.push(w),H(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=ue(A,"beforeRouteEnter",c,p),h.push(w),H(h))).then(()=>{h=[];for(const y of d.list())h.push(j(y,c,p));return h.push(w),H(h)}).catch(y=>T(y,8)?y:Promise.reject(y))}function ye(c,p,h){m.list().forEach(v=>ge(()=>v(c,p,h)))}function Re(c,p,h,v,C){const A=_(c,p);if(A)return A;const w=p===$,y=q?history.state:{};h&&(v||w?o.replace(c.fullPath,S({scroll:w&&y&&y.scroll},C)):o.push(c.fullPath,C)),i.value=c,we(c,p,h,w),oe()}let V;function Je(){V||(V=o.listen((c,p,h)=>{if(!Pe.listening)return;const v=E(c),C=I(v);if(C){K(S(C,{replace:!0}),v).catch(Q);return}f=v;const A=i.value;q&&Rt(be(A.fullPath,h.delta),te()),ve(v,A).catch(w=>T(w,12)?w:T(w,2)?(K(w.to,v).then(y=>{T(y,20)&&!h.delta&&h.type===Y.pop&&o.go(-1,!1)}).catch(Q),Promise.reject()):(h.delta&&o.go(-h.delta,!1),re(w,v,A))).then(w=>{w=w||Re(v,A,!1),w&&(h.delta&&!T(w,8)?o.go(-h.delta,!1):h.type===Y.pop&&T(w,20)&&o.go(-1,!1)),ye(v,A,w)}).catch(Q)}))}let ne=D(),Ee=D(),Z;function re(c,p,h){oe(c);const v=Ee.list();return v.length?v.forEach(C=>C(c,p,h)):console.error(c),Promise.reject(c)}function et(){return Z&&i.value!==$?Promise.resolve():new Promise((c,p)=>{ne.add([c,p])})}function oe(c){return Z||(Z=!c,Je(),ne.list().forEach(([p,h])=>c?h(c):p()),ne.reset()),c}function we(c,p,h,v){const{scrollBehavior:C}=e;if(!q||!C)return Promise.resolve();const A=!h&&Et(be(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return rt().then(()=>C(c,p,A)).then(w=>w&&yt(w)).catch(w=>re(w,c,p))}const se=c=>o.go(c);let ce;const J=new Set,Pe={currentRoute:i,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:B,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:Ee.add,isReady:et,install(c){const p=this;c.component("RouterLink",nn),c.component("RouterView",cn),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>W(i)}),q&&!ce&&i.value===$&&(ce=!0,M(o.location).catch(C=>{}));const h={};for(const C in $)Object.defineProperty(h,C,{get:()=>i.value[C],enumerable:!0});c.provide(me,p),c.provide(Ye,nt(h)),c.provide(de,i);const v=c.unmount;J.add(c),c.unmount=function(){J.delete(c),J.size<1&&(f=$,V&&V(),V=null,i.value=$,ce=!1,Z=!1),v()}}};function H(c){return c.reduce((p,h)=>p.then(()=>ge(h)),Promise.resolve())}return Pe}function an(e,t){const n=[],r=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>z(f,m))?r.push(m):n.push(m));const i=e.matched[d];i&&(t.matched.find(f=>z(f,i))||o.push(i))}return[n,r,o]}export{cn as R,un as a,fn as c};
