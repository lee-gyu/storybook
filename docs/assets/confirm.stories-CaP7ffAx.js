import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as t,a as e,L as o}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const i=`import { IRConfirm, createTooltipContainer } from "@innorules/ir-style";

const messageElement = $( "<div/>" )
    .text( "폴더를 삭제 하시겠습니까?" )
    .attr( {
        "data-ir-tooltip": "true",
        "data-ir-tooltip-text": "툴팁 테스트",
    } );

createTooltipContainer( {
    containerElement: document.getElementById( "ir_message" ),
} );

document.getElementById( "btn_yn" ).onclick = () =>
{
    new IRConfirm( {
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        onClick: ( type ) => alert( type ),
        contentElement: messageElement,
    } ).show();
};

input_enter_test.onkeydown = ( e ) =>
{
    if( e.key === "Enter" )
    {
        new IRConfirm( {
            iconType: "error",
            contentElement: $( "<span/>" ).text( "엔터" ),
            onClick: ( type ) => alert( type ),
        } ).show();
    }
};

btn_err.onclick = () =>
{
    new IRConfirm( {
        iconType: "error",
        contentElement: $( "<span/>" ).text( "확인!" ),
        onClick: ( type ) => alert( type ),
    } ).show();
};

btn_info.onclick = () =>
{
    new IRConfirm( {
        buttonType: ["stop", "retry"],
        iconType: "info",
        contentElement: $( "<span/>" ).text( "정보 아이콘" ),
    } ).show();
};

btn_warn.onclick = () =>
{
    new IRConfirm( {
        buttonType: ["stop", "ignore", "retry"],
        iconType: "warning",
        contentElement: $( "<span/>" ).text( "경고!" ),
    } ).show();
};`,s=`<button id="btn_yn" class="button">예/아니오</button>
<button id="btn_err" class="button">에러 확인</button>
<button id="btn_info" class="button">정보</button>
<button id="btn_warn" class="button">경고</button>
<div class="mt--lg width--lg">
    <input id="input_enter_test" class="input__native" placeholder="입력 후 엔터" />
</div>`;function r(){return n.jsxs(t,{children:[n.jsx(e,{children:"IRConfirm"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n.jsx(o,{fixedHeight:300,htmlRaw:s,code:i})]})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};const c=`import { IRConfirm } from "@innorules/ir-style";

document.getElementById( "btn" ).onclick = () =>
{
    new IRConfirm( {
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // buttonType에 대응함. 기본 값 한글
        msgMap: {
            no: "아니",
            yes: "응",
        },
        // question, warning, info
        iconType: "question",
        contentElement: $( "<span/>" ).text( "커스텀" ),
    } ).show();
};`,l='<button id="btn" class="button">버튼 내용 오버라이드</button>';function d(){return n.jsxs(t,{children:[n.jsx(e,{children:"버튼 텍스트 변경"}),n.jsxs("p",{children:[n.jsx("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n.jsx(o,{fixedHeight:300,htmlRaw:l,code:c})]})}d.__docgenInfo={description:"",methods:[],displayName:"CustomButtonText"};const m=`import { IRConfirm, i18n } from "@innorules/ir-style";

i18n.setLocale( "en" );

document.getElementById( "btn" ).onclick = () =>
{
    new IRConfirm( {
        // yes, no, stop, retry, ignore, ok
        buttonType: ["no", "yes"],
        // question, warning, info
        iconType: "question",
        contentElement: $( "<span/>" ).text( "English" ),
    } ).show();
};`,p='<button id="btn" class="button">i18n 이용</button>';function a(){return n.jsxs(t,{children:[n.jsx(e,{children:"다국어 지원"}),n.jsxs("p",{children:["i18n의 ",n.jsx("code",{children:"confirm"})," 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다."]}),n.jsx(o,{fixedHeight:300,htmlRaw:p,code:m})]})}a.__docgenInfo={description:"",methods:[],displayName:"i18n"};const u=`import { IRConfirm } from "@innorules/ir-style";

btn_yes.onclick = () =>
{
    new IRConfirm( {
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: ( type ) => alert( type ),
        enterButton: "yes",
        contentElement: $( "<span/>" ).text( "예, 아니오" ),
    } ).show();
};

btn_no.onclick = () =>
{
    new IRConfirm( {
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: ( type ) => alert( type ),
        enterButton: "no",
        escButton: "yes",
        contentElement: $( "<span/>" ).text( "예, 아니오" ),
    } ).show();
};`,y=`<button id="btn_yes" class="button">예</button>
<button id="btn_no" class="button">아니오</button>`;function b(){return n.jsxs(t,{children:[n.jsx(e,{children:"KeyBinding"}),n.jsxs("p",{children:[n.jsx("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n.jsx(o,{fixedHeight:300,htmlRaw:y,code:u})]})}b.__docgenInfo={description:"",methods:[],displayName:"KeyBinding"};const g={title:"JS Components/IRConfirm"},_=["Basic","CustomButtonText","i18n","KeyBinding"];export{r as Basic,d as CustomButtonText,b as KeyBinding,_ as __namedExportsOrder,g as default,a as i18n};
