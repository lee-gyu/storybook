import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as t,a as i,L as n}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const _={title:"HTML Components/Toggle"},a=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,o=()=>e.jsxs(t,{children:[e.jsx(i,{children:"Toggle"}),e.jsx(n,{css:a,html:e.jsx("div",{className:"toggle",children:e.jsxs("label",{className:"toggle__wrapper",children:[e.jsx("input",{type:"checkbox",className:"toggle__input"}),e.jsxs("div",{className:"toggle__state",children:[e.jsx("span",{className:"toggle__inactive",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-list"})}),e.jsx("span",{className:"toggle__active",children:e.jsx("i",{className:"toggle__icon ir-icon ir-icon--viewmode-card"})})]})]})}),code:`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            `})]});o.__docgenInfo={description:"",methods:[],displayName:"Toggle"};var s,c,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const m=["Toggle"];export{o as Toggle,m as __namedExportsOrder,_ as default};
