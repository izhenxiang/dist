import{x as m}from"./6.js";import{i as _}from"./1.js";import{b as v}from"./_.js";import{s as c,a as r,f as l,e as t,t as p,F as b,x as f,w as x,b as u,d as o,m as g,h,_ as w}from"./i.js";var k="/..webp",C="/.webp",I="/-.webp",y="/0.webp",B="/$.webp",i;({guide:i}=_);var N={components:{x:m,btn:v},setup:()=>{var e,a,n,s;return a=c(0),e=c("下一页"),s=[k,C,I,y],n=["自由选择“屏幕+人像”，可选“区域”和“清晰度”，点击开始录制，3秒开启高清录制；","人像位置可拖动，大小可变化，随时开关摄像头、美颜和背景虚化，大幅提升讲述效果；","实时上传云端，跟意外中断说再见；画笔、画框、箭头、文字、轨迹等小工具，随时指出重点；","实时播放、在线剪辑，一切尽在云端，自定义介绍、大纲、文稿、外链为视频增彩，一键复制链接，扫码即可分享；"],s.push(B),n.push("软件运行需要授权，请打开“系统偏好设置”，点击“安全性与隐私”，在“隐私”标签中的“摄像头”、“麦克风”、“屏幕录制”和“辅助功能”选项中勾选帧想，退出并重新打开软件后，即可进行录制。"),{curIdx:a,pics:s,btn_txt:e,descriptions:n,x:()=>i.x(),next:()=>{if(a.value>=s.length-1){i.x();return}a.value=a.value+1,a.value===s.length-1&&(e.value="立即体验")}}}};const V=["src"],F={class:"description"},z={class:"marker"};function D(e,a){const n=u("x"),s=u("btn");return o(),r("main",null,[l(n,{onClick:e.x},null,8,["onClick"]),t("img",{class:"img",src:e.pics[e.curIdx]},null,8,V),t("span",F,p(e.descriptions[e.curIdx]),1),t("span",z,[(o(!0),r(b,null,f(e.pics,(E,d)=>(o(),r("label",{class:g({now:e.curIdx==d})},null,2))),256))]),l(s,{class:"btn",onClick:e.next},{default:x(()=>[h(p(e.btn_txt),1)]),_:1},8,["onClick"])])}var $=w(N,[["render",D],["__scopeId","data-v-71b4ae36"]]);export{$ as default};
