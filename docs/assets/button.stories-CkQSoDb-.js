import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{D as c,a as n,L as u}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const _={title:"HTML Components/Button"},o=()=>t.jsxs(c,{children:[t.jsx(n,{children:"Button Intent"}),t.jsx("p",{children:"버튼의 색상은 총 4가지 존재합니다."}),t.jsx(u,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"Default"}),t.jsx("button",{type:"button",className:"button button--primary",children:"Primary"}),t.jsx("button",{type:"button",className:"button button--secondary",children:"Secondary"}),t.jsx("button",{type:"button",className:"button button--royal-blue",children:"Royal Blue"}),t.jsx("button",{type:"button",className:"button button--tertiary",children:"Tertiary"})]})})]}),e=()=>t.jsxs(c,{children:[t.jsx(n,{children:"Button Outline"}),t.jsx(u,{html:t.jsx("div",{className:"button-group",children:t.jsx("button",{type:"button",className:"button button--outline",children:"Outline"})})})]}),s=()=>t.jsxs(c,{children:[t.jsx(n,{children:"Button Disabled"}),t.jsxs("p",{children:["버튼 비활성화는 ",t.jsx("code",{children:"attribute"}),"방법과 ",t.jsx("code",{children:"class"}),"방법을 제공합니다. 일반적으로 ",t.jsx("code",{children:"attribute"}),"방법을 권장합니다."]}),t.jsx("p",{children:t.jsx("strong",{children:"attribute:"})}),t.jsx(u,{html:t.jsx("button",{type:"button",className:"button",disabled:!0,children:"Default"})}),t.jsx("p",{children:t.jsx("strong",{children:"class:"})}),t.jsx(u,{html:t.jsx("button",{type:"button",className:"button is-disabled",children:"Default"})})]}),r=()=>t.jsxs(c,{children:[t.jsx(n,{children:"Button Size Small"}),t.jsxs("p",{children:["일반적으로 버튼의 최소 크기는 ",t.jsx("code",{children:"80px"}),"이지만 더 작은 크기를 원할 경우 ",t.jsx("code",{children:".button--sm"}),"옵션을 사용할 수 있니다."]}),t.jsx(u,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"80px"}),t.jsx("button",{type:"button",className:"button button--sm",children:"60px"})]})}),t.jsx(n,{children:"Button Size 100%"}),t.jsxs("p",{children:["기본적으로 버튼은 ",t.jsx("code",{children:"100%"})," 크기를 제공하지 않습니다. 하지만 ",t.jsx("code",{children:"utilities"}),"를 적용해 표현할 수 있습니다."]}),t.jsx(u,{html:t.jsx("button",{type:"button",className:"button width--block",children:"100%"})})]}),i=()=>t.jsxs(c,{children:[t.jsx(n,{children:"Button Icon"}),t.jsxs("p",{children:[t.jsx("code",{children:".button--icon"}),"옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다."]}),t.jsx(u,{html:t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex gap-x--lg",children:[t.jsx("button",{type:"button",className:"button button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--primary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--secondary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--tertiary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})})]})})}),t.jsx(n,{children:"Button Icon Prefix And Suffix"}),t.jsx("p",{children:"버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다."}),t.jsx(u,{html:t.jsxs("div",{className:"button-group",children:[t.jsxs("button",{type:"button",className:"button",children:[t.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"})," Prefix"]}),t.jsxs("button",{type:"button",className:"button",children:["Suffix ",t.jsx("i",{className:"button__icon-suffix ir-icon ir-icon--rule-type-table"})]})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Intent"};e.__docgenInfo={description:"",methods:[],displayName:"Outline"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"Size"};i.__docgenInfo={description:"",methods:[],displayName:"Icon"};var a,l,b;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Intent</DocTitle>\r
        <p>버튼의 색상은 총 4가지 존재합니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button">Default</button>\r
                    <button type="button" className="button button--primary">Primary</button>\r
                    <button type="button" className="button button--secondary">Secondary</button>\r
                    <button type="button" className="button button--royal-blue">Royal Blue</button>\r
                    <button type="button" className="button button--tertiary">Tertiary</button>\r
                </div>} />\r
    </Doc>`,...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var d,C,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Outline</DocTitle>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button button--outline">Outline</button>\r
                </div>} />\r
    </Doc>`,...(p=(C=e.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};var m,x,D;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Disabled</DocTitle>\r
        <p>버튼 비활성화는 <code>attribute</code>방법과 <code>class</code>방법을 제공합니다. 일반적으로 <code>attribute</code>방법을 권장합니다.</p>\r
        <p><strong>attribute:</strong></p>\r
        <LiveEditor html={<button type="button" className="button" disabled>Default</button>} />\r
        <p><strong>class:</strong></p>\r
        <LiveEditor html={<button type="button" className="button is-disabled">Default</button>} />\r
    </Doc>`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var B,h,y;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Size Small</DocTitle>\r
        <p>일반적으로 버튼의 최소 크기는 <code>80px</code>이지만 더 작은 크기를 원할 경우 <code>.button--sm</code>옵션을 사용할 수 있니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                <button type="button" className="button">80px</button>\r
                <button type="button" className="button button--sm">60px</button>\r
            </div>} />\r
        <DocTitle>Button Size 100%</DocTitle>\r
        <p>기본적으로 버튼은 <code>100%</code> 크기를 제공하지 않습니다. 하지만 <code>utilities</code>를 적용해 표현할 수 있습니다.</p>\r
        <LiveEditor html={<button type="button" className="button width--block">100%</button>} />\r
    </Doc>`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,N,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(f=(N=i.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};const S=["Intent","Outline","Disabled","Size","Icon"];export{s as Disabled,i as Icon,o as Intent,e as Outline,r as Size,S as __namedExportsOrder,_ as default};
