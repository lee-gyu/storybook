import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as e,L as t,V as o}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const l=`import {\r
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
    ev.target instanceof HTMLButtonElement &&\r
        grid.focus();\r
} );\r
\r
function createGrid()\r
{\r
    const grid = new IRGrid( {\r
        contextElement: ir_grid,\r
        // copyOptions: { rowSpan: true, colSpan: true, skipFiltered: true },\r
        // pasteOptions: { rowSpan: true, colSpan: true, skipFiltered: true },\r
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
                switch( col )\r
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
};`,i=`<div class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
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
<div id="ir_grid" style="height: 500; width: 1300"></div>`;function d(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"API 사용 샘플"}),r.jsx(t,{fixedHeight:700,htmlRaw:i,code:l})]})}d.__docgenInfo={description:"",methods:[],displayName:"APIDemo"};const c=`import {\r
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
        colCount: 15,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 2, "실행판단식", "조건식" ),\r
    },\r
} );\r
\r
window.grid = grid;\r
\r
grid.onSelectCell = ( cell ) => console.log( "Clicked! row: " + cell.row + ", col: " + cell.col );\r
\r
Array.from( { length: 20 }, () => grid.addRow() );\r
\r
grid.mergeCells( 0, 0, 1, 0 );\r
grid.mergeCells( 0, 1, 0, 3 );\r
grid.mergeCells( 0, 4, 1, 4 );\r
\r
grid.setText( 0, 1, "리턴 선택(디폴트)" );\r
grid.setText( 2, 1, "폰트" );\r
grid.setText( 1, 1, "설명" );\r
grid.setText( 1, 2, "[나이]" );\r
grid.setText( 1, 3, "[결과]" );\r
grid.setText( 2, 2, "10" );\r
grid.setText( 2, 3, "10000" );\r
\r
grid.setCell( 1, 1, { isError: true } );\r
grid.setCell( 1, 3, { isError: true } );\r
grid.setCell( 2, 1, { isError: true, fontSize: "20px" } );\r
grid.setCell( 2, 2, { isError: true } );\r
grid.setCell( 2, 3, { isError: true } );\r
grid.setCell( 1, 2, { icon: "type-boolean-return", isError: true } );\r
grid.setCell( 3, 2, { icon: "type-boolean-return", iconColor: "rgb(255, 0, 0)" } );\r
grid.setCell( 3, 3, { text: "10,000 (잠금)", editable: false } );\r
\r
grid.setCell( 4, 1, { text: "only memo", hasMemo: true, memo: "메모" } );\r
grid.setCell( 4, 2, { text: "memo & err", hasMemo: true, memo: "메모 & 에러", isError: true } );\r
grid.setCell( 4, 4, { hasMemo: true, isError: true, memo: "에러 메모 테스트", memoIntent: "error" } );\r
\r
grid.mergeCells( 2, 1, 3, 1 );\r
grid.mergeCells( 4, 1, 4, 3 );\r
grid.mergeCells( 5, 2, 6, 4 );\r
\r
grid.setColumnWidth( 4, 150 );\r
grid.setColumnWidth( 5, 70 );\r
grid.setRowHeight( 2, 100 );\r
grid.addColumn();\r
grid.addColumn( 100 );\r
\r
grid.onEditKeyDown = ( ev, row, col, data ) =>\r
{\r
    console.log( \`Cell Key Events row : \${row}, col: \${col}\` );\r
    console.log( data );\r
    console.log( ev );\r
};\r
\r
// 마운트된 후 자동 높이 조정\r
grid.onMountedRow = ( row ) => grid.autoSizeRow( row );`,s='<div id="ir_grid" style="height: 500; width: 800"></div>';function a(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsxs("p",{children:[r.jsx("code",{children:"Grid"}),"형태로 사용자 상호작용을 처리하는 UI 컴포넌트입니다.",r.jsx("br",{}),r.jsx("code",{children:"cellRenderer"}),"를 이용하여 셀 출력 내용을 지정합니다."]}),r.jsx(t,{htmlRaw:s,code:c})]})}a.__docgenInfo={description:"",methods:[],displayName:"Basic"};const u=`import { IRGrid, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
const grid = new IRGrid( {\r
    contextElement: document.querySelector( "#ir_grid" ),\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5000,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            data.text = col.toString();\r
            return defaultRenderer;\r
        },\r
    },\r
    body: {\r
        rowCount: 100,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            if( !data.text )\r
                data.text = \`\${row},\${col}\`;\r
            return defaultRenderer;\r
        },\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            data.text = row.toString();\r
            return defaultRenderer;\r
        },\r
    },\r
} );`,g='<div id="ir_grid" style="height: 500; width: 800"></div>';function m(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid 5,000개 컬럼"}),r.jsx(t,{htmlRaw:g,code:u})]})}m.__docgenInfo={description:"",methods:[],displayName:"BulkColumns"};const R=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridSelectCellRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkBoxRenderer = new IRGridCheckboxRenderer( { } );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items: [\r
        { value: "kr", text: "한국어" },\r
        { value: "en", text: "English" },\r
        { value: "sp", text: "Spanish" },\r
    ],\r
} );\r
const datePickerRenderer = new IRGridDatePickerRenderer( {} );\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 2000,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
\r
            switch( col )\r
            {\r
                case 2:\r
                    return checkBoxRenderer;\r
                case 3:\r
                    return selectRenderer;\r
                case 4:\r
                    return datePickerRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    defaultColumnCellFormat: {\r
        all: { verticalAlign: "middle" },\r
        [2]: { horizontalAlign: "center" },\r
        [5]: { editable: false },\r
        [6]: { disabled: true },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 9,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 2,\r
        defaultSize: 50,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch( col )\r
            {\r
                case 0:\r
                    return rowNoRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
} );`,b='<div id="ir_grid" style="height: 500; width: 1300"></div>';function w(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:b,code:R})]})}w.__docgenInfo={description:"",methods:[],displayName:"BulkRows"};const C=`import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 0,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 50,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
window.grid = grid;\r
\r
const BULK_ROWS = 1000;\r
\r
for( let j = 1; j < grid.getColCount(); j++ )\r
{\r
    grid.setText( 0, j, String( j ) );\r
}\r
\r
function bulkInsert1()\r
{\r
    for( let i = 0; i < BULK_ROWS; i++ )\r
    {\r
        const rowNo = grid.addRow();\r
\r
        grid.setText( rowNo, 0, String( i + 1 ) );\r
\r
        for( let j = 1; j < grid.getColCount(); j++ )\r
        {\r
            grid.setText( rowNo, j, i + "," + j );\r
        }\r
    }\r
}\r
\r
function bulkInsert2()\r
{\r
    for( let i = 0; i < BULK_ROWS; i++ )\r
    {\r
        const rowNo = grid.addRow();\r
\r
        grid.setRowInfo( rowNo, {\r
            textData: rowArrayBuffer( rowNo, grid.getColCount() ),\r
        } );\r
    }\r
}\r
\r
function timeElapsed( func )\r
{\r
    const start = performance.now();\r
    func();\r
    const end = performance.now();\r
\r
    console.log( end - start );\r
\r
}\r
\r
btn_bulk.onclick = () =>\r
{\r
    timeElapsed( bulkInsert1 );\r
};\r
\r
function rowArrayBuffer( rowNo, size )\r
{\r
    const arr = [String( rowNo )];\r
\r
    for( let j = 1; j < size; j++ )\r
    {\r
        arr.push( rowNo + "," + j );\r
    }\r
\r
    return arr;\r
}\r
\r
btn_bulk2.onclick = () =>\r
{\r
    timeElapsed( bulkInsert2 );\r
};\r
\r
btn_clear.onclick = () => grid.clearRows();\r
\r
btn_hide.onclick = () =>\r
{\r
    grid.setRowVisibleBulk( 1, Array( grid.getRowCount() - 1 ).fill( false ) );\r
};\r
\r
btn_visible.onclick = () =>\r
{\r
    grid.setRowVisibleBulk( 1, Array( grid.getRowCount() - 1 ).fill( true ) );\r
};`,h=`<div class="mb--sm">\r
    <button id="btn_bulk" class="button">Append Bulk Data (Slow)</button>\r
    <button id="btn_bulk2" class="button">Append Bulk Data (Improved)</button>\r
    <button id="btn_clear" class="button">Clear</button>\r
    <button id="btn_hide" class="button">all hide</button>\r
    <button id="btn_visible" class="button">all visible</button>\r
</div>\r
<div id="ir_grid" style="height: 500; width: '100%'"></div>`;function x(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:h,code:C})]})}x.__docgenInfo={description:"",methods:[],displayName:"BulkData"};const p=`import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridSingleCellDragPlugin,\r
    IRGridCellDropPlugin,\r
    IRGridDefaultKeyPlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
( function()\r
{\r
    const grid = new IRGrid( {\r
        contextElement: ir_grid1,\r
        body: {\r
            rowCount: 32,\r
        },\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 16,\r
            cellRenderer: ( row, col, data ) =>\r
            {\r
                if( col > 1 )\r
                    data.text = col.toString();\r
\r
                return defaultRenderer;\r
            },\r
        },\r
        rowHeader: {\r
            colCount: 1,\r
            cellRenderer: ( row, col, data ) =>\r
                col === 0 ? rowNoRenderer : defaultRenderer,\r
        },\r
        plugins: [\r
            new IRGridSingleCellDragPlugin(),\r
            new IRGridCellDropPlugin(),\r
            new IRGridDefaultKeyPlugin( {} ),\r
        ],\r
        defaultColumnCellFormat: {\r
            all: { draggable: true },\r
            // 1번 열 drag 기능 비활성화\r
            [1]: { draggable: false },\r
        },\r
    } );\r
\r
    grid.onDropOnCell = ( row, col, ev ) =>\r
    {\r
        const data = ev.dataTransfer.getData( "application/json" );\r
        const json = JSON.parse( data );\r
\r
        grid.commandManager.doRecording( "Drag-Drop", () =>\r
        {\r
            grid.setText( row, col, json.name );\r
            grid.setObject( row, col, json );\r
        } );\r
    };\r
\r
    grid.mergeCells( 2, 2, 3, 3 );\r
\r
    grid.setText( 0, 1, "Drag 막힘" );\r
    grid.setText( 2, 2, "Drag 활성화 셀" );\r
    grid.setObject( 2, 2, { name: "Drag 활성화 셀" } );\r
\r
} )();\r
\r
( function()\r
{\r
    const grid = new IRGrid( {\r
        contextElement: ir_grid2,\r
        body: {\r
            rowCount: 32,\r
        },\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 16,\r
            cellRenderer: ( row, col, data ) =>\r
            {\r
                if( col !== 0 )\r
                    data.text = col.toString();\r
\r
                return defaultRenderer;\r
            },\r
        },\r
        rowHeader: {\r
            colCount: 1,\r
            cellRenderer: ( row, col, data ) =>\r
                col === 0 ? rowNoRenderer : defaultRenderer,\r
        },\r
        plugins: [\r
            new IRGridSingleCellDragPlugin(),\r
            new IRGridCellDropPlugin(),\r
            new IRGridDefaultKeyPlugin( {} ),\r
        ],\r
        defaultColumnCellFormat: {\r
            all: { draggable: true },\r
        },\r
    } );\r
\r
    grid.onDropOnCell = ( row, col, ev ) =>\r
    {\r
        const data = ev.dataTransfer.getData( "application/json" );\r
        const json = JSON.parse( data );\r
\r
        grid.commandManager.doRecording( "Drag-Drop", () =>\r
        {\r
            grid.setText( row, col, json.name );\r
            grid.setObject( row, col, json );\r
        } );\r
    };\r
\r
    grid.mergeCells( 1, 1, 2, 3 );\r
\r
} )();`,f=`<div style="\r
    display: flex;\r
    flex-direction: row;\r
    height: 500px;\r
    column-gap: 8px;">\r
    <div id="ir_grid1" style="flex: 1"></div>\r
    <div id="ir_grid2" style="flex: 1"></div>\r
