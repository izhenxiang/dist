var de=Object.defineProperty;var J=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var K=(e,t,o)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Q=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&K(e,o,t[o]);if(J)for(var o of J(t))ue.call(t,o)&&K(e,o,t[o]);return e};import{c as a}from"./-.js";import{i as f}from"./1.js";import{G as X,o as O,d as c,a as u,M as E,Q as T,m as Z,e as n,t as w,p as R,i as B,_ as $,y as _e,K as z,S as D,s as M,k as P,b as m,f as b,U as Y,v as ve,c as fe,w as ee,j as pe,h as A}from"./d.js";import{z as me}from"./o.js";import{p as ge,m as he}from"./l.js";import{b as ye}from"./$$.js";import{a as te,u as be}from"./b.js";import{H as oe}from"./$.js";import{s as we}from"./.js";import{v as $e}from"./w.js";import"./9.js";import"./0.js";import"./..js";import"./k.js";var h=function(e,t){_paq.push(["trackEvent",e,t,"",""])},ke=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},U,W,g,ae,re,C;({camera:g,main:ae}=f);U="PreOfRec";C=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||g.x();return}switch(delete localStorage.recing,{src:e}=a,g.x(),e){case"screen":a.video="";break;default:if(!a.video){if({video:t}=localStorage,!t){a.src="screen";return}a.video=t}e==="all"?(g.circle(localStorage.face_area_size-0),g.top_once()):(g.rect(),g.top_once()),setTimeout(()=>{document.hidden||ae(!1)},1e3)}};re=()=>{var e;switch({src:e}=a,e){case"all":h(U,"RecMode.Scr&Cam.Click");break;case"screen":h(U,"RecMode.Scr.Click");break;default:h(U,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",()=>{if(C(),!navigator.onLine)return W()});W=()=>{gc(),localStorage.recing||g.x()};window.addEventListener("online",()=>{C()});window.addEventListener("offline",()=>{W()});var Se={setup:()=>{var e,t,o,r,i,l;for(r=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],l=t=0,o=r.length;t<o;l=++t)e=r[l],i=e.indexOf(" "),r[l]=[e.slice(0,i),e.slice(1+i)];return X(()=>a.src,C),O(C),X(()=>a.video,s=>{var d;document.hidden||({src:d}=a,s?d==="screen"&&(a.src=localStorage.src||"all"):d!=="screen"&&(localStorage.src=a.src,a.src="screen"),C())}),{li:r,config:a,go:s=>{a.src=s,re()}}}};const Ce=e=>(R("data-v-064c212e"),e=e(),B(),e),xe={class:"method"},Ie=["onClick"],Le=Ce(()=>n("b",{class:"ico"},null,-1));function Ve(e,t){return c(),u("div",xe,[(c(!0),u(E,null,T(e.li,([o,r])=>(c(),u("a",{class:Z([o,e.config.src==o?"now":"",e.config.no_video_src==!0?"forbidden":""]),onClick:i=>e.go(o)},[Le,n("i",null,w(r),1)],10,Ie))),256))])}var Ee=$(Se,[["render",Ve],["__scopeId","data-v-064c212e"]]),ze={setup:()=>({config:a,disabled:_e(()=>a.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const Me=e=>(R("data-v-cf47a3ec"),e=e(),B(),e),Re={class:"bk"},Be=Me(()=>n("h2",null,"录制区域",-1)),Ue={class:"select"},Te=["disabled"],De=["value"];function Ne(e,t){return c(),u("div",Re,[Be,n("div",Ue,[z(n("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(c(!0),u(E,null,T(e.li,(o,r)=>(c(),u("option",{value:r},w(o),9,De))),256))],8,Te),[[D,e.config.area]])])])}var Oe=$(ze,[["render",Ne],["__scopeId","data-v-cf47a3ec"]]),V;V="PreOfRec";var Pe={components:{zAudio:me},setup:()=>{var e,t,o,r;return r={audio:M([]),video:M([])},{mediaDevices:e}=navigator,o=i=>{i==="audio"?a[i]?h(V,"MikeSwitch.Click"):h(V,"MikeClose.Click"):a[i]?h(V,"CamSwitch.Click"):h(V,"CamClose.Click")},t=async()=>{var i,l,s,d,x,v,y,I,k,S,F,_,p,L,H,q,G;y={},p={audio:{exist:!1,default_id:""},video:{exist:!1,default_id:""}},k=await e.enumerateDevices();for(H of k)({kind:d,label:v,deviceId:i}=H),i==="default"&&(v=v.replace("Default - ",""),v="默认 "+v),d.endsWith("input")&&(d=d.slice(0,-5),(y[d]=y[d]||[]).push([i,v]),localStorage[d]===i&&(p[d].exist=!0),(p[d].default_id===""||i==="default")&&(p[d].default_id=i));for(s in r)r[s].value=y[s]||[];for(s in r){if({value:L}=r[s],L.length){if(_=a[s],_){for(q of L)if([l]=q,_===l)return}if(_!==""){for(G of L){if([l,x]=G,_)break;if(l==="default"){_=l;break}I=x.toLowerCase(),S=["default","built-in","内建","默认"];for(F of S)if(I.includes(F)){_=l;break}}_||(_=L[0][0])}}else _="";a[s]=_}for(s in p)p[s].exist||(localStorage.removeItem(s),a[s]?localStorage[s]=a[s]:p[s].default_id!==""&&(localStorage[s]=p[s].default_id));a.no_video_src=!localStorage.video},P(()=>{var i,l,s;l=["audio","video"];for(i of l)s=a[i],s&&(localStorage[i]=s)}),(async()=>await t())(),Q({refresh:t,report:o,config:a,x:i=>{var l;l=a[i],l?l="":l=localStorage[i]||"",a[i]=l,o(i)}},r)}};const j=e=>(R("data-v-588cc943"),e=e(),B(),e),Ae={class:"bk"},We=j(()=>n("h2",null,"设备设置",-1)),je={class:"video"},Fe={class:"select"},He={label:"输入源"},qe=["value"],Ge=j(()=>n("optgroup",{label:"───"},[n("option",{value:""},"禁用")],-1)),Je={class:"audio"},Ke={class:"select"},Qe={label:"输入源"},Xe=["value"],Ye=j(()=>n("optgroup",{label:"───"},[n("option",{value:""},"禁用")],-1));function Ze(e,t){const o=m("z-audio");return c(),u("div",Ae,[We,n("li",je,[n("label",{class:Z({x:!e.config.video}),onClick:t[0]||(t[0]=r=>e.x("video")),for:"driveVideo"},null,2),n("div",Fe,[z(n("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...r)=>e.refresh&&e.refresh(...r)),"onUpdate:modelValue":t[2]||(t[2]=r=>e.config.video=r),onChange:t[3]||(t[3]=r=>e.report("video"))},[n("optgroup",He,[(c(!0),u(E,null,T(e.video,([r,i])=>(c(),u("option",{value:r},w(i),9,qe))),256))]),Ge],544),[[D,e.config.video]])])]),n("li",Je,[n("label",{onClick:t[4]||(t[4]=r=>e.x("audio")),for:"driveAudio"},[b(o)]),n("div",Ke,[z(n("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...r)=>e.refresh&&e.refresh(...r)),"onUpdate:modelValue":t[6]||(t[6]=r=>e.config.audio=r),onChange:t[7]||(t[7]=r=>e.report("audio"))},[n("optgroup",Qe,[(c(!0),u(E,null,T(e.audio,([r,i])=>(c(),u("option",{value:r},w(i),9,Xe))),256))]),Ye],544),[[D,e.config.audio]])])])])}var et=$(Pe,[["render",Ze],["__scopeId","data-v-588cc943"]]),ie,se;({auto_start:ie}=f);se=ge==="win32";var tt={setup:()=>{var e,t;return a.sys_audio===void 0&&(a.sys_audio=!0),a.auto_start===void 0&&(a.auto_start=!0),t=window.innerWidth,e=window.innerHeight,P(()=>{var o,r,i;r=["sys_audio","auto_start"];for(o of r)i=a[o],localStorage[o]=i;ie.auto_start(a.auto_start)}),{config:a,isWin:se,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const ne=e=>(R("data-v-4ebae813"),e=e(),B(),e),ot={class:"bk"},at={id:"extra-setting"},rt={key:0,class:"box"},it=ne(()=>n("label",{for:"sys-audio"},"录制系统声音",-1)),st={class:"box"},nt=ne(()=>n("label",{for:"auto-start"},"开机自动启动",-1));function lt(e,t){return c(),u("div",ot,[n("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),n("li",at,[e.isWin?(c(),u("div",rt,[z(n("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[Y,e.config.sys_audio]]),it])):ve("",!0),n("div",st,[z(n("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[Y,e.config.auto_start]]),nt])])])}var dt=$(tt,[["render",lt],["__scopeId","data-v-4ebae813"]]),ct={components:{btn:ye}};const ut=e=>(R("data-v-b0e482fa"),e=e(),B(),e),_t=ut(()=>n("b",null,null,-1));function vt(e,t){const o=m("btn");return c(),fe(o,null,{default:ee(()=>[_t,pe(e.$slots,"default",{},void 0,!0)]),_:3})}var ft=$(ct,[["render",vt],["__scopeId","data-v-b0e482fa"]]),pt={setup:()=>{var e,t;return e=M("单次最长录制10分钟"),t=M(!1),O(async()=>{await te()}),P(()=>{a.duration_txt&&(e.value=a.duration_txt),a.vipLevel===2?t.value=!0:t.value=!1}),{txt:e,vip_max:t,pay:()=>f.open(oe+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(a.vipLevel+1))}}};const mt={key:0},gt={key:1},ht=A("可获更长时间");function yt(e,t){return e.vip_max?(c(),u("span",mt,"单次最长录制"+w(e.txt),1)):(c(),u("span",gt,[A("单次最长录制"+w(e.txt)+", ",1),n("span",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o)),class:"pay"},'"升级会员"'),ht]))}var bt=$(pt,[["render",yt],["__scopeId","data-v-6b109ad2"]]),N,le;({auto_update:le}=f);N="PreOfRec";var wt={components:{src:Ee,rArea:Oe,drive:et,extra:dt,btn:ft,durationLimit:bt},setup:()=>{var e,t,o;return t="开始录制",e=M(t),o=r=>{e.value=`请授权${r}后点此录制`},O(()=>{h(N,"RecPop.View")}),{txt:e,start:async()=>{var r,i,l,s,d,x,v,y,I,k;{v=[["audio","麦克风","microphone"],["video","摄像头","camera"]];for(I of v)if([l,i,k]=I,d=a[l],d){try{await he[l](d)}catch(S){if(s=S,await f.permission(k)){o(i);return}alert(s);return}if(await f.permission(k)){o(i);return}}if(a.src!=="camera")try{await $e()}catch(S){if(s=S,await f.permission("screen")){o("屏幕录制");return}alert(s);return}if(a.area-1===0&&await f.permission("accessibility")){o("辅助功能");return}}localStorage.recing=1,{avatarUrl:r,space:{used:y,max:x}}=await be.json("user/get"),await te(),localStorage.ico=r,y>=x?(e.value="请升级会员后点此录制",f.open(oe+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(a.vipLevel+1))):(e.value=t,ke(N,"RecStart.Click",JSON.stringify({src:a.src,area:a.area,audio:!!a.audio,video:!!a.video})),we())}}}};(async()=>await le.update_promise())();function $t(e,t){const o=m("src"),r=m("r-area"),i=m("drive"),l=m("extra"),s=m("btn"),d=m("durationLimit");return c(),u(E,null,[b(o),n("main",null,[b(r),b(i),b(l),b(s,{onClick:e.start},{default:ee(()=>[A(w(e.txt),1)]),_:1},8,["onClick"]),b(d)])],64)}var Nt=$(wt,[["render",$t],["__scopeId","data-v-2bc78289"]]);export{Nt as default};
