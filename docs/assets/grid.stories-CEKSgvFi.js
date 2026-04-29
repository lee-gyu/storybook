import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./context-C6uFeUW4.js";import{t as s}from"./jsx-runtime-6sF1Ejqi.js";var c,ee=e((()=>{c=`import {
    IRGrid,
    IRGridDefaultCellRenderer,
    IRGridRowNoHeaderCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultRenderer = new IRGridDefaultCellRenderer();
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );

// 테스트 사용성을 위해, click 이후 IRGrid에 포커스를 줌
window.addEventListener( "click", ( ev ) =>
{
    if( ev.target instanceof HTMLButtonElement ) grid.focus();
} );

function createGrid()
{
    const grid = new IRGrid( {
        contextElement: ir_grid,
        // copyOptions: { rowSpan: true, colSpan: true, skipFiltered: true },
        // pasteOptions: { rowSpan: true, colSpan: true, skipFiltered: true },
        // autoReflowOnDeleteFreezedRow: true,
        // autoReflowOnDeleteFreezedColumn: true,
        body: {
            rowCount: 500,
        },
        defaultColumnCellFormat: {
            all: { verticalAlign: "middle" },
        },
        colHeader: {
            rowCount: 1,
            colCount: 200,
            cellRenderer: ( row, col, data ) =>
            {
                if( col > 0 )
                    data.text = col.toString();

                return defaultRenderer;
            },
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
                        data.text = "Test";
                        return defaultRenderer;
                    default:
                        return defaultRenderer;
                }
            },
        },
        undoManagerOptions: {
            stackLength: 256,
            disabled: false,
        },
    } );

    grid.setText( 1, 2, "ABC\\nBCD\\nCDE" );
    grid.setText( 2, 2, "ABC\\nBCD\\nCDE" );
    grid.setText( 3, 2, "ABC\\nBCD\\nCDE" );
    grid.setText( 4, 2, "ABC\\nBCD\\nCDE" );
    grid.setText( 5, 2, "ABC\\nBCD\\nCDE" );

    grid.onMountedRow = ( row ) =>
    {
        grid.autoSizeRow( row );
    };

    grid.onContextMenu = ( ev, cell ) =>
    {
        if( cell )
            console.log( "contextmenu", { row: cell.row, col: cell.col } );
        else
            console.log( "contextmenu", "cell is null" );
    };

    window.grid = grid;

    grid.mergeCells( 0, 5, 0, 50 );
    grid.mergeCells( 3, 5, 3, 50 );

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
        grid.scrollInView( row, 0 );
    } );
};
btn_add_col.onclick = () =>
{
    grid.commandManager.doRecording( "Add column", () =>
    {
        const col = grid.addColumn();

        grid.selectColumn( col );
        grid.scrollInView( 0, col );
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
};`})),l,te=e((()=>{l=`<div class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
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
<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function u(){return(0,d.jsxs)(r,{children:[(0,d.jsx)(t,{children:`IRGrid`}),(0,d.jsx)(`p`,{children:`API 사용 샘플`}),(0,d.jsx)(a,{fixedHeight:700,htmlRaw:l,code:c})]})}var d,ne=e((()=>{ee(),te(),o(),d=s(),u.__docgenInfo={description:``,methods:[],displayName:`APIDemo`}})),f,re=e((()=>{f=`// TEST
createGrid( "#ir_grid", 5000, 100 );
createGrid( "#ir_grid2", 100, 5000 );`})),ie,ae=e((()=>{ie=`import { IRGrid, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

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
};`})),oe,se=e((()=>{oe=`.grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}
`})),p,ce=e((()=>{p=`<div class="grid-container">
    <div class="grid-item">
        <h4>Column 5,000개</h4>
        <div id="ir_grid" style="height: 500px; width: 100%"></div>
    </div>
    <div class="grid-item">
        <h4>Row 5,000개</h4>
        <div id="ir_grid2" style="height: 500px; width: 100%"></div>
    </div>
</div>`}));function m(){return(0,h.jsxs)(r,{children:[(0,h.jsx)(t,{children:`IRGrid BulkData`}),(0,h.jsx)(`p`,{children:`데이터를 한 번에 대량으로 넣었을 때의 성능 확인 예제`}),(0,h.jsx)(a,{htmlRaw:p,css:oe,code:ie,exampleCode:f})]})}var h,le=e((()=>{re(),ae(),se(),ce(),o(),h=s(),m.__docgenInfo={description:``,methods:[],displayName:`BulkData`}})),g,ue=e((()=>{g=`import {
    IRGrid,
    numberWithCommasFormatter,
} from "@innorules/ir-style/lib/esm/grid.js";

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 100,
    },
    defaultColumnCellFormat: {
        [1]: { formatter: numberWithCommasFormatter },
    },
    colHeader: {
        rowCount: 1,
        colCount: 4,
        defaultSize: 120,
    },
} );

// for debugging
window.grid = grid;

grid.setData( {
    col: 0,
    row: 1,
    data: [
        ["A", "10000.1000"],
        ["B", "-10000.1001002"],
        ["C", "999999999999999.9999999999"],
        ["D", "12345000"],
        ["E", "-00000010001000100"],
        ["F", "+300300"],
        ["G", "01234"],
    ],
} );

`})),_,de=e((()=>{_=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function v(){return(0,y.jsxs)(r,{children:[(0,y.jsx)(t,{children:`IRGrid`}),(0,y.jsx)(a,{htmlRaw:_,code:g})]})}var y,fe=e((()=>{ue(),de(),o(),y=s(),v.__docgenInfo={description:``,methods:[],displayName:`CellFormatter`}})),b,pe=e((()=>{b=`import { IRSplitContainer } from "@innorules/ir-style";
import {
    IRGrid,
    IRGridRowNoHeaderCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const grid = new IRGrid( {
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
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),
    },
} );

grid.setText( 0, 0, "A" );

grid.onMountedRow = ( row ) => grid.autoSizeRow( row );

grid.setColumnWidth( 0, 80 );
grid.setColumnWidth( 1, 80 );
grid.setColumnWidth( 2, 120 );
grid.setColumnWidth( 3, 120 );
grid.setColumnWidth( 4, 160 );

btn1.onclick = () =>
{
    if( ir_grid.style.display )
        ir_grid.style.removeProperty( "display" );
    else
        ir_grid.style.display = "none";
};

new IRSplitContainer( {
    elements: ["#split1", "#split2"],
} );

globalThis.grid = grid;`})),x,me=e((()=>{x=`import { IRGridColumnFillPlugin } from "@innorules/ir-style/lib/esm/grid.js";

grid.addPlugin( new IRGridColumnFillPlugin( {
    columnWeight: ["120px", 1, 1, 1, 2],
} ) );`})),S,he=e((()=>{S=`<button id="btn1" class='button'>visible on/off</button>
<div class="flex background--light" style="height: 520px;">
    <div id="split1">
        <div id="ir_grid" style="height: 400px; width: 100%; display: none"></div>
    </div>
    <div id="split2"></div>
</div>`}));function C(){return(0,w.jsxs)(r,{children:[(0,w.jsx)(t,{children:`IRGrid ColumnFill`}),(0,w.jsxs)(`p`,{children:[`ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)`,(0,w.jsx)(`br`,{}),`colHeader의 `,(0,w.jsx)(`code`,{children:`maxSize`}),`를 9999로 설정해야 열 크기 제한 문제가 없습니다.`]}),(0,w.jsx)(i,{docList:T}),(0,w.jsx)(a,{fixedHeight:600,htmlRaw:S,code:b,exampleCode:x})]})}var w,T,ge=e((()=>{pe(),me(),he(),o(),w=s(),T=[[`/classes/_innorules_grid.IRGridColumnFillPlugin.html`,`IRGridColumnFillPlugin`]],C.__docgenInfo={description:``,methods:[],displayName:`ColumnFill`}})),E,_e=e((()=>{E=`import {
    IRGrid,
    IRGridRowNoHeaderCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const grid = new IRGrid( {
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
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 2, "실행판단식", "조건식" ),
    },
} );

grid.mergeCells( 2, 1, 3, 3 );

globalThis.grid = grid;`})),D,ve=e((()=>{D=`import { IRContextMenu } from "@innorules/ir-style";

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
`})),O,ye=e((()=>{O=`<div id="ir_grid" style="height: 500px; width: 800px"></div>`}));function k(){return(0,A.jsxs)(r,{children:[(0,A.jsx)(t,{children:`IRGrid ContextMenu`}),(0,A.jsx)(i,{docList:j}),(0,A.jsx)(a,{htmlRaw:O,code:E,exampleCode:D})]})}var A,j,be=e((()=>{_e(),ve(),ye(),o(),A=s(),j=[[`/classes/_innorules_solid-ui.IRContextMenu.html`,`IRContextMenu`],[`/classes/_innorules_grid.IRGrid.html#oncontextmenu`,`IRGrid.onContextMenu`]],k.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`}})),M,xe=e((()=>{M=`import {
    IRGrid,
    IRGridCheckboxRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );

const grid = new IRGrid( {
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
};

globalThis.grid = grid;`})),N,Se=e((()=>{N=`import { IRGridExchangeByHeaderCellPlugin } from "@innorules/ir-style/lib/esm/grid.js";

const exchangePlugin = new IRGridExchangeByHeaderCellPlugin();
grid.addPlugin( exchangePlugin );

btn_on.onclick = () =>
{
    grid.addPlugin( exchangePlugin );
};
btn_off.onclick = () =>
{
    grid.removePlugin( exchangePlugin );
};`})),P,Ce=e((()=>{P=`<div class="flex mb--lg" style=" align-items:center; column-gap: 4px">
    source:
    <div class="input" style="display: inline-block; width: 100px">
        <input id=" input_source" class="input__native" />
    </div>
    target:
    <div class="input" style=" display: inline-block; width: 100px">
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
<div id="ir_grid" style=" height: 500px; width: 800px"></div>`}));function F(){return(0,I.jsxs)(r,{children:[(0,I.jsx)(t,{children:`IRGrid`}),(0,I.jsx)(`p`,{children:`헤더를 드래그하여 셀 내용 교체할 수 있습니다.`}),(0,I.jsx)(i,{docList:L}),(0,I.jsx)(a,{htmlRaw:P,code:M,exampleCode:N})]})}var I,L,we=e((()=>{xe(),Se(),Ce(),o(),I=s(),L=[[`/classes/_innorules_grid.IRGridExchangeByHeaderCellPlugin.html`,`IRGridExchangeByHeaderCellPlugin`]],F.__docgenInfo={description:``,methods:[],displayName:`Exchange`}})),R,Te=e((()=>{R=`import {
    IRGrid,
    IRGridRowNoHeaderCellRenderer,
    IRGridDefaultCellRenderer,
    IRGridCheckboxRenderer,
    IRGridDatePickerRenderer,
    IRGridSelectCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new IRGridDefaultCellRenderer();
const checkboxRenderer = new IRGridCheckboxRenderer( {} );
const datePickerRenderer = new IRGridDatePickerRenderer( {} );
const selectRenderer = new IRGridSelectCellRenderer( {
    items: [
        { value: "1", text: "ABC" },
        { value: "2", text: "true" },
        { value: "3", text: "CCC" },
        { value: "4", text: "XXX" },
    ],
} );

const customRenderer = ( row, col, data ) =>
{
    const element = document.createElement( "div" );

    // IRGrid 기본 셀 패딩 적용을 위해 속성 설정
    element.setAttribute( "data-has-px", "" );
    element.setAttribute( "data-has-py", "" );

    element.className = "ir_grid_cell_content";
    element.textContent = data.text;

    return element;
};

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
        cellRenderer( row, col, data )
        {
            if( col === 2 ) return checkboxRenderer;
            if( col === 3 ) return datePickerRenderer;
            if( col === 4 ) return selectRenderer;
            if( col === 5 ) return customRenderer( row, col, data );

            return defaultCellRenderer;
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 30,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),
    },
} );

grid.autoSizeColumn( 3 );

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
    } );

globalThis.grid = grid;`})),z,Ee=e((()=>{z=`const finder = grid.createFinder();

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

`})),B,De=e((()=>{B=`<div class='search'>
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
    <div class="mt--xl">
        <button id='btn' type="button" class="button button--tertiary">다음 찾기</button>
        <button id='btn_cursor' type="button" class="button button--tertiary">Set Cursor</button>
    </div>
</div>
<div class="my--xs">
    <input id='replace' class='input__native' type="text" placeholder='변경할 내용' style="width: 200px">
    <button id="btn_replace" class='button'>모두 변경</button>
</div>

<div id="ir_grid" style="height: 500px; width: 100%"></div>`}));function V(){return(0,H.jsxs)(r,{children:[(0,H.jsx)(t,{children:`IRGrid Finder`}),(0,H.jsx)(`p`,{children:`Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다.`}),(0,H.jsx)(i,{docList:U}),(0,H.jsx)(a,{htmlRaw:B,code:R,exampleCode:z})]})}var H,U,Oe=e((()=>{Te(),Ee(),De(),o(),H=s(),U=[[`/classes/_innorules_grid.IRGrid.html#createfinder`,`IRGrid.createFinder`]],V.__docgenInfo={description:``,methods:[],displayName:`Finder`}})),W,ke=e((()=>{W=`import {
    IRGrid,
    IRGridCheckboxRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );

const grid = new IRGrid( {
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
};

globalThis.grid = grid;`})),G,Ae=e((()=>{G=`import {
    IRGridMoveColumnsPlugin,
    IRGridMoveRowsPlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const moveRowPlugin = new IRGridMoveRowsPlugin();
const moveColPlugin = new IRGridMoveColumnsPlugin();

grid.addPlugin( moveRowPlugin );
grid.addPlugin( moveColPlugin );`})),je,Me=e((()=>{je=`<div class="flex mb--lg" style="align-items: center; column-gap: 4px">
    source: <div class="input" style="display: inline-block; width: 100px">
        <input id="input_source" class="input__native" />
    </div>
    target: <div class="input" style="display: inline-block; width: 100px">
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
<div id="ir_grid" style="height: 500px; width: 800px"></div>`}));function K(){return(0,q.jsxs)(r,{children:[(0,q.jsx)(t,{children:`IRGrid`}),(0,q.jsx)(`p`,{children:`헤더를 드래그하여 행/열을 이동할 수 있습니다.`}),(0,q.jsx)(i,{docList:Ne}),(0,q.jsx)(a,{htmlRaw:je,code:W,exampleCode:G})]})}var q,Ne,Pe=e((()=>{ke(),Ae(),Me(),o(),q=s(),Ne=[[`/classes/_innorules_grid.IRGridMoveRowsPlugin.html`,`IRGridMoveRowsPlugin`],[`/classes/_innorules_grid.IRGridMoveColumnsPlugin.html`,`IRGridMoveColumnsPlugin`]],K.__docgenInfo={description:``,methods:[],displayName:`MoveAPI`}})),Fe,Ie=e((()=>{Fe=`import {
    IRGrid,
    IRGridDefaultCellRenderer,
    IRGridRowNoHeaderCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new IRGridDefaultCellRenderer();

const grid = new IRGrid( {
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
                data.text = col.toString();

            return defaultCellRenderer;
        },
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),
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

globalThis.grid = grid;`})),Le,Re=e((()=>{Le=`import { IRGridOverflowPanelPlugin } from "@innorules/ir-style/lib/esm/grid.js";

grid.addPlugin( new IRGridOverflowPanelPlugin( {
    style: {
        height: 400,
        width: "100%",
    },
    className: "test-cls",
} ) );`})),ze,Be=e((()=>{ze=`<button type='button' id="btn_freeze_rows" class='button mb--sm'>행 고정</button>
<button type='button' id="btn_freeze_cols" class='button mb--sm'>열 고정</button>
<button type='button' id="btn_merge" class='button mb--sm'>셀 병합</button>
<button class='button' id='btn_hide_rows'>행 숨김</button>
<button class='button' id='btn_show_rows'>행 표시</button>
<button class='button' id='btn_hide_columns'>열 숨김</button>
<button class='button' id='btn_show_columns'>열 표시</button>
<br />
<div style="height: 400px; display: grid">
    <div id="ir_grid"></div>
</div>`}));function Ve(){return(0,J.jsxs)(r,{children:[(0,J.jsx)(t,{children:`IRGrid Overflow Panel`}),(0,J.jsx)(`p`,{children:`IRGrid가 overflow될 경우 Grid의 스크롤 제어를 간편하게 할 수 있는 편의 기능을 제공한다.`}),(0,J.jsx)(i,{docList:He}),(0,J.jsx)(a,{fixedHeight:550,htmlRaw:ze,code:Fe,exampleCode:Le})]})}var J,He,Ue=e((()=>{Ie(),Re(),Be(),o(),J=s(),He=[[`/classes/_innorules_grid.IRGridOverflowPanelPlugin.html`,`IRGridOverflowPanelPlugin`]],Ve.__docgenInfo={description:``,methods:[],displayName:`OverflowPanelPlugin`}})),We,Ge=e((()=>{We=`import {
    IRGrid,
    IRGridCheckboxRenderer,
    IRGridDefaultCellRenderer,
    IRGridRadioCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultCellRenderer = new IRGridDefaultCellRenderer();
const radioCellRenderer = new IRGridRadioCellRenderer( {} );
const checkboxCellRenderer = new IRGridCheckboxRenderer( {} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 250,
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

const rand = [
    "123",
    "12345",
    "ABCDE",
    "XYZ",
];

Array.from( { length: grid.getRowCount() - 1 } )
    .forEach( ( _, id ) =>
    {
        grid.setText( id + 1, 1, \`\${rand[0][Math.floor( Math.random() * rand[0].length )]}\` );
        grid.setText( id + 1, 2, Math.floor( Math.random() * 10000 ).toString() );
        grid.setText( id + 1, 3, \`\${rand[2][Math.floor( Math.random() * rand[2].length )]}\` );
        grid.setText( id + 1, 4, Math.floor( Math.random() * 10000 ).toString( 16 ) );

        grid.setCell( id + 1, 5, { label: "Radio" } );
        grid.setCell( id + 1, 6, { label: "Check" } );
    } );

grid.setData( {
    row: 25, col: 1,
    data: [
        ["-100"],
        ["-20"],
        ["0"],
        ["-200"],
        ["-999999"],
        ["bb"],
        ["ba"],
        ["a"],
        ["cc"],
        ["zy"],
        ["zi"],
    ],
} );

const rowCnt = grid.getRowCount();

for( let i = 1; i < rowCnt; i++ )
    grid.setText( i, 0, i.toString() );

globalThis.grid = grid;`})),Ke,qe=e((()=>{Ke=`import {
    createIRGridColumnSortManager,
    createInferenceSortHandler,
} from "@innorules/ir-style/lib/esm/grid.js";

const sortHandler = createInferenceSortHandler( { grid } );

btn_sort.onclick = () =>
{
    const start = parseInt( input_start_row.value, 10 );
    const end = parseInt( input_end_row.value, 10 );
    const column = parseInt( input_column.value, 10 );

    sortHandler.sortColumn( column, "ASC", start, end );
};

const sortManager = createIRGridColumnSortManager( grid );
sortManager.overrideColumnClickEvent();

btn_reset_sort.onclick = () =>
{
    grid.sort( () => 0, "ASC" );
    sortManager.clearSortOrder();
};

btn_print.onclick = () =>
{
    const rows = sortManager.getSnapshotRows();

    console.log( rows[0].getCell( 1 ).text );
    console.log( rows[1].getCell( 1 ).text );
    console.log( rows[2].getCell( 1 ).text );
};

btn_sort_columns.onclick = () =>
{
    sortManager.clearSortOrder();
    sortManager.sortColumns(
        [1, "ASC"],
        [2, "DESC"],
        [3, "ASC"],
    );
};

chk_toggle_column_click.onchange = () =>
{
    sortManager.enabledColumnClick = chk_toggle_column_click.checked;
};`})),Je,Ye=e((()=>{Je=`<button type="button" id="btn_sort" class="button mb--sm">정렬</button>
<span>정렬 Column</span>
<div class="input" style="display: inline-block; width: 100px">
    <input type=" text" class="input__native" id="input_column" value="2" />
</div>
<span>시작 Row</span>
<div class="input" style="display: inline-block; width: 100px">
    <input type="number" class="input__native" id="input_start_row" value="5" />
</div>
<span>종료 Row</span>
<div class="input" style="display: inline-block; width: 100px">
    <input type="number" class="input__native" id="input_end_row" value="12" />
</div>
<button type='button' id="btn_reset_sort" class='button mb--sm'>정렬 초기화</button>
<button type='button' id="btn_print" class='button'>스냅샷 출력</button>
<button type='button' id="btn_sort_columns" class='button'>다중 정렬</button>
<label>
    <input type='checkbox' id="chk_toggle_column_click" checked />열 클릭 활성화
</label>

<br />
<div id="ir_grid" style="height: 500px; width: 800px"></div>`}));function Xe(){return(0,Y.jsxs)(r,{children:[(0,Y.jsx)(t,{children:`IRGrid`}),(0,Y.jsx)(`p`,{children:`열을 클릭하여 정렬 실행`}),(0,Y.jsx)(i,{docList:Ze}),(0,Y.jsx)(a,{htmlRaw:Je,exampleCode:Ke,code:We})]})}var Y,Ze,Qe=e((()=>{Ge(),qe(),Ye(),o(),Y=s(),Ze=[[`/variables/_innorules_grid.createIRGridColumnSortManager.html`,`createIRGridColumnSortManager`],[`/variables/_innorules_grid.createInferenceSortHandler.html`,`createInferenceSortHandler`]],Xe.__docgenInfo={description:``,methods:[],displayName:`Sort`}})),$e,et=e((()=>{$e=`import { getThemeStore } from "@innorules/ir-style";
import {
    IRGrid,
    IRGridRowNoHeaderCellRenderer,
    IRGridCheckboxRenderer,
    IRGridDefaultCellRenderer,
    IRGridSelectCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

getThemeStore().setStoreValue( "grid.paddingTop", 2 );
getThemeStore().setStoreValue( "grid.paddingBottom", 2 );
getThemeStore().setStoreValue( "grid.paddingLeft", 6 );
getThemeStore().setStoreValue( "grid.paddingRight", 6 );
getThemeStore().setStoreValue( "grid.defaultRowHeight", 20 );
getThemeStore().setStoreValue( "grid.forceRenderLeftCol", 5 );
getThemeStore().setStoreValue( "grid.forceRenderRightCol", 10 );

const checkBoxRenderer = new IRGridCheckboxRenderer( {} );
const defaultRenderer = new IRGridDefaultCellRenderer( {} );
const selectRenderer = new IRGridSelectCellRenderer( {
    items: [{ text: "A", value: "A" }],
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    colHeader: {
        rowCount: 1,
        colCount: 150,
        maxSize: 9999,
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: new IRGridRowNoHeaderCellRenderer( 1 ),
    },
    body: {
        rowCount: 30,
        cellRenderer: ( row, col ) =>
        {
            if( col === 1 ) return checkBoxRenderer;
            if( col === 2 ) return selectRenderer;

            return defaultRenderer;
        },
    },
    defaultColumnCellFormat: {
        ["body_1"]: { icon: "save" },
        ["body_2"]: { text: "A" },
    },
} );

grid.setCell( 0, 1, { icon: "ir-icon--save", text: "아이콘" } );
grid.setColumnWidth( 0, 80 );
grid.setColumnWidth( 1, 80 );
grid.setColumnWidth( 2, 120 );
grid.setColumnWidth( 3, 120 );
grid.setColumnWidth( 4, 160 );`})),tt,nt=e((()=>{tt=`<div id="ir_grid" style="height: 500px"></div>`}));function rt(){return(0,X.jsxs)(r,{children:[(0,X.jsx)(t,{children:`IRGrid Configuration`}),(0,X.jsx)(`p`,{children:`Grid 기본 내부 패딩을 조절할 수 있습니다.`}),(0,X.jsx)(a,{fixedHeight:600,htmlRaw:tt,code:$e})]})}var X,it=e((()=>{et(),nt(),o(),X=s(),rt.__docgenInfo={description:``,methods:[],displayName:`ThemeConfig`}})),at,ot=e((()=>{at=`import {
    IRGrid,
    IRGridCheckboxRenderer,
    IRGridDatePickerRenderer,
    IRGridDefaultCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const checkRenderer = new IRGridCheckboxRenderer( {} );
const defaultRenderer = new IRGridDefaultCellRenderer();
const datePickerRenderer = new IRGridDatePickerRenderer( {} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10000,
        cellRenderer: ( _row, col, _data ) =>
        {
            switch( col )
            {
                case 3:
                    return datePickerRenderer;
                case 4:
                    return checkRenderer;
                default:
                    return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 10,
    },
    rowHeader: {
        colCount: 1,
    },
    defaultColumnCellFormat: {
        all: { draggable: true },
        [0]: { disabled: false },
    },
} );

grid.setRowInfo( 0, {
    textData: ["No", "Name", "Age", "Date", "Checked", "Random Number"],
} );

const startDate = new Date( "2025-01-01" );

Array.from( { length: grid.getRowCount() - 1 } )
    .forEach( ( _, id ) =>
    {

        grid.setRowInfo( id + 1, {
            textData: [
                id + 1,
                getRandomString(),
                \`\${Math.floor( Math.random() * 100 )}\`,
                startDate.toISOString().split( "T" )[0],
                Math.random() > 0.5 ? "true" : "",
                Math.floor( Math.random() * 10000 ).toString(),
            ],
        } );

        startDate.setDate( startDate.getDate() + 1 );
    } );

grid.autoSizeColumns( 0, 6 );

function getRandomString( length = 3 )
{
    const names = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let result = "";
    for( let i = 0; i < length; i++ )
    {
        const idx = Math.floor( Math.random() * names.length );
        result += names[idx];
    }
    return result;
}

( function()
{
    new IRGrid( {
        contextElement: ir_grid2,
        colHeader: {
            rowCount: 1,
            colCount: 5,
        },
        rowHeader: { colCount: 1 },
    } );
} )();

globalThis.grid = grid;
`})),st,ct=e((()=>{st=`import {
    IRGridMultiSelectCellPlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const multiSelectCellPlugin = new IRGridMultiSelectCellPlugin( {
    onCopyFail: () => alert( "선택한 셀 범위가 유효하지 않아 복사할 수 없습니다." ),
} );

grid.addPlugin( multiSelectCellPlugin );

const multiSelectCellPluginAPI = multiSelectCellPlugin.pluginAPI;

grid.onSelectChanged = () =>
{
    console.log( "Selected Cells:", multiSelectCellPluginAPI.getSelectedCells() );
};

btn_remove_plg.onclick = () =>
{
    grid.removePlugin( multiSelectCellPlugin );
};`})),lt,ut=e((()=>{lt=`<div>
    <button id="btn_remove_plg" class="button">플러그인 제거</button>
    <div class="flex gap-x--3xl mt--lg"
        style="height: 500px">
        <div id="ir_grid"  style="width: 700px"></div>
        <div id="ir_grid2" class="flex--1"></div>
    </div>
</div>`}));function dt(){return(0,Z.jsxs)(r,{children:[(0,Z.jsx)(t,{children:`MultiSelectCellPlugin`}),(0,Z.jsx)(n,{children:`ir-style@^2.21.0`}),(0,Z.jsxs)(`p`,{children:[`IRGrid에 다중 셀 선택 기능을 제공한다.`,(0,Z.jsx)(`br`,{}),(0,Z.jsx)(`b`,{children:`※ 단독 사용은 불가능하며 반드시 IRGridMouseCellSelectorPlugin과 함께 사용`})]}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`b`,{children:`복사/붙여넣기 참고 사항`}),(0,Z.jsx)(`br`,{}),`- 복사와 붙여넣기는 선택한 셀들이 행과 열 모두에서 동일한 개수일 때만 동작한다. (잘못된 영역인 경우 경고 메시지 출력)`,(0,Z.jsx)(`br`,{}),`- 붙여넣기 시 선택한 셀들은 빈칸 없이 연속된 형태로 붙어서 표시된다.`,(0,Z.jsx)(`br`,{}),`※ 엑셀의 다중 셀 선택 복사/붙여넣기 동작 참고`,(0,Z.jsx)(`br`,{})]}),(0,Z.jsx)(i,{docList:ft}),(0,Z.jsx)(a,{htmlRaw:lt,exampleCode:st,code:at})]})}var Z,ft,pt=e((()=>{ot(),ct(),ut(),o(),Z=s(),ft=[[`/classes/_innorules_grid.IRGridMultiSelectCellPlugin.html`,`IRGridMultiSelectCellPlugin`]],dt.__docgenInfo={description:``,methods:[],displayName:`MultiSelectCellPlugin`}})),mt,ht=e((()=>{mt=`import {
    IRGrid,
} from "@innorules/ir-style/lib/esm/grid.js";

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
        minSize: 80,
        maxSize: 500,
    },
    rowHeader: {
        colCount: 1,
        minSize: 20,
        maxSize: 200,
    },
} );

grid.setText( 0, 1, "min: 200, max: 300" );
grid.setText( 0, 2, "min: 10, max: 150" );
grid.setText( 1, 0, "min: 50, max: 200" );
grid.setText( 2, 0, "min: 10, max: 20" );

globalThis.grid = grid;`})),gt,_t=e((()=>{gt=`grid.setColumnMaxSize( 1, 300 );
grid.setColumnMinSize( 1, 200 );

grid.setColumnMaxSize( 2, 150 );
grid.setColumnMinSize( 2, 10 );

grid.setRowMaxSize( 1, 200 );
grid.setRowMinSize( 1, 50 );

grid.setRowMaxSize( 2, 20 );
grid.setRowMinSize( 2, 10 );

grid.autoSizeColumns( 0, 2 );`})),vt,yt=e((()=>{vt=`<div id="ir_grid" style="height: 500px; width: 100%"></div>`}));function bt(){return(0,Q.jsxs)(r,{children:[(0,Q.jsx)(t,{children:`IRGrid 각 행/열 Min/Max Size 조정`}),(0,Q.jsx)(n,{children:`ir-style@^2.22.1`}),(0,Q.jsx)(`p`,{children:`아래 IRGrid API를 이용하여 각 행/열의 최소/최대 사이즈를 지정할 수 있습니다.`}),(0,Q.jsxs)(`ul`,{children:[(0,Q.jsxs)(`li`,{className:`ir-h-[15px]`,children:[(0,Q.jsx)(`a`,{className:`text-link`,target:`_blank`,href:`http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setrowminsize`,rel:`noreferrer`,children:`setRowMinSize`}),`: 특정 행에 최소 높이 지정`]}),(0,Q.jsxs)(`li`,{className:`ir-h-[15px]`,children:[(0,Q.jsx)(`a`,{className:`text-link`,target:`_blank`,href:`http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setrowmaxsize`,rel:`noreferrer`,children:`setRowMaxSize`}),`: 특정 행에 최대 높이 지정`]}),(0,Q.jsxs)(`li`,{className:`ir-h-[15px]`,children:[(0,Q.jsx)(`a`,{className:`text-link`,target:`_blank`,href:`http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setcolumnminsize`,rel:`noreferrer`,children:`setColumnMinSize`}),`: 특정 열에 최소 높이 지정`]}),(0,Q.jsxs)(`li`,{className:`ir-h-[15px]`,children:[(0,Q.jsx)(`a`,{className:`text-link`,target:`_blank`,href:`http://innorules.com:32108/classes/_innorules_grid.IRGrid.html#setcolumnmaxsize`,rel:`noreferrer`,children:`setColumnMaxSize`}),`: 특정 열에 최대 높이 지정`]})]}),(0,Q.jsx)(a,{htmlRaw:vt,code:mt,exampleCode:gt})]})}var Q,xt=e((()=>{ht(),_t(),yt(),o(),Q=s(),bt.__docgenInfo={description:``,methods:[],displayName:`MinMax`}})),St,$;e((()=>{ne(),le(),fe(),ge(),be(),we(),Oe(),Pe(),Ue(),Qe(),it(),pt(),xt(),St={title:`JS Components/IRGrid`},$=[`APIDemo`,`BulkData`,`CellFormatter`,`ColumnFill`,`ContextMenu`,`ExchangeAPI`,`Finder`,`MoveAPI`,`OverflowPanelPlugin`,`Sort`,`ThemeConfig`,`MultiSelectCellPlugin`,`MinMax`]}))();export{u as APIDemo,m as BulkData,v as CellFormatter,C as ColumnFill,k as ContextMenu,F as ExchangeAPI,V as Finder,bt as MinMax,K as MoveAPI,dt as MultiSelectCellPlugin,Ve as OverflowPanelPlugin,Xe as Sort,rt as ThemeConfig,$ as __namedExportsOrder,St as default};