</div>`;function _(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsxs("p",{children:[r.jsx("code",{children:"SingleCellDragPlugin"}),"을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다."]}),r.jsxs("p",{children:["셀의 ",r.jsx("code",{children:"draggable"})," 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다."]}),r.jsx(t,{htmlRaw:f,code:p})]})}_.__docgenInfo={description:"",methods:[],displayName:"CellDrag"};const v=`import {\r
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
`,I='<div id="ir_grid" style="height: 500; width: 1300"></div>';function y(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:I,code:v})]})}y.__docgenInfo={description:"",methods:[],displayName:"CellFormatter"};const k=`import {\r
    IRGrid,\r
    IRGridButtonRenderer,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridDefaultCellIconButtonRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridProgressRenderer,\r
    IRGridRadioCellRenderer,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkBoxRenderer = new IRGridCheckboxRenderer( {\r
    onCheckboxClick: ( row, col, checked ) => console.log( row + "," + col + ":" + checked ),\r
} );\r
\r
const radioRenderer = new IRGridRadioCellRenderer( {\r
    onRadioClick: ( row, col ) => console.log( row + "," + col ),\r
} );\r
\r
const items = [\r
    { value: "kr", text: "한국어" },\r
    { value: "en", text: "English" },\r
    { value: "sp", text: "Spanish" },\r
    { value: "en2", text: "English 길이를 길게" },\r
    { value: "en3", text: "English3\\n길게길게\\n3줄" },\r
    { value: "en4", text: "English4 English4 English4 English4 English4 " },\r
    { value: "en5", text: "English5" },\r
    { value: "en7", text: "English6" },\r
    { value: "en8", text: "English7" },\r
    { value: "en9", text: "English8" },\r
    { value: "en11", text: "English9" },\r
];\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items,\r
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>\r
    {\r
        console.log( row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText );\r
    },\r
    allowCustomText: true,\r
    customDisplayTextFunc: ( value, text, custom ) =>\r
    {\r
        if( !custom ) return text;\r
        if( text === "" ) return "";\r
\r
        return [ "(X)", text ].join( " " );\r
    },\r
    showErrorIfCustomText: true,\r
} );\r
\r
const selectRenderer2 = new IRGridSelectCellRenderer( {\r
    items,\r
    allowEdit: true,\r
} );\r
\r
const datePickerRenderer = new IRGridDatePickerRenderer( {\r
    onDateClick: ( row, col, text ) => console.log( text ),\r
    minDate: new Date(),\r
} );\r
\r
const progressRenderer = new IRGridProgressRenderer( {} );\r
const progressRenderer2 = new IRGridProgressRenderer( { min: 0, max: 30, defaultIntent: "danger" } );\r
const buttonRenderer = new IRGridButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeRow( row );\r
    },\r
    defaultIcon: "add",\r
} );\r
\r
const iconDividerButtonRenderer = new IRGridButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeRow( row );\r
    },\r
    iconDividerStyle: true,\r
    defaultLabel: "버튼 레이블",\r
    defaultIcon: "ellipsis",\r
} );\r
\r
const iconDividerButtonRenderer2 = new IRGridButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeRow( row );\r
    },\r
    iconDividerStyle: true,\r
    defaultLabel: "조건 룰",\r
    defaultIcon: "search-rule",\r
} );\r
\r
const outlineButtonRenderer = new IRGridButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        console.log( col );\r
        grid.autoSizeColumn( col );\r
    },\r
    defaultLabel: "자동부여",\r
    outlineStyle: true,\r
} );\r
\r
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeColumn( col );\r
    },\r
} );\r
\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
\r
checkBoxRenderer.onUpdateCell = ( row, col, props ) =>\r
{\r
    console.log( "update checkbox cell!", row, col );\r
};\r
\r
selectRenderer.onUpdateCell = ( row, col, props ) =>\r
{\r
    console.log( "update select cell!", row, col );\r
};\r
\r
radioRenderer.onUpdateCell = ( row, col, props ) =>\r
{\r
    console.log( "update radio cell!", row, col );\r
};\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 0,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
\r
            switch( col )\r
            {\r
                case 2:\r
                    return checkBoxRenderer;\r
                case 3:\r
                    return selectRenderer;\r
                case 4:\r
                    return datePickerRenderer;\r
                case 5:\r
                    return progressRenderer;\r
                case 6:\r
                    return outlineButtonRenderer;\r
                case 7:\r
                    return progressRenderer2;\r
                case 8:\r
                    return buttonRenderer;\r
                case 9:\r
                    return radioRenderer;\r
                case 10:\r
                    return iconButtonRenderer;\r
                case 11:\r
                    return iconDividerButtonRenderer;\r
                case 12:\r
                    return iconDividerButtonRenderer2;\r
                case 13:\r
                    return selectRenderer2;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    defaultColumnCellFormat: {\r
        all: { verticalAlign: "middle" },\r
        [2]: { horizontalAlign: "center" },\r
        [4]: { memo: "메모", hasMemo: true },\r
        [5]: { editable: false },\r
        ["body_6"]: { disabled: true },\r
        // 7 ~ 10열은 테스트 동작을 위해 지우는 동작이 있으므로 주의\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 12,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 2,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch( col )\r
            {\r
                case 0:\r
                    return rowNoRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
} );\r
\r
// for debugging\r
window.grid = grid;\r
\r
btn_check_commands.onclick = () =>\r
{\r
    console.log( grid.commandManager );\r
};\r
\r
grid.onUndo = ( cmd ) =>\r
{\r
    console.log( cmd );\r
};\r
\r
grid.onRedo = ( cmd ) =>\r
{\r
    console.log( cmd );\r
};\r
\r
grid.onSelectCell = ( cell ) =>\r
{\r
    console.log( "Clicked! row: " + cell.row + ", col: " + cell.col );\r
    console.log( cell.metaInfo );\r
};\r
\r
Array.from( { length: 50 } )\r
    .forEach( () => grid.addRow() );\r
\r
Array.from( { length: 10 } )\r
    .forEach( () => grid.addColumn() );\r
\r
grid.removeRow( 8 );\r
grid.removeRows( 40, 49 );\r
grid.removeColumn( 7 );\r
grid.removeColumns( 7, 10 );\r
\r
grid.setText( 0, 1, "-" );\r
grid.setText( 0, 2, "2" );\r
grid.setText( 0, 3, "3" );\r
grid.setText( 0, 4, "4" );\r
grid.setText( 0, 5, "5" );\r
grid.setText( 0, 6, "6" );\r
grid.setText( 0, 7, "7" );\r
grid.setText( 0, 8, "8" );\r
grid.setText( 0, 9, "9" );\r
grid.setText( 3, 9, "true" );\r
grid.setText( 0, 10, "10" );\r
grid.setCell( 0, 0, {\r
    icon: "flowrule-if-node",\r
    text: "행 번호",\r
    horizontalAlign: "left",\r
    verticalAlign: "bottom",\r
} );\r
\r
grid.setText( 1, 5 );\r
grid.setCell( 1, 10, { text: "Icon", icon: "save" } );\r
grid.setCell( 2, 10, { text: "", icon: "save" } );\r
grid.setCell( 3, 10, { text: "", icon: "save", horizontalAlign: "center" } );\r
\r
grid.setCell( 1, 11, { text: "다중Row\\n다중다중\\n다중 텍스트", icon: "save", lineClamp: "none" } );\r
grid.setCell( 2, 11, { text: "다중Row\\n다중다중\\n다중 텍스트" } );\r
grid.setCell( 3, 11, { text: "123\\n456\\n..." } );\r
grid.setCell( 4, 11, { text: "1\\n2\\n3" } );\r
grid.setCell( 4, 11, { text: "길고 긴 텍스트 테스트 길이 너비" } );\r
\r
grid.setCell( 1, 2, { readonly: true, label: "레이블레이블레이블레이블" } );\r
grid.setCell( 2, 2, { disabled: true } );\r
grid.setCell( 3, 2, { readonly: true, disabled: true } );\r
grid.setCell( 1, 3, { readonly: true } );\r
grid.setCell( 2, 3, { disabled: true } );\r
grid.setCell( 3, 3, { readonly: true, disabled: true } );\r
grid.setCell( 1, 4, { readonly: true } );\r
grid.setCell( 2, 4, { disabled: true } );\r
grid.setCell( 3, 4, { readonly: true, disabled: true } );\r
grid.setCell( 10, 8, { disabled: true } );\r
\r
grid.setCell( 2, 8, { label: "저장" } );\r
grid.setCell( 3, 8, { label: "룰 저장22019191 10-101" } );\r
grid.setCell( 3, 11, { label: "A\\nB\\nC" } );\r
\r
grid.setText( 1, 2, "true" );\r
grid.setText( 1, 3, "한국어" );\r
grid.setText( 2, 3, "한국어" );\r
grid.setText( 5, 3, "English" );\r
grid.setText( 6, 3, "임의 텍스트" );\r
grid.setText( 1, 5, "100" );\r
grid.setText( 2, 5, "0" );\r
grid.setText( 3, 5, "50" );\r
grid.setText( 4, 5, "10" );\r
grid.setCell( 5, 5, { intent: "warning" } );\r
grid.setText( 5, 5, "5" );\r
grid.setText( 1, 7, "100" );\r
grid.setText( 2, 7, "50" );\r
grid.setText( 3, 7, "10" );\r
grid.setText( 4, 7, "5" );\r
grid.setText( 5, 7, "3" );\r
grid.setText( 6, 7, "1" );\r
\r
grid.autoSizeColumn( 2 );\r
grid.setColumnWidth( 3, 150 );\r
grid.selectRange( 3, 3, 5, 5 );\r
grid.setColumnWidth( 4, 150 );\r
\r
grid.setText( 1, 1, "ABC" );\r
grid.setText( 1, 4, "2022-06-01" );\r
grid.setText( 2, 4, "2022-06-15" );\r
grid.setText( 3, 4, "2022-06-30" );\r
grid.setText( 4, 4, "2022-07-15" );\r
\r
grid.setObject( 1, 1, { a: 1 } );\r
console.log( grid.getObject( 1, 1 ) );\r
console.log( grid.getObject( 1, 2 ) );\r
\r
grid.setRowTextColor( 1, "blue" );\r
grid.setCell( 1, 3, { textColor: "red", backColor: "black" } );\r
grid.setRowHeight( 1, 100 );\r
grid.setCell( 1, 8, { intent: "primary" } );\r
grid.setCell( 2, 8, { intent: "secondary" } );\r
\r
grid.setCell( 2, 9, { disabled: true } );\r
\r
grid.autoSizeColumns( 3, 7 );\r
grid.freezeColumn( 3 );\r
grid.freezeRows( 2 );\r
\r
grid.setCell( 1, 6, { disabled: false, backColor: "var(--background-color)" } );\r
grid.setCell( 2, 6, { disabled: false } );\r
\r
grid.setCell( 2, 6, { label: "달디다고 달디달고 달디단 밤양갱" } );`,G=`<div class="mb--lg">\r
    <button id="btn_check_commands" class="button">Check commands</button>\r
</div>\r
<div id="ir_grid" style="height: 500; width: 1300"></div>`;function S(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsxs("p",{children:[r.jsx("code",{children:"cellRenderer"}),"를 재정의하여 여러 타입의 셀을 출력할 수 있습니다."]}),r.jsx(t,{htmlRaw:G,code:k})]})}S.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const T=`import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 50,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 7,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),\r
    },\r
} );\r
\r
grid.onClipboardBeforePasteCell = ( cell, text ) =>\r
{\r
    console.log( "onClipboardBeforePasteCell", cell, text );\r
\r
    return { ignoreText: cell.col === 1 };\r
};\r
\r
grid.onClipboardBeforePaste = ( range ) =>\r
{\r
    console.log( "onClipboardBeforePaste", range );\r
};\r
\r
grid.onClipboardAfterPasteCell = ( cell ) =>\r
{\r
    console.log( "onClipboardAfterPasteCell", cell );\r
};\r
\r
grid.onClipboardAfterPaste = ( range ) =>\r
{\r
    console.log( "onClipboardAfterPaste", range );\r
};`,j='<div id="ir_grid" style="height: 500; width: 800"></div>';function D(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:j,code:T})]})}D.__docgenInfo={description:"",methods:[],displayName:"ClipboardEvents"};const P=`import { IRSplitContainer } from "@innorules/ir-style";\r
import {\r
    IRGrid,\r
    IRGridColumnFillPlugin,\r
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
grid.addPlugin( new IRGridColumnFillPlugin( {\r
    columnWeight: [ "120px", 1, 1, 1, 2 ],\r
} ) );\r
\r
// grid.hook.addHook("resize", () => grid.fillColumn(4));\r
\r
btn1.onclick = () =>\r
{\r
\r
    if( ir_grid.style.display )\r
    {\r
        ir_grid.style.removeProperty( "display" );\r
    }\r
    else\r
    {\r
        ir_grid.style.display = "none";\r
    }\r
};\r
\r
new IRSplitContainer( {\r
    elements: [\r
        "#split1",\r
        "#split2",\r
    ],\r
} );`,A=`<button id="btn1" class='button'>visible on/off</button>\r
<div class="flex background--light">\r
    <div id="split1">\r
        <div id="ir_grid" style="height: 500; width: 100%; display: none"></div>\r
    </div>\r
    <div id="split2"></div>\r
</div>`;function E(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid ColumnFill"}),r.jsx("p",{children:"ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)"}),r.jsxs("p",{children:["colHeader의 ",r.jsx("code",{children:"maxSize"}),"를 9999로 설정해야 열 크기 제한 문제가 없습니다."]}),r.jsx(t,{fixedHeight:600,htmlRaw:A,code:P})]})}E.__docgenInfo={description:"",methods:[],displayName:"ColumnFill"};const M=`import { IRContextMenu } from "@innorules/ir-style";\r
import { IRGrid, IRGridRowNoHeaderCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
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
const menu = new IRContextMenu( {\r
    items: [\r
        {\r
            id: "search-rule",\r
            type: "command-button",\r
            label: "룰 찾기",\r
            icon: "ir-icon--search-rule",\r
        },\r
        {\r
            id: "div1",\r
            type: "divider",\r
        },\r
        {\r
            id: "rule-dropdown",\r
            type: "dropdown",\r
            label: "테이블 조작",\r
            children: [\r
                {\r
                    id: "add-row",\r
                    type: "command-button",\r
                    label: "행 추가",\r
                    icon: "ir-icon--row-add",\r
                },\r
            ],\r
        },\r
    ],\r
} );\r
\r
menu.onCommandButtonClick = ( { ev, item } ) =>\r
{\r
    if( item.id === "add-row" )\r
        grid.addRow();\r
};\r
\r
grid.onContextMenu = ( ev, cell ) =>\r
{\r
    if( cell )\r
        grid.selectCell( cell.row, cell.col );\r
\r
    menu.showAtPoint( ev.clientX, ev.clientY );\r
};\r
\r
grid.mergeCells( 2, 1, 3, 3 );`,H='<div id="ir_grid" style="height: 500; width: 800"></div>';function N(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:H,code:M})]})}N.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};const B=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
// 함수형 렌더러\r
const customRenderer = ( row, col, data ) =>\r
{\r
    const element = document.createElement( "div" );\r
\r
    // IRGrid 기본 셀 패딩 적용을 위해 속성 설정\r
    element.setAttribute( "data-has-px", "" );\r
    element.setAttribute( "data-has-py", "" );\r
\r
    element.className = "ir_grid_cell_content";\r
    element.innerHTML = "text = <span style='color: red;'>[xyz]</span>";\r
\r
    return element;\r
};\r
\r
// 클래스형 렌더러\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 10,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch( col )\r
            {\r
                case 3:\r
                    return customRenderer( row, col, data );\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    defaultColumnCellFormat: { },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 9,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 2,\r
    },\r
} );`,z='<div id="ir_grid" style="height: 500; width: 1300"></div>';function F(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsxs("p",{children:[r.jsx("code",{children:"cellRenderer"}),"인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다."]}),r.jsx(t,{htmlRaw:z,code:B})]})}F.__docgenInfo={description:"",methods:[],displayName:"CustomRenderer"};const $=`import { IRTree } from "@innorules/ir-style";\r
import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 100,\r
    },\r
    colHeader: {\r
        rowCount: 2,\r
        colCount: 15,\r
    },\r
    rowHeader: {\r
        colCount: 3,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch( col )\r
            {\r
                case 0:\r
                    return rowNoRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    defaultColumnCellFormat: {\r
        [5]: { dropDisabled: true },\r
    },\r
} );\r
\r
grid.freezeRows( 5 );\r
grid.freezeColumn( 3 );\r
grid.setText( 0, 5, "drop 비활성화" );\r
grid.mergeCells( 2, 4, 2, 5 );\r
grid.mergeCells( 10, 4, 10, 5 );\r
\r
grid.onDropOnCell = ( row, col, ev ) =>\r
{\r
\r
    const text = ( () =>\r
    {\r
        const json = ev.dataTransfer.getData( "application/json" );\r
\r
        if( !json ) return "";\r
\r
        return JSON.parse( json ).name;\r
    } )();\r
\r
    if( !text ) return;\r
\r
    grid.commandManager.doRecording( "Drag-Drop", () =>\r
    {\r
        grid.setText( row, col, text );\r
    } );\r
\r
    grid.autoSizeColumn( col );\r
    grid.doEditMode( grid.cell( row, col ) );\r
};\r
\r
grid.setCell( 3, 3, { disabled: true } );\r
grid.mergeCells( 4, 6, 6, 9 );\r
\r
const tree = new IRTree( {\r
    // 생성하려는 element 지정\r
    contextElement: document.querySelector( "#tree" ),\r
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)\r
    data: {\r
        id: 0,\r
        name: "",\r
    },\r
} );\r
\r
// 노드 추가\r
const node = tree.addChild( null, "이노은행", {\r
    id: 1,\r
    name: "이노은행",\r
} );\r
\r
// 자식 노드 추가 (부모 노드가 첫 번재 인자)\r
const b = tree.addChild( node, "계좌", {\r
    id: 2,\r
    name: "계좌",\r
} );\r
\r
b.iconClass = "ir-icon--folder-open-outline";\r
\r
tree.addChild( node, "카드", {\r
    id: 5,\r
    name: "카드",\r
} );\r
\r
tree.addChild( node, "LONG_KEY", {\r
    id: 6,\r
    name: "긴 문자 긴 문자열 긴 문자열 길곡긴",\r
} );\r
\r
tree.expandAll();`,O=`<div style="display: flex; height: 500; column-gap: 8">\r
    <div id="tree" style="width: 300"></div>\r
    <div id="ir_grid" style="height: '100%'; width: '100%'"></div>\r
</div>`;function V(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"좌측 Tree 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다."}),r.jsx(t,{htmlRaw:O,code:$})]})}V.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};const L=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridExchangeByHeaderCellPlugin,\r
    IRGridRowNoHeaderCellRenderer,\r
