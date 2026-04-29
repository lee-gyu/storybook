import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./context-C6uFeUW4.js";import{t as s}from"./jsx-runtime-6sF1Ejqi.js";var c,l=e((()=>{c=`import { createPopover } from "@innorules/ir-style";

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
globalThis.dialog2Popover = dialog2Popover;`})),u,d=e((()=>{u=`dialog1.onclick = () => dialog1Popover.bringToTop();
dialog2.onclick = () => dialog2Popover.bringToTop();`})),f,p=e((()=>{f=`<div>
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
</div>`}));function m(){return(0,h.jsxs)(r,{children:[(0,h.jsx)(t,{children:`bringToTop`}),(0,h.jsx)(`p`,{children:`createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다.`}),(0,h.jsx)(i,{docList:g}),(0,h.jsx)(a,{fixedHeight:500,htmlRaw:f,code:c,exampleCode:u})]})}var h,g,_=e((()=>{l(),d(),p(),o(),h=s(),g=[[`/classes/_innorules_inno-front-core.IRPopover.html`,`IRPopover`]],m.__docgenInfo={description:``,methods:[],displayName:`BringToTop`}})),v,y=e((()=>{v=`import { createPopover } from "@innorules/ir-style";

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

btn3.onclick = () => dialog3Popover.show();`})),b,x=e((()=>{b=`<div>
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
</div>`}));function S(){return(0,C.jsxs)(r,{children:[(0,C.jsx)(t,{children:`createPopover`}),(0,C.jsx)(`p`,{children:`내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)`}),(0,C.jsx)(i,{docList:w}),(0,C.jsx)(a,{fixedHeight:500,htmlRaw:b,exampleCode:v})]})}var C,w,T=e((()=>{y(),x(),o(),C=s(),w=[[`/classes/_innorules_inno-front-core.IRPopover.html`,`IRPopover`],[`/variables/_innorules_inno-front-core.createPopover.html`,`createPopover`]],S.__docgenInfo={description:``,methods:[],displayName:`CreatePopover`}})),E,D=e((()=>{E=`import { createPopover } from "@innorules/ir-style";

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

btn_open.onclick = () => dialogPopover.show();`})),O,k=e((()=>{O=`<div>
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
</div>`}));function A(){return(0,j.jsxs)(r,{children:[(0,j.jsx)(t,{children:`parentElement`}),(0,j.jsx)(`p`,{children:`부모 요소를 지정하여 DOM 마운트를 제어 합니다.`}),(0,j.jsx)(i,{docList:M}),(0,j.jsx)(a,{fixedHeight:500,htmlRaw:O,exampleCode:E})]})}var j,M,N=e((()=>{D(),k(),o(),j=s(),M=[[`/variables/_innorules_inno-front-core.createPopover.html`,`createPopover`],[`/types/_innorules_inno-front-core.PopoverArgs.html`,`PopoverArgs`]],A.__docgenInfo={description:``,methods:[],displayName:`ParentElement`}})),P,F=e((()=>{P=`import { createPopover } from "@innorules/ir-style";

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
globalThis.dialog3Popover = dialog3Popover;`})),I,L=e((()=>{I=`import { IRDialogManager } from "@innorules/ir-style/lib/esm/solid.js";

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
`})),R,z=e((()=>{R=`<div class="flex flex--column gap-x--sm gap-y--sm">
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
</div>`}));function B(){return(0,V.jsxs)(r,{children:[(0,V.jsx)(t,{children:`IRDialogManager`}),(0,V.jsx)(n,{children:`ir-style@^2.20.0`}),(0,V.jsxs)(`p`,{children:[`다이얼로그를 최소화하고 하단에 버튼으로 관리할 수 있는 매니저입니다.`,(0,V.jsx)(`br`,{}),`IRDialogManager의 minimize API를 이용해서 최소화할 수 있으며, 버튼을 누르면 다시 열 수 있습니다.`]}),(0,V.jsx)(i,{docList:H}),(0,V.jsx)(a,{fixedHeight:500,htmlRaw:R,code:P,exampleCode:I})]})}var V,H,U=e((()=>{F(),L(),z(),o(),V=s(),H=[[`/classes/_innorules_inno-front-core.IRPopover.html`,`IRPopover`]],B.__docgenInfo={description:``,methods:[],displayName:`DialogManager`}})),W,G=e((()=>{W=`import {
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

btn_open.onclick = () => dialogPopover.show();`})),K,q=e((()=>{K=`<div>
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
</div>`}));function J(){return(0,Y.jsxs)(r,{children:[(0,Y.jsx)(t,{children:`IRPopoverMaximizePlugin`}),(0,Y.jsx)(i,{docList:X}),(0,Y.jsx)(a,{fixedHeight:500,htmlRaw:K,exampleCode:W})]})}var Y,X,Z=e((()=>{G(),q(),o(),Y=s(),X=[[`/classes/_innorules_inno-front-core.IRPopoverMaximizePlugin.html`,`IRPopoverMaximizePlugin`]],J.__docgenInfo={description:``,methods:[],displayName:`IRPopoverMaximizePlugin`}})),Q,$;e((()=>{_(),T(),N(),U(),Z(),Q={title:`JS Utility/Popover`},$=[`BringToTop`,`CreatePopover`,`ParentElement`,`DialogManager`,`MaximizePlugin`]}))();export{m as BringToTop,S as CreatePopover,B as DialogManager,J as MaximizePlugin,A as ParentElement,$ as __namedExportsOrder,Q as default};