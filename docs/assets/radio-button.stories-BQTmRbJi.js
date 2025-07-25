import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as u,a as i,L as e}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const x={title:"HTML Components/Radio Button"},a=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Radio Button"}),t.jsx(e,{html:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"radio-button",children:t.jsxs("label",{className:"radio-button__wrapper",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio-button__input",defaultChecked:!0}),t.jsx("span",{className:"radio-button__text",children:"메인 룰"})]})}),t.jsx("div",{className:"radio-button",children:t.jsxs("label",{className:"radio-button__wrapper",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio-button__input"}),t.jsx("span",{className:"radio-button__text",children:"서브 룰"})]})})]})}),t.jsx("p",{children:t.jsx("strong",{children:"Small:"})}),t.jsx(e,{html:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"radio-button radio-button--sm",children:t.jsxs("label",{className:"radio-button__wrapper",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio-button__input",defaultChecked:!0}),t.jsx("span",{className:"radio-button__text",children:"메인 룰"})]})}),t.jsx("div",{className:"radio-button radio-button--sm",children:t.jsxs("label",{className:"radio-button__wrapper",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio-button__input"}),t.jsx("span",{className:"radio-button__text",children:"서브 룰"})]})})]})}),t.jsx(i,{children:"Radio Prefix"}),t.jsx(e,{html:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"radio-button",children:t.jsxs("label",{className:"radio-button__wrapper",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio-button__input",defaultChecked:!0}),t.jsxs("span",{className:"radio-button__text",children:[t.jsx("i",{className:"radio-button__text-prefix ir-icon ir-icon--rule-type-table"}),"테이블 룰"]})]})}),t.jsx("div",{className:"radio-button",children:t.jsxs("label",{className:"radio-button__wrapper",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio-button__input"}),t.jsxs("span",{className:"radio-button__text",children:[t.jsx("i",{className:"radio-button__text-prefix ir-icon ir-icon--rule-type-db"}),"DB 룰"]})]})})]})})]}),r=()=>t.jsxs(u,{children:[t.jsx(i,{children:"RadioButton List Custom Demo"}),t.jsx(e,{fixedHeight:400,html:t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
                    .rule-template-list {
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
                `}),t.jsxs("div",{className:"rule-template-list",style:{width:"175px"},children:[t.jsxs("label",{className:"rule-template-item",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio__input",defaultChecked:!0}),t.jsxs("span",{className:"radio-button__text",children:[t.jsx("i",{className:"radio-button__text-prefix ir-icon ir-icon--rule-type-table"}),"테이블 룰"]})]}),t.jsxs("label",{className:"rule-template-item",children:[t.jsx("input",{type:"radio",name:"radio",className:"radio__input"}),t.jsxs("span",{className:"radio-button__text",children:[t.jsx("i",{className:"radio-button__text-prefix ir-icon ir-icon--rule-type-db"}),"DB 룰"]})]})]})]})})]});a.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};r.__docgenInfo={description:"",methods:[],displayName:"CustomDemo"};var n,o,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Radio Button</DocTitle>\r
        <LiveEditor html={<>\r
                <div className="radio-button">\r
                    <label className="radio-button__wrapper">\r
                        <input type="radio" name="radio" className="radio-button__input" defaultChecked />\r
                        <span className="radio-button__text">메인 룰</span>\r
                    </label>\r
                </div>\r
                <div className="radio-button">\r
                    <label className="radio-button__wrapper">\r
                        <input type="radio" name="radio" className="radio-button__input" />\r
                        <span className="radio-button__text">서브 룰</span>\r
                    </label>\r
                </div>\r
            </>} />\r
        <p><strong>Small:</strong></p>\r
        <LiveEditor html={<>\r
                <div className="radio-button radio-button--sm">\r
                    <label className="radio-button__wrapper">\r
                        <input type="radio" name="radio" className="radio-button__input" defaultChecked />\r
                        <span className="radio-button__text">메인 룰</span>\r
                    </label>\r
                </div>\r
                <div className="radio-button radio-button--sm">\r
                    <label className="radio-button__wrapper">\r
                        <input type="radio" name="radio" className="radio-button__input" />\r
                        <span className="radio-button__text">서브 룰</span>\r
                    </label>\r
                </div>\r
            </>} />\r
        <DocTitle>Radio Prefix</DocTitle>\r
        <LiveEditor html={<>\r
                <div className="radio-button">\r
                    <label className="radio-button__wrapper">\r
                        <input type="radio" name="radio" className="radio-button__input" defaultChecked />\r
                        <span className="radio-button__text">\r
                            <i className="radio-button__text-prefix ir-icon ir-icon--rule-type-table"></i>\r
                            테이블 룰\r
                        </span>\r
                    </label>\r
                </div>\r
                <div className="radio-button">\r
                    <label className="radio-button__wrapper">\r
                        <input type="radio" name="radio" className="radio-button__input" />\r
                        <span className="radio-button__text">\r
                            <i className="radio-button__text-prefix ir-icon ir-icon--rule-type-db"></i>\r
                            DB 룰\r
                        </span>\r
                    </label>\r
                </div>\r
            </>} />\r
    </Doc>`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>RadioButton List Custom Demo</DocTitle>\r
\r
        <LiveEditor fixedHeight={400} html={<>\r
                    <style>{/* css */\`
                    .rule-template-list {
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
                \`}</style>\r
                    <div className="rule-template-list" style={{
      width: "175px"
    }}>\r
                        <label className="rule-template-item">\r
                            <input type="radio" name="radio" className="radio__input" defaultChecked />\r
                            <span className="radio-button__text">\r
                                <i className="radio-button__text-prefix ir-icon ir-icon--rule-type-table"></i>\r
                            테이블 룰\r
                            </span>\r
                        </label>\r
                        <label className="rule-template-item">\r
                            <input type="radio" name="radio" className="radio__input" />\r
                            <span className="radio-button__text">\r
                                <i className="radio-button__text-prefix ir-icon ir-icon--rule-type-db"></i>\r
                            DB 룰\r
                            </span>\r
                        </label>\r
                    </div>\r
                </>} />\r
    </Doc>`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const N=["RadioButton","CustomDemo"];export{r as CustomDemo,a as RadioButton,N as __namedExportsOrder,x as default};
