var t=new Proxy({},{get:(i,a)=>r=>{var e;return e={},e[a]={deviceId:{exact:r}},navigator.mediaDevices.getUserMedia(e)}}),d="win32";export{t as m,d as p};
