import{j as n}from"./jsx-runtime-CZmXTeUy.js";import{D as e,a as t,L as r,V as o}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const i=`<div class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
    <button class='button' id='btn_add_row'>add row</button>
    <button class='button' id='btn_add_col'>add col</button>
    <button class='button' id='btn_insert_row'>insert row</button>
    <button class='button' id='btn_insert_col'>insert col</button>
    <button class='button' id='btn_remove_row'>remove row</button>
    <button class='button' id='btn_remove_col'>remove col</button>
    <button class='button' id='btn_auto_height'>auto height</button>
    <button class='button' id='btn_auto_width'>auto width</button>
    <button class='button' id='btn_clear_rows'>clear</button>
    <button class='button' id='btn_merge'>merge selection</button>
    <button class='button' id='btn_split'>split</button>
    <button class='button' id='btn_reset'>re-create</button>
    <button class='button' id='btn_hide_rows'>hide rows</button>
    <button class='button' id='btn_show_rows'>show rows</button>
    <button class='button' id='btn_hide_columns'>hide columns</button>
    <button class='button' id='btn_check_commands'>show commands</button>
    <button class='button' id='btn_col_span_disabled'>copy options</button>
    <button class='button' id='btn_copy'>copy</button>
    <button class='button' id='btn_paste'>paste</button>
    <button class='button' id='btn_task'>Do Task</button>
    <button class='button' id='btn_freeze_rows'>행 고정</button>
    <button class='button' id='btn_unfreeze_rows'>행 고정 해제</button>
    <button class='button' id='btn_freeze_cols'>열 고정</button>
    <button class='button' id='btn_unfreeze_cols'>열 고정 해제</button>
    <div class="flex align-items--center gap--md">
        <label>
            <input type="checkbox" id="chk_rowSpan" checked />
            <span>copyOptions.rowSpan</span>
        </label>
        <label>
            <input type="checkbox" id="chk_colSpan" checked />
            <span>copyOptions.colSpan</span>
        </label>
    </div>
</div>
<div id="ir_grid" style="height: 500; width: 1300"></div>`,l=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox( { } );
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect( {
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" },
    ],
} );
const datePickerRenderer = libGrid.renderGridDatePicker( {} );
const rowNoRenderer = libGrid.renderRowNoHeaderCell( 1 );

// 테스트 사용성을 위해, click 이후 IRGrid에 포커스를 줌
window.addEventListener( "click", ( ev ) =>
{
    ev.target instanceof HTMLButtonElement &&
        grid.focus();
} );

function createGrid()
{
    const grid = new libGrid.IRGrid( {
        contextElement: ir_grid,
        // copyOptions: { rowSpan: true, colSpan: true, skipFiltered: true },
        // pasteOptions: { rowSpan: true, colSpan: true, skipFiltered: true },
        body: {
            rowCount: 20,
        },
        defaultColumnCellFormat: {
            all: { verticalAlign: "middle" },
        },
        colHeader: {
            rowCount: 1,
            colCount: 20,
            cellRenderer: ( row, col, data ) =>
            {

                if( col > 0 )
                {
                    data.text = col.toString();
                }

                return defaultRenderer( row, col, data );
            },
        },
        rowHeader: {
            colCount: 2,
            cellRenderer: ( row, col, data ) =>
            {
                switch( col )
                {
                    case 0:
                        return rowNoRenderer( row, col, data );
                    case 1:
                        data.text = "Test";
                        return defaultRenderer( row, col, data );
                }
            },
        },
        undoManagerOptions: {
            stackLength: 256,
            disabled: false,
        },
    } );

    grid.onSelectCell = ( cell ) =>
    {
        console.log( cell.metaInfo.text );
    };
    grid.onMountedRow = ( row ) => grid.autoSizeRow( row );
    grid.onContextMenu = ( ev, cell ) =>
    {
        if( cell )
            console.log( "contextmenu", { row: cell.row, col: cell.col } );
        else
            console.log( "contextmenu", "cell is null" );
    };

    window.grid = grid;

    return grid;
}

let grid = createGrid();

btn_add_row.onclick = () =>
{
    grid.commandManager.doRecording( "Add row", () =>
    {
        const row = grid.addRow();

        grid.setText( row, 2, "ABC\\nBCD" );
        grid.setCell( row, 3, { icon: "type-boolean-return" } );
        grid.selectRow( row );
    } );
};
btn_add_col.onclick = () =>
{
    grid.commandManager.doRecording( "Add column", () =>
    {
        grid.addColumn( 80 );
    } );
};

btn_insert_row.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Insert row", () =>
        {
            grid.insertRows( selection.top, 1 + selection.bottom - selection.top, 70 );
            grid.setRowTextColor( selection.top, "blue" );
        } );
    }
};

btn_insert_col.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Insert column", () =>
        {
            grid.insertColumns( selection.left, 1 + selection.right - selection.left, 50 );
        } );
    }
};

btn_copy.onclick = () => grid.copyToClipboard();
btn_paste.onclick = () => grid.pasteFromClipboard();

btn_remove_row.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Remove row", () =>
        {
            grid.removeRows( selection.top, selection.bottom );
        } );
    }
};

btn_remove_col.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Remove column", () =>
        {
            grid.removeColumns( selection.left, selection.right );
        } );
    }
};

btn_auto_height.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Rows auto size", () =>
        {
            grid.autoSizeRows( selection.top, selection.bottom );
        } );
    }
};

btn_auto_width.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Columns auto size", () =>
        {
            grid.autoSizeColumns( selection.left, selection.right );
        } );
    }
};

btn_clear_rows.onclick = () => grid.clearRows();

btn_task.onclick = () => grid.afterRender( () => console.log( "after render" ) );

btn_merge.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Merge cell", () =>
        {
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );
        } );
    }
};

btn_split.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Split cell", () =>
        {
            grid.splitCells( selection.top, selection.left );
        } );
    }
};

btn_reset.onclick = () => grid = createGrid();

btn_hide_rows.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Hide row", () =>
        {
            for( let r = selection.top; r <= selection.bottom; ++r )
            {
                grid.setRowVisible( r, false );
            }
        } );
    }
};

btn_show_rows.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Show row", () =>
        {
            for( let r = selection.top; r <= selection.bottom; ++r )
            {
                grid.setRowVisible( r, true );
            }
        } );
    }
};

btn_hide_columns.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Hide column", () =>
        {
            for( let c = selection.left; c <= selection.right; ++c )
            {
                grid.setColumnVisible( c, false );
            }
        } );
    }
};

btn_col_span_disabled.onclick = () =>
{
    grid.setClipboardOptions( { colSpan: false } );
};

btn_check_commands.onclick = () =>
{
    console.log( grid.commandManager );
};

btn_freeze_rows.onclick = () =>
{
    const selection = grid.getSelection();

    if( !selection ) return;

    grid.freezeRows( selection.bottom );
};

btn_unfreeze_rows.onclick = () => grid.freezeRows( 0 );
btn_unfreeze_cols.onclick = () => grid.freezeColumn( 0 );

btn_freeze_cols.onclick = () =>
{
    const selection = grid.getSelection();

    if( !selection ) return;

    grid.freezeColumn( selection.right - 1 );
};

chk_rowSpan.onclick = ( ev ) =>
{
    grid.setClipboardOptions( { rowSpan: ev.target.checked } );
};

chk_colSpan.onclick = ( ev ) =>
{
    grid.setClipboardOptions( { colSpan: ev.target.checked } );
};`,d=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"API 사용 샘플"}),n.jsx(r,{fixedHeight:700,htmlRaw:i,code:l})]});d.__docgenInfo={description:"",methods:[],displayName:"APIDemo"};const s='<div id="ir_grid" style="height: 500; width: 800"></div>',c=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 15,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 2, "실행판단식", "조건식" ),
    },
} );

window.grid = grid;

grid.onSelectCell = ( cell ) => console.log( "Clicked! row: " + cell.row + ", col: " + cell.col );

Array.from( { length: 20 }, () => grid.addRow() );

grid.mergeCells( 0, 0, 1, 0 );
grid.mergeCells( 0, 1, 0, 3 );
grid.mergeCells( 0, 4, 1, 4 );

grid.setText( 0, 1, "리턴 선택(디폴트)" );
grid.setText( 2, 1, "폰트" );
grid.setText( 1, 1, "설명" );
grid.setText( 1, 2, "[나이]" );
grid.setText( 1, 3, "[결과]" );
grid.setText( 2, 2, "10" );
grid.setText( 2, 3, "10000" );

grid.setCell( 1, 1, { isError: true } );
grid.setCell( 1, 3, { isError: true } );
grid.setCell( 2, 1, { isError: true, fontSize: "20px" } );
grid.setCell( 2, 2, { isError: true } );
grid.setCell( 2, 3, { isError: true } );
grid.setCell( 1, 2, { icon: "type-boolean-return", isError: true } );
grid.setCell( 3, 2, { icon: "type-boolean-return", iconColor: "rgb(255, 0, 0)" } );
grid.setCell( 3, 3, { text: "10,000 (잠금)", editable: false } );

grid.setCell( 4, 1, { text: "only memo", hasMemo: true, memo: "메모" } );
grid.setCell( 4, 2, { text: "memo & err", hasMemo: true, memo: "메모 & 에러", isError: true } );
grid.setCell( 4, 4, { hasMemo: true, isError: true, memo: "에러 메모 테스트", memoIntent: "error" } );

grid.mergeCells( 2, 1, 3, 1 );
grid.mergeCells( 4, 1, 4, 3 );
grid.mergeCells( 5, 2, 6, 4 );

grid.setColumnWidth( 4, 150 );
grid.setColumnWidth( 5, 70 );
grid.setRowHeight( 2, 100 );
grid.addColumn();
grid.addColumn( 100 );

grid.onEditKeyDown = ( ev, row, col, data ) =>
{
    console.log( \`Cell Key Events row : \${row}, col: \${col}\` );
    console.log( data );
    console.log( ev );
};

// 마운트된 후 자동 높이 조정
grid.onMountedRow = ( row ) => grid.autoSizeRow( row );`,a=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsxs("p",{children:[n.jsx("code",{children:"Grid"}),"형태로 사용자 상호작용을 처리하는 UI 컴포넌트입니다.",n.jsx("br",{}),n.jsx("code",{children:"cellRenderer"}),"를 이용하여 셀 출력 내용을 지정합니다."]}),n.jsx(r,{htmlRaw:s,code:c})]});a.__docgenInfo={description:"",methods:[],displayName:"Basic"};const g=`<div class="mb--lg">
    <button id="btn_check_commands" class="button">Check commands</button>
</div>
<div id="ir_grid" style="height: 500; width: 1300"></div>`,u=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const checkBoxRenderer = new libGrid.IRGridCheckboxRenderer( {
    onCheckboxClick: ( row, col, checked ) => console.log( row + "," + col + ":" + checked ),
} );

