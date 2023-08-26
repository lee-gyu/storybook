import{j as t,a as n,F as s}from"./jsx-runtime-e43ccb36.js";import{D as c,a,L as p}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const u={title:"JS Components/Confirm"},e=()=>t(c,{children:[n(a,{children:"Confirm"}),t("p",{children:[n("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n(p,{fixedHeight:300,html:t(s,{children:[n("button",{id:"btn_yn",className:"button",children:"예/아니오"}),n("button",{id:"btn_err",className:"button",children:"에러 확인"}),n("button",{id:"btn_info",className:"button",children:"정보"}),n("button",{id:"btn_warn",className:"button",children:"경고"}),n("div",{className:"mt--lg width--lg",children:n("input",{id:"input_enter_test",className:"input__native",placeholder:"입력 후 엔터"})})]}),code:`
import { IRConfirm } from "./dist/index.js";

document.getElementById("btn_yn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        onClick: (type) => alert(type),
        messageHTML: \`
<p>폴더를 삭제하시겠습니까?</p>
<p>
    <strong class="text--info">이노은행</strong>
</p>\`
    }).show();
}

input_enter_test.onkeydown = (e) => {
    if (e.key === "Enter")
    {
        new IRConfirm({
            iconType: "error",
            messageHTML: \`확인!\`,
            onClick: (type) => alert(type)
        }).show();
    }
}

btn_err.onclick = () => {
    new IRConfirm({
        iconType: "error",
        messageHTML: \`확인!\`,
        onClick: (type) => alert(type)
    }).show();
}

btn_info.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "retry"],
        iconType: "info",
        messageHTML: \`정보 아이콘!\`
    }).show()
}

btn_warn.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "ignore", "retry"],
        iconType: "warning",
        messageHTML: \`경고!!\`
    }).show()
}
`})]});var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Confirm</DocTitle>\r
            <p><code>IRConfirm</code> 클래스를 이용하여 메시지 박스를 출력합니다.</p>\r
            <LiveEditor fixedHeight={300} html={<>\r
                        <button id="btn_yn" className="button">예/아니오</button>\r
                        <button id="btn_err" className="button">에러 확인</button>\r
                        <button id="btn_info" className="button">정보</button>\r
                        <button id="btn_warn" className="button">경고</button>\r
                        <div className="mt--lg width--lg">\r
                            <input id="input_enter_test" className="input__native" placeholder="입력 후 엔터" />\r
                        </div>\r
                    </>} code={\`
import { IRConfirm } from "./dist/index.js";

document.getElementById("btn_yn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        onClick: (type) => alert(type),
        messageHTML: \\\`
<p>폴더를 삭제하시겠습니까?</p>
<p>
    <strong class="text--info">이노은행</strong>
</p>\\\`
    }).show();
}

input_enter_test.onkeydown = (e) => {
    if (e.key === "Enter")
    {
        new IRConfirm({
            iconType: "error",
            messageHTML: \\\`확인!\\\`,
            onClick: (type) => alert(type)
        }).show();
    }
}

btn_err.onclick = () => {
    new IRConfirm({
        iconType: "error",
        messageHTML: \\\`확인!\\\`,
        onClick: (type) => alert(type)
    }).show();
}

btn_info.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "retry"],
        iconType: "info",
        messageHTML: \\\`정보 아이콘!\\\`
    }).show()
}

btn_warn.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "ignore", "retry"],
        iconType: "warning",
        messageHTML: \\\`경고!!\\\`
    }).show()
}
\`} />\r
        </Doc>;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,u as default};
//# sourceMappingURL=confirm.basic.stories-635cd489.js.map
