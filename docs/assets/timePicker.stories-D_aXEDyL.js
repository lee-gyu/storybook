import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i,a as n,L as s,c as t}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const c=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    onChange: ( value ) => alert( value ),
} );

const timePicker = new IRTimePicker( {
    contextElement: time_picker2,
    value: "16:00",
} );

alert( timePicker.value );`,r=`<div id="time_picker" style="width: 200px"></div>
<br />
<div id="time_picker2" style="width: 200px"></div>`;function d(){return e.jsxs(i,{children:[e.jsx(n,{children:"IRTimePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e.jsx(s,{fixedHeight:400,htmlRaw:r,code:c})]})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};const o=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    checkbox: true,
    disabled: false,
} );`,l='<div id="time_picker" style="width: 200px"></div>';function m(){return e.jsxs(i,{children:[e.jsx(n,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(s,{fixedHeight:400,htmlRaw:l,code:o})]})}m.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const a=`import { IRTimePicker, i18n } from "@innorules/ir-style";

i18n.setLocale( "en" );

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
} );`,h='<div id="time_picker" style="width: 200px"></div>';function x(){return e.jsxs(i,{children:[e.jsx(n,{children:"Localization"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),e.jsx(s,{fixedHeight:400,htmlRaw:h,code:a})]})}x.__docgenInfo={description:"",methods:[],displayName:"i18n"};const p=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    checkbox: true,
    disabled: false,
    // visibleHours: false,
    // visibleMinutes: false,
    visibleSeconds: true,
} );`,u='<div id="time_picker" style="width: 200px"></div>',k=[["/classes/_innorules_solid-ui.IRTimePicker.html","IRTimePicker"],["/types/_innorules_solid-ui.IRTimePickerArgs.html","IRTimePickerArgs"]];function j(){return e.jsxs(i,{children:[e.jsx(n,{children:"Visible"}),e.jsx("p",{children:"아래의 속성을 이용하여 시·분·초 단위의 표시 여부를 설정할 수 있습니다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"visibleHours"})," - 기본값 true"]}),e.jsxs("li",{children:[e.jsx("code",{children:"visibleMinutes"})," - 기본값 true"]}),e.jsxs("li",{children:[e.jsx("code",{children:"visibleSeconds"})," - 기본값 false"]})]}),e.jsx(t,{docList:k}),e.jsx(s,{fixedHeight:400,htmlRaw:u,code:p})]})}j.__docgenInfo={description:"",methods:[],displayName:"VisibleOption"};const v={title:"JS Components/IRTimePicker"},P=["Basic","Disabled","i18n","Visible"];export{d as Basic,m as Disabled,j as Visible,P as __namedExportsOrder,v as default,x as i18n};
