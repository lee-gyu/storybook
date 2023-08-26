import{a as e,F as l,j as n}from"./jsx-runtime-e43ccb36.js";import{B as t}from"./button-70cc3c70.js";import{b as o}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const v={title:"Builder Examples/로그인"},i=()=>e(l,{children:e(o,{code:`
import { IRSelect, IRConfirm } from "./dist/index.js";

new IRSelect(locale);

btnLogin.onclick = () => new IRConfirm({
    messageHTML: "로그인.",
}).show()

                `,html:e("div",{className:"app",children:e("div",{className:"login",children:n("div",{className:"login__wrapper",children:[n("div",{className:"login__header",children:[e("h1",{className:"innorules-inverse-logo",children:e("span",{className:"a11y-hidden",children:"InnoRules"})}),n("select",{id:"locale",className:"select--transparent select--right width--xs",children:[e("option",{children:"한국어"}),e("option",{children:"English"}),e("option",{children:"日本語"})]})]}),n("div",{className:"login__form",children:[e("div",{className:"form-item",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"사용자 ID"})})}),e("div",{className:"form-item",children:e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"비밀번호"})})}),e("div",{className:"form-item",children:e(t,{id:"btnLogin",text:"로그인",intent:"primary",addClass:"width--block"})})]})]})})})})});var s,r,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <>\r
            <LiveEditorForExamples code={\`
import { IRSelect, IRConfirm } from "./dist/index.js";

new IRSelect(locale);

btnLogin.onclick = () => new IRConfirm({
    messageHTML: "로그인.",
}).show()

                \`} html={<div className="app">\r
                        <div className="login">\r
                            <div className="login__wrapper">\r
                                <div className="login__header">\r
                                    <h1 className="innorules-inverse-logo">\r
                                        <span className="a11y-hidden">InnoRules</span>\r
                                    </h1>\r
                                    <select id="locale" className="select--transparent select--right width--xs">\r
                                        <option>한국어</option>\r
                                        <option>English</option>\r
                                        <option>日本語</option>\r
                                    </select>\r
                                </div>\r
                                <div className="login__form">\r
                                    <div className="form-item">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="사용자 ID" />\r
                                        </div>\r
                                    </div>\r
                                    <div className="form-item">\r
                                        <div className="input">\r
                                            <input type="password" className="input__native" placeholder="비밀번호" />\r
                                        </div>\r
                                    </div>\r
                                    <div className="form-item">\r
                                        <Button id="btnLogin" text="로그인" intent="primary" addClass={"width--block"} />\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>} />\r
        </>;
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const N=["로그인"];export{N as __namedExportsOrder,v as default,i as 로그인};
//# sourceMappingURL=로그인.stories-085b98b5.js.map
