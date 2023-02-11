"use strict";var y=require("electron");function f(e){return e&&e.Math==Math?e:void 0}const s=typeof globalThis=="object"&&f(globalThis)||typeof window=="object"&&f(window)||typeof self=="object"&&f(self)||typeof global=="object"&&f(global)||function(){return this}()||{};function h(e,t,r){const n=r||s,o=n.__SENTRY__=n.__SENTRY__||{};return o[e]||(o[e]=t())}const E="Sentry Logger ",u=["debug","info","warn","error","log","assert","trace"];function b(e){if(!("console"in s))return e();const t=s.console,r={};u.forEach(n=>{const o=t[n]&&t[n].__sentry_original__;n in t&&o&&(r[n]=t[n],t[n]=o)});try{return e()}finally{Object.keys(r).forEach(n=>{t[n]=r[n]})}}function d(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__?u.forEach(r=>{t[r]=(...n)=>{e&&b(()=>{s.console[r](`${E}[${r}]:`,...n)})}}):u.forEach(r=>{t[r]=()=>{}}),t}typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__?h("logger",d):d();function p(e,t){if(!Array.isArray(e))return"";const r=[];for(let n=0;n<e.length;n++){const o=e[n];try{r.push(String(o))}catch{r.push("[value cannot be serialized]")}}return r.join(t)}function S(e,t,r){if(!(t in e))return;const n=e[t],o=r(n);if(typeof o=="function")try{L(o,n)}catch{}e[t]=o}function w(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0})}function L(e,t){const r=t.prototype||{};e.prototype=t.prototype=r,w(e,"__sentry_original__",t)}const N=["fatal","error","warning","log","info","debug"];function O(e){return e==="warn"?"warning":N.includes(e)?e:"log"}class c{static __initStatic(){this.id="CaptureConsole"}__init(){this.name=c.id}__init2(){this._levels=u}constructor(t={}){c.prototype.__init.call(this),c.prototype.__init2.call(this),t.levels&&(this._levels=t.levels)}setupOnce(t,r){"console"in s&&this._levels.forEach(n=>{n in s.console&&S(s.console,n,o=>(...i)=>{const a=r();a.getIntegration(c)&&a.withScope(l=>{l.setLevel(O(n)),l.setExtra("arguments",i),l.addEventProcessor(g=>(g.logger="console",g));let _=p(i," ");n==="assert"?i[0]===!1&&(_=`Assertion failed: ${p(i.slice(1)," ")||"console.assert"}`,l.setExtra("arguments",i.slice(1)),a.captureMessage(_)):n==="error"&&i[0]instanceof Error?a.captureException(i[0]):a.captureMessage(_)}),o&&o.apply(s.console,i)})})}}c.__initStatic();(async()=>{var e;e=await Promise.resolve().then(function(){return require("./h.js")}),e.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6",attachStacktrace:!0,integrations:[new c({levels:["error"]})]})})();(async()=>(await Promise.all([y.app.whenReady()]),await Promise.resolve().then(function(){return require("./z.js")})))();
