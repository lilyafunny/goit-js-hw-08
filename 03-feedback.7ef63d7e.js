!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),s?y(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(x(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function h(){var e=p(),n=x(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S="feedback-form-state",x=JSON.parse(localStorage.getItem(S))||{},O={form:document.querySelector("form"),textarea:document.querySelector("textarea")};!function(){if(x){var e=O.form.elements,t=e.email,n=e.message;t.value=x.email||"",n.value=x.message||""}}(),O.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.form.value||""===O.textarea.value)return alert("Please fill all fields!");console.log(x),e.currentTarget.reset(),localStorage.removeItem(S)})),O.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(S,t)}),500)),O.form.addEventListener("input",(function(e){x[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(x))}))}();
//# sourceMappingURL=03-feedback.7ef63d7e.js.map
