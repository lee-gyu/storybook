import{j as r,a as e,F as c}from"./jsx-runtime-KzWSGvcx.js";import{D as n,a as o,L as a}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const p={title:"JS Components/DatePicker"},t=()=>r(n,{children:[e(o,{children:"DatePicker"}),r("p",{children:[e("code",{children:"IRDatePicker"})," 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 ",e("code",{children:"format"})," 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)"]}),e(a,{fixedHeight:400,html:r(c,{children:[e("div",{id:"date_picker",style:{width:300}}),e("br",{}),e("div",{id:"date_picker2",style:{width:200}})]}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker")
})

new IRDatePicker({
    div: document.getElementById("date_picker2"),
    format: "MM/DD/YYYY"
})
`})]});var i,d,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>DatePicker</DocTitle>\r
            <p><code>IRDatePicker</code> 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 <code>format</code> 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <div id="date_picker" style={{
        width: 300
      }}></div>\r
                        <br />\r
                        <div id="date_picker2" style={{
        width: 200
      }}></div>\r
                    </>} code={\`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker")
})

new IRDatePicker({
    div: document.getElementById("date_picker2"),
    format: "MM/DD/YYYY"
})
\`} />\r
        </Doc>;
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const l=["Basic"];export{t as Basic,l as __namedExportsOrder,p as default};
