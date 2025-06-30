import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as t,L as i}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const d=`import { IRDatePicker } from "@innorules/ir-style";

new IRDatePicker( {
    div: document.getElementById( "date_picker" ),
} );

new IRDatePicker( {
    div: document.getElementById( "date_picker2" ),
    format: "MM/DD/YYYY",
} );`,c=`<div id="date_picker" style="width: 300"></div>
<br />
<div id="date_picker2" style="width: 200"></div>`;function s(){return e.jsxs(n,{children:[e.jsx(t,{children:"DatePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRDatePicker"})," 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 ",e.jsx("code",{children:"format"})," 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)"]}),e.jsx(i,{fixedHeight:400,htmlRaw:c,code:d})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const o=`import { IRDatePicker } from "@innorules/ir-style";

new IRDatePicker( {
    div: document.querySelector( ".input" ),
    checkbox: true,
    disabled: true,
} );`,r='<div class="input"></div>';function a(){return e.jsxs(n,{children:[e.jsx(t,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"checkbox"})," 속성을 이용하여 비활성화 제어 체크 박스를 추가할 수 있으며, ",e.jsx("code",{children:"disabled"})," 속성을 이용하여 기본 비활성화 상태를 제어할 수 있습니다."]}),e.jsx(i,{fixedHeight:400,htmlRaw:r,code:o})]})}a.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const l=`import { IRDatePicker } from "@innorules/ir-style";

new IRDatePicker( {
    div: document.getElementById( "date_picker" ),
    onSelect: ( date ) => alert( date ),
    onChange: ( value ) => console.log( value ),
} );`,h='<div id="date_picker" style="width: 200"></div>';function m(){return e.jsxs(n,{children:[e.jsx(t,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onSelect"})," 이벤트를 이용하여 선택한 날짜를 제어할 수 있습니다."]}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값이 변경될 때 이벤트를 호출 받을 수 있습니다."]}),e.jsx(i,{fixedHeight:400,htmlRaw:h,code:l})]})}m.__docgenInfo={description:"",methods:[],displayName:"Event"};const p=`import { IRDatePicker, i18n } from "@innorules/ir-style";

i18n.setLocale( "en" );

new IRDatePicker( {
    div: document.querySelector( ".input" ),
} );`,x='<div class="input"></div>';function u(){return e.jsxs(n,{children:[e.jsx(t,{children:"다국어 지원"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"})," 개체 멤버를 이용하여 사용자 정의 텍스트를 지정할 수 있습니다."]}),e.jsx(i,{fixedHeight:400,htmlRaw:x,code:p})]})}u.__docgenInfo={description:"",methods:[],displayName:"i18n"};const j=`import { IRDatePicker } from "@innorules/ir-style";

const now = new Date();
const lastOfMonth = new Date();

lastOfMonth.setMonth( lastOfMonth.getMonth() + 1 );
lastOfMonth.setDate( 0 );

new IRDatePicker( {
    div: date_picker,
    minDate: now,
    maxDate: lastOfMonth,
} );`,D='<div id="date_picker"></div>';function f(){return e.jsxs(n,{children:[e.jsx(t,{children:"Min-Max 설정"}),e.jsxs("p",{children:[e.jsx("code",{children:"minDate"}),", ",e.jsx("code",{children:"maxDate"}),"를 지정하여 선택 가능한 데이터 범위를 지정합니다."]}),e.jsx(i,{fixedHeight:400,htmlRaw:D,code:j})]})}f.__docgenInfo={description:"",methods:[],displayName:"MinMax"};const v=`import { IRDatePicker } from "@innorules/ir-style";

new IRDatePicker( {
    div: document.getElementById( "date_picker1" ),
} );

new IRDatePicker( {
    div: document.getElementById( "date_picker2" ),
} );`,k=`<div class="input-date-range width--xxl">
    <div id="date_picker1"></div>
    <span class="input-date-range__separator"></span>
    <div id="date_picker2"></div>
</div>`;function R(){return e.jsxs(n,{children:[e.jsx(t,{children:"Date Input Range"}),e.jsxs("p",{children:[e.jsx("code",{children:"input-date-range"}),"와 함께 시작~종료일을 나타낼 수 있습니다."]}),e.jsx(i,{fixedHeight:400,htmlRaw:k,code:v})]})}R.__docgenInfo={description:"",methods:[],displayName:"Range"};const y={title:"JS Components/IRDatePicker"},M=["Basic","Disabled","Event","i18n","MinMax","Range"];export{s as Basic,a as Disabled,m as Event,f as MinMax,R as Range,M as __namedExportsOrder,y as default,u as i18n};
