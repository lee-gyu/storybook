import{j as l,a as o,F as t}from"./jsx-runtime-CjohWU4o.js";import{b as i,a as c}from"./index-B42qYirq.js";import{c as e}from"./index-Bl6ORisp.js";import{D as g,a as u,L as m}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const s="dialog",a={dialog:{"&":s,transparent:`${s}--transparent`,"is-visible":"is-visible"},dialogWrapper:{"&":`${s}__wrapper`},dialogHeader:{"&":`${s}__header`},dialogHeaderTitle:{"&":`${s}__header-title`},dialogHeaderActions:{"&":`${s}__header-actions`},dialogContent:{"&":`${s}__content`},dialogFooter:{"&":`${s}__footer`},dialogFooterLeft:{"&":`${s}__footer-left`},dialogFooterRight:{"&":`${s}__footer-right`},dialogButtonClose:{"&":`${s}__button-close`}},y={title:"JS Utility/Create Popover"},p=`
body > div {
    height: 500px;
}`,n=()=>l(g,{children:[o(u,{children:"createPopover"}),o("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),o(m,{css:p,defaultHtmlFold:[2,16],html:l(t,{children:[o("button",{id:"btn1",className:e(i),children:"다이얼로그 출력"}),o("button",{id:"btn3",className:e(i),children:"다이얼로그 출력 (ESC 비활성화)"}),o("div",{id:"dialog1",className:e(a.dialog["&"]),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o("div",{className:e(a.dialogHeaderActions["&"]),children:o("button",{id:"close1",type:"button",className:e(a.dialogButtonClose["&"]),children:o("i",{className:"ir-icon ir-icon--close"})})})]}),o("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o("div",{className:e(a.dialogFooter["&"]),children:o("div",{className:e(a.dialogFooterRight["&"]),children:o("button",{id:"btn2",type:"button",className:e(i,c),children:"새 창 출력"})})})]})}),o("div",{id:"dialog2",className:e(a.dialog["&"]),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"222"}),o("div",{className:e(a.dialogHeaderActions["&"]),children:o("button",{id:"close2",type:"button",className:e(a.dialogButtonClose["&"]),children:o("i",{className:"ir-icon ir-icon--close"})})})]}),o("div",{className:e(a.dialogContent["&"]),children:"2222222222"})]})})]}),code:`
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

`})]}),r=()=>l(g,{children:[o(u,{children:"bringToTop"}),o("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),o(m,{css:p,defaultHtmlFold:[2,16],html:l(t,{children:[o("button",{id:"btn1",className:e(i),children:"다이얼로그1"}),o("button",{id:"btn2",className:e(i),children:"다이얼로그2"}),o("div",{id:"dialog1",className:e(a.dialog["&"],a.dialog.transparent),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o("div",{className:e(a.dialogHeaderActions["&"])})]}),o("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o("div",{className:e(a.dialogFooter["&"]),children:o("div",{className:e(a.dialogFooterRight["&"]),children:o("button",{id:"btn3",type:"button",className:e(i,c),children:"Confirm"})})})]})}),o("div",{id:"dialog2",className:e(a.dialog["&"],a.dialog.transparent),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"222"}),o("div",{className:e(a.dialogHeaderActions["&"])})]}),o("div",{className:e(a.dialogContent["&"]),children:"2222222222222222222222222"})]})})]}),code:`
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
`})]}),d=()=>l(g,{children:[o(u,{children:"parentElement"}),o("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),o(m,{css:p,defaultHtmlFold:[2,16],html:l(t,{children:[o("button",{id:"btn_open",className:e(i),children:"다이얼로그 열기"}),o("div",{id:"dialogs",children:o("div",{id:"dialog1",className:e(a.dialog["&"]),children:l("div",{className:e(a.dialogWrapper["&"]),children:[l("div",{className:e(a.dialogHeader["&"]),children:[o("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o("div",{className:e(a.dialogHeaderActions["&"])})]}),o("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o("div",{className:e(a.dialogFooter["&"]),children:o("div",{className:e(a.dialogFooterRight["&"]),children:o("button",{id:"btn_close",type:"button",className:e(i,c),children:"Confirm"})})})]})})})]}),code:`
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

`})]});var v,C,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createPopover</DocTitle>\r
            <p>내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)</p>\r
            <LiveEditor css={css} defaultHtmlFold={[2, 16]} html={<>\r
                        <button id="btn1" className={classNames(button)}>다이얼로그 출력</button>\r
                        <button id="btn3" className={classNames(button)}>다이얼로그 출력 (ESC 비활성화)</button>\r
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
                                        <button id="btn2" type="button" className={classNames(button, buttonPrimary)}>새 창 출력</button>\r
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
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var D,b,h;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>bringToTop</DocTitle>\r
            <p>createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다.</p>\r
            <LiveEditor css={css} defaultHtmlFold={[2, 16]} html={<>\r
                        <button id="btn1" className={classNames(button)}>다이얼로그1</button>\r
                        <button id="btn2" className={classNames(button)}>다이얼로그2</button>\r
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
                                        <button id="btn3" type="button" className={classNames(button, buttonPrimary)}>Confirm</button>\r
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var P,B,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>parentElement</DocTitle>\r
            <p>부모 요소를 지정하여 DOM 마운트를 제어 합니다.</p>\r
            <LiveEditor css={css} defaultHtmlFold={[2, 16]} html={<>\r
                        <button id="btn_open" className={classNames(button)}>다이얼로그 열기</button>\r
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
                                            <button id="btn_close" type="button" className={classNames(button, buttonPrimary)}>Confirm</button>\r
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
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const k=["CreatePopover","BringToTop","ParentElement"];export{r as BringToTop,n as CreatePopover,d as ParentElement,k as __namedExportsOrder,y as default};
