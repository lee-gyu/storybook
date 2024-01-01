import{j as o,a as n}from"./jsx-runtime-KzWSGvcx.js";import{D as r,a as s,L as i}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const d={title:"JS Components/Confirm"},t=()=>o(r,{children:[n(s,{children:"버튼 텍스트 변경"}),o("p",{children:[n("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n(i,{fixedHeight:300,html:n("button",{id:"btn",className:"button",children:"버튼 내용 오버라이드"}),code:`
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
`})]});var u,e,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(C=(e=t.parameters)==null?void 0:e.docs)==null?void 0:C.source}}};const p=["CustomButtonText"];export{t as CustomButtonText,p as __namedExportsOrder,d as default};
