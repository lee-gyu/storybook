import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{D as r,a as l,L as i}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const u={title:"Data Exporting/Excel"},e=()=>t.jsxs(r,{children:[t.jsx(l,{children:"Data Exporting"}),t.jsx("p",{children:"excel auto-fit 예제"}),t.jsx(i,{fixedHeight:150,html:t.jsx(t.Fragment,{children:t.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:t.jsx("button",{className:"button",id:"btn_auto_fit",children:"컬럼 크기 자동 처리 다운로드"})})}),code:`
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

`})]});e.__docgenInfo={description:"",methods:[],displayName:"AutoFit"};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const m=["AutoFit"];export{e as AutoFit,m as __namedExportsOrder,u as default};