const radioRenderer = new libGrid.IRGridRadioCellRenderer( {
    onRadioClick: ( row, col ) => console.log( row + "," + col ),
} );

const items = [
    { value: "kr", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" },
    { value: "en2", text: "English 길이를 길게" },
    { value: "en3", text: "English3\\\\n길게길게\\\\n3줄" },
    { value: "en4", text: "English4 English4 English4 English4 English4 " },
    { value: "en5", text: "English5" },
    { value: "en7", text: "English6" },
    { value: "en8", text: "English7" },
    { value: "en9", text: "English8" },
    { value: "en11", text: "English9" },
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = new libGrid.IRGridSelectCellRenderer( {
    items,
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>
    {
        console.log( row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText );
    },
    allowCustomText: true,
    customDisplayTextFunc: ( value, text, custom ) =>
    {
        if( !custom ) return text;
        if( text === "" ) return "";

        return [ "(X)", text ].join( " " );
    },
    showErrorIfCustomText: true,
} );

const selectRenderer2 = new libGrid.IRGridSelectCellRenderer( {
    items,
    allowEdit: true,
} );

const datePickerRenderer = new libGrid.IRGridDatePickerRenderer( {
    onDateClick: ( row, col, text ) => console.log( text ),
    minDate: new Date(),
} );

const progressRenderer = new libGrid.IRGridProgressRenderer( {} );
const progressRenderer2 = new libGrid.IRGridProgressRenderer( { min: 0, max: 30, defaultIntent: "danger" } );
const buttonRenderer = new libGrid.IRGridButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeRow( row );
    },
    defaultIcon: "add",
} );

const iconDividerButtonRenderer = new libGrid.IRGridButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeRow( row );
    },
    iconDividerStyle: true,
    defaultLabel: "버튼 레이블",
    defaultIcon: "ellipsis",
} );

const iconDividerButtonRenderer2 = new libGrid.IRGridButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeRow( row );
    },
    iconDividerStyle: true,
    defaultLabel: "조건 룰",
    defaultIcon: "search-rule",
} );

const outlineButtonRenderer = new libGrid.IRGridButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        console.log( col );
        grid.autoSizeColumn( col );
    },
    defaultLabel: "자동부여",
    outlineStyle: true,
} );

const iconButtonRenderer = new libGrid.IRGridDefaultCellIconButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeColumn( col );
    },
} );

const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer( 1 );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 0,
        cellRenderer: ( row, col, data ) =>
        {

            switch( col )
            {
                case 2:
                    return checkBoxRenderer;
                case 3:
                    return selectRenderer;
                case 4:
                    return datePickerRenderer;
                case 5:
                    return progressRenderer;
                case 6:
                    return outlineButtonRenderer;
                case 7:
                    return progressRenderer2;
                case 8:
                    return buttonRenderer;
                case 9:
                    return radioRenderer;
                case 10:
                    return iconButtonRenderer;
                case 11:
                    return iconDividerButtonRenderer;
                case 12:
                    return iconDividerButtonRenderer2;
                case 13:
                    return selectRenderer2;
                default:
                    return defaultRenderer;
            }
        },
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [4]: { memo: "메모", hasMemo: true },
        [5]: { editable: false },
        ["body_6"]: { disabled: true },
        // 7 ~ 10열은 테스트 동작을 위해 지우는 동작이 있으므로 주의
    },
    colHeader: {
        rowCount: 1,
        colCount: 12,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 2,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 0:
                    return rowNoRenderer;
                case 1:
                    return defaultRenderer;
            }
        },
    },
} );

// for debugging
window.grid = grid;

btn_check_commands.onclick = () =>
{
    console.log( grid.commandManager );
};

grid.onUndo = ( cmd ) =>
{
    console.log( cmd );
};

grid.onRedo = ( cmd ) =>
{
    console.log( cmd );
};

grid.onSelectCell = ( cell ) =>
{
    console.log( "Clicked! row: " + cell.row + ", col: " + cell.col );
    console.log( cell.metaInfo );
};

Array.from( { length: 50 } )
    .forEach( () => grid.addRow() );

Array.from( { length: 10 } )
    .forEach( () => grid.addColumn() );

grid.removeRow( 8 );
grid.removeRows( 40, 49 );
grid.removeColumn( 7 );
grid.removeColumns( 7, 10 );

grid.setText( 0, 1, "-" );
grid.setText( 0, 2, "2" );
grid.setText( 0, 3, "3" );
grid.setText( 0, 4, "4" );
grid.setText( 0, 5, "5" );
grid.setText( 0, 6, "6" );
grid.setText( 0, 7, "7" );
grid.setText( 0, 8, "8" );
grid.setText( 0, 9, "9" );
grid.setText( 3, 9, "true" );
grid.setText( 0, 10, "10" );
grid.setCell( 0, 0, {
    icon: "flowrule-if-node",
    text: "행 번호",
    horizontalAlign: "left",
    verticalAlign: "bottom",
} );

grid.setText( 1, 5 );
grid.setCell( 1, 10, { text: "Icon", icon: "save" } );
grid.setCell( 2, 10, { text: "", icon: "save" } );
grid.setCell( 3, 10, { text: "", icon: "save", horizontalAlign: "center" } );

grid.setCell( 1, 11, { text: "다중Row\\\\n다중다중\\\\n다중 텍스트", icon: "save" } );
grid.setCell( 2, 11, { text: "다중Row\\\\n다중다중\\\\n다중 텍스트" } );
grid.setCell( 3, 11, { text: "123\\\\n456\\\\n..." } );
grid.setCell( 4, 11, { text: "1\\\\n2\\\\n3" } );
grid.setCell( 4, 11, { text: "길고 긴 텍스트 테스트 길이 너비" } );

grid.setCell( 1, 2, { readonly: true, label: "레이블레이블레이블레이블" } );
grid.setCell( 2, 2, { disabled: true } );
grid.setCell( 3, 2, { readonly: true, disabled: true } );
grid.setCell( 1, 3, { readonly: true } );
grid.setCell( 2, 3, { disabled: true } );
grid.setCell( 3, 3, { readonly: true, disabled: true } );
grid.setCell( 1, 4, { readonly: true } );
grid.setCell( 2, 4, { disabled: true } );
grid.setCell( 3, 4, { readonly: true, disabled: true } );
grid.setCell( 10, 8, { disabled: true } );

grid.setCell( 2, 8, { label: "저장" } );
grid.setCell( 3, 8, { label: "룰 저장22019191 10-101" } );
grid.setCell( 3, 11, { label: "A\\\\nB\\\\nC" } );

grid.setText( 1, 2, "true" );
grid.setText( 1, 3, "한국어" );
grid.setText( 2, 3, "한국어" );
grid.setText( 5, 3, "English" );
grid.setText( 6, 3, "임의 텍스트" );
grid.setText( 1, 5, "100" );
grid.setText( 2, 5, "0" );
grid.setText( 3, 5, "50" );
grid.setText( 4, 5, "10" );
grid.setCell( 5, 5, { intent: "warning" } );
grid.setText( 5, 5, "5" );
grid.setText( 1, 7, "100" );
grid.setText( 2, 7, "50" );
grid.setText( 3, 7, "10" );
grid.setText( 4, 7, "5" );
grid.setText( 5, 7, "3" );
grid.setText( 6, 7, "1" );

grid.autoSizeColumn( 2 );
grid.setColumnWidth( 3, 150 );
grid.selectRange( 3, 3, 5, 5 );
grid.setColumnWidth( 4, 150 );

grid.setText( 1, 1, "ABC" );
grid.setText( 1, 4, "2022-06-01" );
grid.setText( 2, 4, "2022-06-15" );
grid.setText( 3, 4, "2022-06-30" );
grid.setText( 4, 4, "2022-07-15" );

grid.setObject( 1, 1, { a: 1 } );
console.log( grid.getObject( 1, 1 ) );
console.log( grid.getObject( 1, 2 ) );

