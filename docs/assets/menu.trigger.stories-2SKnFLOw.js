import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as n,L as o}from"./version-tag-u3GxDBUd.js";import"./iframe-9F64GLpK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F4J0AwFl.js";const m={title:"HTML/Menu"},i=()=>e.jsxs(t,{children:[e.jsx(n,{children:"Menu Trigger"}),e.jsxs("p",{children:[e.jsx("code",{children:"fixed"}),"인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 ",e.jsx("code",{children:".menu-container"}),"를 활용해 사용할 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:".menu-container"}),"안의 메뉴는 ",e.jsx("code",{children:"absolute"}),"로 변환됩니다."]}),e.jsx(o,{fixedHeight:300,html:e.jsxs("div",{className:"menu-container",children:[e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),e.jsx("div",{className:"menu menu--top-right",children:e.jsxs("ul",{className:"menu__list",children:[e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]}),code:`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        `})]});i.__docgenInfo={description:"",methods:[],displayName:"Trigger"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Doc>
        <DocTitle>Menu Trigger</DocTitle>
        <p><code>fixed</code>인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 <code>.menu-container</code>를 활용해 사용할 수 있습니다.<br />
            <code>.menu-container</code>안의 메뉴는 <code>absolute</code>로 변환됩니다.</p>
        <LiveEditor fixedHeight={300} html={<div className="menu-container">
                    <button type="button" className="button button--outline">
                        <i className="button__icon-prefix ir-icon ir-icon--version-history"></i> 버전 관리
                    </button>
                    <div className="menu menu--top-right">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <button type="button" className="menu__button">
                                    <i className="menu__icon ir-icon ir-icon--add"></i> 버전 추가
                                </button>
                            </li>
                            <li className="menu__item">
                                <button type="button" className="menu__button">
                                    <i className="menu__icon ir-icon ir-icon--edit"></i> 버전 변경
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>} code={\`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        \`} />
    </Doc>`,...i.parameters?.docs?.source}}};const l=["Trigger"];export{i as Trigger,l as __namedExportsOrder,m as default};
