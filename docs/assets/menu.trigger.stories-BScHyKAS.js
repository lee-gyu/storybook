import{j as e}from"./jsx-runtime-Y5Ju2SGo.js";import{D as s,a as r,L as c}from"./version-tag-DunVkkeT.js";import"./index-eCxJ45ll.js";const m={title:"HTML Components/Menu"},i=()=>e.jsxs(s,{children:[e.jsx(r,{children:"Menu Trigger"}),e.jsxs("p",{children:[e.jsx("code",{children:"fixed"}),"인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 ",e.jsx("code",{children:".menu-container"}),"를 활용해 사용할 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:".menu-container"}),"안의 메뉴는 ",e.jsx("code",{children:"absolute"}),"로 변환됩니다."]}),e.jsx(c,{fixedHeight:300,html:e.jsxs("div",{className:"menu-container",children:[e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),e.jsx("div",{className:"menu menu--top-right",children:e.jsxs("ul",{className:"menu__list",children:[e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]}),code:`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        `})]});i.__docgenInfo={description:"",methods:[],displayName:"Trigger"};var t,n,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(o=(n=i.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const d=["Trigger"];export{i as Trigger,d as __namedExportsOrder,m as default};
