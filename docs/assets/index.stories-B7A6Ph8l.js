import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{D as t,a,L as l}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const r=`import { DisplayAlias, solidJS } from "@innorules/ir-style/lib/esm/solid.js";

const cleanup = solidJS.render(
    () => DisplayAlias( {
        displayOptions: {
            serverAlias: "server - test",
            color: "green",
            // icon: "https://cm.innorules.com/gb5/img/favicon.png",
        },
    } ),
    document.getElementById( "display-alias" ),
);

btn_cleanup.onclick = () => cleanup();`,c=`<button id="btn_cleanup"
    class="button mb--md">cleanup</button>
<div id="display-alias"></div>`,D={title:"SolidJS Components/DisplayAlias"};function s(){return i.jsxs(t,{children:[i.jsx(a,{children:"DisplayAlias"}),i.jsx("p",{children:"항목의 별칭을 시각적으로 보여주는 UI 컴포넌트"}),i.jsx(l,{fixedHeight:200,htmlRaw:c,code:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"DisplayAlias"};var n,e,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`function DisplayAlias() {
  return <Doc>\r
            <DocTitle>DisplayAlias</DocTitle>\r
            <p>항목의 별칭을 시각적으로 보여주는 UI 컴포넌트</p>\r
            <LiveEditor fixedHeight={200} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(o=(e=s.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const y=["DisplayAlias"];export{s as DisplayAlias,y as __namedExportsOrder,D as default};
