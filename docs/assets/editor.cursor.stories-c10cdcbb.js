import{j as o,a as t,F as c}from"./jsx-runtime-e43ccb36.js";import{c as r}from"./button.classNames-50f35cbd.js";import{D as d,a as l,L as a}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const g={title:"JS Components/Editor"},u=`
#ir_editor {
    height: 200px;
}
`,n=()=>o(d,{children:[t(l,{children:"IREditor Cursor API"}),t("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),t(a,{css:u,html:o(c,{children:[t("div",{id:"ir_editor"}),t("br",{}),o("div",{className:"button-group",children:[t("button",{id:"btn",className:r.button["&"],children:"현재 라인 텍스트"}),t("button",{id:"btn2",className:r.button["&"],children:"현재 선택된 텍스트"}),t("button",{id:"btn3",className:r.button["&"],children:"현재 커서 정보"}),t("button",{id:"btn4",className:r.button["&"],children:"1번째 라인 텍스트"}),t("button",{id:"btn5",className:r.button["&"],children:"현재 커서 텍스트"}),t("button",{id:"btn6",className:r.button["&"],children:"특정 위치 선택"})]})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \`
SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;
    \`.trim()
})

btn.onclick = () => alert(editor.currentLine)
btn2.onclick = () => alert(editor.selectedText)
btn3.onclick = () => alert(JSON.stringify(editor.cursor))
btn4.onclick = () => alert(editor.getLineText(1))
btn5.onclick = () => {
    const cursor = editor.cursor;

    alert(editor.getTextWithCursor(cursor.startY, cursor.startX, cursor.endY, cursor.endX));
    alert(editor.getPreText(cursor.startY, cursor.startX));
    alert(editor.getPostText(cursor.endY, cursor.endX));
}
btn6.onclick = () => editor.setSelection(0, 0, 2, 2);
`})]});var e,s,i;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor Cursor API</DocTitle>\r
            <p>제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <div id="ir_editor"></div>\r
                        <br />\r
                        <div className='button-group'>\r
                            <button id="btn" className={clsBtn.button["&"]}>현재 라인 텍스트</button>\r
                            <button id="btn2" className={clsBtn.button["&"]}>현재 선택된 텍스트</button>\r
                            <button id="btn3" className={clsBtn.button["&"]}>현재 커서 정보</button>\r
                            <button id="btn4" className={clsBtn.button["&"]}>1번째 라인 텍스트</button>\r
                            <button id="btn5" className={clsBtn.button["&"]}>현재 커서 텍스트</button>\r
                            <button id="btn6" className={clsBtn.button["&"]}>특정 위치 선택</button>\r
                        </div>\r
                    </>} code={\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \\\`
SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;
    \\\`.trim()
})

btn.onclick = () => alert(editor.currentLine)
btn2.onclick = () => alert(editor.selectedText)
btn3.onclick = () => alert(JSON.stringify(editor.cursor))
btn4.onclick = () => alert(editor.getLineText(1))
btn5.onclick = () => {
    const cursor = editor.cursor;

    alert(editor.getTextWithCursor(cursor.startY, cursor.startX, cursor.endY, cursor.endX));
    alert(editor.getPreText(cursor.startY, cursor.startX));
    alert(editor.getPostText(cursor.endY, cursor.endX));
}
btn6.onclick = () => editor.setSelection(0, 0, 2, 2);
\`} />\r
        </Doc>;
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["HandlingCursor"];export{n as HandlingCursor,h as __namedExportsOrder,g as default};
//# sourceMappingURL=editor.cursor.stories-c10cdcbb.js.map
