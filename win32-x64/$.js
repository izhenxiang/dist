import{s as f,k as G,a as r,e as l,x as V,m as p,p as K,i as Q,d as s,_ as U,r as re,o as se,P as z,l as ie,F as A,y as F,f as y,h as b,t as I,b as W}from"./k.js";import{i as C}from"./6.js";import{b as x}from"./3.js";import{O as ae}from"./4.js";import"./$7.js";import{c as v}from"./$6.js";import{D as h}from"./$-.js";import{z as le}from"./$3.js";import{H as ne}from"./v.js";import{a as X}from"./5.js";import{p as de}from"./2.js";import"./w.js";import"./_.js";import"./q.js";import"./z.js";import"./f.js";var H;H=e=>(e+"").padStart(2,"0");var pe=()=>{var e,t,o,a,i,n;return t=f("00"),o=f("00"),e=f(""),a=f(0),[n,i]=(()=>{var d,u;return u=0,d=void 0,[()=>{d&&clearInterval(d),d=setInterval(()=>{++u,e.value=H(parseInt(u/3600)),e.value==="00"&&(e.value=""),t.value=H(parseInt(u%3600/60)),o.value=H(u%60),a.value=u},1e3)},()=>{clearInterval(d)}]})(),[a,e,t,o,n,i]},ue={props:{shape:{type:String,required:!0,default:"pen"}},components:{},setup:e=>{var t,o,a,i;return a=e.shape,h[a]===void 0&&(h[a]=JSON.stringify(["red","middle"])),[t,i]=JSON.parse(h[a]),i=f(i),t=f(t),o=0,a==="txt"&&(o=1),G(()=>{var n,d,u;d=h[a],[n,u]=JSON.parse(d),n!==t.value&&(t.value=n),u!==i.color&&(i.value=u)}),{size:i,color:t,is_txt:o,set_size:(n,d)=>{d.stopPropagation(),n!==i.value&&(h[a]=JSON.stringify([t.value,n]))},nav_click:n=>{n.stopImmediatePropagation()},set_color:(n,d)=>{d.stopPropagation(),n!==t.value&&(h[a]=JSON.stringify([n,i.value]))}}}};const S=e=>(K("data-v-6f653c15"),e=e(),Q(),e),ce={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ve={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},he={key:1,d:"M7.52 12.89C8.2 12.89 8.55 12.53 8.55 11.83V3.98H7.81V11.64C7.81 12.01 7.62 12.2 7.25 12.2C6.8 12.2 6.32 12.18 5.82 12.14L5.99 12.89H7.52ZM5.13 6.3C4.73 8.1 4.14 9.53 3.34 10.59L3.96 11.14C4.74 10.1 5.37 8.58 5.85 6.58L5.13 6.3ZM10.81 6.06L10.16 6.47C10.93 8.2 11.54 9.77 11.99 11.19L12.63 10.74C12.21 9.41 11.6 7.85 10.81 6.06Z",fill:"var(--tt)","fill-opacity":"var(--to)"},we={key:2,cx:"9",cy:"9",r:"2",fill:"var(--c)"},fe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},_e={key:1,d:"M7.63 3.79V5.59H4.05V10.29H4.77V9.66H7.63V13.07H8.37V9.66H11.24V10.29H11.96V5.59H8.37V3.79H7.63ZM4.77 8.96V6.29H7.63V8.96H4.77ZM8.37 8.96V6.29H11.24V8.96H8.37Z",fill:"var(--tt)","fill-opacity":"var(--to)"},ke={key:2,cx:"9",cy:"9",r:"4",fill:"var(--c)"},me={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},Ce={key:1,d:"M3.61 6.46V7.16H7.38C6.86 9.62 5.54 11.38 3.41 12.43L3.86 13.03C5.99 11.92 7.37 10.15 7.99 7.72C8.74 9.98 10.12 11.72 12.13 12.96L12.58 12.38C10.53 11.16 9.15 9.42 8.45 7.16H12.39V6.46H8.24C8.32 5.84 8.37 5.19 8.37 4.49V3.84H7.63V4.65C7.62 5.28 7.58 5.88 7.5 6.46H3.61Z",fill:"var(--tt)","fill-opacity":"var(--to)"},Se={key:2,cx:"9",cy:"9",r:"6",fill:"var(--c)"},Ve={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xe=S(()=>l("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FE6C6C"},null,-1)),He={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},Le={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},$e={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},be=S(()=>l("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#34D53B"},null,-1)),Ie={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},ze={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Be={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Me=S(()=>l("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FFB803"},null,-1)),Ee={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},Ne={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Oe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=S(()=>l("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#939393"},null,-1)),De={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},Pe={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Re={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=S(()=>l("rect",{x:"3",y:"3",width:"12",height:"12",fill:"white",stroke:"#E9EBED"},null,-1)),Ze={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},je={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"};function qe(e,t){return s(),r("div",{class:"nav",onClick:t[8]||(t[8]=(...o)=>e.nav_click&&e.nav_click(...o))},[l("span",{class:p(["small",{now:e.size=="small"}]),onClick:t[0]||(t[0]=o=>e.set_size("small",o))},[(s(),r("svg",ce,[e.is_txt?(s(),r("rect",ve)):V("",!0),e.is_txt?(s(),r("path",he)):(s(),r("circle",we))]))],2),l("span",{class:p(["middle",{now:e.size=="middle"}]),onClick:t[1]||(t[1]=o=>e.set_size("middle",o))},[(s(),r("svg",fe,[e.is_txt?(s(),r("rect",ge)):V("",!0),e.is_txt?(s(),r("path",_e)):(s(),r("circle",ke))]))],2),l("span",{class:p(["big",{now:e.size=="big"}]),onClick:t[2]||(t[2]=o=>e.set_size("big",o))},[(s(),r("svg",me,[e.is_txt?(s(),r("rect",ye)):V("",!0),e.is_txt?(s(),r("path",Ce)):(s(),r("circle",Se))]))],2),l("span",{class:p(["red",{color_now:e.color=="red"}]),onClick:t[3]||(t[3]=o=>e.set_color("red",o))},[(s(),r("svg",Ve,[xe,e.is_txt?(s(),r("rect",He)):(s(),r("path",Le))]))],2),l("span",{class:p(["green",{color_now:e.color=="green"}]),onClick:t[4]||(t[4]=o=>e.set_color("green",o))},[(s(),r("svg",$e,[be,e.is_txt?(s(),r("rect",Ie)):(s(),r("path",ze))]))],2),l("span",{class:p(["orange",{color_now:e.color=="orange"}]),onClick:t[5]||(t[5]=o=>e.set_color("orange",o))},[(s(),r("svg",Be,[Me,e.is_txt?(s(),r("rect",Ee)):(s(),r("path",Ne))]))],2),l("span",{class:p(["gray",{color_now:e.color=="gray"}]),onClick:t[6]||(t[6]=o=>e.set_color("gray",o))},[(s(),r("svg",Oe,[Te,e.is_txt?(s(),r("rect",De)):(s(),r("path",Pe))]))],2),l("span",{class:p(["white",{color_now:e.color=="white"}]),onClick:t[7]||(t[7]=o=>e.set_color("white",o))},[(s(),r("svg",Re,[Je,e.is_txt?(s(),r("rect",Ze)):(s(),r("path",je))]))],2)])}var Ae=U(ue,[["render",qe],["__scopeId","data-v-6f653c15"]]),D,m,Y,P,B,M,ee,g,te,w,_,N,oe,O,T,R,J,k;({recbar:_}=C);var Fe=function(e,t){_paq.push(["trackEvent",e,t,"",""])},We=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])};D="Rec";[O,ee,te,oe,J,R]=pe();T=e=>{var t,o,a;o=e.split(`
`),a=[];for(t of o)a.push(t.split(" "));return a};B&&clearInterval(B);B=setInterval(async()=>{await X()},5*60*1e3);w=f(!1);m=!1;P=f();Y=e=>{[J,R][e-0]()};k=()=>{var e;({value:e}=w),e=!e,x.pause(w.value=e),m&&Y(e)};g={pause:async()=>{w.value&&await X(),k()},reset:()=>{m&&(w.value||k(),z(async()=>await C.confirm.show("reset")?x.reset():k()))},cancel:async()=>{if(!m){await _.cancel();return}w.value||k(),z(async()=>await C.confirm.show("cancel")?x.cancel():k())},stop:()=>{x.stop(),R()}};E.on("quick_stop",(e,t)=>{g.stop()});E.on("quick_cmd",(e,t)=>{t==="pause"&&(w.value||g.pause()),t==="resume"&&w.value&&g.pause()});M={pen:"Line",rect:"Cycle",txt:"Text",arrow:"Arrow",track:"Track",video:"CamClose",audio:"MikeClose",pause:"Pause",reset:"Reset",cancel:"Cancel",fold:"Collapse"};N=e=>{Fe(D,"RecTool."+e+".Click")};ae.start=()=>{J(),m=!0,P.value.className=""};v.src!=="camera"&&ie(()=>import("./n.js"),["n.js","e.js","4.js","2.js","b.js","6.js","$6.js","q.js","3.js","z.js","k.js","d.css","v.js","l.js","f.js","o.js"]);var Ge={components:{zAudio:le,DrawStyle:Ae},setup:()=>{var e,t,o,a,i,n,d,u,j,q;for(i=T("video 摄像头"),j=re(T(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),q=c=>()=>{v[c]=v[c]?"":localStorage[c],!w.value&&!v.video&&!v.audio&&v.src==="camera"&&!(v.sys_audio&&de==="win32")&&g.pause()},u=["audio","video"],a=0,n=u.length;a<n;a++)o=u[a],g[o]=q(o);return t=f(),d=f(),se(()=>{}),e=c=>{c>=v.max_duration&&m&&(w.value||k(),z(async()=>await C.confirm.show("pay")?C.open(ne+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(v.vipLevel+1)):g.stop()))},G(()=>{e(O.value)}),{go:async c=>{var L,$;if(c==="stop"&&We(D,"RecTool.Stop.Click",JSON.stringify({src:v.src,area:v.area,audio:!!v.audio,video:!!v.video,duration:O.value})),M[c]&&N(M[c]),["pen","rect","txt","arrow","track"].indexOf(c)+1){if({value:$}=t,$!==c){if(c==="track"&&h.drawing===1?h.prev=h.shape:h.prev="",h.shape=t.value=c,$)return}else if(t.value="",h.drawing=0,c!=="track"){await _.draw_x();return}else{if(h.prev===""){await _.draw_x();return}h.shape=t.value=h.prev}h.drawing=1,L=[0,0,1280,720],v.area!==0&&(L=JSON.parse(localStorage.area)),await _.draw(v.area,L);return}(g[c]||_[c])()},expand:()=>{window.innerWidth<200&&(_.expand(),N("Expand"))},left:i,nav:d,right:j,code:P,hour:ee,minute:te,second:oe,pause:w,config:v,draw:t}}};const Z=e=>(K("data-v-23f54260"),e=e(),Q(),e),Ke=["title","onClick"],Qe=Z(()=>l("b",null,null,-1)),Ue={key:0},Xe=Z(()=>l("span",null,":",-1)),Ye=["title","onClick"],et={class:"draw"},tt=Z(()=>l("b",null,null,-1));function ot(e,t){const o=W("z-audio"),a=W("DrawStyle");return s(),r("nav",{class:p({pause:e.pause}),ref:"nav"},[(s(!0),r(A,null,F(e.left,([i,n],d)=>(s(),r("a",{class:p([i,e.config[i]?"":"x"]),title:n,onClick:u=>e.go(i)},null,10,Ke))),256)),y(o,{onClick:t[0]||(t[0]=i=>e.go("audio")),from:"recbar"}),Qe,l("code",{ref:"code",onClick:t[1]||(t[1]=(...i)=>e.expand&&e.expand(...i)),class:p({small:e.hour!="",pause:e.pause})},[b(I(e.hour),1),e.hour?(s(),r("span",Ue,":")):V("",!0),b(I(e.minute),1),Xe,b(I(e.second),1)],2),(s(!0),r(A,null,F(e.right,([i,n],d)=>(s(),r("a",{class:p([i]),title:n,onClick:u=>e.go(i)},null,10,Ye))),256)),l("div",et,[tt,l("a",{class:p(["pen",{now:e.draw=="pen"}]),onClick:t[2]||(t[2]=i=>e.go("pen")),title:"画笔"},[y(a,{shape:"pen"})],2),l("a",{class:p(["rect",{now:e.draw=="rect"}]),onClick:t[3]||(t[3]=i=>e.go("rect")),title:"画框"},[y(a,{shape:"rect"})],2),l("a",{class:p(["arrow",{now:e.draw=="arrow"}]),onClick:t[4]||(t[4]=i=>e.go("arrow")),title:"箭头"},[y(a,{shape:"arrow"})],2),l("a",{class:p(["txt",{now:e.draw=="txt"}]),onClick:t[5]||(t[5]=i=>e.go("txt")),title:"文字"},[y(a,{shape:"txt"})],2),l("a",{class:p(["track",{now:e.draw=="track"}]),onClick:t[6]||(t[6]=i=>e.go("track")),title:"轨迹"},null,2)]),l("a",{class:"fold",onClick:t[7]||(t[7]=i=>e.go("fold")),title:"收起"})],2)}var kt=U(Ge,[["render",ot],["__scopeId","data-v-23f54260"]]);export{kt as default,We as record_report,Fe as track_report};
