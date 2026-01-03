import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as r,c as t,L as l}from"./version-tag-B2yXrdOr.js";import"./iframe-BRPaCIBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL7yNlIg.js";const d=`globalThis.setupGrid = ( grid ) =>
{
    // column 1: 기본값
    grid.setText( 0, 1, "기본값" );
    grid.setText( 1, 1, "룰   시스템 접속,          전체      기능 실행" );
    grid.setText( 2, 1, "11111112341    213123 1223123           11" );
    grid.setText( 3, 1, "     apple/banana/  apple/banana/    apple/banana/" );

    // column 2: ellipsis false
    grid.setText( 0, 2, "ellipsis: false" );
    grid.setText( 1, 2, "룰   시스템 접속,          전체      기능 실행" );
    grid.setText( 2, 2, "11111112341    213123 1223123           11" );
    grid.setText( 3, 2, "     apple/banana/  apple/banana/    apple/banana/" );

    // column 3: whiteSpace pre-wrap
    grid.setText( 0, 3, 'whiteSpace: "pre-wrap"' );
    grid.setText( 1, 3, "룰   시스템 접속,          전체      기능 실행" );
    grid.setText( 2, 3, "11111112341    213123 1223123           11" );
    grid.setText( 3, 3, "     apple/banana/  apple/banana/    apple/banana/" );

    // column 4: IconButtonRenderer
    grid.setText( 0, 4, "IconButtonRenderer" );
    grid.setColumnWidth( 4, 200 );
    grid.setCell( 1, 4, { text: "Icon", icon: "save" } );
    grid.setCell( 2, 4, { text: "", icon: "save" } );
    grid.setCell( 3, 4, { text: "", icon: "save", horizontalAlign: "center" } );

    grid.onMountedRow = ( row ) => grid.autoSizeRow( row );
    grid.autoSizeColumn( 3 );

    grid.onSelectCell = ( cell ) =>
    {
        console.log( "Clicked! row: " + cell.row + ", col: " + cell.col );
        console.log( cell.metaInfo );
    };
};`,i=`import {
    IRGrid,
    IRGridDefaultCellRenderer,
    IRGridDefaultCellIconButtonRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

// 기본값 ellipsis: true, whiteSpace: "pre"
const defaultRenderer = new IRGridDefaultCellRenderer();

// ellipsis: false, whiteSpace: "normal"
const ellipsisDefaultRenderer = new IRGridDefaultCellRenderer( {
    ellipsis: false,
} );

// ellipsis: true, whiteSpace: "pre-wrap"
const preWrapDefaultRenderer = new IRGridDefaultCellRenderer( {
    whiteSpace: "pre-wrap",
} );

// DefaultCellIconButtonRenderer
const iconButtonRenderer = new IRGridDefaultCellIconButtonRenderer( {
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeColumn( col );
    },
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: ( _row, col, _cellProps ) =>
        {
            switch ( col )
            {
                case 2:
                    return ellipsisDefaultRenderer;
                case 3:
                    return preWrapDefaultRenderer;
                case 4:
                    return iconButtonRenderer;
                default:
                    return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
    },
    rowHeader: {
        colCount: 1,
    },
} );

setupGrid( grid );`,o='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',s=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridDefaultCellRenderer.html","IRGridDefaultCellRenderer"],["/types/_innorules_grid.IRGridDefaultCellRendererArgs.html","Type Alias IRGridDefaultCellRendererArgs"],["/classes/_innorules_grid.IRGridDefaultCellIconButtonRenderer.html","IRGridDefaultCellIconButtonRenderer"],["/types/_innorules_grid.RendererGridIconButtonArgs.html","Type Alias RendererGridIconButtonArgs"]];function a(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridDefaultCellRenderer"}),e.jsx(t,{docList:s}),e.jsx(l,{htmlRaw:o,code:d,exampleCode:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const c=`import {
    IRGridDefaultCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

globalThis.setupGrid = ( grid ) =>
{
    // 헤더 설정
    grid.setCell( 0, 1, { text: "기본값" } );
    grid.setCell( 0, 2, { icon: "ir-icon--delete", text: "아이콘" } );
    grid.setCell( 0, 3, { text: "Label" } );

    // readonly 행 설정
    grid.setCell( 1, 0, { text: "readonly" } );
    grid.setRowInfo( 1, { cellMetaInfo: { textColor: "blue", readonly: true } } );
    grid.setCell( 1, 1, { text: "true" } );
    grid.setCell( 1, 2, { text: "true" } );
    grid.setCell( 1, 3, { text: "true" } );
    grid.setCell( 1, 4, { text: "true" } );

    // disabled 행 설정
    grid.setCell( 2, 0, { text: "disabled" } );
    grid.setRowInfo( 2, { cellMetaInfo: { disabled: true } } );

    btn_check_commands.onclick = () =>
    {
        console.log( grid.commandManager );
    };
};

globalThis.defaultCellRenderer = new IRGridDefaultCellRenderer();
`,u=`import {
    IRGrid,
    IRGridCheckboxRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

/** CheckboxRenderer Example */
const checkboxRenderer = new IRGridCheckboxRenderer( {
    /** checkbox를 클릭할 시 호출되는 콜백 함수 */
    onCheckboxClick: ( row, col, checked ) => console.log( row + "," + col + ":" + checked ),
} );

/** Column Header CheckboxRenderer */
const colHeaderCheckboxRenderer = new IRGridCheckboxRenderer( {} );

checkboxRenderer.onUpdateCell = ( row, col, props ) =>
{
    console.log( "update checkbox cell!", row, col, props );
};

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 40,
        cellRenderer: ( _row, col, _data ) =>
        {
            switch ( col )
            {
                case 1:
                    return checkboxRenderer;
                case 2:
                    return checkboxRenderer;
                case 3:
                    return checkboxRenderer;
                case 4:
                    return colHeaderCheckboxRenderer;
                default:
                    return defaultCellRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
        cellRenderer: ( _row, col, _data ) =>
        {
            switch ( col )
            {
                case 4:
                    return colHeaderCheckboxRenderer;
                default:
                    return defaultCellRenderer;
            }
        },
    },
    rowHeader: {
        colCount: 1,
    },
    defaultColumnCellFormat: {
        ["body_2"]: { icon: "delete" },
        ["body_3"]: { label: "레이블레이블레이블레이블" },
    },
} );

/** Column Header Checkbox Click Event */
colHeaderCheckboxRenderer.onCheckboxClick = ( row, col, checked ) =>
{
    if( row === 0 )
    {
        for( let i = 1; i < grid.getRowCount(); i++ )
        {
            const { readonly, disabled } = grid.getCellMetaInfo( i, 4 );
            if( readonly || disabled ) continue;

            grid.setText( i, 4, checked );
        }
    }
    else
    {
        let allChecked = true;
        for( let i = 1; i < grid.getRowCount(); i++ )
        {
            if( grid.getText( i, 4 ) !== "true" )
            {
                allChecked = false;
                break;
            }
        }
        grid.setText( 0, 4, allChecked );
    }
};

setupGrid( grid );`,R=`<div class="mb--lg">
    <button id="btn_check_commands" class="button">Check commands</button>
</div>
<div id="ir_grid" style="height: 500px; width: 1300px"></div>`,g=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridCheckboxRenderer.html","IRGridCheckboxRenderer"],["/types/_innorules_grid.RenderGridCheckboxArgs.html","Type Alias RenderGridCheckboxArgs"]];function m(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridCheckboxRenderer"}),e.jsx(t,{docList:g}),e.jsx(l,{htmlRaw:R,code:c,exampleCode:u})]})}m.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const C=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

