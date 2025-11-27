import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as r,c as i,L as e,V as t}from"./version-tag-B2V-8a8w.js";import"./iframe-72AAcSIy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfaMo4xr.js";const l=`import { createPopover } from "@innorules/ir-style";\r
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
\r
globalThis.dialog1Popover = dialog1Popover;\r
globalThis.dialog2Popover = dialog2Popover;`,a=`dialog1.onclick = () => dialog1Popover.bringToTop();\r
dialog2.onclick = () => dialog2Popover.bringToTop();`,s=`<div>\r
    <button id="btn1" class="button">다이얼로그1</button>\r
    <button id="btn2" class="button">다이얼로그2</button>\r
\r
    <div id="dialog1" class="dialog dialog--transparent">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">타이틀</strong>\r
            </div>\r
            <div class="dialog__content">컨텐츠</div>\r
            <div class="dialog__footer">\r
                <div class="dialog__footer-right">\r
                    <button id="btn3" type="button" class="button button--primary">Confirm</button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div id="dialog2" class="dialog dialog--transparent">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">다이얼로그2 타이틀</strong>\r
            </div>\r
            <div class="dialog__content">다이얼로그 컨텐츠입니다. bringToTop</div>\r
        </div>\r
    </div>\r
</div>`,d=[["/classes/_innorules_inno-front-core.IRPopover.html","IRPopover"]];function c(){return o.jsxs(n,{children:[o.jsx(r,{children:"bringToTop"}),o.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),o.jsx(i,{docList:d}),o.jsx(e,{fixedHeight:500,htmlRaw:s,code:l,exampleCode:a})]})}c.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};const g=`import { createPopover } from "@innorules/ir-style";\r
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
    // ESC 비활성화\r
    escClose: false,\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
close1.onclick = () => dialog1Popover.hide();\r
\r
btn2.onclick = () => dialog2Popover.show();\r
close2.onclick = () => dialog2Popover.hide();\r
\r
btn3.onclick = () => dialog3Popover.show();`,v=`<div>\r
    <button id="btn1" class="button">다이얼로그 출력</button>\r
    <button id="btn3" class="button">다이얼로그 출력 (ESC 비활성화)</button>\r
\r
    <div id="dialog1" class="dialog">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">타이틀</strong>\r
                <div class="dialog__header-actions">\r
                    <button id="close1" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--close"></i>\r
                    </button>\r
                </div>\r
            </div>\r
            <div class="dialog__content">컨텐츠</div>\r
            <div class="dialog__footer">\r
                <div class="dialog__footer-right">\r
                    <button id="btn2" type="button" class="button button--primary">새 창 출력</button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div id="dialog2" class="dialog">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">다이얼로그2 타이틀</strong>\r
                <div class="dialog__header-actions">\r
                    <button id="close2" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--close"></i>\r
                    </button>\r
                </div>\r
            </div>\r
            <div class="dialog__content">다이얼로그 컨텐츠입니다.</div>\r
        </div>\r
    </div>\r
</div>`,p=[["/classes/_innorules_inno-front-core.IRPopover.html","IRPopover"],["/variables/_innorules_inno-front-core.createPopover.html","createPopover"]];function _(){return o.jsxs(n,{children:[o.jsx(r,{children:"createPopover"}),o.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),o.jsx(i,{docList:p}),o.jsx(e,{fixedHeight:500,htmlRaw:v,exampleCode:g})]})}_.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const b=`import { createPopover } from "@innorules/ir-style";\r
\r
const dialogPopover = createPopover( {\r
    selector: "#dialog1",\r
    type: "dialog",\r
    // parentElement 설정시, 특정 요소에 다이얼로그 출력\r
    parentElement: dialogs,\r
    onInit: ( element, handler ) =>\r
    {\r
\r
        btn_close.onclick = () => handler.hide();\r
    },\r
} );\r
\r
btn_open.onclick = () => dialogPopover.show();`,u=`<div>\r
    <button id="btn_open" class="button">다이얼로그 열기</button>\r
    <div id="dialogs"></div>\r
    <div id="dialog1" class="dialog">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">타이틀</strong>\r
                <div class="dialog__header-actions">\r
                </div>\r
            </div>\r
            <div class="dialog__content">컨텐츠</div>\r
            <div class="dialog__footer">\r
                <div class="dialog__footer-right">\r
                    <button id="btn_close" type="button" class="button button--primary">Confirm</button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,m=[["/variables/_innorules_inno-front-core.createPopover.html","createPopover"],["/types/_innorules_inno-front-core.PopoverArgs.html","PopoverArgs"]];function h(){return o.jsxs(n,{children:[o.jsx(r,{children:"parentElement"}),o.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),o.jsx(i,{docList:m}),o.jsx(e,{fixedHeight:500,htmlRaw:u,exampleCode:b})]})}h.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};const P=`import { createPopover } from "@innorules/ir-style";\r
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
\r
btn2.onclick = () => dialog2Popover.show();\r
close2.onclick = () => dialog2Popover.hide();\r
\r
btn3.onclick = () => dialog3Popover.show();\r
close3.onclick = () => dialog3Popover.hide();\r
\r
globalThis.dialog1Popover = dialog1Popover;\r
globalThis.dialog2Popover = dialog2Popover;\r
globalThis.dialog3Popover = dialog3Popover;`,f=`import { IRDialogManager } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
/**\r
 * DialogManager 생성\r
 * - layer: 팝오버가 속할 레이어 지정 (기본값: floating)\r
 * - placement: 최소화된 다이얼로그가 위치할 화면 위치 지정 (기본값: bottom-right)\r
 * - offset: 최소화된 다이얼로그의 위치 오프셋 지정 (기본값: { x: 0, y: 0 })\r
 */\r
