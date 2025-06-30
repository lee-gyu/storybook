import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as i,L as t}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const r=`import { createLoginInfoDialog } from "@innorules/ir-style";

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
    } );`,d={title:"JS Utility/LoginInfoDialog"},o=()=>n.jsxs(e,{children:[n.jsx(i,{children:"LoginInfoDialog"}),n.jsx("p",{children:"IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력"}),n.jsx(t,{localeSelectVisible:!0,html:n.jsx(n.Fragment,{children:n.jsx("button",{id:"btnOpen",className:"button",children:"Open Dialog"})}),fixedHeight:500,code:r})]});o.__docgenInfo={description:"",methods:[],displayName:"LoginInfoDialog"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>LoginInfoDialog</DocTitle>\r
            <p>IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력</p>\r
            <LiveEditor localeSelectVisible html={<>\r
                    <button id="btnOpen" className="button">Open Dialog</button>\r
                </>} fixedHeight={500} code={code} />\r
        </Doc>;
}`,...o.parameters?.docs?.source}}};const p=["LoginInfoDialog"];export{o as LoginInfoDialog,p as __namedExportsOrder,d as default};
