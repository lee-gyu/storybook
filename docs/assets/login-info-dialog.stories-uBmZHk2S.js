import{a as n,F as r}from"./jsx-runtime-KzWSGvcx.js";import{L as t}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const c={title:"Dialogs/로그인 정보"},o=()=>n(t,{fixedHeight:380,html:n(r,{children:n("button",{className:"button",id:"btn_open",children:"다이얼로그 출력"})}),code:`
import { createLoginInfoDialog } from "./dist/index.js";

const irm010Data = {
    props: [
        [ "AUTH.ACCESSIP", "172.0.0.1" ],
        [ "AUTH.LASTESTLOGINTIME", "2023-10-24 10:09:56" ],
        [ "AUTH.PASSWORD.NOTICE", "11일 후 비밀번호 유효기간이 종료됩니다. 비밀번호를 변경하시기 바랍니다." ],
        [ "AUTH.SECURITY.NOTICE", '<FONT style="color:red;">보안관련 업데이트 필수</FONT>보안메세지입니다<FONT face="FONT_FACE" color="clred" bgcolor="clyellow">보안 사항 메세지</FONT>' ]
    ]
}

const loginInfoDialog = createLoginInfoDialog( {
    irm010Data,
    lang: "ko",
    onClose() {
        alert("close!");
    }
} );

btn_open.onclick = () => loginInfoDialog.show();

            `});var u,e,C;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <LiveEditor fixedHeight={380} html={<>\r
                    <button className="button" id="btn_open">다이얼로그 출력</button>\r
                </>} code={/* javascript */\`
import { createLoginInfoDialog } from "./dist/index.js";

const irm010Data = {
    props: [
        [ "AUTH.ACCESSIP", "172.0.0.1" ],
        [ "AUTH.LASTESTLOGINTIME", "2023-10-24 10:09:56" ],
        [ "AUTH.PASSWORD.NOTICE", "11일 후 비밀번호 유효기간이 종료됩니다. 비밀번호를 변경하시기 바랍니다." ],
        [ "AUTH.SECURITY.NOTICE", '<FONT style="color:red;">보안관련 업데이트 필수</FONT>보안메세지입니다<FONT face="FONT_FACE" color="clred" bgcolor="clyellow">보안 사항 메세지</FONT>' ]
    ]
}

const loginInfoDialog = createLoginInfoDialog( {
    irm010Data,
    lang: "ko",
    onClose() {
        alert("close!");
    }
} );

btn_open.onclick = () => loginInfoDialog.show();

            \`} />;
}`,...(C=(e=o.parameters)==null?void 0:e.docs)==null?void 0:C.source}}};const B=["로그인_정보"];export{B as __namedExportsOrder,c as default,o as 로그인_정보};
