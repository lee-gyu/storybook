import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r,a as e,L as t,c as o,V as i}from"./version-tag-Buic5uEj.js";import"./iframe-BmvT9HBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx57Rlms.js";const l=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
\r
// 테스트 사용성을 위해, click 이후 IRGrid에 포커스를 줌\r
window.addEventListener( "click", ( ev ) =>\r
{\r
    if( ev.target instanceof HTMLButtonElement ) grid.focus();\r
} );\r
\r
function createGrid()\r
{\r
    const grid = new IRGrid( {\r
        contextElement: ir_grid,\r
        // copyOptions: { rowSpan: true, colSpan: true, skipFiltered: true },\r
        // pasteOptions: { rowSpan: true, colSpan: true, skipFiltered: true },\r
        // autoReflowOnDeleteFreezedRow: true,\r
        // autoReflowOnDeleteFreezedColumn: true,\r
        body: {\r
            rowCount: 500,\r
        },\r
        defaultColumnCellFormat: {\r
            all: { verticalAlign: "middle" },\r
        },\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 200,\r
            cellRenderer: ( row, col, data ) =>\r
            {\r
                if( col > 0 )\r
                    data.text = col.toString();\r
\r
                return defaultRenderer;\r
            },\r
        },\r
        rowHeader: {\r
            colCount: 2,\r
            cellRenderer: ( row, col, data ) =>\r
            {\r
                switch ( col )\r
                {\r
                    case 0:\r
                        return rowNoRenderer;\r
                    case 1:\r
                        data.text = "Test";\r
                        return defaultRenderer;\r
                    default:\r
                        return defaultRenderer;\r
                }\r
            },\r
        },\r
        undoManagerOptions: {\r
            stackLength: 256,\r
            disabled: false,\r
        },\r
    } );\r
\r
    grid.setText( 1, 2, "ABC\\nBCD\\nCDE" );\r
    grid.setText( 2, 2, "ABC\\nBCD\\nCDE" );\r
    grid.setText( 3, 2, "ABC\\nBCD\\nCDE" );\r
    grid.setText( 4, 2, "ABC\\nBCD\\nCDE" );\r
    grid.setText( 5, 2, "ABC\\nBCD\\nCDE" );\r
\r
    grid.onMountedRow = ( row ) =>\r
    {\r
        grid.autoSizeRow( row );\r
    };\r
\r
    grid.onContextMenu = ( ev, cell ) =>\r
    {\r
        if( cell )\r
            console.log( "contextmenu", { row: cell.row, col: cell.col } );\r
        else\r
            console.log( "contextmenu", "cell is null" );\r
    };\r
\r
    window.grid = grid;\r
\r
    grid.mergeCells( 0, 5, 0, 50 );\r
    grid.mergeCells( 3, 5, 3, 50 );\r
\r
    return grid;\r
}\r
\r
let grid = createGrid();\r
\r
btn_add_row.onclick = () =>\r
{\r
    grid.commandManager.doRecording( "Add row", () =>\r
    {\r
        const row = grid.addRow();\r
\r
        grid.setText( row, 2, "ABC\\nBCD" );\r
        grid.setCell( row, 3, { icon: "type-boolean-return" } );\r
        grid.selectRow( row );\r
        grid.scrollInView( row, 0 );\r
    } );\r
};\r
btn_add_col.onclick = () =>\r
{\r
    grid.commandManager.doRecording( "Add column", () =>\r
    {\r
        const col = grid.addColumn();\r
\r
        grid.selectColumn( col );\r
        grid.scrollInView( 0, col );\r
    } );\r
};\r
\r
btn_insert_row.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Insert row", () =>\r
        {\r
            grid.insertRows( selection.top, 1 + selection.bottom - selection.top, 70 );\r
            grid.setRowTextColor( selection.top, "blue" );\r
        } );\r
    }\r
};\r
\r
btn_insert_col.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Insert column", () =>\r
        {\r
            grid.insertColumns( selection.left, 1 + selection.right - selection.left, 50 );\r
        } );\r
    }\r
};\r
\r
btn_copy.onclick = () => grid.copyToClipboard();\r
btn_paste.onclick = () => grid.pasteFromClipboard();\r
\r
btn_remove_row.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Remove row", () =>\r
        {\r
            grid.removeRows( selection.top, selection.bottom );\r
        } );\r
    }\r
};\r
\r
btn_remove_col.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Remove column", () =>\r
        {\r
            grid.removeColumns( selection.left, selection.right );\r
        } );\r
    }\r
};\r
\r
btn_auto_height.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Rows auto size", () =>\r
        {\r
            grid.autoSizeRows( selection.top, selection.bottom );\r
        } );\r
    }\r
};\r
\r
btn_auto_width.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Columns auto size", () =>\r
        {\r
            grid.autoSizeColumns( selection.left, selection.right );\r
        } );\r
    }\r
};\r
\r
btn_clear_rows.onclick = () => grid.clearRows();\r
\r
btn_task.onclick = () => grid.afterRender( () => console.log( "after render" ) );\r
\r
btn_merge.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Merge cell", () =>\r
        {\r
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );\r
        } );\r
    }\r
};\r
\r
btn_split.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Split cell", () =>\r
        {\r
            grid.splitCells( selection.top, selection.left );\r
        } );\r
    }\r
};\r
\r
btn_reset.onclick = () => grid = createGrid();\r
\r
btn_hide_rows.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Hide row", () =>\r
        {\r
            for( let r = selection.top; r <= selection.bottom; ++r )\r
            {\r
                grid.setRowVisible( r, false );\r
            }\r
        } );\r
    }\r
};\r
\r
btn_show_rows.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Show row", () =>\r
        {\r
            for( let r = selection.top; r <= selection.bottom; ++r )\r
            {\r
                grid.setRowVisible( r, true );\r
            }\r
        } );\r
    }\r
};\r
\r
btn_hide_columns.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Hide column", () =>\r
        {\r
            for( let c = selection.left; c <= selection.right; ++c )\r
            {\r
                grid.setColumnVisible( c, false );\r
            }\r
        } );\r
    }\r
};\r
\r
btn_col_span_disabled.onclick = () =>\r
{\r
    grid.setClipboardOptions( { colSpan: false } );\r
};\r
\r
btn_check_commands.onclick = () =>\r
{\r
    console.log( grid.commandManager );\r
};\r
\r
btn_freeze_rows.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( !selection ) return;\r
\r
    grid.freezeRows( selection.bottom );\r
};\r
\r
btn_unfreeze_rows.onclick = () => grid.freezeRows( 0 );\r
btn_unfreeze_cols.onclick = () => grid.freezeColumn( 0 );\r
\r
btn_freeze_cols.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( !selection ) return;\r
\r
    grid.freezeColumn( selection.right - 1 );\r
};\r
\r
chk_rowSpan.onclick = ( ev ) =>\r
{\r
    grid.setClipboardOptions( { rowSpan: ev.target.checked } );\r
};\r
\r
chk_colSpan.onclick = ( ev ) =>\r
{\r
    grid.setClipboardOptions( { colSpan: ev.target.checked } );\r
};`,d=`<div class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class='button' id='btn_add_row'>add row</button>\r
    <button class='button' id='btn_add_col'>add col</button>\r
    <button class='button' id='btn_insert_row'>insert row</button>\r
    <button class='button' id='btn_insert_col'>insert col</button>\r
    <button class='button' id='btn_remove_row'>remove row</button>\r
    <button class='button' id='btn_remove_col'>remove col</button>\r
    <button class='button' id='btn_auto_height'>auto height</button>\r
    <button class='button' id='btn_auto_width'>auto width</button>\r
    <button class='button' id='btn_clear_rows'>clear</button>\r
    <button class='button' id='btn_merge'>merge selection</button>\r
    <button class='button' id='btn_split'>split</button>\r
    <button class='button' id='btn_reset'>re-create</button>\r
    <button class='button' id='btn_hide_rows'>hide rows</button>\r
    <button class='button' id='btn_show_rows'>show rows</button>\r
    <button class='button' id='btn_hide_columns'>hide columns</button>\r
    <button class='button' id='btn_check_commands'>show commands</button>\r
    <button class='button' id='btn_col_span_disabled'>copy options</button>\r
    <button class='button' id='btn_copy'>copy</button>\r
    <button class='button' id='btn_paste'>paste</button>\r
    <button class='button' id='btn_task'>Do Task</button>\r
    <button class='button' id='btn_freeze_rows'>행 고정</button>\r
    <button class='button' id='btn_unfreeze_rows'>행 고정 해제</button>\r
    <button class='button' id='btn_freeze_cols'>열 고정</button>\r
    <button class='button' id='btn_unfreeze_cols'>열 고정 해제</button>\r
    <div class="flex align-items--center gap--md">\r
        <label>\r
            <input type="checkbox" id="chk_rowSpan" checked />\r
            <span>copyOptions.rowSpan</span>\r
        </label>\r
        <label>\r
            <input type="checkbox" id="chk_colSpan" checked />\r
            <span>copyOptions.colSpan</span>\r
        </label>\r
    </div>\r