\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultCellRenderer = new IRGridDefaultCellRenderer();\r
const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
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
const exchangePlugin = new IRGridExchangeByHeaderCellPlugin();\r
grid.addPlugin( exchangePlugin );\r
\r
btn_on.onclick = () =>\r
{\r
    grid.addPlugin( exchangePlugin );\r
};\r
btn_off.onclick = () =>\r
{\r
    grid.removePlugin( exchangePlugin );\r
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
};`,W=`<div class="flex mb--lg" style=" align-items:center; column-gap: 4px">\r
    source:\r
    <div class=" input" style="display: inline-block; width: 100">\r
        <input id=" input_source" class="input__native" />\r
    </div>\r
    target:\r
    <div class="input" style=" display: inline-block; width: 100">\r
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
<div id="ir_grid" style=" height: 500; width: 800 "></div>`;function K(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"헤더를 드래그하여 셀 내용 교체"}),r.jsx(t,{htmlRaw:W,code:L})]})}K.__docgenInfo={description:"",methods:[],displayName:"Exchange"};const U=`import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridSelectCellRenderer,\r
    createCustomRenderer,\r
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
const customRenderer = createCustomRenderer( ( row, col, data ) =>\r
{\r
    const div = document.createElement( "div" );\r
\r
    div.textContent = data.text;\r
\r
    return div;\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 30,\r
        cellRenderer( row, col, cellProps )\r
        {\r
            if( col === 2 ) return checkboxRenderer;\r
            if( col === 3 ) return datePickerRenderer;\r
            if( col === 4 ) return selectRenderer;\r
            if( col === 5 ) return customRenderer;\r
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
const finder = grid.createFinder();\r
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
    } );`,q=`<div class='search'>\r
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
    <button id='btn' type="button" class="button button--tertiary">다음 찾기</button>\r
    <button id='btn_cursor' type="button" class="button button--tertiary">Set Cursor</button>\r
</div>\r
\r
<input id='replace' type="text" placeholder='변경할 내용'>\r
<button id="btn_replace" class='button'>모두 변경</button>\r
\r
<div id="ir_grid" style="height: 500; width: '100%'"></div>`;function X(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid Finder"}),r.jsx("p",{children:"Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다."}),r.jsx(t,{htmlRaw:q,code:U})]})}X.__docgenInfo={description:"",methods:[],displayName:"Finder"};const J=`import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 100,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
    },\r
} );\r
\r
grid.setText( 0, 1, "A" );\r
grid.setText( 1, 1, "ABC" );\r
grid.setText( 2, 1, "한글" );\r
grid.setText( 3, 1, "はい" );`,Y=`<div style="display:flex; flex-direction:column; height: 500; column-gap: 8">\r
    <div id="ir_grid" style="flex: 1 1 0; width: '100%'"></div>\r
