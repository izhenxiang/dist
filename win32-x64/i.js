import{s as w,k as G,a as r,e as n,x as V,m as p,p as K,i as Q,d as s,_ as U,r as re,o as se,P as z,l as ie,F,y as q,f as y,h as $,t as I,b as W}from"./g.js";import{i as C}from"./2.js";import{b}from"./..js";import{O as ae}from"./0.js";import"./s.js";import{c as v}from"./z.js";import{D as h}from"./$.js";import{z as ne}from"./4.js";import{H as le}from"./n.js";import{a as X}from"./3.js";import{p as de}from"./-.js";import"./a.js";import"./9.js";import"./$0.js";import"./r.js";import"./e.js";var x;x=e=>(e+"").padStart(2,"0");var pe=()=>{var e,t,o,a,i,l;return t=w("00"),o=w("00"),e=w(""),a=w(0),[l,i]=(()=>{var d,c;return c=0,d=void 0,[()=>{d&&clearInterval(d),d=setInterval(()=>{++c,e.value=x(parseInt(c/3600)),e.value==="00"&&(e.value=""),t.value=x(parseInt(c%3600/60)),o.value=x(c%60),a.value=c},1e3)},()=>{clearInterval(d)}]})(),[a,e,t,o,l,i]},ce={props:{shape:{type:String,required:!0,default:"pen"}},components:{},setup:e=>{var t,o,a,i;return a=e.shape,h[a]===void 0&&(h[a]=JSON.stringify(["red","middle"])),[t,i]=JSON.parse(h[a]),i=w(i),t=w(t),o=0,a==="txt"&&(o=1),G(()=>{var l,d,c;d=h[a],[l,c]=JSON.parse(d),l!==t.value&&(t.value=l),c!==i.color&&(i.value=c)}),{size:i,color:t,is_txt:o,set_size:(l,d)=>{d.stopPropagation(),l!==i.value&&(h[a]=JSON.stringify([t.value,l]))},nav_click:l=>{l.stopImmediatePropagation()},set_color:(l,d)=>{d.stopPropagation(),l!==t.value&&(h[a]=JSON.stringify([l,i.value]))}}}};const S=e=>(K("data-v-6f653c15"),e=e(),Q(),e),ue={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ve={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},he={key:1,d:"M7.52 12.89C8.2 12.89 8.55 12.53 8.55 11.83V3.98H7.81V11.64C7.81 12.01 7.62 12.2 7.25 12.2C6.8 12.2 6.32 12.18 5.82 12.14L5.99 12.89H7.52ZM5.13 6.3C4.73 8.1 4.14 9.53 3.34 10.59L3.96 11.14C4.74 10.1 5.37 8.58 5.85 6.58L5.13 6.3ZM10.81 6.06L10.16 6.47C10.93 8.2 11.54 9.77 11.99 11.19L12.63 10.74C12.21 9.41 11.6 7.85 10.81 6.06Z",fill:"var(--tt)","fill-opacity":"var(--to)"},we={key:2,cx:"9",cy:"9",r:"2",fill:"var(--c)"},fe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},_e={key:1,d:"M7.63 3.79V5.59H4.05V10.29H4.77V9.66H7.63V13.07H8.37V9.66H11.24V10.29H11.96V5.59H8.37V3.79H7.63ZM4.77 8.96V6.29H7.63V8.96H4.77ZM8.37 8.96V6.29H11.24V8.96H8.37Z",fill:"var(--tt)","fill-opacity":"var(--to)"},ke={key:2,cx:"9",cy:"9",r:"4",fill:"var(--c)"},me={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye={key:0,width:"16",height:"16",rx:"2",fill:"var(--tb)"},Ce={key:1,d:"M3.61 6.46V7.16H7.38C6.86 9.62 5.54 11.38 3.41 12.43L3.86 13.03C5.99 11.92 7.37 10.15 7.99 7.72C8.74 9.98 10.12 11.72 12.13 12.96L12.58 12.38C10.53 11.16 9.15 9.42 8.45 7.16H12.39V6.46H8.24C8.32 5.84 8.37 5.19 8.37 4.49V3.84H7.63V4.65C7.62 5.28 7.58 5.88 7.5 6.46H3.61Z",fill:"var(--tt)","fill-opacity":"var(--to)"},Se={key:2,cx:"9",cy:"9",r:"6",fill:"var(--c)"},Ve={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},be=S(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FE6C6C"},null,-1)),xe={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},He={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Le={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$e=S(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#34D53B"},null,-1)),Ie={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},ze={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Be={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Me=S(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FFB803"},null,-1)),Ne={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},Ee={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Oe={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=S(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#939393"},null,-1)),De={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},Pe={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},Re={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=S(()=>n("rect",{x:"3",y:"3",width:"12",height:"12",fill:"white",stroke:"#E9EBED"},null,-1)),Ze={key:0,class:"txt",x:"1.5",y:"1.5",width:"15",height:"15",stroke:"white"},je={key:1,d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"};function Ae(e,t){return s(),r("div",{class:"nav",onClick:t[8]||(t[8]=(...o)=>e.nav_click&&e.nav_click(...o))},[n("span",{class:p(["small",{now:e.size=="small"}]),onClick:t[0]||(t[0]=o=>e.set_size("small",o))},[(s(),r("svg",ue,[e.is_txt?(s(),r("rect",ve)):V("",!0),e.is_txt?(s(),r("path",he)):(s(),r("circle",we))]))],2),n("span",{class:p(["middle",{now:e.size=="middle"}]),onClick:t[1]||(t[1]=o=>e.set_size("middle",o))},[(s(),r("svg",fe,[e.is_txt?(s(),r("rect",ge)):V("",!0),e.is_txt?(s(),r("path",_e)):(s(),r("circle",ke))]))],2),n("span",{class:p(["big",{now:e.size=="big"}]),onClick:t[2]||(t[2]=o=>e.set_size("big",o))},[(s(),r("svg",me,[e.is_txt?(s(),r("rect",ye)):V("",!0),e.is_txt?(s(),r("path",Ce)):(s(),r("circle",Se))]))],2),n("span",{class:p(["red",{color_now:e.color=="red"}]),onClick:t[3]||(t[3]=o=>e.set_color("red",o))},[(s(),r("svg",Ve,[be,e.is_txt?(s(),r("rect",xe)):(s(),r("path",He))]))],2),n("span",{class:p(["green",{color_now:e.color=="green"}]),onClick:t[4]||(t[4]=o=>e.set_color("green",o))},[(s(),r("svg",Le,[$e,e.is_txt?(s(),r("rect",Ie)):(s(),r("path",ze))]))],2),n("span",{class:p(["orange",{color_now:e.color=="orange"}]),onClick:t[5]||(t[5]=o=>e.set_color("orange",o))},[(s(),r("svg",Be,[Me,e.is_txt?(s(),r("rect",Ne)):(s(),r("path",Ee))]))],2),n("span",{class:p(["gray",{color_now:e.color=="gray"}]),onClick:t[6]||(t[6]=o=>e.set_color("gray",o))},[(s(),r("svg",Oe,[Te,e.is_txt?(s(),r("rect",De)):(s(),r("path",Pe))]))],2),n("span",{class:p(["white",{color_now:e.color=="white"}]),onClick:t[7]||(t[7]=o=>e.set_color("white",o))},[(s(),r("svg",Re,[Je,e.is_txt?(s(),r("rect",Ze)):(s(),r("path",je))]))],2)])}var Fe=U(ce,[["render",Ae],["__scopeId","data-v-6f653c15"]]),D,m,Y,P,B,M,ee,k,te,f,g,N,oe,O,T,R,J,_;({recbar:g}=C);var qe=function(e,t){_paq.push(["trackEvent",e,t,"",""])},We=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])};D="Rec";[O,ee,te,oe,J,R]=pe();T=e=>{var t,o,a;o=e.split(`
`),a=[];for(t of o)a.push(t.split(" "));return a};B&&clearInterval(B);B=setInterval(async()=>{await X()},5*60*1e3);f=w(!1);m=!1;P=w();Y=e=>{[J,R][e-0]()};_=()=>{var e;({value:e}=f),e=!e,b.pause(f.value=e),m&&Y(e)};k={pause:async()=>{f.value&&await X(),_()},reset:()=>{m&&(f.value||_(),z(async()=>await C.confirm.show("reset")?b.reset():_()))},cancel:async()=>{if(!m){await g.cancel();return}f.value||_(),z(async()=>await C.confirm.show("cancel")?b.cancel():_())},stop:()=>{b.stop(),R()}};E.on("quick_stop",(e,t)=>{k.stop()});M={pen:"Line",rect:"Cycle",txt:"Text",arrow:"Arrow",track:"Track",video:"CamClose",audio:"MikeClose",pause:"Pause",reset:"Reset",cancel:"Cancel",fold:"Collapse"};N=e=>{qe(D,"RecTool."+e+".Click")};ae.start=()=>{J(),m=!0,P.value.className=""};v.src!=="camera"&&ie(()=>import("./y.js"),["y.js","5.js","0.js","-.js","b.js","2.js","z.js","$0.js","..js","r.js","g.js","d.css","n.js","1.js","e.js","t.js"]);var Ge={components:{zAudio:ne,DrawStyle:Fe},setup:()=>{var e,t,o,a,i,l,d,c,j,A;for(i=T("video 摄像头"),j=re(T(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),A=u=>()=>{v[u]=v[u]?"":localStorage[u],!f.value&&!v.video&&!v.audio&&v.src==="camera"&&!(v.sys_audio&&de==="win32")&&k.pause()},c=["audio","video"],a=0,l=c.length;a<l;a++)o=c[a],k[o]=A(o);return t=w(),d=w(),se(()=>{}),e=u=>{u>=v.max_duration&&m&&(f.value||_(),z(async()=>await C.confirm.show("pay")?C.open(le+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(v.vipLevel+1)):k.stop()))},G(()=>{e(O.value)}),{go:async u=>{var H,L;if(u==="stop"&&We(D,"RecTool.Stop.Click",JSON.stringify({src:v.src,area:v.area,audio:!!v.audio,video:!!v.video,duration:O.value})),M[u]&&N(M[u]),["pen","rect","txt","arrow","track"].indexOf(u)+1){if({value:L}=t,L!==u){if(u==="track"&&h.drawing===1?h.prev=h.shape:h.prev="",h.shape=t.value=u,L)return}else if(t.value="",h.drawing=0,u!=="track"){await g.draw_x();return}else{if(h.prev===""){await g.draw_x();return}h.shape=t.value=h.prev}h.drawing=1,H=[0,0,1280,720],v.area!==0&&(H=JSON.parse(localStorage.area)),await g.draw(v.area,H);return}(k[u]||g[u])()},expand:()=>{window.innerWidth<200&&(g.expand(),N("Expand"))},left:i,nav:d,right:j,code:P,hour:ee,minute:te,second:oe,pause:f,config:v,draw:t}}};const Z=e=>(K("data-v-be3f59cc"),e=e(),Q(),e),Ke=["title","onClick"],Qe=Z(()=>n("b",null,null,-1)),Ue={key:0},Xe=Z(()=>n("span",null,":",-1)),Ye=["title","onClick"],et={class:"draw"},tt=Z(()=>n("b",null,null,-1));function ot(e,t){const o=W("z-audio"),a=W("DrawStyle");return s(),r("nav",{class:p({pause:e.pause}),ref:"nav"},[(s(!0),r(F,null,q(e.left,([i,l],d)=>(s(),r("a",{class:p([i,e.config[i]?"":"x"]),title:l,onClick:c=>e.go(i)},null,10,Ke))),256)),y(o,{onClick:t[0]||(t[0]=i=>e.go("audio")),from:"recbar"}),Qe,n("code",{ref:"code",onClick:t[1]||(t[1]=(...i)=>e.expand&&e.expand(...i)),class:p({small:e.hour!="",pause:e.pause})},[$(I(e.hour),1),e.hour?(s(),r("span",Ue,":")):V("",!0),$(I(e.minute),1),Xe,$(I(e.second),1)],2),(s(!0),r(F,null,q(e.right,([i,l],d)=>(s(),r("a",{class:p([i]),title:l,onClick:c=>e.go(i)},null,10,Ye))),256)),n("div",et,[tt,n("a",{class:p(["pen",{now:e.draw=="pen"}]),onClick:t[2]||(t[2]=i=>e.go("pen")),title:"画笔"},[y(a,{shape:"pen"})],2),n("a",{class:p(["rect",{now:e.draw=="rect"}]),onClick:t[3]||(t[3]=i=>e.go("rect")),title:"画框"},[y(a,{shape:"rect"})],2),n("a",{class:p(["arrow",{now:e.draw=="arrow"}]),onClick:t[4]||(t[4]=i=>e.go("arrow")),title:"箭头"},[y(a,{shape:"arrow"})],2),n("a",{class:p(["txt",{now:e.draw=="txt"}]),onClick:t[5]||(t[5]=i=>e.go("txt")),title:"文字"},[y(a,{shape:"txt"})],2),n("a",{class:p(["track",{now:e.draw=="track"}]),onClick:t[6]||(t[6]=i=>e.go("track")),title:"轨迹"},null,2)]),n("a",{class:"fold",onClick:t[7]||(t[7]=i=>e.go("fold")),title:"收起"})],2)}var kt=U(Ge,[["render",ot],["__scopeId","data-v-be3f59cc"]]);export{kt as default,We as record_report,qe as track_report};
