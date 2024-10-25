import{j as n}from"./jsx-runtime-DEdD30eg.js";import{D as i,a as s,L as c}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const p={title:"JS Components/IRConfirm"},e=()=>n.jsxs(i,{children:[n.jsx(s,{children:"IRConfirm"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n.jsx(c,{fixedHeight:300,html:n.jsxs(n.Fragment,{children:[n.jsx("button",{id:"btn_yn",className:"button",children:"예/아니오"}),n.jsx("button",{id:"btn_err",className:"button",children:"에러 확인"}),n.jsx("button",{id:"btn_info",className:"button",children:"정보"}),n.jsx("button",{id:"btn_warn",className:"button",children:"경고"}),n.jsx("div",{className:"mt--lg width--lg",children:n.jsx("input",{id:"input_enter_test",className:"input__native",placeholder:"입력 후 엔터"})})]}),code:`
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
`})]});e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRConfirm</DocTitle>\r
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const d=["Basic"];export{e as Basic,d as __namedExportsOrder,p as default};
