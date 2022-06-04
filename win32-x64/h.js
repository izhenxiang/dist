"use strict";var e=require("electron");e.app.disableHardwareAcceleration();(async()=>(await Promise.all([e.app.whenReady()]),await Promise.resolve().then(function(){return require("./-.js")})))();
