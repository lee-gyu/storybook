import{j as i,a as r,F as c}from"./jsx-runtime-d057ca55.js";import{D as d,a as l,L as m}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const b={title:"JS Components/Editor"},s=`
#ir_editor {
    height: 200px;
}
`,e=()=>i(d,{children:[r(l,{children:"IREditor"}),r("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),r(m,{css:s,html:i(c,{children:[r("style",{children:`
.cm-ir-input,
.cm-ir-db-rule-input-delimiter {
    color: pink;
}

.cm-ir-string {
    color: blue;
}

.cm-ir-number {
    color: green;
}

.cm-ir-rule,
.cm-ir-db-rule-rule-delimiter {
    color: skyblue;
}

.cm-ir-db-rule-delimiter {
    font-weight: bold;
    color: red;
}

.cm-ir-db-rule-comment,
.cm-ir-comment {
    color: lightgray;
}

`}),r("div",{id:"ir_editor"})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "ir-db-rule",
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\"ㅇㅇㅇㅇ"$> FROM user;
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\"ㅇㅇㅇㅇ"$$> FROM user;
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`
})`})]});var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor</DocTitle>\r
            <p>룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <style>{\`
.cm-ir-input,
.cm-ir-db-rule-input-delimiter {
    color: pink;
}

.cm-ir-string {
    color: blue;
}

.cm-ir-number {
    color: green;
}

.cm-ir-rule,
.cm-ir-db-rule-rule-delimiter {
    color: skyblue;
}

.cm-ir-db-rule-delimiter {
    font-weight: bold;
    color: red;
}

.cm-ir-db-rule-comment,
.cm-ir-comment {
    color: lightgray;
}

\`}</style>\r
                        <div id="ir_editor"></div>\r
                    </>} code={\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "ir-db-rule",
    code: \\\`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$> FROM user;
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$$> FROM user;
SELECT [나이], {나이계산} <$@주석입니다.@$>;\\\`
})\`} />\r
        </Doc>;
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const $=["DBRule"];export{e as DBRule,$ as __namedExportsOrder,b as default};
//# sourceMappingURL=editor.db-rule.stories-66d78c6a.js.map
