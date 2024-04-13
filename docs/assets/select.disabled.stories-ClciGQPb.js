import{j as t,a as e,F as i}from"./jsx-runtime-CjohWU4o.js";import{D as l,a as s,L as d}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const D={title:"JS Components/Select"},n=()=>t(l,{children:[e(s,{children:"Disabled"}),t("p",{children:[e("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e(d,{fixedHeight:400,html:t(i,{children:[t("label",{children:[e("input",{type:"checkbox"})," 비활성화"]}),t("select",{style:{display:"none"},children:[e("option",{children:"한국어"}),e("option",{children:"English"})]})]}),code:`
import { IRSelect } from "./dist/index.js";

const select = new IRSelect({
    contextElement: document.querySelector("select"),
    disabled: true
});

const input = document.querySelector("input");

input.checked = true;
input.onchange = () => select.disabled = input.checked;
`})]});var c,o,r;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Disabled</DocTitle>\r
            <p><code>disabled</code> 속성을 이용하여 비활성화 합니다.</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <label>\r
                            <input type="checkbox" /> 비활성화\r
                        </label>\r
                        <select style={{
        display: "none"
      }}>\r
                            <option>한국어</option>\r
                            <option>English</option>\r
                        </select>\r
                    </>} code={\`
import { IRSelect } from "./dist/index.js";

const select = new IRSelect({
    contextElement: document.querySelector("select"),
    disabled: true
});

const input = document.querySelector("input");

input.checked = true;
input.onchange = () => select.disabled = input.checked;
\`} />\r
\r
        </Doc>;
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const b=["Disabled"];export{n as Disabled,b as __namedExportsOrder,D as default};
