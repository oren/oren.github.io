import{S as e,i as a,s as l,a as o,e as n,t,h as s,b as u,d as i,g as c,j as r,k as g,P as h,m,o as p,R as d,n as _,T as v,O as f}from"./index.43b7046a.js";function b(e){let a,l,o;return{c(){a=t("Calories Goal:\n\t\t"),l=n("input"),this.h()},l(e){a=r(e,"Calories Goal:\n\t\t"),l=u(e,"INPUT",{type:!0,name:!0,value:!0}),this.h()},h(){g(l,"type","checkbox"),g(l,"name","goal"),l.value="no",o=h(l,"change",e.toggleGoal)},m(e,o){m(e,a,o),m(e,l,o)},p:_,d(e){e&&c(a),e&&c(l),o()}}}function G(e){let a,l,o;return{c(){a=t("Calories Goal:\n\t\t"),l=n("input"),this.h()},l(e){a=r(e,"Calories Goal:\n\t\t"),l=u(e,"INPUT",{type:!0,name:!0,checked:!0,value:!0}),this.h()},h(){g(l,"type","checkbox"),g(l,"name","goal"),l.checked=!0,l.value="yes",o=h(l,"change",e.toggleGoal)},m(e,o){m(e,a,o),m(e,l,o)},p:_,d(e){e&&c(a),e&&c(l),o()}}}function I(e){let a,l,f,I,$,y,x,E,k,C,S,P,T,L,N,A,U,B,O,j,q,z,D,F,V,w,H,R,J,K,M;function Q(e,a){return a.isGoal?G:b}let W=Q(0,e),X=W(e);return{c(){a=o(),l=n("div"),X.c(),f=o(),I=n("input"),y=o(),x=n("div"),E=n("label"),k=t("Food Columns:"),C=o(),S=n("label"),P=n("input"),T=t("1"),L=o(),N=n("label"),A=n("input"),U=t("2"),B=o(),O=n("label"),j=n("input"),q=t("3"),z=o(),D=n("h2"),F=t("About"),V=o(),w=n("p"),H=t("This is a simple and fast calorie counter app. If you have feature request contact me: "),R=n("a"),J=t("orengolan@gmail.com"),K=n("p"),this.h()},l(e){a=s(e),l=u(e,"DIV",{});var o=i(l);X.l(o),f=s(o),I=u(o,"INPUT",{class:!0,type:!0,name:!0,disabled:!0,maxlength:!0,size:!0}),o.forEach(c),y=s(e),x=u(e,"DIV",{});var n=i(x);E=u(n,"LABEL",{});var t=i(E);k=r(t,"Food Columns:"),t.forEach(c),C=s(n),S=u(n,"LABEL",{});var g=i(S);P=u(g,"INPUT",{type:!0,value:!0}),T=r(g,"1"),g.forEach(c),L=s(n),N=u(n,"LABEL",{});var h=i(N);A=u(h,"INPUT",{type:!0,value:!0}),U=r(h,"2"),h.forEach(c),B=s(n),O=u(n,"LABEL",{});var m=i(O);j=u(m,"INPUT",{type:!0,value:!0}),q=r(m,"3"),m.forEach(c),n.forEach(c),z=s(e),D=u(e,"H2",{class:!0});var p=i(D);F=r(p,"About"),p.forEach(c),V=s(e),w=u(e,"P",{});var d=i(w);H=r(d,"This is a simple and fast calorie counter app. If you have feature request contact me: "),R=u(d,"A",{href:!0});var _=i(R);J=r(_,"orengolan@gmail.com"),_.forEach(c),d.forEach(c),K=u(e,"P",{}),i(K).forEach(c),this.h()},h(){document.title="Settings",g(I,"class","w-20 bg-blue-200"),g(I,"type","text"),g(I,"name","goal-text"),I.disabled=$=e.isGoal?"":"disabled",g(I,"maxlength","4"),g(I,"size","3"),g(P,"type","radio"),P.__value="100%",P.value=P.__value,e.$$binding_groups[0].push(P),g(A,"type","radio"),A.__value="50% 50%",A.value=A.__value,e.$$binding_groups[0].push(A),g(j,"type","radio"),j.__value="30% 30% 30%",j.value=j.__value,e.$$binding_groups[0].push(j),g(D,"class","text-xl mt-4"),g(R,"href","mailto:orengolan@gmail.com?subject=I love the calorie counter app!"),M=[h(I,"input",e.input0_input_handler),h(I,"keyup",e.goalChange),h(P,"change",e.input1_change_handler),h(P,"change",e.columnChange),h(A,"change",e.input2_change_handler),h(A,"change",e.columnChange),h(j,"change",e.input3_change_handler),h(j,"change",e.columnChange)]},m(o,n){m(o,a,n),m(o,l,n),X.m(l,null),p(l,f),p(l,I),d(I,e.goal),m(o,y,n),m(o,x,n),p(x,E),p(E,k),p(x,C),p(x,S),p(S,P),P.checked=P.__value===e.columns,p(S,T),p(x,L),p(x,N),p(N,A),A.checked=A.__value===e.columns,p(N,U),p(x,B),p(x,O),p(O,j),j.checked=j.__value===e.columns,p(O,q),m(o,z,n),m(o,D,n),p(D,F),m(o,V,n),m(o,w,n),p(w,H),p(w,R),p(R,J),m(o,K,n)},p(e,a){W===(W=Q(0,a))&&X?X.p(e,a):(X.d(1),(X=W(a))&&(X.c(),X.m(l,f))),e.isGoal&&$!==($=a.isGoal?"":"disabled")&&(I.disabled=$),e.goal&&I.value!==a.goal&&d(I,a.goal),e.columns&&(P.checked=P.__value===a.columns),e.columns&&(A.checked=A.__value===a.columns),e.columns&&(j.checked=j.__value===a.columns)},i:_,o:_,d(o){o&&c(a),o&&c(l),X.d(),o&&c(y),o&&c(x),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(P),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(A),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(j),1),o&&c(z),o&&c(D),o&&c(V),o&&c(w),o&&c(K),v(M)}}}function $(e,a,l){let o=!1,n=2e3,t="50% 50%";f(async()=>{l("isGoal",o=localStorage.getItem("isGoal")||!1),l("goal",n=localStorage.getItem("goal")||2e3),l("columns",t=localStorage.getItem("columns")||"50% 50%")});return{isGoal:o,goal:n,columns:t,toggleGoal:function(){if(o)return l("isGoal",o=!1),void localStorage.removeItem("isGoal");l("isGoal",o=!0),localStorage.setItem("isGoal",!0)},goalChange:function(){if(""===n||0===Number(n))return localStorage.removeItem("goal"),localStorage.removeItem("isGoal"),void l("isGoal",o=!1);localStorage.setItem("goal",Number(n))},columnChange:function(){localStorage.setItem("columns",t)},input0_input_handler:function(){n=this.value,l("goal",n)},input1_change_handler:function(){t=this.__value,l("columns",t)},input2_change_handler:function(){t=this.__value,l("columns",t)},input3_change_handler:function(){t=this.__value,l("columns",t)},$$binding_groups:[[]]}}export default class extends e{constructor(e){super(),a(this,e,$,I,l,{})}}