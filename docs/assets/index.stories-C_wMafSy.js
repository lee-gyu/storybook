import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as e,L as o}from"./version-tag-B2yXrdOr.js";import"./iframe-BRPaCIBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL7yNlIg.js";const t=`import { DisplayAlias, solidJS } from "@innorules/ir-style/lib/esm/solid.js";

const cleanup = solidJS.render(
    () => DisplayAlias( {
        displayOptions: {
            serverAlias: "Server - test",
            fontColor: "blue",
            // fontSize: "15px",
            // icon: "https://cm.innorules.com/gb5/img/favicon.png",
        },
    } ),
    document.getElementById( "display-alias" ),
);

btn_cleanup.onclick = () => cleanup();`,a=`<button id="btn_cleanup"
    class="button mb--md">cleanup</button>
<div id="display-alias"></div>`,m={title:"SolidJS Components/DisplayAlias"};function i(){return s.jsxs(n,{children:[s.jsx(e,{children:"DisplayAlias"}),s.jsx("p",{children:"항목의 별칭을 시각적으로 보여주는 UI 컴포넌트"}),s.jsx(o,{fixedHeight:200,htmlRaw:a,code:t})]})}i.__docgenInfo={description:"",methods:[],displayName:"DisplayAlias"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`function DisplayAlias() {
  return <Doc>
            <DocTitle>DisplayAlias</DocTitle>
            <p>항목의 별칭을 시각적으로 보여주는 UI 컴포넌트</p>
            <LiveEditor fixedHeight={200} htmlRaw={htmlRaw} code={code} />
        </Doc>;
}`,...i.parameters?.docs?.source}}};const u=["DisplayAlias"];export{i as DisplayAlias,u as __namedExportsOrder,m as default};
