import{c as d}from"./l.js";import{m}from"./i.js";import{r as f,H as v,k as _,a as y,m as p,n as h,d as x,_ as g}from"./8.js";var z={setup:()=>{var a,r,n,o;return o=f(0),n=void 0,r=void 0,a=()=>{r&&(clearInterval(n),r(),r=void 0)},v(a),_(async()=>{var t,e,i,l,c,s,u;a(),{audio:i}=d,i&&(u=await m.audio(i),t=new AudioContext,s=t.createMediaStreamSource(u),e=t.createAnalyser(),e.minDecibels=-90,e.maxDecibels=-10,e.fftSize=32,r=()=>(s.disconnect(e),t.close()),l=e.frequencyBinCount,c=new Uint8Array(l),n=setInterval(()=>{e.getByteFrequencyData(c),o.value=Math.round(Math.min(1,Math.max(...c)/200)*100)},100),s.connect(e))}),{vol:o,config:d}}};function A(a,r){return x(),y("a",{class:p(["audio",{x:!a.config.audio}]),title:"麦克风",style:h("--vol:"+a.vol+"%")},null,6)}var M=g(z,[["render",A],["__scopeId","data-v-29e43359"]]);export{M as z};
