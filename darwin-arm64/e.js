import{N as M}from"./2.js";import{p as j}from"./q.js";import{s as B}from"./..js";import{c as i}from"./r.js";import{i as S}from"./4.js";import{H as O}from"./l.js";import"./g.js";import"./0.js";import"./o.js";import"./c.js";var _,u,l,$,t=M(!0);({recbar:l,camera:_}=S);t.stop=l.cancel;u=()=>i.src==="camera";$=new Promise(s=>{t.start=s});var I=async(s,H,b)=>{var w,k,P,T,g,c,d,a,f,x;k=i.area?'"avc1.640032"':"vp9",a=new MediaRecorder(s,{mimeType:"video/webm;codecs="+k,videoBitsPerSecond:2e6}),await $,typeof b=="function"&&b(),t.pause=e=>{var r,o,p,y,N,m,h,n,v;if(u()){for(m=0,v=[],n=s.getVideoTracks(),n=n.concat(H),p=0,N=n.length;p<N;p++)o=n[p],e?r=!1:({kind:y}=o,y==="video"&&v.push(o),r=!!i[y],r&&(m+=1)),o.enabled=r;if(i.sys_audio&&j==="win32"&&(m+=1),m===0&&e===!1)if(v.length){i.video=localStorage.video;for(o of v)o.enabled=!0}else{broadcast.pause(!0);return}}({state:h}=a),h.startsWith("pause")?e||a.resume():h==="recording"&&e&&a.pause()},f=new Map,[x,P,w]=await E.upload("rec/"+i.src),c=0,a.ondataavailable=({data:e})=>{f.set(c,(async()=>{await x(c,e),f.delete(c)})()),++c},g=void 0,T=new Promise(e=>{g=e}),d=()=>{var e;try{a.stop()}catch(r){e=r,console.error(e)}},t.cancel=()=>{d(),w().finally(()=>{l.cancel()})},t.reset=()=>{d(),w().finally(async()=>{B(),u()&&await _.x_rect()})},t.stop=async()=>{d(),l.stop(u()),gc(),await T,s.getTracks().map(e=>{e.stop()}),gc(),await S.open(O+`video_details.html?user_token=${localStorage.uid}&id=`+await P()),await l.end(),_.x()},a.onstop=async()=>{await Promise.all(f.values()),g()},a.onerror=e=>{console.error(`record ❌ ${e.error.name}`)},a.start(5e3)};export{t as ON,I as default};
