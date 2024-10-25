import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as t,a as c,L as o}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const l={title:"JS Components/IRTimePicker"},i=()=>e.jsxs(t,{children:[e.jsx(c,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(o,{fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false
})
`})]});i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var r,d,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const p=["Disabled"];export{i as Disabled,p as __namedExportsOrder,l as default};
