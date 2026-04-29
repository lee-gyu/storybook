import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { IRConfirm, createTooltipContainer } from "@innorules/ir-style";

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
};`})),c,l=e((()=>{c=`<button id="btn_yn" class="button">예/아니오</button>
<button id="btn_err" class="button">에러 확인</button>
<button id="btn_info" class="button">정보</button>
<button id="btn_warn" class="button">경고</button>
<div class="mt--lg width--lg">
    <input id="input_enter_test" class="input__native" placeholder="입력 후 엔터" />
</div>`}));function u(){return(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`IRConfirm`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`IRConfirm`}),` 클래스를 이용하여 메시지 박스를 출력합니다.`]}),(0,d.jsx)(r,{fixedHeight:300,htmlRaw:c,code:o})]})}var d,f=e((()=>{s(),l(),i(),d=a(),u.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),p,m=e((()=>{p=`import { IRConfirm } from "@innorules/ir-style";

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
};`})),h,g=e((()=>{h=`<button id="btn" class="button">버튼 내용 오버라이드</button>`}));function _(){return(0,v.jsxs)(n,{children:[(0,v.jsx)(t,{children:`버튼 텍스트 변경`}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`code`,{children:`msgMap`}),`을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다.`]}),(0,v.jsx)(r,{fixedHeight:300,htmlRaw:h,code:p})]})}var v,y=e((()=>{m(),g(),i(),v=a(),_.__docgenInfo={description:``,methods:[],displayName:`CustomButtonText`}})),b,x=e((()=>{b=`import { IRConfirm, i18n } from "@innorules/ir-style";

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
};`})),S,C=e((()=>{S=`<button id="btn" class="button">i18n 이용</button>`}));function w(){return(0,T.jsxs)(n,{children:[(0,T.jsx)(t,{children:`다국어 지원`}),(0,T.jsxs)(`p`,{children:[`i18n의 `,(0,T.jsx)(`code`,{children:`confirm`}),` 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다.`]}),(0,T.jsx)(r,{fixedHeight:300,htmlRaw:S,code:b})]})}var T,E=e((()=>{x(),C(),i(),T=a(),w.__docgenInfo={description:``,methods:[],displayName:`i18n`}})),D,O=e((()=>{D=`import { IRConfirm } from "@innorules/ir-style";

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
};`})),k,A=e((()=>{k=`<button id="btn_yes" class="button">예</button>
<button id="btn_no" class="button">아니오</button>`}));function j(){return(0,M.jsxs)(n,{children:[(0,M.jsx)(t,{children:`KeyBinding`}),(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`code`,{children:`enterButton`}),` 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다.`]}),(0,M.jsx)(r,{fixedHeight:300,htmlRaw:k,code:D})]})}var M,N=e((()=>{O(),A(),i(),M=a(),j.__docgenInfo={description:``,methods:[],displayName:`KeyBinding`}})),P,F;e((()=>{f(),y(),E(),N(),P={title:`JS Components/IRConfirm`},F=[`Basic`,`CustomButtonText`,`i18n`,`KeyBinding`]}))();export{u as Basic,_ as CustomButtonText,j as KeyBinding,F as __namedExportsOrder,P as default,w as i18n};