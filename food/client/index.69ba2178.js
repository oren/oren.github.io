import{S as a,i as e,s as t,a as o,e as r,t as s,j as n,b as l,d as c,f as i,h as f,k as p,l as h,m as d,q as m,E as u,p as g,N as b,D as v,O as I,x as A,c as E,g as S,P as $,o as N,n as k,r as x,Q as F,R as P,I as C}from"./index.9cf44aa4.js";import{I as y,t as O,p as M}from"./index.e287424e.js";function T(a,e,t){const o=Object.create(a);return o.id=e[t].id,o.name=e[t].name,o.count=e[t].count,o.i=t,o}function w(a){let e,t,b,I,E,S,$,N,k,x,F,P,y,O,M,w,D,V,_,j,L,B,Y,q,Q,R,z,H,K,W=Math.round(a.calories)+"",X=Math.round(a.protein)+"",Z=Math.round(a.carbs)+"",aa=Math.round(a.fat)+"",ea=a.isGoal&&G(a),ta=a.foodIAte.length>0&&J(a),oa=a.foodIAte,ra=[];for(let e=0;e<oa.length;e+=1)ra[e]=U(T(a,oa,e));const sa=a=>m(ra[a],1,1,()=>{ra[a]=null});return{c(){ea&&ea.c(),e=o(),t=r("div"),b=r("span"),I=s("Cal:"),E=s(W),S=o(),$=r("span"),N=s("P:"),k=s(X),x=o(),F=r("span"),P=s("C:"),y=s(Z),O=o(),M=r("span"),w=s("F:"),D=s(aa),V=o(),ta&&ta.c(),_=o(),j=r("div");for(let a=0;a<ra.length;a+=1)ra[a].c();L=o(),B=r("ul"),Y=r("li"),q=s("Ate Today"),Q=o(),R=r("li"),z=r("a"),H=s("Choose Food"),this.h()},l(a){ea&&ea.l(a),e=n(a),t=l(a,"DIV",{});var o=c(t);b=l(o,"SPAN",{class:!0});var r=c(b);I=i(r,"Cal:"),E=i(r,W),r.forEach(f),S=n(o),$=l(o,"SPAN",{class:!0});var s=c($);N=i(s,"P:"),k=i(s,X),s.forEach(f),x=n(o),F=l(o,"SPAN",{class:!0});var p=c(F);P=i(p,"C:"),y=i(p,Z),p.forEach(f),O=n(o),M=l(o,"SPAN",{class:!0});var h=c(M);w=i(h,"F:"),D=i(h,aa),h.forEach(f),o.forEach(f),V=n(a),ta&&ta.l(a),_=n(a),j=l(a,"DIV",{class:!0});var d=c(j);for(let a=0;a<ra.length;a+=1)ra[a].l(d);d.forEach(f),L=n(a),B=l(a,"UL",{class:!0});var m=c(B);Y=l(m,"LI",{class:!0});var u=c(Y);q=i(u,"Ate Today"),u.forEach(f),Q=n(m),R=l(m,"LI",{class:!0});var g=c(R);z=l(g,"A",{href:!0,class:!0});var v=c(z);H=i(v,"Choose Food"),v.forEach(f),g.forEach(f),m.forEach(f),this.h()},h(){p(b,"class","svelte-1ooppbp"),p($,"class","svelte-1ooppbp"),p(F,"class","svelte-1ooppbp"),p(M,"class","svelte-1ooppbp"),p(j,"class","ate-wrapper mt-1 svelte-1ooppbp"),p(Y,"class","first svelte-1ooppbp"),p(z,"href","/food/eat"),p(z,"class","svelte-1ooppbp"),p(R,"class","second svelte-1ooppbp"),p(B,"class","svelte-1ooppbp")},m(a,o){ea&&ea.m(a,o),h(a,e,o),h(a,t,o),d(t,b),d(b,I),d(b,E),d(t,S),d(t,$),d($,N),d($,k),d(t,x),d(t,F),d(F,P),d(F,y),d(t,O),d(t,M),d(M,w),d(M,D),h(a,V,o),ta&&ta.m(a,o),h(a,_,o),h(a,j,o);for(let a=0;a<ra.length;a+=1)ra[a].m(j,null);h(a,L,o),h(a,B,o),d(B,Y),d(Y,q),d(B,Q),d(B,R),d(R,z),d(z,H),K=!0},p(a,t){if(t.isGoal?ea?ea.p(a,t):((ea=G(t)).c(),ea.m(e.parentNode,e)):ea&&(ea.d(1),ea=null),K&&!a.calories||W===(W=Math.round(t.calories)+"")||A(E,W),K&&!a.protein||X===(X=Math.round(t.protein)+"")||A(k,X),K&&!a.carbs||Z===(Z=Math.round(t.carbs)+"")||A(y,Z),K&&!a.fat||aa===(aa=Math.round(t.fat)+"")||A(D,aa),t.foodIAte.length>0?ta?(ta.p(a,t),g(ta,1)):((ta=J(t)).c(),g(ta,1),ta.m(_.parentNode,_)):ta&&(v(),m(ta,1,1,()=>{ta=null}),u()),a.handlePlus||a.foodIAte||a.plus||a.handleDelete||a.trash){let e;for(oa=t.foodIAte,e=0;e<oa.length;e+=1){const o=T(t,oa,e);ra[e]?(ra[e].p(a,o),g(ra[e],1)):(ra[e]=U(o),ra[e].c(),g(ra[e],1),ra[e].m(j,null))}for(v(),e=oa.length;e<ra.length;e+=1)sa(e);u()}},i(a){if(!K){g(ta);for(let a=0;a<oa.length;a+=1)g(ra[a]);K=!0}},o(a){m(ta),ra=ra.filter(Boolean);for(let a=0;a<ra.length;a+=1)m(ra[a]);K=!1},d(a){ea&&ea.d(a),a&&f(e),a&&f(t),a&&f(V),ta&&ta.d(a),a&&f(_),a&&f(j),C(ra,a),a&&f(L),a&&f(B)}}}function D(a){let e,t,o,n,m;return{c(){e=r("p"),t=s("You have no food. "),o=r("a"),n=s("Add food"),m=s(" first."),this.h()},l(a){e=l(a,"P",{});var r=c(e);t=i(r,"You have no food. "),o=l(r,"A",{class:!0,a:!0,href:!0});var s=c(o);n=i(s,"Add food"),s.forEach(f),m=i(r," first."),r.forEach(f),this.h()},h(){p(o,"class","text-blue-500"),p(o,"a",""),p(o,"href","/food/manage-food/add-food")},m(a,r){h(a,e,r),d(e,t),d(e,o),d(o,n),d(e,m)},p:k,i:k,o:k,d(a){a&&f(e)}}}function G(a){let e,t,m,u,g,b,v,E,S,$,N,k=Math.round(a.goal-a.calories)+"";return{c(){e=r("div"),t=r("span"),m=s("Goal:"),u=s(a.goal),g=o(),b=r("span"),v=s("Left:"),S=r("span"),$=s(k),this.h()},l(o){e=l(o,"DIV",{});var r=c(e);t=l(r,"SPAN",{class:!0});var s=c(t);m=i(s,"Goal:"),u=i(s,a.goal),s.forEach(f),g=n(r),b=l(r,"SPAN",{class:!0});var p=c(b);v=i(p,"Left:"),p.forEach(f),S=l(r,"SPAN",{class:!0});var h=c(S);$=i(h,k),h.forEach(f),r.forEach(f),this.h()},h(){p(t,"class","svelte-1ooppbp"),p(b,"class",E=I(a.remaining)+" svelte-1ooppbp"),p(S,"class",N=I(a.remaining)+" svelte-1ooppbp")},m(a,o){h(a,e,o),d(e,t),d(t,m),d(t,u),d(e,g),d(e,b),d(b,v),d(e,S),d(S,$)},p(a,e){a.goal&&A(u,e.goal),a.remaining&&E!==(E=I(e.remaining)+" svelte-1ooppbp")&&p(b,"class",E),(a.goal||a.calories)&&k!==(k=Math.round(e.goal-e.calories)+"")&&A($,k),a.remaining&&N!==(N=I(e.remaining)+" svelte-1ooppbp")&&p(S,"class",N)},d(a){a&&f(e)}}}function J(a){let e,t,o,n,u;const b=new y({props:{style:"margin-left: 0.5rem; margin-bottom: 0.25rem;",data:O}});return{c(){e=r("div"),t=r("button"),o=s("Clear All"),E(b.$$.fragment),this.h()},l(a){e=l(a,"DIV",{});var r=c(e);t=l(r,"BUTTON",{class:!0});var s=c(t);o=i(s,"Clear All"),S(b.$$.fragment,s),s.forEach(f),r.forEach(f),this.h()},h(){p(t,"class","bg-red-400 text-white font-bold py-1 px-3 mt-3 w-1/2"),u=$(t,"click",a.handleClear)},m(a,r){h(a,e,r),d(e,t),d(t,o),N(b,t,null),n=!0},p:k,i(a){n||(g(b.$$.fragment,a),n=!0)},o(a){m(b.$$.fragment,a),n=!1},d(a){a&&f(e),x(b),u()}}}function U(a){let e,t,u,b,v,I,k,C,T,w,D,G=a.name+"",J=a.count+"";const U=new y({props:{data:O}});function V(...e){return a.click_handler(a,...e)}const _=new y({props:{data:M}});function j(...e){return a.click_handler_1(a,...e)}return{c(){e=r("button"),E(U.$$.fragment),t=o(),u=r("div"),b=s(G),v=o(),I=r("div"),k=s(J),C=o(),T=r("button"),E(_.$$.fragment),this.h()},l(a){e=l(a,"BUTTON",{class:!0,href:!0});var o=c(e);S(U.$$.fragment,o),o.forEach(f),t=n(a),u=l(a,"DIV",{});var r=c(u);b=i(r,G),r.forEach(f),v=n(a),I=l(a,"DIV",{class:!0});var s=c(I);k=i(s,J),s.forEach(f),C=n(a),T=l(a,"BUTTON",{class:!0,href:!0});var p=c(T);S(_.$$.fragment,p),p.forEach(f),this.h()},h(){p(e,"class","text-red-400 text-left"),p(e,"href","#"),p(I,"class",""),p(T,"class",""),p(T,"href","#"),D=[$(e,"click",F(V)),$(T,"click",F(j))]},m(a,o){h(a,e,o),N(U,e,null),h(a,t,o),h(a,u,o),d(u,b),h(a,v,o),h(a,I,o),d(I,k),h(a,C,o),h(a,T,o),N(_,T,null),w=!0},p(e,t){a=t,w&&!e.foodIAte||G===(G=a.name+"")||A(b,G),w&&!e.foodIAte||J===(J=a.count+"")||A(k,J)},i(a){w||(g(U.$$.fragment,a),g(_.$$.fragment,a),w=!0)},o(a){m(U.$$.fragment,a),m(_.$$.fragment,a),w=!1},d(a){a&&f(e),x(U),a&&f(t),a&&f(u),a&&f(v),a&&f(I),a&&f(C),a&&f(T),x(_),P(D)}}}function V(a){let e,t,b,I,A,E,S,$,N,k,x,F,P;const C=[D,w],y=[];function O(a,e){return 0===e.food.length?0:1}return t=O(0,a),b=y[t]=C[t](a),{c(){e=o(),b.c(),I=o(),A=r("a"),E=s("Choose Food"),S=o(),$=r("a"),N=s("Update Food"),k=o(),x=r("a"),F=s("Export Food"),this.h()},l(a){e=n(a),b.l(a),I=n(a),A=l(a,"A",{class:!0,href:!0});var t=c(A);E=i(t,"Choose Food"),t.forEach(f),S=n(a),$=l(a,"A",{class:!0,href:!0});var o=c($);N=i(o,"Update Food"),o.forEach(f),k=n(a),x=l(a,"A",{class:!0,href:!0});var r=c(x);F=i(r,"Export Food"),r.forEach(f),this.h()},h(){document.title="Eat",p(A,"class","invisible"),p(A,"href","/food/eat"),p($,"class","invisible"),p($,"href","/food/manage-food/update-food"),p(x,"class","invisible"),p(x,"href","/food/manage-food/download")},m(a,o){h(a,e,o),y[t].m(a,o),h(a,I,o),h(a,A,o),d(A,E),h(a,S,o),h(a,$,o),d($,N),h(a,k,o),h(a,x,o),d(x,F),P=!0},p(a,e){let o=t;(t=O(0,e))===o?y[t].p(a,e):(v(),m(y[o],1,1,()=>{y[o]=null}),u(),(b=y[t])||(b=y[t]=C[t](e)).c(),g(b,1),b.m(I.parentNode,I))},i(a){P||(g(b),P=!0)},o(a){m(b),P=!1},d(a){a&&f(e),y[t].d(a),a&&f(I),a&&f(A),a&&f(S),a&&f($),a&&f(k),a&&f(x)}}}function _(a,e,t){let o=!1,r=!0,s=2e3,n=[],l=[],c=0,i=0,f=0;function p(a){let e=n.filter(function(e,t,o){return e.name!==a.name});t("foodIAte",n=e),localStorage.setItem("ate",JSON.stringify(e)),d()}function h(a){let e=n.findIndex(e=>e.name===a.name);t("foodIAte",n[e].count=n[e].count+1,n),localStorage.setItem("ate",JSON.stringify(n)),d()}b(async()=>{o="true"===(o=localStorage.getItem("firstTime")||"true"),t("isGoal",r=!localStorage.getItem("isGoal")||"true"===localStorage.getItem("isGoal")),t("goal",s=localStorage.getItem("goal")||2e3),t("food",l=JSON.parse(localStorage.getItem("food"))||[]),t("foodIAte",n=JSON.parse(localStorage.getItem("ate"))||[]),o&&0===l.length&&(t("food",l=[{name:"cup milk 2%",protein:5,carbs:6,fat:7},{name:"cup oatmeal",protein:6,carbs:7.3,fat:7.2},{name:"egg",protein:6,carbs:0,fat:7.2},{name:"100g chicken breast",protein:20,carbs:3.2,fat:5.1},{name:"100g brown rice",protein:4,carbs:6.8,fat:4.7},{name:"100g japanese yams",protein:4,carbs:6.8,fat:4.7},{name:"avocado",protein:4,carbs:6.8,fat:4.7},{name:"olive oil",protein:2,carbs:3.8,fat:8},{name:"apple",protein:1,carbs:5.8,fat:3},{name:"cottage cheese",protein:1,carbs:5.8,fat:3},{name:"100g greek yugurt",protein:1,carbs:5.8,fat:3},{name:"1 tbsp peanut butter",protein:1,carbs:5.8,fat:3},{name:"100g salmon",protein:1,carbs:5.8,fat:3},{name:"100g steak",protein:1,carbs:5.8,fat:3},{name:"egg white",protein:1,carbs:5.8,fat:3},{name:"sardins",protein:1,carbs:5.8,fat:3},{name:"tuna can",protein:1,carbs:5.8,fat:3},{name:"tuna fresh",protein:1,carbs:5.8,fat:3},{name:"150g drum sticks",protein:1,carbs:5.8,fat:3},{name:"100g chicken thighs",protein:1,carbs:5.8,fat:3}]),localStorage.setItem("firstTime","false"),localStorage.setItem("food",JSON.stringify(l)),localStorage.setItem("recentFood",JSON.stringify(l))),d()});const d=a=>{t("protein",c=n.reduce(function(a,e){return a+e.protein*e.count},0)),t("carbs",i=n.reduce(function(a,e){return a+e.carbs*e.count},0)),t("fat",f=n.reduce(function(a,e){return a+e.fat*e.count},0))};let m,u;return a.$$.update=((a={protein:1,carbs:1,fat:1,goal:1,calories:1})=>{(a.protein||a.carbs||a.fat)&&t("calories",u=parseFloat(Number(4*c+4*i+9*f).toFixed(1))),(a.goal||a.calories)&&t("remaining",m=s-u<=0?"remaining":"")}),{isGoal:r,goal:s,foodIAte:n,food:l,protein:c,carbs:i,fat:f,handleClear:function(){localStorage.removeItem("ate"),t("protein",c=0),t("carbs",i=0),t("fat",f=0),t("foodIAte",n=[])},handleDelete:p,handlePlus:h,remaining:m,calories:u,click_handler:({i:a})=>p(n[a]),click_handler_1:({i:a})=>h(n[a])}}export default class extends a{constructor(a){super(),e(this,a,_,V,t,{})}}