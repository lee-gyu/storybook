import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as t,L as o}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const e=`import { IRVirtualDOM } from "@innorules/ir-style";\r
\r
const virtualDOM = new IRVirtualDOM( {\r
    contextElement: document.getElementById( "virtual_dom" ),\r
    rowCount: 81,\r
    headerRowCount: 1,\r
    defaultRowHeight: 28,\r
    onCreatedRowElement( row, rowElement )\r
    {\r
        const div = document.createElement( "div" );\r
        const span = document.createElement( "span" );\r
\r
        div.classList.add( "table-row" );\r
\r
        span.textContent = "Test " + row.rowId + " " + Date.now();\r
        div.append( span );\r
\r
        if( row.isFreezed )\r
        {\r
            span.textContent = "Header";\r
            div.classList.add( "table-row--freezed" );\r
        }\r
        else\r
        {\r
            const btnDelete = document.createElement( "button" );\r
\r
            btnDelete.className = "ml--auto";\r
            btnDelete.textContent = "삭제";\r
            btnDelete.onclick = () => virtualDOM.removeRow( row.rowId );\r
\r
            div.append( btnDelete );\r
        }\r
\r
        rowElement.append( div );\r
    },\r
} );\r
\r
// storybook 디버깅 용\r
window.virtualDOM = virtualDOM;\r
\r
btn_clear.onclick = () =>\r
{\r
    virtualDOM.clearRows();\r
};\r
\r
btn_add400.onclick = () =>\r
{\r
    Array.from( { length: 400 } ).forEach( () =>\r
    {\r
        virtualDOM.addRow();\r
    } );\r
};\r
\r
btn_add3.onclick = () =>\r
{\r
    Array.from( { length: 3 } ).forEach( () =>\r
    {\r
        virtualDOM.addRow();\r
    } );\r
};\r
\r
btn_insert.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
    virtualDOM.insertRow( rowId );\r
};\r
\r
btn_insert_rows.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
\r
    virtualDOM.insertRows( 10, rowId );\r
};\r
\r
btn_toggle.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
    const visible = virtualDOM.getRowVisible( rowId );\r
\r
    virtualDOM.setRowVisible( rowId, !visible );\r
};\r
\r
btn_remove.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
\r
    virtualDOM.removeRow( rowId );\r
};\r
\r
btn_remove_10.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
\r
    virtualDOM.removeRows( rowId, rowId + 9 );\r
};\r
\r
btn_scroll.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
\r
    virtualDOM.scrollToRow( rowId );\r
};\r
\r
btn_set_height.onclick = () =>\r
{\r
    const rowId = parseInt( inserting_row.value, "10" );\r
    const rowHeight = parseInt( input_height.value, "10" );\r
\r
    virtualDOM.setRowHeight( rowId, rowHeight );\r
};\r
\r
btn_move.onclick = () =>\r
{\r
    virtualDOM.moveRows( 1, 10, virtualDOM.getRowCount() );\r
};`,i=`<style>
    #virtual_dom {
        width: 750px;
        height: 300px;
    }

    .table-row {
        display: flex;
        align-items: center;
        padding: 0 12px;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
    }

    .table-row:hover {
        background-color: var(--background-color);
    }

    .table-row--freezed {
        font-weight: 700;
        background-color: var(--white);
        color: var(--text-color);
    }

    .table-row--freezed:hover {
        background-color: var(--background-color);
    }
</style>
<div class="mb--lg">
    <button class="button" id="btn_clear">Clear</button>
    <button class="button" id="btn_add400">Add 400 Rows</button>
    <button class="button" id="btn_add3">Add 3 Rows</button>
    <div class="input" style="display: inline-flex; width: 80px">
        <input id="inserting_row" class="input__native" type="number" value="1" min="0" />
    </div>
    <button class="button" id="btn_insert">Insert Row</button>
    <button class="button" id="btn_insert_rows">Insert Rows</button>
    <button class="button" id="btn_remove">Remove</button>
    <button class="button" id="btn_remove_10">Remove 10</button>
    <button class="button" id="btn_toggle">Toggle Visible</button>
    <button class="button" id="btn_scroll">Scroll To Row</button>
    <div class="input" style="display: inline-flex; width: 80px">
        <input id="input_height" class="input__native" type="number" value="60" min="0" />
    </div>
    <button class="button" id="btn_set_height">Set Row Height</button>
    <button class="button" id="btn_move">Move Rows First 10</button>
</div>
<div id="virtual_dom"></div>`;function s(){return n.jsxs(r,{children:[n.jsx(t,{children:"IRVirtualDOM"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRVirtualDOM"})," 클래스를 이용하여 bulk 데이터를 표시해야 하는 경우, 브라우저 성능 문제를 최소화 할 수 있습니다."]}),n.jsx(o,{fixedHeight:400,htmlRaw:i,code:e})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const b={title:"JS Components/IRVirtualDOM"},w=["Basic"];export{s as Basic,w as __namedExportsOrder,b as default};
