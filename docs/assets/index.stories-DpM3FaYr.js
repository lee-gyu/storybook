import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as n,L as a}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const e=`import { ClipboardManager } from "@innorules/ir-style";

btn2.onclick = () =>
{
    ClipboardManager.setText( text.value );
};
btn3.onclick = async () => alert( await ClipboardManager.getText() );
btn4.onclick = async () => console.log( await ClipboardManager.read() );`,i=`<textarea id="text"></textarea>
<br /><br />
<button id="btn2" class="button">내용 복사</button>
<button id="btn3" class="button">내용 확인</button>
<button id="btn4" class="button">내용 확인2</button>`,b={title:"JS Utility/Clipboard"},t=()=>o.jsxs(r,{children:[o.jsx(n,{children:"Clipboard Manager"}),o.jsx("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),o.jsx(a,{htmlRaw:i,code:e})]});t.__docgenInfo={description:"",methods:[],displayName:"Clipboard"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...t.parameters?.docs?.source}}};const p=["Clipboard"];export{t as Clipboard,p as __namedExportsOrder,b as default};
