"use strict";var A=require("./5.js");function i(e,o){return o.forEach(function(c){c&&typeof c!="string"&&!Array.isArray(c)&&Object.keys(c).forEach(function(r){if(r!=="default"&&!(r in e)){var a=Object.getOwnPropertyDescriptor(c,r);Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:function(){return c[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n=require("./$.node");const s=n;function u(e){if(!["accessibility","bluetooth","calendar","camera","contacts","full-disk-access","input-monitoring","location","microphone","photos","reminders","speech-recognition","screen"].includes(e))throw new TypeError(`${e} is not a valid type`);return s.getAuthStatus.call(this,e)}function l(e){if(!["desktop","documents","downloads"].includes(e))throw new TypeError(`${e} is not a valid protected folder`);return s.askForFoldersAccess.call(this,e)}var t={askForAccessibilityAccess:s.askForAccessibilityAccess,askForCalendarAccess:s.askForCalendarAccess,askForCameraAccess:s.askForCameraAccess,askForContactsAccess:s.askForContactsAccess,askForFoldersAccess:l,askForFullDiskAccess:s.askForFullDiskAccess,askForInputMonitoringAccess:s.askForInputMonitoringAccess,askForRemindersAccess:s.askForRemindersAccess,askForMicrophoneAccess:s.askForMicrophoneAccess,askForMusicLibraryAccess:s.askForMusicLibraryAccess,askForPhotosAccess:s.askForPhotosAccess,askForSpeechRecognitionAccess:s.askForSpeechRecognitionAccess,askForScreenCaptureAccess:s.askForScreenCaptureAccess,getAuthStatus:u},d=i({__proto__:null,default:t},[t]);exports.index=d;
