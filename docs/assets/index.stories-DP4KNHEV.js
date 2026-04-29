import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { createTooltipContainer } from "@innorules/ir-style";

const tooltipContainerList = [
    createTooltipContainer( {
        containerElement: document.getElementById( "container" ),
        placement: "bottom",
        offset: 15,
    } ),
    createTooltipContainer( {
        containerElement: document.getElementById( "container2" ),
        placement: "bottom",
    } ),
];

btn.onclick = () =>
{
    tooltipContainerList.forEach( ( container ) => container.destroy() );
};`})),c,l=e((()=>{c=`#container2 {
    height: 100px;
    width: 100px;
    background: lightgray;
    margin-left: 30px;
}
`})),u,d=e((()=>{u=`<button id="btn" class="button mb--sm">Tooltips Destroy</button>
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
</div>`}));function f(){return(0,p.jsxs)(n,{children:[(0,p.jsx)(t,{children:`createTooltipContainer`}),(0,p.jsx)(`p`,{children:`ContainerElement 내부의 data-ir-tooltip 속성이 있는 요소에 tooltip을 생성한다.`}),(0,p.jsx)(r,{css:c,code:o,htmlRaw:u})]})}var p,m=e((()=>{s(),l(),d(),i(),p=a(),f.__docgenInfo={description:``,methods:[],displayName:`Container`}})),h,g;e((()=>{m(),h={title:`JS Utility/Tooltip`},g=[`Container`]}))();export{f as Container,g as __namedExportsOrder,h as default};