import{j as t,a as n,F as s}from"./jsx-runtime-d057ca55.js";import{D as c,a as m,L as a}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const y={title:"JS Components/Confirm"},e=()=>t(c,{children:[n(m,{children:"Confirm"}),t("p",{children:[n("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n(a,{fixedHeight:300,html:t(s,{children:[n("button",{id:"btn_yn",className:"button",children:"예/아니오"}),n("button",{id:"btn_err",className:"button",children:"에러 확인"}),n("button",{id:"btn_info",className:"button",children:"정보"}),n("button",{id:"btn_warn",className:"button",children:"경고"})]}),code:`
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

document.getElementById("btn_err").onclick = () => {
    new IRConfirm({
        iconType: "error",
        messageHTML: \`확인!\`,
        onClick: (type) => alert(type)
    }).show();
}

document.getElementById("btn_info").onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "retry"],
        iconType: "info",
        messageHTML: \`정보 아이콘!\`
    }).show()
}

document.getElementById("btn_warn").onclick = () => {
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

document.getElementById("btn_err").onclick = () => {
    new IRConfirm({
        iconType: "error",
        messageHTML: \\\`확인!\\\`,
        onClick: (type) => alert(type)
    }).show();
}

document.getElementById("btn_info").onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "retry"],
        iconType: "info",
        messageHTML: \\\`정보 아이콘!\\\`
    }).show()
}

document.getElementById("btn_warn").onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "ignore", "retry"],
        iconType: "warning",
        messageHTML: \\\`경고!!\\\`
    }).show()
}
\`} />\r
        </Doc>;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,y as default};
//# sourceMappingURL=confirm.basic.stories-4274ac83.js.map
