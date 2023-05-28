import{j as r,a as t,F as i}from"./jsx-runtime-d057ca55.js";import{c as n}from"./button.classNames-50f35cbd.js";import{D as s,a,L as d}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const h={title:"JS Components/Editor"},b=`
#ir_editor {
    height: 200px;
}
`,e=()=>r(s,{children:[t(a,{children:"IREditor"}),r("p",{children:[t("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),t(d,{css:b,html:r(i,{children:[t("div",{id:"ir_editor"}),t("br",{}),t("input",{id:"search",type:"text",placeholder:"검색어 입력"}),t("button",{id:"btn",className:n.button["&"],children:"커서 얻기"}),t("button",{id:"btn2",className:n.button["&"],children:"다음 찾기"}),t("br",{}),t("input",{id:"replace",type:"text",placeholder:"변경할 내용"}),t("button",{id:"btn3",className:n.button["&"],children:"내용 바꾸기"})]}),code:`
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
`})]});var o,c,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor</DocTitle>\r
            <p><code>getSearchCursor</code>를 검색 기능을 이용합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <div id="ir_editor"></div>\r
                        <br />\r
                        <input id="search" type="text" placeholder='검색어 입력' />\r
                        <button id="btn" className={clsBtn.button["&"]}>커서 얻기</button>\r
                        <button id="btn2" className={clsBtn.button["&"]}>다음 찾기</button>\r
                        <br />\r
                        <input id="replace" type="text" placeholder='변경할 내용' />\r
                        <button id="btn3" className={clsBtn.button["&"]}>내용 바꾸기</button>\r
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const R=["Search"];export{e as Search,R as __namedExportsOrder,h as default};
//# sourceMappingURL=editor.search.stories-2573a9fa.js.map
