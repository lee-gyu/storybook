import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as i,a as n}from"./index-5H9hVZVH.js";import{D as s,a,L as l,c as o,V as c}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const r=`import { createPopover, IRConfirm } from "@innorules/ir-style";

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
`;function t(){return e.jsxs(s,{children:[e.jsx(a,{children:"bringToTop"}),e.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),e.jsx(l,{css:d,code:r,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:o(i),children:"다이얼로그1"}),e.jsx("button",{id:"btn2",className:o(i),children:"다이얼로그2"}),e.jsx("div",{id:"dialog1",className:o("dialog","dialog--transparent"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn3",type:"button",className:o(i,n),children:"Confirm"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog","dialog--transparent"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"2222222222222222222222222"})]})})]})})]})}t.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};const g=`import { createPopover } from "@innorules/ir-style";

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

btn3.onclick = () => dialog3Popover.show();`;function m(){return e.jsxs(s,{children:[e.jsx(a,{children:"createPopover"}),e.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),e.jsx(l,{css:d,code:g,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),e.jsx("button",{id:"btn3",className:"button",children:"다이얼로그 출력 (ESC 비활성화)"}),e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions"),children:e.jsx("button",{id:"close1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn2",type:"button",className:o(i,n),children:"새 창 출력"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsx("div",{className:o("dialog__header-actions"),children:e.jsx("button",{id:"close2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),e.jsx("div",{className:o("dialog__content"),children:"2222222222"})]})})]})})]})}m.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const h=`import { createPopover } from "@innorules/ir-style";

const dialogPopover = createPopover( {
    selector: "#dialog1",
    type: "dialog",
    parentElement: dialogs,
    onInit: ( element, handler ) =>
    {

        btn_close.onclick = () => handler.hide();
    },
} );

btn_open.onclick = () => dialogPopover.show();`;function p(){return e.jsxs(s,{children:[e.jsx(a,{children:"parentElement"}),e.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),e.jsx(l,{code:h,css:d,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn_open",className:o(i),children:"다이얼로그 열기"}),e.jsx("div",{id:"dialogs",children:e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsx("div",{className:o("dialog__header-actions")})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn_close",type:"button",className:o(i,n),children:"Confirm"})})})]})})})]})})]})}p.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};const _=`import { createPopover } from "@innorules/ir-style";
import { IRDialogManager } from "@innorules/ir-style/lib/esm/solid.js";

const manager = new IRDialogManager( {
    // layer: "floating",
    // placement: "bottom-left",
    // offset: { x: 10, y: 10 },
} );

const dialog1Popover = createPopover( {
    element: dialog1,
    type: "dialog",
} );

const dialog2Popover = createPopover( {
    element: dialog2,
    type: "dialog",
} );

const dialog3Popover = createPopover( {
    element: dialog3,
    type: "dialog",
} );

btn1.onclick = () => dialog1Popover.show();
close1.onclick = () => dialog1Popover.hide();
minimize1.onclick = () => dialog1Popover.minimize( manager, "타이틀", "ir-icon--convert-to-string" );

btn2.onclick = () => dialog2Popover.show();
close2.onclick = () => dialog2Popover.hide();
minimize2.onclick = () => dialog2Popover.minimize( manager, "2222222222222222222222222222222222222222222", "ir-icon--type-number-return" );

btn3.onclick = () => dialog3Popover.show();
close3.onclick = () => dialog3Popover.hide();
minimize3.onclick = () => dialog3Popover.minimize( manager, "새 다이얼로그", "ir-icon--add" );`;function x(){return e.jsxs(s,{children:[e.jsx(a,{children:"IRDialogManager"}),e.jsx(c,{children:"ir-style@^2.20.0"}),e.jsx("p",{children:"다이얼로그를 최소화하고 하단에 버튼으로 관리할 수 있는 매니저입니다. createPopover 핸들러의 minimize API를 이용해서 최소화할 수 있으며, 버튼을 누르면 다시 열 수 있습니다."}),e.jsx(l,{css:d,code:_,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),e.jsx("button",{id:"btn2",className:"button",children:"다이얼로그 출력2"}),e.jsx("div",{id:"dialog1",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"타이틀"}),e.jsxs("div",{className:o("dialog__header-actions"),children:[e.jsx("button",{id:"minimize1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),e.jsx("button",{id:"close1",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),e.jsx("div",{className:o("dialog__content"),children:"컨텐츠"}),e.jsx("div",{className:o("dialog__footer"),children:e.jsx("div",{className:o("dialog__footer-right"),children:e.jsx("button",{id:"btn3",type:"button",className:o(i,n),children:"새 창 출력"})})})]})}),e.jsx("div",{id:"dialog2",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"222"}),e.jsxs("div",{className:o("dialog__header-actions"),children:[e.jsx("button",{id:"minimize2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),e.jsx("button",{id:"close2",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),e.jsx("div",{className:o("dialog__content"),children:"22222222222222222222"})]})}),e.jsx("div",{id:"dialog3",className:o("dialog"),children:e.jsxs("div",{className:o("dialog__wrapper"),children:[e.jsxs("div",{className:o("dialog__header"),children:[e.jsx("strong",{className:o("dialog__header-title"),children:"새 다이얼로그"}),e.jsxs("div",{className:o("dialog__header-actions"),children:[e.jsx("button",{id:"minimize3",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),e.jsx("button",{id:"close3",type:"button",className:o("dialog__button-close"),children:e.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),e.jsx("div",{className:o("dialog__content"),children:"새로운 다이얼로그 입니다."})]})})]})})]})}x.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const P={title:"JS Utility/Popover"},y=["BringToTop","CreatePopover","ParentElement","DialogManager"];export{t as BringToTop,m as CreatePopover,x as DialogManager,p as ParentElement,y as __namedExportsOrder,P as default};
