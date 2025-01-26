import{j as e}from"./jsx-runtime-CZmXTeUy.js";import{D as t,a as s,L as n}from"./version-tag-DohCfExP.js";import{s as i}from"./index-DEzXR-MV.js";import"./index-eCxJ45ll.js";const c=()=>e.jsxs(t,{children:[e.jsx(s,{children:"IRSelect"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRSelect"})," 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다."]}),e.jsx(n,{fixedHeight:150,html:e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
                        :root {
                            background-color: #a0a0a0;
                        }
                        `}),e.jsx("div",{style:{width:160},children:e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{children:"한국어"}),e.jsx("option",{children:"English"}),e.jsx("option",{children:"매우 긴 텍스트 입니다. 이것은"})]})})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                `})]});c.__docgenInfo={description:"",methods:[],displayName:"Basic"};const l=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs("p",{children:[e.jsx("code",{children:"disabled"})," 속성을 이용하여 비활성화 합니다."]}),e.jsx(n,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," 비활성화"]}),e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{children:"한국어"}),e.jsx("option",{children:"English"})]})]}),code:`
import { IRSelect } from "./dist/index.js";

const select = new IRSelect({
    contextElement: document.querySelector("select"),
    disabled: true
});

const input = document.querySelector("input");

input.checked = true;
input.onchange = () => select.disabled = input.checked;
`})]});l.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const o=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다."]}),e.jsx(n,{fixedHeight:400,html:e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{"data-key":"A",children:"한국어"}),e.jsx("option",{children:"English"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select"),
    onChange: function (select, option) {
        console.log( this.value )
        alert(select.value + "," + option.getAttribute("data-key"))
    }
});
`})]});o.__docgenInfo={description:"",methods:[],displayName:"Event"};const d=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Transparent"}),e.jsxs("p",{children:[e.jsx("code",{children:"select--transparent"})," class를 추가하여 배경을 투명하게 조정할 수 있습니다."]}),e.jsx(n,{fixedHeight:400,html:e.jsx("div",{style:{backgroundColor:"gray",width:400,height:300,padding:20},children:e.jsx("div",{children:e.jsxs("select",{className:i,style:{display:"none"},children:[e.jsx("option",{children:"한국어"}),e.jsx("option",{children:"English"})]})})}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                `})]});d.__docgenInfo={description:"",methods:[],displayName:"Transparent"};const p={title:"JS Components/IRSelect"},j=["Basic","Disabled","Event","Transparent"];export{c as Basic,l as Disabled,o as Event,d as Transparent,j as __namedExportsOrder,p as default};