</div>`;function Z(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{localeSelectVisible:!0,htmlRaw:Y,code:J})]})}Z.__docgenInfo={description:"",methods:[],displayName:"i18n"};const Q=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridMoveColumnsPlugin,\r
    IRGridMoveRowsPlugin,\r
    IRGridRowNoHeaderCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultCellRenderer = new IRGridDefaultCellRenderer();\r
const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
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
const moveRowPlugin = new IRGridMoveRowsPlugin();\r
const moveColPlugin = new IRGridMoveColumnsPlugin();\r
\r
grid.addPlugin( moveRowPlugin );\r
grid.addPlugin( moveColPlugin );\r
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
};`,rr=`<div class="flex mb--lg" style="align-items: center; column-gap: 4px">\r
    source: <div class="input" style="display: inline-block; width: 100">\r
        <input id="input_source" class="input__native" />\r
    </div>\r
    target: <div class="input" style="display: inline-block; width: 100">\r
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
<div id="ir_grid" style="height: 500; width: 800"></div>`;function nr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"헤더를 드래그하여 행/열 이동"}),r.jsx(t,{htmlRaw:rr,code:Q})]})}nr.__docgenInfo={description:"",methods:[],displayName:"MoveAPI"};const er=`import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const gridList = [];\r
\r
for( let i = 1; i <= 4; i++ )\r
{\r
    gridList.push(\r
        new IRGrid( {\r
            contextElement: document.getElementById( "ir_grid" + i ),\r
            body: {\r
                rowCount: 5,\r
            },\r
            colHeader: {\r
                rowCount: 1,\r
                colCount: 6,\r
            },\r
        } ),\r
    );\r
}\r
\r
window.__GRID_LIST = gridList;`,tr=`<style>\r
    .grid-wrapper {\r
        height: 600px;\r
        display: grid;\r
        gap: 8px;\r
        grid-template-columns: 1fr 1fr;\r
        grid-template-rows: 1fr 1fr;\r
    }\r
\r
    .ir_grid:focus {\r
        outline: 1px solid red;\r
    }\r
</style>\r
\r
<div class="grid-wrapper">\r
    <div id="ir_grid1"></div>\r
    <div id="ir_grid2"></div>\r
    <div id="ir_grid3"></div>\r
    <div id="ir_grid4"></div>\r
</div>`;function or(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:tr,code:er})]})}or.__docgenInfo={description:"",methods:[],displayName:"MultiInstance"};const lr=`import { createPopover } from "@innorules/ir-style";\r
import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const popoverHandler = createPopover( {\r
    element: document.getElementById( "dial_grid" ),\r
    type: "dialog",\r
} );\r
\r
btn_openDialog.onclick = () =>\r
{\r
    const grid = new IRGrid( {\r
        contextElement: document.getElementById( "grid" ),\r
    } );\r
\r
    popoverHandler.show();\r
};\r
\r
btn_closeDialog.onclick = () =>\r
{\r
    popoverHandler.hide();\r
};`,ir=`<div>\r
    <button id="btn_openDialog" class="button">Dialog 열기</button>\r
</div>\r
<div id="dial_grid" class="dialog">\r
    <div class="dialog__wrapper" style="width: 600; height: 400">\r
        <div class="dialog__header">헤더</div>\r
        <div class="dialog__content">\r
            <div id="grid"></div>\r
        </div>\r
        <div class="dialog__footer">\r
            <button id="btn_closeDialog" class="button">닫기</button>\r
        </div>\r
    </div>\r
</div>`;function dr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"API 사용 샘플"}),r.jsx(t,{fixedHeight:500,htmlRaw:ir,code:lr})]})}dr.__docgenInfo={description:"",methods:[],displayName:"GridOnDialog"};const cr=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridOverflowPanelPlugin,\r
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
            {\r
                data.text = col.toString();\r
            }\r
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
grid.addPlugin( new IRGridOverflowPanelPlugin( {\r
    style: {\r
        height: 400,\r
        width: "100%",\r
    },\r
} ) );`,sr=`<button type='button' id="btn_freeze_rows" class='button mb--sm'>행 고정</button>\r
<button type='button' id="btn_freeze_cols" class='button mb--sm'>열 고정</button>\r
<button type='button' id="btn_merge" class='button mb--sm'>셀 병합</button>\r
<button class='button' id='btn_hide_rows'>행 숨김</button>\r
<button class='button' id='btn_show_rows'>행 표시</button>\r
<button class='button' id='btn_hide_columns'>열 숨김</button>\r
<button class='button' id='btn_show_columns'>열 표시</button>\r
<br />\r
<div style="height: 400; display: grid">\r
    <div id="ir_grid"></div>\r
