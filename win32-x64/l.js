import{s as v,o as b,k as j,l as I,a as f,t as M,F as z,e as o,m,d as k,p as C,i as E,_ as L}from"./e.js";import{c as l}from"./$1.js";import{g as T,m as V,a as O}from"./4.js";import{i as D}from"./3.js";import{d as P}from"./z.js";import"./6.js";import"./2.js";import"./1.js";import"./s.js";import"./a.js";import"./o.js";import"./8.js";var $=e=>new Promise(r=>setTimeout(r,e)),y,B;({camera:B}=D);y="video";var F={setup:()=>{var e,r,i,u,w,p,h;return h=v(),u=v(),r=v(!1),e=async a=>{for(var s,t;;){try{t=await O(a)}catch(c){s=c,console.error(a,s),r.value={audio:"麦克风",video:"摄像头"}[a],await $(1e3);continue}return r.value=!1,t}},i=l.src==="camera",b(async()=>{var a,s,t,c,_;P(u.value),i?(c=await T(l.sys_audio),a=await e("audio"),s=a?a.getTracks():[],t=await e(y),_=t?t.getTracks():[],setTimeout(async()=>{var x;x=new MediaStream([..._,...V(s,c)]),j(()=>{var n,S,g;g=!!l.video;for(n of _)n.enabled=g;l.audio;for(n of s)n.enabled=g;S=l.sys_audio;for(n of c)n.enabled=S}),(await I(()=>import("./w.js"),["w.js","2.js","a.js","0.js","3.js","$1.js","6.js","1.js","s.js","e.js","7.css","..js"])).default(x,s)})):t=await e(y),h.value.srcObject=t}),p=v(outerWidth),w=v(i?0:localStorage.人像镜像-0),{v:h,main:u,size:p,mirror:w,err:r,w:a=>{localStorage.人像尺寸=a,p.value=a,B.size(a)},turn:()=>{localStorage.人像镜像=(w.value=!w.value)-0},x:()=>{l.video=""}}}};const d=e=>(C("data-v-3df04869"),e=e(),E(),e),H={ref:"main"},R={key:0},Z=d(()=>o("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),A=d(()=>o("svg",{class:"now",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"12",cy:"12",fill:"var(--c)",opacity:"0.7",r:"4.5",stroke:"var(--c)"})],-1)),N=[Z,A],W=d(()=>o("svg",{fill:"none",height:"15",viewBox:"0 0 14 15",width:"14",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"7",cy:"7.5",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),q=d(()=>o("svg",{class:"now",fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),G=[W,q],J=d(()=>o("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("g",{opacity:"0.6"},[o("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),o("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),K=[J],Q=d(()=>o("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("g",{opacity:"0.6"},[o("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),o("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),U=[Q];function X(e,r){return k(),f("main",H,[e.err?(k(),f("h3",R,"请授权"+M(e.err),1)):(k(),f(z,{key:1},[o("video",{class:m({mirror:e.mirror}),autoplay:"",ref:"v"},null,2),o("nav",null,[o("a",{class:m({now:e.size<=250}),onClick:r[0]||(r[0]=i=>e.w(204))},N,2),o("a",{class:m({now:e.size>=310}),onClick:r[1]||(r[1]=i=>e.w(324))},G,2),o("a",{class:m({mirror:e.mirror}),onClick:r[2]||(r[2]=(...i)=>e.turn&&e.turn(...i))},K,2),o("a",{onClick:r[3]||(r[3]=(...i)=>e.x&&e.x(...i))},U)])],64))],512)}var ve=L(F,[["render",X],["__scopeId","data-v-3df04869"]]);export{ve as default};
