import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./context-C6uFeUW4.js";import{t as s}from"./jsx-runtime-6sF1Ejqi.js";var c,l=e((()=>{c=`
import { IRContextMenu } from "@innorules/ir-style";
import { IRGridCheckboxRenderer, IRGridDefaultCellIconButtonRenderer, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

const checkRenderer = new IRGridCheckboxRenderer( {} );
const defaultRenderer = new IRGridDefaultCellRenderer();
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
    },
} );

function defaultCellRenderer( row, col, data )
{
    switch( col )
    {
        case 0:
            return checkRenderer;
        case 6:
            return iconButtonRenderer;
        default:
            return defaultRenderer;
    }
}

globalThis.defaultCellRenderer = defaultCellRenderer;
globalThis.setGrid = ( grid ) =>
{
    const rowCount = grid.getRowCount() - 1;

    grid.setColumnWidth( 0, 50 );
    grid.setColumnWidth( 6, 50 );
    grid.fillColumn( 5 );

    const menu = new IRContextMenu( {
        items: [
            {
                id: "edit",
                type: "command-button",
                label: "변경",
                icon: "ir-icon--edit",
            },
            {
                id: "delete",
                type: "command-button",
                label: "삭제",
                icon: "ir-icon--delete",
            },
            {
                id: "pw-edit",
                type: "command-button",
                label: "비밀번호 변경",
                icon: "ir-icon--lock",
            },
        ],
    } );

    grid.setText( 0, 1, "사용자 ID" );
    grid.setCell( 0, 1, { horizontalAlign: "left" } );
    grid.setText( 0, 2, "사용자 이름" );
    grid.setCell( 0, 2, { horizontalAlign: "left" } );
    grid.setText( 0, 3, "계정 시작일" );
    grid.setText( 0, 4, "계정 종료일" );
    grid.setText( 0, 5, "역할" );
    grid.setCell( 0, 5, { horizontalAlign: "left" } );

    Array.from( { length: rowCount } )
        .forEach( ( _, id ) =>
        {
            const randId = Math.floor( Math.random() * 10000 ).toString();
            grid.setCell( id + 1, 1, { text: randId, object: { name: randId } } );
            grid.setCell( id + 1, 2, { text: "AAAAAAAAAA", object: { name: "AAAAAAAAAA" } } );
            grid.setCell( id + 1, 3, { text: "2024-10-08", object: { name: "2024-10-08" } } );
            grid.setCell( id + 1, 4, { text: "9999-12-31", object: { name: "9999-12-31" } } );
            grid.setCell( id + 1, 5, { text: "룰 시스템 접속, 전체 기능 실행", object: { name: "룰 시스템 접속, 전체 기능 실행" } } );
            grid.setCell( id + 1, 6, { icon: "edit", tooltip: "역할 변경" } );
        } );

    btn_undo.onclick = () => grid.undo();

    btn_add_row.onclick = () => grid.addRow();

    checkRenderer.onCheckboxClick = ( row, col, checked ) =>
    {
        if( row === 0 )
        {
            for( let i = 1; i < rowCount; i++ )
            {
                grid.setText( i, 0, checked );
            }
        }
        else
        {
            let allChecked = true;
            for( let i = 1; i < rowCount; i++ )
            {
                if( grid.getText( i, 0 ) !== "true" )
                {
                    allChecked = false;
                    break;
                }
            }
            grid.setText( 0, 0, allChecked );
        }
    };

    menu.onCommandButtonClick = ( { ev, item } ) =>
    {
        console.log( item );
    };

    grid.onContextMenu = ( ev, cell ) =>
    {
        menu.showAtPoint( ev.clientX, ev.clientY );
        console.log( "selectRows:", tablePluginAPI.getSelectedRows() );
    };
};`})),u,d=e((()=>{u=`import {
    IRGrid,
    IRGridPopoverPlugin,
    IRGridResizerPlugin,
    IRGridSingleCellDragPlugin,
    IRGridTablePlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const tablePlugin = new IRGridTablePlugin( {
    freezeLastColumn: true,
    /** ^2.18.0 */
    multipleSelect: true,
    // selectOnRightClick: true,
    onRowClick( grid, row, ev )
    {
        console.log( row, ev );
    },
    /** ^3.0.0 */
    onAfterMousedownTasks( grid )
    {
        console.log( "Selected Rows:", tablePlugin.pluginAPI.getSelectedRows() );
    },
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 20000,
        cellRenderer: defaultCellRenderer,
    },
    colHeader: {
        rowCount: 1,
        colCount: 7,
        minSize: 30,
        maxSize: 200,
        cellRenderer: defaultCellRenderer,
    },
    rowHeader: {
        colCount: 0,
        defaultSize: 32,
    },
    defaultColumnCellFormat: {
        all: { draggable: true },
        [0]: { disabled: false },
    },
    plugins: [
        tablePlugin,
        new IRGridResizerPlugin( {
            enabledColResizer: true,
            disabledColumns: [0],
            // 컬럼 크기 변경 시 전체 너비를 유지하면서 다른 컬럼의 크기를 비율에 맞게 자동 조정
            enabledColRatioResizer: true,
        } ),
        new IRGridPopoverPlugin( {
            memoInterval: 0,
            tooltipInterval: 0,
            hideTooltipWhenHasMemo: true,
        } ),
        new IRGridSingleCellDragPlugin(),
    ],
} );