grid.setRowTextColor( 1, "blue" );
grid.setCell( 1, 3, { textColor: "red", backColor: "black" } );
grid.setRowHeight( 1, 100 );
grid.setCell( 1, 8, { intent: "primary" } );
grid.setCell( 2, 8, { intent: "secondary" } );

grid.setCell( 2, 9, { disabled: true } );

grid.autoSizeColumns( 3, 7 );
grid.freezeColumn( 3 );
grid.freezeRows( 2 );

grid.setCell( 1, 6, { disabled: false, backColor: "var(--background-color)" } );
grid.setCell( 2, 6, { disabled: false } );

grid.setCell( 2, 6, { label: "달디다고 달디달고 달디단 밤양갱" } );`,b=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsxs("p",{children:[n.jsx("code",{children:"cellRenderer"}),"를 재정의하여 여러 타입의 셀을 출력할 수 있습니다."]}),n.jsx(r,{htmlRaw:g,code:u})]});b.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const m=`<div class="mb--sm">
    <button id="btn_bulk" class="button">Append Bulk Data (Slow)</button>
    <button id="btn_bulk2" class="button">Append Bulk Data (Improved)</button>
    <button id="btn_clear" class="button">Clear</button>
    <button id="btn_hide" class="button">all hide</button>
    <button id="btn_visible" class="button">all visible</button>
</div>
<div id="ir_grid" style="height: 500; width: '100%'"></div>`,w=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 0,
    },
    colHeader: {
        rowCount: 1,
        colCount: 50,
    },
    rowHeader: {
        colCount: 1,
    },
} );

window.grid = grid;

const BULK_ROWS = 1000;

for( let j = 1; j < grid.getColCount(); j++ )
{
    grid.setText( 0, j, String( j ) );
}

function bulkInsert1()
{
    for( let i = 0; i < BULK_ROWS; i++ )
    {
        const rowNo = grid.addRow();

        grid.setText( rowNo, 0, String( i + 1 ) );

        for( let j = 1; j < grid.getColCount(); j++ )
        {
            grid.setText( rowNo, j, i + "," + j );
        }
    }
}

function bulkInsert2()
{
    for( let i = 0; i < BULK_ROWS; i++ )
    {
        const rowNo = grid.addRow();

        grid.setRowInfo( rowNo, {
            textData: rowArrayBuffer( rowNo, grid.getColCount() ),
        } );
    }
}

function timeElapsed( func )
{
    const start = performance.now();
    func();
    const end = performance.now();

    console.log( end - start );

}

btn_bulk.onclick = () =>
{
    timeElapsed( bulkInsert1 );
};

function rowArrayBuffer( rowNo, size )
{
    const arr = [String( rowNo )];

    for( let j = 1; j < size; j++ )
    {
        arr.push( rowNo + "," + j );
    }

    return arr;
}

btn_bulk2.onclick = () =>
{
    timeElapsed( bulkInsert2 );
};

btn_clear.onclick = () => grid.clearRows();

btn_hide.onclick = () =>
{
    grid.setRowVisibleBulk( 1, Array( grid.getRowCount() - 1 ).fill( false ) );
};

btn_visible.onclick = () =>
{
    grid.setRowVisibleBulk( 1, Array( grid.getRowCount() - 1 ).fill( true ) );
};`,h=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{htmlRaw:m,code:w})]});h.__docgenInfo={description:"",methods:[],displayName:"BulkData"};const p='<div id="ir_grid" style="height: 500; width: 800"></div>',x=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 50,
    },
    colHeader: {
        rowCount: 0,
        colCount: 15,
    },
    rowHeader: {
        colCount: 0,
    },
} );

window.grid = grid;`,C=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"헤더 없는 버전 테스트"}),n.jsx(r,{htmlRaw:p,code:x})]});C.__docgenInfo={description:"",methods:[],displayName:"NoHeader"};const R=`<div style="
    display: flex;
    flex-direction: row;
    height: 500px;
    column-gap: 8px;
">
    <div id="ir_grid1" style="flex: 1"></div>
    <div id="ir_grid2" style="flex: 1"></div>
</div>`,_=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const rowNoRenderer = libGrid.renderRowNoHeaderCell( 1 );
const defaultRenderer = libGrid.renderGridCellDefault();

( function()
{
    const grid = new libGrid.IRGrid( {
        contextElement: ir_grid1,
        body: {
            rowCount: 32,
        },
        colHeader: {
            rowCount: 1,
            colCount: 16,
            cellRenderer: ( row, col, data ) =>
            {
                if( col > 1 )
                    data.text = col.toString();

                return defaultRenderer();
            },
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: ( row, col, data ) =>
                col === 0 ? rowNoRenderer() : defaultRenderer(),
        },
        plugins: [
            libGrid.SingleCellDragPlugin(),
            libGrid.CellDropPlugin(),
            libGrid.DefaultKeyPlugin(),
        ],
        defaultColumnCellFormat: {
            all: { draggable: true },
            // 1번 열 drag 기능 비활성화
            [1]: { draggable: false },
        },
    } );

    grid.onDropOnCell = ( row, col, ev ) =>
    {
        const data = ev.dataTransfer.getData( "application/json" );
        const json = JSON.parse( data );

        grid.commandManager.doRecording( "Drag-Drop", () =>
        {
            grid.setText( row, col, json.name );
            grid.setObject( row, col, json );
        } );
    };

    grid.mergeCells( 2, 2, 3, 3 );

    grid.setText( 0, 1, "Drag 막힘" );
    grid.setText( 2, 2, "Drag 활성화 셀" );
    grid.setObject( 2, 2, { name: "Drag 활성화 셀" } );

} )();

( function()
{
    const grid = new libGrid.IRGrid( {
        contextElement: ir_grid2,
        body: {
            rowCount: 32,
        },
        colHeader: {
            rowCount: 1,
            colCount: 16,
            cellRenderer: ( row, col, data ) =>
            {
                if( col !== 0 )
                    data.text = col.toString();

                return defaultRenderer( row, col, data );
            },
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: ( row, col, data ) =>
                col === 0 ? rowNoRenderer( row, col, data ) : defaultRenderer( row, col, data ),
        },
        plugins: [
            libGrid.SingleCellDragPlugin(),
            libGrid.CellDropPlugin(),
            libGrid.DefaultKeyPlugin(),
        ],
        defaultColumnCellFormat: {
            all: { draggable: true },
        },
    } );

    grid.onDropOnCell = ( row, col, ev ) =>
    {
        const data = ev.dataTransfer.getData( "application/json" );
        const json = JSON.parse( data );

        grid.commandManager.doRecording( "Drag-Drop", () =>
        {
            grid.setText( row, col, json.name );
            grid.setObject( row, col, json );
        } );
    };

    grid.mergeCells( 1, 1, 2, 3 );

} )();`,f=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsxs("p",{children:[n.jsx("code",{children:"SingleCellDragPlugin"}),"을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다."]}),n.jsxs("p",{children:["셀의 ",n.jsx("code",{children:"draggable"})," 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다."]}),n.jsx(r,{htmlRaw:R,code:_})]});f.__docgenInfo={description:"",methods:[],displayName:"CellDrag"};const v=`<button id="btn1" class='button'>visible on/off</button>
<div class="flex background--light">
    <div id="split1">
        <div id="ir_grid" style="height: 500; width: 100%; display: none"></div>
    </div>
    <div id="split2"></div>
</div>`,y=`import { createSplitContainer } from "@innorules/ir-style";
import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
        maxSize: 9999,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 1 ),
    },
} );

grid.setColumnWidth( 0, 80 );
grid.setColumnWidth( 1, 80 );
grid.setColumnWidth( 2, 120 );
grid.setColumnWidth( 3, 120 );
grid.setColumnWidth( 4, 160 );

grid.addPlugin( libGrid.ColumnFillPlugin( {
    columnWeight: [ "120px", 1, 1, 1, 2 ],
} ) );

btn1.onclick = () =>
{

    if( ir_grid.style.display )
    {
        ir_grid.style.removeProperty( "display" );
    }
    else
    {
        ir_grid.style.display = "none";
    }
};

createSplitContainer( [
    "#split1",
    "#split2",
], {
} );`,G=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid ColumnFill"}),n.jsx("p",{children:"ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)"}),n.jsxs("p",{children:["colHeader의 ",n.jsx("code",{children:"maxSize"}),"를 9999로 설정해야 열 크기 제한 문제가 없습니다."]}),n.jsx(r,{fixedHeight:600,htmlRaw:v,code:y})]});G.__docgenInfo={description:"",methods:[],displayName:"ColumnFill"};const k='<div id="ir_grid" style="height: 500"></div>',T=`import { getThemeStore } from "@innorules/ir-style";
import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

getThemeStore().setStoreValue( "grid.paddingTop", 3 );
getThemeStore().setStoreValue( "grid.paddingBottom", 4 );
getThemeStore().setStoreValue( "grid.paddingLeft", 6 );
getThemeStore().setStoreValue( "grid.paddingRight", 6 );
getThemeStore().setStoreValue( "grid.defaultRowHeight", 24 );

const checkBoxRenderer = new libGrid.IRGridCheckboxRenderer( {} );
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer( {} );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    colHeader: {
        rowCount: 1,
        colCount: 5,
        maxSize: 9999,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 1 ),
    },
    body: {
        rowCount: 30,
        cellRenderer: ( row, col ) =>
        {
            return col === 1
                ? checkBoxRenderer
                : defaultRenderer;
        },
    },
    defaultColumnCellFormat: {
        ["body_1"]: { icon: "save" },
    },
} );

