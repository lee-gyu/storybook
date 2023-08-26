import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{D as r,a as l,L as i}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const b={title:"HTML Components/Menu"},c=()=>n(r,{children:[e(l,{children:"Menu"}),n("p",{children:["특정 액션을 통해 노출되는 레이어 스타일입니다. 화면에 노출하기 위해서는 ",e("code",{children:".is-visible"})," 옵션이 추가되어야 합니다.",e("br",{}),"메뉴의 위치는 ",e("code",{children:'style="top:100px;left:100px"'}),"과 같이 인라인 스타일을 통해 설정할 수 있습니다."]}),e(i,{fixedHeight:300,html:e("div",{className:"menu is-visible",children:n("ul",{className:"menu__list",children:[e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"})," 룰 열기"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"})," 폴더 경로"]})})]})})}),e("p",{children:e("strong",{children:"비활성화:"})}),e(i,{fixedHeight:300,html:e("div",{className:"menu is-visible",children:n("ul",{className:"menu__list",children:[e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"})," 룰 열기"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",disabled:!0,children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"})," 폴더 경로"]})})]})})}),e(l,{children:"Menu Columns"}),n("p",{children:[e("code",{children:"Utilities"}),"를 활용해 한 줄에 여러 컬럼을 표현할 수 있습니다."]}),e(i,{fixedHeight:300,html:e("div",{className:"menu is-visible",children:n("ul",{className:"menu__list grid--col-2",children:[e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"})," 룰 열기"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"})," 폴더 경로"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--information-circle-fill"})," 룰 정보"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--edit"})," 룰 정보 변경"]})})]})})}),e(l,{children:"Menu Checkbox"}),e(i,{fixedHeight:300,html:e("div",{className:"menu is-visible",children:n("ul",{className:"menu__list",children:[e("li",{className:"menu__item p--xs",children:e("div",{className:"checkbox",children:n("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"선택한 노드를 중앙에 표시"})]})})}),e("li",{className:"menu__item p--xs",children:e("div",{className:"checkbox",children:n("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"힌트 표시"})]})})}),e("li",{className:"menu__item p--xs",children:e("div",{className:"checkbox",children:n("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"천 단위 구분 기호 표시"})]})})}),e("li",{className:"menu__item p--xs",children:e("div",{className:"checkbox",children:n("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"하위룰 조회 시 동일한 룰은 하나만 표시"})]})})})]})})})]});var s,t,a;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Menu</DocTitle>\r
        <p>특정 액션을 통해 노출되는 레이어 스타일입니다. 화면에 노출하기 위해서는 <code>.is-visible</code> 옵션이 추가되어야 합니다.\r
            <br />메뉴의 위치는 <code>style=&quot;top:100px;left:100px&quot;</code>과 같이 인라인 스타일을 통해 설정할 수 있습니다.</p>\r
        <LiveEditor fixedHeight={300} html={<div className="menu is-visible">\r
                    <ul className="menu__list">\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--rule-open"></i> 룰 열기\r
                            </button>\r
                        </li>\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--rule-open"></i> 폴더 경로\r
                            </button>\r
                        </li>\r
                    </ul>\r
                </div>} />\r
        <p><strong>비활성화:</strong></p>\r
        <LiveEditor fixedHeight={300} html={<div className="menu is-visible">\r
                    <ul className="menu__list">\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--rule-open"></i> 룰 열기\r
                            </button>\r
                        </li>\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button" disabled>\r
                                <i className="menu__icon ir-icon ir-icon--rule-open"></i> 폴더 경로\r
                            </button>\r
                        </li>\r
                    </ul>\r
                </div>} />\r
        <DocTitle>Menu Columns</DocTitle>\r
        <p><code>Utilities</code>를 활용해 한 줄에 여러 컬럼을 표현할 수 있습니다.</p>\r
        <LiveEditor fixedHeight={300} html={<div className="menu is-visible">\r
                    <ul className="menu__list grid--col-2">\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--rule-open"></i> 룰 열기\r
                            </button>\r
                        </li>\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--rule-open"></i> 폴더 경로\r
                            </button>\r
                        </li>\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--information-circle-fill"></i> 룰 정보\r
                            </button>\r
                        </li>\r
                        <li className="menu__item">\r
                            <button type="button" className="menu__button">\r
                                <i className="menu__icon ir-icon ir-icon--edit"></i> 룰 정보 변경\r
                            </button>\r
                        </li>\r
                    </ul>\r
                </div>} />\r
        <DocTitle>Menu Checkbox</DocTitle>\r
        <LiveEditor fixedHeight={300} html={<div className="menu is-visible">\r
                    <ul className="menu__list">\r
                        <li className="menu__item p--xs">\r
                            <div className="checkbox">\r
                                <label className="checkbox__wrapper">\r
                                    <input type="checkbox" className="checkbox__input" />\r
                                    <span className="checkbox__text">선택한 노드를 중앙에 표시</span>\r
                                </label>\r
                            </div>\r
                        </li>\r
                        <li className="menu__item p--xs">\r
                            <div className="checkbox">\r
                                <label className="checkbox__wrapper">\r
                                    <input type="checkbox" className="checkbox__input" />\r
                                    <span className="checkbox__text">힌트 표시</span>\r
                                </label>\r
                            </div>\r
                        </li>\r
                        <li className="menu__item p--xs">\r
                            <div className="checkbox">\r
                                <label className="checkbox__wrapper">\r
                                    <input type="checkbox" className="checkbox__input" />\r
                                    <span className="checkbox__text">천 단위 구분 기호 표시</span>\r
                                </label>\r
                            </div>\r
                        </li>\r
                        <li className="menu__item p--xs">\r
                            <div className="checkbox">\r
                                <label className="checkbox__wrapper">\r
                                    <input type="checkbox" className="checkbox__input" />\r
                                    <span className="checkbox__text">하위룰 조회 시 동일한 룰은 하나만 표시</span>\r
                                </label>\r
                            </div>\r
                        </li>\r
                    </ul>\r
                </div>} />\r
    </Doc>`,...(a=(t=c.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const p=["Menu"];export{c as Menu,p as __namedExportsOrder,b as default};
//# sourceMappingURL=menu.menu.stories-d82f46f9.js.map