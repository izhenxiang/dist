var R=Object.defineProperty;var D=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,B=(e,r)=>{for(var t in r||(r={}))q.call(r,t)&&A(e,t,r[t]);if(D)for(var t of D(r))G.call(r,t)&&A(e,t,r[t]);return e};import{c as s,m as K}from"./$$.js";import{i as v}from"./3.js";import{G as E,o as W,d as l,a as u,F as S,P as C,m as T,e as n,t as k,p as V,i as j,_ as I,v as J,K as x,R as F,s as U,k as Q,b as g,f as w,c as X,w as H,j as Y,h as Z}from"./b.js";import{z as ee}from"./v.js";import{b as re}from"./$..js";import{s as ae}from"./$-.js";import{v as te}from"./2.js";import{H as N}from"./g.js";import"./1.js";import"./..js";import"./-.js";import"./j.js";var $,P,y;({camera:$,main:P}=v);y=()=>{var e,r;if(gc(),document.hidden){localStorage.recing||$.x();return}switch(delete localStorage.recing,{src:e}=s,$.x(),e){case"screen":s.video="";break;default:if(!s.video){if({video:r}=localStorage,!r)return;s.video=r}e==="all"?$.circle(localStorage.人像尺寸-0):$.rect(),setTimeout(()=>{document.hidden||P(!1)},1e3)}};document.addEventListener("visibilitychange",y);var oe={setup:()=>{var e,r,t,a,o,i;for(a=["all 屏幕+摄像头录制","screen 屏幕录制","camera 摄像头录制"],i=r=0,t=a.length;r<t;i=++r)e=a[i],o=e.indexOf(" "),a[i]=[e.slice(0,o),e.slice(1+o)];return E(()=>s.src,y),W(y),E(()=>s.video,d=>{var c;document.hidden||({src:c}=s,d?c==="screen"&&(s.src=localStorage.src||"all"):c!=="screen"&&(localStorage.src=s.src,s.src="screen"),y())}),{li:a,config:s,go:d=>{s.src=d}}}};const se=e=>(V("data-v-1eb91dd6"),e=e(),j(),e),ie={class:"method"},ne=["onClick"],de=se(()=>n("b",{class:"ico"},null,-1));function le(e,r){return l(),u("div",ie,[(l(!0),u(S,null,C(e.li,([t,a])=>(l(),u("a",{class:T([t,e.config.src==t?"now":""]),onClick:o=>e.go(t)},[de,n("i",null,k(a),1)],10,ne))),256))])}var ce=I(oe,[["render",le],["__scopeId","data-v-1eb91dd6"]]),ue={setup:()=>({config:s,disabled:J(()=>s.src==="camera"),li:"整个桌面 应用窗口 指定区域".split(" ")})};const _e=e=>(V("data-v-cf47a3ec"),e=e(),j(),e),ve={class:"bk"},fe=_e(()=>n("h2",null,"录制区域",-1)),pe={class:"select"},me=["disabled"],he=["value"];function ge(e,r){return l(),u("div",ve,[fe,n("div",pe,[x(n("select",{disabled:e.disabled,"onUpdate:modelValue":r[0]||(r[0]=t=>e.config.area=t)},[(l(!0),u(S,null,C(e.li,(t,a)=>(l(),u("option",{value:a},k(t),9,he))),256))],8,me),[[F,e.config.area]])])])}var be=I(ue,[["render",ge],["__scopeId","data-v-cf47a3ec"]]),we={components:{zAudio:ee},setup:()=>{var e,r,t;return t={audio:U([]),video:U([])},{mediaDevices:e}=navigator,r=async()=>{var a,o,i,d,c,f,b,_,p,m,h;f={},b=await e.enumerateDevices();for(m of b)({kind:d,label:c,deviceId:a}=m),a==="default"&&(c=c.replace("Default - ","默认 ")),d.endsWith("input")&&(d=d.slice(0,-5),(f[d]=f[d]||[]).push([a,c]));for(i in t)t[i].value=f[i]||[];for(i in t){if({value:p}=t[i],p.length){if(_=s[i],_){for(h of p)if([o]=h,_===o)return}_!==""&&(_=p[0][0])}else _=0;s[i]=_}},Q(()=>{var a,o,i;o=["audio","video"];for(a of o)i=s[a],i&&(localStorage[a]=i)}),(async()=>await r())(),B({refresh:r,config:s,x:a=>{var o;o=s[a],o?o="":o=localStorage[a]||"",s[a]=o}},t)}};const z=e=>(V("data-v-91eb65b6"),e=e(),j(),e),$e={class:"bk"},ye=z(()=>n("h2",null,"设备设置",-1)),Se={class:"video"},ke={class:"select"},Ie={label:"输入源"},Ce=["value"],Ve=z(()=>n("optgroup",{label:"───"},[n("option",{value:""},"禁用")],-1)),je={class:"audio"},xe={class:"select"},Fe={label:"输入源"},Ue=["value"],ze=z(()=>n("optgroup",{label:"───"},[n("option",{value:""},"禁用")],-1));function De(e,r){const t=g("z-audio");return l(),u("div",$e,[ye,n("li",Se,[n("label",{class:T({x:!e.config.video}),onClick:r[0]||(r[0]=a=>e.x("video")),for:"driveVideo"},null,2),n("div",ke,[x(n("select",{id:"driveVideo",onFocus:r[1]||(r[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":r[2]||(r[2]=a=>e.config.video=a)},[n("optgroup",Ie,[(l(!0),u(S,null,C(e.video,([a,o])=>(l(),u("option",{value:a},k(o),9,Ce))),256))]),Ve],544),[[F,e.config.video]])])]),n("li",je,[n("label",{onClick:r[3]||(r[3]=a=>e.x("audio")),for:"driveAudio"},[w(t)]),n("div",xe,[x(n("select",{id:"driveAudio",onFocus:r[4]||(r[4]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":r[5]||(r[5]=a=>e.config.audio=a)},[n("optgroup",Fe,[(l(!0),u(S,null,C(e.audio,([a,o])=>(l(),u("option",{value:a},k(o),9,Ue))),256))]),ze],544),[[F,e.config.audio]])])])])}var Ae=I(we,[["render",De],["__scopeId","data-v-91eb65b6"]]),Be={components:{btn:re}};const Ee=e=>(V("data-v-b0e482fa"),e=e(),j(),e),Te=Ee(()=>n("b",null,null,-1));function He(e,r){const t=g("btn");return l(),X(t,null,{default:H(()=>[Te,Y(e.$slots,"default",{},void 0,!0)]),_:3})}var Ne=I(Be,[["render",He],["__scopeId","data-v-b0e482fa"]]);var L,M;M=()=>{var e;return e=new Headers,e.append("user_token",localStorage.uid),e};L=class{constructor(r){this.json=this.json.bind(this),this.ipc=r}async fetch(r,t={}){var a;if(t.headers=M(),r.indexOf(".do")<0&&(r+=".do"),a=await fetch(N+r,t),a.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return a}async json(r,t={}){var a;return a=await this.fetch(r,t),a.json()}};var Pe=e=>new L(e);var Le=Pe(v),Me=new Proxy(()=>{},{get:(e,r)=>{_paq.push(["trackEvent","点",r])}}),O;({auto_update:O}=v);var Oe={components:{src:ce,rArea:be,drive:Ae,btn:Ne},setup:()=>{var e,r,t;return r="开始录制",e=U(r),t=a=>{e.value=`请授权${a}后点此录制`},{txt:e,start:async()=>{var a,o,i,d,c,f,b,_,p,m;{b=[["audio","麦克风","microphone"],["video","摄像头","camera"]];for(p of b)if([i,o,m]=p,c=s[i],c){try{await K[i](c)}catch(h){if(d=h,await v.permission(m)){t(o);return}alert(d);return}if(await v.permission(m)){t(o);return}}if(s.src!=="camera")try{await te()}catch(h){if(d=h,await v.permission("screen")){t("录屏");return}alert(d);return}if(s.area-1===0&&await v.permission("accessibility")){t("辅助功能");return}}localStorage.recing=1,{avatarUrl:a,space:{used:_,max:f}}=await Le.json("user/get"),localStorage.ico=a,_>=f?(e.value="请付费扩容后点此录制",v.open(N+"?pay=true&user_token="+localStorage.uid)):(e.value=r,Me.录,ae())}}}};(async()=>await O.update_promise())();function Re(e,r){const t=g("src"),a=g("r-area"),o=g("drive"),i=g("btn");return l(),u(S,null,[w(t),n("main",null,[w(a),w(o),w(i,{onClick:e.start},{default:H(()=>[Z(k(e.txt),1)]),_:1},8,["onClick"])])],64)}var sr=I(Oe,[["render",Re],["__scopeId","data-v-734c024f"]]);export{sr as default};
