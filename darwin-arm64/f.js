import{c as s,m as p}from"./j.js";import{r as y,H as x,k as w,a as g,m as S,n as b,d as j,_ as z}from"./_.js";import{H as A}from"./e.js";import{i as f}from"./-.js";var B={setup:()=>{var a,e,r,t;return t=y(0),r=void 0,e=void 0,a=()=>{e&&(clearInterval(r),e(),e=void 0)},x(a),w(async()=>{var o,n,i,d,c,u,l;a(),{audio:i}=s,i&&(l=await p.audio(i),o=new AudioContext,u=o.createMediaStreamSource(l),n=o.createAnalyser(),n.minDecibels=-90,n.maxDecibels=-10,n.fftSize=32,e=()=>(u.disconnect(n),o.close()),d=n.frequencyBinCount,c=new Uint8Array(d),r=setInterval(()=>{n.getByteFrequencyData(c),t.value=Math.round(Math.min(1,Math.max(...c)/200)*100)},100),u.connect(n))}),{vol:t,config:s}}};function U(a,e){return j(),g("a",{class:S(["audio",{x:!a.config.audio}]),title:"麦克风",style:b("--vol:"+a.vol+"%")},null,6)}var C=z(B,[["render",U],["__scopeId","data-v-29e43359"]]);var _,v;v=()=>{var a;return a=new Headers,a.append("user_token",localStorage.uid),a};_=class{constructor(e){this.json=this.json.bind(this),this.ipc=e}async fetch(e,r={}){var t;if(r.headers=v(),e.indexOf(".do")<0&&(e+=".do"),t=await fetch(A+e,r),t.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return t}async json(e,r={}){var t;return t=await this.fetch(e,r),t.json()}};var m=a=>new _(a);var h,I=m(f);h=m(f);var q=async function(){var a,e;try{({space:{max:e}}=await h.json("user/get"))}catch(r){a=r,console.error(a),e=500*1024*1024}e>=1e3*1024*1024*1024?(s.duration_txt="单次最长录制5小时",s.max_duration=5*60*60):e>=10*1024*1024*1024?(s.duration_txt='单次最长录制3小时, "扩容"可获更长时间',s.max_duration=3*60*60):(s.duration_txt='单次最长录制30分钟, "扩容"可获更长时间',s.max_duration=30*60)};export{q as f,I as u,C as z};
