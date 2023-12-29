import{j as u,a as t,F as v}from"./jsx-runtime-KzWSGvcx.js";import{D as e,a as o,L as n}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const _={title:"HTML Components/Button"},r=()=>u(e,{children:[t(o,{children:"Button Intent"}),t("p",{children:"버튼의 색상은 총 4가지 존재합니다."}),t(n,{html:u("div",{className:"button-group",children:[t("button",{type:"button",className:"button",children:"Default"}),t("button",{type:"button",className:"button button--primary",children:"Primary"}),t("button",{type:"button",className:"button button--secondary",children:"Secondary"}),t("button",{type:"button",className:"button button--royal-blue",children:"Royal Blue"}),t("button",{type:"button",className:"button button--tertiary",children:"Tertiary"})]})})]}),i=()=>u(e,{children:[t(o,{children:"Button Outline"}),t(n,{html:t("div",{className:"button-group",children:t("button",{type:"button",className:"button button--outline",children:"Outline"})})})]}),c=()=>u(e,{children:[t(o,{children:"Button Disabled"}),u("p",{children:["버튼 비활성화는 ",t("code",{children:"attribute"}),"방법과 ",t("code",{children:"class"}),"방법을 제공합니다. 일반적으로 ",t("code",{children:"attribute"}),"방법을 권장합니다."]}),t("p",{children:t("strong",{children:"attribute:"})}),t(n,{html:t("button",{type:"button",className:"button",disabled:!0,children:"Default"})}),t("p",{children:t("strong",{children:"class:"})}),t(n,{html:t("button",{type:"button",className:"button is-disabled",children:"Default"})})]}),a=()=>u(e,{children:[t(o,{children:"Button Size Small"}),u("p",{children:["일반적으로 버튼의 최소 크기는 ",t("code",{children:"80px"}),"이지만 더 작은 크기를 원할 경우 ",t("code",{children:".button--sm"}),"옵션을 사용할 수 있니다."]}),t(n,{html:u("div",{className:"button-group",children:[t("button",{type:"button",className:"button",children:"80px"}),t("button",{type:"button",className:"button button--sm",children:"60px"})]})}),t(o,{children:"Button Size 100%"}),u("p",{children:["기본적으로 버튼은 ",t("code",{children:"100%"})," 크기를 제공하지 않습니다. 하지만 ",t("code",{children:"utilities"}),"를 적용해 표현할 수 있습니다."]}),t(n,{html:t("button",{type:"button",className:"button width--block",children:"100%"})})]}),l=()=>u(e,{children:[t(o,{children:"Button Icon"}),u("p",{children:[t("code",{children:".button--icon"}),"옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다."]}),t(n,{html:t(v,{children:u("div",{className:"flex gap-x--lg",children:[t("button",{type:"button",className:"button button--icon",children:t("i",{className:"ir-icon ir-icon--rule-type-table"})}),t("button",{type:"button",className:"button button--primary button--icon",children:t("i",{className:"ir-icon ir-icon--rule-type-table"})}),t("button",{type:"button",className:"button button--secondary button--icon",children:t("i",{className:"ir-icon ir-icon--rule-type-table"})}),t("button",{type:"button",className:"button button--tertiary button--icon",children:t("i",{className:"ir-icon ir-icon--rule-type-table"})})]})})}),t(o,{children:"Button Icon Prefix And Suffix"}),t("p",{children:"버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다."}),t(n,{html:u("div",{className:"button-group",children:[u("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"})," Prefix"]}),u("button",{type:"button",className:"button",children:["Suffix ",t("i",{className:"button__icon-suffix ir-icon ir-icon--rule-type-table"})]})]})})]});var s,b,C;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Intent</DocTitle>\r
        <p>버튼의 색상은 총 4가지 존재합니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button">Default</button>\r
                    <button type="button" className="button button--primary">Primary</button>\r
                    <button type="button" className="button button--secondary">Secondary</button>\r
                    <button type="button" className="button button--royal-blue">Royal Blue</button>\r
                    <button type="button" className="button button--tertiary">Tertiary</button>\r
                </div>} />\r
    </Doc>`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var d,p,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Outline</DocTitle>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button button--outline">Outline</button>\r
                </div>} />\r
    </Doc>`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var B,D,h;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Disabled</DocTitle>\r
        <p>버튼 비활성화는 <code>attribute</code>방법과 <code>class</code>방법을 제공합니다. 일반적으로 <code>attribute</code>방법을 권장합니다.</p>\r
        <p><strong>attribute:</strong></p>\r
        <LiveEditor html={<button type="button" className="button" disabled>Default</button>} />\r
        <p><strong>class:</strong></p>\r
        <LiveEditor html={<button type="button" className="button is-disabled">Default</button>} />\r
    </Doc>`,...(h=(D=c.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var y,N,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Size Small</DocTitle>\r
        <p>일반적으로 버튼의 최소 크기는 <code>80px</code>이지만 더 작은 크기를 원할 경우 <code>.button--sm</code>옵션을 사용할 수 있니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                <button type="button" className="button">80px</button>\r
                <button type="button" className="button button--sm">60px</button>\r
            </div>} />\r
        <DocTitle>Button Size 100%</DocTitle>\r
        <p>기본적으로 버튼은 <code>100%</code> 크기를 제공하지 않습니다. 하지만 <code>utilities</code>를 적용해 표현할 수 있습니다.</p>\r
        <LiveEditor html={<button type="button" className="button width--block">100%</button>} />\r
    </Doc>`,...(f=(N=a.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var x,E,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Icon</DocTitle>\r
        <p><code>.button--icon</code>옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다.</p>\r
        <LiveEditor html={<>\r
                <div className='flex gap-x--lg'>\r
                    <button type="button" className="button button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>\r
                    <button type="button" className="button button--primary button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>\r
                    <button type="button" className="button button--secondary button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>\r
                    <button type="button" className="button button--tertiary button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>\r
                </div>\r
            </>} />\r
        <DocTitle>Button Icon Prefix And Suffix</DocTitle>\r
        <p>버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                <button type="button" className="button">\r
                    <i className="button__icon-prefix ir-icon ir-icon--rule-type-table"></i> Prefix\r
                </button>\r
                <button type="button" className="button">Suffix <i className="button__icon-suffix ir-icon ir-icon--rule-type-table"></i></button>\r
            </div>} />\r
    </Doc>`,...(g=(E=l.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const I=["Intent","Outline","Disabled","Size","Icon"];export{c as Disabled,l as Icon,r as Intent,i as Outline,a as Size,I as __namedExportsOrder,_ as default};