globalThis.setupGrid = ( grid ) =>
{
    // 헤더 설정
    grid.setCell( 0, 1, { text: "기본값" } );
    grid.setCell( 0, 2, { text: "label" } );

    // disabled 행 설정
    grid.setCell( 1, 0, { text: "disabled" } );
    grid.setRowInfo( 1, { cellMetaInfo: { disabled: true } } );
};

globalThis.defaultCellRenderer = new IRGridDefaultCellRenderer();
`,x=`import {
    IRGrid,
    IRGridRadioCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

/** RadioCellRenderer Basic */
const radioRenderer = new IRGridRadioCellRenderer( {
    onRadioClick: ( row, col ) =>
    {
        console.log( row + "," + col );
    },
} );

radioRenderer.onUpdateCell = ( row, col, props ) =>
{
    console.log( "update radio cell!", row, col );
};

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
        cellRenderer: ( _row, col, _data ) =>
        {
            switch ( col )
            {
                case 1:
                    return radioRenderer;
                case 2:
                    return radioRenderer;
                default:
                    return defaultCellRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 1,
    },
    defaultColumnCellFormat: {
        ["body_2"]: { label: "Radio" },
    },
} );

setupGrid( grid );`,p='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',h=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridRadioCellRenderer.html","IRGridRadioCellRenderer"],["/types/_innorules_grid.RenderGridRadioArgs.html","Type Alias RenderGridRadioArgs"]];function f(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridRadioCellRenderer"}),e.jsx(t,{docList:h}),e.jsx(l,{htmlRaw:p,code:C,exampleCode:x})]})}f.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const w=`const items = [
    { value: "ko", text: "한국어" },
    { value: "en", text: "영어" },
    { value: "sp", text: "스페인어" },
    { value: "zh", text: "중국어" },
    { value: "jp", text: "일본어" },
];

