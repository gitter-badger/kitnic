!function e(r,t,n){function a(i,c){if(!t[i]){if(!r[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var s=t[i]={exports:{}};r[i][0].call(s.exports,function(e){var t=r[i][1][e];return a(t?t:e)},s,s.exports,e,r,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,r,t){var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=e("react"),o=e("react-dom"),i=a.createClass({displayName:"FadeImage",getInitialState:function(){return{opacity:0}},fadeIn:function(){this.setState({opacity:1})},render:function(){var e=this.props.style||{};return e.transition="opacity "+(this.props.speed||1)+"s",e.opacity=this.state.opacity,a.createElement("img",n({},this.props,{style:e,src:this.props.src,onLoad:this.fadeIn}))}});r.exports=i},{react:"react","react-dom":"react-dom"}],2:[function(e,r,t){const n=e("react"),a=e("react-dom"),o=e("react-document-title"),i=e("./TitleBar"),c=e("./FadeImage"),u=e("./info.json"),l=e("./zip-info.json");var s=n.createClass({displayName:"Page",render:function(){const e=u.id.split("/").slice(1).join(" / ");var r;r=""==u.site?n.createElement("div",{style:{color:"grey",IeUserSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",cursor:"default"},title:"no website info available"},n.createElement("span",{className:"octicon octicon-link"}),"website"):n.createElement("a",{href:u.site,target:"_blank"},n.createElement("span",{className:"octicon octicon-link"})," website");const t=n.createElement("a",{href:u.repo,target:"_blank"},n.createElement("span",{className:"octicon octicon-repo"})," repo");return n.createElement(o,{title:e},n.createElement("div",null,n.createElement(i,null,n.createElement("div",{style:{color:"white",width:"100%",textAlign:"center",verticalAlign:" middle",lineHeight:"60px",fontSize:24,borderRadius:"5px"}},e)),n.createElement("div",{style:{padding:20,marginTop:10}},n.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around"}},n.createElement("div",{style:{marginBottom:10}},u.description),n.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around",flexGrow:2}},n.createElement("div",null,r),n.createElement("div",null,t),n.createElement("div",null,n.createElement("a",{href:l},n.createElement("span",{className:"octicon octicon-circuit-board"})," gerbers"))))),n.createElement("div",{style:{backgroundColor:"#373737",borderRadius:"1em"}},n.createElement("img",{src:"images/top.svg",style:{width:"30%"}}),n.createElement("img",{src:"images/bottom.svg",style:{width:"30%"}}))))}});r.exports=s},{"./FadeImage":1,"./TitleBar":3,"./info.json":4,"./zip-info.json":6,react:"react","react-document-title":7,"react-dom":"react-dom"}],3:[function(e,r,t){const n=e("react"),a=e("react-dom");var o=n.createClass({displayName:"TitleBar",render:function(){return n.createElement("div",{style:{backgroundColor:"#373737",width:"100%",height:"64px",boxShadow:"0px 0.1em 0.5em #000",overflow:"hidden",borderBottomRightRadius:5,borderBottomLeftRadius:5}},n.createElement("div",{style:{padding:"10 10 10 10","float":"left",backgroundColor:"#373737",width:140}},n.createElement("a",{href:"/"},n.createElement("img",{src:"/images/logo.png"}))),n.createElement("a",{href:"/submit",style:{color:"white"}},n.createElement("div",{style:{height:"100%",lineHeight:"64px",verticalAlign:"middle",textAlign:"center",backgroundColor:"#373737","float":"right",paddingLeft:10,paddingRight:10,width:140,color:"white"}},"Submit")),n.createElement("div",{style:{paddingTop:2,overflow:"hidden"}},this.props.children))}});r.exports=o},{react:"react","react-dom":"react-dom"}],4:[function(e,r,t){r.exports={id:"github.com/kasbah/nomech",description:"A 4x4 capacitive touch button grid",site:"http://dangerousprototypes.com/forum/viewtopic.php?f=56&t=5589",bom:[{reference:"C1,C2",quantity:2,partNumber:"VJ0603A220JXACW1BC",manufacturer:"Vishay",description:"",retailers:{Digikey:"BC1229TR-ND",Mouser:"77VJ0603A220JXACBC",RS:"",Newark:"57J8941",Farnell:""},row:1},{reference:"C12,C13,C14,C15",quantity:4,partNumber:"VJ0603Y472KXACW1BC",manufacturer:"Vishay",description:"",retailers:{Digikey:"BC1250TR-ND",Mouser:"77VJ0603Y472KXACBC",RS:"",Newark:"58J0816",Farnell:""},row:2},{reference:"C10,C11,C32,C4,C5,C7,C8,C9,C34",quantity:9,partNumber:"CC0603ZRY5V9BB104",manufacturer:"Yageo",description:"",retailers:{Digikey:"311-1343-1-ND",Mouser:"CC0603ZRY5V9BB104",RS:"6169565",Newark:"68R4839",Farnell:"2366349"},row:3},{reference:"C3,C33",quantity:2,partNumber:"GRM188R61C105KA93D",manufacturer:"Murata",description:"",retailers:{Digikey:"490-1536-1-ND",Mouser:"81GRM39R105K16",RS:"7235578",Newark:"14T3307",Farnell:"1828801"},row:4},{reference:"C6",quantity:1,partNumber:"F931A106KAA",manufacturer:"AVX",description:"",retailers:{Digikey:"478-8192-1-ND",Mouser:"647F931A106KAA",RS:"",Newark:"35B9030",Farnell:""},row:5},{reference:"D1,D10,D11,D12,D13,D14,D15,D16,D2,D3,D4,D5,D6,D7,D8,D9",quantity:16,partNumber:"SSL-LXA228SIC-TR31",manufacturer:"Lumex",description:"",retailers:{Digikey:"67-2243-6-ND",Mouser:"696LLXA228SICTR31",RS:"",Newark:"89T9046",Farnell:"2062556"},row:6},{reference:"R1,R2",quantity:2,partNumber:"ERJ-3EKF22R0V",manufacturer:"Panasonic",description:"",retailers:{Digikey:"P22.0HCT-ND",Mouser:"667ERJ3EKF22R0V",RS:"",Newark:"64R5327",Farnell:"2302996"},row:7},{reference:"R3,R5,R7,R9",quantity:4,partNumber:"ERJ-3EKF4700V",manufacturer:"Panasonic",description:"",retailers:{Digikey:"P470HCT-ND",Mouser:"667ERJ3EKF4700V",RS:"",Newark:"64R5348",Farnell:"2397666"},row:8},{reference:"R11,R13,R15,R16,R17,R18,R4,R8",quantity:8,partNumber:"ERJ-3EKF1001V",manufacturer:"Panasonic",description:"",retailers:{Digikey:"P1.00KHCT-ND",Mouser:"667ERJ3EKF1001V",RS:"8145889",Newark:"64R5308",Farnell:"2303145"},row:9},{reference:"R19,R20",quantity:2,partNumber:"ERJ-3EKF1002V",manufacturer:"Panasonic",description:"",retailers:{Digikey:"P10.0KHCT-ND",Mouser:"667ERJ3EKF1002V",RS:"",Newark:"64R5309",Farnell:"2303192"},row:10},{reference:"R10,R12,R14,R6",quantity:4,partNumber:"ERJ-3EKF1004V",manufacturer:"Panasonic",description:"",retailers:{Digikey:"P1.00MHCT-ND",Mouser:"667ERJ3EKF1004V",RS:"",Newark:"64R5311",Farnell:"2303325"},row:11},{reference:"L1",quantity:1,partNumber:"BLM18PG221SN1D",manufacturer:"Murata",description:"",retailers:{Digikey:"490-5221-1-ND",Mouser:"81BLM18PG221SN1D",RS:"7241390",Newark:"73M9111",Farnell:"1515740"},row:12},{reference:"L2,L3",quantity:2,partNumber:"MLZ1608N100L",manufacturer:"TDK",description:"",retailers:{Digikey:"445-6755-6-ND",Mouser:"810MLZ1608N100L",RS:"",Newark:"71T8203",Farnell:""},row:13},{reference:"U1",quantity:1,partNumber:"ATMEGA32U4-AU",manufacturer:"Atmel",description:"",retailers:{Digikey:"ATMEGA32U4-AURCT-ND",Mouser:"ATMEGA32U4AUR",RS:"7153805",Newark:"68T2839",Farnell:"2443182"},row:14},{reference:"U2,U3",quantity:2,partNumber:"74LVC1G19GW,125",manufacturer:"NXP Semiconductors",description:"",retailers:{Digikey:"568-7764-1-ND",Mouser:"771LVC1G19GW125",RS:"",Newark:"85X2998",Farnell:"2445004"},row:15},{reference:"U4",quantity:1,partNumber:"MCP1700T-3302E/TT",manufacturer:"Microchip",description:"",retailers:{Digikey:"MCP1700T3302ETTCT-ND",Mouser:"MCP1700T3302E/TT",RS:"6989044",Newark:"88H9817",Farnell:"1296592"},row:16},{reference:"X1",quantity:1,partNumber:"TSX-3225 16.0000MF10U-B0",manufacturer:"",description:"",retailers:{Digikey:"TSX-3225",Mouser:"732322516MF10UB0",RS:"",Newark:"",Farnell:""},row:17},{reference:"J1",quantity:1,partNumber:"10118192-0001LF",manufacturer:"FCI",description:"",retailers:{Digikey:"609-4613-1-ND",Mouser:"649101181920001LF",RS:"",Newark:"67T2258",Farnell:"2506568"},row:18},{reference:"J2",quantity:1,partNumber:"15-91-3060",manufacturer:"Molex",description:"",retailers:{Digikey:"159130-6002-ND",Mouser:"53815913060",RS:"",Newark:"91M1913",Farnell:""},row:19}],repo:"https://github.com/kasbah/nomech"}},{}],5:[function(e,r,t){const n=e("react"),a=e("react-dom"),o=e("./Page");a.render(n.createElement(o,null),document.getElementById("content"))},{"./Page":2,react:"react","react-dom":"react-dom"}],6:[function(e,r,t){r.exports="nomech-6db28cd-gerbers.zip"},{}],7:[function(e,r,t){"use strict";function n(e){var r=e[e.length-1];return r?r.title:void 0}function a(e){document.title=e||""}var o=e("react"),i=e("react-side-effect"),c=o.createClass({propTypes:{title:o.PropTypes.string.isRequired},render:function(){return this.props.children?o.Children.only(this.props.children):null}});r.exports=i(n,a)(c)},{react:"react","react-side-effect":8}],8:[function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var i=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),c=e("react"),u=n(c),l=e("fbjs/lib/ExecutionEnvironment"),s=n(l),p=e("fbjs/lib/shallowEqual"),f=n(p);r.exports=function(e,r,t){function n(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof r)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function p(){m=e(d.map(function(e){return e.props})),y.canUseDOM?r(m):t&&(m=t(m))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],m=void 0,y=function(e){function r(){a(this,r),e.apply(this,arguments)}return o(r,e),r.peek=function(){return m},r.rewind=function(){if(r.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,d=[],e},r.prototype.shouldComponentUpdate=function(e){return!f["default"](e,this.props)},r.prototype.componentWillMount=function(){d.push(this),p()},r.prototype.componentDidUpdate=function(){p()},r.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},r.prototype.render=function(){return u["default"].createElement(l,this.props)},i(r,null,[{key:"displayName",value:"SideEffect("+n(l)+")",enumerable:!0},{key:"canUseDOM",value:s["default"].canUseDOM,enumerable:!0}]),r}(c.Component);return y}}},{"fbjs/lib/ExecutionEnvironment":9,"fbjs/lib/shallowEqual":10,react:"react"}],9:[function(e,r,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};r.exports=a},{}],10:[function(e,r,t){"use strict";function n(e,r){if(e===r)return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=a.bind(r),i=0;i<t.length;i++)if(!o(t[i])||e[t[i]]!==r[t[i]])return!1;return!0}var a=Object.prototype.hasOwnProperty;r.exports=n},{}]},{},[5]);