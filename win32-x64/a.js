var de=Object.defineProperty;var G=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var K=(e,t,o)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Q=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&K(e,o,t[o]);if(G)for(var o of G(t))ue.call(t,o)&&K(e,o,t[o]);return e};import{c as a}from"./e.js";import{i as I}from"./0.js";import{H as X,o as U,d,a as u,N as S,R,m as Z,e as s,t as h,p as L,i as V,_ as b,z as _e,L as C,S as M,s as x,k as N,b as f,f as g,U as Y,x as ve,c as fe,w as ee,j as pe,h as T}from"./_.js";import{z as me}from"./v.js";import{p as ge}from"./6.js";import{b as he}from"./8.js";import{a as te,u as be}from"./$0.js";import{H as oe}from"./i.js";import{s as ye}from"./z.js";import"./t.js";import"./2.js";import"./..js";import"./-.js";import"./l.js";var m=function(e,t){_paq.push(["trackEvent",e,t,"",""])},$e=function(e,t,o){_paq.push(["trackEvent",e,t,"","",o])},E,D,p,ae,re,$;({camera:p,main:ae}=I);E="PreOfRec";$=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||p.x();return}switch(delete localStorage.recing,{src:e}=a,p.x(),e){case"screen":a.video="";break;default:if(!a.video){if({video:t}=localStorage,!t){a.src="screen";return}a.video=t}e==="all"?(p.circle(localStorage.face_area_size-0),p.top_once()):(p.rect(),p.top_once()),setTimeout(()=>{document.hidden||ae(!1)},1e3)}};re=()=>{var e;switch({src:e}=a,e){case"all":m(E,"RecMode.Scr&Cam.Click");break;case"screen":m(E,"RecMode.Scr.Click");break;default:m(E,"RecMode.Cam.Click")}};document.addEventListener("visibilitychange",()=>{if($(),!navigator.onLine)return D()});D=()=>{gc(),localStorage.recing||p.x()};window.addEventListener("online",()=>{$()});window.addEventListener("offline",()=>{D()});var ke={setup:()=>{var e,t,o,r,i,l;for(r=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],l=t=0,o=r.length;t<o;l=++t)e=r[l],i=e.indexOf(" "),r[l]=[e.slice(0,i),e.slice(1+i)];return X(()=>a.src,$),U($),X(()=>a.video,n=>{var c;document.hidden||({src:c}=a,n?c==="screen"&&(a.src=localStorage.src||"all"):c!=="screen"&&(localStorage.src=a.src,a.src="screen"),$())}),{li:r,config:a,go:n=>{a.src=n,re()}}}};const we=e=>(L("data-v-064c212e"),e=e(),V(),e),Se={class:"method"},Ce=["onClick"],xe=we(()=>s("b",{class:"ico"},null,-1));function Ie(e,t){return d(),u("div",Se,[(d(!0),u(S,null,R(e.li,([o,r])=>(d(),u("a",{class:Z([o,e.config.src==o?"now":"",e.config.no_video_src==!0?"forbidden":""]),onClick:i=>e.go(o)},[xe,s("i",null,h(r),1)],10,Ce))),256))])}var Le=b(ke,[["render",Ie],["__scopeId","data-v-064c212e"]]),Ve={setup:()=>({config:a,disabled:_e(()=>a.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const ze=e=>(L("data-v-cf47a3ec"),e=e(),V(),e),Ee={class:"bk"},Re=ze(()=>s("h2",null,"录制区域",-1)),Me={class:"select"},Be=["disabled"],Ue=["value"];function Ne(e,t){return d(),u("div",Ee,[Re,s("div",Me,[C(s("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(d(!0),u(S,null,R(e.li,(o,r)=>(d(),u("option",{value:r},h(o),9,Ue))),256))],8,Be),[[M,e.config.area]])])])}var Te=b(Ve,[["render",Ne],["__scopeId","data-v-cf47a3ec"]]),w;w="PreOfRec";var De={components:{zAudio:me},setup:()=>{var e,t,o,r;return r={audio:x([]),video:x([])},{mediaDevices:e}=navigator,o=i=>{i==="audio"?a[i]?m(w,"MikeSwitch.Click"):m(w,"MikeClose.Click"):a[i]?m(w,"CamSwitch.Click"):m(w,"CamClose.Click")},t=async()=>{var i,l,n,c,P,y,z,A,H,W,j,_,v,k,F,q,J;z={},v={audio:{exist:!1,default_id:""},video:{exist:!1,default_id:""}},H=await e.enumerateDevices();for(F of H)({kind:c,label:y,deviceId:i}=F),i==="default"&&(y=y.replace("Default - ",""),y="默认 "+y),c.endsWith("input")&&(c=c.slice(0,-5),(z[c]=z[c]||[]).push([i,y]),localStorage[c]===i&&(v[c].exist=!0),(v[c].default_id===""||i==="default")&&(v[c].default_id=i));for(n in r)r[n].value=z[n]||[];for(n in r){if({value:k}=r[n],k.length){if(_=a[n],_){for(q of k)if([l]=q,_===l)return}if(_!==""){for(J of k){if([l,P]=J,_)break;if(l==="default"){_=l;break}A=P.toLowerCase(),W=["default","built-in","内建","默认"];for(j of W)if(A.includes(j)){_=l;break}}_||(_=k[0][0])}}else _="";a[n]=_}for(n in v)v[n].exist||(localStorage.removeItem(n),a[n]?localStorage[n]=a[n]:v[n].default_id!==""&&(localStorage[n]=v[n].default_id));a.no_video_src=!localStorage.video},N(()=>{var i,l,n;l=["audio","video"];for(i of l)n=a[i],n&&(localStorage[i]=n)}),(async()=>await t())(),Q({refresh:t,report:o,config:a,x:i=>{var l;l=a[i],l?l="":l=localStorage[i]||"",a[i]=l,o(i)}},r)}};const O=e=>(L("data-v-588cc943"),e=e(),V(),e),Oe={class:"bk"},Pe=O(()=>s("h2",null,"设备设置",-1)),Ae={class:"video"},He={class:"select"},We={label:"输入源"},je=["value"],Fe=O(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1)),qe={class:"audio"},Je={class:"select"},Ge={label:"输入源"},Ke=["value"],Qe=O(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1));function Xe(e,t){const o=f("z-audio");return d(),u("div",Oe,[Pe,s("li",Ae,[s("label",{class:Z({x:!e.config.video}),onClick:t[0]||(t[0]=r=>e.x("video")),for:"driveVideo"},null,2),s("div",He,[C(s("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...r)=>e.refresh&&e.refresh(...r)),"onUpdate:modelValue":t[2]||(t[2]=r=>e.config.video=r),onChange:t[3]||(t[3]=r=>e.report("video"))},[s("optgroup",We,[(d(!0),u(S,null,R(e.video,([r,i])=>(d(),u("option",{value:r},h(i),9,je))),256))]),Fe],544),[[M,e.config.video]])])]),s("li",qe,[s("label",{onClick:t[4]||(t[4]=r=>e.x("audio")),for:"driveAudio"},[g(o)]),s("div",Je,[C(s("select",{id:"driveAudio",onFocus:t[5]||(t[5]=(...r)=>e.refresh&&e.refresh(...r)),"onUpdate:modelValue":t[6]||(t[6]=r=>e.config.audio=r),onChange:t[7]||(t[7]=r=>e.report("audio"))},[s("optgroup",Ge,[(d(!0),u(S,null,R(e.audio,([r,i])=>(d(),u("option",{value:r},h(i),9,Ke))),256))]),Qe],544),[[M,e.config.audio]])])])])}var Ye=b(De,[["render",Xe],["__scopeId","data-v-588cc943"]]),ie,se;({auto_start:ie}=I);se=ge==="win32";var Ze={setup:()=>{var e,t;return a.sys_audio===void 0&&(a.sys_audio=!0),a.auto_start===void 0&&(a.auto_start=!0),t=window.innerWidth,e=window.innerHeight,N(()=>{var o,r,i;r=["sys_audio","auto_start"];for(o of r)i=a[o],localStorage[o]=i;ie.auto_start(a.auto_start)}),{config:a,isWin:se,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const ne=e=>(L("data-v-4ebae813"),e=e(),V(),e),et={class:"bk"},tt={id:"extra-setting"},ot={key:0,class:"box"},at=ne(()=>s("label",{for:"sys-audio"},"录制系统声音",-1)),rt={class:"box"},it=ne(()=>s("label",{for:"auto-start"},"开机自动启动",-1));function st(e,t){return d(),u("div",et,[s("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),s("li",tt,[e.isWin?(d(),u("div",ot,[C(s("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[Y,e.config.sys_audio]]),at])):ve("",!0),s("div",rt,[C(s("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[Y,e.config.auto_start]]),it])])])}var nt=b(Ze,[["render",st],["__scopeId","data-v-4ebae813"]]),lt={components:{btn:he}};const dt=e=>(L("data-v-b0e482fa"),e=e(),V(),e),ct=dt(()=>s("b",null,null,-1));function ut(e,t){const o=f("btn");return d(),fe(o,null,{default:ee(()=>[ct,pe(e.$slots,"default",{},void 0,!0)]),_:3})}var _t=b(lt,[["render",ut],["__scopeId","data-v-b0e482fa"]]),vt={setup:()=>{var e,t;return e=x("单次最长录制10分钟"),t=x(!1),U(async()=>{await te()}),N(()=>{a.duration_txt&&(e.value=a.duration_txt),a.vipLevel===2?t.value=!0:t.value=!1}),{txt:e,vip_max:t,pay:()=>I.open(oe+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(a.vipLevel+1))}}};const ft={key:0},pt={key:1},mt=T("可获更长时间");function gt(e,t){return e.vip_max?(d(),u("span",ft,"单次最长录制"+h(e.txt),1)):(d(),u("span",pt,[T("单次最长录制"+h(e.txt)+", ",1),s("span",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o)),class:"pay"},'"升级会员"'),mt]))}var ht=b(vt,[["render",gt],["__scopeId","data-v-6b109ad2"]]),B,le;({auto_update:le}=I);B="PreOfRec";var bt={components:{src:Le,rArea:Te,drive:Ye,extra:nt,btn:_t,durationLimit:ht},setup:()=>{var e,t;return t="开始录制",e=x(t),U(()=>{m(B,"RecPop.View")}),{txt:e,start:async()=>{var o,r,i;localStorage.recing=1,{avatarUrl:o,space:{used:i,max:r}}=await be.json("user/get"),await te(),localStorage.ico=o,i>=r?(e.value="请升级会员后点此录制",I.open(oe+"vip_details.html?pay=true&user_token="+localStorage.uid+"&vip="+(a.vipLevel+1))):(e.value=t,$e(B,"RecStart.Click",JSON.stringify({src:a.src,area:a.area,audio:!!a.audio,video:!!a.video})),ye())}}}};(async()=>await le.update_promise())();function yt(e,t){const o=f("src"),r=f("r-area"),i=f("drive"),l=f("extra"),n=f("btn"),c=f("durationLimit");return d(),u(S,null,[g(o),s("main",null,[g(r),g(i),g(l),g(n,{onClick:e.start},{default:ee(()=>[T(h(e.txt),1)]),_:1},8,["onClick"]),g(c)])],64)}var Nt=b(bt,[["render",yt],["__scopeId","data-v-2bc78289"]]);export{Nt as default};
