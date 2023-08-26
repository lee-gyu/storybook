import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{D as i,a as c,L as a}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const h={title:"JS Components/DatePicker"},t=()=>n(i,{children:[e(c,{children:"Event"}),n("p",{children:[e("code",{children:"onSelect"})," 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다."]}),n("p",{children:[e("code",{children:"onChange"})," 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다."]}),e(a,{fixedHeight:400,html:e("div",{id:"date_picker",style:{width:200}}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker"),
    onSelect: (date) => alert(date),
    onChange: (value) => console.log(value)
})
`})]});var o,r,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const v=["Event"];export{t as Event,v as __namedExportsOrder,h as default};
//# sourceMappingURL=datePicker.event.stories-18503fb1.js.map
