import{m as S}from"./d.js";import{c as _}from"./i.js";import{p as k}from"./$4.js";var i,b=i=async function(r){var e,a,t,o;if(e=localStorage[r],e&&(a=await S[r](e),a)){if(o=a.getTracks(),!_[r])for(t of o)t.enabled=!1;return a}},h=i.bind(i,"audio");i.bind(i,"video");var l,v;l=k!=="win32";v={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{chromeMediaSource:"desktop"}}};var w=async r=>{var e,a,t;if(l)return[];e=await navigator.mediaDevices.getUserMedia(v),t=e.getAudioTracks();for(a of t)a.enabled=r;return t},T=function(r,e){var a,t,o,d,n,u,f,g,m,s,c;if(r.length===0)return e;if(e.length===0)return r;for(m=new MediaStream,n=0,f=r.length;n<f;n++)c=r[n],m.addTrack(c);for(s=new MediaStream,u=0,g=e.length;u<g;u++)c=e[u],s.addTrack(c);return a=new AudioContext,t=a.createMediaStreamSource(m),o=a.createMediaStreamSource(s),d=a.createMediaStreamDestination(),t.connect(d),o.connect(d),d.stream.getAudioTracks()};export{b as a,h as b,w as g,T as m};