grid.setColumnWidth( 0, 80 );
grid.setColumnWidth( 1, 80 );
grid.setColumnWidth( 2, 120 );
grid.setColumnWidth( 3, 120 );
grid.setColumnWidth( 4, 160 );`,I=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid Configuration"}),n.jsx("p",{children:"Grid 내부 패딩을 조절할 수 있습니다."}),n.jsx(r,{fixedHeight:600,htmlRaw:k,code:T})]});I.__docgenInfo={description:"",methods:[],displayName:"GridConfig"};const S='<div id="ir_grid" style="height: 500; width: 800"></div>',j=`import { IRContextMenu } from "@innorules/ir-style";
import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 8,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 2, "실행판단식", "조건식" ),
    },
} );

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

menu.onCommandButtonClick = ( { ev, item } ) =>
{
    if( item.id === "add-row" )
        grid.addRow();
};

grid.onContextMenu = ( ev, cell ) =>
{
    if( cell )
        grid.selectCell( cell.row, cell.col );

    menu.showAtPoint( ev.clientX, ev.clientY );
};

grid.mergeCells( 2, 1, 3, 3 );`,D=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{htmlRaw:S,code:j})]});D.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};const E='<div id="ir_grid" style="height: 500; width: 1300"></div>',A=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

// 함수형 렌더러
const customRenderer = ( row, col, data ) =>
{
    const element = document.createElement( "div" );

    // IRGrid 기본 셀 패딩 적용을 위해 속성 설정
    element.setAttribute( "data-has-px", "" );
    element.setAttribute( "data-has-py", "" );

    element.className = "ir_grid_cell_content";
    element.innerHTML = "text = <span style='color: red;'>[xyz]</span>";

    return element;
};

// 클래스형 렌더러
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 3:
                    return customRenderer( row, col, data );
                default:
                    return defaultRenderer;
            }
        },
    },
    defaultColumnCellFormat: { },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 2,
    },
} );`,M=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsxs("p",{children:[n.jsx("code",{children:"cellRenderer"}),"인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다."]}),n.jsx(r,{htmlRaw:E,code:A})]});M.__docgenInfo={description:"",methods:[],displayName:"CustomRenderer"};const H=`<div style="display: flex; height: 500; column-gap: 8">
    <div id="tree" style="width: 300"></div>
    <div id="ir_grid" style="height: '100%'; width: '100%'"></div>
</div>`,P=`import { IRTree } from "@innorules/ir-style";
import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const rowNoRenderer = libGrid.renderRowNoHeaderCell( 1 );
const defaultRenderer = libGrid.renderGridCellDefault();

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 100,
    },
    colHeader: {
        rowCount: 2,
        colCount: 15,
    },
    rowHeader: {
        colCount: 3,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 0:
                    return rowNoRenderer();
                default:
                    return defaultRenderer();
            }
        },
    },
    defaultColumnCellFormat: {
        [5]: { dropDisabled: true },
    },
} );

grid.freezeRows( 5 );
grid.freezeColumns( 5 );
grid.setText( 0, 5, "drop 비활성화" );

grid.onDropOnCell = ( row, col, ev ) =>
{
    const data = ev.dataTransfer.getData( "application/json" );
    const json = JSON.parse( data );

    grid.commandManager.doRecording( "Drag-Drop", () =>
    {
        grid.setText( row, col, json.name );
    } );
};

grid.setCell( 3, 3, { disabled: true } );
grid.mergeCells( 4, 6, 6, 9 );

const tree = new IRTree( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
    data: {
        id: 0,
        name: "",
    },
} );

// 노드 추가
const node = tree.addChild( null, "이노은행", {
    id: 1,
    name: "이노은행",
} );

// 자식 노드 추가 (부모 노드가 첫 번재 인자)
const b = tree.addChild( node, "계좌", {
    id: 2,
    name: "계좌",
} );

b.iconClass = "ir-icon--folder-open-outline";

tree.addChild( node, "카드", {
    id: 5,
    name: "카드",
} );

tree.expandAll();`,N=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"좌측 Tree 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다."}),n.jsx(r,{htmlRaw:H,code:P})]});N.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};const z=`<div class="flex mb--lg" style=" align-items:center; column-gap: 4px">
    source:
    <div class=" input" style="display: inline-block; width: 100">
        <input id=" input_source" class="input__native" />
    </div>
    target:
    <div class="input" style=" display: inline-block; width: 100">
        <input id=" input_target" class="input__native" />
    </div>
    <button type='button' id="btn_exchange_row" class='button'>행 교체</button>
    <button type='button' id="btn_exchange_col" class='button'>열 교체</button>
    <button type='button' id="btn_on" class='button ml--xl'>Drag On</button>
    <button type='button' id="btn_off" class='button'>Drag Off</button>
    <button type='button' id="btn_merge" class='button ml--xl'>셀 병합</button>
    <button type='button' id="btn_freeze" class='button'>행 고정</button>
    <button type='button' id="btn_freeze_col" class='button'>열 고정</button>
</div>
<div id="ir_grid" style=" height: 500; width: 800 "></div>`,B=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );
const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer( 1 );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: { rowCount: 0 },
    colHeader: {
        rowCount: 1,
        colCount: 16,
    },
    rowHeader: {
        colCount: 1,
    },
} );

window.__grid = grid;

function addRow()
{
    const rowNo = grid.addRow();

    grid.cell( rowNo, 6 ).cellRenderer = checkboxCellRenderer;

}

Array.from( { length: 30 } ).forEach( addRow );

grid.setText( 0, 1, "1" );
grid.setText( 0, 2, "2" );
grid.setText( 0, 3, "3" );
grid.setText( 0, 4, "4" );
grid.setText( 0, 5, "5" );
grid.setText( 0, 6, "6" );

Array.from( { length: 24 } )
    .forEach( ( _, id ) =>
    {
        grid.setText( id + 1, 0, id + 1 );
        grid.setText( id + 1, 1, id );
        grid.setText( id + 1, 2, "text-" + id );
        grid.setText( id + 1, 3, "text2-" + id );
        grid.setText( id + 1, 4, "text3" + id );
        grid.setCell( id + 1, 5, { text: "String", icon: "add" } );
        grid.setCell( id + 1, 6, { label: "Check" } );
    } );

grid.setText( 6, 6, "true" );
grid.mergeCells( 4, 3, 5, 4 );

btn_exchange_row.onclick = () =>
{
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );
    const target = input_target.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );

    grid.commandManager.doRecording( "Exchange Rows", () =>
    {
        grid.exchangeRows( source, target );
    } );
};
btn_exchange_col.onclick = () =>
{
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );
    const target = input_target.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );

    grid.commandManager.doRecording( "Exchange Columns", () =>
    {
        grid.exchangeColumns( source, target );
    } );
};

const exchangePlugin = new libGrid.IRGridExchangeByHeaderCellPlugin();
grid.addPlugin( exchangePlugin );

btn_on.onclick = () =>
{
    grid.addPlugin( exchangePlugin );
};
btn_off.onclick = () =>
{
    grid.removePlugin( exchangePlugin );
};
btn_merge.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Merge", () =>
        {
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );
        } );
    }
};
btn_freeze.onclick = () =>
{
    const selection = grid.getSelection();
    if( !selection ) return;

    grid.freezeRows( selection.bottom );
};

btn_freeze_col.onclick = () =>
{
    const selection = grid.getSelection();
    if( !selection ) return;

    grid.freezeColumns( selection.left );
};`,$=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"헤더를 드래그하여 셀 내용 교체"}),n.jsx(r,{htmlRaw:z,code:B})]});$.__docgenInfo={description:"",methods:[],displayName:"Exchange"};const F=`<div class='search'>
    <div class='search__input-group'>
        <div class='search__input-group-row'>
            <div class='form-item'>
                <div class='form-item__label width--xxs'>검색어</div>
                <div class='form-item__control'>
                    <div class='input'><input id="search_text" type="text" class='input__native'></div>
                </div>
            </div>
        </div>
        <div id='control_panel' class='search__input-group-row'>
            <div class='row gap-x--3xl mt--xxl'>
                <div class="row flex--column col col--none gap-y--xs">
                    <div class='col col--none checkbox'>
                        <label class='checkbox__wrapper'>
                            <input id='ignore_case' type="checkbox" class="checkbox__input">
                            <span class='checkbox__text'>대소문자 구분</span>
                        </label>
                    </div>
                    <div class='col col--none checkbox'>
                        <label class='checkbox__wrapper'>
                            <input id="match_all" type="checkbox" class="checkbox__input">
                            <span class='checkbox__text'>전체 텍스트 일치</span>
                        </label>
                    </div>
                </div>
                <div class="row flex--column col col--none gap-y--xs">
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='area' value="all" checked>
                            <span class="radio__text">모두</span>
                        </label>
                    </div>
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='area' value="selection">
                            <span class="radio__text">선택한 영역</span>
                        </label>
                    </div>
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='area' value="selected-row">
                            <span class="radio__text">선택한 행</span>
                        </label>
                    </div>
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='area' value="selected-col">
                            <span class="radio__text">선택한 열</span>
                        </label>
                    </div>
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='area' value="custom">
                            <span class="radio__text">임의 범위(0,0 ~ 10,10)</span>
                        </label>
                    </div>
                </div>
                <div class="row flex--column col col--none gap-y--xs">
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='direction' value="by-rows" checked>
                            <span class="radio__text">행 우선</span>
                        </label>
                    </div>
                    <div class='col col--none radio'>
                        <label class="radio__wrapper">
                            <input type="radio" class="radio__input" name='direction' value="by-columns">
                            <span class="radio__text">열 우선</span>
                        </label>
                    </div>
                </div>
                <div class="row flex--column col col--none gap-y--xs">
                    <div class='col col--none checkbox'>
                        <label class='checkbox__wrapper'>
                            <input id='has_header_rows' type="checkbox" class="checkbox__input">
                            <span class='checkbox__text'>헤더 행 포함</span>
                        </label>
                    </div>
                    <div class='col col--none checkbox'>
                        <label class='checkbox__wrapper'>
                            <input id='has_header_cols' type="checkbox" class="checkbox__input">
                            <span class='checkbox__text'>헤더 열 포함</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button id='btn' type="button" class="button button--tertiary">다음 찾기</button>
    <button id='btn_cursor' type="button" class="button button--tertiary">Set Cursor</button>
