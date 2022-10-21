"use strict";var r=require("electron");(async()=>(await Promise.all([r.app.whenReady()]),await Promise.resolve().then(function(){return require("./x.js")}).then(function(e){return e.boot})))();
