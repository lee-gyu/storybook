import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as o,a as s,L as c}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const m={title:"JS Components/IRDatePicker"},i=()=>e.jsxs(o,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"checkbox"})," 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, ",e.jsx("code",{children:"disabled"})," 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다."]}),e.jsx(c,{fixedHeight:400,html:e.jsx("div",{className:"input"}),code:`
import { IRDatePicker } from "./dist/index.js";

const datePicker = new IRDatePicker({
    div: document.querySelector(".input"),
    checkbox: true,
    disabled: true
})`})]});i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var r,t,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Disabled</DocTitle>\r
            <p><code>checkbox</code> 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, <code>disabled</code> 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<div className="input"></div>} code={\`
import { IRDatePicker } from "./dist/index.js";

const datePicker = new IRDatePicker({
    div: document.querySelector(".input"),
    checkbox: true,
    disabled: true
})\`} />\r
        </Doc>;
}`,...(d=(t=i.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const p=["Disabled"];export{i as Disabled,p as __namedExportsOrder,m as default};
