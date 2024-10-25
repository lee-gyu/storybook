import{j as n}from"./jsx-runtime-DEdD30eg.js";import{D as r,a as i,L as m}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const a={title:"JS Components/IRConfirm"},t=()=>n.jsxs(r,{children:[n.jsx(i,{children:"버튼 텍스트 변경"}),n.jsxs("p",{children:[n.jsx("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n.jsx(m,{fixedHeight:300,html:n.jsx("button",{id:"btn",className:"button",children:"버튼 내용 오버라이드"}),code:`
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
`})]});t.__docgenInfo={description:"",methods:[],displayName:"CustomButtonText"};var o,e,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(s=(e=t.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const u=["CustomButtonText"];export{t as CustomButtonText,u as __namedExportsOrder,a as default};
