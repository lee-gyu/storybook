import{j as r,a as e,F as l}from"./jsx-runtime-CjohWU4o.js";import{D as i,a as d,L as s}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const x={title:"Data Exporting/Excel"},n=()=>r(i,{children:[e(d,{children:"Data Exporting"}),e("p",{children:"셀 병합 예제"}),e(s,{fixedHeight:150,html:e(l,{children:e("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:e("button",{className:"button",id:"btn_export",children:"병합된 셀 처리"})})}),code:`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";


btn_export.onclick = async () => {
    const loadingHandler = createLoadingHandler({
            contextElement: document.getElementById("btn_container"),
        });

        try {
            loadingHandler.show();
            const objURL = await requestExportingData({
            format: "excel",
            data: [
                [
                    {
                        value: "병합",
                        cellMerged: { rowSpan: 2, colSpan: 2 }
                    }, null, "1"
                ],
                [ null, null, "2"],
                [ "A", "B", "C"]
            ],
            args: {
                columnWidthList: [24, 12],
                rowHeightList: [30],
                mainSheetName: "test",
                // 시트에 배치할 이미지 정보
                imagesOnSheet: []
            }
        });

            downloadDataURL( objURL, "excel_test.xlsx" );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally {
            loadingHandler.hide();
        }
}

`})]});var t,a,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Data Exporting</DocTitle>\r
            <p>셀 병합 예제</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <div id="btn_container" className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_export'>병합된 셀 처리</button>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";


btn_export.onclick = async () => {
    const loadingHandler = createLoadingHandler({
            contextElement: document.getElementById("btn_container"),
        });

        try {
            loadingHandler.show();
            const objURL = await requestExportingData({
            format: "excel",
            data: [
                [
                    {
                        value: "병합",
                        cellMerged: { rowSpan: 2, colSpan: 2 }
                    }, null, "1"
                ],
                [ null, null, "2"],
                [ "A", "B", "C"]
            ],
            args: {
                columnWidthList: [24, 12],
                rowHeightList: [30],
                mainSheetName: "test",
                // 시트에 배치할 이미지 정보
                imagesOnSheet: []
            }
        });

            downloadDataURL( objURL, "excel_test.xlsx" );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally {
            loadingHandler.hide();
        }
}

\`} />\r
        </Doc>;
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const C=["CellMerge"];export{n as CellMerge,C as __namedExportsOrder,x as default};
