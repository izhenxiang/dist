(function(){"use strict";self.onmessage=({data:[i,u,f,e,o,n,t]})=>{var r;n*=i,t*=i,n=Math.round(n),t=Math.round(t),e*=i,o*=i,e=Math.round(e),o=Math.round(o),e=e+e%2,o=o+o%2,e<0&&(console.warn("negative x: ",e),e=0),o<0&&(console.warn("negative y: ",o),o=0),console.info("ppi, x, y, w, h",i,e,o,n,t),r=0,u.pipeThrough(new TransformStream({transform:(a,c)=>{var d,h,s;r===0&&(h=a.codedWidth,d=a.codedHeight,n=Math.min(h,n),t=Math.min(d,t),e+n>h&&(e=Math.max(0,h-n),e=e+e%2,n=h-e),o+t>d&&(o=Math.max(0,d-t),o=o+o%2,t=d-o),n=n+n%2,t=t+t%2,console.info("ppi, x, y, w, h",i,e,o,n,t),r+=1);try{c.enqueue(new VideoFrame(a,{visibleRect:{x:e,width:n,y:o,height:t}}))}catch(w){s=w,r<2&&(console.error("crop failed, don not crop",s),r+=1),c.enqueue(new VideoFrame(a))}a.close()}})).pipeTo(f)}})();
