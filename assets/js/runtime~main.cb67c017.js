!function(){"use strict";var e,t,f,n,r,c={},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var f=a[e]={exports:{}};return c[e].call(f.exports,f,f.exports,o),f.exports}o.m=c,e=[],o.O=function(t,f,n,r){if(!f){var c=1/0;for(b=0;b<e.length;b++){f=e[b][0],n=e[b][1],r=e[b][2];for(var a=!0,d=0;d<f.length;d++)(!1&r||c>=r)&&Object.keys(o.O).every((function(e){return o.O[e](f[d])}))?f.splice(d--,1):(a=!1,r<c&&(c=r));a&&(e.splice(b--,1),t=n())}return t}r=r||0;for(var b=e.length;b>0&&e[b-1][2]>r;b--)e[b]=e[b-1];e[b]=[f,n,r]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};t=t||[null,f({}),f([]),f(f)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=f(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},o.d(r,c),r},o.d=function(e,t){for(var f in t)o.o(t,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:t[f]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,f){return o.f[f](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",108:"e3411310",618:"a228627b",723:"a18ef71b",881:"8066111e",997:"92efe2c7",1270:"8d11e070",1909:"8428cd00",2065:"11839375",2187:"07a8c724",2319:"660e807b",2550:"005ff7ff",2611:"ee698e86",3112:"48206ddc",3386:"828d7c42",3396:"3870dbe9",3426:"9e4f55af",3762:"6d5900e3",4098:"1c660d31",4164:"610d0a85",4195:"c4f5d8e4",4674:"1d0e5df0",5429:"cdcbf298",5574:"87b75037",5882:"d8655d6a",6270:"72a68337",6285:"40786178",6605:"6a37b9ff",6752:"be144170",6881:"6eac279e",6909:"ef4cc7ef",7001:"2eec7143",7054:"531a59c3",7224:"0dcdd983",7258:"1c5751c2",7597:"5e8c322a",7620:"9dfe0207",7634:"10b4d661",7918:"17896441",8041:"dce4d635",8183:"0196f052",8191:"e6863846",8567:"e829e97e",8812:"62fe576c",9013:"07c3dbbf",9212:"620dfe88",9220:"e46c9e11",9442:"ef5eb469",9505:"e4d71701",9514:"1be78505",9563:"a71356b6",9614:"28182313",9686:"9e8aa0b8",9706:"f66f25a1",9846:"876bbd93",9857:"b18d2e18"}[e]||e)+"."+{53:"f5911e11",108:"7ba1656c",618:"6ec64643",723:"b79a63d0",881:"a73ecbd8",997:"aad5b713",1270:"17641c1e",1909:"fa3cbe06",2065:"ea5b174d",2187:"d29cb162",2319:"94729d2c",2550:"f7c37adb",2611:"7099f30a",3112:"2667dafc",3386:"b9b6611f",3396:"55a6c142",3426:"c599c6b6",3762:"9e9b61fa",3763:"2edd4c11",4098:"3d801da8",4164:"f552c180",4195:"6cd95a40",4608:"fdd700a5",4674:"8f25a338",5256:"58a6cb9a",5429:"a3c8ff00",5474:"2d28fabf",5486:"ced4caeb",5574:"959a19da",5882:"62eb757a",6270:"24cf2650",6285:"4b8d5a40",6605:"e8bb69db",6752:"09b20bfe",6881:"5758ec16",6909:"2c35a760",6945:"93181fe7",7001:"74cca92f",7054:"6c207d77",7224:"469cd373",7258:"5fa2935b",7597:"9aaa616b",7620:"8a4a3da1",7634:"017f2755",7918:"cfcee62b",8041:"97bac08e",8183:"b7f1a2f7",8191:"5aece26c",8567:"6f70e122",8812:"1c2276dd",9013:"bda3558f",9212:"61404fa5",9220:"03e29dc6",9442:"c7302486",9505:"364627d3",9514:"1a025057",9563:"3a3a118b",9614:"deb50d1d",9686:"fb8b993c",9706:"19f6f23d",9846:"87ff3825",9857:"93067c8a"}[e]+".js"},o.miniCssF=function(e){return"assets/css/styles.3af34d47.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="vision-camera:",o.l=function(e,t,f,c){if(n[e])n[e].push(t);else{var a,d;if(void 0!==f)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+f),a.src=e),n[e]=[t];var s=function(t,f){a.onerror=a.onload=null,clearTimeout(l);var r=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(f)})),t)return t(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/react-native-vision-camera/",o.gca=function(e){return e={11839375:"2065",17896441:"7918",28182313:"9614",40786178:"6285","935f2afb":"53",e3411310:"108",a228627b:"618",a18ef71b:"723","8066111e":"881","92efe2c7":"997","8d11e070":"1270","8428cd00":"1909","07a8c724":"2187","660e807b":"2319","005ff7ff":"2550",ee698e86:"2611","48206ddc":"3112","828d7c42":"3386","3870dbe9":"3396","9e4f55af":"3426","6d5900e3":"3762","1c660d31":"4098","610d0a85":"4164",c4f5d8e4:"4195","1d0e5df0":"4674",cdcbf298:"5429","87b75037":"5574",d8655d6a:"5882","72a68337":"6270","6a37b9ff":"6605",be144170:"6752","6eac279e":"6881",ef4cc7ef:"6909","2eec7143":"7001","531a59c3":"7054","0dcdd983":"7224","1c5751c2":"7258","5e8c322a":"7597","9dfe0207":"7620","10b4d661":"7634",dce4d635:"8041","0196f052":"8183",e6863846:"8191",e829e97e:"8567","62fe576c":"8812","07c3dbbf":"9013","620dfe88":"9212",e46c9e11:"9220",ef5eb469:"9442",e4d71701:"9505","1be78505":"9514",a71356b6:"9563","9e8aa0b8":"9686",f66f25a1:"9706","876bbd93":"9846",b18d2e18:"9857"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,f){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)f.push(n[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var r=new Promise((function(f,r){n=e[t]=[f,r]}));f.push(n[2]=r);var c=o.p+o.u(t),a=new Error;o.l(c,(function(f){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,n[1](a)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,f){var n,r,c=f[0],a=f[1],d=f[2],b=0;for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(d)var i=d(o);for(t&&t(f);b<c.length;b++)r=c[b],o.o(e,r)&&e[r]&&e[r][0](),e[c[b]]=0;return o.O(i)},f=self.webpackChunkvision_camera=self.webpackChunkvision_camera||[];f.forEach(t.bind(null,0)),f.push=t.bind(null,f.push.bind(f))}()}();