import{j as d,a as i}from"./jsx-runtime-KzWSGvcx.js";import{D as C,a as e,L as u}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const v={title:"Utilities/Grid Column"},n=`
#live_editor_wrapper [class^="grid--col-"] {
    gap: var(--spacing-lg);
}

#live_editor_wrapper [class^="grid--col-"] * {
    padding: 5px;
    background-color: rgba(41 42 43 / 2.5%);
    border: 1px solid #eaeeef;
}
`,r=()=>d(C,{children:[i(e,{children:"Grid Column"}),d("p",{children:["레이아웃에 예외적인 스타일 변형이 필요한 경우 ",i("code",{children:"utility"}),"를 사용합니다. 최대 12개의 컬럼까지 사용할 수 있습니다."]}),i(u,{css:n,html:d("div",{className:"grid--col-3",children:[i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"})]})}),i(e,{children:"Grid Column End"}),d("p",{children:["설정한 값만큼 ",i("code",{children:"column"}),"을 포함합니다."]}),i(u,{html:d("div",{className:"grid--col-3",children:[i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{children:"Grid Item"}),i("div",{className:"grid--col-end-3",children:"Grid Item"})]})})]});var c,l,o;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const p=["GridColumn"];export{r as GridColumn,p as __namedExportsOrder,v as default};
