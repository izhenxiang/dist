import{$ as l}from"./g.js";import{i as B}from"./2.js";var m,p,s,d,y;({drag:{setBounds:y,getBounds:p}}=B);s="pointermove";m=new Set("SELECT BUTTON A INPUT TEXTAREA".split(" "));({round:d}=Math);var A=r=>{var e,u,i,n;r.style.appRegion="no-drag",i=!1,e=()=>{},u=async t=>{var v,f,w,c,h,g,o,a,E;if(!i&&t.button===0&&({width:E}=await p(),!(E<100))){for(a=t.target;;){if({nodeName:o}=a,m.has(o))return;if(o==="BODY")break;a=a.parentNode}i=!0,{screenX:h,screenY:g}=t,{x:f,y:w,height:v,width:c}=await p(),e=N=>{var _,T;({screenX:_,screenY:T}=N),y(d(_-h+f),d(T-g+w),c,v)},r.setPointerCapture(t.pointerId),r.addEventListener(s,e)}},n=async t=>{i&&(await e(t),r.releasePointerCapture(t.pointerId),r.removeEventListener(s,e),e=()=>{},i=!1)},l(r,{lostpointercapture:n,pointercancel:n,pointerdown:u,pointerup:n})};export{A as d};