globalThis.setGrid = ( grid ) =>
{
    grid.setText( 0, 1, "기본값" );
    grid.setText( 0, 2, "lazyItems" );
    grid.setText( 0, 3, "allowClear" );
    grid.setText( 0, 4, "customText(allowEdit)" );
    grid.setText( 0, 5, "mappingType value" );

    // col 1
    grid.setText( 1, 1, "영어" );
    grid.setText( 2, 1, "스페인어" );
    grid.setText( 3, 1, "jp" );

    // col 2
    grid.setText( 1, 2, "0" );
    grid.setText( 2, 2, "100" );
    grid.setText( 3, 2, "15000" );

    // col 3
    grid.setText( 1, 3, "영어" );
    grid.setText( 2, 3, "한국어" );
    grid.setText( 7, 3, "일본어" );

    // col 4
    grid.setText( 1, 4, "한국어" );
    grid.setText( 2, 4, "ko" );
    grid.setText( 3, 4, "영어" );
    grid.setText( 4, 4, "en" );
    grid.setText( 7, 4, "unmatched" );

    // col 5
    grid.setText( 1, 5, "한국어" );
    grid.setText( 2, 5, "ko" );
    grid.setText( 3, 5, "영어" );
    grid.setText( 4, 5, "en" );
    grid.setText( 7, 5, "unmatched" );

    grid.autoSizeColumns( 0, 6 );
};

function createBulkItems()
{
    return Array.from( { length: 30000 }, ( v, id ) => ( {
        value: id.toString(),
        text: id.toString(),
    } ) );
}

