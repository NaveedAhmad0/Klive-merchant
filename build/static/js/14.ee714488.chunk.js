(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[14],{496:function(e,a,t){e.exports={userHeading:"merchantProfile_userHeading__1as-3",usercardbody:"merchantProfile_usercardbody__3ONc_",userLabel:"merchantProfile_userLabel__2kr5E",userInputs:"merchantProfile_userInputs__1fhAh",userBtn:"merchantProfile_userBtn__ZJmI3"}},520:function(e,a,t){"use strict";t.r(a);var n=t(32),c=t(63),r=t(155),l=t(19),o=t(67),s=t.n(o),m=t(0),i=t.n(m),u=t(496),d=t.n(u),p=t(503),h=t(498),f=t.n(h);function b(){b=function(){return e};var e={},a=Object.prototype,t=a.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},c=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function o(e,a,t){return Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[a]}try{o({},"")}catch(w){o=function(e,a,t){return e[a]=t}}function s(e,a,t,n){var c=a&&a.prototype instanceof u?a:u,r=Object.create(c.prototype),l=new x(n||[]);return r._invoke=function(e,a,t){var n="suspendedStart";return function(c,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===c)throw r;return C()}for(t.method=c,t.arg=r;;){var l=t.delegate;if(l){var o=N(l,t);if(o){if(o===i)continue;return o}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var s=m(e,a,t);if("normal"===s.type){if(n=t.done?"completed":"suspendedYield",s.arg===i)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(n="completed",t.method="throw",t.arg=s.arg)}}}(e,t,l),r}function m(e,a,t){try{return{type:"normal",arg:e.call(a,t)}}catch(w){return{type:"throw",arg:w}}}e.wrap=s;var i={};function u(){}function d(){}function p(){}var h={};o(h,c,(function(){return this}));var f=Object.getPrototypeOf,y=f&&f(f(j([])));y&&y!==a&&t.call(y,c)&&(h=y);var g=p.prototype=u.prototype=Object.create(h);function v(e){["next","throw","return"].forEach((function(a){o(e,a,(function(e){return this._invoke(a,e)}))}))}function E(e,a){var n;this._invoke=function(c,r){function l(){return new a((function(n,l){!function n(c,r,l,o){var s=m(e[c],e,r);if("throw"!==s.type){var i=s.arg,u=i.value;return u&&"object"==typeof u&&t.call(u,"__await")?a.resolve(u.__await).then((function(e){n("next",e,l,o)}),(function(e){n("throw",e,l,o)})):a.resolve(u).then((function(e){i.value=e,l(i)}),(function(e){return n("throw",e,l,o)}))}o(s.arg)}(c,r,n,l)}))}return n=n?n.then(l,l):l()}}function N(e,a){var t=e.iterator[a.method];if(void 0===t){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=void 0,N(e,a),"throw"===a.method))return i;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return i}var n=m(t,e.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,i;var c=n.arg;return c?c.done?(a[e.resultName]=c.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,i):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,i)}function k(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function O(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var a=e[c];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function a(){for(;++n<e.length;)if(t.call(e,n))return a.value=e[n],a.done=!1,a;return a.value=void 0,a.done=!0,a};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,o(g,"constructor",p),o(p,"constructor",d),d.displayName=o(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var a="function"==typeof e&&e.constructor;return!!a&&(a===d||"GeneratorFunction"===(a.displayName||a.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,o(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(E.prototype),o(E.prototype,r,(function(){return this})),e.AsyncIterator=E,e.async=function(a,t,n,c,r){void 0===r&&(r=Promise);var l=new E(s(a,t,n,c),r);return e.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},v(g),o(g,l,"Generator"),o(g,c,(function(){return this})),o(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var a=[];for(var t in e)a.push(t);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var a in this)"t"===a.charAt(0)&&t.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function n(t,n){return l.type="throw",l.arg=e,a.next=t,n&&(a.method="next",a.arg=void 0),!!n}for(var c=this.tryEntries.length-1;c>=0;--c){var r=this.tryEntries[c],l=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var o=t.call(r,"catchLoc"),s=t.call(r,"finallyLoc");if(o&&s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,a){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.tryLoc<=this.prev&&t.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var r=c;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=a&&a<=r.finallyLoc&&(r=null);var l=r?r.completion:{};return l.type=e,l.arg=a,r?(this.method="next",this.next=r.finallyLoc,i):this.complete(l)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),i},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),O(t),i}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var c=n.arg;O(t)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,t){return this.delegate={iterator:j(e),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=void 0),i}},e}a.default=function(){var e=new p.a,a=Object(m.useState)(!1),t=Object(l.a)(a,2),o=(t[0],t[1]),u=Object(m.useState)(!0),h=Object(l.a)(u,2),y=h[0],g=h[1],v=Object(m.useState)([{email:"",merchantName:"",merchantId:"",merchantNameEnglish:"",surName:"",yearOfBirth:"",dayOfBirth:"",monthOfBirth:"",showpersonType:"",mobile:0,rnfCode:"",address:"",province:"",district:"",subDivision:"",pincode:0,instagram:"",facebook:"",linkedin:"",website:"",other:"",InitialShop:"",firstName:"",personType:"",shopType:"",creditCard:!0,weChat:!0,livePayment:!0,mobileBanking:!0,trueWallet:!0,shopeePay:!0,alone:!0,company:"",bank:"",bankAccount:0,domestic:"",inter:"",rateQrCode:"",rateBarCode:"",copyOfId:"",logo:"",bankBook:"",otherDocument:""}]),E=Object(l.a)(v,2),N=E[0],k=E[1],O=N;function x(){var e=N,a=!1;return console.log("AKSHDKJHSDKJHAKSHDK",Object.keys(e).length),Object.values(e).every((function(e){return null!==e}))&&Object.values(e).every((function(e){return""!==e}))&&(a=!0),a}console.log("typeof fields",Object.values(O).every((function(e){return null!==e})));var j=localStorage.getItem("email");function C(){return(C=Object(r.a)(b().mark((function e(a){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!x()){e.next=16;break}return e.prev=2,e.next=5,s.a.patch("https://backend.klivepay.com/api/merchant/update-profile?email=".concat(j),JSON.stringify({merchantId:N.merchantId,merchantNameEnglish:N.merchantNameEnglish,merchantName:N.merchantName,personType:N.personType,InitialShop:N.InitialShop,firstName:N.firstName,surName:N.surName,yearOfBirth:N.yearOfBirth,monthOfBirth:N.monthOfBirth,dayOfBirth:N.dayOfBirth,mobile:parseInt(N.mobile),address:N.address,province:N.province,district:N.district,subDivision:N.subDivision,pincode:parseInt(N.pincode),shopType:N.shopType,creditCard:N.creditCard,copyOfId:N.copyOfId,logo:N.logo,bankBook:N.bankBook,otherDocument:N.otherDocument,weChat:N.weChat,livePayment:N.livePayment,mobileBanking:N.mobileBanking,trueWallet:N.trueWallet,shopeePay:N.shopeePay,alone:N.alone,website:N.website,facebook:N.facebook,linkedin:N.linkedin,instagram:N.instagram,other:N.other,company:N.company,bank:N.bank,bankAccount:parseInt(N.bankAccount),rnfCode:N.rnfCode,domestic:N.domestic,inter:N.inter,rateQrCode:N.rateQrCode,rateBarCode:N.rateBarCode}),{headers:{"Content-Type":"application/json"}});case 5:t=e.sent,o(!0),console.log(JSON.stringify(null===t||void 0===t?void 0:t.data)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:alert("Form submitted"),e.next=17;break;case 16:alert("Form has errors.");case 17:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(m.useEffect)((function(){s.a.get("https://backend.klivepay.com/api/merchant/get-profile?email=".concat(j)).then((function(e){k({email:e.data.merchant.email,mobile:e.data.merchant.mobile,merchantName:e.data.merchant.merchantName,merchantId:e.data.merchant.merchantId,merchantNameEnglish:e.data.merchant.merchantNameEnglish,firstName:e.data.merchant.firstName,address:e.data.merchant.address,InitialShop:e.data.merchant.InitialShop,yearOfBirth:e.data.merchant.yearOfBirth,dayOfBirth:e.data.merchant.dayOfBirth,district:e.data.merchant.district,surName:e.data.merchant.surName,province:e.data.merchant.province,bankBook:e.data.merchant.bankBook,copyOfId:e.data.merchant.copyOfId,logo:e.data.merchant.logo,otherDocument:e.data.merchant.otherDocument,monthOfBirth:e.data.merchant.monthOfBirth,subDivision:e.data.merchant.subDivision,pincode:e.data.merchant.pincode,instagram:e.data.merchant.instagram,facebook:e.data.merchant.facebook,linkedin:e.data.merchant.linkedin,website:e.data.merchant.website,other:e.data.merchant.other,shopType:e.data.merchant.shopType,bank:e.data.merchant.bank,rateBarCode:e.data.merchant.rateBarCode,rateQrCode:e.data.merchant.rateQrCode,domestic:e.data.merchant.domestic,bankAccount:e.data.merchant.bankAccount,company:e.data.merchant.company,inter:e.data.merchant.inter,rnfCode:e.data.merchant.rnfCode,personType:e.data.merchant.personType,creditCard:e.data.merchant.creditCard,weChat:e.data.merchant.weChat,livePayment:e.data.merchant.livePayment,mobileBanking:e.data.merchant.mobileBanking,trueWallet:e.data.merchant.trueWallet,shopeePay:e.data.merchant.shopeePay,alone:e.data.merchant.alone}),g(!1),setTimeout((function(){g(!1)}),3e3),console.log("DATA IS ",e.data.merchant)}))}),[]),console.log(N.shopType),i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("h4",{className:"card-title"},"user Personal Information"),y?i.a.createElement("div",{className:"row",style:{height:"500px"}},i.a.createElement("div",{className:"col-12 text-center my-auto"},i.a.createElement(f.a,{color:"#136be0",size:100,speedMultiplier:1}))):i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body ".concat(d.a.usercardbody)},i.a.createElement("h4",{className:"text-center ".concat(d.a.userHeading)},"Profile"),i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("form",{className:"needs-validation",novalidate:!0},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"merchant ID"),i.a.createElement("input",{type:"text",name:"merchantId",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{merchantId:e.target.value}))},id:"validationCustom01",required:!0,value:N.merchantId,className:"form-control ".concat(d.a.userInputs)}),null==O.merchantId||""==O.merchantId?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"validationDefault01",className:d.a.userLabel},"merchant name"),i.a.createElement("input",{type:"text",name:"merchantName",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{merchantName:e.target.value}))},id:"validationCustom01",required:!0,value:N.merchantName,className:"form-control ".concat(d.a.userInputs),placeholder:"name"}),null==O.merchantName||""==O.merchantName?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel}," ","merchant name english"),i.a.createElement("input",{type:"text",className:"form-control ".concat(d.a.userInputs),onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{merchantNameEnglish:e.target.value}))},value:N.merchantNameEnglish}),null==O.merchantNameEnglish||""==O.merchantNameEnglish?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"Email address"),i.a.createElement("input",{type:"email",className:"form-control ".concat(d.a.userInputs),onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{email:e.target.value}))},value:N.email}),null==O.email||""==O.email?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),i.a.createElement("div",null,i.a.createElement("label",{className:d.a.userLabel}," person type"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{class:"form-check form-check-inline"},i.a.createElement("input",{type:"radio",name:"individual",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{personType:"individual"}))},checked:"individual"===N.personType,class:"form-check-input",value:"individual"}),i.a.createElement("label",{className:d.a.userLabel},"individual")),i.a.createElement("div",{class:"form-check form-check-inline"},i.a.createElement("input",{class:"form-check-input",type:"radio",name:"person",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{personType:"corporate"}))},checked:"corporate"===N.personType,value:"corporate"}),i.a.createElement("label",{className:d.a.userLabel},"corporate")),i.a.createElement("br",null)),null==O.personType||""==O.personType?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("br",null),i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"Intial shop(up to 10 characters)"),i.a.createElement("input",{type:"email",name:"InitialShop",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{InitialShop:e.target.value}))},value:N.InitialShop,className:"form-control ".concat(d.a.userInputs)}),null==O.InitialShop||""==O.InitialShop?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"first name"),i.a.createElement("input",{type:"year",name:"firstName",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{firstName:e.target.value}))},value:N.firstName,className:"form-control ".concat(d.a.userInputs)}),null==O.firstName||""==O.firstName?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")),i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"sur name"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{surName:e.target.value}))},value:N.surName,className:"form-control ".concat(d.a.userInputs)}),null==O.surName||""==O.surName?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"year of birth"),i.a.createElement("input",{type:"year",name:"yearOfBirth",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{yearOfBirth:e.target.value}))},value:N.yearOfBirth,className:"form-control ".concat(d.a.userInputs)}),null==O.yearOfBirth||""==O.yearOfBirth?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")),i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"month of birth"),i.a.createElement("input",{type:"month",name:"monthOfBirth",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{monthOfBirth:e.target.value}))},value:N.monthOfBirth,className:"form-control ".concat(d.a.userInputs)}),null==O.monthOfBirth||""==O.monthOfBirth?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")),i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"day of birth"),i.a.createElement("input",{type:"day",name:"dayOfBirth",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{dayOfBirth:e.target.value}))},value:N.dayOfBirth,className:"form-control ".concat(d.a.userInputs)}),null==O.dayOfBirth||""==O.dayOfBirth?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"contact number"),i.a.createElement("input",{type:"number",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{mobile:parseInt(e.target.value)}))},value:N.mobile,className:"form-control ".concat(d.a.userInputs)}),null==O.mobile||""==O.mobile?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"address"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{address:e.target.value}))},value:N.address,className:"form-control ".concat(d.a.userInputs)}),null==O.address||""==O.address?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:d.a.userLabel},"provience"),i.a.createElement("input",{type:"email",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{province:e.target.value}))},value:N.province,className:"form-control ".concat(d.a.userInputs)}),null==O.province||""==O.province?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")),i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:d.a.userLabel},"sub division"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{subDivision:e.target.value}))},value:N.subDivision,className:"form-control ".concat(d.a.userInputs)}),null==O.subDivision||""==O.subDivision?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"d-flex"},i.a.createElement("div",{className:"form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("label",{className:d.a.userLabel},"district"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{district:e.target.value}))},value:N.district,className:"form-control ".concat(d.a.userInputs)}),null==O.district||""==O.district?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("label",{className:d.a.userLabel},"pincode"),i.a.createElement("input",{type:"number",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{pincode:parseInt(e.target.value)}))},value:N.pincode,className:"form-control ".concat(d.a.userInputs),placeholder:"123456"}),null==O.pincode||""==O.pincode?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"},i.a.createElement("label",{className:d.a.userLabel}," shop type"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"shop",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{shopType:"social"}))},checked:"social"===N.shopType}),i.a.createElement("label",{className:d.a.userLabel},"social")),i.a.createElement("div",{class:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{shopType:"website"}))},checked:"website"===N.shopType,name:"shop"}),i.a.createElement("label",{className:d.a.userLabel},"website")),i.a.createElement("br",null),null==O.shopType?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("label",{className:d.a.userLabel},"live payment"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"livepayment",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{livePayment:!0}))},defaultChecked:!1===N.livePayment,value:"yes",checked:!0===N.livePayment}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"livepayment",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{livePayment:!1}))},defaultChecked:!1===N.livePayment,value:"no",checked:!1===N.livePayment}),i.a.createElement("label",{className:d.a.userLabel},"no")),i.a.createElement("br",null),null==O.livePayment?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("label",{className:d.a.userLabel},"shopee pay"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{shopeePay:!0}))},defaultChecked:!1===N.shopeePay,name:"shopeepay",value:"yes",checked:!0===N.shopeePay}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"shopeepay",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{shopeePay:!1}))},defaultChecked:!1===N.shopeePay,value:"no",checked:!1===N.shopeePay}),i.a.createElement("label",{className:d.a.userLabel},"no")),i.a.createElement("br",null),null==O.shopeePay?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")),i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"},i.a.createElement("label",{className:d.a.userLabel},"credit card"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{creditCard:!0}))},name:"creditcard",value:N.creditCard,defaultChecked:!1===N.creditCard,checked:!0===N.creditCard}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{class:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!1===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{creditCard:!1}))},name:"creditcard",value:"no",defaultChecked:!1===N.creditCard,checked:!1===N.creditCard}),i.a.createElement("label",{className:d.a.userLabel},"no")),i.a.createElement("br",null),null==O.creditCard?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("label",{className:d.a.userLabel},"mobile banking"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{mobileBanking:!0}))},name:"mbank",value:"yes",defaultChecked:!1===N.mobileBanking,checked:!0===N.mobileBanking}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{mobileBanking:!1}))},defaultChecked:!1===N.mobileBanking,name:"mbank",value:"no",checked:!1===N.mobileBanking}),i.a.createElement("label",{className:d.a.userLabel},"no")),i.a.createElement("br",null),null==O.mobileBanking?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("label",{className:d.a.userLabel},"alone"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{alone:!0}))},defaultChecked:!1===N.alone,name:"alone",checked:!0===N.alone,value:"yes"}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"alone",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{alone:!1}))},defaultChecked:!1===N.alone,checked:!1===N.alone,value:"no"}),i.a.createElement("label",{className:d.a.userLabel},"no"))),i.a.createElement("br",null),null==O.alone?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"},i.a.createElement("label",{className:d.a.userLabel},"we chat payment"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{weChat:!0}))},defaultChecked:!1===N.weChat,name:"wechat",checked:!0===N.weChat,value:"yes"}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"wechat",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{weChat:!1}))},defaultChecked:!1===N.weChat,checked:!1===N.weChat,value:"no"}),i.a.createElement("label",{className:d.a.userLabel},"no")),i.a.createElement("br",null),null==O.weChat?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("label",{className:d.a.userLabel},"true wallet"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"twallet",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{trueWallet:!0}))},defaultChecked:!1===N.trueWallet,checked:!0===N.trueWallet,value:"yes"}),i.a.createElement("label",{className:d.a.userLabel},"yes")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"twallet",onChange:function(e){!0===e.target.checked&&k(Object(c.a)(Object(c.a)({},N),{},{trueWallet:!1}))},defaultChecked:!1===N.trueWallet,value:"no",checked:!1===N.trueWallet}),i.a.createElement("label",{className:d.a.userLabel},"no")),i.a.createElement("br",null),null==O.trueWallet?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"web site"),i.a.createElement("input",{type:"text",name:"website",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{website:e.target.value}))},value:N.website,className:"form-control ".concat(d.a.userInputs)}),null==O.website||""==O.website?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"linked in"),i.a.createElement("input",{type:"text",name:"linkedin",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{linkedin:e.target.value}))},value:N.linkedin,className:"form-control ".concat(d.a.userInputs)}),null==O.linkedin||""==O.linkedin?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"other"),i.a.createElement("input",{type:"text",name:"other",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{other:e.target.value}))},value:N.other,className:"form-control ".concat(d.a.userInputs)}),null==O.other||""==O.other?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"facebook"),i.a.createElement("input",{type:"text",name:"facebook",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{facebook:e.target.value}))},value:N.facebook,className:"form-control ".concat(d.a.userInputs)}),null==O.facebook||""==O.facebook?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"instagram"),i.a.createElement("input",{type:"text",name:"instagram",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{instagram:e.target.value}))},value:N.instagram,className:"form-control ".concat(d.a.userInputs)}),null==O.instagram||""==O.instagram?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"copy of id card (Up to 5mb)"),i.a.createElement("input",{type:"file",onChange:function(a){var t=Object(n.a)(a.target.files);e.compress(t,{size:1,quality:.4,maxWidth:500,maxHeight:500,resize:!0,rotate:!1}).then((function(e){N.copyOfId=e[0].prefix+e[0].data}))},className:"form-control ".concat(d.a.userInputs),placeholder:"file"}),null==O.copyOfId||""==O.copyOfId?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"book bank"),i.a.createElement("input",{type:"file",onChange:function(a){var t=Object(n.a)(a.target.files);e.compress(t,{size:1,quality:.4,maxWidth:500,maxHeight:500,resize:!0,rotate:!1}).then((function(e){N.bankBook=e[0].prefix+e[0].data}))},className:"form-control ".concat(d.a.userInputs),placeholder:"file"}),null==O.bankBook||""==O.bankBook?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"company"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{company:e.target.value}))},value:N.company,className:"form-control ".concat(d.a.userInputs),placeholder:"company"}),null==O.company||""==O.company?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"bank account"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{bankAccount:e.target.value}))},value:N.bankAccount,className:"form-control ".concat(d.a.userInputs),placeholder:"bank account"}),null==O.bankAccount||""==O.bankAccount?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"domestic"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{domestic:e.target.value}))},value:N.domestic,className:"form-control ".concat(d.a.userInputs),placeholder:"Domestic"}),null==O.domestic||""==O.domestic?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"rate of QR code"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{rateQrCode:e.target.value}))},value:N.rateQrCode,className:"form-control ".concat(d.a.userInputs),placeholder:"QR code"}),null==O.rateQrCode||""==O.rateQrCode?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),i.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"logo"),i.a.createElement("input",{type:"file",onChange:function(a){var t=Object(n.a)(a.target.files);e.compress(t,{size:1,quality:.4,maxWidth:500,maxHeight:500,resize:!0,rotate:!1}).then((function(e){N.logo=e[0].prefix+e[0].data}))},className:"form-control ".concat(d.a.userInputs),placeholder:"file"}),null==O.logo||""==O.logo?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"other document"),i.a.createElement("input",{type:"file",onChange:function(a){var t=Object(n.a)(a.target.files);e.compress(t,{size:1,quality:.4,maxWidth:500,maxHeight:500,resize:!0,rotate:!1}).then((function(e){N.otherDocument=e[0].prefix+e[0].data}))},className:"form-control ".concat(d.a.userInputs),placeholder:"file"}),null==O.otherDocument||""==O.otherDocument?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"Bank"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{bank:e.target.value}))},value:N.bank,className:"form-control ".concat(d.a.userInputs),placeholder:"bank"}),null==O.bank||""==O.bank?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"rnf code"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{rnfCode:e.target.value}))},value:N.rnfCode,className:"form-control ".concat(d.a.userInputs),placeholder:"Rnf Code"}),null==O.rnfCode||""==O.rnfCode?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"inter"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{inter:e.target.value}))},value:N.inter,className:"form-control ".concat(d.a.userInputs),placeholder:"Inter"}),null==O.inter||""==O.inter?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:d.a.userLabel},"rate of bar code"),i.a.createElement("input",{type:"text",onChange:function(e){k(Object(c.a)(Object(c.a)({},N),{},{rateBarCode:e.target.value}))},value:N.rateBarCode,className:"form-control ".concat(d.a.userInputs),placeholder:"Bar code"}),null==O.rateBarCode||""==O.rateBarCode?i.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),i.a.createElement("button",{type:"button",disabled:!(!Object.values(O).every((function(e){return null===e}))||!Object.values(O).every((function(e){return""===e}))),onClick:function(e){return function(e){return C.apply(this,arguments)}(e)},className:"btn ".concat(d.a.userBtn)},"Finishh"))))}}}]);
//# sourceMappingURL=14.ee714488.chunk.js.map