import{j as s}from"./jsx-runtime-DEdD30eg.js";import{D as o,a,L as n}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const d={title:"HTML Components/Tabs"},t=()=>s.jsxs(o,{children:[s.jsx(a,{children:"Tabs"}),s.jsx("p",{children:"탭은 다양한 컨텐츠의 전환을 표현합니다."}),s.jsx(n,{html:s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:"tabs__nav",children:[s.jsx("button",{type:"button",className:"tabs__nav-button is-active",children:"First"}),s.jsx("button",{type:"button",className:"tabs__nav-button",children:"Second"}),s.jsx("button",{type:"button",className:"tabs__nav-button",children:"Third"})]}),s.jsxs("div",{className:"tabs__content",children:[s.jsx("div",{className:"tabs__panel is-active",children:"First Panel"}),s.jsx("div",{className:"tabs__panel",children:"Second Panel"}),s.jsx("div",{className:"tabs__panel",children:"Third Panel"})]})]}),code:`
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
            `}),s.jsx(a,{children:"Tabs Editing"}),s.jsx(n,{html:s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:"tabs__nav",children:[s.jsxs("button",{type:"button",className:"tabs__nav-button is-active",children:["First",s.jsxs("span",{className:"tabs__nav-button-actions",children:[s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--edit"})}),s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsxs("button",{type:"button",className:"tabs__nav-button",children:["Second",s.jsxs("span",{className:"tabs__nav-button-actions",children:[s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--edit"})}),s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsxs("button",{type:"button",className:"tabs__nav-button",children:["Third",s.jsxs("span",{className:"tabs__nav-button-actions",children:[s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--edit"})}),s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsx("button",{type:"button",className:"tabs__button-add",children:s.jsx("i",{className:"ir-icon ir-icon--add"})}),s.jsx("button",{type:"button",className:"tabs__button-all-close",children:"모든 탭 닫기"})]}),s.jsxs("div",{className:"tabs__content",children:[s.jsx("div",{className:"tabs__panel is-active",children:"First Panel"}),s.jsx("div",{className:"tabs__panel",children:"Second Panel"}),s.jsx("div",{className:"tabs__panel",children:"Third Panel"})]})]})})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,i,c;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,d as default};
