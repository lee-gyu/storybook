import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as n,L as i}from"./version-tag-B2V-8a8w.js";import"./iframe-72AAcSIy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfaMo4xr.js";const r=`import { createTooltipContainer } from "@innorules/ir-style";\r
\r
const tooltipContainerList = [\r
    createTooltipContainer( {\r
        containerElement: document.getElementById( "container" ),\r
        placement: "bottom",\r
        offset: 15,\r
    } ),\r
    createTooltipContainer( {\r
        containerElement: document.getElementById( "container2" ),\r
        placement: "bottom",\r
    } ),\r
];\r
\r
btn.onclick = () =>\r
{\r
    tooltipContainerList.forEach( ( container ) => container.destroy() );\r
};`,a=`#container2 {\r
    height: 100px;\r
    width: 100px;\r
    background: lightgray;\r
    margin-left: 30px;\r
}\r
`,e=`<button id="btn" class="button mb--sm">Tooltips Destroy</button>\r
<div class="flex">\r
\r
    <div id="container" class="side-toolbar ml--3xl">\r
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-text="전체 체크"\r
            data-ir-tooltip-placement="top">\r
            <i class="side-toolbar__icon ir-icon ir-icon--check-all-rectangle"></i>\r
        </button>\r
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-placement="right"\r
            data-ir-tooltip-text="전체 해제">\r
            <i class="side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"></i>\r
        </button>\r
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-placement="right"\r
            data-ir-tooltip-text="행 삭제">\r
            <i class="side-toolbar__icon ir-icon ir-icon--row-del2"></i>\r
        </button>\r
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-text="복사">\r
            <i class="side-toolbar__icon ir-icon ir-icon--copy"></i>\r
        </button>\r
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-ref-mode="pointer"\r
            data-ir-tooltip-placement="bottom" data-ir-tooltip-text="붙여넣기" data-ir-tooltip-interval="500">\r
            <i class="side-toolbar__icon ir-icon ir-icon--paste"></i>\r
        </button>\r
    </div>\r
    <div id="container2" class="p--xl" data-ir-tooltip data-ir-tooltip-text="parent" data-ir-tooltip-ref-mode="pointer">\r
        <button class="button button--secondary" data-ir-tooltip data-ir-tooltip-text="child">tooltip</button>\r
    </div>\r
</div>`;function l(){return t.jsxs(o,{children:[t.jsx(n,{children:"createTooltipContainer"}),t.jsx("p",{children:"ContainerElement 내부의 data-ir-tooltip 속성이 있는 요소에 tooltip을 생성한다."}),t.jsx(i,{css:a,code:r,htmlRaw:e})]})}l.__docgenInfo={description:"",methods:[],displayName:"Container"};const m={title:"JS Utility/Tooltip"},u=["Container"];export{l as Container,u as __namedExportsOrder,m as default};