</div>\r
<div id="ir_grid" style="height: 500px; width: 1300px"></div>`;function s(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid"}),n.jsx("p",{children:"API 사용 샘플"}),n.jsx(t,{fixedHeight:700,htmlRaw:d,code:l})]})}s.__docgenInfo={description:"",methods:[],displayName:"APIDemo"};const c=`// TEST
createGrid( "#ir_grid", 5000, 100 );
createGrid( "#ir_grid2", 100, 5000 );`,a=`import { IRGrid, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

globalThis.createGrid = ( elementId, colCount, rowCount ) =>
{
    const defaultRenderer = new IRGridDefaultCellRenderer();

    return new IRGrid( {
        contextElement: document.querySelector( elementId ),
        colHeader: {
            rowCount: 1,
            colCount: colCount,
            cellRenderer: ( row, col, data ) =>
            {
                data.text = col.toString();
                return defaultRenderer;
            },
        },
        body: {
            rowCount: rowCount - 1,
            cellRenderer: ( row, col, data ) =>
            {
                if( !data.text ) data.text = \`\${row},\${col}\`;

                return defaultRenderer;
            },
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: ( row, col, data ) =>
            {
                if( !data.text ) data.text = row.toString();
                return defaultRenderer;
            },
        },
    } );
};`,u=`.grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}
`,g=`<div class="grid-container">
    <div class="grid-item">
        <h4>Column 5,000개</h4>
        <div id="ir_grid" style="height: 500px; width: 100%"></div>
    </div>
    <div class="grid-item">
        <h4>Row 5,000개</h4>
        <div id="ir_grid2" style="height: 500px; width: 100%"></div>
    </div>
</div>`;function m(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid BulkData"}),n.jsx("p",{children:"데이터를 한 번에 대량으로 넣었을 때의 성능 확인 예제"}),n.jsx(t,{htmlRaw:g,css:u,code:a,exampleCode:c})]})}m.__docgenInfo={description:"",methods:[],displayName:"BulkData"};const b=`import {\r
    IRGrid,\r
    numberWithCommasFormatter,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 100,\r
    },\r
    defaultColumnCellFormat: {\r
        [1]: { formatter: numberWithCommasFormatter },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 4,\r
        defaultSize: 120,\r
    },\r
} );\r
\r
// for debugging\r
window.grid = grid;\r
\r
grid.setData( {\r
    col: 0,\r
    row: 1,\r
    data: [\r
        ["A", "10000.1000"],\r
        ["B", "-10000.1001002"],\r
        ["C", "999999999999999.9999999999"],\r
        ["D", "12345000"],\r
        ["E", "-00000010001000100"],\r
        ["F", "+300300"],\r
        ["G", "01234"],\r
    ],\r
} );\r
\r
`,p='<div id="ir_grid" style="height: 500px; width: 1300px"></div>';function _(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid"}),n.jsx(t,{htmlRaw:p,code:b})]})}_.__docgenInfo={description:"",methods:[],displayName:"CellFormatter"};const h=`import { IRSplitContainer } from "@innorules/ir-style";\r
import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 30,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
        maxSize: 9999,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),\r
    },\r
} );\r
\r
grid.setText( 0, 0, "A" );\r
\r
grid.onMountedRow = ( row ) => grid.autoSizeRow( row );\r
\r
grid.setColumnWidth( 0, 80 );\r
grid.setColumnWidth( 1, 80 );\r
grid.setColumnWidth( 2, 120 );\r
grid.setColumnWidth( 3, 120 );\r
grid.setColumnWidth( 4, 160 );\r
\r
btn1.onclick = () =>\r
{\r
    if( ir_grid.style.display )\r
        ir_grid.style.removeProperty( "display" );\r
    else\r
        ir_grid.style.display = "none";\r
};\r
\r
new IRSplitContainer( {\r
    elements: ["#split1", "#split2"],\r
} );\r
\r
globalThis.grid = grid;`,x=`import { IRGridColumnFillPlugin } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
grid.addPlugin( new IRGridColumnFillPlugin( {\r
    columnWeight: ["120px", 1, 1, 1, 2],\r
} ) );`,R=`<button id="btn1" class='button'>visible on/off</button>\r
<div class="flex background--light" style="height: 520px;">\r
    <div id="split1">\r
        <div id="ir_grid" style="height: 400px; width: 100%; display: none"></div>\r
    </div>\r
    <div id="split2"></div>\r
