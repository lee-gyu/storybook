import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as e,V as l,c as t,L as i}from"./version-tag-D_C1jUBh.js";import"./iframe-BvK5mbBg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIfM9e56.js";const o=`\r
import { IRContextMenu } from "@innorules/ir-style";\r
import { IRGridCheckboxRenderer, IRGridDefaultCellIconButtonRenderer, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
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
    switch ( col )\r
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
globalThis.defaultCellRenderer = defaultCellRenderer;\r
globalThis.setGrid = ( grid ) =>\r
{\r
    const rowCount = grid.getRowCount() - 1;\r
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
    btn_undo.onclick = () => grid.undo();\r
\r
    btn_add_row.onclick = () => grid.addRow();\r
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
};`,d=`import {\r
    IRGrid,\r
    IRGridPopoverPlugin,\r
    IRGridResizerPlugin,\r
    IRGridSingleCellDragPlugin,\r
    IRGridTablePlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
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
        rowCount: 20000,\r
        cellRenderer: globalThis.defaultCellRenderer,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 7,\r
        minSize: 30,\r
        maxSize: 200,\r
        cellRenderer: globalThis.defaultCellRenderer,\r
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
            // 컬럼 크기 변경 시 전체 너비를 유지하면서 다른 컬럼의 크기를 비율에 맞게 자동 조정\r
            // enabledColRatioResizer: true,\r
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
btn_remove_plg.onclick = () => grid.removePlugin( tablePlugin );\r
btn_multi_off.onclick = () => tablePluginAPI.setMultipleSelect( false );\r
btn_add.onclick = () =>\r
{\r
    const value = input_select_row.value;\r
    if( value === "" ) return;\r
\r
    tablePluginAPI.addSelectedRow( parseInt( value, 10 ) );\r
};\r
\r
setGrid( grid );`,s=`<div>\r
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
    </div>\r
</div>`,a=[["/classes/_innorules_ir-style.grid.IRGridTablePlugin.html","IRGridTablePlugin"],["/classes/_innorules_ir-style.grid.IRGridTablePluginAPI.html","IRGridTablePluginAPI"]];function c(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGridTablePlugin"}),r.jsx(l,{children:"ir-style@^2.13.0"}),r.jsxs("p",{children:["IRGridTablePlugin은 IRGrid에 다양한 테이블 관련 기능을 추가하는 플러그인입니다.",r.jsx("br",{}),"이 플러그인을 사용하면 다중 행 선택, 마지막 열 고정, 드래그 앤 드롭 등 다양한 테이블 조작 기능을 구현할 수 있습니다."]}),r.jsx(t,{docList:a}),r.jsx(i,{defaultCodeFold:[55],htmlRaw:s,code:o,exampleCode:d})]})}c.__docgenInfo={description:"",methods:[],displayName:"TablePlugin"};const u=`import {\r
    IRGrid,\r
    IRGridDefaultCellIconButtonRenderer,\r
    IRGridDefaultCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        console.log( "icon click!" );\r
    },\r
} );\r
\r
function defaultCellRenderer( row, col, data )\r
{\r
    switch ( col )\r
    {\r
        case 5:\r
            return iconButtonRenderer;\r
        default:\r
            return defaultRenderer;\r
    }\r
}\r
\r
globalThis.defaultCellRenderer = defaultCellRenderer;\r
globalThis.setGrid = ( grid ) =>\r
{\r
    grid.setColumnWidth( 5, 50 );\r
    grid.fillColumn( 4 );\r
\r
    grid.setText( 0, 0, "사용자 ID" );\r
    grid.setCell( 0, 0, { horizontalAlign: "left" } );\r
    grid.setText( 0, 1, "사용자 이름" );\r
    grid.setCell( 0, 1, { horizontalAlign: "left" } );\r
    grid.setText( 0, 2, "계정 시작일" );\r
    grid.setText( 0, 3, "계정 종료일" );\r
    grid.setText( 0, 4, "역할" );\r
    grid.setCell( 0, 4, { horizontalAlign: "left" } );\r
\r
    Array.from( { length: grid.getRowCount() - 1 } )\r
        .forEach( ( _, id ) =>\r
        {\r
            const randId = Math.floor( Math.random() * 10000 ).toString();\r
            grid.setCell( id + 1, 0, { text: randId, object: { name: randId } } );\r
            grid.setCell( id + 1, 1, { text: "AAAAAAAAAA", object: { name: "AAAAAAAAAA" } } );\r
            grid.setCell( id + 1, 2, { text: "2024-10-08", object: { name: "2024-10-08" } } );\r
            grid.setCell( id + 1, 3, { text: "9999-12-31", object: { name: "9999-12-31" } } );\r
            grid.setCell( id + 1, 4, { text: "룰 시스템 접속, 전체 기능 실행", object: { name: "룰 시스템 접속, 전체 기능 실행" } } );\r
            grid.setCell( id + 1, 5, { icon: "edit", tooltip: "역할 변경", object: { name: "" } } );\r
        } );\r
};\r
\r
const rightGrid = new IRGrid( {\r
    contextElement: ir_grid2,\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
    },\r
    rowHeader: { colCount: 1 },\r
    body: { rowCount: 10 },\r
} );\r
\r
globalThis.rightGrid = rightGrid;`,g=`import {\r
    IRGrid,\r
    IRGridPopoverPlugin,\r
    IRGridResizerPlugin,\r
    IRGridTablePlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rightGrid = globalThis.rightGrid;\r
\r
const tablePlugin = new IRGridTablePlugin( {\r
    onRowClick( grid, row, ev )\r
    {\r
        console.log( row, ev );\r
    },\r
    freezeLastColumn: true,\r
    multipleSelect: true,\r
\r
    /** ^2.21.0 */\r
    rowDraggable: true,\r
} );\r
\r
const leftGrid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 20000,\r
        cellRenderer: defaultCellRenderer,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 6,\r
        minSize: 30,\r
        maxSize: 300,\r
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
    ],\r
} );\r
\r
globalThis.setGrid( leftGrid );\r
\r
const tablePluginAPI = tablePlugin.pluginAPI;\r
\r
chk_multi_select.onchange = ( ev ) => tablePluginAPI.setMultipleSelect( ev.target.checked );\r
chk_row_draggable.onchange = ( ev ) => tablePluginAPI.setRowDragEnabled( ev.target.checked );\r
\r
rightGrid.onDropOnCell = ( rowId, colId, ev ) =>\r
{\r
    const data = ev.dataTransfer.getData( "application/json" );\r
    const rows = JSON.parse( data );\r
\r
    rows.forEach( ( row, i ) =>\r
    {\r
        row.forEach( ( obj, j ) =>\r
        {\r
            const targetRowId = rowId + i;\r
            const targetColId = colId + j;\r
\r
            if( !rightGrid.hasRow( targetRowId ) ) rightGrid.addRow();\r
            if( !rightGrid.hasColumn( targetColId ) ) rightGrid.addColumn();\r
\r
            rightGrid.setText( targetRowId, targetColId, obj.name );\r
            rightGrid.setObject( targetRowId, targetColId, obj );\r
        } );\r
    } );\r
};\r
`,b=`<div>\r
    <div class="flex gap-x--lg">\r
        <div class="switch">\r
            <label class="switch__wrapper">\r
                <span class="switch__track">\r
                    <input id="chk_multi_select" type="checkbox" class="switch__input" checked />\r
                    <span class="switch__slider"></span>\r
                </span>\r
                <span class="switch__text">MultipleSelect</span>\r
            </label>\r
        </div>\r
        <div class="switch">\r
            <label class="switch__wrapper">\r
                <span class="switch__track">\r
                    <input id="chk_row_draggable" type="checkbox" class="switch__input" checked />\r
                    <span class="switch__slider"></span>\r
                </span>\r
                <span class="switch__text">RowDraggable</span>\r
            </label>\r
        </div>\r
    </div>\r
    <div class="flex gap-x--3xl mt--lg" style="height: 500px;">\r
        <div id="ir_grid" style="width: 700px"></div>\r
        <div id="ir_grid2" class="flex--1"></div>\r
    </div>\r
