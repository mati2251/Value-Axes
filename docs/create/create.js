!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function r(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],a=0;a<t.length;a++){var s=t[a],l=e.base?s[0]+e.base:s[0],c=n[l]||0,h="".concat(l," ").concat(c);n[l]=c+1;var d=r(h),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:h,updater:f(u,e),references:1}),i.push(h)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var h,d=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function u(t,e,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,a);else{var s=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function x(t,e,n){var i=n.css,a=n.media,s=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),s&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var g=null,p=0;function f(t,e){var n,i,a;if(e.singleton){var s=p++;n=g||(g=c(e)),i=u.bind(null,n,s,!1),a=u.bind(null,n,s,!0)}else n=c(e),i=x.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var a=r(n[i]);o[a].references--}for(var s=l(t,e),c=0;c<n.length;c++){var h=r(n[c]);0===o[h].references&&(o[h].updater(),o.splice(h,1))}n=s}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(o=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),s=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(s).concat([a]).join("\n")}var o,r,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(i)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(a[o]=!0)}for(var r=0;r<t.length;r++){var l=[].concat(t[r]);i&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){var i=n(0),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var s={insert:"head",singleton:!1};i(a,s);t.exports=a.locals||{}},function(t,e,n){(e=n(1)(!1)).push([t.i,"body{font-family:'Roboto Condensed', sans-serif;font-weight:300;color:#404040}h2{font-family:'Viga', sans-serif;font-size:26px;margin:0}h3{font-size:26px;margin:0}h4{font-size:24px;font-weight:lighter;margin:0}h5{font-size:20px;font-weight:lighter;margin:0}a{all:unset;color:#008DFF;border-bottom:#008DFF 2px solid;padding-bottom:1px}.button{all:unset;padding:5px 10px 5px 10px;background-color:#85D64E;color:white;font-family:'Viga', sans-serif;font-size:26px;border-radius:13px;cursor:pointer;margin:10px;transition:0.3s all ease}.button:hover{background-color:#73bf3f;transition:0.3s all ease}.github{display:flex;flex-direction:row;align-items:center;align-self:flex-start;cursor:pointer}.github img{width:60px;height:60px;padding-right:10px}footer{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px;align-items:center;width:100%}@media (max-width: 1650px){h2{font-size:20px}h3{font-size:20px}h4{font-size:18px;font-weight:lighter;margin:0}h5{font-size:16px;font-weight:lighter;margin:0}}@media (max-width: 1330px){h2{font-size:15px}h3{font-size:15px}h4{font-size:13px;font-weight:lighter;margin:0}h5{font-size:12px;font-weight:lighter;margin:0}.github img{width:30px;height:30px}}@media (max-width: 1040px){h2{font-size:12px}h3{font-size:12px}h4{font-size:11px;font-weight:lighter;margin:0}h5{font-size:10px;font-weight:lighter;margin:0}}@media (max-width: 870px){h2{font-size:10px}h3{font-size:10px}h4{font-size:9px;font-weight:lighter;margin:0}h5{font-size:9px;font-weight:lighter;margin:0}.github img{width:20px;height:20px}}@media (max-width: 730px){h2{font-size:14px}h3{font-size:14px}body{margin:10px}footer h2{font-size:8px}footer h3{font-size:8px}}@media (max-width: 650px){h2{font-size:12px}h3{font-size:12px}}@media (max-width: 360px){footer h2{font-size:6px}footer h3{font-size:6px}}\n",""]),t.exports=e},,,,function(t,e,n){var i=n(0),a=n(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var s={insert:"head",singleton:!1};i(a,s);t.exports=a.locals||{}},function(t,e,n){(e=n(1)(!1)).push([t.i,".logo{margin:10px;width:250px;height:auto}body{width:100%;margin:0;display:flex;flex-direction:row;justify-content:space-between}.instruction{margin:10px;width:250px;padding-left:10px}.settings{width:25vw;min-height:100vh;max-height:100%;background-color:#F6F6F6;border-left:2px solid #707070;display:flex;flex-direction:column}.settings h2{margin:15px}h5{text-transform:uppercase;padding:0 15px 0 15px;margin:0;color:#8F8F8F}canvas{margin-top:50px;width:800px;height:800px}.settingsDetails{margin:10px 20px 10px 20px;height:78vh;overflow-y:auto;overflow-x:hidden}.generate{align-self:flex-end;justify-self:flex-end}.generateMenu{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center}.generateMenu .menu{width:600px;height:680px;background-color:#ffffff;border-radius:30px}.generateMenu img{border-top-left-radius:30px;border-top-right-radius:30px;width:600px;height:600px}.buttonContainer{display:flex;flex-direction:row;justify-content:space-evenly}@media (max-width: 1400px){canvas{width:600px;height:600px}}\n",""]),t.exports=e},function(t,e,n){var i=n(0),a=n(10);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var s={insert:"head",singleton:!1};i(a,s);t.exports=a.locals||{}},function(t,e,n){(e=n(1)(!1)).push([t.i,".settingsIcon,.deleteIcon{width:20px;height:20px;padding:8px;border-radius:100px;margin-right:20px}.settingsIcon{background-color:#75db34}.deleteIcon{background-color:#f80e0e}.deleteIcon:hover{background-color:#c70000}button{all:unset;cursor:pointer}.settingsIcon:hover{background-color:#71cd39}.settingsRow{display:flex;flex-direction:row;align-items:center;margin-bottom:10px}.settingsRow h4{margin-bottom:8px}h3{margin-bottom:10px}.button h5{color:white;margin:0}input{margin-left:30px;all:unset;background:#fdfdfd;border:#404040 solid 1px;border-radius:10px;padding:10px 10px 10px 10px}.marginRight{margin-right:20px}@media (max-width: 1650px){.settingsIcon,.deleteIcon{width:15px;height:15px;margin-right:10px}.marginRight{margin-right:10px}.button{font-size:20px}}@media (max-width: 1330px){.settingsIcon,.deleteIcon{width:10px;height:10px}.marginRight{margin-right:10px}.button{font-size:16px}}@media (max-width: 1200px){canvas{width:500px;height:500px}}@media (max-width: 1100px){canvas{width:400px;height:400px}}\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);n(2),n(7);var i,a=function(t,e,n,a,s){var o=this;void 0===t&&(t=i.x),this.color="#000000",this.draw=function(){o.drawAxes(),o.drawTitle(),o.drawExtremesLabel()},this.drawAxes=function(){o.ctx.beginPath(),o.ctx.lineCap="round",o.ctx.style=o.color,o.ctx.lineWidth=8,o.type===i.x?(o.ctx.moveTo(110,o.canvas.height/2+8),o.ctx.lineTo(o.canvas.width-110,o.canvas.height/2+8),o.ctx.stroke(),o.ctx.closePath(),o.ctx.beginPath(),o.ctx.moveTo(o.canvas.width-110,o.canvas.height/2),o.ctx.lineTo(o.canvas.width-110,o.canvas.height/2+16),o.ctx.lineTo(o.canvas.width-95,o.canvas.height/2+8),o.ctx.fill()):o.type===i.y&&(o.ctx.moveTo(o.canvas.width/2+8,110),o.ctx.lineTo(o.canvas.width/2+8,o.canvas.height-110),o.ctx.stroke(),o.ctx.closePath(),o.ctx.beginPath(),o.ctx.moveTo(o.canvas.width/2,110),o.ctx.lineTo(o.canvas.width/2+16,110),o.ctx.lineTo(o.canvas.width/2+8,95),o.ctx.fill()),o.ctx.closePath()},this.drawTitle=function(){o.ctx.beginPath(),o.ctx.font="26px Viga",o.name.length>32?o.ctx.font="16px Viga":o.name.length>25&&(o.ctx.font="20px Viga"),o.ctx.textAlign="start",o.type===i.x?o.ctx.fillText(o.name.toUpperCase(),120,o.canvas.height/2-2):o.type===i.y&&(o.ctx.textAlign="end",o.ctx.save(),o.ctx.translate(o.canvas.width/2+16,o.canvas.height-120),o.ctx.rotate(Math.PI/2),o.ctx.fillText(o.name.toUpperCase(),0,0),o.ctx.restore()),o.ctx.closePath()},this.drawExtremesLabel=function(){o.type===i.x?(o.ctx.font="30px Viga",o.ctx.textAlign="center",o.ctx.save(),o.ctx.translate(o.canvas.width-90,o.canvas.height/2+8),o.ctx.rotate(Math.PI/2),o.ctx.fillText(o.extremes.right.toUpperCase(),0,0),o.ctx.restore(),o.ctx.save(),o.ctx.translate(90,o.canvas.height/2+8),o.ctx.rotate(-Math.PI/2),o.ctx.fillText(o.extremes.left.toUpperCase(),0,0),o.ctx.restore()):o.type===i.y&&(o.ctx.font="30px Viga",o.ctx.textAlign="center",o.ctx.fillText(o.extremes.right.toUpperCase(),o.canvas.width/2+8,90),o.ctx.fillText(o.extremes.left.toUpperCase(),o.canvas.width/2+8,o.canvas.height-70))},this.type=t,this.extremes=e,this.name=n,this.canvas=a,this.ctx=s};!function(t){t[t.x=0]="x",t[t.y=1]="y"}(i||(i={}));var s,o=function(t,e,n,i,a){var s=this;this.draw=function(){s.drawQuartersColor(),s.drawQuartersLabels()},this.drawQuartersColor=function(){s.ctx.beginPath(),s.ctx.fillStyle=s.color,1===s.type?s.ctx.fillRect(110,100,s.canvas.width/2-100,s.canvas.height/2-90):0===s.type?s.ctx.fillRect(s.canvas.width/2+10,100,s.canvas.width/2-110,s.canvas.height/2-90):2===s.type?s.ctx.fillRect(110,s.canvas.height/2+10,s.canvas.width/2-100,s.canvas.height/2-120):3===s.type&&s.ctx.fillRect(s.canvas.width/2+10,s.canvas.height/2+10,s.canvas.width/2-110,s.canvas.height/2-120),s.ctx.fillStyle="#000000"},this.drawQuartersLabels=function(){s.ctx.font="30px Viga",s.ctx.textAlign="center",s.label.length>26?s.ctx.font="16px Viga":s.label.length>20&&(s.ctx.font="24px Viga"),1===s.type?s.ctx.fillText(s.label.toUpperCase(),300,300):0===s.type?s.ctx.fillText(s.label.toUpperCase(),700,300):2===s.type?s.ctx.fillText(s.label.toUpperCase(),300,700):3===s.type&&s.ctx.fillText(s.label.toUpperCase(),700,700)},this.type=t,this.color=n,this.label=e,this.canvas=i,this.ctx=a,this.draw()};!function(t){t[t.first=0]="first",t[t.second=1]="second",t[t.third=2]="third",t[t.fourth=3]="fourth"}(s||(s={}));var r,l=function(){function t(e,n,i,a,s){var o=this;this.photo="",this.draw=function(){o.ctx.beginPath(),o.ctx.fillStyle=o.color,o.ctx.arc(115+7.8*o.x,105+7.8*o.y,6,0,2*Math.PI),o.ctx.fill(),o.drawLabel(),o.ctx.fillStyle="#000000",o.drawImage(),o.ctx.closePath()},this.drawLabel=function(){o.ctx.fillStyle=o.color,o.ctx.font="16px Viga",o.ctx.textAlign="start",o.ctx.fillText(o.label,130+7.8*o.x,110+7.8*o.y)},this.drawImage=function(){if(""!==o.photo){var t=new Image;t.src=o.photo,t.onload=function(){o.ctx.drawImage(t,130+7.8*o.x,120+7.8*o.y,50,50)}}},this.x=e,this.y=n,this.label=i,this.color=a,this.ctx=s,this.draw(),this.id=t.count,t.count++}return t.count=0,t}(),c=function(t,e,n,r,c,h,d){var u=this;this.quarters=[],this.examples=[],this.addExample=function(){u.examples.push(new l(0,0,"Example","#000000",u.ctx))},this.draw=function(){u.ctx.fillStyle="white",u.ctx.fillRect(0,0,u.canvas.width,u.canvas.height),u.ctx.fillStyle="black",u.drawTitle(),u.quarters.forEach((function(t){return t.draw()})),u.examples.forEach((function(t){return t.draw()})),u.axesX.draw(),u.axesY.draw(),u.drawLogo()},this.clean=function(){u.ctx.clearRect(0,0,u.canvas.width,u.canvas.height)},this.drawTitle=function(){u.ctx.font="40px Viga",u.ctx.textAlign="center",u.ctx.fillText(u.name.toUpperCase(),u.canvas.width/2,40)},this.drawLogo=function(){u.ctx.beginPath();var t=new Image;t.src="../resources/axis.png",t.onload=function(){u.ctx.drawImage(t,800,900,153,39)},u.ctx.closePath()},this.name=t,this.canvas=d,this.ctx=this.canvas.getContext("2d"),this.axesX=new a(i.x,e,n,d,this.ctx),this.axesY=new a(i.y,r,c,d,this.ctx),this.quarters[0]=new o(s.first,h.first,"#97FFFF",d,this.ctx),this.quarters[1]=new o(s.second,h.second,"#97FFBD",d,this.ctx),this.quarters[2]=new o(s.third,h.third,"#F5FF97",d,this.ctx),this.quarters[3]=new o(s.fourth,h.fourth,"#FF9797",d,this.ctx),this.draw()},h=(n(9),function(t){var e=this;this.settings=document.getElementById("settings"),this.alert=!1,this.photo="",this.createExample=function(){e.chart.addExample(),e.settings.innerHTML="",e.displayAll()},this.displayAll=function(){e.displayChartSettings(),e.displayAxesSettings(),e.displayAxesQuarters(),e.displayExample()},this.displayChartSettings=function(){e.settings.innerHTML+='\n            <div class="settingsRow">\n                <button onclick="chartSettings()">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>CHART</h4>\n            </div>\n           '},this.chartSettings=function(){e.settings.innerHTML='\n            <h3>CHART SETTINGS</h3>\n            <div class="settingsRow">\n                <h4 class="marginRight">Label:</h4>\n                <input id="chartName" value="'+e.chart.name+'" placeholder="Label">\n            </div>\n            <div class="buttonContainer">\n                <button class="button" onclick="closeDetails()">CLOSE</button>\n                <button class="button" onclick="saveChart()">SAVE</button>\n            </div>\n            '},this.saveChart=function(){var t=document.getElementById("chartName").value;t.length>40?e.alert||(e.settings.innerHTML+='<h4 style="color: #c70000">TOO LONG VALUES. MAX LENGTH EVERY VALUES IS 40 CHARACTERS</h4>',e.alert=!0):(e.chart.name=t,e.closeDetails(),e.chart.clean(),e.chart.draw(),e.alert=!1)},this.axesSettings=function(t){i.x===t?e.settings.innerHTML="\n            <h3>"+e.chart.axesX.name.toUpperCase()+' SETTINGS</h3>\n            <div class="settingsRow">\n                <h4 class="marginRight">Label:</h4>\n                <input id=\'labelAxes\' value=\''+e.chart.axesX.name+'\' placeholder="Label">\n            </div>\n            <div class="settingsRow">\n                <h4 class="marginRight">Left Extreme:</h4>\n                <input id=\'leftExtremes\' value=\''+e.chart.axesX.extremes.left+'\' placeholder="Left Extreme">\n            </div>\n            <div class="settingsRow">\n                <h4 class="marginRight">Right Extreme:</h4>\n                <input id="rightExtremes" value=\''+e.chart.axesX.extremes.right+'\' placeholder="Right Extreme">\n            </div>\n            <div class="buttonContainer">\n                <button class="button" onclick="closeDetails()">CLOSE</button>\n                <button class="button" onclick="saveDetailsAxes(AxisType.x)">SAVE</button>\n            </div>\n            ':i.y===t&&(e.settings.innerHTML="\n            <h3>"+e.chart.axesY.name.toUpperCase()+' SETTINGS</h3>\n            <div class="settingsRow">\n                <h4 class="marginRight">Label:</h4>\n                <input id=\'labelAxes\' value=\''+e.chart.axesY.name+'\' placeholder="Label">\n            </div>\n            <div class="settingsRow">\n                <h4 class="marginRight">Bottom Extreme:</h4>\n                <input id=\'leftExtremes\' value=\''+e.chart.axesY.extremes.left+'\' placeholder="Left Extreme">\n            </div>\n            <div class="settingsRow">\n                <h4 class="marginRight">Top Extreme:</h4>\n                <input id="rightExtremes" value=\''+e.chart.axesY.extremes.right+'\' placeholder="Right Extreme">\n            </div>\n            <div class="buttonContainer">\n                <button class="button" onclick="closeDetails()">CLOSE</button>\n                <button class="button" onclick="saveDetailsAxes(AxisType.y)">SAVE</button>\n            </div>\n            ')},this.quarterSettings=function(t){e.settings.innerHTML="\n            <h3>"+e.chart.quarters[t].label.toUpperCase()+' SETTINGS</h3>\n            <div class="settingsRow">\n                <h4 class="marginRight">Label:</h4>\n                <input id=\'labelQuarters\' value=\''+e.chart.quarters[t].label+'\' placeholder="Label">\n            </div>\n            <div class="settingsRow">\n                <h4 class="marginRight">Color:</h4>\n                <input id=\'colorQuarters\' type="color" style="all: initial; height: 20px; width: 20px" value=\''+e.chart.quarters[t].color+'\'>\n            </div>\n            <div class="buttonContainer">\n                <button class="button" onclick="closeDetails()">CLOSE</button>\n                <button class="button" onclick="saveQuartersDetails('+t+')">SAVE</button>\n            </div>\n            '},this.saveQuartersDetails=function(t){var n=document.getElementById("labelQuarters").value.toString(),i=document.getElementById("colorQuarters").value.toString();n.length>40?e.alert||(e.settings.innerHTML+='<h4 style="color: #c70000">TOO LONG VALUES. MAX LENGTH EVERY VALUES IS 40 CHARACTERS</h4>',e.alert=!0):(e.chart.quarters[t].label=n,e.chart.quarters[t].color=i,e.closeDetails(),e.chart.clean(),e.chart.draw(),e.alert=!1)},this.exampleSettings=function(t){var n=e.chart.examples.findIndex((function(e){return e.id===t})),i=e.chart.examples[n];e.settings.innerHTML="",e.settings.innerHTML+="\n            <h3>"+i.label+' SETTINGS</h3>\n            <div class="settingsRow">\n                <h4 class="marginRight">Label:</h4>\n                <input id=\'labelExample\' value=\''+i.label+'\' placeholder="Label">\n            </div>\n            <div class="settingsRow">\n                <h4 class="marginRight">Position X:</h4>\n                <input id=\'positionX\' value=\''+i.x+'\' placeholder="Position X" onkeyup="controlPositionInput(this)">\n            </div>\n            <h5  style="margin-bottom: 10px; padding: 0">POSITION VALUE IS NUMBER FROM 0 TO 100</h5>\n            <div class="settingsRow">\n                <h4 class="marginRight">Position Y:</h4>\n                <input id=\'positionY\' value=\''+i.y+'\' placeholder="Position Y" onkeyup="controlPositionInput(this)">\n            </div>\n            <h5 style="margin-bottom: 10px; padding: 0">POSITION VALUE IS NUMBER FROM 0 TO 100</h5>\n            <div class="settingsRow">\n                <h4 class="marginRight">Color:</h4>\n                <input id=\'colorExample\' type="color" style="all: initial; height: 20px; width: 20px" value=\''+i.color+'\'>\n            </div>\n            <div>\n                <h4 class="marginRight"> Photo: </h4>\n                <input type="file" accept="image/jpeg, image/png" onchange="photoLoad(event)">\n            </div>\n            <div class="buttonContainer">\n                <button class="button" onclick="closeDetails()">CLOSE</button>\n                <button class="button" onclick="saveExampleDetails('+t+')">SAVE</button>\n            </div>\n        '},this.photoLoad=function(t){e.photo=URL.createObjectURL(t.target.files[0])},this.controlPositionInput=function(t){var e=t.value;(isNaN(e)||parseInt(e)>100||parseInt(e)<0)&&(console.log(t.defaultValue),t.value=t.defaultValue)},this.saveExampleDetails=function(t){var n=e.chart.examples.findIndex((function(e){return e.id===t})),i=document.getElementById("labelExample").value.toString(),a=document.getElementById("colorExample").value.toString(),s=document.getElementById("positionX").value.toString(),o=document.getElementById("positionY").value.toString();i.length>40?e.alert||(e.settings.innerHTML+='<h4 style="color: #c70000">TOO LONG VALUES. MAX LENGTH EVERY VALUES IS 40 CHARACTERS</h4>',e.alert=!0):(e.chart.examples[n].label=i,e.chart.examples[n].x=s,e.chart.examples[n].y=o,e.chart.examples[n].color=a,""!==e.photo&&(e.chart.examples[n].photo=e.photo),e.closeDetails(),e.chart.clean(),e.chart.draw(),e.alert=!1)},this.removeExample=function(t){e.chart.examples.splice(e.chart.examples.findIndex((function(e){return e.id===t}))),e.chart.clean(),e.chart.draw(),e.settings.innerHTML="",e.displayAll()},this.displayAxesSettings=function(){e.settings.innerHTML+='<h3>AXES:</h3>\n            <div class="settingsRow">\n                <button onclick="axesSetting(AxisType.x)">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>'+e.chart.axesX.name.toUpperCase()+'</h4>\n            </div>\n            <div class="settingsRow">\n                <button onclick="axesSetting(AxisType.y)">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>'+e.chart.axesY.name.toUpperCase()+"</h4>\n            </div>\n            "},this.displayAxesQuarters=function(){e.settings.innerHTML+='<h3>QUARTERS:</h3>\n            <div class="settingsRow">\n                <button onclick="quarterSettings(0)">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>'+e.chart.quarters[0].label.toUpperCase()+'</h4>\n            </div><div class="settingsRow">\n                <button onclick="quarterSettings(1)">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>'+e.chart.quarters[1].label.toUpperCase()+'</h4>\n            </div>\n            <div class="settingsRow">\n                <button onclick="quarterSettings(2)">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>'+e.chart.quarters[2].label.toUpperCase()+'</h4>\n            </div>\n            <div class="settingsRow">\n                <button onclick="quarterSettings(3)">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <h4>'+e.chart.quarters[3].label.toUpperCase()+"</h4>\n            </div>\n            "},this.displayExample=function(){e.settings.innerHTML+="\n        <h3>EXAMPLES:</h3>\n        "+e.chart.examples.map((function(t){return'\n            <div class="settingsRow">\n                <button onclick="exampleSettings('+t.id+')">\n                    <img src="../resources/settings-icon.svg" alt="settings" class="settingsIcon">\n                </button>\n                <button onclick="removeExample('+t.id+')">\n                    <img src="../resources/delete.svg" alt="delete" class="deleteIcon">\n                </button>\n                <h4>'+t.label.toUpperCase()+"</h4>\n             </div> \n            "})).join("")+'\n        <button class="button" onclick="createExample()"><h5>ADD</h5></button>\n        '},this.saveDetailsAxes=function(t){var n=document.getElementById("labelAxes").value.toString(),a=document.getElementById("leftExtremes").value.toString(),s=document.getElementById("rightExtremes").value.toString();n.length>40||a.length>40||s.length>40?e.alert||(e.settings.innerHTML+='<h4 style="color: #c70000">TOO LONG VALUES. MAX LENGTH EVERY VALUES IS 40 CHARACTERS</h4>',e.alert=!0):(i.x===t?(e.chart.axesX.name=n,e.chart.axesX.extremes.left=a,e.chart.axesX.extremes.right=s):(e.chart.axesY.name=n,e.chart.axesY.extremes.left=a,e.chart.axesY.extremes.right=s),e.closeDetails(),e.chart.clean(),e.chart.draw(),e.alert=!1)},this.closeDetails=function(){e.settings.innerHTML="",e.displayAll(),e.alert=!1,e.photo=""},window.axesSetting=this.axesSettings,window.quarterSettings=this.quarterSettings,window.createExample=this.createExample,window.removeExample=this.removeExample,window.exampleSettings=this.exampleSettings,window.closeDetails=this.closeDetails,window.saveDetailsAxes=this.saveDetailsAxes,window.chartSettings=this.chartSettings,window.saveQuartersDetails=this.saveQuartersDetails,window.saveExampleDetails=this.saveExampleDetails,window.controlPositionInput=this.controlPositionInput,window.saveChart=this.saveChart,window.photoLoad=this.photoLoad,this.chart=t,this.displayAll()}),d=document.getElementById("canvas"),u=(new h(new c("Chart Name",{left:"Left Value",right:"Right Value"},"Axes X",{left:"Bottom Value",right:"Top Value"},"Axes Y",{first:"First Quarter",second:"Second Quarter",third:"Third Quarter",fourth:"Fourth Quarter"},d)),document.getElementById("generateMenu"));u.style="display: none",window.AxisType=i;var x,g=function(){u.style="display: flex"};(x=document.getElementById("download")).onclick=function(){x.setAttribute("href",r),x.setAttribute("download","ValueAxes.png")},window.generate=function(){var t=d.toDataURL("image/png");document.getElementById("imgContainer").innerHTML='\n    <img src="'+t+'" alt="Value Axes" id="generateImage"/>\n    ',r=document.getElementById("generateImage").src,g()},window.hiddenGenerateMenu=function(){u.style="display: none"}}]);