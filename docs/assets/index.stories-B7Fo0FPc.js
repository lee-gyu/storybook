import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as e,b as a,L as o}from"./version-tag-BQbZ1r9I.js";import"./iframe-CcqNoikh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-a64PSLyw.js";const l=`import { createLoadingHandler } from "@innorules/ir-style";

async function setLoading( fn )
{
    const loading = createLoadingHandler( {
        contextElement: document.getElementById( "btn_container" ),
    } );

    try
    {
        loading.show();
        await fn();
    }
    finally
    {
        loading.hide();
    }
}

globalThis.setLoading = setLoading;`,r=`import { downloadDataURL } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

async function exportData()
{
    const data = [
        ["123123", 1444, "absdca", "한글의 크기는 어떨까?"],
        ["", "23871922378189", "ㅁㅁ", "00", false, true, new Date(), 0],
        [null, null, null, null, null, null, null, null, "한글과 영문자의 22 복합? combination", "01 00928127 123456789", "10.20051234"],
    ];

    return await requestExportingData( {
        format: "excel",
        data,
        args: {
            // autoSizeColumns 옵션 활성화
            autoSizeColumns: true,
            mainSheetName: "test",
        },
    } );
}

function createClickHandler()
{
    return () => setLoading( async () =>
    {
        const objURL = await exportData();

        downloadDataURL( objURL, "auto-fit-test.xlsx" );

        // object 리소스 revoke
        URL.revokeObjectURL( objURL );
    } );
}

btn_auto_fit.onclick = createClickHandler();

`,i=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
    <button class='button' id='btn_auto_fit'>컬럼 크기 자동 처리 다운로드</button>
</div>`,s=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function c(){return n.jsxs(t,{children:[n.jsx(e,{children:"Data Exporting"}),n.jsx("p",{children:"excel auto-fit 예제"}),n.jsx(a,{docList:s}),n.jsx(o,{fixedHeight:150,htmlRaw:i,code:l,exampleCode:r})]})}c.__docgenInfo={description:"",methods:[],displayName:"AutoFit"};const d=`
const commonStyle = {
    border: {
        top: {
            style: "thin",
            color: { argb: "00000000" },
        },
        bottom: {
            style: "thin",
            color: { argb: "00000000" },
        },
        left: {
            style: "thin",
            color: { argb: "00000000" },
        },
        right: {
            style: "thin",
            color: { argb: "00000000" },
        },
    },
    font: {
        size: 9,
    },
};

const fontRedStyle = {
    font: {
        color: { argb: "00FF0000" },
    },
};

const numFormatStyle = {
    numFmt: "#,##0",
};

const dateFormatStyle = {
    numFmt: "MM-dd(aaa)",
};

const headerStyle = {
    fill: {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFFF00" },
    },
};

function generateRowData()
{
    const rand = Math.random() * 10000;

    return [
        { value: 100, style: headerStyle },
        { value: new Date(), style: headerStyle },
        { value: "test" },
        { value: "red" },
        { value: false },
        { value: "메모 추가" },
        null,
        undefined,
        -1,
        Math.random(),
        { value: rand },
        { value: new Date() },
    ];
}

function generateData( rows, columns )
{
    return [
        // 헤더
        [
            {
                value: "숫자",
                style: {
                    alignment: { horizontal: "right" },
                },
            },
            {
                value: "날짜",
                style: {
                    alignment: { horizontal: "right" },
                },
                comment: {
                    texts: [
                        { text: "이것은 메모메모 " },
                        { font: { bold: true, color: { argb: "FF0000FF" } }, text: "메모 강조" },
                    ],
                },
            },
            "문자열",
            "문자열2",
            "논리값",
            "스타일링",
            "null",
            "undefined",
            "음수",
            "소수1",
            "소수2",
            "날짜 형식",
        ],
        ...Array.from( { length: rows }, ( _, id ) => generateRowData() ),
    ];
}

