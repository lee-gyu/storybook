import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as o,a as n,L as a}from"./version-tag-CkTpihZX.js";import"./iframe-jo4tttFm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDcoFm-e.js";const e=`import { ClipboardManager } from "@innorules/ir-style";\r
\r
btn2.onclick = () =>\r
{\r
    ClipboardManager.setText( text.value );\r
};\r
btn3.onclick = async () => alert( await ClipboardManager.getText() );\r
btn4.onclick = async () => console.log( await ClipboardManager.read() );`,i=`<textarea id="text"></textarea>\r
<br /><br />\r
<button id="btn2" class="button">내용 복사</button>\r
<button id="btn3" class="button">내용 확인</button>\r
<button id="btn4" class="button">내용 확인2</button>`,b={title:"JS Utility/Clipboard"},t=()=>r.jsxs(o,{children:[r.jsx(n,{children:"Clipboard Manager"}),r.jsx("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),r.jsx(a,{htmlRaw:i,code:e})]});t.__docgenInfo={description:"",methods:[],displayName:"Clipboard"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...t.parameters?.docs?.source}}};const m=["Clipboard"];export{t as Clipboard,m as __namedExportsOrder,b as default};
