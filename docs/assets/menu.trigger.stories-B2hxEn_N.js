import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s,c,l;e((()=>{i(),o=a(),s={title:`HTML/Menu`},c=()=>(0,o.jsxs)(n,{children:[(0,o.jsx)(t,{children:`Menu Trigger`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`code`,{children:`fixed`}),`인 메뉴를 별도의 계산없이 트리거가 되는 버튼 옆에 노출시키고 싶다면 `,(0,o.jsx)(`code`,{children:`.menu-container`}),`를 활용해 사용할 수 있습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{children:`.menu-container`}),`안의 메뉴는 `,(0,o.jsx)(`code`,{children:`absolute`}),`로 변환됩니다.`]}),(0,o.jsx)(r,{fixedHeight:300,html:(0,o.jsxs)(`div`,{className:`menu-container`,children:[(0,o.jsxs)(`button`,{type:`button`,className:`button button--outline`,children:[(0,o.jsx)(`i`,{className:`button__icon-prefix ir-icon ir-icon--version-history`}),` 버전 관리`]}),(0,o.jsx)(`div`,{className:`menu menu--top-right`,children:(0,o.jsxs)(`ul`,{className:`menu__list`,children:[(0,o.jsx)(`li`,{className:`menu__item`,children:(0,o.jsxs)(`button`,{type:`button`,className:`menu__button`,children:[(0,o.jsx)(`i`,{className:`menu__icon ir-icon ir-icon--add`}),` 버전 추가`]})}),(0,o.jsx)(`li`,{className:`menu__item`,children:(0,o.jsxs)(`button`,{type:`button`,className:`menu__button`,children:[(0,o.jsx)(`i`,{className:`menu__icon ir-icon ir-icon--edit`}),` 버전 변경`]})})]})})]}),code:`
document.querySelector('.button--outline').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
        `})]}),c.__docgenInfo={description:``,methods:[],displayName:`Trigger`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Doc>
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
    </Doc>`,...c.parameters?.docs?.source}}},l=[`Trigger`]}))();export{c as Trigger,l as __namedExportsOrder,s as default};