globalThis.items = items;
globalThis.createBulkItems = createBulkItems;`,I=`import {
    IRGrid,
    IRGridDefaultCellRenderer,
    IRGridSelectCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

const defaultRenderer = new IRGridDefaultCellRenderer();

/** SelectCellRenderer Basic */
const selectRenderer = new IRGridSelectCellRenderer( {
    items,
    onChange: ( row, col, value, text, beforeValue, beforeText ) =>
    {
        console.log(
            \`row: \${row}, col: \${col}, value: \${value}, text: \${text}\\nbeforeValue: \${beforeValue}, beforeText: \${beforeText}\`,
        );
    },
} );

/** SelectCellRenderer lazyItems */
const selectRendererLazyItems = new IRGridSelectCellRenderer( {
    /**
     * 생성자 인자에 함수를 전달
     * version: \`ir-style@^2.17.0\`
     */
    lazyItems: createBulkItems,
} );

/** SelectCellRenderer allowClear */
const selectRendererAllowClear = new IRGridSelectCellRenderer( {
    items,
    allowClear: true,
} );

/** SelectCellRenderer customText + mappingType: text */
const selectRendererCustomText = new IRGridSelectCellRenderer( {
    items,
    allowEdit: true,
    // allowCustomText: true, // allowEdit 가 true 면 자동으로 설정됨
    customDisplayTextFunc: ( value, text, custom ) =>
    {
        if( !custom ) return text;
        if( text === "" ) return "";

        return ["(X)", text].join( " " );
    },
    showErrorIfCustomText: true,
} );

/** SelectCellRenderer customText + mappingType: value */
const selectRendererMappingTypeValue = new IRGridSelectCellRenderer( {
    items,
    allowCustomText: true,
    customDisplayTextFunc: ( value, text, custom ) =>
    {
        if( !custom ) return text;
        if( text === "" ) return "";

        return ["(X)", text].join( " " );
    },
    showErrorIfCustomText: true,
    mappingType: "value",
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 20,
        cellRenderer: ( row, col, data ) =>
        {
            switch ( col )
            {
                case 1: return selectRenderer;
                case 2: return selectRendererLazyItems;
                case 3: return selectRendererAllowClear;
                case 4: return selectRendererCustomText;
                case 5: return selectRendererMappingTypeValue;
                default: return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 8,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 1,
    },
} );

setGrid( grid );`,G='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',b=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridSelectCellRenderer.html","IRGridSelectCellRenderer"],["/types/_innorules_grid.RenderGridSelectArgs.html","Type Alias RenderGridSelectArgs"]];function T(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridSelectCellRenderer"}),e.jsx(t,{docList:b}),e.jsx(l,{htmlRaw:G,code:w,exampleCode:I})]})}T.__docgenInfo={description:"",methods:[],displayName:"SelectCell"};const _=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

globalThis.setupGrid = ( grid ) =>
{
    // 기본값 설정한 컬럼
    grid.setText( 0, 1, "기본값" );
    grid.setText( 1, 1, "2025-10-28" );
    grid.setText( 2, 1, "2025-10-30" );

    // min/maxDate 설정한 컬럼
    grid.setText( 0, 2, "min/maxDate" );

    // 1번째 행 disabled 설정
    grid.setText( 1, 0, "disabled" );
    grid.setRowInfo( 1, { cellMetaInfo: { disabled: true } } );

    // 메모 표시되는 컬럼
    grid.setText( 0, 3, "with memo" );
    grid.setText( 2, 3, "2025-11-11" );
    grid.setText( 5, 3, "2025-12-11" );

    // format 변경한 컬럼
    grid.setText( 0, 4, "format 변경" );
    grid.setText( 1, 4, "20251028" );
    grid.setText( 2, 4, "20251030" );

    // allowedEmptyString false 설정한 컬럼
    grid.setText( 0, 5, "allowedEmptyString(false)" );
    grid.autoSizeColumn( 5 );
};

globalThis.defaultRenderer = new IRGridDefaultCellRenderer();
`,y=`import {
    IRGrid,
    IRGridDatePickerRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

/** DatePickerRenderer Basic */
const datePickerRenderer = new IRGridDatePickerRenderer( {
    onDateClick: ( row, col, text ) => console.log( text ),
} );

/** DatePickerRenderer MinMax */
const minMaxDatePickerRenderer = new IRGridDatePickerRenderer( {
    minDate: new Date(),
    maxDate: new Date( Date.now() + 2 * 24 * 60 * 60 * 1000 ),
} );

/** DatePickerRenderer Format */
const formatDatePickerRenderer = new IRGridDatePickerRenderer( {
    format: "YYYYMMDD",
} );

/** DatePickerRenderer allowedEmptyString */
const notEmptyDatePickerRenderer = new IRGridDatePickerRenderer( {
    allowedEmptyString: false,
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 30,
        cellRenderer: ( _row, col, _data ) =>
        {
            switch ( col )
            {
                case 1:
                    return datePickerRenderer;
                case 2:
                    return minMaxDatePickerRenderer;
                case 3:
                    return datePickerRenderer;
                case 4:
                    return formatDatePickerRenderer;
                case 5:
                    return notEmptyDatePickerRenderer;
                default:
                    return defaultRenderer;
            }
        },
    },
    defaultColumnCellFormat: {
        [3]: { memo: "메모", hasMemo: true },
    },
    colHeader: {
        rowCount: 1,
        colCount: 8,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 1,
    },
} );

