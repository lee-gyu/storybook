import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as t,a as s,L as a}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const c=`import { createLoginInfoDialog } from "@innorules/ir-style";\r
\r
document.querySelector( "#btnOpen" )\r
    .addEventListener( "click", () =>\r
    {\r
        createLoginInfoDialog( {\r
            irm010Data: {\r
                props: [\r
                    ["AUTH.ACCESSIP", "127.0.0.1"],\r
                    ["AUTH.LASTESTLOGINTIME", " TIME "],\r
                    ["AUTH.PASSWORD.NOTICE", "notice"],\r
                    ["AUTH.SECURITY.NOTICE", "ABC"],\r
                ],\r
            },\r
        } )\r
            .show();\r
    } );`,m={title:"JS Utility/LoginInfoDialog"},o=()=>n.jsxs(t,{children:[n.jsx(s,{children:"LoginInfoDialog"}),n.jsx("p",{children:"IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력"}),n.jsx(a,{localeSelectVisible:!0,html:n.jsx(n.Fragment,{children:n.jsx("button",{id:"btnOpen",className:"button",children:"Open Dialog"})}),fixedHeight:500,code:c})]});o.__docgenInfo={description:"",methods:[],displayName:"LoginInfoDialog"};var e,r,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>LoginInfoDialog</DocTitle>\r
            <p>IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력</p>\r
            <LiveEditor localeSelectVisible html={<>\r
                    <button id="btnOpen" className="button">Open Dialog</button>\r
                </>} fixedHeight={500} code={code} />\r
        </Doc>;
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const D=["LoginInfoDialog"];export{o as LoginInfoDialog,D as __namedExportsOrder,m as default};
