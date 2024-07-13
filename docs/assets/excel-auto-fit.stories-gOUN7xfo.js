import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{D as r,a as l,L as i}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const m={title:"Data Exporting/Excel"},n=()=>t.jsxs(r,{children:[t.jsx(l,{children:"Data Exporting"}),t.jsx("p",{children:"excel auto-fit 예제"}),t.jsx(i,{fixedHeight:150,html:t.jsx(t.Fragment,{children:t.jsx("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:t.jsx("button",{className:"button",id:"btn_auto_fit",children:"컬럼 크기 자동 처리 다운로드"})})}),code:`
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

`})]});n.__docgenInfo={description:"",methods:[],displayName:"AutoFit"};var e,a,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["AutoFit"];export{n as AutoFit,x as __namedExportsOrder,m as default};
