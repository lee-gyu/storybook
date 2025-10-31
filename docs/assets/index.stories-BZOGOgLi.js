import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as n,c as t,L as l}from"./version-tag-D_C1jUBh.js";import"./iframe-BvK5mbBg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIfM9e56.js";const d=`globalThis.setupGrid = ( grid ) =>\r
{\r
    // column 1: 기본값\r
    grid.setText( 0, 1, "기본값" );\r
    grid.setText( 1, 1, "룰   시스템 접속,          전체      기능 실행" );\r
    grid.setText( 2, 1, "11111112341    213123 1223123           11" );\r
    grid.setText( 3, 1, "     apple/banana/  apple/banana/    apple/banana/" );\r
\r
    // column 2: ellipsis false\r
    grid.setText( 0, 2, "ellipsis: false" );\r
    grid.setText( 1, 2, "룰   시스템 접속,          전체      기능 실행" );\r
    grid.setText( 2, 2, "11111112341    213123 1223123           11" );\r
    grid.setText( 3, 2, "     apple/banana/  apple/banana/    apple/banana/" );\r
\r
    // column 3: whiteSpace pre-wrap\r
    grid.setText( 0, 3, 'whiteSpace: "pre-wrap"' );\r
    grid.setText( 1, 3, "룰   시스템 접속,          전체      기능 실행" );\r
    grid.setText( 2, 3, "11111112341    213123 1223123           11" );\r
    grid.setText( 3, 3, "     apple/banana/  apple/banana/    apple/banana/" );\r
\r
    // column 4: IconButtonRenderer\r
    grid.setText( 0, 4, "IconButtonRenderer" );\r
    grid.setColumnWidth( 4, 200 );\r
    grid.setCell( 1, 4, { text: "Icon", icon: "save" } );\r
    grid.setCell( 2, 4, { text: "", icon: "save" } );\r
    grid.setCell( 3, 4, { text: "", icon: "save", horizontalAlign: "center" } );\r
\r
    grid.onMountedRow = ( row ) => grid.autoSizeRow( row );\r
    grid.autoSizeColumn( 3 );\r
\r
    grid.onSelectCell = ( cell ) =>\r
    {\r
        console.log( "Clicked! row: " + cell.row + ", col: " + cell.col );\r
        console.log( cell.metaInfo );\r
    };\r
};`,i=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridDefaultCellIconButtonRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
// 기본값 ellipsis: true, whiteSpace: "pre"\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
// ellipsis: false, whiteSpace: "normal"\r
const ellipsisDefaultRenderer = new IRGridDefaultCellRenderer( {\r
    ellipsis: false,\r
} );\r
\r
// ellipsis: true, whiteSpace: "pre-wrap"\r
const preWrapDefaultRenderer = new IRGridDefaultCellRenderer( {\r
    whiteSpace: "pre-wrap",\r
} );\r
\r
// DefaultCellIconButtonRenderer\r
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeColumn( col );\r
    },\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 10,\r
        cellRenderer: ( _row, col, _cellProps ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 2:\r
                    return ellipsisDefaultRenderer;\r
                case 3:\r
                    return preWrapDefaultRenderer;\r
                case 4:\r
                    return iconButtonRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
setupGrid( grid );`,o='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',s=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridDefaultCellRenderer.html","IRGridDefaultCellRenderer"],["/types/_innorules_ir-style.grid.IRGridDefaultCellRendererArgs.html","Type Alias IRGridDefaultCellRendererArgs"],["/classes/_innorules_ir-style.grid.IRGridDefaultCellIconButtonRenderer.html","IRGridDefaultCellIconButtonRenderer"],["/types/_innorules_ir-style.grid.RendererGridIconButtonArgs.html","Type Alias RendererGridIconButtonArgs"]];function a(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridDefaultCellRenderer"}),e.jsx(t,{docList:s}),e.jsx(l,{htmlRaw:o,code:d,exampleCode:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const c=`import {\r
    IRGridDefaultCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
globalThis.setupGrid = ( grid ) =>\r
{\r
    // 헤더 설정\r
    grid.setCell( 0, 1, { text: "기본값" } );\r
    grid.setCell( 0, 2, { icon: "ir-icon--delete", text: "아이콘" } );\r
    grid.setCell( 0, 3, { text: "Label" } );\r
\r
    // readonly 행 설정\r
    grid.setCell( 1, 0, { text: "readonly" } );\r
    grid.setRowInfo( 1, { cellMetaInfo: { textColor: "blue", readonly: true } } );\r
    grid.setCell( 1, 1, { text: "true" } );\r
    grid.setCell( 1, 2, { text: "true" } );\r
    grid.setCell( 1, 3, { text: "true" } );\r
    grid.setCell( 1, 4, { text: "true" } );\r
\r
    // disabled 행 설정\r
    grid.setCell( 2, 0, { text: "disabled" } );\r
    grid.setRowInfo( 2, { cellMetaInfo: { disabled: true } } );\r
\r
    btn_check_commands.onclick = () =>\r
    {\r
        console.log( grid.commandManager );\r
    };\r
};\r
\r
globalThis.defaultCellRenderer = new IRGridDefaultCellRenderer();\r
`,u=`import {\r
    IRGrid,\r
    IRGridCheckboxRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
/** CheckboxRenderer Example */\r
const checkboxRenderer = new IRGridCheckboxRenderer( {\r
    /** checkbox를 클릭할 시 호출되는 콜백 함수 */\r
    onCheckboxClick: ( row, col, checked ) => console.log( row + "," + col + ":" + checked ),\r
} );\r
\r
/** Column Header CheckboxRenderer */\r
const colHeaderCheckboxRenderer = new IRGridCheckboxRenderer( {} );\r
\r
checkboxRenderer.onUpdateCell = ( row, col, props ) =>\r
{\r
    console.log( "update checkbox cell!", row, col, props );\r
};\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 40,\r
        cellRenderer: ( _row, col, _data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 1:\r
                    return checkboxRenderer;\r
                case 2:\r
                    return checkboxRenderer;\r
                case 3:\r
                    return checkboxRenderer;\r
                case 4:\r
                    return colHeaderCheckboxRenderer;\r
                default:\r
                    return defaultCellRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
        cellRenderer: ( _row, col, _data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 4:\r
                    return colHeaderCheckboxRenderer;\r
                default:\r
                    return defaultCellRenderer;\r
            }\r
        },\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
    defaultColumnCellFormat: {\r
        ["body_2"]: { icon: "delete" },\r
        ["body_3"]: { label: "레이블레이블레이블레이블" },\r
    },\r
} );\r
\r
/** Column Header Checkbox Click Event */\r
colHeaderCheckboxRenderer.onCheckboxClick = ( row, col, checked ) =>\r
{\r
    if( row === 0 )\r
    {\r
        for( let i = 1; i < grid.getRowCount(); i++ )\r
        {\r
            const { readonly, disabled } = grid.getCellMetaInfo( i, 4 );\r
            if( readonly || disabled ) continue;\r
\r
            grid.setText( i, 4, checked );\r
        }\r
    }\r
    else\r
    {\r
        let allChecked = true;\r
        for( let i = 1; i < grid.getRowCount(); i++ )\r
        {\r
            if( grid.getText( i, 4 ) !== "true" )\r
            {\r
                allChecked = false;\r
                break;\r
            }\r
        }\r
        grid.setText( 0, 4, allChecked );\r
    }\r
};\r
\r
setupGrid( grid );`,R=`<div class="mb--lg">\r
    <button id="btn_check_commands" class="button">Check commands</button>\r
</div>\r
<div id="ir_grid" style="height: 500px; width: 1300px"></div>`,g=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridCheckboxRenderer.html","IRGridCheckboxRenderer"],["/types/_innorules_ir-style.grid.RenderGridCheckboxArgs.html","Type Alias RenderGridCheckboxArgs"]];function C(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridCheckboxRenderer"}),e.jsx(t,{docList:g}),e.jsx(l,{htmlRaw:R,code:c,exampleCode:u})]})}C.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const m=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
globalThis.setupGrid = ( grid ) =>\r
{\r
    // 헤더 설정\r
    grid.setCell( 0, 1, { text: "기본값" } );\r
    grid.setCell( 0, 2, { text: "label" } );\r
\r
    // disabled 행 설정\r
    grid.setCell( 1, 0, { text: "disabled" } );\r
    grid.setRowInfo( 1, { cellMetaInfo: { disabled: true } } );\r
};\r
\r
globalThis.defaultCellRenderer = new IRGridDefaultCellRenderer();\r
`,x=`import {\r
    IRGrid,\r
    IRGridRadioCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
/** RadioCellRenderer Basic */\r
const radioRenderer = new IRGridRadioCellRenderer( {\r
    onRadioClick: ( row, col ) =>\r
    {\r
        console.log( row + "," + col );\r
    },\r
} );\r
\r
radioRenderer.onUpdateCell = ( row, col, props ) =>\r
{\r
    console.log( "update radio cell!", row, col );\r
};\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 30,\r
        cellRenderer: ( _row, col, _data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 1:\r
                    return radioRenderer;\r
                case 2:\r
                    return radioRenderer;\r
                default:\r
                    return defaultCellRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 5,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
    defaultColumnCellFormat: {\r
        ["body_2"]: { label: "Radio" },\r
    },\r
} );\r
\r
setupGrid( grid );`,p='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',h=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridRadioCellRenderer.html","IRGridRadioCellRenderer"],["/types/_innorules_ir-style.grid.RenderGridRadioArgs.html","Type Alias RenderGridRadioArgs"]];function f(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridRadioCellRenderer"}),e.jsx(t,{docList:h}),e.jsx(l,{htmlRaw:p,code:m,exampleCode:x})]})}f.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const w=`const items = [\r
    { value: "ko", text: "한국어" },\r
    { value: "en", text: "영어" },\r
    { value: "sp", text: "스페인어" },\r
    { value: "zh", text: "중국어" },\r
    { value: "jp", text: "일본어" },\r
];\r
\r
globalThis.setGrid = ( grid ) =>\r
{\r
    grid.setText( 0, 1, "기본값" );\r
    grid.setText( 0, 2, "lazyItems" );\r
    grid.setText( 0, 3, "allowClear" );\r
    grid.setText( 0, 4, "customText(allowEdit)" );\r
    grid.setText( 0, 5, "mappingType value" );\r
\r
    // col 1\r
    grid.setText( 1, 1, "영어" );\r
    grid.setText( 2, 1, "스페인어" );\r
    grid.setText( 3, 1, "jp" );\r
\r
    // col 2\r
    grid.setText( 1, 2, "0" );\r
    grid.setText( 2, 2, "100" );\r
    grid.setText( 3, 2, "15000" );\r
\r
    // col 3\r
    grid.setText( 1, 3, "영어" );\r
    grid.setText( 2, 3, "한국어" );\r
    grid.setText( 7, 3, "일본어" );\r
\r
    // col 4\r
    grid.setText( 1, 4, "한국어" );\r
    grid.setText( 2, 4, "ko" );\r
    grid.setText( 3, 4, "영어" );\r
    grid.setText( 4, 4, "en" );\r
    grid.setText( 7, 4, "unmatched" );\r
\r
    // col 5\r
    grid.setText( 1, 5, "한국어" );\r
    grid.setText( 2, 5, "ko" );\r
    grid.setText( 3, 5, "영어" );\r
    grid.setText( 4, 5, "en" );\r
    grid.setText( 7, 5, "unmatched" );\r
\r
    grid.autoSizeColumns( 0, 6 );\r
};\r
\r
function createBulkItems()\r
{\r
    return Array.from( { length: 30000 }, ( v, id ) => ( {\r
        value: id.toString(),\r
        text: id.toString(),\r
    } ) );\r
}\r
\r
globalThis.items = items;\r
globalThis.createBulkItems = createBulkItems;`,I=`import {\r
    IRGrid,\r
    IRGridDefaultCellRenderer,\r
    IRGridSelectCellRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
/** SelectCellRenderer Basic */\r
const selectRenderer = new IRGridSelectCellRenderer( {\r
    items,\r
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>\r
    {\r
        console.log(\r
            \`row: \${row}, col: \${col}, value: \${value}, text: \${text}\\nbeforeValue: \${beforeValue}, beforeText: \${beforeText}\`,\r
        );\r
    },\r
} );\r
\r
/** SelectCellRenderer lazyItems */\r
const selectRendererLazyItems = new IRGridSelectCellRenderer( {\r
    /**\r
     * 생성자 인자에 함수를 전달\r
     * version: \`ir-style@^2.17.0\`\r
     */\r
    lazyItems: createBulkItems,\r
} );\r
\r
/** SelectCellRenderer allowClear */\r
const selectRendererAllowClear = new IRGridSelectCellRenderer( {\r
    items,\r
    allowClear: true,\r
} );\r
\r
/** SelectCellRenderer customText + mappingType: text */\r
const selectRendererCustomText = new IRGridSelectCellRenderer( {\r
    items,\r
    allowEdit: true,\r
    // allowCustomText: true, // allowEdit 가 true 면 자동으로 설정됨\r
    customDisplayTextFunc: ( value, text, custom ) =>\r
    {\r
        if( !custom ) return text;\r
        if( text === "" ) return "";\r
\r
        return ["(X)", text].join( " " );\r
    },\r
    showErrorIfCustomText: true,\r
} );\r
\r
/** SelectCellRenderer customText + mappingType: value */\r
const selectRendererMappingTypeValue = new IRGridSelectCellRenderer( {\r
    items,\r
    allowCustomText: true,\r
    customDisplayTextFunc: ( value, text, custom ) =>\r
    {\r
        if( !custom ) return text;\r
        if( text === "" ) return "";\r
\r
        return ["(X)", text].join( " " );\r
    },\r
    showErrorIfCustomText: true,\r
    mappingType: "value",\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 20,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 1: return selectRenderer;\r
                case 2: return selectRendererLazyItems;\r
                case 3: return selectRendererAllowClear;\r
                case 4: return selectRendererCustomText;\r
                case 5: return selectRendererMappingTypeValue;\r
                default: return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 8,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
setGrid( grid );`,G='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',y=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridSelectCellRenderer.html","IRGridSelectCellRenderer"],["/types/_innorules_ir-style.grid.RenderGridSelectArgs.html","Type Alias RenderGridSelectArgs"]];function T(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridSelectCellRenderer"}),e.jsx(t,{docList:y}),e.jsx(l,{htmlRaw:G,code:w,exampleCode:I})]})}T.__docgenInfo={description:"",methods:[],displayName:"SelectCell"};const b=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
globalThis.setupGrid = ( grid ) =>\r
{\r
    // 기본값 설정한 컬럼\r
    grid.setText( 0, 1, "기본값" );\r
    grid.setText( 1, 1, "2025-10-28" );\r
    grid.setText( 2, 1, "2025-10-30" );\r
\r
    // min/maxDate 설정한 컬럼\r
    grid.setText( 0, 2, "min/maxDate" );\r
\r
    // 1번째 행 disabled 설정\r
    grid.setText( 1, 0, "disabled" );\r
    grid.setRowInfo( 1, { cellMetaInfo: { disabled: true } } );\r
\r
    // 메모 표시되는 컬럼\r
    grid.setText( 0, 3, "with memo" );\r
    grid.setText( 2, 3, "2025-11-11" );\r
    grid.setText( 5, 3, "2025-12-11" );\r
\r
    // format 변경한 컬럼\r
    grid.setText( 0, 4, "format 변경" );\r
    grid.setText( 1, 4, "20251028" );\r
    grid.setText( 2, 4, "20251030" );\r
\r
    // allowedEmptyString false 설정한 컬럼\r
    grid.setText( 0, 5, "allowedEmptyString(false)" );\r
    grid.autoSizeColumn( 5 );\r
};\r
\r
globalThis.defaultRenderer = new IRGridDefaultCellRenderer();\r
`,_=`import {\r
    IRGrid,\r
    IRGridDatePickerRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
/** DatePickerRenderer Basic */\r
const datePickerRenderer = new IRGridDatePickerRenderer( {\r
    onDateClick: ( row, col, text ) => console.log( text ),\r
} );\r
\r
/** DatePickerRenderer MinMax */\r
const minMaxDatePickerRenderer = new IRGridDatePickerRenderer( {\r
    minDate: new Date(),\r
    maxDate: new Date( Date.now() + 2 * 24 * 60 * 60 * 1000 ),\r
} );\r
\r
/** DatePickerRenderer Format */\r
const formatDatePickerRenderer = new IRGridDatePickerRenderer( {\r
    format: "YYYYMMDD",\r
} );\r
\r
/** DatePickerRenderer allowedEmptyString */\r
const notEmptyDatePickerRenderer = new IRGridDatePickerRenderer( {\r
    allowedEmptyString: false,\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 30,\r
        cellRenderer: ( _row, col, _data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 1:\r
                    return datePickerRenderer;\r
                case 2:\r
                    return minMaxDatePickerRenderer;\r
                case 3:\r
                    return datePickerRenderer;\r
                case 4:\r
                    return formatDatePickerRenderer;\r
                case 5:\r
                    return notEmptyDatePickerRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    defaultColumnCellFormat: {\r
        [3]: { memo: "메모", hasMemo: true },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 8,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
setupGrid( grid );`,D='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',k=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridDatePickerRenderer.html","IRGridDatePickerRenderer"],["/types/_innorules_ir-style.grid.RenderDatePickerArgs.html","Type Alias RenderDatePickerArgs"]];function S(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridDatePickerRenderer"}),e.jsx(t,{docList:k}),e.jsx(l,{htmlRaw:D,code:b,exampleCode:_})]})}S.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const v=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
globalThis.setupGrid = ( grid ) =>\r
{\r
    // 헤더 설정\r
    grid.setText( 0, 1, "기본값" );\r
    grid.setText( 0, 2, "MinMax(0-30)" );\r
    grid.setText( 0, 3, "defaultIntent" );\r
    grid.setText( 0, 4, "afterDecimalLen(4)" );\r
\r
    // 데이터 설정\r
    grid.setData( {\r
        row: 1, col: 1,\r
        data: [\r
            ["100", "100", "100", "100"],\r
            ["50", "33.33", "3", "60.6712"],\r
            ["10", "16.67", "83.33", "11.1133"],\r
            ["5", "10", "44.44", "22.2222"],\r
            ["0", "3.33", "96.67", "3"],\r
        ],\r
    } );\r
\r
    grid.autoSizeColumn( 2 );\r
    grid.autoSizeColumn( 4 );\r
\r
    // 하나의 셀만 intent 변경\r
    grid.setCell( 4, 1, { intent: "warning" } );\r
};\r
\r
globalThis.defaultRenderer = new IRGridDefaultCellRenderer();\r
`,P=`import {\r
    IRGrid,\r
    IRGridProgressRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
/** ProgressRenderer Basic */\r
const progressRenderer = new IRGridProgressRenderer( {} );\r
\r
/** ProgressRenderer min/max */\r
const dangerProgressRenderer = new IRGridProgressRenderer( {\r
    min: 0,\r
    max: 30,\r
    defaultIntent: "danger",\r
} );\r
\r
/** ProgressRenderer defaultIntent */\r
const infoProgressRenderer = new IRGridProgressRenderer( { defaultIntent: "info" } );\r
\r
/** ProgressRenderer afterDecimalLen */\r
const secondaryProgressRenderer = new IRGridProgressRenderer( {\r
    defaultIntent: "secondary",\r
    afterDecimalLen: 4,\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 10,\r
        cellRenderer: ( row, col, data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 1:\r
                    return progressRenderer;\r
                case 2:\r
                    return dangerProgressRenderer;\r
                case 3:\r
                    return infoProgressRenderer;\r
                case 4:\r
                    return secondaryProgressRenderer;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 6,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
setupGrid( grid );`,j='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',B=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridProgressRenderer.html","IRGridProgressRenderer"],["/types/_innorules_ir-style.grid.RendererGridProgressArgs.html","Type Alias RendererGridProgressArgs"]];function $(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridProgressRenderer"}),e.jsx(t,{docList:B}),e.jsx(l,{htmlRaw:j,code:v,exampleCode:P})]})}$.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const A=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
globalThis.setupGrid = ( grid ) =>\r
{\r
    /** 기본값 컬럼 */\r
    grid.setText( 0, 1, "기본값" );\r
    grid.setCell( 1, 1, { intent: "secondary" } );\r
    grid.setCell( 2, 1, { intent: "primary" } );\r
\r
    grid.setText( 0, 2, "outlineStyle" );\r
    grid.setText( 0, 3, "defaultColor" );\r
\r
    /** iconDividerStyle 속성 지정되어있는 열 */\r
    grid.setText( 0, 4, "iconDividerStyle" );\r
    grid.setCell( 1, 4, { intent: "primary", text: "text text text text" } );\r
    grid.setText( 2, 4, "space        space" );\r
    grid.setText( 3, 4, "Enter \\n Enter" );\r
\r
    /** iconDividerStyle2 열 */\r
    grid.setText( 0, 5, "iconDividerStyle2" );\r
    grid.setCell( 1, 5, { text: "내용 저장", icon: "save" } );\r
\r
    grid.autoSizeColumn( 0 );\r
    grid.autoSizeColumn( 5 );\r
};\r
\r
globalThis.defaultRenderer = new IRGridDefaultCellRenderer();`,L=`import {\r
    IRGrid,\r
    IRGridButtonRenderer,\r
} from "@innorules/ir-style/lib/esm/grid.js";\r
\r
/** ButtonRenderer Basic */\r
const buttonRenderer = new IRGridButtonRenderer( {\r
    defaultIcon: "add",\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeColumn( col );\r
    },\r
} );\r
\r
/** ButtonRenderer defaultColor */\r
const colorButtonRenderer = new IRGridButtonRenderer( {\r
    defaultColor: "tertiary",\r
    defaultIcon: "recent-history",\r
    defaultLabel: "기록보기",\r
} );\r
\r
/** ButtonRenderer outlineStyle */\r
const outlineButtonRenderer = new IRGridButtonRenderer( {\r
    outlineStyle: true,\r
    defaultLabel: "자동부여",\r
    onClick: ( ev, row, col ) =>\r
    {\r
        grid.autoSizeColumn( col );\r
    },\r
} );\r
\r
/** ButtonRenderer iconDividerStyle */\r
const dividerButtonRenderer = new IRGridButtonRenderer( {\r
    iconDividerStyle: true,\r
    defaultIcon: "ellipsis",\r
} );\r
\r
const dividerButtonRenderer2 = new IRGridButtonRenderer( {\r
    iconDividerStyle: true,\r
    defaultLabel: "조건 룰",\r
    defaultIcon: "search-rule",\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: ir_grid,\r
    body: {\r
        rowCount: 15,\r
        cellRenderer: ( _row, col, _data ) =>\r
        {\r
            switch ( col )\r
            {\r
                case 1:\r
                    return buttonRenderer;\r
                case 2:\r
                    return outlineButtonRenderer;\r
                case 3:\r
                    return colorButtonRenderer;\r
                case 4:\r
                    return dividerButtonRenderer;\r
                case 5:\r
                    return dividerButtonRenderer2;\r
                default:\r
                    return defaultRenderer;\r
            }\r
        },\r
    },\r
    colHeader: {\r
        rowCount: 1,\r
        colCount: 7,\r
        defaultSize: 120,\r
    },\r
    rowHeader: {\r
        colCount: 1,\r
    },\r
} );\r
\r
setupGrid( grid );`,E='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',z=[["/classes/_innorules_ir-style.grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_ir-style.grid.IRGridButtonRenderer.html","IRGridButtonRenderer"],["/types/_innorules_ir-style.grid.RendererGridButtonArgs.html","Type Alias RendererGridButtonArgs"]];function H(){return e.jsxs(r,{children:[e.jsx(n,{children:"IRGridButtonRenderer"}),e.jsx(t,{docList:z}),e.jsx(l,{htmlRaw:E,code:A,exampleCode:L})]})}H.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const Y={title:"JS Components/IRGrid/CellRenderer"},W=["DefaultCellRenderer","CheckboxRenderer","RadioCellRenderer","SelectCellRenderer","DatePickerRenderer","ProgressRenderer","ButtonRenderer"];export{H as ButtonRenderer,C as CheckboxRenderer,S as DatePickerRenderer,a as DefaultCellRenderer,$ as ProgressRenderer,f as RadioCellRenderer,T as SelectCellRenderer,W as __namedExportsOrder,Y as default};
