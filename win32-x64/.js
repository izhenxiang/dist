import u from"./$-.js";import{c as e}from"./9.js";import{b as w,g,m as k}from"./a.js";import{v as S}from"./t.js";import{i as _}from"./5.js";import{k as v,H as b}from"./d.js";import"./2.js";import"./-.js";import"./i.js";import"./r.js";import"./1.js";import"./l.js";import"./0.js";function y(){return new Worker("/$!.js",{type:"module"})}var p,i,o,m,t,f,n,l,s,d,a;({camera:m}=_);n=await S();a=n.getVideoTracks()[0];({area:p}=e);p&&(d=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[d.readable,a.writable],f=()=>{new y().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";i=await w();o=i?i.getTracks():[];i&&e.sys_audio&&(s=await g(),s&&(o=k(o,s)));l=new MediaStream([a,...o]);v(()=>{var r,c;r=!!e.audio;for(c of o)c.enabled=r});b(()=>e.video,async()=>{var r;({video:r}=e),r?await m.circle(localStorage.人像尺寸-0):await m.x()});u(l,f);
