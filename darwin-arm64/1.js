import{m as S,p as _}from"./q.js";import{c as k}from"./x.js";var o,y=o=async function(r){var e,a,t,i;if(e=localStorage[r],e&&(a=await S[r](e),a)){if(i=a.getTracks(),!k[r])for(t of i)t.enabled=!1;return a}},b=o.bind(o,"audio");o.bind(o,"video");var l,v;l=_!=="win32";v={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{chromeMediaSource:"desktop"}}};var h=async r=>{var e,a,t;if(l)return[];e=await navigator.mediaDevices.getUserMedia(v),t=e.getAudioTracks();for(a of t)a.enabled=r;return t},w=function(r,e){var a,t,i,d,n,u,f,g,s,m,c;if(r.length===0)return e;if(e.length===0)return r;for(s=new MediaStream,n=0,f=r.length;n<f;n++)c=r[n],s.addTrack(c);for(m=new MediaStream,u=0,g=e.length;u<g;u++)c=e[u],m.addTrack(c);return a=new AudioContext,t=a.createMediaStreamSource(s),i=a.createMediaStreamSource(m),d=a.createMediaStreamDestination(),t.connect(d),i.connect(d),d.stream.getAudioTracks()};export{y as a,b,h as g,w as m};
