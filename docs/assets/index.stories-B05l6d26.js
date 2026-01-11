import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as i,L as t}from"./version-tag-u3GxDBUd.js";import"./iframe-9F64GLpK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F4J0AwFl.js";const r=`import { createLoginInfoDialog } from "@innorules/ir-style";

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
    } );`,p={title:"JS Utility/LoginInfoDialog"},o=()=>n.jsxs(e,{children:[n.jsx(i,{children:"LoginInfoDialog"}),n.jsx("p",{children:"IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력"}),n.jsx(t,{localeSelectVisible:!0,html:n.jsx(n.Fragment,{children:n.jsx("button",{id:"btnOpen",className:"button",children:"Open Dialog"})}),fixedHeight:500,code:r})]});o.__docgenInfo={description:"",methods:[],displayName:"LoginInfoDialog"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Doc>
            <DocTitle>LoginInfoDialog</DocTitle>
            <p>IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력</p>
            <LiveEditor localeSelectVisible html={<>
                    <button id="btnOpen" className="button">Open Dialog</button>
                </>} fixedHeight={500} code={code} />
        </Doc>;
}`,...o.parameters?.docs?.source}}};const m=["LoginInfoDialog"];export{o as LoginInfoDialog,m as __namedExportsOrder,p as default};
