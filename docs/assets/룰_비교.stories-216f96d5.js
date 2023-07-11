import{j as i,a as n}from"./jsx-runtime-d057ca55.js";import{r as m}from"./index-ebeaab24.js";import"./timePicker.elements-261a85d5.js";import{I as u}from"./select-1eb2456f.js";import{A as _}from"./app-6c4bee22.js";import{D as a,a as s,d as l}from"./drawer.content-58829244.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./v4-a960c1f4.js";import"./select.classNames-9034d006.js";import"./index-0721c456.js";import"./index-631dc947.js";import"./datePicker-c4d2f1f5.js";import"./tabs-e4d0e24d.js";const S={title:"Builder Examples/룰"},r=()=>(m.useEffect(()=>{document.querySelectorAll("select").forEach(o=>new u(o)),document.querySelectorAll(".menu-container").forEach(o=>{o.addEventListener("click",t=>{if(t.target instanceof HTMLButtonElement){const e=t.target.nextElementSibling;console.log(e),e==null||e.classList.toggle("is-visible",!(e!=null&&e.classList.contains("is-visible")))}})})},[]),i(_,{className:"app overflow-x--hidden",children:[i("header",{className:"flex flex--none align-items--center gap-x--xxl py--lg px--xxl",children:[n("h1",{className:"innorules-logo innorules-logo--sm order--2 ml--auto",children:n("span",{className:"a11y-hidden",children:"InnoRules"})}),n("strong",{className:"heading--2 flex--auto",children:"룰 비교"})]}),i("div",{className:"ribbon",children:[n("div",{className:"switch",children:i("label",{className:"switch__wrapper",children:[i("span",{className:"switch__track",children:[n("input",{type:"checkbox",className:"switch__input"}),n("span",{className:"switch__slider"})]}),n("span",{className:"switch__text",children:"비교할 룰 찾기"})]})}),i("div",{className:"button-group ml--auto",children:[i("button",{type:"button",className:"button button--tertiary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--compare"})," 비교"]}),i("button",{type:"button",className:"button button--tertiary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--equal-mark-fill"})," 일치"]})]})]}),n("main",{className:"flex flex--auto flex--column min-height--none",children:i("div",{className:"split",children:[n("div",{className:"split__item flex--none width--4xl",children:i("div",{className:"split split--vertical",children:[i("div",{className:"split__item flex--none height--auto",children:[n("div",{className:"heading-group heading-group--underline",children:n("strong",{className:"heading--3",children:"비교할 룰 찾기"})}),i("div",{className:"search",children:[i("div",{className:"search__input-group",children:[n("div",{className:"search__input-group-row",children:i("div",{className:"form-item",children:[n("div",{className:"form-item__label width--xs",children:"단위 룰 시스템"}),n("div",{className:"form-item__control",children:n("select",{children:n("option",{children:"개발"})})})]})}),n("div",{className:"search__input-group-row",children:i("div",{className:"form-item",children:[n("div",{className:"form-item__label width--xs",children:"룰 이름"}),n("div",{className:"form-item__control",children:n("div",{className:"input",children:n("input",{type:"text",className:"input__native"})})})]})})]}),n("button",{type:"button",className:"button button--tertiary",children:"검색"})]})]}),n("div",{className:"split__item",children:i("div",{className:"scroll-wrapper",children:[i("div",{className:"heading-group heading-group--underline mb--none",children:[n("strong",{className:"heading--4",children:"룰 이름"}),n("span",{className:"tag tag--primary",children:"table"})]}),n("div",{className:"list scroll",children:n("ul",{className:"list__wrapper",children:new Array(20).fill("").map((o,t)=>n("li",{className:"list__item",children:"table_A"},t))})})]})}),n("div",{className:"split__item",children:i("div",{className:"scroll-wrapper",children:[i("div",{className:"heading-group heading-group--underline mb--none",children:[n("strong",{className:"heading--4",children:"버전 일자"}),n("span",{className:"tag tag--primary",children:"table_B"})]}),n("div",{className:"list scroll",children:n("ul",{className:"list__wrapper",children:new Array(20).fill("").map((o,t)=>n("li",{className:"list__item",children:"2020-09-26"},t))})})]})}),n("div",{className:"split__item",children:i("div",{className:"scroll-wrapper",children:[i("div",{className:"heading-group heading-group--underline mb--none",children:[n("strong",{className:"heading--4",children:"이력"}),n("span",{className:"tag tag--primary",children:"table_B"})]}),n("div",{className:"table scroll mt--none",children:i("table",{children:[i("colgroup",{children:[n("col",{}),n("col",{})]}),n("thead",{children:i("tr",{children:[n("th",{scope:"row",className:"text--start",children:"이관자"}),n("th",{scope:"row",className:"text--start",children:"이관 일시"})]})}),n("tbody",{children:new Array(20).fill("").map((o,t)=>i("tr",{children:[n("td",{className:"text--start",children:"이규철 선임"}),n("td",{className:"text--start",children:"2021007-02 13:28:02"})]},t))})]})})]})})]})}),n("div",{className:"split__item flex--none width--screen min-width--screen-min-width",children:i("div",{className:"split",children:[i("div",{className:"split__item relative overflow--hidden",children:[i("div",{className:"rule-container",children:[n("div",{className:"row",children:n("div",{className:"col",children:i("div",{className:"form-item",children:[n("div",{className:"form-item__label width--auto",children:"비교 기준룰"}),n("div",{className:"form-item__control",children:i("div",{className:"row align-items--center gap-x--sm",children:[n("div",{className:"col col--none",children:"[개발]table 비교"}),n("div",{className:"col col--none",children:n("select",{className:"width--md",children:n("option",{children:"1970-01-01"})})})]})})]})})}),i("div",{className:"button-group mt--xl",children:[i("button",{type:"button",className:"button button--primary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--save"})," 룰 저장"]}),i("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-test"})," 룰 테스트"]}),i("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--information-circle-fill"})," 룰 정보"]}),i("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--edit"})," 룰 정보 변경"]}),i("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--memo"})," 항목 정보"]}),i("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--folder-open-fill"})," 다른 단계의 룰 열기"]})]}),n("div",{className:"divider my--xl"}),n("div",{className:"row",children:n("div",{className:"col col--none",children:i("span",{className:"rule-option-tag",children:[n("i",{className:"rule-option-tag__icon-prefix ir-icon ir-icon--return-single"})," 단일값"]})})}),i("div",{className:"rule",children:[i("div",{className:"side-toolbar",children:[n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search-rule"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--replace"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-left"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-right"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-top"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--column"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--col-add2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--col-del2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row-add2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--eye"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--folder-open-outline"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--cell-merge"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--cell-split"})})]}),n("div",{className:"grid",children:".grid"})]})]}),n(a,{addClass:"absolute",direction:"bottom",expanded:!1,children:n(s,{id:"ruleDetail",title:"상세 입력",prefixIcon:"ir-icon--edit",suffixIcon:"ir-icon--triangle-small-top",children:n(l,{})})})]}),n("button",{className:"split__button",children:n("i",{className:"ir-icon ir-icon--swap"})}),i("div",{className:"split__item relative overflow--hidden",children:[i("div",{className:"rule-container",children:[n("div",{className:"row",children:n("div",{className:"col",children:i("div",{className:"form-item",children:[n("div",{className:"form-item__label width--auto",children:"비교 대상룰"}),n("div",{className:"form-item__control",children:i("div",{className:"row align-items--center gap-x--sm",children:[n("div",{className:"col col--none",children:"[개발]table 비교"}),n("div",{className:"col col--none",children:n("select",{className:"width--md",children:n("option",{children:"1970-01-01"})})})]})})]})})}),i("div",{className:"button-group mt--xl",children:[i("button",{type:"button",className:"button button--primary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--save"})," 룰 저장"]}),i("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--rule-test"})," 룰 테스트"]}),i("button",{type:"button",className:"button button--secondary",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--information-circle-fill"})," 룰 정보"]}),i("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--edit"})," 룰 정보 변경"]}),i("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--memo"})," 항목 정보"]}),i("button",{type:"button",className:"button",children:[n("i",{className:"button__icon-prefix ir-icon ir-icon--folder-open-fill"})," 다른 단계의 룰 열기"]})]}),n("div",{className:"divider my--xl"}),n("div",{className:"row",children:n("div",{className:"col col--none",children:i("span",{className:"rule-option-tag",children:[n("i",{className:"rule-option-tag__icon-prefix ir-icon ir-icon--return-single"})," 단일값"]})})}),i("div",{className:"rule",children:[i("div",{className:"side-toolbar",children:[n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search-rule"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--search"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--replace"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-left"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-right"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--chevron-double-top"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--column"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--col-add2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--col-del2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row-add2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--eye"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--folder-open-outline"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--cell-merge"})}),n("button",{type:"button",className:"side-toolbar__button",children:n("i",{className:"side-toolbar__icon ir-icon ir-icon--cell-split"})})]}),n("div",{className:"grid",children:".grid"})]})]}),n(a,{addClass:"absolute",direction:"bottom",expanded:!1,children:n(s,{id:"ruleDetail",title:"상세 입력",prefixIcon:"ir-icon--edit",suffixIcon:"ir-icon--triangle-small-top",children:n(l,{})})})]})]})})]})})]}));var c,d,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
  return <App className="app overflow-x--hidden">\r
            <header className="flex flex--none align-items--center gap-x--xxl py--lg px--xxl">\r
                <h1 className="innorules-logo innorules-logo--sm order--2 ml--auto"><span className="a11y-hidden">InnoRules</span></h1>\r
                <strong className="heading--2 flex--auto">룰 비교</strong>\r
            </header>\r
            <div className="ribbon">\r
                <div className="switch">\r
                    <label className="switch__wrapper">\r
                        <span className="switch__track">\r
                            <input type="checkbox" className="switch__input" />\r
                            <span className="switch__slider" />\r
                        </span>\r
                        <span className="switch__text">비교할 룰 찾기</span>\r
                    </label>\r
                </div>\r
                <div className="button-group ml--auto">\r
                    <button type="button" className="button button--tertiary"><i className="button__icon-prefix ir-icon ir-icon--compare" /> 비교</button>\r
                    <button type="button" className="button button--tertiary"><i className="button__icon-prefix ir-icon ir-icon--equal-mark-fill" /> 일치</button>\r
                </div>\r
            </div>\r
            <main className="flex flex--auto flex--column min-height--none">\r
                <div className="split">\r
                    <div className="split__item flex--none width--4xl">\r
                        <div className="split split--vertical">\r
                            <div className="split__item flex--none height--auto">\r
                                <div className="heading-group heading-group--underline">\r
                                    <strong className="heading--3">비교할 룰 찾기</strong>\r
                                </div>\r
                                <div className="search">\r
                                    <div className="search__input-group">\r
                                        <div className="search__input-group-row">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--xs">단위 룰 시스템</div>\r
                                                <div className="form-item__control">\r
                                                    <select>\r
                                                        <option>개발</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div className="search__input-group-row">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--xs">룰 이름</div>\r
                                                <div className="form-item__control">\r
                                                    <div className="input">\r
                                                        <input type="text" className="input__native" />\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <button type="button" className="button button--tertiary">검색</button>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group heading-group--underline mb--none">\r
                                        <strong className="heading--4">룰 이름</strong>\r
                                        <span className="tag tag--primary">table</span>\r
                                    </div>\r
                                    <div className="list scroll">\r
                                        <ul className="list__wrapper">\r
                                            {new Array(20).fill("").map((_, key) => <li key={key} className="list__item">table_A</li>)}\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group heading-group--underline mb--none">\r
                                        <strong className="heading--4">버전 일자</strong>\r
                                        <span className="tag tag--primary">table_B</span>\r
                                    </div>\r
                                    <div className="list scroll">\r
                                        <ul className="list__wrapper">\r
                                            {new Array(20).fill("").map((_, key) => <li key={key} className="list__item">2020-09-26</li>)}\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group heading-group--underline mb--none">\r
                                        <strong className="heading--4">이력</strong>\r
                                        <span className="tag tag--primary">table_B</span>\r
                                    </div>\r
                                    <div className="table scroll mt--none">\r
                                        <table>\r
                                            <colgroup>\r
                                                <col />\r
                                                <col />\r
                                            </colgroup>\r
                                            <thead>\r
                                                <tr>\r
                                                    <th scope="row" className="text--start">이관자</th>\r
                                                    <th scope="row" className="text--start">이관 일시</th>\r
                                                </tr>\r
                                            </thead>\r
                                            <tbody>\r
                                                {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                    <td className="text--start">이규철 선임</td>\r
                                                    <td className="text--start">2021007-02 13:28:02</td>\r
                                                </tr>)}\r
                                            </tbody>\r
                                        </table>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item flex--none width--screen min-width--screen-min-width">\r
                        <div className="split">\r
                            <div className="split__item relative overflow--hidden">\r
                                <div className="rule-container">\r
                                    <div className="row">\r
                                        <div className="col">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--auto">비교 기준룰</div>\r
                                                <div className="form-item__control">\r
                                                    <div className="row align-items--center gap-x--sm">\r
                                                        <div className="col col--none">[개발]table 비교</div>\r
                                                        <div className="col col--none">\r
                                                            <select className="width--md">\r
                                                                <option>1970-01-01</option>\r
                                                            </select>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div className="button-group mt--xl">\r
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
                                            <i className="button__icon-prefix ir-icon ir-icon--edit" /> 룰 정보 변경\r
                                        </button>\r
                                        <button type="button" className="button">\r
                                            <i className="button__icon-prefix ir-icon ir-icon--memo" /> 항목 정보\r
                                        </button>\r
                                        <button type="button" className="button">\r
                                            <i className="button__icon-prefix ir-icon ir-icon--folder-open-fill" /> 다른 단계의 룰 열기\r
                                        </button>\r
                                    </div>\r
                                    <div className="divider my--xl" />\r
                                    <div className="row">\r
                                        <div className="col col--none">\r
                                            <span className="rule-option-tag">\r
                                                <i className="rule-option-tag__icon-prefix ir-icon ir-icon--return-single" /> 단일값\r
                                            </span>\r
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
                                                <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-left" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-right" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-top" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--column" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--col-add2" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--col-del2" />\r
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
                                                <i className="side-toolbar__icon ir-icon ir-icon--eye" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--folder-open-outline" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--cell-merge" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--cell-split" />\r
                                            </button>\r
                                        </div>\r
                                        <div className="grid">.grid</div>\r
                                    </div>\r
                                </div>\r
                                <Drawer addClass="absolute" direction="bottom" expanded={false}>\r
                                    <DrawerTab id="ruleDetail" title="상세 입력" prefixIcon="ir-icon--edit" suffixIcon="ir-icon--triangle-small-top">\r
                                        <RuleDetail />\r
                                    </DrawerTab>\r
                                </Drawer>\r
                            </div>\r
                            <button className="split__button">\r
                                <i className="ir-icon ir-icon--swap" />\r
                            </button>\r
                            <div className="split__item relative overflow--hidden">\r
                                <div className="rule-container">\r
                                    <div className="row">\r
                                        <div className="col">\r
                                            <div className="form-item">\r
                                                <div className="form-item__label width--auto">비교 대상룰</div>\r
                                                <div className="form-item__control">\r
                                                    <div className="row align-items--center gap-x--sm">\r
                                                        <div className="col col--none">[개발]table 비교</div>\r
                                                        <div className="col col--none">\r
                                                            <select className="width--md">\r
                                                                <option>1970-01-01</option>\r
                                                            </select>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div className="button-group mt--xl">\r
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
                                            <i className="button__icon-prefix ir-icon ir-icon--edit" /> 룰 정보 변경\r
                                        </button>\r
                                        <button type="button" className="button">\r
                                            <i className="button__icon-prefix ir-icon ir-icon--memo" /> 항목 정보\r
                                        </button>\r
                                        <button type="button" className="button">\r
                                            <i className="button__icon-prefix ir-icon ir-icon--folder-open-fill" /> 다른 단계의 룰 열기\r
                                        </button>\r
                                    </div>\r
                                    <div className="divider my--xl" />\r
                                    <div className="row">\r
                                        <div className="col col--none">\r
                                            <span className="rule-option-tag">\r
                                                <i className="rule-option-tag__icon-prefix ir-icon ir-icon--return-single" /> 단일값\r
                                            </span>\r
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
                                                <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-left" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-right" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--chevron-double-top" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--column" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--col-add2" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--col-del2" />\r
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
                                                <i className="side-toolbar__icon ir-icon ir-icon--eye" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--folder-open-outline" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--cell-merge" />\r
                                            </button>\r
                                            <button type="button" className="side-toolbar__button">\r
                                                <i className="side-toolbar__icon ir-icon ir-icon--cell-split" />\r
                                            </button>\r
                                        </div>\r
                                        <div className="grid">.grid</div>\r
                                    </div>\r
                                </div>\r
                                <Drawer addClass="absolute" direction="bottom" expanded={false}>\r
                                    <DrawerTab id="ruleDetail" title="상세 입력" prefixIcon="ir-icon--edit" suffixIcon="ir-icon--triangle-small-top">\r
                                        <RuleDetail />\r
                                    </DrawerTab>\r
                                </Drawer>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </main>\r
        </App>;
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const L=["룰_비교"];export{L as __namedExportsOrder,S as default,r as 룰_비교};
//# sourceMappingURL=룰_비교.stories-216f96d5.js.map
