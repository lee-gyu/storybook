import{j as o,a as r,F as u}from"./jsx-runtime-CjohWU4o.js";import{D as c,a as s,L as d}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const x={title:"JS Components/Editor"},l=`
#ir_editor {
    height: 200px;
}
`,e=()=>o(c,{children:[r(s,{children:"IREditor"}),r("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),r(d,{css:l,html:o(u,{children:[r("style",{children:`
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
})`})]});var t,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const E=["RuleSyntax"];export{e as RuleSyntax,E as __namedExportsOrder,x as default};
