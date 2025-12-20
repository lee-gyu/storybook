import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i,a as n,L as r,c as s}from"./version-tag-C5kiIE4p.js";import"./iframe-Dxn4oHhn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7URE3Da.js";const t=`import { IRTimePicker } from "@innorules/ir-style";\r
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
alert( timePicker.value );`,c=`<div id="time_picker" style="width: 200px"></div>\r
<br />\r
<div id="time_picker2" style="width: 200px"></div>`;function d(){return e.jsxs(i,{children:[e.jsx(n,{children:"IRTimePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e.jsx(r,{fixedHeight:400,htmlRaw:c,code:t})]})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};const o=`import { IRTimePicker } from "@innorules/ir-style";\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
    checkbox: true,\r
    disabled: false,\r
} );`,l='<div id="time_picker" style="width: 200px"></div>';function m(){return e.jsxs(i,{children:[e.jsx(n,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(r,{fixedHeight:400,htmlRaw:l,code:o})]})}m.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const a=`import { IRTimePicker, i18n } from "@innorules/ir-style";\r
\r
i18n.setLocale( "en" );\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
} );`,h='<div id="time_picker" style="width: 200px"></div>';function x(){return e.jsxs(i,{children:[e.jsx(n,{children:"Localization"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),e.jsx(r,{fixedHeight:400,htmlRaw:h,code:a})]})}x.__docgenInfo={description:"",methods:[],displayName:"i18n"};const p=`import { IRTimePicker } from "@innorules/ir-style";\r
\r
new IRTimePicker( {\r
    contextElement: document.getElementById( "time_picker" ),\r
    checkbox: true,\r
    disabled: false,\r
    // visibleHours: false,\r
    // visibleMinutes: false,\r
    visibleSeconds: true,\r
} );`,u='<div id="time_picker" style="width: 200px"></div>',k=[["/classes/_innorules_solid-ui.IRTimePicker.html","IRTimePicker"],["/types/_innorules_solid-ui.IRTimePickerArgs.html","IRTimePickerArgs"]];function j(){return e.jsxs(i,{children:[e.jsx(n,{children:"Visible"}),e.jsx("p",{children:"아래의 속성을 이용하여 시·분·초 단위의 표시 여부를 설정할 수 있습니다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"visibleHours"})," - 기본값 true"]}),e.jsxs("li",{children:[e.jsx("code",{children:"visibleMinutes"})," - 기본값 true"]}),e.jsxs("li",{children:[e.jsx("code",{children:"visibleSeconds"})," - 기본값 false"]})]}),e.jsx(s,{docList:k}),e.jsx(r,{fixedHeight:400,htmlRaw:u,code:p})]})}j.__docgenInfo={description:"",methods:[],displayName:"VisibleOption"};const v={title:"JS Components/IRTimePicker"},P=["Basic","Disabled","i18n","Visible"];export{d as Basic,m as Disabled,j as Visible,P as __namedExportsOrder,v as default,x as i18n};
