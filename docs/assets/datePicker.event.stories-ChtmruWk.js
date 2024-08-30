import{j as e}from"./index-BVpe1bT6.js";import{D as d,a as i,L as c}from"./doc-content-BzTGzIX_.js";import"./index-RYns6xqu.js";const p={title:"JS Components/IRDatePicker"},t=()=>e.jsxs(d,{children:[e.jsx(i,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onSelect"})," 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다."]}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다."]}),e.jsx(c,{fixedHeight:400,html:e.jsx("div",{id:"date_picker",style:{width:200}}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker"),
    onSelect: (date) => alert(date),
    onChange: (value) => console.log(value)
})
`})]});t.__docgenInfo={description:"",methods:[],displayName:"Event"};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["Event"];export{t as Event,m as __namedExportsOrder,p as default};
