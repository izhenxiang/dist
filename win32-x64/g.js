import{i as l}from"./3.js";import{c as g}from"./7.js";var u=(i,t)=>{var r;return r=Math.sqrt(9437184/(i*t)),r<1&&(i=parseInt(i*r),t=parseInt(t*r)),[i,t]},a,s,p,d;({recbar:p}=l);a=screen.width/screen.height;s=a===16/9;d=[{width:s?1280:parseInt(720*a),height:720},{width:s?1920:parseInt(1080*a),height:1080},{width:s?2560:parseInt(1440*a),height:1440},{width:s?3840:parseInt(2160*a),height:2160}];var f=async()=>{var i,t,r,e,h,n,c;e=d[0],g.resolution!==void 0&&(e=d[g.resolution]),[c,r]=u(e.width,e.height),e={width:c,height:r},localStorage.ppi=e.width/screen.width,console.log("resolution:",JSON.stringify(e),"ppi:",localStorage.ppi),n={audio:!1,video:{mandatory:{maxFrameRate:30,minWidth:e.width,minHeight:e.height,maxWidth:e.width,maxHeight:e.height,chromeMediaSourceId:await p.screen_source(),chromeMediaSource:"desktop"}}},t=async function(){var o;return o=await navigator.mediaDevices.getUserMedia(n),o.getVideoTracks().forEach(function(w){return console.log("video track setting:",JSON.stringify(w.getSettings()))}),o};try{h=await t()}catch(o){i=o,console.error("getUserMedia with audio failed:",i),delete n.audio,h=await t()}return h};export{f as v};
