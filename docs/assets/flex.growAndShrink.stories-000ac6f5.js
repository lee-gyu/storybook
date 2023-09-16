import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{D as o,a as t,L as l}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const v={title:"Utilities/Flex"},i=`
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
`,d=()=>r(o,{children:[e(t,{children:"Flex Grow & Shrink"}),e("p",{children:e("strong",{children:"grow:"})}),r("p",{children:[e("code",{children:".flex--grow-1"}),"는 사용 가능한 모든 공간을 사용합니다."]}),e(l,{css:i,html:r("div",{className:"flex",children:[e("div",{className:"flex--grow-1",children:"Flex Item"}),e("div",{children:"Flex Item"})]})}),r("p",{children:[e("code",{children:".flex--grow-0"}),"는 자신의 크기보다 커지지 않습니다."]}),e(l,{css:i,html:r("div",{className:"flex",children:[e("div",{className:"flex--grow-0",children:"Flex Item"}),e("div",{children:"Flex Item"})]})}),e("p",{children:e("strong",{children:"shrink:"})}),r("p",{children:[e("code",{children:".flex--shrink-0"}),"는 컨테이너 공간이 모자라도 자신의 크기를 유지합니다."]}),e(l,{css:i,html:r("div",{className:"flex",children:[e("div",{className:"flex--shrink-0",children:"Flex Item"}),e("div",{style:{width:"100%"},children:"Flex Item"})]})}),r("p",{children:[e("code",{children:".flex--shrink-1"}),"는 컨테이너 공간이 모자르면 크기가 줄어듭니다."]}),e(l,{css:i,html:r("div",{className:"flex",children:[e("div",{className:"flex--shrink-1",children:"Flex Item"}),e("div",{style:{width:"100%"},children:"Flex Item"})]})}),e("p",{children:e("strong",{children:"auto:"})}),r("p",{children:[e("code",{children:".flex--auto"}),"는 ",e("code",{children:".flex--grow-1"}),", ",e("code",{children:".flex--shrink-1"}),"를 둘다 사용한것과 같습니다."]}),e(l,{css:i,html:r("div",{className:"flex",children:[e("div",{className:"flex--auto",children:"Flex Item"}),e("div",{children:"Flex Item"})]})}),e("p",{children:e("strong",{children:"none:"})}),r("p",{children:[e("code",{children:".flex--none"}),"는 ",e("code",{children:".flex--grow-0"}),", ",e("code",{children:".flex--shrink-0"}),"를 둘다 사용한것과 같습니다."]}),e(l,{css:i,html:r("div",{className:"flex",children:[e("div",{className:"flex--none",children:"Flex Item"}),e("div",{style:{width:"100%"},children:"Flex Item"})]})})]});var n,s,c;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Flex Grow &amp; Shrink</DocTitle>\r
        <p><strong>grow:</strong></p>\r
        <p><code>.flex--grow-1</code>는 사용 가능한 모든 공간을 사용합니다.</p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--grow-1">Flex Item</div>\r
                    <div>Flex Item</div>\r
                </div>} />\r
        <p><code>.flex--grow-0</code>는 자신의 크기보다 커지지 않습니다.</p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--grow-0">Flex Item</div>\r
                    <div>Flex Item</div>\r
                </div>} />\r
        <p><strong>shrink:</strong></p>\r
        <p><code>.flex--shrink-0</code>는 컨테이너 공간이 모자라도 자신의 크기를 유지합니다.</p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--shrink-0">Flex Item</div>\r
                    <div style={{
      width: "100%"
    }}>Flex Item</div>\r
                </div>} />\r
        <p><code>.flex--shrink-1</code>는 컨테이너 공간이 모자르면 크기가 줄어듭니다.</p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--shrink-1">Flex Item</div>\r
                    <div style={{
      width: "100%"
    }}>Flex Item</div>\r
                </div>} />\r
        <p><strong>auto:</strong></p>\r
        <p><code>.flex--auto</code>는 <code>.flex--grow-1</code>, <code>.flex--shrink-1</code>를 둘다 사용한것과 같습니다.</p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--auto">Flex Item</div>\r
                    <div>Flex Item</div>\r
                </div>} />\r
        <p><strong>none:</strong></p>\r
        <p><code>.flex--none</code>는 <code>.flex--grow-0</code>, <code>.flex--shrink-0</code>를 둘다 사용한것과 같습니다.</p>\r
        <LiveEditor css={css} html={<div className="flex">\r
                    <div className="flex--none">Flex Item</div>\r
                    <div style={{
      width: "100%"
    }}>Flex Item</div>\r
                </div>} />\r
    </Doc>`,...(c=(s=d.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const p=["GrowAndShrink"];export{d as GrowAndShrink,p as __namedExportsOrder,v as default};
//# sourceMappingURL=flex.growAndShrink.stories-000ac6f5.js.map
