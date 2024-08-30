import{j as e}from"./index-BVpe1bT6.js";import{D as i,a as s,L as a}from"./doc-content-BzTGzIX_.js";import"./index-RYns6xqu.js";const l={title:"JS Components/IREditor"},u=`
#ir_editor {
    height: 200px;
}
`,r=()=>e.jsxs(i,{children:[e.jsx(s,{children:"IREditor"}),e.jsx("p",{}),e.jsx(a,{css:u,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"ir_editor"})}),code:`
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

`})]});r.__docgenInfo={description:"",methods:[],displayName:"LineGutter"};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const k=["LineGutter"];export{r as LineGutter,k as __namedExportsOrder,l as default};