</div>`;function ar(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid Overflow Panel"}),r.jsx("p",{children:"IRGrid가 overflow될 경우 Grid의 스크롤 제어를 간편하게 할 수 있는 편의 기능을 제공한다."}),r.jsx(t,{localeSelectVisible:!0,fixedHeight:550,htmlRaw:sr,code:cr})]})}ar.__docgenInfo={description:"",methods:[],displayName:"OverflowPanelPlugin"};const ur=`import { IRSelect, i18n } from "@innorules/ir-style";\r
import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridRowFilterCellRenderer,\r
    IRGridRowFilterPlugin,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rowFilterPlugin = new IRGridRowFilterPlugin( {\r
    columnMetaInfo: {\r
        0: {\r
            textType: "number",\r
            enabled: false,\r
        },\r
        3: {\r
            textType: "number",\r
        },\r
        4: {\r
            textType: "date",\r
        },\r
        6: {\r
            textType: "checked",\r
        },\r
    },\r
} );\r
const rowFilterRenderer = new IRGridRowFilterCellRenderer( {\r
    plugin: rowFilterPlugin,\r
    onDropdownButtonClick( key )\r
    {\r
        console.log( key );\r
    },\r
    // visibleSortButton: false,\r
    // visibleCheckAllButton: false,\r
} );\r
const checkboxRenderer = new IRGridCheckboxRenderer( {} );\r
const datePickerRenderer = new IRGridDatePickerRenderer( {} );\r
\r
const items = [\r
    { value: "한국어", text: "한국어" },\r
    { value: "영어", text: "영어" },\r
    { value: "스페인어", text: "스페인어" },\r
    { value: "일본어", text: "일본어" },\r
    { value: "독일어", text: "독일어" },\r
];\r
\r
const selectRenderer = new IRGridSelectCellRenderer( { items } );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 2000,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            switch( col )\r
            {\r
                case 4:\r
                    return datePickerRenderer;\r
                case 5:\r
                    return selectRenderer;\r
                case 6:\r
                    return checkboxRenderer;\r
                case 7:\r
                    return checkboxRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 8,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            if( row === 0 )\r
                return rowFilterRenderer;\r
\r
            return defaultRenderer;\r
        },\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
