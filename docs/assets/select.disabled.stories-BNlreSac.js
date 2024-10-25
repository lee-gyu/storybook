import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as o,a as i,L as r}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const a={title:"JS Components/IRSelect"},n=()=>e.jsxs(o,{children:[e.jsx(i,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e.jsx(r,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," 비활성화"]}),e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{children:"한국어"}),e.jsx("option",{children:"English"})]})]}),code:`
import { IRSelect } from "./dist/index.js";

const select = new IRSelect({
    contextElement: document.querySelector("select"),
    disabled: true
});

const input = document.querySelector("input");

input.checked = true;
input.onchange = () => select.disabled = input.checked;
`})]});n.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var t,s,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Disabled"];export{n as Disabled,u as __namedExportsOrder,a as default};
