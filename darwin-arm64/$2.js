import{s as w,k as q,a as r,e as n,v as x,m as p,p as W,i as Q,d as s,_ as G,r as te,o as oe,N as I,l as re,M as P,Q as A,f as m,h as L,t as $,b as F}from"./c.js";import{i as C}from"./2.js";import{b as H}from"./$.js";import{O as se}from"./..js";import{d as ie}from"./a.js";import{c as h}from"./o.js";import{D as v}from"./g.js";import{z as ae}from"./f.js";import{H as ne}from"./l.js";import{a as K}from"./4.js";import{p as le}from"./r.js";import"./9.js";import"./q.js";var S;S=e=>(e+"").padStart(2,"0");var de=()=>{var e,t,o,a,i,l;return t=w("00"),o=w("00"),e=w(""),a=w(0),[l,i]=(()=>{var d,u;return u=0,d=void 0,[()=>{d&&clearInterval(d),d=setInterval(()=>{++u,e.value=S(parseInt(u/3600)),e.value==="00"&&(e.value=""),t.value=S(parseInt(u%3600/60)),o.value=S(u%60),a.value=u},1e3)},()=>{clearInterval(d)}]})(),[a,e,t,o,l,i]},pe={props:{shape:{type:String,required:!0,default:"pen"}},components:{},setup:e=>{var t,o,a,i;return a=e.shape,v[a]===void 0&&(v[a]=JSON.stringify(["red","middle"])),[t,i]=JSON.parse(v[a]),i=w(i),t=w(t),o=0,a==="txt"&&(o=1),q(()=>{var l,d,u;d=v[a],[l,u]=JSON.parse(d),l!==t.value&&(t.value=l),u!==i.color&&(i.value=u)}),{size:i,color:t,is_txt:o,set_size:(l,d)=>{d.stopPropagation(),l!==i.value&&(v[a]=JSON.stringify([t.value,l]))},set_color:(l,d)=>{d.stopPropagation(),l!==t.value&&(v[a]=JSON.stringify([l,i.value]))}}}};const V=e=>(W("data-v-4e14155d"),e=e(),Q(),e),ue={class:"nav"},ce={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ve={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},he={key:1,d:"M7.52 12.89C8.2 12.89 8.55 12.53 8.55 11.83V3.98H7.81V11.64C7.81 12.01 7.62 12.2 7.25 12.2C6.8 12.2 6.32 12.18 5.82 12.14L5.99 12.89H7.52ZM5.13 6.3C4.73 8.1 4.14 9.53 3.34 10.59L3.96 11.14C4.74 10.1 5.37 8.58 5.85 6.58L5.13 6.3ZM10.81 6.06L10.16 6.47C10.93 8.2 11.54 9.77 11.99 11.19L12.63 10.74C12.21 9.41 11.6 7.85 10.81 6.06Z",fill:"var(--tt)","fill-opacity":"var(--to)"},we={key:2,cx:"9",cy:"9",r:"2",fill:"var(--c)"},fe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},_e={key:1,d:"M7.63 3.79V5.59H4.05V10.29H4.77V9.66H7.63V13.07H8.37V9.66H11.24V10.29H11.96V5.59H8.37V3.79H7.63ZM4.77 8.96V6.29H7.63V8.96H4.77ZM8.37 8.96V6.29H11.24V8.96H8.37Z",fill:"var(--tt)","fill-opacity":"var(--to)"},ke={key:2,cx:"9",cy:"9",r:"4",fill:"var(--c)"},me={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},Ce={key:1,d:"M3.61 6.46V7.16H7.38C6.86 9.62 5.54 11.38 3.41 12.43L3.86 13.03C5.99 11.92 7.37 10.15 7.99 7.72C8.74 9.98 10.12 11.72 12.13 12.96L12.58 12.38C10.53 11.16 9.15 9.42 8.45 7.16H12.39V6.46H8.24C8.32 5.84 8.37 5.19 8.37 4.49V3.84H7.63V4.65C7.62 5.28 7.58 5.88 7.5 6.46H3.61Z",fill:"var(--tt)","fill-opacity":"var(--to)"},Ve={key:2,cx:"9",cy:"9",r:"6",fill:"var(--c)"},xe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},He=V(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FE6C6C"},null,-1)),Se={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},be={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Le={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$e=V(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#34D53B"},null,-1)),Ie={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Me={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},ze={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Be=V(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FFB803"},null,-1)),De={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Ne={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Ee={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=V(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#939393"},null,-1)),Oe={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Re={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Ze={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},je=V(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"white",stroke:"#E9EBED"},null,-1)),Je={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Pe={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"};function Ae(e,t){return s(),r("div",ue,[n("span",{class:p(["small",{now:e.size=="small"}]),onClick:t[0]||(t[0]=o=>e.set_size("small",o))},[(s(),r("svg",ce,[e.is_txt?(s(),r("rect",ve)):x("",!0),e.is_txt?(s(),r("path",he)):(s(),r("circle",we))]))],2),n("span",{class:p(["middle",{now:e.size=="middle"}]),onClick:t[1]||(t[1]=o=>e.set_size("middle",o))},[(s(),r("svg",fe,[e.is_txt?(s(),r("rect",ge)):x("",!0),e.is_txt?(s(),r("path",_e)):(s(),r("circle",ke))]))],2),n("span",{class:p(["big",{now:e.size=="big"}]),onClick:t[2]||(t[2]=o=>e.set_size("big",o))},[(s(),r("svg",me,[e.is_txt?(s(),r("rect",ye)):x("",!0),e.is_txt?(s(),r("path",Ce)):(s(),r("circle",Ve))]))],2),n("span",{class:p(["red",{color_now:e.color=="red"}]),onClick:t[3]||(t[3]=o=>e.set_color("red",o))},[(s(),r("svg",xe,[He,e.is_txt?(s(),r("rect",Se)):(s(),r("path",be))]))],2),n("span",{class:p(["green",{color_now:e.color=="green"}]),onClick:t[4]||(t[4]=o=>e.set_color("green",o))},[(s(),r("svg",Le,[$e,e.is_txt?(s(),r("rect",Ie)):(s(),r("path",Me))]))],2),n("span",{class:p(["orange",{color_now:e.color=="orange"}]),onClick:t[5]||(t[5]=o=>e.set_color("orange",o))},[(s(),r("svg",ze,[Be,e.is_txt?(s(),r("rect",De)):(s(),r("path",Ne))]))],2),n("span",{class:p(["gray",{color_now:e.color=="gray"}]),onClick:t[6]||(t[6]=o=>e.set_color("gray",o))},[(s(),r("svg",Ee,[Te,e.is_txt?(s(),r("rect",Oe)):(s(),r("path",Re))]))],2),n("span",{class:p(["white",{color_now:e.color=="white"}]),onClick:t[7]||(t[7]=o=>e.set_color("white",o))},[(s(),r("svg",Ze,[je,e.is_txt?(s(),r("rect",Je)):(s(),r("path",Pe))]))],2)])}var Fe=G(pe,[["render",Ae],["__scopeId","data-v-4e14155d"]]),E,k,U,T,M,z,X,y,Y,f,g,B,ee,D,N,O,R,_;({recbar:g}=C);var qe=function(e,t){_paq.push(["trackEvent",e,t,"",""])},We=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])};E="Rec";[D,X,Y,ee,R,O]=de();N=e=>{var t,o,a;o=e.split(`
`),a=[];for(t of o)a.push(t.split(" "));return a};M&&clearInterval(M);M=setInterval(async()=>{await K()},5*60*1e3);f=w(!1);k=!1;T=w();U=e=>{[R,O][e-0]()};_=()=>{var e;({value:e}=f),e=!e,H.pause(f.value=e),k&&U(e)};y={pause:async()=>{f.value&&await K(),_()},reset:()=>{k&&(f.value||_(),I(async()=>await C.confirm.show("reset")?H.reset():_()))},cancel:async()=>{if(!k){await g.cancel();return}f.value||_(),I(async()=>await C.confirm.show("cancel")?H.cancel():_())},stop:()=>{H.stop(),O()}};z={pen:"Line",rect:"Cycle",txt:"Text",arrow:"Arrow",track:"Track",video:"CamClose",audio:"MikeClose",pause:"Pause",reset:"Reset",cancel:"Cancel",fold:"Collapse"};B=e=>{qe(E,"RecTool."+e+".Click")};se.start=()=>{R(),k=!0,T.value.className=""};h.src!=="camera"&&re(()=>import("./1.js"),["1.js","i.js","..js","r.js","w.js","2.js","o.js","9.js","$.js","q.js","c.js","9.css","l.js","-.js","x.js"]);var Qe={components:{zAudio:ae,DrawStyle:Fe},setup:()=>{var e,t,o,a,i,l,d,u,j,J;for(i=N("video 摄像头"),j=te(N(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),J=c=>()=>{h[c]=h[c]?"":localStorage[c],!f.value&&!h.video&&!h.audio&&h.src==="camera"&&!(h.sys_audio&&le==="win32")&&y.pause()},u=["audio","video"],a=0,l=u.length;a<l;a++)o=u[a],y[o]=J(o);return t=w(),d=w(),oe(()=>{ie(d.value)}),e=c=>{c>=h.max_duration&&k&&(f.value||_(),I(async()=>await C.confirm.show("pay")?C.open(ne+"?pay=true&user_token="+localStorage.uid):y.stop()))},q(()=>{e(D.value)}),{go:async c=>{var b;if(c==="stop"&&We(E,"RecTool.Stop.Click",JSON.stringify({src:h.src,area:h.area,audio:!!h.audio,video:!!h.video,duration:D.value})),z[c]&&B(z[c]),["pen","rect","txt","arrow","track"].indexOf(c)+1){if({value:b}=t,b!==c){if(c==="track"&&v.drawing===1?v.prev=v.shape:v.prev="",v.shape=t.value=c,b)return}else if(t.value="",v.drawing=0,c!=="track"){await g.draw_x();return}else{if(v.prev===""){await g.draw_x();return}v.shape=t.value=v.prev}v.drawing=1,await g.draw();return}(y[c]||g[c])()},expand:()=>{window.innerWidth<200&&(g.expand(),B("Expand"))},left:i,nav:d,right:j,code:T,hour:X,minute:Y,second:ee,pause:f,config:h,draw:t}}};const Z=e=>(W("data-v-3f02b53e"),e=e(),Q(),e),Ge=["title","onClick"],Ke=Z(()=>n("b",null,null,-1)),Ue={key:0},Xe=Z(()=>n("span",null,":",-1)),Ye=["title","onClick"],et={class:"draw"},tt=Z(()=>n("b",null,null,-1));function ot(e,t){const o=F("z-audio"),a=F("DrawStyle");return s(),r("nav",{class:p({pause:e.pause}),ref:"nav"},[(s(!0),r(P,null,A(e.left,([i,l],d)=>(s(),r("a",{class:p([i,e.config[i]?"":"x"]),title:l,onClick:u=>e.go(i)},null,10,Ge))),256)),m(o,{onClick:t[0]||(t[0]=i=>e.go("audio"))}),Ke,n("code",{ref:"code",onClick:t[1]||(t[1]=(...i)=>e.expand&&e.expand(...i)),class:p({small:e.hour!="",pause:e.pause})},[L($(e.hour),1),e.hour?(s(),r("span",Ue,":")):x("",!0),L($(e.minute),1),Xe,L($(e.second),1)],2),(s(!0),r(P,null,A(e.right,([i,l],d)=>(s(),r("a",{class:p([i]),title:l,onClick:u=>e.go(i)},null,10,Ye))),256)),n("div",et,[tt,n("a",{class:p(["pen",{now:e.draw=="pen"}]),onClick:t[2]||(t[2]=i=>e.go("pen")),title:"画笔"},[m(a,{shape:"pen"})],2),n("a",{class:p(["rect",{now:e.draw=="rect"}]),onClick:t[3]||(t[3]=i=>e.go("rect")),title:"画框"},[m(a,{shape:"rect"})],2),n("a",{class:p(["arrow",{now:e.draw=="arrow"}]),onClick:t[4]||(t[4]=i=>e.go("arrow")),title:"箭头"},[m(a,{shape:"arrow"})],2),n("a",{class:p(["txt",{now:e.draw=="txt"}]),onClick:t[5]||(t[5]=i=>e.go("txt")),title:"文字"},[m(a,{shape:"txt"})],2),n("a",{class:p(["track",{now:e.draw=="track"}]),onClick:t[6]||(t[6]=i=>e.go("track")),title:"轨迹"},null,2)]),n("a",{class:"fold",onClick:t[7]||(t[7]=i=>e.go("fold")),title:"收起"})],2)}var ft=G(Qe,[["render",ot],["__scopeId","data-v-3f02b53e"]]);export{ft as default,We as record_report,qe as track_report};
