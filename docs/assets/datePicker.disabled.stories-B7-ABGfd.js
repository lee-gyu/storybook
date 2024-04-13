import{j as r,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as o,a as d,L as C}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const m={title:"JS Components/DatePicker"},u=()=>r(o,{children:[e(d,{children:"Disabled"}),r("p",{children:[e("code",{children:"checkbox"})," 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, ",e("code",{children:"disabled"})," 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다."]}),e(C,{fixedHeight:400,html:e("div",{className:"input"}),code:`
import { IRDatePicker } from "./dist/index.js";

const datePicker = new IRDatePicker({
    div: document.querySelector(".input"),
    checkbox: true,
    disabled: true
})`})]});var i,t,c;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(c=(t=u.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const p=["Disabled"];export{u as Disabled,p as __namedExportsOrder,m as default};
