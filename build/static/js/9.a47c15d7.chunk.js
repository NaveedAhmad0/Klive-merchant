(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[9],{122:function(e,a,t){},182:function(e,a,t){},524:function(e,a,t){"use strict";t.r(a);var l=t(33),n=t(0),c=t.n(n),m=(t(122),t(182),t(6)),r=t(124),s=t.n(r);a.default=function(){var e,a=Object(m.h)(),t=Object(n.useState)([{email:"",invoiceRefId:"",mobile:"",items:{},billTo:"",billFrom:"",status:"",customer:"",createdAt:"",amount:0,item:null,quantity:null,totalamount:null,expirydate:null,qrRawData:null,numberOfTimes:null,qrImage:null}]),r=Object(l.a)(t,2),d=r[0],o=r[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),E=u[0],b=u[1],N=a.state.invoiceId;return Object(n.useEffect)((function(){s.a.get("https://backend.klivepay.com/api/merchant/invoice-details/".concat(N)).then((function(e){for(var a=0;a<e.data.length;a++)o({email:e.data[a].email,invoiceRefId:e.data[a].invoiceRefId,mobile:e.data[a].mobile,billTo:e.data[a].billTo,billFrom:e.data[a].billFrom,status:e.data[a].status,customer:e.data[a].customer,createdAt:e.data[a].createdAt,amount:e.data[a].amount,items:e.data[a].item,quantity:e.data[a].quantity,totalamount:e.data[a].totalamount,expirydate:e.data[a].expirydate,qrImage:e.data[a].qrImage}),console.log("DATA IS ",e.data[a])}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("h3",{className:"header-title"},"Your Invoice")),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",{className:"cardmaintitle"},"Order ",d.invoiceRefId," Details")),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h6",{className:"text-primary"},"General"),c.a.createElement("div",{className:"Boxes"},c.a.createElement("p",{className:"heading"},"Date Created :"),c.a.createElement("span",{className:"text-muted"},d.createdAt)),c.a.createElement("br",null),c.a.createElement("p",{className:"heading "},"Status :",c.a.createElement("span",{className:"text-muted"},d.status)),c.a.createElement("br",null),c.a.createElement("p",{className:"heading"},"Customer :",c.a.createElement("span",{className:"text-muted"},d.customer))),c.a.createElement("div",{className:"col"},c.a.createElement("h6",{className:"text-primary"},"Billing"),c.a.createElement("span",{className:"text-center text-muted"},d.billFrom),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"heading"},"Email Address :"),c.a.createElement("span",{className:"text-center text-muted"},d.email),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"heading"},"Phone Number :"),c.a.createElement("span",{className:"text-center text-muted"},d.mobile)),c.a.createElement("div",{className:"col"},c.a.createElement("h6",{className:"text-primary"},"Address"),c.a.createElement("span",{className:"text-center text-muted"},d.billTo))))),c.a.createElement("br",null),c.a.createElement("div",{className:"card",id:"cardmerchant"},c.a.createElement("div",{className:"card-body"},c.a.createElement("table",{className:"table",id:"tablebodyrow"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",className:"tablenone"},"sr"),c.a.createElement("th",{scope:"col"},"item"),c.a.createElement("th",{scope:"col"},"Cost"),c.a.createElement("th",{scope:"col"},"Qty"),c.a.createElement("th",{scope:"col"},"Total"))),c.a.createElement("tbody",null,d.items?null===(e=d.items)||void 0===e?void 0:e.map((function(e,a){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",{className:"tablenone"},"1"),c.a.createElement("td",null,c.a.createElement("u",null,e.item)),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.quantity),c.a.createElement("td",null,e.amount*e.quantity))})):"No data",c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"}),c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement("b",null,"Shipping")),c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement("b",null,"$5.00"))),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"}),c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement("b",null,"Total")),c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement("b",null,d.totalamount+5)))))))),c.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"PayPal Here"),c.a.createElement("div",{className:"qrcode p-3"},c.a.createElement("img",{src:"data:image/png;base64,".concat(d.qrImage),alt:"QR",width:190}))),c.a.createElement("br",null),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-footer"},"Order Notes",c.a.createElement("hr",null),c.a.createElement("p",null,d.notes),c.a.createElement("hr",null),c.a.createElement("p",{className:"heading"},"Add Notes :"),c.a.createElement("input",{type:"text",placeholder:"Add Note",onChange:function(e){return b(e.target.value)},value:E}),c.a.createElement("div",{className:"footerbuttons"},c.a.createElement("span",{className:" d-flex justify-content-between "},c.a.createElement("button",{type:"button",className:"btn btn-outline-primary dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},"Private Note"),"\xa0\xa0\xa0\xa0",c.a.createElement("button",{type:"button",className:"btn btn-danger"},"Add")))))))))}}}]);
//# sourceMappingURL=9.a47c15d7.chunk.js.map