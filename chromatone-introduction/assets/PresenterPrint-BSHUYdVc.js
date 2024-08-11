import{d as p,u as h,a as u,c as _,b as f,t as g,e as v,r as y,_ as x,f as r,g as e,h as a,F as b,i as N,n as k,o as n,j as P,k as V,l as w}from"./index-xPZGpNrS.js";import{N as S}from"./NoteDisplay-DzuyE344.js";const D=p({__name:"PresenterPrint",setup(d,{expose:l}){l(),h(`
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
`),u({title:`Notes - ${_.title}`});const t={slidesWithNote:f(()=>y.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!=="")),get configs(){return _},get themeVars(){return g},get total(){return v},NoteDisplay:S};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),L={class:"m-4"},T={class:"mb-10"},W={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},C=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"};function M(d,l,m,t,s,i){return n(),r("div",{id:"page-root",style:k(t.themeVars)},[e("div",L,[e("div",T,[e("h1",W,a(t.configs.title),1),e("div",j,a(new Date().toLocaleString()),1)]),(n(!0),r(b,null,N(t.slidesWithNote,(o,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",z,a(o==null?void 0:o.no)+"/"+a(t.total),1),P(" "+a(o==null?void 0:o.title)+" ",1),C])]),V(t.NoteDisplay,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<t.slidesWithNote.length-1?(n(),r("hr",F)):w("v-if",!0)]))),128))])],4)}const O=x(D,[["render",M],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.41_typescript@5.5.4_vite@5.4.0/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{O as default};
