import{j as o,a as r,F as c}from"./jsx-runtime-e43ccb36.js";import{D as s,a as d,L as l}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const E={title:"JS Components/Editor"},m=`
#ir_editor {
    height: 200px;
}
`,e=()=>o(s,{children:[r(d,{children:"IREditor"}),r("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),r(l,{css:m,html:o(c,{children:[r("style",{children:`
.cm-ir-input {
    color: pink;
}

.cm-ir-string {
    color: blue;
}

.cm-ir-number {
    color: green;
}

.cm-ir-rule {
    color: skyblue;
}
`}),r("div",{id:"ir_editor"})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "ir-rule-exp",
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\"ㅇㅇㅇㅇ"\`
})`})]});var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor</DocTitle>\r
            <p>룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다.</p>\r
            <LiveEditor css={css} html={<>\r
                        <style>{\`
.cm-ir-input {
    color: pink;
}

.cm-ir-string {
    color: blue;
}

.cm-ir-number {
    color: green;
}

.cm-ir-rule {
    color: skyblue;
}
\`}</style>\r
                        <div id="ir_editor"></div>\r
                    </>} code={\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "ir-rule-exp",
    code: \\\`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"\\\`
})\`} />\r
        </Doc>;
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const h=["RuleSyntax"];export{e as RuleSyntax,h as __namedExportsOrder,E as default};
//# sourceMappingURL=editor.rule-syntax.stories-f805b8ee.js.map
