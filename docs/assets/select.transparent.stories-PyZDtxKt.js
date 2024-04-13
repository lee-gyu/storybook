import{j as t,a as e}from"./jsx-runtime-CjohWU4o.js";import{s as c}from"./index-B42qYirq.js";import{D as a,a as i,L as l}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const D={title:"JS Components/Select"},n=()=>t(a,{children:[e(i,{children:"Transparent"}),t("p",{children:[e("code",{children:"select--transparent"})," class를 추가하여 배경을 투명하게 조정할 수 있습니다."]}),e(l,{fixedHeight:400,html:e("div",{style:{backgroundColor:"black",height:300,padding:20},children:t("select",{className:c,style:{display:"none"},children:[e("option",{children:"한국어"}),e("option",{children:"English"})]})}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                `})]});var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Transparent</DocTitle>\r
            <p><code>select--transparent</code> class를 추가하여 배경을 투명하게 조정할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<div style={{
      backgroundColor: "black",
      height: 300,
      padding: 20
    }}>\r
                        <select className={selectTransparent} style={{
        display: "none"
      }}>\r
                            <option>한국어</option>\r
                            <option>English</option>\r
                        </select>\r
                    </div>} code={\`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                \`} />\r
\r
        </Doc>;
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const g=["Transparent"];export{n as Transparent,g as __namedExportsOrder,D as default};