const manager = new IRDialogManager( {\r
    // layer: "floating",\r
    // placement: "bottom-right",\r
    // offset: { x: 0, y: 0 },\r
} );\r
\r
minimize1.onclick = () => dialog1Popover.minimize( manager, "타이틀", "ir-icon--convert-to-string" );\r
minimize2.onclick = () => dialog2Popover.minimize( manager, "다이얼로그22222", "ir-icon--type-number-return" );\r
minimize3.onclick = () => dialog3Popover.minimize( manager, "새 다이얼로그", "ir-icon--add" );`,x=`<div>\r
    <button id="btn1" class="button">다이얼로그 출력</button>\r
    <button id="btn2" class="button">다이얼로그 출력2</button>\r
\r
    <div id="dialog1" class="dialog">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">타이틀</strong>\r
                <div class="dialog__header-actions">\r
                    <button id="minimize1" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--delete-dash"></i>\r
                    </button>\r
                    <button id="close1" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--close"></i>\r
                    </button>\r
                </div>\r
            </div>\r
            <div class="dialog__content">컨텐츠</div>\r
            <div class="dialog__footer">\r
                <div class="dialog__footer-right">\r
                    <button id="btn3" type="button" class="button button--primary">새 창 출력</button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div id="dialog2" class="dialog">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">다이얼로그2 타이틀</strong>\r
                <div class="dialog__header-actions">\r
                    <button id="minimize2" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--delete-dash"></i>\r
                    </button>\r
                    <button id="close2" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--close"></i>\r
                    </button>\r
                </div>\r
            </div>\r
            <div class="dialog__content">다이얼로그 컨텐츠입니다.</div>\r
        </div>\r
    </div>\r
\r
    <div id="dialog3" class="dialog">\r
        <div class="dialog__wrapper">\r
            <div class="dialog__header">\r
                <strong class="dialog__header-title">새 다이얼로그 3</strong>\r
                <div class="dialog__header-actions">\r
                    <button id="minimize3" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--delete-dash"></i>\r
                    </button>\r
                    <button id="close3" type="button" class="dialog__button-close">\r
                        <i class="ir-icon ir-icon--close"></i>\r
                    </button>\r
                </div>\r
            </div>\r
            <div class="dialog__content">새로운 다이얼로그 3 입니다.</div>\r
        </div>\r
    </div>\r
</div>`,y=[["/classes/_innorules_inno-front-core.IRPopover.html","IRPopover"]];function j(){return o.jsxs(n,{children:[o.jsx(r,{children:"IRDialogManager"}),o.jsx(t,{children:"ir-style@^2.20.0"}),o.jsxs("p",{children:["다이얼로그를 최소화하고 하단에 버튼으로 관리할 수 있는 매니저입니다.",o.jsx("br",{}),"createPopover 핸들러의 minimize API를 이용해서 최소화할 수 있으며, 버튼을 누르면 다시 열 수 있습니다."]}),o.jsx(i,{docList:y}),o.jsx(e,{fixedHeight:500,htmlRaw:x,code:P,exampleCode:f})]})}j.__docgenInfo={description:"",methods:[],displayName:"DialogManager"};const I={title:"JS Utility/Popover"},D=["BringToTop","CreatePopover","ParentElement","DialogManager"];export{c as BringToTop,_ as CreatePopover,j as DialogManager,h as ParentElement,D as __namedExportsOrder,I as default};
