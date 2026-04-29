import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,r,s as i,t as a}from"./context-C6uFeUW4.js";import{t as o}from"./jsx-runtime-6sF1Ejqi.js";var s,c=e((()=>{s=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    onChange: ( value ) => alert( value ),
} );

const timePicker = new IRTimePicker( {
    contextElement: time_picker2,
    value: "16:00",
} );

alert( timePicker.value );`})),l,u=e((()=>{l=`<div id="time_picker" style="width: 200px"></div>
<br />
<div id="time_picker2" style="width: 200px"></div>`}));function d(){return(0,f.jsxs)(n,{children:[(0,f.jsx)(t,{children:`IRTimePicker`}),(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`code`,{children:`IRTimePicker`}),` 컴포넌트를 활용하여 시/분을 선택하는 입력 컨트롤을 표현할 수 있습니다.`]}),(0,f.jsx)(i,{fixedHeight:400,htmlRaw:l,code:s})]})}var f,p=e((()=>{c(),u(),a(),f=o(),d.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),m,h=e((()=>{m=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    checkbox: true,
    disabled: false,
} );`})),g,_=e((()=>{g=`<div id="time_picker" style="width: 200px"></div>`}));function v(){return(0,y.jsxs)(n,{children:[(0,y.jsx)(t,{children:`Disabled`}),(0,y.jsxs)(`p`,{children:[(0,y.jsx)(`code`,{children:`disabled`}),` / `,(0,y.jsx)(`code`,{children:`checkbox`}),`옵션을 이용하여 UI의 비활성화를 제어합니다.`]}),(0,y.jsx)(i,{fixedHeight:400,htmlRaw:g,code:m})]})}var y,b=e((()=>{h(),_(),a(),y=o(),v.__docgenInfo={description:``,methods:[],displayName:`Disabled`}})),x,S=e((()=>{x=`import { IRTimePicker, i18n } from "@innorules/ir-style";

i18n.setLocale( "en" );

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
} );`})),C,w=e((()=>{C=`<div id="time_picker" style="width: 200px"></div>`}));function T(){return(0,E.jsxs)(n,{children:[(0,E.jsx)(t,{children:`Localization`}),(0,E.jsxs)(`p`,{children:[(0,E.jsx)(`code`,{children:`i18n`}),`의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다.`]}),(0,E.jsx)(i,{fixedHeight:400,htmlRaw:C,code:x})]})}var E,D=e((()=>{S(),w(),a(),E=o(),T.__docgenInfo={description:``,methods:[],displayName:`i18n`}})),O,k=e((()=>{O=`import { IRTimePicker } from "@innorules/ir-style";

new IRTimePicker( {
    contextElement: document.getElementById( "time_picker" ),
    checkbox: true,
    disabled: false,
    // visibleHours: false,
    // visibleMinutes: false,
    visibleSeconds: true,
} );`})),A,j=e((()=>{A=`<div id="time_picker" style="width: 200px"></div>`}));function M(){return(0,N.jsxs)(n,{children:[(0,N.jsx)(t,{children:`Visible`}),(0,N.jsx)(`p`,{children:`아래의 속성을 이용하여 시·분·초 단위의 표시 여부를 설정할 수 있습니다.`}),(0,N.jsxs)(`ul`,{children:[(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`code`,{children:`visibleHours`}),` - 기본값 true`]}),(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`code`,{children:`visibleMinutes`}),` - 기본값 true`]}),(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`code`,{children:`visibleSeconds`}),` - 기본값 false`]})]}),(0,N.jsx)(r,{docList:P}),(0,N.jsx)(i,{fixedHeight:400,htmlRaw:A,code:O})]})}var N,P,F=e((()=>{k(),j(),a(),N=o(),P=[[`/classes/_innorules_solid-ui.IRTimePicker.html`,`IRTimePicker`],[`/types/_innorules_solid-ui.IRTimePickerArgs.html`,`IRTimePickerArgs`]],M.__docgenInfo={description:``,methods:[],displayName:`VisibleOption`}})),I,L;e((()=>{p(),b(),D(),F(),I={title:`JS Components/IRTimePicker`},L=[`Basic`,`Disabled`,`i18n`,`Visible`]}))();export{d as Basic,v as Disabled,M as Visible,L as __namedExportsOrder,I as default,T as i18n};