import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s,a as n,L as a}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const d={title:"HTML Components/Collapse"},t=()=>e.jsxs(s,{children:[e.jsx(n,{children:"Collapse"}),e.jsx(a,{fixedHeight:350,html:e.jsx("div",{className:"collapse",children:e.jsxs("ul",{className:"collapse__wrapper",children:[e.jsxs("li",{className:"collapse__item",children:[e.jsx("div",{className:"collapse__header",children:e.jsxs("button",{className:"collapse__button",children:[e.jsx("span",{children:"룰 정보"}),e.jsx("i",{className:"ir-icon ir-icon--chevron-down"})]})}),e.jsx("div",{className:"collapse__content",children:e.jsx("div",{className:"collapse__content-wrapper",children:e.jsx("span",{children:"룰 정보 컨텐츠"})})})]}),e.jsxs("li",{className:"collapse__item",children:[e.jsx("div",{className:"collapse__header",children:e.jsxs("button",{className:"collapse__button",children:[e.jsx("span",{children:"룰 정보"}),e.jsx("i",{className:"ir-icon ir-icon--chevron-down"})]})}),e.jsx("div",{className:"collapse__content",children:e.jsx("div",{className:"collapse__content-wrapper",children:e.jsx("span",{children:"룰 정보 컨텐츠"})})})]})]})}),code:`
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
            `})]});t.__docgenInfo={description:"",methods:[],displayName:"Collapse"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Collapse</DocTitle>\r
            <LiveEditor fixedHeight={350} html={<div className="collapse">\r
                        <ul className="collapse__wrapper">\r
                            <li className="collapse__item">\r
                                <div className="collapse__header">\r
                                    <button className="collapse__button">\r
                                        <span>룰 정보</span>\r
                                        <i className="ir-icon ir-icon--chevron-down"></i>\r
                                    </button>\r
                                </div>\r
                                <div className="collapse__content">\r
                                    <div className="collapse__content-wrapper">\r
                                        <span>룰 정보 컨텐츠</span>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li className="collapse__item">\r
                                <div className="collapse__header">\r
                                    <button className="collapse__button">\r
                                        <span>룰 정보</span>\r
                                        <i className="ir-icon ir-icon--chevron-down"></i>\r
                                    </button>\r
                                </div>\r
                                <div className="collapse__content">\r
                                    <div className="collapse__content-wrapper">\r
                                        <span>룰 정보 컨텐츠</span>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ul>\r
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
            \`} />\r
        </Doc>;
}`,...t.parameters?.docs?.source}}};const p=["Collapse"];export{t as Collapse,p as __namedExportsOrder,d as default};
