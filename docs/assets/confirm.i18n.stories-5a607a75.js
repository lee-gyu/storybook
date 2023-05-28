import{j as e,a as n}from"./jsx-runtime-d057ca55.js";import{D as s,a as c,L as m}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const l={title:"JS Components/Confirm"},o=()=>e(s,{children:[n(c,{children:"다국어 지원"}),e("p",{children:["i18n의 ",n("code",{children:"confirm"})," 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다."]}),n(m,{fixedHeight:300,html:n("button",{id:"btn",className:"button",children:"i18n 이용"}),code:`
import { IRConfirm, i18n } from "./dist/index.js";

i18n.confirm.no = "No";
i18n.confirm.yes = "Yes";

document.getElementById("btn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        messageHTML: \`Eng\`
    }).show();
}
`})]});var i,t,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>다국어 지원</DocTitle>\r
            <p>i18n의 <code>confirm</code> 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다.</p>\r
            <LiveEditor fixedHeight={300} html={<button id="btn" className="button">i18n 이용</button>} code={\`
import { IRConfirm, i18n } from "./dist/index.js";

i18n.confirm.no = "No";
i18n.confirm.yes = "Yes";

document.getElementById("btn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        messageHTML: \\\`Eng\\\`
    }).show();
}
\`} />\r
        </Doc>;
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const u=["Localization"];export{o as Localization,u as __namedExportsOrder,l as default};
//# sourceMappingURL=confirm.i18n.stories-5a607a75.js.map
