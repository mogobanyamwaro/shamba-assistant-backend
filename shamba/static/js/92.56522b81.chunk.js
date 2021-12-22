(this["webpackJsonpbamburgh-react-admin-dashboard-material-ui-pro"]=this["webpackJsonpbamburgh-react-admin-dashboard-material-ui-pro"]||[]).push([[92],{1031:function(e,t,n){var r;e.exports=(r=n(0),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return r(l).default}});var s=r(n(11)),c=r(n(9)),f=r(n(5)),d=n(2),p=function(e){function t(){var e;o(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,f.default)(i({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,r=t.pipe,o=t.mask,a={guide:t.guide,placeholderChar:t.placeholderChar,showMask:t.showMask},i="function"==typeof r&&"function"==typeof e.pipe?r.toString()!==e.pipe.toString():(0,d.isNil)(r)&&!(0,d.isNil)(e.pipe)||!(0,d.isNil)(r)&&(0,d.isNil)(e.pipe),u=o.toString()!==e.mask.toString(),l=Object.keys(a).some((function(t){return a[t]!==e[t]}))||u||i;(n!==this.inputElement.value||l)&&this.initTextMask()}},{key:"render",value:function(){var e=this.props,t=e.render,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["render"]);return delete n.mask,delete n.guide,delete n.pipe,delete n.placeholderChar,delete n.keepCharPositions,delete n.value,delete n.onBlur,delete n.onChange,delete n.showMask,t(this.setRef,i({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},n))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(s.default.PureComponent);t.default=p,p.propTypes={mask:c.default.oneOfType([c.default.array,c.default.func,c.default.bool,c.default.shape({mask:c.default.oneOfType([c.default.array,c.default.func]),pipe:c.default.func})]).isRequired,guide:c.default.bool,value:c.default.oneOfType([c.default.string,c.default.number]),pipe:c.default.func,placeholderChar:c.default.string,keepCharPositions:c.default.bool,showMask:c.default.bool},p.defaultProps={render:function(e,t){return s.default.createElement("input",i({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,n){"use strict";function r(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.placeholderChar;if(!r(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isArray=r,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return"undefined"==typeof e||null===e},t.processCaretTraps=function(e){for(var t=[],n=void 0;-1!==(n=e.indexOf(i));)t.push(n),e.splice(n,1);return{maskWithoutCaretTraps:e,indexes:t}};var o=n(1),a=[],i="[]"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,o.isArray)(t)){if(("undefined"==typeof t?"undefined":r(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,n),t=(0,o.processCaretTraps)(t).maskWithoutCaretTraps}var l=n.guide,s=void 0===l||l,c=n.previousConformedValue,f=void 0===c?u:c,d=n.placeholderChar,p=void 0===d?a.placeholderChar:d,h=n.placeholder,v=void 0===h?(0,o.convertMaskToPlaceholder)(t,p):h,m=n.currentCaretPosition,y=n.keepCharPositions,g=!1===s&&void 0!==f,b=e.length,k=f.length,C=v.length,O=t.length,E=b-k,P=E>0,T=m+(P?-E:0),x=T+Math.abs(E);if(!0===y&&!P){for(var w=u,j=T;j<x;j++)v[j]===p&&(w+=p);e=e.slice(0,T)+w+e.slice(T,b)}for(var M=e.split(u).map((function(e,t){return{char:e,isNew:t>=T&&t<x}})),_=b-1;_>=0;_--){var S=M[_].char;if(S!==p){var R=_>=T&&k===O;S===v[R?_-E:_]&&M.splice(_,1)}}var N=u,V=!1;e:for(var A=0;A<C;A++){var F=v[A];if(F===p){if(M.length>0)for(;M.length>0;){var I=M.shift(),B=I.char,W=I.isNew;if(B===p&&!0!==g){N+=p;continue e}if(t[A].test(B)){if(!0===y&&!1!==W&&f!==u&&!1!==s&&P){for(var D=M.length,J=null,q=0;q<D;q++){var L=M[q];if(L.char!==p&&!1===L.isNew)break;if(L.char===p){J=q;break}}null!==J?(N+=B,M.splice(J,1)):A--}else N+=B;continue e}V=!0}!1===g&&(N+=v.substr(A,C));break}N+=F}if(g&&!1===P){for(var z=null,U=0;U<N.length;U++)v[U]===p&&(z=U);N=null!==z?N.substr(0,z+1):u}return{conformedValue:N,meta:{someCharsRejected:V}}};var o=n(2),a=n(1),i=[],u=""},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,o=void 0===t?r:t,a=e.previousPlaceholder,i=void 0===a?r:a,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,c=e.rawValue,f=e.placeholderChar,d=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?n:p,v=e.caretTrapIndexes,m=void 0===v?n:v;if(0===l||!c.length)return 0;var y=c.length,g=o.length,b=d.length,k=s.length,C=y-g,O=C>0;if(C>1&&!O&&0!==g)return l;var E=0,P=void 0,T=void 0;if(!O||o!==s&&s!==d){var x=s.toLowerCase(),w=c.toLowerCase().substr(0,l).split(r).filter((function(e){return-1!==x.indexOf(e)}));T=w[w.length-1];var j=i.substr(0,w.length).split(r).filter((function(e){return e!==f})).length,M=d.substr(0,w.length).split(r).filter((function(e){return e!==f})).length!==j,_=void 0!==i[w.length-1]&&void 0!==d[w.length-2]&&i[w.length-1]!==f&&i[w.length-1]!==d[w.length-1]&&i[w.length-1]===d[w.length-2];!O&&(M||_)&&j>0&&d.indexOf(T)>-1&&void 0!==c[l]&&(P=!0,T=c[l]);for(var S=h.map((function(e){return x[e]})).filter((function(e){return e===T})).length,R=w.filter((function(e){return e===T})).length,N=d.substr(0,d.indexOf(f)).split(r).filter((function(e,t){return e===T&&c[t]!==e})).length+R+S+(P?1:0),V=0,A=0;A<k&&(E=A+1,x[A]===T&&V++,!(V>=N));A++);}else E=l-C;if(O){for(var F=E,I=E;I<=b;I++)if(d[I]===f&&(F=I),d[I]===f||-1!==m.indexOf(I)||I===b)return F}else if(P){for(var B=E-1;B>=0;B--)if(s[B]===T||-1!==m.indexOf(B)||0===B)return B}else for(var W=E;W>=0;W--)if(d[W-1]===f||-1!==m.indexOf(W)||0===W)return W};var n=[],r=""},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){document.activeElement===e&&(v?m((function(){return e.setSelectionRange(t,t,p)}),0):e.setSelectionRange(t,t,p))}function a(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(void 0===e||null===e)return d;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,p=r.inputElement,v=r.mask,m=r.guide,y=r.pipe,g=r.placeholderChar,b=void 0===g?f.placeholderChar:g,k=r.keepCharPositions,C=void 0!==k&&k,O=r.showMask,E=void 0!==O&&O;if("undefined"==typeof n&&(n=p.value),n!==t.previousConformedValue){("undefined"==typeof v?"undefined":u(v))===h&&void 0!==v.pipe&&void 0!==v.mask&&(y=v.pipe,v=v.mask);var P=void 0,T=void 0;if(v instanceof Array&&(P=(0,c.convertMaskToPlaceholder)(v,b)),!1!==v){var x=a(n),w=p.selectionEnd,j=t.previousConformedValue,M=t.previousPlaceholder,_=void 0;if(("undefined"==typeof v?"undefined":u(v))===f.strFunction){if(!1===(T=v(x,{currentCaretPosition:w,previousConformedValue:j,placeholderChar:b})))return;var S=(0,c.processCaretTraps)(T),R=S.maskWithoutCaretTraps,N=S.indexes;T=R,_=N,P=(0,c.convertMaskToPlaceholder)(T,b)}else T=v;var V={previousConformedValue:j,guide:m,placeholderChar:b,pipe:y,placeholder:P,currentCaretPosition:w,keepCharPositions:C},A=(0,s.default)(x,T,V),F=A.conformedValue,I=("undefined"==typeof y?"undefined":u(y))===f.strFunction,B={};I&&(!1===(B=y(F,i({rawValue:x},V)))?B={value:j,rejected:!0}:(0,c.isString)(B)&&(B={value:B}));var W=I?B.value:F,D=(0,l.default)({previousConformedValue:j,previousPlaceholder:M,conformedValue:W,placeholder:P,rawValue:x,currentCaretPosition:w,placeholderChar:b,indexesOfPipedChars:B.indexesOfPipedChars,caretTrapIndexes:_}),J=W===P&&0===D,q=E?P:d,L=J?q:W;t.previousConformedValue=L,t.previousPlaceholder=P,p.value!==L&&(p.value=L,o(p,D))}}}}};var l=r(n(4)),s=r(n(3)),c=n(2),f=n(1),d="",p="none",h="object",v="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,u,l){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,a,i,u,l],f=0;(s=new Error(t.replace(/%s/g,(function(){return c[f++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";var r=n(6),o=n(7),a=n(10);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator,e.exports=n(8)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=r}]))},1279:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(0),o=n.n(r),a=n(18),i=n(57),u=n(10),l=n(11),s=n(128),c=n(281),f=n(277),d=n(236),p=n(234),h=n(1031),v=n.n(h),m=["inputRef"],y=["inputRef"],g=["inputRef"];function b(e){var t=e.inputRef,n=Object(s.a)(e,m);return o.a.createElement(v.a,Object.assign({},n,{ref:function(e){t(e?e.inputElement:null)},mask:["+","1"," ","(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0,guide:!0}))}function k(e){var t=e.inputRef,n=Object(s.a)(e,y);return o.a.createElement(v.a,Object.assign({},n,{ref:function(e){t(e?e.inputElement:null)},mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0,guide:!0}))}function C(e){var t=e.inputRef,n=Object(s.a)(e,g);return o.a.createElement(v.a,Object.assign({},n,{ref:function(e){t(e?e.inputElement:null)},mask:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0,guide:!0}))}function O(){var e=Object(r.useState)({phone:"+1 (456) 456-4564",cc:"4242 4242 4242 4242",date:"09/12/2020"}),t=Object(l.a)(e,2),n=t[0],a=t[1],s=function(e){return function(t){a(Object(u.a)(Object(u.a)({},n),{},Object(i.a)({},e,t.target.value)))}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{className:"shadow-xxl px-4 py-5"},o.a.createElement(f.a,{item:!0,md:8,lg:6,className:"mx-auto p-0"},o.a.createElement("div",{className:"heading-3"},"Phone numbers"),o.a.createElement(d.a,{fullWidth:!0,size:"medium"},o.a.createElement(p.a,{value:n.phone,onChange:s,name:"phone",id:"phone-mask-input",inputComponent:b})),o.a.createElement("div",{className:"divider my-5"}),o.a.createElement("div",{className:"heading-3"},"Dates"),o.a.createElement(d.a,{fullWidth:!0,size:"medium"},o.a.createElement(p.a,{value:n.date,onChange:s,name:"date",id:"date-mask-input",inputComponent:k})),o.a.createElement("div",{className:"divider my-5"}),o.a.createElement("div",{className:"heading-3"},"Credit Card"),o.a.createElement(d.a,{fullWidth:!0,size:"medium"},o.a.createElement(p.a,{value:n.cc,onChange:s,name:"cc",id:"cc-mask-input",inputComponent:C})))))}function E(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.e,{titleHeading:"Input Mask",titleDescription:"Add all kind of input masks for inputs for a better user experience."}),o.a.createElement(a.a,null,o.a.createElement(O,null)))}}}]);
//# sourceMappingURL=92.56522b81.chunk.js.map