"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var n=require("path"),i=require("fs"),s=require("./o.js");require("electron");var f,a;f=n.join(s.ROOT,"conf");a=t=>{var r;return r=n.join(f,t),i.mkdirSync(n.dirname(r),{recursive:!0}),r};var u=new Proxy({},{set:function(t,r,e){return i.writeFileSync(a(r),JSON.stringify(e)),e},get:(t,r)=>{var e;if(e=a(r),i.existsSync(e))return JSON.parse(i.readFileSync(e))}});exports.default=u;
