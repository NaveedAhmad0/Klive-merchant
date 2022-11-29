(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[16],{156:function(e,t,a){"use strict";function r(e,t,a,r,n,o,i){try{var l=e[o](i),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function l(e){r(i,n,o,l,c,"next",e)}function c(e){r(i,n,o,l,c,"throw",e)}l(void 0)}))}}a.d(t,"a",(function(){return n}))},188:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(4),i=a.n(o),l=a(0),c=a.n(l),s=(a(92),a(2)),u=a.n(s),d=["as","className","type","tooltip"],f={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},m=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,l=e.className,s=e.type,u=void 0===s?"valid":s,f=e.tooltip,m=void 0!==f&&f,v=Object(n.a)(e,d);return c.a.createElement(o,Object(r.a)({},v,{ref:t,className:i()(l,u+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=f;var v=m,h=c.a.createContext({controlId:void 0}),p=a(5),b=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.type,f=void 0===d?"checkbox":d,m=e.isValid,v=void 0!==m&&m,y=e.isInvalid,g=void 0!==y&&y,x=e.isStatic,w=e.as,N=void 0===w?"input":w,O=Object(n.a)(e,b),j=Object(l.useContext)(h),E=j.controlId,P=j.custom?[s,"custom-control-input"]:[o,"form-check-input"],k=P[0],I=P[1];return o=Object(p.a)(k,I),c.a.createElement(N,Object(r.a)({},O,{ref:t,type:f,id:a||E,className:i()(u,o,v&&"is-valid",g&&"is-invalid",x&&"position-static")}))}));y.displayName="FormCheckInput";var g=y,x=["bsPrefix","bsCustomPrefix","className","htmlFor"],w=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,x),f=Object(l.useContext)(h),m=f.controlId,v=f.custom?[o,"custom-control-label"]:[a,"form-check-label"],b=v[0],y=v[1];return a=Object(p.a)(b,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||m,className:i()(s,a)}))}));w.displayName="FormCheckLabel";var N=w,O=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],j=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,f=e.disabled,m=void 0!==f&&f,b=e.isValid,y=void 0!==b&&b,x=e.isInvalid,w=void 0!==x&&x,j=e.feedbackTooltip,E=void 0!==j&&j,P=e.feedback,k=e.className,I=e.style,C=e.title,L=void 0===C?"":C,F=e.type,S=void 0===F?"checkbox":F,R=e.label,T=e.children,_=e.custom,G=e.as,V=void 0===G?"input":G,z=Object(n.a)(e,O),M="switch"===S||_,A=M?[s,"custom-control"]:[o,"form-check"],J=A[0],U=A[1];o=Object(p.a)(J,U);var D=Object(l.useContext)(h).controlId,Y=Object(l.useMemo)((function(){return{controlId:a||D,custom:M}}),[D,M,a]),K=M||null!=R&&!1!==R&&!T,q=c.a.createElement(g,Object(r.a)({},z,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:w,isStatic:!K,disabled:m,as:V}));return c.a.createElement(h.Provider,{value:Y},c.a.createElement("div",{style:I,className:i()(k,o,M&&"custom-"+S,d&&o+"-inline")},T||c.a.createElement(c.a.Fragment,null,q,K&&c.a.createElement(N,{title:L},R),(y||w)&&c.a.createElement(v,{type:y?"valid":"invalid",tooltip:E},P))))}));j.displayName="FormCheck",j.Input=g,j.Label=N;var E=j,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,m=e.lang,v=e.as,b=void 0===v?"input":v,y=Object(n.a)(e,P),g=Object(l.useContext)(h),x=g.controlId,w=g.custom?[s,"custom-file-input"]:[o,"form-control-file"],N=w[0],O=w[1];return o=Object(p.a)(N,O),c.a.createElement(b,Object(r.a)({},y,{ref:t,id:a||x,type:"file",lang:m,className:i()(u,o,d&&"is-valid",f&&"is-invalid")}))}));k.displayName="FormFileInput";var I=k,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],L=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,C),f=Object(l.useContext)(h),m=f.controlId,v=f.custom?[o,"custom-file-label"]:[a,"form-file-label"],b=v[0],y=v[1];return a=Object(p.a)(b,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||m,className:i()(s,a),"data-browse":d["data-browse"]}))}));L.displayName="FormFileLabel";var F=L,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],R=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,f=e.isValid,m=void 0!==f&&f,b=e.isInvalid,y=void 0!==b&&b,g=e.feedbackTooltip,x=void 0!==g&&g,w=e.feedback,N=e.className,O=e.style,j=e.label,E=e.children,P=e.custom,k=e.lang,C=e["data-browse"],L=e.as,R=void 0===L?"div":L,T=e.inputAs,_=void 0===T?"input":T,G=Object(n.a)(e,S),V=P?[s,"custom"]:[o,"form-file"],z=V[0],M=V[1];o=Object(p.a)(z,M);var A=Object(l.useContext)(h).controlId,J=Object(l.useMemo)((function(){return{controlId:a||A,custom:P}}),[A,P,a]),U=null!=j&&!1!==j&&!E,D=c.a.createElement(I,Object(r.a)({},G,{ref:t,isValid:m,isInvalid:y,disabled:d,as:_,lang:k}));return c.a.createElement(h.Provider,{value:J},c.a.createElement(R,{style:O,className:i()(N,o,P&&"custom-file")},E||c.a.createElement(c.a.Fragment,null,P?c.a.createElement(c.a.Fragment,null,D,U&&c.a.createElement(F,{"data-browse":C},j)):c.a.createElement(c.a.Fragment,null,U&&c.a.createElement(F,null,j),D),(m||y)&&c.a.createElement(v,{type:m?"valid":"invalid",tooltip:x},w))))}));R.displayName="FormFile",R.Input=I,R.Label=F;var T=R,_=(a(43),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),G=c.a.forwardRef((function(e,t){var a,o,s=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,m=e.htmlSize,v=e.id,b=e.className,y=e.isValid,g=void 0!==y&&y,x=e.isInvalid,w=void 0!==x&&x,N=e.plaintext,O=e.readOnly,j=e.custom,E=e.as,P=void 0===E?"input":E,k=Object(n.a)(e,_),I=Object(l.useContext)(h).controlId,C=j?[u,"custom"]:[s,"form-control"],L=C[0],F=C[1];if(s=Object(p.a)(L,F),N)(o={})[s+"-plaintext"]=!0,a=o;else if("file"===d){var S;(S={})[s+"-file"]=!0,a=S}else if("range"===d){var R;(R={})[s+"-range"]=!0,a=R}else if("select"===P&&j){var T;(T={})[s+"-select"]=!0,T[s+"-select-"+f]=f,a=T}else{var G;(G={})[s]=!0,G[s+"-"+f]=f,a=G}return c.a.createElement(P,Object(r.a)({},k,{type:d,size:m,ref:t,readOnly:O,id:v||I,className:i()(b,a,g&&"is-valid",w&&"is-invalid")}))}));G.displayName="FormControl";var V=Object.assign(G,{Feedback:v}),z=["bsPrefix","className","children","controlId","as"],M=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,m=Object(n.a)(e,z);a=Object(p.a)(a,"form-group");var v=Object(l.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(h.Provider,{value:v},c.a.createElement(f,Object(r.a)({},m,{ref:t,className:i()(o,a)}),s))}));M.displayName="FormGroup";var A=M,J=["bsPrefix","className","as"],U=["xl","lg","md","sm","xs"],D=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"div":l,u=Object(n.a)(e,J),d=Object(p.a)(a,"col"),f=[],m=[];return U.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=a&&m.push("offset"+i+"-"+a)})),f.length||f.push(d),c.a.createElement(s,Object(r.a)({},u,{ref:t,className:i.a.apply(void 0,[o].concat(f,m))}))}));D.displayName="Col";var Y=D,K=["as","bsPrefix","column","srOnly","className","htmlFor"],q=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"label":a,s=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,m=e.htmlFor,v=Object(n.a)(e,K),b=Object(l.useContext)(h).controlId;s=Object(p.a)(s,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var g=i()(f,s,d&&"sr-only",u&&y);return m=m||b,u?c.a.createElement(Y,Object(r.a)({ref:t,as:"label",className:g,htmlFor:m},v)):c.a.createElement(o,Object(r.a)({ref:t,className:g,htmlFor:m},v))}));q.displayName="FormLabel",q.defaultProps={column:!1,srOnly:!1};var B=q,H=["bsPrefix","className","as","muted"],Q=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"small":l,u=e.muted,d=Object(n.a)(e,H);return a=Object(p.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},d,{ref:t,className:i()(o,a,u&&"text-muted")}))}));Q.displayName="FormText";var W=Q,X=c.a.forwardRef((function(e,t){return c.a.createElement(E,Object(r.a)({},e,{ref:t,type:"switch"}))}));X.displayName="Switch",X.Input=E.Input,X.Label=E.Label;var Z=X,$=a(44),ee=["bsPrefix","inline","className","validated","as"],te=Object($.a)("form-row"),ae=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,l=e.className,s=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(n.a)(e,ee);return a=Object(p.a)(a,"form"),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i()(l,s&&"was-validated",o&&a+"-inline")}))}));ae.displayName="Form",ae.defaultProps={inline:!1},ae.Row=te,ae.Group=A,ae.Control=V,ae.Check=E,ae.File=T,ae.Switch=Z,ae.Label=B,ae.Text=W;t.a=ae},271:function(e,t,a){"use strict";a.r(t);var r=a(156),n=a(19),o=a(0),i=a.n(o),l=a(6),c=a(10),s=a(188),u=a(69),d=a.n(u);function f(){f=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),i=new j(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return P()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=w(i,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var u={};function d(){}function m(){}function v(){}var h={};l(h,n,(function(){return this}));var p=Object.getPrototypeOf,b=p&&p(p(E([])));b&&b!==t&&a.call(b,n)&&(h=b);var y=v.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function E(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=v,l(y,"constructor",v),l(v,"constructor",m),m.displayName=l(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(x.prototype),l(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new x(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,i,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=E,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:E(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){Object(o.useEffect)((function(){localStorage.clear()}),[]);var e=Object(o.useState)(""),t=Object(n.a)(e,2),a=t[0],u=t[1],m=Object(o.useState)(""),v=Object(n.a)(m,2),h=v[0],p=v[1],b=Object(o.useState)(!1),y=Object(n.a)(b,2),g=y[0],x=y[1],w=Object(o.useState)(""),N=Object(n.a)(w,2),O=N[0],j=N[1];function E(){return(E=Object(r.a)(f().mark((function e(t){var r,n,o,i,l,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a,h),e.prev=2,e.next=5,d.a.post("https://backend.klivepay.com/api/merchant/login",JSON.stringify({email:a,password:h}),{headers:{"Content-Type":"application/json"}});case 5:o=e.sent,console.log(JSON.stringify(null===o||void 0===o?void 0:o.data)),i=null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.accessToken,l=null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.merchantUid,localStorage.setItem("token",i),localStorage.setItem("email",a),localStorage.setItem("merchantUid",l),console.log("merchantUid",l),u(""),p(""),x(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),(null===e.t0||void 0===e.t0?void 0:e.t0.response)?400===(null===(c=e.t0.response)||void 0===c?void 0:c.status)?(j("Invalid Credentialials"),x(!1)):j("Login failed"):j("No Server Response"),console.log(e.t0);case 22:console.log(g);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-6 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"brand-logo"},i.a.createElement("h3",{className:O?"text-danger":"errMsg"},O)),i.a.createElement("h4",{className:"text-primary"},"Merchant Login"),i.a.createElement(s.a,{className:"pt-3"},i.a.createElement(s.a.Group,{className:"d-flex search-field"},i.a.createElement(s.a.Control,{type:"email",placeholder:"Username",onChange:function(e){return function(e){u(e.target.value)}(e)},value:a,size:"lg",className:"h-auto"})),i.a.createElement(s.a.Group,{className:"d-flex search-field"},i.a.createElement(s.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return function(e){p(e.target.value)}(e)},value:h,size:"lg",className:"h-auto"})),i.a.createElement("div",{className:"mt-3"},g?i.a.createElement(l.a,{to:"/merchant/dashboard"}):i.a.createElement("button",{onClick:function(e){return function(e){return E.apply(this,arguments)}(e)},className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"},"SIGN IN")),i.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label text-muted"},i.a.createElement("input",{type:"checkbox",className:"form-check-input"}),i.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),i.a.createElement(c.b,{to:"/merchant/forgot-password",className:"auth-link text-black"},"Forgot password?")),i.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account?"," ",i.a.createElement(c.b,{to:"/merchant/registration",className:"text-primary"},"Create"))))))))}}}]);
//# sourceMappingURL=16.f0636e55.chunk.js.map