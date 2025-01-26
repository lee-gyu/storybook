import{j as e}from"./jsx-runtime-CZmXTeUy.js";import{D as i,a as s,L as d}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const m={title:"JS Components/IREditor"},c=`
#ir_editor {
    height: 200px;
}
`,t=()=>e.jsxs(i,{children:[e.jsx(s,{children:"IREditor KeyEvents"}),e.jsxs("p",{children:[e.jsx("code",{children:"keyEvents"})," 속성으로 특정 키의 이벤트를 처리합니다."]}),e.jsx(d,{css:c,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"ir_editor"})}),code:`
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"KeyEvents"};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["KeyEvents"];export{t as KeyEvents,p as __namedExportsOrder,m as default};
