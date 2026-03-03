import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as o,L as s}from"./version-tag-BQbZ1r9I.js";import"./iframe-CcqNoikh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-a64PSLyw.js";const a=`import { IRStatusBar } from "@innorules/ir-style/lib/esm/solid.js";

const statusBar = new IRStatusBar( {
    contextElement: document.getElementById( "footer" ),
    items: [
        { layout: "left", text: "Left text" },
        { layout: "right", text: "株式会社みずほ銀行向け InnoRules 7.2 短期ライセンス", maxWidth: "300px" },
        { layout: "right", text: "© 2021 INNORULES Corporation. All rights reserved" },
        {
            layout: "right",
            text: "InnoRules Web v8.1.0.0",
            tooltip: "Product-Title: InnoRules Rules Builder for web\\nProduct-Version: 8.1.0.0\\nDate: 2025-04-24\\nVender: InnoRules Co.,LTD.",
            // 가변 너비 설정 (공간이 없을 때 부족할 때 최대한 줄어듦)
            flexible: true,
        },
    ],
} );

btn_change_items.onclick = () =>
{
    statusBar.setItems( [
        { layout: "left", text: "Left text", tooltip: "aaaaaaaaa bbbbbbbbbbbb\\nddddddddddddddddd" },
        { layout: "left", text: "Left text2" },
        { layout: "right", text: "testtestestest" },
        { layout: "right", text: "testtestestest" },
        { layout: "right", text: "Right text and Tooltip", tooltip: "Right text\\ntooltip" },
    ] );
};

btn_destroy.onclick = () => statusBar.destroy();
`,r=`<div class="flex flex--column"
    style="height: 400px; border: 1px solid lightgray">
    <header class="p--lg" style="border-bottom: 1px solid lightgray">
        <h1>Header</h1>
    </header>
    <main class="flex--1 p--lg">
        <h1 class="mb--sm">Main</h1>
        <div class="flex gap--sm">
            <button id="btn_change_items"
                class="button mb--md">Change Items</button>
            <button id="btn_destroy"
                class="button mb--md">Destroy</button>
        </div>
    </main>
    <!-- left, right 영역의 max-width 설정 -->
    <footer id="footer"
        style="--ir-max-width: 750px"></footer>
</div>`,m={title:"SolidJS Components/IRStatusBar"};function t(){return e.jsxs(n,{children:[e.jsx(o,{children:"IRStatusBar"}),e.jsx("p",{children:"좌측 및 우측에 항목을 배치할 수 있는 상태바 UI 컴포넌트"}),e.jsx(s,{htmlRaw:r,code:a})]})}t.__docgenInfo={description:"",methods:[],displayName:"IRStatusBar"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`function IRStatusBar() {
  return <Doc>
            <DocTitle>IRStatusBar</DocTitle>
            <p>좌측 및 우측에 항목을 배치할 수 있는 상태바 UI 컴포넌트</p>
            <LiveEditor htmlRaw={htmlRaw} code={code} />
        </Doc>;
}`,...t.parameters?.docs?.source}}};const x=["IRStatusBar"];export{t as IRStatusBar,x as __namedExportsOrder,m as default};
