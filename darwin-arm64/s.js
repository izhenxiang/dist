import w from"./c.js";import{c as r}from"./q.js";import{b as _,g as k,m as g}from"./5.js";import{v}from"./u.js";import{i as S}from"./..js";import{k as b,G as y}from"./7.js";import"./$.js";import"./o.js";import"./$0.js";import"./h.js";import"./f.js";import"./.js";import"./l.js";function h(){return new Worker("/$!.js",{type:"module"})}var n,s,i,m,t,f,u,l,d,p,a;({camera:m}=S);u=await v();a=u.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new h().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await _();i=s?s.getTracks():[];d=await k(r.sys_audio);l=new MediaStream([a,...g(i,d)]);b(()=>{var e,o,c;e=!!r.audio;for(o of i)o.enabled=e;c=r.sys_audio;for(o of d)o.enabled=c});y(()=>r.video,async()=>{var e;({video:e}=r),e?await m.show():await m.hide()});w(l,i,f);
