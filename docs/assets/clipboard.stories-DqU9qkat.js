import{j as n,a as t,F as u}from"./jsx-runtime-CjohWU4o.js";import{b as r}from"./index-B42qYirq.js";import{D as l,a as s,L as c}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const x={title:"JS Utility/Clipboard"},a=()=>n(l,{children:[t(s,{children:"Clipboard Manager"}),t("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),t(c,{html:n(u,{children:[t("textarea",{id:"text"}),t("br",{}),t("br",{}),t("button",{id:"btn2",className:r,children:"내용 복사"}),t("button",{id:"btn3",className:r,children:"내용 확인"}),t("button",{id:"btn4",className:r,children:"내용 확인2"})]}),code:`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
btn4.onclick = async () => console.log(await ClipboardManager.read());
`})]});var e,o,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["Clipboard"];export{a as Clipboard,g as __namedExportsOrder,x as default};
