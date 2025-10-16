import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s,a as c,L as t}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const d={title:"HTML Components/Toggle"},l=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,o=()=>e.jsxs(s,{children:[e.jsx(c,{children:"Toggle"}),e.jsx(t,{css:l,html:e.jsx("div",{className:"toggle",children:e.jsxs("label",{className:"toggle__wrapper",children:[e.jsx("input",{type:"checkbox",className:"toggle__input"}),e.jsxs("div",{className:"toggle__state",children:[e.jsx("span",{className:"toggle__inactive",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-list"})}),e.jsx("span",{className:"toggle__active",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-card"})})]})]})}),code:`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            `})]});o.__docgenInfo={description:"",methods:[],displayName:"Toggle"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Toggle</DocTitle>\r
        <LiveEditor css={css} html={<div className="toggle">\r
                    <label className="toggle__wrapper">\r
                        <input type="checkbox" className="toggle__input" />\r
                        <div className="toggle__state">\r
                            <span className="toggle__inactive">\r
                                <i className="toggle__icon ir-icon ir-icon--viewmode-list"></i>\r
                            </span>\r
                            <span className="toggle__active">\r
                                <i className="toggle__icon ir-icon ir-icon--viewmode-card"></i>\r
                            </span>\r
                        </div>\r
                    </label>\r
                </div>} code={\`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            \`} />\r
    </Doc>`,...o.parameters?.docs?.source}}};const m=["Toggle"];export{o as Toggle,m as __namedExportsOrder,d as default};
