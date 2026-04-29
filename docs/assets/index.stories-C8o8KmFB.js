import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./context-C6uFeUW4.js";import{t as s}from"./jsx-runtime-6sF1Ejqi.js";var c,l=e((()=>{c=`
import {
    IRGridCheckboxRenderer,
    IRGridDatePickerRenderer,
    IRGridDefaultCellRenderer,
    IRGridSelectCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const checkboxRenderer = new IRGridCheckboxRenderer( {} );
const datePickerRenderer = new IRGridDatePickerRenderer( {} );

const items = [
    { value: "한국어", text: "한국어" },
    { value: "영어", text: "영어" },
    { value: "스페인어", text: "스페인어" },
    { value: "일본어", text: "일본어" },
    { value: "독일어", text: "독일어" },
];

const selectRenderer = new IRGridSelectCellRenderer( { items } );
const defaultRenderer = new IRGridDefaultCellRenderer();

function bodyCellRenderer( row, col, data )
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
}

globalThis.defaultRenderer = defaultRenderer;
globalThis.bodyCellRenderer = bodyCellRenderer;

globalThis.setGrid = ( grid ) =>
{
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

    Array.from( { length: grid.getRowCount() - 1 }, ( _, id ) =>
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
};`})),u,d=e((()=>{u=`import {
    IRGrid,
    IRGridRowFilterCellRenderer,
    IRGridRowFilterPlugin,
} from "@innorules/ir-style/lib/esm/grid.js";

const rowFilterPlugin = new IRGridRowFilterPlugin( {
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

const rowFilterRenderer = new IRGridRowFilterCellRenderer( {
    plugin: rowFilterPlugin,
    onDropdownButtonClick( key )
    {
        console.log( key );
    },
    // visibleSortButton: false,
    // visibleCheckAllButton: false,
    // resizerUI: false,
    // maxWidth: 600,
    // maxHeight: 700
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 2000,
        cellRenderer: bodyCellRenderer,
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

setGrid( grid );

grid.addPlugin( rowFilterPlugin );

const rowFilterPluginAPI = rowFilterPlugin.pluginAPI;

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
};

chk_enabled_sort.onchange = () =>
{
    rowFilterPluginAPI.columnSortManager.enabledColumnClick = chk_enabled_sort.checked;
};
`})),f,p=e((()=>{f=`<div class="flex mb--lg gap-x--lg gap-y--lg align-items--center">
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
<div id="ir_grid" style="height: 500px; width: 800px"></div>`}));function m(){return(0,h.jsxs)(r,{children:[(0,h.jsx)(t,{children:`IRGrid Row Filter`}),(0,h.jsx)(n,{children:`ir-style@^2.17.0`}),(0,h.jsxs)(`p`,{children:[`IRGrid Row Filter Plugin은 IRGrid의 행 필터링을 위한 플러그인입니다.`,(0,h.jsx)(`br`,{}),`이 플러그인을 사용하면 정렬 기능, 특정 조건에 따른 행을 필터링 기능을 구현할 수 있습니다.`]}),(0,h.jsx)(i,{docList:g}),(0,h.jsx)(a,{htmlRaw:f,exampleCode:u,code:c})]})}var h,g,_=e((()=>{l(),d(),p(),o(),h=s(),g=[[`/classes/_innorules_grid.IRGridRowFilterCellRenderer.html`,`IRGridRowFilterCellRenderer`],[`/classes/_innorules_grid.IRGridRowFilterPlugin.html`,`IRGridRowFilterPlugin`]],m.__docgenInfo={description:``,methods:[],displayName:`RowFilterPlugin`}})),v,y=e((()=>{v=`
import {
    IRGrid,
    IRGridCheckboxRenderer,
    IRGridDatePickerRenderer,
    IRGridDefaultCellRenderer,
    IRGridRowFilterCellRenderer,
    IRGridRowFilterPlugin,
    IRGridSelectCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const checkboxRenderer = new IRGridCheckboxRenderer( {} );
const datePickerRenderer = new IRGridDatePickerRenderer( {} );

const items = [
    { value: "한국어", text: "한국어" },
    { value: "영어", text: "영어" },
    { value: "스페인어", text: "스페인어" },
    { value: "일본어", text: "일본어" },
    { value: "독일어", text: "독일어" },
];

const selectRenderer = new IRGridSelectCellRenderer( { items } );
const defaultRenderer = new IRGridDefaultCellRenderer();

function bodyCellRenderer( row, col, data )
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
}

const rowFilterPlugin = new IRGridRowFilterPlugin( {
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

const rowFilterRenderer = new IRGridRowFilterCellRenderer( {
    plugin: rowFilterPlugin,
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: bodyCellRenderer,
    },
    colHeader: {
        rowCount: 1,
        colCount: 8,
        cellRenderer: ( row, col ) =>
        {
            if( row === 0 )
                return rowFilterRenderer;

            return globalThis.defaultRenderer;
        },
    },
    rowHeader: {
        colCount: 1,
    },
} );

grid.addPlugin( rowFilterPlugin );

grid.setCell( 0, 0, { text: "id" } );
grid.setCell( 0, 1, { text: "String", horizontalAlign: "left", icon: "type-string" } );
grid.setCell( 0, 2, { text: "English", horizontalAlign: "left" } );
grid.setCell( 0, 3, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );
grid.setCell( 0, 4, { text: "날짜" } );
grid.setCell( 0, 5, { text: "Select" } );
grid.setCell( 0, 6, { text: "체크박스" } );
grid.setCell( 0, 7, { text: "체크박스2 체크박스2 체크박스2" } );
grid.mergeCells( 1, 1, 2, 1 );

const TEST_STR_LIST = ["사과", "바나나", "수박", "복숭아", "멜론", "자두", "앵두", "두리안", ""];
const TEST_STR_LIST2 = ["Apple", "Banana", "banana", "Water Melon", "Melon", "Plum", "Cherry", "Durian"];
const startDate = new Date( "2024-01-01" );

Array.from( { length: grid.getRowCount() - 1 }, ( _, id ) =>
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

btn_merge.onclick = () =>
{
    const selection = grid.getSelection();
    if( !selection ) return;

    grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );
};

btn_split.onclick = () =>
{
    const selection = grid.getSelection();
    if( !selection ) return;

    grid.splitCells( selection.top, selection.left );
};

globalThis.grid = grid;
`})),b,x=e((()=>{b=`import { cellCompare, IRGridRowFilterPlugin } from "@innorules/ir-style/lib/esm/grid.js";

const rowFilterPluginAPI = grid.getPlugin( IRGridRowFilterPlugin ).pluginAPI;

/**
 * 병합셀 정렬 커스텀 예제
 *
 * [정렬 우선 순위]
 * 1. 비교 대상 두 셀이 동일한 병합 영역에 속하는 경우
 *   → 정렬 방향(ASC/DESC)에 관계없이 **행 번호 기준 오름차순**으로 정렬
 * 2. 서로 다른 병합 영역에 속하는 경우
 *   → 각 셀의 **"시작 행"**을 기준으로 비교 수행
 *     - 병합된 셀은 대표 셀(mergeMain)의 text 기준으로 비교
 *     - 병합되지 않은 셀은 해당 셀의 text 기준으로 비교
 *
 * ※ 시작 행(getStartOfRowId):
 *    주어진 행이 속한 병합 그룹의 최상단(첫 번째) 행의 ID를 반환하며,
 *    병합 그룹 간 일관된 비교 기준을 제공하는 역할을 합니다.
 */
rowFilterPluginAPI.columnSortManager.compareTo = ( a, b, order ) =>
{
    // 각 셀의 병합 그룹 내 "시작 행" ID를 가져옴
    const startRowA = grid.getStartOfRowId( a.row );
    const startRowB = grid.getStartOfRowId( b.row );

    // 1) 두 셀이 동일한 병합 그룹에 속한 경우, 항상 행 번호 기준 오름차순 정렬
    if( startRowA === startRowB )
        return ( a.row - b.row ) * ( order === "DESC" ? -1 : 1 );

    // 서로 다른 병합 그룹인 경우, 각 그룹의 "시작 행"을 기준으로 대표 셀을 가져옴
    // 셀 텍스트를 기준으로 최종 비교 수행
    return cellCompare(
        // 병합된 셀은 mergeMain 셀 기준으로, 일반 셀은 자기 자신 기준으로 비교
        grid.cell( startRowA, a.col ).visibleText,
        grid.cell( startRowB, b.col ).visibleText,
    );
};`})),S,C=e((()=>{S=`<div class="flex mb--lg gap-x--lg gap-y--lg align-items--center">
    <button class='button' id='btn_merge'>Merge Cells</button>
    <button class='button' id='btn_split'>Split Cells</button>
</div>
<div id="ir_grid" style="height: 400px; width: 800px"></div>`}));function w(){return(0,T.jsxs)(r,{children:[(0,T.jsx)(t,{children:`IRGrid Custom Merge Cell Sorting`}),(0,T.jsxs)(`p`,{children:[(0,T.jsx)(`code`,{children:`IRGridRowFilterPlugin`}),`의 `,(0,T.jsx)(`code`,{children:`columnSortManager.compareTo`}),`를 재정의하여 사용자 정의 정렬 로직을 구현할 수 있습니다.`,(0,T.jsx)(`br`,{}),`※ 참고: `,(0,T.jsx)(`code`,{children:`columnSortManager.compareTo`}),`의 `,(0,T.jsx)(`code`,{children:`order`}),` 옵션은 v2.22.2 버전 이상부터 지원`]}),(0,T.jsx)(i,{docList:E}),(0,T.jsx)(a,{htmlRaw:S,exampleCode:b,code:v})]})}var T,E,D=e((()=>{y(),x(),C(),o(),T=s(),E=[[`/classes/_innorules_grid.IRGridRowFilterCellRenderer.html`,`IRGridRowFilterCellRenderer`],[`/classes/_innorules_grid.IRGridRowFilterPlugin.html`,`IRGridRowFilterPlugin`]],w.__docgenInfo={description:``,methods:[],displayName:`RowFilterPlugin`}})),O,k;e((()=>{_(),D(),O={title:`JS Components/IRGrid/RowFilterPlugin`},k=[`Basic`,`CustomMergeCellSorting`]}))();export{m as Basic,w as CustomMergeCellSorting,k as __namedExportsOrder,O as default};