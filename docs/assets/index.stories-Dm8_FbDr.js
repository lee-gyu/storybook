import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as o,a as t,L as l}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const a=`import { DisplayAlias, solidJS } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
const cleanup = solidJS.render(\r
    () => DisplayAlias( {\r
        displayOptions: {\r
            serverAlias: "Server - test",\r
            color: "green",\r
            fontColor: "blue",\r
            // fontSize: "15px",\r
            // icon: "https://cm.innorules.com/gb5/img/favicon.png",\r
        },\r
    } ),\r
    document.getElementById( "display-alias" ),\r
);\r
\r
btn_cleanup.onclick = () => cleanup();`,c=`<button id="btn_cleanup"\r
    class="button mb--md">cleanup</button>\r
<div id="display-alias"></div>`,D={title:"SolidJS Components/DisplayAlias"};function i(){return n.jsxs(o,{children:[n.jsx(t,{children:"DisplayAlias"}),n.jsx("p",{children:"항목의 별칭을 시각적으로 보여주는 UI 컴포넌트"}),n.jsx(l,{fixedHeight:200,htmlRaw:c,code:a})]})}i.__docgenInfo={description:"",methods:[],displayName:"DisplayAlias"};var s,r,e;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`function DisplayAlias() {
  return <Doc>\r
            <DocTitle>DisplayAlias</DocTitle>\r
            <p>항목의 별칭을 시각적으로 보여주는 UI 컴포넌트</p>\r
            <LiveEditor fixedHeight={200} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(e=(r=i.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const y=["DisplayAlias"];export{i as DisplayAlias,y as __namedExportsOrder,D as default};
