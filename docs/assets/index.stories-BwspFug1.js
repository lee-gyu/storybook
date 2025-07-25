import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as s,L as a}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const c=`import { createLoginInfoDialog } from "@innorules/ir-style";

document.querySelector( "#btnOpen" )
    .addEventListener( "click", () =>
    {
        createLoginInfoDialog( {
            irm010Data: {
                props: [
                    ["AUTH.ACCESSIP", "127.0.0.1"],
                    ["AUTH.LASTESTLOGINTIME", " TIME "],
                    ["AUTH.PASSWORD.NOTICE", "notice"],
                    ["AUTH.SECURITY.NOTICE", "ABC"],
                ],
            },
        } )
            .show();
    } );`,m={title:"JS Utility/LoginInfoDialog"},o=()=>n.jsxs(r,{children:[n.jsx(s,{children:"LoginInfoDialog"}),n.jsx("p",{children:"IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력"}),n.jsx(a,{localeSelectVisible:!0,html:n.jsx(n.Fragment,{children:n.jsx("button",{id:"btnOpen",className:"button",children:"Open Dialog"})}),fixedHeight:500,code:c})]});o.__docgenInfo={description:"",methods:[],displayName:"LoginInfoDialog"};var e,i,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>LoginInfoDialog</DocTitle>\r
            <p>IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력</p>\r
            <LiveEditor localeSelectVisible html={<>\r
                    <button id="btnOpen" className="button">Open Dialog</button>\r
                </>} fixedHeight={500} code={code} />\r
        </Doc>;
}`,...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const D=["LoginInfoDialog"];export{o as LoginInfoDialog,D as __namedExportsOrder,m as default};
