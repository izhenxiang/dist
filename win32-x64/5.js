import w from"./0.js";import{c as r}from"./$!.js";import{b as _,g as k,m as g}from"./q.js";import{v}from"./x.js";import{i as S}from"./1.js";import{k as y,H as b}from"./c.js";import"./..js";import"./8.js";import"./$0.js";import"./k.js";import"./f.js";import"./$.js";import"./r.js";function h(){return new Worker("/g.js",{type:"module"})}var n,s,i,d,t,f,u,l,m,p,a;({camera:d}=S);u=await v();a=u.getVideoTracks()[0];({area:n}=r);n&&(p=new MediaStreamTrackProcessor({track:a,maxBufferSize:15}),a=new MediaStreamTrackGenerator({kind:"video"}),t=[p.readable,a.writable],f=()=>{new h().postMessage([localStorage.ppi-0,...t,...JSON.parse(localStorage.area)],t)});a.contentHint="detail";s=await _();i=s?s.getTracks():[];m=await k(r.sys_audio);l=new MediaStream([a,...g(i,m)]);y(()=>{var e,o,c;e=!!r.audio;for(o of i)o.enabled=e;c=r.sys_audio;for(o of m)o.enabled=c});b(()=>r.video,async()=>{var e;({video:e}=r),e?await d.show():await d.hide()});w(l,i,f);
