import{j as t,a as n}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";import"./timePicker.elements-3c8a0aec.js";import{I as w}from"./select-35a4c028.js";import{A as k}from"./app-35831e09.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-d6235da7.js";import"./v4-a960c1f4.js";const R={title:"Builder Examples/룰/플로우_룰"},e=({children:v})=>(g.useEffect(()=>{document.querySelectorAll("select").forEach(l=>new w(l)),document.querySelectorAll(".menu-container").forEach(l=>{l.addEventListener("click",c=>{if(c.target instanceof HTMLButtonElement){const o=c.target.nextElementSibling;console.log(o),o==null||o.classList.toggle("is-visible",!(o!=null&&o.classList.contains("is-visible")))}})})},[]),t(k,{children:[t("header",{className:"flex flex--none gap-x--xxl py--lg px--xxl",children:[n("h1",{className:"innorules-logo innorules-logo--sm order--2 ml--auto",children:n("span",{className:"a11y-hidden",children:"InnoRules"})}),t("div",{className:"flex flex--auto",children:[t("div",{className:"button-group",children:[t("button",{type:"button",className:"button button--primary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--save"})," 룰 저장"]}),t("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-test"})," 룰 테스트"]}),t("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--information-circle-fill"})," 룰 정보"]}),t("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--memo"})," 항목 정보"]}),t("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--folder-open-fill"})," 다른 단계의 룰 열기"]})]}),t("div",{className:"button-group ml--auto",children:[t("button",{type:"button",className:"button button--sm",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--apply-circle-fill"})," 승인"]}),t("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--cancel-circle-fill"})," 승인 취소"]}),t("button",{type:"button",className:"button button--sm",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-apply"})," 이관"]})]})]})]}),n("div",{className:"ribbon",children:n("div",{className:"breadcrumb",children:t("ul",{className:"breadcrumb__list",children:[n("li",{className:"breadcrumb__item",children:"개발"}),n("li",{className:"breadcrumb__item flex--shrink-1 text--ellipsis",children:"Poc"}),n("li",{className:"breadcrumb__item",children:t("div",{className:"row align-items--center gap-x--3xs",children:[n("div",{className:"col--auto",children:t("div",{className:"rule-name max-width--xxl",children:[n("i",{className:"ir-icon ir-icon--rule-type-flow"}),n("span",{className:"rule-name__text",children:"사이트 목록"})]})}),n("div",{className:"col col--none",children:t("div",{className:"menu-container height--3xs",children:[n("button",{type:"button",className:"icon-button",children:n("i",{className:"ir-icon ir-icon--chevron-square-bottom"})}),n("div",{className:"menu menu--bottom-left",children:t("ul",{className:"menu__list",children:[n("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--move-to-parent-rule"})," 상위룰"]})}),n("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--move-to-child-rule"})," 하위룰"]})})]})})]})})]})}),n("li",{className:"breadcrumb__item",children:t("div",{className:"row align-items--center gap-x--3xs",children:[n("div",{className:"col--none",children:n("select",{className:"width--md",children:n("option",{children:"2021-10-15"})})}),n("div",{className:"col--none",children:n("span",{className:"tag tag--danger",children:"해당 버전에 에러가 있습니다."})})]})}),n("li",{className:"breadcrumb__item",children:t("div",{className:"menu-container",children:[t("button",{type:"button",className:"button button--outline",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),n("div",{className:"menu menu--bottom-left",children:t("ul",{className:"menu__list",children:[n("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),n("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:[n("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]})})]})})}),t("main",{className:"flex flex--auto flex--column min-height--none py--xl px--xxl",children:[t("div",{className:"row align-items--center",children:[n("div",{className:"col col--none",children:t("span",{className:"rule-option-tag",children:[n("i",{className:"rule-option-tag__icon-prefix ir-icon ir-icon--return-single"})," 단일값"]})}),n("div",{className:"col col--none ml--auto",children:t("div",{className:"form-item",children:[n("div",{className:"form-item__label width--auto",children:"배율(%)"}),n("div",{className:"form-item__control",children:n("select",{className:"width--xxs",children:n("option",{children:"100"})})})]})})]}),n("div",{className:"rule-container",children:t("div",{className:"rule rule--flow",children:[t("div",{className:"toolbar",children:[n("button",{type:"button",disabled:!0,className:"toolbar__button toolbar__button--prev",children:n("i",{className:"toolbar__icon ir-icon ir-icon--chevron-left"})}),t("div",{className:"toolbar__scroll",children:[n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--search-rule"})}),n("div",{className:"toolbar__divider"}),t("div",{className:"menu-container",children:[n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--color-picker"})}),t("div",{className:"menu menu--color is-visible",children:[t("div",{className:"row gap-x--xs mb--lg",children:[n("div",{className:"col col--none",children:n("div",{className:"radio",children:t("label",{className:"radio__wrapper",children:[n("input",{type:"radio",name:"radio",className:"radio__input",defaultChecked:!0}),n("span",{className:"radio__text",children:"노드"})]})})}),n("div",{className:"col col--none",children:n("div",{className:"radio",children:t("label",{className:"radio__wrapper",children:[n("input",{type:"radio",name:"radio",className:"radio__input"}),n("span",{className:"radio__text",children:"글자"})]})})})]}),t("ul",{className:"menu__list grid--col-8",children:[n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#000"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#a6a6a6"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#00a2e8"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#22b14c"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#fff200"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#ff7f27"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#ed1c24"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#a349a4"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#fff"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#e9e9e9"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#addcc9"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#dbebc2"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#fff296"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#fbceae"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#f69b9a"}})}),n("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",style:{backgroundColor:"#f7b5d8"}})})]})]})]}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-move-to-top-left"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--cursor"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-curved-connection"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-direct-connection"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-return-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-if-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-bridge-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-comment-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-start-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-select-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-add-next-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-add-connection-automatically"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-change-connection"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-shortest-connection"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-insert-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-convert-to-flowrule"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-edit-multiple-nodes"})}),n("div",{className:"toolbar__divider"}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-group"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-ungroup"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--align-to-left"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--align-to-center"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--align-to-right"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--align-to-top"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--align-to-middle"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--align-to-bottom"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-sort"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-fit-by-first-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-fit-node"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-bring-to-front"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-bring-to-back"})}),n("div",{className:"toolbar__divider"}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--copy-style"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--ellipsis"})}),n("div",{className:"toolbar__divider"}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--search"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--folder-open-outline"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--tree-dir"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--flowrule-grid"})}),n("button",{type:"button",className:"toolbar__button",children:n("i",{className:"toolbar__icon ir-icon ir-icon--ellipsis"})})]}),n("button",{type:"button",className:"toolbar__button toolbar__button--next",children:n("i",{className:"toolbar__icon ir-icon ir-icon--chevron-right"})})]}),n("div",{className:"flowchart",children:".flowchart"}),v]})})]})]})),a=()=>n(e,{children:t("div",{className:"flex flex--column height--xxl pt--xl px--xxl",children:[n("div",{className:"flex--none divider -mx--xxl"}),t("div",{className:"flex--none button-group mt--xl",children:[t("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--row"})," 최종행 추가"]}),t("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-open"})," 룰 열기"]})]}),n("div",{className:"flex--auto grid mt--lg",children:".grid"})]})}),r=()=>n(e,{children:t("div",{className:"flex flex--column height--xxl pt--xl px--xxl",children:[n("div",{className:"flex--none divider -mx--xxl"}),n("div",{className:"flex--none heading-group line-height--loose mt--xl mb--sm",children:n("strong",{className:"text--h3 text--medium",children:"조건"})}),n("div",{className:"flex--auto textarea border-radius--md",children:n("textarea",{})})]})}),i=()=>n(e,{children:t("div",{className:"flex flex--column height--xxl pt--xl px--xxl",children:[n("div",{className:"flex--none divider -mx--xxl"}),t("div",{className:"flex--none row gap-x--xs mt--xl",children:[n("div",{className:"col col--none",children:n("div",{className:"radio-button",children:t("label",{className:"radio-button__wrapper",children:[n("input",{type:"radio",name:"radio",className:"radio-button__input",defaultChecked:!0}),n("span",{className:"radio-button__text",children:"디폴트"})]})})}),n("div",{className:"col col--none",children:n("div",{className:"radio-button",children:t("label",{className:"radio-button__wrapper",children:[n("input",{type:"radio",name:"radio",className:"radio-button__input"}),n("span",{className:"radio-button__text",children:"True"})]})})}),n("div",{className:"col col--none",children:n("div",{className:"radio-button",children:t("label",{className:"radio-button__wrapper",children:[n("input",{type:"radio",name:"radio",className:"radio-button__input"}),n("span",{className:"radio-button__text",children:"False"})]})})}),n("div",{className:"col col--none",children:n("div",{className:"radio-button",children:t("label",{className:"radio-button__wrapper",children:[n("input",{type:"radio",name:"radio",className:"radio-button__input"}),n("span",{className:"radio-button__text",children:"룰 표현식"})]})})}),n("div",{className:"col col--divider mx--xs"}),n("div",{className:"col col--none",children:t("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-open"})," 룰 열기"]})})]}),n("div",{className:"flex--none heading-group mt--xl mb--sm",children:n("strong",{className:"text--h3 text--medium",children:"조건"})}),n("div",{className:"flex--auto textarea border-radius--md",children:n("textarea",{})})]})});var s,u,b;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  children
}) => {
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
                                        <i className="ir-icon ir-icon--rule-type-flow" />\r
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
                <div className="row align-items--center">\r
                    <div className="col col--none">\r
                        <span className="rule-option-tag">\r
                            <i className="rule-option-tag__icon-prefix ir-icon ir-icon--return-single" /> 단일값\r
                        </span>\r
                    </div>\r
                    <div className="col col--none ml--auto">\r
                        <div className="form-item">\r
                            <div className="form-item__label width--auto">배율(%)</div>\r
                            <div className="form-item__control">\r
                                <select className="width--xxs">\r
                                    <option>100</option>\r
                                </select>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className="rule-container">\r
                    <div className="rule rule--flow">\r
                        <div className="toolbar">\r
                            <button type="button" disabled className="toolbar__button toolbar__button--prev">\r
                                <i className="toolbar__icon ir-icon ir-icon--chevron-left" />\r
                            </button>\r
                            <div className="toolbar__scroll">\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--search-rule" />\r
                                </button>\r
                                <div className="toolbar__divider" />\r
                                <div className="menu-container">\r
                                    <button type="button" className="toolbar__button">\r
                                        <i className="toolbar__icon ir-icon ir-icon--color-picker" />\r
                                    </button>\r
                                    <div className="menu menu--color is-visible">\r
                                        <div className="row gap-x--xs mb--lg">\r
                                            <div className="col col--none">\r
                                                <div className="radio">\r
                                                    <label className="radio__wrapper">\r
                                                        <input type="radio" name="radio" className="radio__input" defaultChecked />\r
                                                        <span className="radio__text">노드</span>\r
                                                    </label>\r
                                                </div>\r
                                            </div>\r
                                            <div className="col col--none">\r
                                                <div className="radio">\r
                                                    <label className="radio__wrapper">\r
                                                        <input type="radio" name="radio" className="radio__input" />\r
                                                        <span className="radio__text">글자</span>\r
                                                    </label>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <ul className="menu__list grid--col-8">\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#000"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#a6a6a6"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#00a2e8"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#22b14c"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#fff200"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#ff7f27"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#ed1c24"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#a349a4"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#fff"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#e9e9e9"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#addcc9"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#dbebc2"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#fff296"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#fbceae"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#f69b9a"
                      }}></button>\r
                                            </li>\r
                                            <li className="menu__item">\r
                                                <button type="button" className="menu__button" style={{
                        backgroundColor: "#f7b5d8"
                      }}></button>\r
                                            </li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-move-to-top-left" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--cursor" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-curved-connection" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-direct-connection" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-return-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-if-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-bridge-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-comment-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-start-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-select-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-add-next-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-add-connection-automatically" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-change-connection" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-shortest-connection" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-insert-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-convert-to-flowrule" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-edit-multiple-nodes" />\r
                                </button>\r
                                <div className="toolbar__divider" />\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-group" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-ungroup" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--align-to-left" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--align-to-center" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--align-to-right" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--align-to-top" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--align-to-middle" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--align-to-bottom" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-sort" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-fit-by-first-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-fit-node" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-bring-to-front" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-bring-to-back" />\r
                                </button>\r
                                <div className="toolbar__divider" />\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--copy-style" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--ellipsis" />\r
                                </button>\r
                                <div className="toolbar__divider" />\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--search" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--folder-open-outline" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--tree-dir" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--flowrule-grid" />\r
                                </button>\r
                                <button type="button" className="toolbar__button">\r
                                    <i className="toolbar__icon ir-icon ir-icon--ellipsis" />\r
                                </button>\r
                            </div>\r
                            <button type="button" className="toolbar__button toolbar__button--next">\r
                                <i className="toolbar__icon ir-icon ir-icon--chevron-right" />\r
                            </button>\r
                        </div>\r
                        <div className="flowchart">.flowchart</div>\r
                        {children}\r
                    </div>\r
                </div>\r
            </main>\r
        </App>;
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,_,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <플로우_룰>\r
            <div className="flex flex--column height--xxl pt--xl px--xxl">\r
                <div className="flex--none divider -mx--xxl" />\r
                <div className="flex--none button-group mt--xl">\r
                    <button type="button" className="button">\r
                        <i className="button__icon-prefix ir-icon ir-icon--row" /> 최종행 추가\r
                    </button>\r
                    <button type="button" className="button">\r
                        <i className="button__icon-prefix ir-icon ir-icon--rule-open" /> 룰 열기\r
                    </button>\r
                </div>\r
                <div className="flex--auto grid mt--lg">.grid</div>\r
            </div>\r
        </플로우_룰>;
}`,...(d=(_=a.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};var N,p,h;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <플로우_룰>\r
            <div className="flex flex--column height--xxl pt--xl px--xxl">\r
                <div className="flex--none divider -mx--xxl" />\r
                <div className="flex--none heading-group line-height--loose mt--xl mb--sm">\r
                    <strong className="text--h3 text--medium">조건</strong>\r
                </div>\r
                <div className="flex--auto textarea border-radius--md">\r
                    <textarea></textarea>\r
                </div>\r
            </div>\r
        </플로우_룰>;
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,y,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <플로우_룰>\r
            <div className="flex flex--column height--xxl pt--xl px--xxl">\r
                <div className="flex--none divider -mx--xxl" />\r
                <div className="flex--none row gap-x--xs mt--xl">\r
                    <div className="col col--none">\r
                        <div className="radio-button">\r
                            <label className="radio-button__wrapper">\r
                                <input type="radio" name="radio" className="radio-button__input" defaultChecked />\r
                                <span className="radio-button__text">디폴트</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="col col--none">\r
                        <div className="radio-button">\r
                            <label className="radio-button__wrapper">\r
                                <input type="radio" name="radio" className="radio-button__input" />\r
                                <span className="radio-button__text">True</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="col col--none">\r
                        <div className="radio-button">\r
                            <label className="radio-button__wrapper">\r
                                <input type="radio" name="radio" className="radio-button__input" />\r
                                <span className="radio-button__text">False</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="col col--none">\r
                        <div className="radio-button">\r
                            <label className="radio-button__wrapper">\r
                                <input type="radio" name="radio" className="radio-button__input" />\r
                                <span className="radio-button__text">룰 표현식</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="col col--divider mx--xs" />\r
                    <div className="col col--none">\r
                        <button type="button" className="button">\r
                            <i className="button__icon-prefix ir-icon ir-icon--rule-open" /> 룰 열기\r
                        </button>\r
                    </div>\r
                </div>\r
                <div className="flex--none heading-group mt--xl mb--sm">\r
                    <strong className="text--h3 text--medium">조건</strong>\r
                </div>\r
                <div className="flex--auto textarea border-radius--md">\r
                    <textarea></textarea>\r
                </div>\r
            </div>\r
        </플로우_룰>;
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const j=["플로우_룰","플로우_룰_TYPE_1","플로우_룰_TYPE_2","플로우_룰_TYPE_3"];export{j as __namedExportsOrder,R as default,e as 플로우_룰,a as 플로우_룰_TYPE_1,r as 플로우_룰_TYPE_2,i as 플로우_룰_TYPE_3};
//# sourceMappingURL=플로우_룰.stories-cd70ff1b.js.map
