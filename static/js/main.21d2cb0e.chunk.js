(this["webpackJsonpassignment-tracker"]=this["webpackJsonpassignment-tracker"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(29),r=n.n(s),i=(n(35),n(13)),j=n(4),o=(n(36),n(14)),l=n(5),d=n(24);n(52);d.a.initializeApp({apiKey:"AIzaSyCTzoSd6CWwCSp10ahpFs1KkCnfaLwjUJA",authDomain:"assignment-tracker-7048a.firebaseapp.com",projectId:"assignment-tracker-7048a",storageBucket:"assignment-tracker-7048a.appspot.com",messagingSenderId:"439558575065",appId:"1:439558575065:web:7d92424cfae3b5b65a7fc8"});var u=d.a.firestore(),b=n(18),O=n.n(b),h=n(20),m=n(1),f=Object(c.createContext)(),x=function(e,t){return"CHANGE_MODE"===t.type?Object(o.a)(Object(o.a)({},e),{},{mode:t.payload}):e};function p(e){var t=e.children,n=Object(c.useReducer)(x,{mode:"white"}),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(m.jsx)(f.Provider,{value:Object(o.a)(Object(o.a)({},s),{},{changeMode:function(e){r({type:"CHANGE_MODE",payload:e})}}),children:t})}var v=function(){var e=Object(c.useContext)(f);if(void 0===e)throw new Error("out of scope of the ModeContextProvider");return e};n(40);function g(e){var t=e.assignment,n=v().mode,c=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.collection("assignments").doc(t).delete();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===t.length?Object(m.jsx)("div",{className:"error",children:" Nothing to show here"}):Object(m.jsx)("div",{className:"assignment-card",children:t.map((function(e){return Object(m.jsxs)("div",{className:"card ".concat(n),children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("button",{className:"delete-btn",onClick:function(){return c(e.id)},children:"Delete"}),Object(m.jsxs)("p",{children:[e.time," mins to complete."]}),Object(m.jsxs)("div",{children:[e.details.substring(0,100),"..."]}),Object(m.jsx)(i.b,{to:"/assignments/".concat(e.id),children:"Read details"})]},e.id)}))})}n(45);function S(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),O=b[0],h=b[1];return Object(c.useEffect)((function(){j(!0);var e=u.collection("assignments").onSnapshot((function(e){if(e.empty)h("No assignment to load"),j(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),a(t),j(!1)}}),(function(e){h(e.message),j(!1)}));return function(){return e()}}),[]),Object(m.jsxs)("div",{className:"home",children:[O&&Object(m.jsx)("p",{className:"error",children:O}),i&&Object(m.jsx)("p",{className:"loading",children:"Loading..."}),n&&Object(m.jsx)(g,{assignment:n})]})}n(46);function N(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],d=Object(c.useState)(0),b=Object(l.a)(d,2),f=b[0],x=b[1],p=Object(j.f)(),v=function(){var e=Object(h.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={title:n,details:i,time:f},e.prev=2,e.next=5,u.collection("assignments").add(c);case 5:p.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"create",children:Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Assignment title"}),Object(m.jsx)("input",{type:"text",required:!0,onChange:function(e){return a(e.target.value)},value:n})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Assignment Details"}),Object(m.jsx)("textarea",{required:!0,onChange:function(e){return o(e.target.value)},value:i})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Time"}),Object(m.jsx)("input",{type:"number",required:!0,onChange:function(e){return x(e.target.value)},value:f})]}),Object(m.jsx)("button",{children:"Submit"})]})})}n(47);function k(){var e=Object(j.g)().search,t=new URLSearchParams(e).get("q"),n=Object(c.useState)(null),a=Object(l.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(!1),d=Object(l.a)(i,2),b=d[0],O=d[1],h=Object(c.useState)(!1),f=Object(l.a)(h,2),x=f[0],p=f[1];return Object(c.useEffect)((function(){O(!0);var e=u.collection("assignments").onSnapshot((function(e){if(e.empty)p("No assignment to load"),O(!1);else{var n=[];e.docs.filter((function(e){return e.data().title.includes(t)})).forEach((function(e){n.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),console.log(n),r(n),O(!1)}}),(function(e){p(e.message),O(!1)}));return function(){return e()}}),[t]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{className:"page-title",children:['Assignment including "',t,'"']}),x&&Object(m.jsx)("p",{className:"error",children:x}),b&&Object(m.jsx)("p",{className:"loading",children:"Loading..."}),s&&Object(m.jsx)(g,{assignment:s})]})}n(48);function C(){var e=Object(j.h)().id,t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],d=i[1],b=Object(c.useState)(!1),O=Object(l.a)(b,2),h=O[0],f=O[1];Object(c.useEffect)((function(){d(!0);var t=u.collection("assignments").onSnapshot((function(t){if(t.empty)f("No assignment to load"),d(!1);else{var n={};n=t.docs.filter((function(t){return t.id===e})),s(n.at(0).data()),d(!1)}}),(function(e){f(e.message),d(!1)}));return function(){return t()}}),[e]);var x=v().mode;return Object(m.jsxs)("div",{className:"assignment ".concat(x),children:[h&&Object(m.jsx)("div",{className:"error",children:h}),o&&Object(m.jsx)("div",{children:"Loading..."}),a&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"page-title",children:a.title}),Object(m.jsxs)("p",{children:[" Time for the task ",a.time]}),Object(m.jsx)("p",{children:a.details})]})]})}n(49),n(50);function w(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(j.f)();return Object(m.jsx)("div",{className:"searchbar",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.push("/search?q=".concat(n))},children:[Object(m.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(m.jsx)("input",{id:"search",type:"text",onChange:function(e){return a(e.target.value)},required:!0})]})})}var y=n.p+"static/media/mode.fdb51e7c.svg";function A(){var e=v(),t=e.mode,n=e.changeMode;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"navbar",children:Object(m.jsxs)("nav",{children:[Object(m.jsx)(i.b,{to:"/home",className:"brand",children:Object(m.jsx)("h1",{children:"Assignment Tracker"})}),Object(m.jsx)(w,{}),Object(m.jsx)(i.b,{to:"/create",children:"Create Assignment"})]})}),Object(m.jsx)("div",{className:"mode-div",children:Object(m.jsx)("img",{src:y,alt:"Mode Icon",onClick:function(){n("dark"===t?"white":"dark")}})})]})}var E=function(){var e=v().mode;return Object(m.jsx)("div",{className:"App ".concat(e),children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(A,{}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",children:Object(m.jsx)(S,{})}),Object(m.jsx)(j.a,{path:"/assignments/:id",children:Object(m.jsx)(C,{})}),Object(m.jsx)(j.a,{path:"/search",children:Object(m.jsx)(k,{})}),Object(m.jsx)(j.a,{path:"/create",children:Object(m.jsx)(N,{})}),Object(m.jsx)(j.a,{path:"/home",children:Object(m.jsx)(S,{})})]})]})})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{children:Object(m.jsx)(E,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.21d2cb0e.chunk.js.map