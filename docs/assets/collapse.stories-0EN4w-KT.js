import{j as n,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as c,a as o,L as l}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const _={title:"HTML Components/Collapse"},t=()=>n(c,{children:[e(o,{children:"Collapse"}),e(l,{fixedHeight:350,html:e("div",{className:"collapse",children:n("ul",{className:"collapse__wrapper",children:[n("li",{className:"collapse__item",children:[e("div",{className:"collapse__header",children:n("button",{className:"collapse__button",children:[e("span",{children:"룰 정보"}),e("i",{className:"ir-icon ir-icon--chevron-down"})]})}),e("div",{className:"collapse__content",children:e("div",{className:"collapse__content-wrapper",children:e("span",{children:"룰 정보 컨텐츠"})})})]}),n("li",{className:"collapse__item",children:[e("div",{className:"collapse__header",children:n("button",{className:"collapse__button",children:[e("span",{children:"룰 정보"}),e("i",{className:"ir-icon ir-icon--chevron-down"})]})}),e("div",{className:"collapse__content",children:e("div",{className:"collapse__content-wrapper",children:e("span",{children:"룰 정보 컨텐츠"})})})]})]})}),code:`
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
            `})]});var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const u=["Collapse"];export{t as Collapse,u as __namedExportsOrder,_ as default};
