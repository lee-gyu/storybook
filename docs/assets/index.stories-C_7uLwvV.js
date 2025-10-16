import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as r,L as e}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const o=`import { DisplayAlias, solidJS } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
const cleanup = solidJS.render(\r
    () => DisplayAlias( {\r
        displayOptions: {\r
            serverAlias: "Server - test",\r
            fontColor: "blue",\r
            // fontSize: "15px",\r
            // icon: "https://cm.innorules.com/gb5/img/favicon.png",\r
        },\r
    } ),\r
    document.getElementById( "display-alias" ),\r
);\r
\r
btn_cleanup.onclick = () => cleanup();`,t=`<button id="btn_cleanup"\r
    class="button mb--md">cleanup</button>\r
<div id="display-alias"></div>`,m={title:"SolidJS Components/DisplayAlias"};function i(){return s.jsxs(n,{children:[s.jsx(r,{children:"DisplayAlias"}),s.jsx("p",{children:"항목의 별칭을 시각적으로 보여주는 UI 컴포넌트"}),s.jsx(e,{fixedHeight:200,htmlRaw:t,code:o})]})}i.__docgenInfo={description:"",methods:[],displayName:"DisplayAlias"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`function DisplayAlias() {
  return <Doc>\r
            <DocTitle>DisplayAlias</DocTitle>\r
            <p>항목의 별칭을 시각적으로 보여주는 UI 컴포넌트</p>\r
            <LiveEditor fixedHeight={200} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...i.parameters?.docs?.source}}};const u=["DisplayAlias"];export{i as DisplayAlias,u as __namedExportsOrder,m as default};
