import{s as d,o as b,k as z,l as C,a as y,t as E,F as L,e as o,m as w,d as x,p as T,i as V,_ as O}from"./d.js";import{c as m}from"./j.js";import{g as D,m as P,a as $}from"./8.js";import{i as F}from"./6.js";import{d as H}from"./i.js";import"./y.js";import"./3.js";import"./2.js";import"./o.js";import"./1.js";import"./.js";import"./_.js";var R=e=>new Promise(r=>setTimeout(r,e)),p,M;({camera:M}=F);p="video";var Z={setup:()=>{var e,r,t,u,v,h,f;return f=d(),u=d(),r=d(!1),e=async a=>{for(var i,l;;){try{l=await $(a)}catch(s){i=s,console.error(a,i),r.value={audio:"麦克风",video:"摄像头"}[a],await R(1e3);continue}return r.value=!1,l}},t=m.src==="camera",b(async()=>{var a,i,l,s,g,_,c;if(H(u.value),t){i=[],l=["audio",p];for(a of l)s=await e(a),s&&(c=s.getTracks(),a===p&&(g=s),a==="audio"&&c&&m.sys_audio&&(_=await D(),_&&(c=P(c,_))),i=i.concat(c));setTimeout(async()=>{var k;k=new MediaStream(i),z(()=>{var B,S,j,I;({video:I,audio:B}=m),S={video:I,audio:B},j=k.getTracks();for(a of j)a.enabled=!!S[a.kind]}),(await C(()=>import("./n.js"),["n.js","3.js","l.js","6.js","j.js","y.js","2.js","o.js","d.js","8.css","k.js"])).default(k)})}else g=await e(p);f.value.srcObject=g}),h=d(outerWidth),v=d(t?0:localStorage.人像镜像-0),{v:f,main:u,size:h,mirror:v,err:r,w:a=>{localStorage.人像尺寸=a,h.value=a,M.size(a)},turn:()=>{localStorage.人像镜像=(v.value=!v.value)-0},x:()=>{m.video=""}}}};const n=e=>(T("data-v-54fa23bc"),e=e(),V(),e),A={ref:"main"},N={key:0},W=n(()=>o("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),q=n(()=>o("svg",{class:"now",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"12",cy:"12",fill:"var(--c)",opacity:"0.7",r:"4.5",stroke:"var(--c)"})],-1)),G=[W,q],J=n(()=>o("svg",{fill:"none",height:"15",viewBox:"0 0 14 15",width:"14",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"7",cy:"7.5",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),K=n(()=>o("svg",{class:"now",fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),Q=[J,K],U=n(()=>o("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("g",{opacity:"0.6"},[o("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),o("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),X=[U],Y=n(()=>o("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("g",{opacity:"0.6"},[o("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),o("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),ee=[Y];function oe(e,r){return x(),y("main",A,[e.err?(x(),y("h3",N,"请授权"+E(e.err),1)):(x(),y(L,{key:1},[o("video",{class:w({mirror:e.mirror}),autoplay:"",ref:"v"},null,2),o("nav",null,[o("a",{class:w({now:e.size<=250}),onClick:r[0]||(r[0]=t=>e.w(204))},G,2),o("a",{class:w({now:e.size>=310}),onClick:r[1]||(r[1]=t=>e.w(324))},Q,2),o("a",{class:w({mirror:e.mirror}),onClick:r[2]||(r[2]=(...t)=>e.turn&&e.turn(...t))},X,2),o("a",{onClick:r[3]||(r[3]=(...t)=>e.x&&e.x(...t))},ee)])],64))],512)}var pe=O(Z,[["render",oe],["__scopeId","data-v-54fa23bc"]]);export{pe as default};
