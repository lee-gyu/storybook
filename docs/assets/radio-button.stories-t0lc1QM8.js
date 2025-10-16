import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as i,a,L as o}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const e=`<div class="radio-button">\r
    <label class="radio-button__wrapper">\r
        <input type="radio" name="radio" class="radio-button__input" defaultChecked />\r
        <span class="radio-button__text">메인 룰</span>\r
    </label>\r
</div>\r
<div class="radio-button">\r
    <label class="radio-button__wrapper">\r
        <input type="radio" name="radio" class="radio-button__input" />\r
        <span class="radio-button__text">서브 룰</span>\r
    </label>\r
</div>`,s=`<div class="radio-button radio-button--sm">\r
    <label class="radio-button__wrapper">\r
        <input type="radio" name="radio" class="radio-button__input" defaultChecked />\r
        <span class="radio-button__text">메인 룰</span>\r
    </label>\r
</div>\r
<div class="radio-button radio-button--sm">\r
    <label class="radio-button__wrapper">\r
        <input type="radio" name="radio" class="radio-button__input" />\r
        <span class="radio-button__text">서브 룰</span>\r
    </label>\r
</div>`,l=`<div class="radio-button">\r
    <label class="radio-button__wrapper">\r
        <input type="radio" name="radio" class="radio-button__input" defaultChecked />\r
        <span class="radio-button__text">\r
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-table"></i>\r
            테이블 룰\r
        </span>\r
    </label>\r
</div>\r
<div class="radio-button">\r
    <label class="radio-button__wrapper">\r
        <input type="radio" name="radio" class="radio-button__input" />\r
        <span class="radio-button__text">\r
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-db"></i>\r
            DB 룰\r
        </span>\r
    </label>\r
</div>`,d=`<div class="rule-template-list" style="width: 175px;">\r
    <label class="rule-template-item">\r
        <input type="radio" name="radio" class="radio__input" defaultChecked />\r
        <span class="radio-button__text">\r
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-table"></i>\r
            테이블 룰\r
        </span>\r
    </label>\r
    <label class="rule-template-item">\r
        <input type="radio" name="radio" class="radio__input" />\r
        <span class="radio-button__text">\r
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-db"></i>\r
            DB 룰\r
        </span>\r
    </label>\r
</div>`,c=`.rule-template-list {\r
    display: flex;\r
    flex-direction: column;\r
    row-gap: 8px;\r
}\r
\r
.rule-template-item {\r
    display: flex;\r
    cursor: pointer;\r
    align-items: center;\r
}\r
\r
.rule-template-item .radio__input {\r
    margin-right: 4px;\r
}\r
\r
.rule-template-item .radio-button__text {\r
    flex: 1 1 0;\r
    justify-content: flex-start;\r
    padding: 0 8px;\r
    box-sizing: border-box;\r
    display: flex;\r
    align-items: center;\r
    color: var(--text-light-color);\r
    background-color: var(--radio-button-background-color);\r
    border: 1px solid var(--radio-button-border-color);\r
    border-radius: var(--ir_default_border_radius);\r
    transition: var(--transition-duration-base);\r
}\r
\r
.rule-template-item .radio__input:checked + .radio-button__text {\r
    font-weight: var(--font-weight-medium);\r
    color: var(--text-color);\r
    background-color: var(--radio-button-active-background-color);\r
    border: 1px solid var(--radio-button-active-border-color);\r
}\r
\r
.rule-template-item:hover {\r
    opacity: 0.8;\r
}\r
`,x={title:"HTML Components/Radio Button"},t=()=>r.jsxs(i,{children:[r.jsx(a,{children:"Radio Button"}),r.jsx(o,{htmlRaw:e}),r.jsx("p",{children:r.jsx("strong",{children:"Small:"})}),r.jsx(o,{htmlRaw:s}),r.jsx(a,{children:"Radio Prefix"}),r.jsx(o,{htmlRaw:l})]}),n=()=>r.jsxs(i,{children:[r.jsx(a,{children:"RadioButton List Custom Demo"}),r.jsx(o,{fixedHeight:400,htmlRaw:d,css:c})]});t.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomDemo"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Radio Button</DocTitle>\r
        <LiveEditor htmlRaw={htmlRaw1} />\r
        <p><strong>Small:</strong></p>\r
        <LiveEditor htmlRaw={htmlRaw2} />\r
        <DocTitle>Radio Prefix</DocTitle>\r
        <LiveEditor htmlRaw={htmlRaw3} />\r
    </Doc>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>RadioButton List Custom Demo</DocTitle>\r
\r
        <LiveEditor fixedHeight={400} htmlRaw={customDemoHtmlRaw} css={css} />\r
    </Doc>`,...n.parameters?.docs?.source}}};const h=["RadioButton","CustomDemo"];export{n as CustomDemo,t as RadioButton,h as __namedExportsOrder,x as default};
