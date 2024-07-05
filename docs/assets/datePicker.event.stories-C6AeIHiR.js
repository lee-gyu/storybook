import{j as u,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as i,a as d,L as C}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const D={title:"JS Components/DatePicker"},t=()=>u(i,{children:[e(d,{children:"Event"}),u("p",{children:[e("code",{children:"onSelect"})," 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다."]}),u("p",{children:[e("code",{children:"onChange"})," 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다."]}),e(C,{fixedHeight:400,html:e("div",{id:"date_picker",style:{width:200}}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker"),
    onSelect: (date) => alert(date),
    onChange: (value) => console.log(value)
})
`})]});var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Event</DocTitle>\r
            <p><code>onSelect</code> 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다.</p>\r
            <p><code>onChange</code> 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<div id="date_picker" style={{
      width: 200
    }}></div>} code={\`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker"),
    onSelect: (date) => alert(date),
    onChange: (value) => console.log(value)
})
\`} />\r
        </Doc>;
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const p=["Event"];export{t as Event,p as __namedExportsOrder,D as default};
