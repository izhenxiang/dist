import{c as y}from"./$2.js";import{s as t,c as d,b as g,d as h,_ as k}from"./g.js";import"./3.js";import"./o.js";var x={components:{confirm:y},setup:()=>{var r,n,e,o,a,f,i,s,p,_,m;s=t("错误提示"),i=t("出现了错误"),m=t("确定"),a=t(""),e=function(u,l){var c;if(c=u.filter(v=>v.startsWith("--my_"+l+"=")),c.length===1)return c[0].replace("--my_"+l+"=","")},r=E.argv(),n=[[s,"title"],[i,"tip"],[m,"yes"],[a,"no"]];for(_ of n)[p,f]=_,o=e(r,f),o&&(p.value=o);return{title:s,tip:i,y:m,n:a}}};function B(r,n){const e=g("confirm");return h(),d(e,{h1:r.title,tip:r.tip,yes:r.y,no:r.n},null,8,["h1","tip","yes","no"])}var W=k(x,[["render",B]]);export{W as default};
