import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as t,L as o}from"./version-tag-CkTpihZX.js";import"./iframe-jo4tttFm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDcoFm-e.js";const r=`import { IRSelect } from "@innorules/ir-style";\r
\r
new IRSelect( {\r
    contextElement: document.querySelector( "select" ),\r
} );`,s=`<style>\r
    :root {\r
        background-color: #a0a0a0;\r
    }\r
</style>\r
<div style="width: 160px">\r
    <select style="display: none;">\r
        <option>한국어</option>\r
        <option>English</option>\r
        <option>매우 긴 텍스트 입니다. 이것은</option>\r
    </select>\r
</div>`;function i(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRSelect"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRSelect"})," 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다."]}),e.jsx(o,{fixedHeight:150,htmlRaw:s,code:r})]})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};const c=`import { IRSelect } from "@innorules/ir-style";\r
\r
const select = new IRSelect( {\r
    contextElement: document.querySelector( "select" ),\r
    disabled: true,\r
} );\r
\r
const input = document.querySelector( "input" );\r
\r
input.checked = true;\r
input.onchange = () => select.disabled = input.checked;`,l=`<label>\r
    <input type="checkbox" /> 비활성화\r
</label>\r
<select style="display: none;">\r
    <option>한국어</option>\r
    <option>English</option>\r
</select>`;function d(){return e.jsxs(n,{children:[e.jsx(t,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:l,code:c})]})}d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const a=`import { IRSelect } from "@innorules/ir-style";\r
\r
new IRSelect( {\r
    contextElement: document.querySelector( "select" ),\r
    onChange: function( select, option )\r
    {\r
        console.log( this.value );\r
        alert( select.value + "," + option.getAttribute( "data-key" ) );\r
    },\r
} );`,p=`<select style="display: none;">\r
    <option data-key="A">한국어</option>\r
    <option>English</option>\r
</select>`;function h(){return e.jsxs(n,{children:[e.jsx(t,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:p,code:a})]})}h.__docgenInfo={description:"",methods:[],displayName:"Event"};const m=`import { IRSelect } from "@innorules/ir-style";\r
\r
new IRSelect( {\r
    contextElement: document.querySelector( "select" ),\r
} );`,u=`<div style="background-color: gray; width: 400px; height: 300px; padding: 20px">\r
    <div>\r
        <select class="select--transparent" style="display: none;">\r
            <option>한국어</option>\r
            <option>English</option>\r
        </select>\r
    </div>\r
</div>`;function x(){return e.jsxs(n,{children:[e.jsx(t,{children:"Transparent"}),e.jsxs("p",{children:[e.jsx("code",{children:"select--transparent"})," class를 추가하여 배경을 투명하게 조정할 수 있습니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:u,code:m})]})}x.__docgenInfo={description:"",methods:[],displayName:"Transparent"};const S={title:"JS Components/IRSelect"},E=["Basic","Disabled","Event","Transparent"];export{i as Basic,d as Disabled,h as Event,x as Transparent,E as __namedExportsOrder,S as default};
