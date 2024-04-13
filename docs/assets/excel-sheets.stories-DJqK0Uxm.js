import{j as o,a as e,F as i}from"./jsx-runtime-CjohWU4o.js";import{D as s,a as d,L as l}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const p={title:"Data Exporting/Excel"},t=()=>o(s,{children:[e(d,{children:"Data Exporting"}),e("p",{children:"다중 시트 예제"}),e(l,{fixedHeight:150,html:e(i,{children:e("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:e("button",{className:"button",id:"btn_export",children:"다중 시트 내보내기"})})}),code:`
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
                ["A", "B"]
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
                            ["hi"]
                        ],
                        args: { mainSheetName: "test2" }
                    },
                    {
                        data: [
                            ["hi2"]
                        ],
                        args: { mainSheetName: "test3" }
                    }
                ]
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

`})]});var n,a,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Data Exporting</DocTitle>\r
            <p>다중 시트 예제</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <div id="btn_container" className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_export'>다중 시트 내보내기</button>\r
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
                ["A", "B"]
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
                            ["hi"]
                        ],
                        args: { mainSheetName: "test2" }
                    },
                    {
                        data: [
                            ["hi2"]
                        ],
                        args: { mainSheetName: "test3" }
                    }
                ]
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
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const h=["MultipleSheets"];export{t as MultipleSheets,h as __namedExportsOrder,p as default};
