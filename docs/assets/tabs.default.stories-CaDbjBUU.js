import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{D as o,a as t,L as a}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const u={title:"HTML Components/Tabs"},s=()=>n.jsxs(o,{children:[n.jsx(t,{children:"Tabs"}),n.jsx("p",{children:"탭은 다양한 컨텐츠의 전환을 표현합니다."}),n.jsx(a,{html:n.jsxs("div",{className:"tabs",children:[n.jsxs("div",{className:"tabs__nav",children:[n.jsx("button",{type:"button",className:"tabs__nav-button is-active",children:"First"}),n.jsx("button",{type:"button",className:"tabs__nav-button",children:"Second"}),n.jsx("button",{type:"button",className:"tabs__nav-button",children:"Third"})]}),n.jsxs("div",{className:"tabs__content",children:[n.jsx("div",{className:"tabs__panel is-active",children:"First Panel"}),n.jsx("div",{className:"tabs__panel",children:"Second Panel"}),n.jsx("div",{className:"tabs__panel",children:"Third Panel"})]})]}),code:`
window.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('tabs__nav-button')) {
        const tabs = target.closest('.tabs');
        const panels = tabs.querySelectorAll('.tabs__panel');
        const parent = target.parentElement;
        const siblings = [...parent.children];
        const currentIndex = siblings.indexOf(target);

        siblings.forEach((tab, index) => {
            if (index === currentIndex) {
                tab.classList.add('is-active');
                panels[index].classList.add('is-active');
                return;
            }

            tab.classList.remove('is-active');
            panels[index].classList.remove('is-active');
        });
    }
});
            `}),n.jsx(t,{children:"Tabs Editing"}),n.jsx(a,{html:n.jsxs("div",{className:"tabs",children:[n.jsxs("div",{className:"tabs__nav",children:[n.jsxs("button",{type:"button",className:"tabs__nav-button is-active",children:["First",n.jsxs("span",{className:"tabs__nav-button-actions",children:[n.jsx("span",{className:"icon-button icon-button--sm",children:n.jsx("i",{className:"ir-icon ir-icon--edit"})}),n.jsx("span",{className:"icon-button icon-button--sm",children:n.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),n.jsxs("button",{type:"button",className:"tabs__nav-button",children:["Second",n.jsxs("span",{className:"tabs__nav-button-actions",children:[n.jsx("span",{className:"icon-button icon-button--sm",children:n.jsx("i",{className:"ir-icon ir-icon--edit"})}),n.jsx("span",{className:"icon-button icon-button--sm",children:n.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),n.jsxs("button",{type:"button",className:"tabs__nav-button",children:["Third",n.jsxs("span",{className:"tabs__nav-button-actions",children:[n.jsx("span",{className:"icon-button icon-button--sm",children:n.jsx("i",{className:"ir-icon ir-icon--edit"})}),n.jsx("span",{className:"icon-button icon-button--sm",children:n.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),n.jsx("button",{type:"button",className:"tabs__button-add",children:n.jsx("i",{className:"ir-icon ir-icon--add"})}),n.jsx("button",{type:"button",className:"tabs__button-all-close",children:"모든 탭 닫기"})]}),n.jsxs("div",{className:"tabs__content",children:[n.jsx("div",{className:"tabs__panel is-active",children:"First Panel"}),n.jsx("div",{className:"tabs__panel",children:"Second Panel"}),n.jsx("div",{className:"tabs__panel",children:"Third Panel"})]})]})})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,e,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Tabs</DocTitle>\r
        <p>탭은 다양한 컨텐츠의 전환을 표현합니다.</p>\r
        <LiveEditor html={<div className="tabs">\r
                    <div className="tabs__nav">\r
                        <button type="button" className="tabs__nav-button is-active">First</button>\r
                        <button type="button" className="tabs__nav-button">Second</button>\r
                        <button type="button" className="tabs__nav-button">Third</button>\r
                    </div>\r
                    <div className="tabs__content">\r
                        <div className="tabs__panel is-active">First Panel</div>\r
                        <div className="tabs__panel">Second Panel</div>\r
                        <div className="tabs__panel">Third Panel</div>\r
                    </div>\r
                </div>} code={\`
window.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('tabs__nav-button')) {
        const tabs = target.closest('.tabs');
        const panels = tabs.querySelectorAll('.tabs__panel');
        const parent = target.parentElement;
        const siblings = [...parent.children];
        const currentIndex = siblings.indexOf(target);

        siblings.forEach((tab, index) => {
            if (index === currentIndex) {
                tab.classList.add('is-active');
                panels[index].classList.add('is-active');
                return;
            }

            tab.classList.remove('is-active');
            panels[index].classList.remove('is-active');
        });
    }
});
            \`} />\r
        <DocTitle>Tabs Editing</DocTitle>\r
        <LiveEditor html={<div className="tabs">\r
                    <div className="tabs__nav">\r
                        <button type="button" className="tabs__nav-button is-active">\r
            First\r
                            <span className="tabs__nav-button-actions">\r
                                <span className="icon-button icon-button--sm">\r
                                    <i className="ir-icon ir-icon--edit"></i>\r
                                </span>\r
                                <span className="icon-button icon-button--sm">\r
                                    <i className="ir-icon ir-icon--close"></i>\r
                                </span>\r
                            </span>\r
                        </button>\r
                        <button type="button" className="tabs__nav-button">\r
            Second\r
                            <span className="tabs__nav-button-actions">\r
                                <span className="icon-button icon-button--sm">\r
                                    <i className="ir-icon ir-icon--edit"></i>\r
                                </span>\r
                                <span className="icon-button icon-button--sm">\r
                                    <i className="ir-icon ir-icon--close"></i>\r
                                </span>\r
                            </span>\r
                        </button>\r
                        <button type="button" className="tabs__nav-button">\r
            Third\r
                            <span className="tabs__nav-button-actions">\r
                                <span className="icon-button icon-button--sm">\r
                                    <i className="ir-icon ir-icon--edit"></i>\r
                                </span>\r
                                <span className="icon-button icon-button--sm">\r
                                    <i className="ir-icon ir-icon--close"></i>\r
                                </span>\r
                            </span>\r
                        </button>\r
                        <button type="button" className="tabs__button-add">\r
                            <i className="ir-icon ir-icon--add"></i>\r
                        </button>\r
                        <button type="button" className="tabs__button-all-close">모든 탭 닫기</button>\r
                    </div>\r
                    <div className="tabs__content">\r
                        <div className="tabs__panel is-active">First Panel</div>\r
                        <div className="tabs__panel">Second Panel</div>\r
                        <div className="tabs__panel">Third Panel</div>\r
                    </div>\r
                </div>} />\r
    </Doc>`,...(c=(e=s.parameters)==null?void 0:e.docs)==null?void 0:c.source}}};const m=["Default"];export{s as Default,m as __namedExportsOrder,u as default};
