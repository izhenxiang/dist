import{i as d}from"./1.js";import{b as v}from"./-.js";import{O as c}from"./..js";import{s as u,o as p,c as _,f as t,t as f,m,p as h,j as w,a as y,_ as b}from"./8.js";var I=(e,n)=>{var a,r;for(a in n)r=n[a],e.addEventListener(a,r);return()=>{var o;o=[];for(a in n)r=n[a],o.push(e.removeEventListener(a,r));return o}},g=e=>{var n,a,r;return a=void 0,n=new Promise(o=>{a=o}),document.hidden?a():r=I(document,{visibilitychange:()=>{document.hidden&&(r(),a())}}),e.hide(),n},s,i;({count_down:s,recbar:i}=d);var S={setup:()=>{var e,n;return e=u(3),n=u(!1),p(()=>{var a,r;return r=void 0,a=()=>{r=setInterval(async()=>{var o;if(o=e.value-1,o===0){await g(s),v.start(),s.close();return}else e.value=o},1e3)},a(),c.pause=o=>{n.value=o,o?(clearInterval(r),r=void 0):r||a()}}),{n:e,pause:n,stop:i.cancel}}};const l=e=>(h("data-v-7a0cc364"),e=e(),w(),e),k=l(()=>t("s",null,null,-1)),B=l(()=>t("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function E(e,n){return y(),_("a",{class:m({pause:e.pause}),onClick:n[0]||(n[0]=(...a)=>e.stop&&e.stop(...a))},[k,t("b",null,f(e.n),1),B],2)}var $=b(S,[["render",E],["__scopeId","data-v-7a0cc364"]]);export{$ as default};