grid.addPlugin( rowFilterPlugin );\r
\r
const rowFilterPluginAPI = rowFilterPlugin.pluginAPI;\r
\r
grid.setCell( 0, 0, { text: "id" } );\r
grid.setCell( 0, 1, { text: "String", horizontalAlign: "left", icon: "type-string" } );\r
grid.setCell( 0, 2, { text: "English", horizontalAlign: "left" } );\r
grid.setCell( 0, 3, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );\r
grid.setCell( 0, 4, { text: "날짜" } );\r
grid.setCell( 0, 5, { text: "Select" } );\r
grid.setCell( 0, 6, { text: "체크박스" } );\r
grid.setCell( 0, 7, { text: "체크박스2 체크박스2 체크박스2" } );\r
\r
const TEST_STR_LIST = ["사과", "바나나", "수박", "복숭아", "멜론", "자두", "앵두", "두리안", ""];\r
const TEST_STR_LIST2 = ["Apple", "Banana", "banana", "Water Melon", "Melon", "Plum", "Cherry", "Durian"];\r
const startDate = new Date( "2024-01-01" );\r
\r
Array.from( { length: 2000 }, ( _, id ) =>\r
{\r
    grid.setText( id + 1, 0, id + 1 );\r
    grid.setText( id + 1, 1, TEST_STR_LIST[Math.floor( Math.random() * 10 ) % TEST_STR_LIST.length] );\r
    grid.setText( id + 1, 2, TEST_STR_LIST2[Math.floor( Math.random() * 10 ) % TEST_STR_LIST2.length] );\r
    grid.setText( id + 1, 5, items[Math.floor( Math.random() * 10 ) % items.length].value );\r
\r
    // 나머지 5개 행은 빈값 처리\r
    if( id <= 1994 )\r
    {\r
        grid.setText( id + 1, 3, Math.floor( Math.random() * 4000 ).toString() );\r
        grid.setText( id + 1, 4, startDate.toISOString().split( "T" )[0] );\r
        startDate.setDate( startDate.getDate() + 1 );\r
    }\r
} );\r
\r
grid.autoSizeColumns( 2, 4 );\r
\r
rowFilterPluginAPI.setColFilter( {\r
    column: 1,\r
    operator: "contains",\r
    operand: ["두"],\r
} );\r
\r
rowFilterPluginAPI.setColFilter( {\r
    column: 3,\r
    operator: "less-than-or-equal",\r
    operand: ["100"],\r
} );\r
\r
btn_filter_clear.onclick = () =>\r
{\r
    rowFilterPluginAPI.clearFilters();\r
    grid.getRow( 0 ).render();\r
};\r
\r
btn_add_row.onclick = () =>\r
{\r
    grid.commandManager.doRecording( "Add row", () =>\r
    {\r
        const row = grid.addRow();\r
\r
        grid.setText( row, 1, "ABC\\\\nBCD" );\r
        grid.setCell( row, 2, { icon: "type-boolean-return" } );\r
        grid.selectRow( row );\r
    } );\r
};\r
btn_add_col.onclick = () =>\r
{\r
    grid.commandManager.doRecording( "Add column", () =>\r
    {\r
        grid.addColumn( 80 );\r
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
btn_remove_row.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
\r
    if( selection )\r
    {\r
        grid.commandManager.doRecording( "Remove row", () =>\r
        {\r
            grid.removeRows( selection.top, selection.bottom, { ignoreFiltered: true } );\r
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
chk_enabled_sort.onchange = () =>\r
{\r
    rowFilterPluginAPI.columnSortManager.enabledColumnClick = chk_enabled_sort.checked;\r
};\r
\r
// i18n 변경\r
new IRSelect( {\r
    defaultValue: i18n.currentLang,\r
    contextElement: document.querySelector( "select" ),\r
    onChange: ( _, option ) =>\r
    {\r
        i18n.setLocale( option.value );\r
    },\r
} );`,gr=`<div class="flex mb--lg gap-x--lg gap-y--lg align-items--center">\r
    <div class="flex align-items--center gap--sm">\r
        <span>i18n : </span>\r
        <div style="width: 100">\r
            <select>\r
                <option>ko</option>\r
                <option>en</option>\r
                <option>jp</option>\r
                <option>zh</option>\r
            </select>\r
        </div>\r
    </div>\r
    <button class='button button--primary' id='btn_filter_clear'>Clear Filter</button>\r
    <button class='button' id='btn_add_row'>add row</button>\r
    <button class='button' id='btn_add_col'>add col</button>\r
    <button class='button' id='btn_insert_row'>insert row</button>\r
    <button class='button' id='btn_insert_col'>insert col</button>\r
    <button class='button' id='btn_remove_row'>remove row</button>\r
    <button class='button' id='btn_remove_col'>remove col</button>\r
    <label>\r
        <input type="checkbox" id='chk_enabled_sort' checked>\r
        열 클릭 활성화\r
    </label>\r
</div>\r
<div id="ir_grid" style="height: 500; width: 800"></div>`;function mr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid Row Filter"}),r.jsx(o,{children:"ir-style@^2.17.0"}),r.jsx("p",{}),r.jsx(t,{htmlRaw:gr,code:ur})]})}mr.__docgenInfo={description:"",methods:[],displayName:"GridFilter"};const Rr=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridDefaultKeyPlugin,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridRowSelectionPlugin,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkBoxRenderer = new IRGridCheckboxRenderer( { } );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items: [\r
        { value: "kr", text: "한국어" },\r
        { value: "en", text: "English" },\r
        { value: "sp", text: "Spanish" },\r
    ],\r
} );\r
const datePickerRenderer = new IRGridDatePickerRenderer( {} );\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 50,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
\r
            switch( col )\r
            {\r
                case 2:\r
                    return checkBoxRenderer;\r
                case 3:\r
                    return selectRenderer;\r
                case 4:\r
                    return datePickerRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    defaultColumnCellFormat: {\r
        all: { verticalAlign: "middle" },\r
        [2]: { horizontalAlign: "center" },\r
        [5]: { editable: false },\r
        [6]: { disabled: true },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 9,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 2,\r
        defaultSize: 50,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch( col )\r
            {\r
                case 0:\r
                    return rowNoRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    plugins: [\r
        new IRGridRowSelectionPlugin(),\r
        new IRGridDefaultKeyPlugin( { rowSelection: true } ),\r
    ],\r
} );\r
\r
grid.onSelectCell = ( cell ) => console.log( cell.row );`,br='<div id="ir_grid" style="height: 500; width: 1300"></div>';function wr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{}),r.jsx(t,{htmlRaw:br,code:Rr})]})}wr.__docgenInfo={description:"",methods:[],displayName:"RowSelection"};const Cr=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridSelectCellRenderer,\r
\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const items = [\r
    { value: "ko", text: "한국어" },\r
    { value: "en", text: "English" },\r
    { value: "sp", text: "Spanish" },\r
    { value: "en2", text: "English 길이를 길게" },\r
    { value: "en3", text: "English3\\\\n길게길게\\\\n3줄" },\r
    { value: "en4", text: "English4 English4 English4 English4 English4 " },\r
    { value: "en5", text: "English" },\r
    { value: "en7", text: "English" },\r
    { value: "en8", text: "English" },\r
    { value: "en9", text: "English" },\r
    { value: "en11", text: "English" },\r
];\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items,\r
    allowClear: true,\r
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>\r
    {\r
        console.log( row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText );\r
    },\r
    allowCustomText: true,\r
    customDisplayTextFunc: ( value, text, custom ) =>\r
    {\r
        if( !custom ) return text;\r
        if( text === "" ) return "";\r
\r
        return [ "(X)", text ].join( " " );\r
    },\r
    showErrorIfCustomText: true,\r
} );\r
\r
const selectRenderer2 = new IRGridSelectCellRenderer( {\r
    items,\r
    allowClear: true,\r
    mappingType: "value",\r
    onChange: ( row, col ) =>\r
    {\r
        grid.setCell( row, col, {} );\r
    },\r
} );\r
\r
const selectRenderer3 = new IRGridSelectCellRenderer( {\r
    items,\r
    allowEdit: true,\r
} );\r
\r
const selectRenderer4 = new IRGridSelectCellRenderer( {\r
    items,\r
    allowEdit: true,\r
    mappingType: "value",\r
    showErrorIfCustomText: true,\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 20,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
\r
            switch( col )\r
            {\r
                case 3: return selectRenderer;\r
                case 4: return selectRenderer2;\r
                case 5: return selectRenderer3;\r
                case 6: return selectRenderer4;\r
                default: return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 12,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
// for debugging\r
window.grid = grid;\r
\r
grid.setText( 1, 3, "English" );\r
grid.setText( 1, 4, "en" );\r
grid.setText( 2, 4, "ko" );\r
grid.setText( 1, 5, "English" );\r
\r
grid.setText( 6, 3, "unmatched" );\r
grid.setText( 6, 4, "unmatched" );\r
grid.setText( 6, 5, "unmatched" );\r
grid.setText( 6, 6, "unmatched" );\r
\r
grid.setText( 7, 3, "en4" );\r
grid.setText( 7, 4, "en4" );\r
grid.setText( 7, 5, "en4" );\r
grid.setText( 7, 6, "en4" );\r
\r
grid.hook.addHook( "cellEditDoneBeforeRender", ( row, col, context ) =>\r
{\r
    if( col === 2 )\r
        context.text = "1";\r
} );\r
\r
grid.autoSizeColumns( 0, 10 );`,hr=`<div class="mb--lg">\r
    <button id="btn_check_commands" class="button">Check commands</button>\r
</div>\r
<div id="ir_grid" style="height: 500; width: 1300"></div>`;function xr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(t,{htmlRaw:hr,code:Cr})]})}xr.__docgenInfo={description:"",methods:[],displayName:"SelectMapping"};const pr=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    lazyItems: createBulkItems,\r
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>\r
    {\r
        console.log( row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText );\r
    },\r
} );\r
\r
const selectRenderer2 = new IRGridSelectCellRenderer( {\r
    items: [\r
        { value: "1", text: "ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD" },\r
        { value: "2", text: "ABCD ABCD ABCD ABCD" },\r
    ],\r
} );\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 5000,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch( col )\r
            {\r
                case 3:\r
                    return selectRenderer;\r
                case 4:\r
                    return selectRenderer2;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
        defaultSize: 120,\r
    },\r
} );\r
\r
// for debugging\r
window.grid = grid;\r
\r
grid.setText( 1, 3, "0" );\r
grid.setText( 2, 3, "100" );\r
grid.setText( 3, 3, "15000" );\r
\r
function createBulkItems()\r
{\r
    return Array.from( { length: 30000 }, ( v, id ) => ( {\r
        value: id.toString(),\r
        text: id.toString(),\r
    } ) );\r
}`,fr=`<div class="mb--lg">\r
    <button id="btn_check_commands" class="button">Check commands</button>\r
</div>\r
<div id="ir_grid" style="height: 500; width: 1300"></div>`;function _r(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx(o,{children:"ir-style@^2.17.0"}),r.jsx(t,{htmlRaw:fr,code:pr})]})}_r.__docgenInfo={description:"",methods:[],displayName:"SelectLazyItems"};const vr=`import {\r
    createIRGridColumnSortManager,\r
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
Array.from( { length: 250 } )\r
    .forEach( ( _, id ) =>\r
    {\r
        grid.setText( id + 1, 1, \`\${rand[0][Math.floor( Math.random() * rand[0].length )]}\` );\r
        grid.setText( id + 1, 2, \`\${rand[1][Math.floor( Math.random() * rand[1].length )]}\` );\r
        grid.setText( id + 1, 3, \`\${rand[2][Math.floor( Math.random() * rand[2].length )]}\` );\r
        grid.setText( id + 1, 4, \`\${rand[3][Math.floor( Math.random() * rand[3].length )]}\` );\r
\r
        grid.setCell( id + 1, 5, { label: "Radio" } );\r
        grid.setCell( id + 1, 6, { label: "Check" } );\r
    } );\r
\r
grid.setText( 25, 1, -100 );\r
grid.setText( 26, 1, -20 );\r
grid.setText( 27, 1, 0 );\r
grid.setText( 28, 1, -200 );\r
grid.setText( 29, 1, -999999 );\r
grid.setText( 30, 1, "bb" );\r
grid.setText( 31, 1, "ba" );\r
grid.setText( 32, 1, "a" );\r
grid.setText( 33, 1, "cc" );\r
grid.setText( 34, 1, "zy" );\r
grid.setText( 35, 1, "zi" );\r
\r
const sortManager = createIRGridColumnSortManager( grid );\r
\r
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
};\r
\r
const rowCnt = grid.getRowCount();\r
\r
for( let i = 1; i < rowCnt; i++ )\r
    grid.setText( i, 0, i.toString() );`,Ir=`<button type='button' id="btn_reset_sort" class='button mb--sm'>정렬 초기화</button>\r
<button type='button' id="btn_print" class='button'>스냅샷 출력</button>\r
<button type='button' id="btn_sort_columns" class='button'>다중 정렬</button>\r
<label>\r
    <input type='checkbox' id="chk_toggle_column_click" checked />열 클릭 활성화\r
</label>\r
<br />\r
<div id="ir_grid" style="height: 500px; width: 800px"></div>`;function yr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"열을 클릭하여 정렬 실행"}),r.jsx(t,{htmlRaw:Ir,code:vr})]})}yr.__docgenInfo={description:"",methods:[],displayName:"Sort"};const kr=`import {\r
    createInferenceSortHandler,\r
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
    },\r
    rowHeader: {\r
        colCount: 1,\r
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),\r
    },\r
} );\r
\r
grid.setCell( 0, 1, { text: "Number" } );\r
grid.setCell( 0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );\r
grid.setCell( 0, 3, { text: "Text", icon: "type-string" } );\r
grid.setCell( 0, 4, { text: "Text", icon: "type-string" } );\r
\r
Array.from( { length: 24 } )\r
    .forEach( ( _, id ) =>\r
    {\r
        grid.setText( id + 1, 1, ( id + 1 ).toString() );\r
        grid.setText( id + 1, 2, Math.floor( Math.random() * 10000 ).toString() );\r
        grid.setText( id + 1, 3, Math.floor( Math.random() * 10000 ).toString( 16 ) );\r
        grid.setText( id + 1, 4, Math.floor( Math.random() * 20 ).toString() );\r
    } );\r
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
};`,Gr=`<div>\r
    <button type='button' id="btn_sort" class='button mb--sm'>정렬</button>\r
    <span>정렬 Column</span>\r
    <div class="input" style="display: inline-block; width: 200">\r
        <input type=" text" class="input__native" id="input_column" value="2" />\r
    </div>\r
    <span>시작 Row</span>\r
    <div class="input" style="display: inline-block; width: 200">\r
        <input type="number" class="input__native" id="input_start_row" value="5" />\r
    </div>\r
    <span>종료 Row</span>\r
    <div class="input" style="display: inline-block; width: 200">\r
        <input type="number" class="input__native" id="input_end_row" value="12" />\r
    </div>\r
</div>\r
<br />\r
<div id="ir_grid" style="height: 500; width: 800"></div>`;function Sr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid"}),r.jsx("p",{children:"열을 클릭하여 정렬 실행"}),r.jsx(t,{htmlRaw:Gr,code:kr})]})}Sr.__docgenInfo={description:"",methods:[],displayName:"SortRange"};const Tr=`\r
import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellIconButtonRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridPopoverPlugin,\r
    IRGridResizerPlugin,\r
    IRGridRowFilterCellRenderer,\r
    IRGridRowFilterPlugin,\r
    IRGridSingleCellDragPlugin,\r
    IRGridTablePlugin,\r
