import{j as r,a as e,F as o}from"./jsx-runtime-CjohWU4o.js";import{D as c,a as l,L as i}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const C={title:"HTML Components/Form Item"},t=()=>r(c,{children:[e(l,{children:"Form Item"}),e("p",{children:"사용자가 입력할 수 있는 입력 요소 필드 스타일입니다."}),e("p",{children:e("strong",{children:"필드명이 존재하는 경우:"})}),e(i,{html:r(o,{children:[r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"룰 항목"}),e("div",{className:"form-item__control",children:e("select",{children:e("option",{children:"룰 항목"})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"룰 이름"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native"})})})]})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
                `}),e("p",{children:e("strong",{children:"필드명이 없는 경우:"})}),e(i,{html:e("div",{className:"form-item",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native"})})})})]});var n,m,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Form Item</DocTitle>\r
            <p>사용자가 입력할 수 있는 입력 요소 필드 스타일입니다.</p>\r
            <p><strong>필드명이 존재하는 경우:</strong></p>\r
            <LiveEditor html={<>\r
                        <div className="form-item">\r
                            <div className="form-item__label">룰 항목</div>\r
                            <div className="form-item__control">\r
                                <select>\r
                                    <option>룰 항목</option>\r
                                </select>\r
                            </div>\r
                        </div>\r
                        <div className="form-item">\r
                            <div className="form-item__label">룰 이름</div>\r
                            <div className="form-item__control">\r
                                <div className="input">\r
                                    <input type="text" className="input__native" />\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </>} code={\`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
                \`} />\r
            <p><strong>필드명이 없는 경우:</strong></p>\r
            <LiveEditor html={<div className="form-item">\r
                    <div className="input">\r
                        <input type="text" className="input__native" />\r
                    </div>\r
                </div>} />\r
        </Doc>;
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const _=["FormItem"];export{t as FormItem,_ as __namedExportsOrder,C as default};
