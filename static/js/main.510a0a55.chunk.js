(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=a(1),l=(a(13),a(0)),d=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},u=function(e){var t=e.todo;return Object(l.jsxs)("article",{"data-id":t.id,className:"TodoInfo ".concat(t.completed&&"TodoInfo--completed"),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(l.jsx)(d,{user:t.user},t.user.id)]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(u,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function b(e){return j.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(o.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),d=c[0],u=c[1],O=Object(o.useState)(!1),f=Object(s.a)(O,2),p=f[0],x=f[1],v=Object(o.useState)("0"),y=Object(s.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),g=Object(s.a)(I,2),C=g[0],_=g[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),!d||"0"===S)return d||x(!0),void("0"===S&&_(!0));var t=b(Number(S)),i={id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,userId:(null===t||void 0===t?void 0:t.id)||0,title:d,completed:!1,user:t};n((function(e){return[].concat(Object(r.a)(e),[i])})),u(""),N("0")},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:d,onChange:function(e){u(e.target.value),x(!1)}}),p&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("select",{"data-cy":"userSelect",value:S,onChange:function(e){N(e.target.value),_(!1)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name})}))]}),C&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(l.jsx)(m,{todos:a})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.510a0a55.chunk.js.map