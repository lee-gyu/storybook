import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s,c,l;e((()=>{i(),o=a(),s={title:`HTML/Collapse`},c=()=>(0,o.jsxs)(n,{children:[(0,o.jsx)(t,{children:`Collapse`}),(0,o.jsx)(r,{fixedHeight:350,html:(0,o.jsx)(`div`,{className:`collapse`,children:(0,o.jsxs)(`ul`,{className:`collapse__wrapper`,children:[(0,o.jsxs)(`li`,{className:`collapse__item`,children:[(0,o.jsx)(`div`,{className:`collapse__header`,children:(0,o.jsxs)(`button`,{className:`collapse__button`,children:[(0,o.jsx)(`span`,{children:`룰 정보`}),(0,o.jsx)(`i`,{className:`ir-icon ir-icon--chevron-down`})]})}),(0,o.jsx)(`div`,{className:`collapse__content`,children:(0,o.jsx)(`div`,{className:`collapse__content-wrapper`,children:(0,o.jsx)(`span`,{children:`룰 정보 컨텐츠`})})})]}),(0,o.jsxs)(`li`,{className:`collapse__item`,children:[(0,o.jsx)(`div`,{className:`collapse__header`,children:(0,o.jsxs)(`button`,{className:`collapse__button`,children:[(0,o.jsx)(`span`,{children:`룰 정보`}),(0,o.jsx)(`i`,{className:`ir-icon ir-icon--chevron-down`})]})}),(0,o.jsx)(`div`,{className:`collapse__content`,children:(0,o.jsx)(`div`,{className:`collapse__content-wrapper`,children:(0,o.jsx)(`span`,{children:`룰 정보 컨텐츠`})})})]})]})}),code:`
window.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('collapse__button')) {
        const content = target.closest('.collapse__item').querySelector('.collapse__content');

        if (content.classList.contains('is-animation')) {
            return;
        }

        if (target.classList.contains('is-active') === false) {
            target.classList.add('is-active');
            content.classList.add('is-animation', 'is-expanded');
            content.style.height = content.scrollHeight + 'px';

            content.addEventListener('transitionend', (e) => {
                content.classList.remove('is-animation');
                content.removeAttribute('style');
            }, {
                once: true
            });
        } else {
            target.classList.remove('is-active');
            content.style.height = content.scrollHeight + 'px';
            void content.offsetWidth;
            content.classList.add('is-animation');
            content.style.height = 0;

            content.addEventListener('transitionend', (e) => {
                content.classList.remove('is-animation' , 'is-expanded');
                content.removeAttribute('style');
            }, {
                once: true
            });
        }
    }
});
            `})]}),c.__docgenInfo={description:``,methods:[],displayName:`Collapse`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Doc>
            <DocTitle>Collapse</DocTitle>
            <LiveEditor fixedHeight={350} html={<div className="collapse">
                        <ul className="collapse__wrapper">
                            <li className="collapse__item">
                                <div className="collapse__header">
                                    <button className="collapse__button">
                                        <span>룰 정보</span>
                                        <i className="ir-icon ir-icon--chevron-down"></i>
                                    </button>
                                </div>
                                <div className="collapse__content">
                                    <div className="collapse__content-wrapper">
                                        <span>룰 정보 컨텐츠</span>
                                    </div>
                                </div>
                            </li>
                            <li className="collapse__item">
                                <div className="collapse__header">
                                    <button className="collapse__button">
                                        <span>룰 정보</span>
                                        <i className="ir-icon ir-icon--chevron-down"></i>
                                    </button>
                                </div>
                                <div className="collapse__content">
                                    <div className="collapse__content-wrapper">
                                        <span>룰 정보 컨텐츠</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>} code={\`
window.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('collapse__button')) {
        const content = target.closest('.collapse__item').querySelector('.collapse__content');

        if (content.classList.contains('is-animation')) {
            return;
        }

        if (target.classList.contains('is-active') === false) {
            target.classList.add('is-active');
            content.classList.add('is-animation', 'is-expanded');
            content.style.height = content.scrollHeight + 'px';

            content.addEventListener('transitionend', (e) => {
                content.classList.remove('is-animation');
                content.removeAttribute('style');
            }, {
                once: true
            });
        } else {
            target.classList.remove('is-active');
            content.style.height = content.scrollHeight + 'px';
            void content.offsetWidth;
            content.classList.add('is-animation');
            content.style.height = 0;

            content.addEventListener('transitionend', (e) => {
                content.classList.remove('is-animation' , 'is-expanded');
                content.removeAttribute('style');
            }, {
                once: true
            });
        }
    }
});
            \`} />
        </Doc>;
}`,...c.parameters?.docs?.source}}},l=[`Collapse`]}))();export{c as Collapse,l as __namedExportsOrder,s as default};