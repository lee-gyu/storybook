import{j as o,a as r,F as u}from"./jsx-runtime-KzWSGvcx.js";import{D as c,a as s,L as d}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const C={title:"JS Components/Editor"},l=`
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const x=["RuleSyntax"];export{e as RuleSyntax,x as __namedExportsOrder,C as default};
