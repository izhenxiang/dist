import _ from"./-.js";import{c as r}from"./u.js";import{b as w,g,m as k}from"./o.js";import{v as S}from"./v.js";import{i as v}from"./2.js";import{k as b,G as y}from"./a.js";import"./1.js";import"./l.js";import"./q.js";import"./h.js";import"./4.js";import"./0.js";import"./k.js";function M(){return new Worker("/z.js",{type:"module"})}var n,s,i,m,t,f,l,u,c,p,a;({camera:m}=v);l=await S();a=l.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new M().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await w();i=s?s.getTracks():[];c=await g(r.sys_audio);u=new MediaStream([a,...k(i,c)]);b(()=>{var e,o,d;e=!!r.audio;for(o of i)o.enabled=e;d=r.sys_audio;for(o of c)o.enabled=d});y(()=>r.video,async()=>{var e;({video:e}=r),e?await m.circle(localStorage.face_area_size-0):await m.x()});_(u,i,f);
