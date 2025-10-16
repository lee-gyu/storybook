import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as u,a as i,L as o}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const p={title:"HTML Components/Button"},n=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Intent"}),t.jsx("p",{children:"버튼의 색상은 총 4가지 존재합니다."}),t.jsx(o,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"Default"}),t.jsx("button",{type:"button",className:"button button--primary",children:"Primary"}),t.jsx("button",{type:"button",className:"button button--primary",disabled:!0,children:"Primary Disabled"}),t.jsx("button",{type:"button",className:"button button--secondary",children:"Secondary"}),t.jsx("button",{type:"button",className:"button button--royal-blue",children:"Royal Blue"}),t.jsx("button",{type:"button",className:"button button--tertiary",children:"Tertiary"})]})})]}),e=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Outline"}),t.jsx(o,{html:t.jsx("div",{className:"button-group",children:t.jsx("button",{type:"button",className:"button button--outline",children:"Outline"})})})]}),s=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Disabled"}),t.jsxs("p",{children:["버튼 비활성화는 ",t.jsx("code",{children:"attribute"}),"방법과 ",t.jsx("code",{children:"class"}),"방법을 제공합니다. 일반적으로 ",t.jsx("code",{children:"attribute"}),"방법을 권장합니다."]}),t.jsx("p",{children:t.jsx("strong",{children:"attribute:"})}),t.jsx(o,{html:t.jsx("button",{type:"button",className:"button",disabled:!0,children:"Default"})}),t.jsx("p",{children:t.jsx("strong",{children:"class:"})}),t.jsx(o,{html:t.jsx("button",{type:"button",className:"button is-disabled",children:"Default"})})]}),r=()=>t.jsxs(u,{children:[t.jsx(i,{children:"Button Icon"}),t.jsxs("p",{children:[t.jsx("code",{children:".button--icon"}),"옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다."]}),t.jsx(o,{html:t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex gap-x--lg",children:[t.jsx("button",{type:"button",className:"button button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--primary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--secondary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--tertiary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})})]})})}),t.jsx(i,{children:"Button Icon Prefix And Suffix"}),t.jsx("p",{children:"버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다."}),t.jsx(o,{html:t.jsxs("div",{className:"button-group",children:[t.jsxs("button",{type:"button",className:"button",children:[t.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"})," Prefix"]}),t.jsxs("button",{type:"button",className:"button",children:["Suffix ",t.jsx("i",{className:"button__icon-suffix ir-icon ir-icon--rule-type-table"})]})]})})]});n.__docgenInfo={description:"",methods:[],displayName:"Intent"};e.__docgenInfo={description:"",methods:[],displayName:"Outline"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Outline</DocTitle>\r
        <LiveEditor html={<div className="button-group">\r
                    <button type="button" className="button button--outline">Outline</button>\r
                </div>} />\r
    </Doc>`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Button Disabled</DocTitle>\r
        <p>버튼 비활성화는 <code>attribute</code>방법과 <code>class</code>방법을 제공합니다. 일반적으로 <code>attribute</code>방법을 권장합니다.</p>\r
        <p><strong>attribute:</strong></p>\r
        <LiveEditor html={<button type="button" className="button" disabled>Default</button>} />\r
        <p><strong>class:</strong></p>\r
        <LiveEditor html={<button type="button" className="button is-disabled">Default</button>} />\r
    </Doc>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...r.parameters?.docs?.source}}};const m=["Intent","Outline","Disabled","ButtonIcon"];export{r as ButtonIcon,s as Disabled,n as Intent,e as Outline,m as __namedExportsOrder,p as default};
