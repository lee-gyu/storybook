import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as c,a as i,L as r}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const a={title:"JS Components/Select"},t=()=>e.jsxs(c,{children:[e.jsx(i,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e.jsx(r,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," 비활성화"]}),e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{children:"한국어"}),e.jsx("option",{children:"English"})]})]}),code:`
import { IRSelect } from "./dist/index.js";

const select = new IRSelect({
    contextElement: document.querySelector("select"),
    disabled: true
});

const input = document.querySelector("input");

input.checked = true;
input.onchange = () => select.disabled = input.checked;
`})]});t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var n,s,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const m=["Disabled"];export{t as Disabled,m as __namedExportsOrder,a as default};
