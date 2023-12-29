import{j as t,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as s,a,L as n}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const C={title:"HTML Components/Search"},r=()=>t(s,{children:[e(a,{children:"Search"}),e("p",{children:"셀렉트박스, 인풋, 버튼 등을 포함한 검색 영역입니다."}),e("p",{children:e("strong",{children:"일반적인 검색 영역:"})}),e(n,{html:t("div",{className:"search",children:[e("select",{children:e("option",{children:"룰 이름"})}),e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})}),e("button",{type:"button",className:"button button--primary",children:"검색"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
               `}),e("p",{children:e("strong",{children:"여러줄로 표현된 검색 영역:"})}),e(n,{html:t("div",{className:"search",children:[t("div",{className:"search__input-group",children:[t("div",{className:"search__input-group-row",children:[e("select",{children:e("option",{children:"룰 이름"})}),e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"룰 이름을 입력하십시오."})})]}),e("div",{className:"search__input-group-row",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})})})]}),e("button",{type:"button",className:"button button--primary",children:"검색"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
               `})]});var u,c,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Search</DocTitle>\r
            <p>셀렉트박스, 인풋, 버튼 등을 포함한 검색 영역입니다.</p>\r
            <p><strong>일반적인 검색 영역:</strong></p>\r
            <LiveEditor html={<div className="search">\r
                        <select>\r
                            <option>룰 이름</option>\r
                        </select>\r
                        <div className="input">\r
                            <input type="text" className="input__native" placeholder="검색어를 입력하십시오." />\r
                        </div>\r
                        <button type="button" className="button button--primary">검색</button>\r
                    </div>} code={\`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
               \`} />\r
            <p><strong>여러줄로 표현된 검색 영역:</strong></p>\r
            <LiveEditor html={<div className="search">\r
                        <div className="search__input-group">\r
                            <div className="search__input-group-row">\r
                                <select>\r
                                    <option>룰 이름</option>\r
                                </select>\r
                                <div className="input">\r
                                    <input type="text" className="input__native" placeholder="룰 이름을 입력하십시오." />\r
                                </div>\r
                            </div>\r
                            <div className="search__input-group-row">\r
                                <div className="input">\r
                                    <input type="text" className="input__native" placeholder="검색어를 입력하십시오." />\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <button type="button" className="button button--primary">검색</button>\r
                    </div>} code={\`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
               \`} />\r
        </Doc>;
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const m=["Search"];export{r as Search,m as __namedExportsOrder,C as default};
