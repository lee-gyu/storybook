import{j as r,a as t,F as l}from"./jsx-runtime-CjohWU4o.js";import{D as i,a as u,L as c}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const C={title:"Data Exporting/Excel"},n=()=>r(i,{children:[t(u,{children:"Data Exporting"}),t("p",{children:"excel auto-fit 예제"}),t(c,{fixedHeight:150,html:t(l,{children:t("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:t("button",{className:"button",id:"btn_auto_fit",children:"컬럼 크기 자동 처리 다운로드"})})}),code:`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";

function createClickHandler() {
    async function exportData() {
        const data = [
            ["123123", 1444, "absdca", "한글의 크기는 어떨까?"],
            ["", "23871922378189", "ㅁㅁ", "00", false, true, new Date(), 0],
            [null, null, null, null, null, null, null, null, "한글과 영문자의 22 복합? combination", "01 00928127 123456789", "10.20051234"],
        ];

        return await requestExportingData({
            format: "excel",
            data,
            args: {
                autoSizeColumns: true,
                mainSheetName: "test",
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

            downloadDataURL( objURL, "auto-fit-test.xlsx" );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally {
            loadingHandler.hide();
        }
    }
}

btn_auto_fit.onclick = createClickHandler();

`})]});var a,e,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Data Exporting</DocTitle>\r
            <p>excel auto-fit 예제</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <div id="btn_container" className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_auto_fit'>컬럼 크기 자동 처리 다운로드</button>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { downloadDataURL, createLoadingHandler } from "./dist/index.js";
import { requestExportingData } from "./dist/data-export.js";

function createClickHandler() {
    async function exportData() {
        const data = [
            ["123123", 1444, "absdca", "한글의 크기는 어떨까?"],
            ["", "23871922378189", "ㅁㅁ", "00", false, true, new Date(), 0],
            [null, null, null, null, null, null, null, null, "한글과 영문자의 22 복합? combination", "01 00928127 123456789", "10.20051234"],
        ];

        return await requestExportingData({
            format: "excel",
            data,
            args: {
                autoSizeColumns: true,
                mainSheetName: "test",
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

            downloadDataURL( objURL, "auto-fit-test.xlsx" );

            // object 리소스 revoke
            URL.revokeObjectURL( objURL );
        }
        finally {
            loadingHandler.hide();
        }
    }
}

btn_auto_fit.onclick = createClickHandler();

\`} />\r
        </Doc>;
}`,...(o=(e=n.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const g=["AutoFit"];export{n as AutoFit,g as __namedExportsOrder,C as default};
