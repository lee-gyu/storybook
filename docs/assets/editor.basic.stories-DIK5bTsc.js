import{j as t,a as e,F as a}from"./jsx-runtime-CjohWU4o.js";import{b as o}from"./index-B42qYirq.js";import{D as l,a as d,L as s}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const R={title:"JS Components/Editor"},h=`
#ir_editor {
    height: 200px;
}
`,n=()=>t(l,{children:[e(d,{children:"IREditor"}),t("p",{children:[e("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),e(s,{css:h,html:t(a,{children:[e("style",{children:`
.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}`}),t("div",{className:"mb--lg",children:[t("label",{children:[e("input",{id:"show_whitespace",type:"checkbox"}),"공백 기호 표시"]}),t("label",{children:[e("input",{id:"show_next",type:"checkbox"})," 줄바꿈 기호 표시"]})]}),e("div",{id:"ir_editor"}),e("br",{}),e("button",{id:"btn",className:o,children:"code 출력"}),e("button",{id:"btn2",className:o,children:"find 출력"}),e("button",{id:"btn3",className:o,children:"replace 출력"})]}),code:`
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
show_next.onchange = () => editor.showNextLineSymbol = show_next.checked;

editor.addLineClass(5, "wrap", "ir-highlight")

`})]});var i,r,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
                                <input id="show_whitespace" type="checkbox" />공백 기호 표시\r
                            </label>\r
                            <label>\r
                                <input id="show_next" type="checkbox" /> 줄바꿈 기호 표시\r
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
show_next.onchange = () => editor.showNextLineSymbol = show_next.checked;

editor.addLineClass(5, "wrap", "ir-highlight")

\`} />\r
        </Doc>;
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const L=["Basic"];export{n as Basic,L as __namedExportsOrder,R as default};
