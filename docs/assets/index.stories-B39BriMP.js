import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { ClipboardManager } from "@innorules/ir-style";

btn2.onclick = () =>
{
    ClipboardManager.setText( text.value );
};
btn3.onclick = async () => alert( await ClipboardManager.getText() );
btn4.onclick = async () => console.log( await ClipboardManager.read() );`})),c,l=e((()=>{c=`<textarea id="text"></textarea>
<br /><br />
<button id="btn2" class="button">내용 복사</button>
<button id="btn3" class="button">내용 확인</button>
<button id="btn4" class="button">내용 확인2</button>`})),u,d,f,p;e((()=>{s(),l(),i(),u=a(),d={title:`JS Utility/Clipboard`},f=()=>(0,u.jsxs)(n,{children:[(0,u.jsx)(t,{children:`Clipboard Manager`}),(0,u.jsx)(`p`,{children:`웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.`}),(0,u.jsx)(r,{htmlRaw:c,code:o})]}),f.__docgenInfo={description:``,methods:[],displayName:`Clipboard`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <Doc>
            <DocTitle>Clipboard Manager</DocTitle>
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>
            <LiveEditor htmlRaw={htmlRaw} code={code} />
        </Doc>;
}`,...f.parameters?.docs?.source}}},p=[`Clipboard`]}))();export{f as Clipboard,p as __namedExportsOrder,d as default};