import{m as S}from"./b.js";import{c as _}from"./7.js";import{p as k}from"./$5.js";var i,h=i=async function(e){var r,a,t,o;if(r=localStorage[e],r&&(a=await S[e](r),a)){if(o=a.getTracks(),!_[e])for(t of o)t.enabled=!1;return a}},w=i.bind(i,"audio");i.bind(i,"video");var l,v;l=k!=="win32";v={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{chromeMediaSource:"desktop"}}};var b=async e=>{var r,a,t;if(l||!e)return[];r=await navigator.mediaDevices.getUserMedia(v),t=r.getAudioTracks();for(a of t)a.enabled=e;return t},T=function(e,r){var a,t,o,d,n,u,f,g,m,s,c;if(e.length===0)return r;if(r.length===0)return e;for(m=new MediaStream,n=0,f=e.length;n<f;n++)c=e[n],m.addTrack(c);for(s=new MediaStream,u=0,g=r.length;u<g;u++)c=r[u],s.addTrack(c);return a=new AudioContext,t=a.createMediaStreamSource(m),o=a.createMediaStreamSource(s),d=a.createMediaStreamDestination(),t.connect(d),o.connect(d),d.stream.getAudioTracks()};export{h as a,w as b,b as g,T as m};
