import{j as t,a as e,F as s}from"./jsx-runtime-d057ca55.js";import{D as d,a as c,L as a}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const R={title:"JS Components/Editor"},l=`
#ir_editor {
    height: 200px;
}
`,r=()=>t(d,{children:[e(c,{children:"IREditor KeyEvents"}),t("p",{children:[e("code",{children:"keyEvents"})," 속성으로 특정 키의 이벤트를 처리합니다."]}),e(a,{css:l,html:e(s,{children:e("div",{id:"ir_editor"})}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \`SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;\`,
    keyEvents: {
        "Ctrl-Space": () => alert(JSON.stringify(editor.cursor)),
        "Ctrl-I": () => alert(editor.currentLine)
    }
})

`})]});var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor KeyEvents</DocTitle>\r
            <p><code>keyEvents</code> 속성으로 특정 키의 이벤트를 처리합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <div id="ir_editor"></div>\r
                    </>} code={\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: \\\`SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;\\\`,
    keyEvents: {
        "Ctrl-Space": () => alert(JSON.stringify(editor.cursor)),
        "Ctrl-I": () => alert(editor.currentLine)
    }
})

\`} />\r
        </Doc>;
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const S=["KeyEvents"];export{r as KeyEvents,S as __namedExportsOrder,R as default};
//# sourceMappingURL=editor.keyevents.stories-e5b1a65d.js.map