\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rowFilterPlugin = new IRGridRowFilterPlugin( {} );\r
const rowFilterRenderer = new IRGridRowFilterCellRenderer( {\r
    plugin: rowFilterPlugin,\r
} );\r
const checkRenderer = new IRGridCheckboxRenderer( {} );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
    },\r
} );\r
\r
const tablePlugin = new IRGridTablePlugin( {\r
    onRowClick( grid, row, ev )\r
    {\r
        console.log( row, ev );\r
    },\r
    multipleSelect: true,\r
    freezeLastColumn: true,\r
} );\r
\r
const rowCount = 2000;\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            switch( col )\r
            {\r
                case 0:\r
                    return checkRenderer;\r
                case 6:\r
                    return iconButtonRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 7,\r
        minSize: 10,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            if( row === 0 && col === 0 )\r
                return checkRenderer;\r
            if( row === 0 && col < 6 )\r
                return rowFilterRenderer;\r
\r
            return defaultRenderer;\r
        },\r
    },\r
    rowHeader: {\r
        colCount: 0,\r
        defaultSize: 32,\r
    },\r
    defaultColumnCellFormat: {\r
        all: { draggable: true },\r
        [0]: { disabled: false },\r
    },\r
    plugins: [\r
        tablePlugin,\r
        rowFilterPlugin,\r
        new IRGridResizerPlugin( {\r
            enabledColResizer: true,\r
            disabledColumns: [0, 6],\r
        } ),\r
        new IRGridPopoverPlugin( {\r
            memoInterval: 0,\r
            tooltipInterval: 0,\r
            hideTooltipWhenHasMemo: true,\r
        } ),\r
        new IRGridSingleCellDragPlugin(),\r
    ],\r
} );\r
\r
grid.setText( 0, 1, "사용자 ID" );\r
grid.setCell( 0, 1, { horizontalAlign: "left" } );\r
grid.setText( 0, 2, "사용자 이름" );\r
grid.setCell( 0, 2, { horizontalAlign: "left" } );\r
grid.setText( 0, 3, "계정 시작일" );\r
grid.setText( 0, 4, "계정 종료일" );\r
grid.setText( 0, 5, "역할" );\r
grid.setCell( 0, 5, { horizontalAlign: "left" } );\r
\r
Array.from( { length: rowCount } )\r
    .forEach( ( _, id ) =>\r
    {\r
        const randId = Math.floor( Math.random() * 10000 ).toString();\r
        grid.setCell( id + 1, 1, { text: randId, object: { name: randId } } );\r
        grid.setCell( id + 1, 2, { text: "AAAAAAAAAA", object: { name: "AAAAAAAAAA" } } );\r
        grid.setCell( id + 1, 3, { text: "2024-10-08", object: { name: "2024-10-08" } } );\r
        grid.setCell( id + 1, 4, { text: "9999-12-31", object: { name: "9999-12-31" } } );\r
        grid.setCell( id + 1, 5, { text: "룰 시스템 접속, 전체 기능 실행", object: { name: "룰 시스템 접속, 전체 기능 실행" } } );\r
        grid.setCell( id + 1, 6, { icon: "edit", tooltip: "역할 변경" } );\r
    } );\r
\r
grid.setColumnWidth( 0, 50 );\r
grid.setColumnWidth( 6, 50 );\r
\r
btn_clear_select.onclick = () =>\r
{\r
    tablePlugin.pluginAPI.clearAllSelections();\r
};\r
\r
checkRenderer.onCheckboxClick = ( row, col, checked ) =>\r
{\r
    if( row === 0 )\r
    {\r
        for( let i = 1; i < rowCount; i++ )\r
        {\r
            grid.setText( i, 0, checked );\r
        }\r
    }\r
    else\r
    {\r
        let allChecked = true;\r
        for( let i = 1; i < rowCount; i++ )\r
        {\r
            if( grid.getText( i, 0 ) !== "true" )\r
            {\r
                allChecked = false;\r
                break;\r
            }\r
        }\r
        grid.setText( 0, 0, allChecked );\r
    }\r
};\r
\r
( function()\r
{\r
    const grid = new IRGrid( {\r
        contextElement: ir_grid2,\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 5,\r
        },\r
        rowHeader: { colCount: 1 },\r
    } );\r
\r
    grid.onDropOnCell = ( row, col, ev ) =>\r
    {\r
        const data = ev.dataTransfer.getData( "application/json" );\r
        const json = JSON.parse( data );\r
\r
        grid.commandManager.doRecording( "Drag-Drop", () =>\r
        {\r
            grid.setText( row, col, json.name );\r
            grid.setObject( row, col, json );\r
        } );\r
    };\r
} )();`,jr=`<div>\r
    <button id="btn_clear_select" class="button">Clear Select</button>\r
    <div class="flex gap-x--3xl mt--lg">\r
        <div id="ir_grid" style="height: 500px;width: 700px"></div>\r
        <div id="ir_grid2"></div>\r
    </div>\r
</div>`;function Dr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGridTablePlugin And Filter"}),r.jsx(o,{children:"ir-style@^2.17.0"}),r.jsx("p",{}),r.jsx(t,{htmlRaw:jr,code:Tr})]})}Dr.__docgenInfo={description:"",methods:[],displayName:"TableAndRowFilterPlugin"};const Pr=`import { IRContextMenu } from "@innorules/ir-style";\r
import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDefaultCellIconButtonRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridPopoverPlugin,\r
    IRGridResizerPlugin,\r
    IRGridSingleCellDragPlugin,\r
    IRGridTablePlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkRenderer = new IRGridCheckboxRenderer( {} );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
    },\r
} );\r
\r
function defaultCellRenderer( row, col, data )\r
{\r
    switch( col )\r
    {\r
        case 0:\r
            return checkRenderer;\r
        case 6:\r
            return iconButtonRenderer;\r
        default:\r
            return defaultRenderer;\r
    }\r
}\r
\r
const rowCount = 20000;\r
\r
const tablePlugin = new IRGridTablePlugin( {\r
    onRowClick( grid, row, ev )\r
    {\r
        console.log( row, ev );\r
    },\r
    freezeLastColumn: true,\r
    /** ^2.18.0 */\r
    multipleSelect: true,\r
    // selectOnRightClick: true,\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount,\r
        cellRenderer: defaultCellRenderer,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 7,\r
        minSize: 30,\r
        maxSize: 200,\r
        cellRenderer: defaultCellRenderer,\r
    },\r
    rowHeader: {\r
        colCount: 0,\r
        defaultSize: 32,\r
    },\r
    defaultColumnCellFormat: {\r
        all: { draggable: true },\r
        [0]: { disabled: false },\r
    },\r
    plugins: [\r
        tablePlugin,\r
        new IRGridResizerPlugin( {\r
            enabledColResizer: true,\r
            disabledColumns: [0],\r
            enabledColRatioResizer: true,\r
        } ),\r
        new IRGridPopoverPlugin( {\r
            memoInterval: 0,\r
            tooltipInterval: 0,\r
            hideTooltipWhenHasMemo: true,\r
        } ),\r
        new IRGridSingleCellDragPlugin(),\r
    ],\r
} );\r
\r
const tablePluginAPI = tablePlugin.pluginAPI;\r
\r
grid.setColumnWidth( 0, 50 );\r
grid.setColumnWidth( 6, 50 );\r
grid.fillColumn( 5 );\r
\r
const menu = new IRContextMenu( {\r
    items: [\r
        {\r
            id: "edit",\r
            type: "command-button",\r
            label: "변경",\r
            icon: "ir-icon--edit",\r
        },\r
        {\r
            id: "delete",\r
            type: "command-button",\r
            label: "삭제",\r
            icon: "ir-icon--delete",\r
        },\r
        {\r
            id: "pw-edit",\r
            type: "command-button",\r
            label: "비밀번호 변경",\r
            icon: "ir-icon--lock",\r
        },\r
    ],\r
} );\r
\r
grid.setText( 0, 1, "사용자 ID" );\r
grid.setCell( 0, 1, { horizontalAlign: "left" } );\r
grid.setText( 0, 2, "사용자 이름" );\r
grid.setCell( 0, 2, { horizontalAlign: "left" } );\r
grid.setText( 0, 3, "계정 시작일" );\r
grid.setText( 0, 4, "계정 종료일" );\r
grid.setText( 0, 5, "역할" );\r
grid.setCell( 0, 5, { horizontalAlign: "left" } );\r
\r
Array.from( { length: rowCount } )\r
    .forEach( ( _, id ) =>\r
    {\r
        const randId = Math.floor( Math.random() * 10000 ).toString();\r
        grid.setCell( id + 1, 1, { text: randId, object: { name: randId } } );\r
        grid.setCell( id + 1, 2, { text: "AAAAAAAAAA", object: { name: "AAAAAAAAAA" } } );\r
        grid.setCell( id + 1, 3, { text: "2024-10-08", object: { name: "2024-10-08" } } );\r
        grid.setCell( id + 1, 4, { text: "9999-12-31", object: { name: "9999-12-31" } } );\r
        grid.setCell( id + 1, 5, { text: "룰 시스템 접속, 전체 기능 실행", object: { name: "룰 시스템 접속, 전체 기능 실행" } } );\r
        grid.setCell( id + 1, 6, { icon: "edit", tooltip: "역할 변경" } );\r
    } );\r
