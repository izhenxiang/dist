import{N as M}from"./0.js";import{p as j}from"./s.js";import{s as B}from"./a.js";import{c as i}from"./k.js";import{i as S}from"./2.js";import{H as O}from"./o.js";import"./x.js";import"./..js";import"./r.js";import"./f.js";var $,u,l,x,t=M(!0);({recbar:l,camera:$}=S);t.stop=l.cancel;u=()=>i.src==="camera";x=new Promise(s=>{t.start=s});var I=async(s,H,_)=>{var w,b,k,P,g,c,d,a,f,T;b=i.area?'"avc1.640032"':"vp9",a=new MediaRecorder(s,{mimeType:"video/webm;codecs="+b,videoBitsPerSecond:2e6}),await x,typeof _=="function"&&_(),t.pause=e=>{var r,o,p,y,N,m,h,n,v;if(u()){for(m=0,v=[],n=s.getVideoTracks(),n=n.concat(H),p=0,N=n.length;p<N;p++)o=n[p],e?r=!1:({kind:y}=o,y==="video"&&v.push(o),r=!!i[y],r&&(m+=1)),o.enabled=r;if(i.sys_audio&&j==="win32"&&(m+=1),m===0&&e===!1)if(v.length){i.video=localStorage.video;for(o of v)o.enabled=!0}else{broadcast.pause(!0);return}}({state:h}=a),h.startsWith("pause")?e||a.resume():h==="recording"&&e&&a.pause()},f=new Map,[T,k,w]=await E.upload("rec/"+i.src),c=0,a.ondataavailable=({data:e})=>{f.set(c,(async()=>{await T(c,e),f.delete(c)})()),++c},g=void 0,P=new Promise(e=>{g=e}),d=()=>{var e;try{a.stop()}catch(r){e=r,console.error(e)}},t.cancel=()=>{d(),w().finally(()=>{l.cancel()})},t.reset=()=>{d(),w().finally(async()=>{B(),u()&&await $.x_rect()})},t.stop=async()=>{d(),l.stop(u()),gc(),await P,s.getTracks().map(e=>{e.stop()}),gc(),await S.open(O+`video_details.html?user_token=${localStorage.uid}&id=`+await k()),await l.end()},a.onstop=async()=>{await Promise.all(f.values()),g()},a.onerror=e=>{console.error(`record ❌ ${e.error.name}`)},a.start(5e3)};export{t as ON,I as default};
