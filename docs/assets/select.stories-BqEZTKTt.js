import{j as e}from"./jsx-runtime-Y5Ju2SGo.js";import{D as n,a as t,L as o}from"./version-tag-D9L4qBs8.js";import"./index-eCxJ45ll.js";const s=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "select" ),
} );`,i=`<style>
    :root {
        background-color: #a0a0a0;
    }
</style>
<div style="width: 160px">
    <select style="display: none;">
        <option>한국어</option>
        <option>English</option>
        <option>매우 긴 텍스트 입니다. 이것은</option>
    </select>
</div>`;function c(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRSelect"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRSelect"})," 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다."]}),e.jsx(o,{fixedHeight:150,htmlRaw:i,code:s})]})}c.__docgenInfo={description:"",methods:[],displayName:"Basic"};const l=`import { IRSelect } from "@innorules/ir-style";

const select = new IRSelect( {
    contextElement: document.querySelector( "select" ),
    disabled: true,
} );

const input = document.querySelector( "input" );

input.checked = true;
input.onchange = () => select.disabled = input.checked;`,r=`<label>
    <input type="checkbox" /> 비활성화
</label>
<select style="display: none;">
    <option>한국어</option>
    <option>English</option>
</select>`;function d(){return e.jsxs(n,{children:[e.jsx(t,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:r,code:l})]})}d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const a=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "select" ),
    onChange: function( select, option )
    {
        console.log( this.value );
        alert( select.value + "," + option.getAttribute( "data-key" ) );
    },
} );`,p=`<select style="display: none;">
    <option data-key="A">한국어</option>
    <option>English</option>
</select>`;function h(){return e.jsxs(n,{children:[e.jsx(t,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:p,code:a})]})}h.__docgenInfo={description:"",methods:[],displayName:"Event"};const m=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "select" ),
} );`,u=`<div style="background-color: gray; width: 400px; height: 300px; padding: 20px">
    <div>
        <select class="select--transparent" style="display: none;">
            <option>한국어</option>
            <option>English</option>
        </select>
    </div>
</div>`;function x(){return e.jsxs(n,{children:[e.jsx(t,{children:"Transparent"}),e.jsxs("p",{children:[e.jsx("code",{children:"select--transparent"})," class를 추가하여 배경을 투명하게 조정할 수 있습니다."]}),e.jsx(o,{fixedHeight:400,htmlRaw:u,code:m})]})}x.__docgenInfo={description:"",methods:[],displayName:"Transparent"};const f={title:"JS Components/IRSelect"},R=["Basic","Disabled","Event","Transparent"];export{c as Basic,d as Disabled,h as Event,x as Transparent,R as __namedExportsOrder,f as default};
