import{s as w,k as q,a as r,e as n,v as V,m as p,p as W,i as Q,d as s,_ as G,r as te,o as oe,N as M,l as re,M as P,Q as A,f as m,h as $,t as I,b as F}from"./a.js";import{i as C}from"./1.js";import{b as H}from"./..js";import{O as se}from"./0.js";import{p as ie}from"./n.js";import{c as h}from"./.js";import{D as v}from"./k.js";import{z as ae}from"./4.js";import{H as ne}from"./h.js";import{a as K}from"./r.js";import"./e.js";import"./l.js";var S;S=e=>(e+"").padStart(2,"0");var le=()=>{var e,t,o,a,i,l;return t=w("00"),o=w("00"),e=w(""),a=w(0),[l,i]=(()=>{var d,u;return u=0,d=void 0,[()=>{d&&clearInterval(d),d=setInterval(()=>{++u,e.value=S(parseInt(u/3600)),e.value==="00"&&(e.value=""),t.value=S(parseInt(u%3600/60)),o.value=S(u%60),a.value=u},1e3)},()=>{clearInterval(d)}]})(),[a,e,t,o,l,i]},de={props:{shape:{type:String,required:!0,default:"pen"}},components:{},setup:e=>{var t,o,a,i;return a=e.shape,v[a]===void 0&&(v[a]=JSON.stringify(["red","middle"])),[t,i]=JSON.parse(v[a]),i=w(i),t=w(t),o=0,a==="txt"&&(o=1),q(()=>{var l,d,u;d=v[a],[l,u]=JSON.parse(d),l!==t.value&&(t.value=l),u!==i.color&&(i.value=u)}),{size:i,color:t,is_txt:o,set_size:(l,d)=>{d.stopPropagation(),l!==i.value&&(v[a]=JSON.stringify([t.value,l]))},set_color:(l,d)=>{d.stopPropagation(),l!==t.value&&(v[a]=JSON.stringify([l,i.value]))}}}};const x=e=>(W("data-v-4e14155d"),e=e(),Q(),e),pe={class:"nav"},ue={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ce={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},ve={key:1,d:"M7.52 12.89C8.2 12.89 8.55 12.53 8.55 11.83V3.98H7.81V11.64C7.81 12.01 7.62 12.2 7.25 12.2C6.8 12.2 6.32 12.18 5.82 12.14L5.99 12.89H7.52ZM5.13 6.3C4.73 8.1 4.14 9.53 3.34 10.59L3.96 11.14C4.74 10.1 5.37 8.58 5.85 6.58L5.13 6.3ZM10.81 6.06L10.16 6.47C10.93 8.2 11.54 9.77 11.99 11.19L12.63 10.74C12.21 9.41 11.6 7.85 10.81 6.06Z",fill:"var(--tt)","fill-opacity":"var(--to)"},he={key:2,cx:"9",cy:"9",r:"2",fill:"var(--c)"},we={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fe={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},_e={key:1,d:"M7.63 3.79V5.59H4.05V10.29H4.77V9.66H7.63V13.07H8.37V9.66H11.24V10.29H11.96V5.59H8.37V3.79H7.63ZM4.77 8.96V6.29H7.63V8.96H4.77ZM8.37 8.96V6.29H11.24V8.96H8.37Z",fill:"var(--tt)","fill-opacity":"var(--to)"},ge={key:2,cx:"9",cy:"9",r:"4",fill:"var(--c)"},ke={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},me={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},ye={key:1,d:"M3.61 6.46V7.16H7.38C6.86 9.62 5.54 11.38 3.41 12.43L3.86 13.03C5.99 11.92 7.37 10.15 7.99 7.72C8.74 9.98 10.12 11.72 12.13 12.96L12.58 12.38C10.53 11.16 9.15 9.42 8.45 7.16H12.39V6.46H8.24C8.32 5.84 8.37 5.19 8.37 4.49V3.84H7.63V4.65C7.62 5.28 7.58 5.88 7.5 6.46H3.61Z",fill:"var(--tt)","fill-opacity":"var(--to)"},Ce={key:2,cx:"9",cy:"9",r:"6",fill:"var(--c)"},xe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ve=x(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FE6C6C"},null,-1)),He={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Se={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},be={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Le=x(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#34D53B"},null,-1)),$e={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Ie={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Me={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ze=x(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FFB803"},null,-1)),Be={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},De={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Ne={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee=x(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#939393"},null,-1)),Te={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Oe={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Re={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ze=x(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"white",stroke:"#E9EBED"},null,-1)),je={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"#474D59"},Je={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"};function Pe(e,t){return s(),r("div",pe,[n("span",{class:p(["small",{now:e.size=="small"}]),onClick:t[0]||(t[0]=o=>e.set_size("small",o))},[(s(),r("svg",ue,[e.is_txt?(s(),r("rect",ce)):V("",!0),e.is_txt?(s(),r("path",ve)):(s(),r("circle",he))]))],2),n("span",{class:p(["middle",{now:e.size=="middle"}]),onClick:t[1]||(t[1]=o=>e.set_size("middle",o))},[(s(),r("svg",we,[e.is_txt?(s(),r("rect",fe)):V("",!0),e.is_txt?(s(),r("path",_e)):(s(),r("circle",ge))]))],2),n("span",{class:p(["big",{now:e.size=="big"}]),onClick:t[2]||(t[2]=o=>e.set_size("big",o))},[(s(),r("svg",ke,[e.is_txt?(s(),r("rect",me)):V("",!0),e.is_txt?(s(),r("path",ye)):(s(),r("circle",Ce))]))],2),n("span",{class:p(["red",{color_now:e.color=="red"}]),onClick:t[3]||(t[3]=o=>e.set_color("red",o))},[(s(),r("svg",xe,[Ve,e.is_txt?(s(),r("rect",He)):(s(),r("path",Se))]))],2),n("span",{class:p(["green",{color_now:e.color=="green"}]),onClick:t[4]||(t[4]=o=>e.set_color("green",o))},[(s(),r("svg",be,[Le,e.is_txt?(s(),r("rect",$e)):(s(),r("path",Ie))]))],2),n("span",{class:p(["orange",{color_now:e.color=="orange"}]),onClick:t[5]||(t[5]=o=>e.set_color("orange",o))},[(s(),r("svg",Me,[ze,e.is_txt?(s(),r("rect",Be)):(s(),r("path",De))]))],2),n("span",{class:p(["gray",{color_now:e.color=="gray"}]),onClick:t[6]||(t[6]=o=>e.set_color("gray",o))},[(s(),r("svg",Ne,[Ee,e.is_txt?(s(),r("rect",Te)):(s(),r("path",Oe))]))],2),n("span",{class:p(["white",{color_now:e.color=="white"}]),onClick:t[7]||(t[7]=o=>e.set_color("white",o))},[(s(),r("svg",Re,[Ze,e.is_txt?(s(),r("rect",je)):(s(),r("path",Je))]))],2)])}var Ae=G(de,[["render",Pe],["__scopeId","data-v-4e14155d"]]),E,k,U,T,z,B,X,y,Y,f,_,D,ee,b,N,O,R,g;({recbar:_}=C);var Fe=function(e,t){_paq.push(["trackEvent",e,t,"",""])},qe=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])};E="Rec";[b,X,Y,ee,R,O]=le();N=e=>{var t,o,a;o=e.split(`
`),a=[];for(t of o)a.push(t.split(" "));return a};z&&clearInterval(z);z=setInterval(async()=>{await K()},5*60*1e3);f=w(!1);k=!1;T=w();U=e=>{[R,O][e-0]()};g=()=>{var e;({value:e}=f),e=!e,H.pause(f.value=e),k&&U(e)};y={pause:async()=>{f.value&&(await K(),b.value>=h.max_duration)||g()},reset:()=>{k&&(f.value||g(),M(async()=>await C.confirm.show("reset")?H.reset():g()))},cancel:async()=>{if(!k){await _.cancel();return}f.value||g(),M(async()=>await C.confirm.show("cancel")?H.cancel():g())},stop:()=>{H.stop(),O()}};B={pen:"Line",rect:"Cycle",txt:"Text",arrow:"Arrow",track:"Track",video:"CamClose",audio:"MikeClose",pause:"Pause",reset:"Reset",cancel:"Cancel",fold:"Collapse"};D=e=>{Fe(E,"RecTool."+e+".Click")};se.start=()=>{R(),k=!0,T.value.className=""};h.src!=="camera"&&re(()=>import("./$..js"),["$..js","c.js","0.js","n.js","s.js","1.js",".js","e.js","..js","l.js","a.js","_.css","h.js","3.js","w.js"]);var We={components:{zAudio:ae,DrawStyle:Ae},setup:()=>{var e,t,o,a,i,l,d,u,j,J;for(i=N("video 摄像头"),j=te(N(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),J=c=>()=>{h[c]=h[c]?"":localStorage[c],!f.value&&!h.video&&!h.audio&&h.src==="camera"&&!(h.sys_audio&&ie==="win32")&&y.pause()},u=["audio","video"],a=0,l=u.length;a<l;a++)o=u[a],y[o]=J(o);return t=w(),d=w(),oe(()=>{}),e=c=>{c>=h.max_duration&&k&&(f.value||g(),M(async()=>await C.confirm.show("pay")?C.open(ne+"vip_details.html?pay=true&user_token="+localStorage.uid):y.stop()))},q(()=>{e(b.value)}),{go:async c=>{var L;if(c==="stop"&&qe(E,"RecTool.Stop.Click",JSON.stringify({src:h.src,area:h.area,audio:!!h.audio,video:!!h.video,duration:b.value})),B[c]&&D(B[c]),["pen","rect","txt","arrow","track"].indexOf(c)+1){if({value:L}=t,L!==c){if(c==="track"&&v.drawing===1?v.prev=v.shape:v.prev="",v.shape=t.value=c,L)return}else if(t.value="",v.drawing=0,c!=="track"){await _.draw_x();return}else{if(v.prev===""){await _.draw_x();return}v.shape=t.value=v.prev}v.drawing=1,await _.draw();return}(y[c]||_[c])()},expand:()=>{window.innerWidth<200&&(_.expand(),D("Expand"))},left:i,nav:d,right:j,code:T,hour:X,minute:Y,second:ee,pause:f,config:h,draw:t}}};const Z=e=>(W("data-v-2e6b636a"),e=e(),Q(),e),Qe=["title","onClick"],Ge=Z(()=>n("b",null,null,-1)),Ke={key:0},Ue=Z(()=>n("span",null,":",-1)),Xe=["title","onClick"],Ye={class:"draw"},et=Z(()=>n("b",null,null,-1));function tt(e,t){const o=F("z-audio"),a=F("DrawStyle");return s(),r("nav",{class:p({pause:e.pause}),ref:"nav"},[(s(!0),r(P,null,A(e.left,([i,l],d)=>(s(),r("a",{class:p([i,e.config[i]?"":"x"]),title:l,onClick:u=>e.go(i)},null,10,Qe))),256)),m(o,{onClick:t[0]||(t[0]=i=>e.go("audio"))}),Ge,n("code",{ref:"code",onClick:t[1]||(t[1]=(...i)=>e.expand&&e.expand(...i)),class:p({small:e.hour!="",pause:e.pause})},[$(I(e.hour),1),e.hour?(s(),r("span",Ke,":")):V("",!0),$(I(e.minute),1),Ue,$(I(e.second),1)],2),(s(!0),r(P,null,A(e.right,([i,l],d)=>(s(),r("a",{class:p([i]),title:l,onClick:u=>e.go(i)},null,10,Xe))),256)),n("div",Ye,[et,n("a",{class:p(["pen",{now:e.draw=="pen"}]),onClick:t[2]||(t[2]=i=>e.go("pen")),title:"画笔"},[m(a,{shape:"pen"})],2),n("a",{class:p(["rect",{now:e.draw=="rect"}]),onClick:t[3]||(t[3]=i=>e.go("rect")),title:"画框"},[m(a,{shape:"rect"})],2),n("a",{class:p(["arrow",{now:e.draw=="arrow"}]),onClick:t[4]||(t[4]=i=>e.go("arrow")),title:"箭头"},[m(a,{shape:"arrow"})],2),n("a",{class:p(["txt",{now:e.draw=="txt"}]),onClick:t[5]||(t[5]=i=>e.go("txt")),title:"文字"},[m(a,{shape:"txt"})],2),n("a",{class:p(["track",{now:e.draw=="track"}]),onClick:t[6]||(t[6]=i=>e.go("track")),title:"轨迹"},null,2)]),n("a",{class:"fold",onClick:t[7]||(t[7]=i=>e.go("fold")),title:"收起"})],2)}var ht=G(We,[["render",tt],["__scopeId","data-v-2e6b636a"]]);export{ht as default,qe as record_report,Fe as track_report};
