import{j as a,a as t}from"./jsx-runtime-d057ca55.js";import{D as r,a as n,L as i}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const u={title:"HTML Components/Tabs"},s=()=>a(r,{children:[t(n,{children:"Tabs"}),t("p",{children:"탭은 다양한 컨텐츠의 전환을 표현합니다."}),t(i,{html:a("div",{className:"tabs",children:[a("div",{className:"tabs__nav",children:[t("button",{type:"button",className:"tabs__nav-button is-active",children:"First"}),t("button",{type:"button",className:"tabs__nav-button",children:"Second"}),t("button",{type:"button",className:"tabs__nav-button",children:"Third"})]}),a("div",{className:"tabs__content",children:[t("div",{className:"tabs__panel is-active",children:"First Panel"}),t("div",{className:"tabs__panel",children:"Second Panel"}),t("div",{className:"tabs__panel",children:"Third Panel"})]})]}),code:`
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
            `}),t(n,{children:"Tabs Editing"}),t(i,{html:a("div",{className:"tabs",children:[a("div",{className:"tabs__nav",children:[a("button",{type:"button",className:"tabs__nav-button is-active",children:["First",a("span",{className:"tabs__nav-button-actions",children:[t("span",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--edit"})}),t("span",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--close"})})]})]}),a("button",{type:"button",className:"tabs__nav-button",children:["Second",a("span",{className:"tabs__nav-button-actions",children:[t("span",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--edit"})}),t("span",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--close"})})]})]}),a("button",{type:"button",className:"tabs__nav-button",children:["Third",a("span",{className:"tabs__nav-button-actions",children:[t("span",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--edit"})}),t("span",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--close"})})]})]}),t("button",{type:"button",className:"tabs__button-add",children:t("i",{className:"ir-icon ir-icon--add"})}),t("button",{type:"button",className:"tabs__button-all-close",children:"모든 탭 닫기"})]}),a("div",{className:"tabs__content",children:[t("div",{className:"tabs__panel is-active",children:"First Panel"}),t("div",{className:"tabs__panel",children:"Second Panel"}),t("div",{className:"tabs__panel",children:"Third Panel"})]})]})})]});var e,c,o;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,u as default};
//# sourceMappingURL=tabs.default.stories-f38fc9df.js.map