const tablePluginAPI = tablePlugin.pluginAPI;

btn_remove_plg.onclick = () => grid.removePlugin( tablePlugin );
btn_multi_off.onclick = () => tablePluginAPI.setMultipleSelect( false );
btn_add.onclick = () =>
{
    const value = input_select_row.value;
    if( value === "" ) return;

    tablePluginAPI.addSelectedRow( parseInt( value, 10 ) );
};

setGrid( grid );`})),f,p=e((()=>{f=`<div>
    <button id="btn_remove_plg" class="button">TablePlugin 제거</button>
    <button id="btn_clear_select" class="button mr--lg">Clear Select</button>
    <div class="input" style="width: 100px;display: inline-block">
        <input id="input_select_row" placeholder="rowId" class="input__native">
    </div>
    <button id="btn_add" class="button">Add Select Row</button>
    <button id="btn_add_row" class="button">Add Row</button>
    <button id="btn_undo" class="button">Undo</button>
    <button id="btn_multi_off" class="button">MultipleSelect Off</button>
    <div class="flex gap-x--3xl mt--lg">
        <div id="ir_grid" style="height: 500px; width: 700px"></div>
    </div>
</div>`}));function m(){return(0,h.jsxs)(r,{children:[(0,h.jsx)(t,{children:`IRGridTablePlugin`}),(0,h.jsx)(n,{children:`ir-style@^2.13.0`}),(0,h.jsxs)(`p`,{children:[`IRGridTablePlugin은 IRGrid에 다양한 테이블 관련 기능을 추가하는 플러그인입니다.`,(0,h.jsx)(`br`,{}),`이 플러그인을 사용하면 다중 행 선택, 마지막 열 고정, 드래그 앤 드롭 등 다양한 테이블 조작 기능을 구현할 수 있습니다.`]}),(0,h.jsx)(i,{docList:g}),(0,h.jsx)(a,{defaultCodeFold:[55],htmlRaw:f,code:c,exampleCode:u})]})}var h,g,_=e((()=>{l(),d(),p(),o(),h=s(),g=[[`/classes/_innorules_grid.IRGridTablePlugin.html`,`IRGridTablePlugin`],[`/classes/_innorules_grid.IRGridTablePluginAPI.html`,`IRGridTablePluginAPI`]],m.__docgenInfo={description:``,methods:[],displayName:`TablePlugin`}})),v,y=e((()=>{v=`import {
    IRGrid,
    IRGridDefaultCellIconButtonRenderer,
    IRGridDefaultCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultRenderer = new IRGridDefaultCellRenderer();
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        console.log( "icon click!" );
    },
} );

