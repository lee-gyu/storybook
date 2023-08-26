import{j as e,a as n}from"./jsx-runtime-e43ccb36.js";import{r as c}from"./index-1b03fe98.js";import"./timePicker.elements-3c8a0aec.js";import{I as m}from"./select-35a4c028.js";import{A as d}from"./app-35831e09.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-d6235da7.js";import"./v4-a960c1f4.js";const f={title:"Builder Examples/룰"},t=()=>(c.useEffect(()=>{document.querySelectorAll("select").forEach(o=>new m(o)),document.querySelectorAll(".menu-container").forEach(o=>{o.addEventListener("click",a=>{if(a.target instanceof HTMLButtonElement){const i=a.target.nextElementSibling;console.log(i),i==null||i.classList.toggle("is-visible",!(i!=null&&i.classList.contains("is-visible")))}})})},[]),e(d,{children:[e("header",{className:"flex flex--none gap-x--xxl py--lg px--xxl",children:[n("h1",{className:"innorules-logo innorules-logo--sm order--2 ml--auto",children:n("span",{className:"a11y-hidden",children:"InnoRules"})}),e("div",{className:"flex flex--auto",children:[e("div",{className:"button-group",children:[e("button",{type:"button",className:"button button--primary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--save"})," 룰 저장"]}),e("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-test"})," 룰 테스트"]}),e("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--information-circle-fill"})," 룰 정보"]}),e("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--memo"})," 항목 정보"]}),e("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--folder-open-fill"})," 다른 단계의 룰 열기"]})]}),e("div",{className:"button-group ml--auto",children:[e("button",{type:"button",className:"button button--sm",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--apply-circle-fill"})," 승인"]}),e("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--cancel-circle-fill"})," 승인 취소"]}),e("button",{type:"button",className:"button button--sm",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-apply"})," 이관"]})]})]})]}),n("div",{className:"ribbon",children:n("div",{className:"breadcrumb",children:e("ul",{className:"breadcrumb__list",children:[n("li",{className:"breadcrumb__item",children:"개발"}),n("li",{className:"breadcrumb__item flex--shrink-1 text--ellipsis",children:"Poc"}),n("li",{className:"breadcrumb__item",children:e("div",{className:"row align-items--center gap-x--3xs",children:[n("div",{className:"col--auto",children:e("div",{className:"rule-name max-width--xxl",children:[n("i",{className:"ir-icon ir-icon--rule-type-loop"}),n("span",{className:"rule-name__text",children:"사이트 목록"})]})}),n("div",{className:"col col--none",children:e("div",{className:"menu-container height--3xs",children:[n("button",{type:"button",className:"icon-button",children:n("i",{className:"ir-icon ir-icon--chevron-square-bottom"})}),n("div",{className:"menu menu--bottom-left",children:e("ul",{className:"menu__list",children:[n("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--move-to-parent-rule"})," 상위룰"]})}),n("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--move-to-child-rule"})," 하위룰"]})})]})})]})})]})}),n("li",{className:"breadcrumb__item",children:e("div",{className:"row align-items--center gap-x--3xs",children:[n("div",{className:"col--none",children:n("select",{className:"width--md",children:n("option",{children:"2021-10-15"})})}),n("div",{className:"col--none",children:n("span",{className:"tag tag--danger",children:"해당 버전에 에러가 있습니다."})})]})}),n("li",{className:"breadcrumb__item",children:e("div",{className:"menu-container",children:[e("button",{type:"button",className:"button button--outline",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),n("div",{className:"menu menu--bottom-left",children:e("ul",{className:"menu__list",children:[n("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),n("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]})})]})})}),e("main",{className:"flex flex--auto flex--column min-height--none py--xl px--xxl",children:[e("div",{className:"row",children:[n("div",{className:"col col--none",children:e("span",{className:"rule-option-tag",children:[n("i",{className:"rule-option-tag__icon-prefix ir-icon ir-icon--return-single"})," 단일값"]})}),n("div",{className:"col col--none ml--auto",children:e("div",{className:"form-item",children:[n("div",{className:"form-item__label width--auto",children:"반복 횟수(옵션)"}),n("div",{className:"form-item__control",children:n("div",{className:"input width--sm",children:n("input",{type:"text",className:"input__native"})})})]})})]}),n("div",{className:"divider mt--lg -mx--xxl"}),e("div",{className:"split width--auto -mx--xxl -mb--xl",children:[n("div",{className:"split__item",children:e("div",{className:"rule-container",children:[e("div",{className:"heading-group mb--none",children:[n("strong",{className:"heading--3",children:"하위룰에 전달할 항목"}),n("div",{className:"heading-group__actions",children:n("button",{type:"button",className:"button",children:"리턴 항목 이름 참조"})})]}),e("div",{className:"rule",children:[e("div",{className:"side-toolbar",children:[n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search-rule"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--replace"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-top"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row-add2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--convert-to-string"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--rule-open"})})]}),n("div",{className:"grid",children:".grid"})]})]})}),n("div",{className:"split__item",children:e("div",{className:"rule-container",children:[e("div",{className:"heading-group mb--none line-height--loose",children:[n("strong",{className:"heading--3",children:"루프 룰의 리턴 항목"}),n("div",{className:"heading-group__actions",children:n("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:[n("input",{type:"checkbox",className:"checkbox__input"}),n("span",{className:"checkbox__text",children:"브레이크 조건(옵션)"})]})})})]}),e("div",{className:"mt--xl",children:[n("div",{className:"divider mb--xl"}),e("div",{className:"form-item my--none",children:[n("div",{className:"form-item__label",children:"판단식"}),n("div",{className:"form-item__control",children:e("div",{className:"row",children:[n("div",{className:"col col--auto",children:n("div",{className:"input",children:n("input",{type:"text",className:"input__native"})})}),n("div",{className:"col col--none width--3xs"})]})})]}),e("div",{className:"form-item mb--none",children:[n("div",{className:"form-item__label",children:"누적 결과 건수"}),n("div",{className:"form-item__control",children:e("div",{className:"row align-items--center",children:[n("div",{className:"col col--auto",children:n("div",{className:"input",children:n("input",{type:"text",className:"input__native"})})}),n("div",{className:"col col--none width--3xs text--center",children:"이상"})]})})]}),n("div",{className:"divider mt--xl"})]}),e("div",{className:"rule",children:[e("div",{className:"side-toolbar",children:[n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search-rule"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--replace"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-top"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--eye"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--convert-to-string"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--rule-open"})})]}),n("div",{className:"grid",children:".grid"})]})]})})]})]})]}));var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll("select").forEach(element => new IRSelect(element));
    document.querySelectorAll(".menu-container").forEach(element => {
      element.addEventListener("click", e => {
        if (e.target instanceof HTMLButtonElement) {
          const nextElementSibling = e.target.nextElementSibling;
          console.log(nextElementSibling);
          nextElementSibling?.classList.toggle("is-visible", !nextElementSibling?.classList.contains("is-visible"));
        }
      });
    });
  }, []);
  return <App>\r
            <header className="flex flex--none gap-x--xxl py--lg px--xxl">\r
                <h1 className="innorules-logo innorules-logo--sm order--2 ml--auto"><span className="a11y-hidden">InnoRules</span></h1>\r
                <div className="flex flex--auto">\r
                    <div className="button-group">\r
                        <button type="button" className="button button--primary">\r
                            <i className="button__icon-prefix ir-icon ir-icon--save" /> 룰 저장\r
                        </button>\r
                        <button type="button" className="button button--secondary">\r
                            <i className="button__icon-prefix ir-icon ir-icon--rule-test" /> 룰 테스트\r
                        </button>\r
                        <button type="button" className="button button--secondary">\r
                            <i className="button__icon-prefix ir-icon ir-icon--information-circle-fill" /> 룰 정보\r
                        </button>\r
                        <button type="button" className="button">\r
                            <i className="button__icon-prefix ir-icon ir-icon--memo" /> 항목 정보\r
                        </button>\r
                        <button type="button" className="button">\r
                            <i className="button__icon-prefix ir-icon ir-icon--folder-open-fill" /> 다른 단계의 룰 열기\r
                        </button>\r
                    </div>\r
                    <div className="button-group ml--auto">\r
                        <button type="button" className="button button--sm">\r
                            <i className="button__icon-prefix ir-icon ir-icon--apply-circle-fill" /> 승인\r
                        </button>\r
                        <button type="button" className="button">\r
                            <i className="button__icon-prefix ir-icon ir-icon--cancel-circle-fill" /> 승인 취소\r
                        </button>\r
                        <button type="button" className="button button--sm">\r
                            <i className="button__icon-prefix ir-icon ir-icon--rule-apply" /> 이관\r
                        </button>\r
                    </div>\r
                </div>\r
            </header>\r
            <div className="ribbon">\r
                <div className="breadcrumb">\r
                    <ul className="breadcrumb__list">\r
                        <li className="breadcrumb__item">개발</li>\r
                        <li className="breadcrumb__item flex--shrink-1 text--ellipsis">Poc</li>\r
                        <li className="breadcrumb__item">\r
                            <div className="row align-items--center gap-x--3xs">\r
                                <div className="col--auto">\r
                                    <div className="rule-name max-width--xxl">\r
                                        <i className="ir-icon ir-icon--rule-type-loop" />\r
                                        <span className="rule-name__text">사이트 목록</span>\r
                                    </div>\r
                                </div>\r
                                <div className="col col--none">\r
                                    <div className="menu-container height--3xs">\r
                                        <button type="button" className="icon-button">\r
                                            <i className="ir-icon ir-icon--chevron-square-bottom" />\r
                                        </button>\r
                                        <div className="menu menu--bottom-left">\r
                                            <ul className="menu__list">\r
                                                <li className="menu__item">\r
                                                    <button type="button" className="menu__button">\r
                                                        <i className="menu__icon ir-icon ir-icon--move-to-parent-rule" /> 상위룰\r
                                                    </button>\r
                                                </li>\r
                                                <li className="menu__item">\r
                                                    <button type="button" className="menu__button">\r
                                                        <i className="menu__icon ir-icon ir-icon--move-to-child-rule" /> 하위룰\r
                                                    </button>\r
                                                </li>\r
                                            </ul>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li className="breadcrumb__item">\r
                            <div className="row align-items--center gap-x--3xs">\r
                                <div className="col--none">\r
                                    <select className="width--md">\r
                                        <option>2021-10-15</option>\r
                                    </select>\r
                                </div>\r
                                <div className="col--none">\r
                                    <span className="tag tag--danger">해당 버전에 에러가 있습니다.</span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li className="breadcrumb__item">\r
                            <div className="menu-container">\r
                                <button type="button" className="button button--outline">\r
                                    <i className="button__icon-prefix ir-icon ir-icon--version-history" /> 버전 관리\r
                                </button>\r
                                <div className="menu menu--bottom-left">\r
                                    <ul className="menu__list">\r
                                        <li className="menu__item">\r
                                            <button type="button" className="menu__button">\r
                                                <i className="menu__icon ir-icon ir-icon--add" /> 버전 추가\r
                                            </button>\r
                                        </li>\r
                                        <li className="menu__item">\r
                                            <button type="button" className="menu__button">\r
                                                <i className="menu__icon ir-icon ir-icon--edit" /> 버전 변경\r
                                            </button>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <main className="flex flex--auto flex--column min-height--none py--xl px--xxl">\r
                <div className="row">\r
                    <div className="col col--none">\r
                        <span className="rule-option-tag">\r
                            <i className="rule-option-tag__icon-prefix ir-icon ir-icon--return-single" /> 단일값\r
                        </span>\r
                    </div>\r
                    <div className="col col--none ml--auto">\r
                        <div className="form-item">\r
                            <div className="form-item__label width--auto">반복 횟수(옵션)</div>\r
                            <div className="form-item__control">\r
                                <div className="input width--sm">\r
                                    <input type="text" className="input__native" />\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className="divider mt--lg -mx--xxl" />\r
                <div className="split width--auto -mx--xxl -mb--xl">\r
                    <div className="split__item">\r
                        <div className="rule-container">\r
                            <div className="heading-group mb--none">\r
                                <strong className="heading--3">하위룰에 전달할 항목</strong>\r
                                <div className="heading-group__actions">\r
                                    <button type="button" className="button">리턴 항목 이름 참조</button>\r
                                </div>\r
                            </div>\r
                            <div className="rule">\r
                                <div className="side-toolbar">\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--search-rule" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--search" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--replace" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-top" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--row" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--row-add2" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--row-del2" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--convert-to-string" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--rule-open" />\r
                                    </button>\r
                                </div>\r
                                <div className="grid">.grid</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item">\r
                        <div className="rule-container">\r
                            <div className="heading-group mb--none line-height--loose">\r
                                <strong className="heading--3">루프 룰의 리턴 항목</strong>\r
                                <div className="heading-group__actions">\r
                                    <div className="checkbox">\r
                                        <label className="checkbox__wrapper">\r
                                            <input type="checkbox" className="checkbox__input" />\r
                                            <span className="checkbox__text">브레이크 조건(옵션)</span>\r
                                        </label>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="mt--xl">\r
                                <div className="divider mb--xl" />\r
                                <div className="form-item my--none">\r
                                    <div className="form-item__label">판단식</div>\r
                                    <div className="form-item__control">\r
                                        <div className="row">\r
                                            <div className="col col--auto">\r
                                                <div className="input">\r
                                                    <input type="text" className="input__native" />\r
                                                </div>\r
                                            </div>\r
                                            <div className="col col--none width--3xs"></div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item mb--none">\r
                                    <div className="form-item__label">누적 결과 건수</div>\r
                                    <div className="form-item__control">\r
                                        <div className="row align-items--center">\r
                                            <div className="col col--auto">\r
                                                <div className="input">\r
                                                    <input type="text" className="input__native" />\r
                                                </div>\r
                                            </div>\r
                                            <div className="col col--none width--3xs text--center">이상</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="divider mt--xl" />\r
                            </div>\r
                            <div className="rule">\r
                                <div className="side-toolbar">\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--search-rule" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--search" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--replace" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-top" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--eye" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--convert-to-string" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--rule-open" />\r
                                    </button>\r
                                </div>\r
                                <div className="grid">.grid</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </main>\r
        </App>;
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const w=["루프_룰"];export{w as __namedExportsOrder,f as default,t as 루프_룰};
//# sourceMappingURL=루프_룰.stories-8302c076.js.map