setupGrid( grid );`,D='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',k=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridDatePickerRenderer.html","IRGridDatePickerRenderer"],["/types/_innorules_grid.RenderDatePickerArgs.html","Type Alias RenderDatePickerArgs"]];function S(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridDatePickerRenderer"}),e.jsx(t,{docList:k}),e.jsx(l,{htmlRaw:D,code:_,exampleCode:y})]})}S.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const v=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

globalThis.setupGrid = ( grid ) =>
{
    // 헤더 설정
    grid.setText( 0, 1, "기본값" );
    grid.setText( 0, 2, "MinMax(0-30)" );
    grid.setText( 0, 3, "defaultIntent" );
    grid.setText( 0, 4, "afterDecimalLen(4)" );

    // 데이터 설정
    grid.setData( {
        row: 1, col: 1,
        data: [
            ["100", "100", "100", "100"],
            ["50", "33.33", "3", "60.6712"],
            ["10", "16.67", "83.33", "11.1133"],
            ["5", "10", "44.44", "22.2222"],
            ["0", "3.33", "96.67", "3"],
        ],
    } );

    grid.autoSizeColumn( 2 );
    grid.autoSizeColumn( 4 );

    // 하나의 셀만 intent 변경
    grid.setCell( 4, 1, { intent: "warning" } );
};

globalThis.defaultRenderer = new IRGridDefaultCellRenderer();
`,j=`import {
    IRGrid,
    IRGridProgressRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

/** ProgressRenderer Basic */
const progressRenderer = new IRGridProgressRenderer( {} );

/** ProgressRenderer min/max */
const dangerProgressRenderer = new IRGridProgressRenderer( {
    min: 0,
    max: 30,
    defaultIntent: "danger",
} );

/** ProgressRenderer defaultIntent */
const infoProgressRenderer = new IRGridProgressRenderer( { defaultIntent: "info" } );

/** ProgressRenderer afterDecimalLen */
const secondaryProgressRenderer = new IRGridProgressRenderer( {
    defaultIntent: "secondary",
    afterDecimalLen: 4,
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: ( row, col, data ) =>
        {
            switch ( col )
            {
                case 1:
                    return progressRenderer;
                case 2:
                    return dangerProgressRenderer;
                case 3:
                    return infoProgressRenderer;
                case 4:
                    return secondaryProgressRenderer;
                default:
                    return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 6,
    },
    rowHeader: {
        colCount: 1,
    },
} );

setupGrid( grid );`,P='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',B=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridProgressRenderer.html","IRGridProgressRenderer"],["/types/_innorules_grid.RendererGridProgressArgs.html","Type Alias RendererGridProgressArgs"]];function $(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridProgressRenderer"}),e.jsx(t,{docList:B}),e.jsx(l,{htmlRaw:P,code:v,exampleCode:j})]})}$.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const A=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

globalThis.setupGrid = ( grid ) =>
{
    /** 기본값 컬럼 */
    grid.setText( 0, 1, "기본값" );
    grid.setCell( 1, 1, { intent: "secondary" } );
    grid.setCell( 2, 1, { intent: "primary" } );

    grid.setText( 0, 2, "outlineStyle" );
    grid.setText( 0, 3, "defaultColor" );

    /** iconDividerStyle 속성 지정되어있는 열 */
    grid.setText( 0, 4, "iconDividerStyle" );
    grid.setCell( 1, 4, { intent: "primary", text: "text text text text" } );
    grid.setText( 2, 4, "space        space" );
    grid.setText( 3, 4, "Enter \\n Enter" );
    grid.setCell( 4, 4, { text: "Enter \\n Enter\\nabc\\ntest", lineClamp: 3 } );

    /** iconDividerStyle2 열 */
    grid.setText( 0, 5, "iconDividerStyle2" );
    grid.setCell( 1, 5, { text: "내용 저장", icon: "save" } );

    grid.autoSizeColumn( 0 );
    grid.autoSizeColumn( 5 );
};

