import{j as o,a as n}from"./jsx-runtime-e43ccb36.js";import{D as i,a as c,L as m}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const l={title:"JS Components/Confirm"},t=()=>o(i,{children:[n(c,{children:"버튼 텍스트 변경"}),o("p",{children:[n("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n(m,{fixedHeight:300,html:n("button",{id:"btn",className:"button",children:"버튼 내용 오버라이드"}),code:`
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
        contentElement: $("<span/>").text("커스텀"),
    }).show();
}
`})]});var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
        contentElement: $("<span/>").text("커스텀"),
    }).show();
}
\`} />\r
        </Doc>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=["CustomButtonText"];export{t as CustomButtonText,y as __namedExportsOrder,l as default};
//# sourceMappingURL=confirm.customText.stories-4ea8609e.js.map
