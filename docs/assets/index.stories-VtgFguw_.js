import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,r,s as i,t as a}from"./context-C6uFeUW4.js";import{t as o}from"./jsx-runtime-6sF1Ejqi.js";var s,ee=e((()=>{s=`globalThis.setupGrid = ( grid ) =>
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
};`})),c,te=e((()=>{c=`import {
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
            switch( col )
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

setupGrid( grid );`})),ne,re=e((()=>{ne=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function l(){return(0,u.jsxs)(n,{children:[(0,u.jsx)(t,{children:`IRGridDefaultCellRenderer`}),(0,u.jsx)(r,{docList:d}),(0,u.jsx)(i,{htmlRaw:ne,code:s,exampleCode:c})]})}var u,d,ie=e((()=>{ee(),te(),re(),a(),u=o(),d=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridDefaultCellRenderer.html`,`IRGridDefaultCellRenderer`],[`/types/_innorules_grid.IRGridDefaultCellRendererArgs.html`,`Type Alias IRGridDefaultCellRendererArgs`],[`/classes/_innorules_grid.IRGridDefaultCellIconButtonRenderer.html`,`IRGridDefaultCellIconButtonRenderer`],[`/types/_innorules_grid.RendererGridIconButtonArgs.html`,`Type Alias RendererGridIconButtonArgs`]],l.__docgenInfo={description:``,methods:[],displayName:`CellRenderer`}})),f,ae=e((()=>{f=`import {
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
`})),p,oe=e((()=>{p=`import {
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
            switch( col )
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
            switch( col )
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

setupGrid( grid );`})),m,se=e((()=>{m=`<div class="mb--lg">
    <button id="btn_check_commands" class="button">Check commands</button>
</div>
<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function h(){return(0,g.jsxs)(n,{children:[(0,g.jsx)(t,{children:`IRGridCheckboxRenderer`}),(0,g.jsx)(r,{docList:_}),(0,g.jsx)(i,{htmlRaw:m,code:f,exampleCode:p})]})}var g,_,ce=e((()=>{ae(),oe(),se(),a(),g=o(),_=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridCheckboxRenderer.html`,`IRGridCheckboxRenderer`],[`/types/_innorules_grid.RenderGridCheckboxArgs.html`,`Type Alias RenderGridCheckboxArgs`]],h.__docgenInfo={description:``,methods:[],displayName:`CellRenderer`}})),v,le=e((()=>{v=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

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
`})),y,ue=e((()=>{y=`import {
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
            switch( col )
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

setupGrid( grid );`})),b,de=e((()=>{b=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function x(){return(0,S.jsxs)(n,{children:[(0,S.jsx)(t,{children:`IRGridRadioCellRenderer`}),(0,S.jsx)(r,{docList:C}),(0,S.jsx)(i,{htmlRaw:b,code:v,exampleCode:y})]})}var S,C,fe=e((()=>{le(),ue(),de(),a(),S=o(),C=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridRadioCellRenderer.html`,`IRGridRadioCellRenderer`],[`/types/_innorules_grid.RenderGridRadioArgs.html`,`Type Alias RenderGridRadioArgs`]],x.__docgenInfo={description:``,methods:[],displayName:`CellRenderer`}})),w,pe=e((()=>{w=`const items = [
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
    grid.setText( 0, 6, "searchBox" );

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

    // col 6
    grid.setText( 1, 6, "한국어" );
    grid.setText( 2, 6, "영어" );
    grid.setText( 4, 6, "ko" );
    grid.setText( 5, 6, "en" );

    grid.autoSizeColumns( 0, 7 );
};

function createBulkItems()
{
    return Array.from( { length: 30000 }, ( v, id ) => ( {
        value: id.toString(),
        text: id.toString(),
    } ) );
}

globalThis.items = items;
globalThis.createBulkItems = createBulkItems;`})),T,me=e((()=>{T=`import {
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

const selectRendererSearchBox = new IRGridSelectCellRenderer( {
    items,
    /**
     * version: \`ir-style@^3.0.4\`
     */
    searchBox: true,
    showErrorIfCustomText: true,
    allowCustomText: true,
    customDisplayTextFunc: ( value, text, custom ) =>
    {
        if( !custom ) return text;
        if( text === "" ) return "";

        return ["(X)", text].join( " " );
    },
    mappingType: "value",
} );

const grid = new IRGrid( {
    contextElement: ir_grid,
    body: {
        rowCount: 20,
        cellRenderer: ( row, col, data ) =>
        {
            switch( col )
            {
                case 1: return selectRenderer;
                case 2: return selectRendererLazyItems;
                case 3: return selectRendererAllowClear;
                case 4: return selectRendererCustomText;
                case 5: return selectRendererMappingTypeValue;
                case 6: return selectRendererSearchBox;
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

setGrid( grid );`})),E,he=e((()=>{E=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function D(){return(0,O.jsxs)(n,{children:[(0,O.jsx)(t,{children:`IRGridSelectCellRenderer`}),(0,O.jsx)(r,{docList:k}),(0,O.jsx)(i,{htmlRaw:E,code:w,exampleCode:T})]})}var O,k,ge=e((()=>{pe(),me(),he(),a(),O=o(),k=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridSelectCellRenderer.html`,`IRGridSelectCellRenderer`],[`/types/_innorules_grid.RenderGridSelectArgs.html`,`Type Alias RenderGridSelectArgs`]],D.__docgenInfo={description:``,methods:[],displayName:`SelectCell`}})),A,_e=e((()=>{A=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

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
`})),j,ve=e((()=>{j=`import {
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
            switch( col )
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

setupGrid( grid );`})),M,ye=e((()=>{M=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function N(){return(0,P.jsxs)(n,{children:[(0,P.jsx)(t,{children:`IRGridDatePickerRenderer`}),(0,P.jsx)(r,{docList:F}),(0,P.jsx)(i,{htmlRaw:M,code:A,exampleCode:j})]})}var P,F,be=e((()=>{_e(),ve(),ye(),a(),P=o(),F=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridDatePickerRenderer.html`,`IRGridDatePickerRenderer`],[`/types/_innorules_grid.RenderDatePickerArgs.html`,`Type Alias RenderDatePickerArgs`]],N.__docgenInfo={description:``,methods:[],displayName:`CellRenderer`}})),I,xe=e((()=>{I=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

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
`})),L,Se=e((()=>{L=`import {
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
            switch( col )
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

setupGrid( grid );`})),R,Ce=e((()=>{R=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function z(){return(0,B.jsxs)(n,{children:[(0,B.jsx)(t,{children:`IRGridProgressRenderer`}),(0,B.jsx)(r,{docList:V}),(0,B.jsx)(i,{htmlRaw:R,code:I,exampleCode:L})]})}var B,V,we=e((()=>{xe(),Se(),Ce(),a(),B=o(),V=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridProgressRenderer.html`,`IRGridProgressRenderer`],[`/types/_innorules_grid.RendererGridProgressArgs.html`,`Type Alias RendererGridProgressArgs`]],z.__docgenInfo={description:``,methods:[],displayName:`CellRenderer`}})),H,Te=e((()=>{H=`import { IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

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

globalThis.defaultRenderer = new IRGridDefaultCellRenderer();`})),U,Ee=e((()=>{U=`import {
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
            switch( col )
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

setupGrid( grid );`})),W,De=e((()=>{W=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function G(){return(0,K.jsxs)(n,{children:[(0,K.jsx)(t,{children:`IRGridButtonRenderer`}),(0,K.jsx)(r,{docList:q}),(0,K.jsx)(i,{htmlRaw:W,code:H,exampleCode:U})]})}var K,q,Oe=e((()=>{Te(),Ee(),De(),a(),K=o(),q=[[`/classes/_innorules_grid.IRGridCellRenderer.html`,`IRGridCellRenderer`],[`/classes/_innorules_grid.IRGridButtonRenderer.html`,`IRGridButtonRenderer`],[`/types/_innorules_grid.RendererGridButtonArgs.html`,`Type Alias RendererGridButtonArgs`]],G.__docgenInfo={description:``,methods:[],displayName:`CellRenderer`}})),J,ke=e((()=>{J=`import {
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
            switch( col )
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
} );`})),Y,Ae=e((()=>{Y=`<div id="ir_grid" style="height: 500px; width: 1300px"></div>`}));function X(){return(0,Z.jsxs)(n,{children:[(0,Z.jsx)(t,{children:`IRGrid`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`code`,{children:`cellRenderer`}),`인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다.`]}),(0,Z.jsx)(r,{docList:Q}),(0,Z.jsx)(i,{htmlRaw:Y,exampleCode:J})]})}var Z,Q,je=e((()=>{ke(),Ae(),a(),Z=o(),Q=[[`/classes/_innorules_grid.CustomCellRenderer.html`,`CustomCellRenderer`]],X.__docgenInfo={description:``,methods:[],displayName:`CustomRenderer`}})),$,Me;e((()=>{ie(),ce(),fe(),ge(),be(),we(),Oe(),je(),$={title:`JS Components/IRGrid/CellRenderer`},Me=[`DefaultCellRenderer`,`CheckboxRenderer`,`RadioCellRenderer`,`SelectCellRenderer`,`DatePickerRenderer`,`ProgressRenderer`,`ButtonRenderer`,`CustomRenderer`]}))();export{G as ButtonRenderer,h as CheckboxRenderer,X as CustomRenderer,N as DatePickerRenderer,l as DefaultCellRenderer,z as ProgressRenderer,x as RadioCellRenderer,D as SelectCellRenderer,Me as __namedExportsOrder,$ as default};