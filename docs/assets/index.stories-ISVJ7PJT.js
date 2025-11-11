import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as n,c as l,L as o}from"./version-tag-DqccibA3.js";import"./iframe-D3tc5L3-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQMUxHhF.js";const d=`import {\r
    IRGrid,\r
    IRGridRowNoHeaderCellRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridDefaultKeyPlugin,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
const leftGrid = new IRGrid( {\r
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
        new IRGridDefaultKeyPlugin( {} ),\r
    ],\r
    defaultColumnCellFormat: {\r
        all: { draggable: true },\r
        // 1번 열 drag 기능 비활성화\r
        [1]: { draggable: false },\r
    },\r
} );\r
\r
leftGrid.mergeCells( 2, 2, 3, 3 );\r
\r
leftGrid.setText( 0, 1, "Drag 막힘" );\r
leftGrid.setText( 2, 2, "Drag 활성화 셀" );\r
\r
const rightGrid = new IRGrid( {\r
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
        new IRGridDefaultKeyPlugin( {} ),\r
    ],\r
    defaultColumnCellFormat: {\r
        all: { draggable: true },\r
    },\r
} );\r
\r
rightGrid.mergeCells( 1, 1, 2, 3 );\r
\r
globalThis.leftGrid = leftGrid;\r
globalThis.rightGrid = rightGrid;`,i=`import { IRGridCellDropPlugin, IRGridSingleCellDragPlugin } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
leftGrid.addPlugin( new IRGridSingleCellDragPlugin() );\r
leftGrid.addPlugin( new IRGridCellDropPlugin() );\r
rightGrid.addPlugin( new IRGridSingleCellDragPlugin() );\r
rightGrid.addPlugin( new IRGridCellDropPlugin() );\r
\r
leftGrid.setObject( 2, 2, { name: "Drag 활성화 셀" } );\r
\r
leftGrid.onDropOnCell = ( row, col, ev ) =>\r
{\r
    const data = ev.dataTransfer.getData( "application/json" );\r
    const json = JSON.parse( data );\r
\r
    leftGrid.commandManager.doRecording( "Drag-Drop", () =>\r
    {\r
        leftGrid.setText( row, col, json.name );\r
        leftGrid.setObject( row, col, json );\r
    } );\r
};\r
\r
rightGrid.onDropOnCell = ( row, col, ev ) =>\r
{\r
    const data = ev.dataTransfer.getData( "application/json" );\r
    const json = JSON.parse( data );\r
\r
    rightGrid.commandManager.doRecording( "Drag-Drop", () =>\r
    {\r
        rightGrid.setText( row, col, json.name );\r
        rightGrid.setObject( row, col, json );\r
    } );\r
};`,t=`<div style="\r
    display: flex;\r
    flex-direction: row;\r
    height: 500px;\r
    column-gap: 8px;">\r
    <div id="ir_grid1" style="flex: 1"></div>\r
    <div id="ir_grid2" style="flex: 1"></div>\r
</div>`,a=[["/classes/_innorules_ir-style.grid.IRGridSingleCellDragPlugin.html","IRGridSingleCellDragPlugin"],["/classes/_innorules_ir-style.grid.IRGridCellDropPlugin.html","IRGridCellDropPlugin"]];function s(){return r.jsxs(e,{children:[r.jsx(n,{children:"Grid To Grid"}),r.jsxs("p",{children:[r.jsx("code",{children:"SingleCellDragPlugin"}),"을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다.",r.jsx("br",{}),"셀의 ",r.jsx("code",{children:"draggable"})," 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다."]}),r.jsx(l,{docList:a}),r.jsx(o,{htmlRaw:t,code:d,exampleCode:i})]})}s.__docgenInfo={description:"",methods:[],displayName:"GridToGrid"};const g=`import { IRTreeView } from "@innorules/ir-style";\r
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
            switch ( col )\r
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
grid.setCell( 3, 3, { disabled: true } );\r
grid.mergeCells( 4, 6, 6, 9 );\r
\r
const tree = new IRTreeView( {\r
    showIcon: true,\r
} );\r
\r
tree.mountElement( treeContainer );\r
\r
tree.addNode( {\r
    key: "1",\r
    caption: "이노은행",\r
    expanded: true,\r
} );\r
\r
tree.addNodeList(\r
    { parentKey: "1" },\r
    [\r
        { key: "1-1", caption: "계좌", icon: "ir-icon--folder-open-outline", iconColor: "var(--blue)" },\r
        { key: "1-2", caption: "카드" },\r
        { key: "1-3", caption: "긴 문자 긴 문자열 긴 문자열 길곡긴" },\r
    ],\r
);\r
\r
tree.addHook( "nodeDragStart", ( ev, node ) =>\r
{\r
    ev.dataTransfer.setData( "text/plain", node.caption );\r
} );\r
\r
globalThis.grid = grid;`,c=`grid.onDropOnCell = ( row, col, ev ) =>\r
{\r
    const text = ev.dataTransfer.getData( "text/plain" );\r
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
`,u=`<div\r
    style="display: grid; grid-template-columns: 240px 1fr; grid-template-rows: minmax(0,1fr); height: 500px; gap: 8px">\r
    <div id="treeContainer" style="display: grid"></div>\r
    <div id="ir_grid" style="height: 100%; width: 100%"></div>\r
</div>`,p=[["/classes/_innorules_ir-style.grid.IRGrid.html#ondroponcell","IRGrid.onDropOnCell"]];function R(){return r.jsxs(e,{children:[r.jsx(n,{children:"TreeView TO Grid"}),r.jsx("p",{children:"좌측 TreeView 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다."}),r.jsx(l,{docList:p}),r.jsx(o,{htmlRaw:u,code:g,exampleCode:c})]})}R.__docgenInfo={description:"",methods:[],displayName:"TreeViewToGrid"};const x={title:"JS Components/IRGrid/CellDrag"},D=["GridToGrid","TreeViewToGrid"];export{s as GridToGrid,R as TreeViewToGrid,D as __namedExportsOrder,x as default};
