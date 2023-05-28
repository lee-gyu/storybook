import{j as a,a as t,F as s}from"./jsx-runtime-d057ca55.js";import{c as e}from"./button.classNames-50f35cbd.js";import{D as c,a as l,L as d}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const g={title:"JS Utility/Clipboard"},r=()=>a(c,{children:[t(l,{children:"Clipboard Manager"}),t("p",{children:"웹의 클립보드 제어를 도와주는 유틸리티 개체입니다."}),t(d,{html:a(s,{children:[t("textarea",{id:"text"}),t("br",{}),t("br",{}),t("button",{id:"btn2",className:e.button["&"],children:"내용 복사"}),t("button",{id:"btn3",className:e.button["&"],children:"내용 확인"})]}),code:`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
`})]});var n,o,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Clipboard Manager</DocTitle>\r
            <p>웹의 클립보드 제어를 도와주는 유틸리티 개체입니다.</p>\r
            <LiveEditor html={<>\r
                        <textarea id="text"></textarea>\r
                        <br /><br />\r
                        <button id="btn2" className={clsButton.button["&"]}>내용 복사</button>\r
                        <button id="btn3" className={clsButton.button["&"]}>내용 확인</button>\r
                    </>} code={\`
import { ClipboardManager } from "./dist/index.js";

btn2.onclick = () => {
    ClipboardManager.setText(text.value);
}
btn3.onclick = async () => alert(await ClipboardManager.getText());
\`} />\r
        </Doc>;
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const C=["Clipboard"];export{r as Clipboard,C as __namedExportsOrder,g as default};
//# sourceMappingURL=clipobard.stories-57a66942.js.map
