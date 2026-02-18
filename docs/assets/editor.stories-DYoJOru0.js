import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as t,c as r,L as o}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const i=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: \`SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;\`,
} );

btn.onclick = () => alert( editor.code );
btn2.onclick = () => editor.openFindDialog();
btn3.onclick = () => editor.openReplaceDialog();
show_whitespace.onchange = () => editor.showWhitespace = show_whitespace.checked;
show_next.onchange = () => editor.showNextLineSymbol = show_next.checked;

editor.addLineClass( 5, "wrap", "ir-highlight" );`,s=`#ir_editor {
    height: 200px;
}

.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}
`,c=`<div class='mb--lg'>
    <label>
        <input id="show_whitespace" type="checkbox" />공백 기호 표시
    </label>
    <label>
        <input id="show_next" type="checkbox" /> 줄바꿈 기호 표시
    </label>
</div>
<div id="ir_editor"></div>
<br />
<button id="btn" class="button">code 출력</button>
<button id="btn2" class="button">find 출력</button>
<button id="btn3" class="button">replace 출력</button>`,d=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]];function l(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor"}),n.jsxs("p",{children:[n.jsx("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),n.jsx(r,{docList:d}),n.jsx(o,{css:s,htmlRaw:c,exampleCode:i})]})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};const a=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "ir-db-rule",
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$> FROM user;
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$$> FROM user;
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`,
} );`,u=`<style>
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
</style>
<div id="ir_editor"></div>`,m=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],b=`
#ir_editor {
    height: 200px;
}
`;function E(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor"}),n.jsx("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),n.jsx(r,{docList:m}),n.jsx(o,{css:b,htmlRaw:u,exampleCode:a})]})}E.__docgenInfo={description:"",methods:[],displayName:"DBRule"};const h=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: \`
SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;
\`.trim(),
} );

globalThis.editor = editor;`,p=`btn.onclick = () => alert( editor.currentLine );
btn2.onclick = () => alert( editor.selectedText );
btn3.onclick = () => alert( JSON.stringify( editor.cursor ) );
btn4.onclick = () => alert( editor.getLineText( 1 ) );
btn5.onclick = () =>
{
    const cursor = editor.cursor;

    alert( editor.getTextWithCursor( cursor.startY, cursor.startX, cursor.endY, cursor.endX ) );
    alert( editor.getPreText( cursor.startY, cursor.startX ) );
    alert( editor.getPostText( cursor.endY, cursor.endX ) );
};
btn6.onclick = () => editor.setSelection( 0, 0, 2, 2 );`,R=`<div id="ir_editor"></div>
<br />
<div class="button-group">
    <button id="btn" class="button">현재 라인 텍스트</button>
    <button id="btn2" class="button">현재 선택된 텍스트</button>
    <button id="btn3" class="button">현재 커서 정보</button>
    <button id="btn4" class="button">1번째 라인 텍스트</button>
    <button id="btn5" class="button">현재 커서 텍스트</button>
    <button id="btn6" class="button">특정 위치 선택</button>
</div>`,x=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],g=`
#ir_editor {
    height: 200px;
}
`;function L(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor Cursor API"}),n.jsx("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),n.jsx(r,{docList:x}),n.jsx(o,{css:g,htmlRaw:R,code:h,exampleCode:p})]})}L.__docgenInfo={description:"",methods:[],displayName:"HandlingCursor"};const C=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: \`SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;\`,
    keyEvents: {
        "Ctrl-Space": () => alert( JSON.stringify( editor.cursor ) ),
        "Ctrl-I": () => alert( editor.currentLine ),
    },
} );`,_='<div id="ir_editor"></div>',k=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],I=`
#ir_editor {
    height: 200px;
}
`;function S(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor KeyEvents"}),n.jsxs("p",{children:[n.jsx("code",{children:"keyEvents"})," 속성으로 특정 키의 이벤트를 처리합니다."]}),n.jsx(r,{docList:k}),n.jsx(o,{css:I,htmlRaw:_,exampleCode:C})]})}S.__docgenInfo={description:"",methods:[],displayName:"KeyEvents"};const j=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const gutterList = [];

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: Array.from( { length: 1000 } ).map( () => "SELECT * FROM table;" ).join( "\\n" ),
    gutters: [
        // 에디터 왼쪽 gutter에 표시할 클래스 목록 정의
        { className: "ir-breakpoint", style: "width: 20px" },
        { className: "ir-bookmark", style: "width: 20px" },
        "CodeMirror-linenumbers",
    ],
} );

