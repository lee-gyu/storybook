import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{D as n,a as t,L as c}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const E={title:"JS Components/Editor"},d=`
#ir_editor {
    height: 200px;
}
`,e=()=>r.jsxs(n,{children:[r.jsx(t,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),r.jsx(c,{css:d,html:r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
})`})]});e.__docgenInfo={description:"",methods:[],displayName:"DBRule"};var u,i,o;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const p=["DBRule"];export{e as DBRule,p as __namedExportsOrder,E as default};
