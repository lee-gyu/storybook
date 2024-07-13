import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{l as n}from"./index-B1ZoEFxZ.js";import{D as s,a as c,L as l}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const C={title:"JS Components/Editor"},a=`
#ir_editor {
    height: 200px;
}
`,t=()=>e.jsxs(s,{children:[e.jsx(c,{children:"IREditor"}),e.jsxs("p",{children:[e.jsx("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),e.jsx(l,{css:a,html:e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}`}),e.jsxs("div",{className:"mb--lg",children:[e.jsxs("label",{children:[e.jsx("input",{id:"show_whitespace",type:"checkbox"}),"공백 기호 표시"]}),e.jsxs("label",{children:[e.jsx("input",{id:"show_next",type:"checkbox"})," 줄바꿈 기호 표시"]})]}),e.jsx("div",{id:"ir_editor"}),e.jsx("br",{}),e.jsx("button",{id:"btn",className:n,children:"code 출력"}),e.jsx("button",{id:"btn2",className:n,children:"find 출력"}),e.jsx("button",{id:"btn3",className:n,children:"replace 출력"})]}),code:`
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const p=["Basic"];export{t as Basic,p as __namedExportsOrder,C as default};
