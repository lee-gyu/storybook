import{j as t,a as n}from"./jsx-runtime-CjohWU4o.js";import{D as r,a as s,L as i}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const _={title:"HTML Components/Tabs"},a=()=>t(r,{children:[n(s,{children:"Tabs"}),n("p",{children:"탭은 다양한 컨텐츠의 전환을 표현합니다."}),n(i,{html:t("div",{className:"tabs",children:[t("div",{className:"tabs__nav",children:[n("button",{type:"button",className:"tabs__nav-button is-active",children:"First"}),n("button",{type:"button",className:"tabs__nav-button",children:"Second"}),n("button",{type:"button",className:"tabs__nav-button",children:"Third"})]}),t("div",{className:"tabs__content",children:[n("div",{className:"tabs__panel is-active",children:"First Panel"}),n("div",{className:"tabs__panel",children:"Second Panel"}),n("div",{className:"tabs__panel",children:"Third Panel"})]})]}),code:`
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
            `}),n(s,{children:"Tabs Editing"}),n(i,{html:t("div",{className:"tabs",children:[t("div",{className:"tabs__nav",children:[t("button",{type:"button",className:"tabs__nav-button is-active",children:["First",t("span",{className:"tabs__nav-button-actions",children:[n("span",{className:"icon-button icon-button--sm",children:n("i",{className:"ir-icon ir-icon--edit"})}),n("span",{className:"icon-button icon-button--sm",children:n("i",{className:"ir-icon ir-icon--close"})})]})]}),t("button",{type:"button",className:"tabs__nav-button",children:["Second",t("span",{className:"tabs__nav-button-actions",children:[n("span",{className:"icon-button icon-button--sm",children:n("i",{className:"ir-icon ir-icon--edit"})}),n("span",{className:"icon-button icon-button--sm",children:n("i",{className:"ir-icon ir-icon--close"})})]})]}),t("button",{type:"button",className:"tabs__nav-button",children:["Third",t("span",{className:"tabs__nav-button-actions",children:[n("span",{className:"icon-button icon-button--sm",children:n("i",{className:"ir-icon ir-icon--edit"})}),n("span",{className:"icon-button icon-button--sm",children:n("i",{className:"ir-icon ir-icon--close"})})]})]}),n("button",{type:"button",className:"tabs__button-add",children:n("i",{className:"ir-icon ir-icon--add"})}),n("button",{type:"button",className:"tabs__button-all-close",children:"모든 탭 닫기"})]}),t("div",{className:"tabs__content",children:[n("div",{className:"tabs__panel is-active",children:"First Panel"}),n("div",{className:"tabs__panel",children:"Second Panel"}),n("div",{className:"tabs__panel",children:"Third Panel"})]})]})})]});var e,c,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,_ as default};
