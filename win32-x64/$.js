import{c as n}from"./h.js";import{c as t}from"./9.js";import{i as p}from"./3.js";import{s as c,o as i,c as r,b as m,d as a,_ as s}from"./g.js";import"./r.js";import"./w.js";import"./1.js";import"./0.js";import"./y.js";var f={components:{confirm:n},setup:()=>{var o;return o=c(!1),i(()=>{t.vipLevel===2&&(o.value=!0),document.getElementById("pay").onclick=()=>{p.confirm.y()}}),{max:o}}};function _(o,l){const e=m("confirm");return o.max?(a(),r(e,{key:0,h1:'<p class="tip">本次录制已达到上限，您可以继续录制一个新视频，<br>或者咨询客服了解更多</p>',no:"结束录制"})):(a(),r(e,{key:1,h1:'<p class="tip">本次录制已达到上限，您可以继续录制一个新视频，<br>或者<a id="pay">升级会员</a>获得更长录制时间</p>',no:"结束录制",yes:"升级会员"}))}var B=s(f,[["render",_]]);export{B as default};
