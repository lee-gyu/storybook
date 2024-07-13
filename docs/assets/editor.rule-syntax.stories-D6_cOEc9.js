import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a as u,L as s}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const a={title:"JS Components/Editor"},c=`
#ir_editor {
    height: 200px;
}
`,e=()=>r.jsxs(i,{children:[r.jsx(u,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),r.jsx(s,{css:c,html:r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
`}),r.jsx("div",{id:"ir_editor"})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "ir-rule-exp",
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\"ㅇㅇㅇㅇ"\`
})`})]});e.__docgenInfo={description:"",methods:[],displayName:"RuleSyntax"};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const x=["RuleSyntax"];export{e as RuleSyntax,x as __namedExportsOrder,a as default};
