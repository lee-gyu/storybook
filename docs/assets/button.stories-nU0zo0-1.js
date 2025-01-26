import{j as t}from"./jsx-runtime-CZmXTeUy.js";import{D as u,a as i,L as n}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const v={title:"HTML Components/Button"},o=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Intent"}),t.jsx("p",{children:"버튼의 색상은 총 4가지 존재합니다."}),t.jsx(n,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"Default"}),t.jsx("button",{type:"button",className:"button button--primary",children:"Primary"}),t.jsx("button",{type:"button",className:"button button--primary",disabled:!0,children:"Primary Disabled"}),t.jsx("button",{type:"button",className:"button button--secondary",children:"Secondary"}),t.jsx("button",{type:"button",className:"button button--royal-blue",children:"Royal Blue"}),t.jsx("button",{type:"button",className:"button button--tertiary",children:"Tertiary"})]})})]}),e=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Outline"}),t.jsx(n,{html:t.jsx("div",{className:"button-group",children:t.jsx("button",{type:"button",className:"button button--outline",children:"Outline"})})})]}),s=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Disabled"}),t.jsxs("p",{children:["버튼 비활성화는 ",t.jsx("code",{children:"attribute"}),"방법과 ",t.jsx("code",{children:"class"}),"방법을 제공합니다. 일반적으로 ",t.jsx("code",{children:"attribute"}),"방법을 권장합니다."]}),t.jsx("p",{children:t.jsx("strong",{children:"attribute:"})}),t.jsx(n,{html:t.jsx("button",{type:"button",className:"button",disabled:!0,children:"Default"})}),t.jsx("p",{children:t.jsx("strong",{children:"class:"})}),t.jsx(n,{html:t.jsx("button",{type:"button",className:"button is-disabled",children:"Default"})})]}),r=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Icon"}),t.jsxs("p",{children:[t.jsx("code",{children:".button--icon"}),"옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다."]}),t.jsx(n,{html:t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex gap-x--lg",children:[t.jsx("button",{type:"button",className:"button button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--primary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--secondary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--tertiary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})})]})})}),t.jsx(i,{children:"Button Icon Prefix And Suffix"}),t.jsx("p",{children:"버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다."}),t.jsx(n,{html:t.jsxs("div",{className:"button-group",children:[t.jsxs("button",{type:"button",className:"button",children:[t.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"})," Prefix"]}),t.jsxs("button",{type:"button",className:"button",children:["Suffix ",t.jsx("i",{className:"button__icon-suffix ir-icon ir-icon--rule-type-table"})]})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Intent"};e.__docgenInfo={description:"",methods:[],displayName:"Outline"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon"};var a,c,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Intent</DocTitle>\r
        <p>버튼의 색상은 총 4가지 존재합니다.</p>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button">Default</button>\r
                    <button type="button" className="button button--primary">Primary</button>\r
                    <button type="button" className="button button--primary" disabled>Primary Disabled</button>\r
                    <button type="button" className="button button--secondary">Secondary</button>\r
                    <button type="button" className="button button--royal-blue">Royal Blue</button>\r
                    <button type="button" className="button button--tertiary">Tertiary</button>\r
                </div>} />\r
    </Doc>`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var b,d,p;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Outline</DocTitle>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button button--outline">Outline</button>\r
                </div>} />\r
    </Doc>`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,x,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Disabled</DocTitle>\r
        <p>버튼 비활성화는 <code>attribute</code>방법과 <code>class</code>방법을 제공합니다. 일반적으로 <code>attribute</code>방법을 권장합니다.</p>\r
        <p><strong>attribute:</strong></p>\r
        <LiveEditor html={<button type="button" className="button" disabled>Default</button>} />\r
        <p><strong>class:</strong></p>\r
        <LiveEditor html={<button type="button" className="button is-disabled">Default</button>} />\r
    </Doc>`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,j,N;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const _=["Intent","Outline","Disabled","ButtonIcon"];export{r as ButtonIcon,s as Disabled,o as Intent,e as Outline,_ as __namedExportsOrder,v as default};
