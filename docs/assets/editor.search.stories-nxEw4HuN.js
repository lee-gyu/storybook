import{j as t,a as e,F as l}from"./jsx-runtime-CjohWU4o.js";import{o as n}from"./index-jvX_Qewy.js";import{D as i,a,L as s}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const h={title:"JS Components/Editor"},C=`
#ir_editor {
    height: 200px;
}
`,r=()=>t(i,{children:[e(a,{children:"IREditor"}),t("p",{children:[e("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),e(s,{css:C,html:t(l,{children:[e("div",{id:"ir_editor"}),e("br",{}),e("input",{id:"search",type:"text",placeholder:"검색어 입력"}),e("button",{id:"btn",className:n,children:"커서 얻기"}),e("button",{id:"btn2",className:n,children:"다음 찾기"}),e("br",{}),e("input",{id:"replace",type:"text",placeholder:"변경할 내용"}),e("button",{id:"btn3",className:n,children:"내용 바꾸기"})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \`
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
\`
})

btn.onclick = () => {
    const cursor = editor.getSearchCursor(search.value)

    if (cursor.findNext()) {
        editor.setSelection(cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch)

        btn2.onclick = () => {
            if (cursor.findNext())
                editor.setSelection(cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch)
            else
                alert("결과 없음!")
        }

        btn3.onclick = () => {
            cursor.replace(replace.value)
        }
    } else {
        alert("결과 없음!");
        btn2.onclick = () => alert("먼저 찾기 실행!")
        btn3.onclick = () => alert("먼저 찾기 실행!")
    }

}
btn2.onclick = () => alert("먼저 찾기 실행!")
btn3.onclick = () => alert("먼저 찾기 실행!")
`})]});var o,c,u;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor</DocTitle>\r
            <p><code>getSearchCursor</code>를 검색 기능을 이용합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <div id="ir_editor"></div>\r
                        <br />\r
                        <input id="search" type="text" placeholder='검색어 입력' />\r
                        <button id="btn" className={button}>커서 얻기</button>\r
                        <button id="btn2" className={button}>다음 찾기</button>\r
                        <br />\r
                        <input id="replace" type="text" placeholder='변경할 내용' />\r
                        <button id="btn3" className={button}>내용 바꾸기</button>\r
                    </>} code={\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \\\`
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
\\\`
})

btn.onclick = () => {
    const cursor = editor.getSearchCursor(search.value)

    if (cursor.findNext()) {
        editor.setSelection(cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch)

        btn2.onclick = () => {
            if (cursor.findNext())
                editor.setSelection(cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch)
            else
                alert("결과 없음!")
        }

        btn3.onclick = () => {
            cursor.replace(replace.value)
        }
    } else {
        alert("결과 없음!");
        btn2.onclick = () => alert("먼저 찾기 실행!")
        btn3.onclick = () => alert("먼저 찾기 실행!")
    }

}
btn2.onclick = () => alert("먼저 찾기 실행!")
btn3.onclick = () => alert("먼저 찾기 실행!")
\`} />\r
        </Doc>;
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const R=["Search"];export{r as Search,R as __namedExportsOrder,h as default};
