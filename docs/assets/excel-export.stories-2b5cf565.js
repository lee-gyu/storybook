import{j as a,a as e,F as o}from"./jsx-runtime-e43ccb36.js";import{D as c,a as i,L as s}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const b={title:"Data Exporting/Excel"},t=()=>a(c,{children:[e(i,{children:"Data Exporting"}),e("p",{children:"excel 에제"}),e(s,{fixedHeight:150,html:e(o,{children:a("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[e("button",{className:"button",id:"btn_100",children:"100 행 내보내기"}),e("button",{className:"button",id:"btn_1k",children:"1K 행 내보내기"}),e("button",{className:"button",id:"btn_10k",children:"10K 행 내보내기"}),e("button",{className:"button",id:"btn_100k",children:"100K 행 내보내기"}),e("button",{className:"button",id:"btn_all",children:"행 내보내기 3번 실행"})]})}),code:`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";

function generateRowData(columns) {
    return [
        { value: 100,},
        { value: new Date() },
        { value: "test" },
        // 논리형 데이터
        { value: false },
        // 스타일링
        { value: "test" },
        null,
        undefined,
        -1,
        0.5,
        0.1
    ]
}

function createClickHandler(rows, columns, filename) {
    async function exportData() {
        const data = [
            // 헤더
            [ "숫자", "날짜", "문자열", "논리값", "스타일링", "null", "undefined", "음수", "소수1", "소수2" ],
            ...Array.from( { length: rows }, (_, id) => generateRowData(columns) )
        ];

        return await requestExportingData({
            format: "excel",
            data,
            args: {
                mainSheetName: "test"
            }
        });
    }
    return async () => {
        const loadingHandler = createLoadingHandler({
            contextElement: document.getElementById("btn_container"),
        });

        try {
            loadingHandler.show();
            const objURL = await exportData(100, 10);

            downloadDataURL( objURL, filename );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally {
            loadingHandler.hide();
        }
    }
}

btn_100.onclick = createClickHandler(100, 10, "100.xlsx");
btn_1k.onclick = createClickHandler(1000, 10, "1k.xlsx");
btn_10k.onclick = createClickHandler(10000, 10, "10k.xlsx");
btn_100k.onclick = createClickHandler(100000, 10, "100k.xlsx");
btn_all.onclick = () => {
    Promise.all([
        createClickHandler(50000, 10, "1.xlsx")(),
        createClickHandler(100000, 10, "2.xlsx")(),
        createClickHandler(10000, 10, "3.xlsx")()
    ]);
}
`})]});var n,l,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Data Exporting</DocTitle>\r
            <p>excel 에제</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <div id="btn_container" className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_100'>100 행 내보내기</button>\r
                            <button className='button' id='btn_1k'>1K 행 내보내기</button>\r
                            <button className='button' id='btn_10k'>10K 행 내보내기</button>\r
                            <button className='button' id='btn_100k'>100K 행 내보내기</button>\r
                            <button className='button' id='btn_all'>행 내보내기 3번 실행</button>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";

function generateRowData(columns) {
    return [
        { value: 100,},
        { value: new Date() },
        { value: "test" },
        // 논리형 데이터
        { value: false },
        // 스타일링
        { value: "test" },
        null,
        undefined,
        -1,
        0.5,
        0.1
    ]
}

function createClickHandler(rows, columns, filename) {
    async function exportData() {
        const data = [
            // 헤더
            [ "숫자", "날짜", "문자열", "논리값", "스타일링", "null", "undefined", "음수", "소수1", "소수2" ],
            ...Array.from( { length: rows }, (_, id) => generateRowData(columns) )
        ];

        return await requestExportingData({
            format: "excel",
            data,
            args: {
                mainSheetName: "test"
            }
        });
    }
    return async () => {
        const loadingHandler = createLoadingHandler({
            contextElement: document.getElementById("btn_container"),
        });

        try {
            loadingHandler.show();
            const objURL = await exportData(100, 10);

            downloadDataURL( objURL, filename );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally {
            loadingHandler.hide();
        }
    }
}

btn_100.onclick = createClickHandler(100, 10, "100.xlsx");
btn_1k.onclick = createClickHandler(1000, 10, "1k.xlsx");
btn_10k.onclick = createClickHandler(10000, 10, "10k.xlsx");
btn_100k.onclick = createClickHandler(100000, 10, "100k.xlsx");
btn_all.onclick = () => {
    Promise.all([
        createClickHandler(50000, 10, "1.xlsx")(),
        createClickHandler(100000, 10, "2.xlsx")(),
        createClickHandler(10000, 10, "3.xlsx")()
    ]);
}
\`} />\r
        </Doc>;
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const k=["Excel"];export{t as Excel,k as __namedExportsOrder,b as default};
//# sourceMappingURL=excel-export.stories-2b5cf565.js.map
