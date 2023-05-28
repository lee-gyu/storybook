import{j as a,a as e,F as v}from"./jsx-runtime-d057ca55.js";import{D as o,a as m,L as h}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const b={title:"HTML Components/Card"},_=()=>a(v,{children:[a("div",{className:"card__head",children:[e("strong",{className:"card__head-title",children:a("span",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"금융 상품"})]})}),a("div",{className:"card__head-actions",children:[e("div",{className:"favorite",children:a("label",{className:"favorite__wrapper",children:[e("input",{type:"checkbox",className:"favorite__input"}),a("div",{className:"favorite__state",children:[e("i",{className:"favorite__inactive ir-icon ir-icon--star-outline"}),e("i",{className:"favorite__active ir-icon ir-icon--star-fill"})]})]})}),e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})]})]}),e("div",{className:"card__body",children:e("span",{className:"card__text",children:"미승인 · 신규"})}),a("div",{className:"card__foot",children:[e("div",{className:"card__foot-left",children:e("i",{className:"ir-icon ir-icon--return-multiple"})}),e("div",{className:"card__foot-right",children:"2021-09-07 02:13:54"})]})]}),r=()=>a(o,{children:[e(m,{children:"Card"}),e("p",{children:"카드 스타일을 표현하는 스타일입니다."}),e(h,{fixedHeight:250,html:e("div",{className:"card",children:e(_,{})})})]}),c=()=>{const p=Array.from({length:4}).map((u,N)=>e("li",{className:"card",children:e(_,{})},N));return a(o,{children:[e(m,{children:"Card List"}),a("p",{children:["카드 스타일을 목록으로 표현하는 스타일입니다. 목록으로 표현되는 경우 ",e("code",{children:".card"}),"의 요소는 ",e("code",{children:"li"}),"로 변경되어야 합니다."]}),e(h,{defaultHtmlFold:[4,39,74,109],html:e("div",{className:"docs__content",children:e("div",{className:"card-list",children:e("ul",{className:"card-list__wrapper",children:p})})})})]})};var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Card</DocTitle>\r
        <p>카드 스타일을 표현하는 스타일입니다.</p>\r
        <LiveEditor fixedHeight={250} html={<div className="card"><CardHTML /></div>} />\r
    </Doc>`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,t,n;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const cardElements = Array.from({
    length: 4
  }).map((_, id) => <li key={id} className="card"><CardHTML /></li>);
  return <Doc>\r
            <DocTitle>Card List</DocTitle>\r
            <p>카드 스타일을 목록으로 표현하는 스타일입니다. 목록으로 표현되는 경우 <code>.card</code>의 요소는 <code>li</code>로 변경되어야 합니다.</p>\r
            <LiveEditor defaultHtmlFold={[4, 39, 74, 109]} html={<div className="docs__content">\r
                        <div className="card-list">\r
                            <ul className="card-list__wrapper">{cardElements}</ul>\r
                        </div>\r
                    </div>} />\r
        </Doc>;
}`,...(n=(t=c.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Default","List"];export{r as Default,c as List,g as __namedExportsOrder,b as default};
//# sourceMappingURL=card.stories-95338518.js.map