</div>`,w=[["/classes/_innorules_grid.IRGridColumnFillPlugin.html","IRGridColumnFillPlugin"]];function C(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid ColumnFill"}),n.jsxs("p",{children:["ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)",n.jsx("br",{}),"colHeader의 ",n.jsx("code",{children:"maxSize"}),"를 9999로 설정해야 열 크기 제한 문제가 없습니다."]}),n.jsx(o,{docList:w}),n.jsx(t,{fixedHeight:600,htmlRaw:R,code:h,exampleCode:x})]})}C.__docgenInfo={description:"",methods:[],displayName:"ColumnFill"};const f=`import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 5,\r
    },\r
    colHeader: {\r
        rowCount: 2,\r
        colCount: 8,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 2, "실행판단식", "조건식" ),\r
    },\r
} );\r
\r
grid.mergeCells( 2, 1, 3, 3 );\r
\r
globalThis.grid = grid;`,v=`import { IRContextMenu } from "@innorules/ir-style";

const menu = new IRContextMenu( {
    items: [
        {
            id: "search-rule",
            type: "command-button",
            label: "룰 찾기",
            icon: "ir-icon--search-rule",
        },
        {
            id: "div1",
            type: "divider",
        },
        {
            id: "rule-dropdown",
            type: "dropdown",
            label: "테이블 조작",
            children: [
                {
                    id: "add-row",
                    type: "command-button",
                    label: "행 추가",
                    icon: "ir-icon--row-add",
                },
            ],
        },
    ],
} );

grid.onContextMenu = ( ev, cell ) =>
{
    if( cell )
        grid.selectCell( cell.row, cell.col );

    menu.showAtPoint( ev.clientX, ev.clientY );
};

menu.onCommandButtonClick = ( { ev, item } ) =>
{
    if( item.id === "add-row" )
        grid.addRow();
};
`,I='<div id="ir_grid" style="height: 500px; width: 800px"></div>',y=[["/classes/_innorules_solid-ui.IRContextMenu.html","IRContextMenu"],["/classes/_innorules_grid.IRGrid.html#oncontextmenu","IRGrid.onContextMenu"]];function k(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid ContextMenu"}),n.jsx(o,{docList:y}),n.jsx(t,{htmlRaw:I,code:f,exampleCode:v})]})}k.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};const S=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: { rowCount: 0 },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 16,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
window.__grid = grid;\r
\r
function addRow()\r
{\r
    const rowNo = grid.addRow();\r
\r
    grid.cell( rowNo, 6 ).cellRenderer = checkboxCellRenderer;\r
\r
}\r
\r
Array.from( { length: 30 } ).forEach( addRow );\r
\r
grid.setText( 0, 1, "1" );\r
grid.setText( 0, 2, "2" );\r
grid.setText( 0, 3, "3" );\r
grid.setText( 0, 4, "4" );\r
grid.setText( 0, 5, "5" );\r
grid.setText( 0, 6, "6" );\r
\r
Array.from( { length: 24 } )\r
    .forEach( ( _, id ) =>\r
    {\r
        grid.setText( id + 1, 0, id + 1 );\r
        grid.setText( id + 1, 1, id );\r
        grid.setText( id + 1, 2, "text-" + id );\r
        grid.setText( id + 1, 3, "text2-" + id );\r
        grid.setText( id + 1, 4, "text3" + id );\r
        grid.setCell( id + 1, 5, { text: "String", icon: "add" } );\r
        grid.setCell( id + 1, 6, { label: "Check" } );\r
    } );\r
\r
grid.setText( 6, 6, "true" );\r
grid.mergeCells( 4, 3, 5, 4 );\r
\r
btn_exchange_row.onclick = () =>\r
{\r
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );\r
    const target = input_target.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );\r
\r
    grid.commandManager.doRecording( "Exchange Rows", () =>\r
    {\r
        grid.exchangeRows( source, target );\r
    } );\r
};\r
btn_exchange_col.onclick = () =>\r
{\r
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );\r
    const target = input_target.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );\r
\r
    grid.commandManager.doRecording( "Exchange Columns", () =>\r
    {\r
        grid.exchangeColumns( source, target );\r
    } );\r
};\r
\r
btn_merge.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Merge", () =>\r
        {\r
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );\r
        } );\r
    }\r
};\r
btn_freeze.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
    if( !selection ) return;\r
\r
    grid.freezeRows( selection.bottom );\r
};\r
\r
btn_freeze_col.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
    if( !selection ) return;\r
\r
    grid.freezeColumns( selection.left );\r
};\r
\r
globalThis.grid = grid;`,G=`import { IRGridExchangeByHeaderCellPlugin } from "@innorules/ir-style/lib/esm/grid.js";

const exchangePlugin = new IRGridExchangeByHeaderCellPlugin();
grid.addPlugin( exchangePlugin );

btn_on.onclick = () =>
{
    grid.addPlugin( exchangePlugin );
};
btn_off.onclick = () =>
{
    grid.removePlugin( exchangePlugin );
};`,M=`<div class="flex mb--lg" style=" align-items:center; column-gap: 4px">\r
    source:\r
    <div class="input" style="display: inline-block; width: 100px">\r
        <input id=" input_source" class="input__native" />\r
    </div>\r
    target:\r
    <div class="input" style=" display: inline-block; width: 100px">\r
        <input id=" input_target" class="input__native" />\r
    </div>\r
    <button type='button' id="btn_exchange_row" class='button'>행 교체</button>\r
    <button type='button' id="btn_exchange_col" class='button'>열 교체</button>\r
    <button type='button' id="btn_on" class='button ml--xl'>Drag On</button>\r
    <button type='button' id="btn_off" class='button'>Drag Off</button>\r
    <button type='button' id="btn_merge" class='button ml--xl'>셀 병합</button>\r
    <button type='button' id="btn_freeze" class='button'>행 고정</button>\r
    <button type='button' id="btn_freeze_col" class='button'>열 고정</button>\r
</div>\r
<div id="ir_grid" style=" height: 500px; width: 800px"></div>`,j=[["/classes/_innorules_grid.IRGridExchangeByHeaderCellPlugin.html","IRGridExchangeByHeaderCellPlugin"]];function P(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid"}),n.jsx("p",{children:"헤더를 드래그하여 셀 내용 교체할 수 있습니다."}),n.jsx(o,{docList:j}),n.jsx(t,{htmlRaw:M,code:S,exampleCode:G})]})}P.__docgenInfo={description:"",methods:[],displayName:"Exchange"};const T=`import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultCellRenderer = new IRGridDefaultCellRenderer();\r
const checkboxRenderer = new IRGridCheckboxRenderer( {} );\r
const datePickerRenderer = new IRGridDatePickerRenderer( {} );\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items: [\r
        { value: "1", text: "ABC" },\r
        { value: "2", text: "true" },\r
        { value: "3", text: "CCC" },\r
        { value: "4", text: "XXX" },\r
    ],\r
} );\r
\r
const customRenderer = ( row, col, data ) =>\r
{\r
    const element = document.createElement( "div" );\r
\r
    // IRGrid 기본 셀 패딩 적용을 위해 속성 설정\r
    element.setAttribute( "data-has-px", "" );\r
    element.setAttribute( "data-has-py", "" );\r
\r
    element.className = "ir_grid_cell_content";\r
    element.textContent = data.text;\r
\r
    return element;\r
};\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 30,\r
        cellRenderer( row, col, data )\r
        {\r
            if( col === 2 ) return checkboxRenderer;\r
            if( col === 3 ) return datePickerRenderer;\r
            if( col === 4 ) return selectRenderer;\r
            if( col === 5 ) return customRenderer( row, col, data );\r
\r
            return defaultCellRenderer;\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 30,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),\r
    },\r
} );\r
\r
grid.autoSizeColumn( 3 );\r
\r
grid.setText( 1, 1, "1" );\r
grid.setText( 2, 2, "1" );\r
grid.setText( 3, 2, "1" );\r
grid.setText( 4, 1, "1" );\r
grid.setText( 5, 5, "1" );\r
grid.setText( 1, 2, "1bc" );\r
grid.setText( 1, 3, "A" );\r
grid.setText( 1, 4, "a" );\r
grid.setText( 2, 4, "aBc" );\r
grid.setText( 3, 4, "ABC" );\r
grid.setText( 4, 4, "abc" );\r
\r
Array.from( { length: 15 } )\r
    .forEach( ( _, r ) =>\r
    {\r
        grid.setText( 1, 5 + r, "1" );\r
        grid.setText( r + 10, 1, "1" );\r
    } );\r
