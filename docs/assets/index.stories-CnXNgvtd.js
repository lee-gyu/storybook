import{j as o}from"./jsx-runtime-Y5Ju2SGo.js";import{D as e,a as i,L as s}from"./version-tag-DunVkkeT.js";import"./index-eCxJ45ll.js";const c=`import { ClipboardManager } from "@innorules/ir-style";

btn2.onclick = () =>
{
    ClipboardManager.setText( text.value );
};
btn3.onclick = async () => alert( await ClipboardManager.getText() );
btn4.onclick = async () => console.log( await ClipboardManager.read() );`,l=`<textarea id="text"></textarea>
<br /><br />
<button id="btn2" class="button">내용 복사</button>
<button id="btn3" class="button">내용 확인</button>
<button id="btn4" class="button">내용 확인2</button>`,m={title:"JS Utility/Clipboard"},t=()=>o.jsxs(e,{children:[o.jsx(i,{children:"Clipboard Manager"}),o.jsx("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),o.jsx(s,{htmlRaw:l,code:c})]});t.__docgenInfo={description:"",methods:[],displayName:"Clipboard"};var n,r,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const u=["Clipboard"];export{t as Clipboard,u as __namedExportsOrder,m as default};
