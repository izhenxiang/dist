import{i as d}from"./4.js";import{b as c}from"./-.js";import{O as _}from"./0.js";import{_ as p}from"./8.js";import{s as i,o as v,a as m,e as r,t as f,m as h,p as w,i as y,d as b,_ as I}from"./e.js";var g=e=>{var o,a,s;return a=void 0,o=new Promise(t=>{a=t}),document.hidden?a():s=p(document,{visibilitychange:()=>{document.hidden&&(s(),setTimeout(a,100))}}),e.hide(),o},n,l;({count_down:n,recbar:l}=d);var S={setup:()=>{var e,o;return e=i(3),o=i(!1),v(()=>{var a,s;return s=void 0,a=()=>{s=setInterval(async()=>{var t;if(t=e.value-1,t===0){await g(n),c.start(),n.close();return}else e.value=t},1e3)},a(),_.pause=t=>{o.value=t,t?(clearInterval(s),s=void 0):s||a()}}),{n:e,pause:o,stop:l.cancel}}};const u=e=>(w("data-v-7a0cc364"),e=e(),y(),e),k=u(()=>r("s",null,null,-1)),B=u(()=>r("i",null,"点此取消",-1));function C(e,o){return b(),m("a",{class:h({pause:e.pause}),onClick:o[0]||(o[0]=(...a)=>e.stop&&e.stop(...a))},[k,r("b",null,f(e.n),1),B],2)}var E=I(S,[["render",C],["__scopeId","data-v-7a0cc364"]]);export{E as default};