editor.onGutterClick = ( lineNumber ) =>
{
    if( !gutterList[lineNumber] )
        addBookmarkGutter( lineNumber );
    else
        removeBookmarkGutter( lineNumber );
};

addBookmarkGutter( 1 );
// 0번째 라인에 중단점 표시
editor.addLineGutter( 0, "ir-breakpoint", createBreakPointGutter() );

function createBreakPointGutter()
{
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--stop-circle-outline";
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--red)" );

    return gutter;
}

function createBookmarkGutter()
{
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--bookmark";
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--yellow)" );

    return gutter;
}

function addBookmarkGutter( number )
{
    gutterList[number] = true;
    editor.addLineGutter( number, "ir-bookmark", createBookmarkGutter() );
}

function removeBookmarkGutter( number )
{
    gutterList[number] = false;
    editor.removeLineGutter( number, "ir-bookmark" );
}
`,y='<div id="ir_editor"></div>',f=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],T=`
#ir_editor {
    height: 200px;
}
`;function w(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor"}),n.jsxs("p",{children:[n.jsx("code",{children:"lineGutter"})," 속성으로 줄 번호 외에 추가적인 거터를 표시할 수 있습니다."]}),n.jsx(r,{docList:f}),n.jsx(o,{css:T,htmlRaw:y,exampleCode:j})]})}w.__docgenInfo={description:"",methods:[],displayName:"LineGutter"};const O=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

new IREditor( {
    contextElement: ir_editor,
    // 룰 표현식 문법 모드로 설정
    mode: "ir-rule-exp",
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"\`,
} );`,M='<div id="ir_editor"></div>',F=`#ir_editor {
    height: 200px;
}

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
`,$=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]];function v(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor"}),n.jsx("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),n.jsx(r,{docList:$}),n.jsx(o,{css:F,htmlRaw:M,exampleCode:O})]})}v.__docgenInfo={description:"",methods:[],displayName:"RuleSyntax"};const B=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: \`
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
SELECT * FROM table;
\`,
} );

globalThis.editor = editor;`,N=`btn.onclick = () =>
{
    const cursor = editor.getSearchCursor( search.value );

    if( cursor.findNext() )
    {
        editor.setSelection( cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch );

        btn2.onclick = () =>
        {
            if( cursor.findNext() )
                editor.setSelection( cursor.from().line, cursor.from().ch, cursor.to().line, cursor.to().ch );
            else
                alert( "결과 없음!" );
        };

        btn3.onclick = () =>
        {
            cursor.replace( replace.value );
        };
    }
    else
    {
        alert( "결과 없음!" );
        btn2.onclick = () => alert( "먼저 찾기 실행!" );
        btn3.onclick = () => alert( "먼저 찾기 실행!" );
    }

};
btn2.onclick = () => alert( "먼저 찾기 실행!" );
btn3.onclick = () => alert( "먼저 찾기 실행!" );`,G=`<div id="ir_editor"></div>
<br />
<input id="search" type="text" placeholder='검색어 입력' />
<button id="btn" class="button">커서 얻기</button>
<button id="btn2" class="button">다음 찾기</button>
<br />
<input id="replace" type="text" placeholder='변경할 내용' />
<button id="btn3" class="button">내용 바꾸기</button>`,D=[["/classes/_innorules_code-editor.IREditor.html","IREditor"]],P=`
#ir_editor {
    height: 200px;
}
`;function U(){return n.jsxs(e,{children:[n.jsx(t,{children:"IREditor"}),n.jsxs("p",{children:[n.jsx("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),n.jsx(r,{docList:D}),n.jsx(o,{css:P,htmlRaw:G,code:B,exampleCode:N})]})}U.__docgenInfo={description:"",methods:[],displayName:"Search"};const z={title:"JS Components/IREditor"},H=["Basic","DBRule","HandlingCursor","KeyEvents","LineGutter","RuleSyntax","Search"];export{l as Basic,E as DBRule,L as HandlingCursor,S as KeyEvents,w as LineGutter,v as RuleSyntax,U as Search,H as __namedExportsOrder,z as default};
