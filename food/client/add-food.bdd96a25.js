import{S as e,i as s,s as a,e as t,t as r,b as n,d as l,f as c,h as i,k as o,l as u,m as p,x as d,a as h,j as m,P as f,Q as b,T as v,n as g,U as M,N as x,R as _}from"./index.52cd5646.js";import{v as N}from"./validate.0b6a1600.js";function y(e){let s,a;return{c(){s=t("p"),a=r(e.successMessage),this.h()},l(t){s=n(t,"P",{class:!0});var r=l(s);a=c(r,e.successMessage),r.forEach(i),this.h()},h(){o(s,"class","success svelte-lq0bv")},m(e,t){u(e,s,t),p(s,a)},p(e,s){e.successMessage&&d(a,s.successMessage)},d(e){e&&i(s)}}}function P(e){let s,a;return{c(){s=t("p"),a=r(e.errorMessage),this.h()},l(t){s=n(t,"P",{class:!0});var r=l(s);a=c(r,e.errorMessage),r.forEach(i),this.h()},h(){o(s,"class","error svelte-lq0bv")},m(e,t){u(e,s,t),p(s,a)},p(e,s){e.errorMessage&&d(a,s.errorMessage)},d(e){e&&i(s)}}}function S(e){let s,a,d,x,_,N,S,F,q,I,T,A,R,U,k,B,E,O,j,C,J,z,w,D,H,Q,G=!1,K=!1,L=!1,V=""!==e.successMessage&&y(e),W=""!==e.errorMessage&&P(e);function X(){G=!0,e.input1_input_handler.call(A)}function Y(){K=!0,e.input2_input_handler.call(B)}function Z(){L=!0,e.input3_input_handler.call(C)}return{c(){s=h(),a=t("h2"),d=r("Add Food"),x=h(),V&&V.c(),_=h(),W&&W.c(),N=h(),S=t("form"),F=t("input"),q=h(),I=t("br"),T=h(),A=t("input"),R=h(),U=t("br"),k=h(),B=t("input"),E=h(),O=t("br"),j=h(),C=t("input"),J=h(),z=t("br"),w=h(),D=t("button"),H=r("Add"),this.h()},l(e){s=m(e),a=n(e,"H2",{class:!0});var t=l(a);d=c(t,"Add Food"),t.forEach(i),x=m(e),V&&V.l(e),_=m(e),W&&W.l(e),N=m(e),S=n(e,"FORM",{class:!0});var r=l(S);F=n(r,"INPUT",{type:!0,placeholder:!0,maxlength:!0,size:!0,class:!0}),q=m(r),I=n(r,"BR",{}),T=m(r),A=n(r,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),R=m(r),U=n(r,"BR",{}),k=m(r),B=n(r,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),E=m(r),O=n(r,"BR",{}),j=m(r),C=n(r,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),J=m(r),z=n(r,"BR",{}),w=m(r),D=n(r,"BUTTON",{class:!0});var o=l(D);H=c(o,"Add"),o.forEach(i),r.forEach(i),this.h()},h(){document.title="Food",o(a,"class","text-xl"),o(F,"type","text"),o(F,"placeholder","Name"),o(F,"maxlength","20"),o(F,"size","20"),o(F,"class","svelte-lq0bv"),o(A,"type","number"),o(A,"placeholder","Protein"),o(A,"min","0"),o(A,"max","999"),o(A,"class","svelte-lq0bv"),o(B,"type","number"),o(B,"placeholder","Carbs"),o(B,"min","0"),o(B,"max","999"),o(B,"class","svelte-lq0bv"),o(C,"type","number"),o(C,"placeholder","Fat"),o(C,"min","0"),o(C,"max","999"),o(C,"class","svelte-lq0bv"),o(D,"class","bg-blue-100 py-1 px-4"),o(S,"class","svelte-lq0bv"),Q=[f(F,"input",e.input0_input_handler),f(A,"input",X),f(A,"keyup",e.validateProtein),f(B,"input",Y),f(B,"keyup",e.validateCarbs),f(C,"input",Z),f(C,"keyup",e.validateFat),f(D,"click",b(e.handleAdd))]},m(t,r){u(t,s,r),u(t,a,r),p(a,d),u(t,x,r),V&&V.m(t,r),u(t,_,r),W&&W.m(t,r),u(t,N,r),u(t,S,r),p(S,F),v(F,e.name),p(S,q),p(S,I),p(S,T),p(S,A),v(A,e.protein),p(S,R),p(S,U),p(S,k),p(S,B),v(B,e.carbs),p(S,E),p(S,O),p(S,j),p(S,C),v(C,e.fat),p(S,J),p(S,z),p(S,w),p(S,D),p(D,H)},p(e,s){""!==s.successMessage?V?V.p(e,s):((V=y(s)).c(),V.m(_.parentNode,_)):V&&(V.d(1),V=null),""!==s.errorMessage?W?W.p(e,s):((W=P(s)).c(),W.m(N.parentNode,N)):W&&(W.d(1),W=null),e.name&&F.value!==s.name&&v(F,s.name),!G&&e.protein&&v(A,s.protein),G=!1,!K&&e.carbs&&v(B,s.carbs),K=!1,!L&&e.fat&&v(C,s.fat),L=!1},i:g,o:g,d(e){e&&i(s),e&&i(a),e&&i(x),V&&V.d(e),e&&i(_),W&&W.d(e),e&&i(N),e&&i(S),M(Q)}}}function F(e,s,a){let t="",r="",n="",l="",c=[],i="",o="";return x(async()=>{c=JSON.parse(localStorage.getItem("food"))||[]}),{name:t,protein:r,carbs:n,fat:l,errorMessage:i,successMessage:o,handleAdd:function(){let e={};if(a("successMessage",o=""),a("errorMessage",i=""),!(e=N({name:t,protein:r,carbs:n,fat:l})).valid)return a("errorMessage",i=e.message),void console.log("error",i);const s=JSON.parse(localStorage.getItem("food"))||[];s.push({name:t,protein:r,carbs:n,fat:l}),localStorage.setItem("food",JSON.stringify(s)),c=s,a("name",t=""),a("protein",r=""),a("carbs",n=""),a("fat",l=""),a("successMessage",o="Food was added"),event.preventDefault()},validateProtein:function(){let e=String(r);a("protein",r=Number(e.substring(0,5)))},validateCarbs:function(){let e=String(n);a("carbs",n=Number(e.substring(0,5)))},validateFat:function(){let e=String(l);a("fat",l=Number(e.substring(0,5)))},input0_input_handler:function(){t=this.value,a("name",t)},input1_input_handler:function(){r=_(this.value),a("protein",r)},input2_input_handler:function(){n=_(this.value),a("carbs",n)},input3_input_handler:function(){l=_(this.value),a("fat",l)}}}export default class extends e{constructor(e){super(),s(this,e,F,S,a,{})}}