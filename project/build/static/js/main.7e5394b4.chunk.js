(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),c=n(9),o=n(8),i=n(10),s=n(0),l=n.n(s),m=n(4),u=(n(14),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={items:[{image:"cycle_sample.png",brand:"STATE",name:"WARHAWK",price:"$579",colors:[],inStock:"1"},{image:"images.png",brand:"STATE",name:"CARDINAL",price:"$449",colors:[],inStock:"2"},{image:"cycle_sample.png",brand:"LINUS",name:"DUTCHI 3 OR 8",price:"$469 - $849",colors:["black","red","blue","green"],inStock:"No"},{image:"images.png",brand:"LINUS",name:"MIXTE 3 OR 8",price:"$649 - $849",colors:["blue","black"],inStock:"Yes"},{image:"cycle_sample.png",brand:"LINUS",name:"DUTCHI 1",price:"$469 - $849",colors:["black","red","blue","green"],inStock:"No"},{image:"images.png",brand:"LINUS",name:"DOVER 1 OR 5",price:"$599 - $749",colors:["black","red","blue"],inStock:"No"}]},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("h3",{className:"header-title"},"BIKE STOCK"),l.a.createElement("h4",{className:"header-tag"},"BRANDS WE CARRY -",l.a.createElement("span",{className:"tag"}," LINUS /")," ",l.a.createElement("span",{className:"tag"},"BROMPTON /")," ",l.a.createElement("span",{className:"tag"},"CHRISTIANIA /")," ",l.a.createElement("span",{className:"tag"},"STATE"))),l.a.createElement("div",{className:"main"},this.state.items.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(m.default,{items:e}))})))}}]),t}(s.Component));t.default=u},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(12),n(1)),s=n(5);o.a.render(r.a.createElement(i.default,null),document.getElementById("root")),s.unregister()},function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),c=n(9),o=n(8),i=n(10),s=n(0),l=n.n(s),m=(n(13),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.items,t=e.image,a=e.brand,r=e.name,c=e.price,o=e.colors,i=e.inStock;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"im"},l.a.createElement("img",{src:n(22)("./".concat(t)),width:192.72,height:128,padding:"0.5rem 0.8rem",alt:"alt"})),l.a.createElement("div",{className:"item-sum"},l.a.createElement("div",{className:"brand"},l.a.createElement("p",null,a),l.a.createElement("p",{className:"brand-title2"},r)),l.a.createElement("div",{className:"detail"},l.a.createElement("div",{className:"label"},l.a.createElement("p",{style:{color:"gray",fontStyle:"italic"}},"Price-"),l.a.createElement("p",{style:{marginLeft:"0.5rem"}},c)),l.a.createElement("div",{className:"label colors-section"},l.a.createElement("p",{style:{color:"gray",fontStyle:"italic"}},"Colors-"),l.a.createElement("div",{className:"color"},o.length>1?o.map(function(e){return l.a.createElement("div",{key:e,style:{width:"10px",height:"10px",background:"".concat(e),marginLeft:"0.5rem"}})}):l.a.createElement("p",{style:{marginLeft:"0.5rem"}},"NA"))),l.a.createElement("div",{className:"label"},l.a.createElement("p",{style:{color:"gray",fontStyle:"italic"}},"In Stock-"),l.a.createElement("p",{style:{marginLeft:"0.5rem"}},i)),l.a.createElement("div",{className:"button"},l.a.createElement("button",null,"FULL SPECS")))))}}]),t}(s.Component));t.default=m},function(e,t,n){"use strict";n.r(t),n.d(t,"register",function(){return r}),n.d(t,"unregister",function(){return o});var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");a?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):c(t,e)})}}function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=n(1);it("renders without crashing",function(){var e=document.createElement("div");o.a.render(r.a.createElement(i.default,null),e),o.a.unmountComponentAtNode(e)})},function(e,t,n){e.exports=n(3)},,,,,,function(e,t,n){var a={"./":3,"./App":1,"./App.css":14,"./App.js":1,"./App.test":15,"./App.test.js":15,"./Styles/card.css":13,"./components/Card":4,"./components/Card.js":4,"./cycle_sample.png":23,"./images.png":24,"./index":3,"./index.css":12,"./index.js":3,"./logo.svg":25,"./serviceWorker":5,"./serviceWorker.js":5};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=22},function(e,t,n){e.exports=n.p+"static/media/cycle_sample.c2245ded.png"},function(e,t,n){e.exports=n.p+"static/media/images.36a18642.png"},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}],[[16,1,2]]]);
//# sourceMappingURL=main.7e5394b4.chunk.js.map