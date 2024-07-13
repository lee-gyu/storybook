import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{D as c,a as s,L as t}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const a={title:"HTML Components/Divider"},e=()=>i.jsxs(c,{children:[i.jsx(s,{children:"Divider Sticky"}),i.jsxs("p",{children:["sticky를 사용하면 ",i.jsx("code",{children:"margin"}),"를 음수값으로 지정하여 여백이 존재하는 부모 컨텐츠에 맞게 설정할 수 있습니다."]}),i.jsx("p",{children:i.jsx("strong",{children:"사이즈"})}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"xxs"}),": -0.4rem"]}),i.jsxs("li",{children:[i.jsx("code",{children:"xs"}),": -0.6rem"]}),i.jsxs("li",{children:[i.jsx("code",{children:"sm"}),": -0.8rem"]}),i.jsxs("li",{children:[i.jsx("code",{children:"md"}),": -1rem"]}),i.jsxs("li",{children:[i.jsx("code",{children:"lg"}),": -1.2rem"]}),i.jsxs("li",{children:[i.jsx("code",{children:"xl"}),": -1.6rem"]}),i.jsxs("li",{children:[i.jsx("code",{children:"xxl"}),": -2rem"]})]}),i.jsx(t,{css:`
#live_editor_wrapper > div {
    margin-bottom: 20px;
    background-color: #1e1e1e;
    border: 20px solid #1e1e1e;
}

#live_editor_wrapper > div:last-child {
    margin-bottom: 0;
}

.divider {
    position: relative;
}

.divider::before,
.divider::after {
    position: absolute;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    color: var(--background-color);
    background-color: var(--background-color);
}

.divider::after {
    right: 0;
    content: "";
}

.divider::before {
    left: 0;
    font-size: 10px;
    line-height: 1px;
    text-indent: 30px;
    content: "normal";
}

.divider--sticky-xxs::before {
    text-indent: calc(var(--spacing-xxs) + 30px);
    content: "xxs";
}

.divider--sticky-xs::before {
    text-indent: calc(var(--spacing-xs) + 30px);
    content: "xs";
}

.divider--sticky-sm::before {
    text-indent: calc(var(--spacing-sm) + 30px);
    content: "sm";
}

.divider--sticky-md::before {
    text-indent: calc(var(--spacing-md) + 30px);
    content: "md";
}

.divider--sticky-lg::before {
    text-indent: calc(var(--spacing-lg) + 30px);
    content: "lg";
}

.divider--sticky-xl::before {
    text-indent: calc(var(--spacing-xl) + 30px);
    content: "xl";
}

.divider--sticky-xxl::before {
    text-indent: calc(var(--spacing-xxl) + 30px);
    content: "xxl";
}`,html:i.jsxs(i.Fragment,{children:[i.jsx("div",{children:i.jsx("div",{className:"divider"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-xxs"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-xs"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-sm"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-md"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-lg"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-xl"})}),i.jsx("div",{children:i.jsx("div",{className:"divider divider--sticky-xxl"})})]})})]});e.__docgenInfo={description:"",methods:[],displayName:"Sticky"};var d,n,r;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Divider Sticky</DocTitle>\r
            <p>sticky를 사용하면 <code>margin</code>를 음수값으로 지정하여 여백이 존재하는 부모 컨텐츠에 맞게 설정할 수 있습니다.</p>\r
            <p><strong>사이즈</strong></p>\r
            <ul>\r
                <li><code>xxs</code>: -0.4rem</li>\r
                <li><code>xs</code>: -0.6rem</li>\r
                <li><code>sm</code>: -0.8rem</li>\r
                <li><code>md</code>: -1rem</li>\r
                <li><code>lg</code>: -1.2rem</li>\r
                <li><code>xl</code>: -1.6rem</li>\r
                <li><code>xxl</code>: -2rem</li>\r
            </ul>\r
            <LiveEditor css={\`
#live_editor_wrapper > div {
    margin-bottom: 20px;
    background-color: #1e1e1e;
    border: 20px solid #1e1e1e;
}

#live_editor_wrapper > div:last-child {
    margin-bottom: 0;
}

.divider {
    position: relative;
}

.divider::before,
.divider::after {
    position: absolute;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    color: var(--background-color);
    background-color: var(--background-color);
}

.divider::after {
    right: 0;
    content: "";
}

.divider::before {
    left: 0;
    font-size: 10px;
    line-height: 1px;
    text-indent: 30px;
    content: "normal";
}

.divider--sticky-xxs::before {
    text-indent: calc(var(--spacing-xxs) + 30px);
    content: "xxs";
}

.divider--sticky-xs::before {
    text-indent: calc(var(--spacing-xs) + 30px);
    content: "xs";
}

.divider--sticky-sm::before {
    text-indent: calc(var(--spacing-sm) + 30px);
    content: "sm";
}

.divider--sticky-md::before {
    text-indent: calc(var(--spacing-md) + 30px);
    content: "md";
}

.divider--sticky-lg::before {
    text-indent: calc(var(--spacing-lg) + 30px);
    content: "lg";
}

.divider--sticky-xl::before {
    text-indent: calc(var(--spacing-xl) + 30px);
    content: "xl";
}

.divider--sticky-xxl::before {
    text-indent: calc(var(--spacing-xxl) + 30px);
    content: "xxl";
}\`} html={<>\r
                    <div>\r
                        <div className="divider"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-xxs"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-xs"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-sm"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-md"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-lg"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-xl"></div>\r
                    </div>\r
                    <div>\r
                        <div className="divider divider--sticky-xxl"></div>\r
                    </div>\r
                </>} />\r
        </Doc>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const m=["Sticky"];export{e as Sticky,m as __namedExportsOrder,a as default};
