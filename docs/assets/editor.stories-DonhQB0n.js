import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as e,c as t,L as o}from"./version-tag-Buic5uEj.js";import"./iframe-BmvT9HBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx57Rlms.js";const i=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
const editor = new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "sql-oracle",\r
    code: \`SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\`,\r
} );\r
\r
btn.onclick = () => alert( editor.code );\r
btn2.onclick = () => editor.openFindDialog();\r
btn3.onclick = () => editor.openReplaceDialog();\r
show_whitespace.onchange = () => editor.showWhitespace = show_whitespace.checked;\r
show_next.onchange = () => editor.showNextLineSymbol = show_next.checked;\r
\r
editor.addLineClass( 5, "wrap", "ir-highlight" );`,s=`#ir_editor {\r
    height: 200px;\r
}\r
\r
.ir-highlight {\r
    background: red;\r
}\r
\r
.ir-highlight .CodeMirror-line span {\r
    color: white;\r
}\r
`,c=`<div class='mb--lg'>\r
    <label>\r
        <input id="show_whitespace" type="checkbox" />공백 기호 표시\r
    </label>\r
    <label>\r
        <input id="show_next" type="checkbox" /> 줄바꿈 기호 표시\r
    </label>\r
</div>\r
<div id="ir_editor"></div>\r
<br />\r
<button id="btn" class="button">code 출력</button>\r
<button id="btn2" class="button">find 출력</button>\r
<button id="btn3" class="button">replace 출력</button>`,d=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]];function l(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor"}),r.jsxs("p",{children:[r.jsx("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),r.jsx(t,{docList:d}),r.jsx(o,{css:s,htmlRaw:c,exampleCode:i})]})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};const a=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "ir-db-rule",\r
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$> FROM user;\r
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$$> FROM user;\r
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`,\r
} );`,u=`<style>\r
    .cm-ir-input,\r
    .cm-ir-db-rule-input-delimiter {\r
        color: pink;\r
    }\r
\r
    .cm-ir-string {\r
        color: blue;\r
    }\r
\r
    .cm-ir-number {\r
        color: green;\r
    }\r
\r
    .cm-ir-rule,\r
    .cm-ir-db-rule-rule-delimiter {\r
        color: skyblue;\r
    }\r
\r
    .cm-ir-db-rule-delimiter {\r
        font-weight: bold;\r
        color: red;\r
    }\r
\r
    .cm-ir-db-rule-comment,\r
    .cm-ir-comment {\r
        color: lightgray;\r
    }\r
</style>\r
<div id="ir_editor"></div>`,m=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],b=`
#ir_editor {
    height: 200px;
}
`;function E(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),r.jsx(t,{docList:m}),r.jsx(o,{css:b,htmlRaw:u,exampleCode:a})]})}E.__docgenInfo={description:"",methods:[],displayName:"DBRule"};const h=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
const editor = new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "sql-oracle",\r
    code: \`\r
SELECT * FROM table;\r
SELECT * FROM table2;\r
SELECT * FROM table3;\r
\`.trim(),\r
} );\r
\r
globalThis.editor = editor;`,p=`btn.onclick = () => alert( editor.currentLine );\r
btn2.onclick = () => alert( editor.selectedText );\r
btn3.onclick = () => alert( JSON.stringify( editor.cursor ) );\r
btn4.onclick = () => alert( editor.getLineText( 1 ) );\r
btn5.onclick = () =>\r
{\r
    const cursor = editor.cursor;\r
\r
    alert( editor.getTextWithCursor( cursor.startY, cursor.startX, cursor.endY, cursor.endX ) );\r
    alert( editor.getPreText( cursor.startY, cursor.startX ) );\r
    alert( editor.getPostText( cursor.endY, cursor.endX ) );\r
};\r
btn6.onclick = () => editor.setSelection( 0, 0, 2, 2 );`,R=`<div id="ir_editor"></div>\r
<br />\r
<div class="button-group">\r
    <button id="btn" class="button">현재 라인 텍스트</button>\r
    <button id="btn2" class="button">현재 선택된 텍스트</button>\r
    <button id="btn3" class="button">현재 커서 정보</button>\r
    <button id="btn4" class="button">1번째 라인 텍스트</button>\r
    <button id="btn5" class="button">현재 커서 텍스트</button>\r
    <button id="btn6" class="button">특정 위치 선택</button>\r
</div>`,x=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],g=`
#ir_editor {
    height: 200px;
}
`;function L(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor Cursor API"}),r.jsx("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),r.jsx(t,{docList:x}),r.jsx(o,{css:g,htmlRaw:R,code:h,exampleCode:p})]})}L.__docgenInfo={description:"",methods:[],displayName:"HandlingCursor"};const C=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
const editor = new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "sql-oracle",\r
    code: \`SELECT * FROM table;\r
SELECT * FROM table2;\r
SELECT * FROM table3;\`,\r
    keyEvents: {\r
        "Ctrl-Space": () => alert( JSON.stringify( editor.cursor ) ),\r
        "Ctrl-I": () => alert( editor.currentLine ),\r
    },\r
} );`,_='<div id="ir_editor"></div>',k=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],I=`
#ir_editor {
    height: 200px;
}
`;function S(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor KeyEvents"}),r.jsxs("p",{children:[r.jsx("code",{children:"keyEvents"})," 속성으로 특정 키의 이벤트를 처리합니다."]}),r.jsx(t,{docList:k}),r.jsx(o,{css:I,htmlRaw:_,exampleCode:C})]})}S.__docgenInfo={description:"",methods:[],displayName:"KeyEvents"};const j=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
const gutterList = [];\r
\r
const editor = new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "sql-oracle",\r
    code: Array.from( { length: 1000 } ).map( () => "SELECT * FROM table;" ).join( "\\n" ),\r
    gutters: [\r
        // 에디터 왼쪽 gutter에 표시할 클래스 목록 정의\r
        { className: "ir-breakpoint", style: "width: 20px" },\r
        { className: "ir-bookmark", style: "width: 20px" },\r
        "CodeMirror-linenumbers",\r
    ],\r
} );\r
\r
editor.onGutterClick = ( lineNumber ) =>\r
{\r
    if( !gutterList[lineNumber] )\r
        addBookmarkGutter( lineNumber );\r
    else\r
        removeBookmarkGutter( lineNumber );\r
};\r
\r
addBookmarkGutter( 1 );\r
// 0번째 라인에 중단점 표시\r
editor.addLineGutter( 0, "ir-breakpoint", createBreakPointGutter() );\r
\r
function createBreakPointGutter()\r
{\r
    const gutter = document.createElement( "i" );\r
\r
    gutter.className = "ir-icon ir-icon--stop-circle-outline";\r
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--red)" );\r
\r
    return gutter;\r
}\r
\r
function createBookmarkGutter()\r
{\r
    const gutter = document.createElement( "i" );\r
\r
    gutter.className = "ir-icon ir-icon--bookmark";\r
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--yellow)" );\r
\r
    return gutter;\r
}\r
\r
function addBookmarkGutter( number )\r
{\r
    gutterList[number] = true;\r
    editor.addLineGutter( number, "ir-bookmark", createBookmarkGutter() );\r
}\r
\r
function removeBookmarkGutter( number )\r
{\r
    gutterList[number] = false;\r
    editor.removeLineGutter( number, "ir-bookmark" );\r
}\r
`,y='<div id="ir_editor"></div>',f=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],T=`
#ir_editor {
    height: 200px;
}
`;function w(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor"}),r.jsxs("p",{children:[r.jsx("code",{children:"lineGutter"})," 속성으로 줄 번호 외에 추가적인 거터를 표시할 수 있습니다."]}),r.jsx(t,{docList:f}),r.jsx(o,{css:T,htmlRaw:y,exampleCode:j})]})}w.__docgenInfo={description:"",methods:[],displayName:"LineGutter"};const O=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
new IREditor( {\r
    contextElement: ir_editor,\r
    // 룰 표현식 문법 모드로 설정\r
    mode: "ir-rule-exp",\r
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"\`,\r
} );`,M='<div id="ir_editor"></div>',F=`#ir_editor {\r
    height: 200px;\r
}\r
\r
.cm-ir-input {\r
    color: pink;\r
}\r
\r
.cm-ir-string {\r
    color: blue;\r
}\r
\r
.cm-ir-number {\r
    color: green;\r
}\r
\r
.cm-ir-rule {\r
    color: skyblue;\r
}\r
`,$=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]];function v(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),r.jsx(t,{docList:$}),r.jsx(o,{css:F,htmlRaw:M,exampleCode:O})]})}v.__docgenInfo={description:"",methods:[],displayName:"RuleSyntax"};const B=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
const editor = new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "sql-oracle",\r
    code: \`\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
SELECT * FROM table;\r
\`,\r
} );\r
\r
globalThis.editor = editor;`,N=`btn.onclick = () =>\r
{\r
    const cursor = editor.getSearchCursor( search.value );\r
\r
    if( cursor.findNext() )\r
    {\r
        editor.setSelection( cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch );\r
\r
        btn2.onclick = () =>\r
        {\r
            if( cursor.findNext() )\r
                editor.setSelection( cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch );\r
            else\r
                alert( "결과 없음!" );\r
        };\r
\r
        btn3.onclick = () =>\r
        {\r
            cursor.replace( replace.value );\r
        };\r
    }\r
    else\r
    {\r
        alert( "결과 없음!" );\r
        btn2.onclick = () => alert( "먼저 찾기 실행!" );\r
        btn3.onclick = () => alert( "먼저 찾기 실행!" );\r
    }\r
\r
};\r
btn2.onclick = () => alert( "먼저 찾기 실행!" );\r
btn3.onclick = () => alert( "먼저 찾기 실행!" );`,G=`<div id="ir_editor"></div>\r
<br />\r
<input id="search" type="text" placeholder='검색어 입력' />\r
<button id="btn" class="button">커서 얻기</button>\r
<button id="btn2" class="button">다음 찾기</button>\r
<br />\r
<input id="replace" type="text" placeholder='변경할 내용' />\r
<button id="btn3" class="button">내용 바꾸기</button>`,D=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],P=`
#ir_editor {
    height: 200px;
}
`;function U(){return r.jsxs(n,{children:[r.jsx(e,{children:"IREditor"}),r.jsxs("p",{children:[r.jsx("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),r.jsx(t,{docList:D}),r.jsx(o,{css:P,htmlRaw:G,code:B,exampleCode:N})]})}U.__docgenInfo={description:"",methods:[],displayName:"Search"};const z={title:"JS Components/IREditor"},H=["Basic","DBRule","HandlingCursor","KeyEvents","LineGutter","RuleSyntax","Search"];export{l as Basic,E as DBRule,L as HandlingCursor,S as KeyEvents,w as LineGutter,v as RuleSyntax,U as Search,H as __namedExportsOrder,z as default};
