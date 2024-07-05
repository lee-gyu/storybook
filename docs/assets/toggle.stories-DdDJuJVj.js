import{j as c,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as i,a,L as r}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const v={title:"HTML Components/Toggle"},n=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,o=()=>c(i,{children:[e(a,{children:"Toggle"}),e(r,{css:n,html:e("div",{className:"toggle",children:c("label",{className:"toggle__wrapper",children:[e("input",{type:"checkbox",className:"toggle__input"}),c("div",{className:"toggle__state",children:[e("span",{className:"toggle__inactive",children:e("i",{className:"toggle__icon ir-icon ir-icon--viewmode-list"})}),e("span",{className:"toggle__active",children:e("i",{className:"toggle__icon ir-icon ir-icon--viewmode-card"})})]})]})}),code:`
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
    </Doc>`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const N=["Toggle"];export{o as Toggle,N as __namedExportsOrder,v as default};
