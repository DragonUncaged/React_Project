(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),l=t.n(r),s=(t(12),t(3)),o=t.n(s),m=t(6),u=t(2),i=t(1);var b=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(null),s=Object(u.a)(l,2),b=s[0],p=s[1],d=Object(n.useState)("random person"),E=Object(u.a)(d,2),v=E[0],f=E[1],O=Object(n.useState)("name"),g=Object(u.a)(O,2),N=g[0],j=g[1],h=function(){var e=Object(m.a)(o.a.mark((function e(){var a,t,n,c,l,s,m,u,i,b,d,E,v,O,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,fetch("https://randomuser.me/api/");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,n=t.results[0],c=n.phone,l=n.email,s=n.picture.large,m=n.login.password,u=n.name,i=u.first,b=u.last,d=n.dob.age,E=n.location.street,v=E.number,O=E.name,g={image:s,phone:c,email:l,password:m,age:d,street:"".concat(v," ").concat(O),name:"".concat(i," ").concat(b)},p(g),r(!1),j("name"),f(g.name);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h()}),[]);var M=function(e){if(e.target.classList.contains("icon")){var a=e.target.dataset.label;j(a),f(b[a])}};return c.a.createElement("main",null,c.a.createElement("div",{className:"block bcg-black"}),c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:b&&b.image||"https://randomuser.me/api/portraits/men/75.jpg",alt:"random user",className:"user-img"}),c.a.createElement("p",{className:"user-title"},"My ",N," is"),c.a.createElement("p",{className:"user-value"},v),c.a.createElement("div",{className:"values-list"},c.a.createElement("button",{className:"icon","data-label":"name",onMouseOver:M},c.a.createElement(i.f,null)),c.a.createElement("button",{className:"icon","data-label":"email",onMouseOver:M},c.a.createElement(i.b,null)),c.a.createElement("button",{className:"icon","data-label":"age",onMouseOver:M},c.a.createElement(i.a,null)),c.a.createElement("button",{className:"icon","data-label":"street",onMouseOver:M},c.a.createElement(i.d,null)),c.a.createElement("button",{className:"icon","data-label":"phone",onMouseOver:M},c.a.createElement(i.e,null)),c.a.createElement("button",{className:"icon","data-label":"password",onMouseOver:M},c.a.createElement(i.c,null))),c.a.createElement("button",{className:"btn",type:"button",onClick:h},t?"loading...":"random user"))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0135ecce.chunk.js.map