globalThis.commonStyle = commonStyle;
globalThis.fontRedStyle = fontRedStyle;
globalThis.numFormatStyle = numFormatStyle;
globalThis.dateFormatStyle = dateFormatStyle;

globalThis.generateData = generateData;`,u=`import { downloadDataURL, createLoadingHandler } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

// export할 데이터 생성 함수
async function exportData( rows, columns )
{
    return await requestExportingData( {
        format: "excel",
        data: generateData( rows, columns ),
        args: {
            // 셀 공통 스타일
            commonStyle,
            columnStyle: {
                [1]: fontRedStyle,
                [10]: numFormatStyle,
                [11]: dateFormatStyle,
            },
            columnWidthList: [24, 12],
            rowHeightList: [30],
            mainSheetName: "test",
            // 사용 이미지 등록
            imageResources: [
                {
                    extension: "png",
                    base64: \`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRoge3aQUrDQBQG4D9RryB07y5BXNsRutADiBB6E12I1J0FFx5CCo3XmB4h3sY+FyIOgWAcea9l5v8giwwpb37yMkxDACIiIiLSUYy9sHKNaE7kvzrfjspSak9k3zBw6g5jfzj2mdESu6Zkd4cZOHXZBY5etGJVF80NBCc/I7Lp/Ju3qm8auHbzmch2DeDge6xA8QjALLBZS5+eXx8LtisEYXfBKPCi/CiPXgFMbOoNMwlcu/cHAFcWtX6jHrh285kA99p1xlJftETkDAWegyEHYKpdd4h64G6zfgnPa9csZIeBs9t4MHDqGDh1DJw6Bk6d+k6rcs1tb6i/y5r2r+l8u9Saj8ULgKfwpP9uVYBLfB0htcDZtXR2gS1aWq09Y+j/PfTtnXaNv8iupRk4ddkFjl609v2bjyHZ3WEGJiIiIiKK8wniHTdEDkalsAAAAABJRU5ErkJggg==\`,
                },
                {
                    extension: "png",
                    base64: \`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRoge3awQ2CQBBA0YHYDZbAgSqI3ajdGKvYAyVgO+BBOEhkQ9ZZQmb+u6Kb/WHcBKIIAAAA8ii2frCq2zHnRv716p6bWsrcGzkagq07pX5x628ml9Qzxd0dJtg6d8HJh9aac31pRIZGZ7Uy9N0j6Kz1oR4sMjSjyFVjpUIGEZGgsdbM3Ui7C84w0mWYRvGn5bgXIvfYWlq7mqkHT4dMWLte1e1XcN89b9p7iHE30gRbR7B1BFtHsHUEW0ewdQRbl+EFQFz8gT+/3YP3fuBfcjfSBFvnLjj50Dr6fz7WuLvDBAMAAABp3jqxJByu/Qf0AAAAAElFTkSuQmCC\`,
                },
            ],
            // 시트에 배치할 이미지 정보
            imagesOnSheet: [
                {
                    // imageResources의 index
                    imageNo: 0,
                    row: 0,
                    col: 0,
                    width: 20,
                    height: 20,
                },
                {
                    imageNo: 1,
                    row: 0,
                    col: 1,
                    width: 20,
                    height: 20,
                },
            ],
        },
    } );
}

function createClickHandler( rows, columns, filename )
{
    return async () =>
    {
        const loadingHandler = createLoadingHandler( {
            contextElement: document.getElementById( "btn_container" ),
        } );

        try
        {
            loadingHandler.show();
            const tick = Date.now();
            // 데이터 export 요청
            const objURL = await exportData( rows, columns );

            // 파일 다운로드
            downloadDataURL( objURL, filename );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );

            console.log( Date.now() - tick + "ms 소요됨!" );
        }
        finally
        {
            loadingHandler.hide();
        }
    };
}

btn_100.onclick = createClickHandler( 10, 10, "100.xlsx" );
btn_1k.onclick = createClickHandler( 1000, 10, "1k.xlsx" );
btn_10k.onclick = createClickHandler( 10000, 10, "10k.xlsx" );
btn_100k.onclick = createClickHandler( 100000, 10, "100k.xlsx" );

btn_all.onclick = () =>
{
    createClickHandler( 1000, 10, "3.xlsx" )();
    createClickHandler( 5000, 10, "1.xlsx" )();
    createClickHandler( 10000, 10, "2.xlsx" )();
};`,m=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
    <button class="button" id="btn_100">10 행 내보내기</button>
    <button class="button" id="btn_1k">1K 행 내보내기</button>
    <button class="button" id="btn_10k">10K 행 내보내기</button>
    <button class="button" id="btn_100k">100K 행 내보내기</button>
    <button class="button" id="btn_all">행 내보내기 3번 실행</button>
</div>`,g=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function x(){return n.jsxs(t,{children:[n.jsx(e,{children:"Data Exporting"}),n.jsx("p",{children:"excel 예제"}),n.jsx(a,{docList:g}),n.jsx(o,{fixedHeight:150,htmlRaw:m,code:d,exampleCode:u})]})}x.__docgenInfo={description:"",methods:[],displayName:"Basic"};const b=`import { createLoadingHandler } from "@innorules/ir-style";

async function setLoading( fn )
{
    const loading = createLoadingHandler( {
        contextElement: document.getElementById( "btn_container" ),
    } );

    try
    {
        loading.show();
        await fn();
    }
    finally
    {
        loading.hide();
    }
}

globalThis.setLoading = setLoading;`,p=`import { downloadDataURL } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

btn_export.onclick = () =>
{
    setLoading( async () =>
    {
        const objURL = await requestExportingData( {
            format: "excel",
            data: [
                [
                    {
                        value: "병합",
                        cellMerged: { rowSpan: 2, colSpan: 2 },
                    }, null, "1",
                ],
                [null, null, "2"],
                ["A", "B", "C"],
            ],
            args: {
                columnWidthList: [24, 12],
                rowHeightList: [30],
                mainSheetName: "test",
                // 시트에 배치할 이미지 정보
                imagesOnSheet: [],
            },
        } );

        downloadDataURL( objURL, "excel_test.xlsx" );

        // object 리소스 revoke
        URL.revokeObjectURL( objURL );
    } );
};`,f=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
    <button class="button" id="btn_export">병합된 셀 처리</button>
</div>`,h=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function y(){return n.jsxs(t,{children:[n.jsx(e,{children:"Data Exporting"}),n.jsx("p",{children:"셀 병합 예제"}),n.jsx(a,{docList:h}),n.jsx(o,{fixedHeight:150,htmlRaw:f,code:b,exampleCode:p})]})}y.__docgenInfo={description:"",methods:[],displayName:"CellMerge"};const L=`import { createLoadingHandler } from "@innorules/ir-style";

async function setLoading( fn )
{
    const loading = createLoadingHandler( {
        contextElement: document.body,
    } );

    try
    {
        loading.show();
        await fn();
    }
    finally
    {
        loading.hide();
    }
}

globalThis.setLoading = setLoading;`,w=`import { downloadDataURL } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

btn_export.onclick = () =>
{
    setLoading( async () =>
    {
        const objURL = await requestExportingData( {
            format: "excel",
            data: [
                ["A", "B"],
            ],
            args: {
                columnWidthList: [24, 12],
                rowHeightList: [30],
                mainSheetName: "test",
                // 시트에 배치할 이미지 정보
                imagesOnSheet: [],
                extraSheetList: [
                    {
                        data: [
                            ["hi"],
                        ],
                        args: { mainSheetName: "test2" },
                    },
                    {
                        data: [
                            ["hi2"],
                        ],
                        args: { mainSheetName: "test3" },
                    },
                ],
            },
        } );

        downloadDataURL( objURL, "excel_test.xlsx" );

        // object 리소스 revoke
        URL.revokeObjectURL( objURL );
    } );
};`,D=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
    <button class='button' id='btn_export'>다중 시트 내보내기</button>
</div>`,A=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function R(){return n.jsxs(t,{children:[n.jsx(e,{children:"Data Exporting"}),n.jsx("p",{children:"다중 시트 예제"}),n.jsx(a,{docList:A}),n.jsx(o,{fixedHeight:150,htmlRaw:D,code:L,exampleCode:w})]})}R.__docgenInfo={description:"",methods:[],displayName:"MultipleSheets"};const k=`const borderStyle = {
    border: {
        top: {
            style: "thin",
            color: { argb: "00000000" },
        },
        bottom: {
            style: "thin",
            color: { argb: "00000000" },
        },
        left: {
            style: "thin",
            color: { argb: "00000000" },
        },
        right: {
            style: "thin",
            color: { argb: "00000000" },
        },
    },
    font: {
        size: 9,
    },
};

function createBulkData( rowCnt, colCnt, styles = true )
{
    const arrData = [];

    for( let i = 0; i < rowCnt; i++ )
    {
        const row = [];

        for( let j = 0; j < colCnt; j++ )
        {
            row.push( styles
                ? { value: \`(\${i}, \${j})\`, style: borderStyle }
                : \`(\${i}, \${j})\` );
        }

        arrData.push( row );
    }

    return arrData;
}

globalThis.borderStyle = borderStyle;
globalThis.createBulkData = createBulkData;`,j=`import { ExcelExportingModule } from "@innorules/ir-style/lib/esm/data-modules.js";

const mainRowLen = 50000;
const subRowLen = 10000;

// 버튼1: 모든 셀에 스타일 적용 + 실제 엑셀 파일 생성 (가장 느림)
btn_export1.onclick = async () =>
{
    const tick = Date.now();
    const module = new ExcelExportingModule( {
        mainSheetName: "test",
        extraSheetList: [
            {
                data: createBulkData( subRowLen, 20 ),
                args: { mainSheetName: "test2" },
            },
        ],
    } );

    const blob = await module.export( createBulkData( mainRowLen, 30 ) );

    console.log( blob.size );
    console.log( ( Date.now() - tick ) + "ms 소요" );
};

// 버튼2: 컬럼별 스타일 적용된 워크북 생성
btn_export2.onclick = () =>
{
    const tick = Date.now();
    const module = new ExcelExportingModule( {
        mainSheetName: "test",
        commonStyle: borderStyle,
        extraSheetList: [
            {
                data: createBulkData( subRowLen, 20, false ),
                args: { mainSheetName: "test2" },
            },
        ],
    } );

    // No WriteBuffer Case
    module._getWorkBook( createBulkData( mainRowLen, 30, false ) );

    console.log( ( Date.now() - tick ) + "ms 소요" );
};

// 버튼3: 스타일 없이 순수 데이터로 파일 생성
btn_export3.onclick = async () =>
{
    const tick = Date.now();
    const module = new ExcelExportingModule( {
        mainSheetName: "test",
        extraSheetList: [
            {
                data: createBulkData( subRowLen, 20, false ),
                args: { mainSheetName: "test2" },
            },
        ],
    } );

    const blob = await module.export( createBulkData( mainRowLen, 30, false ) );

    console.log( blob.size );
    console.log( ( Date.now() - tick ) + "ms 소요" );
};
`,_=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">
    <button class='button' id='btn_export1'>셀별 Style (느림)</button>
    <button class='button' id='btn_export2'>컬럼별 Style</button>
    <button class='button' id='btn_export3'>No Style</button>
</div>`;function S(){return n.jsxs(t,{children:[n.jsx(e,{children:"엑셀 메인 스레드에서 호출(리소스 프로파일링용)"}),n.jsx(o,{fixedHeight:150,htmlRaw:_,code:k,exampleCode:j})]})}S.__docgenInfo={description:"",methods:[],displayName:"PerformanceProfile"};const v={title:"Data Exporting/Excel"},F=["AutoFit","Basic","Merge","MultipleSheets","PerformanceProfile"];export{c as AutoFit,x as Basic,y as Merge,R as MultipleSheets,S as PerformanceProfile,F as __namedExportsOrder,v as default};
