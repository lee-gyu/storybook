import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{D as u,a as r,L as s}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const a={title:"JS Components/Confirm"},o=()=>n.jsxs(u,{children:[n.jsx(r,{children:"다국어 지원"}),n.jsxs("p",{children:["i18n의 ",n.jsx("code",{children:"confirm"})," 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다."]}),n.jsx(s,{fixedHeight:300,html:n.jsx("button",{id:"btn",className:"button",children:"i18n 이용"}),code:`
import { IRConfirm, i18n } from "./dist/index.js";

i18n.confirm.no = "No";
i18n.confirm.yes = "Yes";

document.getElementById("btn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        contentElement: $("<span/>").text("English"),
    }).show();
}
`})]});o.__docgenInfo={description:"",methods:[],displayName:"Localization"};var e,t,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
        contentElement: $("<span/>").text("English"),
    }).show();
}
\`} />\r
        </Doc>;
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const l=["Localization"];export{o as Localization,l as __namedExportsOrder,a as default};
