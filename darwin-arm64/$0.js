import{i as L}from"./3.js";import"./2.js";import{b as E}from"./n.js";/* empty css        */import{_ as R}from"./9.js";import{S as N,s as T,r as g,o as Y,O as q,a as m,e as w,v as S,j as D,d as f,_ as j,F as P,f as H,w as C,g as M,c as J,n as U,h as k,b as V,x as W,t as x}from"./f.js";var z=(e,o)=>{var r;return r=R(e,o),N(r),r},$,O,A;A=e=>{var o,r,s;return s=0,{requestAnimationFrame:r,cancelAnimationFrame:o}=window,(v,u=300)=>{var _,d,c,t,a;o(s),c=0,_=(e.scrollTop-v)/2,a=v+_,d=0,t=function(n){if(d){if(c+=Math.PI*(n-d)/u,c>=Math.PI){e.scrollTop=v;return}e.scrollTop=a+_*Math.cos(c)}d=n,s=r(t)},e.scrollTop!==v&&(s=r(t))}};O="scroll";$=document.documentElement;var G={setup:()=>{var e,o,r,s,v,u,_,d,c;return r=T(),c=T(),u=T(),o=T(),v=void 0,d=g(0),e=void 0,s=()=>{var t,a;a=[$,o.value];for(t of a)t?.classList.remove(O);typeof e=="function"&&e(),e=void 0},_=void 0,N(s),Y(()=>{var t,a,n,l,h;t=r.value,h=c.value,v=A(t),l=()=>{var p,i,y,b,I,B,F;!d.value||({clientHeight:i,scrollHeight:I,scrollTop:B}=t,y=Math.max(parseInt(i*i/I)-4,48),b=u.value,p=o.value,p.style.opacity=1,F=parseInt(B/(I-i)*(i-4-y)),Object.assign(b.style,{height:y+"px",top:F+"px"}),clearTimeout(_),_=setTimeout(()=>p.style.opacity=0,1e3))},a=()=>{var p,i;return{clientHeight:p,scrollHeight:i}=t,i<=p?d.value=0:d.value=1,q(l)},n=new ResizeObserver(a),n.observe(h),z(t,{scroll:l}),z(window,{resize:a}),N(()=>(n.disconnect(),s()))}),{turn:d,main:r,si:u,aside:o,wrap:c,click:t=>{var a,n,l;n=r.value,{clientHeight:a,scrollHeight:l}=n,v(parseInt(t.offsetY/a*(l-a)))},down:t=>{var a,n,l,h;$.setPointerCapture(t.pointerId),h=[$,o.value];for(n of h)n?.classList.add(O);return l=r.value,a=t.screenY,e=R($,{lostpointercapture:s,pointerup:s,pointermove:({screenY:p})=>{var i,y,b;({clientHeight:i,scrollHeight:b}=l),y=p-a,l.scrollTop+=y/i*b,a=p}})}}}};const K={class:"scroll",ref:"main"},Q={class:"bar",ref:"wrap"};function X(e,o){return f(),m("main",K,[e.turn?(f(),m("aside",{key:0,onPointerdown:o[1]||(o[1]=(...r)=>e.click&&e.click(...r)),ref:"aside"},[w("i",{onPointerdown:o[0]||(o[0]=(...r)=>e.down&&e.down(...r)),ref:"si"},null,544)],544)):S("",!0),w("div",null,[w("div",Q,[D(e.$slots,"default",{},void 0,!0)],512)])],512)}var Z=j(G,[["render",X],["__scopeId","data-v-a3bfce1e"]]),ee={components:{btn:E,scrollbar:Z},setup:()=>{var e,o,r,s,v,u,_,d,c,t,a,n,l;return{body:e}=document,{clientHeight:r,clientWidth:s}=e,d=96,u=Math.min(546,r-d),c=Math.min(u*1.57,s-d),n=(s-c)/2,l=(r-u)/2,{cancel:o,win_source:a}=L.recbar,_=T(0),(async()=>_.value=await a())(),t=g(!0),v=g(!0),u=g(u),c=g(c),n=g(n),l=g(l),{li:_,h:u,w:c,x:n,y:l,go:v,wait:t,run:async h=>{var p,i;i=_.value[h],p=i[2],[n.value,l.value,c.value,u.value]=i.slice(3),localStorage.area=JSON.stringify([n.value,l.value,c.value,u.value].map(Math.round)),t.value=!1,await L.wintop(p)},start:async()=>{v.value=!1,await L.area()},move:({offsetLeft:h,offsetTop:p},i,y)=>{n.value=h+i,l.value=p+y},cancel:o}}};const re={key:0},te=k("请选择窗口"),ne=k("×"),ae=["onClick"],oe=["src"],le={key:1},ie=k("没有可以录制的窗口"),se=k("×"),ue={key:0},ce=k("开始录制"),ve=k("×");function de(e,o){const r=V("btn"),s=V("scrollbar");return e.wait?(f(),m("div",re,[e.li?(f(),m(P,{key:0},[e.li.length?(f(),m(P,{key:0},[w("h2",null,[te,H(r,{onClick:M(e.cancel,["prevent"])},{default:C(()=>[ne]),_:1},8,["onClick"])]),H(s,null,{default:C(()=>[w("main",null,[(f(!0),m(P,null,W(e.li,(v,u)=>(f(),m("li",{onClick:_=>e.run(u)},[w("img",{src:v[0]},null,8,oe),w("b",null,x(v[1]),1)],8,ae))),256))])]),_:1})],64)):(f(),m("h2",le,[ie,H(r,{onClick:M(e.cancel,["prevent"])},{default:C(()=>[se]),_:1},8,["onClick"])]))],64)):S("",!0)])):(f(),m("i",{key:1,style:U({width:`${e.w}px`,height:`${e.h}px`,left:`${e.x}px`,top:`${e.y}px`})},[w("b",null,[e.go?(f(),m("nav",ue,[e.li?(f(),J(r,{key:0,onClick:M(e.start,["prevent"])},{default:C(()=>[ce]),_:1},8,["onClick"])):S("",!0),H(r,{onClick:M(e.cancel,["prevent"])},{default:C(()=>[ve]),_:1},8,["onClick"])])):S("",!0)])],4))}var we=j(ee,[["render",de],["__scopeId","data-v-666c3d3e"]]);export{we as default};
