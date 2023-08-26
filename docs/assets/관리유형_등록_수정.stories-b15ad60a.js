import{a as e,j as t,F as l}from"./jsx-runtime-e43ccb36.js";import{P as c}from"./common-71494616.js";import{b as r}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const h={title:"PF Examples/퍼블리싱"},s=()=>t(l,{children:[e(c,{}),t("div",{className:"app flex flex--column",children:[t("header",{className:"flex flex--none justify-content--space-between py--xs px--xxl background--sapphire-pattern",children:[e("div",{className:"flex--none",children:t("div",{className:"text-switch",children:[e("button",{type:"button",className:"text-switch__button is-active",children:"개발"}),e("button",{type:"button",className:"text-switch__button",children:"검증"}),e("button",{type:"button",className:"text-switch__button",children:"운영"})]})}),e("div",{className:"flex flex--none align-self--center text--white",children:e("h2",{children:"관리유형 등록/수정"})}),t("div",{className:"flex flex--none align-self--center gap-x--xl",children:[e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--home-fill ir-icon--white"})}),e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--user-outline ir-icon--white"})}),e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--user-management-outline ir-icon--white"})}),e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--preference-outline ir-icon--white"})}),e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--information-circle-outline ir-icon--white"})}),e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--logout-outline ir-icon--white"})})]})]}),t("main",{className:"flex flex--column flex--auto background--light-secondary gap-y--xs py--sm px--sm overflow-y--auto",children:[t("div",{className:"flex flex--auto gap-x--xs",children:[t("div",{className:"panel panel--radius",style:{flexBasis:550},children:[t("div",{className:"panel__header",children:[e("h4",{className:"panel__header-text",children:"오브젝트 유형"}),e("div",{className:"button-group",children:e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--refresh"})})})]}),e("div",{className:"panel__content",children:e("div",{className:"relative height--block",children:e("div",{id:"grid1",className:"absolute top left right bottom"})})}),e("div",{className:"panel__footer",children:t("div",{className:"button-group ml--auto",children:[t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"유형 추가"]}),t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--save"}),"유형 저장"]}),t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"유형 삭제"]})]})})]}),e("div",{className:"panel panel--radius",style:{flex:1}})]}),t("div",{className:"flex flex--auto gap-x--xs",children:[e("div",{className:"panel panel--radius flex--auto"}),e("div",{className:"panel panel--radius flex--auto"})]})]}),e("footer",{className:"shadow--sm",children:t("div",{className:"flex justify-content--space-between py--xs px--xxl text--tertiary text--h5",children:[e("span",{children:"김이노"}),e("span",{children:"Copyright 2022. INNORULES Corporation. All rights reserved."}),e("span",{children:"InnoProduct Web 5.3"})]})})]})]}),n=()=>e(r,{code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: grid1,
    colHeader: {
        colCount: 6,
        rowCount: 1
    },
    rowHeader: {
        colCount: 1
    },
    body: {
        rowCount: 50
    }
} )
            `,html:e(s,{})});var i,o,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <LiveEditorForExamples code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: grid1,
    colHeader: {
        colCount: 6,
        rowCount: 1
    },
    rowHeader: {
        colCount: 1
    },
    body: {
        rowCount: 50
    }
} )
            \`} html={<Template />} />;
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["관리유형_등록_수정"];export{x as __namedExportsOrder,h as default,n as 관리유형_등록_수정};
//# sourceMappingURL=관리유형_등록_수정.stories-b15ad60a.js.map
