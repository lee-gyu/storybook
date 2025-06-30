import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as n,a as i}from"./index-5H9hVZVH.js";import{D as s,a,L as l,c as o}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const r=`import { createPopover, IRConfirm } from "@innorules/ir-style";

const dialog1Popover = createPopover( {
    selector: "#dialog1",
    type: "dialog",
} );

const dialog2Popover = createPopover( {
    selector: "#dialog2",
    type: "dialog",
} );

btn1.onclick = () => dialog1Popover.show();
btn2.onclick = () => dialog2Popover.show();
btn3.onclick = ( ev ) =>
{
    new IRConfirm( {
        messageHTML: "",
    } ).show();

    ev.stopPropagation();
};

dialog1.onclick = () => dialog1Popover.bringToTop();
dialog2.onclick = () => dialog2Popover.bringToTop();`,d=`body > div {
    height: 500px;
}
`;function t(){return e.jsxs(s,{children:[e.jsx(a,{children:"bringToTop"}),e.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),e.jsx(l,{css:d,code:r,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:o(n),children:"다이얼로그1"}),e.jsx("button",{id:"btn2",className:o(n),children:"다이얼로그2"}),e.jsx("div",{id:"dialog1",className:o("dialog","dialog--transparent"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn3",type:"button",className:o(n,i),children:"Confirm"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog","dialog--transparent"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"2222222222222222222222222"})]})})]})})]})}t.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};const c=`import { createPopover } from "@innorules/ir-style";

const dialog1Popover = createPopover( {
    element: dialog1,
    type: "dialog",
} );

const dialog2Popover = createPopover( {
    element: dialog2,
    type: "dialog",
} );

const dialog3Popover = createPopover( {
    // selector가 있을 시, selector로 해당 element를 찾음.
    selector: "#dialog1",
    type: "dialog",
    escClose: false,
} );

btn1.onclick = () => dialog1Popover.show();
close1.onclick = () => dialog1Popover.hide();
btn2.onclick = () => dialog2Popover.show();
close2.onclick = () => dialog2Popover.hide();

btn3.onclick = () => dialog3Popover.show();`;function g(){return e.jsxs(s,{children:[e.jsx(a,{children:"createPopover"}),e.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),e.jsx(l,{css:d,code:c,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),e.jsx("button",{id:"btn3",className:"button",children:"다이얼로그 출력 (ESC 비활성화)"}),e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions"),children:e.jsx("button",{id:"close1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn2",type:"button",className:o(n,i),children:"새 창 출력"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsx("div",{className:o("dialog__header-actions"),children:e.jsx("button",{id:"close2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),e.jsx("div",{className:o("dialog__content"),children:"2222222222"})]})})]})})]})}g.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const h=`import { createPopover } from "@innorules/ir-style";

const dialogPopover = createPopover( {
    selector: "#dialog1",
    type: "dialog",
    parentElement: dialogs,
    onInit: ( element, handler ) =>
    {

        btn_close.onclick = () => handler.hide();
    },
} );

btn_open.onclick = () => dialogPopover.show();`;function m(){return e.jsxs(s,{children:[e.jsx(a,{children:"parentElement"}),e.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),e.jsx(l,{code:h,css:d,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn_open",className:o(n),children:"다이얼로그 열기"}),e.jsx("div",{id:"dialogs",children:e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn_close",type:"button",className:o(n,i),children:"Confirm"})})})]})})})]})})]})}m.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};const N={title:"JS Utility/Popover"},b=["BringToTop","CreatePopover","ParentElement"];export{t as BringToTop,g as CreatePopover,m as ParentElement,b as __namedExportsOrder,N as default};
