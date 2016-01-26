!function e(t,r,n){function o(a,c){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(e){var r=t[a][1][e];return o(r?r:e)},u,u.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=e("react"),i=e("react-dom"),a=o.createClass({displayName:"FadeImage",getInitialState:function(){return{opacity:0}},fadeIn:function(){this.setState({opacity:1})},render:function(){var e=this.props.style||{};return e.transition="opacity "+(this.props.speed||1)+"s",e.opacity=this.state.opacity,o.createElement("img",n({},this.props,{style:e,src:this.props.src,onLoad:this.fadeIn}))}});t.exports=a},{react:"react","react-dom":"react-dom"}],2:[function(e,t,r){const n=e("react"),o=e("react-dom"),i=e("react-document-title"),a=e("./TitleBar"),c=e("./FadeImage"),l=e("./info.json"),s=e("./zip-info.json");var u=n.createClass({displayName:"Page",render:function(){const e=l.id.split("/").slice(1).join(" / ");var t;t=""==l.site?n.createElement("div",{style:{color:"grey",IeUserSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",cursor:"default"},title:"no website info available"},n.createElement("span",{className:"octicon octicon-link"}),"website"):n.createElement("a",{href:l.site,target:"_blank"},n.createElement("span",{className:"octicon octicon-link"})," website");const r=n.createElement("a",{href:l.repo,target:"_blank"},n.createElement("span",{className:"octicon octicon-repo"})," repo");return n.createElement(i,{title:e},n.createElement("div",null,n.createElement(a,null,n.createElement("div",{style:{color:"white",width:"100%",textAlign:"center",verticalAlign:" middle",lineHeight:"60px",fontSize:24,borderRadius:"5px"}},e)),n.createElement("div",{style:{padding:20,marginTop:10}},n.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around"}},n.createElement("div",{style:{marginBottom:10}},l.description),n.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around",flexGrow:2}},n.createElement("div",null,t),n.createElement("div",null,r),n.createElement("div",null,n.createElement("a",{href:s},n.createElement("span",{className:"octicon octicon-circuit-board"})," gerbers"))))),n.createElement("div",{style:{backgroundColor:"#373737",borderRadius:"1em"}},n.createElement("img",{src:"images/top.svg",style:{width:"30%"}}),n.createElement("img",{src:"images/bottom.svg",style:{width:"30%"}}))))}});t.exports=u},{"./FadeImage":1,"./TitleBar":3,"./info.json":4,"./zip-info.json":6,react:"react","react-document-title":7,"react-dom":"react-dom"}],3:[function(e,t,r){const n=e("react"),o=e("react-dom");var i=n.createClass({displayName:"TitleBar",render:function(){return n.createElement("div",{style:{backgroundColor:"#373737",width:"100%",height:"64px",boxShadow:"0px 0.1em 0.5em #000",overflow:"hidden",borderBottomRightRadius:5,borderBottomLeftRadius:5}},n.createElement("div",{style:{padding:"10 10 10 10","float":"left",backgroundColor:"#373737",width:140}},n.createElement("a",{href:"/"},n.createElement("img",{src:"/images/logo.png"}))),n.createElement("a",{href:"/submit",style:{color:"white"}},n.createElement("div",{style:{height:"100%",lineHeight:"64px",verticalAlign:"middle",textAlign:"center",backgroundColor:"#373737","float":"right",paddingLeft:10,paddingRight:10,width:140,color:"white"}},"Submit")),n.createElement("div",{style:{paddingTop:2,overflow:"hidden"}},this.props.children))}});t.exports=i},{react:"react","react-dom":"react-dom"}],4:[function(e,t,r){t.exports={id:"github.com/kasbah/push-on-hold-off",description:"Simple power switch using a push button. Push to turn on, hold to turn off.",site:"http://www.mosaic-industries.com/embedded-systems/microcontroller-projects/electronic-circuits/push-button-switch-turn-on/latching-toggle-power-switch#press-on-hold-off-latching-circuits",bom:[{reference:"C1",quantity:1,partNumber:"C0603X5R0J104K030BC",manufacturer:"TDK",description:"1uF 0603 X5R",retailers:{Digikey:"445-1796-1-ND",Mouser:"CC0603KRX5R7BB105",RS:"7882818",Newark:"04X3188",Farnell:"2354048"},row:1},{reference:"C2",quantity:1,partNumber:"C1608X5R1A106M080AC",manufacturer:"TDK",description:"10uF 0603 X5R",retailers:{Digikey:"445-6853-1-ND",Mouser:"06036D106MAT2A",RS:"7882893",Newark:"04X3239",Farnell:"2211164"},row:2},{reference:"D1",quantity:1,partNumber:"1N4148WS",manufacturer:"Multicomp",description:"",retailers:{Digikey:"1N4148WS-FDICT-ND",Mouser:"1N4148WSE318",RS:"7613476",Newark:"74M5710",Farnell:"1466524"},row:3},{reference:"Q1",quantity:1,partNumber:"IRF7309PBF",manufacturer:"International Rectifier",description:"",retailers:{Digikey:"IRF7309PBFCT-ND",Mouser:"IRF7309PBF",RS:"5429377",Newark:"19K8239",Farnell:"2468006"},row:4},{reference:"R1",quantity:1,partNumber:"CRCW060310K0JNEA",manufacturer:"Vishay",description:"10k 0603",retailers:{Digikey:"541-10KGCT-ND",Mouser:"CRCW060310K0JNEAHP",RS:"8206928",Newark:"52K8066",Farnell:"1469749"},row:5},{reference:"R2, R4",quantity:2,partNumber:"CRCW0603100KJNEA",manufacturer:"Vishay",description:"100k  0603",retailers:{Digikey:"541-100KGCT-ND",Mouser:"CRCW0603100KJNEAHP",RS:"8206916",Newark:"59M6763",Farnell:"1692517"},row:6},{reference:"R3",quantity:1,partNumber:"CRCW0603300KFKEA",manufacturer:"Vishay",description:"300k  0603",retailers:{Digikey:"311-300KGRCT-ND",Mouser:"RC0603JR07300KL",RS:"8280617",Newark:"52K8409",Farnell:"1652871"},row:7},{reference:"SW1",quantity:1,partNumber:"4-1437565-1",manufacturer:"TE Connectivity",description:"",retailers:{Digikey:"450-1129-ND",Mouser:"414375651",RS:"4791508",Newark:"93K3887",Farnell:"3801305"},row:8}],repo:"https://github.com/kasbah/push-on-hold-off"}},{}],5:[function(e,t,r){const n=e("react"),o=e("react-dom"),i=e("./Page");o.render(n.createElement(i,null),document.getElementById("content"))},{"./Page":2,react:"react","react-dom":"react-dom"}],6:[function(e,t,r){t.exports="push-on-hold-off-c0e4d62-gerbers.zip"},{}],7:[function(e,t,r){"use strict";function n(e){var t=e[e.length-1];return t?t.title:void 0}function o(e){document.title=e||""}var i=e("react"),a=e("react-side-effect"),c=i.createClass({propTypes:{title:i.PropTypes.string.isRequired},render:function(){return this.props.children?i.Children.only(this.props.children):null}});t.exports=a(n,o)(c)},{react:"react","react-side-effect":8}],8:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=e("react"),l=n(c),s=e("fbjs/lib/ExecutionEnvironment"),u=n(s),p=e("fbjs/lib/shallowEqual"),d=n(p);t.exports=function(e,t,r){function n(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function p(){m=e(f.map(function(e){return e.props})),h.canUseDOM?t(m):r&&(m=r(m))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var f=[],m=void 0,h=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!d["default"](e,this.props)},t.prototype.componentWillMount=function(){f.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),p()},t.prototype.render=function(){return l["default"].createElement(s,this.props)},a(t,null,[{key:"displayName",value:"SideEffect("+n(s)+")",enumerable:!0},{key:"canUseDOM",value:u["default"].canUseDOM,enumerable:!0}]),t}(c.Component);return h}}},{"fbjs/lib/ExecutionEnvironment":9,"fbjs/lib/shallowEqual":10,react:"react"}],9:[function(e,t,r){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};t.exports=o},{}],10:[function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var i=o.bind(t),a=0;a<r.length;a++)if(!i(r[a])||e[r[a]]!==t[r[a]])return!1;return!0}var o=Object.prototype.hasOwnProperty;t.exports=n},{}]},{},[5]);