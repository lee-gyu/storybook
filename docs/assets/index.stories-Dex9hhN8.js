import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { createLoginInfoDialog } from "@innorules/ir-style";

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
    } );`})),c,l,u,d;e((()=>{s(),i(),c=a(),l={title:`JS Utility/LoginInfoDialog`},u=()=>(0,c.jsxs)(n,{children:[(0,c.jsx)(t,{children:`LoginInfoDialog`}),(0,c.jsx)(`p`,{children:`IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력`}),(0,c.jsx)(r,{localeSelectVisible:!0,html:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(`button`,{id:`btnOpen`,className:`button`,children:`Open Dialog`})}),fixedHeight:500,code:o})]}),u.__docgenInfo={description:``,methods:[],displayName:`LoginInfoDialog`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Doc>
            <DocTitle>LoginInfoDialog</DocTitle>
            <p>IRM010 Response를 기반으로 로그인 정보 다이얼로그 출력</p>
            <LiveEditor localeSelectVisible html={<>
                    <button id="btnOpen" className="button">Open Dialog</button>
                </>} fixedHeight={500} code={code} />
        </Doc>;
}`,...u.parameters?.docs?.source}}},d=[`LoginInfoDialog`]}))();export{u as LoginInfoDialog,d as __namedExportsOrder,l as default};