\r
globalThis.grid = grid;`,z=`const finder = grid.createFinder();\r
\r
function getOptions()\r
{\r
    return {\r
        ignoreCase: ignore_case.checked === false,\r
        matchAll: match_all.checked === true,\r
        text: search_text.value,\r
        area: Array.from( document.querySelectorAll( "input[name='area']" ) ).filter( ( input ) => input.checked )[0].value,\r
        direction: Array.from( document.querySelectorAll( "input[name='direction']" ) ).filter( ( input ) => input.checked )[0].value,\r
        customRange: { top: 0, bottom: 10, left: 0, right: 10 },\r
        hasHeaderRows: has_header_rows.checked,\r
        hasHeaderColumns: has_header_cols.checked,\r
    };\r
}\r
\r
btn.onclick = () =>\r
{\r
    const cell = finder.findNext( getOptions() );\r
\r
    if( cell )\r
    {\r
        grid.selectCell( cell.row, cell.col );\r
        grid.scrollInView( cell.row, cell.col );\r
    }\r
    else\r
        alert( "찾을 수 없음!" );\r
};\r
\r
btn_replace.onclick = () =>\r
{\r
    const cells = finder.getAllMatchedCell( getOptions() );\r
\r
    for( const cell of cells )\r
    {\r
        cell.text = cell.text.replace( new RegExp( search_text.value ), replace.value );\r
    }\r
};\r
\r
btn_cursor.onclick = () =>\r
{\r
    const cell = grid.activeCell;\r
\r
    if( !cell ) return;\r
\r
    finder.setCursor( cell.row, cell.col );\r
};\r
\r
`,D=`<div class='search'>\r
    <div class='search__input-group'>\r
        <div class='search__input-group-row'>\r
            <div class='form-item'>\r
                <div class='form-item__label width--xxs'>검색어</div>\r
                <div class='form-item__control'>\r
                    <div class='input'><input id="search_text" type="text" class='input__native'></div>\r
                </div>\r
            </div>\r
        </div>\r
        <div id='control_panel' class='search__input-group-row'>\r
            <div class='row gap-x--3xl mt--xxl'>\r
                <div class="row flex--column col col--none gap-y--xs">\r
                    <div class='col col--none checkbox'>\r
                        <label class='checkbox__wrapper'>\r
                            <input id='ignore_case' type="checkbox" class="checkbox__input">\r
                            <span class='checkbox__text'>대소문자 구분</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none checkbox'>\r
                        <label class='checkbox__wrapper'>\r
                            <input id="match_all" type="checkbox" class="checkbox__input">\r
                            <span class='checkbox__text'>전체 텍스트 일치</span>\r
                        </label>\r
                    </div>\r
                </div>\r
                <div class="row flex--column col col--none gap-y--xs">\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='area' value="all" checked>\r
                            <span class="radio__text">모두</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='area' value="selection">\r
                            <span class="radio__text">선택한 영역</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='area' value="selected-row">\r
                            <span class="radio__text">선택한 행</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='area' value="selected-col">\r
                            <span class="radio__text">선택한 열</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='area' value="custom">\r
                            <span class="radio__text">임의 범위(0,0 ~ 10,10)</span>\r
                        </label>\r
                    </div>\r
                </div>\r
                <div class="row flex--column col col--none gap-y--xs">\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='direction' value="by-rows" checked>\r
                            <span class="radio__text">행 우선</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none radio'>\r
                        <label class="radio__wrapper">\r
                            <input type="radio" class="radio__input" name='direction' value="by-columns">\r
                            <span class="radio__text">열 우선</span>\r
                        </label>\r
                    </div>\r
                </div>\r
                <div class="row flex--column col col--none gap-y--xs">\r
                    <div class='col col--none checkbox'>\r
                        <label class='checkbox__wrapper'>\r
                            <input id='has_header_rows' type="checkbox" class="checkbox__input">\r
                            <span class='checkbox__text'>헤더 행 포함</span>\r
                        </label>\r
                    </div>\r
                    <div class='col col--none checkbox'>\r
                        <label class='checkbox__wrapper'>\r
                            <input id='has_header_cols' type="checkbox" class="checkbox__input">\r
                            <span class='checkbox__text'>헤더 열 포함</span>\r
                        </label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="mt--xl">\r
        <button id='btn' type="button" class="button button--tertiary">다음 찾기</button>\r
        <button id='btn_cursor' type="button" class="button button--tertiary">Set Cursor</button>\r
    </div>\r
