import{j as t,a as n,F as u}from"./jsx-runtime-KzWSGvcx.js";import{D as s,a as c,L as a}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const d={title:"JS Components/Confirm"},e=()=>t(s,{children:[n(c,{children:"Confirm"}),t("p",{children:[n("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n(a,{fixedHeight:300,html:t(u,{children:[n("button",{id:"btn_yn",className:"button",children:"예/아니오"}),n("button",{id:"btn_err",className:"button",children:"에러 확인"}),n("button",{id:"btn_info",className:"button",children:"정보"}),n("button",{id:"btn_warn",className:"button",children:"경고"}),n("div",{className:"mt--lg width--lg",children:n("input",{id:"input_enter_test",className:"input__native",placeholder:"입력 후 엔터"})})]}),code:`
import { IRConfirm, createTooltip } from "./dist/index.js";

const messageElement = $("<div/>").text("폴더를 삭제 하시겠습니까?");

createTooltip( {
    refElement: messageElement[0],
    label: "툴팁 테스트",
} );

document.getElementById("btn_yn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        onClick: (type) => alert(type),
        contentElement: messageElement,
    }).show();
}

input_enter_test.onkeydown = (e) => {
    if (e.key === "Enter")
    {
        new IRConfirm({
            iconType: "error",
            contentElement: $("<span/>").text("엔터"),
            onClick: (type) => alert(type)
        }).show();
    }
}

btn_err.onclick = () => {
    new IRConfirm({
        iconType: "error",
        contentElement: $("<span/>").text("확인!"),
        onClick: (type) => alert(type)
    }).show();
}

btn_info.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "retry"],
        iconType: "info",
        contentElement: $("<span/>").text("정보 아이콘"),
    }).show()
}

btn_warn.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "ignore", "retry"],
        iconType: "warning",
        contentElement: $("<span/>").text("경고!"),
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
import { IRConfirm, createTooltip } from "./dist/index.js";

const messageElement = $("<div/>").text("폴더를 삭제 하시겠습니까?");

createTooltip( {
    refElement: messageElement[0],
    label: "툴팁 테스트",
} );

document.getElementById("btn_yn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        onClick: (type) => alert(type),
        contentElement: messageElement,
    }).show();
}

input_enter_test.onkeydown = (e) => {
    if (e.key === "Enter")
    {
        new IRConfirm({
            iconType: "error",
            contentElement: $("<span/>").text("엔터"),
            onClick: (type) => alert(type)
        }).show();
    }
}

btn_err.onclick = () => {
    new IRConfirm({
        iconType: "error",
        contentElement: $("<span/>").text("확인!"),
        onClick: (type) => alert(type)
    }).show();
}

btn_info.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "retry"],
        iconType: "info",
        contentElement: $("<span/>").text("정보 아이콘"),
    }).show()
}

btn_warn.onclick = () => {
    new IRConfirm({
        buttonType: ["stop", "ignore", "retry"],
        iconType: "warning",
        contentElement: $("<span/>").text("경고!"),
    }).show()
}
\`} />\r
        </Doc>;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const y=["Basic"];export{e as Basic,y as __namedExportsOrder,d as default};
