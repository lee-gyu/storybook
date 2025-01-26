import{j as e}from"./jsx-runtime-CZmXTeUy.js";import{D as i,a as s,L as t}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const d=()=>e.jsxs(i,{children:[e.jsx(s,{children:"IRTimePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e.jsx(t,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"time_picker",style:{width:200}}),e.jsx("br",{}),e.jsx("div",{id:"time_picker2",style:{width:200}})]}),code:`
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
`})]});d.__docgenInfo={description:"",methods:[],displayName:"Basic"};const c=()=>e.jsxs(i,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(t,{fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false
})
`})]});c.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const r=()=>e.jsxs(i,{children:[e.jsx(s,{children:"Localization"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),e.jsx(t,{fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker, i18n } from "./dist/index.js";

i18n.setLocale( "en" );

new IRTimePicker({
    contextElement: time_picker
});
`})]});r.__docgenInfo={description:"",methods:[],displayName:"i18n"};const n=()=>e.jsxs(i,{children:[e.jsx(s,{children:"Disabled"}),e.jsx(t,{fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker } from "./dist/index.js";

new IRTimePicker({
    contextElement: time_picker,
    checkbox: true,
    disabled: false,
    visibleSeconds: true
})
`})]});n.__docgenInfo={description:"",methods:[],displayName:"Seconds"};const x={title:"JS Components/IRTimePicker"},a=["Basic","Disabled","i18n","Seconds"];export{d as Basic,c as Disabled,n as Seconds,a as __namedExportsOrder,x as default,r as i18n};
