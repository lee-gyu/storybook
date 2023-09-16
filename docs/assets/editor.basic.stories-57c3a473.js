import{j as t,a as e,F as c}from"./jsx-runtime-e43ccb36.js";import{c as i}from"./button.classNames-50f35cbd.js";import{D as l,a as d,L as s}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const C={title:"JS Components/Editor"},b=`
#ir_editor {
    height: 200px;
}
`,n=()=>t(l,{children:[e(d,{children:"IREditor"}),t("p",{children:[e("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),e(s,{css:b,html:t(c,{children:[e("style",{children:`
.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}`}),e("div",{className:"mb--lg",children:t("label",{children:[e("input",{id:"show_whitespace",type:"checkbox"})," 공백 기호 표시"]})}),e("div",{id:"ir_editor"}),e("br",{}),e("button",{id:"btn",className:i.button["&"],children:"code 출력"}),e("button",{id:"btn2",className:i.button["&"],children:"find 출력"}),e("button",{id:"btn3",className:i.button["&"],children:"replace 출력"})]}),code:`
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

`})]});var o,r,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
                        <button id="btn" className={clsBtn.button["&"]}>code 출력</button>\r
                        <button id="btn2" className={clsBtn.button["&"]}>find 출력</button>\r
                        <button id="btn3" className={clsBtn.button["&"]}>replace 출력</button>\r
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const L=["Basic"];export{n as Basic,L as __namedExportsOrder,C as default};
//# sourceMappingURL=editor.basic.stories-57c3a473.js.map
