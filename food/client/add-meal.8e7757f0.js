import{S as e,i as t,s,e as a,t as o,b as l,d as r,f as n,h as c,k as d,l as i,m as f,x as h,a as u,y as p,j as m,n as g,N as v,P as M,Q as F,U as b,I as x,R as N}from"./index.9cf44aa4.js";import"./index.e287424e.js";import{a as j}from"./validate.d83e4ffc.js";import{a as E}from"./recentFood.fd6a6ea9.js";function _(e,t,s){const a=Object.create(e);return a.id=t[s].id,a.name=t[s].name,a.i=s,a}function y(e,t,s){const a=Object.create(e);return a.id=t[s].id,a.name=t[s].name,a.i=s,a}function k(e){let t,s;return{c(){t=a("p"),s=o(e.successMessage),this.h()},l(a){t=l(a,"P",{class:!0});var o=r(t);s=n(o,e.successMessage),o.forEach(c),this.h()},h(){d(t,"class","success svelte-1pcmpj2")},m(e,a){i(e,t,a),f(t,s)},p(e,t){e.successMessage&&h(s,t.successMessage)},d(e){e&&c(t)}}}function I(e){let t,s;return{c(){t=a("p"),s=o(e.errorMessage),this.h()},l(a){t=l(a,"P",{class:!0});var o=r(t);s=n(o,e.errorMessage),o.forEach(c),this.h()},h(){d(t,"class","error svelte-1pcmpj2")},m(e,a){i(e,t,a),f(t,s)},p(e,t){e.errorMessage&&h(s,t.errorMessage)},d(e){e&&c(t)}}}function P(e){let t,s,h,p,g,v,j,E,k,I,P=e.foodForMeal,S=[];for(let t=0;t<P.length;t+=1)S[t]=O(y(e,P,t));let T=e.filteredFood,U=[];for(let t=0;t<T.length;t+=1)U[t]=A(_(e,T,t));return{c(){t=a("input"),s=u();for(let e=0;e<S.length;e+=1)S[e].c();h=u(),p=a("button"),g=o("Add"),v=u(),j=a("input"),E=u(),k=a("div");for(let e=0;e<U.length;e+=1)U[e].c();this.h()},l(e){t=l(e,"INPUT",{type:!0,placeholder:!0,maxlength:!0,size:!0,class:!0}),s=m(e);for(let t=0;t<S.length;t+=1)S[t].l(e);h=m(e),p=l(e,"BUTTON",{class:!0});var a=r(p);g=n(a,"Add"),a.forEach(c),v=m(e),j=l(e,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0,size:!0}),E=m(e),k=l(e,"DIV",{class:!0});var o=r(k);for(let e=0;e<U.length;e+=1)U[e].l(o);o.forEach(c),this.h()},h(){d(t,"type","text"),d(t,"placeholder","Name"),d(t,"maxlength","20"),d(t,"size","20"),d(t,"class","svelte-1pcmpj2"),d(p,"class","block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mb-3"),d(j,"class","filter bg-gray-200 w-24 px-2 svelte-1pcmpj2"),d(j,"type","text"),d(j,"placeholder","Search"),d(j,"maxlength","5"),d(j,"size","3"),d(k,"class","pb-6"),I=[M(t,"input",e.input0_input_handler),M(p,"click",F(e.handleAdd)),M(j,"input",e.input1_input_handler),M(j,"input",e.handleFilter)]},m(a,o){i(a,t,o),b(t,e.name),i(a,s,o);for(let e=0;e<S.length;e+=1)S[e].m(a,o);i(a,h,o),i(a,p,o),f(p,g),i(a,v,o),i(a,j,o),b(j,e.filter),i(a,E,o),i(a,k,o);for(let e=0;e<U.length;e+=1)U[e].m(k,null)},p(e,s){if(e.name&&t.value!==s.name&&b(t,s.name),e.foodForMeal){let t;for(P=s.foodForMeal,t=0;t<P.length;t+=1){const a=y(s,P,t);S[t]?S[t].p(e,a):(S[t]=O(a),S[t].c(),S[t].m(h.parentNode,h))}for(;t<S.length;t+=1)S[t].d(1);S.length=P.length}if(e.filter&&j.value!==s.filter&&b(j,s.filter),e.handleFoodClick||e.food||e.filteredFood){let t;for(T=s.filteredFood,t=0;t<T.length;t+=1){const a=_(s,T,t);U[t]?U[t].p(e,a):(U[t]=A(a),U[t].c(),U[t].m(k,null))}for(;t<U.length;t+=1)U[t].d(1);U.length=T.length}},d(e){e&&c(t),e&&c(s),x(S,e),e&&c(h),e&&c(p),e&&c(v),e&&c(j),e&&c(E),e&&c(k),x(U,e),N(I)}}}function S(e){let t,s,d,h;return{c(){t=a("p"),s=o("You have no food."),d=a("p"),h=a("p")},l(e){t=l(e,"P",{});var a=r(t);s=n(a,"You have no food."),a.forEach(c),d=l(e,"P",{}),r(d).forEach(c),h=l(e,"P",{}),r(h).forEach(c)},m(e,a){i(e,t,a),f(t,s),i(e,d,a),i(e,h,a)},p:g,d(e){e&&c(t),e&&c(d),e&&c(h)}}}function O(e){let t,s,u=e.name+"";return{c(){t=a("div"),s=o(u),this.h()},l(e){t=l(e,"DIV",{class:!0});var a=r(t);s=n(a,u),a.forEach(c),this.h()},h(){d(t,"class","")},m(e,a){i(e,t,a),f(t,s)},p(e,t){e.foodForMeal&&u!==(u=t.name+"")&&h(s,u)},d(e){e&&c(t)}}}function A(e){let t,s,u,p=e.name+"";function m(...t){return e.click_handler(e,...t)}return{c(){t=a("button"),s=o(p),this.h()},l(e){t=l(e,"BUTTON",{class:!0});var a=r(t);s=n(a,p),a.forEach(c),this.h()},h(){d(t,"class","box w-full svelte-1pcmpj2"),u=M(t,"click",m)},m(e,a){i(e,t,a),f(t,s)},p(t,a){e=a,t.filteredFood&&p!==(p=e.name+"")&&h(s,p)},d(e){e&&c(t),u()}}}function T(e){let t,s,h,v,M,F,b,x=""!==e.successMessage&&k(e),N=""!==e.errorMessage&&I(e);function j(e,t){return 0===t.food.length?S:P}let E=j(0,e),_=E(e);return{c(){t=u(),s=a("h2"),h=o("Add Meal"),v=u(),x&&x.c(),M=u(),N&&N.c(),F=u(),_.c(),b=p(),this.h()},l(e){t=m(e),s=l(e,"H2",{class:!0});var a=r(s);h=n(a,"Add Meal"),a.forEach(c),v=m(e),x&&x.l(e),M=m(e),N&&N.l(e),F=m(e),_.l(e),b=p(),this.h()},h(){document.title="Update Food",d(s,"class","text-xl mb-2")},m(e,a){i(e,t,a),i(e,s,a),f(s,h),i(e,v,a),x&&x.m(e,a),i(e,M,a),N&&N.m(e,a),i(e,F,a),_.m(e,a),i(e,b,a)},p(e,t){""!==t.successMessage?x?x.p(e,t):((x=k(t)).c(),x.m(M.parentNode,M)):x&&(x.d(1),x=null),""!==t.errorMessage?N?N.p(e,t):((N=I(t)).c(),N.m(F.parentNode,F)):N&&(N.d(1),N=null),E===(E=j(0,t))&&_?_.p(e,t):(_.d(1),(_=E(t))&&(_.c(),_.m(b.parentNode,b)))},i:g,o:g,d(e){e&&c(t),e&&c(s),e&&c(v),x&&x.d(e),e&&c(M),N&&N.d(e),e&&c(F),_.d(e),e&&c(b)}}}function U(e,t,s){let a="",o=[],l="",r="",n="",c=[],d=[],i={name:"",protein:0,carbs:0,fat:0,food:[]},f=[];function h(e){f.push(e),s("foodForMeal",f),console.log(f),i.protein=i.protein+e.protein,i.carbs=i.carbs+e.carbs,i.fat=i.fat+e.fat,i.food.push(e)}v(async()=>{s("food",o=JSON.parse(localStorage.getItem("food")).sort((e,t)=>e.name>t.name)||[]),d=JSON.parse(localStorage.getItem("recentFood"))||[],s("filteredFood",c=o)});return{name:a,food:o,errorMessage:l,successMessage:r,filter:n,filteredFood:c,foodForMeal:f,handleAdd:function(){event.preventDefault(),s("successMessage",r=""),s("errorMessage",l="");let e={};if(i.name=a,!(e=j(i)).valid)return s("errorMessage",l=e.message),void console.log("error",l);o.push(i),localStorage.setItem("food",JSON.stringify(o)),E(i,d),s("foodForMeal",f=[])},handleFoodClick:h,handleFilter:function(){""===n&&s("filteredFood",c=o),s("filteredFood",c=o.filter(e=>e.name.toLowerCase().includes(n.toLowerCase())))},input0_input_handler:function(){a=this.value,s("name",a)},input1_input_handler:function(){n=this.value,s("filter",n)},click_handler:({i:e})=>h(o[e])}}export default class extends e{constructor(e){super(),t(this,e,U,T,s,{})}}