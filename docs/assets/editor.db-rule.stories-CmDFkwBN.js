import{j as r}from"./jsx-runtime-DEdD30eg.js";import{D as t,a as c,L as d}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const p={title:"JS Components/IREditor"},l=`
#ir_editor {
    height: 200px;
}
`,e=()=>r.jsxs(t,{children:[r.jsx(c,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),r.jsx(d,{css:l,html:r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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

`}),r.jsx("div",{id:"ir_editor"})]}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "ir-db-rule",
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\"ㅇㅇㅇㅇ"$> FROM user;
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\"ㅇㅇㅇㅇ"$$> FROM user;
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`
})`})]});e.__docgenInfo={description:"",methods:[],displayName:"DBRule"};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const E=["DBRule"];export{e as DBRule,E as __namedExportsOrder,p as default};
