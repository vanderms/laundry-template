(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),s=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||s(e)||a(e)||i()}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var s=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(s.default.useContext(a.AmpStateContext))};var n,s=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||s&&i}},2775:function(e,t,r){"use strict";var n=r(9713);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=m,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=n?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=(a=r(3244))&&a.__esModule?a:{default:a},c=r(3398),d=r(1165),u=r(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(m(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(s){var a=!0,i=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){i=!0;var o=s.key.slice(s.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var c=0,d=h.length;c<d;c++){var u=h[c];if(s.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var l=s.props[u],m=n[u]||new Set;"name"===u&&i||!m.has(l)?(m.add(l),n[u]=m):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(d.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};t.default=v},3244:function(e,t,r){"use strict";var n=r(319),s=r(4575),a=r(3913),i=(r(1506),r(2205)),o=r(8585),c=r(9754);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var s=c(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return o(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),l=function(e){i(r,e);var t=d(r);function r(e){var a;return s(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=l},6870:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),s=(r(9008),r(7294));function a(){var e=(0,s.useState)(""),t=e[0],r=e[1];return(0,n.jsxs)("section",{className:"section-cover",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"title",children:(0,n.jsx)("h1",{children:"A SUA LAVANDERIA EM S\xc3O PAULO"})}),(0,n.jsx)("div",{className:"subtitle",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente quibusdam omnis, dolore at hic excepturi, eaque exercitationem assumenda soluta."})]}),(0,n.jsxs)("div",{className:"cta",children:[(0,n.jsx)("div",{className:"text",children:"Confira se os nossos servi\xe7os est\xe3o dispon\xedveis na sua regi\xe3o"}),(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r("")},children:[(0,n.jsx)("input",{type:"text",value:t,onChange:function(e){r(e.target.value)},placeholder:"Digite seu CEP"}),(0,n.jsx)("input",{type:"submit",value:"CONSULTAR"})]})]})]})]})}function i(e){var t=e.iconSrc,r=e.title,s=e.text;return(0,n.jsxs)("div",{className:"feature-card",children:[(0,n.jsx)("div",{className:"circle",children:(0,n.jsx)("img",{src:t,alt:"icon ".concat(r)})}),(0,n.jsx)("h3",{children:r}),(0,n.jsx)("div",{children:s})]})}function o(){return(0,n.jsxs)("section",{className:"section-features",children:[(0,n.jsxs)("header",{className:"section-header",children:[(0,n.jsx)("h2",{children:"O MELHOR SERVI\xc7O PELO MENOR PRE\xc7O"}),(0,n.jsx)("div",{className:"text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."})]}),(0,n.jsxs)("div",{className:"cards-container",children:[(0,n.jsx)(i,{title:"ENTREGA EXPRESSA",iconSrc:"/assets/icons/icon-awesome-truck.svg",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."}),(0,n.jsx)(i,{title:"SERVI\xc7O COM QUALIDADE",iconSrc:"/assets/icons/icon-awesome-check-square.svg",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."}),(0,n.jsx)(i,{title:"PRE\xc7OS BAIXOS",iconSrc:"/assets/icons/icon-awesome-credit-card.svg",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."})]})]})}var c=r(1664);function d(){return(0,n.jsxs)("section",{className:"laundry-app",children:[(0,n.jsx)("div",{className:"header-container",children:(0,n.jsxs)("header",{className:"section-header",children:[(0,n.jsxs)("h2",{children:["A ",(0,n.jsx)("span",{children:"LAUNDRY"})," NA PALMA DA SUA M\xc3O"]}),(0,n.jsx)("div",{className:"text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."})]})}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"bg-img"}),(0,n.jsxs)("div",{className:"text-container",children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ."}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "}),(0,n.jsx)("div",{className:"cta-container",children:(0,n.jsx)(c.default,{href:"/",children:(0,n.jsx)("a",{className:"cta",children:"BAIXE O APP"})})})]})]})]})}function u(e){var t=e.imgSrc,r=e.title,s=e.text;return(0,n.jsxs)("div",{className:"service-card",children:[(0,n.jsx)("div",{className:"img-container",style:{backgroundImage:"url(".concat(t,")")}}),(0,n.jsx)("h3",{children:r}),(0,n.jsx)("div",{children:s})]})}function l(){return(0,n.jsxs)("section",{id:"servicos",className:"section-services",children:[(0,n.jsxs)("header",{className:"section-header",children:[(0,n.jsxs)("h2",{children:[" SERVI\xc7OS PRESTADOS COM ",(0,n.jsx)("span",{children:"AMOR"})]}),(0,n.jsx)("div",{className:"text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."})]}),(0,n.jsxs)("div",{className:"cards-container",children:[(0,n.jsx)(u,{title:"LAVAGEM POR KG",imgSrc:"/assets/maude-frederique-lavoie-EDSTj4kCUcw-unsplash.png",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."}),(0,n.jsx)(u,{title:"LAVANDERIA SELF-SERVICE",imgSrc:"/assets/washer-dryer-1.png",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."}),(0,n.jsx)(u,{title:"IMPERMEBEALIZA\xc7\xc3O",imgSrc:"assets/andrea-davis-duXRC8vT5wQ-unsplash.png",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."})]})]})}function m(e){var t=e.imgSrc,r=e.title,s=e.text,a=e.href,i=e.side;return(0,n.jsxs)("div",{className:"card "+i,children:[(0,n.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(t,")")}}),(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsxs)("div",{className:"text-container",children:[(0,n.jsx)("h3",{className:"title",children:r}),(0,n.jsx)("p",{className:"text",children:s}),(0,n.jsx)("div",{className:"link-placeholder"}),(0,n.jsx)(c.default,{href:"/dicas/"+a,children:(0,n.jsx)("a",{children:"LEIA MAIS"})})]})]})}function p(){return(0,n.jsxs)("section",{className:"section-dicas",children:[(0,n.jsxs)("header",{className:"section-header",children:[(0,n.jsxs)("h2",{children:["NOSSAS ",(0,n.jsx)("span",{children:"DICAS"})," PARA UMA BOA LAVAGEM"]}),(0,n.jsx)("div",{className:"text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."})]}),(0,n.jsxs)("div",{className:"cards-container",children:[(0,n.jsx)(m,{imgSrc:"/assets/waldemar-brandt-Db4d6MRIXJc-unsplash.png",title:"COMO LAVAR ROUPA SOCIAL",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.",href:"/dicas/como-lavar-roupa-social",side:"left"}),(0,n.jsx)(m,{imgSrc:"/assets/waldemar-brandt-UP9DtTjRYpI-unsplash.png",title:"COMO PASSAR UM JEANS",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.",href:"/dicas/dez-dicas-para-passar-um-jeans",side:"right"})]})]})}function h(){return(0,n.jsxs)("section",{id:"sobre",className:"sobre-section",children:[(0,n.jsx)("div",{className:"header-container",children:(0,n.jsxs)("header",{className:"section-header",children:[(0,n.jsxs)("h2",{children:[(0,n.jsx)("span",{children:"QUEM"})," SOMOS"]}),(0,n.jsx)("div",{className:"text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."})]})}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"text-container",children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ."}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "}),(0,n.jsx)("div",{className:"cta-container",children:(0,n.jsx)("span",{tabIndex:"0",className:"cta",children:"CONTATO"})})]}),(0,n.jsx)("div",{className:"bg-img"})]})]})}function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{}),(0,n.jsx)(o,{}),(0,n.jsx)(d,{}),(0,n.jsx)(l,{}),(0,n.jsx)(p,{}),(0,n.jsx)(h,{})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6870)}])},9008:function(e,t,r){r(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);