import{s as c,r as W,o as j,k as q,M as b,l as G,a as w,F as O,P,f as J,e as l,h as R,t as V,m as d,p as K,i as Q,b as U,d as g,_ as X}from"./a.js";import{i as k}from"./1.js";import{b as y}from"./..js";import{O as Y}from"./0.js";import{d as Z}from"./_.js";import{c as u}from"./$..js";import{D as x}from"./4.js";import{z as ee,f as B}from"./$0.js";import{H as ae}from"./k.js";import{p as re}from"./.js";import"./i.js";import"./q.js";var h;h=e=>(e+"").padStart(2,"0");var te=()=>{var e,a,t,r,i;return e=c("00"),a=c("00"),t=c(0),[i,r]=(()=>{var n,o;return o=0,n=void 0,[()=>{n&&clearInterval(n),n=setInterval(()=>{++o,e.value=h(parseInt(o/60)),a.value=h(o%60),t.value=o},1e3)},()=>{clearInterval(n)}]})(),[t,e,a,i,r]},m,F,T,S,_,H,p,v,L,M,$,z,N,f;({recbar:v}=k);[M,H,L,N,z]=te();$=e=>{var a,t,r;t=e.split(`
`),r=[];for(a of t)r.push(a.split(" "));return r};S&&clearInterval(S);S=setInterval(async()=>{await B()},5*60*1e3);p=c(!1);m=!1;T=c();F=e=>{[N,z][e-0]()};f=()=>{var e;({value:e}=p),e=!e,y.pause(p.value=e),m&&F(e)};_={pause:async()=>{p.value&&await B(),f()},reset:()=>{m&&(p.value||f(),b(async()=>await k.confirm.show("reset")?y.reset():f()))},cancel:async()=>{if(!m){await v.cancel();return}p.value||f(),b(async()=>await k.confirm.show("cancel")?y.cancel():f())},stop:()=>{y.stop(),z()}};Y.start=()=>{N(),m=!0,T.value.className=""};u.src!=="camera"&&G(()=>import("./f.js"),["f.js","$1.js","0.js",".js","t.js","1.js","$..js","i.js","..js","q.js","a.js","7.css","k.js","u.js","v.js"]);var oe={components:{zAudio:ee},setup:()=>{var e,a,t,r,i,n,o,C,D,E;for(i=$("video 摄像头"),D=W($(`pause 暂停
stop 结束录制
reset 重新录制
cancel 取消录制`)),E=s=>()=>{u[s]=u[s]?"":localStorage[s],!p.value&&!u.video&&!u.audio&&u.src==="camera"&&!(u.sys_audio&&re==="win32")&&_.pause()},C=["audio","video"],r=0,n=C.length;r<n;r++)t=C[r],_[t]=E(t);return a=c(),o=c(),j(()=>{Z(o.value)}),e=s=>{s>=u.max_duration&&m&&(p.value||f(),b(async()=>await k.confirm.show("pay")?k.open(ae+"?pay=true&user_token="+localStorage.uid):_.stop()))},q(()=>{e(M.value)}),{go:async s=>{var I;if(["pen","rect","txt","arrow"].indexOf(s)+1){if({value:I}=a,I!==s){if(x.shape=a.value=s,I)return}else{a.value="",await v.draw_x();return}await v.draw();return}(_[s]||v[s])()},expand:()=>{window.innerWidth<200&&v.expand()},left:i,nav:o,right:D,code:T,minute:H,second:L,pause:p,config:u,draw:a}}};const A=e=>(K("data-v-62323a42"),e=e(),Q(),e),se=["title","onClick"],ne=A(()=>l("b",null,null,-1)),le=A(()=>l("span",null,":",-1)),ie=["title","onClick"],ue={class:"draw"},pe=A(()=>l("b",null,null,-1));function de(e,a){const t=U("z-audio");return g(),w("nav",{class:d({pause:e.pause}),ref:"nav"},[(g(!0),w(O,null,P(e.left,([r,i],n)=>(g(),w("a",{class:d([r,e.config[r]?"":"x"]),title:i,onClick:o=>e.go(r)},null,10,se))),256)),J(t,{onClick:a[0]||(a[0]=r=>e.go("audio"))}),ne,l("code",{class:"pause",ref:"code",onClick:a[1]||(a[1]=(...r)=>e.expand&&e.expand(...r))},[R(V(e.minute),1),le,R(V(e.second),1)],512),(g(!0),w(O,null,P(e.right,([r,i],n)=>(g(),w("a",{class:d([r]),title:i,onClick:o=>e.go(r)},null,10,ie))),256)),l("div",ue,[pe,l("a",{class:d(["pen",{now:e.draw=="pen"}]),onClick:a[2]||(a[2]=r=>e.go("pen")),title:"画笔"},null,2),l("a",{class:d(["rect",{now:e.draw=="rect"}]),onClick:a[3]||(a[3]=r=>e.go("rect")),title:"画框"},null,2),l("a",{class:d(["txt",{now:e.draw=="txt"}]),onClick:a[4]||(a[4]=r=>e.go("txt")),title:"文字"},null,2),l("a",{class:d(["arrow",{now:e.draw=="arrow"}]),onClick:a[5]||(a[5]=r=>e.go("arrow")),title:"箭头"},null,2)]),l("a",{class:"fold",onClick:a[6]||(a[6]=r=>e.go("fold")),title:"收起"})],2)}var he=X(oe,[["render",de],["__scopeId","data-v-62323a42"]]);export{he as default};