function defaultCellRenderer( row, col, data )
{
    switch( col )
    {
        case 5:
            return iconButtonRenderer;
        default:
            return defaultRenderer;
    }
}

globalThis.defaultCellRenderer = defaultCellRenderer;
globalThis.setGrid = ( grid ) =>
{
    grid.setColumnWidth( 5, 50 );
    grid.fillColumn( 4 );

    grid.setText( 0, 0, "사용자 ID" );
    grid.setCell( 0, 0, { horizontalAlign: "left" } );
    grid.setText( 0, 1, "사용자 이름" );
    grid.setCell( 0, 1, { horizontalAlign: "left" } );
    grid.setText( 0, 2, "계정 시작일" );
    grid.setText( 0, 3, "계정 종료일" );
    grid.setText( 0, 4, "역할" );
    grid.setCell( 0, 4, { horizontalAlign: "left" } );

    Array.from( { length: grid.getRowCount() - 1 } )
        .forEach( ( _, id ) =>
        {
            const randId = Math.floor( Math.random() * 10000 ).toString();
            grid.setCell( id + 1, 0, { text: randId, object: { name: randId } } );
            grid.setCell( id + 1, 1, { text: "AAAAAAAAAA", object: { name: "AAAAAAAAAA" } } );
            grid.setCell( id + 1, 2, { text: "2024-10-08", object: { name: "2024-10-08" } } );
            grid.setCell( id + 1, 3, { text: "9999-12-31", object: { name: "9999-12-31" } } );
            grid.setCell( id + 1, 4, { text: "룰 시스템 접속, 전체 기능 실행", object: { name: "룰 시스템 접속, 전체 기능 실행" } } );
            grid.setCell( id + 1, 5, { icon: "edit", tooltip: "역할 변경", object: { name: "" } } );
        } );
};

const rightGrid = new IRGrid( {
    contextElement: ir_grid2,
    colHeader: {
        rowCount: 1,
        colCount: 5,
    },
    rowHeader: { colCount: 1 },
    body: { rowCount: 10 },
} );

globalThis.rightGrid = rightGrid;`})),b,x=e((()=>{b=`import {
    IRGrid,
    IRGridPopoverPlugin,
    IRGridResizerPlugin,
    IRGridTablePlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const tablePlugin = new IRGridTablePlugin( {
    onRowClick( grid, row, ev )
    {
        console.log( row, ev );
    },
    freezeLastColumn: true,
    multipleSelect: true,

    /** ^2.21.0 */
    rowDraggable: true,
} );

const leftGrid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 20000,
        cellRenderer: defaultCellRenderer,
    },
    colHeader: {
        rowCount: 1,
        colCount: 6,
        minSize: 30,
        maxSize: 300,
        cellRenderer: defaultCellRenderer,
    },
    rowHeader: {
        colCount: 0,
        defaultSize: 32,
    },
    defaultColumnCellFormat: {
        all: { draggable: true },
        [0]: { disabled: false },
    },
    plugins: [
        tablePlugin,
        new IRGridResizerPlugin( {
            enabledColResizer: true,
            disabledColumns: [0],
            enabledColRatioResizer: true,
        } ),
        new IRGridPopoverPlugin( {
            memoInterval: 0,
            tooltipInterval: 0,
            hideTooltipWhenHasMemo: true,
        } ),
    ],
} );

setGrid( leftGrid );

const tablePluginAPI = tablePlugin.pluginAPI;

chk_multi_select.onchange = ( ev ) => tablePluginAPI.setMultipleSelect( ev.target.checked );
chk_row_draggable.onchange = ( ev ) => tablePluginAPI.setRowDragEnabled( ev.target.checked );

