import{j as o,a as e}from"./jsx-runtime-d057ca55.js";import{D as s,a as i,L as l}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const h={title:"JS Components/Select"},t=()=>o(s,{children:[e(i,{children:"Select"}),o("p",{children:[e("code",{children:"IRSelect"})," 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다."]}),e(l,{fixedHeight:400,html:o("select",{style:{display:"none"},children:[e("option",{children:"한국어"}),e("option",{children:"English"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                `})]});var n,c,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Select</DocTitle>\r
            <p><code>IRSelect</code> 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다.</p>\r
            <LiveEditor fixedHeight={400} html={<select style={{
      display: "none"
    }}>\r
                        <option>한국어</option>\r
                        <option>English</option>\r
                    </select>} code={\`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                \`} />\r
        </Doc>;
}`,...(r=(c=t.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,h as default};
//# sourceMappingURL=select.basic.stories-374029d0.js.map
