import{S as t,i as s,s as o,a,e,t as n,j as i,b as r,d as p,f as l,h as c,k as h,l as u,m as f,x as m,n as d}from"./index.52cd5646.js";function x(t){let s,o,x,j,g,v,H=t.post.title+"",b=t.post.html+"";return document.title=s=t.post.title,{c(){o=a(),x=e("h1"),j=n(H),g=a(),v=e("div"),this.h()},l(t){o=i(t),x=r(t,"H1",{});var s=p(x);j=l(s,H),s.forEach(c),g=i(t),v=r(t,"DIV",{class:!0}),p(v).forEach(c),this.h()},h(){h(v,"class","content svelte-eh7lxs")},m(t,s){u(t,o,s),u(t,x,s),f(x,j),u(t,g,s),u(t,v,s),v.innerHTML=b},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&H!==(H=o.post.title+"")&&m(j,H),t.post&&b!==(b=o.post.html+"")&&(v.innerHTML=b)},i:d,o:d,d(t){t&&c(o),t&&c(x),t&&c(g),t&&c(v)}}}async function j({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function g(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,g,x,o,{post:0})}}export{j as preload};