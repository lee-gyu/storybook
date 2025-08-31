import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as t,a as e,L as r}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const o=`import { IRConfirm, createTooltipContainer } from "@innorules/ir-style";\r
\r
const messageElement = $( "<div/>" )\r
    .text( "폴더를 삭제 하시겠습니까?" )\r
    .attr( {\r
        "data-ir-tooltip": "true",\r
        "data-ir-tooltip-text": "툴팁 테스트",\r
    } );\r
\r
createTooltipContainer( {\r
    containerElement: document.getElementById( "ir_message" ),\r
} );\r
\r
document.getElementById( "btn_yn" ).onclick = () =>\r
{\r
    new IRConfirm( {\r
        // yes, no, stop, retry, ignore, ok\r
        buttonType: ["no", "yes"],\r
        // question, warning, info\r
        iconType: "question",\r
        onClick: ( type ) => alert( type ),\r
        contentElement: messageElement,\r
    } ).show();\r
};\r
\r
input_enter_test.onkeydown = ( e ) =>\r
{\r
    if( e.key === "Enter" )\r
    {\r
        new IRConfirm( {\r
            iconType: "error",\r
            contentElement: $( "<span/>" ).text( "엔터" ),\r
            onClick: ( type ) => alert( type ),\r
        } ).show();\r
    }\r
};\r
\r
btn_err.onclick = () =>\r
{\r
    new IRConfirm( {\r
        iconType: "error",\r
        contentElement: $( "<span/>" ).text( "확인!" ),\r
        onClick: ( type ) => alert( type ),\r
    } ).show();\r
};\r
\r
btn_info.onclick = () =>\r
{\r
    new IRConfirm( {\r
        buttonType: ["stop", "retry"],\r
        iconType: "info",\r
        contentElement: $( "<span/>" ).text( "정보 아이콘" ),\r
    } ).show();\r
};\r
\r
btn_warn.onclick = () =>\r
{\r
    new IRConfirm( {\r
        buttonType: ["stop", "ignore", "retry"],\r
        iconType: "warning",\r
        contentElement: $( "<span/>" ).text( "경고!" ),\r
    } ).show();\r
};`,i=`<button id="btn_yn" class="button">예/아니오</button>\r
<button id="btn_err" class="button">에러 확인</button>\r
<button id="btn_info" class="button">정보</button>\r
<button id="btn_warn" class="button">경고</button>\r
<div class="mt--lg width--lg">\r
    <input id="input_enter_test" class="input__native" placeholder="입력 후 엔터" />\r
</div>`;function s(){return n.jsxs(t,{children:[n.jsx(e,{children:"IRConfirm"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRConfirm"})," 클래스를 이용하여 메시지 박스를 출력합니다."]}),n.jsx(r,{fixedHeight:300,htmlRaw:i,code:o})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const c=`import { IRConfirm } from "@innorules/ir-style";\r
\r
document.getElementById( "btn" ).onclick = () =>\r
{\r
    new IRConfirm( {\r
        // yes, no, stop, retry, ignore, ok\r
        buttonType: ["no", "yes"],\r
        // buttonType에 대응함. 기본 값 한글\r
        msgMap: {\r
            no: "아니",\r
            yes: "응",\r
        },\r
        // question, warning, info\r
        iconType: "question",\r
        contentElement: $( "<span/>" ).text( "커스텀" ),\r
    } ).show();\r
};`,l='<button id="btn" class="button">버튼 내용 오버라이드</button>';function d(){return n.jsxs(t,{children:[n.jsx(e,{children:"버튼 텍스트 변경"}),n.jsxs("p",{children:[n.jsx("code",{children:"msgMap"}),"을 이용하여 버튼 내용을 변경합니다. 1회성으로 나타낼 경우 사용합니다."]}),n.jsx(r,{fixedHeight:300,htmlRaw:l,code:c})]})}d.__docgenInfo={description:"",methods:[],displayName:"CustomButtonText"};const m=`import { IRConfirm, i18n } from "@innorules/ir-style";\r
\r
i18n.setLocale( "en" );\r
\r
document.getElementById( "btn" ).onclick = () =>\r
{\r
    new IRConfirm( {\r
        // yes, no, stop, retry, ignore, ok\r
        buttonType: ["no", "yes"],\r
        // question, warning, info\r
        iconType: "question",\r
        contentElement: $( "<span/>" ).text( "English" ),\r
    } ).show();\r
};`,p='<button id="btn" class="button">i18n 이용</button>';function a(){return n.jsxs(t,{children:[n.jsx(e,{children:"다국어 지원"}),n.jsxs("p",{children:["i18n의 ",n.jsx("code",{children:"confirm"})," 멤버 속성을 변경하여 사용자 정의 텍스트를 지정할 수 있습니다. 메시지 박스 디폴트 텍스트 값을 변경하는 경우 사용합니다."]}),n.jsx(r,{fixedHeight:300,htmlRaw:p,code:m})]})}a.__docgenInfo={description:"",methods:[],displayName:"i18n"};const u=`import { IRConfirm } from "@innorules/ir-style";\r
\r
btn_yes.onclick = () =>\r
{\r
    new IRConfirm( {\r
        buttonType: ["no", "yes"],\r
        iconType: "question",\r
        onClick: ( type ) => alert( type ),\r
        enterButton: "yes",\r
        contentElement: $( "<span/>" ).text( "예, 아니오" ),\r
    } ).show();\r
};\r
\r
btn_no.onclick = () =>\r
{\r
    new IRConfirm( {\r
        buttonType: ["no", "yes"],\r
        iconType: "question",\r
        onClick: ( type ) => alert( type ),\r
        enterButton: "no",\r
        escButton: "yes",\r
        contentElement: $( "<span/>" ).text( "예, 아니오" ),\r
    } ).show();\r
};`,y=`<button id="btn_yes" class="button">예</button>\r
<button id="btn_no" class="button">아니오</button>`;function b(){return n.jsxs(t,{children:[n.jsx(e,{children:"KeyBinding"}),n.jsxs("p",{children:[n.jsx("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n.jsx(r,{fixedHeight:300,htmlRaw:y,code:u})]})}b.__docgenInfo={description:"",methods:[],displayName:"KeyBinding"};const g={title:"JS Components/IRConfirm"},_=["Basic","CustomButtonText","i18n","KeyBinding"];export{s as Basic,d as CustomButtonText,b as KeyBinding,_ as __namedExportsOrder,g as default,a as i18n};
