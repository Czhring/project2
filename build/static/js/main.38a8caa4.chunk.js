(this["webpackJsonpcoffee-shop"]=this["webpackJsonpcoffee-shop"]||[]).push([[0],{39:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(18),r=c.n(i),s=(c(52),c(27)),j=c(6),a=(c(53),c(8)),o=(c(39),c(1));var d=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],r=c[1],s=Object(a.f)().id;Object(n.useEffect)((function(){fetch("https://api.sampleapis.com/coffee/iced/".concat(s)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var d="";return s&&(d=Object(o.jsxs)("div",{className:"Description",children:[Object(o.jsx)("h1",{children:i.title}),Object(o.jsx)("p",{children:i.description}),Object(o.jsx)("h5",{children:"Ingredient:"}),Object(o.jsx)("p",{children:i.ingredients}),Object(o.jsx)("button",{onClick:function(){return e.addDrinkToCart(i)},children:"Add to Cart"})]})),Object(o.jsx)("div",{className:"icedcoffee",children:d})},b=c(14);c(62);var h=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),d=(a[0],a[1]);Object(n.useEffect)((function(){fetch("https://api.sampleapis.com/coffee/iced").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var h=i.map((function(e){return Object(o.jsx)("p",{onClick:function(){return t=e.id,void d(t);var t},children:Object(o.jsx)(b.b,{to:"/iced/"+e.id,children:e.title})})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Cold Drink"}),Object(o.jsx)("img",{src:"https://www.tasteofhome.com/wp-content/uploads/2020/02/Types-of-iced-Coffee-2_1200X1200.jpg",alt:"iced coffee image"}),h]})};c(63);var l=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)(null),a=Object(j.a)(s,2),d=(a[0],a[1]);Object(n.useEffect)((function(){fetch("https://api.sampleapis.com/coffee/hot").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var h=i.map((function(e){return Object(o.jsx)("p",{onClick:function(){return t=e.id,void d(t);var t},children:Object(o.jsx)(b.b,{to:"/hot/"+e.id,children:e.title})})}));return Object(o.jsxs)("div",{className:"Hot",children:[Object(o.jsx)("h2",{children:"Hot Drink"}),Object(o.jsx)("img",{src:"https://www.tasteofhome.com/wp-content/uploads/2020/02/Types-of-Coffee-Drinks_1200X1200.jpg?resize=700,700",alt:"hot coffee image"}),h]})},O=c(43),u=c(44),f=c(37);c(64);var x=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{classname:"homepage",src:"https://img0.baidu.com/it/u=1253245222,4073951074&fm=26&fmt=auto"}),Object(o.jsx)(O.a,{children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(f.a,{xs:12,md:6,children:Object(o.jsx)(l,{})}),Object(o.jsx)(f.a,{xs:12,md:6,children:Object(o.jsx)(h,{})})]})})]})},p=c(24),v=c(72);c(65);var m=function(){return Object(o.jsx)("div",{className:"nav-bar",children:Object(o.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(o.jsxs)(O.a,{className:"nav-bar",children:[Object(o.jsx)(b.b,{to:"/",children:Object(o.jsx)("h1",{children:"Czhring"})}),Object(o.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(o.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(o.jsxs)(v.a,{className:"me-auto",children:[Object(o.jsx)(b.b,{to:"/hot",children:Object(o.jsx)("h2",{children:"Hot Drink"})}),Object(o.jsx)(b.b,{to:"/iced",children:Object(o.jsx)("h2",{children:"Cold Drink"})}),Object(o.jsx)(b.b,{to:"/cart",children:Object(o.jsx)("h2",{children:"My Cart"})})]})})]})})})};c(68);var g=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)(O.a,{children:Object(o.jsx)(p.a,{expand:"lg",variant:"dark",bg:"dark",children:Object(o.jsx)(O.a,{children:Object(o.jsx)(p.a.Brand,{children:Object(o.jsx)("p",{children:"CONNECT WITH US :(510)-***-8888"})})})})})})},k=c(46);c(69);var C=function(e){console.log(e);var t="";return e.drink&&(t=e.drink.map((function(t,c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t.title}),Object(o.jsx)("button",{onClick:function(){return e.removeDrinkFromList(c)},children:" Remove"})]})}))),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" My Cart"}),Object(o.jsx)("p",{children:t}),Object(o.jsx)(k.a,{variant:"dark",children:"Pay"})," "]})};var D=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],r=c[1],s=Object(a.f)().id;console.log(s),Object(n.useEffect)((function(){fetch("https://api.sampleapis.com/coffee/hot/".concat(s)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var d="";return s&&(d=Object(o.jsxs)("div",{className:"Description",children:[Object(o.jsx)("h1",{children:i.title}),Object(o.jsx)("p",{children:i.description}),Object(o.jsx)("h5",{children:"Ingredient:"}),Object(o.jsx)("p",{children:i.ingredients}),Object(o.jsx)("button",{onClick:function(){return e.addDrinkToCart(i)},children:"Add to Cart"})]})),Object(o.jsx)("div",{className:"hotcoffee",children:d})},N=c(47);var T=function(){var e=Object(N.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],i=function(e){n([].concat(Object(s.a)(c),[e]))},r=function(e){var t=Object(s.a)(c);t.splice(e,1),n(t)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(m,{}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:"/",component:x}),Object(o.jsx)(a.a,{exact:!0,path:"/hot",component:l}),Object(o.jsx)(a.a,{path:"/hot/:id",render:function(){return Object(o.jsx)(D,{addDrinkToCart:i})}}),Object(o.jsx)(a.a,{exact:!0,path:"/iced",component:h}),Object(o.jsx)(a.a,{path:"/iced/:id",render:function(){return Object(o.jsx)(d,{addDrinkToCart:i})}}),Object(o.jsx)(a.a,{exact:!0,path:"/cart",render:function(){return Object(o.jsx)(C,{removeDrinkFromList:r,drink:c})}})]}),Object(o.jsx)(g,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};r.a.render(Object(o.jsx)(b.a,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),w()}},[[70,1,2]]]);
//# sourceMappingURL=main.38a8caa4.chunk.js.map