globalThis.defaultRenderer = new IRGridDefaultCellRenderer();`,E=`import {
    IRGrid,
    IRGridButtonRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

/** ButtonRenderer Basic */
const buttonRenderer = new IRGridButtonRenderer( {
    defaultIcon: "add",
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeColumn( col );
    },
} );

/** ButtonRenderer defaultColor */
const colorButtonRenderer = new IRGridButtonRenderer( {
    defaultColor: "tertiary",
    defaultIcon: "recent-history",
    defaultLabel: "기록보기",
} );

/** ButtonRenderer outlineStyle */
const outlineButtonRenderer = new IRGridButtonRenderer( {
    outlineStyle: true,
    defaultLabel: "자동부여",
    onClick: ( ev, row, col ) =>
    {
        grid.autoSizeColumn( col );
    },
} );

/** ButtonRenderer iconDividerStyle */
const dividerButtonRenderer = new IRGridButtonRenderer( {
    iconDividerStyle: true,
    defaultIcon: "ellipsis",
} );

const dividerButtonRenderer2 = new IRGridButtonRenderer( {
    iconDividerStyle: true,
    defaultLabel: "조건 룰",
    defaultIcon: "search-rule",
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 15,
        cellRenderer: ( _row, col, _data ) =>
        {
            switch ( col )
            {
                case 1:
                    return buttonRenderer;
                case 2:
                    return outlineButtonRenderer;
                case 3:
                    return colorButtonRenderer;
                case 4:
                    return dividerButtonRenderer;
                case 5:
                    return dividerButtonRenderer2;
                default:
                    return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 7,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 1,
    },
} );

setupGrid( grid );`,L='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',z=[["/classes/_innorules_grid.IRGridCellRenderer.html","IRGridCellRenderer"],["/classes/_innorules_grid.IRGridButtonRenderer.html","IRGridButtonRenderer"],["/types/_innorules_grid.RendererGridButtonArgs.html","Type Alias RendererGridButtonArgs"]];function H(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGridButtonRenderer"}),e.jsx(t,{docList:z}),e.jsx(l,{htmlRaw:L,code:A,exampleCode:E})]})}H.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const M=`import {
    IRGrid,
    IRGridDefaultCellRenderer,
} from "@innorules/ir-style/lib/esm/grid.js";

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
class IRGridCustomCellRenderer extends IRGridDefaultCellRenderer
{
    render( row, col, data )
    {
        const element = document.createElement( "div" );

        // IRGrid 기본 셀 패딩 적용을 위해 속성 설정
        element.setAttribute( "data-has-px", "" );
        element.setAttribute( "data-has-py", "" );
        element.className = "ir_grid_cell_content";
        element.innerHTML = "class = <span style='color: blue;'>[abc]</span>";

        return element;
    }

    getCellTextOptions( cell )
    {
        return {
            ...super.getCellTextOptions( cell ),
            text: "class = [abc]",
        };
    }
}

const defaultRenderer = new IRGridDefaultCellRenderer();

new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: ( row, col, data ) =>
        {
            switch ( col )
            {
                case 2: return customRenderer( row, col, data );
                case 3: return new IRGridCustomCellRenderer( row, col, data );
                default: return defaultRenderer;
            }
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120,
    },
    rowHeader: {
        colCount: 2,
    },
} );`,N='<div id="ir_grid" style="height: 500px; width: 1300px"></div>',U=[["/classes/_innorules_grid.CustomCellRenderer.html","CustomCellRenderer"]];function F(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"cellRenderer"}),"인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다."]}),e.jsx(t,{docList:U}),e.jsx(l,{htmlRaw:N,exampleCode:M})]})}F.__docgenInfo={description:"",methods:[],displayName:"CustomRenderer"};const J={title:"JS Components/IRGrid/CellRenderer"},q=["DefaultCellRenderer","CheckboxRenderer","RadioCellRenderer","SelectCellRenderer","DatePickerRenderer","ProgressRenderer","ButtonRenderer","CustomRenderer"];export{H as ButtonRenderer,m as CheckboxRenderer,F as CustomRenderer,S as DatePickerRenderer,a as DefaultCellRenderer,$ as ProgressRenderer,f as RadioCellRenderer,T as SelectCellRenderer,q as __namedExportsOrder,J as default};
