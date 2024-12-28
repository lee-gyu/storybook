import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{D as l,a as r,L as i}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const A={title:"Data Exporting/Excel"},e=()=>t.jsxs(l,{children:[t.jsx(r,{children:"Data Exporting"}),t.jsx("p",{children:"excel 예제"}),t.jsx(i,{fixedHeight:150,html:t.jsx(t.Fragment,{children:t.jsxs("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[t.jsx("button",{className:"button",id:"btn_100",children:"10 행 내보내기"}),t.jsx("button",{className:"button",id:"btn_1k",children:"1K 행 내보내기"}),t.jsx("button",{className:"button",id:"btn_10k",children:"10K 행 내보내기"}),t.jsx("button",{className:"button",id:"btn_100k",children:"100K 행 내보내기"}),t.jsx("button",{className:"button",id:"btn_all",children:"행 내보내기 3번 실행"})]})}),code:`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";

const commonStyle = {
    border: {
        top: {
            style: "thin",
            color: { argb: "00000000" }
        },
        bottom: {
            style: "thin",
            color: { argb: "00000000" }
        },
        left: {
            style: "thin",
            color: { argb: "00000000" }
        },
        right: {
            style: "thin",
            color: { argb: "00000000" }
        },
    },
    font: {
        size: 9
    }
};

const fontRedStyle = {
    font: {
        color: { argb: "00FF0000" }
    }
};

const numFormatStyle = {
    numFmt: "#,##0"
};

const dateFormatStyle = {
    numFmt: "MM-dd(aaa)"
}

const headerStyle = {
    fill: {
        type: 'pattern',
        pattern:'solid',
        fgColor:{argb:'FFFFFF00'}
    }
}

function generateRowData(columns) {
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
        { value: new Date() }
    ]
}

function createClickHandler(rows, columns, filename) {
    async function exportData() {
        const data = [
            // 헤더
            [
                {
                    value: "숫자",
                    style: {
                        alignment: { horizontal: "right" }
                    }
                },
                {
                    value: "날짜",
                    style: {
                        alignment: { horizontal: "right" }
                    },
                    comment: {
                        texts: [
                            { text: "이것은 메모메모 " },
                            { font: { bold: true, color: { argb: 'FF0000FF' } }, text: "메모 강조" },
                        ]
                    }
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
                "날짜 형식"
            ],
            ...Array.from( { length: rows }, (_, id) => generateRowData(columns) )
        ];

        return await requestExportingData({
            format: "excel",
            data,
            args: {
                // 셀 공통 스타일
                commonStyle,
                columnStyle: {
                    [1]: fontRedStyle,
                    [10]: numFormatStyle,
                    [11]: dateFormatStyle
                },
                columnWidthList: [24, 12],
                rowHeightList: [30],
                mainSheetName: "test",
                // 사용 이미지 등록
                imageResources: [
                    {
                        extension: "png",
                        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRoge3aQUrDQBQG4D9RryB07y5BXNsRutADiBB6E12I1J0FFx5CCo3XmB4h3sY+FyIOgWAcea9l5v8giwwpb37yMkxDACIiIiLSUYy9sHKNaE7kvzrfjspSak9k3zBw6g5jfzj2mdESu6Zkd4cZOHXZBY5etGJVF80NBCc/I7Lp/Ju3qm8auHbzmch2DeDge6xA8QjALLBZS5+eXx8LtisEYXfBKPCi/CiPXgFMbOoNMwlcu/cHAFcWtX6jHrh285kA99p1xlJftETkDAWegyEHYKpdd4h64G6zfgnPa9csZIeBs9t4MHDqGDh1DJw6Bk6d+k6rcs1tb6i/y5r2r+l8u9Saj8ULgKfwpP9uVYBLfB0htcDZtXR2gS1aWq09Y+j/PfTtnXaNv8iupRk4ddkFjl609v2bjyHZ3WEGJiIiIiKK8wniHTdEDkalsAAAAABJRU5ErkJggg=="
                    },
                    {
                        extension: "png",
                        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRoge3awQ2CQBBA0YHYDZbAgSqI3ajdGKvYAyVgO+BBOEhkQ9ZZQmb+u6Kb/WHcBKIIAAAA8ii2frCq2zHnRv716p6bWsrcGzkagq07pX5x628ml9Qzxd0dJtg6d8HJh9aac31pRIZGZ7Uy9N0j6Kz1oR4sMjSjyFVjpUIGEZGgsdbM3Ui7C84w0mWYRvGn5bgXIvfYWlq7mqkHT4dMWLte1e1XcN89b9p7iHE30gRbR7B1BFtHsHUEW0ewdQRbl+EFQFz8gT+/3YP3fuBfcjfSBFvnLjj50Dr6fz7WuLvDBAMAAABp3jqxJByu/Qf0AAAAAElFTkSuQmCC"
                    }
                ],
                // 시트에 배치할 이미지 정보
                imagesOnSheet: [
                    {
                        // imageResources의 index
                        imageNo: 0,
                        row: 0,
                        col: 0,
                        width: 20,
                        height: 20
                    },
                    {
                        imageNo: 1,
                        row: 0,
                        col: 1,
                        width: 20,
                        height: 20
                    }
                ]
            }
        });
    }
    return async () => {
        const loadingHandler = createLoadingHandler({
            contextElement: document.getElementById("btn_container"),
        });

        try {
            loadingHandler.show();
            const tick = Date.now();
            const objURL = await exportData(100, 10);

            downloadDataURL( objURL, filename );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );

            alert( Date.now() - tick );
        }
        finally {
            loadingHandler.hide();
        }
    }
}

btn_100.onclick = createClickHandler(10, 10, "100.xlsx");
btn_1k.onclick = createClickHandler(1000, 10, "1k.xlsx");
btn_10k.onclick = createClickHandler(10000, 10, "10k.xlsx");
btn_100k.onclick = createClickHandler(100000, 10, "100k.xlsx");
btn_all.onclick = () => {
    createClickHandler(1000, 10, "3.xlsx")();
    createClickHandler(5000, 10, "1.xlsx")();
    createClickHandler(10000, 10, "2.xlsx")();
}
`})]});e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Data Exporting</DocTitle>\r
            <p>excel 예제</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <div id="btn_container" className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_100'>10 행 내보내기</button>\r
                            <button className='button' id='btn_1k'>1K 행 내보내기</button>\r
                            <button className='button' id='btn_10k'>10K 행 내보내기</button>\r
                            <button className='button' id='btn_100k'>100K 행 내보내기</button>\r
                            <button className='button' id='btn_all'>행 내보내기 3번 실행</button>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";

const commonStyle = {
    border: {
        top: {
            style: "thin",
            color: { argb: "00000000" }
        },
        bottom: {
            style: "thin",
            color: { argb: "00000000" }
        },
        left: {
            style: "thin",
            color: { argb: "00000000" }
        },
        right: {
            style: "thin",
            color: { argb: "00000000" }
        },
    },
    font: {
        size: 9
    }
};

const fontRedStyle = {
    font: {
        color: { argb: "00FF0000" }
    }
};

const numFormatStyle = {
    numFmt: "#,##0"
};

const dateFormatStyle = {
    numFmt: "MM-dd(aaa)"
}

const headerStyle = {
    fill: {
        type: 'pattern',
        pattern:'solid',
        fgColor:{argb:'FFFFFF00'}
    }
}

function generateRowData(columns) {
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
        { value: new Date() }
    ]
}

function createClickHandler(rows, columns, filename) {
    async function exportData() {
        const data = [
            // 헤더
            [
                {
                    value: "숫자",
                    style: {
                        alignment: { horizontal: "right" }
                    }
                },
                {
                    value: "날짜",
                    style: {
                        alignment: { horizontal: "right" }
                    },
                    comment: {
                        texts: [
                            { text: "이것은 메모메모 " },
                            { font: { bold: true, color: { argb: 'FF0000FF' } }, text: "메모 강조" },
                        ]
                    }
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
                "날짜 형식"
            ],
            ...Array.from( { length: rows }, (_, id) => generateRowData(columns) )
        ];

        return await requestExportingData({
            format: "excel",
            data,
            args: {
                // 셀 공통 스타일
                commonStyle,
                columnStyle: {
                    [1]: fontRedStyle,
                    [10]: numFormatStyle,
                    [11]: dateFormatStyle
                },
                columnWidthList: [24, 12],
                rowHeightList: [30],
                mainSheetName: "test",
                // 사용 이미지 등록
                imageResources: [
                    {
                        extension: "png",
                        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRoge3aQUrDQBQG4D9RryB07y5BXNsRutADiBB6E12I1J0FFx5CCo3XmB4h3sY+FyIOgWAcea9l5v8giwwpb37yMkxDACIiIiLSUYy9sHKNaE7kvzrfjspSak9k3zBw6g5jfzj2mdESu6Zkd4cZOHXZBY5etGJVF80NBCc/I7Lp/Ju3qm8auHbzmch2DeDge6xA8QjALLBZS5+eXx8LtisEYXfBKPCi/CiPXgFMbOoNMwlcu/cHAFcWtX6jHrh285kA99p1xlJftETkDAWegyEHYKpdd4h64G6zfgnPa9csZIeBs9t4MHDqGDh1DJw6Bk6d+k6rcs1tb6i/y5r2r+l8u9Saj8ULgKfwpP9uVYBLfB0htcDZtXR2gS1aWq09Y+j/PfTtnXaNv8iupRk4ddkFjl609v2bjyHZ3WEGJiIiIiKK8wniHTdEDkalsAAAAABJRU5ErkJggg=="
                    },
                    {
                        extension: "png",
                        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRoge3awQ2CQBBA0YHYDZbAgSqI3ajdGKvYAyVgO+BBOEhkQ9ZZQmb+u6Kb/WHcBKIIAAAA8ii2frCq2zHnRv716p6bWsrcGzkagq07pX5x628ml9Qzxd0dJtg6d8HJh9aac31pRIZGZ7Uy9N0j6Kz1oR4sMjSjyFVjpUIGEZGgsdbM3Ui7C84w0mWYRvGn5bgXIvfYWlq7mqkHT4dMWLte1e1XcN89b9p7iHE30gRbR7B1BFtHsHUEW0ewdQRbl+EFQFz8gT+/3YP3fuBfcjfSBFvnLjj50Dr6fz7WuLvDBAMAAABp3jqxJByu/Qf0AAAAAElFTkSuQmCC"
                    }
                ],
                // 시트에 배치할 이미지 정보
                imagesOnSheet: [
                    {
                        // imageResources의 index
                        imageNo: 0,
                        row: 0,
                        col: 0,
                        width: 20,
                        height: 20
                    },
                    {
                        imageNo: 1,
                        row: 0,
                        col: 1,
                        width: 20,
                        height: 20
                    }
                ]
            }
        });
    }
    return async () => {
        const loadingHandler = createLoadingHandler({
            contextElement: document.getElementById("btn_container"),
        });

        try {
            loadingHandler.show();
            const tick = Date.now();
            const objURL = await exportData(100, 10);

            downloadDataURL( objURL, filename );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );

            alert( Date.now() - tick );
        }
        finally {
            loadingHandler.hide();
        }
    }
}

btn_100.onclick = createClickHandler(10, 10, "100.xlsx");
btn_1k.onclick = createClickHandler(1000, 10, "1k.xlsx");
btn_10k.onclick = createClickHandler(10000, 10, "10k.xlsx");
btn_100k.onclick = createClickHandler(100000, 10, "100k.xlsx");
btn_all.onclick = () => {
    createClickHandler(1000, 10, "3.xlsx")();
    createClickHandler(5000, 10, "1.xlsx")();
    createClickHandler(10000, 10, "2.xlsx")();
}
\`} />\r
        </Doc>;
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Basic"];export{e as Basic,g as __namedExportsOrder,A as default};
