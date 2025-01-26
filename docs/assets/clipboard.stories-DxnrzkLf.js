import{j as t}from"./jsx-runtime-CZmXTeUy.js";import{b as r}from"./index-DEzXR-MV.js";import{D as i,a as s,L as l}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const m={title:"JS Utility/Clipboard"},a=()=>t.jsxs(i,{children:[t.jsx(s,{children:"Clipboard Manager"}),t.jsx("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),t.jsx(l,{html:t.jsxs(t.Fragment,{children:[t.jsx("textarea",{id:"text"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("button",{id:"btn2",className:r,children:"내용 복사"}),t.jsx("button",{id:"btn3",className:r,children:"내용 확인"}),t.jsx("button",{id:"btn4",className:r,children:"내용 확인2"})]}),code:`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
btn4.onclick = async () => console.log(await ClipboardManager.read());
`})]});a.__docgenInfo={description:"",methods:[],displayName:"Clipboard"};var n,e,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor html={<>\r
                        <textarea id="text"></textarea>\r
                        <br /><br />\r
                        <button id="btn2" className={button}>내용 복사</button>\r
                        <button id="btn3" className={button}>내용 확인</button>\r
                        <button id="btn4" className={button}>내용 확인2</button>\r
                    </>} code={\`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
btn4.onclick = async () => console.log(await ClipboardManager.read());
\`} />\r
        </Doc>;
}`,...(o=(e=a.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const x=["Clipboard"];export{a as Clipboard,x as __namedExportsOrder,m as default};
