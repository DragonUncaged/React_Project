(this["webpackJsonpbirthday-reminder"]=this["webpackJsonpbirthday-reminder"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),i=n.n(s),a=(n(12),n(4)),o=n.n(a),j=n(7),u=n(2),l=n(0),b=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("h1",{children:"loading..."})})},d=n(5),h=function(e){var t=e.id,n=e.image,r=e.info,s=e.name,i=e.price,a=e.removeTour,o=Object(c.useState)(!1),j=Object(u.a)(o,2),b=j[0],d=j[1];return Object(l.jsxs)("article",{className:"single-tour",children:[Object(l.jsx)("img",{src:n,alt:s}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"tour-info",children:[Object(l.jsx)("h4",{children:s}),Object(l.jsxs)("h4",{className:"tour-price",children:["$",i]})]}),Object(l.jsxs)("p",{children:[b?r:"".concat(r.substring(0,200),"..."),Object(l.jsx)("button",{onClick:function(){return d(!b)},children:b?"show less":"  read more"})]}),Object(l.jsx)("button",{className:"delete-btn",onClick:function(){return a(t)},children:"not interested"})]})]})},O=function(e){var t=e.tours,n=e.removeTour;return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"our tours"}),Object(l.jsx)("div",{className:"underline"})]}),Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{removeTour:n}),e.id)}))})]})};var x=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),a=i[0],d=i[1],h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,r(!1),d(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),r(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),n?Object(l.jsx)("main",{children:Object(l.jsx)(b,{})}):0===a.length?Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"no tours left"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return h()},children:"refresh"})]})}):Object(l.jsx)("main",{children:Object(l.jsx)(O,{tours:a,removeTour:function(e){var t=a.filter((function(t){return t.id!==e}));d(t)}})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d2a4c758.chunk.js.map