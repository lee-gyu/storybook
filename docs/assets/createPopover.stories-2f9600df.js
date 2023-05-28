import{j as l,a as o,F as t}from"./jsx-runtime-d057ca55.js";import{c as s}from"./button.classNames-50f35cbd.js";import{c as a}from"./dialog.classNames-23eb9c08.js";import{c as e}from"./index-631dc947.js";import{D as c,a as d,L as g}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";const B={title:"JS Utility/Create Popover"},m=`
body > div {
    height: 500px;
}`,i=()=>l(c,{children:[o(d,{children:"createPopover"}),o("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),o(g,{css:m,defaultHtmlFold:[2,16],html:l(t,{children:[o("button",{id:"btn1",className:e(s.button["&"]),children:"다이얼로그 출력"}),o("button",{id:"btn3",className:e(s.button["&"]),children:"다이얼로그 출력 (ESC 비활성화)"}),o("div",{id:"dialog1",className:e(a.dialog["&"]),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o("div",{className:e(a.dialogHeaderActions["&"]),children:o("button",{id:"close1",type:"button",className:e(a.dialogButtonClose["&"]),children:o("i",{className:"ir-icon ir-icon--close"})})})]}),o("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o("div",{className:e(a.dialogFooter["&"]),children:o("div",{className:e(a.dialogFooterRight["&"]),children:o("button",{id:"btn2",type:"button",className:e(s.button["&"],s.button.primary),children:"새 창 출력"})})})]})}),o("div",{id:"dialog2",className:e(a.dialog["&"]),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"222"}),o("div",{className:e(a.dialogHeaderActions["&"]),children:o("button",{id:"close2",type:"button",className:e(a.dialogButtonClose["&"]),children:o("i",{className:"ir-icon ir-icon--close"})})})]}),o("div",{className:e(a.dialogContent["&"]),children:"2222222222"})]})})]}),code:`
import { createPopover } from "./dist/index.js";

const dialog1Popover = createPopover({
    element: dialog1,
    type: "dialog"
})

const dialog2Popover = createPopover({
    element: dialog2,
    type: "dialog"
})

const dialog3Popover = createPopover({
    // selector가 있을 시, selector로 해당 element를 찾음.
    selector: "#dialog1",
    type: "dialog",
    escClose: false
})

btn1.onclick = () => dialog1Popover.show();
close1.onclick = () => dialog1Popover.hide();
btn2.onclick = () => dialog2Popover.show();
close2.onclick = () => dialog2Popover.hide();

btn3.onclick = () => dialog3Popover.show();

`})]}),n=()=>l(c,{children:[o(d,{children:"bringToTop"}),o("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),o(g,{css:m,defaultHtmlFold:[2,16],html:l(t,{children:[o("button",{id:"btn1",className:e(s.button["&"]),children:"다이얼로그1"}),o("button",{id:"btn2",className:e(s.button["&"]),children:"다이얼로그2"}),o("div",{id:"dialog1",className:e(a.dialog["&"],a.dialog.transparent),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o("div",{className:e(a.dialogHeaderActions["&"])})]}),o("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o("div",{className:e(a.dialogFooter["&"]),children:o("div",{className:e(a.dialogFooterRight["&"]),children:o("button",{id:"btn3",type:"button",className:e(s.button["&"],s.button.primary),children:"Confirm"})})})]})}),o("div",{id:"dialog2",className:e(a.dialog["&"],a.dialog.transparent),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"222"}),o("div",{className:e(a.dialogHeaderActions["&"])})]}),o("div",{className:e(a.dialogContent["&"]),children:"2222222222222222222222222"})]})})]}),code:`
import { createPopover, IRConfirm } from "./dist/index.js";

const dialog1Popover = createPopover({
    selector: "#dialog1",
    type: "dialog"
})

const dialog2Popover = createPopover({
    selector: "#dialog2",
    type: "dialog"
})

btn1.onclick = () => dialog1Popover.show();
btn2.onclick = () => dialog2Popover.show();
btn3.onclick = (ev) => {
    new IRConfirm({
        messageHTML: ""
    }).show();

    ev.stopPropagation();
}

