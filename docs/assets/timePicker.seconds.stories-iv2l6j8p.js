import{j as n,a as e,F as o}from"./jsx-runtime-KzWSGvcx.js";import{D as c,a as d,L as m}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const x={title:"JS Components/TimePicker"},i=()=>n(c,{children:[e(d,{children:"Disabled"}),e(m,{fixedHeight:400,html:e(o,{children:e("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false,
    visibleSeconds: true
})
`})]});var r,t,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Disabled</DocTitle>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <div id="time_picker" style={{
        width: 200
      }}></div>\r
                    </>} code={/* javascript */\`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false,
    visibleSeconds: true
})
\`} />\r
        </Doc>;
}`,...(s=(t=i.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const h=["Seconds"];export{i as Seconds,h as __namedExportsOrder,x as default};
