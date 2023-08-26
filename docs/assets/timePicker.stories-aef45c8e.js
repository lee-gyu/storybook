import{j as r,a as e,F as m}from"./jsx-runtime-e43ccb36.js";import{D as o,a as d,L as s}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const v={title:"JS Components/TimePicker"},i=()=>r(o,{children:[e(d,{children:"IRTimePicker"}),r("p",{children:[e("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e(s,{fixedHeight:400,html:r(m,{children:[e("div",{id:"time_picker",style:{width:200}}),e("br",{}),e("div",{id:"time_picker2",style:{width:200}})]}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    onChange: (value) => alert(value)
})

const timePicker = new IRTimePicker({
    contextElement: time_picker2,
    value: "16:00"
})

alert(timePicker.value)
`})]});var t,n,c;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRTimePicker</DocTitle>\r
            <p><code>IRTimePicker</code> 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <div id="time_picker" style={{
        width: 200
      }}></div>\r
                        <br />\r
                        <div id="time_picker2" style={{
        width: 200
      }}></div>\r
                    </>} code={\`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    onChange: (value) => alert(value)
})

const timePicker = new IRTimePicker({
    contextElement: time_picker2,
    value: "16:00"
})

alert(timePicker.value)
\`} />\r
        </Doc>;
}`,...(c=(n=i.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const P=["Basic"];export{i as Basic,P as __namedExportsOrder,v as default};
//# sourceMappingURL=timePicker.stories-aef45c8e.js.map
