import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as r,L as i}from"./version-tag-CkTpihZX.js";import"./iframe-jo4tttFm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDcoFm-e.js";const t=`import { createLoginInfoDialog } from "@innorules/ir-style";\r
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
    } );`,p={title:"JS Utility/LoginInfoDialog"},o=()=>n.jsxs(e,{children:[n.jsx(r,{children:"LoginInfoDialog"}),n.jsx("p",{children:"IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력"}),n.jsx(i,{localeSelectVisible:!0,html:n.jsx(n.Fragment,{children:n.jsx("button",{id:"btnOpen",className:"button",children:"Open Dialog"})}),fixedHeight:500,code:t})]});o.__docgenInfo={description:"",methods:[],displayName:"LoginInfoDialog"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>LoginInfoDialog</DocTitle>\r
            <p>IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력</p>\r
            <LiveEditor localeSelectVisible html={<>\r
                    <button id="btnOpen" className="button">Open Dialog</button>\r
                </>} fixedHeight={500} code={code} />\r
        </Doc>;
}`,...o.parameters?.docs?.source}}};const m=["LoginInfoDialog"];export{o as LoginInfoDialog,m as __namedExportsOrder,p as default};
