(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t){},139:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(26),i=n.n(a),s=(n(67),n(68),n(4)),u=n(15),o=n(1);function j(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(u.b,{to:"/home",children:Object(o.jsx)("button",{children:"Welcome"})}),Object(o.jsx)("img",{src:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80",alt:"aesthetic food"})]})}var b=n(5),l=n(12),p=n(14),d=n(7),O=n(22),h=n.n(O),f=n(23),x="GET_RECIPES",v="GET_RECIPES_BY_NAME",m="GET_RECIPE_DETAIL",g="GET_DIETS",E="ORDER_ASCE",y="ORDER_DESC",S="HEALTH_ASCE",C="HEALTH_DESCE",D="FILTER_BY_DIETS",w=function(e){return function(){var t=Object(l.a)(Object(b.a)().mark((function t(n){var c,r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(f.RECIPE_DETAIL+e);case 2:return c=t.sent,r=c.data,t.abrupt("return",n({type:m,payload:r}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(){return function(){var e=Object(l.a)(Object(b.a)().mark((function e(t){var n,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(f.ALL_DIETS);case 2:return n=e.sent,c=n.data,e.abrupt("return",t({type:g,payload:c}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(e,t){if("Alphabetical"===t){if("Ascending"===e)return{type:E};if(e="Descending")return{type:y}}if("Numerical"===t){if("Ascending"===e)return{type:S};if(e="Descending")return{type:C}}};function R(e){var t=e.id,n=e.image,c=e.title,r=e.diets;return Object(o.jsxs)("div",{children:[Object(o.jsx)(u.b,{to:"/recipe/".concat(t),children:Object(o.jsx)("h3",{children:c})}),Object(o.jsx)("img",{src:n,alt:"".concat(c)}),Object(o.jsxs)("p",{children:["".concat(r)," "]})]})}function _(){var e=r.a.useState(""),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(d.b)();return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),a((t=n,function(){var e=Object(l.a)(Object(b.a)().mark((function e(n){var c,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(f.RECIPES_BY_NAME+t);case 2:return c=e.sent,r=c.data,e.abrupt("return",n({type:v,payload:r}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return function(e){c(e.target.value)}(e)}}),Object(o.jsx)("button",{type:"submit"})]})})}var k=n(13);function T(e){var t=e.value;return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",name:"diets",value:t}),t,Object(o.jsx)("br",{})]})}function L(e){var t=e.diets,n=r.a.useState([]),c=Object(p.a)(n,2),a=c[0],i=c[1],s=Object(d.b)();return r.a.useEffect((function(){s(function(e){return{type:D,payload:e}}(a))}),[a]),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Sort by:"}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{children:"Alphabet order:"}),Object(o.jsxs)("select",{onChange:function(e){e.preventDefault(),s(I(e.target.value,"Alphabetical"))},children:[Object(o.jsx)("option",{children:"-"}),Object(o.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(o.jsx)("option",{value:"Descending",children:"Descending"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{children:"Health score:"}),Object(o.jsxs)("select",{onChange:function(e){e.preventDefault(),s(I(e.target.value,"Numerical"))},children:[Object(o.jsx)("option",{children:"-"}),Object(o.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(o.jsx)("option",{value:"Descending",children:"Descending"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onChange:function(e){!function(e){e.target.checked&&i((function(t){return[].concat(Object(k.a)(t),[e.target.value])})),e.target.checked||i((function(t){return Object(k.a)(t).filter((function(t){return t!==e.target.value}))}))}(e)},children:[Object(o.jsx)("p",{children:"Diet types:"}),t.map((function(e){return Object(o.jsx)(T,{value:e.name},e.id)}))]})})]})}function P(){var e=r.a.useState(0),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(d.b)();r.a.useEffect((function(){var e=function(){var e=Object(l.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(function(){var e=Object(l.a)(Object(b.a)().mark((function e(t){var n,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(f.RECIPES);case 2:return n=e.sent,c=n.data,e.abrupt("return",t({type:x,payload:c}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return e.next=5,a(A());case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var i=Object(d.c)((function(e){return e}))||!1,s=i.recipes,u=i.diets;return s?(console.log(s),Object(o.jsxs)("div",{children:[Object(o.jsx)(_,{}),Object(o.jsx)(L,{diets:u}),Object(o.jsx)("p",{children:"Let's see recipes"}),Object(o.jsx)("button",{onClick:function(){n>0&&c(n-9)},children:"Back"}),Object(o.jsx)("button",{onClick:function(){s[n+9]&&c(n+9)},children:"Next"}),s.slice(n,n+9).map((function(e){return Object(o.jsx)(R,{id:e.id,image:e.image,title:e.title,diets:e.diets},e.id)}))]})):Object(o.jsx)("p",{children:"cargando"})}function H(e){var t=e.number,n=e.step;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h4",{children:["step ",t]}),Object(o.jsx)("p",{children:n})]})}var B=n(61),M=n.n(B),F=function(){var e=Object(d.b)(),t=Object(s.e)().id;r.a.useEffect((function(){var n=function(){var n=Object(l.a)(Object(b.a)().mark((function n(){return Object(b.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(w(t));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var n=(Object(d.c)((function(e){return e}))||!1).recipeDetail;if(console.log(n),n){console.log(n);var c=n.title,a=n.image,i=n.diets,u=n.dishTypes,j=n.healthScore,p=n.summary,O=n.steps;return console.log(O,"steps"),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:c}),a?Object(o.jsx)("img",{src:a,alt:c}):Object(o.jsx)("p",{children:"There is no picture"}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("p",{children:u}),Object(o.jsx)("p",{children:j}),Object(o.jsx)("div",{children:M()(p)}),O?O.map((function(e){return Object(o.jsx)(H,{number:e.number,step:e.step},e.number)})):Object(o.jsx)("p",{children:"There is no instrucctions"})]})}return Object(o.jsx)("p",{children:"chao pa"})},G=n(28),N=n(2);function Y(){var e=Object(d.b)();r.a.useEffect((function(){var t=function(){var t=Object(l.a)(Object(b.a)().mark((function t(){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(A());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var t=(Object(d.c)((function(e){return e}))||!1).diets,n={number:0,step:""},c=r.a.useState({name:"",summary:"",healthScore:0,steps:[Object(N.a)({},n)],image:""}),a=Object(p.a)(c,2),i=a[0],s=a[1],u=r.a.useState([]),j=Object(p.a)(u,2),O=j[0],h=j[1],f=r.a.useState({}),x=Object(p.a)(f,2),v=(x[0],x[1],function(e){s(Object(N.a)(Object(N.a)({},i),{},Object(G.a)({},e.target.name,e.target.value)))});if(console.log({recipe:i,diet:O}),t)return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{children:"name: "}),Object(o.jsx)("input",{type:"text",name:"name",value:i.name,onChange:function(e){return v(e)}}),Object(o.jsx)("label",{children:"Summary: "}),Object(o.jsx)("input",{type:"text",name:"summary",value:i.summary,onChange:function(e){return v(e)}}),Object(o.jsx)("label",{children:"Health score: "}),Object(o.jsx)("input",{type:"number",name:"healthScore",value:i.healthScore,onChange:function(e){return v(e)}}),Object(o.jsx)("label",{children:"Image URL: "}),Object(o.jsx)("input",{type:"text",name:"image",value:i.image,onChange:function(e){return v(e)}}),i.steps.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{children:["Step ",t+1,": "]}),Object(o.jsx)("input",{type:"text",name:"step ".concat(t+1),id:t,"data-number":t+1,value:e.step,onChange:function(e){!function(e){var t=Object(k.a)(i.steps);t[e.target.id].step=e.target.value,t[e.target.id].number=e.target.dataset.number,s(Object(N.a)(Object(N.a)({},i),{},{steps:t}))}(e)}}),i.steps.length>1?Object(o.jsx)("button",{onClick:function(e){!function(e,t){e.preventDefault();var n=Object(k.a)(i.steps);n.splice(t,1),s(Object(N.a)(Object(N.a)({},i),{},{steps:n}))}(e,t)},children:"Remove"}):null]},t)})),Object(o.jsx)("button",{onClick:function(e){!function(e){e.preventDefault(),s(Object(N.a)(Object(N.a)({},i),{},{steps:[].concat(Object(k.a)(i.steps),[Object(N.a)({},n)])}))}(e)},children:"Add"}),Object(o.jsx)("form",{onChange:function(e){!function(e){e.target.checked&&h((function(t){return[].concat(Object(k.a)(t),[e.target.value])})),e.target.checked||h((function(t){return Object(k.a)(t).filter((function(t){return t!==e.target.value}))}))}(e)},children:t.map((function(e){return Object(o.jsx)(T,{value:e.name},e.id)}))})]})})}var J=function(){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(s.a,{path:"/home",component:P}),Object(o.jsx)(s.a,{path:"/recipe/:id",component:F}),Object(o.jsx)(s.a,{path:"/createRecipe",component:Y})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Z=n(35);function z(e,t){return e.title<t.title?-1:e.title>t.title?1:0}function q(e,t){return e.healthScore<t.healthScore?-1:e.healthScore>t.healthScore?1:z(t,e)}var U={recipes:[],orderRecipes:[],diets:[],recipeDetail:{}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=function(){switch(t.type){case x:return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:t.payload,orderRecipes:t.payload})};case v:return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:t.payload})};case m:return{v:Object(N.a)(Object(N.a)({},e),{},{recipeDetail:t.payload})};case g:return{v:Object(N.a)(Object(N.a)({},e),{},{diets:t.payload})};case E:return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:e.recipes.sort(z)})};case y:return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:e.recipes.sort(z).reverse()})};case S:return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:e.recipes.sort(q)})};case C:return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:e.recipes.sort(q).reverse()})};case D:var n=t.payload;if(!n.length)return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:e.orderRecipes})};console.log(n,"redux");for(var c=[],r=function(t){c=c.concat(e.orderRecipes.filter((function(e){return e.diets.includes(n[t])})))},a=0;a<n.length;a++)r(a);var i=new Set(c),s=Object(k.a)(i);return{v:Object(N.a)(Object(N.a)({},e),{},{recipes:s})}}}();if("object"===typeof n)return n.v},K=n(62),Q=Object(Z.b)(V,Object(Z.a)(K.a));i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d.a,{store:Q,children:Object(o.jsx)(u.a,{children:Object(o.jsx)(J,{})})})}),document.getElementById("root")),W()},23:function(e,t){var n="http://localhost:3001",c=n+"/recipes";e.exports={RECIPES:c,RECIPES_BY_NAME:"http://localhost:3001/recipes?name=",RECIPE_DETAIL:"http://localhost:3001/recipes/",ALL_DIETS:"http://localhost:3001/diets"}},67:function(e,t,n){},68:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.f1ba2fed.chunk.js.map