</div>\r
<div class="my--xs">\r
    <input id='replace' class='input__native' type="text" placeholder='변경할 내용' style="width: 200px">\r
    <button id="btn_replace" class='button'>모두 변경</button>\r
</div>\r
\r
<div id="ir_grid" style="height: 500px; width: 100%"></div>`,H=[["/classes/_innorules_grid.IRGrid.html#createfinder","IRGrid.createFinder"]];function A(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid Finder"}),n.jsx("p",{children:"Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다."}),n.jsx(o,{docList:H}),n.jsx(t,{htmlRaw:D,code:T,exampleCode:z})]})}A.__docgenInfo={description:"",methods:[],displayName:"Finder"};const E=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: { rowCount: 0 },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 16,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
window.__grid = grid;\r
\r
function addRow()\r
{\r
    const rowNo = grid.addRow();\r
\r
    grid.cell( rowNo, 6 ).cellRenderer = checkboxCellRenderer;\r
\r
}\r
\r
Array.from( { length: 30 } ).forEach( addRow );\r
\r
grid.setText( 0, 1, "1" );\r
grid.setText( 0, 2, "2" );\r
grid.setText( 0, 3, "3" );\r
grid.setText( 0, 4, "4" );\r
grid.setText( 0, 5, "5" );\r
grid.setText( 0, 6, "6" );\r
\r
Array.from( { length: 24 } )\r
    .forEach( ( _, id ) =>\r
    {\r
        grid.setText( id + 1, 0, id + 1 );\r
        grid.setText( id + 1, 1, id );\r
        grid.setText( id + 1, 2, "text-" + id );\r
        grid.setText( id + 1, 3, "text2-" + id );\r
        grid.setText( id + 1, 4, "text3" + id );\r
        grid.setCell( id + 1, 5, { text: "String", icon: "add" } );\r
        grid.setCell( id + 1, 6, { label: "Check" } );\r
    } );\r
\r
grid.setText( 6, 6, "true" );\r
grid.mergeCells( 4, 3, 5, 4 );\r
\r
btn_move_row.onclick = () =>\r
{\r
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );\r
    const target = parseInt( input_target.value, 10 );\r
\r
    grid.commandManager.doRecording( "Move Rows", () =>\r
    {\r
        grid.moveRows( source, target );\r
    } );\r
};\r
btn_move_col.onclick = () =>\r
{\r
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );\r
    const target = parseInt( input_target.value, 10 );\r
\r
    grid.commandManager.doRecording( "Move Columns", () =>\r
    {\r
        grid.moveColumns( source, target );\r
    } );\r
};\r
\r
btn_on.onclick = () =>\r
{\r
    grid.addPlugin( moveRowPlugin );\r
};\r
btn_off.onclick = () =>\r
{\r
    grid.removePlugin( moveRowPlugin );\r
};\r
btn_merge.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Merge", () =>\r
        {\r
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );\r
        } );\r
    }\r
};\r
btn_freeze.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
    if( !selection ) return;\r
\r
    grid.freezeRows( selection.bottom );\r
};\r
\r
btn_freeze_col.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
    if( !selection ) return;\r
\r
    grid.freezeColumns( selection.left );\r
};\r
\r
globalThis.grid = grid;`,N=`import {
    IRGridMoveColumnsPlugin,
    IRGridMoveRowsPlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const moveRowPlugin = new IRGridMoveRowsPlugin();
const moveColPlugin = new IRGridMoveColumnsPlugin();

grid.addPlugin( moveRowPlugin );
grid.addPlugin( moveColPlugin );`,$=`<div class="flex mb--lg" style="align-items: center; column-gap: 4px">\r
    source: <div class="input" style="display: inline-block; width: 100px">\r
        <input id="input_source" class="input__native" />\r
    </div>\r
    target: <div class="input" style="display: inline-block; width: 100px">\r
        <input id="input_target" class="input__native" />\r
    </div>\r
    <button type='button' id="btn_move_row" class='button'>행 이동</button>\r
    <button type='button' id="btn_move_col" class='button'>열 이동</button>\r
    <button type='button' id="btn_on" class='button ml--xl'>Row Drag On</button>\r
    <button type='button' id="btn_off" class='button'>Row Drag Off</button>\r
    <button type='button' id="btn_merge" class='button ml--xl'>셀 병합</button>\r
    <button type='button' id="btn_freeze" class='button'>행 고정</button>\r
    <button type='button' id="btn_freeze_col" class='button'>열 고정</button>\r
</div>\r
<div id="ir_grid" style="height: 500px; width: 800px"></div>`,F=[["/classes/_innorules_grid.IRGridMoveRowsPlugin.html","IRGridMoveRowsPlugin"],["/classes/_innorules_grid.IRGridMoveColumnsPlugin.html","IRGridMoveColumnsPlugin"]];function B(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid"}),n.jsx("p",{children:"헤더를 드래그하여 행/열을 이동할 수 있습니다."}),n.jsx(o,{docList:F}),n.jsx(t,{htmlRaw:$,code:E,exampleCode:N})]})}B.__docgenInfo={description:"",methods:[],displayName:"MoveAPI"};const O=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultCellRenderer = new IRGridDefaultCellRenderer();\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 30,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 20,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            if( col > 0 )\r
                data.text = col.toString();\r
\r
            return defaultCellRenderer;\r
        },\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),\r
    },\r
} );\r
\r
// 디버깅용 전역 변수화\r
window.grid = grid;\r
\r
btn_freeze_rows.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( !selection ) return;\r
\r
    grid.freezeRows( selection.bottom );\r
};\r
\r
btn_freeze_cols.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( !selection ) return;\r
\r
    grid.freezeColumns( selection.right );\r
};\r
\r
btn_merge.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Merge cell", () =>\r
        {\r
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );\r
        } );\r
    }\r
};\r
\r
btn_hide_rows.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Hide row", () =>\r
        {\r
            for( let r = selection.top; r <= selection.bottom; ++r )\r
            {\r
                grid.setRowVisible( r, false );\r
            }\r
        } );\r
    }\r
};\r
\r
btn_show_rows.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Show row", () =>\r
        {\r
            for( let r = selection.top; r <= selection.bottom; ++r )\r
            {\r
                grid.setRowVisible( r, true );\r
            }\r
        } );\r
    }\r
};\r
\r
btn_show_columns.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Show column", () =>\r
        {\r
            for( let c = selection.left; c <= selection.right; ++c )\r
            {\r
                grid.setColumnVisible( c, true );\r
            }\r
        } );\r
    }\r
};\r
\r
btn_hide_columns.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Hide column", () =>\r
        {\r
            for( let c = selection.left; c <= selection.right; ++c )\r
            {\r
                grid.setColumnVisible( c, false );\r
            }\r
        } );\r
    }\r
};\r
\r
globalThis.grid = grid;`,L=`import { IRGridOverflowPanelPlugin } from "@innorules/ir-style/lib/esm/grid.js";

