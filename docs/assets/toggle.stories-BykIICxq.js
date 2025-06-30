import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s,a as c,L as l}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const g={title:"HTML Components/Toggle"},t=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,o=()=>e.jsxs(s,{children:[e.jsx(c,{children:"Toggle"}),e.jsx(l,{css:t,html:e.jsx("div",{className:"toggle",children:e.jsxs("label",{className:"toggle__wrapper",children:[e.jsx("input",{type:"checkbox",className:"toggle__input"}),e.jsxs("div",{className:"toggle__state",children:[e.jsx("span",{className:"toggle__inactive",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-list"})}),e.jsx("span",{className:"toggle__active",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-card"})})]})]})}),code:`
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
    </Doc>`,...o.parameters?.docs?.source}}};const d=["Toggle"];export{o as Toggle,d as __namedExportsOrder,g as default};
