import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as s,a as o,L as c}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const u={title:"JS Components/TimePicker"},i=()=>e.jsxs(s,{children:[e.jsx(o,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(c,{fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false
})
`})]});i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var r,t,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(d=(t=i.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const p=["Disabled"];export{i as Disabled,p as __namedExportsOrder,u as default};
