(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[12],{125:function(e,t,a){"use strict";function r(e,t,a,r,n,o,i){try{var l=e[o](i),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function l(e){r(i,n,o,l,c,"next",e)}function c(e){r(i,n,o,l,c,"throw",e)}l(void 0)}))}}a.d(t,"a",(function(){return n}))},127:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(4),i=a.n(o),l=a(0),c=a.n(l),s=(a(77),a(3)),u=a.n(s),m=["as","className","type","tooltip"],d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,l=e.className,s=e.type,u=void 0===s?"valid":s,d=e.tooltip,f=void 0!==d&&d,p=Object(n.a)(e,m);return c.a.createElement(o,Object(r.a)({},p,{ref:t,className:i()(l,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d;var p=f,v=c.a.createContext({controlId:void 0}),h=a(5),b=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,m=e.type,d=void 0===m?"checkbox":m,f=e.isValid,p=void 0!==f&&f,y=e.isInvalid,g=void 0!==y&&y,x=e.isStatic,O=e.as,E=void 0===O?"input":O,N=Object(n.a)(e,b),w=Object(l.useContext)(v),j=w.controlId,C=w.custom?[s,"custom-control-input"]:[o,"form-check-input"],P=C[0],k=C[1];return o=Object(h.a)(P,k),c.a.createElement(E,Object(r.a)({},N,{ref:t,type:d,id:a||j,className:i()(u,o,p&&"is-valid",g&&"is-invalid",x&&"position-static")}))}));y.displayName="FormCheckInput";var g=y,x=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,u=e.htmlFor,m=Object(n.a)(e,x),d=Object(l.useContext)(v),f=d.controlId,p=d.custom?[o,"custom-control-label"]:[a,"form-check-label"],b=p[0],y=p[1];return a=Object(h.a)(b,y),c.a.createElement("label",Object(r.a)({},m,{ref:t,htmlFor:u||f,className:i()(s,a)}))}));O.displayName="FormCheckLabel";var E=O,N=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],w=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,m=void 0!==u&&u,d=e.disabled,f=void 0!==d&&d,b=e.isValid,y=void 0!==b&&b,x=e.isInvalid,O=void 0!==x&&x,w=e.feedbackTooltip,j=void 0!==w&&w,C=e.feedback,P=e.className,k=e.style,I=e.title,F=void 0===I?"":I,S=e.type,L=void 0===S?"checkbox":S,G=e.label,T=e.children,B=e.custom,R=e.as,_=void 0===R?"input":R,A=Object(n.a)(e,N),z="switch"===L||B,U=z?[s,"custom-control"]:[o,"form-check"],V=U[0],D=U[1];o=Object(h.a)(V,D);var M=Object(l.useContext)(v).controlId,J=Object(l.useMemo)((function(){return{controlId:a||M,custom:z}}),[M,z,a]),Q=z||null!=G&&!1!==G&&!T,W=c.a.createElement(g,Object(r.a)({},A,{type:"switch"===L?"checkbox":L,ref:t,isValid:y,isInvalid:O,isStatic:!Q,disabled:f,as:_}));return c.a.createElement(v.Provider,{value:J},c.a.createElement("div",{style:k,className:i()(P,o,z&&"custom-"+L,m&&o+"-inline")},T||c.a.createElement(c.a.Fragment,null,W,Q&&c.a.createElement(E,{title:F},G),(y||O)&&c.a.createElement(p,{type:y?"valid":"invalid",tooltip:j},C))))}));w.displayName="FormCheck",w.Input=g,w.Label=E;var j=w,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],P=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,m=e.isValid,d=e.isInvalid,f=e.lang,p=e.as,b=void 0===p?"input":p,y=Object(n.a)(e,C),g=Object(l.useContext)(v),x=g.controlId,O=g.custom?[s,"custom-file-input"]:[o,"form-control-file"],E=O[0],N=O[1];return o=Object(h.a)(E,N),c.a.createElement(b,Object(r.a)({},y,{ref:t,id:a||x,type:"file",lang:f,className:i()(u,o,m&&"is-valid",d&&"is-invalid")}))}));P.displayName="FormFileInput";var k=P,I=["bsPrefix","bsCustomPrefix","className","htmlFor"],F=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,u=e.htmlFor,m=Object(n.a)(e,I),d=Object(l.useContext)(v),f=d.controlId,p=d.custom?[o,"custom-file-label"]:[a,"form-file-label"],b=p[0],y=p[1];return a=Object(h.a)(b,y),c.a.createElement("label",Object(r.a)({},m,{ref:t,htmlFor:u||f,className:i()(s,a),"data-browse":m["data-browse"]}))}));F.displayName="FormFileLabel";var S=F,L=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],G=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,m=void 0!==u&&u,d=e.isValid,f=void 0!==d&&d,b=e.isInvalid,y=void 0!==b&&b,g=e.feedbackTooltip,x=void 0!==g&&g,O=e.feedback,E=e.className,N=e.style,w=e.label,j=e.children,C=e.custom,P=e.lang,I=e["data-browse"],F=e.as,G=void 0===F?"div":F,T=e.inputAs,B=void 0===T?"input":T,R=Object(n.a)(e,L),_=C?[s,"custom"]:[o,"form-file"],A=_[0],z=_[1];o=Object(h.a)(A,z);var U=Object(l.useContext)(v).controlId,V=Object(l.useMemo)((function(){return{controlId:a||U,custom:C}}),[U,C,a]),D=null!=w&&!1!==w&&!j,M=c.a.createElement(k,Object(r.a)({},R,{ref:t,isValid:f,isInvalid:y,disabled:m,as:B,lang:P}));return c.a.createElement(v.Provider,{value:V},c.a.createElement(G,{style:N,className:i()(E,o,C&&"custom-file")},j||c.a.createElement(c.a.Fragment,null,C?c.a.createElement(c.a.Fragment,null,M,D&&c.a.createElement(S,{"data-browse":I},w)):c.a.createElement(c.a.Fragment,null,D&&c.a.createElement(S,null,w),M),(f||y)&&c.a.createElement(p,{type:f?"valid":"invalid",tooltip:x},O))))}));G.displayName="FormFile",G.Input=k,G.Label=S;var T=G,B=(a(41),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=c.a.forwardRef((function(e,t){var a,o,s=e.bsPrefix,u=e.bsCustomPrefix,m=e.type,d=e.size,f=e.htmlSize,p=e.id,b=e.className,y=e.isValid,g=void 0!==y&&y,x=e.isInvalid,O=void 0!==x&&x,E=e.plaintext,N=e.readOnly,w=e.custom,j=e.as,C=void 0===j?"input":j,P=Object(n.a)(e,B),k=Object(l.useContext)(v).controlId,I=w?[u,"custom"]:[s,"form-control"],F=I[0],S=I[1];if(s=Object(h.a)(F,S),E)(o={})[s+"-plaintext"]=!0,a=o;else if("file"===m){var L;(L={})[s+"-file"]=!0,a=L}else if("range"===m){var G;(G={})[s+"-range"]=!0,a=G}else if("select"===C&&w){var T;(T={})[s+"-select"]=!0,T[s+"-select-"+d]=d,a=T}else{var R;(R={})[s]=!0,R[s+"-"+d]=d,a=R}return c.a.createElement(C,Object(r.a)({},P,{type:m,size:f,ref:t,readOnly:N,id:p||k,className:i()(b,a,g&&"is-valid",O&&"is-invalid")}))}));R.displayName="FormControl";var _=Object.assign(R,{Feedback:p}),A=["bsPrefix","className","children","controlId","as"],z=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.children,u=e.controlId,m=e.as,d=void 0===m?"div":m,f=Object(n.a)(e,A);a=Object(h.a)(a,"form-group");var p=Object(l.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(v.Provider,{value:p},c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i()(o,a)}),s))}));z.displayName="FormGroup";var U=z,V=["bsPrefix","className","as"],D=["xl","lg","md","sm","xs"],M=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"div":l,u=Object(n.a)(e,V),m=Object(h.a)(a,"col"),d=[],f=[];return D.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+m+i:""+m+i+"-"+t),null!=r&&f.push("order"+i+"-"+r),null!=a&&f.push("offset"+i+"-"+a)})),d.length||d.push(m),c.a.createElement(s,Object(r.a)({},u,{ref:t,className:i.a.apply(void 0,[o].concat(d,f))}))}));M.displayName="Col";var J=M,Q=["as","bsPrefix","column","srOnly","className","htmlFor"],W=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"label":a,s=e.bsPrefix,u=e.column,m=e.srOnly,d=e.className,f=e.htmlFor,p=Object(n.a)(e,Q),b=Object(l.useContext)(v).controlId;s=Object(h.a)(s,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var g=i()(d,s,m&&"sr-only",u&&y);return f=f||b,u?c.a.createElement(J,Object(r.a)({ref:t,as:"label",className:g,htmlFor:f},p)):c.a.createElement(o,Object(r.a)({ref:t,className:g,htmlFor:f},p))}));W.displayName="FormLabel",W.defaultProps={column:!1,srOnly:!1};var Y=W,Z=["bsPrefix","className","as","muted"],q=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"small":l,u=e.muted,m=Object(n.a)(e,Z);return a=Object(h.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},m,{ref:t,className:i()(o,a,u&&"text-muted")}))}));q.displayName="FormText";var H=q,K=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));K.displayName="Switch",K.Input=j.Input,K.Label=j.Label;var X=K,$=a(42),ee=["bsPrefix","inline","className","validated","as"],te=Object($.a)("form-row"),ae=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,l=e.className,s=e.validated,u=e.as,m=void 0===u?"form":u,d=Object(n.a)(e,ee);return a=Object(h.a)(a,"form"),c.a.createElement(m,Object(r.a)({},d,{ref:t,className:i()(l,s&&"was-validated",o&&a+"-inline")}))}));ae.displayName="Form",ae.defaultProps={inline:!1},ae.Row=te,ae.Group=U,ae.Control=_,ae.Check=j,ae.File=T,ae.Switch=X,ae.Label=Y,ae.Text=H;t.a=ae},520:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(125),i=a(33),l=a(127),c=a(128),s=a.n(c);function u(){u=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),i=new w(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return C()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=O(i,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=c;var m={};function d(){}function f(){}function p(){}var v={};l(v,n,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(j([])));b&&b!==t&&a.call(b,n)&&(v=b);var y=p.prototype=d.prototype=Object.create(v);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function O(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=p,l(y,"constructor",p),l(p,"constructor",f),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(x.prototype),l(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new x(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,i,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var m=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],m=(t[1],Object(r.useState)("")),d=Object(i.a)(m,2),f=d[0],p=d[1],v=Object(r.useState)(""),h=Object(i.a)(v,2),b=h[0],y=h[1],g=Object(r.useState)(""),x=Object(i.a)(g,2),O=x[0],E=x[1],N=Object(r.useState)(""),w=Object(i.a)(N,2),j=w[0],C=w[1],P=Object(r.useState)(""),k=Object(i.a)(P,2),I=k[0],F=k[1],S=Object(r.useState)(""),L=Object(i.a)(S,2),G=L[0],T=L[1],B=Object(r.useState)(""),R=Object(i.a)(B,2),_=R[0],A=R[1],z=Object(r.useState)(""),U=Object(i.a)(z,2),V=U[0],D=U[1],M=Object(r.useState)(!1),J=Object(i.a)(M,2),Q=J[0],W=J[1],Y=Object(r.useState)({personType:"string",InitialShop:"string",firstName:"string",yearOfBirth:"string",monthOfBirth:"string",dayOfBirth:"string",shopType:"string",creditCard:!0,weChat:!0,livePayment:!0,mobileBanking:!0,trueWallet:!0,shopeePay:!0,alone:!0,website:"string",facebook:"string",linkedin:"string",instagram:"string",other:"string",company:"string",bank:"string",bankAccount:0,rnfCode:"string",domestic:"string",inter:"string",rateQrCode:"string",rateBarCode:"string",copyOfId:"string",logo:"string",bankBook:"string",otherDocument:"string"}),Z=Object(i.a)(Y,2),q=Z[0],H=(Z[1],q.personType),K=q.InitialShop,X=q.firstName,$=q.yearOfBirth,ee=q.monthOfBirth,te=q.dayOfBirth,ae=q.shopType,re=q.creditCard,ne=q.weChat,oe=q.livePayment,ie=q.mobileBanking,le=q.trueWallet,ce=q.shopeePay,se=q.alone,ue=q.website,me=q.facebook,de=q.linkedin,fe=q.instagram,pe=q.other,ve=q.company,he=q.bank,be=q.bankAccount,ye=q.rnfCode,ge=q.domestic,xe=q.inter,Oe=q.rateQrCode,Ee=q.rateBarCode,Ne=q.copyOfId,we=q.logo,je=q.bankBook,Ce=q.otherDocument;function Pe(){return(Pe=Object(o.a)(u().mark((function e(t){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(c,b,O,j,I,G,_,V),e.prev=2,e.next=5,s.a.patch("https://backend.klivepay.com/api/merchant/update-profile?email=merchant%40mail.com",JSON.stringify({merchantName:f,surName:b,firstName:X,mobile:O,address:j,province:I,district:G,subDivision:_,pincode:V,personType:H,InitialShop:K,yearOfBirth:$,monthOfBirth:ee,dayOfBirth:te,shopType:ae,creditCard:re,weChat:ne,livePayment:oe,mobileBanking:ie,trueWallet:le,shopeePay:ce,alone:se,website:ue,facebook:me,linkedin:de,instagram:fe,other:pe,company:ve,bank:he,bankAccount:be,rnfCode:ye,domestic:ge,inter:xe,rateQrCode:Oe,rateBarCode:Ee,copyOfId:Ne,logo:we,bankBook:je,otherDocument:Ce}),{headers:{"Content-Type":"application/json"}});case 5:a=e.sent,console.log("mail",c),console.log(JSON.stringify(null===a||void 0===a?void 0:a.data)),W(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){Q&&alert("Profile changed Succesfully!")}),[Q]),n.a.createElement("div",{className:"col-12 grid-margin"},n.a.createElement("h4",{className:"card-title"},"Personal Information"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row flex-column mt-5 mx-auto"},n.a.createElement("img",{className:"img-lg mx-auto rounded-circle",src:a(63),alt:"Profile"}),n.a.createElement("div",{className:"mt-2 mx-auto"},n.a.createElement("p",null,"Merchant Code: ",n.a.createElement("span",{className:"text-primary"},"M010303")),n.a.createElement("p",{className:"mx-auto"},"Email: ",n.a.createElement("span",{className:"text-primary"},"info@gmail.com")))),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{className:"form-sample"},n.a.createElement("div",{className:"row justify-content-around"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,{className:"row"},n.a.createElement("label",{htmlFor:"exampleInputUsername1"},"System Username"),n.a.createElement(l.a.Control,{type:"text",id:"exampleInputUsername1",onChange:function(e){return p(e.target.value)},value:f,placeholder:"info@gmilail.com",size:"lg"}))),n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,null,n.a.createElement("label",{htmlFor:"exampleSelectGender"},"Surname"),n.a.createElement(l.a.Control,{type:"text",id:"exampleInputUsername1",onChange:function(e){return y(e.target.value)},value:b,placeholder:"info@gmilail.com",size:"lg"})))),n.a.createElement("div",{className:"row justify-content-around"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,{className:"row"},n.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Contact Phone Number"),n.a.createElement(l.a.Control,{type:"text",id:"exampleInputUsername1",onChange:function(e){return E(parseInt(e.target.value))},value:O,placeholder:"info@gmilail.com"}))),n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,{className:"row"},n.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Address"),n.a.createElement(l.a.Control,{type:"text",onChange:function(e){return C(e.target.value)},value:j,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),n.a.createElement("div",{className:"row justify-content-around"},n.a.createElement("div",{className:"col-md-5 "},n.a.createElement(l.a.Group,null,n.a.createElement("label",{htmlFor:"exampleSelectGender"},"Province"),n.a.createElement(l.a.Control,{type:"text",onChange:function(e){return F(e.target.value)},value:I,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"}))),n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,null,n.a.createElement("label",{htmlFor:"exampleSelectGender"},"District/District"),n.a.createElement(l.a.Control,{type:"text",onChange:function(e){return T(e.target.value)},value:G,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),n.a.createElement("div",{className:"row justify-content-around"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,null,n.a.createElement("label",{htmlFor:"exampleSelectGender"},"Sub-Division"),n.a.createElement(l.a.Control,{type:"text",onChange:function(e){return A(e.target.value)},value:_,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"}))),n.a.createElement("div",{className:"col-md-5"},n.a.createElement(l.a.Group,null,n.a.createElement("label",{htmlFor:"exampleSelectGender"},"Zip Code"),n.a.createElement(l.a.Control,{type:"text",onChange:function(e){return D(parseInt(e.target.value))},value:V,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"mx-auto col-md-11"},n.a.createElement("button",{onClick:function(e){return function(e){return Pe.apply(this,arguments)}(e)},className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")))))))};t.default=function(){return n.a.createElement("div",null,n.a.createElement(m,null))}}}]);
//# sourceMappingURL=12.9ab8d524.chunk.js.map