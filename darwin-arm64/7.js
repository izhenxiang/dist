var se=Object.defineProperty;var q=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Q=(e,t)=>{for(var o in t||(t={}))ne.call(t,o)&&J(e,o,t[o]);if(q)for(var o of q(t))le.call(t,o)&&J(e,o,t[o]);return e};import{c as r}from"./v.js";import{i as v}from"./5.js";import{H as G,o as O,d as c,a as u,F as R,Q as U,m as X,e as n,t as S,p as E,i as M,_ as b,y as de,L as z,S as D,s as T,k as P,b as m,f as y,U as K,v as ce,c as ue,w as Y,j as _e,h as fe}from"./f.js";import{z as ve}from"./..js";import{p as pe,m as me}from"./s.js";import{b as ge}from"./t.js";import{a as he,u as ye}from"./$..js";import{H as Z}from"./k.js";import{s as be}from"./0.js";import{v as $e}from"./y.js";import"./8.js";import"./4.js";import"./2.js";import"./r.js";var g=function(e,t){_paq.push(["trackEvent",e,t,"",""])},we=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},B,x,ee,te,L;({camera:x,main:ee}=v);B="PreOfRec";L=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||x.x();return}switch(delete localStorage.recing,{src:e}=r,x.x(),e){case"screen":r.video="";break;default:if(!r.video){if({video:t}=localStorage,!t){r.src="screen";return}r.video=t}e==="all"?x.circle(localStorage.人像尺寸-0):x.rect(),setTimeout(()=>{document.hidden||ee(!1)},1e3)}};te=()=>{var e;switch({src:e}=r,e){case"all":g(B,"RecMode.Scr&Cam.Click");break;case"screen":g(B,"RecMode.Scr.Click");break;default:g(B,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",L);var Se={setup:()=>{var e,t,o,a,i,l;for(a=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],l=t=0,o=a.length;t<o;l=++t)e=a[l],i=e.indexOf(" "),a[l]=[e.slice(0,i),e.slice(1+i)];return G(()=>r.src,L),O(L),G(()=>r.video,s=>{var d;document.hidden||({src:d}=r,s?d==="screen"&&(r.src=localStorage.src||"all"):d!=="screen"&&(localStorage.src=r.src,r.src="screen"),L())}),{li:a,config:r,go:s=>{r.src=s,te()}}}};const ke=e=>(E("data-v-af4c0d26"),e=e(),M(),e),Ce={class:"method"},Ie=["onClick"],xe=ke(()=>n("b",{class:"ico"},null,-1));function Ve(e,t){return c(),u("div",Ce,[(c(!0),u(R,null,U(e.li,([o,a])=>(c(),u("a",{class:X([o,e.config.src==o?"now":"",e.config.no_video_src==!0?"forbidden":""]),onClick:i=>e.go(o)},[xe,n("i",null,S(a),1)],10,Ie))),256))])}var Le=b(Se,[["render",Ve],["__scopeId","data-v-af4c0d26"]]),Re={setup:()=>({config:r,disabled:de(()=>r.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const ze=e=>(E("data-v-cf47a3ec"),e=e(),M(),e),Ee={class:"bk"},Me=ze(()=>n("h2",null,"录制区域",-1)),Be={class:"select"},Ue=["disabled"],Te=["value"];function De(e,t){return c(),u("div",Ee,[Me,n("div",Be,[z(n("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(c(!0),u(R,null,U(e.li,(o,a)=>(c(),u("option",{value:a},S(o),9,Te))),256))],8,Ue),[[D,e.config.area]])])])}var Ne=b(Re,[["render",De],["__scopeId","data-v-cf47a3ec"]]),V;V="PreOfRec";var Oe={components:{zAudio:ve},setup:()=>{var e,t,o,a;return a={audio:T([]),video:T([])},{mediaDevices:e}=navigator,o=i=>{i==="audio"?r[i]?g(V,"MikeSwitch.Click"):g(V,"MikeClose.Click"):r[i]?g(V,"CamSwitch.Click"):g(V,"CamClose.Click")},t=async()=>{var i,l,s,d,k,f,h,C,$,w,F,_,p,I,H,W,j;h={},p={audio:{exist:!1,default_id:""},video:{exist:!1,default_id:""}},$=await e.enumerateDevices();for(H of $)({kind:d,label:f,deviceId:i}=H),i==="default"&&(f=f.replace("Default - ",""),f="默认 "+f),d.endsWith("input")&&(d=d.slice(0,-5),(h[d]=h[d]||[]).push([i,f]),localStorage[d]===i&&(p[d].exist=!0),(p[d].default_id===""||i==="default")&&(p[d].default_id=i));for(s in a)a[s].value=h[s]||[];for(s in a){if({value:I}=a[s],I.length){if(_=r[s],_){for(W of I)if([l]=W,_===l)return}if(_!==""){for(j of I){if([l,k]=j,_)break;if(l==="default"){_=l;break}C=k.toLowerCase(),w=["default","built-in","内建","默认"];for(F of w)if(C.includes(F)){_=l;break}}_||(_=I[0][0])}}else _="";r[s]=_}for(s in p)p[s].exist||(localStorage.removeItem(s),r[s]?localStorage[s]=r[s]:p[s].default_id!==""&&(localStorage[s]=p[s].default_id));r.no_video_src=!localStorage.video},P(()=>{var i,l,s;l=["audio","video"];for(i of l)s=r[i],s&&(localStorage[i]=s)}),(async()=>await t())(),Q({refresh:t,report:o,config:r,x:i=>{var l;l=r[i],l?l="":l=localStorage[i]||"",r[i]=l,o(i)}},a)}};const A=e=>(E("data-v-8ed2a518"),e=e(),M(),e),Pe={class:"bk"},Ae=A(()=>n("h2",null,"设备设置",-1)),Fe={class:"video"},He={class:"select"},We={label:"输入源"},je=["value"],qe=A(()=>n("optgroup",{label:"───"},[n("option",{value:""},"禁用")],-1)),Je={class:"audio"},Qe={class:"select"},Ge={label:"输入源"},Ke=["value"],Xe=A(()=>n("optgroup",{label:"───"},[n("option",{value:""},"禁用")],-1));function Ye(e,t){const o=m("z-audio");return c(),u("div",Pe,[Ae,n("li",Fe,[n("label",{class:X({x:!e.config.video}),onClick:t[0]||(t[0]=a=>e.x("video")),for:"driveVideo"},null,2),n("div",He,[z(n("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>e.config.video=a),onChange:t[3]||(t[3]=a=>e.report("video"))},[n("optgroup",We,[(c(!0),u(R,null,U(e.video,([a,i])=>(c(),u("option",{value:a},S(i),9,je))),256))]),qe],544),[[D,e.config.video]])])]),n("li",Je,[n("label",{onClick:t[4]||(t[4]=a=>e.x("audio")),for:"driveAudio"},[y(o)]),n("div",Qe,[z(n("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[6]||(t[6]=a=>e.config.audio=a),onChange:t[7]||(t[7]=a=>e.report("audio"))},[n("optgroup",Ge,[(c(!0),u(R,null,U(e.audio,([a,i])=>(c(),u("option",{value:a},S(i),9,Ke))),256))]),Xe],544),[[D,e.config.audio]])])])])}var Ze=b(Oe,[["render",Ye],["__scopeId","data-v-8ed2a518"]]),oe,ae;({auto_start:oe}=v);ae=pe==="win32";var et={setup:()=>{var e,t;return localStorage.getItem("sys_audio")===null&&(r.sys_audio=!0),localStorage.getItem("auto_start")===null&&(r.auto_start=!0),t=window.innerWidth,e=window.innerHeight,P(()=>{var o,a,i;a=["sys_audio","auto_start"];for(o of a)i=r[o],localStorage[o]=i;oe.auto_start(r.auto_start)}),{config:r,isWin:ae,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const re=e=>(E("data-v-56178e42"),e=e(),M(),e),tt={class:"bk"},ot={id:"extra-setting"},at={key:0,class:"box"},rt=re(()=>n("label",{for:"sys-audio"},"录制系统声音",-1)),it={class:"box"},st=re(()=>n("label",{for:"auto-start"},"开机自动启动",-1));function nt(e,t){return c(),u("div",tt,[n("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),n("li",ot,[e.isWin?(c(),u("div",at,[z(n("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[K,e.config.sys_audio]]),rt])):ce("",!0),n("div",it,[z(n("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[K,e.config.auto_start]]),st])])])}var lt=b(et,[["render",nt],["__scopeId","data-v-56178e42"]]),dt={components:{btn:ge}};const ct=e=>(E("data-v-b0e482fa"),e=e(),M(),e),ut=ct(()=>n("b",null,null,-1));function _t(e,t){const o=m("btn");return c(),ue(o,null,{default:Y(()=>[ut,_e(e.$slots,"default",{},void 0,!0)]),_:3})}var ft=b(dt,[["render",_t],["__scopeId","data-v-b0e482fa"]]),vt={setup:()=>{var e;return e=T('单次最长录制30分钟, "扩容"可获更长时间'),O(async()=>{await he()}),P(()=>{r.duration_txt&&(e.value=r.duration_txt)}),{txt:e,pay:()=>v.open(Z+"?pay=true&user_token="+localStorage.uid)}}};function pt(e,t){return c(),u("a",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o))},S(e.txt),1)}var mt=b(vt,[["render",pt],["__scopeId","data-v-234a3262"]]),N,ie;({auto_update:ie}=v);N="PreOfRec";var gt={components:{src:Le,rArea:Ne,drive:Ze,extra:lt,btn:ft,durationLimit:mt},setup:()=>{var e,t,o;return t="开始录制",e=T(t),o=a=>{e.value=`请授权${a}后点此录制`},O(()=>{g(N,"RecPop.View")}),{txt:e,start:async()=>{var a,i,l,s,d,k,f,h,C,$;{f=[["audio","麦克风","microphone"],["video","摄像头","camera"]];for(C of f)if([l,i,$]=C,d=r[l],d){try{await me[l](d)}catch(w){if(s=w,await v.permission($)){o(i);return}alert(s);return}if(await v.permission($)){o(i);return}}if(r.src!=="camera")try{await $e()}catch(w){if(s=w,await v.permission("screen")){o("屏幕录制");return}alert(s);return}if(r.area-1===0&&await v.permission("accessibility")){o("辅助功能");return}}localStorage.recing=1,{avatarUrl:a,space:{used:h,max:k}}=await ye.json("user/get"),localStorage.ico=a,h>=k?(e.value="请付费扩容后点此录制",v.open(Z+"?pay=true&user_token="+localStorage.uid)):(e.value=t,we(N,"RecStart.Click",JSON.stringify({src:r.src,area:r.area,audio:!!r.audio,video:!!r.video})),be())}}}};(async()=>await ie.update_promise())();function ht(e,t){const o=m("src"),a=m("r-area"),i=m("drive"),l=m("extra"),s=m("btn"),d=m("durationLimit");return c(),u(R,null,[y(o),n("main",null,[y(a),y(i),y(l),y(s,{onClick:e.start},{default:Y(()=>[fe(S(e.txt),1)]),_:1},8,["onClick"]),y(d)])],64)}var Bt=b(gt,[["render",ht],["__scopeId","data-v-f2014a82"]]);export{Bt as default};
