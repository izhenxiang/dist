import{i as p}from"./6.js";import{c as g}from"./i.js";var u=(i,t)=>{var r;return r=Math.sqrt(9437184/(i*t)),r<1&&(i=parseInt(i*r),t=parseInt(t*r)),[i,t]},a,h,w,n;({recbar:w}=p);a=screen.width/screen.height;h=a===16/9;n=[{width:h?1280:720*a,height:720},{width:h?1920:1080*a,height:1080},{width:h?2560:1440*a,height:1440},{width:h?3840:2160*a,height:2160}];var f=async()=>{var i,t,r,e,s,d,c;e=n[0],g.resolution!==void 0&&(e=n[g.resolution]),[c,r]=u(e.width,e.height),e={width:c,height:r},localStorage.ppi=e.width/screen.width,console.log("resolution:",JSON.stringify(e),"ppi:",localStorage.ppi),d={audio:!1,video:{mandatory:{maxFrameRate:30,minWidth:e.width,minHeight:e.height,maxWidth:e.width,maxHeight:e.height,chromeMediaSourceId:await w.screen_source(),chromeMediaSource:"desktop"}}},t=async function(){var o;return o=await navigator.mediaDevices.getUserMedia(d),o.getVideoTracks().forEach(function(l){return console.log("video track setting:",JSON.stringify(l.getSettings()))}),o};try{s=await t()}catch(o){i=o,console.error("getUserMedia with audio failed:",i),delete d.audio,s=await t()}return s};export{f as v};
