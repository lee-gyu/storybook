import{j as r,a as e,F as n}from"./jsx-runtime-d057ca55.js";import{D as o,a,L as s}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const k={title:"JS Components/DatePicker"},t=()=>r(o,{children:[e(a,{children:"DatePicker"}),r("p",{children:[e("code",{children:"IRDatePicker"})," 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 ",e("code",{children:"format"})," 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)"]}),e(s,{fixedHeight:400,html:r(n,{children:[e("div",{id:"date_picker",style:{width:300}}),e("br",{}),e("div",{id:"date_picker2",style:{width:200}})]}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker")
})

new IRDatePicker({
    div: document.getElementById("date_picker2"),
    format: "MM/DD/YYYY"
})
`})]});var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Y=["Basic"];export{t as Basic,Y as __namedExportsOrder,k as default};
//# sourceMappingURL=datePicker.basic.stories-5f104a53.js.map
