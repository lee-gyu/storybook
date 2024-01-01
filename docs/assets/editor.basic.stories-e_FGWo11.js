import{j as t,a as e,F as c}from"./jsx-runtime-KzWSGvcx.js";import{u as n}from"./index-DkI8zks2.js";import{D as l,a as d,L as s}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const m={title:"JS Components/Editor"},E=`
#ir_editor {
    height: 200px;
}
`,i=()=>t(l,{children:[e(d,{children:"IREditor"}),t("p",{children:[e("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),e(s,{css:E,html:t(c,{children:[e("style",{children:`
.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}`}),e("div",{className:"mb--lg",children:t("label",{children:[e("input",{id:"show_whitespace",type:"checkbox"})," 공백 기호 표시"]})}),e("div",{id:"ir_editor"}),e("br",{}),e("button",{id:"btn",className:n,children:"code 출력"}),e("button",{id:"btn2",className:n,children:"find 출력"}),e("button",{id:"btn3",className:n,children:"replace 출력"})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \`SELECT * FROM table;
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
SELECT * FROM table;\`
})

btn.onclick = () => alert(editor.code);
btn2.onclick = () => editor.openFindDialog();
btn3.onclick = () => editor.openReplaceDialog();
show_whitespace.onchange = () => editor.showWhitespace = show_whitespace.checked;

editor.addLineClass(5, "wrap", "ir-highlight")

`})]});var o,r,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor</DocTitle>\r
            <p><code>IREditor</code>를 이용하여 에디터 스타일을 표현합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <style>{\`
.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}\`}</style>\r
                        <div className='mb--lg'>\r
                            <label>\r
                                <input id="show_whitespace" type="checkbox" /> 공백 기호 표시\r
                            </label>\r
                        </div>\r
                        <div id="ir_editor"></div>\r
                        <br />\r
                        <button id="btn" className={button}>code 출력</button>\r
                        <button id="btn2" className={button}>find 출력</button>\r
                        <button id="btn3" className={button}>replace 출력</button>\r
                    </>} code={/* javascript */\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \\\`SELECT * FROM table;
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
SELECT * FROM table;\\\`
})

btn.onclick = () => alert(editor.code);
btn2.onclick = () => editor.openFindDialog();
btn3.onclick = () => editor.openReplaceDialog();
show_whitespace.onchange = () => editor.showWhitespace = show_whitespace.checked;

editor.addLineClass(5, "wrap", "ir-highlight")

\`} />\r
        </Doc>;
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const R=["Basic"];export{i as Basic,R as __namedExportsOrder,m as default};
