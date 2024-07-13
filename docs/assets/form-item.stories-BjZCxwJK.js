import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as m,a as o,L as t}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const d={title:"HTML Components/Form Item"},r=()=>e.jsxs(m,{children:[e.jsx(o,{children:"Form Item"}),e.jsx("p",{children:"사용자가 입력할 수 있는 입력 요소 필드 스타일입니다."}),e.jsx("p",{children:e.jsx("strong",{children:"필드명이 존재하는 경우:"})}),e.jsx(t,{html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label",children:"룰 항목"}),e.jsx("div",{className:"form-item__control",children:e.jsx("select",{children:e.jsx("option",{children:"룰 항목"})})})]}),e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label",children:"룰 이름"}),e.jsx("div",{className:"form-item__control",children:e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",className:"input__native"})})})]})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
                `}),e.jsx("p",{children:e.jsx("strong",{children:"필드명이 없는 경우:"})}),e.jsx(t,{html:e.jsx("div",{className:"form-item",children:e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",className:"input__native"})})})})]});r.__docgenInfo={description:"",methods:[],displayName:"FormItem"};var s,i,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const p=["FormItem"];export{r as FormItem,p as __namedExportsOrder,d as default};
