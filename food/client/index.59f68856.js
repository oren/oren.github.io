import{S as e,i as a,s as o,a as t,z as s,g as l,k as r,n as c,f as n,G as i,e as f,t as d,c as h,b as u,d as m,h as g,j as p,l as v,y as A,H as I,I as b}from"./index.5b407ef8.js";function N(e,a,o){const t=Object.create(e);return t.id=a[o].id,t.name=a[o].name,t.i=o,t}function E(e,a,o){const t=Object.create(e);return t.id=a[o].id,t.name=a[o].name,t.count=a[o].count,t.i=o,t}function S(e){let a,o,s,c,i,p,S,C,G,k,O,T,j,D,V,H,J,B,R,U,Y,$,_,w,z,q,K,L,M,Q,W=e.isGoal&&F(e),X=0===e.calories&&P(),Z=e.foodIAte,ee=[];for(let a=0;a<Z.length;a+=1)ee[a]=y(E(e,Z,a));let ae=e.food,oe=[];for(let a=0;a<ae.length;a+=1)oe[a]=x(N(e,ae,a));return{c(){W&&W.c(),a=t(),o=f("div"),s=f("span"),c=d("Calories: "),i=d(e.calories),p=t(),S=f("span"),C=d("Protein:"),G=d(e.protein),k=t(),O=f("span"),T=d("Carbs:"),j=d(e.carbs),D=t(),V=f("span"),H=d("Fat:"),J=d(e.fat),B=t(),R=f("h2"),U=d("Today I Ate:"),Y=f("button"),$=d("Clear"),_=t(),X&&X.c(),w=t();for(let e=0;e<ee.length;e+=1)ee[e].c();z=t(),q=f("h2"),K=d("Add Food"),L=t(),M=f("div");for(let e=0;e<oe.length;e+=1)oe[e].c();this.h()},l(t){W&&W.l(t),a=l(t),o=h(t,"DIV",{class:!0});var r=u(o);s=h(r,"SPAN",{class:!0});var f=u(s);c=m(f,"Calories: "),i=m(f,e.calories),f.forEach(n),p=l(r),S=h(r,"SPAN",{class:!0});var d=u(S);C=m(d,"Protein:"),G=m(d,e.protein),d.forEach(n),k=l(r),O=h(r,"SPAN",{class:!0});var g=u(O);T=m(g,"Carbs:"),j=m(g,e.carbs),g.forEach(n),D=l(r),V=h(r,"SPAN",{class:!0});var v=u(V);H=m(v,"Fat:"),J=m(v,e.fat),v.forEach(n),r.forEach(n),B=l(t),R=h(t,"H2",{class:!0});var A=u(R);U=m(A,"Today I Ate:"),Y=h(A,"BUTTON",{class:!0});var I=u(Y);$=m(I,"Clear"),I.forEach(n),A.forEach(n),_=l(t),X&&X.l(t),w=l(t);for(let e=0;e<ee.length;e+=1)ee[e].l(t);z=l(t),q=h(t,"H2",{class:!0});var b=u(q);K=m(b,"Add Food"),b.forEach(n),L=l(t),M=h(t,"DIV",{class:!0});var N=u(M);for(let e=0;e<oe.length;e+=1)oe[e].l(N);N.forEach(n),this.h()},h(){g(s,"class","svelte-1f9c79s"),g(S,"class","svelte-1f9c79s"),g(O,"class","svelte-1f9c79s"),g(V,"class","svelte-1f9c79s"),g(o,"class","total svelte-1f9c79s"),g(Y,"class","clear svelte-1f9c79s"),g(R,"class","today svelte-1f9c79s"),g(q,"class","add svelte-1f9c79s"),g(M,"class","wrapper svelte-1f9c79s"),Q=I(Y,"click",e.handleClear)},m(e,t){W&&W.m(e,t),r(e,a,t),r(e,o,t),v(o,s),v(s,c),v(s,i),v(o,p),v(o,S),v(S,C),v(S,G),v(o,k),v(o,O),v(O,T),v(O,j),v(o,D),v(o,V),v(V,H),v(V,J),r(e,B,t),r(e,R,t),v(R,U),v(R,Y),v(Y,$),r(e,_,t),X&&X.m(e,t),r(e,w,t);for(let a=0;a<ee.length;a+=1)ee[a].m(e,t);r(e,z,t),r(e,q,t),v(q,K),r(e,L,t),r(e,M,t);for(let e=0;e<oe.length;e+=1)oe[e].m(M,null)},p(e,o){if(o.isGoal?W?W.p(e,o):((W=F(o)).c(),W.m(a.parentNode,a)):W&&(W.d(1),W=null),e.calories&&A(i,o.calories),e.protein&&A(G,o.protein),e.carbs&&A(j,o.carbs),e.fat&&A(J,o.fat),0===o.calories?X||((X=P()).c(),X.m(w.parentNode,w)):X&&(X.d(1),X=null),e.foodIAte){let a;for(Z=o.foodIAte,a=0;a<Z.length;a+=1){const t=E(o,Z,a);ee[a]?ee[a].p(e,t):(ee[a]=y(t),ee[a].c(),ee[a].m(z.parentNode,z))}for(;a<ee.length;a+=1)ee[a].d(1);ee.length=Z.length}if(e.handleFoodClick||e.food){let a;for(ae=o.food,a=0;a<ae.length;a+=1){const t=N(o,ae,a);oe[a]?oe[a].p(e,t):(oe[a]=x(t),oe[a].c(),oe[a].m(M,null))}for(;a<oe.length;a+=1)oe[a].d(1);oe.length=ae.length}},d(e){W&&W.d(e),e&&n(a),e&&n(o),e&&n(B),e&&n(R),e&&n(_),X&&X.d(e),e&&n(w),b(ee,e),e&&n(z),e&&n(q),e&&n(L),e&&n(M),b(oe,e),Q()}}}function C(e){let a,o,s,i,p,A,I;return{c(){a=f("p"),o=d("You have no food."),s=t(),i=f("p"),p=f("a"),A=d("Add some food first"),I=d("."),this.h()},l(e){a=h(e,"P",{});var t=u(a);o=m(t,"You have no food."),t.forEach(n),s=l(e),i=h(e,"P",{});var r=u(i);p=h(r,"A",{href:!0});var c=u(p);A=m(c,"Add some food first"),c.forEach(n),I=m(r,"."),r.forEach(n),this.h()},h(){g(p,"href","/food/manage-food/add-food")},m(e,t){r(e,a,t),v(a,o),r(e,s,t),r(e,i,t),v(i,p),v(p,A),v(i,I)},p:c,d(e){e&&n(a),e&&n(s),e&&n(i)}}}function F(e){let a,o,s,c,i,I,b,N,E,S,C=e.goal-e.calories+"";return{c(){a=f("div"),o=f("span"),s=d("Calories Goal: "),c=d(e.goal),i=t(),I=f("span"),b=d("Remaining:"),N=f("span"),E=d(C),this.h()},l(t){a=h(t,"DIV",{class:!0});var r=u(a);o=h(r,"SPAN",{class:!0});var f=u(o);s=m(f,"Calories Goal: "),c=m(f,e.goal),f.forEach(n),i=l(r),I=h(r,"SPAN",{class:!0});var d=u(I);b=m(d,"Remaining:"),d.forEach(n),N=h(r,"SPAN",{class:!0});var g=u(N);E=m(g,C),g.forEach(n),r.forEach(n),this.h()},h(){g(o,"class","svelte-1f9c79s"),g(I,"class","svelte-1f9c79s"),g(N,"class",S=p(e.remaining)+" svelte-1f9c79s"),g(a,"class","goal svelte-1f9c79s")},m(e,t){r(e,a,t),v(a,o),v(o,s),v(o,c),v(a,i),v(a,I),v(I,b),v(a,N),v(N,E)},p(e,a){e.goal&&A(c,a.goal),(e.goal||e.calories)&&C!==(C=a.goal-a.calories+"")&&A(E,C),e.remaining&&S!==(S=p(a.remaining)+" svelte-1f9c79s")&&g(N,"class",S)},d(e){e&&n(a)}}}function P(e){let a;return{c(){a=d("Nothing yet... Feed your muscles!")},l(e){a=m(e,"Nothing yet... Feed your muscles!")},m(e,o){r(e,a,o)},d(e){e&&n(a)}}}function y(e){let a,o,s,c,i=e.count+"",g=e.name+"";return{c(){a=f("div"),o=d(i),s=t(),c=d(g)},l(e){a=h(e,"DIV",{});var t=u(a);o=m(t,i),s=l(t),c=m(t,g),t.forEach(n)},m(e,t){r(e,a,t),v(a,o),v(a,s),v(a,c)},p(e,a){e.foodIAte&&i!==(i=a.count+"")&&A(o,i),e.foodIAte&&g!==(g=a.name+"")&&A(c,g)},d(e){e&&n(a)}}}function x(e){let a,o,t,s=e.name+"";function l(...a){return e.click_handler(e,...a)}return{c(){a=f("button"),o=d(s),this.h()},l(e){a=h(e,"BUTTON",{class:!0});var t=u(a);o=m(t,s),t.forEach(n),this.h()},h(){g(a,"class","box svelte-1f9c79s"),t=I(a,"click",l)},m(e,t){r(e,a,t),v(a,o)},p(a,t){e=t,a.food&&s!==(s=e.name+"")&&A(o,s)},d(e){e&&n(a),t()}}}function G(e){let a,o;function i(e,a){return 0===a.food.length?C:S}let f=i(0,e),d=f(e);return{c(){a=t(),d.c(),o=s(),this.h()},l(e){a=l(e),d.l(e),o=s(),this.h()},h(){document.title="Eat"},m(e,t){r(e,a,t),d.m(e,t),r(e,o,t)},p(e,a){f===(f=i(0,a))&&d?d.p(e,a):(d.d(1),(d=f(a))&&(d.c(),d.m(o.parentNode,o)))},i:c,o:c,d(e){e&&n(a),d.d(e),e&&n(o)}}}function k(e,a,o){let t=!1,s=2e3,l=[],r=[],c=0,n=0,f=0;function d(e){let a=l.findIndex(a=>a.name===e.name);-1===a?(e.count=1,o("foodIAte",l=[...l,e])):o("foodIAte",l[a].count=l[a].count+1,l),localStorage.setItem("ate",JSON.stringify(l)),h()}i(async()=>{o("isGoal",t=localStorage.getItem("isGoal")||!1),o("goal",s=localStorage.getItem("goal")||2e3),o("food",r=JSON.parse(localStorage.getItem("food"))||[]),o("foodIAte",l=JSON.parse(localStorage.getItem("ate"))||[]),h()});const h=e=>{o("protein",c=Number(l.reduce(function(e,a){return e+a.protein*a.count},0)).toFixed(1)),o("carbs",n=Number(l.reduce(function(e,a){return e+a.carbs*a.count},0)).toFixed(1)),o("fat",f=Number(l.reduce(function(e,a){return e+a.fat*a.count},0)).toFixed(1))};let u,m;return e.$$.update=((e={protein:1,carbs:1,fat:1,goal:1,calories:1})=>{(e.protein||e.carbs||e.fat)&&o("calories",m=Number(4*c+4*n+9*f).toFixed(1)),(e.goal||e.calories)&&o("remaining",u=s-m<=0?"remaining":"")}),{isGoal:t,goal:s,foodIAte:l,food:r,protein:c,carbs:n,fat:f,handleFoodClick:d,handleClear:function(e){localStorage.removeItem("ate"),o("protein",c=0),o("carbs",n=0),o("fat",f=0),o("foodIAte",l=[])},remaining:u,calories:m,click_handler:({i:e})=>d(r[e])}}export default class extends e{constructor(e){super(),a(this,e,k,G,o,{})}}