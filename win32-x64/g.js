var t=new Proxy({},{get:(i,a)=>r=>{var e;return e={},a!=="audio"?e[a]={deviceId:{exact:r}}:e={audio:{deviceId:{exact:r},echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}},navigator.mediaDevices.getUserMedia(e)}});export{t as m};
