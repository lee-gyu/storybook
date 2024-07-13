import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a as s,L as r}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const u={title:"JS Components/DatePicker"},e=()=>t.jsxs(i,{children:[t.jsx(s,{children:"Min-Max 설정"}),t.jsxs("p",{children:[t.jsx("code",{children:"minDate"}),", ",t.jsx("code",{children:"maxDate"}),"를 지정하여 선택 가능한 데이터 범위를 지정합니다."]}),t.jsx(r,{fixedHeight:400,html:t.jsx("div",{id:"date_picker"}),code:`
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

`})]});e.__docgenInfo={description:"",methods:[],displayName:"MinMax"};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["MinMax"];export{e as MinMax,x as __namedExportsOrder,u as default};
