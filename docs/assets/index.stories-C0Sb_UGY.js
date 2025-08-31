import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as i,L as s}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const c=`import { ClipboardManager } from "@innorules/ir-style";\r
\r
btn2.onclick = () =>\r
{\r
    ClipboardManager.setText( text.value );\r
};\r
btn3.onclick = async () => alert( await ClipboardManager.getText() );\r
btn4.onclick = async () => console.log( await ClipboardManager.read() );`,l=`<textarea id="text"></textarea>\r
<br /><br />\r
<button id="btn2" class="button">내용 복사</button>\r
<button id="btn3" class="button">내용 확인</button>\r
<button id="btn4" class="button">내용 확인2</button>`,u={title:"JS Utility/Clipboard"},t=()=>r.jsxs(e,{children:[r.jsx(i,{children:"Clipboard Manager"}),r.jsx("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),r.jsx(s,{htmlRaw:l,code:c})]});t.__docgenInfo={description:"",methods:[],displayName:"Clipboard"};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const x=["Clipboard"];export{t as Clipboard,x as __namedExportsOrder,u as default};
