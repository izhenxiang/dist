var Z=Object.defineProperty;var W=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var j=(e,t,o)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,H=(e,t)=>{for(var o in t||(t={}))ee.call(t,o)&&j(e,o,t[o]);if(W)for(var o of W(t))te.call(t,o)&&j(e,o,t[o]);return e};import{c as i,m as oe}from"./k.js";import{i as f}from"./-.js";import{G as M,o as R,d as l,a as u,F as C,P as B,m as q,e as s,t as w,p as L,i as z,_ as h,x as ae,K as V,R as T,s as E,k as U,b as p,f as g,S as P,u as re,c as ie,w as G,j as se,h as ne}from"./_.js";import{z as de,f as le,u as ue}from"./f.js";import{p as ce}from"./$..js";import{b as _e}from"./1.js";import{H as K}from"./e.js";import{s as ve}from"./y.js";import{v as fe}from"./v.js";import"./4.js";import"./$.js";import"./.js";import"./i.js";var I,O,x;({camera:I,main:O}=f);x=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||I.x();return}switch(delete localStorage.recing,{src:e}=i,I.x(),e){case"screen":i.video="";break;default:if(!i.video){if({video:t}=localStorage,!t)return;i.video=t}e==="all"?I.circle(localStorage.人像尺寸-0):I.rect(),setTimeout(()=>{document.hidden||O(!1)},1e3)}};document.addEventListener("visibilitychange",x);var pe={setup:()=>{var e,t,o,a,r,n;for(a=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],n=t=0,o=a.length;t<o;n=++t)e=a[n],r=e.indexOf(" "),a[n]=[e.slice(0,r),e.slice(1+r)];return M(()=>i.src,x),R(x),M(()=>i.video,d=>{var c;document.hidden||({src:c}=i,d?c==="screen"&&(i.src=localStorage.src||"all"):c!=="screen"&&(localStorage.src=i.src,i.src="screen"),x())}),{li:a,config:i,go:d=>{i.src=d}}}};const me=e=>(L("data-v-1eb91dd6"),e=e(),z(),e),ge={class:"method"},he=["onClick"],ye=me(()=>s("b",{class:"ico"},null,-1));function be(e,t){return l(),u("div",ge,[(l(!0),u(C,null,B(e.li,([o,a])=>(l(),u("a",{class:q([o,e.config.src==o?"now":""]),onClick:r=>e.go(o)},[ye,s("i",null,w(a),1)],10,he))),256))])}var we=h(pe,[["render",be],["__scopeId","data-v-1eb91dd6"]]),$e={setup:()=>({config:i,disabled:ae(()=>i.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const ke=e=>(L("data-v-cf47a3ec"),e=e(),z(),e),Se={class:"bk"},Ie=ke(()=>s("h2",null,"录制区域",-1)),xe={class:"select"},Ce=["disabled"],Ve=["value"];function Le(e,t){return l(),u("div",Se,[Ie,s("div",xe,[V(s("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(l(!0),u(C,null,B(e.li,(o,a)=>(l(),u("option",{value:a},w(o),9,Ve))),256))],8,Ce),[[T,e.config.area]])])])}var ze=h($e,[["render",Le],["__scopeId","data-v-cf47a3ec"]]),Be={components:{zAudio:de},setup:()=>{var e,t,o;return o={audio:E([]),video:E([])},{mediaDevices:e}=navigator,t=async()=>{var a,r,n,d,c,v,m,$,k,y,b,_,S,A,F,N;m={},k=await e.enumerateDevices();for(A of k)({kind:d,label:v,deviceId:a}=A),a==="default"&&(v=v.replace("Default - ",""),v="默认 "+v),d.endsWith("input")&&(d=d.slice(0,-5),(m[d]=m[d]||[]).push([a,v]));for(n in o)o[n].value=m[n]||[];for(n in o){if({value:S}=o[n],S.length){if(_=i[n],_){for(F of S)if([r]=F,_===r)return}if(_!==""){for(N of S){if([r,c]=N,_)break;if(r==="default"){_=r;break}$=c.toLowerCase(),y=["default","built-in","内建","默认"];for(b of y)if($.includes(b)){_=r;break}}_||(_=S[0][0])}}else _=0;i[n]=_}},U(()=>{var a,r,n;r=["audio","video"];for(a of r)n=i[a],n&&(localStorage[a]=n)}),(async()=>await t())(),H({refresh:t,config:i,x:a=>{var r;r=i[a],r?r="":r=localStorage[a]||"",i[a]=r}},o)}};const D=e=>(L("data-v-73daa151"),e=e(),z(),e),Ee={class:"bk"},Te=D(()=>s("h2",null,"设备设置",-1)),Ue={class:"video"},De={class:"select"},Ae={label:"输入源"},Fe=["value"],Ne=D(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1)),We={class:"audio"},je={class:"select"},He={label:"输入源"},Me=["value"],Pe=D(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1));function Re(e,t){const o=p("z-audio");return l(),u("div",Ee,[Te,s("li",Ue,[s("label",{class:q({x:!e.config.video}),onClick:t[0]||(t[0]=a=>e.x("video")),for:"driveVideo"},null,2),s("div",De,[V(s("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>e.config.video=a)},[s("optgroup",Ae,[(l(!0),u(C,null,B(e.video,([a,r])=>(l(),u("option",{value:a},w(r),9,Fe))),256))]),Ne],544),[[T,e.config.video]])])]),s("li",We,[s("label",{onClick:t[3]||(t[3]=a=>e.x("audio")),for:"driveAudio"},[g(o)]),s("div",je,[V(s("select",{id:"driveAudio",onFocus:t[4]||(t[4]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[5]||(t[5]=a=>e.config.audio=a)},[s("optgroup",He,[(l(!0),u(C,null,B(e.audio,([a,r])=>(l(),u("option",{value:a},w(r),9,Me))),256))]),Pe],544),[[T,e.config.audio]])])])])}var qe=h(Be,[["render",Re],["__scopeId","data-v-73daa151"]]),J,Q;({auto_start:J}=f);Q=ce==="win32";var Ge={setup:()=>{var e,t;return localStorage.getItem("sys_audio")===null&&(i.sys_audio=!0),localStorage.getItem("auto_start")===null&&(i.auto_start=!0),t=window.innerWidth,e=window.innerHeight,U(()=>{var o,a,r;a=["sys_audio","auto_start"];for(o of a)r=i[o],localStorage[o]=r;J.auto_start(i.auto_start)}),{config:i,isWin:Q,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const X=e=>(L("data-v-56178e42"),e=e(),z(),e),Ke={class:"bk"},Oe={id:"extra-setting"},Je={key:0,class:"box"},Qe=X(()=>s("label",{for:"sys-audio"},"录制系统声音",-1)),Xe={class:"box"},Ye=X(()=>s("label",{for:"auto-start"},"开机自动启动",-1));function Ze(e,t){return l(),u("div",Ke,[s("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),s("li",Oe,[e.isWin?(l(),u("div",Je,[V(s("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[P,e.config.sys_audio]]),Qe])):re("",!0),s("div",Xe,[V(s("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[P,e.config.auto_start]]),Ye])])])}var et=h(Ge,[["render",Ze],["__scopeId","data-v-56178e42"]]),tt={components:{btn:_e}};const ot=e=>(L("data-v-b0e482fa"),e=e(),z(),e),at=ot(()=>s("b",null,null,-1));function rt(e,t){const o=p("btn");return l(),ie(o,null,{default:G(()=>[at,se(e.$slots,"default",{},void 0,!0)]),_:3})}var it=h(tt,[["render",rt],["__scopeId","data-v-b0e482fa"]]),st={setup:()=>{var e;return e=E('单次最长录制30分钟, "扩容"可获更长时间'),R(async()=>{await le()}),U(()=>{i.duration_txt&&(e.value=i.duration_txt)}),{txt:e,pay:()=>f.open(K+"?pay=true&user_token="+localStorage.uid)}}};function nt(e,t){return l(),u("a",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o))},w(e.txt),1)}var dt=h(st,[["render",nt],["__scopeId","data-v-234a3262"]]),lt=new Proxy(()=>{},{get:(e,t)=>{_paq.push(["trackEvent","点",t])}}),Y;({auto_update:Y}=f);var ut={components:{src:we,rArea:ze,drive:qe,extra:et,btn:it,durationLimit:dt},setup:()=>{var e,t,o;return t="开始录制",e=E(t),o=a=>{e.value=`请授权${a}后点此录制`},{txt:e,start:async()=>{var a,r,n,d,c,v,m,$,k,y;{m=[["audio","麦克风","microphone"],["video","摄像头","camera"]];for(k of m)if([n,r,y]=k,c=i[n],c){try{await oe[n](c)}catch(b){if(d=b,await f.permission(y)){o(r);return}alert(d);return}if(await f.permission(y)){o(r);return}}if(i.src!=="camera")try{await fe()}catch(b){if(d=b,await f.permission("screen")){o("屏幕录制");return}alert(d);return}if(i.area-1===0&&await f.permission("accessibility")){o("辅助功能");return}}localStorage.recing=1,{avatarUrl:a,space:{used:$,max:v}}=await ue.json("user/get"),localStorage.ico=a,$>=v?(e.value="请付费扩容后点此录制",f.open(K+"?pay=true&user_token="+localStorage.uid)):(e.value=t,lt.录,ve())}}}};(async()=>await Y.update_promise())();function ct(e,t){const o=p("src"),a=p("r-area"),r=p("drive"),n=p("extra"),d=p("btn"),c=p("durationLimit");return l(),u(C,null,[g(o),s("main",null,[g(a),g(r),g(n),g(d,{onClick:e.start},{default:G(()=>[ne(w(e.txt),1)]),_:1},8,["onClick"]),g(c)])],64)}var xt=h(ut,[["render",ct],["__scopeId","data-v-7af88096"]]);export{xt as default};
