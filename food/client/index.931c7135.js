import{S as t,i as s,s as e,e as o,t as l,b as r,d as n,f as a,h,k as c,l as p,m as f,x as i,a as u,j as g,n as d,I as m}from"./index.52cd5646.js";function x(t,s,e){const o=Object.create(t);return o.post=s[e],o}function b(t){let s,e,u,g,d=t.post.title+"";return{c(){s=o("li"),e=o("a"),u=l(d),this.h()},l(t){s=r(t,"LI",{});var o=n(s);e=r(o,"A",{rel:!0,href:!0});var l=n(e);u=a(l,d),l.forEach(h),o.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t.post.slug)},m(t,o){p(t,s,o),f(s,e),f(e,u)},p(t,s){t.posts&&d!==(d=s.post.title+"")&&i(u,d),t.posts&&g!==(g="blog/"+s.post.slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,i,j,v,E=t.posts,I=[];for(let s=0;s<E.length;s+=1)I[s]=b(x(t,E,s));return{c(){s=u(),e=o("h1"),i=l("Recent posts"),j=u(),v=o("ul");for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){s=g(t),e=r(t,"H1",{});var o=n(e);i=a(o,"Recent posts"),o.forEach(h),j=g(t),v=r(t,"UL",{class:!0});var l=n(v);for(let t=0;t<I.length;t+=1)I[t].l(l);l.forEach(h),this.h()},h(){document.title="Blog",c(v,"class","svelte-6txae3")},m(t,o){p(t,s,o),p(t,e,o),f(e,i),p(t,j,o),p(t,v,o);for(let t=0;t<I.length;t+=1)I[t].m(v,null)},p(t,s){if(t.posts){let e;for(E=s.posts,e=0;e<E.length;e+=1){const o=x(s,E,e);I[e]?I[e].p(t,o):(I[e]=b(o),I[e].c(),I[e].m(v,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=E.length}},i:d,o:d,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(v),m(I,t)}}}function v({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function E(t,s,e){let{posts:o}=s;return t.$set=(t=>{"posts"in t&&e("posts",o=t.posts)}),{posts:o}}export default class extends t{constructor(t){super(),s(this,t,E,j,e,{posts:0})}}export{v as preload};