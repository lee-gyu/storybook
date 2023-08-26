import{j as e,a as t,F as m}from"./jsx-runtime-e43ccb36.js";import{c as o}from"./button.classNames-50f35cbd.js";import{c as n}from"./index-91038615.js";import{D as p,a as u,L as _}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";const g={title:"JS Utility/Create Tooltip"},h=`
body > div {
    height: 400px;
}`,i=()=>e(p,{children:[t(u,{children:"createTooltip"}),t("p",{children:"툴팁 출력을 위해 사용합니다."}),t(_,{css:h,html:e(m,{children:[t("button",{id:"btn_destroy",className:n(o.button["&"]),children:"Tooltip Destroy"}),t("button",{id:"btn_resize",className:n(o.button["&"]),children:"Resize"}),e("div",{className:"border height--lg mt--sm min-height--none overflow--auto",children:[t("div",{className:"height--sm"}),t("button",{id:"btn1",className:n(o.button["&"],o.button.primary),children:"Tooltip"}),t("button",{id:"btn2",className:n(o.button["&"],o.button.primary),children:"Tooltip2"}),t("div",{className:"height--sm"})]})]}),code:`
import { createTooltip } from "./dist/index.js";

const tooltip = createTooltip({
    refElement: btn1,
    label: "Tooltip",
    placement: "bottom",
})

createTooltip({
    refElement: btn2,
    label: "Tooltip2",
    placement: "bottom",
    refMode: "pointer",
    offset: 40,
})

btn_destroy.addEventListener("click", () => {
    tooltip.destroy();
})

btn_resize.addEventListener("click", () => {
    btn1.style.width = btn1.offsetWidth + 10;
})

`})]}),r=()=>e(p,{children:[t(u,{children:"createTooltipBySelector"}),t("p",{children:"요소의 title을 툴팁으로 대체합니다."}),t(_,{css:h,html:e(m,{children:[t("button",{id:"btn",className:n(o.button,"mb--sm"),children:"Tooltips Destroy"}),e("div",{className:"side-toolbar",children:[t("button",{type:"button",className:"side-toolbar__button","data-title":"전체 체크","data-placement":"top",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button","data-title":"전체 해제","data-placement":"right",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button","data-title":"행 삭제",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t("button",{type:"button",className:"side-toolbar__button","data-title":"복사",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t("button",{type:"button",className:"side-toolbar__button",title:"붙여넣기",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})})]})]}),code:`
import { createTooltipBySelector } from "./dist/index.js";

const tooltipElements = createTooltipBySelector({
    selector: ".side-toolbar__button",
    offset: 15,
});

btn.addEventListener("click", () => {
    tooltipElements.destroy();
})

`})]});var s,a,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createTooltip</DocTitle>\r
            <p>툴팁 출력을 위해 사용합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <button id="btn_destroy" className={classNames(clsButton.button["&"])}>Tooltip Destroy</button>\r
                        <button id="btn_resize" className={classNames(clsButton.button["&"])}>Resize</button>\r
                        <div className="border height--lg mt--sm min-height--none overflow--auto">\r
                            <div className="height--sm"></div>\r
                            <button id="btn1" className={classNames(clsButton.button["&"], clsButton.button.primary)}>Tooltip</button>\r
                            <button id="btn2" className={classNames(clsButton.button["&"], clsButton.button.primary)}>Tooltip2</button>\r
                            <div className="height--sm"></div>\r
                        </div>\r
                    </>} code={\`
import { createTooltip } from "./dist/index.js";

const tooltip = createTooltip({
    refElement: btn1,
    label: "Tooltip",
    placement: "bottom",
})

createTooltip({
    refElement: btn2,
    label: "Tooltip2",
    placement: "bottom",
    refMode: "pointer",
    offset: 40,
})

btn_destroy.addEventListener("click", () => {
    tooltip.destroy();
})

btn_resize.addEventListener("click", () => {
    btn1.style.width = btn1.offsetWidth + 10;
})

\`} />\r
        </Doc>;
}`,...(l=(a=i.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,d,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const E=["CreateTooltip","CreateTooltipBySelector"];export{i as CreateTooltip,r as CreateTooltipBySelector,E as __namedExportsOrder,g as default};
//# sourceMappingURL=createTooltip.stories-4dcb8652.js.map
