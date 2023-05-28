import{j as e,a as n}from"./jsx-runtime-d057ca55.js";import{D as i,a as m,L as c}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const l={title:"JS Components/Confirm"},o=()=>e(i,{children:[n(m,{children:"버튼 텍스트 변경"}),e("p",{children:[n("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n(c,{fixedHeight:300,html:n("button",{id:"btn",className:"button",children:"버튼 내용 오버라이드"}),code:`
import { IRConfirm } from "./dist/index.js";

document.getElementById("btn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // buttonType에 대응함. 기본 값 한글
        msgMap: {
            no: "아니",
            yes: "응"
        },
        // question, warning, info
        iconType: "question",
        messageHTML: \`커스텀 메시지\`
    }).show();
}
`})]});var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>버튼 텍스트 변경</DocTitle>\r
            <p><code>msgMap</code>을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다.</p>\r
            <LiveEditor fixedHeight={300} html={<button id="btn" className="button">버튼 내용 오버라이드</button>} code={\`
import { IRConfirm } from "./dist/index.js";

document.getElementById("btn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // buttonType에 대응함. 기본 값 한글
        msgMap: {
            no: "아니",
            yes: "응"
        },
        // question, warning, info
        iconType: "question",
        messageHTML: \\\`커스텀 메시지\\\`
    }).show();
}
\`} />\r
        </Doc>;
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const y=["CustomButtonText"];export{o as CustomButtonText,y as __namedExportsOrder,l as default};
//# sourceMappingURL=confirm.customText.stories-ef235567.js.map
