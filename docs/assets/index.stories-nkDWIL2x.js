import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as e,V as o,c as t,L as l}from"./version-tag-Buic5uEj.js";import"./iframe-BmvT9HBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx57Rlms.js";const i=`\r
import {\r
    IRGridCheckboxRenderer,\r
    IRGridDatePickerRenderer,\r
    IRGridDefaultCellRenderer,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
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
function bodyCellRenderer( row, col, data )\r
{\r
    switch ( col )\r
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
}\r
\r
globalThis.defaultRenderer = defaultRenderer;\r
globalThis.bodyCellRenderer = bodyCellRenderer;\r
\r
globalThis.setGrid = ( grid ) =>\r
{\r
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
    Array.from( { length: grid.getRowCount() - 1 }, ( _, id ) =>\r
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
};`,d=`import {\r
    IRGrid,\r
    IRGridRowFilterCellRenderer,\r
    IRGridRowFilterPlugin,\r
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
\r
const rowFilterRenderer = new IRGridRowFilterCellRenderer( {\r
    plugin: rowFilterPlugin,\r
    onDropdownButtonClick( key )\r
    {\r
        console.log( key );\r
    },\r
    // visibleSortButton: false,\r
    // visibleCheckAllButton: false,\r
    // resizerUI: false,\r
    // maxWidth: 600,\r
    // maxHeight: 700\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 2000,\r
        cellRenderer: bodyCellRenderer,\r
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
setGrid( grid );\r
\r
grid.addPlugin( rowFilterPlugin );\r
\r
const rowFilterPluginAPI = rowFilterPlugin.pluginAPI;\r
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
};\r
\r
chk_enabled_sort.onchange = () =>\r
{\r
    rowFilterPluginAPI.columnSortManager.enabledColumnClick = chk_enabled_sort.checked;\r
};\r
`,s=`<div class="flex mb--lg gap-x--lg gap-y--lg align-items--center">\r
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
<div id="ir_grid" style="height: 500px; width: 800px"></div>`,c=[["/classes/_innorules_grid.IRGridRowFilterCellRenderer.html","IRGridRowFilterCellRenderer"],["/classes/_innorules_grid.IRGridRowFilterPlugin.html","IRGridRowFilterPlugin"]];function a(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid Row Filter"}),r.jsx(o,{children:"ir-style@^2.17.0"}),r.jsxs("p",{children:["IRGrid Row Filter Plugin은 IRGrid의 행 필터링을 위한 플러그인입니다.",r.jsx("br",{}),"이 플러그인을 사용하면 정렬 기능, 특정 조건에 따른 행을 필터링 기능을 구현할 수 있습니다."]}),r.jsx(t,{docList:c}),r.jsx(l,{htmlRaw:s,exampleCode:d,code:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"RowFilterPlugin"};const g=`\r
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
function bodyCellRenderer( row, col, data )\r
{\r
    switch ( col )\r
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
}\r
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
\r
const rowFilterRenderer = new IRGridRowFilterCellRenderer( {\r
    plugin: rowFilterPlugin,\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 10,\r
        cellRenderer: bodyCellRenderer,\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 8,\r
        cellRenderer: ( row, col ) =>\r
        {\r
            if( row === 0 )\r
                return rowFilterRenderer;\r
\r
            return globalThis.defaultRenderer;\r
        },\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
grid.addPlugin( rowFilterPlugin );\r
\r
grid.setCell( 0, 0, { text: "id" } );\r
grid.setCell( 0, 1, { text: "String", horizontalAlign: "left", icon: "type-string" } );\r
grid.setCell( 0, 2, { text: "English", horizontalAlign: "left" } );\r
grid.setCell( 0, 3, { text: "Number", icon: "type-number", iconColor: "var(--primary)" } );\r
grid.setCell( 0, 4, { text: "날짜" } );\r
grid.setCell( 0, 5, { text: "Select" } );\r
grid.setCell( 0, 6, { text: "체크박스" } );\r
grid.setCell( 0, 7, { text: "체크박스2 체크박스2 체크박스2" } );\r
grid.mergeCells( 1, 1, 2, 1 );\r
\r
const TEST_STR_LIST = ["사과", "바나나", "수박", "복숭아", "멜론", "자두", "앵두", "두리안", ""];\r
const TEST_STR_LIST2 = ["Apple", "Banana", "banana", "Water Melon", "Melon", "Plum", "Cherry", "Durian"];\r
const startDate = new Date( "2024-01-01" );\r
\r
Array.from( { length: grid.getRowCount() - 1 }, ( _, id ) =>\r
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
btn_merge.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
    if( !selection ) return;\r
\r
    grid.mergeCells( selection.top, selection.left, selection.bottom, selection.right );\r
};\r
\r
btn_split.onclick = () =>\r
{\r
    const selection = grid.getSelection();\r
    if( !selection ) return;\r
\r
    grid.splitCells( selection.top, selection.left );\r
};\r
\r
globalThis.grid = grid;\r
`,u=`import { cellCompare, IRGridRowFilterPlugin } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const rowFilterPluginAPI = grid.getPlugin( IRGridRowFilterPlugin ).pluginAPI;\r
\r
/**\r
 * 병합셀 정렬 커스텀 예제\r
 *\r
 * [정렬 우선 순위]\r
 * 1. 비교 대상 두 셀이 동일한 병합 영역에 속하는 경우\r
 *   → 정렬 방향(ASC/DESC)에 관계없이 **행 번호 기준 오름차순**으로 정렬\r
 * 2. 서로 다른 병합 영역에 속하는 경우\r
 *   → 각 셀의 **"시작 행"**을 기준으로 비교 수행\r
 *     - 병합된 셀은 대표 셀(mergeMain)의 text 기준으로 비교\r
 *     - 병합되지 않은 셀은 해당 셀의 text 기준으로 비교\r
 *\r
 * ※ 시작 행(getStartOfRowId):\r
 *    주어진 행이 속한 병합 그룹의 최상단(첫 번째) 행의 ID를 반환하며,\r
 *    병합 그룹 간 일관된 비교 기준을 제공하는 역할을 합니다.\r
 */\r
rowFilterPluginAPI.columnSortManager.compareTo = ( a, b, order ) =>\r
{\r
    // 각 셀의 병합 그룹 내 "시작 행" ID를 가져옴\r
    const startRowA = grid.getStartOfRowId( a.row );\r
    const startRowB = grid.getStartOfRowId( b.row );\r
\r
    // 1) 두 셀이 동일한 병합 그룹에 속한 경우, 항상 행 번호 기준 오름차순 정렬\r
    if( startRowA === startRowB )\r
        return ( a.row - b.row ) * ( order === "DESC" ? -1 : 1 );\r
\r
    // 서로 다른 병합 그룹인 경우, 각 그룹의 "시작 행"을 기준으로 대표 셀을 가져옴\r
    // 셀 텍스트를 기준으로 최종 비교 수행\r
    return cellCompare(\r
        // 병합된 셀은 mergeMain 셀 기준으로, 일반 셀은 자기 자신 기준으로 비교\r
        grid.cell( startRowA, a.col ).visibleText,\r
        grid.cell( startRowB, b.col ).visibleText,\r
    );\r
};`,R=`<div class="flex mb--lg gap-x--lg gap-y--lg align-items--center">\r
    <button class='button' id='btn_merge'>Merge Cells</button>\r
    <button class='button' id='btn_split'>Split Cells</button>\r
</div>\r
<div id="ir_grid" style="height: 400px; width: 800px"></div>`,m=[["/classes/_innorules_grid.IRGridRowFilterCellRenderer.html","IRGridRowFilterCellRenderer"],["/classes/_innorules_grid.IRGridRowFilterPlugin.html","IRGridRowFilterPlugin"]];function w(){return r.jsxs(n,{children:[r.jsx(e,{children:"IRGrid Custom Merge Cell Sorting"}),r.jsxs("p",{children:[r.jsx("code",{children:"IRGridRowFilterPlugin"}),"의 ",r.jsx("code",{children:"columnSortManager.compareTo"}),"를 재정의하여 사용자 정의 정렬 로직을 구현할 수 있습니다.",r.jsx("br",{}),"※ 참고: ",r.jsx("code",{children:"columnSortManager.compareTo"}),"의 ",r.jsx("code",{children:"order"})," 옵션은 v2.22.2 버전 이상부터 지원"]}),r.jsx(t,{docList:m}),r.jsx(l,{htmlRaw:R,exampleCode:u,code:g})]})}w.__docgenInfo={description:"",methods:[],displayName:"RowFilterPlugin"};const _={title:"JS Components/IRGrid/RowFilterPlugin"},p=["Basic","CustomMergeCellSorting"];export{a as Basic,w as CustomMergeCellSorting,p as __namedExportsOrder,_ as default};
