import _ from"./l.js";import{c as r}from"./g.js";import{b as w,g,m as k}from"./-.js";import{v as S}from"./t.js";import{i as v}from"./1.js";import{k as y,H as b}from"./a.js";import"./..js";import"./6.js";import"./3.js";import"./i.js";import"./$$.js";import"./$.js";import"./n.js";function M(){return new Worker("/b.js",{type:"module"})}var n,s,i,d,t,f,l,u,m,p,a;({camera:d}=v);l=await S();a=l.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new M().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await w();i=s?s.getTracks():[];m=await g(r.sys_audio);u=new MediaStream([a,...k(i,m)]);y(()=>{var e,o,c;e=!!r.audio;for(o of i)o.enabled=e;c=r.sys_audio;for(o of m)o.enabled=c});b(()=>r.video,async()=>{var e;({video:e}=r),e?await d.circle(localStorage.face_area_size-0):await d.x()});_(u,i,f);
