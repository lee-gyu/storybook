import{j as i,a as r,F as a}from"./jsx-runtime-e43ccb36.js";import{D as s,a as u,L as c}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const g={title:"JS Components/Editor"},m=`
#ir_editor {
    height: 200px;
}
`,e=()=>i(s,{children:[r(u,{children:"IREditor"}),r("p",{}),r(c,{css:m,html:r(a,{children:r("div",{id:"ir_editor"})}),code:`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: Array.from( { length: 1000 } ).map( () => "SELECT * FROM table;").join("\\n"),
    gutters: [
        { className: "ir-breakpoint", style: "width: 20px" },
        { className: "ir-bookmark", style: "width: 20px" },
        "CodeMirror-linenumbers",
    ]
})

const createBreakPointGutter = () => {
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--stop-circle-outline"
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--red)" );

    return gutter;
}

const createBookmarkGutter = () => {
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--bookmark"
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--yellow)" );

    return gutter;
}

const gutterList = [];

const addBookmarkGutter = (number) => {
    gutterList[number] = true;
    editor.addLineGutter(number, "ir-bookmark", createBookmarkGutter());
}

const removeBookmarkGutter = (number) => {
    gutterList[number] = false;
    editor.removeLineGutter(number, "ir-bookmark");
}

editor.onGutterClick = (lineNumber) => {
    if (!gutterList[lineNumber]) {
        addBookmarkGutter(lineNumber);
    } else {
        removeBookmarkGutter(lineNumber);
    }
}

addBookmarkGutter(1)

editor.addLineGutter(0, "ir-breakpoint", createBreakPointGutter());

`})]});var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IREditor</DocTitle>\r
            <p></p>\r
            <LiveEditor css={css} html={<>\r
                        <div id="ir_editor"></div>\r
                    </>} code={/* javascript */\`
import { IREditor } from "./dist/editor.js";

const editor = new IREditor({
    contextElement: ir_editor,
    mode: "sql-oracle",
    code: Array.from( { length: 1000 } ).map( () => "SELECT * FROM table;").join("\\\\n"),
    gutters: [
        { className: "ir-breakpoint", style: "width: 20px" },
        { className: "ir-bookmark", style: "width: 20px" },
        "CodeMirror-linenumbers",
    ]
})

const createBreakPointGutter = () => {
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--stop-circle-outline"
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--red)" );

    return gutter;
}

const createBookmarkGutter = () => {
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--bookmark"
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--yellow)" );

    return gutter;
}

const gutterList = [];

const addBookmarkGutter = (number) => {
    gutterList[number] = true;
    editor.addLineGutter(number, "ir-bookmark", createBookmarkGutter());
}

const removeBookmarkGutter = (number) => {
    gutterList[number] = false;
    editor.removeLineGutter(number, "ir-bookmark");
}

editor.onGutterClick = (lineNumber) => {
    if (!gutterList[lineNumber]) {
        addBookmarkGutter(lineNumber);
    } else {
        removeBookmarkGutter(lineNumber);
    }
}

addBookmarkGutter(1)

editor.addLineGutter(0, "ir-breakpoint", createBreakPointGutter());

\`} />\r
        </Doc>;
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["LineGutter"];export{e as LineGutter,p as __namedExportsOrder,g as default};
//# sourceMappingURL=editor.line-gutter.stories-d99649f3.js.map
