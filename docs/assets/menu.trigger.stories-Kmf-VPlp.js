import{j as n,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as r,a as c,L as s}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const C={title:"HTML Components/Menu"},u=()=>n(r,{children:[e(c,{children:"Menu Trigger"}),n("p",{children:[e("code",{children:"fixed"}),"인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 ",e("code",{children:".menu-container"}),"를 활용해 사용할 수 있습니다.",e("br",{}),e("code",{children:".menu-container"}),"안의 메뉴는 ",e("code",{children:"absolute"}),"로 변환됩니다."]}),e(s,{fixedHeight:300,html:n("div",{className:"menu-container",children:[n("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),e("div",{className:"menu menu--top-right",children:n("ul",{className:"menu__list",children:[e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]}),code:`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        `})]});var i,t,o;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Menu Trigger</DocTitle>\r
        <p><code>fixed</code>인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 <code>.menu-container</code>를 활용해 사용할 수 있습니다.<br />\r
            <code>.menu-container</code>안의 메뉴는 <code>absolute</code>로 변환됩니다.</p>\r
        <LiveEditor fixedHeight={300} html={<div className="menu-container">\r
                    <button type="button" className="button button--outline">\r
                        <i className="button__icon-prefix ir-icon ir-icon--version-history"></i> 버전 관리\r
                    </button>\r
                    <div className="menu menu--top-right">\r
                        <ul className="menu__list">\r
                            <li className="menu__item">\r
                                <button type="button" className="menu__button">\r
                                    <i className="menu__icon ir-icon ir-icon--add"></i> 버전 추가\r
                                </button>\r
                            </li>\r
                            <li className="menu__item">\r
                                <button type="button" className="menu__button">\r
                                    <i className="menu__icon ir-icon ir-icon--edit"></i> 버전 변경\r
                                </button>\r
                            </li>\r
                        </ul>\r
                    </div>\r
                </div>} code={\`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        \`} />\r
    </Doc>`,...(o=(t=u.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const _=["Trigger"];export{u as Trigger,_ as __namedExportsOrder,C as default};
