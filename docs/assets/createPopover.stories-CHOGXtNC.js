import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{l,_ as d}from"./index-B1ZoEFxZ.js";import{c as e}from"./index-vAxXS4R5.js";import{D as t,a as c,L as g}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";const s="dialog",a={dialog:{"&":s,transparent:`${s}--transparent`,"is-visible":"is-visible"},dialogWrapper:{"&":`${s}__wrapper`},dialogHeader:{"&":`${s}__header`},dialogHeaderTitle:{"&":`${s}__header-title`},dialogHeaderActions:{"&":`${s}__header-actions`},dialogContent:{"&":`${s}__content`},dialogFooter:{"&":`${s}__footer`},dialogFooterLeft:{"&":`${s}__footer-left`},dialogFooterRight:{"&":`${s}__footer-right`},dialogButtonClose:{"&":`${s}__button-close`}},H={title:"JS Utility/Create Popover"},m=`
body > div {
    height: 500px;
}`,i=()=>o.jsxs(t,{children:[o.jsx(c,{children:"createPopover"}),o.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),o.jsx(g,{css:m,defaultHtmlFold:[2,16],html:o.jsxs(o.Fragment,{children:[o.jsx("button",{id:"btn1",className:e(l),children:"다이얼로그 출력"}),o.jsx("button",{id:"btn3",className:e(l),children:"다이얼로그 출력 (ESC 비활성화)"}),o.jsx("div",{id:"dialog1",className:e(a.dialog["&"]),children:o.jsxs("div",{className:e(a.dialogWrapper["&"]),children:[o.jsxs("div",{className:e(a.dialogHeader["&"]),children:[o.jsx("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o.jsx("div",{className:e(a.dialogHeaderActions["&"]),children:o.jsx("button",{id:"close1",type:"button",className:e(a.dialogButtonClose["&"]),children:o.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),o.jsx("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o.jsx("div",{className:e(a.dialogFooter["&"]),children:o.jsx("div",{className:e(a.dialogFooterRight["&"]),children:o.jsx("button",{id:"btn2",type:"button",className:e(l,d),children:"새 창 출력"})})})]})}),o.jsx("div",{id:"dialog2",className:e(a.dialog["&"]),children:o.jsxs("div",{className:e(a.dialogWrapper["&"]),children:[o.jsxs("div",{className:e(a.dialogHeader["&"]),children:[o.jsx("strong",{className:e(a.dialogHeaderTitle["&"]),children:"222"}),o.jsx("div",{className:e(a.dialogHeaderActions["&"]),children:o.jsx("button",{id:"close2",type:"button",className:e(a.dialogButtonClose["&"]),children:o.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),o.jsx("div",{className:e(a.dialogContent["&"]),children:"2222222222"})]})})]}),code:`
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

`})]}),n=()=>o.jsxs(t,{children:[o.jsx(c,{children:"bringToTop"}),o.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),o.jsx(g,{css:m,defaultHtmlFold:[2,16],html:o.jsxs(o.Fragment,{children:[o.jsx("button",{id:"btn1",className:e(l),children:"다이얼로그1"}),o.jsx("button",{id:"btn2",className:e(l),children:"다이얼로그2"}),o.jsx("div",{id:"dialog1",className:e(a.dialog["&"],a.dialog.transparent),children:o.jsxs("div",{className:e(a.dialogWrapper["&"]),children:[o.jsxs("div",{className:e(a.dialogHeader["&"]),children:[o.jsx("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o.jsx("div",{className:e(a.dialogHeaderActions["&"])})]}),o.jsx("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o.jsx("div",{className:e(a.dialogFooter["&"]),children:o.jsx("div",{className:e(a.dialogFooterRight["&"]),children:o.jsx("button",{id:"btn3",type:"button",className:e(l,d),children:"Confirm"})})})]})}),o.jsx("div",{id:"dialog2",className:e(a.dialog["&"],a.dialog.transparent),children:o.jsxs("div",{className:e(a.dialogWrapper["&"]),children:[o.jsxs("div",{className:e(a.dialogHeader["&"]),children:[o.jsx("strong",{className:e(a.dialogHeaderTitle["&"]),children:"222"}),o.jsx("div",{className:e(a.dialogHeaderActions["&"])})]}),o.jsx("div",{className:e(a.dialogContent["&"]),children:"2222222222222222222222222"})]})})]}),code:`
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
`})]}),r=()=>o.jsxs(t,{children:[o.jsx(c,{children:"parentElement"}),o.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),o.jsx(g,{css:m,defaultHtmlFold:[2,16],html:o.jsxs(o.Fragment,{children:[o.jsx("button",{id:"btn_open",className:e(l),children:"다이얼로그 열기"}),o.jsx("div",{id:"dialogs",children:o.jsx("div",{id:"dialog1",className:e(a.dialog["&"]),children:o.jsxs("div",{className:e(a.dialogWrapper["&"]),children:[o.jsxs("div",{className:e(a.dialogHeader["&"]),children:[o.jsx("strong",{className:e(a.dialogHeaderTitle["&"]),children:"타이틀"}),o.jsx("div",{className:e(a.dialogHeaderActions["&"])})]}),o.jsx("div",{className:e(a.dialogContent["&"]),children:"컨텐츠"}),o.jsx("div",{className:e(a.dialogFooter["&"]),children:o.jsx("div",{className:e(a.dialogFooterRight["&"]),children:o.jsx("button",{id:"btn_close",type:"button",className:e(l,d),children:"Confirm"})})})]})})})]}),code:`
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

`})]});i.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};n.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};r.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};var u,p,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(v=(p=i.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var C,N,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(h=(N=n.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var D,b,x;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const f=["CreatePopover","BringToTop","ParentElement"];export{n as BringToTop,i as CreatePopover,r as ParentElement,f as __namedExportsOrder,H as default};
