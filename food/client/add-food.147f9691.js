import{S as e,i as s,s as a,e as t,t as r,c as n,b as i,d as l,f as u,h as c,k as o,l as p,y as d,a as m,g as h,G as g,L as f,n as b,K as M,I as v,J as N}from"./index.805fe9f6.js";function y(e){let s,a;return{c(){s=t("p"),a=r(e.successMessage),this.h()},l(t){s=n(t,"P",{class:!0});var r=i(s);a=l(r,e.successMessage),r.forEach(u),this.h()},h(){c(s,"class","success svelte-nshpc")},m(e,t){o(e,s,t),p(s,a)},p(e,s){e.successMessage&&d(a,s.successMessage)},d(e){e&&u(s)}}}function _(e){let s,a;return{c(){s=t("p"),a=r(e.errorMessage),this.h()},l(t){s=n(t,"P",{class:!0});var r=i(s);a=l(r,e.errorMessage),r.forEach(u),this.h()},h(){c(s,"class","error svelte-nshpc")},m(e,t){o(e,s,t),p(s,a)},p(e,s){e.errorMessage&&d(a,s.errorMessage)},d(e){e&&u(s)}}}function x(e){let s,a,d,v,N,x,I,P,F,S,U,k,A,C,T,z,E,J,O,R=!1,j=!1,w=!1,B=""!==e.successMessage&&y(e),D=""!==e.errorMessage&&_(e);function G(){R=!0,e.input1_input_handler.call(S)}function H(){j=!0,e.input2_input_handler.call(k)}function K(){w=!0,e.input3_input_handler.call(C)}return{c(){s=m(),a=t("h1"),d=r("Add Food"),v=m(),B&&B.c(),N=m(),D&&D.c(),x=m(),I=t("form"),P=t("input"),F=m(),S=t("input"),U=m(),k=t("input"),A=m(),C=t("input"),T=m(),z=t("br"),E=m(),J=t("input"),this.h()},l(e){s=h(e),a=n(e,"H1",{});var t=i(a);d=l(t,"Add Food"),t.forEach(u),v=h(e),B&&B.l(e),N=h(e),D&&D.l(e),x=h(e),I=n(e,"FORM",{});var r=i(I);P=n(r,"INPUT",{type:!0,placeholder:!0,maxlength:!0,size:!0}),F=h(r),S=n(r,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),U=h(r),k=n(r,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),A=h(r),C=n(r,"INPUT",{type:!0,placeholder:!0,min:!0,max:!0,class:!0}),T=h(r),z=n(r,"BR",{}),E=h(r),J=n(r,"INPUT",{type:!0,value:!0,maxlength:!0,size:!0}),r.forEach(u),this.h()},h(){document.title="Food",c(P,"type","text"),c(P,"placeholder","Name"),c(P,"maxlength","20"),c(P,"size","20"),c(S,"type","number"),c(S,"placeholder","Protein"),c(S,"min","0"),c(S,"max","999"),c(S,"class","svelte-nshpc"),c(k,"type","number"),c(k,"placeholder","Carbs"),c(k,"min","0"),c(k,"max","999"),c(k,"class","svelte-nshpc"),c(C,"type","number"),c(C,"placeholder","Fat"),c(C,"min","0"),c(C,"max","999"),c(C,"class","svelte-nshpc"),c(J,"type","button"),J.value="Add",c(J,"maxlength","2"),c(J,"size","2"),O=[g(P,"input",e.input0_input_handler),g(S,"input",G),g(S,"keyup",e.validateProtein),g(k,"input",H),g(k,"keyup",e.validateCarbs),g(C,"input",K),g(C,"keyup",e.validateFat),g(J,"click",e.handleAddUpdate)]},m(t,r){o(t,s,r),o(t,a,r),p(a,d),o(t,v,r),B&&B.m(t,r),o(t,N,r),D&&D.m(t,r),o(t,x,r),o(t,I,r),p(I,P),f(P,e.name),p(I,F),p(I,S),f(S,e.protein),p(I,U),p(I,k),f(k,e.carbs),p(I,A),p(I,C),f(C,e.fat),p(I,T),p(I,z),p(I,E),p(I,J)},p(e,s){""!==s.successMessage?B?B.p(e,s):((B=y(s)).c(),B.m(N.parentNode,N)):B&&(B.d(1),B=null),""!==s.errorMessage?D?D.p(e,s):((D=_(s)).c(),D.m(x.parentNode,x)):D&&(D.d(1),D=null),e.name&&P.value!==s.name&&f(P,s.name),!R&&e.protein&&f(S,s.protein),R=!1,!j&&e.carbs&&f(k,s.carbs),j=!1,!w&&e.fat&&f(C,s.fat),w=!1},i:b,o:b,d(e){e&&u(s),e&&u(a),e&&u(v),B&&B.d(e),e&&u(N),D&&D.d(e),e&&u(x),e&&u(I),M(O)}}}function I(e,s,a){let t="",r="",n="",i="",l=[],u="",c="";return v(async()=>{l=JSON.parse(localStorage.getItem("food"))||[]}),{name:t,protein:r,carbs:n,fat:i,errorMessage:u,successMessage:c,handleAddUpdate:function(){if(a("successMessage",c=""),a("errorMessage",u=""),a("errorMessage",u=""),!(""===t?(a("errorMessage",u="Name is missing"),0):""===r?(a("errorMessage",u="Protein is missing"),0):Number.isInteger(Number(r))?""===n?(a("errorMessage",u="Carbs is missing"),0):Number.isInteger(Number(n))?""===i?(a("errorMessage",u="Fat is missing"),0):Number.isInteger(Number(i))||(a("errorMessage",u="Fat should be a number"),0):(a("errorMessage",u="Carbs should be a number"),0):(a("errorMessage",u="Protein should be a number"),0)))return;const e=JSON.parse(localStorage.getItem("food"))||[];e.push({name:t,protein:r,carbs:n,fat:i}),localStorage.setItem("food",JSON.stringify(e)),l=e,a("name",t=""),a("protein",r=""),a("carbs",n=""),a("fat",i=""),a("successMessage",c="Food was added"),event.preventDefault()},validateProtein:function(){let e=String(r);a("protein",r=Number(e.substring(0,5)))},validateCarbs:function(){let e=String(n);a("carbs",n=Number(e.substring(0,5)))},validateFat:function(){let e=String(i);a("fat",i=Number(e.substring(0,5)))},input0_input_handler:function(){t=this.value,a("name",t)},input1_input_handler:function(){r=N(this.value),a("protein",r)},input2_input_handler:function(){n=N(this.value),a("carbs",n)},input3_input_handler:function(){i=N(this.value),a("fat",i)}}}export default class extends e{constructor(e){super(),s(this,e,I,x,a,{})}}