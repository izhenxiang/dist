import w from"./a.js";import{c as r}from"./q.js";import{b as _,g,m as k}from"./$2.js";import{v as S}from"./$$.js";import{i as v}from"./1.js";import{k as y,I as b}from"./g.js";import"./..js";import"./9.js";import"./f.js";import"./s.js";import"./n.js";import"./-.js";import"./x.js";function M(){return new Worker("/k.js",{type:"module"})}var n,s,i,d,t,f,l,u,m,p,a;({camera:d}=v);l=await S();a=l.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new M().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await _();i=s?s.getTracks():[];m=await g(r.sys_audio);u=new MediaStream([a,...k(i,m)]);y(()=>{var e,o,c;e=!!r.audio;for(o of i)o.enabled=e;c=r.sys_audio;for(o of m)o.enabled=c});b(()=>r.video,async()=>{var e;({video:e}=r),e?await d.circle(localStorage.人像尺寸-0):await d.x()});w(u,i,f);