</div>

<input id='replace' type="text" placeholder='변경할 내용'>
<button id="btn_replace" class='button'>모두 변경</button>

<div id="ir_grid" style="height: 500; width: '100%'"></div>`,O=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 30,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 1 ),
    },
} );

const finder = grid.createFinder();

function getOptions()
{
    return {
        ignoreCase: ignore_case.checked === false,
        matchAll: match_all.checked === true,
        text: search_text.value,
        area: Array.from( document.querySelectorAll( "input[name='area']" ) ).filter( ( input ) => input.checked )[0].value,
        direction: Array.from( document.querySelectorAll( "input[name='direction']" ) ).filter( ( input ) => input.checked )[0].value,
        customRange: { top: 0, bottom: 10, left: 0, right: 10 },
        hasHeaderRows: has_header_rows.checked,
        hasHeaderColumns: has_header_cols.checked,
    };
}

btn.onclick = () =>
{
    const cell = finder.findNext( getOptions() );

    if( cell )
    {
        grid.selectCell( cell.row, cell.col );
        grid.scrollInView( cell.row, cell.col );
    }
    else
        alert( "찾을 수 없음!" );
};

btn_replace.onclick = () =>
{
    const cells = finder.getAllMatchedCell( getOptions() );

    for( const cell of cells )
    {
        cell.text = cell.text.replace( new RegExp( search_text.value ), replace.value );
    }
};

btn_cursor.onclick = () =>
{
    const cell = grid.activeCell;

    if( !cell ) return;

    finder.setCursor( cell.row, cell.col );
};

grid.setText( 1, 1, "1" );
grid.setText( 2, 2, "1" );
grid.setText( 3, 2, "1" );
grid.setText( 4, 1, "1" );
grid.setText( 5, 5, "1" );
grid.setText( 1, 2, "1bc" );
grid.setText( 1, 3, "A" );
grid.setText( 1, 4, "a" );
grid.setText( 2, 4, "aBc" );
grid.setText( 3, 4, "ABC" );
grid.setText( 4, 4, "abc" );

Array.from( { length: 15 } )
    .forEach( ( _, r ) =>
    {
        grid.setText( 1, 5 + r, "1" );
        grid.setText( r + 10, 1, "1" );
    } );`,L=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid Finder"}),n.jsx("p",{children:"Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다."}),n.jsx(r,{htmlRaw:F,code:O})]});L.__docgenInfo={description:"",methods:[],displayName:"Finder"};const V='<div id="ir_grid" style="height: 500; width: 1300"></div>',W=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox( { } );
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect( {
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" },
    ],
} );
const datePickerRenderer = libGrid.renderGridDatePicker( {} );
const rowNoRenderer = libGrid.renderRowNoHeaderCell( 1 );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 2000,
        cellRenderer: ( row, col, data ) =>
        {

            switch( col )
            {
                case 2:
                    return checkBoxRenderer();
                case 3:
                    return selectRenderer();
                case 4:
                    return datePickerRenderer();
                default:
                    return defaultRenderer();
            }
        },
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [5]: { editable: false },
        [6]: { disabled: true },
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 2,
        defaultSize: 50,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 0:
                    return rowNoRenderer();
                default:
                    return defaultRenderer();
            }
        },
    },
} );`,K=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{htmlRaw:V,code:W})]});K.__docgenInfo={description:"",methods:[],displayName:"Rows2000"};const q=`<div class="flex mb--lg" style="align-items: center; column-gap: 4px">
    source: <div class="input" style="display: inline-block; width: 100">
        <input id="input_source" class="input__native" />
    </div>
    target: <div class="input" style="display: inline-block; width: 100">
        <input id="input_target" class="input__native" />
    </div>
    <button type='button' id="btn_move_row" class='button'>행 이동</button>
    <button type='button' id="btn_move_col" class='button'>열 이동</button>
    <button type='button' id="btn_on" class='button ml--xl'>Row Drag On</button>
    <button type='button' id="btn_off" class='button'>Row Drag Off</button>
    <button type='button' id="btn_merge" class='button ml--xl'>셀 병합</button>
    <button type='button' id="btn_freeze" class='button'>행 고정</button>
    <button type='button' id="btn_freeze_col" class='button'>열 고정</button>
</div>
<div id="ir_grid" style="height: 500; width: 800"></div>`,J=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );
const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer( 1 );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: { rowCount: 0 },
    colHeader: {
        rowCount: 1,
        colCount: 16,
    },
    rowHeader: {
        colCount: 1,
    },
} );

window.__grid = grid;

function addRow()
{
    const rowNo = grid.addRow();

    grid.cell( rowNo, 6 ).cellRenderer = checkboxCellRenderer;

}

Array.from( { length: 30 } ).forEach( addRow );

grid.setText( 0, 1, "1" );
grid.setText( 0, 2, "2" );
grid.setText( 0, 3, "3" );
grid.setText( 0, 4, "4" );
grid.setText( 0, 5, "5" );
grid.setText( 0, 6, "6" );

Array.from( { length: 24 } )
    .forEach( ( _, id ) =>
    {
        grid.setText( id + 1, 0, id + 1 );
        grid.setText( id + 1, 1, id );
        grid.setText( id + 1, 2, "text-" + id );
        grid.setText( id + 1, 3, "text2-" + id );
        grid.setText( id + 1, 4, "text3" + id );
        grid.setCell( id + 1, 5, { text: "String", icon: "add" } );
        grid.setCell( id + 1, 6, { label: "Check" } );
    } );

grid.setText( 6, 6, "true" );
grid.mergeCells( 4, 3, 5, 4 );

btn_move_row.onclick = () =>
{
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );
    const target = parseInt( input_target.value, 10 );

    grid.commandManager.doRecording( "Move Rows", () =>
    {
        grid.moveRows( source, target );
    } );
};
btn_move_col.onclick = () =>
{
    const source = input_source.value.split( "," ).map( ( val ) => parseInt( val, 10 ) );
    const target = parseInt( input_target.value, 10 );

    grid.commandManager.doRecording( "Move Columns", () =>
    {
        grid.moveColumns( source, target );
    } );
};

const moveRowPlugin = new libGrid.IRGridMoveRowsPlugin();
const moveColPlugin = new libGrid.IRGridMoveColumnsPlugin();

grid.addPlugin( moveRowPlugin );
grid.addPlugin( moveColPlugin );

btn_on.onclick = () =>
{
    grid.addPlugin( moveRowPlugin );
};
btn_off.onclick = () =>
{
    grid.removePlugin( moveRowPlugin );
};
btn_merge.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Merge", () =>
        {
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );
        } );
    }
};
btn_freeze.onclick = () =>
{
    const selection = grid.getSelection();
    if( !selection ) return;

    grid.freezeRows( selection.bottom );
};

btn_freeze_col.onclick = () =>
{
    const selection = grid.getSelection();
    if( !selection ) return;

    grid.freezeColumns( selection.left );
};`,U=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"헤더를 드래그하여 행/열 이동"}),n.jsx(r,{htmlRaw:q,code:J})]});U.__docgenInfo={description:"",methods:[],displayName:"HeaderMove"};const X=`<style>
    .grid-wrapper {
        height: 600px;
        display: grid;
        gap: 8px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .ir_grid:focus {
        outline: 1px solid red;
    }
</style>

<div class="grid-wrapper">
    <div id="ir_grid1"></div>
    <div id="ir_grid2"></div>
    <div id="ir_grid3"></div>
    <div id="ir_grid4"></div>
</div>`,Y=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const gridList = [];

for( let i = 1; i <= 4; i++ )
{
    gridList.push(
        new libGrid.IRGrid( {
            contextElement: document.getElementById( "ir_grid" + i ),
            body: {
                rowCount: 5,
            },
            colHeader: {
                rowCount: 1,
                colCount: 6,
            },
        } ),
    );
}

window.__GRID_LIST = gridList;`,Q=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{htmlRaw:X,code:Y})]});Q.__docgenInfo={description:"",methods:[],displayName:"Multiple"};const Z=`<button type='button' id="btn_freeze_rows" class='button mb--sm'>행 고정</button>
<button type='button' id="btn_freeze_cols" class='button mb--sm'>열 고정</button>
<button type='button' id="btn_merge" class='button mb--sm'>셀 병합</button>
<button class='button' id='btn_hide_rows'>행 숨김</button>
<button class='button' id='btn_show_rows'>행 표시</button>
<button class='button' id='btn_hide_columns'>열 숨김</button>
<button class='button' id='btn_show_columns'>열 표시</button>
<br />
<div style="height: 400; display: grid">
    <div id="ir_grid"></div>
