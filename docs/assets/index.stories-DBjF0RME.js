import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as o,L as s}from"./version-tag-B2yXrdOr.js";import"./iframe-BRPaCIBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL7yNlIg.js";const r=`mockEntryParam( {
    builderConfig: { version: "0x08000000" },
    serviceEnv: {
        "com.innorules.builder": {
            "path": "/innorules/app/builder",
            "enabled": true,
        },
        "com.innorules.pf": {
            "path": "/innorules/app/innoproduct",
            "enabled": true,
        },
    },
}, {
    authKey: "",
    parts: [],
    props: [
        // builder에서 사용: 라이선스 만료일 InnoRules(2025-10-02)
        ["LICENSE.EXPIRATION", "2025-10-02"],
    ],
} );

function mockEntryParam( args, data )
{
    const entryParam = {
        env: { serviceEnv: args.serviceEnv },
        irm010Response: {
            header: {
                code: 0,
                message: "",
            },
            data,
        },
        serverConfig: {
            builderVersion: args.builderConfig.version,
        },
        portalDir: "/innorules/app/innoportal/",
        serviceDir: "/innorules/app/builder",
        services: [
            {
                "id": "com.innorules.builder",
                "name": "InnoRules",
                "version": "8.0.5.0",
                "releasedDate": "2025-09-04",
            },
            {
                "id": "com.innorules.pf",
                "name": "InnoProduct",
                "version": "8.0.0.0",
                "releasedDate": "2025-03-25",
            },
            {
                "id": "com.innorules.claim",
                "name": "InnoClaim",
                "version": "8.0.5.0",
                "releasedDate": "2025-09-04",
            },
        ],
    };

    window.sessionStorage.setItem( "com.innorules.webapi@entry-script-parameters", JSON.stringify( entryParam ) );
}`,i=`import { InnoAppStatusBar } from "@innorules/ir-style/lib/esm/solid.js";

const footerEl = document.getElementById( "footer" );

// 초기 feature 설정
InnoAppStatusBar.initFeatures( {
    // switchService: false,
    // switchTheme: false,
    // licenseInfo: false,
    // copyrightInfo: false,
    // serviceInfo: false,
} );

// 초기 텍스트 설정 (설정하지 않으면 아래 입력된 기본값으로 설정됨)
InnoAppStatusBar.initText( {
    // "com.innorules.builder": "InnoRules Web Builder",
    // "com.innorules.pf": "InnoProduct Web Builder",
    // "com.innorules.claim": "InnoClaim Web Builder",
    // "com.innorules.mus": "InnoMUS Web Builder",
    // "com.innorules.pas": "InnoPAS",
    // "com.innorules.pva": "InnoPVA",
    // copyright: "Copyright 2007. INNORULES Corporation. All rights reserved.",
    // vendor: "InnoRules Co.,LTD.",
    // licensePropKey: "LICENSE.EXPIRATION",
} );

const innoAppStatusBar = InnoAppStatusBar.getInstance();
// footer 요소에 마운트
innoAppStatusBar.mountElement( footerEl );

// 아이템 추가
btn_add_items.onclick = () =>
{
    innoAppStatusBar.addItem( { id: "addItem1", layout: "left", text: "Lefttext2" } );

    console.log( "현재 아이템 목록:", innoAppStatusBar.getItems() );
};

// 아이템 id로 아이템 제거
btn_remove_items.onclick = () => innoAppStatusBar.removeItem( "addItem1" );

// 서비스 전환 기능 활성화
btn_set_features_on.onclick = () => innoAppStatusBar.setFeature( "switchService", true );

// 서비스 전환 기능 비활성화
btn_set_features_off.onclick = () => innoAppStatusBar.setFeature( "switchService", false );

btn_destroy.onclick = () => innoAppStatusBar.destroy();`,a=`<div class="flex flex--column" style="height: 400px; border: 1px solid lightgray">
    <header class="p--lg" style="border-bottom: 1px solid lightgray">
        <h1>Header</h1>
    </header>
    <main class="flex--1 p--lg">
        <h1 class="mb--sm">Main</h1>
        <div class="flex gap--sm">
            <button id="btn_add_items" class="button mb--md">Add CustomItem</button>
            <button id="btn_remove_items" class="button mb--md">Remove CustomItem</button>
            <button id="btn_set_features_on" class="button mb--md">switchService On</button>
            <button id="btn_set_features_off" class="button mb--md">switchService Off</button>
            <button id="btn_destroy" class="button mb--md">Destroy</button>
        </div>
    </main>
    <footer id="footer"></footer>
</div>`,m={title:"SolidJS Components/InnoAppStatusBar"};function n(){return e.jsxs(t,{children:[e.jsx(o,{children:"InnoAppStatusBar"}),e.jsx("p",{children:"현재 서비스의 제품 정보, 라이선스, 서비스 전환 등을 표시하는 상태바 컴포넌트입니다."}),e.jsx(s,{htmlRaw:a,code:r,exampleCode:i})]})}n.__docgenInfo={description:"",methods:[],displayName:"InnoAppStatusBar"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`function InnoAppStatusBar() {
  return <Doc>
            <DocTitle>InnoAppStatusBar</DocTitle>
            <p>현재 서비스의 제품 정보, 라이선스, 서비스 전환 등을 표시하는 상태바 컴포넌트입니다.</p>
            <LiveEditor htmlRaw={htmlRaw} code={setupCode} exampleCode={exampleCode} />
        </Doc>;
}`,...n.parameters?.docs?.source}}};const b=["InnoAppStatusBar"];export{n as InnoAppStatusBar,b as __namedExportsOrder,m as default};
