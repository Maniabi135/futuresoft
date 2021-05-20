(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(18),o=a.n(n),i=(a(23),a(4)),l=a.n(i),r=a(6),d=a(2),u=a(9),j=a.n(u),v="https://60a55fccc0c1fd00175f3cf5.mockapi.io",b={tilesUrl:"".concat(v,"/getTilesData/latencyData"),memoryUsageUrl:"".concat(v,"/getTilesData/MemoryUsage"),processesUrl:"".concat(v,"/getTilesData/processesData"),latencyUrl:"".concat(v,"/getTilesData/latencyData")},h=function(e,t){var a=j.a.CancelToken;return e.method=e.method||"GET",e.headers={Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},e.withCredentials=!0,void 0!==t&&(e.cancelToken=new a((function(e){t(e)}))),console.log(e),j()(e).then((function(e){return e})).catch((function(e){return e}))},m={convertDigitWithCommas:function(e){if(e){for(var t=/(-?\d+)(\d{3})/;t.test(null===(a=e)||void 0===a?void 0:a.toString());){var a;e=e.replace(t,"$1,$2")}return e}return 0},convertDigit:function(e){return!e&&isNaN(e)?0:e<9999?e:e<1e6&&m.convertDigitWithCommas(Math.round(e/1e3)+"K")}},p=a(0),O=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(0),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(s.useState)(0),v=Object(d.a)(j,2),O=v[0],x=v[1],f=Object(s.useState)(0),g=Object(d.a)(f,2),N=g[0],w=g[1],y=Object(s.useState)(0),k=Object(d.a)(y,2),S=k[0],C=k[1],T=[{name:"Projects",key:"projects",id:"projects",value:i,iconName:"navigation",iconClass:"material-icons-outlined",color:"greenyellow"},{name:"Mails",key:"mails",id:"mails",value:O,iconName:"mail",iconClass:"material-icons-outlined",color:"#f48e13"},{name:"Tickets",key:"tickets",id:"tickets",value:N,iconName:"book_online",iconClass:"material-icons-outlined",color:"#03A9F4"},{name:"Customers",key:"customers",id:"customers",value:S,iconName:"group",iconClass:"material-icons-outlined",color:"#f6719d"}],D=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,s,n,o,i,r,d,j,v,m,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:b.tilesUrl},e.next=4,h(a);case 4:s=e.sent,n=(null===s||void 0===s||null===(t=s.data)||void 0===t?void 0:t[0])||{},o=n.projects,i=void 0===o?30:o,r=n.mails,d=void 0===r?234:r,j=n.tickets,v=void 0===j?456:j,m=n.customers,p=void 0===m?5987:m,x(d),C(p),u(i),w(v),c(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){D()}),[]),Object(p.jsxs)("div",{className:"row row-gap-25",children:[!a&&T.map((function(e){var t=e.key,a=void 0===t?"":t,s=e.name,c=void 0===s?"":s,n=e.id,o=void 0===n?"":n,i=e.value,l=void 0===i?"":i,r=e.iconName,d=void 0===r?"":r,u=e.iconClass,j=void 0===u?"":u,v=e.color,b=void 0===v?"":v;return Object(p.jsx)("div",{className:"col-12 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2",id:o,children:Object(p.jsxs)("div",{className:"tileCard p-3 p-md-2",children:[Object(p.jsx)("i",{className:j,style:{color:b},children:d}),Object(p.jsxs)("div",{className:"tileBody",children:[Object(p.jsx)("h6",{className:"name",children:c}),Object(p.jsx)("div",{className:"value",children:m.convertDigit(l)})]})]})},a)})),a&&Array.from({length:4},(function(e,t){return Object(p.jsx)("div",{className:"col-12 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2",children:Object(p.jsxs)("div",{className:"tileCardLoader p-3 p-md-2",children:[Object(p.jsx)("span",{className:"icon linearBackground"}),Object(p.jsxs)("div",{className:"tileBody",children:[Object(p.jsx)("span",{className:"name linearBackground"}),Object(p.jsx)("span",{className:"value linearBackground"})]})]})},"tileloader".concat(t))}))]})},x=a(5),f=a(7),g=a.n(f),N={series:[{name:"TOTAL",data:[]},{name:"USED",data:[]},{name:"FREE",data:[]}],options:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},grid:{borderColor:"#eee",strokeDashArray:7},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#f48e13","#f6719d","#03A9F4"],xaxis:{categories:["Feb","May","Aug"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}},legend:{position:"top",horizontalAlign:"left"}}},w=[300,120,60,300,50],y=[200,40,40,240,10],k=[100,80,20,60,40],S=["Jan","Feb","Mar","Apr","May"],C=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(N),o=Object(d.a)(n,2),i=o[0],u=o[1],j=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,s,n,o,r,d,j,v,m,p,O,f,g,N;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f={url:b.processesUrl},e.next=4,h(f);case 4:g=e.sent,(N=Object(x.a)({},i)).series[0].data=(null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.length)?null===g||void 0===g||null===(a=g.data)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.total:w,N.series[1].data=(null===g||void 0===g||null===(n=g.data)||void 0===n?void 0:n.length)?null===g||void 0===g||null===(o=g.data)||void 0===o||null===(r=o[0])||void 0===r?void 0:r.used:y,N.series[2].data=(null===g||void 0===g||null===(d=g.data)||void 0===d?void 0:d.length)?null===g||void 0===g||null===(j=g.data)||void 0===j||null===(v=j[0])||void 0===v?void 0:v.free:k,N.options.xaxis.categories=(null===g||void 0===g||null===(m=g.data)||void 0===m?void 0:m.length)?null===g||void 0===g||null===(p=g.data)||void 0===p||null===(O=p[0])||void 0===O?void 0:O.months:S,u(Object(x.a)(Object(x.a)({},i),N)),c(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){j()}),[]),Object(p.jsxs)("div",{className:"memoryUsageSection",children:[Object(p.jsxs)("div",{className:"header mb-4 d-flex align-items-center justify-content-between",children:[Object(p.jsx)("span",{className:"title",children:"Memory Usage"}),Object(p.jsxs)("div",{className:"update d-flex align-items-center",children:[Object(p.jsx)("i",{className:"material-icons pr-1",children:"refresh"}),Object(p.jsx)("span",{className:"btnName",children:"Update"})]})]}),Object(p.jsxs)("div",{className:"chartSection",children:[!a&&Object(p.jsx)(g.a,{options:i.options,series:i.series,type:"bar",height:350}),a&&Object(p.jsx)("div",{className:"chartLoader",children:"Loading..."})]})]})},T={series:[{name:"",data:[]}],options:{chart:{type:"line",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1,background:{enabled:!1}},stroke:{width:[3,3]},tooltip:{shared:!1,intersect:!0,x:{show:!1}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},colors:["#f6719d"],xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1}},legend:{show:!1}}},D=[80,41,55,71,39,62,69,91,148,10,20,30,40,50,60],L=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(T),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(s.useState)(""),v=Object(d.a)(j,2),O=v[0],f=v[1],N=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,s,n,o,r,d,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:b.processesUrl},e.next=4,h(r);case 4:d=e.sent,(j=Object(x.a)({},i)).series[0].data=(null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.length)?null===d||void 0===d||null===(a=d.data)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.data:D,u(Object(x.a)(Object(x.a)({},i),j)),f((null===d||void 0===d||null===(n=d.data)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.value)||1597),c(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){N()}),[]),Object(p.jsx)("div",{className:"processesLineChartSection",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-12 order-1 col-sm-12 col-md-6 col-lg-7 order-sm-1  order-md-0 chartSection",children:[!a&&Object(p.jsx)(g.a,{options:i.options,series:i.series,type:"line",height:110}),a&&Object(p.jsx)("div",{className:"chartLoader",children:"Loading..."})]}),Object(p.jsxs)("div",{className:"processData order-0 mt-4 mt-sm-3 mt-md-0 col-12 col-sm-12 col-md-6 col-lg-5  order-sm-0  order-md-1 align-self-center",children:[Object(p.jsx)("h6",{className:"title",children:"PROCESSES"}),O&&!a&&Object(p.jsx)("div",{className:"count",children:m.convertDigit(O)}),a&&Object(p.jsx)("span",{className:"linearBackground"})]})]})})},U={series:[{name:"Latency",data:[]}],options:{chart:{height:150,type:"bar",toolbar:{show:!1}},dataLabels:{enabled:!1,background:{enabled:!1}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},colors:["#f48e13"],stroke:{width:[2,2]},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},legend:{show:!1}}},B=[2,10,8,7,5,4,3,2,4,14,8,4,10,4,3,3,2,14,8,10,15,12,6,7,8,9,10,11],A=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(U),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(s.useState)(""),v=Object(d.a)(j,2),m=v[0],O=v[1],f=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,s,n,o,r,d,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:b.latencyUrl},e.next=4,h(r);case 4:d=e.sent,(j=Object(x.a)({},i)).series[0].data=(null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.length)?null===d||void 0===d||null===(a=d.data)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.data:B,O((null===d||void 0===d||null===(n=d.data)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.millisecs)||2.3),u(Object(x.a)(Object(x.a)({},i),j)),c(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){f()}),[]),Object(p.jsxs)("div",{className:"latencyBarChartSection",children:[Object(p.jsxs)("div",{className:"header d-flex align-items-center justify-content-between",children:[Object(p.jsx)("span",{className:"title",children:"LATENCY"}),m&&!a&&Object(p.jsxs)("span",{className:"seconds",children:[m," ms"]}),a&&Object(p.jsx)("span",{className:"linearBackground"})]}),Object(p.jsxs)("div",{className:"chartSection",children:[!a&&Object(p.jsx)(g.a,{options:i.options,series:i.series,type:"bar",height:120}),a&&Object(p.jsx)("div",{className:"chartLoader",children:"Loading..."})]})]})};var E=function(){return Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"row row-gap-25 mt-4",children:[Object(p.jsx)("div",{className:"col-12 col-sm-12 col-md-7",children:Object(p.jsx)(C,{})}),Object(p.jsx)("div",{className:"col-12 col-sm-12 col-md-5",children:Object(p.jsxs)("div",{className:"row row-gap-25",children:[Object(p.jsx)("div",{className:"col-12 col-sm-6 col-md-12",children:Object(p.jsx)(L,{})}),Object(p.jsx)("div",{className:"col-12 col-sm-6 col-md-12",children:Object(p.jsx)(A,{})})]})})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),c(e),n(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),F()}},[[48,1,2]]]);
//# sourceMappingURL=main.e47c70a2.chunk.js.map