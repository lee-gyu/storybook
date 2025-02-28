import{j as t}from"./jsx-runtime-Y5Ju2SGo.js";import{b as o}from"./index-UDNyKH7G.js";import{D as i,a as e,L as n,c as a}from"./version-tag-DunVkkeT.js";import"./index-eCxJ45ll.js";const r=`import { createTooltipContainer } from "@innorules/ir-style";

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
};`,l=`body > div {
    height: 400px;
}
`;function s(){return t.jsxs(i,{children:[t.jsx(e,{children:"createTooltipContainer"}),t.jsx("p",{children:"ContainerElement 내부의 data-ir-tooltip 속성이 있는 요소에 tooltip을 생성한다."}),t.jsx(n,{css:l,html:t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
                                #container2 {
                                    height: 100px;
                                    width: 100px;
                                    background: lightgray;
                                    margin-left: 30px;
                                }
                            `}),t.jsx("button",{id:"btn",className:a(o,"mb--sm"),children:"Tooltips Destroy"}),t.jsxs("div",{className:"flex",children:[t.jsxs("div",{id:"container",className:"side-toolbar ml--3xl",children:[t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-text":"전체 체크","data-ir-tooltip-placement":"top",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-placement":"right","data-ir-tooltip-text":"전체 해제",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-placement":"right","data-ir-tooltip-text":"행 삭제",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-text":"복사",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-ref-mode":"pointer","data-ir-tooltip-placement":"bottom","data-ir-tooltip-text":"붙여넣기","data-ir-tooltip-interval":"500",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})})]}),t.jsx("div",{id:"container2",className:"p--xl","data-ir-tooltip":!0,"data-ir-tooltip-text":"parent","data-ir-tooltip-ref-mode":"pointer",children:t.jsx("button",{className:"button button--secondary","data-ir-tooltip":!0,"data-ir-tooltip-text":"child",children:"tooltip"})})]})]}),code:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"Container"};const x={title:"JS Utility/Tooltip"},b=["Container"];export{s as Container,b as __namedExportsOrder,x as default};
