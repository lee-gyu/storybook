import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as r,a as d,L as i}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const l={title:"JS Components/DatePicker"},t=()=>e.jsxs(r,{children:[e.jsx(d,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onSelect"})," 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다."]}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다."]}),e.jsx(i,{fixedHeight:400,html:e.jsx("div",{id:"date_picker",style:{width:200}}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker"),
    onSelect: (date) => alert(date),
    onChange: (value) => console.log(value)
})
`})]});t.__docgenInfo={description:"",methods:[],displayName:"Event"};var n,o,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(u=(o=t.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const p=["Event"];export{t as Event,p as __namedExportsOrder,l as default};
