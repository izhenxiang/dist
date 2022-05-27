var t=new Proxy({},{get:(i,a)=>r=>{var e;return e={},e[a]={deviceId:{exact:r}},navigator.mediaDevices.getUserMedia(e)}}),d="darwin";export{t as m,d as p};