rightGrid.onDropOnCell = ( rowId, colId, ev ) =>
{
    const data = ev.dataTransfer.getData( "application/json" );
    const rows = JSON.parse( data );

    rows.forEach( ( row, i ) =>
    {
        row.forEach( ( obj, j ) =>
        {
            const targetRowId = rowId + i;
            const targetColId = colId + j;

            if( !rightGrid.hasRow( targetRowId ) ) rightGrid.addRow();
            if( !rightGrid.hasColumn( targetColId ) ) rightGrid.addColumn();

            rightGrid.setText( targetRowId, targetColId, obj.name );
            rightGrid.setObject( targetRowId, targetColId, obj );
        } );
    } );
};
`})),S,C=e((()=>{S=`<div>
    <div class="flex gap-x--lg">
        <div class="switch">
            <label class="switch__wrapper">
                <span class="switch__track">
                    <input id="chk_multi_select" type="checkbox" class="switch__input" checked />
                    <span class="switch__slider"></span>
                </span>
                <span class="switch__text">MultipleSelect</span>
            </label>
        </div>
        <div class="switch">
            <label class="switch__wrapper">
                <span class="switch__track">
                    <input id="chk_row_draggable" type="checkbox" class="switch__input" checked />
                    <span class="switch__slider"></span>
                </span>
                <span class="switch__text">RowDraggable</span>
            </label>
        </div>
    </div>
    <div class="flex gap-x--3xl mt--lg" style="height: 500px;">
        <div id="ir_grid" style="width: 700px"></div>
        <div id="ir_grid2" class="flex--1"></div>
    </div>
</div>`}));function w(){return(0,T.jsxs)(r,{children:[(0,T.jsx)(t,{children:`IRGridTablePlugin RowDraggable`}),(0,T.jsx)(n,{children:`ir-style@^2.22.0`}),(0,T.jsxs)(`p`,{children:[`IRGridTablePlugin에서 `,(0,T.jsx)(`code`,{children:`rowDraggable`}),` 속성을 사용하면 테이블 행 전체를 드래그 할 수 있다.`,(0,T.jsx)(`br`,{}),"선택한 행은 드래그할 수 있으며, `Ctrl + Click`으로 선택을 해제할 수 있다. ",(0,T.jsx)(`br`,{}),(0,T.jsx)(`code`,{children:`multipleSelect`}),` 속성과 같이 사용할 경우 다중 행 드래그가 가능하다.`,(0,T.jsx)(`br`,{}),(0,T.jsxs)(`b`,{children:[`※ 기본적으로 행을 드래그하려면, 선택된 행의 0번째 컬럼 중 최소 하나 이상 `,(0,T.jsx)(`code`,{children:`draggable: true`}),`와, cell의 object가 정의되어 있어야 한다.`]})]}),(0,T.jsx)(i,{docList:E}),(0,T.jsx)(a,{htmlRaw:S,code:v,exampleCode:b})]})}var T,E,D=e((()=>{y(),x(),C(),o(),T=s(),E=[[`/classes/_innorules_grid.IRGridTablePlugin.html`,`IRGridTablePlugin`],[`/classes/_innorules_grid.IRGridTablePluginAPI.html`,`IRGridTablePluginAPI`]],w.__docgenInfo={description:``,methods:[],displayName:`TablePluginRowDraggable`}})),O,k=e((()=>{O=`import {
    IRGrid,
    IRGridDefaultCellIconButtonRenderer,
    IRGridDefaultCellRenderer,
    IRGridPopoverPlugin,
    IRGridResizerPlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultRenderer = new IRGridDefaultCellRenderer();
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        console.log( "icon click!" );
    },
} );

function defaultCellRenderer( row, col, data )
{
    switch( col )
    {
        case 5:
            return iconButtonRenderer;
        default:
            return defaultRenderer;
    }
}

