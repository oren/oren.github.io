import{S as a,i as e,s as t,e as r,t as o,a as s,b as l,d as n,f as c,h as i,j as f,k as d,O as h,l as u,m as p,x as m,P as g,T as v,U as b,n as S,I as F,N as E}from"./index.52cd5646.js";function I(a,e,t){const r=Object.create(a);return r.id=e[t].id,r.name=e[t].name,r.i=t,r}function N(a){let e,t,g,v,b,S,F,E,I,N,k,y=Math.round(a.goal-a.calories)+"";return{c(){e=r("div"),t=r("span"),g=o("Goal:"),v=o(a.goal),b=s(),S=r("span"),F=o("Left:"),I=r("span"),N=o(y),this.h()},l(r){e=l(r,"DIV",{});var o=n(e);t=l(o,"SPAN",{class:!0});var s=n(t);g=c(s,"Goal:"),v=c(s,a.goal),s.forEach(i),b=f(o),S=l(o,"SPAN",{class:!0});var d=n(S);F=c(d,"Left:"),d.forEach(i),I=l(o,"SPAN",{class:!0});var h=n(I);N=c(h,y),h.forEach(i),o.forEach(i),this.h()},h(){d(t,"class","svelte-ivvcrr"),d(S,"class",E=h(a.remaining)+" svelte-ivvcrr"),d(I,"class",k=h(a.remaining)+" svelte-ivvcrr")},m(a,r){u(a,e,r),p(e,t),p(t,g),p(t,v),p(e,b),p(e,S),p(S,F),p(e,I),p(I,N)},p(a,e){a.goal&&m(v,e.goal),a.remaining&&E!==(E=h(e.remaining)+" svelte-ivvcrr")&&d(S,"class",E),(a.goal||a.calories)&&y!==(y=Math.round(e.goal-e.calories)+"")&&m(N,y),a.remaining&&k!==(k=h(e.remaining)+" svelte-ivvcrr")&&d(I,"class",k)},d(a){a&&i(e)}}}function k(a){let e,t;return{c(){e=r("input"),this.h()},l(a){e=l(a,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0,size:!0}),this.h()},h(){d(e,"class","bg-gray-200 px-2 py-1 mb-2 mt-1"),d(e,"type","text"),d(e,"placeholder","Search"),d(e,"maxlength","5"),d(e,"size","3"),t=[g(e,"input",a.input_input_handler),g(e,"input",a.handleFilter)]},m(t,r){u(t,e,r),v(e,a.filter)},p(a,t){a.filter&&e.value!==t.filter&&v(e,t.filter)},d(a){a&&i(e),b(t)}}}function y(a){let e,t,s,f=a.name+"";function h(...e){return a.click_handler(a,...e)}return{c(){e=r("button"),t=o(f),this.h()},l(a){e=l(a,"BUTTON",{class:!0});var r=n(e);t=c(r,f),r.forEach(i),this.h()},h(){d(e,"class","bg-blue-100 p-1"),s=g(e,"click",h)},m(a,r){u(a,e,r),p(e,t)},p(e,r){a=r,e.filteredFood&&f!==(f=a.name+"")&&m(t,f)},d(a){a&&i(e),s()}}}function A(a){let e,t,h,g,v,b,E,A,P,x,C,M,T,G,L,O,_,w,j,J,U,D,V,z,$,B,q,H,K,Q,R=Math.round(a.calories)+"",W=Math.round(a.protein)+"",X=Math.round(a.carbs)+"",Y=Math.round(a.fat)+"",Z=a.isGoal&&N(a),aa=a.food.length>=10&&k(a),ea=a.filteredFood,ta=[];for(let e=0;e<ea.length;e+=1)ta[e]=y(I(a,ea,e));return{c(){e=s(),Z&&Z.c(),t=s(),h=r("div"),g=r("span"),v=o("Cal:"),b=o(R),E=s(),A=r("span"),P=o("P:"),x=o(W),C=s(),M=r("span"),T=o("C:"),G=o(X),L=s(),O=r("span"),_=o("F:"),w=o(Y),j=s(),aa&&aa.c(),J=s(),U=r("div");for(let a=0;a<ta.length;a+=1)ta[a].c();D=s(),V=r("ul"),z=r("li"),$=r("a"),B=o("Ate Today"),q=s(),H=r("li"),K=r("a"),Q=o("Choose Food"),this.h()},l(a){e=f(a),Z&&Z.l(a),t=f(a),h=l(a,"DIV",{});var r=n(h);g=l(r,"SPAN",{class:!0});var o=n(g);v=c(o,"Cal:"),b=c(o,R),o.forEach(i),E=f(r),A=l(r,"SPAN",{class:!0});var s=n(A);P=c(s,"P:"),x=c(s,W),s.forEach(i),C=f(r),M=l(r,"SPAN",{class:!0});var d=n(M);T=c(d,"C:"),G=c(d,X),d.forEach(i),L=f(r),O=l(r,"SPAN",{class:!0});var u=n(O);_=c(u,"F:"),w=c(u,Y),u.forEach(i),r.forEach(i),j=f(a),aa&&aa.l(a),J=f(a),U=l(a,"DIV",{class:!0});var p=n(U);for(let a=0;a<ta.length;a+=1)ta[a].l(p);p.forEach(i),D=f(a),V=l(a,"UL",{class:!0});var m=n(V);z=l(m,"LI",{class:!0});var S=n(z);$=l(S,"A",{href:!0,class:!0});var F=n($);B=c(F,"Ate Today"),F.forEach(i),S.forEach(i),q=f(m),H=l(m,"LI",{class:!0});var I=n(H);K=l(I,"A",{href:!0,class:!0});var N=n(K);Q=c(N,"Choose Food"),N.forEach(i),I.forEach(i),m.forEach(i),this.h()},h(){document.title="Eat",d(g,"class","svelte-ivvcrr"),d(A,"class","svelte-ivvcrr"),d(M,"class","svelte-ivvcrr"),d(O,"class","svelte-ivvcrr"),d(U,"class","wrapper svelte-ivvcrr"),d($,"href","/food"),d($,"class","svelte-ivvcrr"),d(z,"class","first svelte-ivvcrr"),d(K,"href","/food/eat"),d(K,"class","svelte-ivvcrr"),d(H,"class","second svelte-ivvcrr"),d(V,"class","svelte-ivvcrr")},m(a,r){u(a,e,r),Z&&Z.m(a,r),u(a,t,r),u(a,h,r),p(h,g),p(g,v),p(g,b),p(h,E),p(h,A),p(A,P),p(A,x),p(h,C),p(h,M),p(M,T),p(M,G),p(h,L),p(h,O),p(O,_),p(O,w),u(a,j,r),aa&&aa.m(a,r),u(a,J,r),u(a,U,r);for(let a=0;a<ta.length;a+=1)ta[a].m(U,null);u(a,D,r),u(a,V,r),p(V,z),p(z,$),p($,B),p(V,q),p(V,H),p(H,K),p(K,Q)},p(a,e){if(e.isGoal?Z?Z.p(a,e):((Z=N(e)).c(),Z.m(t.parentNode,t)):Z&&(Z.d(1),Z=null),a.calories&&R!==(R=Math.round(e.calories)+"")&&m(b,R),a.protein&&W!==(W=Math.round(e.protein)+"")&&m(x,W),a.carbs&&X!==(X=Math.round(e.carbs)+"")&&m(G,X),a.fat&&Y!==(Y=Math.round(e.fat)+"")&&m(w,Y),e.food.length>=10?aa?aa.p(a,e):((aa=k(e)).c(),aa.m(J.parentNode,J)):aa&&(aa.d(1),aa=null),a.handleFoodClick||a.filteredFood){let t;for(ea=e.filteredFood,t=0;t<ea.length;t+=1){const r=I(e,ea,t);ta[t]?ta[t].p(a,r):(ta[t]=y(r),ta[t].c(),ta[t].m(U,null))}for(;t<ta.length;t+=1)ta[t].d(1);ta.length=ea.length}},i:S,o:S,d(a){a&&i(e),Z&&Z.d(a),a&&i(t),a&&i(h),a&&i(j),aa&&aa.d(a),a&&i(J),a&&i(U),F(ta,a),a&&i(D),a&&i(V)}}}function P(a,e,t){let r=!1,o="50% 50%",s=!1,l=2e3,n=[],c=[],i=0,f=0,d=0,h="",u=[];function p(a){let e=n.findIndex(e=>e.name===a.name);-1===e?(a.count=1,n=[...n,a]):n[e].count=n[e].count+1,localStorage.setItem("ate",JSON.stringify(n)),m()}E(async()=>{r="true"===(r=localStorage.getItem("firstTime")||"true"),t("isGoal",s=localStorage.getItem("isGoal")||!1),t("goal",l=localStorage.getItem("goal")||2e3),o=localStorage.getItem("columns")||"50% 50%",t("food",c=JSON.parse(localStorage.getItem("food"))||[]),t("filteredFood",u=c),t("filteredFood",u=u.slice(0,15)),n=JSON.parse(localStorage.getItem("ate"))||[],r&&0===c.length&&(t("food",c=[{name:"cup milk 2%",protein:5,carbs:6,fat:7},{name:"cup oatmeal",protein:6,carbs:7.3,fat:7.2},{name:"egg",protein:6,carbs:0,fat:7.2},{name:"100g chicken breast",protein:20,carbs:3.2,fat:5.1},{name:"100g brown rice",protein:4,carbs:6.8,fat:4.7},{name:"100g japanese yams",protein:4,carbs:6.8,fat:4.7},{name:"avocado",protein:4,carbs:6.8,fat:4.7},{name:"olive oil",protein:2,carbs:3.8,fat:8},{name:"apple",protein:1,carbs:5.8,fat:3},{name:"cottage cheese",protein:1,carbs:5.8,fat:3},{name:"100g greek yugurt",protein:1,carbs:5.8,fat:3},{name:"1 tbsp peanut butter",protein:1,carbs:5.8,fat:3},{name:"100g salmon",protein:1,carbs:5.8,fat:3},{name:"100g steak",protein:1,carbs:5.8,fat:3},{name:"egg white",protein:1,carbs:5.8,fat:3},{name:"sardins",protein:1,carbs:5.8,fat:3},{name:"tuna can",protein:1,carbs:5.8,fat:3},{name:"tuna fresh",protein:1,carbs:5.8,fat:3},{name:"150g drum sticks",protein:1,carbs:5.8,fat:3},{name:"100g chicken thighs",protein:1,carbs:5.8,fat:3}]),localStorage.setItem("firstTime","false"),localStorage.setItem("food",JSON.stringify(c)),t("filteredFood",u=c),t("filteredFood",u=u.slice(0,15))),m()});const m=a=>{t("protein",i=n.reduce(function(a,e){return a+e.protein*e.count},0)),t("carbs",f=n.reduce(function(a,e){return a+e.carbs*e.count},0)),t("fat",d=n.reduce(function(a,e){return a+e.fat*e.count},0))};let g,v;return a.$$.update=((a={protein:1,carbs:1,fat:1,goal:1,calories:1})=>{(a.protein||a.carbs||a.fat)&&t("calories",v=parseFloat(Number(4*i+4*f+9*d).toFixed(1))),(a.goal||a.calories)&&t("remaining",g=l-v<=0?"remaining":"")}),{isGoal:s,goal:l,food:c,protein:i,carbs:f,fat:d,filter:h,filteredFood:u,handleFilter:function(){""===h&&t("filteredFood",u=c),t("filteredFood",u=c.filter(a=>a.name.toLowerCase().includes(h.toLowerCase())))},handleFoodClick:p,remaining:g,calories:v,input_input_handler:function(){h=this.value,t("filter",h)},click_handler:({i:a})=>p(u[a])}}export default class extends a{constructor(a){super(),e(this,a,P,A,t,{})}}