import{S as e,i as t,s as a,e as r,t as o,b as s,d as n,f as l,h as c,k as i,l as f,m as d,x as h,a as u,y as p,j as m,q as g,E as v,p as M,T as b,D as F,c as x,g as k,O as E,V as N,o as $,r as _,R as P,Q as I,I as S,n as T}from"./index.37c8d187.js";import{I as y,t as A,p as O}from"./index.482ce061.js";import{f as w,a as D}from"./validate.d83e4ffc.js";import{c as j}from"./helpers.8433149e.js";import{a as C}from"./recentFood.fd6a6ea9.js";function q(e,t,a){const r=Object.create(e);return r.id=t[a].id,r.name=t[a].name,r.i=a,r}function U(e,t,a){const r=Object.create(e);return r.id=t[a].id,r.name=t[a].name,r.count=t[a].count,r.i=a,r}function V(e){let t,a;return{c(){t=r("p"),a=o(e.successMessage),this.h()},l(r){t=s(r,"P",{class:!0});var o=n(t);a=l(o,e.successMessage),o.forEach(c),this.h()},h(){i(t,"class","success svelte-q93k07")},m(e,r){f(e,t,r),d(t,a)},p(e,t){e.successMessage&&h(a,t.successMessage)},d(e){e&&c(t)}}}function B(e){let t,a;return{c(){t=r("p"),a=o(e.errorMessage),this.h()},l(r){t=s(r,"P",{class:!0});var o=n(t);a=l(o,e.errorMessage),o.forEach(c),this.h()},h(){i(t,"class","error svelte-q93k07")},m(e,r){f(e,t,r),d(t,a)},p(e,t){e.errorMessage&&h(a,t.errorMessage)},d(e){e&&c(t)}}}function z(e){let t,a,h,p,b,x,k,$,_,T,y,A,O,w=0!==e.foodForMeal.length&&L(e),D=e.foodForMeal,j=[];for(let t=0;t<D.length;t+=1)j[t]=Y(U(e,D,t));const C=e=>g(j[e],1,1,()=>{j[e]=null});let V=e.filteredFood,B=[];for(let t=0;t<V.length;t+=1)B[t]=H(q(e,V,t));return{c(){t=r("input"),a=u(),w&&w.c(),h=u(),p=r("div");for(let e=0;e<j.length;e+=1)j[e].c();b=u(),x=r("button"),k=o("Add"),$=u(),_=r("input"),T=u(),y=r("div");for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=s(e,"INPUT",{type:!0,placeholder:!0,maxlength:!0,size:!0,class:!0}),a=m(e),w&&w.l(e),h=m(e),p=s(e,"DIV",{class:!0});var r=n(p);for(let e=0;e<j.length;e+=1)j[e].l(r);r.forEach(c),b=m(e),x=s(e,"BUTTON",{class:!0});var o=n(x);k=l(o,"Add"),o.forEach(c),$=m(e),_=s(e,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0,size:!0}),T=m(e),y=s(e,"DIV",{class:!0});var i=n(y);for(let e=0;e<B.length;e+=1)B[e].l(i);i.forEach(c),this.h()},h(){i(t,"type","text"),i(t,"placeholder","Name"),i(t,"maxlength","20"),i(t,"size","20"),i(t,"class","svelte-q93k07"),i(p,"class","ate-wrapper svelte-q93k07"),i(x,"class","block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mb-3"),i(_,"class","filter bg-gray-200 w-24 px-2 svelte-q93k07"),i(_,"type","text"),i(_,"placeholder","Search"),i(_,"maxlength","5"),i(_,"size","3"),i(y,"class","pb-6"),O=[E(t,"input",e.input0_input_handler),E(x,"click",N(e.handleAdd)),E(_,"input",e.input1_input_handler),E(_,"input",e.handleFilter)]},m(r,o){f(r,t,o),I(t,e.name),f(r,a,o),w&&w.m(r,o),f(r,h,o),f(r,p,o);for(let e=0;e<j.length;e+=1)j[e].m(p,null);f(r,b,o),f(r,x,o),d(x,k),f(r,$,o),f(r,_,o),I(_,e.filter),f(r,T,o),f(r,y,o);for(let e=0;e<B.length;e+=1)B[e].m(y,null);A=!0},p(e,a){if(e.name&&t.value!==a.name&&I(t,a.name),0!==a.foodForMeal.length?w?w.p(e,a):((w=L(a)).c(),w.m(h.parentNode,h)):w&&(w.d(1),w=null),e.handlePlus||e.foodForMeal||e.plus||e.handleDelete||e.trash){let t;for(D=a.foodForMeal,t=0;t<D.length;t+=1){const r=U(a,D,t);j[t]?(j[t].p(e,r),M(j[t],1)):(j[t]=Y(r),j[t].c(),M(j[t],1),j[t].m(p,null))}for(F(),t=D.length;t<j.length;t+=1)C(t);v()}if(e.filter&&_.value!==a.filter&&I(_,a.filter),e.handleFoodClick||e.food||e.filteredFood){let t;for(V=a.filteredFood,t=0;t<V.length;t+=1){const r=q(a,V,t);B[t]?B[t].p(e,r):(B[t]=H(r),B[t].c(),B[t].m(y,null))}for(;t<B.length;t+=1)B[t].d(1);B.length=V.length}},i(e){if(!A){for(let e=0;e<D.length;e+=1)M(j[e]);A=!0}},o(e){j=j.filter(Boolean);for(let e=0;e<j.length;e+=1)g(j[e]);A=!1},d(e){e&&c(t),e&&c(a),w&&w.d(e),e&&c(h),e&&c(p),S(j,e),e&&c(b),e&&c(x),e&&c($),e&&c(_),e&&c(T),e&&c(y),S(B,e),P(O)}}}function J(e){let t,a,i,h;return{c(){t=r("p"),a=o("You have no food."),i=r("p"),h=r("p")},l(e){t=s(e,"P",{});var r=n(t);a=l(r,"You have no food."),r.forEach(c),i=s(e,"P",{}),n(i).forEach(c),h=s(e,"P",{}),n(h).forEach(c)},m(e,r){f(e,t,r),d(t,a),f(e,i,r),f(e,h,r)},p:T,i:T,o:T,d(e){e&&c(t),e&&c(i),e&&c(h)}}}function L(e){let t,a,i,p,g,v,M,b,F,x,k,E,N,$,_,P,I=Math.round(e.calories)+"",S=Math.round(e.protein)+"",T=Math.round(e.carbs)+"",y=Math.round(e.fat)+"";return{c(){t=r("div"),a=r("span"),i=o("Cal:"),p=o(I),g=u(),v=r("span"),M=o("P:"),b=o(S),F=u(),x=r("span"),k=o("C:"),E=o(T),N=u(),$=r("span"),_=o("F:"),P=o(y)},l(e){t=s(e,"DIV",{});var r=n(t);a=s(r,"SPAN",{});var o=n(a);i=l(o,"Cal:"),p=l(o,I),o.forEach(c),g=m(r),v=s(r,"SPAN",{});var f=n(v);M=l(f,"P:"),b=l(f,S),f.forEach(c),F=m(r),x=s(r,"SPAN",{});var d=n(x);k=l(d,"C:"),E=l(d,T),d.forEach(c),N=m(r),$=s(r,"SPAN",{});var h=n($);_=l(h,"F:"),P=l(h,y),h.forEach(c),r.forEach(c)},m(e,r){f(e,t,r),d(t,a),d(a,i),d(a,p),d(t,g),d(t,v),d(v,M),d(v,b),d(t,F),d(t,x),d(x,k),d(x,E),d(t,N),d(t,$),d($,_),d($,P)},p(e,t){e.calories&&I!==(I=Math.round(t.calories)+"")&&h(p,I),e.protein&&S!==(S=Math.round(t.protein)+"")&&h(b,S),e.carbs&&T!==(T=Math.round(t.carbs)+"")&&h(E,T),e.fat&&y!==(y=Math.round(t.fat)+"")&&h(P,y)},d(e){e&&c(t)}}}function Y(e){let t,a,p,v,b,F,I,S,T,w,D,j=e.name+"",C=e.count+"";const q=new y({props:{data:A}});function U(...t){return e.click_handler(e,...t)}const V=new y({props:{data:O}});function B(...t){return e.click_handler_1(e,...t)}return{c(){t=r("button"),x(q.$$.fragment),a=u(),p=r("div"),v=o(j),b=u(),F=r("div"),I=o(C),S=u(),T=r("button"),x(V.$$.fragment),this.h()},l(e){t=s(e,"BUTTON",{class:!0,href:!0});var r=n(t);k(q.$$.fragment,r),r.forEach(c),a=m(e),p=s(e,"DIV",{});var o=n(p);v=l(o,j),o.forEach(c),b=m(e),F=s(e,"DIV",{class:!0});var i=n(F);I=l(i,C),i.forEach(c),S=m(e),T=s(e,"BUTTON",{class:!0,href:!0});var f=n(T);k(V.$$.fragment,f),f.forEach(c),this.h()},h(){i(t,"class","text-red-400 text-left"),i(t,"href","#"),i(F,"class",""),i(T,"class",""),i(T,"href","#"),D=[E(t,"click",N(U)),E(T,"click",N(B))]},m(e,r){f(e,t,r),$(q,t,null),f(e,a,r),f(e,p,r),d(p,v),f(e,b,r),f(e,F,r),d(F,I),f(e,S,r),f(e,T,r),$(V,T,null),w=!0},p(t,a){e=a,w&&!t.foodForMeal||j===(j=e.name+"")||h(v,j),w&&!t.foodForMeal||C===(C=e.count+"")||h(I,C)},i(e){w||(M(q.$$.fragment,e),M(V.$$.fragment,e),w=!0)},o(e){g(q.$$.fragment,e),g(V.$$.fragment,e),w=!1},d(e){e&&c(t),_(q),e&&c(a),e&&c(p),e&&c(b),e&&c(F),e&&c(S),e&&c(T),_(V),P(D)}}}function H(e){let t,a,u,p=e.name+"";function m(...t){return e.click_handler_2(e,...t)}return{c(){t=r("button"),a=o(p),this.h()},l(e){t=s(e,"BUTTON",{class:!0});var r=n(t);a=l(r,p),r.forEach(c),this.h()},h(){i(t,"class","box w-full svelte-q93k07"),u=E(t,"click",m)},m(e,r){f(e,t,r),d(t,a)},p(t,r){e=r,t.filteredFood&&p!==(p=e.name+"")&&h(a,p)},d(e){e&&c(t),u()}}}function Q(e){let t,a,h,b,x,k,E,N,$,_,P=""!==e.successMessage&&V(e),I=""!==e.errorMessage&&B(e);const S=[J,z],T=[];function y(e,t){return 0===t.food.length?0:1}return E=y(0,e),N=T[E]=S[E](e),{c(){t=u(),a=r("h2"),h=o("Add Meal"),b=u(),P&&P.c(),x=u(),I&&I.c(),k=u(),N.c(),$=p(),this.h()},l(e){t=m(e),a=s(e,"H2",{class:!0});var r=n(a);h=l(r,"Add Meal"),r.forEach(c),b=m(e),P&&P.l(e),x=m(e),I&&I.l(e),k=m(e),N.l(e),$=p(),this.h()},h(){document.title="Update Food",i(a,"class","text-xl mb-2")},m(e,r){f(e,t,r),f(e,a,r),d(a,h),f(e,b,r),P&&P.m(e,r),f(e,x,r),I&&I.m(e,r),f(e,k,r),T[E].m(e,r),f(e,$,r),_=!0},p(e,t){""!==t.successMessage?P?P.p(e,t):((P=V(t)).c(),P.m(x.parentNode,x)):P&&(P.d(1),P=null),""!==t.errorMessage?I?I.p(e,t):((I=B(t)).c(),I.m(k.parentNode,k)):I&&(I.d(1),I=null);let a=E;(E=y(0,t))===a?T[E].p(e,t):(F(),g(T[a],1,1,()=>{T[a]=null}),v(),(N=T[E])||(N=T[E]=S[E](t)).c(),M(N,1),N.m($.parentNode,$))},i(e){_||(M(N),_=!0)},o(e){g(N),_=!1},d(e){e&&c(t),e&&c(a),e&&c(b),P&&P.d(e),e&&c(x),I&&I.d(e),e&&c(k),T[E].d(e),e&&c($)}}}function R(e,t,a){let r="",o=[],s="",n="",l="",c=[],i=[],f={name:"",protein:0,carbs:0,fat:0,food:[]},d=[],h=0,u=0,p=0;function m(e){const t=w(e.name,d);-1!==t?a("foodForMeal",d[t].count=d[t].count+1,d):(e.count=1,d.push(e)),a("foodForMeal",d),f.protein=f.protein+e.protein,f.carbs=f.carbs+e.carbs,f.fat=f.fat+e.fat;const r=j(d);a("protein",h=r.protein),a("carbs",u=r.carbs),a("fat",p=r.fat)}function g(e){let t=d.filter(function(t,a,r){return t.name!==e.name});a("foodForMeal",d=t);const r=j(d);a("protein",h=r.protein),a("carbs",u=r.carbs),a("fat",p=r.fat)}function v(e){let t=d.findIndex(t=>t.name===e.name);a("foodForMeal",d[t].count=d[t].count+1,d);const r=j(d);a("protein",h=r.protein),a("carbs",u=r.carbs),a("fat",p=r.fat)}b(async()=>{a("food",o=JSON.parse(localStorage.getItem("food")).sort((e,t)=>e.name>t.name)||[]),i=JSON.parse(localStorage.getItem("recentFood"))||[],a("filteredFood",c=o)});let M;return e.$$.update=((e={protein:1,carbs:1,fat:1})=>{(e.protein||e.carbs||e.fat)&&a("calories",M=parseFloat(Number(4*h+4*u+9*p).toFixed(1)))}),{name:r,food:o,errorMessage:s,successMessage:n,filter:l,filteredFood:c,foodForMeal:d,protein:h,carbs:u,fat:p,handleAdd:function(){if(event.preventDefault(),a("successMessage",n=""),a("errorMessage",s=""),-1!==w(r,o))return void a("errorMessage",s="Food with this name already exist");f.food=d;let e={};if(f.name=r,!(e=D(f)).valid)return a("errorMessage",s=e.message),void console.log("error",s);o.push(f),localStorage.setItem("food",JSON.stringify(o)),C(f,i),a("foodForMeal",d=[])},handleFoodClick:m,handleFilter:function(){""===l&&a("filteredFood",c=o),a("filteredFood",c=o.filter(e=>e.name.toLowerCase().includes(l.toLowerCase())))},handleDelete:g,handlePlus:v,calories:M,input0_input_handler:function(){r=this.value,a("name",r)},click_handler:({i:e})=>g(d[e]),click_handler_1:({i:e})=>v(d[e]),input1_input_handler:function(){l=this.value,a("filter",l)},click_handler_2:({i:e})=>m(o[e])}}export default class extends e{constructor(e){super(),t(this,e,R,Q,a,{})}}