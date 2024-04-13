import{j as o,a as t,F as s}from"./jsx-runtime-CjohWU4o.js";import{b as r}from"./index-B42qYirq.js";import{D as c,a as d,L as a}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const T={title:"JS Components/Editor"},l=`
#ir_editor {
    height: 200px;
}
`,e=()=>o(c,{children:[t(d,{children:"IREditor Cursor API"}),t("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),t(a,{css:l,html:o(s,{children:[t("div",{id:"ir_editor"}),t("br",{}),o("div",{className:"button-group",children:[t("button",{id:"btn",className:r,children:"현재 라인 텍스트"}),t("button",{id:"btn2",className:r,children:"현재 선택된 텍스트"}),t("button",{id:"btn3",className:r,children:"현재 커서 정보"}),t("button",{id:"btn4",className:r,children:"1번째 라인 텍스트"}),t("button",{id:"btn5",className:r,children:"현재 커서 텍스트"}),t("button",{id:"btn6",className:r,children:"특정 위치 선택"})]})]}),code:`
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
`})]});var n,u,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor Cursor API</DocTitle>\r
            <p>제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <div id="ir_editor"></div>\r
                        <br />\r
                        <div className='button-group'>\r
                            <button id="btn" className={button}>현재 라인 텍스트</button>\r
                            <button id="btn2" className={button}>현재 선택된 텍스트</button>\r
                            <button id="btn3" className={button}>현재 커서 정보</button>\r
                            <button id="btn4" className={button}>1번째 라인 텍스트</button>\r
                            <button id="btn5" className={button}>현재 커서 텍스트</button>\r
                            <button id="btn6" className={button}>특정 위치 선택</button>\r
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
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const B=["HandlingCursor"];export{e as HandlingCursor,B as __namedExportsOrder,T as default};
