import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as t,L as a}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const o=`import { downloadDataURL, createLoadingHandler } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

function createClickHandler()
{
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
                autoSizeColumns: true,
                mainSheetName: "test",
            },
        } );
    }
    return async () =>
    {
        const loadingHandler = createLoadingHandler( {
            contextElement: document.getElementById( "btn_container" ),
        } );

        try
        {
            loadingHandler.show();
            const objURL = await exportData( 100, 10 );

            downloadDataURL( objURL, "auto-fit-test.xlsx" );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally
        {
            loadingHandler.hide();
        }
    };
}

btn_auto_fit.onclick = createClickHandler();`;function l(){return n.jsxs(e,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"excel auto-fit 예제"}),n.jsx(a,{fixedHeight:150,html:n.jsx(n.Fragment,{children:n.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:n.jsx("button",{className:"button",id:"btn_auto_fit",children:"컬럼 크기 자동 처리 다운로드"})})}),code:o})]})}l.__docgenInfo={description:"",methods:[],displayName:"AutoFit"};const r=`import { downloadDataURL, createLoadingHandler } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

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

function generateRowData( columns )
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

function createClickHandler( rows, columns, filename )
{
    async function exportData()
    {
        const data = [
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
            ...Array.from( { length: rows }, ( _, id ) => generateRowData( columns ) ),
        ];

        return await requestExportingData( {
            format: "excel",
            data,
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
                        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRoge3aQUrDQBQG4D9RryB07y5BXNsRutADiBB6E12I1J0FFx5CCo3XmB4h3sY+FyIOgWAcea9l5v8giwwpb37yMkxDACIiIiLSUYy9sHKNaE7kvzrfjspSak9k3zBw6g5jfzj2mdESu6Zkd4cZOHXZBY5etGJVF80NBCc/I7Lp/Ju3qm8auHbzmch2DeDge6xA8QjALLBZS5+eXx8LtisEYXfBKPCi/CiPXgFMbOoNMwlcu/cHAFcWtX6jHrh285kA99p1xlJftETkDAWegyEHYKpdd4h64G6zfgnPa9csZIeBs9t4MHDqGDh1DJw6Bk6d+k6rcs1tb6i/y5r2r+l8u9Saj8ULgKfwpP9uVYBLfB0htcDZtXR2gS1aWq09Y+j/PfTtnXaNv8iupRk4ddkFjl609v2bjyHZ3WEGJiIiIiKK8wniHTdEDkalsAAAAABJRU5ErkJggg==",
                    },
                    {
                        extension: "png",
                        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRoge3awQ2CQBBA0YHYDZbAgSqI3ajdGKvYAyVgO+BBOEhkQ9ZZQmb+u6Kb/WHcBKIIAAAA8ii2frCq2zHnRv716p6bWsrcGzkagq07pX5x628ml9Qzxd0dJtg6d8HJh9aac31pRIZGZ7Uy9N0j6Kz1oR4sMjSjyFVjpUIGEZGgsdbM3Ui7C84w0mWYRvGn5bgXIvfYWlq7mqkHT4dMWLte1e1XcN89b9p7iHE30gRbR7B1BFtHsHUEW0ewdQRbl+EFQFz8gT+/3YP3fuBfcjfSBFvnLjj50Dr6fz7WuLvDBAMAAABp3jqxJByu/Qf0AAAAAElFTkSuQmCC",
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
    return async () =>
    {
        const loadingHandler = createLoadingHandler( {
            contextElement: document.getElementById( "btn_container" ),
        } );

        try
        {
            loadingHandler.show();
            const tick = Date.now();
            const objURL = await exportData( 100, 10 );

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
};`;function i(){return n.jsxs(e,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"excel 예제"}),n.jsx(a,{fixedHeight:150,html:n.jsx(n.Fragment,{children:n.jsxs("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[n.jsx("button",{className:"button",id:"btn_100",children:"10 행 내보내기"}),n.jsx("button",{className:"button",id:"btn_1k",children:"1K 행 내보내기"}),n.jsx("button",{className:"button",id:"btn_10k",children:"10K 행 내보내기"}),n.jsx("button",{className:"button",id:"btn_100k",children:"100K 행 내보내기"}),n.jsx("button",{className:"button",id:"btn_all",children:"행 내보내기 3번 실행"})]})}),code:r})]})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};const s=`import { downloadDataURL, createLoadingHandler } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

btn_export.onclick = async () =>
{
    const loadingHandler = createLoadingHandler( {
        contextElement: document.getElementById( "btn_container" ),
    } );

    try
    {
        loadingHandler.show();
        const objURL = await requestExportingData( {
            format: "excel",
            data: [
                [
                    {
                        value: "병합",
                        cellMerged: { rowSpan: 2, colSpan: 2 },
                    }, null, "1",
                ],
                [ null, null, "2"],
                [ "A", "B", "C"],
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
    }
    finally
    {
        loadingHandler.hide();
    }
};`;function c(){return n.jsxs(e,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"셀 병합 예제"}),n.jsx(a,{fixedHeight:150,html:n.jsx(n.Fragment,{children:n.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:n.jsx("button",{className:"button",id:"btn_export",children:"병합된 셀 처리"})})}),code:s})]})}c.__docgenInfo={description:"",methods:[],displayName:"CellMerge"};const d=`import { downloadDataURL, createLoadingHandler } from "@innorules/ir-style";
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";

btn_export.onclick = async () =>
{
    const loadingHandler = createLoadingHandler( {
        contextElement: document.body,
    } );

    try
    {
        loadingHandler.show();

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
    }
    finally
    {
        loadingHandler.hide();
    }
};`;function m(){return n.jsxs(e,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"다중 시트 예제"}),n.jsx(a,{fixedHeight:150,html:n.jsx(n.Fragment,{children:n.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:n.jsx("button",{className:"button",id:"btn_export",children:"다중 시트 내보내기"})})}),code:d})]})}m.__docgenInfo={description:"",methods:[],displayName:"MultipleSheets"};const g=`import { ExcelExportingModule } from "@innorules/ir-style/lib/esm/data-modules.js";

const mainRowLen = 50000;
const subRowLen = 10000;

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

btn_export2.onclick = async () =>
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
    await module._getWorkBook( createBulkData( mainRowLen, 30, false ) );

    console.log( ( Date.now() - tick ) + "ms 소요" );

};

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

const borderStyle = {
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
}`;function u(){return n.jsxs(e,{children:[n.jsx(t,{children:"엑셀 메인 스레드에서 호출(리소스 프로파일링용)"}),n.jsx(a,{fixedHeight:150,html:n.jsx(n.Fragment,{children:n.jsxs("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[n.jsx("button",{className:"button",id:"btn_export1",children:"셀별 Style (느림)"}),n.jsx("button",{className:"button",id:"btn_export2",children:"컬럼별 Style"}),n.jsx("button",{className:"button",id:"btn_export3",children:"No Style"})]})}),code:g})]})}u.__docgenInfo={description:"",methods:[],displayName:"PerformanceProfile"};const f={title:"Data Exporting/Excel"},j=["AutoFit","Basic","Merge","MultipleSheets","PerformanceProfile"];export{l as AutoFit,i as Basic,c as Merge,m as MultipleSheets,u as PerformanceProfile,j as __namedExportsOrder,f as default};
