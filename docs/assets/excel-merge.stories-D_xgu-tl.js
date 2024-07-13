import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as r,a as l,L as i}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const m={title:"Data Exporting/Excel"},n=()=>e.jsxs(r,{children:[e.jsx(l,{children:"Data Exporting"}),e.jsx("p",{children:"셀 병합 예제"}),e.jsx(i,{fixedHeight:150,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:e.jsx("button",{className:"button",id:"btn_export",children:"병합된 셀 처리"})})}),code:`
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

`})]});n.__docgenInfo={description:"",methods:[],displayName:"CellMerge"};var t,a,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["CellMerge"];export{n as CellMerge,g as __namedExportsOrder,m as default};
