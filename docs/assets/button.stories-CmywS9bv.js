import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as u,L as n}from"./version-tag-BQbZ1r9I.js";import"./iframe-CcqNoikh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-a64PSLyw.js";const p={title:"HTML/Button"},o=()=>t.jsxs(a,{children:[t.jsx(u,{children:"Button Intent"}),t.jsx("p",{children:"버튼의 색상은 총 4가지 존재합니다."}),t.jsx(n,{html:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{type:"button",className:"button",children:"Default"}),t.jsx("button",{type:"button",className:"button button--primary",children:"Primary"}),t.jsx("button",{type:"button",className:"button button--primary",disabled:!0,children:"Primary Disabled"}),t.jsx("button",{type:"button",className:"button button--secondary",children:"Secondary"}),t.jsx("button",{type:"button",className:"button button--royal-blue",children:"Royal Blue"}),t.jsx("button",{type:"button",className:"button button--tertiary",children:"Tertiary"})]})})]}),e=()=>t.jsxs(a,{children:[t.jsx(u,{children:"Button Outline"}),t.jsx(n,{html:t.jsx("div",{className:"button-group",children:t.jsx("button",{type:"button",className:"button button--outline",children:"Outline"})})})]}),s=()=>t.jsxs(a,{children:[t.jsx(u,{children:"Button Disabled"}),t.jsxs("p",{children:["버튼 비활성화는 ",t.jsx("code",{children:"attribute"}),"방법과 ",t.jsx("code",{children:"class"}),"방법을 제공합니다. 일반적으로 ",t.jsx("code",{children:"attribute"}),"방법을 권장합니다."]}),t.jsx("p",{children:t.jsx("strong",{children:"attribute:"})}),t.jsx(n,{html:t.jsx("button",{type:"button",className:"button",disabled:!0,children:"Default"})}),t.jsx("p",{children:t.jsx("strong",{children:"class:"})}),t.jsx(n,{html:t.jsx("button",{type:"button",className:"button is-disabled",children:"Default"})})]}),i=()=>t.jsxs(a,{children:[t.jsx(u,{children:"Button Icon"}),t.jsxs("p",{children:[t.jsx("code",{children:".button--icon"}),"옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다."]}),t.jsx(n,{html:t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex gap-x--lg",children:[t.jsx("button",{type:"button",className:"button button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--primary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--secondary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})}),t.jsx("button",{type:"button",className:"button button--tertiary button--icon",children:t.jsx("i",{className:"ir-icon ir-icon--rule-type-table"})})]})})}),t.jsx(u,{children:"Button Icon Prefix And Suffix"}),t.jsx("p",{children:"버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다."}),t.jsx(n,{html:t.jsxs("div",{className:"button-group",children:[t.jsxs("button",{type:"button",className:"button",children:[t.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"})," Prefix"]}),t.jsxs("button",{type:"button",className:"button",children:["Suffix ",t.jsx("i",{className:"button__icon-suffix ir-icon ir-icon--rule-type-table"})]})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Intent"};e.__docgenInfo={description:"",methods:[],displayName:"Outline"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Button Intent</DocTitle>
        <p>버튼의 색상은 총 4가지 존재합니다.</p>
        <LiveEditor html={<div className="button-group">
                    <button type="button" className="button">Default</button>
                    <button type="button" className="button button--primary">Primary</button>
                    <button type="button" className="button button--primary" disabled>Primary Disabled</button>
                    <button type="button" className="button button--secondary">Secondary</button>
                    <button type="button" className="button button--royal-blue">Royal Blue</button>
                    <button type="button" className="button button--tertiary">Tertiary</button>
                </div>} />
    </Doc>`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Button Outline</DocTitle>
        <LiveEditor html={<div className="button-group">
                    <button type="button" className="button button--outline">Outline</button>
                </div>} />
    </Doc>`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Button Disabled</DocTitle>
        <p>버튼 비활성화는 <code>attribute</code>방법과 <code>class</code>방법을 제공합니다. 일반적으로 <code>attribute</code>방법을 권장합니다.</p>
        <p><strong>attribute:</strong></p>
        <LiveEditor html={<button type="button" className="button" disabled>Default</button>} />
        <p><strong>class:</strong></p>
        <LiveEditor html={<button type="button" className="button is-disabled">Default</button>} />
    </Doc>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Button Icon</DocTitle>
        <p><code>.button--icon</code>옵션을 활용하면 버튼에 텍스트 없이 아이콘만 표현할 수 있습니다.</p>
        <LiveEditor html={<>
                <div className="flex gap-x--lg">
                    <button type="button" className="button button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>
                    <button type="button" className="button button--primary button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>
                    <button type="button" className="button button--secondary button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>
                    <button type="button" className="button button--tertiary button--icon"><i className="ir-icon ir-icon--rule-type-table"></i></button>
                </div>
            </>} />
        <DocTitle>Button Icon Prefix And Suffix</DocTitle>
        <p>버튼 좌측, 우측에 아이콘을 삽입할 수 있습니다.</p>
        <LiveEditor html={<div className="button-group">
                <button type="button" className="button">
                    <i className="button__icon-prefix ir-icon ir-icon--rule-type-table"></i> Prefix
                </button>
                <button type="button" className="button">Suffix <i className="button__icon-suffix ir-icon ir-icon--rule-type-table"></i></button>
            </div>} />
    </Doc>`,...i.parameters?.docs?.source}}};const m=["Intent","Outline","Disabled","ButtonIcon"];export{i as ButtonIcon,s as Disabled,o as Intent,e as Outline,m as __namedExportsOrder,p as default};
