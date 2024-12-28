import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{D as e,a as t,L as o}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const i=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRConfirm"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n.jsx(o,{fixedHeight:300,html:n.jsxs(n.Fragment,{children:[n.jsx("button",{id:"btn_yn",className:"button",children:"예/아니오"}),n.jsx("button",{id:"btn_err",className:"button",children:"에러 확인"}),n.jsx("button",{id:"btn_info",className:"button",children:"정보"}),n.jsx("button",{id:"btn_warn",className:"button",children:"경고"}),n.jsx("div",{className:"mt--lg width--lg",children:n.jsx("input",{id:"input_enter_test",className:"input__native",placeholder:"입력 후 엔터"})})]}),code:`
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
`})]});i.__docgenInfo={description:"",methods:[],displayName:"Basic"};const s=()=>n.jsxs(e,{children:[n.jsx(t,{children:"다국어 지원"}),n.jsxs("p",{children:["i18n의 ",n.jsx("code",{children:"confirm"})," 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다."]}),n.jsx(o,{fixedHeight:300,html:n.jsx("button",{id:"btn",className:"button",children:"i18n 이용"}),code:`
import { IRConfirm, i18n } from "./dist/index.js";

i18n.setLocale("en");

document.getElementById("btn").onclick = () => {
    new IRConfirm({
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        contentElement: $("<span/>").text("English"),
    }).show();
}
`})]});s.__docgenInfo={description:"",methods:[],displayName:"i18n"};const r=()=>n.jsxs(e,{children:[n.jsx(t,{children:"버튼 텍스트 변경"}),n.jsxs("p",{children:[n.jsx("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n.jsx(o,{fixedHeight:300,html:n.jsx("button",{id:"btn",className:"button",children:"버튼 내용 오버라이드"}),code:`
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
`})]});r.__docgenInfo={description:"",methods:[],displayName:"CustomButtonText"};const c=()=>n.jsxs(e,{children:[n.jsx(t,{children:"KeyBinding"}),n.jsxs("p",{children:[n.jsx("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n.jsx(o,{fixedHeight:300,html:n.jsxs(n.Fragment,{children:[n.jsx("button",{id:"btn_yes",className:"button",children:"예"}),n.jsx("button",{id:"btn_no",className:"button",children:"아니오"})]}),code:`
import { IRConfirm } from "./dist/index.js";

btn_yes.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "yes",
        contentElement: $("<span/>").text("예, 아니오"),
    }).show();
}

btn_no.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "no",
        escButton: "yes",
        contentElement: $("<span/>").text("예, 아니오"),
    }).show();
}
`})]});c.__docgenInfo={description:"",methods:[],displayName:"KeyBinding"};const p={title:"JS Components/IRConfirm"},a=["Basic","i18n","CustomButtonText","KeyBinding"];export{i as Basic,r as CustomButtonText,c as KeyBinding,a as __namedExportsOrder,p as default,s as i18n};
