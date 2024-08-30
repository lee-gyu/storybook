import{j as e}from"./index-BVpe1bT6.js";import{D as i,a as s,L as r}from"./doc-content-BzTGzIX_.js";import"./index-RYns6xqu.js";const D={title:"JS Components/IRDatePicker"},t=()=>e.jsxs(i,{children:[e.jsx(s,{children:"Min-Max 설정"}),e.jsxs("p",{children:[e.jsx("code",{children:"minDate"}),", ",e.jsx("code",{children:"maxDate"}),"를 지정하여 선택 가능한 데이터 범위를 지정합니다."]}),e.jsx(r,{fixedHeight:400,html:e.jsx("div",{id:"date_picker"}),code:`
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"MinMax"};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["MinMax"];export{t as MinMax,x as __namedExportsOrder,D as default};
