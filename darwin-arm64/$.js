import{H as p}from"./l.js";import{i}from"./4.js";import{c as s}from"./r.js";var c,d;d=async(r,a)=>{var t,e;return t=new Headers,t.append("user_token",localStorage.uid),r.startsWith("upload")&&(e=await a.auto_update.ua_now(),t.append("ua",e)),t};c=class{constructor(a){this.json=this.json.bind(this),this.ipc=a}async fetch(a,t={}){var e;if(t.headers=await d(a,this.ipc),a.indexOf(".do")<0&&(a+=".do"),e=await fetch(p+a,t),e.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return e}async json(a,t={}){var e;return e=await this.fetch(a,t),e.json()}};var u=r=>new c(r);var n,w=u(i);n=1*60;var v=async function(){var r,a,t;try{({space:{max:a,used:t}}=await u(i).json("user/get"))}catch(e){r=e,console.error(r),a=500*1024*1024}a>=1e3*1024*1024*1024?(s.duration_txt="单次最长录制5小时",s.max_duration=5*60*60+n):a>=10*1024*1024*1024?(s.duration_txt='单次最长录制3小时, "扩容"可获更长时间',s.max_duration=3*60*60+n):(s.duration_txt='单次最长录制30分钟, "扩容"可获更长时间',s.max_duration=30*60+n),t>=a&&(s.duration_txt='单次最长录制30分钟, "扩容"可获更长时间',s.max_duration=30*60+n)},g=async function(){var r,a,t;try{t=await u(i).json("notify/unread"),r=t[0]}catch(e){a=e,console.error(a),r=0}return r},h="https://matomo.dalukuankuan.com/",o;o=window._paq=window._paq||[];o.push(["setCustomDimension",1,await i.auto_update.ver_now()]);o.push(["trackPageView"]);o.push(["enableLinkTracking"]);localStorage.uid?o.push(["setUserId",localStorage.uid]):o.push(["resetUserId"]);(function(){var r,a,t,e;e=h,o.push(["setTrackerUrl",e+"matomo.php"]),o.push(["setSiteId","1"]),r=document,a=r.createElement("script"),t=r.getElementsByTagName("script")[0],a.async=!0,a.src=e+"matomo.js",t.parentNode.insertBefore(a,t)})();export{v as a,g as f,w as u};
