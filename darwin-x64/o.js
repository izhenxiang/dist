import _ from"./-.js";import{c as r}from"./q.js";import{b as w,g,m as k}from"./3.js";import{v as S}from"./v.js";import{i as v}from"./4.js";import{k as b,G as y}from"./b.js";import"./2.js";import"./l.js";import"./w.js";import"./h.js";import"./t.js";import"./1.js";import"./k.js";function h(){return new Worker("/$!.js",{type:"module"})}var n,s,i,m,t,f,l,u,d,p,a;({camera:m}=v);l=await S();a=l.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new h().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await w();i=s?s.getTracks():[];d=await g(r.sys_audio);u=new MediaStream([a,...k(i,d)]);b(()=>{var e,o,c;e=!!r.audio;for(o of i)o.enabled=e;c=r.sys_audio;for(o of d)o.enabled=c});y(()=>r.video,async()=>{var e;({video:e}=r),e?await m.show(localStorage.face_area_size-0):await m.hide()});_(u,i,f);
