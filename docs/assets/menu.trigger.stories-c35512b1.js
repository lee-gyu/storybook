import{j as i,a as e}from"./jsx-runtime-e43ccb36.js";import{D as c,a as s,L as a}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const _={title:"HTML Components/Menu"},t=()=>i(c,{children:[e(s,{children:"Menu Trigger"}),i("p",{children:[e("code",{children:"fixed"}),"인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 ",e("code",{children:".menu-container"}),"를 활용해 사용할 수 있습니다.",e("br",{}),e("code",{children:".menu-container"}),"안의 메뉴는 ",e("code",{children:"absolute"}),"로 변환됩니다."]}),e(a,{fixedHeight:300,html:i("div",{className:"menu-container",children:[i("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),e("div",{className:"menu menu--top-right",children:i("ul",{className:"menu__list",children:[e("li",{className:"menu__item",children:i("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),e("li",{className:"menu__item",children:i("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]}),code:`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        `})]});var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const b=["Trigger"];export{t as Trigger,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=menu.trigger.stories-c35512b1.js.map
