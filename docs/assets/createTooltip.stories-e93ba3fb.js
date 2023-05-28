import{j as o,a as t,F as m}from"./jsx-runtime-d057ca55.js";import{c as e}from"./button.classNames-50f35cbd.js";import{c as r}from"./index-631dc947.js";import{D as p,a as u,L as h}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";const g={title:"JS Utility/Create Tooltip"},_=`
body > div {
    height: 400px;
}`,n=()=>o(p,{children:[t(u,{children:"createTooltip"}),t("p",{children:"툴팁 출력을 위해 사용합니다."}),t(h,{css:_,html:o(m,{children:[t("button",{id:"btn2",className:r(e.button["&"]),children:"Tooltip Destroy"}),t("button",{id:"btn3",className:r(e.button["&"]),children:"Resize"}),o("div",{className:"border height--lg mt--sm min-height--none overflow--auto",children:[t("div",{className:"height--sm"}),t("button",{id:"btn1",className:r(e.button["&"],e.button.primary),children:"Tooltip"}),t("div",{className:"height--sm"})]})]}),code:`
import { createTooltip } from "./dist/index.js";

const tooltip = createTooltip({
    refElement: btn1,
    label: "Tooltip",
    placement: "bottom",
})

btn2.addEventListener("click", () => {
    tooltip.destroy();
})

btn3.addEventListener("click", () => {
    btn1.style.width = btn1.offsetWidth + 10;
})

`})]}),i=()=>o(p,{children:[t(u,{children:"createTooltipBySelector"}),t("p",{children:"요소의 title을 툴팁으로 대체합니다."}),t(h,{css:_,html:o(m,{children:[t("button",{id:"btn",className:r(e.button,"mb--sm"),children:"Tooltips Destroy"}),o("div",{className:"side-toolbar",children:[t("button",{type:"button",className:"side-toolbar__button","data-title":"전체 체크","data-placement":"top",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button","data-title":"전체 해제","data-placement":"right",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button","data-title":"행 삭제",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t("button",{type:"button",className:"side-toolbar__button","data-title":"복사",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t("button",{type:"button",className:"side-toolbar__button",title:"붙여넣기",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})})]})]}),code:`
import { createTooltipBySelector } from "./dist/index.js";

const tooltipElements = createTooltipBySelector({
    selector: ".side-toolbar__button",
    offset: 15,
});

btn.addEventListener("click", () => {
    tooltipElements.destroy();
})

`})]});var s,a,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createTooltip</DocTitle>\r
            <p>툴팁 출력을 위해 사용합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <button id="btn2" className={classNames(clsButton.button["&"])}>Tooltip Destroy</button>\r
                        <button id="btn3" className={classNames(clsButton.button["&"])}>Resize</button>\r
                        <div className="border height--lg mt--sm min-height--none overflow--auto">\r
                            <div className="height--sm"></div>\r
                            <button id="btn1" className={classNames(clsButton.button["&"], clsButton.button.primary)}>Tooltip</button>\r
                            <div className="height--sm"></div>\r
                        </div>\r
                    </>} code={\`
import { createTooltip } from "./dist/index.js";

const tooltip = createTooltip({
    refElement: btn1,
    label: "Tooltip",
    placement: "bottom",
})

btn2.addEventListener("click", () => {
    tooltip.destroy();
})

btn3.addEventListener("click", () => {
    btn1.style.width = btn1.offsetWidth + 10;
})

\`} />\r
        </Doc>;
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,d,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createTooltipBySelector</DocTitle>\r
            <p>요소의 title을 툴팁으로 대체합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <button id="btn" className={classNames(clsButton.button, "mb--sm")}>Tooltips Destroy</button>\r
                        <div className="side-toolbar">\r
                            <button type="button" className="side-toolbar__button" data-title="전체 체크" data-placement="top">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--check-all-rectangle"></i>\r
                            </button>\r
                            <button type="button" className="side-toolbar__button" data-title="전체 해제" data-placement="right">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"></i>\r
                            </button>\r
                            <button type="button" className="side-toolbar__button" data-title="행 삭제">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--row-del2"></i>\r
                            </button>\r
                            <button type="button" className="side-toolbar__button" data-title="복사">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--copy"></i>\r
                            </button>\r
                            <button type="button" className="side-toolbar__button" title="붙여넣기">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--paste"></i>\r
                            </button>\r
                        </div>\r
                    </>} code={\`
import { createTooltipBySelector } from "./dist/index.js";

const tooltipElements = createTooltipBySelector({
    selector: ".side-toolbar__button",
    offset: 15,
});

btn.addEventListener("click", () => {
    tooltipElements.destroy();
})

\`} />\r
        </Doc>;
}`,...(b=(d=i.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const E=["CreateTooltip","CreateTooltipBySelector"];export{n as CreateTooltip,i as CreateTooltipBySelector,E as __namedExportsOrder,g as default};
//# sourceMappingURL=createTooltip.stories-e93ba3fb.js.map
