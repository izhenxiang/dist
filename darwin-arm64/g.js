import{m as S,c as k}from"./w.js";import{p as M}from"./$..js";var o,h=o=async function(a){var t,e,r,i;if(t=localStorage[a],t&&(e=await S[a](t),e)){if(i=e.getTracks(),!k[a])for(r of i)r.enabled=!1;return e}},w=o.bind(o,"audio");o.bind(o,"video");var l,v;l=M!=="win32";v={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{chromeMediaSource:"desktop"}}};async function y(){var a;return l?[]:(a=await navigator.mediaDevices.getUserMedia(v),a.getAudioTracks())}var b=function(a,t){var e,r,i,n,d,c,f,g,m,s,u;if(a.length===0)return t;if(t.length===0)return a;for(m=new MediaStream,d=0,f=a.length;d<f;d++)u=a[d],m.addTrack(u);for(s=new MediaStream,c=0,g=t.length;c<g;c++)u=t[c],s.addTrack(u);return e=new AudioContext,r=e.createMediaStreamSource(m),i=e.createMediaStreamSource(s),n=e.createMediaStreamDestination(),r.connect(n),i.connect(n),n.stream.getAudioTracks()};export{h as a,w as b,y as g,b as m};
