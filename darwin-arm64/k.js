import{c as _}from"./l.js";import{m as y}from"./e.js";import{r as p,J as b,k as g,a as h,m as x,n as z,d as A,_ as B}from"./i.js";var S={props:{from:{type:String,required:!0,default:"main"}},setup:r=>{var t,a,i,u,c;return c=p(0),i=void 0,a=void 0,u=r.from==="recbar",t=()=>{a&&(clearInterval(i),a(),a=void 0)},b(t),g(async()=>{var o,e,n,d,s,f,l,m;if(t(),{audio:n}=_,!!n){try{m=await y.audio(n)}catch(v){f=v,console.log("failed to get audio from",n,"err:"+f);return}o=new AudioContext,l=o.createMediaStreamSource(m),e=o.createAnalyser(),e.minDecibels=-90,e.maxDecibels=-10,e.fftSize=32,a=()=>(l.disconnect(e),o.close()),d=e.frequencyBinCount,s=new Uint8Array(d),i=setInterval(()=>{e.getByteFrequencyData(s),c.value=Math.round(Math.min(1,Math.max(...s)/200)*100)},100),l.connect(e)}}),{is_recbar:u,vol:c,config:_}}};function w(r,t){return A(),h("a",{class:x(["audio",{x:!r.config.audio,recbar:r.is_recbar==!0}]),title:"麦克风",style:z("--vol:"+r.vol+"%")},null,6)}var C=B(S,[["render",w],["__scopeId","data-v-396de1a2"]]);export{C as z};
