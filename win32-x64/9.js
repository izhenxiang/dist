import{c as a}from"./e.js";import{c as t}from"./6.js";import{s as p,o as i,c as e,b as s,d as n,_ as c}from"./h.js";import"./2.js";import"./$$.js";import"./u.js";import"./0.js";import"./-.js";import"./t.js";var m={components:{confirm:a},setup:()=>{var o;return o=p(),i(()=>{t.duration_txt&&!t.duration_txt.includes("扩容")&&(o.value=!0)}),{max:o}}};function _(o,f){const r=s("confirm");return o.max?(n(),e(r,{key:0,h1:'<p class="tip">本次录制已达到上限，您可以继续录制一个新视频，<br>或者咨询客服了解更多</p>',no:"结束录制"})):(n(),e(r,{key:1,h1:'<p class="tip">本次录制已达到上限，您可以继续录制一个新视频，<br>或者立即扩容获得更长录制时间</p>',no:"结束录制",yes:"立即扩容"}))}var g=c(m,[["render",_]]);export{g as default};
