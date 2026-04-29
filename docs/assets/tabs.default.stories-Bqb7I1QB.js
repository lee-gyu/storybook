import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s,c,l;e((()=>{i(),o=a(),s={title:`HTML/Tabs`},c=()=>(0,o.jsxs)(n,{children:[(0,o.jsx)(t,{children:`Tabs`}),(0,o.jsx)(`p`,{children:`탭은 다양한 컨텐츠의 전환을 표현합니다.`}),(0,o.jsx)(r,{html:(0,o.jsxs)(`div`,{className:`tabs`,children:[(0,o.jsxs)(`div`,{className:`tabs__nav`,children:[(0,o.jsx)(`button`,{type:`button`,className:`tabs__nav-button is-active`,children:`First`}),(0,o.jsx)(`button`,{type:`button`,className:`tabs__nav-button`,children:`Second`}),(0,o.jsx)(`button`,{type:`button`,className:`tabs__nav-button`,children:`Third`})]}),(0,o.jsxs)(`div`,{className:`tabs__content`,children:[(0,o.jsx)(`div`,{className:`tabs__panel is-active`,children:`First Panel`}),(0,o.jsx)(`div`,{className:`tabs__panel`,children:`Second Panel`}),(0,o.jsx)(`div`,{className:`tabs__panel`,children:`Third Panel`})]})]}),code:`
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
            `}),(0,o.jsx)(t,{children:`Tabs Editing`}),(0,o.jsx)(r,{html:(0,o.jsxs)(`div`,{className:`tabs`,children:[(0,o.jsxs)(`div`,{className:`tabs__nav`,children:[(0,o.jsxs)(`button`,{type:`button`,className:`tabs__nav-button is-active`,children:[`First`,(0,o.jsxs)(`span`,{className:`tabs__nav-button-actions`,children:[(0,o.jsx)(`span`,{className:`icon-button icon-button--sm`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--edit`})}),(0,o.jsx)(`span`,{className:`icon-button icon-button--sm`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--close`})})]})]}),(0,o.jsxs)(`button`,{type:`button`,className:`tabs__nav-button`,children:[`Second`,(0,o.jsxs)(`span`,{className:`tabs__nav-button-actions`,children:[(0,o.jsx)(`span`,{className:`icon-button icon-button--sm`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--edit`})}),(0,o.jsx)(`span`,{className:`icon-button icon-button--sm`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--close`})})]})]}),(0,o.jsxs)(`button`,{type:`button`,className:`tabs__nav-button`,children:[`Third`,(0,o.jsxs)(`span`,{className:`tabs__nav-button-actions`,children:[(0,o.jsx)(`span`,{className:`icon-button icon-button--sm`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--edit`})}),(0,o.jsx)(`span`,{className:`icon-button icon-button--sm`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--close`})})]})]}),(0,o.jsx)(`button`,{type:`button`,className:`tabs__button-add`,children:(0,o.jsx)(`i`,{className:`ir-icon ir-icon--add`})}),(0,o.jsx)(`button`,{type:`button`,className:`tabs__button-all-close`,children:`모든 탭 닫기`})]}),(0,o.jsxs)(`div`,{className:`tabs__content`,children:[(0,o.jsx)(`div`,{className:`tabs__panel is-active`,children:`First Panel`}),(0,o.jsx)(`div`,{className:`tabs__panel`,children:`Second Panel`}),(0,o.jsx)(`div`,{className:`tabs__panel`,children:`Third Panel`})]})]})})]}),c.__docgenInfo={description:``,methods:[],displayName:`Default`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Doc>
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
    </Doc>`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};