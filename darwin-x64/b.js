var ie=Object.defineProperty;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,J=(e,t)=>{for(var o in t||(t={}))se.call(t,o)&&q(e,o,t[o]);if(j)for(var o of j(t))ne.call(t,o)&&q(e,o,t[o]);return e};import{c as r}from"./$0.js";import{i as f}from"./2.js";import{H as Q,o as N,d as c,a as u,F as L,Q as B,m as K,e as s,t as w,p as z,i as E,_ as y,y as le,L as R,S as T,s as U,k as O,b as p,f as h,U as G,v as de,c as ce,w as X,j as ue,h as _e}from"./e.js";import{z as ve}from"./7.js";import{p as fe,m as pe}from"./l.js";import{b as me}from"./3.js";import{a as ge,u as he}from"./.js";import{H as Y}from"./j.js";import{s as ye}from"./$2.js";import{v as be}from"./r.js";import"./q.js";import"./1.js";import"./0.js";import"./k.js";var m=function(e,t){_paq.push(["trackEvent",e,t,"",""])},$e=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},M,I,Z,ee,V;({camera:I,main:Z}=f);M="PreOfRec";V=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||I.x();return}switch(delete localStorage.recing,{src:e}=r,I.x(),e){case"screen":r.video="";break;default:if(!r.video){if({video:t}=localStorage,!t)return;r.video=t}e==="all"?I.circle(localStorage.人像尺寸-0):I.rect(),setTimeout(()=>{document.hidden||Z(!1)},1e3)}};ee=()=>{var e;switch({src:e}=r,e){case"all":m(M,"RecMode.Scr&Cam.Click");break;case"screen":m(M,"RecMode.Scr.Click");break;default:m(M,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",V);var we={setup:()=>{var e,t,o,a,i,n;for(a=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],n=t=0,o=a.length;t<o;n=++t)e=a[n],i=e.indexOf(" "),a[n]=[e.slice(0,i),e.slice(1+i)];return Q(()=>r.src,V),N(V),Q(()=>r.video,l=>{var d;document.hidden||({src:d}=r,l?d==="screen"&&(r.src=localStorage.src||"all"):d!=="screen"&&(localStorage.src=r.src,r.src="screen"),V())}),{li:a,config:r,go:l=>{r.src=l,ee()}}}};const ke=e=>(z("data-v-6b7c1499"),e=e(),E(),e),Ce={class:"method"},Se=["onClick"],Ie=ke(()=>s("b",{class:"ico"},null,-1));function xe(e,t){return c(),u("div",Ce,[(c(!0),u(L,null,B(e.li,([o,a])=>(c(),u("a",{class:K([o,e.config.src==o?"now":""]),onClick:i=>e.go(o)},[Ie,s("i",null,w(a),1)],10,Se))),256))])}var Ve=y(we,[["render",xe],["__scopeId","data-v-6b7c1499"]]),Le={setup:()=>({config:r,disabled:le(()=>r.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const Re=e=>(z("data-v-cf47a3ec"),e=e(),E(),e),ze={class:"bk"},Ee=Re(()=>s("h2",null,"录制区域",-1)),Me={class:"select"},Be=["disabled"],Ue=["value"];function Te(e,t){return c(),u("div",ze,[Ee,s("div",Me,[R(s("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(c(!0),u(L,null,B(e.li,(o,a)=>(c(),u("option",{value:a},w(o),9,Ue))),256))],8,Be),[[T,e.config.area]])])])}var De=y(Le,[["render",Te],["__scopeId","data-v-cf47a3ec"]]),x;x="PreOfRec";var Ne={components:{zAudio:ve},setup:()=>{var e,t,o,a;return a={audio:U([]),video:U([])},{mediaDevices:e}=navigator,o=i=>{i==="audio"?r[i]?m(x,"MikeSwitch.Click"):m(x,"MikeClose.Click"):r[i]?m(x,"CamSwitch.Click"):m(x,"CamClose.Click")},t=async()=>{var i,n,l,d,k,v,g,C,b,$,A,_,S,F,H,W;g={},b=await e.enumerateDevices();for(F of b)({kind:d,label:v,deviceId:i}=F),i==="default"&&(v=v.replace("Default - ",""),v="默认 "+v),d.endsWith("input")&&(d=d.slice(0,-5),(g[d]=g[d]||[]).push([i,v]));for(l in a)a[l].value=g[l]||[];for(l in a){if({value:S}=a[l],S.length){if(_=r[l],_){for(H of S)if([n]=H,_===n)return}if(_!==""){for(W of S){if([n,k]=W,_)break;if(n==="default"){_=n;break}C=k.toLowerCase(),$=["default","built-in","内建","默认"];for(A of $)if(C.includes(A)){_=n;break}}_||(_=S[0][0])}}else _=0;r[l]=_}},O(()=>{var i,n,l;n=["audio","video"];for(i of n)l=r[i],l&&(localStorage[i]=l)}),(async()=>await t())(),J({refresh:t,report:o,config:r,x:i=>{var n;n=r[i],n?n="":n=localStorage[i]||"",r[i]=n,o(i)}},a)}};const P=e=>(z("data-v-dcd37b00"),e=e(),E(),e),Oe={class:"bk"},Pe=P(()=>s("h2",null,"设备设置",-1)),Ae={class:"video"},Fe={class:"select"},He={label:"输入源"},We=["value"],je=P(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1)),qe={class:"audio"},Je={class:"select"},Qe={label:"输入源"},Ge=["value"],Ke=P(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1));function Xe(e,t){const o=p("z-audio");return c(),u("div",Oe,[Pe,s("li",Ae,[s("label",{class:K({x:!e.config.video}),onClick:t[0]||(t[0]=a=>e.x("video")),for:"driveVideo"},null,2),s("div",Fe,[R(s("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>e.config.video=a),onChange:t[3]||(t[3]=a=>e.report("video"))},[s("optgroup",He,[(c(!0),u(L,null,B(e.video,([a,i])=>(c(),u("option",{value:a},w(i),9,We))),256))]),je],544),[[T,e.config.video]])])]),s("li",qe,[s("label",{onClick:t[4]||(t[4]=a=>e.x("audio")),for:"driveAudio"},[h(o)]),s("div",Je,[R(s("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[6]||(t[6]=a=>e.config.audio=a),onChange:t[7]||(t[7]=a=>e.report("audio"))},[s("optgroup",Qe,[(c(!0),u(L,null,B(e.audio,([a,i])=>(c(),u("option",{value:a},w(i),9,Ge))),256))]),Ke],544),[[T,e.config.audio]])])])])}var Ye=y(Ne,[["render",Xe],["__scopeId","data-v-dcd37b00"]]),te,oe;({auto_start:te}=f);oe=fe==="win32";var Ze={setup:()=>{var e,t;return localStorage.getItem("sys_audio")===null&&(r.sys_audio=!0),localStorage.getItem("auto_start")===null&&(r.auto_start=!0),t=window.innerWidth,e=window.innerHeight,O(()=>{var o,a,i;a=["sys_audio","auto_start"];for(o of a)i=r[o],localStorage[o]=i;te.auto_start(r.auto_start)}),{config:r,isWin:oe,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const ae=e=>(z("data-v-56178e42"),e=e(),E(),e),et={class:"bk"},tt={id:"extra-setting"},ot={key:0,class:"box"},at=ae(()=>s("label",{for:"sys-audio"},"录制系统声音",-1)),rt={class:"box"},it=ae(()=>s("label",{for:"auto-start"},"开机自动启动",-1));function st(e,t){return c(),u("div",et,[s("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),s("li",tt,[e.isWin?(c(),u("div",ot,[R(s("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[G,e.config.sys_audio]]),at])):de("",!0),s("div",rt,[R(s("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[G,e.config.auto_start]]),it])])])}var nt=y(Ze,[["render",st],["__scopeId","data-v-56178e42"]]),lt={components:{btn:me}};const dt=e=>(z("data-v-b0e482fa"),e=e(),E(),e),ct=dt(()=>s("b",null,null,-1));function ut(e,t){const o=p("btn");return c(),ce(o,null,{default:X(()=>[ct,ue(e.$slots,"default",{},void 0,!0)]),_:3})}var _t=y(lt,[["render",ut],["__scopeId","data-v-b0e482fa"]]),vt={setup:()=>{var e;return e=U('单次最长录制30分钟, "扩容"可获更长时间'),N(async()=>{await ge()}),O(()=>{r.duration_txt&&(e.value=r.duration_txt)}),{txt:e,pay:()=>f.open(Y+"?pay=true&user_token="+localStorage.uid)}}};function ft(e,t){return c(),u("a",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o))},w(e.txt),1)}var pt=y(vt,[["render",ft],["__scopeId","data-v-234a3262"]]),D,re;({auto_update:re}=f);D="PreOfRec";var mt={components:{src:Ve,rArea:De,drive:Ye,extra:nt,btn:_t,durationLimit:pt},setup:()=>{var e,t,o;return t="开始录制",e=U(t),o=a=>{e.value=`请授权${a}后点此录制`},N(()=>{m(D,"RecPop.View")}),{txt:e,start:async()=>{var a,i,n,l,d,k,v,g,C,b;{v=[["audio","麦克风","microphone"],["video","摄像头","camera"]];for(C of v)if([n,i,b]=C,d=r[n],d){try{await pe[n](d)}catch($){if(l=$,await f.permission(b)){o(i);return}alert(l);return}if(await f.permission(b)){o(i);return}}if(r.src!=="camera")try{await be()}catch($){if(l=$,await f.permission("screen")){o("屏幕录制");return}alert(l);return}if(r.area-1===0&&await f.permission("accessibility")){o("辅助功能");return}}localStorage.recing=1,{avatarUrl:a,space:{used:g,max:k}}=await he.json("user/get"),localStorage.ico=a,g>=k?(e.value="请付费扩容后点此录制",f.open(Y+"?pay=true&user_token="+localStorage.uid)):(e.value=t,$e(D,"RecStart.Click",JSON.stringify({src:r.src,area:r.area,audio:!!r.audio,video:!!r.video})),ye())}}}};(async()=>await re.update_promise())();function gt(e,t){const o=p("src"),a=p("r-area"),i=p("drive"),n=p("extra"),l=p("btn"),d=p("durationLimit");return c(),u(L,null,[h(o),s("main",null,[h(a),h(i),h(n),h(l,{onClick:e.start},{default:X(()=>[_e(w(e.txt),1)]),_:1},8,["onClick"]),h(d)])],64)}var Mt=y(mt,[["render",gt],["__scopeId","data-v-f2014a82"]]);export{Mt as default};
