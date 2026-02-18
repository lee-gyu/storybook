import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as i,c as e,L as t,V as l}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const a=`import { createPopover } from "@innorules/ir-style";

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

globalThis.dialog1Popover = dialog1Popover;
globalThis.dialog2Popover = dialog2Popover;`,s=`dialog1.onclick = () => dialog1Popover.bringToTop();
dialog2.onclick = () => dialog2Popover.bringToTop();`,d=`<div>
    <button id="btn1" class="button">다이얼로그1</button>
    <button id="btn2" class="button">다이얼로그2</button>

    <div id="dialog1" class="dialog dialog--transparent">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">타이틀</strong>
            </div>
            <div class="dialog__content">컨텐츠</div>
            <div class="dialog__footer">
                <div class="dialog__footer-right">
                    <button id="btn3" type="button" class="button button--primary">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <div id="dialog2" class="dialog dialog--transparent">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">다이얼로그2 타이틀</strong>
            </div>
            <div class="dialog__content">다이얼로그 컨텐츠입니다. bringToTop</div>
        </div>
    </div>
</div>`,r=[["/classes/_innorules_inno-front-core.IRPopover.html","IRPopover"]];function c(){return n.jsxs(o,{children:[n.jsx(i,{children:"bringToTop"}),n.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),n.jsx(e,{docList:r}),n.jsx(t,{fixedHeight:500,htmlRaw:d,code:a,exampleCode:s})]})}c.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};const g=`import { createPopover } from "@innorules/ir-style";

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
    // ESC 비활성화
    escClose: false,
} );

btn1.onclick = () => dialog1Popover.show();
close1.onclick = () => dialog1Popover.hide();

btn2.onclick = () => dialog2Popover.show();
close2.onclick = () => dialog2Popover.hide();

btn3.onclick = () => dialog3Popover.show();`,v=`<div>
    <button id="btn1" class="button">다이얼로그 출력</button>
    <button id="btn3" class="button">다이얼로그 출력 (ESC 비활성화)</button>

    <div id="dialog1" class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">타이틀</strong>
                <div class="dialog__header-actions">
                    <button id="close1" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--close"></i>
                    </button>
                </div>
            </div>
            <div class="dialog__content">컨텐츠</div>
            <div class="dialog__footer">
                <div class="dialog__footer-right">
                    <button id="btn2" type="button" class="button button--primary">새 창 출력</button>
                </div>
            </div>
        </div>
    </div>

    <div id="dialog2" class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">다이얼로그2 타이틀</strong>
                <div class="dialog__header-actions">
                    <button id="close2" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--close"></i>
                    </button>
                </div>
            </div>
            <div class="dialog__content">다이얼로그 컨텐츠입니다.</div>
        </div>
    </div>
</div>`,p=[["/classes/_innorules_inno-front-core.IRPopover.html","IRPopover"],["/variables/_innorules_inno-front-core.createPopover.html","createPopover"]];function _(){return n.jsxs(o,{children:[n.jsx(i,{children:"createPopover"}),n.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),n.jsx(e,{docList:p}),n.jsx(t,{fixedHeight:500,htmlRaw:v,exampleCode:g})]})}_.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const m=`import { createPopover } from "@innorules/ir-style";

const dialogPopover = createPopover( {
    selector: "#dialog1",
    type: "dialog",
    // parentElement 설정시, 특정 요소에 다이얼로그 출력
    parentElement: dialogs,
    onInit: ( element, handler ) =>
    {

        btn_close.onclick = () => handler.hide();
    },
} );

btn_open.onclick = () => dialogPopover.show();`,b=`<div>
    <button id="btn_open" class="button">다이얼로그 열기</button>
    <div id="dialogs"></div>
    <div id="dialog1" class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">타이틀</strong>
                <div class="dialog__header-actions">
                </div>
            </div>
            <div class="dialog__content">컨텐츠</div>
            <div class="dialog__footer">
                <div class="dialog__footer-right">
                    <button id="btn_close" type="button" class="button button--primary">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</div>`,u=[["/variables/_innorules_inno-front-core.createPopover.html","createPopover"],["/types/_innorules_inno-front-core.PopoverArgs.html","PopoverArgs"]];function h(){return n.jsxs(o,{children:[n.jsx(i,{children:"parentElement"}),n.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),n.jsx(e,{docList:u}),n.jsx(t,{fixedHeight:500,htmlRaw:b,exampleCode:m})]})}h.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};const P=`import { createPopover } from "@innorules/ir-style";

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

btn2.onclick = () => dialog2Popover.show();
close2.onclick = () => dialog2Popover.hide();

btn3.onclick = () => dialog3Popover.show();
close3.onclick = () => dialog3Popover.hide();

globalThis.dialog1Popover = dialog1Popover;
globalThis.dialog2Popover = dialog2Popover;
globalThis.dialog3Popover = dialog3Popover;`,f=`import { IRDialogManager } from "@innorules/ir-style/lib/esm/solid.js";

/**
 * DialogManager 생성
 * - layer: 팝오버가 속할 레이어 지정 (기본값: floating)
 * - placement: 최소화된 다이얼로그가 위치할 화면 위치 지정 (기본값: bottom-right)
 * - offset: 최소화된 다이얼로그의 위치 오프셋 지정 (기본값: { x: 0, y: 0 })
 */
const manager = new IRDialogManager( {
    // layer: "floating",
    // placement: "bottom-right",
    // offset: { x: 0, y: 0 },
} );

// 최소화 버튼 클릭 시 다이얼로그 최소화
minimize1.onclick = () => manager.minimize( dialog1Popover, "타이틀", "ir-icon--convert-to-string" );
minimize2.onclick = () => manager.minimize( dialog2Popover, "다이얼로그22222", "ir-icon--type-number-return" );
minimize3.onclick = () => manager.minimize( dialog3Popover, "새 다이얼로그", "ir-icon--add" );

// 최소화 다이얼로그 리스트 초기화
clearBtn.onclick = () => manager.clear();

changeInfoBtn.onclick = () =>
{
    // 최소화 다이얼로그 정보 업데이트 (title, icon 변경 가능)
    manager.updateMinimizedInfo( dialog1Popover, { title: "변경된 타이틀", icon: "ir-icon--cloud" } );
};

changePosition.onclick = () =>
{
    manager.setPositionInfo( { placement: "bottom-left", offset: { x: 20, y: 20 } } );
};

// 최소화 될 때 훅
manager.hook.addSyncHook( "minimize", ( dialogInfo ) =>
{
    console.log( "minimize", dialogInfo );

    // 최소화되었는지 상태 확인 API
    console.log( "최소화 상태: ", manager.isMinimized( dialogInfo.instance ) );

    // 최소화 다이얼로그 목록에 있는 리스트 확인 API
    console.log( "최소화 다이얼로그 목록: ", manager.minimizedDialogList );
} );

// 최소화 -> 최대화 될 때 훅
manager.hook.addSyncHook( "restore", ( dialogInfo ) =>
{
    console.log( "restore", dialogInfo );

    console.log( "최소화 상태: ", manager.isMinimized( dialogInfo.instance ) );
} );
`,x=`<div class="flex flex--column gap-x--sm gap-y--sm">
    <div>
        <button id="btn1" class="button">다이얼로그1 출력</button>
        <button id="btn2" class="button">다이얼로그2 출력</button>
    </div>
    <div>
        <button id="changePosition" class="button">최소화 위치 변경</button>
        <button id="changeInfoBtn" class="button">다이얼로그1 타이틀 변경</button>
        <button id="clearBtn" class="button">clear</button>
    </div>

    <div id="dialog1" class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">타이틀</strong>
                <div class="dialog__header-actions">
                    <button id="minimize1" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--delete-dash"></i>
                    </button>
                    <button id="close1" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--close"></i>
                    </button>
                </div>
            </div>
            <div class="dialog__content">컨텐츠</div>
            <div class="dialog__footer">
                <div class="dialog__footer-right">
                    <button id="btn3" type="button" class="button button--primary">새 창 출력</button>
                </div>
            </div>
        </div>
    </div>

    <div id="dialog2" class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">다이얼로그2 타이틀</strong>
                <div class="dialog__header-actions">
                    <button id="minimize2" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--delete-dash"></i>
                    </button>
                    <button id="close2" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--close"></i>
                    </button>
                </div>
            </div>
            <div class="dialog__content">다이얼로그 컨텐츠입니다.</div>
        </div>
    </div>

    <div id="dialog3" class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <strong class="dialog__header-title">새 다이얼로그 3</strong>
                <div class="dialog__header-actions">
                    <button id="minimize3" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--delete-dash"></i>
                    </button>
                    <button id="close3" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--close"></i>
                    </button>
                </div>
            </div>
            <div class="dialog__content">새로운 다이얼로그 3 입니다.</div>
        </div>
    </div>
</div>`,y=[["/classes/_innorules_inno-front-core.IRPopover.html","IRPopover"]];function I(){return n.jsxs(o,{children:[n.jsx(i,{children:"IRDialogManager"}),n.jsx(l,{children:"ir-style@^2.20.0"}),n.jsxs("p",{children:["다이얼로그를 최소화하고 하단에 버튼으로 관리할 수 있는 매니저입니다.",n.jsx("br",{}),"IRDialogManager의 minimize API를 이용해서 최소화할 수 있으며, 버튼을 누르면 다시 열 수 있습니다."]}),n.jsx(e,{docList:y}),n.jsx(t,{fixedHeight:500,htmlRaw:x,code:P,exampleCode:f})]})}I.__docgenInfo={description:"",methods:[],displayName:"DialogManager"};const j=`import {
    createPopover,
    IRPopoverMaximizePlugin,
} from "@innorules/ir-style";

const dialogPopover = createPopover( {
    selector: "#dialog1",
    type: "dialog",
    plugins: [
        new IRPopoverMaximizePlugin(),
    ],
} );

btn_open.onclick = () => dialogPopover.show();`,k=`<div>
    <button id="btn_open" class="button">다이얼로그 열기</button>
    <div id="dialogs"></div>
    <div id="dialog1" class="dialog">
        <div class="dialog__wrapper" style="width: 400px">
            <div class="dialog__header">
                <strong class="dialog__header-title">타이틀</strong>
                <div class="dialog__header-actions">
                    <button type="button" class="dialog__button-minimize">
                        <i class="ir-icon ir-icon--delete-dash"></i>
                    </button>
                    <button id="close1" type="button" class="dialog__button-close">
                        <i class="ir-icon ir-icon--close"></i>
                    </button>
                </div>
            </div>
            <div class="dialog__content">컨텐츠</div>
            <div class="dialog__footer">
                <div class="dialog__footer-right">
                    <button id="btn_close" type="button" class="button button--primary">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</div>`,z=[["/classes/_innorules_inno-front-core.IRPopoverMaximizePlugin.html","IRPopoverMaximizePlugin"]];function R(){return n.jsxs(o,{children:[n.jsx(i,{children:"IRPopoverMaximizePlugin"}),n.jsx(e,{docList:z}),n.jsx(t,{fixedHeight:500,htmlRaw:k,exampleCode:j})]})}R.__docgenInfo={description:"",methods:[],displayName:"IRPopoverMaximizePlugin"};const L={title:"JS Utility/Popover"},$=["BringToTop","CreatePopover","ParentElement","DialogManager","MaximizePlugin"];export{c as BringToTop,_ as CreatePopover,I as DialogManager,R as MaximizePlugin,h as ParentElement,$ as __namedExportsOrder,L as default};
