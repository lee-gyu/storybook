import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "#select" ),
} );`})),c,l=e((()=>{c=`<style>
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
</div>`}));function u(){return(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`IRSelect`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`IRSelect`}),` 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다.`]}),(0,d.jsx)(r,{fixedHeight:220,htmlRaw:c,exampleCode:o})]})}var d,f=e((()=>{s(),l(),i(),d=a(),u.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),p,m=e((()=>{p=`import { IRSelect } from "@innorules/ir-style";

const select = new IRSelect( {
    contextElement: document.querySelector( "#select" ),
    disabled: true,
} );

const input = document.querySelector( "#input" );

input.checked = true;
input.onchange = () => select.disabled = input.checked;`})),h,g=e((()=>{h=`<label>
    <input id="input" type="checkbox" /> 비활성화
</label>
<div style="width: 160px">
    <select id="select" style="display: none;">
        <option>한국어</option>
        <option>English</option>
    </select>
</div>`}));function _(){return(0,v.jsxs)(n,{children:[(0,v.jsx)(t,{children:`Disabled`}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`code`,{children:`disabled`}),` 속성을 이용하여 비활성화 합니다.`]}),(0,v.jsx)(r,{fixedHeight:400,htmlRaw:h,exampleCode:p})]})}var v,y=e((()=>{m(),g(),i(),v=a(),_.__docgenInfo={description:``,methods:[],displayName:`Disabled`}})),b,x=e((()=>{b=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "#select" ),
    onChange: function( select, option, beforeValue )
    {
        console.log( this.value, beforeValue );
        console.log( select.value + "," + option.getAttribute( "data-key" ) );
    },
} );`})),S,C=e((()=>{S=`<div style="width: 160px">
    <select id="select" style="display: none;">
        <option data-key="A">한국어</option>
        <option>English</option>
    </select>
</div>`}));function w(){return(0,T.jsxs)(n,{children:[(0,T.jsx)(t,{children:`Event`}),(0,T.jsxs)(`p`,{children:[(0,T.jsx)(`code`,{children:`onChange`}),` 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다.`]}),(0,T.jsx)(r,{fixedHeight:400,htmlRaw:S,exampleCode:b})]})}var T,E=e((()=>{x(),C(),i(),T=a(),w.__docgenInfo={description:``,methods:[],displayName:`Event`}})),D,O=e((()=>{D=`import { IRSelect } from "@innorules/ir-style";

new IRSelect( {
    contextElement: document.querySelector( "#select" ),
} );`})),k,A=e((()=>{k=`<div style="background-color: gray; width: 400px; height: 300px; padding: 20px">
    <div>
        <select id="select" class="select--transparent" style="display: none;">
            <option>한국어</option>
            <option>English</option>
        </select>
    </div>
</div>`}));function j(){return(0,M.jsxs)(n,{children:[(0,M.jsx)(t,{children:`Transparent`}),(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`code`,{children:`select--transparent`}),` class를 추가하여 배경을 투명하게 조정할 수 있습니다.`]}),(0,M.jsx)(r,{fixedHeight:400,htmlRaw:k,exampleCode:D})]})}var M,N=e((()=>{O(),A(),i(),M=a(),j.__docgenInfo={description:``,methods:[],displayName:`Transparent`}})),P,F;e((()=>{f(),y(),E(),N(),P={title:`JS Components/IRSelect`},F=[`Basic`,`Disabled`,`Event`,`Transparent`]}))();export{u as Basic,_ as Disabled,w as Event,j as Transparent,F as __namedExportsOrder,P as default};