</div>`,nn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 20,
        cellRenderer: ( row, col, data ) =>
        {
            if( col > 0 )
            {
                data.text = col.toString();
            }
            return defaultCellRenderer;
        },
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 1 ),
    },
} );

// 디버깅용 전역 변수화
window.grid = grid;

btn_freeze_rows.onclick = () =>
{
    const selection = grid.getSelection();

    if( !selection ) return;

    grid.freezeRows( selection.bottom );
};

btn_freeze_cols.onclick = () =>
{
    const selection = grid.getSelection();

    if( !selection ) return;

    grid.freezeColumns( selection.right );
};

btn_merge.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Merge cell", () =>
        {
            grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );
        } );
    }
};

btn_hide_rows.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Hide row", () =>
        {
            for( let r = selection.top; r <= selection.bottom; ++r )
            {
                grid.setRowVisible( r, false );
            }
        } );
    }
};

btn_show_rows.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Show row", () =>
        {
            for( let r = selection.top; r <= selection.bottom; ++r )
            {
                grid.setRowVisible( r, true );
            }
        } );
    }
};

btn_show_columns.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Show column", () =>
        {
            for( let c = selection.left; c <= selection.right; ++c )
            {
                grid.setColumnVisible( c, true );
            }
        } );
    }
};

btn_hide_columns.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Hide column", () =>
        {
            for( let c = selection.left; c <= selection.right; ++c )
            {
                grid.setColumnVisible( c, false );
            }
        } );
    }
};

grid.addPlugin( new libGrid.IRGridOverflowPanelPlugin( {
    style: {
        height: 400,
        width: "100%",
    },
} ) );`,en=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid Overflow Panel"}),n.jsx("p",{children:"IRGrid가 overflow될 경우 Grid의 스크롤 제어를 간편하게 할 수 있는 편의 기능을 제공한다."}),n.jsx(r,{fixedHeight:500,htmlRaw:Z,code:nn})]});en.__docgenInfo={description:"",methods:[],displayName:"OverflowPanel"};const tn='<div id="ir_grid" style="height: 500; width: 1300"></div>',rn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox( { } );
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect( {
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" },
    ],
} );
const datePickerRenderer = libGrid.renderGridDatePicker( {} );
const rowNoRenderer = libGrid.renderRowNoHeaderCell( 1 );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 50,
        cellRenderer: ( row, col, data ) =>
        {

            switch( col )
            {
                case 2:
                    return checkBoxRenderer();
                case 3:
                    return selectRenderer();
                case 4:
                    return datePickerRenderer();
                default:
                    return defaultRenderer();
            }
        },
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [5]: { editable: false },
        [6]: { disabled: true },
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 2,
        defaultSize: 50,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 0:
                    return rowNoRenderer();
                default:
                    return defaultRenderer();
            }
        },
    },
    plugins: [
        libGrid.RowSelectionPlugin(),
        libGrid.DefaultKeyPlugin( { rowSelection: true } ),
    ],
} );

grid.onSelectCell = ( cell ) => console.log( cell.row );`,on=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{}),n.jsx(r,{htmlRaw:tn,code:rn})]});on.__docgenInfo={description:"",methods:[],displayName:"RowSelection"};const ln=`<button type='button' id="btn_reset_sort" class='button mb--sm'>정렬 초기화</button>
<button type='button' id="btn_print" class='button mb--sm'>스냅샷 출력</button>
<label>
    <input type='checkbox' id="chk_toggle_column_click" checked />열 클릭 활성화
</label>
<br />
<div id="ir_grid" style="height: 500px; width: 800px"></div>`,dn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const radioCellRenderer = new libGrid.IRGridRadioCellRenderer( {} );
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 50,
        cellRenderer: ( row, col ) =>
        {
            if( col === 5 ) return radioCellRenderer;
            if( col === 6 ) return checkboxCellRenderer;

            return defaultCellRenderer;
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 7,
    },
    rowHeader: {
        colCount: 1,
    },
} );

// 디버깅용 전역 변수화
window.grid = grid;

grid.setCell( 0, 1, { text: "Number" } );
grid.setCell( 0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );
grid.setCell( 0, 3, { text: "Text", icon: "type-string" } );
grid.setCell( 0, 4, { text: "Text", icon: "type-string" } );
grid.setCell( 0, 5, { text: "Radio" } );
grid.setCell( 0, 6, { text: "체크박스" } );

Array.from( { length: 24 } )
    .forEach( ( _, id ) =>
    {
        grid.setText( id + 1, 1, ( id + 1 ).toString() );
        grid.setText( id + 1, 2, Math.floor( Math.random() * 10000 ).toString() );
        grid.setText( id + 1, 3, Math.floor( Math.random() * 10000 ).toString( 16 ) );
        grid.setText( id + 1, 4, Math.floor( Math.random() * 20 ).toString() );
        grid.setCell( id + 1, 5, { label: "Radio" } );
        grid.setCell( id + 1, 6, { label: "Check" } );
    } );

grid.setText( 25, 1, -100 );
grid.setText( 26, 1, -20 );
grid.setText( 27, 1, 0 );
grid.setText( 28, 1, -200 );
grid.setText( 29, 1, -999999 );
grid.setText( 30, 1, "bb" );
grid.setText( 31, 1, "ba" );
grid.setText( 32, 1, "a" );
grid.setText( 33, 1, "cc" );
grid.setText( 34, 1, "zy" );
grid.setText( 35, 1, "zi" );

const sortManager = libGrid.createIRGridColumnSortManager( grid );

sortManager.overrideColumnClickEvent();

btn_reset_sort.onclick = () =>
{
    sortManager.clearSortOrder();
};

btn_print.onclick = () =>
{
    const rows = sortManager.getSnapshotRows();

    console.log( rows[0].getCell( 1 ).text );
    console.log( rows[1].getCell( 1 ).text );
    console.log( rows[2].getCell( 1 ).text );
};

chk_toggle_column_click.onchange = () =>
{
    sortManager.enabledColumnClick = chk_toggle_column_click.checked;
};

const rowCnt = grid.getRowCount();

for( let i = 1; i < rowCnt; i++ )
    grid.setText( i, 0, i.toString() );`,sn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"열을 클릭하여 정렬 실행"}),n.jsx(r,{htmlRaw:ln,code:dn})]});sn.__docgenInfo={description:"",methods:[],displayName:"Sort"};const cn=`<div>
    <button type='button' id="btn_sort" class='button mb--sm'>정렬</button>
    <span>정렬 Column</span>
    <div class="input" style="display: inline-block; width: 200">
        <input type=" text" class="input__native" id="input_column" value="2" />
    </div>
    <span>시작 Row</span>
    <div class="input" style="display: inline-block; width: 200">
        <input type="number" class="input__native" id="input_start_row" value="5" />
    </div>
    <span>종료 Row</span>
    <div class="input" style="display: inline-block; width: 200">
        <input type="number" class="input__native" id="input_end_row" value="12" />
    </div>
</div>
<br />
<div id="ir_grid" style="height: 500; width: 800"></div>`,an=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 1 ),
    },
} );

grid.setCell( 0, 1, { text: "Number" } );
grid.setCell( 0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );
grid.setCell( 0, 3, { text: "Text", icon: "type-string" } );
grid.setCell( 0, 4, { text: "Text", icon: "type-string" } );

Array.from( { length: 24 } )
    .forEach( ( _, id ) =>
    {
        grid.setText( id + 1, 1, ( id + 1 ).toString() );
        grid.setText( id + 1, 2, Math.floor( Math.random() * 10000 ).toString() );
        grid.setText( id + 1, 3, Math.floor( Math.random() * 10000 ).toString( 16 ) );
        grid.setText( id + 1, 4, Math.floor( Math.random() * 20 ).toString() );
    } );

const sortHandler = libGrid.createInferenceSortHandler( { grid } );

btn_sort.onclick = () =>
{
    const start = parseInt( input_start_row.value, 10 );
    const end = parseInt( input_end_row.value, 10 );
    const column = parseInt( input_column.value, 10 );

    sortHandler.sortColumn( column, "ASC", start, end );
};`,gn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"열을 클릭하여 정렬 실행"}),n.jsx(r,{htmlRaw:cn,code:an})]});gn.__docgenInfo={description:"",methods:[],displayName:"SortRange"};const un=`<div>
    <button id="btn_openDialog" class="button">Dialog 열기</button>
</div>
<div id="dial_grid" class="dialog">
    <div class="dialog__wrapper" style="width: 600; height: 400">
        <div class="dialog__header">헤더</div>
        <div class="dialog__content">
            <div id="grid"></div>
        </div>
        <div class="dialog__footer">
            <button id="btn_closeDialog" class="button">닫기</button>
        </div>
    </div>
</div>`,bn=`import { createPopover } from "@innorules/ir-style";
import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const popoverHandler = createPopover( {
    element: document.getElementById( "dial_grid" ),
    type: "dialog",
} );

btn_openDialog.onclick = () =>
{
    const grid = new libGrid.IRGrid( {
        contextElement: document.getElementById( "grid" ),
    } );

    popoverHandler.show();
};

btn_closeDialog.onclick = () =>
{
    popoverHandler.hide();
};`,mn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx("p",{children:"API 사용 샘플"}),n.jsx(r,{fixedHeight:500,htmlRaw:un,code:bn})]});mn.__docgenInfo={description:"",methods:[],displayName:"GridOnDialog"};const wn=`<div class="mb--lg">
    <button id="btn_check_commands" class="button">Check commands</button>
