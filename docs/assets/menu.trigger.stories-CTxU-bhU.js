import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as o,a as s,L as r}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const d={title:"HTML Components/Menu"},n=()=>e.jsxs(o,{children:[e.jsx(s,{children:"Menu Trigger"}),e.jsxs("p",{children:[e.jsx("code",{children:"fixed"}),"인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 ",e.jsx("code",{children:".menu-container"}),"를 활용해 사용할 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:".menu-container"}),"안의 메뉴는 ",e.jsx("code",{children:"absolute"}),"로 변환됩니다."]}),e.jsx(r,{fixedHeight:300,html:e.jsxs("div",{className:"menu-container",children:[e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),e.jsx("div",{className:"menu menu--top-right",children:e.jsxs("ul",{className:"menu__list",children:[e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]}),code:`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        `})]});n.__docgenInfo={description:"",methods:[],displayName:"Trigger"};var u,i,t;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(t=(i=n.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const C=["Trigger"];export{n as Trigger,C as __namedExportsOrder,d as default};
