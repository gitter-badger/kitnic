!function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=e("react"),i=e("react-dom"),a=o.createClass({displayName:"FadeImage",getInitialState:function(){return{opacity:0}},fadeIn:function(){this.setState({opacity:1})},render:function(){var e=this.props.style||{};return e.transition="opacity "+(this.props.speed||1)+"s",e.opacity=this.state.opacity,o.createElement("img",r({},this.props,{style:e,src:this.props.src,onLoad:this.fadeIn}))}});t.exports=a},{react:"react","react-dom":"react-dom"}],2:[function(e,t,n){const r=e("react"),o=e("react-dom"),i=e("react-document-title"),a=e("./TitleBar"),c=e("./FadeImage"),l=e("./info.json"),s=e("./zip-info.json");var u=r.createClass({displayName:"Page",render:function(){const e=l.id.split("/").slice(1).join(" / ");var t;t=""==l.site?r.createElement("div",{style:{color:"grey",IeUserSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",cursor:"default"},title:"no website info available"},r.createElement("span",{className:"octicon octicon-link"}),"website"):r.createElement("a",{href:l.site,target:"_blank"},r.createElement("span",{className:"octicon octicon-link"})," website");const n=r.createElement("a",{href:l.repo,target:"_blank"},r.createElement("span",{className:"octicon octicon-repo"})," repo");return r.createElement(i,{title:e},r.createElement("div",null,r.createElement(a,null,r.createElement("div",{style:{color:"white",width:"100%",textAlign:"center",verticalAlign:" middle",lineHeight:"60px",fontSize:24,borderRadius:"5px"}},e)),r.createElement("div",{style:{padding:20,marginTop:10}},r.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around"}},r.createElement("div",{style:{marginBottom:10}},l.description),r.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around",flexGrow:2}},r.createElement("div",null,t),r.createElement("div",null,n),r.createElement("div",null,r.createElement("a",{href:s},r.createElement("span",{className:"octicon octicon-circuit-board"})," gerbers"))))),r.createElement("div",{style:{backgroundColor:"#373737",borderRadius:"1em"}},r.createElement("img",{src:"images/top.svg",style:{width:"30%"}}),r.createElement("img",{src:"images/bottom.svg",style:{width:"30%"}}))))}});t.exports=u},{"./FadeImage":1,"./TitleBar":3,"./info.json":4,"./zip-info.json":6,react:"react","react-document-title":7,"react-dom":"react-dom"}],3:[function(e,t,n){const r=e("react"),o=e("react-dom");var i=r.createClass({displayName:"TitleBar",render:function(){return r.createElement("div",{style:{backgroundColor:"#373737",width:"100%",height:"64px",boxShadow:"0px 0.1em 0.5em #000",overflow:"hidden",borderBottomRightRadius:5,borderBottomLeftRadius:5}},r.createElement("div",{style:{padding:"10 10 10 10","float":"left",backgroundColor:"#373737",width:140}},r.createElement("a",{href:"/"},r.createElement("img",{src:"/images/logo.png"}))),r.createElement("a",{href:"/submit",style:{color:"white"}},r.createElement("div",{style:{height:"100%",lineHeight:"64px",verticalAlign:"middle",textAlign:"center",backgroundColor:"#373737","float":"right",paddingLeft:10,paddingRight:10,width:140,color:"white"}},"Submit")),r.createElement("div",{style:{paddingTop:2,overflow:"hidden"}},this.props.children))}});t.exports=i},{react:"react","react-dom":"react-dom"}],4:[function(e,t,n){t.exports={id:"github.com/kitnic/mchck-board",description:"A small, cheap, and powerful development board that supports USB for easy programming, at a low price.",site:"http://mchck.org",bom:[],repo:"https://github.com/kitnic/mchck-board"}},{}],5:[function(e,t,n){const r=e("react"),o=e("react-dom"),i=e("./Page");o.render(r.createElement(i,null),document.getElementById("content"))},{"./Page":2,react:"react","react-dom":"react-dom"}],6:[function(e,t,n){t.exports="mchck-board-beb1d4b-gerbers.zip"},{}],7:[function(e,t,n){"use strict";function r(e){var t=e[e.length-1];return t?t.title:void 0}function o(e){document.title=e||""}var i=e("react"),a=e("react-side-effect"),c=i.createClass({propTypes:{title:i.PropTypes.string.isRequired},render:function(){return this.props.children?i.Children.only(this.props.children):null}});t.exports=a(r,o)(c)},{react:"react","react-side-effect":8}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("fbjs/lib/ExecutionEnvironment"),u=r(s),p=e("fbjs/lib/shallowEqual"),d=r(p);t.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function p(){m=e(f.map(function(e){return e.props})),h.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var f=[],m=void 0,h=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!d["default"](e,this.props)},t.prototype.componentWillMount=function(){f.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),p()},t.prototype.render=function(){return l["default"].createElement(s,this.props)},a(t,null,[{key:"displayName",value:"SideEffect("+r(s)+")",enumerable:!0},{key:"canUseDOM",value:u["default"].canUseDOM,enumerable:!0}]),t}(c.Component);return h}}},{"fbjs/lib/ExecutionEnvironment":9,"fbjs/lib/shallowEqual":10,react:"react"}],9:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],10:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=o.bind(t),a=0;a<n.length;a++)if(!i(n[a])||e[n[a]]!==t[n[a]])return!1;return!0}var o=Object.prototype.hasOwnProperty;t.exports=r},{}]},{},[5]);