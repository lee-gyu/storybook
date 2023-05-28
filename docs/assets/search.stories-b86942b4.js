import{j as t,a as e}from"./jsx-runtime-d057ca55.js";import{D as a,a as o,L as n}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const m={title:"HTML Components/Search"},r=()=>t(a,{children:[e(o,{children:"Search"}),e("p",{children:"셀렉트박스, 인풋, 버튼 등을 포함한 검색 영역입니다."}),e("p",{children:e("strong",{children:"일반적인 검색 영역:"})}),e(n,{html:t("div",{className:"search",children:[e("select",{children:e("option",{children:"룰 이름"})}),e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})}),e("button",{type:"button",className:"button button--primary",children:"검색"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
               `}),e("p",{children:e("strong",{children:"여러줄로 표현된 검색 영역:"})}),e(n,{html:t("div",{className:"search",children:[t("div",{className:"search__input-group",children:[t("div",{className:"search__input-group-row",children:[e("select",{children:e("option",{children:"룰 이름"})}),e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"룰 이름을 입력하십시오."})})]}),e("div",{className:"search__input-group-row",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})})})]}),e("button",{type:"button",className:"button button--primary",children:"검색"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect(document.querySelector("select"));
               `})]});var c,i,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const h=["Search"];export{r as Search,h as __namedExportsOrder,m as default};
//# sourceMappingURL=search.stories-b86942b4.js.map
