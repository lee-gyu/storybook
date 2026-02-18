import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as c,L as l}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const d={title:"HTML/Toggle"},t=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,o=()=>e.jsxs(s,{children:[e.jsx(c,{children:"Toggle"}),e.jsx(l,{css:t,html:e.jsx("div",{className:"toggle",children:e.jsxs("label",{className:"toggle__wrapper",children:[e.jsx("input",{type:"checkbox",className:"toggle__input"}),e.jsxs("div",{className:"toggle__state",children:[e.jsx("span",{className:"toggle__inactive",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-list"})}),e.jsx("span",{className:"toggle__active",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-card"})})]})]})}),code:`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            `})]});o.__docgenInfo={description:"",methods:[],displayName:"Toggle"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Toggle</DocTitle>
        <LiveEditor css={css} html={<div className="toggle">
                    <label className="toggle__wrapper">
                        <input type="checkbox" className="toggle__input" />
                        <div className="toggle__state">
                            <span className="toggle__inactive">
                                <i className="toggle__icon ir-icon ir-icon--viewmode-list"></i>
                            </span>
                            <span className="toggle__active">
                                <i className="toggle__icon ir-icon ir-icon--viewmode-card"></i>
                            </span>
                        </div>
                    </label>
                </div>} code={\`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            \`} />
    </Doc>`,...o.parameters?.docs?.source}}};const m=["Toggle"];export{o as Toggle,m as __namedExportsOrder,d as default};
