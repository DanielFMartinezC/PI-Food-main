(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t){},150:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(32),i=c.n(r),s=(c(78),c(79),c(4)),u=c(12),o=c(42),j=c.n(o),l=c(0);function b(){return Object(l.jsx)("div",{className:j.a.root,children:Object(l.jsx)(u.b,{to:"/home",children:Object(l.jsx)("button",{className:j.a.btn,children:"Welcome"})})})}var p=c(9),d=c(16),O=c(17),h=c.n(O),m=c(18),f="GET_RECIPES",v="GET_RECIPES_BY_NAME",x="GET_RECIPE_DETAIL",_="GET_DIETS",g="ORDER_ASCE",y="ORDER_DESC",S="HEALTH_ASCE",R="HEALTH_DESCE",N="FILTER_BY_DIETS",E="ORIGINAL_ORDER",C="RECIPE_DETAIL_RESET",D=function(e){return function(){var t=Object(d.a)(Object(p.a)().mark((function t(c){var n,a;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(m.RECIPE_DETAIL+e);case 2:return n=t.sent,a=n.data,t.abrupt("return",c({type:x,payload:a}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){return function(){var e=Object(d.a)(Object(p.a)().mark((function e(t){var c,n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(m.ALL_DIETS);case 2:return c=e.sent,n=c.data,e.abrupt("return",t({type:_,payload:n}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=c(8),H=c(35),L=c.n(H);function T(e){var t=e.number,c=e.step;return Object(l.jsxs)("div",{className:L.a.root,children:[Object(l.jsxs)("h4",{className:L.a.title,children:["step ",t]}),Object(l.jsx)("p",{className:L.a.inst,children:c})]})}var k=c(72),w=c.n(k),P=c(19),B=c.n(P),F=function(){var e=Object(A.b)(),t=Object(s.f)().id;a.a.useEffect((function(){var c=function(){var c=Object(d.a)(Object(p.a)().mark((function c(){return Object(p.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e(D(t));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return c(),function(){e({type:C})}}));var c=(Object(A.c)((function(e){return e}))||!1).recipeDetail;if(c){var n=c.title,r=c.image,i=c.diets,u=c.dishTypes,o=c.healthScore,j=c.summary,b=c.steps;return Object(l.jsxs)("div",{className:B.a.root,children:[Object(l.jsxs)("div",{className:B.a.div1,children:[Object(l.jsx)("div",{children:r?Object(l.jsx)("img",{src:r,alt:n,className:B.a.image}):Object(l.jsx)("p",{children:"There is no picture"})}),Object(l.jsxs)("div",{className:B.a.divInfo,children:[Object(l.jsx)("h3",{className:B.a.title,children:n}),Object(l.jsx)("div",{children:i?Object(l.jsxs)("p",{children:["Diet types: ",("object"===typeof i[0]?i.map((function(e){return e.name})):i).map((function(e){return" "+e+","}))]}):null}),u?Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Dish types: ",u.map((function(e){return" "+e+","}))]})}):null,Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Health schore: ",o]})})]})]}),Object(l.jsx)("div",{className:B.a.summary,children:w()(j)}),b?b.length&&b[0].step?b.map((function(e){return Object(l.jsx)(T,{number:e.number,step:e.step},e.number)})):Object(l.jsx)("p",{children:"There is no instrucctions"}):null]})}return Object(l.jsx)("p",{children:"chao pa"})},Y=c(5),G=c(29),q=c(2),M=c(15);function J(e){var t=e.value;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"checkbox",name:"diets",value:t}),t,Object(l.jsx)("br",{})]})}var K=c(7),Q=c.n(K);function W(){var e=Object(A.b)();a.a.useEffect((function(){e(I())}));var t=(Object(A.c)((function(e){return e}))||!1).diets,c={number:0,step:""},n=a.a.useState({title:"",summary:"",healthScore:0,steps:[Object(q.a)({},c)],image:""}),r=Object(M.a)(n,2),i=r[0],s=r[1],u=a.a.useRef(null),o=a.a.useState([]),j=Object(M.a)(o,2),b=j[0],p=j[1],d=a.a.useState({initialState:!0}),O=Object(M.a)(d,2),f=O[0],v=O[1];function x(e){var t={};return e.length?t.diets="":t.diets="You must select at least one diet",t}function _(e){var t="";if(e.length>1){for(var c=0;c<e.length;c++)if(!e[c].step)return t="All steps fields must be filled";return t}}var g=function(e){s(Object(q.a)(Object(q.a)({},i),{},Object(G.a)({},e.target.name,e.target.value))),v(Object(q.a)(Object(q.a)({},f),{},{initialState:!1},function(e){var t={};e.title?t.name="":t.name="Name is required",e.healthScore>100?t.healthScore="Health score must be 100 or less":e.healthScore<0?t.healthScore="Health score must be 0 or greater":t.healthScore="";var c=new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/);return""!==e.image?c.test(e.image)||(t.image="You must type a URL"):t.image="",e.summary?t.summary="":t.summary="Summar is required",t}(Object(q.a)(Object(q.a)({},i),{},Object(G.a)({},e.target.name,e.target.value)))))};function y(e){if(e.preventDefault(),f.initialState?v(Object(q.a)(Object(q.a)({},f),{},{beforeSubmit:"You must complete the form before you submit"})):v(Object(q.a)(Object(q.a)({},f),{},{beforeSubmit:""})),u.current){var t={recipe:i,diets:b};h.a.post(m.RECIPES,t).then((function(e){return function(e){alert(e)}(e.data)}))}}return a.a.useEffect((function(){u.current=function(){for(var e in f)if(f[e])return 0;return 1}()}),[f,b,i]),Object(l.jsxs)("div",{className:Q.a.root,children:[Object(l.jsx)("h2",{children:"Here you can create your own recipe"}),Object(l.jsxs)("div",{className:Q.a.div1,children:[Object(l.jsx)("div",{className:Q.a.divRecipes,children:Object(l.jsxs)("form",{onSubmit:function(e){y(e)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"name: "}),Object(l.jsx)("input",{type:"text",name:"title",value:i.title,onChange:function(e){return g(e)}}),f.name?Object(l.jsx)("span",{className:Q.a.danger,children:f.name}):null]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Health score: "}),Object(l.jsx)("input",{className:Q.a.HS,type:"number",name:"healthScore",value:i.healthScore,onChange:function(e){return g(e)}}),f.healthScore?Object(l.jsx)("span",{className:Q.a.danger,children:f.healthScore}):null]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Image URL: "}),Object(l.jsx)("input",{type:"text",name:"image",value:i.image,onChange:function(e){return g(e)}}),f.image?Object(l.jsx)("span",{className:Q.a.danger,children:f.image}):null]}),Object(l.jsxs)("div",{className:Q.a.summaryDiv,children:[Object(l.jsx)("label",{children:"Summary: "}),Object(l.jsx)("textarea",{className:Q.a.summary,type:"text",name:"summary",value:i.summary,onChange:function(e){return g(e)}}),f.summary?Object(l.jsx)("span",{className:Q.a.danger,children:f.summary}):null]}),i.steps.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{children:["Step ",t+1,": "]}),Object(l.jsx)("input",{type:"text",name:"step ".concat(t+1),id:t,"data-number":t+1,value:e.step,onChange:function(e){!function(e){var t=Object(Y.a)(i.steps);t[e.target.id].step=e.target.value,t[e.target.id].number=e.target.dataset.number,s(Object(q.a)(Object(q.a)({},i),{},{steps:t})),v(Object(q.a)(Object(q.a)({},f),{},{steps:_(t)}))}(e)}}),i.steps.length>1?Object(l.jsx)("button",{onClick:function(e){!function(e,t){e.preventDefault();var c=Object(Y.a)(i.steps);c.splice(t,1),s(Object(q.a)(Object(q.a)({},i),{},{steps:c})),v(Object(q.a)(Object(q.a)({},f),{},{steps:_(Object(Y.a)(c))}))}(e,t)},children:"Remove"}):null]},t)})),f.steps?Object(l.jsx)("span",{className:Q.a.danger,children:f.steps}):null,Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:Q.a.add,onClick:function(e){!function(e){e.preventDefault(),s(Object(q.a)(Object(q.a)({},i),{},{steps:[].concat(Object(Y.a)(i.steps),[Object(q.a)({},c)])})),v(Object(q.a)(Object(q.a)({},f),{},{steps:_([].concat(Object(Y.a)(i.steps),[Object(q.a)({},c)]))}))}(e)},children:"Add"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:Q.a.btnSub,type:"submit",disabled:!u,children:"Submit"}),f.beforeSubmit?Object(l.jsx)("span",{className:Q.a.danger,children:f.beforeSubmit}):null]})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onChange:function(e){!function(e){e.target.checked&&(p((function(t){return[].concat(Object(Y.a)(t),[e.target.value])})),v(Object(q.a)(Object(q.a)({},f),x([].concat(Object(Y.a)(b),[e.target.value]))))),e.target.checked||(p((function(t){return Object(Y.a)(t).filter((function(t){return t!==e.target.value}))})),v(Object(q.a)(Object(q.a)({},f),x(Object(Y.a)(b).filter((function(t){return t!==e.target.value}))))))}(e)},children:[Object(l.jsx)("h4",{children:"Choose the diet type:"}),t?t.map((function(e){return Object(l.jsx)(J,{value:e.name},e.id)})):Object(l.jsx)("p",{children:"pere"}),f.diets?Object(l.jsx)("span",{className:Q.a.danger,children:f.diets}):null]})})]})]})}var z=c(34),U=c.n(z);function V(){return Object(l.jsx)("div",{children:Object(l.jsx)(u.b,{to:"/Home",children:Object(l.jsx)("button",{className:U.a.btnHome,children:"Home"})})})}function X(){return Object(l.jsx)("div",{children:Object(l.jsx)(u.b,{to:"/CreateRecipe",children:Object(l.jsx)("button",{className:U.a.btnCR,children:"Create recipe"})})})}var Z=c(44),$=c.n(Z);function ee(){var e=Object(s.e)().pathname;return"/"===e?null:"/CreateRecipe"===e?Object(l.jsx)("div",{className:$.a.root,children:Object(l.jsx)(V,{})}):Object(l.jsxs)("div",{className:$.a.root,children:[Object(l.jsx)("div",{children:Object(l.jsx)(V,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(X,{})})]})}var te=c(20),ce=c.n(te);function ne(e){var t=e.id,c=e.image,n=e.title,a=e.diets;return Object(l.jsxs)("div",{className:ce.a.root,children:[Object(l.jsxs)("div",{className:ce.a.TD,children:[Object(l.jsx)(u.b,{className:ce.a.a,to:"/recipe/".concat(t),children:Object(l.jsx)("p",{children:"See detail"})}),Object(l.jsx)("h3",{className:ce.a.title,children:n})]}),Object(l.jsx)("p",{className:ce.a.diets,children:a.map((function(e){return" "+e}))}),c?Object(l.jsx)("img",{className:ce.a.image,src:c,alt:"".concat(n)}):null]})}var ae=c(21),re=c.n(ae);function ie(e){var t=e.recipes,c=a.a.useState(0),n=Object(M.a)(c,2),r=n[0],i=n[1];if(t){for(var s=Math.ceil(t.length/9),u=[],o=1;o<=s;o++)u.push(o);return Object(l.jsxs)("div",{className:re.a.root,children:[Object(l.jsx)("h3",{children:"Let's see recipes"}),Object(l.jsxs)("div",{className:re.a.btns,children:[Object(l.jsx)("button",{className:re.a.btnB,onClick:function(){r>0&&i(r-9)},children:"Back"}),u.map((function(e){return Object(l.jsx)("button",{className:re.a.btn,value:e,onClick:function(e){return function(e){console.log(e.target.value),i(9*e.target.value-9)}(e)},children:e},e)})),Object(l.jsx)("button",{className:re.a.btnN,onClick:function(){t[r+9]&&i(r+9)},children:"Next"})]}),Object(l.jsx)("div",{className:re.a.list,children:t.slice(r,r+9).map((function(e){return Object(l.jsx)(ne,{id:e.id,image:e.image,title:e.title,diets:"object"===typeof e.diets[0]?e.diets.map((function(e){return e.name})):e.diets},e.id)}))})]})}return Object(l.jsx)("p",{children:"cargando"})}var se=c(36),ue=c.n(se);function oe(){var e=a.a.useState(""),t=Object(M.a)(e,2),c=t[0],n=t[1],r=Object(A.b)();return Object(l.jsxs)("div",{className:ue.a.root,children:[Object(l.jsx)("p",{children:"Search recipes by name: "}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),r((t=c,function(){var e=Object(d.a)(Object(p.a)().mark((function e(c){var n,a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(m.RECIPES_BY_NAME+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",c({type:v,payload:a}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(l.jsx)("input",{className:ue.a.input,type:"text",value:c,onChange:function(e){return function(e){n(e.target.value)}(e)},placeholder:"..."}),Object(l.jsx)("button",{className:ue.a.btn,type:"submit",children:"Search"})]})})]})}var je=c(25),le=c.n(je);function be(e){var t=e.diets,c=a.a.useState([]),n=Object(M.a)(c,2),r=n[0],i=n[1],s=Object(A.b)();return a.a.useEffect((function(){s(function(e){return{type:N,payload:e}}(r))}),[r]),Object(l.jsxs)("div",{className:le.a.root,children:[Object(l.jsx)("p",{children:"Sort by:"}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onChange:function(e){e.preventDefault(),s(function(e,t){if("Alphabetical"===t){if("Ascending"===e)return{type:g};if("Descending"===e)return{type:y};if("-"===e)return{type:E}}if("Numerical"===t){if("Ascending"===e)return{type:S};if("Descending"===e)return{type:R};if("-"===e)return{type:E}}}(e.target.value,e.target.name))},children:[Object(l.jsx)("p",{className:le.a.p,children:"Alphabet order:"}),Object(l.jsxs)("select",{name:"Alphabetical",className:le.a.input,children:[Object(l.jsx)("option",{value:"-",children:"-"}),Object(l.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(l.jsx)("option",{value:"Descending",children:"Descending"})]}),Object(l.jsx)("p",{className:le.a.p,children:"Health score:"}),Object(l.jsxs)("select",{name:"Numerical",className:le.a.input,children:[Object(l.jsx)("option",{value:"-",children:"-"}),Object(l.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(l.jsx)("option",{value:"Descending",children:"Descending"})]})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onChange:function(e){!function(e){e.target.checked&&i((function(t){return[].concat(Object(Y.a)(t),[e.target.value])})),e.target.checked||i((function(t){return Object(Y.a)(t).filter((function(t){return t!==e.target.value}))}))}(e)},children:[Object(l.jsx)("p",{children:"Diet types:"}),t.map((function(e){return Object(l.jsx)(J,{value:e.name},e.id)}))]})})]})}var pe=c(45),de=c.n(pe);function Oe(){var e=Object(A.b)();a.a.useEffect((function(){var t=function(){var t=Object(d.a)(Object(p.a)().mark((function t(){return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(function(){var e=Object(d.a)(Object(p.a)().mark((function e(t){var c,n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(m.RECIPES);case 2:return c=e.sent,n=c.data,e.abrupt("return",t({type:f,payload:n}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return t.next=5,e(I());case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var t=Object(A.c)((function(e){return e}))||!1,c=t.recipes,n=t.diets;return c&&n?Object(l.jsxs)("div",{className:de.a.root,children:[Object(l.jsx)("div",{children:Object(l.jsx)(oe,{})}),Object(l.jsxs)("div",{className:de.a.FC,children:[Object(l.jsx)("div",{children:Object(l.jsx)(be,{diets:n})}),Object(l.jsx)("div",{children:Object(l.jsx)(ie,{recipes:c})})]})]}):Object(l.jsx)("p",{children:"cargando"})}var he=function(){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(s.a,{path:"/",component:ee}),Object(l.jsx)(s.a,{path:"/Home",component:Oe}),Object(l.jsx)(s.a,{path:"/recipe/:id",component:F}),Object(l.jsx)(s.a,{path:"/CreateRecipe",component:W})]})},me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,151)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},fe=c(46);function ve(e,t){return e.title<t.title?-1:e.title>t.title?1:0}function xe(e,t){return e.healthScore<t.healthScore?-1:e.healthScore>t.healthScore?1:ve(t,e)}var _e={recipes:[],orderRecipes:[],diets:[],recipeDetail:{}},ge=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,c=arguments.length>1?arguments[1]:void 0,n=function(){switch(c.type){case f:return{v:Object(q.a)(Object(q.a)({},t),{},{recipes:c.payload,orderRecipes:c.payload})};case v:return{v:Object(q.a)(Object(q.a)({},t),{},{recipes:c.payload})};case x:return{v:Object(q.a)(Object(q.a)({},t),{},{recipeDetail:c.payload})};case _:return{v:Object(q.a)(Object(q.a)({},t),{},{diets:c.payload})};case E:return{v:Object(q.a)(Object(q.a)({},t),{},{recipes:t.orderRecipes})};case g:return e=Object(Y.a)(t.recipes),{v:Object(q.a)(Object(q.a)({},t),{},{recipes:e.sort(ve)})};case y:return e=Object(Y.a)(t.recipes),{v:Object(q.a)(Object(q.a)({},t),{},{recipes:e.sort(ve).reverse()})};case S:return e=Object(Y.a)(t.recipes),{v:Object(q.a)(Object(q.a)({},t),{},{recipes:e.sort(xe)})};case R:return e=Object(Y.a)(t.recipes),{v:Object(q.a)(Object(q.a)({},t),{},{recipes:e.sort(xe).reverse()})};case N:var n=c.payload;if(!n.length)return{v:Object(q.a)(Object(q.a)({},t),{},{recipes:t.orderRecipes})};for(var a=[],r=function(e){a=a.concat(t.orderRecipes.filter((function(t){return t.diets.includes(n[e])})))},i=0;i<n.length;i++)r(i);var s=new Set(a),u=Object(Y.a)(s);return{v:Object(q.a)(Object(q.a)({},t),{},{recipes:u})};case C:return{v:Object(q.a)(Object(q.a)({},t),{},{recipeDetail:{}})}}}();if("object"===typeof n)return n.v},ye=c(73),Se=Object(fe.b)(ge,Object(fe.a)(ye.a));i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(A.a,{store:Se,children:Object(l.jsx)(u.a,{children:Object(l.jsx)(he,{})})})}),document.getElementById("root")),me()},18:function(e,t){var c="http://localhost:3001",n=c+"/recipes";e.exports={RECIPES:n,RECIPES_BY_NAME:"http://localhost:3001/recipes?name=",RECIPE_DETAIL:"http://localhost:3001/recipes/",ALL_DIETS:"http://localhost:3001/diets"}},19:function(e,t,c){e.exports={root:"RecipeDetail_root__3AsJm",title:"RecipeDetail_title__2Kc6n",div1:"RecipeDetail_div1__2xDKI",divInfo:"RecipeDetail_divInfo__Ipcx5",image:"RecipeDetail_image__3KTfI",summary:"RecipeDetail_summary__20qn3"}},20:function(e,t,c){e.exports={root:"RecipeCard_root__2O4ye",TD:"RecipeCard_TD__1EDf1",a:"RecipeCard_a__2iHsu",title:"RecipeCard_title__LkOlD",diets:"RecipeCard_diets__1gfdc",image:"RecipeCard_image__2rH1a"}},21:function(e,t,c){e.exports={list:"RecipeList_list__2WD3m",btns:"RecipeList_btns__2ibPv",btnB:"RecipeList_btnB__IV0X1",btnN:"RecipeList_btnN__2A9jH",btn:"RecipeList_btn__3j0hY"}},25:function(e,t,c){e.exports={root:"Filters_root__1qYRG",p:"Filters_p__2PEbM",input:"Filters_input__3Qifx"}},34:function(e,t,c){e.exports={btnHome:"Button_btnHome__3pfDN",btnCR:"Button_btnCR__2gjyP"}},35:function(e,t,c){e.exports={root:"Steps_root__3yqYp",title:"Steps_title__1xQR2",inst:"Steps_inst__1AJVh"}},36:function(e,t,c){e.exports={root:"SearchInput_root__6zh3h",input:"SearchInput_input__9tQjB",btn:"SearchInput_btn__2II3Q"}},42:function(e,t,c){e.exports={root:"LandingPage_root__2gl-t",btn:"LandingPage_btn__3aRHG"}},44:function(e,t,c){e.exports={root:"NavBar_root__4Wsc8"}},45:function(e,t,c){e.exports={root:"HomePage_root__3QdHH",FC:"HomePage_FC__3_L0F"}},7:function(e,t,c){e.exports={root:"CreateRecipe_root__q5m21",div1:"CreateRecipe_div1__1YLJ0",divRecipes:"CreateRecipe_divRecipes__1mWCX",HS:"CreateRecipe_HS__nEGKG",summaryDiv:"CreateRecipe_summaryDiv__iOA5_",summary:"CreateRecipe_summary__PI8aH",add:"CreateRecipe_add__3v_Zz",btnSub:"CreateRecipe_btnSub__1peqA",danger:"CreateRecipe_danger__1rmTK"}},78:function(e,t,c){},79:function(e,t,c){}},[[150,1,2]]]);
//# sourceMappingURL=main.0d80abe3.chunk.js.map