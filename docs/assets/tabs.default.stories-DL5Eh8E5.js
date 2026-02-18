import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as i,a,L as n}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const r={title:"HTML/Tabs"},t=()=>s.jsxs(i,{children:[s.jsx(a,{children:"Tabs"}),s.jsx("p",{children:"탭은 다양한 컨텐츠의 전환을 표현합니다."}),s.jsx(n,{html:s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:"tabs__nav",children:[s.jsx("button",{type:"button",className:"tabs__nav-button is-active",children:"First"}),s.jsx("button",{type:"button",className:"tabs__nav-button",children:"Second"}),s.jsx("button",{type:"button",className:"tabs__nav-button",children:"Third"})]}),s.jsxs("div",{className:"tabs__content",children:[s.jsx("div",{className:"tabs__panel is-active",children:"First Panel"}),s.jsx("div",{className:"tabs__panel",children:"Second Panel"}),s.jsx("div",{className:"tabs__panel",children:"Third Panel"})]})]}),code:`
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
            `}),s.jsx(a,{children:"Tabs Editing"}),s.jsx(n,{html:s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:"tabs__nav",children:[s.jsxs("button",{type:"button",className:"tabs__nav-button is-active",children:["First",s.jsxs("span",{className:"tabs__nav-button-actions",children:[s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--edit"})}),s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsxs("button",{type:"button",className:"tabs__nav-button",children:["Second",s.jsxs("span",{className:"tabs__nav-button-actions",children:[s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--edit"})}),s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsxs("button",{type:"button",className:"tabs__nav-button",children:["Third",s.jsxs("span",{className:"tabs__nav-button-actions",children:[s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--edit"})}),s.jsx("span",{className:"icon-button icon-button--sm",children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsx("button",{type:"button",className:"tabs__button-add",children:s.jsx("i",{className:"ir-icon ir-icon--add"})}),s.jsx("button",{type:"button",className:"tabs__button-all-close",children:"모든 탭 닫기"})]}),s.jsxs("div",{className:"tabs__content",children:[s.jsx("div",{className:"tabs__panel is-active",children:"First Panel"}),s.jsx("div",{className:"tabs__panel",children:"Second Panel"}),s.jsx("div",{className:"tabs__panel",children:"Third Panel"})]})]})})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Tabs</DocTitle>
        <p>탭은 다양한 컨텐츠의 전환을 표현합니다.</p>
        <LiveEditor html={<div className="tabs">
                    <div className="tabs__nav">
                        <button type="button" className="tabs__nav-button is-active">First</button>
                        <button type="button" className="tabs__nav-button">Second</button>
                        <button type="button" className="tabs__nav-button">Third</button>
                    </div>
                    <div className="tabs__content">
                        <div className="tabs__panel is-active">First Panel</div>
                        <div className="tabs__panel">Second Panel</div>
                        <div className="tabs__panel">Third Panel</div>
                    </div>
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
            \`} />
        <DocTitle>Tabs Editing</DocTitle>
        <LiveEditor html={<div className="tabs">
                    <div className="tabs__nav">
                        <button type="button" className="tabs__nav-button is-active">
                            First
                            <span className="tabs__nav-button-actions">
                                <span className="icon-button icon-button--sm">
                                    <i className="ir-icon ir-icon--edit"></i>
                                </span>
                                <span className="icon-button icon-button--sm">
                                    <i className="ir-icon ir-icon--close"></i>
                                </span>
                            </span>
                        </button>
                        <button type="button" className="tabs__nav-button">
                            Second
                            <span className="tabs__nav-button-actions">
                                <span className="icon-button icon-button--sm">
                                    <i className="ir-icon ir-icon--edit"></i>
                                </span>
                                <span className="icon-button icon-button--sm">
                                    <i className="ir-icon ir-icon--close"></i>
                                </span>
                            </span>
                        </button>
                        <button type="button" className="tabs__nav-button">
                            Third
                            <span className="tabs__nav-button-actions">
                                <span className="icon-button icon-button--sm">
                                    <i className="ir-icon ir-icon--edit"></i>
                                </span>
                                <span className="icon-button icon-button--sm">
                                    <i className="ir-icon ir-icon--close"></i>
                                </span>
                            </span>
                        </button>
                        <button type="button" className="tabs__button-add">
                            <i className="ir-icon ir-icon--add"></i>
                        </button>
                        <button type="button" className="tabs__button-all-close">모든 탭 닫기</button>
                    </div>
                    <div className="tabs__content">
                        <div className="tabs__panel is-active">First Panel</div>
                        <div className="tabs__panel">Second Panel</div>
                        <div className="tabs__panel">Third Panel</div>
                    </div>
                </div>} />
    </Doc>`,...t.parameters?.docs?.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,r as default};
