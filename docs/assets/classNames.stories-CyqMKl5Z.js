import{M as C}from"./chunk-HLWAVYOI-CMxTYgQu.js";import{a as t,j as n,F as S}from"./jsx-runtime-CjohWU4o.js";import{r as i}from"./index-CBqU2yxZ.js";import"./ko-yEIh7i5Q.js";import{useMDXComponents as y}from"./index-DI5IigMn.js";import"./iframe-DwVS7Z_t.js";import"../sb-preview/runtime.js";import"./react-18-Bym-zv4b.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_J8iUie.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const _=(()=>{let e=null;return()=>e||(e=document.createElement("textarea"),e.style.position="fixed",e.style.opacity="0",e.style.top="0",e.style.left="0",e.style.zIndex="-1",e.style.outline="0 none",e.style.overflow="hidden",e.setAttribute("tabindex","-1"),e.setAttribute("autocomplete","off"),e.setAttribute("wrap","hard"),e)})(),f={async check(e){return(await navigator.permissions.query({name:e})).state},getText(){return navigator.clipboard.readText()},read(){return navigator.clipboard.read()},setText(e){const r=_();document.body.appendChild(r),r.focus(),r.value=e||"\0",r.select(),document.execCommand("copy"),r.remove()}},g=({classList:e})=>{const[r,d]=i.useState(""),[m,o]=i.useState(e),a=s=>{d(s.currentTarget.value),o(e.filter(p=>p.includes(s.currentTarget.value)))},c=s=>{f.setText(s),alert("데이터가 복사되었습니다.")};return n("div",{className:"overflow--auto",children:[n("div",{className:"py--md ir-sticky ir-top-0 ir-bg-white z-index--1",children:[t("input",{className:"input__native",placeholder:"검색어 입력",value:r,onChange:a}),n("h6",{className:"mt--sm",children:["검색결과: ",m.length,"건"]})]}),t("div",{className:"table table--border",style:{maxHeight:600},children:n("table",{title:"클릭하여 복사하기",className:"ir-w-full",children:[t("colgroup",{children:t("col",{style:{width:"100%"}})}),t("thead",{children:t("tr",{children:t("th",{children:"Class Selector"})})}),t("tbody",{children:m.map(s=>t("tr",{onClick:()=>c(s),children:n("td",{children:[s," ",t("i",{className:"ir-icon ir-icon--copy"})," "]})},s))})]})})]})},x="./dist/css/ir-style-common.css",b=/(\.[a-z][a-z-_\d]+)/gi,N=["^\\.woff2","^\\.css","^\\.com","^\\.CodeMirror","^\\.cm"],w=5e3,T=i.lazy(()=>new Promise((e,r)=>{fetch(x).then(async d=>{const o=(await d.text()).match(b);if(!o)throw new Error("no css classes");const a=Array(w),c=new Set;a.length=0,o.filter(s=>N.every(p=>!s.match(p))).forEach(s=>{c.has(s)||(c.add(s),a.push(s))}),a.sort(),e({default:()=>t(g,{classList:a})})})})),u=()=>t(i.Suspense,{fallback:t("p",{children:"Loading..."}),children:t(T,{})});try{u.displayName="CSSClassNames",u.__docgenInfo={description:"",displayName:"CSSClassNames",props:{}}}catch{}function h(e){const r=Object.assign({h1:"h1"},y(),e.components);return n(S,{children:[t(C,{title:"CSS/ClassNames"}),`
`,t(r.h1,{id:"css-class-references",children:"CSS Class References"}),`
`,t(u,{})]})}function v(e={}){const{wrapper:r}=Object.assign({},y(),e.components);return r?t(r,{...e,children:t(h,{...e})}):h(e)}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const l={title:"CSS/ClassNames",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:v};const X=["__page"];export{X as __namedExportsOrder,E as __page,l as default};