grid.addPlugin( new IRGridOverflowPanelPlugin( {
    style: {
        height: 400,
        width: "100%",
    },
    className: "test-cls",
} ) );`,V=`<button type='button' id="btn_freeze_rows" class='button mb--sm'>행 고정</button>\r
<button type='button' id="btn_freeze_cols" class='button mb--sm'>열 고정</button>\r
<button type='button' id="btn_merge" class='button mb--sm'>셀 병합</button>\r
<button class='button' id='btn_hide_rows'>행 숨김</button>\r
<button class='button' id='btn_show_rows'>행 표시</button>\r
<button class='button' id='btn_hide_columns'>열 숨김</button>\r
<button class='button' id='btn_show_columns'>열 표시</button>\r
<br />\r
<div style="height: 400px; display: grid">\r
    <div id="ir_grid"></div>\r
</div>`,W=[["/classes/_innorules_grid.IRGridOverflowPanelPlugin.html","IRGridOverflowPanelPlugin"]];function U(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid Overflow Panel"}),n.jsx("p",{children:"IRGrid가 overflow될 경우 Grid의 스크롤 제어를 간편하게 할 수 있는 편의 기능을 제공한다."}),n.jsx(o,{docList:W}),n.jsx(t,{fixedHeight:550,htmlRaw:V,code:O,exampleCode:L})]})}U.__docgenInfo={description:"",methods:[],displayName:"OverflowPanelPlugin"};const X=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridRadioCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultCellRenderer = new IRGridDefaultCellRenderer();\r
const radioCellRenderer = new IRGridRadioCellRenderer( {} );\r
const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 250,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            if( col === 5 ) return radioCellRenderer;\r
            if( col === 6 ) return checkboxCellRenderer;\r
\r
            return defaultCellRenderer;\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 7,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
// 디버깅용 전역 변수화\r
window.grid = grid;\r
\r
grid.setCell( 0, 1, { text: "Number" } );\r
grid.setCell( 0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );\r
grid.setCell( 0, 3, { text: "Text", icon: "type-string" } );\r
grid.setCell( 0, 4, { text: "Text", icon: "type-string" } );\r
grid.setCell( 0, 5, { text: "Radio" } );\r
grid.setCell( 0, 6, { text: "체크박스" } );\r
\r
const rand = [\r
    "123",\r
    "12345",\r
    "ABCDE",\r
    "XYZ",\r
];\r
\r
Array.from( { length: grid.getRowCount() - 1 } )\r
    .forEach( ( _, id ) =>\r
    {\r
        grid.setText( id + 1, 1, \`\${rand[0][Math.floor( Math.random() * rand[0].length )]}\` );\r
        grid.setText( id + 1, 2, Math.floor( Math.random() * 10000 ).toString() );\r
        grid.setText( id + 1, 3, \`\${rand[2][Math.floor( Math.random() * rand[2].length )]}\` );\r
        grid.setText( id + 1, 4, Math.floor( Math.random() * 10000 ).toString( 16 ) );\r
\r
        grid.setCell( id + 1, 5, { label: "Radio" } );\r
        grid.setCell( id + 1, 6, { label: "Check" } );\r
    } );\r
\r
grid.setData( {\r
    row: 25, col: 1,\r
    data: [\r
        ["-100"],\r
        ["-20"],\r
        ["0"],\r
        ["-200"],\r
        ["-999999"],\r
        ["bb"],\r
        ["ba"],\r
        ["a"],\r
        ["cc"],\r
        ["zy"],\r
        ["zi"],\r
    ],\r
} );\r
\r
const rowCnt = grid.getRowCount();\r
\r
for( let i = 1; i < rowCnt; i++ )\r
    grid.setText( i, 0, i.toString() );\r
\r
globalThis.grid = grid;`,q=`import {\r
    createIRGridColumnSortManager,\r
    createInferenceSortHandler,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const sortHandler = createInferenceSortHandler( { grid } );\r
\r
btn_sort.onclick = () =>\r
{\r
    const start = parseInt( input_start_row.value, 10 );\r
    const end = parseInt( input_end_row.value, 10 );\r
    const column = parseInt( input_column.value, 10 );\r
\r
    sortHandler.sortColumn( column, "ASC", start, end );\r
};\r
\r
const sortManager = createIRGridColumnSortManager( grid );\r
sortManager.overrideColumnClickEvent();\r
\r
btn_reset_sort.onclick = () =>\r
{\r
    grid.sort( () => 0, "ASC" );\r
    sortManager.clearSortOrder();\r
};\r
\r
btn_print.onclick = () =>\r
{\r
    const rows = sortManager.getSnapshotRows();\r
\r
    console.log( rows[0].getCell( 1 ).text );\r
    console.log( rows[1].getCell( 1 ).text );\r
    console.log( rows[2].getCell( 1 ).text );\r
};\r
\r
btn_sort_columns.onclick = () =>\r
{\r
    sortManager.clearSortOrder();\r
    sortManager.sortColumns(\r
        [1, "ASC"],\r
        [2, "DESC"],\r
        [3, "ASC"],\r
    );\r
};\r
\r
chk_toggle_column_click.onchange = () =>\r
{\r
    sortManager.enabledColumnClick = chk_toggle_column_click.checked;\r
};`,Y=`<button type="button" id="btn_sort" class="button mb--sm">정렬</button>\r
<span>정렬 Column</span>\r
<div class="input" style="display: inline-block; width: 100px">\r
    <input type=" text" class="input__native" id="input_column" value="2" />\r
</div>\r
<span>시작 Row</span>\r
<div class="input" style="display: inline-block; width: 100px">\r
    <input type="number" class="input__native" id="input_start_row" value="5" />\r
</div>\r
<span>종료 Row</span>\r
<div class="input" style="display: inline-block; width: 100px">\r
    <input type="number" class="input__native" id="input_end_row" value="12" />\r
</div>\r
<button type='button' id="btn_reset_sort" class='button mb--sm'>정렬 초기화</button>\r
<button type='button' id="btn_print" class='button'>스냅샷 출력</button>\r
<button type='button' id="btn_sort_columns" class='button'>다중 정렬</button>\r
<label>\r
    <input type='checkbox' id="chk_toggle_column_click" checked />열 클릭 활성화\r
</label>\r
\r
<br />\r
<div id="ir_grid" style="height: 500px; width: 800px"></div>`,J=[["/variables/_innorules_grid.createIRGridColumnSortManager.html","createIRGridColumnSortManager"],["/variables/_innorules_grid.createInferenceSortHandler.html","createInferenceSortHandler"]];function Z(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid"}),n.jsx("p",{children:"열을 클릭하여 정렬 실행"}),n.jsx(o,{docList:J}),n.jsx(t,{htmlRaw:Y,exampleCode:q,code:X})]})}Z.__docgenInfo={description:"",methods:[],displayName:"Sort"};const K=`import { getThemeStore } from "@innorules/ir-style";\r
import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
getThemeStore().setStoreValue( "grid.paddingTop", 2 );\r
getThemeStore().setStoreValue( "grid.paddingBottom", 2 );\r
getThemeStore().setStoreValue( "grid.paddingLeft", 6 );\r
getThemeStore().setStoreValue( "grid.paddingRight", 6 );\r
getThemeStore().setStoreValue( "grid.defaultRowHeight", 20 );\r
getThemeStore().setStoreValue( "grid.forceRenderLeftCol", 5 );\r
getThemeStore().setStoreValue( "grid.forceRenderRightCol", 10 );\r
\r
const checkBoxRenderer = new IRGridCheckboxRenderer( {} );\r
const defaultRenderer = new IRGridDefaultCellRenderer( {} );\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items: [{ text: "A", value: "A" }],\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 150,\r
        maxSize: 9999,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),\r
    },\r
    body: {\r
        rowCount: 30,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            if( col === 1 ) return checkBoxRenderer;\r
            if( col === 2 ) return selectRenderer;\r
\r
            return defaultRenderer;\r
        },\r
    },\r
    defaultColumnCellFormat: {\r
        ["body_1"]: { icon: "save" },\r
        ["body_2"]: { text: "A" },\r
    },\r
} );\r
\r
grid.setCell( 0, 1, { icon: "ir-icon--save", text: "아이콘" } );\r
grid.setColumnWidth( 0, 80 );\r
grid.setColumnWidth( 1, 80 );\r
grid.setColumnWidth( 2, 120 );\r
grid.setColumnWidth( 3, 120 );\r
grid.setColumnWidth( 4, 160 );`,Q='<div id="ir_grid" style="height: 500px"></div>';function nn(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid Configuration"}),n.jsx("p",{children:"Grid 기본 내부 패딩을 조절할 수 있습니다."}),n.jsx(t,{fixedHeight:600,htmlRaw:Q,code:K})]})}nn.__docgenInfo={description:"",methods:[],displayName:"ThemeConfig"};const rn=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridDefaultCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkRenderer = new IRGridCheckboxRenderer( {} );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const datePickerRenderer = new IRGridDatePickerRenderer( {} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 10000,\r
        cellRenderer: ( _row, col, _data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 3:\r
                    return datePickerRenderer;\r
                case 4:\r
                    return checkRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 10,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
    defaultColumnCellFormat: {\r
        all: { draggable: true },\r
        [0]: { disabled: false },\r
    },\r
} );\r
\r
grid.setRowInfo( 0, {\r
    textData: ["No", "Name", "Age", "Date", "Checked", "Random Number"],\r
} );\r
\r
const startDate = new Date( "2025-01-01" );\r
\r
Array.from( { length: grid.getRowCount() - 1 } )\r
    .forEach( ( _, id ) =>\r
    {\r
\r
        grid.setRowInfo( id + 1, {\r
            textData: [\r
                id + 1,\r
                getRandomString(),\r
                \`\${Math.floor( Math.random() * 100 )}\`,\r
                startDate.toISOString().split( "T" )[0],\r
                Math.random() > 0.5 ? "true" : "",\r
                Math.floor( Math.random() * 10000 ).toString(),\r
            ],\r
        } );\r
\r
        startDate.setDate( startDate.getDate() + 1 );\r
    } );\r
\r
grid.autoSizeColumns( 0, 6 );\r
\r
function getRandomString( length = 3 )\r
{\r
    const names = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";\r
\r
    let result = "";\r
    for( let i = 0; i < length; i++ )\r
    {\r
        const idx = Math.floor( Math.random() * names.length );\r
        result += names[idx];\r
    }\r
    return result;\r
}\r
\r
( function()\r
{\r
    new IRGrid( {\r
        contextElement: ir_grid2,\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 5,\r
        },\r
        rowHeader: { colCount: 1 },\r
    } );\r
} )();\r
\r
globalThis.grid = grid;\r
`,en=`import {\r
    IRGridMultiSelectCellPlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const multiSelectCellPlugin = new IRGridMultiSelectCellPlugin( {\r
    onCopyFail: () => alert( "선택한 셀 범위가 유효하지 않아 복사할 수 없습니다." ),\r
} );\r
\r
grid.addPlugin( multiSelectCellPlugin );\r
\r
const multiSelectCellPluginAPI = multiSelectCellPlugin.pluginAPI;\r
\r
grid.onSelectChanged = () =>\r
{\r
    console.log( "Selected Cells:", multiSelectCellPluginAPI.getSelectedCells() );\r
};\r
\r
btn_remove_plg.onclick = () =>\r
{\r
    grid.removePlugin( multiSelectCellPlugin );\r
};`,tn=`<div>\r
    <button id="btn_remove_plg" class="button">플러그인 제거</button>\r
    <div class="flex gap-x--3xl mt--lg"\r
        style="height: 500px">\r
        <div id="ir_grid"  style="width: 700px"></div>\r
        <div id="ir_grid2" class="flex--1"></div>\r
    </div>\r
</div>`,on=[["/classes/_innorules_grid.IRGridMultiSelectCellPlugin.html","IRGridMultiSelectCellPlugin"]];function ln(){return n.jsxs(r,{children:[n.jsx(e,{children:"MultiSelectCellPlugin"}),n.jsx(i,{children:"ir-style@^2.21.0"}),n.jsxs("p",{children:["IRGrid에 다중 셀 선택 기능을 제공한다.",n.jsx("br",{}),n.jsx("b",{children:"※ 단독 사용은 불가능하며 반드시 IRGridMouseCellSelectorPlugin과 함께 사용"})]}),n.jsxs("p",{children:[n.jsx("b",{children:"복사/붙여넣기 참고 사항"}),n.jsx("br",{}),"- 복사와 붙여넣기는 선택한 셀들이 행과 열 모두에서 동일한 개수일 때만 동작한다. (잘못된 영역인 경우 경고 메시지 출력)",n.jsx("br",{}),"- 붙여넣기 시 선택한 셀들은 빈칸 없이 연속된 형태로 붙어서 표시된다.",n.jsx("br",{}),"※ 엑셀의 다중 셀 선택 복사/붙여넣기 동작 참고",n.jsx("br",{})]}),n.jsx(o,{docList:on}),n.jsx(t,{htmlRaw:tn,exampleCode:en,code:rn})]})}ln.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCellPlugin"};const dn=`import {\r
    IRGrid,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 10,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
        minSize: 80,\r
        maxSize: 500,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        minSize: 20,\r
        maxSize: 200,\r
    },\r
} );\r
\r
grid.setText( 0, 1, "min: 200, max: 300" );\r
grid.setText( 0, 2, "min: 10, max: 150" );\r
grid.setText( 1, 0, "min: 50, max: 200" );\r
grid.setText( 2, 0, "min: 10, max: 20" );\r
\r
globalThis.grid = grid;`,sn=`grid.setColumnMaxSize( 1, 300 );
grid.setColumnMinSize( 1, 200 );