</div>
<div id="ir_grid" style="height: 500; width: 1300"></div>`,hn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const items = [
    { value: "ko", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" },
    { value: "en2", text: "English 길이를 길게" },
    { value: "en3", text: "English3\\\\n길게길게\\\\n3줄" },
    { value: "en4", text: "English4 English4 English4 English4 English4 " },
    { value: "en5", text: "English" },
    { value: "en7", text: "English" },
    { value: "en8", text: "English" },
    { value: "en9", text: "English" },
    { value: "en11", text: "English" },
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = new libGrid.IRGridSelectCellRenderer( {
    items,
    allowClear: true,
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>
    {
        console.log( row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText );
    },
    allowCustomText: true,
    customDisplayTextFunc: ( value, text, custom ) =>
    {
        if( !custom ) return text;
        if( text === "" ) return "";

        return [ "(X)", text ].join( " " );
    },
    showErrorIfCustomText: true,
} );

const selectRenderer2 = new libGrid.IRGridSelectCellRenderer( {
    items,
    allowClear: true,
    mappingType: "value",
    onChange: ( row, col ) =>
    {
        grid.setCell( row, col, {} );
    },
} );

const selectRenderer3 = new libGrid.IRGridSelectCellRenderer( {
    items,
    allowEdit: true,
} );

const selectRenderer4 = new libGrid.IRGridSelectCellRenderer( {
    items,
    allowEdit: true,
    mappingType: "value",
    showErrorIfCustomText: true,
} );

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 20,
        cellRenderer: ( row, col, data ) =>
        {

            switch( col )
            {
                case 3: return selectRenderer;
                case 4: return selectRenderer2;
                case 5: return selectRenderer3;
                case 6: return selectRenderer4;
                default: return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 12,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 1,
    },
} );

// for debugging
window.grid = grid;

grid.setText( 1, 3, "English" );
grid.setText( 1, 4, "en" );
grid.setText( 2, 4, "ko" );
grid.setText( 1, 5, "English" );

grid.setText( 6, 3, "unmatched" );
grid.setText( 6, 4, "unmatched" );
grid.setText( 6, 5, "unmatched" );
grid.setText( 6, 6, "unmatched" );

grid.setText( 7, 3, "en4" );
grid.setText( 7, 4, "en4" );
grid.setText( 7, 5, "en4" );
grid.setText( 7, 6, "en4" );

grid.hook.addHook( "cellEditDoneBeforeRender", ( row, col, context ) =>
{
    if( col === 2 )
        context.text = "1";
} );

grid.autoSizeColumns( 0, 10 );`,pn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{htmlRaw:wn,code:hn})]});pn.__docgenInfo={description:"",methods:[],displayName:"SelectMapping"};const xn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGridTablePlugin"}),n.jsx(o,{children:"ir-style@^2.13.0"}),n.jsx("p",{}),n.jsx(r,{html:n.jsxs("div",{children:[n.jsx("button",{id:"remove_btn",className:"button",children:"TablePlugin 제거"}),n.jsxs("div",{className:"flex gap-x--3xl mt--lg",children:[n.jsx("div",{id:"ir_grid",style:{height:500,width:700}}),n.jsx("div",{id:"ir_grid2"})]})]}),code:`
import * as libGrid from "./dist/grid.js";
import { IRContextMenuAdapter } from "./dist/react.js";

const checkRenderer = new libGrid.IRGridCheckboxRenderer({});
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const iconButtonRenderer = new libGrid.IRGridDefaultCellIconButtonRenderer({
    onClick: (ev, row, col) => {
    },
})

function defaultCellRenderer(row, col, data)
{
    switch (col) {
        case 0:
            return checkRenderer;
        case 6:
            return iconButtonRenderer;
        default:
            return defaultRenderer;
    }
}

const rowCount = 50;
const plugins = [
    new libGrid.IRGridTablePlugin({
        onRowClick(grid, row, ev) { console.log(row, ev) },
        freezeLastColumn: true,
    }),
    new libGrid.IRGridResizerPlugin({
            enabledColResizer: true,
            disabledColumns: [0, 6]
    }),
    new libGrid.IRGridPopoverPlugin( {
        memoInterval: 0,
        tooltipInterval: 0,
        hideTooltipWhenHasMemo: true,
    } ),
    new libGrid.IRGridSingleCellDragPlugin()
];

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount,
        cellRenderer: defaultCellRenderer
    },
    colHeader: {
        rowCount: 1,
        colCount: 7,
        minSize: 10,
        cellRenderer: defaultCellRenderer
    },
    rowHeader: {
        colCount: 0,
        defaultSize: 32,
    },
    defaultColumnCellFormat: {
        all: { draggable: true },
        [0]: { disabled: true },
    },
    plugins
})

const menu = new IRContextMenuAdapter( {
    items: [
        {
            id: "edit",
            type: "command-button",
            label: "변경",
            icon: "ir-icon--edit"
        },
        {
            id: "delete",
            type: "command-button",
            label: "삭제",
            icon: "ir-icon--delete"
        },
        {
            id: "pw-edit",
            type: "command-button",
            label: "비밀번호 변경",
            icon: "ir-icon--lock"
        },
    ]
} );

grid.setText(0, 1, "사용자 ID")
grid.setCell(0, 1, {horizontalAlign: "left"})
grid.setText(0, 2, "사용자 이름")
grid.setCell(0, 2, {horizontalAlign: "left"})
grid.setText(0, 3, "계정 시작일")
grid.setText(0, 4, "계정 종료일")
grid.setText(0, 5, "역할")
grid.setCell(0, 5, {horizontalAlign: "left"})


Array.from( { length: rowCount } )
    .forEach( (_, id) => {
        const randId = Math.floor(Math.random() * 10000).toString();
        grid.setCell(id + 1, 1, {text: randId, object: {name: randId}})
        grid.setCell(id + 1, 2, {text: "AAAAAAAAAA", object: {name: "AAAAAAAAAA"}})
        grid.setCell(id + 1, 3, {text: "2024-10-08", object: {name: "2024-10-08"}})
        grid.setCell(id + 1, 4, {text: "9999-12-31", object: {name: "9999-12-31"}})
        grid.setCell(id + 1, 5, {text: "룰 시스템 접속, 전체 기능 실행", object: {name: "룰 시스템 접속, 전체 기능 실행"}})
        grid.setCell(id + 1, 6, { icon: "edit", tooltip: "역할 변경" })
    } )

grid.setColumnWidth(0, 50);
grid.setColumnWidth(6, 50);

remove_btn.onclick = () => {
    grid.removePlugin(plugins[0]);
}

checkRenderer.onCheckboxClick = (row, col, checked) => {
    if ( row === 0 )
    {
        for (let i = 1; i < rowCount; i++) {
            grid.setText(i, 0, checked);
        }
    }
    else
    {
        let allChecked = true;
        for (let i = 1; i < rowCount; i++) {
            if (grid.getText(i, 0) !== "true")
            {
                allChecked = false;
                break;
            }
        }
        grid.setText(0, 0, allChecked);
    }
}

menu.onCommandButtonClick = ( {ev, item} ) => {
    console.log( item )
}

grid.onContextMenu = (ev, cell) => {
    menu.showAtPoint(ev.clientX, ev.clientY);
}


(function() {
    const grid = new libGrid.IRGrid({
        contextElement: ir_grid2,
        colHeader: {
            rowCount: 1,
            colCount: 5,
        },
        rowHeader: { colCount: 1 },
    })

    grid.onDropOnCell = (row, col, ev) => {
        const data = ev.dataTransfer.getData("application/json")
        const json = JSON.parse(data)

        grid.commandManager.doRecording("Drag-Drop", () => {
            grid.setText(row, col, json.name)
            grid.setObject(row, col, json)
        })
    }
})();

`})]});xn.__docgenInfo={description:"",methods:[],displayName:"GridTable"};const Cn=`<div style="display:flex; flex-direction:column; height: 500; column-gap: 8">
    <div id="ir_grid" style="flex: 1 1 0; width: '100%'"></div>
</div>`,Rn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 100,
    },
    colHeader: {
        rowCount: 1,
    },
} );

grid.setText( 0, 1, "A" );
grid.setText( 1, 1, "ABC" );
grid.setText( 2, 1, "한글" );
grid.setText( 3, 1, "はい" );`,_n=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{localeSelectVisible:!0,htmlRaw:Cn,code:Rn})]});_n.__docgenInfo={description:"",methods:[],displayName:"i18n"};const fn='<div id="ir_grid" style="height: 500; width: 800"></div>',vn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 50,
    },
    colHeader: {
        rowCount: 1,
        colCount: 7,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell( 1 ),
    },
} );

// 디버깅용 전역 변수화
window.grid = grid;

grid.onClipboardBeforePasteCell = ( cell, text ) =>
{
    console.log( "onClipboardBeforePasteCell", cell, text );

    return { ignoreText: cell.col === 1 };
};

grid.onClipboardBeforePaste = ( range ) =>
{
    console.log( "onClipboardBeforePaste", range );
};

grid.onClipboardAfterPasteCell = ( cell ) =>
{
    console.log( "onClipboardAfterPasteCell", cell );
};

