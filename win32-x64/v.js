import{i as L}from"./3.js";import"./1.js";import{b as A}from"./9.js";/* empty css        */import{$ as O}from"./u.js";import{_ as D}from"./5.js";import{s as T,r as g,u as V,o as E,N as Y,a as m,e as w,D as I,j as q,d as f,_ as R,F as N,f as H,w as C,g as M,c as J,n as Q,h as k,b as z,Q as U,t as W}from"./a.js";var $,P,j;j=e=>{var l,t,s;return s=0,{requestAnimationFrame:t,cancelAnimationFrame:l}=window,(v,u=300)=>{var _,d,c,r,n;l(s),c=0,_=(e.scrollTop-v)/2,n=v+_,d=0,r=function(a){if(d){if(c+=Math.PI*(a-d)/u,c>=Math.PI){e.scrollTop=v;return}e.scrollTop=n+_*Math.cos(c)}d=a,s=t(r)},e.scrollTop!==v&&(s=t(r))}};P="scroll";$=document.documentElement;var G={setup:()=>{var e,l,t,s,v,u,_,d,c;return t=T(),c=T(),u=T(),l=T(),v=void 0,d=g(0),e=void 0,s=()=>{var r,n;n=[$,l.value];for(r of n)r?.classList.remove(P);typeof e=="function"&&e(),e=void 0},_=void 0,V(s),E(()=>{var r,n,a,o,h;r=t.value,h=c.value,v=j(r),o=()=>{var p,i,y,b,S,B,F;!d.value||({clientHeight:i,scrollHeight:S,scrollTop:B}=r,y=Math.max(parseInt(i*i/S)-4,48),b=u.value,p=l.value,p.style.opacity=1,F=parseInt(B/(S-i)*(i-4-y)),Object.assign(b.style,{height:y+"px",top:F+"px"}),clearTimeout(_),_=setTimeout(()=>p.style.opacity=0,1e3))},n=()=>{var p,i;return{clientHeight:p,scrollHeight:i}=r,i<=p?d.value=0:d.value=1,Y(o)},a=new ResizeObserver(n),a.observe(h),O(r,{scroll:o}),O(window,{resize:n}),V(()=>(a.disconnect(),s()))}),{turn:d,main:t,si:u,aside:l,wrap:c,click:r=>{var n,a,o;a=t.value,{clientHeight:n,scrollHeight:o}=a,v(parseInt(r.offsetY/n*(o-n)))},down:r=>{var n,a,o,h;$.setPointerCapture(r.pointerId),h=[$,l.value];for(a of h)a?.classList.add(P);return o=t.value,n=r.screenY,e=D($,{lostpointercapture:s,pointerup:s,pointermove:({screenY:p})=>{var i,y,b;({clientHeight:i,scrollHeight:b}=o),y=p-n,o.scrollTop+=y/i*b,n=p}})}}}};const K={class:"scroll",ref:"main"},X={class:"bar",ref:"wrap"};function Z(e,l){return f(),m("main",K,[e.turn?(f(),m("aside",{key:0,onPointerdown:l[1]||(l[1]=(...t)=>e.click&&e.click(...t)),ref:"aside"},[w("i",{onPointerdown:l[0]||(l[0]=(...t)=>e.down&&e.down(...t)),ref:"si"},null,544)],544)):I("",!0),w("div",null,[w("div",X,[q(e.$slots,"default",{},void 0,!0)],512)])],512)}var x=R(G,[["render",Z],["__scopeId","data-v-a3bfce1e"]]),ee={components:{btn:A,scrollbar:x},setup:()=>{var e,l,t,s,v,u,_,d,c,r,n,a,o;return{body:e}=document,{clientHeight:t,clientWidth:s}=e,d=96,u=Math.min(546,t-d),c=Math.min(u*1.57,s-d),a=(s-c)/2,o=(t-u)/2,{cancel:l,win_source:n}=L.recbar,_=T(0),(async()=>_.value=await n())(),r=g(!0),v=g(!0),u=g(u),c=g(c),a=g(a),o=g(o),{li:_,h:u,w:c,x:a,y:o,go:v,wait:r,run:async h=>{var p,i;i=_.value[h],p=i[2],[a.value,o.value,c.value,u.value]=i.slice(3),localStorage.area=JSON.stringify([a.value,o.value,c.value,u.value].map(Math.round)),r.value=!1,await L.wintop(p)},start:async()=>{v.value=!1,await L.area()},move:({offsetLeft:h,offsetTop:p},i,y)=>{a.value=h+i,o.value=p+y},cancel:l}}};const te={key:0},re=k("请选择窗口"),ae=k("×"),ne=["onClick"],oe=["src"],le={key:1},ie=k("没有可以录制的窗口"),se=k("×"),ue={key:0},ce=k("开始录制"),ve=k("×");function de(e,l){const t=z("btn"),s=z("scrollbar");return e.wait?(f(),m("div",te,[e.li?(f(),m(N,{key:0},[e.li.length?(f(),m(N,{key:0},[w("h2",null,[re,H(t,{onClick:M(e.cancel,["prevent"])},{default:C(()=>[ae]),_:1},8,["onClick"])]),H(s,null,{default:C(()=>[w("main",null,[(f(!0),m(N,null,U(e.li,(v,u)=>(f(),m("li",{onClick:_=>e.run(u)},[w("img",{src:v[0]},null,8,oe),w("b",null,W(v[1]),1)],8,ne))),256))])]),_:1})],64)):(f(),m("h2",le,[ie,H(t,{onClick:M(e.cancel,["prevent"])},{default:C(()=>[se]),_:1},8,["onClick"])]))],64)):I("",!0)])):(f(),m("i",{key:1,style:Q({width:`${e.w}px`,height:`${e.h}px`,left:`${e.x}px`,top:`${e.y}px`})},[w("b",null,[e.go?(f(),m("nav",ue,[e.li?(f(),J(t,{key:0,onClick:M(e.start,["prevent"])},{default:C(()=>[ce]),_:1},8,["onClick"])):I("",!0),H(t,{onClick:M(e.cancel,["prevent"])},{default:C(()=>[ve]),_:1},8,["onClick"])])):I("",!0)])],4))}var ge=R(ee,[["render",de],["__scopeId","data-v-666c3d3e"]]);export{ge as default};