\r
btn_remove_plg.onclick = () =>\r
{\r
    grid.removePlugin( tablePlugin );\r
};\r
\r
btn_clear_select.onclick = () =>\r
{\r
    tablePluginAPI.clearAllSelections();\r
};\r
\r
btn_add.onclick = () =>\r
{\r
    const value = input_select_row.value;\r
    if( value === "" ) return;\r
\r
    tablePluginAPI.addSelectedRow( parseInt( value, 10 ) );\r
};\r
\r
btn_undo.onclick = () => grid.undo();\r
\r
btn_add_row.onclick = () => grid.addRow();\r
\r
btn_multi_off.onclick = () => tablePluginAPI.setMultipleSelect( false );\r
\r
checkRenderer.onCheckboxClick = ( row, col, checked ) =>\r
{\r
    if( row === 0 )\r
    {\r
        for( let i = 1; i < rowCount; i++ )\r
        {\r
            grid.setText( i, 0, checked );\r
        }\r
    }\r
    else\r
    {\r
        let allChecked = true;\r
        for( let i = 1; i < rowCount; i++ )\r
        {\r
            if( grid.getText( i, 0 ) !== "true" )\r
            {\r
                allChecked = false;\r
                break;\r
            }\r
        }\r
        grid.setText( 0, 0, allChecked );\r
    }\r
};\r
\r
menu.onCommandButtonClick = ( { ev, item } ) =>\r
{\r
    console.log( item );\r
};\r
\r
grid.onContextMenu = ( ev, cell ) =>\r
{\r
    menu.showAtPoint( ev.clientX, ev.clientY );\r
    console.log( "selectRows:", tablePluginAPI.getSelectedRows() );\r
};\r
\r
( function()\r
{\r
    const grid = new IRGrid( {\r
        contextElement: ir_grid2,\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 5,\r
        },\r
        rowHeader: { colCount: 1 },\r
    } );\r
\r
    grid.onDropOnCell = ( row, col, ev ) =>\r
    {\r
        const data = ev.dataTransfer.getData( "application/json" );\r
        const json = JSON.parse( data );\r
\r
        grid.commandManager.doRecording( "Drag-Drop", () =>\r
        {\r
            grid.setText( row, col, json.name );\r
            grid.setObject( row, col, json );\r
        } );\r
    };\r
} )();`,Ar=`<div>\r
    <button id="btn_remove_plg" class="button">TablePlugin 제거</button>\r
    <button id="btn_clear_select" class="button mr--lg">Clear Select</button>\r
    <div class="input" style="width: 100px;display: inline-block">\r
        <input id="input_select_row" placeholder="rowId" class="input__native">\r
    </div>\r
    <button id="btn_add" class="button">Add Select Row</button>\r
    <button id="btn_add_row" class="button">Add Row</button>\r
    <button id="btn_undo" class="button">Undo</button>\r
    <button id="btn_multi_off" class="button">MultipleSelect Off</button>\r
    <div class="flex gap-x--3xl mt--lg">\r
        <div id="ir_grid" style="height: 500px; width: 700px"></div>\r
        <div id="ir_grid2"></div>\r
    </div>\r
</div>`;function Er(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGridTablePlugin"}),r.jsx("div",{className:"ir-mb-md",children:r.jsx(o,{children:"ir-style@^2.13.0"})}),r.jsxs("div",{children:[r.jsx(o,{children:"ir-style@^2.18.0"})," - multipleSelect"]}),r.jsx(t,{defaultCodeFold:[55],htmlRaw:Ar,code:Pr})]})}Er.__docgenInfo={description:"",methods:[],displayName:"TablePlugin"};const Mr=`import { getThemeStore } from "@innorules/ir-style";\r
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
    items: [ { text: "A", value: "A" } ],\r
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
grid.setColumnWidth( 4, 160 );`,Hr='<div id="ir_grid" style="height: 500"></div>';function Nr(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid Configuration"}),r.jsx("p",{children:"Grid 기본 내부 패딩을 조절할 수 있습니다."}),r.jsx(t,{fixedHeight:600,htmlRaw:Hr,code:Mr})]})}Nr.__docgenInfo={description:"",methods:[],displayName:"ThemeConfig"};const Br=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridMultiSelectCellPlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const checkRenderer = new IRGridCheckboxRenderer( {} );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const datePickerRenderer = new IRGridDatePickerRenderer( {} );\r
\r
const rowCount = 10000;\r
const multiSelectCellPlugin = new IRGridMultiSelectCellPlugin( {\r
    onCopyFail: () => alert( "선택한 셀 범위가 유효하지 않아 복사할 수 없습니다." ),\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount,\r
        cellRenderer: ( row, col, data ) =>\r
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
grid.addPlugin( multiSelectCellPlugin );\r
\r
const multiSelectCellPluginAPI = multiSelectCellPlugin.pluginAPI;\r
\r
grid.setRowInfo( 0, {\r
    textData: ["No", "Name", "Age", "Date", "Checked", "Random Number"],\r
} );\r
\r
const startDate = new Date( "2025-01-01" );\r
\r
Array.from( { length: rowCount } )\r
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
btn_remove_plg.onclick = () =>\r
{\r
    grid.removePlugin( multiSelectCellPlugin );\r
};\r
\r
grid.onSelectChanged = () =>\r
{\r
    console.log( "Selected Cells:", multiSelectCellPluginAPI.getSelectedCells() );\r
};\r
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
`,zr=`<div>\r
    <button id="btn_remove_plg" class="button">플러그인 제거</button>\r
    <div class="flex gap-x--3xl mt--lg"\r
        style="height: 500px">\r
        <div id="ir_grid"  style="width: 700px"></div>\r
        <div id="ir_grid2" class="flex--1"></div>\r
    </div>\r
</div>`;function Fr(){return r.jsxs(n,{children:[r.jsx(e,{children:"MultiSelectCellPlugin"}),r.jsx(o,{children:"ir-style@^2.21.0"}),r.jsxs("p",{children:["IRGrid에 다중 셀 선택 기능을 제공한다.",r.jsx("br",{}),r.jsx("b",{children:"※ 단독 사용은 불가능하며 반드시 IRGridMouseCellSelectorPlugin과 함께 사용"})]}),r.jsxs("p",{children:[r.jsx("b",{children:"복사/붙여넣기 참고 사항"}),r.jsx("br",{}),"- 복사와 붙여넣기는 선택한 셀들이 행과 열 모두에서 동일한 개수일 때만 동작한다. (잘못된 영역인 경우 경고 메시지 출력)",r.jsx("br",{}),"- 붙여넣기 시 선택한 셀들은 빈칸 없이 연속된 형태로 붙어서 표시된다.",r.jsx("br",{}),"※ 엑셀의 다중 셀 선택 복사/붙여넣기 동작 참고",r.jsx("br",{})]}),r.jsx(t,{htmlRaw:zr,code:Br})]})}Fr.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCellPlugin"};const Wr={title:"JS Components/IRGrid"},Kr=["APIDemo","Basic","BulkColumns","BulkRows","BulkData","CellDrag","CellFormatter","CellRenderer","ClipboardEvents","ColumnFill","ContextMenu","CustomRenderer","DragDrop","ExchangeAPI","Finder","i18n","MoveAPI","MultiInstance","OnDialog","OverflowPanelPlugin","RowFilterPlugin","RowSelectionPlugin","SelectValueMap","SelectLazyItems","Sort","SortRange","TableAndRowFilterPlugin","TablePlugin","ThemeConfig","MultiSelectCellPlugin"];export{d as APIDemo,a as Basic,m as BulkColumns,x as BulkData,w as BulkRows,_ as CellDrag,y as CellFormatter,S as CellRenderer,D as ClipboardEvents,E as ColumnFill,N as ContextMenu,F as CustomRenderer,V as DragDrop,K as ExchangeAPI,X as Finder,nr as MoveAPI,or as MultiInstance,Fr as MultiSelectCellPlugin,dr as OnDialog,ar as OverflowPanelPlugin,mr as RowFilterPlugin,wr as RowSelectionPlugin,_r as SelectLazyItems,xr as SelectValueMap,yr as Sort,Sr as SortRange,Dr as TableAndRowFilterPlugin,Er as TablePlugin,Nr as ThemeConfig,Kr as __namedExportsOrder,Wr as default,Z as i18n};
