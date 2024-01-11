import{d as x,o as d,J as O,K as l,a as m,I as r,u as y,$ as k,c as v,_ as g,a0 as S,a1 as w,Z as R,a2 as z}from"./@vue-dwwP_D35.js";import{c as L}from"./pinia-v8W6EXWv.js";import{E as $,z as M,a as I,b as A,c as T,d as V,e as C}from"./element-plus-ZU6y5GID.js";import{R as N,c as D,a as B}from"./vue-router-D1r35s9o.js";import"./vue-demi-C4xddsk9.js";import"./@vueuse-8RNLJj0t.js";import"./lodash-es-LjAFrSJZ.js";import"./@element-plus-jmM5Lr52.js";import"./@sxzz--N-3kK7X.js";import"./@ctrl-ZggoHSuR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const H=x({__name:"App",setup(s){return(o,i)=>{const n=$;return d(),O(n,{locale:y(M)},{default:l(()=>[m("div",null,[r(y(N))])]),_:1},8,["locale"])}}}),U="modulepreload",W=function(s,o){return new URL(s,o).href},j={},_=function(o,i,n){let a=Promise.resolve();if(i&&i.length>0){const t=document.getElementsByTagName("link");a=Promise.all(i.map(e=>{if(e=W(e,n),e in j)return;j[e]=!0;const p=e.endsWith(".css"),P=p?'[rel="stylesheet"]':"";if(!!n)for(let f=t.length-1;f>=0;f--){const u=t[f];if(u.href===e&&(!p||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${P}`))return;const c=document.createElement("link");if(c.rel=p?"stylesheet":U,p||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),p)return new Promise((f,u)=>{c.addEventListener("load",f),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})}))}return a.then(()=>o()).catch(t=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t})};var F={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G=[{path:"/",component:()=>_(()=>Promise.resolve().then(()=>na),void 0,import.meta.url),children:[{path:"/home",name:"home",alias:"/",component:()=>_(()=>Promise.resolve().then(()=>da),void 0,import.meta.url)},{path:"/algorithm",name:"algorithm",component:()=>_(()=>Promise.resolve().then(()=>_a),void 0,import.meta.url)},{path:"/contactus",name:"contactus",component:()=>_(()=>Promise.resolve().then(()=>ya),void 0,import.meta.url)}]}],q=D({history:B(F.VITE_BASE_URL),routes:G}),h=k(H);h.use(L());h.use(q);h.mount("#app");const K=""+new URL("../../images/1.png",import.meta.url).href,b=(s,o)=>{const i=s.__vccOpts||s;for(const[n,a]of o)i[n]=a;return i},J={},E=s=>(S("data-v-9835626c"),s=s(),w(),s),Z={class:"header-content"},Q={class:"back"},X=E(()=>m("img",{src:K,class:"logo-image"},null,-1)),Y=E(()=>m("div",{class:"right-side"},null,-1));function aa(s,o){const i=I,n=A;return d(),v("div",Z,[m("div",Q,[X,r(n,{"default-active":"/",class:"el-menu-demo",mode:"horizontal",router:!0},{default:l(()=>[r(i,{index:"/"},{default:l(()=>[g("首页")]),_:1}),r(i,{index:"algorithm"},{default:l(()=>[g("算法框架")]),_:1}),r(i,{index:"contactus"},{default:l(()=>[g("关于我们")]),_:1})]),_:1}),Y])])}const ta=b(J,[["render",aa],["__scopeId","data-v-9835626c"]]),ea={},sa={class:"common-layout"};function ia(s,o){const i=ta,n=V,a=R("router-view"),t=C,e=T;return d(),v("div",sa,[r(e,null,{default:l(()=>[r(n,null,{default:l(()=>[r(i)]),_:1}),r(t,null,{default:l(()=>[r(a)]),_:1})]),_:1})])}const oa=b(ea,[["render",ia],["__scopeId","data-v-98f0572c"]]),na=Object.freeze(Object.defineProperty({__proto__:null,default:oa},Symbol.toStringTag,{value:"Module"})),ra={};function la(s,o){return d(),v("main",null,"我是首页")}const ca=b(ra,[["render",la]]),da=Object.freeze(Object.defineProperty({__proto__:null,default:ca},Symbol.toStringTag,{value:"Module"})),pa={class:"layout-anim-child"},fa=z('<div class="codebase" data-v-a5b20baf><div class="codebase-proj" data-v-a5b20baf><div class="proj" data-v-a5b20baf><div class="proj-title" data-v-a5b20baf><div class="proj-title-title" data-v-a5b20baf>MMPreTrain<sup class="sup-text" data-v-a5b20baf>NEW</sup></div><div class="proj-title-link" data-v-a5b20baf><img class="proj-title-link-github" src="https://openmmlab.com/static/GithubFilled.394324e5.svg" alt="github" data-v-a5b20baf><img class="proj-title-link-docs" src="https://openmmlab.com/static/RepoOutlined.8943297d.svg" alt="docs" data-v-a5b20baf></div><div class="proj-title-titleDesc" data-v-a5b20baf>A pre-training toolbox for deep learning.</div></div><div class="proj-desc-wrapper" data-v-a5b20baf><div class="ant-typography" data-v-a5b20baf><ul data-v-a5b20baf><li data-v-a5b20baf>Various backbones and pre-trained models</li><li data-v-a5b20baf> Rich training strategies(supervised learning, self-supervised learning, etc.) and tricks </li><li data-v-a5b20baf>High efficiency and extensibility</li><li data-v-a5b20baf>Powerful toolkits for model analysis, visualization and experiments</li></ul></div></div><div class="proj-tips-wrapper" data-v-a5b20baf><span class="tag" style="font-size:12px;" data-v-a5b20baf>Multimodality</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Image Classification</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Self-supervised Learning</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Pre-training</span></div><div class="proj-bg1" data-v-a5b20baf></div><div class="proj-bg2" data-v-a5b20baf></div></div><div class="proj" data-v-a5b20baf><div class="proj-title" data-v-a5b20baf><div class="proj-title-title" data-v-a5b20baf>MMPreTrain<sup class="sup-text" data-v-a5b20baf>NEW</sup></div><div class="proj-title-link" data-v-a5b20baf><img class="proj-title-link-github" src="https://openmmlab.com/static/GithubFilled.394324e5.svg" alt="github" data-v-a5b20baf><img class="proj-title-link-docs" src="https://openmmlab.com/static/RepoOutlined.8943297d.svg" alt="docs" data-v-a5b20baf></div><div class="proj-title-titleDesc" data-v-a5b20baf>A pre-training toolbox for deep learning.</div></div><div class="proj-desc-wrapper" data-v-a5b20baf><div class="ant-typography" data-v-a5b20baf><ul data-v-a5b20baf><li data-v-a5b20baf>Various backbones and pre-trained models</li><li data-v-a5b20baf> Rich training strategies(supervised learning, self-supervised learning, etc.) and tricks </li><li data-v-a5b20baf>High efficiency and extensibility</li><li data-v-a5b20baf>Powerful toolkits for model analysis, visualization and experiments</li></ul></div></div><div class="proj-tips-wrapper" data-v-a5b20baf><span class="tag" style="font-size:12px;" data-v-a5b20baf>Multimodality</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Image Classification</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Self-supervised Learning</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Pre-training</span></div><div class="proj-bg1" data-v-a5b20baf></div><div class="proj-bg2" data-v-a5b20baf></div></div><div class="proj" data-v-a5b20baf><div class="proj-title" data-v-a5b20baf><div class="proj-title-title" data-v-a5b20baf>MMPreTrain<sup class="sup-text" data-v-a5b20baf>NEW</sup></div><div class="proj-title-link" data-v-a5b20baf><img class="proj-title-link-github" src="https://openmmlab.com/static/GithubFilled.394324e5.svg" alt="github" data-v-a5b20baf><img class="proj-title-link-docs" src="https://openmmlab.com/static/RepoOutlined.8943297d.svg" alt="docs" data-v-a5b20baf></div><div class="proj-title-titleDesc" data-v-a5b20baf>A pre-training toolbox for deep learning.</div></div><div class="proj-desc-wrapper" data-v-a5b20baf><div class="ant-typography" data-v-a5b20baf><ul data-v-a5b20baf><li data-v-a5b20baf>Various backbones and pre-trained models</li><li data-v-a5b20baf> Rich training strategies(supervised learning, self-supervised learning, etc.) and tricks </li><li data-v-a5b20baf>High efficiency and extensibility</li><li data-v-a5b20baf>Powerful toolkits for model analysis, visualization and experiments</li></ul></div></div><div class="proj-tips-wrapper" data-v-a5b20baf><span class="tag" style="font-size:12px;" data-v-a5b20baf>Multimodality</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Image Classification</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Self-supervised Learning</span><span class="tag" style="font-size:12px;" data-v-a5b20baf>Pre-training</span></div><div class="proj-bg1" data-v-a5b20baf></div><div class="proj-bg2" data-v-a5b20baf></div></div></div></div>',1),va=[fa],ba=x({__name:"algorithm",setup(s){return(o,i)=>(d(),v("div",pa,va))}}),ua=b(ba,[["__scopeId","data-v-a5b20baf"]]),_a=Object.freeze(Object.defineProperty({__proto__:null,default:ua},Symbol.toStringTag,{value:"Module"})),ma={};function ga(s,o){return d(),v("main",null," 联系我们 ")}const ha=b(ma,[["render",ga]]),ya=Object.freeze(Object.defineProperty({__proto__:null,default:ha},Symbol.toStringTag,{value:"Module"}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
