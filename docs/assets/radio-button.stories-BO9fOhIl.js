import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as i,L as a}from"./version-tag-B2yXrdOr.js";import"./iframe-BRPaCIBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL7yNlIg.js";const r=`<div class="radio-button">
    <label class="radio-button__wrapper">
        <input type="radio" name="radio" class="radio-button__input" defaultChecked />
        <span class="radio-button__text">메인 룰</span>
    </label>
</div>
<div class="radio-button">
    <label class="radio-button__wrapper">
        <input type="radio" name="radio" class="radio-button__input" />
        <span class="radio-button__text">서브 룰</span>
    </label>
</div>`,s=`<div class="radio-button radio-button--sm">
    <label class="radio-button__wrapper">
        <input type="radio" name="radio" class="radio-button__input" defaultChecked />
        <span class="radio-button__text">메인 룰</span>
    </label>
</div>
<div class="radio-button radio-button--sm">
    <label class="radio-button__wrapper">
        <input type="radio" name="radio" class="radio-button__input" />
        <span class="radio-button__text">서브 룰</span>
    </label>
</div>`,l=`<div class="radio-button">
    <label class="radio-button__wrapper">
        <input type="radio" name="radio" class="radio-button__input" defaultChecked />
        <span class="radio-button__text">
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-table"></i>
            테이블 룰
        </span>
    </label>
</div>
<div class="radio-button">
    <label class="radio-button__wrapper">
        <input type="radio" name="radio" class="radio-button__input" />
        <span class="radio-button__text">
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-db"></i>
            DB 룰
        </span>
    </label>
</div>`,d=`<div class="rule-template-list" style="width: 175px;">
    <label class="rule-template-item">
        <input type="radio" name="radio" class="radio__input" defaultChecked />
        <span class="radio-button__text">
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-table"></i>
            테이블 룰
        </span>
    </label>
    <label class="rule-template-item">
        <input type="radio" name="radio" class="radio__input" />
        <span class="radio-button__text">
            <i class="radio-button__text-prefix ir-icon ir-icon--rule-type-db"></i>
            DB 룰
        </span>
    </label>
</div>`,c=`.rule-template-list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

.rule-template-item {
    display: flex;
    cursor: pointer;
    align-items: center;
}

.rule-template-item .radio__input {
    margin-right: 4px;
}

.rule-template-item .radio-button__text {
    flex: 1 1 0;
    justify-content: flex-start;
    padding: 0 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: var(--text-light-color);
    background-color: var(--radio-button-background-color);
    border: 1px solid var(--radio-button-border-color);
    border-radius: var(--ir_default_border_radius);
    transition: var(--transition-duration-base);
}

.rule-template-item .radio__input:checked + .radio-button__text {
    font-weight: var(--font-weight-medium);
    color: var(--text-color);
    background-color: var(--radio-button-active-background-color);
    border: 1px solid var(--radio-button-active-border-color);
}

.rule-template-item:hover {
    opacity: 0.8;
}
`,x={title:"HTML/Radio Button"},n=()=>t.jsxs(e,{children:[t.jsx(i,{children:"Radio Button"}),t.jsx(a,{htmlRaw:r}),t.jsx("p",{children:t.jsx("strong",{children:"Small:"})}),t.jsx(a,{htmlRaw:s}),t.jsx(i,{children:"Radio Prefix"}),t.jsx(a,{htmlRaw:l})]}),o=()=>t.jsxs(e,{children:[t.jsx(i,{children:"RadioButton List Custom Demo"}),t.jsx(a,{fixedHeight:400,htmlRaw:d,css:c})]});n.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};o.__docgenInfo={description:"",methods:[],displayName:"CustomDemo"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Radio Button</DocTitle>
        <LiveEditor htmlRaw={htmlRaw1} />
        <p><strong>Small:</strong></p>
        <LiveEditor htmlRaw={htmlRaw2} />
        <DocTitle>Radio Prefix</DocTitle>
        <LiveEditor htmlRaw={htmlRaw3} />
    </Doc>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>RadioButton List Custom Demo</DocTitle>

        <LiveEditor fixedHeight={400} htmlRaw={customDemoHtmlRaw} css={css} />
    </Doc>`,...o.parameters?.docs?.source}}};const h=["RadioButton","CustomDemo"];export{o as CustomDemo,n as RadioButton,h as __namedExportsOrder,x as default};
