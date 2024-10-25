import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as c,a as s,L as o}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const l={title:"JS Components/IRTimePicker"},i=()=>e.jsxs(c,{children:[e.jsx(s,{children:"IRTimePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e.jsx(o,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"time_picker",style:{width:200}}),e.jsx("br",{}),e.jsx("div",{id:"time_picker2",style:{width:200}})]}),code:`
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
`})]});i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var r,t,n;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(n=(t=i.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const p=["Basic"];export{i as Basic,p as __namedExportsOrder,l as default};
