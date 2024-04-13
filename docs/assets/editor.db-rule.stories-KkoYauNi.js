import{j as u,a as r,F as t}from"./jsx-runtime-CjohWU4o.js";import{D as c,a as d,L as l}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const a={title:"JS Components/Editor"},m=`
#ir_editor {
    height: 200px;
}
`,e=()=>u(c,{children:[r(d,{children:"IREditor"}),r("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),r(l,{css:m,html:u(t,{children:[r("style",{children:`
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
})`})]});var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const B=["DBRule"];export{e as DBRule,B as __namedExportsOrder,a as default};
