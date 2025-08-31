import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as i,a as n,L as r}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const t=`import { IRTimePicker } from "@innorules/ir-style";\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
    onChange: ( value ) => alert( value ),\r
} );\r
\r
const timePicker = new IRTimePicker( {\r
    contextElement: time_picker2,\r
    value: "16:00",\r
} );\r
\r
alert( timePicker.value );`,c=`<div id="time_picker" style="width: 200"></div>\r
<br />\r
<div id="time_picker2" style="width: 200"></div>`;function d(){return e.jsxs(i,{children:[e.jsx(n,{children:"IRTimePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e.jsx(r,{fixedHeight:400,htmlRaw:c,code:t})]})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};const s=`import { IRTimePicker } from "@innorules/ir-style";\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
    checkbox: true,\r
    disabled: false,\r
} );`,o='<div id="time_picker" style="width: 200"></div>';function l(){return e.jsxs(i,{children:[e.jsx(n,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(r,{fixedHeight:400,htmlRaw:o,code:s})]})}l.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const m=`import { IRTimePicker, i18n } from "@innorules/ir-style";\r
\r
i18n.setLocale( "en" );\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
} );`,a='<div id="time_picker" style="width: 200"></div>';function h(){return e.jsxs(i,{children:[e.jsx(n,{children:"Localization"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),e.jsx(r,{fixedHeight:400,htmlRaw:a,code:m})]})}h.__docgenInfo={description:"",methods:[],displayName:"i18n"};const x=`import { IRTimePicker } from "@innorules/ir-style";\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
    checkbox: true,\r
    disabled: false,\r
    visibleSeconds: true,\r
} );`,p='<div id="time_picker" style="width: 200"></div>';function k(){return e.jsxs(i,{children:[e.jsx(n,{children:"Disabled"}),e.jsx(r,{fixedHeight:400,htmlRaw:p,code:x})]})}k.__docgenInfo={description:"",methods:[],displayName:"Seconds"};const _={title:"JS Components/IRTimePicker"},R=["Basic","Disabled","i18n","Seconds"];export{d as Basic,l as Disabled,k as Seconds,R as __namedExportsOrder,_ as default,h as i18n};
