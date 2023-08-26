import{j as l,a as e}from"./jsx-runtime-e43ccb36.js";import{D as c,a as t,L as r}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const f={title:"Utilities/Flex"},s=`
#live_editor_wrapper .flex,
#live_editor_wrapper .flex-inline {
    padding: 5px;
    border: 1px solid #ebeff6;
    border-radius: 6px;
}

#live_editor_wrapper .flex > *,
#live_editor_wrapper .flex-inline > * {
    padding: 5px;
    background-color: rgba(41 42 43 / 2.5%);
    border: 1px solid #eaeeef;
}

#live_editor_wrapper .flex {
    height: 100px;
}`,i=()=>l(c,{children:[e(t,{children:"Flex Align Self"}),l("p",{children:[e("code",{children:"flex"})," 항목의 정렬을 설정할 수 있습니다."]}),e("p",{children:e("strong",{children:"base:"})}),e(r,{css:s,html:l("div",{className:"flex",children:[e("div",{className:"flex--grow-1",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"})]})}),e("p",{children:e("strong",{children:"start:"})}),e(r,{css:s,html:l("div",{className:"flex",children:[e("div",{className:"flex--grow-1 align-self--start",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"})]})}),e("p",{children:e("strong",{children:"center:"})}),e(r,{css:s,html:l("div",{className:"flex",children:[e("div",{className:"flex--grow-1 align-self--center",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"})]})}),e("p",{children:e("strong",{children:"end:"})}),e(r,{css:s,html:l("div",{className:"flex",children:[e("div",{className:"flex--grow-1 align-self--end",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"}),e("div",{className:"flex--grow-1",children:"Flex Item"})]})})]});var d,a,n;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Flex Align Self</DocTitle>\r
        <p><code>flex</code> 항목의 정렬을 설정할 수 있습니다.</p>\r
        <p><strong>base:</strong></p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--grow-1">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                </div>} />\r
        <p><strong>start:</strong></p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--grow-1 align-self--start">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                </div>} />\r
        <p><strong>center:</strong></p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--grow-1 align-self--center">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                </div>} />\r
        <p><strong>end:</strong></p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--grow-1 align-self--end">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                    <div className="flex--grow-1">Flex Item</div>\r
                </div>} />\r
    </Doc>`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const g=["AlignSelf"];export{i as AlignSelf,g as __namedExportsOrder,f as default};
//# sourceMappingURL=flex.alignSelf.stories-76bad332.js.map
