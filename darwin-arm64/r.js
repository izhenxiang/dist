import{i as w}from"./3.js";import"./..js";import{b as B}from"./$..js";import{d as I}from"./$!.js";/* empty css        */import{s,o as N,c as z,w as g,n as k,a as H,b as x,d as $,e as p,f as C,g as S,h as M,p as V,i as W,_ as O}from"./b.js";var R={components:{Drag:I,btn:B},setup:()=>{var e,u,n,i,v,a,y,_,t,h,o,r;return{body:e}=document,{clientHeight:n,clientWidth:i}=e,h=s(!0),_=96,a=Math.min(546,n-_),t=Math.min(a*1.57,i-_),o=(i-t)/2,r=(n-a)/2,y={width:`${t}px`,height:`${a}px`,left:`${o}px`,top:`${r}px`},o=s(o),r=s(r),a=s(a),t=s(t),v=s(),{cancel:u}=w.recbar,N(()=>{var l,c;l=v.value.i,(c=new ResizeObserver(m=>{var d,f,b;for(b of m){if({target:{clientHeight:d,clientWidth:f}}=b,f===0){c.unobserve(l);return}t.value=f,a.value=d;break}})).observe(l)}),{drag:v,wait:h,x:o,y:r,w:t,h:a,init:y,start:async()=>{h.value=!1,localStorage.area=JSON.stringify([o.value,r.value,t.value,a.value].map(Math.round)),await w.area()},move:({offsetLeft:l,offsetTop:c},m,d)=>{o.value=l+m,r.value=c+d},cancel:u}}};const D=e=>(V("data-v-3763c68a"),e=e(),W(),e),E={class:"drag"},J=M("开始录制"),T=M("×"),j=D(()=>p("b",null,null,-1)),q=[j];function A(e,u){const n=x("btn"),i=x("drag");return e.wait?($(),z(i,{key:0,minH:95,minW:242,move:e.move,style:k(e.init),ref:"drag"},{default:g(()=>[p("b",E,[p("i",null,[p("nav",null,[C(n,{onClick:S(e.start,["prevent"])},{default:g(()=>[J]),_:1},8,["onClick"]),C(n,{onClick:S(e.cancel,["prevent"])},{default:g(()=>[T]),_:1},8,["onClick"])])])])]),_:1},8,["move","style"])):($(),H("i",{key:1,style:k({width:`${e.w}px`,height:`${e.h}px`,left:`${e.x}px`,top:`${e.y}px`})},q,4))}var U=O(R,[["render",A],["__scopeId","data-v-3763c68a"]]);export{U as default};
