import{H as l}from"./k.js";import{i as n}from"./4.js";import{c as s}from"./r.js";var p,d;d=async(t,e)=>{var a,r;return a=new Headers,a.append("user_token",localStorage.uid),t.startsWith("upload")&&(r=await e.auto_update.ua_now(),a.append("ua",r)),a};p=class{constructor(e){this.json=this.json.bind(this),this.ipc=e}async fetch(e,a={}){var r;if(a.headers=await d(e,this.ipc),e.indexOf(".do")<0&&(e+=".do"),r=await fetch(l+e,a),r.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return r}async json(e,a={}){var r;return r=await this.fetch(e,a),r.json()}};var u=t=>new p(t);var o,g=u(n);o=3;var x=async function(){var t,e,a,r,c;try{({vipExpired:r,vipLevel:c,space:{max:e,used:a}}=await u(n).json("user/get")),s.vipLevel=c}catch(h){t=h,console.error(t),s.vipLevel=0}s.vipLevel===2?(s.duration_txt="5小时",s.max_duration=5*60*60+o):s.vipLevel===1?(s.duration_txt="2小时",s.max_duration=2*60*60+o):(s.duration_txt="10分钟",s.max_duration=10*60+o)},y=async function(){var t,e,a;try{a=await u(n).json("notify/unread"),t=a[0]}catch(r){e=r,console.error(e),t=0}return t},v="https://matomo.dalukuankuan.com/",i;i=window._paq=window._paq||[];i.push(["setCustomDimension",1,await n.auto_update.ver_now()]);i.push(["trackPageView"]);i.push(["enableLinkTracking"]);localStorage.uid?i.push(["setUserId",localStorage.uid]):i.push(["resetUserId"]);(function(){var t,e,a,r;r=v,i.push(["setTrackerUrl",r+"matomo.php"]),i.push(["setSiteId","1"]),t=document,e=t.createElement("script"),a=t.getElementsByTagName("script")[0],e.async=!0,e.src=r+"matomo.js",a.parentNode.insertBefore(e,a)})();export{y as a,x as f,g as u};
