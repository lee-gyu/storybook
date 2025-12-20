import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as t,L as o}from"./version-tag-C5kiIE4p.js";import"./iframe-Dxn4oHhn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7URE3Da.js";const s=`mockEntryParam( {\r
    builderConfig: { version: "0x08000000" },\r
    serviceEnv: {\r
        "com.innorules.builder": {\r
            "path": "/innorules/app/builder",\r
            "enabled": true,\r
        },\r
        "com.innorules.pf": {\r
            "path": "/innorules/app/innoproduct",\r
            "enabled": true,\r
        },\r
    },\r
}, {\r
    authKey: "",\r
    parts: [],\r
    props: [\r
        // builder에서 사용: 라이선스 만료일 InnoRules(2025-10-02)\r
        ["LICENSE.EXPIRATION", "2025-10-02"],\r
    ],\r
} );\r
\r
function mockEntryParam( args, data )\r
{\r
    const entryParam = {\r
        env: { serviceEnv: args.serviceEnv },\r
        irm010Response: {\r
            header: {\r
                code: 0,\r
                message: "",\r
            },\r
            data,\r
        },\r
        serverConfig: {\r
            builderVersion: args.builderConfig.version,\r
        },\r
        portalDir: "/innorules/app/innoportal/",\r
        serviceDir: "/innorules/app/builder",\r
        services: [\r
            {\r
                "id": "com.innorules.builder",\r
                "name": "InnoRules",\r
                "version": "8.0.5.0",\r
                "releasedDate": "2025-09-04",\r
            },\r
            {\r
                "id": "com.innorules.pf",\r
                "name": "InnoProduct",\r
                "version": "8.0.0.0",\r
                "releasedDate": "2025-03-25",\r
            },\r
            {\r
                "id": "com.innorules.claim",\r
                "name": "InnoClaim",\r
                "version": "8.0.5.0",\r
                "releasedDate": "2025-09-04",\r
            },\r
        ],\r
    };\r
\r
    window.sessionStorage.setItem( "com.innorules.webapi@entry-script-parameters", JSON.stringify( entryParam ) );\r
}`,i=`import { InnoAppStatusBar } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
const footerEl = document.getElementById( "footer" );\r
\r
// 초기 feature 설정\r
InnoAppStatusBar.initFeatures( {\r
    // switchService: false,\r
    // switchTheme: false,\r
    // licenseInfo: false,\r
    // copyrightInfo: false,\r
    // serviceInfo: false,\r
} );\r
\r
// 초기 텍스트 설정 (설정하지 않으면 아래 입력된 기본값으로 설정됨)\r
InnoAppStatusBar.initText( {\r
    // "com.innorules.builder": "InnoRules Web Builder",\r
    // "com.innorules.pf": "InnoProduct Web Builder",\r
    // "com.innorules.claim": "InnoClaim Web Builder",\r
    // "com.innorules.mus": "InnoMUS Web Builder",\r
    // "com.innorules.pas": "InnoPAS",\r
    // "com.innorules.pva": "InnoPVA",\r
    // copyright: "Copyright 2007. INNORULES Corporation. All rights reserved.",\r
    // vendor: "InnoRules Co.,LTD.",\r
    // licensePropKey: "LICENSE.EXPIRATION",\r
} );\r
\r
const innoAppStatusBar = InnoAppStatusBar.getInstance();\r
// footer 요소에 마운트\r
innoAppStatusBar.mountElement( footerEl );\r
\r
// 아이템 추가\r
btn_add_items.onclick = () =>\r
{\r
    innoAppStatusBar.addItem( { id: "addItem1", layout: "left", text: "Lefttext2" } );\r
\r
    console.log( "현재 아이템 목록:", innoAppStatusBar.getItems() );\r
};\r
\r
// 아이템 id로 아이템 제거\r
btn_remove_items.onclick = () => innoAppStatusBar.removeItem( "addItem1" );\r
\r
// 서비스 전환 기능 활성화\r
btn_set_features_on.onclick = () => innoAppStatusBar.setFeature( "switchService", true );\r
\r
// 서비스 전환 기능 비활성화\r
btn_set_features_off.onclick = () => innoAppStatusBar.setFeature( "switchService", false );\r
\r
btn_destroy.onclick = () => innoAppStatusBar.destroy();`,a=`<div class="flex flex--column" style="height: 400px; border: 1px solid lightgray">\r
    <header class="p--lg" style="border-bottom: 1px solid lightgray">\r
        <h1>Header</h1>\r
    </header>\r
    <main class="flex--1 p--lg">\r
        <h1 class="mb--sm">Main</h1>\r
        <div class="flex gap--sm">\r
            <button id="btn_add_items" class="button mb--md">Add CustomItem</button>\r
            <button id="btn_remove_items" class="button mb--md">Remove CustomItem</button>\r
            <button id="btn_set_features_on" class="button mb--md">switchService On</button>\r
            <button id="btn_set_features_off" class="button mb--md">switchService Off</button>\r
            <button id="btn_destroy" class="button mb--md">Destroy</button>\r
        </div>\r
    </main>\r
    <footer id="footer"></footer>\r
</div>`,m={title:"SolidJS Components/InnoAppStatusBar"};function n(){return r.jsxs(e,{children:[r.jsx(t,{children:"InnoAppStatusBar"}),r.jsx("p",{children:"현재 서비스의 제품 정보, 라이선스, 서비스 전환 등을 표시하는 상태바 컴포넌트입니다."}),r.jsx(o,{htmlRaw:a,code:s,exampleCode:i})]})}n.__docgenInfo={description:"",methods:[],displayName:"InnoAppStatusBar"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`function InnoAppStatusBar() {
  return <Doc>\r
            <DocTitle>InnoAppStatusBar</DocTitle>\r
            <p>현재 서비스의 제품 정보, 라이선스, 서비스 전환 등을 표시하는 상태바 컴포넌트입니다.</p>\r
            <LiveEditor htmlRaw={htmlRaw} code={setupCode} exampleCode={exampleCode} />\r
        </Doc>;
}`,...n.parameters?.docs?.source}}};const b=["InnoAppStatusBar"];export{n as InnoAppStatusBar,b as __namedExportsOrder,m as default};
