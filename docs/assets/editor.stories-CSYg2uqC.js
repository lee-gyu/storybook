import{j as n}from"./jsx-runtime-Y5Ju2SGo.js";import{D as t,a as e,L as r}from"./version-tag-D9L4qBs8.js";import"./index-eCxJ45ll.js";const o=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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

editor.addLineClass( 5, "wrap", "ir-highlight" );`,i=`<style>
    .ir-highlight {
        background: red;
    }

    .ir-highlight .CodeMirror-line span {
        color: white;
    }

    #ir_editor {
        height: 200px;
    }
</style>
<div class='mb--lg'>
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
<button id="btn3" class="button">replace 출력</button>`,s=`
#ir_editor {
    height: 200px;
}
`;function c(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor"}),n.jsxs("p",{children:[n.jsx("code",{children:"IREditor"}),"를 이용하여 에디터 스타일을 표현합니다."]}),n.jsx(r,{css:s,htmlRaw:i,code:o})]})}c.__docgenInfo={description:"",methods:[],displayName:"Basic"};const l=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "ir-db-rule",
    code: \`SELECT <$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$> FROM user;
SELECT <$$123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"$$> FROM user;
SELECT [나이], {나이계산} <$@주석입니다.@$>;\`,
} );`,d=`<style>
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
<div id="ir_editor"></div>`,a=`
#ir_editor {
    height: 200px;
}
`;function u(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor"}),n.jsx("p",{children:"룰 표현식 문법 + SQL 문법을 믹싱한 에디터 스타일을 표현입니다."}),n.jsx(r,{css:a,htmlRaw:d,code:l})]})}u.__docgenInfo={description:"",methods:[],displayName:"DBRule"};const m=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: \`
SELECT * FROM table;
SELECT * FROM table2;
SELECT * FROM table3;
\`.trim(),
} );

btn.onclick = () => alert( editor.currentLine );
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
btn6.onclick = () => editor.setSelection( 0, 0, 2, 2 );`,b=`<div id="ir_editor"></div>
<br />
<div class="button-group">
    <button id="btn" class="button">현재 라인 텍스트</button>
    <button id="btn2" class="button">현재 선택된 텍스트</button>
    <button id="btn3" class="button">현재 커서 정보</button>
    <button id="btn4" class="button">1번째 라인 텍스트</button>
    <button id="btn5" class="button">현재 커서 텍스트</button>
    <button id="btn6" class="button">특정 위치 선택</button>
</div>`,E=`
#ir_editor {
    height: 200px;
}
`;function h(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor Cursor API"}),n.jsx("p",{children:"제공되는 API를 이용하여 Cursor 위치 및 상태를 제어합니다."}),n.jsx(r,{css:E,htmlRaw:b,code:m})]})}h.__docgenInfo={description:"",methods:[],displayName:"HandlingCursor"};const p=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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
} );`,R='<div id="ir_editor"></div>',x=`
#ir_editor {
    height: 200px;
}
`;function g(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor KeyEvents"}),n.jsxs("p",{children:[n.jsx("code",{children:"keyEvents"})," 속성으로 특정 키의 이벤트를 처리합니다."]}),n.jsx(r,{css:x,htmlRaw:R,code:p})]})}g.__docgenInfo={description:"",methods:[],displayName:"KeyEvents"};const k=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

const editor = new IREditor( {
    contextElement: document.getElementById( "ir_editor" ),
    mode: "sql-oracle",
    code: Array.from( { length: 1000 } ).map( () => "SELECT * FROM table;" ).join( "\\n" ),
    gutters: [
        { className: "ir-breakpoint", style: "width: 20px" },
        { className: "ir-bookmark", style: "width: 20px" },
        "CodeMirror-linenumbers",
    ],
} );

const createBreakPointGutter = () =>
{
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--stop-circle-outline";
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--red)" );

    return gutter;
};

const createBookmarkGutter = () =>
{
    const gutter = document.createElement( "i" );

    gutter.className = "ir-icon ir-icon--bookmark";
    gutter.style.setProperty( "--ir-icon-foreground-color", "var(--yellow)" );

    return gutter;
};

const gutterList = [];

const addBookmarkGutter = ( number ) =>
{
    gutterList[number] = true;
    editor.addLineGutter( number, "ir-bookmark", createBookmarkGutter() );
};

const removeBookmarkGutter = ( number ) =>
{
    gutterList[number] = false;
    editor.removeLineGutter( number, "ir-bookmark" );
};

editor.onGutterClick = ( lineNumber ) =>
{
    if( !gutterList[lineNumber] ) addBookmarkGutter( lineNumber );
    else removeBookmarkGutter( lineNumber );
};

addBookmarkGutter( 1 );

editor.addLineGutter( 0, "ir-breakpoint", createBreakPointGutter() );`,y='<div id="ir_editor"></div>',L=`
#ir_editor {
    height: 200px;
}
`;function S(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor"}),n.jsx(r,{css:L,htmlRaw:y,code:k})]})}S.__docgenInfo={description:"",methods:[],displayName:"LineGutter"};const C=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

new IREditor( {
    contextElement: ir_editor,
    mode: "ir-rule-exp",
    code: \`  123.123 + "Asdzxc" + {rule} + [항목] + "ㅇㅇㅁㄴㅇㅁㄴ\\\\\\\\"ㅇㅇㅇㅇ"\`,
} );`,_=`<style>
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
</style>
<div id="ir_editor"></div>`,f=`
#ir_editor {
    height: 200px;
}
`;function j(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor"}),n.jsx("p",{children:"룰 표현식 문법을 이용하여 에디터 스타일을 표현합니다."}),n.jsx(r,{css:f,htmlRaw:_,code:C})]})}j.__docgenInfo={description:"",methods:[],displayName:"RuleSyntax"};const T=`import { IREditor } from "@innorules/ir-style/lib/esm/editor.js";

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

btn.onclick = () =>
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
btn3.onclick = () => alert( "먼저 찾기 실행!" );`,I=`<div id="ir_editor"></div>
<br />
<input id="search" type="text" placeholder='검색어 입력' />
<button id="btn" class="button">커서 얻기</button>
<button id="btn2" class="button">다음 찾기</button>
<br />
<input id="replace" type="text" placeholder='변경할 내용' />
<button id="btn3" class="button">내용 바꾸기</button>`,w=`
#ir_editor {
    height: 200px;
}
`;function O(){return n.jsxs(t,{children:[n.jsx(e,{children:"IREditor"}),n.jsxs("p",{children:[n.jsx("code",{children:"getSearchCursor"}),"를 검색 기능을 이용합니다."]}),n.jsx(r,{css:w,htmlRaw:I,code:T})]})}O.__docgenInfo={description:"",methods:[],displayName:"Search"};const $={title:"JS Components/IREditor"},B=["Basic","DBRule","HandlingCursor","KeyEvents","LineGutter","RuleSyntax","Search"];export{c as Basic,u as DBRule,h as HandlingCursor,g as KeyEvents,S as LineGutter,j as RuleSyntax,O as Search,B as __namedExportsOrder,$ as default};
