import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { DisplayAlias, solidJS } from "@innorules/ir-style/lib/esm/solid.js";

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

btn_cleanup.onclick = () => cleanup();`})),c,l=e((()=>{c=`<button id="btn_cleanup"
    class="button mb--md">cleanup</button>
<div id="display-alias"></div>`}));function u(){return(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`DisplayAlias`}),(0,d.jsx)(`p`,{children:`항목의 별칭을 시각적으로 보여주는 UI 컴포넌트`}),(0,d.jsx)(r,{fixedHeight:200,htmlRaw:c,code:o})]})}var d,f,p;e((()=>{s(),l(),i(),d=a(),f={title:`SolidJS Components/DisplayAlias`},u.__docgenInfo={description:``,methods:[],displayName:`DisplayAlias`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`function DisplayAlias() {
  return <Doc>
            <DocTitle>DisplayAlias</DocTitle>
            <p>항목의 별칭을 시각적으로 보여주는 UI 컴포넌트</p>
            <LiveEditor fixedHeight={200} htmlRaw={htmlRaw} code={code} />
        </Doc>;
}`,...u.parameters?.docs?.source}}},p=[`DisplayAlias`]}))();export{u as DisplayAlias,p as __namedExportsOrder,f as default};