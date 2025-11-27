import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r,a as t,c as o,L as e}from"./version-tag-B2V-8a8w.js";import"./iframe-72AAcSIy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfaMo4xr.js";const a=`import { createLoadingHandler } from "@innorules/ir-style";\r
\r
async function setLoading( fn )\r
{\r
    const loading = createLoadingHandler( {\r
        contextElement: document.getElementById( "btn_container" ),\r
    } );\r
\r
    try\r
    {\r
        loading.show();\r
        await fn();\r
    }\r
    finally\r
    {\r
        loading.hide();\r
    }\r
}\r
\r
globalThis.setLoading = setLoading;`,l=`import { downloadDataURL } from "@innorules/ir-style";\r
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";\r
\r
async function exportData()\r
{\r
    const data = [\r
        ["123123", 1444, "absdca", "한글의 크기는 어떨까?"],\r
        ["", "23871922378189", "ㅁㅁ", "00", false, true, new Date(), 0],\r
        [null, null, null, null, null, null, null, null, "한글과 영문자의 22 복합? combination", "01 00928127 123456789", "10.20051234"],\r
    ];\r
\r
    return await requestExportingData( {\r
        format: "excel",\r
        data,\r
        args: {\r
            // autoSizeColumns 옵션 활성화\r
            autoSizeColumns: true,\r
            mainSheetName: "test",\r
        },\r
    } );\r
}\r
\r
function createClickHandler()\r
{\r
    return () => setLoading( async () =>\r
    {\r
        const objURL = await exportData();\r
\r
        downloadDataURL( objURL, "auto-fit-test.xlsx" );\r
\r
        // object 리소스 revoke\r
        URL.revokeObjectURL( objURL );\r
    } );\r
}\r
\r
btn_auto_fit.onclick = createClickHandler();\r
\r
`,i=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class='button' id='btn_auto_fit'>컬럼 크기 자동 처리 다운로드</button>\r
</div>`,s=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function c(){return n.jsxs(r,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"excel auto-fit 예제"}),n.jsx(o,{docList:s}),n.jsx(e,{fixedHeight:150,htmlRaw:i,code:a,exampleCode:l})]})}c.__docgenInfo={description:"",methods:[],displayName:"AutoFit"};const d=`\r
const commonStyle = {\r
    border: {\r
        top: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
        bottom: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
        left: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
        right: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
    },\r
    font: {\r
        size: 9,\r
    },\r
};\r
\r
const fontRedStyle = {\r
    font: {\r
        color: { argb: "00FF0000" },\r
    },\r
};\r
\r
const numFormatStyle = {\r
    numFmt: "#,##0",\r
};\r
\r
const dateFormatStyle = {\r
    numFmt: "MM-dd(aaa)",\r
};\r
\r
const headerStyle = {\r
    fill: {\r
        type: "pattern",\r
        pattern: "solid",\r
        fgColor: { argb: "FFFFFF00" },\r
    },\r
};\r
\r
function generateRowData()\r
{\r
    const rand = Math.random() * 10000;\r
\r
    return [\r
        { value: 100, style: headerStyle },\r
        { value: new Date(), style: headerStyle },\r
        { value: "test" },\r
        { value: "red" },\r
        { value: false },\r
        { value: "메모 추가" },\r
        null,\r
        undefined,\r
        -1,\r
        Math.random(),\r
        { value: rand },\r
        { value: new Date() },\r
    ];\r
}\r
\r
function generateData( rows, columns )\r
{\r
    return [\r
        // 헤더\r
        [\r
            {\r
                value: "숫자",\r
                style: {\r
                    alignment: { horizontal: "right" },\r
                },\r
            },\r
            {\r
                value: "날짜",\r
                style: {\r
                    alignment: { horizontal: "right" },\r
                },\r
                comment: {\r
                    texts: [\r
                        { text: "이것은 메모메모 " },\r
                        { font: { bold: true, color: { argb: "FF0000FF" } }, text: "메모 강조" },\r
                    ],\r
                },\r
            },\r
            "문자열",\r
            "문자열2",\r
            "논리값",\r
            "스타일링",\r
            "null",\r
            "undefined",\r
            "음수",\r
            "소수1",\r
            "소수2",\r
            "날짜 형식",\r
        ],\r
        ...Array.from( { length: rows }, ( _, id ) => generateRowData() ),\r
    ];\r
}\r
\r
globalThis.commonStyle = commonStyle;\r
globalThis.fontRedStyle = fontRedStyle;\r
globalThis.numFormatStyle = numFormatStyle;\r
globalThis.dateFormatStyle = dateFormatStyle;\r
\r
globalThis.generateData = generateData;`,u=`import { downloadDataURL, createLoadingHandler } from "@innorules/ir-style";\r
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";\r
\r
// export할 데이터 생성 함수\r
async function exportData( rows, columns )\r
{\r
    return await requestExportingData( {\r
        format: "excel",\r
        data: generateData( rows, columns ),\r
        args: {\r
            // 셀 공통 스타일\r
            commonStyle,\r
            columnStyle: {\r
                [1]: fontRedStyle,\r
                [10]: numFormatStyle,\r
                [11]: dateFormatStyle,\r
            },\r
            columnWidthList: [24, 12],\r
            rowHeightList: [30],\r
            mainSheetName: "test",\r
            // 사용 이미지 등록\r
            imageResources: [\r
                {\r
                    extension: "png",\r
                    base64: \`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRoge3aQUrDQBQG4D9RryB07y5BXNsRutADiBB6E12I1J0FFx5CCo3XmB4h3sY+FyIOgWAcea9l5v8giwwpb37yMkxDACIiIiLSUYy9sHKNaE7kvzrfjspSak9k3zBw6g5jfzj2mdESu6Zkd4cZOHXZBY5etGJVF80NBCc/I7Lp/Ju3qm8auHbzmch2DeDge6xA8QjALLBZS5+eXx8LtisEYXfBKPCi/CiPXgFMbOoNMwlcu/cHAFcWtX6jHrh285kA99p1xlJftETkDAWegyEHYKpdd4h64G6zfgnPa9csZIeBs9t4MHDqGDh1DJw6Bk6d+k6rcs1tb6i/y5r2r+l8u9Saj8ULgKfwpP9uVYBLfB0htcDZtXR2gS1aWq09Y+j/PfTtnXaNv8iupRk4ddkFjl609v2bjyHZ3WEGJiIiIiKK8wniHTdEDkalsAAAAABJRU5ErkJggg==\`,\r
                },\r
                {\r
                    extension: "png",\r
                    base64: \`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRoge3awQ2CQBBA0YHYDZbAgSqI3ajdGKvYAyVgO+BBOEhkQ9ZZQmb+u6Kb/WHcBKIIAAAA8ii2frCq2zHnRv716p6bWsrcGzkagq07pX5x628ml9Qzxd0dJtg6d8HJh9aac31pRIZGZ7Uy9N0j6Kz1oR4sMjSjyFVjpUIGEZGgsdbM3Ui7C84w0mWYRvGn5bgXIvfYWlq7mqkHT4dMWLte1e1XcN89b9p7iHE30gRbR7B1BFtHsHUEW0ewdQRbl+EFQFz8gT+/3YP3fuBfcjfSBFvnLjj50Dr6fz7WuLvDBAMAAABp3jqxJByu/Qf0AAAAAElFTkSuQmCC\`,\r
                },\r
            ],\r
            // 시트에 배치할 이미지 정보\r
            imagesOnSheet: [\r
                {\r
                    // imageResources의 index\r
                    imageNo: 0,\r
                    row: 0,\r
                    col: 0,\r
                    width: 20,\r
                    height: 20,\r
                },\r
                {\r
                    imageNo: 1,\r
                    row: 0,\r
                    col: 1,\r
                    width: 20,\r
                    height: 20,\r
                },\r
            ],\r
        },\r
    } );\r
}\r
\r
function createClickHandler( rows, columns, filename )\r
{\r
    return async () =>\r
    {\r
        const loadingHandler = createLoadingHandler( {\r
            contextElement: document.getElementById( "btn_container" ),\r
        } );\r
\r
        try\r
        {\r
            loadingHandler.show();\r
            const tick = Date.now();\r
            // 데이터 export 요청\r
            const objURL = await exportData( rows, columns );\r
\r
            // 파일 다운로드\r
            downloadDataURL( objURL, filename );\r
\r
            // object 리소스 revoke\r
            URL.revokeObjectURL( objURL );\r
\r
            console.log( Date.now() - tick + "ms 소요됨!" );\r
        }\r
        finally\r
        {\r
            loadingHandler.hide();\r
        }\r
    };\r
}\r
\r
btn_100.onclick = createClickHandler( 10, 10, "100.xlsx" );\r
btn_1k.onclick = createClickHandler( 1000, 10, "1k.xlsx" );\r
btn_10k.onclick = createClickHandler( 10000, 10, "10k.xlsx" );\r
btn_100k.onclick = createClickHandler( 100000, 10, "100k.xlsx" );\r
\r
btn_all.onclick = () =>\r
{\r
    createClickHandler( 1000, 10, "3.xlsx" )();\r
    createClickHandler( 5000, 10, "1.xlsx" )();\r
    createClickHandler( 10000, 10, "2.xlsx" )();\r
};`,m=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class="button" id="btn_100">10 행 내보내기</button>\r
    <button class="button" id="btn_1k">1K 행 내보내기</button>\r
    <button class="button" id="btn_10k">10K 행 내보내기</button>\r
    <button class="button" id="btn_100k">100K 행 내보내기</button>\r
    <button class="button" id="btn_all">행 내보내기 3번 실행</button>\r
</div>`,g=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function x(){return n.jsxs(r,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"excel 예제"}),n.jsx(o,{docList:g}),n.jsx(e,{fixedHeight:150,htmlRaw:m,code:d,exampleCode:u})]})}x.__docgenInfo={description:"",methods:[],displayName:"Basic"};const b=`import { createLoadingHandler } from "@innorules/ir-style";\r
\r
async function setLoading( fn )\r
{\r
    const loading = createLoadingHandler( {\r
        contextElement: document.getElementById( "btn_container" ),\r
    } );\r
\r
    try\r
    {\r
        loading.show();\r
        await fn();\r
    }\r
    finally\r
    {\r
        loading.hide();\r
    }\r
}\r
\r
globalThis.setLoading = setLoading;`,p=`import { downloadDataURL } from "@innorules/ir-style";\r
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";\r
\r
btn_export.onclick = () =>\r
{\r
    setLoading( async () =>\r
    {\r
        const objURL = await requestExportingData( {\r
            format: "excel",\r
            data: [\r
                [\r
                    {\r
                        value: "병합",\r
                        cellMerged: { rowSpan: 2, colSpan: 2 },\r
                    }, null, "1",\r
                ],\r
                [null, null, "2"],\r
                ["A", "B", "C"],\r
            ],\r
            args: {\r
                columnWidthList: [24, 12],\r
                rowHeightList: [30],\r
                mainSheetName: "test",\r
                // 시트에 배치할 이미지 정보\r
                imagesOnSheet: [],\r
            },\r
        } );\r
\r
        downloadDataURL( objURL, "excel_test.xlsx" );\r
\r
        // object 리소스 revoke\r
        URL.revokeObjectURL( objURL );\r
    } );\r
};`,f=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class="button" id="btn_export">병합된 셀 처리</button>\r
</div>`,h=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function y(){return n.jsxs(r,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"셀 병합 예제"}),n.jsx(o,{docList:h}),n.jsx(e,{fixedHeight:150,htmlRaw:f,code:b,exampleCode:p})]})}y.__docgenInfo={description:"",methods:[],displayName:"CellMerge"};const L=`import { createLoadingHandler } from "@innorules/ir-style";\r
\r
async function setLoading( fn )\r
{\r
    const loading = createLoadingHandler( {\r
        contextElement: document.body,\r
    } );\r
\r
    try\r
    {\r
        loading.show();\r
        await fn();\r
    }\r
    finally\r
    {\r
        loading.hide();\r
    }\r
}\r
\r
globalThis.setLoading = setLoading;`,w=`import { downloadDataURL } from "@innorules/ir-style";\r
import { requestExportingData } from "@innorules/ir-style/lib/esm/data-export.js";\r
\r
btn_export.onclick = () =>\r
{\r
    setLoading( async () =>\r
    {\r
        const objURL = await requestExportingData( {\r
            format: "excel",\r
            data: [\r
                ["A", "B"],\r
            ],\r
            args: {\r
                columnWidthList: [24, 12],\r
                rowHeightList: [30],\r
                mainSheetName: "test",\r
                // 시트에 배치할 이미지 정보\r
                imagesOnSheet: [],\r
                extraSheetList: [\r
                    {\r
                        data: [\r
                            ["hi"],\r
                        ],\r
                        args: { mainSheetName: "test2" },\r
                    },\r
                    {\r
                        data: [\r
                            ["hi2"],\r
                        ],\r
                        args: { mainSheetName: "test3" },\r
                    },\r
                ],\r
            },\r
        } );\r
\r
        downloadDataURL( objURL, "excel_test.xlsx" );\r
\r
        // object 리소스 revoke\r
        URL.revokeObjectURL( objURL );\r
    } );\r
};`,D=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class='button' id='btn_export'>다중 시트 내보내기</button>\r
</div>`,A=[["/functions/_innorules_data-export.requestExportingData.html","requestExportingData"],["/functions/_innorules_inno-front-core.downloadDataURL.html","downloadDataURL"],["/variables/_innorules_inno-front-core.createLoadingHandler.html","createLoadingHandler"]];function R(){return n.jsxs(r,{children:[n.jsx(t,{children:"Data Exporting"}),n.jsx("p",{children:"다중 시트 예제"}),n.jsx(o,{docList:A}),n.jsx(e,{fixedHeight:150,htmlRaw:D,code:L,exampleCode:w})]})}R.__docgenInfo={description:"",methods:[],displayName:"MultipleSheets"};const k=`const borderStyle = {\r
    border: {\r
        top: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
        bottom: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
        left: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
        right: {\r
            style: "thin",\r
            color: { argb: "00000000" },\r
        },\r
    },\r
    font: {\r
        size: 9,\r
    },\r
};\r
\r
function createBulkData( rowCnt, colCnt, styles = true )\r
{\r
    const arrData = [];\r
\r
    for( let i = 0; i < rowCnt; i++ )\r
    {\r
        const row = [];\r
\r
        for( let j = 0; j < colCnt; j++ )\r
        {\r
            row.push( styles\r
                ? { value: \`(\${i}, \${j})\`, style: borderStyle }\r
                : \`(\${i}, \${j})\` );\r
        }\r
\r
        arrData.push( row );\r
    }\r
\r
    return arrData;\r
}\r
\r
globalThis.borderStyle = borderStyle;\r
globalThis.createBulkData = createBulkData;`,j=`import { ExcelExportingModule } from "@innorules/ir-style/lib/esm/data-modules.js";\r
\r
const mainRowLen = 50000;\r
const subRowLen = 10000;\r
\r
// 버튼1: 모든 셀에 스타일 적용 + 실제 엑셀 파일 생성 (가장 느림)\r
btn_export1.onclick = async () =>\r
{\r
    const tick = Date.now();\r
    const module = new ExcelExportingModule( {\r
        mainSheetName: "test",\r
        extraSheetList: [\r
            {\r
                data: createBulkData( subRowLen, 20 ),\r
                args: { mainSheetName: "test2" },\r
            },\r
        ],\r
    } );\r
\r
    const blob = await module.export( createBulkData( mainRowLen, 30 ) );\r
\r
    console.log( blob.size );\r
    console.log( ( Date.now() - tick ) + "ms 소요" );\r
};\r
\r
// 버튼2: 컬럼별 스타일 적용된 워크북 생성\r
btn_export2.onclick = () =>\r
{\r
    const tick = Date.now();\r
    const module = new ExcelExportingModule( {\r
        mainSheetName: "test",\r
        commonStyle: borderStyle,\r
        extraSheetList: [\r
            {\r
                data: createBulkData( subRowLen, 20, false ),\r
                args: { mainSheetName: "test2" },\r
            },\r
        ],\r
    } );\r
\r
    // No WriteBuffer Case\r
    module._getWorkBook( createBulkData( mainRowLen, 30, false ) );\r
\r
    console.log( ( Date.now() - tick ) + "ms 소요" );\r
};\r
\r
// 버튼3: 스타일 없이 순수 데이터로 파일 생성\r
btn_export3.onclick = async () =>\r
{\r
    const tick = Date.now();\r
    const module = new ExcelExportingModule( {\r
        mainSheetName: "test",\r
        extraSheetList: [\r
            {\r
                data: createBulkData( subRowLen, 20, false ),\r
                args: { mainSheetName: "test2" },\r
            },\r
        ],\r
    } );\r
\r
    const blob = await module.export( createBulkData( mainRowLen, 30, false ) );\r
\r
    console.log( blob.size );\r
    console.log( ( Date.now() - tick ) + "ms 소요" );\r
};\r
`,_=`<div id="btn_container" class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class='button' id='btn_export1'>셀별 Style (느림)</button>\r
    <button class='button' id='btn_export2'>컬럼별 Style</button>\r
    <button class='button' id='btn_export3'>No Style</button>\r
</div>`;function S(){return n.jsxs(r,{children:[n.jsx(t,{children:"엑셀 메인 스레드에서 호출(리소스 프로파일링용)"}),n.jsx(e,{fixedHeight:150,htmlRaw:_,code:k,exampleCode:j})]})}S.__docgenInfo={description:"",methods:[],displayName:"PerformanceProfile"};const v={title:"Data Exporting/Excel"},F=["AutoFit","Basic","Merge","MultipleSheets","PerformanceProfile"];export{c as AutoFit,x as Basic,y as Merge,R as MultipleSheets,S as PerformanceProfile,F as __namedExportsOrder,v as default};
