var Z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var W=(e,t,o)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))ee.call(t,o)&&W(e,o,t[o]);if(N)for(var o of N(t))te.call(t,o)&&W(e,o,t[o]);return e};import{c as i}from"./j.js";import{i as S}from"./6.js";import{H as M,o as R,d as l,a as d,F as $,Q as C,m as q,e as s,t as g,p as k,i as I,_ as p,y as oe,L as w,R as L,s as V,k as z,b as v,f,S as P,v as ae,c as re,w as O,j as se,h as ie}from"./d.js";import{z as ne,f as le,u as de}from"./a.js";import{p as ue}from"./1.js";import{b as ce}from"./7.js";import{H as Q}from"./k.js";import{s as _e}from"./l.js";import"./x.js";import"./y.js";import"./3.js";import"./2.js";import"./o.js";var b,G,y;({camera:b,main:G}=S);y=()=>{var e,t;if(gc(),document.hidden){localStorage.recing||b.x();return}switch(delete localStorage.recing,{src:e}=i,b.x(),e){case"screen":i.video="";break;default:if(!i.video){if({video:t}=localStorage,!t)return;i.video=t}e==="all"?b.circle(localStorage.人像尺寸-0):b.rect(),setTimeout(()=>{document.hidden||G(!1)},1e3)}};document.addEventListener("visibilitychange",y);var ve={setup:()=>{var e,t,o,a,r,n;for(a=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],n=t=0,o=a.length;t<o;n=++t)e=a[n],r=e.indexOf(" "),a[n]=[e.slice(0,r),e.slice(1+r)];return M(()=>i.src,y),R(y),M(()=>i.video,u=>{var _;document.hidden||({src:_}=i,u?_==="screen"&&(i.src=localStorage.src||"all"):_!=="screen"&&(localStorage.src=i.src,i.src="screen"),y())}),{li:a,config:i,go:u=>{i.src=u}}}};const fe=e=>(k("data-v-1eb91dd6"),e=e(),I(),e),pe={class:"method"},me=["onClick"],ge=fe(()=>s("b",{class:"ico"},null,-1));function he(e,t){return l(),d("div",pe,[(l(!0),d($,null,C(e.li,([o,a])=>(l(),d("a",{class:q([o,e.config.src==o?"now":""]),onClick:r=>e.go(o)},[ge,s("i",null,g(a),1)],10,me))),256))])}var be=p(ve,[["render",he],["__scopeId","data-v-1eb91dd6"]]),ye={setup:()=>({config:i,disabled:oe(()=>i.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const $e=e=>(k("data-v-cf47a3ec"),e=e(),I(),e),we={class:"bk"},Se=$e(()=>s("h2",null,"录制区域",-1)),ke={class:"select"},Ie=["disabled"],xe=["value"];function Ce(e,t){return l(),d("div",we,[Se,s("div",ke,[w(s("select",{disabled:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.area=o)},[(l(!0),d($,null,C(e.li,(o,a)=>(l(),d("option",{value:a},g(o),9,xe))),256))],8,Ie),[[L,e.config.area]])])])}var Ve=p(ye,[["render",Ce],["__scopeId","data-v-cf47a3ec"]]),Le={components:{zAudio:ne},setup:()=>{var e,t,o;return o={audio:V([]),video:V([])},{mediaDevices:e}=navigator,t=async()=>{var a,r,n,u,_,m,x,E,T,U,D,c,h,A,F,H;x={},T=await e.enumerateDevices();for(A of T)({kind:u,label:m,deviceId:a}=A),a==="default"&&(m=m.replace("Default - ",""),m="默认 "+m),u.endsWith("input")&&(u=u.slice(0,-5),(x[u]=x[u]||[]).push([a,m]));for(n in o)o[n].value=x[n]||[];for(n in o){if({value:h}=o[n],h.length){if(c=i[n],c){for(F of h)if([r]=F,c===r)return}if(c!==""){for(H of h){if([r,_]=H,c)break;if(r==="default"){c=r;break}E=_.toLowerCase(),U=["default","built-in","内建","默认"];for(D of U)if(E.includes(D)){c=r;break}}c||(c=h[0][0])}}else c=0;i[n]=c}},z(()=>{var a,r,n;r=["audio","video"];for(a of r)n=i[a],n&&(localStorage[a]=n)}),(async()=>await t())(),j({refresh:t,config:i,x:a=>{var r;r=i[a],r?r="":r=localStorage[a]||"",i[a]=r}},o)}};const B=e=>(k("data-v-73daa151"),e=e(),I(),e),ze={class:"bk"},Be=B(()=>s("h2",null,"设备设置",-1)),Ee={class:"video"},Te={class:"select"},Ue={label:"输入源"},De=["value"],Ae=B(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1)),Fe={class:"audio"},He={class:"select"},Ne={label:"输入源"},We=["value"],je=B(()=>s("optgroup",{label:"───"},[s("option",{value:""},"禁用")],-1));function Me(e,t){const o=v("z-audio");return l(),d("div",ze,[Be,s("li",Ee,[s("label",{class:q({x:!e.config.video}),onClick:t[0]||(t[0]=a=>e.x("video")),for:"driveVideo"},null,2),s("div",Te,[w(s("select",{id:"driveVideo",onFocus:t[1]||(t[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>e.config.video=a)},[s("optgroup",Ue,[(l(!0),d($,null,C(e.video,([a,r])=>(l(),d("option",{value:a},g(r),9,De))),256))]),Ae],544),[[L,e.config.video]])])]),s("li",Fe,[s("label",{onClick:t[3]||(t[3]=a=>e.x("audio")),for:"driveAudio"},[f(o)]),s("div",He,[w(s("select",{id:"driveAudio",onFocus:t[4]||(t[4]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":t[5]||(t[5]=a=>e.config.audio=a)},[s("optgroup",Ne,[(l(!0),d($,null,C(e.audio,([a,r])=>(l(),d("option",{value:a},g(r),9,We))),256))]),je],544),[[L,e.config.audio]])])])])}var Pe=p(Le,[["render",Me],["__scopeId","data-v-73daa151"]]),J,K;({auto_start:J}=S);K=ue==="win32";var Re={setup:()=>{var e,t;return localStorage.getItem("sys_audio")===null&&(i.sys_audio=!0),localStorage.getItem("auto_start")===null&&(i.auto_start=!0),t=window.innerWidth,e=window.innerHeight,z(()=>{var o,a,r;a=["sys_audio","auto_start"];for(o of a)r=i[o],localStorage[o]=r;J.auto_start(i.auto_start)}),{config:i,isWin:K,toggle:()=>(document.getElementById("extra").classList.toggle("active"),document.getElementById("extra-setting").classList.toggle("active"),document.getElementById("extra").classList.contains("active")?window.resizeTo(t,e+35):window.resizeTo(t,e))}}};const X=e=>(k("data-v-56178e42"),e=e(),I(),e),qe={class:"bk"},Oe={id:"extra-setting"},Qe={key:0,class:"box"},Ge=X(()=>s("label",{for:"sys-audio"},"录制系统声音",-1)),Je={class:"box"},Ke=X(()=>s("label",{for:"auto-start"},"开机自动启动",-1));function Xe(e,t){return l(),d("div",qe,[s("h2",{id:"extra",onClick:t[0]||(t[0]=(...o)=>e.toggle&&e.toggle(...o))},"其他设置"),s("li",Oe,[e.isWin?(l(),d("div",Qe,[w(s("input",{id:"sys-audio",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>e.config.sys_audio=o)},null,512),[[P,e.config.sys_audio]]),Ge])):ae("",!0),s("div",Je,[w(s("input",{id:"auto-start",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>e.config.auto_start=o)},null,512),[[P,e.config.auto_start]]),Ke])])])}var Ye=p(Re,[["render",Xe],["__scopeId","data-v-56178e42"]]),Ze={components:{btn:ce}};const et=e=>(k("data-v-b0e482fa"),e=e(),I(),e),tt=et(()=>s("b",null,null,-1));function ot(e,t){const o=v("btn");return l(),re(o,null,{default:O(()=>[tt,se(e.$slots,"default",{},void 0,!0)]),_:3})}var at=p(Ze,[["render",ot],["__scopeId","data-v-b0e482fa"]]),rt={setup:()=>{var e;return e=V('单次最长录制30分钟, "扩容"可获更长时间'),R(async()=>{await le()}),z(()=>{i.duration_txt&&(e.value=i.duration_txt)}),{txt:e,pay:()=>S.open(Q+"?pay=true&user_token="+localStorage.uid)}}};function st(e,t){return l(),d("a",{onClick:t[0]||(t[0]=(...o)=>e.pay&&e.pay(...o))},g(e.txt),1)}var it=p(rt,[["render",st],["__scopeId","data-v-234a3262"]]),nt=new Proxy(()=>{},{get:(e,t)=>{_paq.push(["trackEvent","点",t])}}),Y;({auto_update:Y}=S);var lt={components:{src:be,rArea:Ve,drive:Pe,extra:Ye,btn:at,durationLimit:it},setup:()=>{var e,t;return t="开始录制",e=V(t),{txt:e,start:async()=>{var o,a,r;localStorage.recing=1,{avatarUrl:o,space:{used:r,max:a}}=await de.json("user/get"),localStorage.ico=o,r>=a?(e.value="请付费扩容后点此录制",S.open(Q+"?pay=true&user_token="+localStorage.uid)):(e.value=t,nt.录,_e())}}}};(async()=>await Y.update_promise())();function dt(e,t){const o=v("src"),a=v("r-area"),r=v("drive"),n=v("extra"),u=v("btn"),_=v("durationLimit");return l(),d($,null,[f(o),s("main",null,[f(a),f(r),f(n),f(u,{onClick:e.start},{default:O(()=>[ie(g(e.txt),1)]),_:1},8,["onClick"]),f(_)])],64)}var kt=p(lt,[["render",dt],["__scopeId","data-v-7af88096"]]);export{kt as default};
