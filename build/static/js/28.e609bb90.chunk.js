(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[28],{522:function(e,a,t){"use strict";t.r(a);var l=t(19),n=t(67),m=t.n(n),r=t(0),c=t.n(r);a.default=function(){var e=Object(r.useState)([{id:0,ReferalNumber:"",amount:0,WithdrawCharges:0,FinalAmount:0,Name:"",AccountNumber:0,IFSCcode:"",BankName:"",comments:""}]),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){m.a.get("https://backend.klivepay.com/api/admin/withdraw-request").then((function(e){console.log("DATA",e);for(var a=0;a<e.data.length;a++)n({id:e.data[a].id,ReferalNumber:e.data[a].ReferalNumber,amount:e.data[a].amount,WithdrawCharges:e.data[a].WithdrawCharges,FinalAmount:e.data[a].FinalAmount,Name:e.data[a].BankDetails.Name,AccountNumber:e.data[a].BankDetails.AccountNumber,IFSCcode:e.data[a].BankDetails.IFSCcode,BankName:e.data[a].BankDetails.BankName,comments:e.data[a].comments});console.log("DATA IS ",e.data.data)}))}),[]),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"text-primary"},"Request Details"),c.a.createElement("div",{className:"col-md-12 grid-margin"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container"},c.a.createElement("table",{class:"table table-striped table-bordered"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Id"),c.a.createElement("td",null,t.id)),c.a.createElement("tr",null,c.a.createElement("td",null,"ReferalNumber"),c.a.createElement("td",null,t.ReferalNumber)),c.a.createElement("tr",null,c.a.createElement("td",null,"amount"),c.a.createElement("td",null,t.amount)),c.a.createElement("tr",null,c.a.createElement("td",null,"WithdrawCharges"),c.a.createElement("td",null,t.WithdrawCharges)),c.a.createElement("tr",null,c.a.createElement("td",null,"FinalAmount"),c.a.createElement("td",null,t.FinalAmount)),c.a.createElement("tr",null,c.a.createElement("td",null,"Name"),c.a.createElement("td",null,t.Name)),c.a.createElement("tr",null,c.a.createElement("td",null,"AccountNumber"),c.a.createElement("td",null,t.AccountNumber)),c.a.createElement("tr",null,c.a.createElement("td",null,"IFSCcode"),c.a.createElement("td",null,t.IFSCcode)),c.a.createElement("tr",null,c.a.createElement("td",null,"amount"),c.a.createElement("td",null,t.amount)),c.a.createElement("tr",null,c.a.createElement("td",null,"BankName"),c.a.createElement("td",null,t.BankName)),c.a.createElement("tr",null,c.a.createElement("td",null,"comments"),c.a.createElement("td",null,t.comments)))),c.a.createElement("br",null))))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"row"})))}}}]);
//# sourceMappingURL=28.e609bb90.chunk.js.map