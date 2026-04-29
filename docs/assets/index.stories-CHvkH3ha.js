import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { IRStatusBar } from "@innorules/ir-style/lib/esm/solid.js";

const statusBar = new IRStatusBar( {
    contextElement: document.getElementById( "footer" ),
    items: [
        { layout: "left", text: "Left text" },
        { layout: "right", text: "株式会社みずほ銀行向け InnoRules 7.2 短期ライセンス", maxWidth: "300px" },
        { layout: "right", text: "© 2021 INNOAX Corporation. All rights reserved" },
        {
            layout: "right",
            text: "InnoRules Web v8.1.0.0",
            tooltip: "Product-Title: InnoRules Rules Builder for web\\nProduct-Version: 8.1.0.0\\nDate: 2025-04-24\\nVender: InnoAX Co.,LTD.",
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
`})),c,l=e((()=>{c=`<div class="flex flex--column"
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
</div>`}));function u(){return(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`IRStatusBar`}),(0,d.jsx)(`p`,{children:`좌측 및 우측에 항목을 배치할 수 있는 상태바 UI 컴포넌트`}),(0,d.jsx)(r,{htmlRaw:c,code:o})]})}var d,f,p;e((()=>{s(),l(),i(),d=a(),f={title:`SolidJS Components/IRStatusBar`},u.__docgenInfo={description:``,methods:[],displayName:`IRStatusBar`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`function IRStatusBar() {
  return <Doc>
            <DocTitle>IRStatusBar</DocTitle>
            <p>좌측 및 우측에 항목을 배치할 수 있는 상태바 UI 컴포넌트</p>
            <LiveEditor htmlRaw={htmlRaw} code={code} />
        </Doc>;
}`,...u.parameters?.docs?.source}}},p=[`IRStatusBar`]}))();export{u as IRStatusBar,p as __namedExportsOrder,f as default};