globalThis.createGrid = ( id ) =>
{
    const grid = new IRGrid( {
        contextElement: document.getElementById( id ),
        body: {
            rowCount: 10000,
            cellRenderer: defaultCellRenderer,
        },
        colHeader: {
            rowCount: 1,
            colCount: 6,
            minSize: 30,
            maxSize: 500,
            cellRenderer: defaultCellRenderer,
        },
        rowHeader: {
            colCount: 0,
            defaultSize: 32,
        },
        defaultColumnCellFormat: {
            all: { draggable: true },
            [0]: { disabled: false },
        },
        plugins: [
            new IRGridResizerPlugin( {
                enabledColResizer: true,
                disabledColumns: [0],
            } ),
            new IRGridPopoverPlugin( {
                memoInterval: 0,
                tooltipInterval: 0,
                hideTooltipWhenHasMemo: true,
            } ),
        ],
    } );

    grid.setColumnWidth( 5, 50 );
    grid.fillColumn( 4 );

    grid.setText( 0, 0, "사용자 ID" );
    grid.setCell( 0, 0, { horizontalAlign: "left" } );
    grid.setText( 0, 1, "사용자 이름" );
    grid.setCell( 0, 1, { horizontalAlign: "left" } );
    grid.setText( 0, 2, "계정 시작일" );
    grid.setText( 0, 3, "계정 종료일" );
    grid.setText( 0, 4, "역할" );
    grid.setCell( 0, 4, { horizontalAlign: "left" } );

    Array.from( { length: grid.getRowCount() - 1 } )
        .forEach( ( _, id ) =>
        {
            const randId = Math.floor( Math.random() * 10000 ).toString();
            grid.setCell( id + 1, 0, { text: randId, object: { name: randId } } );
            grid.setCell( id + 1, 1, { text: "AAAAAAAAAA", object: { name: "AAAAAAAAAA" } } );
            grid.setCell( id + 1, 2, { text: "2024-10-08", object: { name: "2024-10-08" } } );
            grid.setCell( id + 1, 3, { text: "9999-12-31", object: { name: "9999-12-31" } } );
            grid.setCell( id + 1, 4, { text: "룰 시스템 접속, 전체 기능 실행", object: { name: "룰 시스템 접속, 전체 기능 실행" } } );
            grid.setCell( id + 1, 5, { icon: "edit", tooltip: "역할 변경", object: { name: "" } } );
        } );

    return grid;
};`})),A,j=e((()=>{A=`import { IRGridTablePlugin } from "@innorules/ir-style/lib/esm/grid.js";

const tableGrid = createGrid( "ir_grid" );

const tableListViewPlugin = new IRGridTablePlugin( {
    style: "list-view",
    multipleSelect: true,
} );

tableGrid.addPlugin( tableListViewPlugin );`})),M,N=e((()=>{M=`<div id="ir_grid" style="height: 500px; width: 700px"></div>`}));function P(){return(0,F.jsxs)(r,{children:[(0,F.jsx)(t,{children:`IRGridTablePlugin ListViewStyle`}),(0,F.jsx)(n,{children:`ir-style@^2.23.0`}),(0,F.jsxs)(`p`,{children:[`IRGridTablePlugin에서 `,(0,F.jsx)(`code`,{children:`style`}),` 속성을 `,(0,F.jsx)(`code`,{children:`list-view`}),`로 설정하면 PF ListView 스타일이 적용된다.`]}),(0,F.jsx)(i,{docList:I}),(0,F.jsx)(a,{htmlRaw:M,code:O,exampleCode:A})]})}var F,I,L=e((()=>{k(),j(),N(),o(),F=s(),I=[[`/classes/_innorules_grid.IRGridTablePlugin.html`,`IRGridTablePlugin`],[`/types/_innorules_grid.IRGridTablePluginArgs.html#style`,`IRGridTablePluginArgs style`]],P.__docgenInfo={description:``,methods:[],displayName:`ListViewStyle`}})),R,z;e((()=>{_(),D(),L(),R={title:`JS Components/IRGrid/TablePlugin`},z=[`Basic`,`RowDraggable`,`ListViewStyle`]}))();export{m as Basic,P as ListViewStyle,w as RowDraggable,z as __namedExportsOrder,R as default};