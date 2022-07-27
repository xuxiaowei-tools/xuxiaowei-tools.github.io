var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}function W(g){var S=g.default;if(typeof S=="function"){var w=function(){return S.apply(this,arguments)};w.prototype=S.prototype}else w={};return Object.defineProperty(w,"__esModule",{value:!0}),Object.keys(g).forEach(function(E){var b=Object.getOwnPropertyDescriptor(g,E);Object.defineProperty(w,E,b.get?b:{enumerable:!0,get:function(){return g[E]}})}),w}var N={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(g,S){(function(E,b){g.exports=b()})($,function(){return function(){var w={686:function(s,u,t){t.d(u,{default:function(){return X}});var a=t(279),f=t.n(a),l=t(370),h=t.n(l),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=m()(n);return d("cut"),e},p=v;function T(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var k=function(n,e){var r=T(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},R=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=k(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=k(n.value,e):(r=m()(n),d("copy")),r},P=R;function A(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(i)}var D=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,c=n.target,_=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0)if(c&&A(c)==="object"&&c.nodeType===1){if(r==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return P(_,{container:o});if(c)return r==="cut"?p(c):P(c,{container:o})},F=D;function x(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(i)}function H(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function M(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function I(i,n,e){return n&&M(i.prototype,n),e&&M(i,e),i}function z(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&L(i,n)}function L(i,n){return L=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},L(i,n)}function B(i){var n=G();return function(){var r=C(i),o;if(n){var c=C(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return U(this,o)}}function U(i,n){return n&&(x(n)==="object"||typeof n=="function")?n:Y(i)}function Y(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function G(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function C(i){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(i)}function j(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var V=function(i){z(e,i);var n=B(e);function e(r,o){var c;return H(this,e),c=n.call(this),c.resolveOptions(o),c.listenClick(r),c}return I(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=x(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var c=this;this.listener=h()(o,"click",function(_){return c.onClick(_)})}},{key:"onClick",value:function(o){var c=o.delegateTarget||o.currentTarget,_=this.action(c)||"copy",O=F({action:_,container:this.container,target:this.target(c),text:this.text(c)});this.emit(O?"success":"error",{action:_,text:O,trigger:c,clearSelection:function(){c&&c.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return j("action",o)}},{key:"defaultTarget",value:function(o){var c=j("target",o);if(c)return document.querySelector(c)}},{key:"defaultText",value:function(o){return j("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(o,c)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],c=typeof o=="string"?[o]:o,_=!!document.queryCommandSupported;return c.forEach(function(O){_=_&&!!document.queryCommandSupported(O)}),_}}]),e}(f()),X=V},828:function(s){var u=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(f,l){for(;f&&f.nodeType!==u;){if(typeof f.matches=="function"&&f.matches(l))return f;f=f.parentNode}}s.exports=a},438:function(s,u,t){var a=t(828);function f(y,m,d,v,p){var T=h.apply(this,arguments);return y.addEventListener(d,T,p),{destroy:function(){y.removeEventListener(d,T,p)}}}function l(y,m,d,v,p){return typeof y.addEventListener=="function"?f.apply(null,arguments):typeof d=="function"?f.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(T){return f(T,m,d,v,p)}))}function h(y,m,d,v){return function(p){p.delegateTarget=a(p.target,m),p.delegateTarget&&v.call(y,p)}}s.exports=l},879:function(s,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(s,u,t){var a=t(879),f=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!a.string(v))throw new TypeError("Second argument must be a String");if(!a.fn(p))throw new TypeError("Third argument must be a Function");if(a.node(d))return h(d,v,p);if(a.nodeList(d))return y(d,v,p);if(a.string(d))return m(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(T){T.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(T){T.removeEventListener(v,p)})}}}function m(d,v,p){return f(document.body,d,v,p)}s.exports=l},817:function(s){function u(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),a=l.toString()}return a}s.exports=u},279:function(s){function u(){}u.prototype={on:function(t,a,f){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:f}),this},once:function(t,a,f){var l=this;function h(){l.off(t,h),a.apply(f,arguments)}return h._=a,this.on(t,h,f)},emit:function(t){var a=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=f.length;for(l;l<h;l++)f[l].fn.apply(f[l].ctx,a);return this},off:function(t,a){var f=this.e||(this.e={}),l=f[t],h=[];if(l&&a)for(var y=0,m=l.length;y<m;y++)l[y].fn!==a&&l[y].fn._!==a&&h.push(l[y]);return h.length?f[t]=h:delete f[t],this}},s.exports=u,s.exports.TinyEmitter=u}},E={};function b(s){if(E[s])return E[s].exports;var u=E[s]={exports:{}};return w[s](u,u.exports,b),u.exports}return function(){b.n=function(s){var u=s&&s.__esModule?function(){return s.default}:function(){return s};return b.d(u,{a:u}),u}}(),function(){b.d=function(s,u){for(var t in u)b.o(u,t)&&!b.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:u[t]})}}(),function(){b.o=function(s,u){return Object.prototype.hasOwnProperty.call(s,u)}}(),b(686)}().default})})(N);const K=J(N.exports),Z=g=>{const S=(g==null?void 0:g.appendToBody)===void 0?!0:g.appendToBody;return{toClipboard(w,E){return new Promise((b,s)=>{const u=document.createElement("button"),t=new K(u,{text:()=>w,action:()=>"copy",container:E!==void 0?E:document.body});t.on("success",a=>{t.destroy(),b(a)}),t.on("error",a=>{t.destroy(),s(a)}),S&&document.body.appendChild(u),u.click(),S&&document.body.removeChild(u)})}}};export{J as a,$ as c,W as g,Z as u};