</div>`,R=[["/classes/_innorules_ir-style.grid.IRGridTablePlugin.html","IRGridTablePlugin"],["/classes/_innorules_ir-style.grid.IRGridTablePluginAPI.html","IRGridTablePluginAPI"]];function h(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGridTablePlugin RowDraggable"}),r.jsx(l,{children:"ir-style@^2.22.0"}),r.jsxs("p",{children:["IRGridTablePlugin에서 ",r.jsx("code",{children:"rowDraggable"})," 속성을 사용하면 테이블 행 전체를 드래그 할 수 있다.",r.jsx("br",{}),"선택한 행은 드래그할 수 있으며, `Ctrl + Click`으로 선택을 해제할 수 있다. ",r.jsx("br",{}),r.jsx("code",{children:"multipleSelect"})," 속성과 같이 사용할 경우 다중 행 드래그가 가능하다.",r.jsx("br",{}),r.jsxs("b",{children:["※ 기본적으로 행을 드래그하려면, 선택된 행의 0번째 컬럼 중 최소 하나 이상 ",r.jsx("code",{children:"draggable: true"}),"와, cell의 object가 정의되어 있어야 한다."]})]}),r.jsx(t,{docList:R}),r.jsx(i,{htmlRaw:b,code:u,exampleCode:g})]})}h.__docgenInfo={description:"",methods:[],displayName:"TablePluginRowDraggable"};const f={title:"JS Components/IRGrid/TablePlugin"},x=["Basic","RowDraggable"];export{c as Basic,h as RowDraggable,x as __namedExportsOrder,f as default};
