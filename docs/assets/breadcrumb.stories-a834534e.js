import{j as r,a as e}from"./jsx-runtime-d057ca55.js";import{D as n,a as s,L as l}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const b={title:"HTML Components/Breadcrumb"},i=()=>r(n,{children:[e(s,{children:"Breadcrumb"}),e(l,{fixedHeight:200,html:e("div",{className:"breadcrumb",children:r("ul",{className:"breadcrumb__list",children:[e("li",{className:"breadcrumb__item",children:"개발"}),e("li",{className:"breadcrumb__item",children:"PoC"}),e("li",{className:"breadcrumb__item",children:r("div",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"사이트 목록"})]})}),e("li",{className:"breadcrumb__item",children:e("select",{className:"width--md",children:e("option",{children:"2021-10-15"})})}),e("li",{className:"breadcrumb__item",children:r("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]})})]})}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
`})]});var t,c,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Breadcrumb</DocTitle>\r
            <LiveEditor fixedHeight={200} html={<div className="breadcrumb">\r
                        <ul className="breadcrumb__list">\r
                            <li className="breadcrumb__item">개발</li>\r
                            <li className="breadcrumb__item">PoC</li>\r
                            <li className="breadcrumb__item">\r
                                <div className="rule-name">\r
                                    <i className="ir-icon ir-icon--rule-type-table"></i>\r
                                    <span className="rule-name__text">사이트 목록</span>\r
                                </div>\r
                            </li>\r
                            <li className="breadcrumb__item">\r
                                <select className="width--md">\r
                                    <option>2021-10-15</option>\r
                                </select>\r
                            </li>\r
                            <li className="breadcrumb__item">\r
                                <button type="button" className="button button--outline">\r
                                    <i className="button__icon-prefix ir-icon ir-icon--version-history"></i> 버전 관리\r
                                </button>\r
                            </li>\r
                        </ul>\r
                    </div>} code={/* javascript */\`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
\`} />\r
        </Doc>;
}`,...(a=(c=i.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const _=["Breadcrumb"];export{i as Breadcrumb,_ as __namedExportsOrder,b as default};
//# sourceMappingURL=breadcrumb.stories-a834534e.js.map
