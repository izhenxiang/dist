import{$ as N}from"./.js";import{i as l}from"./3.js";var _,T,p,s,m;({drag:{setBounds:m,getBounds:T}}=l);p="pointermove";_=new Set("SELECT BUTTON A INPUT TEXTAREA".split(" "));({round:s}=Math);var x=e=>{var r,d,n,i;e.style.appRegion="no-drag",n=!1,r=()=>{},d=async t=>{var u,v,c,f,g,w,a,o;if(!n&&t.button===0){for(o=t.target;;){if({nodeName:a}=o,_.has(a))return;if(a==="BODY")break;o=o.parentNode}n=!0,{screenX:g,screenY:w}=t,{x:v,y:c,height:u,width:f}=await T(),r=y=>{var h,E;({screenX:h,screenY:E}=y),m(s(h-g+v),s(E-w+c),f,u)},e.setPointerCapture(t.pointerId),e.addEventListener(p,r)}},i=async t=>{n&&(await r(t),e.releasePointerCapture(t.pointerId),e.removeEventListener(p,r),r=()=>{},n=!1)},N(e,{lostpointercapture:i,pointercancel:i,pointerdown:d,pointerup:i})};export{x as d};
