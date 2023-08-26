import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{r as o}from"./index-1b03fe98.js";import"./timePicker.elements-3c8a0aec.js";import{I as d}from"./select-35a4c028.js";import{A as h}from"./app-35831e09.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-d6235da7.js";import"./v4-a960c1f4.js";const y={title:"Builder Examples/룰"},a=()=>(o.useEffect(()=>{document.querySelectorAll("select").forEach(r=>new d(r)),document.querySelectorAll(".menu-container").forEach(r=>{r.addEventListener("click",t=>{if(t.target instanceof HTMLButtonElement){const l=t.target.nextElementSibling;console.log(l),l==null||l.classList.toggle("is-visible",!(l!=null&&l.classList.contains("is-visible")))}})})},[]),n(h,{children:[n("header",{className:"flex flex--none align-items--center gap-x--xxl py--lg px--xxl",children:[e("h1",{className:"innorules-logo innorules-logo--sm order--2 ml--auto",children:e("span",{className:"a11y-hidden",children:"InnoRules"})}),e("strong",{className:"heading--2 flex--auto",children:"룰 이관"})]}),n("div",{className:"ribbon",children:[e("select",{className:"width--sm",children:e("option",{children:"개발 → 운영"})}),n("div",{className:"row align-items--center gap-x--xs ml--auto",children:[e("div",{className:"col col--none",children:e("div",{className:"switch",children:n("label",{className:"switch__wrapper",children:[n("span",{className:"switch__track",children:[e("input",{type:"checkbox",className:"switch__input"}),e("span",{className:"switch__slider"})]}),e("span",{className:"switch__text",children:"선택한 룰 리스트"})]})})}),e("div",{className:"col col--none",children:e("div",{className:"switch",children:n("label",{className:"switch__wrapper",children:[n("span",{className:"switch__track",children:[e("input",{type:"checkbox",className:"switch__input"}),e("span",{className:"switch__slider"})]}),e("span",{className:"switch__text",children:"연관 룰 리스트"})]})})})]})]}),e("main",{className:"flex flex--auto flex--column min-height--none",children:n("div",{className:"split",children:[e("div",{className:"split__item",children:n("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:e("strong",{className:"heading--3 line-height--loose",children:"이관 대상 리스트"})}),n("div",{className:"row",children:[n("div",{className:"row align-items--center gap-x--xs col col--none",children:[e("div",{className:"col col--none",children:e("div",{className:"checkbox",children:n("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"브랜치 노드 이관"})]})})}),e("div",{className:"col col--none",children:e("div",{className:"checkbox",children:n("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"이관-삭제인 항목 이관"})]})})})]}),n("div",{className:"col col--none button-group ml--auto",children:[n("button",{type:"button",className:"button button--sm",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--verify"})," 검증"]}),n("button",{type:"button",className:"button button--sm",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--rule-apply"})," 이관"]})]})]}),n("div",{className:"heading-group heading-group--underline mt--xl mb--none",children:[e("strong",{className:"heading--4",children:"동시 이관 룰 : 1건"}),e("div",{className:"heading-group__actions",children:n("button",{type:"button",className:"button button--sm",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--apply-circle-fill"})," 승인"]})})]}),e("div",{className:"flex--auto height--block min-height--none",children:e("div",{className:"table scroll",children:n("table",{children:[n("colgroup",{children:[e("col",{style:{width:"36px"}}),e("col",{style:{width:"130px"}}),e("col",{style:{minWidth:"90px"}}),e("col",{style:{width:"60px"}}),e("col",{style:{width:"60px"}}),e("col",{style:{width:"90px"}}),e("col",{style:{width:"90px"}})]}),e("thead",{children:n("tr",{children:[e("th",{scope:"row",children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("th",{scope:"row",className:"text--start",children:"룰 코드"}),e("th",{scope:"row",className:"text--start",children:"룰 이름"}),e("th",{scope:"row",children:"승인"}),e("th",{scope:"row",children:"에러"}),e("th",{scope:"row",children:"(권한) 룰 이관"}),e("th",{scope:"row",children:"선택한 룰"})]})}),e("tbody",{children:new Array(20).fill("").map((r,t)=>n("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:n("div",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"#S00000001"})]})}),e("td",{className:"text--start",children:"Table"}),e("td",{children:"-"}),e("td",{children:"-"}),e("td",{children:"Y"}),e("td",{children:"Y"})]},t))})]})})}),e("div",{className:"divider my--xl -mx--xxl"}),e("div",{className:"heading-group heading-group--underline mt--xl mb--none",children:e("strong",{className:"heading--4",children:"동시 이관 항목 : 1건"})}),e("div",{className:"flex--auto height--block min-height--none",children:e("div",{className:"table scroll",children:n("table",{children:[n("colgroup",{children:[e("col",{style:{width:"130px"}}),e("col",{}),e("col",{style:{width:"90px"}})]}),e("thead",{children:n("tr",{children:[e("th",{scope:"row",className:"text--start",children:"항목 코드"}),e("th",{scope:"row",className:"text--start",children:"항목 이름"}),e("th",{scope:"row",children:"이관-삭제"})]})}),e("tbody",{children:new Array(20).fill("").map((r,t)=>n("tr",{children:[e("td",{className:"text--start",children:n("div",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"#S00000001"})]})}),e("td",{className:"text--start",children:"Table"}),e("td",{children:"-"})]},t))})]})})})]})}),e("div",{className:"split__item flex--none width--4xl",children:n("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group line-height--loose",children:e("strong",{className:"heading--3",children:"선택한 룰 리스트"})}),e("div",{className:"table scroll mt--none",children:n("table",{children:[n("colgroup",{children:[e("col",{style:{width:"130px"}}),e("col",{}),e("col",{style:{width:"36px"}})]}),e("thead",{children:n("tr",{children:[e("th",{scope:"row",className:"text--start",children:"항목 코드"}),e("th",{scope:"row",className:"text--start",children:"항목 이름"}),e("th",{scope:"row",children:e("button",{type:"button",className:"icon-button icon-button--sm",children:e("i",{className:"ir-icon ir-icon--close"})})})]})}),e("tbody",{children:new Array(20).fill("").map((r,t)=>n("tr",{children:[e("td",{className:"text--start",children:n("div",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"#S00000001"})]})}),e("td",{className:"text--start",children:"Table"}),e("td",{children:e("button",{type:"button",className:"icon-button icon-button--sm",children:e("i",{className:"ir-icon ir-icon--close"})})})]},t))})]})})]})}),e("div",{className:"split__item flex--none width--4xl",children:n("div",{className:"scroll-wrapper",children:[n("div",{className:"heading-group",children:[e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--triangle-left"})}),e("strong",{className:"heading--3",children:"연관 룰(동시 이관 필요 없음) : 0건"})]}),e("div",{className:"table scroll mt--none",children:n("table",{children:[n("colgroup",{children:[e("col",{style:{width:"36px"}}),e("col",{style:{width:"130px"}}),e("col",{})]}),e("thead",{children:n("tr",{children:[e("th",{scope:"row",children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("th",{scope:"row",className:"text--start",children:"룰 코드"}),e("th",{scope:"row",className:"text--start",children:"룰 이름"})]})}),e("tbody",{children:new Array(20).fill("").map((r,t)=>n("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:n("div",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"#S00000001"})]})}),e("td",{className:"text--start",children:"Table"})]},t))})]})})]})})]})})]}));var s,c,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
            <header className="flex flex--none align-items--center gap-x--xxl py--lg px--xxl">\r
                <h1 className="innorules-logo innorules-logo--sm order--2 ml--auto"><span className="a11y-hidden">InnoRules</span></h1>\r
                <strong className="heading--2 flex--auto">룰 이관</strong>\r
            </header>\r
            <div className="ribbon">\r
                <select className="width--sm">\r
                    <option>개발 → 운영</option>\r
                </select>\r
                <div className="row align-items--center gap-x--xs ml--auto">\r
                    <div className="col col--none">\r
                        <div className="switch">\r
                            <label className="switch__wrapper">\r
                                <span className="switch__track">\r
                                    <input type="checkbox" className="switch__input" />\r
                                    <span className="switch__slider" />\r
                                </span>\r
                                <span className="switch__text">선택한 룰 리스트</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="col col--none">\r
                        <div className="switch">\r
                            <label className="switch__wrapper">\r
                                <span className="switch__track">\r
                                    <input type="checkbox" className="switch__input" />\r
                                    <span className="switch__slider" />\r
                                </span>\r
                                <span className="switch__text">연관 룰 리스트</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <main className="flex flex--auto flex--column min-height--none">\r
                <div className="split">\r
                    <div className="split__item">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <strong className="heading--3 line-height--loose">이관 대상 리스트</strong>\r
                            </div>\r
                            <div className="row">\r
                                <div className="row align-items--center gap-x--xs col col--none">\r
                                    <div className="col col--none">\r
                                        <div className="checkbox">\r
                                            <label className="checkbox__wrapper">\r
                                                <input type="checkbox" className="checkbox__input" />\r
                                                <span className="checkbox__text">브랜치 노드 이관</span>\r
                                            </label>\r
                                        </div>\r
\r
                                    </div>\r
                                    <div className="col col--none">\r
                                        <div className="checkbox">\r
                                            <label className="checkbox__wrapper">\r
                                                <input type="checkbox" className="checkbox__input" />\r
                                                <span className="checkbox__text">이관-삭제인 항목 이관</span>\r
                                            </label>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="col col--none button-group ml--auto">\r
                                    <button type="button" className="button button--sm">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--verify" /> 검증\r
                                    </button>\r
                                    <button type="button" className="button button--sm">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--rule-apply" /> 이관\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div className="heading-group heading-group--underline mt--xl mb--none">\r
                                <strong className="heading--4">동시 이관 룰 : 1건</strong>\r
                                <div className="heading-group__actions">\r
                                    <button type="button" className="button button--sm">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--apply-circle-fill" /> 승인\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div className="flex--auto height--block min-height--none">\r
                                <div className="table scroll">\r
                                    <table>\r
                                        <colgroup>\r
                                            <col style={{
                      "width": "36px"
                    }} />\r
                                            <col style={{
                      "width": "130px"
                    }} />\r
                                            <col style={{
                      "minWidth": "90px"
                    }} />\r
                                            <col style={{
                      "width": "60px"
                    }} />\r
                                            <col style={{
                      "width": "60px"
                    }} />\r
                                            <col style={{
                      "width": "90px"
                    }} />\r
                                            <col style={{
                      "width": "90px"
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
                                                <th scope="row" className="text--start">룰 코드</th>\r
                                                <th scope="row" className="text--start">룰 이름</th>\r
                                                <th scope="row">승인</th>\r
                                                <th scope="row">에러</th>\r
                                                <th scope="row">(권한) 룰 이관</th>\r
                                                <th scope="row">선택한 룰</th>\r
                                            </tr>\r
                                        </thead>\r
                                        <tbody>\r
                                            {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">\r
                                                        <div className="rule-name">\r
                                                            <i className="ir-icon ir-icon--rule-type-table" />\r
                                                            <span className="rule-name__text">#S00000001</span>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">Table</td>\r
                                                    <td>-</td>\r
                                                    <td>-</td>\r
                                                    <td>Y</td>\r
                                                    <td>Y</td>\r
                                                </tr>)}\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </div>\r
                            <div className="divider my--xl -mx--xxl" />\r
                            <div className="heading-group heading-group--underline mt--xl mb--none">\r
                                <strong className="heading--4">동시 이관 항목 : 1건</strong>\r
                            </div>\r
                            <div className="flex--auto height--block min-height--none">\r
                                <div className="table scroll">\r
                                    <table>\r
                                        <colgroup>\r
                                            <col style={{
                      "width": "130px"
                    }} />\r
                                            <col />\r
                                            <col style={{
                      "width": "90px"
                    }} />\r
                                        </colgroup>\r
                                        <thead>\r
                                            <tr>\r
                                                <th scope="row" className="text--start">항목 코드</th>\r
                                                <th scope="row" className="text--start">항목 이름</th>\r
                                                <th scope="row">이관-삭제</th>\r
                                            </tr>\r
                                        </thead>\r
                                        <tbody>\r
                                            {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                    <td className="text--start">\r
                                                        <div className="rule-name">\r
                                                            <i className="ir-icon ir-icon--rule-type-table" />\r
                                                            <span className="rule-name__text">#S00000001</span>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">Table</td>\r
                                                    <td>-</td>\r
                                                </tr>)}\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item flex--none width--4xl">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group line-height--loose">\r
                                <strong className="heading--3">선택한 룰 리스트</strong>\r
                            </div>\r
                            <div className="table scroll mt--none">\r
                                <table>\r
                                    <colgroup>\r
                                        <col style={{
                    "width": "130px"
                  }} />\r
                                        <col />\r
                                        <col style={{
                    "width": "36px"
                  }} />\r
                                    </colgroup>\r
                                    <thead>\r
                                        <tr>\r
                                            <th scope="row" className="text--start">항목 코드</th>\r
                                            <th scope="row" className="text--start">항목 이름</th>\r
                                            <th scope="row">\r
                                                <button type="button" className="icon-button icon-button--sm">\r
                                                    <i className="ir-icon ir-icon--close" />\r
                                                </button>\r
                                            </th>\r
                                        </tr>\r
                                    </thead>\r
                                    <tbody>\r
                                        {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                <td className="text--start">\r
                                                    <div className="rule-name">\r
                                                        <i className="ir-icon ir-icon--rule-type-table" />\r
                                                        <span className="rule-name__text">#S00000001</span>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">Table</td>\r
                                                <td>\r
                                                    <button type="button" className="icon-button icon-button--sm">\r
                                                        <i className="ir-icon ir-icon--close" />\r
                                                    </button>\r
                                                </td>\r
                                            </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item flex--none width--4xl">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <button type="button" className="button button--icon">\r
                                    <i className="ir-icon ir-icon--triangle-left" />\r
                                </button>\r
                                <strong className="heading--3">연관 룰(동시 이관 필요 없음) : 0건</strong>\r
                            </div>\r
                            <div className="table scroll mt--none">\r
                                <table>\r
                                    <colgroup>\r
                                        <col style={{
                    "width": "36px"
                  }} />\r
                                        <col style={{
                    "width": "130px"
                  }} />\r
                                        <col />\r
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
                                            <th scope="row" className="text--start">룰 코드</th>\r
                                            <th scope="row" className="text--start">룰 이름</th>\r
                                        </tr>\r
                                    </thead>\r
                                    <tbody>\r
                                        {new Array(20).fill("").map((_, index) => <tr key={index}>\r
                                                <td>\r
                                                    <div className="checkbox">\r
                                                        <label className="checkbox__wrapper">\r
                                                            <input type="checkbox" className="checkbox__input" />\r
                                                        </label>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">\r
                                                    <div className="rule-name">\r
                                                        <i className="ir-icon ir-icon--rule-type-table" />\r
                                                        <span className="rule-name__text">#S00000001</span>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start">Table</td>\r
                                            </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </main>\r
        </App>;
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const k=["룰_이관"];export{k as __namedExportsOrder,y as default,a as 룰_이관};
//# sourceMappingURL=룰_이관.stories-23e5be9d.js.map
