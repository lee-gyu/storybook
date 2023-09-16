import{j as i,a as e}from"./jsx-runtime-e43ccb36.js";import{D as o,a as s,L as a}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const u={title:"JS Components/DatePicker"},r=()=>i(o,{children:[e(s,{children:"Disabled"}),i("p",{children:[e("code",{children:"checkbox"})," 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, ",e("code",{children:"disabled"})," 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다."]}),e(a,{fixedHeight:400,html:e("div",{className:"input"}),code:`
import { IRDatePicker } from "./dist/index.js";

const datePicker = new IRDatePicker({
    div: document.querySelector(".input"),
    checkbox: true,
    disabled: true
})`})]});var t,c,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const D=["Disabled"];export{r as Disabled,D as __namedExportsOrder,u as default};
//# sourceMappingURL=datePicker.disabled.stories-811c2f54.js.map
