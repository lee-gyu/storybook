import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{b as r}from"./index-B7QSYDRL.js";import{D as s,a as i,L as l}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const m={title:"JS Components/IREditor"},a=`
#ir_editor {
    height: 200px;
}
`,t=()=>e.jsxs(s,{children:[e.jsx(i,{children:"IREditor"}),e.jsxs("p",{children:[e.jsx("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),e.jsx(l,{css:a,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"ir_editor"}),e.jsx("br",{}),e.jsx("input",{id:"search",type:"text",placeholder:"검색어 입력"}),e.jsx("button",{id:"btn",className:r,children:"커서 얻기"}),e.jsx("button",{id:"btn2",className:r,children:"다음 찾기"}),e.jsx("br",{}),e.jsx("input",{id:"replace",type:"text",placeholder:"변경할 내용"}),e.jsx("button",{id:"btn3",className:r,children:"내용 바꾸기"})]}),code:`
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
`})]});t.__docgenInfo={description:"",methods:[],displayName:"Search"};var n,o,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const p=["Search"];export{t as Search,p as __namedExportsOrder,m as default};
