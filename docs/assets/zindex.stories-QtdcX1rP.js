import{j as d,a as e,F as l}from"./jsx-runtime-KzWSGvcx.js";import{D as v,a as s,L as r}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const u={title:"Utilities/Z Index"},n=`
#live_editor_wrapper #live_editor_wrapper div {
    padding: 30px;
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(1) {
    color: var(--primary-inverse);
    background-color: var(--primary);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(2) {
    color: var(--secondary-inverse);
    background-color: var(--secondary);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(3) {
    color: var(--tertiary-inverse);
    background-color: var(--tertiary);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(4) {
    color: var(--light-inverse);
    background-color: var(--light);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(5) {
    color: var(--info-inverse);
    background-color: var(--info);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(6) {
    color: var(--warning-inverse);
    background-color: var(--warning);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(7) {
    color: var(--danger-inverse);
    background-color: var(--danger);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(8) {
    color: var(--white);
    background-color: var(--purple);
}

#live_editor_wrapper #live_editor_wrapper div:nth-child(9) {
    color: var(--white);
    background-color: var(--black);
}
`,i=()=>d(v,{children:[e(s,{children:"Z-Index"}),e("p",{children:"화면에 띄워지는 레이어 레벨을 정의합니다. 숫자가 높을수록 상위에 노출됩니다."}),e("p",{children:e("strong",{children:"사용 권장 커스텀 프로퍼티"})}),d("ul",{children:[d("li",{children:[e("code",{children:"--z-index-floating"}),": ",e("code",{children:"var(--z-index-level-2)"}),";"]}),d("li",{children:[e("code",{children:"--z-index-drawer"}),": ",e("code",{children:"var(--z-index-level-3)"}),";"]}),d("li",{children:[e("code",{children:"--z-index-dialog"}),": ",e("code",{children:"var(--z-index-level-4)"}),";"]}),d("li",{children:[e("code",{children:"--z-index-popover"}),": ",e("code",{children:"var(--z-index-level-6)"}),";"]}),d("li",{children:[e("code",{children:"--z-index-toast"}),": ",e("code",{children:"var(--z-index-level-8)"}),";"]}),d("li",{children:[e("code",{children:"--z-index-message"}),": ",e("code",{children:"var(--z-index-level-9)"}),";"]})]}),e(r,{css:n,html:d(l,{children:[e("div",{className:"z-index--floating",children:".z-index--floating"}),e("div",{className:"z-index--drawer",children:".z-index--drawer"}),e("div",{className:"z-index--dialog",children:".z-index--dialog"}),e("div",{className:"z-index--popover",children:".z-index--popover"}),e("div",{className:"z-index--toast",children:".z-index--toast"}),e("div",{className:"z-index--message",children:".z-index--message"})]})}),e("p",{children:e("strong",{children:"권장 목록에 맞는 컴포넌트가 없는 경우 아래 사용"})}),d("ul",{children:[d("li",{children:[e("code",{children:"--z-index-level-0"}),": ",e("code",{children:"0"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-1"}),": ",e("code",{children:"10000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-2"}),": ",e("code",{children:"20000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-3"}),": ",e("code",{children:"30000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-4"}),": ",e("code",{children:"40000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-5"}),": ",e("code",{children:"50000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-6"}),": ",e("code",{children:"60000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-7"}),": ",e("code",{children:"70000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-8"}),": ",e("code",{children:"80000"}),";"]}),d("li",{children:[e("code",{children:"--z-index-level-9"}),": ",e("code",{children:"90000"}),";"]})]}),e(r,{css:n,html:d(l,{children:[e("div",{className:"z-index--1",children:"--z-index-level-1"}),e("div",{className:"z-index--2",children:"--z-index-level-2"}),e("div",{className:"z-index--3",children:"--z-index-level-3"}),e("div",{className:"z-index--4",children:"--z-index-level-4"}),e("div",{className:"z-index--5",children:"--z-index-level-5"}),e("div",{className:"z-index--6",children:"--z-index-level-6"}),e("div",{className:"z-index--7",children:"--z-index-level-7"}),e("div",{className:"z-index--8",children:"--z-index-level-8"}),e("div",{className:"z-index--9",children:"--z-index-level-9"})]})})]});var c,o,a;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Z-Index</DocTitle>\r
        <p>화면에 띄워지는 레이어 레벨을 정의합니다. 숫자가 높을수록 상위에 노출됩니다.</p>\r
        <p><strong>사용 권장 커스텀 프로퍼티</strong></p>\r
        <ul>\r
            <li><code>--z-index-floating</code>: <code>var(--z-index-level-2)</code>;</li>\r
            <li><code>--z-index-drawer</code>: <code>var(--z-index-level-3)</code>;</li>\r
            <li><code>--z-index-dialog</code>: <code>var(--z-index-level-4)</code>;</li>\r
            <li><code>--z-index-popover</code>: <code>var(--z-index-level-6)</code>;</li>\r
            <li><code>--z-index-toast</code>: <code>var(--z-index-level-8)</code>;</li>\r
            <li><code>--z-index-message</code>: <code>var(--z-index-level-9)</code>;</li>\r
        </ul>\r
        <LiveEditor css={css} html={<>\r
                    <div className="z-index--floating">.z-index--floating</div>\r
                    <div className="z-index--drawer">.z-index--drawer</div>\r
                    <div className="z-index--dialog">.z-index--dialog</div>\r
                    <div className="z-index--popover">.z-index--popover</div>\r
                    <div className="z-index--toast">.z-index--toast</div>\r
                    <div className="z-index--message">.z-index--message</div>\r
                </>} />\r
        <p><strong>권장 목록에 맞는 컴포넌트가 없는 경우 아래 사용</strong></p>\r
        <ul>\r
            <li><code>--z-index-level-0</code>: <code>0</code>;</li>\r
            <li><code>--z-index-level-1</code>: <code>10000</code>;</li>\r
            <li><code>--z-index-level-2</code>: <code>20000</code>;</li>\r
            <li><code>--z-index-level-3</code>: <code>30000</code>;</li>\r
            <li><code>--z-index-level-4</code>: <code>40000</code>;</li>\r
            <li><code>--z-index-level-5</code>: <code>50000</code>;</li>\r
            <li><code>--z-index-level-6</code>: <code>60000</code>;</li>\r
            <li><code>--z-index-level-7</code>: <code>70000</code>;</li>\r
            <li><code>--z-index-level-8</code>: <code>80000</code>;</li>\r
            <li><code>--z-index-level-9</code>: <code>90000</code>;</li>\r
        </ul>\r
        <LiveEditor css={css} html={<>\r
                    <div className="z-index--1">--z-index-level-1</div>\r
                    <div className="z-index--2">--z-index-level-2</div>\r
                    <div className="z-index--3">--z-index-level-3</div>\r
                    <div className="z-index--4">--z-index-level-4</div>\r
                    <div className="z-index--5">--z-index-level-5</div>\r
                    <div className="z-index--6">--z-index-level-6</div>\r
                    <div className="z-index--7">--z-index-level-7</div>\r
                    <div className="z-index--8">--z-index-level-8</div>\r
                    <div className="z-index--9">--z-index-level-9</div>\r
                </>} />\r
    </Doc>`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["ZIndex"];export{i as ZIndex,p as __namedExportsOrder,u as default};
