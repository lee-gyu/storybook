import{j as d,a as i}from"./jsx-runtime-e43ccb36.js";import{D as t,a as e,L as c}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const G={title:"Utilities/Grid Column"},s=`
#live_editor_wrapper [class^="grid--col-"] {
    gap: var(--spacing-lg);
}

#live_editor_wrapper [class^="grid--col-"] * {
    padding: 5px;
    background-color: rgba(41 42 43 / 2.5%);
    border: 1px solid #eaeeef;
}
`,r=()=>d(t,{children:[i(e,{children:"Grid Column"}),d("p",{children:["레이아웃에 예외적인 스타일 변형이 필요한 경우 ",i("code",{children:"utility"}),"를 사용합니다. 최대 12개의 컬럼까지 사용할 수 있습니다."]}),i(c,{css:s,html:d("div",{className:"grid--col-3",children:[i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"})]})}),i(e,{children:"Grid Column End"}),d("p",{children:["설정한 값만큼 ",i("code",{children:"column"}),"을 포함합니다."]}),i(c,{html:d("div",{className:"grid--col-3",children:[i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{className:"grid--col-end-3",children:"Grid Item"})]})})]});var l,o,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Grid Column</DocTitle>\r
        <p>레이아웃에 예외적인 스타일 변형이 필요한 경우 <code>utility</code>를 사용합니다. 최대 12개의 컬럼까지 사용할 수 있습니다.</p>\r
        <LiveEditor css={css} html={<div className="grid--col-3">\r
                    <div>Grid Item</div>\r
                    <div>Grid Item</div>\r
                    <div>Grid Item</div>\r
                    <div>Grid Item</div>\r
                </div>} />\r
        <DocTitle>Grid Column End</DocTitle>\r
        <p>설정한 값만큼 <code>column</code>을 포함합니다.</p>\r
        <LiveEditor html={<div className="grid--col-3">\r
                    <div>Grid Item</div>\r
                    <div>Grid Item</div>\r
                    <div>Grid Item</div>\r
                    <div className="grid--col-end-3">Grid Item</div>\r
                </div>} />\r
    </Doc>`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["GridColumn"];export{r as GridColumn,h as __namedExportsOrder,G as default};
//# sourceMappingURL=grid-col.stories-74491c06.js.map
