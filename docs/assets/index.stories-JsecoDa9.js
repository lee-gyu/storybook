import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as o,a as n,L as i}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const r=`import { createTooltipContainer } from "@innorules/ir-style";\r
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
};`,a=`#container2 {
    height: 100px;
    width: 100px;
    background: lightgray;
    margin-left: 30px;
}
`,e=`<button id="btn" class="button mb--sm">Tooltips Destroy</button>
<div class="flex">

    <div id="container" class="side-toolbar ml--3xl">
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-text="전체 체크"
            data-ir-tooltip-placement="top">
            <i class="side-toolbar__icon ir-icon ir-icon--check-all-rectangle"></i>
        </button>
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-placement="right"
            data-ir-tooltip-text="전체 해제">
            <i class="side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"></i>
        </button>
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-placement="right"
            data-ir-tooltip-text="행 삭제">
            <i class="side-toolbar__icon ir-icon ir-icon--row-del2"></i>
        </button>
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-text="복사">
            <i class="side-toolbar__icon ir-icon ir-icon--copy"></i>
        </button>
        <button type="button" class="side-toolbar__button" data-ir-tooltip data-ir-tooltip-ref-mode="pointer"
            data-ir-tooltip-placement="bottom" data-ir-tooltip-text="붙여넣기" data-ir-tooltip-interval="500">
            <i class="side-toolbar__icon ir-icon ir-icon--paste"></i>
        </button>
    </div>
    <div id="container2" class="p--xl" data-ir-tooltip data-ir-tooltip-text="parent" data-ir-tooltip-ref-mode="pointer">
        <button class="button button--secondary" data-ir-tooltip data-ir-tooltip-text="child">tooltip</button>
    </div>
</div>`;function l(){return t.jsxs(o,{children:[t.jsx(n,{children:"createTooltipContainer"}),t.jsx("p",{children:"ContainerElement 내부의 data-ir-tooltip 속성이 있는 요소에 tooltip을 생성한다."}),t.jsx(i,{css:a,code:r,htmlRaw:e})]})}l.__docgenInfo={description:"",methods:[],displayName:"Container"};const m={title:"JS Utility/Tooltip"},u=["Container"];export{l as Container,u as __namedExportsOrder,m as default};
