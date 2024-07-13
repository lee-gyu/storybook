import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as d,a as o,L as s}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const D={title:"JS Components/DatePicker"},u=()=>e.jsxs(d,{children:[e.jsx(o,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"checkbox"})," 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, ",e.jsx("code",{children:"disabled"})," 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다."]}),e.jsx(s,{fixedHeight:400,html:e.jsx("div",{className:"input"}),code:`
import { IRDatePicker } from "./dist/index.js";

const datePicker = new IRDatePicker({
    div: document.querySelector(".input"),
    checkbox: true,
    disabled: true
})`})]});u.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var i,r,t;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(t=(r=u.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const l=["Disabled"];export{u as Disabled,l as __namedExportsOrder,D as default};
