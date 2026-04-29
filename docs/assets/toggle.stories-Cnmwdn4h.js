import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s,c,l,u;e((()=>{i(),o=a(),s={title:`HTML/Toggle`},c=`
#live_editor_wrapper {
    background-color: #1454b5;
    border-color: #1454b5;
}
`,l=()=>(0,o.jsxs)(n,{children:[(0,o.jsx)(t,{children:`Toggle`}),(0,o.jsx)(r,{css:c,html:(0,o.jsx)(`div`,{className:`toggle`,children:(0,o.jsxs)(`label`,{className:`toggle__wrapper`,children:[(0,o.jsx)(`input`,{type:`checkbox`,className:`toggle__input`}),(0,o.jsxs)(`div`,{className:`toggle__state`,children:[(0,o.jsx)(`span`,{className:`toggle__inactive`,children:(0,o.jsx)(`i`,{className:`toggle__icon ir-icon ir-icon--viewmode-list`})}),(0,o.jsx)(`span`,{className:`toggle__active`,children:(0,o.jsx)(`i`,{className:`toggle__icon ir-icon ir-icon--viewmode-card`})})]})]})}),code:`
const toggle = document.querySelector(".toggle__input")

toggle.onchange = () => {
    console.log(toggle.checked);
}
            `})]}),l.__docgenInfo={description:``,methods:[],displayName:`Toggle`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Doc>
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
    </Doc>`,...l.parameters?.docs?.source}}},u=[`Toggle`]}))();export{l as Toggle,u as __namedExportsOrder,s as default};