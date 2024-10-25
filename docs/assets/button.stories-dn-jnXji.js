import{j as t}from"./jsx-runtime-DEdD30eg.js";import{D as u,a as e,L as o}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const T={title:"HTML Components/Button"},n=()=>t.jsxs(u,{children:[t.jsx(e,{children:"Button Intent"}),t.jsx("p",{children:"버튼의 색상은 총 4가지 존재합니다."}),t.jsx(o,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"Default"}),t.jsx("button",{type:"button",className:"button button--primary",children:"Primary"}),t.jsx("button",{type:"button",className:"button button--secondary",children:"Secondary"}),t.jsx("button",{type:"button",className:"button button--royal-blue",children:"Royal Blue"}),t.jsx("button",{type:"button",className:"button button--tertiary",children:"Tertiary"})]})})]}),s=()=>t.jsxs(u,{children:[t.jsx(e,{children:"Button Outline"}),t.jsx(o,{html:t.jsx("div",{className:"button-group",children:t.jsx("button",{type:"button",className:"button button--outline",children:"Outline"})})})]}),r=()=>t.jsxs(u,{children:[t.jsx(e,{children:"Button Disabled"}),t.jsxs("p",{children:["버튼 비활성화는 ",t.jsx("code",{children:"attribute"}),"방법과 ",t.jsx("code",{children:"class"}),"방법을 제공합니다. 일반적으로 ",t.jsx("code",{children:"attribute"}),"방법을 권장합니다."]}),t.jsx("p",{children:t.jsx("strong",{children:"attribute:"})}),t.jsx(o,{html:t.jsx("button",{type:"button",className:"button",disabled:!0,children:"Default"})}),t.jsx("p",{children:t.jsx("strong",{children:"class:"})}),t.jsx(o,{html:t.jsx("button",{type:"button",className:"button is-disabled",children:"Default"})})]}),i=()=>t.jsxs(u,{children:[t.jsx(e,{children:"Button Size Small"}),t.jsxs("p",{children:["일반적으로 버튼의 최소 크기는 ",t.jsx("code",{children:"80px"}),"이지만 더 작은 크기를 원할 경우 ",t.jsx("code",{children:".button--sm"}),"옵션을 사용할 수 있니다."]}),t.jsx(o,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"80px"}),t.jsx("button",{type:"button",className:"button button--sm",children:"60px"})]})}),t.jsx(e,{children:"Button Size 100%"}),t.jsxs("p",{children:["기본적으로 버튼은 ",t.jsx("code",{children:"100%"})," 크기를 제공하지 않습니다. 하지만 ",t.jsx("code",{children:"utilities"}),"를 적용해 표현할 수 있습니다."]}),t.jsx(o,{html:t.jsx("button",{type:"button",className:"button width--block",children:"100%"})})]}),c=()=>t.jsxs(u,{children:[t.jsx(e,{children:"Button Icon"}),t.jsxs("p",{children:[t.jsx("code",{children:".button--icon"}),"옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다."]}),t.jsx(o,{html:t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex gap-x--lg",children:[t.jsx("button",{type:"button",className:"button button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--primary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--secondary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--tertiary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})})]})})}),t.jsx(e,{children:"Button Icon Prefix And Suffix"}),t.jsx("p",{children:"버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다."}),t.jsx(o,{html:t.jsxs("div",{className:"button-group",children:[t.jsxs("button",{type:"button",className:"button",children:[t.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"})," Prefix"]}),t.jsxs("button",{type:"button",className:"button",children:["Suffix ",t.jsx("i",{className:"button__icon-suffix ir-icon ir-icon--rule-type-table"})]})]})})]});n.__docgenInfo={description:"",methods:[],displayName:"Intent"};s.__docgenInfo={description:"",methods:[],displayName:"Outline"};r.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"Size"};c.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon"};var a,l,b;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Intent</DocTitle>\r
        <p>버튼의 색상은 총 4가지 존재합니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button">Default</button>\r
                    <button type="button" className="button button--primary">Primary</button>\r
                    <button type="button" className="button button--secondary">Secondary</button>\r
                    <button type="button" className="button button--royal-blue">Royal Blue</button>\r
                    <button type="button" className="button button--tertiary">Tertiary</button>\r
                </div>} />\r
    </Doc>`,...(b=(l=n.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Outline</DocTitle>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button button--outline">Outline</button>\r
                </div>} />\r
    </Doc>`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Disabled</DocTitle>\r
        <p>버튼 비활성화는 <code>attribute</code>방법과 <code>class</code>방법을 제공합니다. 일반적으로 <code>attribute</code>방법을 권장합니다.</p>\r
        <p><strong>attribute:</strong></p>\r
        <LiveEditor html={<button type="button" className="button" disabled>Default</button>} />\r
        <p><strong>class:</strong></p>\r
        <LiveEditor html={<button type="button" className="button is-disabled">Default</button>} />\r
    </Doc>`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,N,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Size Small</DocTitle>\r
        <p>일반적으로 버튼의 최소 크기는 <code>80px</code>이지만 더 작은 크기를 원할 경우 <code>.button--sm</code>옵션을 사용할 수 있니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                <button type="button" className="button">80px</button>\r
                <button type="button" className="button button--sm">60px</button>\r
            </div>} />\r
        <DocTitle>Button Size 100%</DocTitle>\r
        <p>기본적으로 버튼은 <code>100%</code> 크기를 제공하지 않습니다. 하지만 <code>utilities</code>를 적용해 표현할 수 있습니다.</p>\r
        <LiveEditor html={<button type="button" className="button width--block">100%</button>} />\r
    </Doc>`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var f,g,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const I=["Intent","Outline","Disabled","Size","ButtonIcon"];export{c as ButtonIcon,r as Disabled,n as Intent,s as Outline,i as Size,I as __namedExportsOrder,T as default};
