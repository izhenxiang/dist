import{H as d}from"./o.js";import{i as o}from"./2.js";import{c as s}from"./k.js";var c,u;u=async(t,a)=>{var r,e;return r=new Headers,r.append("user_token",localStorage.uid),t.startsWith("upload")&&(e=await a.auto_update.ua_now(),r.append("ua",e)),r};c=class{constructor(a){this.json=this.json.bind(this),this.ipc=a}async fetch(a,r={}){var e;if(r.headers=await u(a,this.ipc),a.indexOf(".do")<0&&(a+=".do"),e=await fetch(d+a,r),e.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return e}async json(a,r={}){var e;return e=await this.fetch(a,r),e.json()}};var i=t=>new c(t);var n,l=i(o);n=1*60;var m=async function(){var t,a;try{({space:{max:a}}=await i(o).json("user/get"))}catch(r){t=r,console.error(t),a=500*1024*1024}a>=1e3*1024*1024*1024?(s.duration_txt="单次最长录制5小时",s.max_duration=5*60*60+n):a>=10*1024*1024*1024?(s.duration_txt='单次最长录制3小时, "扩容"可获更长时间',s.max_duration=3*60*60+n):(s.duration_txt='单次最长录制30分钟, "扩容"可获更长时间',s.max_duration=30*60+n)},v=async function(){var t,a,r;try{r=await i(o).json("notify/unread"),t=r[0]}catch(e){a=e,console.error(a),t=0}return t};export{m as a,v as f,l as u};