grid.setColumnMaxSize( 2, 150 );
grid.setColumnMinSize( 2, 10 );

grid.setRowMaxSize( 1, 200 );
grid.setRowMinSize( 1, 50 );

grid.setRowMaxSize( 2, 20 );
grid.setRowMinSize( 2, 10 );

grid.autoSizeColumns( 0, 2 );`,cn='<div id="ir_grid" style="height: 500px; width: 100%"></div>';function an(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRGrid 각 행/열 Min/Max Size 조정"}),n.jsx(i,{children:"ir-style@^2.22.1"}),n.jsx("p",{children:"아래 IRGrid API를 이용하여 각 행/열의 최소/최대 사이즈를 지정할 수 있습니다."}),n.jsxs("ul",{children:[n.jsxs("li",{className:"ir-h-[15px]",children:[n.jsx("a",{className:"text-link",target:"_blank",href:"http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setrowminsize",rel:"noreferrer",children:"setRowMinSize"}),": 특정 행에 최소 높이 지정"]}),n.jsxs("li",{className:"ir-h-[15px]",children:[n.jsx("a",{className:"text-link",target:"_blank",href:"http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setrowmaxsize",rel:"noreferrer",children:"setRowMaxSize"}),": 특정 행에 최대 높이 지정"]}),n.jsxs("li",{className:"ir-h-[15px]",children:[n.jsx("a",{className:"text-link",target:"_blank",href:"http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setcolumnminsize",rel:"noreferrer",children:"setColumnMinSize"}),": 특정 열에 최소 높이 지정"]}),n.jsxs("li",{className:"ir-h-[15px]",children:[n.jsx("a",{className:"text-link",target:"_blank",href:"http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setcolumnmaxsize",rel:"noreferrer",children:"setColumnMaxSize"}),": 특정 열에 최대 높이 지정"]})]}),n.jsx(t,{htmlRaw:cn,code:dn,exampleCode:sn})]})}an.__docgenInfo={description:"",methods:[],displayName:"MinMax"};const _n={title:"JS Components/IRGrid"},hn=["APIDemo","BulkData","CellFormatter","ColumnFill","ContextMenu","ExchangeAPI","Finder","MoveAPI","OverflowPanelPlugin","Sort","ThemeConfig","MultiSelectCellPlugin","MinMax"];export{s as APIDemo,m as BulkData,_ as CellFormatter,C as ColumnFill,k as ContextMenu,P as ExchangeAPI,A as Finder,an as MinMax,B as MoveAPI,ln as MultiSelectCellPlugin,U as OverflowPanelPlugin,Z as Sort,nn as ThemeConfig,hn as __namedExportsOrder,_n as default};
