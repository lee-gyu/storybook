import{j as e}from"./jsx-runtime-Y5Ju2SGo.js";import{D as i,a as n,L as t}from"./version-tag-D9L4qBs8.js";import"./index-eCxJ45ll.js";const c=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    onChange: ( value ) => alert( value ),
} );

const timePicker = new IRTimePicker( {
    contextElement: time_picker2,
    value: "16:00",
} );

alert( timePicker.value );`,d=`<div id="time_picker" style="width: 200"></div>
<br />
<div id="time_picker2" style="width: 200"></div>`;function s(){return e.jsxs(i,{children:[e.jsx(n,{children:"IRTimePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTimePicker"})," 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다."]}),e.jsx(t,{fixedHeight:400,htmlRaw:d,code:c})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const o=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    checkbox: true,
    disabled: false,
} );`,r='<div id="time_picker" style="width: 200"></div>';function l(){return e.jsxs(i,{children:[e.jsx(n,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," / ",e.jsx("code",{children:"checkbox"}),"옵션을 이용하여 UI의 비활성화를 제어합니다."]}),e.jsx(t,{fixedHeight:400,htmlRaw:r,code:o})]})}l.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const m=`import { IRTimePicker, i18n } from "@innorules/ir-style";

i18n.setLocale( "en" );

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
} );`,a='<div id="time_picker" style="width: 200"></div>';function h(){return e.jsxs(i,{children:[e.jsx(n,{children:"Localization"}),e.jsxs("p",{children:[e.jsx("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),e.jsx(t,{fixedHeight:400,htmlRaw:a,code:m})]})}h.__docgenInfo={description:"",methods:[],displayName:"i18n"};const x=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    checkbox: true,
    disabled: false,
    visibleSeconds: true,
} );`,p='<div id="time_picker" style="width: 200"></div>';function k(){return e.jsxs(i,{children:[e.jsx(n,{children:"Disabled"}),e.jsx(t,{fixedHeight:400,htmlRaw:p,code:x})]})}k.__docgenInfo={description:"",methods:[],displayName:"Seconds"};const I={title:"JS Components/IRTimePicker"},_=["Basic","Disabled","i18n","Seconds"];export{s as Basic,l as Disabled,k as Seconds,_ as __namedExportsOrder,I as default,h as i18n};
