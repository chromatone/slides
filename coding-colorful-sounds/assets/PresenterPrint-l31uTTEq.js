import{d as _,u as d,a as p,c as m,b as h,r as u,e as a,f as t,t as s,g as l,F as f,h as v,n as g,i as x,o as n,j as y,k as b,l as k,m as N,_ as w}from"./index-uuIAzKt1.js";import{N as P}from"./NoteDisplay-bS0bFxBf.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const c=h(()=>u.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",{id:"page-root",style:g(l(x))},[t("div",V,[t("div",L,[t("h1",S,s(l(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(c.value,(e,i)=>(n(),a("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(n(),a("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/slides.chromatone.center/slides.chromatone.center/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.33_typescript@5.3.3_vite@5.0.11/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
