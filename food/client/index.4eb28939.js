import{S as a,i as e,s as t,a as o,y as r,j as s,l as n,q as l,E as c,p as f,h as i,N as h,D as m,e as d,t as u,b as g,d as p,f as v,k as b,O as I,m as A,x as E,P as S,n as N,c as P,g as k,Q as C,o as M,r as $,I as y}from"./index.52cd5646.js";import{I as D,t as O}from"./index.48ddcbd2.js";function T(a,e,t){const o=Object.create(a);return o.id=e[t].id,o.name=e[t].name,o.count=e[t].count,o.i=t,o}function x(a){let e,t,r,h,I,S,N,P,k,C,M,$,D,O,x,G,w,L,J,B,U,Y,_,q,Q,z,H,K,R,W,X=Math.round(a.calories)+"",Z=Math.round(a.protein)+"",aa=Math.round(a.carbs)+"",ea=Math.round(a.fat)+"",ta=a.isGoal&&F(a),oa=a.foodIAte.length>0&&V(a),ra=a.foodIAte,sa=[];for(let e=0;e<ra.length;e+=1)sa[e]=j(T(a,ra,e));const na=a=>l(sa[a],1,1,()=>{sa[a]=null});return{c(){ta&&ta.c(),e=o(),t=d("div"),r=d("span"),h=u("Cal:"),I=u(X),S=o(),N=d("span"),P=u("P:"),k=u(Z),C=o(),M=d("span"),$=u("C:"),D=u(aa),O=o(),x=d("span"),G=u("F:"),w=u(ea),L=o(),oa&&oa.c(),J=o(),B=d("div");for(let a=0;a<sa.length;a+=1)sa[a].c();U=o(),Y=d("ul"),_=d("li"),q=d("a"),Q=u("Ate Today"),z=o(),H=d("li"),K=d("a"),R=u("Choose Food"),this.h()},l(a){ta&&ta.l(a),e=s(a),t=g(a,"DIV",{});var o=p(t);r=g(o,"SPAN",{class:!0});var n=p(r);h=v(n,"Cal:"),I=v(n,X),n.forEach(i),S=s(o),N=g(o,"SPAN",{class:!0});var l=p(N);P=v(l,"P:"),k=v(l,Z),l.forEach(i),C=s(o),M=g(o,"SPAN",{class:!0});var c=p(M);$=v(c,"C:"),D=v(c,aa),c.forEach(i),O=s(o),x=g(o,"SPAN",{class:!0});var f=p(x);G=v(f,"F:"),w=v(f,ea),f.forEach(i),o.forEach(i),L=s(a),oa&&oa.l(a),J=s(a),B=g(a,"DIV",{class:!0});var m=p(B);for(let a=0;a<sa.length;a+=1)sa[a].l(m);m.forEach(i),U=s(a),Y=g(a,"UL",{class:!0});var d=p(Y);_=g(d,"LI",{class:!0});var u=p(_);q=g(u,"A",{href:!0,class:!0});var b=p(q);Q=v(b,"Ate Today"),b.forEach(i),u.forEach(i),z=s(d),H=g(d,"LI",{class:!0});var A=p(H);K=g(A,"A",{href:!0,class:!0});var E=p(K);R=v(E,"Choose Food"),E.forEach(i),A.forEach(i),d.forEach(i),this.h()},h(){b(r,"class","svelte-5fm944"),b(N,"class","svelte-5fm944"),b(M,"class","svelte-5fm944"),b(x,"class","svelte-5fm944"),b(B,"class","ate-wrapper mt-1 svelte-5fm944"),b(q,"href",""),b(q,"class","svelte-5fm944"),b(_,"class","first svelte-5fm944"),b(K,"href","/food/eat"),b(K,"class","svelte-5fm944"),b(H,"class","second svelte-5fm944"),b(Y,"class","svelte-5fm944")},m(a,o){ta&&ta.m(a,o),n(a,e,o),n(a,t,o),A(t,r),A(r,h),A(r,I),A(t,S),A(t,N),A(N,P),A(N,k),A(t,C),A(t,M),A(M,$),A(M,D),A(t,O),A(t,x),A(x,G),A(x,w),n(a,L,o),oa&&oa.m(a,o),n(a,J,o),n(a,B,o);for(let a=0;a<sa.length;a+=1)sa[a].m(B,null);n(a,U,o),n(a,Y,o),A(Y,_),A(_,q),A(q,Q),A(Y,z),A(Y,H),A(H,K),A(K,R),W=!0},p(a,t){if(t.isGoal?ta?ta.p(a,t):((ta=F(t)).c(),ta.m(e.parentNode,e)):ta&&(ta.d(1),ta=null),W&&!a.calories||X===(X=Math.round(t.calories)+"")||E(I,X),W&&!a.protein||Z===(Z=Math.round(t.protein)+"")||E(k,Z),W&&!a.carbs||aa===(aa=Math.round(t.carbs)+"")||E(D,aa),W&&!a.fat||ea===(ea=Math.round(t.fat)+"")||E(w,ea),t.foodIAte.length>0?oa?oa.p(a,t):((oa=V(t)).c(),oa.m(J.parentNode,J)):oa&&(oa.d(1),oa=null),a.foodIAte||a.handleDelete||a.trash){let e;for(ra=t.foodIAte,e=0;e<ra.length;e+=1){const o=T(t,ra,e);sa[e]?(sa[e].p(a,o),f(sa[e],1)):(sa[e]=j(o),sa[e].c(),f(sa[e],1),sa[e].m(B,null))}for(m(),e=ra.length;e<sa.length;e+=1)na(e);c()}},i(a){if(!W){for(let a=0;a<ra.length;a+=1)f(sa[a]);W=!0}},o(a){sa=sa.filter(Boolean);for(let a=0;a<sa.length;a+=1)l(sa[a]);W=!1},d(a){ta&&ta.d(a),a&&i(e),a&&i(t),a&&i(L),oa&&oa.d(a),a&&i(J),a&&i(B),y(sa,a),a&&i(U),a&&i(Y)}}}function G(a){let e,t,r,l,c,f,h;return{c(){e=d("p"),t=u("You have no food."),r=o(),l=d("p"),c=d("a"),f=u("Add some food first"),h=u("."),this.h()},l(a){e=g(a,"P",{});var o=p(e);t=v(o,"You have no food."),o.forEach(i),r=s(a),l=g(a,"P",{});var n=p(l);c=g(n,"A",{href:!0});var m=p(c);f=v(m,"Add some food first"),m.forEach(i),h=v(n,"."),n.forEach(i),this.h()},h(){b(c,"href","/food/manage-food/add-food")},m(a,o){n(a,e,o),A(e,t),n(a,r,o),n(a,l,o),A(l,c),A(c,f),A(l,h)},p:N,i:N,o:N,d(a){a&&i(e),a&&i(r),a&&i(l)}}}function F(a){let e,t,r,l,c,f,h,m,S,N,P,k=Math.round(a.goal-a.calories)+"";return{c(){e=d("div"),t=d("span"),r=u("Goal:"),l=u(a.goal),c=o(),f=d("span"),h=u("Left:"),S=d("span"),N=u(k),this.h()},l(o){e=g(o,"DIV",{});var n=p(e);t=g(n,"SPAN",{class:!0});var m=p(t);r=v(m,"Goal:"),l=v(m,a.goal),m.forEach(i),c=s(n),f=g(n,"SPAN",{class:!0});var d=p(f);h=v(d,"Left:"),d.forEach(i),S=g(n,"SPAN",{class:!0});var u=p(S);N=v(u,k),u.forEach(i),n.forEach(i),this.h()},h(){b(t,"class","svelte-5fm944"),b(f,"class",m=I(a.remaining)+" svelte-5fm944"),b(S,"class",P=I(a.remaining)+" svelte-5fm944")},m(a,o){n(a,e,o),A(e,t),A(t,r),A(t,l),A(e,c),A(e,f),A(f,h),A(e,S),A(S,N)},p(a,e){a.goal&&E(l,e.goal),a.remaining&&m!==(m=I(e.remaining)+" svelte-5fm944")&&b(f,"class",m),(a.goal||a.calories)&&k!==(k=Math.round(e.goal-e.calories)+"")&&E(N,k),a.remaining&&P!==(P=I(e.remaining)+" svelte-5fm944")&&b(S,"class",P)},d(a){a&&i(e)}}}function V(a){let e,t,o,r;return{c(){e=d("div"),t=d("button"),o=u("Clear All"),this.h()},l(a){e=g(a,"DIV",{});var r=p(e);t=g(r,"BUTTON",{class:!0,href:!0});var s=p(t);o=v(s,"Clear All"),s.forEach(i),r.forEach(i),this.h()},h(){b(t,"class","bg-red-400 py-1 mt-2 w-20"),b(t,"href","#"),r=S(t,"click",a.handleClear)},m(a,r){n(a,e,r),A(e,t),A(t,o)},p:N,d(a){a&&i(e),r()}}}function j(a){let e,t,o,r,s,c,h,m=a.name+"",I=a.count+"";const N=new D({props:{data:O}});function y(...e){return a.click_handler(a,...e)}return{c(){e=d("button"),P(N.$$.fragment),t=d("div"),o=u(m),r=d("div"),s=u(I),this.h()},l(a){e=g(a,"BUTTON",{class:!0,href:!0});var n=p(e);k(N.$$.fragment,n),n.forEach(i),t=g(a,"DIV",{});var l=p(t);o=v(l,m),l.forEach(i),r=g(a,"DIV",{});var c=p(r);s=v(c,I),c.forEach(i),this.h()},h(){b(e,"class","text-red-400"),b(e,"href","#"),h=S(e,"click",C(y))},m(a,l){n(a,e,l),M(N,e,null),n(a,t,l),A(t,o),n(a,r,l),A(r,s),c=!0},p(e,t){a=t,c&&!e.foodIAte||m===(m=a.name+"")||E(o,m),c&&!e.foodIAte||I===(I=a.count+"")||E(s,I)},i(a){c||(f(N.$$.fragment,a),c=!0)},o(a){l(N.$$.fragment,a),c=!1},d(a){a&&i(e),$(N),a&&i(t),a&&i(r),h()}}}function w(a){let e,t,h,d,u;const g=[G,x],p=[];function v(a,e){return 0===e.food.length?0:1}return t=v(0,a),h=p[t]=g[t](a),{c(){e=o(),h.c(),d=r(),this.h()},l(a){e=s(a),h.l(a),d=r(),this.h()},h(){document.title="Eat"},m(a,o){n(a,e,o),p[t].m(a,o),n(a,d,o),u=!0},p(a,e){let o=t;(t=v(0,e))===o?p[t].p(a,e):(m(),l(p[o],1,1,()=>{p[o]=null}),c(),(h=p[t])||(h=p[t]=g[t](e)).c(),f(h,1),h.m(d.parentNode,d))},i(a){u||(f(h),u=!0)},o(a){l(h),u=!1},d(a){a&&i(e),p[t].d(a),a&&i(d)}}}function L(a,e,t){let o=!1,r="50% 50%",s=!1,n=2e3,l=[],c=[],f=0,i=0,m=0,d=[];function u(a){let e=l.filter(function(e,t,o){return e.name!==a.name});t("foodIAte",l=e),localStorage.setItem("ate",JSON.stringify(e)),g()}h(async()=>{o="true"===(o=localStorage.getItem("firstTime")||"true"),t("isGoal",s=localStorage.getItem("isGoal")||!1),t("goal",n=localStorage.getItem("goal")||2e3),r=localStorage.getItem("columns")||"50% 50%",t("food",c=JSON.parse(localStorage.getItem("food"))||[]),d=(d=c).slice(0,15),t("foodIAte",l=JSON.parse(localStorage.getItem("ate"))||[]),o&&0===c.length&&(t("food",c=[{name:"cup milk 2%",protein:5,carbs:6,fat:7},{name:"cup oatmeal",protein:6,carbs:7.3,fat:7.2},{name:"egg",protein:6,carbs:0,fat:7.2},{name:"100g chicken breast",protein:20,carbs:3.2,fat:5.1},{name:"100g brown rice",protein:4,carbs:6.8,fat:4.7},{name:"100g japanese yams",protein:4,carbs:6.8,fat:4.7},{name:"avocado",protein:4,carbs:6.8,fat:4.7},{name:"olive oil",protein:2,carbs:3.8,fat:8},{name:"apple",protein:1,carbs:5.8,fat:3},{name:"cottage cheese",protein:1,carbs:5.8,fat:3},{name:"100g greek yugurt",protein:1,carbs:5.8,fat:3},{name:"1 tbsp peanut butter",protein:1,carbs:5.8,fat:3},{name:"100g salmon",protein:1,carbs:5.8,fat:3},{name:"100g steak",protein:1,carbs:5.8,fat:3},{name:"egg white",protein:1,carbs:5.8,fat:3},{name:"sardins",protein:1,carbs:5.8,fat:3},{name:"tuna can",protein:1,carbs:5.8,fat:3},{name:"tuna fresh",protein:1,carbs:5.8,fat:3},{name:"150g drum sticks",protein:1,carbs:5.8,fat:3},{name:"100g chicken thighs",protein:1,carbs:5.8,fat:3}]),localStorage.setItem("firstTime","false"),localStorage.setItem("food",JSON.stringify(c)),d=(d=c).slice(0,15)),g()});const g=a=>{t("protein",f=l.reduce(function(a,e){return a+e.protein*e.count},0)),t("carbs",i=l.reduce(function(a,e){return a+e.carbs*e.count},0)),t("fat",m=l.reduce(function(a,e){return a+e.fat*e.count},0))};let p,v;return a.$$.update=((a={protein:1,carbs:1,fat:1,goal:1,calories:1})=>{(a.protein||a.carbs||a.fat)&&t("calories",v=parseFloat(Number(4*f+4*i+9*m).toFixed(1))),(a.goal||a.calories)&&t("remaining",p=n-v<=0?"remaining":"")}),{isGoal:s,goal:n,foodIAte:l,food:c,protein:f,carbs:i,fat:m,handleClear:function(){localStorage.removeItem("ate"),t("protein",f=0),t("carbs",i=0),t("fat",m=0),t("foodIAte",l=[])},handleDelete:u,remaining:p,calories:v,click_handler:({i:a})=>u(l[a])}}export default class extends a{constructor(a){super(),e(this,a,L,w,t,{})}}