var ie=Object.defineProperty;var H=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,J=(e,t)=>{for(var o in t||(t={}))se.call(t,o)&&q(e,o,t[o]);if(H)for(var o of H(t))ne.call(t,o)&&q(e,o,t[o]);return e};import{c as r}from"./q.js";import{i as S}from"./1.js";import{I as G,o as B,d,a as c,F as w,R as z,m as Q,e as s,t as h,p as I,i as x,_ as m,z as le,M as C,S as M,s as L,k as U,b as v,f as p,U as K,x as de,c as ce,w as X,j as ue,h as _e}from"./g.js";import{z as ve}from"./3.js";import{p as fe}from"./9.js";import{b as pe}from"./4.js";import{a as me,u as ge}from"./$.js";import{H as Y}from"./s.js";import{s as he}from"./f.js";import"./$$.js";import"./n.js";import"./..js";import"./-.js";import"./x.js";var f=function(e,t){_paq.push(["trackEvent",e,t,"",""])},be=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},R,y,Z,ee,k;({camera:y,main:Z}=S);R="PreOfRec";k=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||y.x();return}switch(delete localStorage.recing,{src:e}=r,y.x(),e){case"screen":r.video="";break;default:if(!r.video){if({video:t}=localStorage,!t)return;r.video=t}e==="all"?y.circle(localStorage.人像尺寸-0):y.rect(),setTimeout(()=>{document.hidden||Z(!1)},1e3)}};ee=()=>{var e;switch({src:e}=r,e){case"all":f(R,"RecMode.Scr&Cam.Click");break;case"screen":f(R,"RecMode.Scr.Click");break;default:f(R,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",k);var ye={setup:()=>{var e,t,o,a,i,n;for(a=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],n=t=0,o=a.length;t<o;n=++t)e=a[n],i=e.indexOf(" "),a[n]=[e.slice(0,i),e.slice(1+i)];return G(()=>r.src,k),B(k),G(()=>r.video,l=>{var u;document.hidden||({src:u}=r,l?u==="screen"&&(r.src=localStorage.src||"all"):u!=="screen"&&(localStorage.src=r.src,r.src="screen"),k())}),{li:a,config:r,go:l=>{r.src=l,ee()}}}};const $e=e=>(I("data-v-6b7c1499"),e=e(),x(),e),ke={class:"method"},we=["onClick"],Ce=$e(()=>s("b",{class:"ico"},null,-1));function Se(e,t){return d(),c("div",ke,[(d(!0),c(w,null,z(e.li,([o,a])=>(d(),c("a",{class:Q([o,e.config.src==o?"now":""]),onClick:i=>e.go(o)},[Ce,s("i",null,h(a),1)],10,we))),256))])}var Ie=m(ye,[["render",Se],["__scopeId","data-v-6b7c1499"]]),xe={setup:()=>({config:r,disabled:le(()=>r.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const Ve=e=>(I("data-v-cf47a3ec"),e=e(),x(),e),Re={class:"bk"},ze=Ve(()=>s("h2",null,"录制区域",-1)),Le={class:"select"},Me=["disabled"],Ee=["value"];function Be(e,t){return d(),c("div",Re,[ze,s("div",Le,[C(s("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(d(!0),c(w,null,z(e.li,(o,a)=>(d(),c("option",{value:a},h(o),9,Ee))),256))],8,Me),[[M,e.config.area]])])])}var Ue=m(xe,[["render",Be],["__scopeId","data-v-cf47a3ec"]]),$;$="PreOfRec";var Te={components:{zAudio:ve},setup:()=>{var e,t,o,a;return a={audio:L([]),video:L([])},{mediaDevices:e}=navigator,o=i=>{i==="audio"?r[i]?f($,"MikeSwitch.Click"):f($,"MikeClose.Click"):r[i]?f($,"CamSwitch.Click"):f($,"CamClose.Click")},t=async()=>{var i,n,l,u,D,g,V,N,O,P,A,_,b,F,W,j;V={},O=await e.enumerateDevices();for(F of O)({kind:u,label:g,deviceId:i}=F),i==="default"&&(g=g.replace("Default - ",""),g="默认 "+g),u.endsWith("input")&&(u=u.slice(0,-5),(V[u]=V[u]||[]).push([i,g]));for(l in a)a[l].value=V[l]||[];for(l in a){if({value:b}=a[l],b.length){if(_=r[l],_){for(W of b)if([n]=W,_===n)return}if(_!==""){for(j of b){if([n,D]=j,_)break;if(n==="default"){_=n;break}N=D.toLowerCase(),P=["default","built-in","内建","默认"];for(A of P)if(N.includes(A)){_=n;break}}_||(_=b[0][0])}}else _=0;r[l]=_}},U(()=>{var i,n,l;n=["audio","video"];for(i of n)l=r[i],l&&(localStorage[i]=l)}),(async()=>await t())(),J({refresh:t,report:o,config:r,x:i=>{var n;n=r[i],n?n="":n=localStorage[i]||"",r[i]=n,o(i)}},a)}};const T=e=>(I("data-v-dcd37b00"),e=e(),x(),e),De={class:"bk"},Ne=T(()=>s("h2",null,"设备设置",-1)),Oe={class:"video"},Pe={class:"select"},Ae={label:"输入源"},Fe=["value"],We=T(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1)),je={class:"audio"},He={class:"select"},qe={label:"输入源"},Je=["value"],Ge=T(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1));function Ke(e,t){const o=v("z-audio");return d(),c("div",De,[Ne,s("li",Oe,[s("label",{class:Q({x:!e.config.video}),onClick:t[0]||(t[0]=a=>e.x("video")),for:"driveVideo"},null,2),s("div",Pe,[C(s("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>e.config.video=a),onChange:t[3]||(t[3]=a=>e.report("video"))},[s("optgroup",Ae,[(d(!0),c(w,null,z(e.video,([a,i])=>(d(),c("option",{value:a},h(i),9,Fe))),256))]),We],544),[[M,e.config.video]])])]),s("li",je,[s("label",{onClick:t[4]||(t[4]=a=>e.x("audio")),for:"driveAudio"},[p(o)]),s("div",He,[C(s("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[6]||(t[6]=a=>e.config.audio=a),onChange:t[7]||(t[7]=a=>e.report("audio"))},[s("optgroup",qe,[(d(!0),c(w,null,z(e.audio,([a,i])=>(d(),c("option",{value:a},h(i),9,Je))),256))]),Ge],544),[[M,e.config.audio]])])])])}var Qe=m(Te,[["render",Ke],["__scopeId","data-v-dcd37b00"]]),te,oe;({auto_start:te}=S);oe=fe==="win32";var Xe={setup:()=>{var e,t;return localStorage.getItem("sys_audio")===null&&(r.sys_audio=!0),localStorage.getItem("auto_start")===null&&(r.auto_start=!0),t=window.innerWidth,e=window.innerHeight,U(()=>{var o,a,i;a=["sys_audio","auto_start"];for(o of a)i=r[o],localStorage[o]=i;te.auto_start(r.auto_start)}),{config:r,isWin:oe,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const ae=e=>(I("data-v-56178e42"),e=e(),x(),e),Ye={class:"bk"},Ze={id:"extra-setting"},et={key:0,class:"box"},tt=ae(()=>s("label",{for:"sys-audio"},"录制系统声音",-1)),ot={class:"box"},at=ae(()=>s("label",{for:"auto-start"},"开机自动启动",-1));function rt(e,t){return d(),c("div",Ye,[s("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),s("li",Ze,[e.isWin?(d(),c("div",et,[C(s("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[K,e.config.sys_audio]]),tt])):de("",!0),s("div",ot,[C(s("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[K,e.config.auto_start]]),at])])])}var it=m(Xe,[["render",rt],["__scopeId","data-v-56178e42"]]),st={components:{btn:pe}};const nt=e=>(I("data-v-b0e482fa"),e=e(),x(),e),lt=nt(()=>s("b",null,null,-1));function dt(e,t){const o=v("btn");return d(),ce(o,null,{default:X(()=>[lt,ue(e.$slots,"default",{},void 0,!0)]),_:3})}var ct=m(st,[["render",dt],["__scopeId","data-v-b0e482fa"]]),ut={setup:()=>{var e;return e=L('单次最长录制30分钟, "扩容"可获更长时间'),B(async()=>{await me()}),U(()=>{r.duration_txt&&(e.value=r.duration_txt)}),{txt:e,pay:()=>S.open(Y+"?pay=true&user_token="+localStorage.uid)}}};function _t(e,t){return d(),c("a",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o))},h(e.txt),1)}var vt=m(ut,[["render",_t],["__scopeId","data-v-234a3262"]]),E,re;({auto_update:re}=S);E="PreOfRec";var ft={components:{src:Ie,rArea:Ue,drive:Qe,extra:it,btn:ct,durationLimit:vt},setup:()=>{var e,t;return t="开始录制",e=L(t),B(()=>{f(E,"RecPop.View")}),{txt:e,start:async()=>{var o,a,i;localStorage.recing=1,{avatarUrl:o,space:{used:i,max:a}}=await ge.json("user/get"),localStorage.ico=o,i>=a?(e.value="请付费扩容后点此录制",S.open(Y+"?pay=true&user_token="+localStorage.uid)):(e.value=t,be(E,"RecStart.Click",JSON.stringify({src:r.src,area:r.area,audio:!!r.audio,video:!!r.video})),he())}}}};(async()=>await re.update_promise())();function pt(e,t){const o=v("src"),a=v("r-area"),i=v("drive"),n=v("extra"),l=v("btn"),u=v("durationLimit");return d(),c(w,null,[p(o),s("main",null,[p(a),p(i),p(n),p(l,{onClick:e.start},{default:X(()=>[_e(h(e.txt),1)]),_:1},8,["onClick"]),p(u)])],64)}var Lt=m(ft,[["render",pt],["__scopeId","data-v-f2014a82"]]);export{Lt as default};
