(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(18),o=a.n(n),i=(a(23),a(4)),r=a.n(i),l=a(6),d=a(2),u=a(9),j=a.n(u),b="https://60a55fccc0c1fd00175f3cf5.mockapi.io",h={tilesUrl:"https://60a55fccc0c1fd00175f3cf5.mockapi.io/getTilesData/latencyData",memoryUsageUrl:"".concat(b,"/getTilesData/MemoryUsage"),processesUrl:"".concat(b,"/getTilesData/processesData"),latencyUrl:"".concat(b,"/getTilesData/latencyData")},m=function(e,t){var a=j.a.CancelToken;return e.method=e.method||"GET",e.headers={Accept:"application/json","Content-Type":"application/json"},e.withCredentials=!0,void 0!==t&&(e.cancelToken=new a((function(e){t(e)}))),j()(e).then((function(e){return e})).catch((function(e){return e}))},v={convertDigitWithCommas:function(e){if(e){for(var t=/(-?\d+)(\d{3})/;t.test(null===(a=e)||void 0===a?void 0:a.toString());){var a;e=e.replace(t,"$1,$2")}return e}return 0},convertDigit:function(e){return!e&&isNaN(e)?0:e<9999?e:e<1e6&&v.convertDigitWithCommas(Math.round(e/1e3)+"K")}},p=a(0),O=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(0),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(s.useState)(0),b=Object(d.a)(j,2),O=b[0],x=b[1],f=Object(s.useState)(0),g=Object(d.a)(f,2),N=g[0],w=g[1],y=Object(s.useState)(0),k=Object(d.a)(y,2),S=k[0],C=k[1],T=[{name:"Projects",key:"projects",id:"projects",value:i,iconName:"navigation",iconClass:"material-icons-outlined",color:"greenyellow"},{name:"Mails",key:"mails",id:"mails",value:O,iconName:"mail",iconClass:"material-icons-outlined",color:"#f48e13"},{name:"Tickets",key:"tickets",id:"tickets",value:N,iconName:"book_online",iconClass:"material-icons-outlined",color:"#03A9F4"},{name:"Customers",key:"customers",id:"customers",value:S,iconName:"group",iconClass:"material-icons-outlined",color:"#f6719d"}],D=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,s,n,o,i,l,d,j,b,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:h.tilesUrl},e.next=4,m(t);case 4:a=e.sent,s=(null===a||void 0===a?void 0:a.data[0])||{},n=s.projects,o=void 0===n?30:n,i=s.mails,l=void 0===i?234:i,d=s.tickets,j=void 0===d?456:d,b=s.customers,v=void 0===b?5987:b,x(l),C(v),u(o),w(j),c(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){D()}),[]),Object(p.jsxs)("div",{className:"row row-gap-25",children:[!a&&T.map((function(e){var t=e.key,a=void 0===t?"":t,s=e.name,c=void 0===s?"":s,n=e.id,o=void 0===n?"":n,i=e.value,r=void 0===i?"":i,l=e.iconName,d=void 0===l?"":l,u=e.iconClass,j=void 0===u?"":u,b=e.color,h=void 0===b?"":b;return Object(p.jsx)("div",{className:"col-12 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2",id:o,children:Object(p.jsxs)("div",{className:"tileCard p-3 p-md-2",children:[Object(p.jsx)("i",{className:j,style:{color:h},children:d}),Object(p.jsxs)("div",{className:"tileBody",children:[Object(p.jsx)("h6",{className:"name",children:c}),Object(p.jsx)("div",{className:"value",children:v.convertDigit(r)})]})]})},a)})),a&&Array.from({length:4},(function(e,t){return Object(p.jsx)("div",{className:"col-12 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2",children:Object(p.jsxs)("div",{className:"tileCardLoader p-3 p-md-2",children:[Object(p.jsx)("span",{className:"icon linearBackground"}),Object(p.jsxs)("div",{className:"tileBody",children:[Object(p.jsx)("span",{className:"name linearBackground"}),Object(p.jsx)("span",{className:"value linearBackground"})]})]})},"tileloader".concat(t))}))]})},x=a(5),f=a(7),g=a.n(f),N={series:[{name:"TOTAL",data:[]},{name:"USED",data:[]},{name:"FREE",data:[]}],options:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},grid:{borderColor:"#eee",strokeDashArray:7},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#f48e13","#f6719d","#03A9F4"],xaxis:{categories:["Feb","May","Aug"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}},legend:{position:"top",horizontalAlign:"left"}}},w=[300,120,60,300,50],y=[200,40,40,240,10],k=[100,80,20,60,40],S=["Jan","Feb","Mar","Apr","May"],C=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(N),o=Object(d.a)(n,2),i=o[0],u=o[1],j=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,s,n,o,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={url:h.processesUrl},e.next=4,m(o);case 4:l=e.sent,(d=Object(x.a)({},i)).series[0].data=(null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.length)?l.data[0].total:w,d.series[1].data=(null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.length)?l.data[0].used:y,d.series[2].data=(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.length)?l.data[0].free:k,d.options.xaxis.categories=(null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.length)?l.data[0].months:S,u(Object(x.a)(Object(x.a)({},i),d)),c(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){j()}),[]),Object(p.jsxs)("div",{className:"memoryUsageSection",children:[Object(p.jsxs)("div",{className:"header mb-4 d-flex align-items-center justify-content-between",children:[Object(p.jsx)("span",{className:"title",children:"Memory Usage"}),Object(p.jsxs)("div",{className:"update d-flex align-items-center",children:[Object(p.jsx)("i",{className:"material-icons pr-1",children:"refresh"}),Object(p.jsx)("span",{className:"btnName",children:"Update"})]})]}),Object(p.jsxs)("div",{className:"chartSection",children:[!a&&Object(p.jsx)(g.a,{options:i.options,series:i.series,type:"bar",height:350}),a&&Object(p.jsx)("div",{className:"chartLoader",children:"Loading..."})]})]})},T={series:[{name:"",data:[]}],options:{chart:{type:"line",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1,background:{enabled:!1}},stroke:{width:[3,3]},tooltip:{shared:!1,intersect:!0,x:{show:!1}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},colors:["#f6719d"],xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1}},legend:{show:!1}}},D=[80,41,55,71,39,62,69,91,148,10,20,30,40,50,60],L=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(T),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(s.useState)(""),b=Object(d.a)(j,2),O=b[0],f=b[1],N=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,s,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={url:h.processesUrl},e.next=4,m(s);case 4:n=e.sent,(o=Object(x.a)({},i)).series[0].data=(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.length)?n.data[0].data:D,u(Object(x.a)(Object(x.a)({},i),o)),f((null===n||void 0===n||null===(a=n.data[0])||void 0===a?void 0:a.value)||1597),c(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){N()}),[]),Object(p.jsx)("div",{className:"processesLineChartSection",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-12 order-1 col-sm-12 col-md-6 col-lg-7 order-sm-1  order-md-0 chartSection",children:[!a&&Object(p.jsx)(g.a,{options:i.options,series:i.series,type:"line",height:110}),a&&Object(p.jsx)("div",{className:"chartLoader",children:"Loading..."})]}),Object(p.jsxs)("div",{className:"processData order-0 mt-4 mt-sm-3 mt-md-0 col-12 col-sm-12 col-md-6 col-lg-5  order-sm-0  order-md-1 align-self-center",children:[Object(p.jsx)("h6",{className:"title",children:"PROCESSES"}),O&&!a&&Object(p.jsx)("div",{className:"count",children:v.convertDigit(O)}),a&&Object(p.jsx)("span",{className:"linearBackground"})]})]})})},U={series:[{name:"Latency",data:[]}],options:{chart:{height:150,type:"bar",toolbar:{show:!1}},dataLabels:{enabled:!1,background:{enabled:!1}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},colors:["#f48e13"],stroke:{width:[2,2]},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},legend:{show:!1}}},B=[2,10,8,7,5,4,3,2,4,14,8,4,10,4,3,3,2,14,8,10,15,12,6,7,8,9,10,11],E=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(U),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(s.useState)(""),b=Object(d.a)(j,2),v=b[0],O=b[1],f=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,s,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={url:h.latencyUrl},e.next=4,m(s);case 4:n=e.sent,(o=Object(x.a)({},i)).series[0].data=(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.length)?n.data[0].data:B,O((null===n||void 0===n||null===(a=n.data[0])||void 0===a?void 0:a.millisecs)||2.3),u(Object(x.a)(Object(x.a)({},i),o)),c(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){f()}),[]),Object(p.jsxs)("div",{className:"latencyBarChartSection",children:[Object(p.jsxs)("div",{className:"header d-flex align-items-center justify-content-between",children:[Object(p.jsx)("span",{className:"title",children:"LATENCY"}),v&&!a&&Object(p.jsxs)("span",{className:"seconds",children:[v," ms"]}),a&&Object(p.jsx)("span",{className:"linearBackground"})]}),Object(p.jsxs)("div",{className:"chartSection",children:[!a&&Object(p.jsx)(g.a,{options:i.options,series:i.series,type:"bar",height:120}),a&&Object(p.jsx)("div",{className:"chartLoader",children:"Loading..."})]})]})};var A=function(){return Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"row row-gap-25 mt-4",children:[Object(p.jsx)("div",{className:"col-12 col-sm-12 col-md-7",children:Object(p.jsx)(C,{})}),Object(p.jsx)("div",{className:"col-12 col-sm-12 col-md-5",children:Object(p.jsxs)("div",{className:"row row-gap-25",children:[Object(p.jsx)("div",{className:"col-12 col-sm-6 col-md-12",children:Object(p.jsx)(L,{})}),Object(p.jsx)("div",{className:"col-12 col-sm-6 col-md-12",children:Object(p.jsx)(E,{})})]})})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),c(e),n(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),F()}},[[48,1,2]]]);
//# sourceMappingURL=main.30862af1.chunk.js.map