grid.onClipboardAfterPaste = ( range ) =>
{
    console.log( "onClipboardAfterPaste", range );
};`,yn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(r,{htmlRaw:fn,code:vn})]});yn.__docgenInfo={description:"",methods:[],displayName:"ClipboardEvents"};const Gn=`<div class="flex mb--lg gap-x--lg gap-y--lg align-items--center">
    <div class="flex align-items--center gap--sm">
        <span>i18n : </span>
        <div style="width: 100">
            <select>
                <option>ko</option>
                <option>en</option>
                <option>jp</option>
                <option>zh</option>
            </select>
        </div>
    </div>
    <button class='button button--primary' id='btn_filter_clear'>Clear Filter</button>
    <button class='button' id='btn_add_row'>add row</button>
    <button class='button' id='btn_add_col'>add col</button>
    <button class='button' id='btn_insert_row'>insert row</button>
    <button class='button' id='btn_insert_col'>insert col</button>
    <button class='button' id='btn_remove_row'>remove row</button>
    <button class='button' id='btn_remove_col'>remove col</button>
    <label>
        <input type="checkbox" id='chk_enabled_sort' checked>
        열 클릭 활성화
    </label>
</div>
<div id="ir_grid" style="height: 500; width: 800"></div>`,kn=`import { IRSelect, i18n } from "@innorules/ir-style";
import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const rowFilterPlugin = new libGrid.IRGridRowFilterPlugin( {
    columnMetaInfo: {
        0: {
            textType: "number",
            enabled: false,
        },
        3: {
            textType: "number",
        },
        4: {
            textType: "date",
        },
        6: {
            textType: "checked",
        },
    },
} );
const rowFilterRenderer = new libGrid.IRGridRowFilterCellRenderer( {
    plugin: rowFilterPlugin,
    onDropdownButtonClick( key )
    {
        console.log( key );
    },
    // visibleSortButton: false,
    // visibleCheckAllButton: false,
} );
const checkboxRenderer = new libGrid.IRGridCheckboxRenderer( {} );
const datePickerRenderer = new libGrid.IRGridDatePickerRenderer( {} );

const items = [
    { value: "한국어", text: "한국어" },
    { value: "영어", text: "영어" },
    { value: "스페인어", text: "스페인어" },
    { value: "일본어", text: "일본어" },
    { value: "독일어", text: "독일어" },
];

const selectRenderer = new libGrid.IRGridSelectCellRenderer( { items } );
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 2000,
        cellRenderer: ( row, col ) =>
        {
            switch( col )
            {
                case 4:
                    return datePickerRenderer;
                case 5:
                    return selectRenderer;
                case 6:
                    return checkboxRenderer;
                case 7:
                    return checkboxRenderer;
                default:
                    return defaultRenderer;
            }

        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 8,
        cellRenderer: ( row, col ) =>
        {
            if( row === 0 )
                return rowFilterRenderer;

            return defaultRenderer;
        },
    },
    rowHeader: {
        colCount: 1,
    },
} );

grid.addPlugin( rowFilterPlugin );

const rowFilterPluginAPI = rowFilterPlugin.pluginAPI;

grid.setCell( 0, 0, { text: "id" } );
grid.setCell( 0, 1, { text: "String", horizontalAlign: "left", icon: "type-string" } );
grid.setCell( 0, 2, { text: "English", horizontalAlign: "left" } );
grid.setCell( 0, 3, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );
grid.setCell( 0, 4, { text: "날짜" } );
grid.setCell( 0, 5, { text: "Select" } );
grid.setCell( 0, 6, { text: "체크박스" } );
grid.setCell( 0, 7, { text: "체크박스2 체크박스2 체크박스2" } );

const TEST_STR_LIST = ["사과", "바나나", "수박", "복숭아", "멜론", "자두", "앵두", "두리안", ""];
const TEST_STR_LIST2 = ["Apple", "Banana", "banana", "Water Melon", "Melon", "Plum", "Cherry", "Durian"];
const startDate = new Date( "2024-01-01" );

Array.from( { length: 2000 }, ( _, id ) =>
{
    grid.setText( id + 1, 0, id + 1 );
    grid.setText( id + 1, 1, TEST_STR_LIST[Math.floor( Math.random() * 10 ) % TEST_STR_LIST.length] );
    grid.setText( id + 1, 2, TEST_STR_LIST2[Math.floor( Math.random() * 10 ) % TEST_STR_LIST2.length] );
    grid.setText( id + 1, 5, items[Math.floor( Math.random() * 10 ) % items.length].value );

    // 나머지 5개 행은 빈값 처리
    if( id <= 1994 )
    {
        grid.setText( id + 1, 3, Math.floor( Math.random() * 4000 ).toString() );
        grid.setText( id + 1, 4, startDate.toISOString().split( "T" )[0] );
        startDate.setDate( startDate.getDate() + 1 );
    }
} );

grid.autoSizeColumns( 2, 4 );

rowFilterPluginAPI.setColFilter( {
    column: 1,
    operator: "contains",
    operand: ["두"],
} );

rowFilterPluginAPI.setColFilter( {
    column: 3,
    operator: "less-than-or-equal",
    operand: ["100"],
} );

btn_filter_clear.onclick = () =>
{
    rowFilterPluginAPI.clearFilters();
    grid.getRow( 0 ).render();
};

btn_add_row.onclick = () =>
{
    grid.commandManager.doRecording( "Add row", () =>
    {
        const row = grid.addRow();

        grid.setText( row, 1, "ABC\\\\nBCD" );
        grid.setCell( row, 2, { icon: "type-boolean-return" } );
        grid.selectRow( row );
    } );
};
btn_add_col.onclick = () =>
{
    grid.commandManager.doRecording( "Add column", () =>
    {
        grid.addColumn( 80 );
    } );
};

btn_insert_row.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Insert row", () =>
        {
            grid.insertRows( selection.top, 1 + selection.bottom - selection.top, 70 );
            grid.setRowTextColor( selection.top, "blue" );
        } );
    }
};

btn_insert_col.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Insert column", () =>
        {
            grid.insertColumns( selection.left, 1 + selection.right - selection.left, 50 );
        } );
    }
};

btn_remove_row.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Remove row", () =>
        {
            grid.removeRows( selection.top, selection.bottom, { ignoreFiltered: true } );
        } );
    }
};

btn_remove_col.onclick = () =>
{
    const selection = grid.getSelection();

    if( selection )
    {
        grid.commandManager.doRecording( "Remove column", () =>
        {
            grid.removeColumns( selection.left, selection.right );
        } );
    }
};

chk_enabled_sort.onchange = () =>
{
    rowFilterPluginAPI.columnSortManager.enabledColumnClick = chk_enabled_sort.checked;
};

// i18n 변경
new IRSelect( {
    defaultValue: i18n.currentLang,
    contextElement: document.querySelector( "select" ),
    onChange: ( _, option ) =>
    {
        i18n.setLocale( option.value );
    },
} );`,Tn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid Row Filter"}),n.jsx(o,{children:"ir-style@^2.17.0"}),n.jsx("p",{}),n.jsx(r,{htmlRaw:Gn,code:kn})]});Tn.__docgenInfo={description:"",methods:[],displayName:"GridFilter"};const In=`<div class="mb--lg">
    <button id="btn_check_commands" class="button">Check commands</button>
</div>
<div id="ir_grid" style="height: 500; width: 1300"></div>`,Sn=`import * as libGrid from "@innorules/ir-style/lib/esm/grid.js";

const selectRenderer = new libGrid.IRGridSelectCellRenderer( {
    lazyItems: createBulkItems,
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>
    {
        console.log( row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText );
    },
} );

const selectRenderer2 = new libGrid.IRGridSelectCellRenderer( {
    items: [
        { value: "1", text: "ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD" },
        { value: "2", text: "ABCD ABCD ABCD ABCD" },
    ],
} );

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 5000,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 3:
                    return selectRenderer;
                case 4:
                    return selectRenderer2;
                default:
                    return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
        defaultSize: 120,
    },
} );

// for debugging
window.grid = grid;

grid.setText( 1, 3, "0" );
grid.setText( 2, 3, "100" );
grid.setText( 3, 3, "15000" );

function createBulkItems()
{
    return Array.from( { length: 30000 }, ( v, id ) => ( {
        value: id.toString(),
        text: id.toString(),
    } ) );
}`,jn=()=>n.jsxs(e,{children:[n.jsx(t,{children:"IRGrid"}),n.jsx(o,{children:"ir-style@^2.17.0"}),n.jsx(r,{htmlRaw:In,code:Sn})]});jn.__docgenInfo={description:"",methods:[],displayName:"SelectLazyItems"};const Mn={title:"JS Components/IRGrid"},Hn=["APIDemo","Basic","CellRenderer","BulkData","NoHeader","CellDrag","ColumnFill","GridConfig","ContextMenu","CustomRenderer","DragDrop","Exchange","Finder","Rows2000","HeaderMove","Multiple","OverflowPanel","RowSelection","Sort","SortRange","GridOnDialog","SelectMapping","GridTable","i18n","ClipboardEvents","GridFilter","SelectLazyItems"];export{d as APIDemo,a as Basic,h as BulkData,f as CellDrag,b as CellRenderer,yn as ClipboardEvents,G as ColumnFill,D as ContextMenu,M as CustomRenderer,N as DragDrop,$ as Exchange,L as Finder,I as GridConfig,Tn as GridFilter,mn as GridOnDialog,xn as GridTable,U as HeaderMove,Q as Multiple,C as NoHeader,en as OverflowPanel,on as RowSelection,K as Rows2000,jn as SelectLazyItems,pn as SelectMapping,sn as Sort,gn as SortRange,Hn as __namedExportsOrder,Mn as default,_n as i18n};
