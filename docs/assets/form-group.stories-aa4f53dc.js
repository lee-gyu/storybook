import{j as r,a as e}from"./jsx-runtime-d057ca55.js";import{D as m,a as n,L as c}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const p={title:"HTML Components/Form Group"},i=()=>r(m,{children:[e(n,{children:"Form Group"}),r("p",{children:[e("code",{children:".form-item"}),"을 2개의 컬럼으로 표현하는 스타일입니다. 3개 이상의 컬럼이 필요한 경우 ",e("code",{children:"utility"}),"를 활용하여 변경할 수 있습니다."]}),e(c,{html:r("div",{className:"form-group",children:[r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"테이블 이름"}),e("div",{className:"form-item__control",children:e("select",{children:e("option",{})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"데이터 모델 ID"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"데이터 모델 ID를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"DB 접속명"}),e("div",{className:"form-item__control",children:e("select",{children:e("option",{children:"BIZDB"})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"데이터 모델 이름"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"데이터 모델 이름을 입력하십시오."})})})]})]}),code:`
import { IRSelect } from "./dist/index.js";

document.querySelectorAll( "select" ).forEach( ( element ) => new IRSelect( element ) );
                `})]});var t,l,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(o=(l=i.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const _=["FormGroup"];export{i as FormGroup,_ as __namedExportsOrder,p as default};
//# sourceMappingURL=form-group.stories-aa4f53dc.js.map
