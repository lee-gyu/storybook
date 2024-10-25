import{j as t}from"./jsx-runtime-DEdD30eg.js";import{D as r}from"./index-DRMmGMIW.js";import{D as i,a as c,L as d}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const x={title:"JS Components/IREditor"},a=`
#ir_editor {
    height: 200px;
}
`,e=()=>t.jsxs(i,{children:[t.jsx(c,{children:"IREditor Cursor API"}),t.jsx("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),t.jsx(d,{css:a,html:t.jsxs(t.Fragment,{children:[t.jsx("div",{id:"ir_editor"}),t.jsx("br",{}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{id:"btn",className:r,children:"현재 라인 텍스트"}),t.jsx("button",{id:"btn2",className:r,children:"현재 선택된 텍스트"}),t.jsx("button",{id:"btn3",className:r,children:"현재 커서 정보"}),t.jsx("button",{id:"btn4",className:r,children:"1번째 라인 텍스트"}),t.jsx("button",{id:"btn5",className:r,children:"현재 커서 텍스트"}),t.jsx("button",{id:"btn6",className:r,children:"특정 위치 선택"})]})]}),code:`
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
`})]});e.__docgenInfo={description:"",methods:[],displayName:"HandlingCursor"};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const E=["HandlingCursor"];export{e as HandlingCursor,E as __namedExportsOrder,x as default};
