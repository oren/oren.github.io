import{S as e,i as t,s as a,e as s,t as n,c as o,b as r,d as l,f as c,h as i,k as d,l as u,y as p,a as h,z as f,g as m,n as g,G as v,J as b,H as M,K as U,L as y,I as F}from"./index.5b407ef8.js";import{v as N}from"./validate.5d897be6.js";function _(e,t,a){const s=Object.create(e);return s.id=t[a].id,s.name=t[a].name,s.i=a,s}function x(e){let t,a;return{c(){t=s("p"),a=n(e.successMessage),this.h()},l(s){t=o(s,"P",{class:!0});var n=r(t);a=l(n,e.successMessage),n.forEach(c),this.h()},h(){i(t,"class","success svelte-1i9t9aa")},m(e,s){d(e,t,s),u(t,a)},p(e,t){e.successMessage&&p(a,t.successMessage)},d(e){e&&c(t)}}}function P(e){let t,a;return{c(){t=s("p"),a=n(e.errorMessage),this.h()},l(s){t=o(s,"P",{class:!0});var n=r(t);a=l(n,e.errorMessage),n.forEach(c),this.h()},h(){i(t,"class","error svelte-1i9t9aa")},m(e,s){d(e,t,s),u(t,a)},p(e,t){e.errorMessage&&p(a,t.errorMessage)},d(e){e&&c(t)}}}function I(e){let t,a,s=e.showUpdateForm&&w(e),n=!e.showUpdateForm&&S(e);return{c(){s&&s.c(),t=h(),n&&n.c(),a=f()},l(e){s&&s.l(e),t=m(e),n&&n.l(e),a=f()},m(e,o){s&&s.m(e,o),d(e,t,o),n&&n.m(e,o),d(e,a,o)},p(e,o){o.showUpdateForm?s?s.p(e,o):((s=w(o)).c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),o.showUpdateForm?n&&(n.d(1),n=null):n?n.p(e,o):((n=S(o)).c(),n.m(a.parentNode,a))},d(e){s&&s.d(e),e&&c(t),n&&n.d(e),e&&c(a)}}}function k(e){let t,a,p,h,f,m,v;return{c(){t=s("p"),a=n("You have no food."),p=s("p"),h=s("p"),f=s("a"),m=n("Add some food first"),v=n("."),this.h()},l(e){t=o(e,"P",{});var s=r(t);a=l(s,"You have no food."),s.forEach(c),p=o(e,"P",{}),r(p).forEach(c),h=o(e,"P",{});var n=r(h);f=o(n,"A",{href:!0});var i=r(f);m=l(i,"Add some food first"),i.forEach(c),v=l(n,"."),n.forEach(c),this.h()},h(){i(f,"href","/food/manage-food/add-food")},m(e,s){d(e,t,s),u(t,a),d(e,p,s),d(e,h,s),u(h,f),u(f,m),u(h,v)},p:g,d(e){e&&c(t),e&&c(p),e&&c(h)}}}function w(e){let t,a,n,l,p,f,g,v,b,F,N,_,x,P,I,k,w,S,T=!1,O=!1,z=!1;function B(){T=!0,e.input1_input_handler.call(f)}function C(){O=!0,e.input2_input_handler.call(F)}function R(){z=!0,e.input3_input_handler.call(P)}let J="update"===e.mode&&E(e);return{c(){t=s("form"),a=s("input"),n=h(),l=s("br"),p=h(),f=s("input"),g=h(),v=s("br"),b=h(),F=s("input"),N=h(),_=s("br"),x=h(),P=s("input"),I=h(),k=s("br"),w=h(),J&&J.c(),this.h()},l(e){t=o(e,"FORM",{});var s=r(t);a=o(s,"INPUT",{type:!0,placeholder:!0,maxlength:!0,size:!0,class:!0}),n=m(s),l=o(s,"BR",{}),p=m(s),f=o(s,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),g=m(s),v=o(s,"BR",{}),b=m(s),F=o(s,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),N=m(s),_=o(s,"BR",{}),x=m(s),P=o(s,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),I=m(s),k=o(s,"BR",{}),w=m(s),J&&J.l(s),s.forEach(c),this.h()},h(){i(a,"type","text"),i(a,"placeholder","Name"),i(a,"maxlength","20"),i(a,"size","20"),i(a,"class","svelte-1i9t9aa"),i(f,"type","number"),i(f,"placeholder","Protein"),i(f,"min","0"),i(f,"max","999"),i(f,"class","svelte-1i9t9aa"),i(F,"type","number"),i(F,"placeholder","Carbs"),i(F,"min","0"),i(F,"max","999"),i(F,"class","svelte-1i9t9aa"),i(P,"type","number"),i(P,"placeholder","Fat"),i(P,"min","0"),i(P,"max","999"),i(P,"class","svelte-1i9t9aa"),S=[M(a,"input",e.input0_input_handler),M(f,"input",B),M(f,"keyup",e.validateProtein),M(F,"input",C),M(F,"keyup",e.validateCarbs),M(P,"input",R),M(P,"keyup",e.validateFat)]},m(s,o){d(s,t,o),u(t,a),U(a,e.name),u(t,n),u(t,l),u(t,p),u(t,f),U(f,e.protein),u(t,g),u(t,v),u(t,b),u(t,F),U(F,e.carbs),u(t,N),u(t,_),u(t,x),u(t,P),U(P,e.fat),u(t,I),u(t,k),u(t,w),J&&J.m(t,null)},p(e,s){e.name&&a.value!==s.name&&U(a,s.name),!T&&e.protein&&U(f,s.protein),T=!1,!O&&e.carbs&&U(F,s.carbs),O=!1,!z&&e.fat&&U(P,s.fat),z=!1,"update"===s.mode?J?J.p(e,s):((J=E(s)).c(),J.m(t,null)):J&&(J.d(1),J=null)},d(e){e&&c(t),J&&J.d(),y(S)}}}function E(e){let t,a,n,r;return{c(){t=s("input"),a=h(),n=s("input"),this.h()},l(e){t=o(e,"INPUT",{class:!0,type:!0,value:!0,maxlength:!0,size:!0}),a=m(e),n=o(e,"INPUT",{type:!0,value:!0,class:!0}),this.h()},h(){i(t,"class","update svelte-1i9t9aa"),i(t,"type","button"),t.value="Update",i(t,"maxlength","2"),i(t,"size","2"),i(n,"type","button"),n.value="delete",i(n,"class","svelte-1i9t9aa"),r=[M(t,"click",e.handleUpdate),M(n,"click",e.handleDelete)]},m(e,s){d(e,t,s),d(e,a,s),d(e,n,s)},p:g,d(e){e&&c(t),e&&c(a),e&&c(n),y(r)}}}function S(e){let t,a=e.food,n=[];for(let t=0;t<a.length;t+=1)n[t]=T(_(e,a,t));return{c(){t=s("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var a=r(t);for(let e=0;e<n.length;e+=1)n[e].l(a);a.forEach(c),this.h()},h(){i(t,"class","wrapper svelte-1i9t9aa")},m(e,a){d(e,t,a);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,s){if(e.handleFoodClick||e.food){let o;for(a=s.food,o=0;o<a.length;o+=1){const r=_(s,a,o);n[o]?n[o].p(e,r):(n[o]=T(r),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=a.length}},d(e){e&&c(t),F(n,e)}}}function T(e){let t,a,h,f=e.name+"";function m(...t){return e.click_handler(e,...t)}return{c(){t=s("button"),a=n(f),this.h()},l(e){t=o(e,"BUTTON",{class:!0});var s=r(t);a=l(s,f),s.forEach(c),this.h()},h(){i(t,"class","box svelte-1i9t9aa"),h=M(t,"click",m)},m(e,s){d(e,t,s),u(t,a)},p(t,s){e=s,t.food&&f!==(f=e.name+"")&&p(a,f)},d(e){e&&c(t),h()}}}function O(e){let t,a,i,p,v,b,M,U=""!==e.successMessage&&x(e),y=""!==e.errorMessage&&P(e);function F(e,t){return 0===t.food.length?k:I}let N=F(0,e),_=N(e);return{c(){t=h(),a=s("h2"),i=n("Update Food"),p=h(),U&&U.c(),v=h(),y&&y.c(),b=h(),_.c(),M=f(),this.h()},l(e){t=m(e),a=o(e,"H2",{});var s=r(a);i=l(s,"Update Food"),s.forEach(c),p=m(e),U&&U.l(e),v=m(e),y&&y.l(e),b=m(e),_.l(e),M=f(),this.h()},h(){document.title="Food"},m(e,s){d(e,t,s),d(e,a,s),u(a,i),d(e,p,s),U&&U.m(e,s),d(e,v,s),y&&y.m(e,s),d(e,b,s),_.m(e,s),d(e,M,s)},p(e,t){""!==t.successMessage?U?U.p(e,t):((U=x(t)).c(),U.m(v.parentNode,v)):U&&(U.d(1),U=null),""!==t.errorMessage?y?y.p(e,t):((y=P(t)).c(),y.m(b.parentNode,b)):y&&(y.d(1),y=null),N===(N=F(0,t))&&_?_.p(e,t):(_.d(1),(_=N(t))&&(_.c(),_.m(M.parentNode,M)))},i:g,o:g,d(e){e&&c(t),e&&c(a),e&&c(p),U&&U.d(e),e&&c(v),y&&y.d(e),e&&c(b),_.d(e),e&&c(M)}}}function z(e,t,a){let s="",n="",o="",r="",l=[],c="add",i="",d="",u="",p=!1;function h(e){a("showUpdateForm",p=!0),a("successMessage",u=""),a("errorMessage",d=""),i=e.name,a("name",s=e.name),a("protein",n=e.protein),a("carbs",o=e.carbs),a("fat",r=e.fat),a("mode",c="update")}v(async()=>{a("food",l=JSON.parse(localStorage.getItem("food"))||[])});return{name:s,protein:n,carbs:o,fat:r,food:l,mode:c,errorMessage:d,successMessage:u,showUpdateForm:p,handleUpdate:function(){let e={};if(a("successMessage",u=""),a("errorMessage",d=""),!(e=N({name:s,protein:n,carbs:o,fat:r})).valid)return void a("errorMessage",d=e.message);let t=l.findIndex(e=>e.name===i);a("food",l[t].name=s,l),a("food",l[t].protein=n,l),a("food",l[t].carbs=o,l),a("food",l[t].fat=r,l),localStorage.setItem("food",JSON.stringify(l)),a("successMessage",u="Food was updated"),a("showUpdateForm",p=!1)},handleFoodClick:h,handleDelete:function(){a("successMessage",u=""),a("errorMessage",d="");let e=l.filter(function(e,t,a){return e.name!==s});localStorage.setItem("food",JSON.stringify(e)),a("food",l=e),a("mode",c="add"),a("name",s=""),a("protein",n=""),a("carbs",o=""),a("fat",r=""),a("successMessage",u="Food was deleted"),a("showUpdateForm",p=!1)},validateProtein:function(){let e=String(n);a("protein",n=Number(e.substring(0,5)))},validateCarbs:function(){let e=String(o);a("carbs",o=Number(e.substring(0,5)))},validateFat:function(){let e=String(r);a("fat",r=Number(e.substring(0,5)))},input0_input_handler:function(){s=this.value,a("name",s)},input1_input_handler:function(){n=b(this.value),a("protein",n)},input2_input_handler:function(){o=b(this.value),a("carbs",o)},input3_input_handler:function(){r=b(this.value),a("fat",r)},click_handler:({i:e})=>h(l[e])}}export default class extends e{constructor(e){super(),t(this,e,z,O,a,{})}}