import{s as v,r as W,o as j,k as q,M as b,l as G,a as w,F as O,P,f as J,e as l,h as R,t as V,m as d,p as K,i as Q,b as U,d as _,_ as X}from"./_.js";import{i as g}from"./0.js";import{b as k}from"./-.js";import{O as Y}from"./..js";import{d as Z}from"./7.js";/* empty css        */import{c as p}from"./v.js";import{D as x}from"./$0.js";import{z as ee,f as B}from"./1.js";import{H as ae}from"./d.js";import"./3.js";import"./g.js";var h;h=e=>(e+"").padStart(2,"0");var re=()=>{var e,a,t,r,i;return e=v("00"),a=v("00"),t=v(0),[i,r]=(()=>{var s,o;return o=0,s=void 0,[()=>{s&&clearInterval(s),s=setInterval(()=>{++o,e.value=h(parseInt(o/60)),a.value=h(o%60),t.value=o},1e3)},()=>{clearInterval(s)}]})(),[t,e,a,i,r]},m,F,T,S,y,H,u,f,L,M,$,z,N,c;({recbar:f}=g);[M,H,L,N,z]=re();$=e=>{var a,t,r;t=e.split(`
`),r=[];for(a of t)r.push(a.split(" "));return r};S&&clearInterval(S);S=setInterval(async()=>{await B()},5*60*1e3);u=v(!1);m=!1;T=v();F=e=>{[N,z][e-0]()};c=()=>{var e;({value:e}=u),e=!e,k.pause(u.value=e),m&&F(e)};y={pause:async()=>{u.value&&await B(),c()},reset:()=>{m&&(u.value||c(),b(async()=>await g.confirm.show("reset")?k.reset():c()))},cancel:async()=>{if(!m){await f.cancel();return}u.value||c(),b(async()=>await g.confirm.show("cancel")?k.cancel():c())},stop:()=>{k.stop(),z()}};Y.start=()=>{N(),m=!0,T.value.className=""};p.src!=="camera"&&G(()=>import("./k.js"),["k.js","o.js","..js","w.js","0.js","v.js","3.js","-.js","g.js","_.js","8.css","d.js","e.js","$..js","r.js"]);var te={components:{zAudio:ee},setup:()=>{var e,a,t,r,i,s,o,C,D,E;for(i=$("video 摄像头"),D=W($(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),E=n=>()=>{p[n]=p[n]?"":localStorage[n],!u.value&&!p.video&&!p.audio&&p.src==="camera"&&y.pause()},C=["audio","video"],r=0,s=C.length;r<s;r++)t=C[r],y[t]=E(t);return a=v(),o=v(),j(()=>{Z(o.value)}),e=n=>{n>=p.max_duration&&m&&(u.value||c(),b(async()=>(await g.confirm.show("pay"),g.open(ae+"?pay=true&user_token="+localStorage.uid))))},q(()=>{e(M.value)}),{go:async n=>{var I;if(["pen","rect","txt","arrow"].indexOf(n)+1){if({value:I}=a,I!==n){if(x.shape=a.value=n,I)return}else{a.value="",await f.draw_x();return}await f.draw();return}(y[n]||f[n])()},expand:()=>{window.innerWidth<200&&f.expand()},left:i,nav:o,right:D,code:T,minute:H,second:L,pause:u,config:p,draw:a}}};const A=e=>(K("data-v-770c2ec4"),e=e(),Q(),e),oe=["title","onClick"],ne=A(()=>l("b",null,null,-1)),se=A(()=>l("span",null,":",-1)),le=["title","onClick"],ie={class:"draw"},ue=A(()=>l("b",null,null,-1));function pe(e,a){const t=U("z-audio");return _(),w("nav",{class:d({pause:e.pause}),ref:"nav"},[(_(!0),w(O,null,P(e.left,([r,i],s)=>(_(),w("a",{class:d([r,e.config[r]?"":"x"]),title:i,onClick:o=>e.go(r)},null,10,oe))),256)),J(t,{onClick:a[0]||(a[0]=r=>e.go("audio"))}),ne,l("code",{class:"pause",ref:"code",onClick:a[1]||(a[1]=(...r)=>e.expand&&e.expand(...r))},[R(V(e.minute),1),se,R(V(e.second),1)],512),(_(!0),w(O,null,P(e.right,([r,i],s)=>(_(),w("a",{class:d([r]),title:i,onClick:o=>e.go(r)},null,10,le))),256)),l("div",ie,[ue,l("a",{class:d(["pen",{now:e.draw=="pen"}]),onClick:a[2]||(a[2]=r=>e.go("pen")),title:"画笔"},null,2),l("a",{class:d(["rect",{now:e.draw=="rect"}]),onClick:a[3]||(a[3]=r=>e.go("rect")),title:"画框"},null,2),l("a",{class:d(["txt",{now:e.draw=="txt"}]),onClick:a[4]||(a[4]=r=>e.go("txt")),title:"文字"},null,2),l("a",{class:d(["arrow",{now:e.draw=="arrow"}]),onClick:a[5]||(a[5]=r=>e.go("arrow")),title:"箭头"},null,2)]),l("a",{class:"down",onClick:a[6]||(a[6]=r=>e.go("down")),title:"收起"})],2)}var be=X(te,[["render",pe],["__scopeId","data-v-770c2ec4"]]);export{be as default};
