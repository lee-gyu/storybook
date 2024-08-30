import{j as e}from"./index-BVpe1bT6.js";import{D as n,a as l,L as i}from"./doc-content-BzTGzIX_.js";import"./index-RYns6xqu.js";const g={title:"Data Exporting/Excel"},t=()=>e.jsxs(n,{children:[e.jsx(l,{children:"Data Exporting"}),e.jsx("p",{children:"셀 병합 예제"}),e.jsx(i,{fixedHeight:150,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:e.jsx("button",{className:"button",id:"btn_export",children:"병합된 셀 처리"})})}),code:`
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"CellMerge"};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["CellMerge"];export{t as CellMerge,m as __namedExportsOrder,g as default};
