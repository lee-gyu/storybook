import{j as e,a as n}from"./jsx-runtime-CjohWU4o.js";import{D as r,a as C,L as s}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const l={title:"JS Components/Confirm"},o=()=>e(r,{children:[n(C,{children:"다국어 지원"}),e("p",{children:["i18n의 ",n("code",{children:"confirm"})," 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다."]}),n(s,{fixedHeight:300,html:n("button",{id:"btn",className:"button",children:"i18n 이용"}),code:`
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
`})]});var t,u,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const p=["Localization"];export{o as Localization,p as __namedExportsOrder,l as default};
