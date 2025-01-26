import{j as e}from"./jsx-runtime-CZmXTeUy.js";import{D as i,a as n,L as s}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const m={title:"Data Exporting/Excel"},t=()=>e.jsxs(i,{children:[e.jsx(n,{children:"Data Exporting"}),e.jsx("p",{children:"다중 시트 예제"}),e.jsx(s,{fixedHeight:150,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:e.jsx("button",{className:"button",id:"btn_export",children:"다중 시트 내보내기"})})}),code:`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";


btn_export.onclick = async () => {
    const loadingHandler = createLoadingHandler({
        contextElement: document.body,
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"MultipleSheets"};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
        contextElement: document.body,
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const x=["MultipleSheets"];export{t as MultipleSheets,x as __namedExportsOrder,m as default};
