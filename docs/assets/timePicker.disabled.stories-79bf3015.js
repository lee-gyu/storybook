import{j as r,a as e,F as o}from"./jsx-runtime-e43ccb36.js";import{D as s,a as n,L as a}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const k={title:"JS Components/TimePicker"},i=()=>r(s,{children:[e(n,{children:"Disabled"}),r("p",{children:[e("code",{children:"disabled"})," / ",e("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e(a,{fixedHeight:400,html:e(o,{children:e("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false
})
`})]});var t,c,d;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Disabled</DocTitle>\r
            <p><code>disabled</code> / <code>checkbox</code>옵션을 이용하여 UI의 비활성화를 제어합니다.</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <div id="time_picker" style={{
        width: 200
      }}></div>\r
                    </>} code={\`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false
})
\`} />\r
        </Doc>;
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Disabled"];export{i as Disabled,x as __namedExportsOrder,k as default};
//# sourceMappingURL=timePicker.disabled.stories-79bf3015.js.map
