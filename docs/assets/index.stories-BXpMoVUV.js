import{j as e}from"./jsx-runtime-CZmXTeUy.js";import{D as i,a as t,L as d}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const n=()=>e.jsxs(i,{children:[e.jsx(t,{children:"DatePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRDatePicker"})," 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 ",e.jsx("code",{children:"format"})," 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)"]}),e.jsx(d,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"date_picker",style:{width:300}}),e.jsx("br",{}),e.jsx("div",{id:"date_picker2",style:{width:200}})]}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker")
})

new IRDatePicker({
    div: document.getElementById("date_picker2"),
    format: "MM/DD/YYYY"
})
`})]});n.__docgenInfo={description:"",methods:[],displayName:"Basic"};const s=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"checkbox"})," 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, ",e.jsx("code",{children:"disabled"})," 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다."]}),e.jsx(d,{fixedHeight:400,html:e.jsx("div",{className:"input"}),code:`
import { IRDatePicker } from "./dist/index.js";

const datePicker = new IRDatePicker({
    div: document.querySelector(".input"),
    checkbox: true,
    disabled: true
})`})]});s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const c=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onSelect"})," 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다."]}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다."]}),e.jsx(d,{fixedHeight:400,html:e.jsx("div",{id:"date_picker",style:{width:200}}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker"),
    onSelect: (date) => alert(date),
    onChange: (value) => console.log(value)
})
`})]});c.__docgenInfo={description:"",methods:[],displayName:"Event"};const r=()=>e.jsxs(i,{children:[e.jsx(t,{children:"다국어 지원"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"})," 개체 멤버를 이용하여 사용자 정의 텍스트를 지정할 수 있습니다."]}),e.jsx(d,{fixedHeight:400,html:e.jsx("div",{className:"input"}),code:`
import { IRDatePicker, i18n } from "./dist/index.js";

i18n.setLocale("en");


new IRDatePicker({
    div: document.querySelector(".input"),
})`})]});r.__docgenInfo={description:"",methods:[],displayName:"i18n"};const a=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Min-Max 설정"}),e.jsxs("p",{children:[e.jsx("code",{children:"minDate"}),", ",e.jsx("code",{children:"maxDate"}),"를 지정하여 선택 가능한 데이터 범위를 지정합니다."]}),e.jsx(d,{fixedHeight:400,html:e.jsx("div",{id:"date_picker"}),code:`
import { IRDatePicker } from "./dist/index.js";

const now = new Date()
const lastOfMonth = new Date()

lastOfMonth.setMonth(lastOfMonth.getMonth() + 1)
lastOfMonth.setDate(0)

new IRDatePicker({
    div: date_picker,
    minDate: now,
    maxDate: lastOfMonth
})

`})]});a.__docgenInfo={description:"",methods:[],displayName:"MinMax"};const o=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Date Input Range"}),e.jsxs("p",{children:[e.jsx("code",{children:"input-date-range"}),"와 함께 시작~종료일을 나타낼 수 있습니다."]}),e.jsx(d,{fixedHeight:100,html:e.jsxs("div",{className:"input-date-range width--xxl",children:[e.jsx("div",{id:"date_picker1"}),e.jsx("span",{className:"input-date-range__separator"}),e.jsx("div",{id:"date_picker2"})]}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker1")
})

new IRDatePicker({
    div: document.getElementById("date_picker2")
})`})]});o.__docgenInfo={description:"",methods:[],displayName:"Range"};const m={title:"JS Components/IRDatePicker"},j=["Basic","Disabled","Event","i18n","MinMax","Range"];export{n as Basic,s as Disabled,c as Event,a as MinMax,o as Range,j as __namedExportsOrder,m as default,r as i18n};
