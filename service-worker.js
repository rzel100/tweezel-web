if(!self.define){let e,l={};const t=(t,r)=>(t=new URL(t+".js",r).href,l[t]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=l,document.head.appendChild(e)}else e=t,importScripts(t),l()})).then((()=>{let e=l[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let s={};const o=e=>t(e,n),u={module:{uri:n},exports:s,require:o};l[n]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(i(...e),s)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tweezel"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/tweezel-web/1e75169c4cb4e109.txt",revision:null},{url:"/tweezel-web/1f9a610d783297bd.txt",revision:null},{url:"/tweezel-web/295473832eb146c1.txt",revision:null},{url:"/tweezel-web/452261ecc54653bf.txt",revision:null},{url:"/tweezel-web/a328849ba54241ad.txt",revision:null},{url:"/tweezel-web/a7c3d2dedda99c3c.txt",revision:null},{url:"/tweezel-web/css/app.f265cf50.css",revision:null},{url:"/tweezel-web/e164277f2de50930.txt",revision:null},{url:"/tweezel-web/ebaefe6fcddf90ed.txt",revision:null},{url:"/tweezel-web/index.html",revision:"399f956708a4da420e4c49055264d187"},{url:"/tweezel-web/js/250.57291b92.js",revision:null},{url:"/tweezel-web/js/app.861f9bad.js",revision:null},{url:"/tweezel-web/js/chunk-vendors.eb290c48.js",revision:null},{url:"/tweezel-web/manifest.json",revision:"bbb4f310a1d3cf587fe9c9e2da3203e9"},{url:"/tweezel-web/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
