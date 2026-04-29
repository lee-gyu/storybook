import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,r,s as i,t as a}from"./context-C6uFeUW4.js";import{t as o}from"./jsx-runtime-6sF1Ejqi.js";var s,c=e((()=>{s=`import {
    IRGrid,
    IRGridRowNoHeaderCellRenderer,
    IRGridDefaultCellRenderer,
    IRGridDefaultKeyPlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );
const defaultRenderer = new IRGridDefaultCellRenderer();

const leftGrid = new IRGrid( {
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

            return defaultRenderer;
        },
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: ( row, col, data ) =>
            col === 0 ? rowNoRenderer : defaultRenderer,
    },
    plugins: [
        new IRGridDefaultKeyPlugin( {} ),
    ],
    defaultColumnCellFormat: {
        all: { draggable: true },
        // 1번 열 drag 기능 비활성화
        [1]: { draggable: false },
    },
} );

leftGrid.mergeCells( 2, 2, 3, 3 );

leftGrid.setText( 0, 1, "Drag 막힘" );
leftGrid.setText( 2, 2, "Drag 활성화 셀" );

const rightGrid = new IRGrid( {
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

            return defaultRenderer;
        },
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: ( row, col, data ) =>
            col === 0 ? rowNoRenderer : defaultRenderer,
    },
    plugins: [
        new IRGridDefaultKeyPlugin( {} ),
    ],
    defaultColumnCellFormat: {
        all: { draggable: true },
    },
} );

rightGrid.mergeCells( 1, 1, 2, 3 );

globalThis.leftGrid = leftGrid;
globalThis.rightGrid = rightGrid;`})),l,u=e((()=>{l=`import { IRGridCellDropPlugin, IRGridSingleCellDragPlugin } from "@innorules/ir-style/lib/esm/grid.js";

leftGrid.addPlugin( new IRGridSingleCellDragPlugin() );
leftGrid.addPlugin( new IRGridCellDropPlugin() );
rightGrid.addPlugin( new IRGridSingleCellDragPlugin() );
rightGrid.addPlugin( new IRGridCellDropPlugin() );

leftGrid.setObject( 2, 2, { name: "Drag 활성화 셀" } );

leftGrid.onDropOnCell = ( row, col, ev ) =>
{
    const data = ev.dataTransfer.getData( "application/json" );
    const json = JSON.parse( data );

    leftGrid.commandManager.doRecording( "Drag-Drop", () =>
    {
        leftGrid.setText( row, col, json.name );
        leftGrid.setObject( row, col, json );
    } );
};

rightGrid.onDropOnCell = ( row, col, ev ) =>
{
    const data = ev.dataTransfer.getData( "application/json" );
    const json = JSON.parse( data );

    rightGrid.commandManager.doRecording( "Drag-Drop", () =>
    {
        rightGrid.setText( row, col, json.name );
        rightGrid.setObject( row, col, json );
    } );
};`})),d,f=e((()=>{d=`<div style="
    display: flex;
    flex-direction: row;
    height: 500px;
    column-gap: 8px;">
    <div id="ir_grid1" style="flex: 1"></div>
    <div id="ir_grid2" style="flex: 1"></div>
</div>`}));function p(){return(0,m.jsxs)(n,{children:[(0,m.jsx)(t,{children:`Grid To Grid`}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`SingleCellDragPlugin`}),`을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다.`,(0,m.jsx)(`br`,{}),`셀의 `,(0,m.jsx)(`code`,{children:`draggable`}),` 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다.`]}),(0,m.jsx)(r,{docList:h}),(0,m.jsx)(i,{htmlRaw:d,code:s,exampleCode:l})]})}var m,h,g=e((()=>{c(),u(),f(),a(),m=o(),h=[[`/classes/_innorules_grid.IRGridSingleCellDragPlugin.html`,`IRGridSingleCellDragPlugin`],[`/classes/_innorules_grid.IRGridCellDropPlugin.html`,`IRGridCellDropPlugin`]],p.__docgenInfo={description:``,methods:[],displayName:`GridToGrid`}})),_,v=e((()=>{_=`import { IRTreeView } from "@innorules/ir-style";
import {
    IRGrid,
    IRGridDefaultCellRenderer,
    IRGridRowNoHeaderCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );
const defaultRenderer = new IRGridDefaultCellRenderer();

const grid = new IRGrid( {
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
                    return rowNoRenderer;
                default:
                    return defaultRenderer;
            }
        },
    },
    defaultColumnCellFormat: {
        [5]: { dropDisabled: true },
    },
} );

grid.freezeRows( 5 );
grid.freezeColumn( 3 );
grid.setText( 0, 5, "drop 비활성화" );
grid.mergeCells( 2, 4, 2, 5 );
grid.mergeCells( 10, 4, 10, 5 );
grid.setCell( 3, 3, { disabled: true } );
grid.mergeCells( 4, 6, 6, 9 );

const tree = new IRTreeView( {
    showIcon: true,
} );

tree.mountElement( treeContainer );

tree.addNode( {
    key: "1",
    caption: "이노은행",
    expanded: true,
} );

tree.addNodeList(
    { parentKey: "1" },
    [
        { key: "1-1", caption: "계좌", icon: "ir-icon--folder-open-outline", iconColor: "var(--blue)" },
        { key: "1-2", caption: "카드" },
        { key: "1-3", caption: "긴 문자 긴 문자열 긴 문자열 길곡긴" },
    ],
);

tree.addHook( "nodeDragStart", ( ev, node ) =>
{
    ev.dataTransfer.setData( "text/plain", node.caption );
} );

globalThis.grid = grid;`})),y,b=e((()=>{y=`grid.onDropOnCell = ( row, col, ev ) =>
{
    const text = ev.dataTransfer.getData( "text/plain" );

    if( !text ) return;

    grid.commandManager.doRecording( "Drag-Drop", () =>
    {
        grid.setText( row, col, text );
    } );

    grid.autoSizeColumn( col );
    grid.doEditMode( grid.cell( row, col ) );
};
`})),x,S=e((()=>{x=`<div
    style="display: grid; grid-template-columns: 240px 1fr; grid-template-rows: minmax(0,1fr); height: 500px; gap: 8px">
    <div id="treeContainer" style="display: grid"></div>
    <div id="ir_grid" style="height: 100%; width: 100%"></div>
</div>`}));function C(){return(0,w.jsxs)(n,{children:[(0,w.jsx)(t,{children:`TreeView TO Grid`}),(0,w.jsx)(`p`,{children:`좌측 TreeView 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다.`}),(0,w.jsx)(r,{docList:T}),(0,w.jsx)(i,{htmlRaw:x,code:_,exampleCode:y})]})}var w,T,E=e((()=>{v(),b(),S(),a(),w=o(),T=[[`/classes/_innorules_grid.IRGrid.html#ondroponcell`,`IRGrid.onDropOnCell`]],C.__docgenInfo={description:``,methods:[],displayName:`TreeViewToGrid`}})),D,O;e((()=>{g(),E(),D={title:`JS Components/IRGrid/CellDrag`},O=[`GridToGrid`,`TreeViewToGrid`]}))();export{p as GridToGrid,C as TreeViewToGrid,O as __namedExportsOrder,D as default};