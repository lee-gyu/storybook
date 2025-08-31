import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as t,L as o}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const e=`import { IRVirtualDOM } from "@innorules/ir-style";\r
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
};`,i=`<style>\r
    #virtual_dom {\r
        width: 750px;\r
        height: 300px;\r
    }\r
\r
    .table-row {\r
        display: flex;\r
        align-items: center;\r
        padding: 0 12px;\r
        height: 100%;\r
        box-sizing: border-box;\r
        border-bottom: 1px solid #ddd;\r
    }\r
\r
    .table-row:hover {\r
        background-color: var(--background-color);\r
    }\r
\r
    .table-row--freezed {\r
        font-weight: 700;\r
        background-color: var(--white);\r
        color: var(--text-color);\r
    }\r
\r
    .table-row--freezed:hover {\r
        background-color: var(--background-color);\r
    }\r
</style>\r
<div class="mb--lg">\r
    <button class="button" id="btn_clear">Clear</button>\r
    <button class="button" id="btn_add400">Add 400 Rows</button>\r
    <button class="button" id="btn_add3">Add 3 Rows</button>\r
    <div class="input" style="display: inline-flex; width: 80">\r
        <input id="inserting_row" class="input__native" type="number" value="1" min="0" />\r
    </div>\r
    <button class="button" id="btn_insert">Insert Row</button>\r
    <button class="button" id="btn_insert_rows">Insert Rows</button>\r
    <button class="button" id="btn_remove">Remove</button>\r
    <button class="button" id="btn_remove_10">Remove 10</button>\r
    <button class="button" id="btn_toggle">Toggle Visible</button>\r
    <button class="button" id="btn_scroll">Scroll To Row</button>\r
    <div class="input" style="display: inline-flex; width: 80">\r
        <input id="input_height" class="input__native" type="number" value="60" min="0" />\r
    </div>\r
    <button class="button" id="btn_set_height">Set Row Height</button>\r
    <button class="button" id="btn_move">Move Rows First 10</button>\r
</div>\r
<div id="virtual_dom"></div>`;function s(){return n.jsxs(r,{children:[n.jsx(t,{children:"IRVirtualDOM"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRVirtualDOM"})," 클래스를 이용하여 bulk 데이터를 표시해야 하는 경우, 브라우저 성능 문제를 최소화 할 수 있습니다."]}),n.jsx(o,{fixedHeight:400,htmlRaw:i,code:e})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const u={title:"JS Components/IRVirtualDOM"},b=["Basic"];export{s as Basic,b as __namedExportsOrder,u as default};
