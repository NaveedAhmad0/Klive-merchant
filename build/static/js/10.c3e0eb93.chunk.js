(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[10],{156:function(e,a,t){},211:function(e,a,t){},527:function(e,a,t){"use strict";t.r(a);var l=t(19),n=t(0),c=t.n(n),r=(t(156),t(211),t(6)),m=t(67),s=t.n(m);a.default=function(){var e=Object(r.h)(),a=Object(n.useState)([{invoiceRefId:"",mobile:"",billTo:"",billFrom:"",status:"",createdAt:"",amount:0,quantity:null,totalamount:null,expirydate:null,qrRawData:null,qrImage:null}]),t=Object(l.a)(a,2),m=t[0],d=t[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),u=o[0],E=o[1],b=e.state.invoiceId;return Object(n.useEffect)((function(){s.a.get("https://backend.klivepay.com/api/merchant/invoice-details/".concat(b)).then((function(e){d({invoiceRefId:e.data.invoiceRefId,mobile:e.data.mobile,billTo:e.data.billTo,billFrom:e.data.billFrom,status:e.data.status,createdAt:e.data.createdAt,totalamount:e.data.totalamount,expirydate:e.data.expirydate,qrImage:e.data.qrImage})}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("h3",{className:"header-title"},"Your Invoice")),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",{className:"cardmaintitle"},"Order ",m.invoiceRefId," Details")),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h6",{className:"text-primary"},"General"),c.a.createElement("div",{className:"Boxes"},c.a.createElement("p",{className:"heading"},"Date Created :"),c.a.createElement("span",{className:"text-muted"},m.createdAt)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col"},c.a.createElement("h6",{className:"text-primary"},"Billing"),c.a.createElement("p",null,"From :"),c.a.createElement("span",{className:"text-center text-muted"},m.billFrom),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"heading"},"Phone Number :"),c.a.createElement("span",{className:"text-center text-muted"},m.mobile)),c.a.createElement("div",{className:"col"},c.a.createElement("h6",{className:"text-primary"},"Address"),c.a.createElement("p",null,"To :"),c.a.createElement("span",{className:"text-center text-muted"},m.billTo))))),c.a.createElement("br",null),c.a.createElement("div",{className:"card",id:"cardmerchant"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement("label",null,"Total Amount"),c.a.createElement("br",null),c.a.createElement("p",null,m.totalamount)),c.a.createElement("div",null,c.a.createElement("label",null,"QR Expiry Date"),c.a.createElement("br",null),c.a.createElement("p",null,m.expirydate)))))),c.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"PayPal Here"),c.a.createElement("div",{className:"qrcode p-3"},c.a.createElement("img",{src:"data:image/png;base64,".concat(m.qrImage),alt:"QR",width:190}))),c.a.createElement("br",null),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-footer"},"Order Notes",c.a.createElement("hr",null),c.a.createElement("p",null,m.notes),c.a.createElement("hr",null),c.a.createElement("p",{className:"heading"},"Add Notes :"),c.a.createElement("input",{type:"text",placeholder:"Add Note",onChange:function(e){return E(e.target.value)},value:u}),c.a.createElement("div",{className:"footerbuttons"},c.a.createElement("span",{className:" d-flex justify-content-around"},c.a.createElement("button",{type:"button",className:"btn btn-outline-primary dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},"Private Note"),"\xa0\xa0\xa0\xa0",c.a.createElement("button",{type:"button",className:"btn btn-danger"},"Add")))))))))}}}]);
//# sourceMappingURL=10.c3e0eb93.chunk.js.map