import{$ as m}from"./w.js";import{i as N}from"./6.js";var _,w,c,h,T;({drag:{setBounds:T,getBounds:w}}=N);c="pointermove";_=new Set("SELECT BUTTON A INPUT TEXTAREA".split(" "));({round:h}=Math);var B=r=>{var a,g,p,s,d,u,v,f,n,o;r.style.appRegion="no-drag",n=!1,s=d=v=f=p=u=void 0,a=t=>{var i,e;({screenX:i,screenY:e}=t),T(h(i-v+s),h(e-f+d),u,p)},g=async t=>{var i,e,E;if(!n&&t.button===0&&({width:E}=await w(),!(E<100))){for(e=t.target;;){if({nodeName:i}=e,_.has(i))return;if(i==="BODY")break;e=e.parentNode}n=!0,{screenX:v,screenY:f}=t,{x:s,y:d,height:p,width:u}=await w(),r.setPointerCapture(t.pointerId),r.addEventListener(c,a)}},o=t=>{n&&(r.releasePointerCapture(t.pointerId),r.removeEventListener(c,a),n=!1)},m(r,{lostpointercapture:o,pointercancel:o,pointerdown:g,pointerup:o})};export{B as d};
