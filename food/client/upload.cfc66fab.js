import{S as e,i as o,s as a,e as t,t as s,a as r,y as l,b as i,d as c,f as n,h as d,j as f,k as h,l as p,m,x as u,P as v,O as g,n as F,R as E,T as x,M as I}from"./index.37c8d187.js";import"./index.482ce061.js";import{v as b,f as w,d as D,b as S}from"./validate.d83e4ffc.js";const{document:N}=I;function y(e){let o,a,l,u,v,E,x,I;return{c(){o=t("span"),a=s("Override food with the same name:"),l=r(),u=t("label"),v=t("input"),E=r(),x=t("span"),this.h()},l(e){o=i(e,"SPAN",{class:!0});var t=c(o);a=n(t,"Override food with the same name:"),t.forEach(d),l=f(e),u=i(e,"LABEL",{class:!0});var s=c(u);v=i(s,"INPUT",{type:!0,class:!0}),E=f(s),x=i(s,"SPAN",{class:!0}),c(x).forEach(d),s.forEach(d),this.h()},h(){h(o,"class","mt-1 mr-2 float-left"),h(v,"type","checkbox"),h(v,"class","svelte-1rzfdvo"),h(x,"class","slider round svelte-1rzfdvo"),h(u,"class","switch svelte-1rzfdvo"),I=g(v,"change",e.toggleIgnoreDuplicates)},m(e,t){p(e,o,t),m(o,a),p(e,l,t),p(e,u,t),m(u,v),m(u,E),m(u,x)},p:F,d(e){e&&d(o),e&&d(l),e&&d(u),I()}}}function P(e){let o,a,l,u,v,E,x,I;return{c(){o=t("span"),a=s("Ignore food with the same name:"),l=r(),u=t("label"),v=t("input"),E=r(),x=t("span"),this.h()},l(e){o=i(e,"SPAN",{class:!0});var t=c(o);a=n(t,"Ignore food with the same name:"),t.forEach(d),l=f(e),u=i(e,"LABEL",{class:!0});var s=c(u);v=i(s,"INPUT",{type:!0,checked:!0,class:!0}),E=f(s),x=i(s,"SPAN",{class:!0}),c(x).forEach(d),s.forEach(d),this.h()},h(){h(o,"class","mt-1 mr-2 float-left"),h(v,"type","checkbox"),v.checked=!0,h(v,"class","svelte-1rzfdvo"),h(x,"class","slider round svelte-1rzfdvo"),h(u,"class","switch svelte-1rzfdvo"),I=g(v,"change",e.toggleIgnoreDuplicates)},m(e,t){p(e,o,t),m(o,a),p(e,l,t),p(e,u,t),m(u,v),m(u,E),m(u,x)},p:F,d(e){e&&d(o),e&&d(l),e&&d(u),I()}}}function k(e){let o,a,v,g,F,E,x,I;function b(e,o){return o.ignoreDuplicates?A:U}let w=b(0,e),D=w(e);return{c(){o=t("h2"),a=s("Upload Summary:"),v=r(),g=t("p"),F=s("Food items in the file: "),E=s(e.validFood),x=r(),D.c(),I=l(),this.h()},l(t){o=i(t,"H2",{class:!0});var s=c(o);a=n(s,"Upload Summary:"),s.forEach(d),v=f(t),g=i(t,"P",{});var r=c(g);F=n(r,"Food items in the file: "),E=n(r,e.validFood),r.forEach(d),x=f(t),D.l(t),I=l(),this.h()},h(){h(o,"class","mt-5 text-blue-500")},m(e,t){p(e,o,t),m(o,a),p(e,v,t),p(e,g,t),m(g,F),m(g,E),p(e,x,t),D.m(e,t),p(e,I,t)},p(e,o){e.validFood&&u(E,o.validFood),w===(w=b(0,o))&&D?D.p(e,o):(D.d(1),(D=w(o))&&(D.c(),D.m(I.parentNode,I)))},d(e){e&&d(o),e&&d(v),e&&d(g),e&&d(x),D.d(e),e&&d(I)}}}function U(e){let o,a,r;return{c(){o=t("p"),a=s("Food items that were overrided: "),r=s(e.overrides)},l(t){o=i(t,"P",{});var s=c(o);a=n(s,"Food items that were overrided: "),r=n(s,e.overrides),s.forEach(d)},m(e,t){p(e,o,t),m(o,a),m(o,r)},p(e,o){e.overrides&&u(r,o.overrides)},d(e){e&&d(o)}}}function A(e){let o,a,r;return{c(){o=t("p"),a=s("Food items that were ignored: "),r=s(e.ignores)},l(t){o=i(t,"P",{});var s=c(o);a=n(s,"Food items that were ignored: "),r=n(s,e.ignores),s.forEach(d)},m(e,t){p(e,o,t),m(o,a),m(o,r)},p(e,o){e.ignores&&u(r,o.ignores)},d(e){e&&d(o)}}}function z(e){let o,a,u,x,I,b,w,D,S,U,A,z,L,O,T,j,B,C,R;function H(e,o){return o.ignoreDuplicates?P:y}let J=H(0,e),M=J(e),V=e.done&&k(e);return{c(){o=r(),a=t("h2"),u=s("Upload Food"),x=r(),I=t("p"),b=s("Upload a text file with a list of food. Each row represents a food. For example: milk, 3, 4, 2."),w=r(),D=t("div"),M.c(),S=r(),U=t("div"),A=r(),z=t("form"),L=t("label"),O=s("Choose file to upload (.txt)"),T=r(),j=t("input"),B=r(),V&&V.c(),C=l(),this.h()},l(e){o=f(e),a=i(e,"H2",{class:!0});var t=c(a);u=n(t,"Upload Food"),t.forEach(d),x=f(e),I=i(e,"P",{class:!0});var s=c(I);b=n(s,"Upload a text file with a list of food. Each row represents a food. For example: milk, 3, 4, 2."),s.forEach(d),w=f(e),D=i(e,"DIV",{class:!0});var r=c(D);M.l(r),r.forEach(d),S=f(e),U=i(e,"DIV",{style:!0}),c(U).forEach(d),A=f(e),z=i(e,"FORM",{class:!0});var h=c(z);L=i(h,"LABEL",{for:!0});var p=c(L);O=n(p,"Choose file to upload (.txt)"),p.forEach(d),T=f(h),j=i(h,"INPUT",{id:!0,type:!0,accept:!0}),h.forEach(d),B=f(e),V&&V.l(e),C=l(),this.h()},h(){N.title="Upload Food",h(a,"class","text-xl mb-3"),h(I,"class","mb-4"),h(D,"class",""),v(U,"clear","both"),h(L,"for","image_uploads"),h(j,"id","input"),h(j,"type","file"),h(j,"accept",".txt"),h(z,"class","mt-0"),R=[g(j,"change",e.handleFile),g(j,"click",e.click)]},m(e,t){p(e,o,t),p(e,a,t),m(a,u),p(e,x,t),p(e,I,t),m(I,b),p(e,w,t),p(e,D,t),M.m(D,null),p(e,S,t),p(e,U,t),p(e,A,t),p(e,z,t),m(z,L),m(L,O),m(z,T),m(z,j),p(e,B,t),V&&V.m(e,t),p(e,C,t)},p(e,o){J===(J=H(0,o))&&M?M.p(e,o):(M.d(1),(M=J(o))&&(M.c(),M.m(D,null))),o.done?V?V.p(e,o):((V=k(o)).c(),V.m(C.parentNode,C)):V&&(V.d(1),V=null)},i:F,o:F,d(e){e&&d(o),e&&d(a),e&&d(x),e&&d(I),e&&d(w),e&&d(D),M.d(),e&&d(S),e&&d(U),e&&d(A),e&&d(z),e&&d(B),V&&V.d(e),e&&d(C),E(R)}}}function L(e,o,a){let t=[],s=!1,r=0,l=0,i=0,c=!0;return x(async()=>{t=JSON.parse(localStorage.getItem("food"))||[],a("ignoreDuplicates",c=!localStorage.getItem("ignoreDuplicates")||"true"===localStorage.getItem("ignoreDuplicates"))}),{done:s,validFood:r,overrides:l,ignores:i,ignoreDuplicates:c,click:function(){console.log("click"),a("done",s=!1)},handleFile:function(){a("validFood",r=0),a("overrides",l=0),a("ignores",i=0),a("done",s=!1);const e=document.getElementById("input").files[0];let o={},n=!1,d={};var f=new FileReader;f.onload=function(e){for(var f=this.result.split("\n"),h=0;h<f.length;h++){var p=f[h].split(",");if(o={name:p[0],protein:Number(p[1]),carbs:Number(p[2]),fat:Number(p[3])},(d=b(o)).valid){if(a("validFood",r+=1),-1!=(n=w(o.name,t))){if(c){a("ignores",i+=1);continue}a("overrides",l+=1),t=D(o.name,t)}t=S(o,t)}}localStorage.setItem("food",JSON.stringify(t)),a("done",s=!0)},f.onerror=function(e){console.error("File could not be read! Code "+e.target.error.code)},f.readAsText(e)},toggleIgnoreDuplicates:function(){if(a("done",s=!1),c)return a("ignoreDuplicates",c=!1),void localStorage.setItem("ignoreDuplicates",!1);a("ignoreDuplicates",c=!0),localStorage.setItem("ignoreDuplicates",!0)}}}export default class extends e{constructor(e){super(),o(this,e,L,z,a,{})}}