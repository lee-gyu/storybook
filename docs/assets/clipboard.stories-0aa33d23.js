import{j as r,a as t,F as c}from"./jsx-runtime-e43ccb36.js";import{c as n}from"./button.classNames-50f35cbd.js";import{D as l,a as s,L as b}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const g={title:"JS Utility/Clipboard"},a=()=>r(l,{children:[t(s,{children:"Clipboard Manager"}),t("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),t(b,{html:r(c,{children:[t("textarea",{id:"text"}),t("br",{}),t("br",{}),t("button",{id:"btn2",className:n.button["&"],children:"내용 복사"}),t("button",{id:"btn3",className:n.button["&"],children:"내용 확인"}),t("button",{id:"btn4",className:n.button["&"],children:"내용 확인2"})]}),code:`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
btn4.onclick = async () => console.log(await ClipboardManager.read());
`})]});var o,e,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor html={<>\r
                        <textarea id="text"></textarea>\r
                        <br /><br />\r
                        <button id="btn2" className={clsButton.button["&"]}>내용 복사</button>\r
                        <button id="btn3" className={clsButton.button["&"]}>내용 확인</button>\r
                        <button id="btn4" className={clsButton.button["&"]}>내용 확인2</button>\r
                    </>} code={\`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
btn4.onclick = async () => console.log(await ClipboardManager.read());
\`} />\r
        </Doc>;
}`,...(i=(e=a.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const C=["Clipboard"];export{a as Clipboard,C as __namedExportsOrder,g as default};
//# sourceMappingURL=clipboard.stories-0aa33d23.js.map
