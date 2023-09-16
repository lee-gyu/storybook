import{j as c,a as e}from"./jsx-runtime-e43ccb36.js";import{D as a,a as i,L as n}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const p={title:"HTML Components/Toggle"},r=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,o=()=>c(a,{children:[e(i,{children:"Toggle"}),e(n,{css:r,html:e("div",{className:"toggle",children:c("label",{className:"toggle__wrapper",children:[e("input",{type:"checkbox",className:"toggle__input"}),c("div",{className:"toggle__state",children:[e("span",{className:"toggle__inactive",children:e("i",{className:"toggle__icon ir-icon ir-icon--viewmode-list"})}),e("span",{className:"toggle__active",children:e("i",{className:"toggle__icon ir-icon ir-icon--viewmode-card"})})]})]})}),code:`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            `})]});var l,s,t;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const v=["Toggle"];export{o as Toggle,v as __namedExportsOrder,p as default};
//# sourceMappingURL=toggle.stories-77efd184.js.map
