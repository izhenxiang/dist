import w from"./l.js";import{c as r}from"./6.js";import{b as _,g,m as k}from"./i.js";import{v as S}from"./t.js";import{i as v}from"./3.js";import{k as b,G as y}from"./b.js";import"./1.js";import"./.js";import"./-.js";import"./$.js";import"./v.js";import"./0.js";import"./o.js";function M(){return new Worker("/$!.js",{type:"module"})}var n,s,i,m,t,f,l,u,c,p,a;({camera:m}=v);l=await S();a=l.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new M().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await _();i=s?s.getTracks():[];c=await g(r.sys_audio);u=new MediaStream([a,...k(i,c)]);b(()=>{var e,o,d;e=!!r.audio;for(o of i)o.enabled=e;d=r.sys_audio;for(o of c)o.enabled=d});y(()=>r.video,async()=>{var e;({video:e}=r),e?await m.circle(localStorage.人像尺寸-0):await m.x()});w(u,i,f);