dialog1.onclick = () => dialog1Popover.bringToTop();
dialog2.onclick = () => dialog2Popover.bringToTop();
`})]}),r=()=>l(c,{children:[o(d,{children:"parentElement"}),o("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),o(g,{css:m,defaultHtmlFold:[2,16],html:l(t,{children:[o("button",{id:"btn_open",className:e(s.button["&"]),children:"다이얼로그 열기"}),o("div",{id:"dialogs",children:o("div",{id:"dialog1",className:e(a.dialog["&"]),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o("div",{className:e(a.dialogHeaderActions["&"])})]}),o("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o("div",{className:e(a.dialogFooter["&"]),children:o("div",{className:e(a.dialogFooterRight["&"]),children:o("button",{id:"btn_close",type:"button",className:e(s.button["&"],s.button.primary),children:"Confirm"})})})]})})})]}),code:`
import { createPopover, IRConfirm } from "./dist/index.js";

const dialogPopover = createPopover({
    selector: "#dialog1",
    type: "dialog",
    parentElement: dialogs,
    onInit: (element, handler) => {

        btn_close.onclick = () => handler.hide();
    }
})

btn_open.onclick = () => dialogPopover.show();

`})]});var p,v,N;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createPopover</DocTitle>\r
            <p>내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)</p>\r
            <LiveEditor css={css} defaultHtmlFold={[2, 16]} html={<>\r
                        <button id="btn1" className={classNames(clsButton.button["&"])}>다이얼로그 출력</button>\r
                        <button id="btn3" className={classNames(clsButton.button["&"])}>다이얼로그 출력 (ESC 비활성화)</button>\r
                        <div id="dialog1" className={classNames(clsDialog.dialog["&"])}>\r
                            <div className={classNames(clsDialog.dialogWrapper["&"])}>\r
                                <div className={classNames(clsDialog.dialogHeader["&"])}>\r
                                    <strong className={classNames(clsDialog.dialogHeaderTitle["&"])}>타이틀</strong>\r
                                    <div className={classNames(clsDialog.dialogHeaderActions["&"])}>\r
                                        <button id="close1" type="button" className={classNames(clsDialog.dialogButtonClose["&"])}>\r
                                            <i className="ir-icon ir-icon--close"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div className={classNames(clsDialog.dialogContent["&"])}>컨텐츠</div>\r
                                <div className={classNames(clsDialog.dialogFooter["&"])}>\r
                                    <div className={classNames(clsDialog.dialogFooterRight["&"])}>\r
                                        <button id="btn2" type="button" className={classNames(clsButton.button["&"], clsButton.button.primary)}>새 창 출력</button>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div id="dialog2" className={classNames(clsDialog.dialog["&"])}>\r
                            <div className={classNames(clsDialog.dialogWrapper["&"])}>\r
                                <div className={classNames(clsDialog.dialogHeader["&"])}>\r
                                    <strong className={classNames(clsDialog.dialogHeaderTitle["&"])}>222</strong>\r
                                    <div className={classNames(clsDialog.dialogHeaderActions["&"])}>\r
                                        <button id="close2" type="button" className={classNames(clsDialog.dialogButtonClose["&"])}>\r
                                            <i className="ir-icon ir-icon--close"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div className={classNames(clsDialog.dialogContent["&"])}>2222222222</div>\r
                            </div>\r
                        </div>\r
                    </>} code={\`
import { createPopover } from "./dist/index.js";

const dialog1Popover = createPopover({
    element: dialog1,
    type: "dialog"
})

const dialog2Popover = createPopover({
    element: dialog2,
    type: "dialog"
})

const dialog3Popover = createPopover({
    // selector가 있을 시, selector로 해당 element를 찾음.
    selector: "#dialog1",
    type: "dialog",
    escClose: false
})

btn1.onclick = () => dialog1Popover.show();
close1.onclick = () => dialog1Popover.hide();
btn2.onclick = () => dialog2Popover.show();
close2.onclick = () => dialog2Popover.hide();

btn3.onclick = () => dialog3Popover.show();

\`} />\r
        </Doc>;
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var b,u,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>bringToTop</DocTitle>\r
            <p>createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다.</p>\r
            <LiveEditor css={css} defaultHtmlFold={[2, 16]} html={<>\r
                        <button id="btn1" className={classNames(clsButton.button["&"])}>다이얼로그1</button>\r
                        <button id="btn2" className={classNames(clsButton.button["&"])}>다이얼로그2</button>\r
                        <div id="dialog1" className={classNames(clsDialog.dialog["&"], clsDialog.dialog.transparent)}>\r
                            <div className={classNames(clsDialog.dialogWrapper["&"])}>\r
                                <div className={classNames(clsDialog.dialogHeader["&"])}>\r
                                    <strong className={classNames(clsDialog.dialogHeaderTitle["&"])}>타이틀</strong>\r
                                    <div className={classNames(clsDialog.dialogHeaderActions["&"])}>\r
                                    </div>\r
                                </div>\r
                                <div className={classNames(clsDialog.dialogContent["&"])}>컨텐츠</div>\r
                                <div className={classNames(clsDialog.dialogFooter["&"])}>\r
                                    <div className={classNames(clsDialog.dialogFooterRight["&"])}>\r
                                        <button id="btn3" type="button" className={classNames(clsButton.button["&"], clsButton.button.primary)}>Confirm</button>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div id="dialog2" className={classNames(clsDialog.dialog["&"], clsDialog.dialog.transparent)}>\r
                            <div className={classNames(clsDialog.dialogWrapper["&"])}>\r
                                <div className={classNames(clsDialog.dialogHeader["&"])}>\r
                                    <strong className={classNames(clsDialog.dialogHeaderTitle["&"])}>222</strong>\r
                                    <div className={classNames(clsDialog.dialogHeaderActions["&"])}>\r
                                    </div>\r
                                </div>\r
                                <div className={classNames(clsDialog.dialogContent["&"])}>2222222222222222222222222</div>\r
                            </div>\r
                        </div>\r
                    </>} code={\`
import { createPopover, IRConfirm } from "./dist/index.js";

const dialog1Popover = createPopover({
    selector: "#dialog1",
    type: "dialog"
})

const dialog2Popover = createPopover({
    selector: "#dialog2",
    type: "dialog"
})

btn1.onclick = () => dialog1Popover.show();
btn2.onclick = () => dialog2Popover.show();
btn3.onclick = (ev) => {
    new IRConfirm({
        messageHTML: ""
    }).show();

    ev.stopPropagation();
}

dialog1.onclick = () => dialog1Popover.bringToTop();
dialog2.onclick = () => dialog2Popover.bringToTop();
\`} />\r
        </Doc>;
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var P,D,T;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>parentElement</DocTitle>\r
            <p>부모 요소를 지정하여 DOM 마운트를 제어 합니다.</p>\r
            <LiveEditor css={css} defaultHtmlFold={[2, 16]} html={<>\r
                        <button id="btn_open" className={classNames(clsButton.button["&"])}>다이얼로그 열기</button>\r
                        <div id="dialogs">\r
                            <div id="dialog1" className={classNames(clsDialog.dialog["&"])}>\r
                                <div className={classNames(clsDialog.dialogWrapper["&"])}>\r
                                    <div className={classNames(clsDialog.dialogHeader["&"])}>\r
                                        <strong className={classNames(clsDialog.dialogHeaderTitle["&"])}>타이틀</strong>\r
                                        <div className={classNames(clsDialog.dialogHeaderActions["&"])}>\r
                                        </div>\r
                                    </div>\r
                                    <div className={classNames(clsDialog.dialogContent["&"])}>컨텐츠</div>\r
                                    <div className={classNames(clsDialog.dialogFooter["&"])}>\r
                                        <div className={classNames(clsDialog.dialogFooterRight["&"])}>\r
                                            <button id="btn_close" type="button" className={classNames(clsButton.button["&"], clsButton.button.primary)}>Confirm</button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { createPopover, IRConfirm } from "./dist/index.js";

const dialogPopover = createPopover({
    selector: "#dialog1",
    type: "dialog",
    parentElement: dialogs,
    onInit: (element, handler) => {

        btn_close.onclick = () => handler.hide();
    }
})

btn_open.onclick = () => dialogPopover.show();

\`} />\r
        </Doc>;
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const w=["CreatePopover","BringToTop","ParentElement"];export{n as BringToTop,i as CreatePopover,r as ParentElement,w as __namedExportsOrder,B as default};
//# sourceMappingURL=createPopover.stories-2f9600df.js.map
