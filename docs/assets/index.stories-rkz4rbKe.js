import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as i,a as n}from"./index-5H9hVZVH.js";import{D as r,a as s,L as a,c as o,V as d}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const c=`import { createPopover, IRConfirm } from "@innorules/ir-style";\r
\r
const dialog1Popover = createPopover( {\r
    selector: "#dialog1",\r
    type: "dialog",\r
} );\r
\r
const dialog2Popover = createPopover( {\r
    selector: "#dialog2",\r
    type: "dialog",\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
btn2.onclick = () => dialog2Popover.show();\r
btn3.onclick = ( ev ) =>\r
{\r
    new IRConfirm( {\r
        messageHTML: "",\r
    } ).show();\r
\r
    ev.stopPropagation();\r
};\r
\r
dialog1.onclick = () => dialog1Popover.bringToTop();\r
dialog2.onclick = () => dialog2Popover.bringToTop();`,l=`body > div {\r
    height: 500px;\r
}\r
`;function t(){return e.jsxs(r,{children:[e.jsx(s,{children:"bringToTop"}),e.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),e.jsx(a,{css:l,code:c,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:o(i),children:"다이얼로그1"}),e.jsx("button",{id:"btn2",className:o(i),children:"다이얼로그2"}),e.jsx("div",{id:"dialog1",className:o("dialog","dialog--transparent"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn3",type:"button",className:o(i,n),children:"Confirm"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog","dialog--transparent"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"2222222222222222222222222"})]})})]})})]})}t.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};const g=`import { createPopover } from "@innorules/ir-style";\r
\r
const dialog1Popover = createPopover( {\r
    element: dialog1,\r
    type: "dialog",\r
} );\r
\r
const dialog2Popover = createPopover( {\r
    element: dialog2,\r
    type: "dialog",\r
} );\r
\r
const dialog3Popover = createPopover( {\r
    // selector가 있을 시, selector로 해당 element를 찾음.\r
    selector: "#dialog1",\r
    type: "dialog",\r
    escClose: false,\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
close1.onclick = () => dialog1Popover.hide();\r
btn2.onclick = () => dialog2Popover.show();\r
close2.onclick = () => dialog2Popover.hide();\r
\r
btn3.onclick = () => dialog3Popover.show();`;function m(){return e.jsxs(r,{children:[e.jsx(s,{children:"createPopover"}),e.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),e.jsx(a,{css:l,code:g,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),e.jsx("button",{id:"btn3",className:"button",children:"다이얼로그 출력 (ESC 비활성화)"}),e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions"),children:e.jsx("button",{id:"close1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn2",type:"button",className:o(i,n),children:"새 창 출력"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsx("div",{className:o("dialog__header-actions"),children:e.jsx("button",{id:"close2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),e.jsx("div",{className:o("dialog__content"),children:"2222222222"})]})})]})})]})}m.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const h=`import { createPopover } from "@innorules/ir-style";\r
\r
const dialogPopover = createPopover( {\r
    selector: "#dialog1",\r
    type: "dialog",\r
    parentElement: dialogs,\r
    onInit: ( element, handler ) =>\r
    {\r
\r
        btn_close.onclick = () => handler.hide();\r
    },\r
} );\r
\r
btn_open.onclick = () => dialogPopover.show();`;function p(){return e.jsxs(r,{children:[e.jsx(s,{children:"parentElement"}),e.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),e.jsx(a,{code:h,css:l,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn_open",className:o(i),children:"다이얼로그 열기"}),e.jsx("div",{id:"dialogs",children:e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn_close",type:"button",className:o(i,n),children:"Confirm"})})})]})})})]})})]})}p.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};const _=`import { createPopover } from "@innorules/ir-style";\r
import { IRDialogManager } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
const manager = new IRDialogManager( {\r
    // layer: "floating",\r
    // placement: "bottom-left",\r
    // offset: { x: 10, y: 10 },\r
} );\r
\r
const dialog1Popover = createPopover( {\r
    element: dialog1,\r
    type: "dialog",\r
} );\r
\r
const dialog2Popover = createPopover( {\r
    element: dialog2,\r
    type: "dialog",\r
} );\r
\r
const dialog3Popover = createPopover( {\r
    element: dialog3,\r
    type: "dialog",\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
close1.onclick = () => dialog1Popover.hide();\r
minimize1.onclick = () => dialog1Popover.minimize( manager, "타이틀", "ir-icon--convert-to-string" );\r
\r
btn2.onclick = () => dialog2Popover.show();\r
close2.onclick = () => dialog2Popover.hide();\r
minimize2.onclick = () => dialog2Popover.minimize( manager, "2222222222222222222222222222222222222222222", "ir-icon--type-number-return" );\r
\r
btn3.onclick = () => dialog3Popover.show();\r
close3.onclick = () => dialog3Popover.hide();\r
minimize3.onclick = () => dialog3Popover.minimize( manager, "새 다이얼로그", "ir-icon--add" );`;function x(){return e.jsxs(r,{children:[e.jsx(s,{children:"IRDialogManager"}),e.jsx(d,{children:"ir-style@^2.20.0"}),e.jsx("p",{children:"다이얼로그를 최소화하고 하단에 버튼으로 관리할 수 있는 매니저입니다. createPopover 핸들러의 minimize API를 이용해서 최소화할 수 있으며, 버튼을 누르면 다시 열 수 있습니다."}),e.jsx(a,{css:l,code:_,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),e.jsx("button",{id:"btn2",className:"button",children:"다이얼로그 출력2"}),e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsxs("div",{className:o("dialog__header-actions"),children:[e.jsx("button",{id:"minimize1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),e.jsx("button",{id:"close1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn3",type:"button",className:o(i,n),children:"새 창 출력"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsxs("div",{className:o("dialog__header-actions"),children:[e.jsx("button",{id:"minimize2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),e.jsx("button",{id:"close2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),e.jsx("div",{className:o("dialog__content"),children:"22222222222222222222"})]})}),e.jsx("div",{id:"dialog3",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"새 다이얼로그"}),e.jsxs("div",{className:o("dialog__header-actions"),children:[e.jsx("button",{id:"minimize3",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),e.jsx("button",{id:"close3",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),e.jsx("div",{className:o("dialog__content"),children:"새로운 다이얼로그 입니다."})]})})]})})]})}x.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const P={title:"JS Utility/Popover"},y=["BringToTop","CreatePopover","ParentElement","DialogManager"];export{t as BringToTop,m as CreatePopover,x as DialogManager,p as ParentElement,y as __namedExportsOrder,P as default};
