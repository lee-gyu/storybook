import{j as e,a as t}from"./jsx-runtime-KzWSGvcx.js";import{r as d}from"./index-DogsOklH.js";import{I as m,a as u}from"./editor-La1ei9v6.js";import{A as b}from"./app-Ktag02Zk.js";const x={title:"Builder Examples/룰"},a=()=>(d.useEffect(()=>{document.querySelectorAll("select").forEach(r=>new m(r)),document.querySelectorAll(".menu-container").forEach(r=>{r.addEventListener("click",l=>{if(l.target instanceof HTMLButtonElement){const n=l.target.nextElementSibling;console.log(n),n==null||n.classList.toggle("is-visible",!(n!=null&&n.classList.contains("is-visible")))}})});const o=document.getElementById("ir-editor");new u({contextElement:o,mode:"sql-oracle",code:"SELECT * FROM tbl"})},[]),e(b,{children:[e("header",{className:"flex flex--none gap-x--xxl py--lg px--xxl",children:[t("h1",{className:"innorules-logo innorules-logo--sm order--2 ml--auto",children:t("span",{className:"a11y-hidden",children:"InnoRules"})}),e("div",{className:"flex flex--auto",children:[e("div",{className:"button-group",children:[e("button",{type:"button",className:"button button--primary",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--save"})," 룰 저장"]}),e("button",{type:"button",className:"button button--secondary",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--rule-test"})," 룰 테스트"]}),e("button",{type:"button",className:"button button--secondary",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--information-circle-fill"})," 룰 정보"]}),e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--memo"})," 항목 정보"]}),e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--folder-open-fill"})," 다른 단계의 룰 열기"]})]}),e("div",{className:"button-group ml--auto",children:[e("button",{type:"button",className:"button button--sm",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--apply-circle-fill"})," 승인"]}),e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--cancel-circle-fill"})," 승인 취소"]}),e("button",{type:"button",className:"button button--sm",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--rule-apply"})," 이관"]})]})]})]}),t("div",{className:"ribbon",children:t("div",{className:"breadcrumb",children:e("ul",{className:"breadcrumb__list",children:[t("li",{className:"breadcrumb__item",children:"개발"}),t("li",{className:"breadcrumb__item flex--shrink-1 text--ellipsis",children:"Poc"}),t("li",{className:"breadcrumb__item",children:e("div",{className:"row align-items--center gap-x--3xs",children:[t("div",{className:"col--auto",children:e("div",{className:"rule-name max-width--xxl",children:[t("i",{className:"ir-icon ir-icon--rule-type-db"}),t("span",{className:"rule-name__text",children:"사이트 목록"})]})}),t("div",{className:"col col--none",children:e("div",{className:"menu-container height--3xs",children:[t("button",{type:"button",className:"icon-button",children:t("i",{className:"ir-icon ir-icon--chevron-square-bottom"})}),t("div",{className:"menu menu--bottom-left",children:e("ul",{className:"menu__list",children:[t("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[t("i",{className:"menu__icon ir-icon ir-icon--move-to-parent-rule"})," 상위룰"]})}),t("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[t("i",{className:"menu__icon ir-icon ir-icon--move-to-child-rule"})," 하위룰"]})})]})})]})})]})}),t("li",{className:"breadcrumb__item",children:e("div",{className:"row align-items--center gap-x--3xs",children:[t("div",{className:"col--none",children:t("select",{className:"width--md",children:t("option",{children:"2021-10-15"})})}),t("div",{className:"col--none",children:t("span",{className:"tag tag--danger",children:"해당 버전에 에러가 있습니다."})})]})}),t("li",{className:"breadcrumb__item",children:e("div",{className:"menu-container",children:[e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--version-history"})," 버전 관리"]}),t("div",{className:"menu menu--bottom-left",children:e("ul",{className:"menu__list",children:[t("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[t("i",{className:"menu__icon ir-icon ir-icon--add"})," 버전 추가"]})}),t("li",{className:"menu__item",children:e("button",{type:"button",className:"menu__button",children:[t("i",{className:"menu__icon ir-icon ir-icon--edit"})," 버전 변경"]})})]})})]})})]})})}),e("main",{className:"flex flex--auto flex--column min-height--none py--xl px--xxl",children:[t("div",{className:"row align-items--center gap-x--xl",children:t("div",{className:"col col--none",children:e("span",{className:"rule-option-tag",children:[t("i",{className:"rule-option-tag__icon-prefix ir-icon ir-icon--return-single"})," 단일값"]})})}),t("div",{className:"divider mt--lg -mx--xxl"}),e("div",{className:"split width--auto -mx--xxl -mb--xl",children:[t("div",{className:"split__item flex--none width--4xl",children:e("div",{className:"split split--vertical",children:[t("div",{className:"split__item flex--none height--auto",children:e("div",{className:"search",children:[e("div",{className:"search__input-group",children:[t("div",{className:"search__input-group-row",children:e("div",{className:"form-item",children:[t("div",{className:"form-item__label width--xxs",children:"소유자"}),t("div",{className:"form-item__control",children:t("div",{className:"input",children:t("input",{type:"text",className:"input__native"})})})]})}),t("div",{className:"search__input-group-row",children:e("div",{className:"form-item",children:[t("div",{className:"form-item__label width--xxs",children:"테이블 이름"}),t("div",{className:"form-item__control",children:t("div",{className:"input",children:t("input",{type:"text",className:"input__native",placeholder:"패턴 일치는 %를 사용"})})})]})})]}),t("button",{type:"button",className:"button button--tertiary",children:"검색"})]})}),t("div",{className:"split__item",children:t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{}),t("col",{})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",className:"text--start",children:"소유자"}),t("th",{scope:"row",className:"text--start",children:"테이블 이름"})]})}),e("tbody",{children:[e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]})]})]})})}),t("div",{className:"split__item",children:t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{}),t("col",{})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",className:"text--start",children:"소유자"}),t("th",{scope:"row",className:"text--start",children:"선택한 테이블 이름"})]})}),e("tbody",{children:[e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]}),e("tr",{children:[t("td",{className:"text--start",children:"public"}),t("td",{className:"text--start",children:"call_log"})]})]})]})})}),t("div",{className:"split__item",children:t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{style:{width:"36px"}}),t("col",{}),t("col",{}),t("col",{style:{width:"46px"}}),t("col",{style:{width:"46px"}})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("th",{scope:"row",className:"text--start",children:"데이터 타입"}),t("th",{scope:"row",className:"text--start",children:"칼럼 이름"}),t("th",{scope:"row",children:t("button",{type:"button",className:"text--medium text--tertiary",children:"SQL"})}),t("th",{scope:"row",children:t("button",{type:"button",className:"text--medium text--tertiary",children:"EXE"})})]})}),e("tbody",{children:[e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]}),e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"문자형"}),t("td",{colSpan:3,className:"text--start",children:"system_code"})]})]})]})})})]})}),t("div",{className:"split__item",children:e("div",{className:"rule-container",children:[e("div",{className:"row align-items--center",children:[t("div",{className:"col col--none",children:t("div",{className:"switch",children:e("label",{className:"switch__wrapper",children:[e("span",{className:"switch__track",children:[t("input",{type:"checkbox",className:"switch__input"}),t("span",{className:"switch__slider"})]}),t("span",{className:"switch__text",children:"테이블 정보"})]})})}),t("div",{className:"col col--none ml--auto",children:e("div",{className:"row align-items--center",children:[t("div",{className:"col col--none",children:e("div",{className:"form-item",children:[t("div",{className:"form-item__label width--auto",children:"DB 접속명"}),t("div",{className:"form-item__control",children:t("select",{className:"width--xxl",children:t("option",{children:"BIZDB(업무DB)"})})})]})}),t("div",{className:"col col--divider"}),t("div",{className:"col col--none",children:e("div",{className:"form-item",children:[t("div",{className:"form-item__label width--auto",children:"결과 건수(옵션)"}),t("div",{className:"form-item__control",children:t("div",{className:"input width--sm",children:t("input",{type:"text",className:"input__native"})})})]})}),t("div",{className:"col col--divider"}),t("div",{className:"col col--none",children:t("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:[t("input",{type:"checkbox",className:"checkbox__input"}),t("span",{className:"checkbox__text",children:"SQL문 반환"})]})})})]})})]}),e("div",{className:"rule",children:[e("div",{className:"side-toolbar",children:[t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--search-rule"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--search"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--replace"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--rule-open"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--uppercase"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--lowercase"})}),e("div",{className:"menu-container",children:[t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--ellipsis"})}),t("div",{className:"menu menu--top-right",children:e("ul",{className:"menu__list",children:[t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"룰 표현식 <$ $>"})}),t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"바인드 <$$ $$>"})}),t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"주석 <$@ @$>"})})]})})]})]}),t("div",{id:"ir-editor"})]})]})})]})]})]}));var c,s,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
    const editor = (document.getElementById("ir-editor") as HTMLDivElement);
    new IREditor({
      contextElement: editor,
      mode: "sql-oracle",
      code: "SELECT * FROM tbl"
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
                                        <i className="ir-icon ir-icon--rule-type-db" />\r
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
                <div className="row align-items--center gap-x--xl">\r
                    <div className="col col--none">\r
                        <span className="rule-option-tag">\r
                            <i className="rule-option-tag__icon-prefix ir-icon ir-icon--return-single" /> 단일값\r
                        </span>\r
                    </div>\r
                </div>\r
                <div className="divider mt--lg -mx--xxl" />\r
                <div className="split width--auto -mx--xxl -mb--xl">\r
                    <div className="split__item flex--none width--4xl">\r
                        <div className="split split--vertical">\r
                            <div className="split__item flex--none height--auto">\r
                                <div className="search">\r
                                    <div className="search__input-group">\r
                                        <div className="search__input-group-row">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--xxs">소유자</div>\r
                                                <div className="form-item__control">\r
                                                    <div className="input">\r
                                                        <input type="text" className="input__native" />\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div className="search__input-group-row">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--xxs">테이블 이름</div>\r
                                                <div className="form-item__control">\r
                                                    <div className="input">\r
                                                        <input type="text" className="input__native" placeholder="패턴 일치는 %를 사용" />\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <button type="button" className="button button--tertiary">검색</button>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="table scroll">\r
                                    <table>\r
                                        <colgroup>\r
                                            <col />\r
                                            <col />\r
                                        </colgroup>\r
                                        <thead>\r
                                            <tr>\r
                                                <th scope="row" className="text--start">소유자</th>\r
                                                <th scope="row" className="text--start">테이블 이름</th>\r
                                            </tr>\r
                                        </thead>\r
                                        <tbody>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="table scroll">\r
                                    <table>\r
                                        <colgroup>\r
                                            <col />\r
                                            <col />\r
                                        </colgroup>\r
                                        <thead>\r
                                            <tr>\r
                                                <th scope="row" className="text--start">소유자</th>\r
                                                <th scope="row" className="text--start">선택한 테이블 이름</th>\r
                                            </tr>\r
                                        </thead>\r
                                        <tbody>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td className="text--start">public</td>\r
                                                <td className="text--start">call_log</td>\r
                                            </tr>\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="table scroll">\r
                                    <table>\r
                                        <colgroup>\r
                                            <col style={{
                      width: "36px"
                    }} />\r
                                            <col />\r
                                            <col />\r
                                            <col style={{
                      width: "46px"
                    }} />\r
                                            <col style={{
                      width: "46px"
                    }} />\r
                                        </colgroup>\r
                                        <thead>\r
                                            <tr>\r
                                                <th scope="row">\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </th>\r
                                                <th scope="row" className="text--start">데이터 타입</th>\r
                                                <th scope="row" className="text--start">칼럼 이름</th>\r
                                                <th scope="row"><button type="button" className="text--medium text--tertiary">SQL</button></th>\r
                                                <th scope="row"><button type="button" className="text--medium text--tertiary">EXE</button></th>\r
                                            </tr>\r
                                        </thead>\r
                                        <tbody>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">문자형</td>\r
                                                <td colSpan={3} className="text--start">system_code</td>\r
                                            </tr>\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item">\r
                        <div className="rule-container">\r
                            <div className="row align-items--center">\r
                                <div className="col col--none">\r
                                    <div className="switch">\r
                                        <label className="switch__wrapper">\r
                                            <span className="switch__track">\r
                                                <input type="checkbox" className="switch__input" />\r
                                                <span className="switch__slider" />\r
                                            </span>\r
                                            <span className="switch__text">테이블 정보</span>\r
                                        </label>\r
                                    </div>\r
                                </div>\r
                                <div className="col col--none ml--auto">\r
                                    <div className="row align-items--center">\r
                                        <div className="col col--none">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--auto">DB 접속명</div>\r
                                                <div className="form-item__control">\r
                                                    <select className="width--xxl">\r
                                                        <option>BIZDB(업무DB)</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div className="col col--divider" />\r
                                        <div className="col col--none">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--auto">결과 건수(옵션)</div>\r
                                                <div className="form-item__control">\r
                                                    <div className="input width--sm">\r
                                                        <input type="text" className="input__native" />\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div className="col col--divider" />\r
                                        <div className="col col--none">\r
                                            <div className="checkbox">\r
                                                <label className="checkbox__wrapper">\r
                                                    <input type="checkbox" className="checkbox__input" />\r
                                                    <span className="checkbox__text">SQL문 반환</span>\r
                                                </label>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
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
                                        <i className="side-toolbar__icon ir-icon ir-icon--rule-open" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--uppercase" />\r
                                    </button>\r
                                    <button type="button" className="side-toolbar__button">\r
                                        <i className="side-toolbar__icon ir-icon ir-icon--lowercase" />\r
                                    </button>\r
                                    <div className="menu-container">\r
                                        <button type="button" className="side-toolbar__button">\r
                                            <i className="side-toolbar__icon ir-icon ir-icon--ellipsis" />\r
                                        </button>\r
                                        <div className="menu menu--top-right">\r
                                            <ul className="menu__list">\r
                                                <li className="menu__item">\r
                                                    <button type="button" className="menu__button">룰 표현식 &lt;$ $&gt;</button>\r
                                                </li>\r
                                                <li className="menu__item">\r
                                                    <button type="button" className="menu__button">바인드 &lt;$$ $$&gt;</button>\r
                                                </li>\r
                                                <li className="menu__item">\r
                                                    <button type="button" className="menu__button">주석 &lt;$@ @$&gt;</button>\r
                                                </li>\r
                                            </ul>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div id="ir-editor" />\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </main>\r
        </App>;
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["DB_룰"];export{a as DB_룰,v as __namedExportsOrder,x as default};
