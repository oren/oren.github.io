import{S as e,i as t,s as o,a,z as l,g as r,k as n,n as s,f as c,G as i,e as d,t as f,c as u,b as h,d as m,h as g,j as p,l as v,y as I,H as A,I as S,J as E,K as F,L as N}from"./index.491e6785.js";function b(e,t,o){const a=Object.create(e);return a.id=t[o].id,a.name=t[o].name,a.i=o,a}function w(e,t,o){const a=Object.create(e);return a.id=t[o].id,a.name=t[o].name,a.count=t[o].count,a.i=o,a}function P(e){let t,o,l,s,i,p,P,C,k,O,y,_,T,j,D,J,V,z,L,U,B,Y,$,H,K,q,Q=Math.round(e.calories)+"",R=Math.round(e.protein)+"",W=Math.round(e.carbs)+"",X=Math.round(e.fat)+"",Z=e.isGoal&&M(e),ee=e.foodIAte,te=[];for(let t=0;t<ee.length;t+=1)te[t]=x(w(e,ee,t));let oe=e.filteredFood,ae=[];for(let t=0;t<oe.length;t+=1)ae[t]=G(b(e,oe,t));return{c(){t=d("button"),o=f("Clear"),l=a(),Z&&Z.c(),s=a(),i=d("div"),p=d("span"),P=f("Cal: "),C=f(Q),k=a(),O=d("span"),y=f("Pro:"),_=f(R),T=a(),j=d("span"),D=f("Car:"),J=f(W),V=a(),z=d("span"),L=f("Fat:"),U=f(X),B=a();for(let e=0;e<te.length;e+=1)te[e].c();Y=a(),$=d("input"),H=a(),K=d("div");for(let e=0;e<ae.length;e+=1)ae[e].c();this.h()},l(e){t=u(e,"BUTTON",{class:!0});var a=h(t);o=m(a,"Clear"),a.forEach(c),l=r(e),Z&&Z.l(e),s=r(e),i=u(e,"DIV",{class:!0});var n=h(i);p=u(n,"SPAN",{class:!0});var d=h(p);P=m(d,"Cal: "),C=m(d,Q),d.forEach(c),k=r(n),O=u(n,"SPAN",{class:!0});var f=h(O);y=m(f,"Pro:"),_=m(f,R),f.forEach(c),T=r(n),j=u(n,"SPAN",{class:!0});var g=h(j);D=m(g,"Car:"),J=m(g,W),g.forEach(c),V=r(n),z=u(n,"SPAN",{class:!0});var v=h(z);L=m(v,"Fat:"),U=m(v,X),v.forEach(c),n.forEach(c),B=r(e);for(let t=0;t<te.length;t+=1)te[t].l(e);Y=r(e),$=u(e,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0,size:!0}),H=r(e),K=u(e,"DIV",{class:!0,style:!0});var I=h(K);for(let e=0;e<ae.length;e+=1)ae[e].l(I);I.forEach(c),this.h()},h(){g(t,"class","clear svelte-4udwmo"),g(p,"class","svelte-4udwmo"),g(O,"class","svelte-4udwmo"),g(j,"class","svelte-4udwmo"),g(z,"class","svelte-4udwmo"),g(i,"class","total svelte-4udwmo"),g($,"class","filter svelte-4udwmo"),g($,"type","text"),g($,"placeholder","Search"),g($,"maxlength","5"),g($,"size","3"),g(K,"class","wrapper svelte-4udwmo"),S(K,"grid-template-columns",e.columns),q=[A(t,"click",e.handleClear),A($,"input",e.input_input_handler),A($,"input",e.handleFilter)]},m(a,r){n(a,t,r),v(t,o),n(a,l,r),Z&&Z.m(a,r),n(a,s,r),n(a,i,r),v(i,p),v(p,P),v(p,C),v(i,k),v(i,O),v(O,y),v(O,_),v(i,T),v(i,j),v(j,D),v(j,J),v(i,V),v(i,z),v(z,L),v(z,U),n(a,B,r);for(let e=0;e<te.length;e+=1)te[e].m(a,r);n(a,Y,r),n(a,$,r),E($,e.filter),n(a,H,r),n(a,K,r);for(let e=0;e<ae.length;e+=1)ae[e].m(K,null)},p(e,t){if(t.isGoal?Z?Z.p(e,t):((Z=M(t)).c(),Z.m(s.parentNode,s)):Z&&(Z.d(1),Z=null),e.calories&&Q!==(Q=Math.round(t.calories)+"")&&I(C,Q),e.protein&&R!==(R=Math.round(t.protein)+"")&&I(_,R),e.carbs&&W!==(W=Math.round(t.carbs)+"")&&I(J,W),e.fat&&X!==(X=Math.round(t.fat)+"")&&I(U,X),e.foodIAte){let o;for(ee=t.foodIAte,o=0;o<ee.length;o+=1){const a=w(t,ee,o);te[o]?te[o].p(e,a):(te[o]=x(a),te[o].c(),te[o].m(Y.parentNode,Y))}for(;o<te.length;o+=1)te[o].d(1);te.length=ee.length}if(e.filter&&$.value!==t.filter&&E($,t.filter),e.handleFoodClick||e.food||e.filteredFood){let o;for(oe=t.filteredFood,o=0;o<oe.length;o+=1){const a=b(t,oe,o);ae[o]?ae[o].p(e,a):(ae[o]=G(a),ae[o].c(),ae[o].m(K,null))}for(;o<ae.length;o+=1)ae[o].d(1);ae.length=oe.length}e.columns&&S(K,"grid-template-columns",t.columns)},d(e){e&&c(t),e&&c(l),Z&&Z.d(e),e&&c(s),e&&c(i),e&&c(B),F(te,e),e&&c(Y),e&&c($),e&&c(H),e&&c(K),F(ae,e),N(q)}}}function C(e){let t,o,l,i,p,I,A;return{c(){t=d("p"),o=f("You have no food."),l=a(),i=d("p"),p=d("a"),I=f("Add some food first"),A=f("."),this.h()},l(e){t=u(e,"P",{});var a=h(t);o=m(a,"You have no food."),a.forEach(c),l=r(e),i=u(e,"P",{});var n=h(i);p=u(n,"A",{href:!0});var s=h(p);I=m(s,"Add some food first"),s.forEach(c),A=m(n,"."),n.forEach(c),this.h()},h(){g(p,"href","/food/manage-food/add-food")},m(e,a){n(e,t,a),v(t,o),n(e,l,a),n(e,i,a),v(i,p),v(p,I),v(i,A)},p:s,d(e){e&&c(t),e&&c(l),e&&c(i)}}}function M(e){let t,o,l,s,i,A,S,E,F,N,b=Math.round(e.goal-e.calories)+"";return{c(){t=d("div"),o=d("span"),l=f("Goal: "),s=f(e.goal),i=a(),A=d("span"),S=f("Left:"),E=d("span"),F=f(b),this.h()},l(a){t=u(a,"DIV",{class:!0});var n=h(t);o=u(n,"SPAN",{class:!0});var d=h(o);l=m(d,"Goal: "),s=m(d,e.goal),d.forEach(c),i=r(n),A=u(n,"SPAN",{class:!0});var f=h(A);S=m(f,"Left:"),f.forEach(c),E=u(n,"SPAN",{class:!0});var g=h(E);F=m(g,b),g.forEach(c),n.forEach(c),this.h()},h(){g(o,"class","svelte-4udwmo"),g(A,"class","svelte-4udwmo"),g(E,"class",N=p(e.remaining)+" svelte-4udwmo"),g(t,"class","goal svelte-4udwmo")},m(e,a){n(e,t,a),v(t,o),v(o,l),v(o,s),v(t,i),v(t,A),v(A,S),v(t,E),v(E,F)},p(e,t){e.goal&&I(s,t.goal),(e.goal||e.calories)&&b!==(b=Math.round(t.goal-t.calories)+"")&&I(F,b),e.remaining&&N!==(N=p(t.remaining)+" svelte-4udwmo")&&g(E,"class",N)},d(e){e&&c(t)}}}function x(e){let t,o,l,s,i=e.count+"",p=e.name+"";return{c(){t=d("div"),o=f(i),l=a(),s=f(p),this.h()},l(e){t=u(e,"DIV",{class:!0});var a=h(t);o=m(a,i),l=r(a),s=m(a,p),a.forEach(c),this.h()},h(){g(t,"class","ate svelte-4udwmo")},m(e,a){n(e,t,a),v(t,o),v(t,l),v(t,s)},p(e,t){e.foodIAte&&i!==(i=t.count+"")&&I(o,i),e.foodIAte&&p!==(p=t.name+"")&&I(s,p)},d(e){e&&c(t)}}}function G(e){let t,o,a,l=e.name+"";function r(...t){return e.click_handler(e,...t)}return{c(){t=d("button"),o=f(l),this.h()},l(e){t=u(e,"BUTTON",{class:!0});var a=h(t);o=m(a,l),a.forEach(c),this.h()},h(){g(t,"class","box svelte-4udwmo"),a=A(t,"click",r)},m(e,a){n(e,t,a),v(t,o)},p(t,a){e=a,t.filteredFood&&l!==(l=e.name+"")&&I(o,l)},d(e){e&&c(t),a()}}}function k(e){let t,o;function i(e,t){return 0===t.food.length?C:P}let d=i(0,e),f=d(e);return{c(){t=a(),f.c(),o=l(),this.h()},l(e){t=r(e),f.l(e),o=l(),this.h()},h(){document.title="Eat"},m(e,a){n(e,t,a),f.m(e,a),n(e,o,a)},p(e,t){d===(d=i(0,t))&&f?f.p(e,t):(f.d(1),(f=d(t))&&(f.c(),f.m(o.parentNode,o)))},i:s,o:s,d(e){e&&c(t),f.d(e),e&&c(o)}}}function O(e,t,o){let a="50% 50%",l=!1,r=2e3,n=[],s=[],c=0,d=0,f=0,u="",h=[];function m(e){o("filteredFood",h=s),o("filter",u="");let t=n.findIndex(t=>t.name===e.name);-1===t?(e.count=1,o("foodIAte",n=[...n,e])):o("foodIAte",n[t].count=n[t].count+1,n),localStorage.setItem("ate",JSON.stringify(n)),g()}i(async()=>{o("isGoal",l=localStorage.getItem("isGoal")||!1),o("goal",r=localStorage.getItem("goal")||2e3),o("columns",a=localStorage.getItem("columns")||"50% 50%"),o("food",s=JSON.parse(localStorage.getItem("food"))||[]),o("filteredFood",h=s),o("foodIAte",n=JSON.parse(localStorage.getItem("ate"))||[]),g()});const g=e=>{o("protein",c=n.reduce(function(e,t){return e+t.protein*t.count},0)),o("carbs",d=n.reduce(function(e,t){return e+t.carbs*t.count},0)),o("fat",f=n.reduce(function(e,t){return e+t.fat*t.count},0))};let p,v;return e.$$.update=((e={protein:1,carbs:1,fat:1,goal:1,calories:1})=>{(e.protein||e.carbs||e.fat)&&o("calories",v=parseFloat(Number(4*c+4*d+9*f).toFixed(1))),(e.goal||e.calories)&&o("remaining",p=r-v<=0?"remaining":"")}),{columns:a,isGoal:l,goal:r,foodIAte:n,food:s,protein:c,carbs:d,fat:f,filter:u,filteredFood:h,handleFoodClick:m,handleClear:function(){localStorage.removeItem("ate"),o("protein",c=0),o("carbs",d=0),o("fat",f=0),o("foodIAte",n=[])},handleFilter:function(){""===u&&o("filteredFood",h=s),o("filteredFood",h=s.filter(e=>e.name.includes(u)))},remaining:p,calories:v,input_input_handler:function(){u=this.value,o("filter",u)},click_handler:({i:e})=>m(s[e])}}export default class extends e{constructor(e){super(),t(this,e,O,k,o,{})}}