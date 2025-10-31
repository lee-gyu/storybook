import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as t,L as o}from"./version-tag-D_C1jUBh.js";import"./iframe-BvK5mbBg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIfM9e56.js";const s=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "#select" ),
} );`,i=`<style>
    :root {
        background-color: #a0a0a0;
    }
</style>
<div style="width: 160px">
    <select id="select" style="display: none;">
        <option>한국어</option>
        <option>English</option>
        <option>매우 긴 텍스트 입니다. 이것은</option>
    </select>
</div>`;function l(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRSelect"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRSelect"})," 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다."]}),e.jsx(o,{fixedHeight:220,htmlRaw:i,exampleCode:s})]})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};const c=`import { IRSelect } from "@innorules/ir-style";

const select = new IRSelect( {
    contextElement: document.querySelector( "#select" ),
    disabled: true,
} );

const input = document.querySelector( "#input" );

input.checked = true;
input.onchange = () => select.disabled = input.checked;`,r=`<label>
    <input id="input" type="checkbox" /> 비활성화
</label>
<div style="width: 160px">
    <select id="select" style="display: none;">
        <option>한국어</option>
        <option>English</option>
    </select>
</div>`;function d(){return e.jsxs(n,{children:[e.jsx(t,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:r,exampleCode:c})]})}d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const a=`import { IRSelect } from "@innorules/ir-style";\r
\r
new IRSelect( {\r
    contextElement: document.querySelector( "#select" ),\r
    onChange: function( select, option, beforeValue )\r
    {\r
        console.log( this.value, beforeValue );\r
        console.log( select.value + "," + option.getAttribute( "data-key" ) );\r
    },\r
} );`,p=`<div style="width: 160px">
    <select id="select" style="display: none;">
        <option data-key="A">한국어</option>
        <option>English</option>
    </select>
</div>`;function m(){return e.jsxs(n,{children:[e.jsx(t,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:p,exampleCode:a})]})}m.__docgenInfo={description:"",methods:[],displayName:"Event"};const h=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "#select" ),
} );`,x=`<div style="background-color: gray; width: 400px; height: 300px; padding: 20px">
    <div>
        <select id="select" class="select--transparent" style="display: none;">
            <option>한국어</option>
            <option>English</option>
        </select>
    </div>
</div>`;function u(){return e.jsxs(n,{children:[e.jsx(t,{children:"Transparent"}),e.jsxs("p",{children:[e.jsx("code",{children:"select--transparent"})," class를 추가하여 배경을 투명하게 조정할 수 있습니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:x,exampleCode:h})]})}u.__docgenInfo={description:"",methods:[],displayName:"Transparent"};const v={title:"JS Components/IRSelect"},S=["Basic","Disabled","Event","Transparent"];export{l as Basic,d as Disabled,m as Event,u as Transparent,S as __namedExportsOrder,v as default};
