import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`<div class="radio-button">
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
</div>`})),c,l=e((()=>{c=`<div class="radio-button radio-button--sm">
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
</div>`})),u,d=e((()=>{u=`<div class="radio-button">
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
</div>`})),f,p=e((()=>{f=`<div class="rule-template-list" style="width: 175px;">
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
</div>`})),m,h=e((()=>{m=`.rule-template-list {
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
`})),g,_,v,y,b;e((()=>{i(),s(),l(),d(),p(),h(),g=a(),_={title:`HTML/Radio Button`},v=()=>(0,g.jsxs)(n,{children:[(0,g.jsx)(t,{children:`Radio Button`}),(0,g.jsx)(r,{htmlRaw:o}),(0,g.jsx)(`p`,{children:(0,g.jsx)(`strong`,{children:`Small:`})}),(0,g.jsx)(r,{htmlRaw:c}),(0,g.jsx)(t,{children:`Radio Prefix`}),(0,g.jsx)(r,{htmlRaw:u})]}),y=()=>(0,g.jsxs)(n,{children:[(0,g.jsx)(t,{children:`RadioButton List Custom Demo`}),(0,g.jsx)(r,{fixedHeight:400,htmlRaw:f,css:m})]}),v.__docgenInfo={description:``,methods:[],displayName:`RadioButton`},y.__docgenInfo={description:``,methods:[],displayName:`CustomDemo`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Radio Button</DocTitle>
        <LiveEditor htmlRaw={htmlRaw1} />
        <p><strong>Small:</strong></p>
        <LiveEditor htmlRaw={htmlRaw2} />
        <DocTitle>Radio Prefix</DocTitle>
        <LiveEditor htmlRaw={htmlRaw3} />
    </Doc>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>RadioButton List Custom Demo</DocTitle>

        <LiveEditor fixedHeight={400} htmlRaw={customDemoHtmlRaw} css={css} />
    </Doc>`,...y.parameters?.docs?.source}}},b=[`RadioButton`,`CustomDemo`]}))();export{y as CustomDemo,v as RadioButton,b as __namedExportsOrder,_ as default};