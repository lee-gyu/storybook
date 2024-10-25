import{j as t}from"./jsx-runtime-DEdD30eg.js";import{D as o,A as d}from"./index-DRMmGMIW.js";import{D as r,a as l,L as s,c as e}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const v={title:"JS Utility/Create Tooltip"},c=`
body > div {
    height: 400px;
}`,i=()=>t.jsxs(r,{children:[t.jsx(l,{children:"createTooltip"}),t.jsx("p",{children:"툴팁 출력을 위해 사용합니다."}),t.jsx(s,{css:c,html:t.jsxs(t.Fragment,{children:[t.jsx("button",{id:"btn_destroy",className:e(o),children:"Tooltip Destroy"}),t.jsx("button",{id:"btn_resize",className:e(o),children:"Resize"}),t.jsxs("div",{className:"border height--lg mt--sm min-height--none overflow--auto",children:[t.jsx("div",{className:"height--sm"}),t.jsx("button",{id:"btn1",className:e(o,d),children:"Tooltip"}),t.jsx("button",{id:"btn2",className:e(o,d),children:"Tooltip2"}),t.jsx("div",{className:"height--sm"})]}),t.jsx("div",{id:"div_parent",style:{backgroundColor:"lightgray",width:100,height:100},children:t.jsx("button",{id:"div_child",className:"button ml--xl mt--xl",children:"Child"})})]}),code:`
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
createTooltip({
    refElement: div_parent,
    label: "parent",
    placement: "bottom",
})
createTooltip({
    refElement: div_child,
    label: "child",
    placement: "bottom",
    refMode: "pointer",
})

btn_destroy.addEventListener("click", () => {
    tooltip.destroy();
})

btn_resize.addEventListener("click", () => {
    btn1.style.width = btn1.offsetWidth + 10;
})

`})]}),n=()=>t.jsxs(r,{children:[t.jsx(l,{children:"createTooltipBySelector"}),t.jsx("p",{children:"요소의 title을 툴팁으로 대체합니다."}),t.jsx(s,{css:c,html:t.jsxs(t.Fragment,{children:[t.jsx("button",{id:"btn",className:e(o,"mb--sm"),children:"Tooltips Destroy"}),t.jsxs("div",{className:"side-toolbar",children:[t.jsx("button",{type:"button",className:"side-toolbar__button","data-title":"전체 체크","data-placement":"top",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-title":"전체 해제","data-placement":"right",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-title":"행 삭제",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ref":"pointer","data-title":"복사",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t.jsx("button",{type:"button",className:"side-toolbar__button",title:"붙여넣기",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})}),t.jsx("div",{className:"tooltip-selector","data-title":"부모요소",style:{backgroundColor:"lightgray",width:100,height:100},children:t.jsx("button",{className:"tooltip-selector button ml--xl mt--xl","data-title":"자식요소",children:"Child"})})]})]}),code:`
import { createTooltipBySelector } from "./dist/index.js";

const tooltipElements = createTooltipBySelector({
    selector: ".side-toolbar__button",
    offset: 15,
});

const tooltipElements2 = createTooltipBySelector({
    selector: ".tooltip-selector",
    offset: 15,
});

btn.addEventListener("click", () => {
    tooltipElements.destroy();
    tooltipElements2.destroy();
})

`})]}),a=()=>t.jsxs(r,{children:[t.jsx(l,{children:"createTooltipContainer"}),t.jsx("p",{children:"ContainerElement 내부의 data-ir-tooltip 속성이 있는 요소에 tooltip을 생성한다."}),t.jsx(s,{css:c,html:t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
                                #container2 {
                                    height: 100px;
                                    width: 100px;
                                    background: lightgray;
                                    margin-left: 30px;
                                }
                            `}),t.jsx("button",{id:"btn",className:e(o,"mb--sm"),children:"Tooltips Destroy"}),t.jsxs("div",{className:"flex",children:[t.jsxs("div",{id:"container",className:"side-toolbar ml--3xl",children:[t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-text":"전체 체크","data-ir-tooltip-placement":"top",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-placement":"right","data-ir-tooltip-text":"전체 해제",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-placement":"right","data-ir-tooltip-text":"행 삭제",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-text":"복사",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t.jsx("button",{type:"button",className:"side-toolbar__button","data-ir-tooltip":!0,"data-ir-tooltip-ref-mode":"pointer","data-ir-tooltip-placement":"bottom","data-ir-tooltip-text":"붙여넣기","data-ir-tooltip-interval":"500",children:t.jsx("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})})]}),t.jsx("div",{id:"container2",className:"p--xl","data-ir-tooltip":!0,"data-ir-tooltip-text":"parent","data-ir-tooltip-ref-mode":"pointer",children:t.jsx("button",{className:"button button--secondary","data-ir-tooltip":!0,"data-ir-tooltip-text":"child",children:"tooltip"})})]})]}),code:`
import { createTooltipContainer } from "./dist/index.js";

const tooltipContainerList = [
    createTooltipContainer({
        containerElement: document.getElementById("container"),
        placement: "bottom",
        offset: 15
    }),
    createTooltipContainer({
        containerElement: document.getElementById("container2"),
        placement: "bottom",
    })
]


btn.onclick = () => {
    tooltipContainerList.forEach( container => container.destroy() );
}

`})]});i.__docgenInfo={description:"",methods:[],displayName:"CreateTooltip"};n.__docgenInfo={description:"",methods:[],displayName:"CreateTooltipBySelector"};a.__docgenInfo={description:"",methods:[],displayName:"createTooltipContainer"};var p,m,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createTooltip</DocTitle>\r
            <p>툴팁 출력을 위해 사용합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <button id="btn_destroy" className={classNames(button)}>Tooltip Destroy</button>\r
                        <button id="btn_resize" className={classNames(button)}>Resize</button>\r
                        <div className="border height--lg mt--sm min-height--none overflow--auto">\r
                            <div className="height--sm"></div>\r
                            <button id="btn1" className={classNames(button, buttonPrimary)}>Tooltip</button>\r
                            <button id="btn2" className={classNames(button, buttonPrimary)}>Tooltip2</button>\r
                            <div className="height--sm"></div>\r
                        </div>\r
                        <div id="div_parent" style={{
        backgroundColor: "lightgray",
        width: 100,
        height: 100
      }}>\r
                            <button id="div_child" className="button ml--xl mt--xl">Child</button>\r
                        </div>\r
                    </>} code={/* javascript */\`
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
createTooltip({
    refElement: div_parent,
    label: "parent",
    placement: "bottom",
})
createTooltip({
    refElement: div_child,
    label: "child",
    placement: "bottom",
    refMode: "pointer",
})

btn_destroy.addEventListener("click", () => {
    tooltip.destroy();
})

btn_resize.addEventListener("click", () => {
    btn1.style.width = btn1.offsetWidth + 10;
})

\`} />\r
        </Doc>;
}`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,h,_;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createTooltipBySelector</DocTitle>\r
            <p>요소의 title을 툴팁으로 대체합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <button id="btn" className={classNames(button, "mb--sm")}>Tooltips Destroy</button>\r
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
                            <button type="button" className="side-toolbar__button" data-ref="pointer" data-title="복사">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--copy"></i>\r
                            </button>\r
                            <button type="button" className="side-toolbar__button" title="붙여넣기">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--paste"></i>\r
                            </button>\r
                            <div className="tooltip-selector" data-title="부모요소" style={{
          backgroundColor: "lightgray",
          width: 100,
          height: 100
        }}>\r
                                <button className="tooltip-selector button ml--xl mt--xl" data-title="자식요소">Child</button>\r
                            </div>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { createTooltipBySelector } from "./dist/index.js";

const tooltipElements = createTooltipBySelector({
    selector: ".side-toolbar__button",
    offset: 15,
});

const tooltipElements2 = createTooltipBySelector({
    selector: ".tooltip-selector",
    offset: 15,
});

btn.addEventListener("click", () => {
    tooltipElements.destroy();
    tooltipElements2.destroy();
})

\`} />\r
        </Doc>;
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var x,N,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createTooltipContainer</DocTitle>\r
            <p>ContainerElement 내부의 data-ir-tooltip 속성이 있는 요소에 tooltip을 생성한다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <style>\r
                            {\`
                                #container2 {
                                    height: 100px;
                                    width: 100px;
                                    background: lightgray;
                                    margin-left: 30px;
                                }
                            \`}\r
                        </style>\r
                        <button id="btn" className={classNames(button, "mb--sm")}>Tooltips Destroy</button>\r
                        <div className="flex">\r
\r
                            <div id="container" className="side-toolbar ml--3xl">\r
                                <button type="button" className="side-toolbar__button" data-ir-tooltip data-ir-tooltip-text="전체 체크" data-ir-tooltip-placement="top">\r
                                    <i className="side-toolbar__icon ir-icon ir-icon--check-all-rectangle"></i>\r
                                </button>\r
                                <button type="button" className="side-toolbar__button" data-ir-tooltip data-ir-tooltip-placement="right" data-ir-tooltip-text="전체 해제">\r
                                    <i className="side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"></i>\r
                                </button>\r
                                <button type="button" className="side-toolbar__button" data-ir-tooltip data-ir-tooltip-placement="right" data-ir-tooltip-text="행 삭제">\r
                                    <i className="side-toolbar__icon ir-icon ir-icon--row-del2"></i>\r
                                </button>\r
                                <button type="button" className="side-toolbar__button" data-ir-tooltip data-ir-tooltip-text="복사">\r
                                    <i className="side-toolbar__icon ir-icon ir-icon--copy"></i>\r
                                </button>\r
                                <button type="button" className="side-toolbar__button" data-ir-tooltip data-ir-tooltip-ref-mode="pointer" data-ir-tooltip-placement="bottom" data-ir-tooltip-text="붙여넣기" data-ir-tooltip-interval="500">\r
                                    <i className="side-toolbar__icon ir-icon ir-icon--paste"></i>\r
                                </button>\r
                            </div>\r
                            <div id="container2" className="p--xl" data-ir-tooltip data-ir-tooltip-text="parent" data-ir-tooltip-ref-mode="pointer">\r
                                <button className="button button--secondary" data-ir-tooltip data-ir-tooltip-text="child">tooltip</button>\r
                            </div>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { createTooltipContainer } from "./dist/index.js";

const tooltipContainerList = [
    createTooltipContainer({
        containerElement: document.getElementById("container"),
        placement: "bottom",
        offset: 15
    }),
    createTooltipContainer({
        containerElement: document.getElementById("container2"),
        placement: "bottom",
    })
]


btn.onclick = () => {
    tooltipContainerList.forEach( container => container.destroy() );
}

\`} />\r
        </Doc>;
}`,...(y=(N=a.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const E=["CreateTooltip","CreateTooltipBySelector","createTooltipContainer"];export{i as CreateTooltip,n as CreateTooltipBySelector,E as __namedExportsOrder,a as createTooltipContainer,v as default};
