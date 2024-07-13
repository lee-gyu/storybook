import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as t,a as l,L as m}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const d={title:"HTML Components/Form Group"},r=()=>e.jsxs(t,{children:[e.jsx(l,{children:"Form Group"}),e.jsxs("p",{children:[e.jsx("code",{children:".form-item"}),"을 2개의 컬럼으로 표현하는 스타일입니다. 3개 이상의 컬럼이 필요한 경우 ",e.jsx("code",{children:"utility"}),"를 활용하여 변경할 수 있습니다."]}),e.jsx(m,{html:e.jsxs("div",{className:"form-group",children:[e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label",children:"테이블 이름"}),e.jsx("div",{className:"form-item__control",children:e.jsx("select",{children:e.jsx("option",{})})})]}),e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label",children:"데이터 모델 ID"}),e.jsx("div",{className:"form-item__control",children:e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",className:"input__native",placeholder:"데이터 모델 ID를 입력하십시오."})})})]}),e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label",children:"DB 접속명"}),e.jsx("div",{className:"form-item__control",children:e.jsx("select",{children:e.jsx("option",{children:"BIZDB"})})})]}),e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label",children:"데이터 모델 이름"}),e.jsx("div",{className:"form-item__control",children:e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",className:"input__native",placeholder:"데이터 모델 이름을 입력하십시오."})})})]})]}),code:`
import { IRSelect } from "./dist/index.js";

document.querySelectorAll( "select" ).forEach( ( element ) => new IRSelect( element ) );
                `})]});r.__docgenInfo={description:"",methods:[],displayName:"FormGroup"};var i,s,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Form Group</DocTitle>\r
            <p><code>.form-item</code>을 2개의 컬럼으로 표현하는 스타일입니다. 3개 이상의 컬럼이 필요한 경우 <code>utility</code>를 활용하여 변경할 수 있습니다.</p>\r
            <LiveEditor html={<div className="form-group">\r
                        <div className="form-item">\r
                            <div className="form-item__label">테이블 이름</div>\r
                            <div className="form-item__control">\r
                                <select>\r
                                    <option></option>\r
                                </select>\r
                            </div>\r
                        </div>\r
                        <div className="form-item">\r
                            <div className="form-item__label">데이터 모델 ID</div>\r
                            <div className="form-item__control">\r
                                <div className="input">\r
                                    <input type="text" className="input__native" placeholder="데이터 모델 ID를 입력하십시오." />\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div className="form-item">\r
                            <div className="form-item__label">DB 접속명</div>\r
                            <div className="form-item__control">\r
                                <select>\r
                                    <option>BIZDB</option>\r
                                </select>\r
                            </div>\r
                        </div>\r
                        <div className="form-item">\r
                            <div className="form-item__label">데이터 모델 이름</div>\r
                            <div className="form-item__control">\r
                                <div className="input">\r
                                    <input type="text" className="input__native" placeholder="데이터 모델 이름을 입력하십시오." />\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>} code={\`
import { IRSelect } from "./dist/index.js";

document.querySelectorAll( "select" ).forEach( ( element ) => new IRSelect( element ) );
                \`} />\r
        </Doc>;
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const C=["FormGroup"];export{r as FormGroup,C as __namedExportsOrder,d as default};
