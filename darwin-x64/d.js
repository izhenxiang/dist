import{s as w,k as A,a as g,e as r,m as n,d as h,p as R,i as V,_ as H,r as U,o as X,N as z,l as Y,F as j,Q as M,f as y,h as F,t as J,b as P}from"./c.js";import{i as S}from"./1.js";import{b as $}from"./-.js";import{O as Z}from"./..js";import{d as ee}from"./a.js";import{c as p}from"./$2.js";import{D as u}from"./4.js";import{z as oe}from"./3.js";import{H as re}from"./l.js";import{a as W}from"./j.js";import{p as te}from"./s.js";import"./$..js";import"./r.js";var B;B=e=>(e+"").padStart(2,"0");var se=()=>{var e,o,t,i,s;return e=w("00"),o=w("00"),t=w(0),[s,i]=(()=>{var a,l;return l=0,a=void 0,[()=>{a&&clearInterval(a),a=setInterval(()=>{++l,e.value=B(parseInt(l/60)),o.value=B(l%60),t.value=l},1e3)},()=>{clearInterval(a)}]})(),[t,e,o,s,i]},ie={props:{shape:{type:String,required:!0,default:"pen"}},components:{},setup:e=>{var o,t,i;return t=e.shape,u[t]===void 0&&(u[t]=JSON.stringify(["red","middle"])),[o,i]=JSON.parse(u[t]),i=w(i),o=w(o),A(()=>{var s,a,l;a=u[t],[s,l]=JSON.parse(a),s!==o.value&&(o.value=s),l!==i.color&&(i.value=l)}),{size:i,color:o,set_size:(s,a)=>{a.stopPropagation(),s!==i.value&&(u[t]=JSON.stringify([o.value,s]))},set_color:(s,a)=>{a.stopPropagation(),s!==o.value&&(u[t]=JSON.stringify([s,i.value]))}}}};const v=e=>(R("data-v-4834351c"),e=e(),V(),e),ae={class:"nav"},ne=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"9",cy:"9",r:"2",fill:"var(--c)"})],-1)),le=[ne],de=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"9",cy:"9",r:"4",fill:"var(--c)"})],-1)),pe=[de],ue=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"9",cy:"9",r:"6",fill:"var(--c)"})],-1)),we=[ue],ce=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FE6C6C"}),r("path",{d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ve=[ce],fe=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#34D53B"}),r("path",{d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ge=[fe],he=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#FFB803"}),r("path",{d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),me=[he],_e=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("rect",{x:"3",y:"3",width:"12",height:"12",fill:"#939393"}),r("path",{d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ke=[_e],ye=v(()=>r("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("rect",{x:"3",y:"3",width:"12",height:"12",fill:"white",stroke:"#E9EBED"}),r("path",{d:"M7 8.66669L8.66667 10.3334L11.3333 7.66669",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Ce=[ye];function Se(e,o){return h(),g("div",ae,[r("span",{class:n(["small",{now:e.size=="small"}]),onClick:o[0]||(o[0]=t=>e.set_size("small",t))},le,2),r("span",{class:n(["middle",{now:e.size=="middle"}]),onClick:o[1]||(o[1]=t=>e.set_size("middle",t))},pe,2),r("span",{class:n(["big",{now:e.size=="big"}]),onClick:o[2]||(o[2]=t=>e.set_size("big",t))},we,2),r("span",{class:n(["red",{color_now:e.color=="red"}]),onClick:o[3]||(o[3]=t=>e.set_color("red",t))},ve,2),r("span",{class:n(["green",{color_now:e.color=="green"}]),onClick:o[4]||(o[4]=t=>e.set_color("green",t))},ge,2),r("span",{class:n(["orange",{color_now:e.color=="orange"}]),onClick:o[5]||(o[5]=t=>e.set_color("orange",t))},me,2),r("span",{class:n(["gray",{color_now:e.color=="gray"}]),onClick:o[6]||(o[6]=t=>e.set_color("gray",t))},ke,2),r("span",{class:n(["white",{color_now:e.color=="white"}]),onClick:o[7]||(o[7]=t=>e.set_color("white",t))},Ce,2)])}var $e=H(ie,[["render",Se],["__scopeId","data-v-4834351c"]]),_,q,N,I,C,Q,c,m,G,K,L,D,O,f;({recbar:m}=S);[K,Q,G,O,D]=se();L=e=>{var o,t,i;t=e.split(`
`),i=[];for(o of t)i.push(o.split(" "));return i};I&&clearInterval(I);I=setInterval(async()=>{await W()},5*60*1e3);c=w(!1);_=!1;N=w();q=e=>{[O,D][e-0]()};f=()=>{var e;({value:e}=c),e=!e,$.pause(c.value=e),_&&q(e)};C={pause:async()=>{c.value&&await W(),f()},reset:()=>{_&&(c.value||f(),z(async()=>await S.confirm.show("reset")?$.reset():f()))},cancel:async()=>{if(!_){await m.cancel();return}c.value||f(),z(async()=>await S.confirm.show("cancel")?$.cancel():f())},stop:()=>{$.stop(),D()}};Z.start=()=>{O(),_=!0,N.value.className=""};p.src!=="camera"&&Y(()=>import("./0.js"),["0.js","q.js","..js","s.js","h.js","1.js","$2.js","$..js","-.js","r.js","c.js","8.css","l.js","$1.js","v.js"]);var be={components:{zAudio:oe,DrawStyle:$e},setup:()=>{var e,o,t,i,s,a,l,k,x,T;for(s=L("video 摄像头"),x=U(L(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),T=d=>()=>{p[d]=p[d]?"":localStorage[d],!c.value&&!p.video&&!p.audio&&p.src==="camera"&&!(p.sys_audio&&te==="win32")&&C.pause()},k=["audio","video"],i=0,a=k.length;i<a;i++)t=k[i],C[t]=T(t);return o=w(),l=w(),X(()=>{ee(l.value)}),e=d=>{d>=p.max_duration&&_&&(c.value||f(),z(async()=>await S.confirm.show("pay")?S.open(re+"?pay=true&user_token="+localStorage.uid):C.stop()))},A(()=>{e(K.value)}),{go:async d=>{var b;if(["pen","rect","txt","arrow","track"].indexOf(d)+1){if({value:b}=o,b!==d){if(u.shape=o.value=d,b)return}else{o.value="",u.drawing=0,await m.draw_x();return}u.drawing=1,await m.draw();return}(C[d]||m[d])()},expand:()=>{window.innerWidth<200&&m.expand()},left:s,nav:l,right:x,code:N,minute:Q,second:G,pause:c,config:p,draw:o}}};const E=e=>(R("data-v-2681c90f"),e=e(),V(),e),ze=["title","onClick"],Be=E(()=>r("b",null,null,-1)),Ie=E(()=>r("span",null,":",-1)),Le=["title","onClick"],Ne={class:"draw"},De=E(()=>r("b",null,null,-1));function Oe(e,o){const t=P("z-audio"),i=P("DrawStyle");return h(),g("nav",{class:n({pause:e.pause}),ref:"nav"},[(h(!0),g(j,null,M(e.left,([s,a],l)=>(h(),g("a",{class:n([s,e.config[s]?"":"x"]),title:a,onClick:k=>e.go(s)},null,10,ze))),256)),y(t,{onClick:o[0]||(o[0]=s=>e.go("audio"))}),Be,r("code",{class:"pause",ref:"code",onClick:o[1]||(o[1]=(...s)=>e.expand&&e.expand(...s))},[F(J(e.minute),1),Ie,F(J(e.second),1)],512),(h(!0),g(j,null,M(e.right,([s,a],l)=>(h(),g("a",{class:n([s]),title:a,onClick:k=>e.go(s)},null,10,Le))),256)),r("div",Ne,[De,r("a",{class:n(["pen",{now:e.draw=="pen"}]),onClick:o[2]||(o[2]=s=>e.go("pen")),title:"画笔"},[y(i,{shape:"pen"})],2),r("a",{class:n(["rect",{now:e.draw=="rect"}]),onClick:o[3]||(o[3]=s=>e.go("rect")),title:"画框"},[y(i,{shape:"rect"})],2),r("a",{class:n(["txt",{now:e.draw=="txt"}]),onClick:o[4]||(o[4]=s=>e.go("txt")),title:"文字"},[y(i,{shape:"txt"})],2),r("a",{class:n(["arrow",{now:e.draw=="arrow"}]),onClick:o[5]||(o[5]=s=>e.go("arrow")),title:"箭头"},[y(i,{shape:"arrow"})],2),r("a",{class:n(["track",{now:e.draw=="track"}]),onClick:o[6]||(o[6]=s=>e.go("track")),title:"轨迹"},null,2)]),r("a",{class:"fold",onClick:o[7]||(o[7]=s=>e.go("fold")),title:"收起"})],2)}var qe=H(be,[["render",Oe],["__scopeId","data-v-2681c90f"]]);export{qe as default};
