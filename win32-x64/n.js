import{c as o}from"./q.js";import{m as p}from"./c.js";import{r as y,I as x,k as w,a as g,m as S,n as b,d as j,_ as z}from"./e.js";import{H as A}from"./i.js";import{i as _}from"./6.js";var B={setup:()=>{var a,e,r,t;return t=y(0),r=void 0,e=void 0,a=()=>{e&&(clearInterval(r),e(),e=void 0)},x(a),w(async()=>{var s,n,c,l,u,d,f;a(),{audio:c}=o,c&&(f=await p.audio(c),s=new AudioContext,d=s.createMediaStreamSource(f),n=s.createAnalyser(),n.minDecibels=-90,n.maxDecibels=-10,n.fftSize=32,e=()=>(d.disconnect(n),s.close()),l=n.frequencyBinCount,u=new Uint8Array(l),r=setInterval(()=>{n.getByteFrequencyData(u),t.value=Math.round(Math.min(1,Math.max(...u)/200)*100)},100),d.connect(n))}),{vol:t,config:o}}};function U(a,e){return j(),g("a",{class:S(["audio",{x:!a.config.audio}]),title:"麦克风",style:b("--vol:"+a.vol+"%")},null,6)}var D=z(B,[["render",U],["__scopeId","data-v-29e43359"]]);var m,v;v=()=>{var a;return a=new Headers,a.append("user_token",localStorage.uid),a};m=class{constructor(e){this.json=this.json.bind(this),this.ipc=e}async fetch(e,r={}){var t;if(r.headers=v(),e.indexOf(".do")<0&&(e+=".do"),t=await fetch(A+e,r),t.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return t}async json(e,r={}){var t;return t=await this.fetch(e,r),t.json()}};var h=a=>new m(a);var i,q=h(_);i=1*60;var E=async function(){var a,e;try{({space:{max:e}}=await h(_).json("user/get"))}catch(r){a=r,console.error(a),e=500*1024*1024}e>=1e3*1024*1024*1024?(o.duration_txt="单次最长录制5小时",o.max_duration=5*60*60+i):e>=10*1024*1024*1024?(o.duration_txt='单次最长录制3小时, "扩容"可获更长时间',o.max_duration=3*60*60+i):(o.duration_txt='单次最长录制30分钟, "扩容"可获更长时间',o.max_duration=30*60+i)};export{E as f,q as u,D as z};
