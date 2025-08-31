import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as t,L as e}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const o=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
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
editor.addLineClass( 5, "wrap", "ir-highlight" );`,i=`<style>\r
    .ir-highlight {\r
        background: red;\r
    }\r
\r
    .ir-highlight .CodeMirror-line span {\r
        color: white;\r
    }\r
\r
    #ir_editor {\r
        height: 200px;\r
    }\r
</style>\r
<div class='mb--lg'>\r
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
<button id="btn3" class="button">replace 출력</button>`,s=`
#ir_editor {
    height: 200px;
}
`;function c(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor"}),r.jsxs("p",{children:[r.jsx("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),r.jsx(e,{css:s,htmlRaw:i,code:o})]})}c.__docgenInfo={description:"",methods:[],displayName:"Basic"};const l=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "ir-db-rule",\r
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$> FROM user;\r
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$$> FROM user;\r
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`,\r
} );`,d=`<style>\r
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
<div id="ir_editor"></div>`,a=`
#ir_editor {
    height: 200px;
}
`;function u(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),r.jsx(e,{css:a,htmlRaw:d,code:l})]})}u.__docgenInfo={description:"",methods:[],displayName:"DBRule"};const m=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
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
btn.onclick = () => alert( editor.currentLine );\r
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
btn6.onclick = () => editor.setSelection( 0, 0, 2, 2 );`,b=`<div id="ir_editor"></div>\r
<br />\r
<div class="button-group">\r
    <button id="btn" class="button">현재 라인 텍스트</button>\r
    <button id="btn2" class="button">현재 선택된 텍스트</button>\r
    <button id="btn3" class="button">현재 커서 정보</button>\r
    <button id="btn4" class="button">1번째 라인 텍스트</button>\r
    <button id="btn5" class="button">현재 커서 텍스트</button>\r
    <button id="btn6" class="button">특정 위치 선택</button>\r
</div>`,E=`
#ir_editor {
    height: 200px;
}
`;function h(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor Cursor API"}),r.jsx("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),r.jsx(e,{css:E,htmlRaw:b,code:m})]})}h.__docgenInfo={description:"",methods:[],displayName:"HandlingCursor"};const p=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
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
} );`,R='<div id="ir_editor"></div>',x=`
#ir_editor {
    height: 200px;
}
`;function g(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor KeyEvents"}),r.jsxs("p",{children:[r.jsx("code",{children:"keyEvents"})," 속성으로 특정 키의 이벤트를 처리합니다."]}),r.jsx(e,{css:x,htmlRaw:R,code:p})]})}g.__docgenInfo={description:"",methods:[],displayName:"KeyEvents"};const k=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
const editor = new IREditor( {\r
    contextElement: document.getElementById( "ir_editor" ),\r
    mode: "sql-oracle",\r
    code: Array.from( { length: 1000 } ).map( () => "SELECT * FROM table;" ).join( "\\n" ),\r
    gutters: [\r
        { className: "ir-breakpoint", style: "width: 20px" },\r
        { className: "ir-bookmark", style: "width: 20px" },\r
        "CodeMirror-linenumbers",\r
    ],\r
} );\r
\r
const createBreakPointGutter = () =>\r
{\r
    const gutter = document.createElement( "i" );\r
\r
    gutter.className = "ir-icon ir-icon--stop-circle-outline";\r
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--red)" );\r
\r
    return gutter;\r
};\r
\r
const createBookmarkGutter = () =>\r
{\r
    const gutter = document.createElement( "i" );\r
\r
    gutter.className = "ir-icon ir-icon--bookmark";\r
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--yellow)" );\r
\r
    return gutter;\r
};\r
\r
const gutterList = [];\r
\r
const addBookmarkGutter = ( number ) =>\r
{\r
    gutterList[number] = true;\r
    editor.addLineGutter( number, "ir-bookmark", createBookmarkGutter() );\r
};\r
\r
const removeBookmarkGutter = ( number ) =>\r
{\r
    gutterList[number] = false;\r
    editor.removeLineGutter( number, "ir-bookmark" );\r
};\r
\r
editor.onGutterClick = ( lineNumber ) =>\r
{\r
    if( !gutterList[lineNumber] ) addBookmarkGutter( lineNumber );\r
    else removeBookmarkGutter( lineNumber );\r
};\r
\r
addBookmarkGutter( 1 );\r
\r
editor.addLineGutter( 0, "ir-breakpoint", createBreakPointGutter() );`,y='<div id="ir_editor"></div>',L=`
#ir_editor {
    height: 200px;
}
`;function S(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor"}),r.jsx(e,{css:L,htmlRaw:y,code:k})]})}S.__docgenInfo={description:"",methods:[],displayName:"LineGutter"};const C=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
\r
new IREditor( {\r
    contextElement: ir_editor,\r
    mode: "ir-rule-exp",\r
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"\`,\r
} );`,_=`<style>\r
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
</style>\r
<div id="ir_editor"></div>`,f=`
#ir_editor {
    height: 200px;
}
`;function j(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor"}),r.jsx("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),r.jsx(e,{css:f,htmlRaw:_,code:C})]})}j.__docgenInfo={description:"",methods:[],displayName:"RuleSyntax"};const T=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";\r
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
btn.onclick = () =>\r
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
btn3.onclick = () => alert( "먼저 찾기 실행!" );`,I=`<div id="ir_editor"></div>\r
<br />\r
<input id="search" type="text" placeholder='검색어 입력' />\r
<button id="btn" class="button">커서 얻기</button>\r
<button id="btn2" class="button">다음 찾기</button>\r
<br />\r
<input id="replace" type="text" placeholder='변경할 내용' />\r
<button id="btn3" class="button">내용 바꾸기</button>`,w=`
#ir_editor {
    height: 200px;
}
`;function O(){return r.jsxs(n,{children:[r.jsx(t,{children:"IREditor"}),r.jsxs("p",{children:[r.jsx("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),r.jsx(e,{css:w,htmlRaw:I,code:T})]})}O.__docgenInfo={description:"",methods:[],displayName:"Search"};const B={title:"JS Components/IREditor"},N=["Basic","DBRule","HandlingCursor","KeyEvents","LineGutter","RuleSyntax","Search"];export{c as Basic,u as DBRule,h as HandlingCursor,g as KeyEvents,S as LineGutter,j as RuleSyntax,O as Search,N as __namedExportsOrder,B as default};
