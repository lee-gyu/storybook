import{M as C}from"./chunk-S4VUQJ4A-7e8e2d53.js";import{a as t,j as a,F as S}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./timePicker.elements-3c8a0aec.js";import{u as _}from"./index-2ef8b458.js";import"./iframe-922459ab.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";const y=(()=>{let e=null;return()=>e||(e=document.createElement("textarea"),e.style.position="fixed",e.style.opacity="0",e.style.top="0",e.style.left="0",e.style.zIndex="-1",e.style.outline="0 none",e.style.overflow="hidden",e.setAttribute("tabindex","-1"),e.setAttribute("autocomplete","off"),e.setAttribute("wrap","hard"),e)})(),f={async check(e){return(await navigator.permissions.query({name:e})).state},getText(){return navigator.clipboard.readText()},read(){return navigator.clipboard.read()},setText(e){const r=y();document.body.appendChild(r),r.focus(),r.value=e,r.select(),document.execCommand("cut"),r.remove()}};const g=({classList:e})=>{const[r,d]=i.useState(""),[m,o]=i.useState(e),n=s=>{d(s.currentTarget.value),o(e.filter(p=>p.includes(s.currentTarget.value)))},c=s=>{f.setText(s),alert("데이터가 복사되었습니다.")};return a("div",{children:[t("div",{className:"mb--md",children:t("input",{className:"input__native",placeholder:"검색어 입력",value:r,onChange:n})}),a("h3",{children:["검색결과: ",m.length,"건"]}),t("div",{className:"table table--border",style:{maxHeight:600},children:a("table",{children:[t("thead",{children:a("tr",{children:[t("th",{children:"Class Selector"}),t("th",{children:"설명"})]})}),t("tbody",{children:m.map(s=>a("tr",{title:"클릭하여 복사하기",onClick:()=>c(s),children:[a("td",{children:[s," ",t("i",{className:"ir-icon ir-icon--copy"})," "]}),t("td",{})]},s))})]})})]})},x="./dist/css/ir-css-ui.css",b=/(\.[a-z][a-z-_\d]+)/gi,T=["^\\.woff2","^\\.css","^\\.com","^\\.CodeMirror","^\\.cm"],N=5e3,v=i.lazy(()=>new Promise((e,r)=>{fetch(x).then(async d=>{const o=(await d.text()).match(b);if(!o)throw new Error("no css classes");const n=Array(N),c=new Set;n.length=0,o.filter(s=>T.every(p=>!s.match(p))).forEach(s=>{c.has(s)||(c.add(s),n.push(s))}),n.sort(),e({default:()=>t(g,{classList:n})})})})),u=()=>t(i.Suspense,{fallback:t("p",{children:"Loading..."}),children:t(v,{})});try{u.displayName="CSSClassNames",u.__docgenInfo={description:"",displayName:"CSSClassNames",props:{}}}catch{}function h(e){const r=Object.assign({h1:"h1"},_(),e.components);return a(S,{children:[t(C,{title:"CSS/ClassNames"}),`
`,t(r.h1,{id:"css-class-references",children:"CSS Class References"}),`
`,t(u,{})]})}function E(e={}){const{wrapper:r}=Object.assign({},_(),e.components);return r?t(r,{...e,children:t(h,{...e})}):h(e)}const w=()=>{throw new Error("Docs-only story")};w.parameters={docsOnly:!0};const l={title:"CSS/ClassNames",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:E};const q=["__page"];export{q as __namedExportsOrder,w as __page,l as default};
//# sourceMappingURL=classNames.stories-32a0f60c.js.map
