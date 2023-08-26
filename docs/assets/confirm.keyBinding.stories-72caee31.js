import{j as t,a as n,F as r}from"./jsx-runtime-e43ccb36.js";import{D as c,a,L as d}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const l={title:"JS Components/Confirm"},e=()=>t(c,{children:[n(a,{children:"KeyBinding"}),t("p",{children:[n("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n(d,{fixedHeight:300,html:t(r,{children:[n("button",{id:"btn_yes",className:"button",children:"예"}),n("button",{id:"btn_no",className:"button",children:"아니오"})]}),code:`
import { IRConfirm } from "./dist/index.js";

btn_yes.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "yes",
        messageHTML: \`예/아니오\`
    }).show();
}

btn_no.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "no",
        escButton: "yes",
        messageHTML: \`예/아니오\`
    }).show();
}
`})]});var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>KeyBinding</DocTitle>\r
            <p><code>enterButton</code> 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다.</p>\r
            <LiveEditor fixedHeight={300} html={<>\r
                        <button id="btn_yes" className="button">예</button>\r
                        <button id="btn_no" className="button">아니오</button>\r
                    </>} code={\`
import { IRConfirm } from "./dist/index.js";

btn_yes.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "yes",
        messageHTML: \\\`예/아니오\\\`
    }).show();
}

btn_no.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "no",
        escButton: "yes",
        messageHTML: \\\`예/아니오\\\`
    }).show();
}
\`} />\r
        </Doc>;
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const b=["KeyBinding"];export{e as KeyBinding,b as __namedExportsOrder,l as default};
//# sourceMappingURL=confirm.keyBinding.stories-72caee31.js.map
