import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,r,s as i,t as a}from"./context-C6uFeUW4.js";import{t as o}from"./jsx-runtime-6sF1Ejqi.js";var s,ee=e((()=>{s=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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

editor.addLineClass( 5, "wrap", "ir-highlight" );`})),c,te=e((()=>{c=`#ir_editor {
    height: 200px;
}

.ir-highlight {
    background: red;
}

.ir-highlight .CodeMirror-line span {
    color: white;
}
`})),l,ne=e((()=>{l=`<div class='mb--lg'>
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
<button id="btn3" class="button">replace 출력</button>`}));function u(){return(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`IREditor`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`IREditor`}),`를 이용하여 에디터 스타일을 표현합니다.`]}),(0,d.jsx)(r,{docList:f}),(0,d.jsx)(i,{css:c,htmlRaw:l,exampleCode:s})]})}var d,f,p=e((()=>{ee(),te(),ne(),a(),d=o(),f=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],u.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),m,re=e((()=>{m=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "ir-db-rule",
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$> FROM user;
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$$> FROM user;
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`,
} );`})),h,ie=e((()=>{h=`<style>
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
<div id="ir_editor"></div>`}));function g(){return(0,_.jsxs)(n,{children:[(0,_.jsx)(t,{children:`IREditor`}),(0,_.jsx)(`p`,{children:`룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다.`}),(0,_.jsx)(r,{docList:v}),(0,_.jsx)(i,{css:y,htmlRaw:h,exampleCode:m})]})}var _,v,y,ae=e((()=>{re(),ie(),a(),_=o(),v=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],y=`
#ir_editor {
    height: 200px;
}
`,g.__docgenInfo={description:``,methods:[],displayName:`DBRule`}})),b,oe=e((()=>{b=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: \`
SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;
\`.trim(),
} );

globalThis.editor = editor;`})),x,se=e((()=>{x=`btn.onclick = () => alert( editor.currentLine );
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
btn6.onclick = () => editor.setSelection( 0, 0, 2, 2 );`})),S,ce=e((()=>{S=`<div id="ir_editor"></div>
<br />
<div class="button-group">
    <button id="btn" class="button">현재 라인 텍스트</button>
    <button id="btn2" class="button">현재 선택된 텍스트</button>
    <button id="btn3" class="button">현재 커서 정보</button>
    <button id="btn4" class="button">1번째 라인 텍스트</button>
    <button id="btn5" class="button">현재 커서 텍스트</button>
    <button id="btn6" class="button">특정 위치 선택</button>
</div>`}));function C(){return(0,w.jsxs)(n,{children:[(0,w.jsx)(t,{children:`IREditor Cursor API`}),(0,w.jsx)(`p`,{children:`제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다.`}),(0,w.jsx)(r,{docList:T}),(0,w.jsx)(i,{css:E,htmlRaw:S,code:b,exampleCode:x})]})}var w,T,E,le=e((()=>{oe(),se(),ce(),a(),w=o(),T=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],E=`
#ir_editor {
    height: 200px;
}
`,C.__docgenInfo={description:``,methods:[],displayName:`HandlingCursor`}})),D,ue=e((()=>{D=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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
} );`})),O,de=e((()=>{O=`<div id="ir_editor"></div>`}));function k(){return(0,A.jsxs)(n,{children:[(0,A.jsx)(t,{children:`IREditor KeyEvents`}),(0,A.jsxs)(`p`,{children:[(0,A.jsx)(`code`,{children:`keyEvents`}),` 속성으로 특정 키의 이벤트를 처리합니다.`]}),(0,A.jsx)(r,{docList:j}),(0,A.jsx)(i,{css:M,htmlRaw:O,exampleCode:D})]})}var A,j,M,fe=e((()=>{ue(),de(),a(),A=o(),j=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],M=`
#ir_editor {
    height: 200px;
}
`,k.__docgenInfo={description:``,methods:[],displayName:`KeyEvents`}})),N,pe=e((()=>{N=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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
`})),P,me=e((()=>{P=`<div id="ir_editor"></div>`}));function F(){return(0,I.jsxs)(n,{children:[(0,I.jsx)(t,{children:`IREditor`}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`code`,{children:`lineGutter`}),` 속성으로 줄 번호 외에 추가적인 거터를 표시할 수 있습니다.`]}),(0,I.jsx)(r,{docList:L}),(0,I.jsx)(i,{css:R,htmlRaw:P,exampleCode:N})]})}var I,L,R,he=e((()=>{pe(),me(),a(),I=o(),L=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],R=`
#ir_editor {
    height: 200px;
}
`,F.__docgenInfo={description:``,methods:[],displayName:`LineGutter`}})),z,ge=e((()=>{z=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

new IREditor( {
    contextElement: ir_editor,
    // 룰 표현식 문법 모드로 설정
    mode: "ir-rule-exp",
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"\`,
} );`})),B,_e=e((()=>{B=`<div id="ir_editor"></div>`})),V,ve=e((()=>{V=`#ir_editor {
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
`}));function H(){return(0,U.jsxs)(n,{children:[(0,U.jsx)(t,{children:`IREditor`}),(0,U.jsx)(`p`,{children:`룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다.`}),(0,U.jsx)(r,{docList:W}),(0,U.jsx)(i,{css:V,htmlRaw:B,exampleCode:z})]})}var U,W,ye=e((()=>{ge(),_e(),ve(),a(),U=o(),W=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],H.__docgenInfo={description:``,methods:[],displayName:`RuleSyntax`}})),G,be=e((()=>{G=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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

globalThis.editor = editor;`})),K,xe=e((()=>{K=`btn.onclick = () =>
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
btn3.onclick = () => alert( "먼저 찾기 실행!" );`})),q,Se=e((()=>{q=`<div id="ir_editor"></div>
<br />
<input id="search" type="text" placeholder='검색어 입력' />
<button id="btn" class="button">커서 얻기</button>
<button id="btn2" class="button">다음 찾기</button>
<br />
<input id="replace" type="text" placeholder='변경할 내용' />
<button id="btn3" class="button">내용 바꾸기</button>`}));function J(){return(0,Y.jsxs)(n,{children:[(0,Y.jsx)(t,{children:`IREditor`}),(0,Y.jsxs)(`p`,{children:[(0,Y.jsx)(`code`,{children:`getSearchCursor`}),`를 검색 기능을 이용합니다.`]}),(0,Y.jsx)(r,{docList:X}),(0,Y.jsx)(i,{css:Z,htmlRaw:q,code:G,exampleCode:K})]})}var Y,X,Z,Ce=e((()=>{be(),xe(),Se(),a(),Y=o(),X=[[`/classes/_innorules_code-editor.IREditor.html`,`IREditor`]],Z=`
#ir_editor {
    height: 200px;
}
`,J.__docgenInfo={description:``,methods:[],displayName:`Search`}})),Q,$;e((()=>{p(),ae(),le(),fe(),he(),ye(),Ce(),Q={title:`JS Components/IREditor`},$=[`Basic`,`DBRule`,`HandlingCursor`,`KeyEvents`,`LineGutter`,`RuleSyntax`,`Search`]}))();export{u as Basic,g as DBRule,C as HandlingCursor,k as KeyEvents,F as LineGutter,H as RuleSyntax,J as Search,$ as __namedExportsOrder,Q as default};