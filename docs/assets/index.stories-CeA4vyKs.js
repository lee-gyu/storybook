import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as s,a,L as i}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const l=`import { IRStatusBar } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
const statusBar = new IRStatusBar( {\r
    contextElement: document.getElementById( "footer" ),\r
    items: [\r
        { layout: "left", text: "Left text" },\r
        { layout: "right", text: "株式会社みずほ銀行向け InnoRules 7.2 短期ライセンス", maxWidth: "300px" },\r
        { layout: "right", text: "© 2021 INNORULES Corporation. All rights reserved" },\r
        {\r
            layout: "right",\r
            text: "InnoRules Web v8.1.0.0",\r
            tooltip: "Product-Title: InnoRules Rules Builder for web\\nProduct-Version: 8.1.0.0\\nDate: 2025-04-24\\nVender: InnoRules Co.,LTD.",\r
            // 가변 너비 설정 (공간이 없을 때 부족할 때 최대한 줄어듦)\r
            flexible: true,\r
        },\r
    ],\r
} );\r
\r
btn_change_items.onclick = () =>\r
{\r
    statusBar.setItems( [\r
        { layout: "left", text: "Left text", tooltip: "aaaaaaaaa bbbbbbbbbbbb\\nddddddddddddddddd" },\r
        { layout: "left", text: "Left text2" },\r
        { layout: "right", text: "testtestestest" },\r
        { layout: "right", text: "testtestestest" },\r
        { layout: "right", text: "Right text and Tooltip", tooltip: "Right text\\ntooltip" },\r
    ] );\r
};\r
\r
btn_destroy.onclick = () => statusBar.destroy();\r
`,d=`<div class="flex flex--column"\r
    style="height: 400px; border: 1px solid lightgray">\r
    <header class="p--lg" style="border-bottom: 1px solid lightgray">\r
        <h1>Header</h1>\r
    </header>\r
    <main class="flex--1 p--lg">\r
        <h1 class="mb--sm">Main</h1>\r
        <div class="flex gap--sm">\r
            <button id="btn_change_items"\r
                class="button mb--md">Change Items</button>\r
            <button id="btn_destroy"\r
                class="button mb--md">Destroy</button>\r
        </div>\r
    </main>\r
    <!-- left, right 영역의 max-width 설정 -->\r
    <footer id="footer"\r
        style="--ir-max-width: 750px"></footer>\r
</div>`,h={title:"SolidJS Components/IRStatusBar"};function t(){return r.jsxs(s,{children:[r.jsx(a,{children:"IRStatusBar"}),r.jsx("p",{children:"좌측 및 우측에 항목을 배치할 수 있는 상태바 UI 컴포넌트"}),r.jsx(i,{htmlRaw:d,code:l})]})}t.__docgenInfo={description:"",methods:[],displayName:"IRStatusBar"};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`function IRStatusBar() {
  return <Doc>\r
            <DocTitle>IRStatusBar</DocTitle>\r
            <p>좌측 및 우측에 항목을 배치할 수 있는 상태바 UI 컴포넌트</p>\r
            <LiveEditor htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const b=["IRStatusBar"];export{t as IRStatusBar,b as __namedExportsOrder,h as default};
