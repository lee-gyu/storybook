import{j as n,a as t}from"./jsx-runtime-d057ca55.js";import{D as r,a as s,L as c}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const l={title:"JS Components/DatePicker"},e=()=>n(r,{children:[t(s,{children:"Min-Max 설정"}),n("p",{children:[t("code",{children:"minDate"}),", ",t("code",{children:"maxDate"}),"를 지정하여 선택 가능한 데이터 범위를 지정합니다."]}),t(c,{fixedHeight:400,html:t("div",{id:"date_picker"}),code:`
import { IRDatePicker } from "./dist/index.js";

const now = new Date()
const lastOfMonth = new Date()

lastOfMonth.setMonth(lastOfMonth.getMonth() + 1)
lastOfMonth.setDate(0)

new IRDatePicker({
    div: date_picker,
    minDate: now,
    maxDate: lastOfMonth
})

`})]});var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Min-Max 설정</DocTitle>\r
            <p><code>minDate</code>, <code>maxDate</code>를 지정하여 선택 가능한 데이터 범위를 지정합니다.</p>\r
            <LiveEditor fixedHeight={400} html={<div id="date_picker"></div>} code={/* javascript */\`
import { IRDatePicker } from "./dist/index.js";

const now = new Date()
const lastOfMonth = new Date()

lastOfMonth.setMonth(lastOfMonth.getMonth() + 1)
lastOfMonth.setDate(0)

new IRDatePicker({
    div: date_picker,
    minDate: now,
    maxDate: lastOfMonth
})

\`} />\r
\r
        </Doc>;
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const M=["MinMax"];export{e as MinMax,M as __namedExportsOrder,l as default};
//# sourceMappingURL=datePicker.min-max.stories-97847e11.js.map