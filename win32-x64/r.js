import l from"./i.js";import{c as e}from"./-.js";import{a as w}from"./6.js";import{v as k}from"./2.js";import{i as u}from"./3.js";import{k as S,H as g}from"./a.js";import"./1.js";import"./d.js";import"./$.js";import"./7.js";import"./0.js";import"./g.js";function v(){return new Worker("/$!.js",{type:"module"})}var s,i,c,t,o,d,n,f,p,r;({camera:t}=u);n=await k();r=n.getVideoTracks()[0];({area:s}=e);s&&(p=new MediaStreamTrackProcessor({track:r,maxBufferSize:15}),r=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,r.writable],d=()=>{new v().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});r.contentHint="detail";i=await w();c=i?i.getTracks():[];f=new MediaStream([r,...c]);S(()=>{var a,m;a=!!e.audio;for(m of c)m.enabled=a});g(()=>e.video,async()=>{var a;({video:a}=e),a?await t.circle(localStorage.人像尺寸-0):await t.x()});l(f,d);
