import{j as a,a as e}from"./jsx-runtime-KzWSGvcx.js";import{r as n}from"./index-DogsOklH.js";import"./timePicker.elements-RVnBiWo6.js";import{I as d}from"./datePicker-143Z-Tg8.js";import{D as o,a as m,b as h}from"./dialog.header-jt6yyT8t.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./index-eYBRYqm7.js";import"./index-xS4YNjdq.js";const k={title:"Builder Examples/메인/스펙트럼"},t=()=>(n.useEffect(()=>{new d({div:document.getElementById("date_picker")})},[]),a(o,{visible:!0,style:{width:1014,height:736},children:[e(m,{title:"케이스 추가"}),e(h,{children:a("div",{className:"split split--vertical",children:[e("div",{className:"split__item flex--none height--auto",children:a("div",{className:"row align-items--center",children:[e("div",{className:"col col--none",children:a("div",{className:"form-item",children:[e("div",{className:"form-item__label width--auto",children:"룰 이름"}),e("div",{className:"form-item__control",children:e("div",{className:"input width--xl",children:e("input",{type:"text",className:"input__native"})})})]})}),e("div",{className:"col col--divider"}),e("div",{className:"col col--none",children:a("div",{className:"form-item",children:[e("div",{className:"form-item__label width--auto",children:"실행 횟수"}),e("div",{className:"form-item__control",children:e("div",{className:"input width--xxs",children:e("input",{type:"number",className:"input__native"})})})]})}),e("div",{className:"col col--divider"}),e("div",{className:"col col--none",children:a("div",{className:"form-item",children:[e("div",{className:"form-item__label width--auto",children:"날짜 지정"}),e("div",{className:"form-item__control",children:e("div",{id:"date_picker",className:"width--sm"})})]})}),e("div",{className:"col col--divider"}),e("div",{className:"col col--none",children:e("div",{className:"checkbox",children:a("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"오류 시 종료"})]})})})]})}),e("div",{className:"split__item",children:a("div",{className:"split",children:[e("div",{className:"split__item col col--7",children:a("div",{className:"scroll-wrapper",children:[a("div",{className:"heading-group",children:[e("strong",{className:"heading--3",children:"모든 테스트 데이터"}),e("div",{className:"heading-group__actions",children:e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--add-test-case"})})})]}),e("div",{className:"table scroll",children:a("table",{children:[a("colgroup",{children:[e("col",{style:{width:36}}),e("col",{style:{width:60}}),e("col",{}),e("col",{style:{width:120}}),e("col",{style:{width:120}})]}),e("thead",{children:a("tr",{children:[e("th",{scope:"row",children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("th",{scope:"row",className:"text--start",children:"순서"}),e("th",{scope:"row",className:"text--start",children:"테스트 데이터 이름"}),e("th",{scope:"row",className:"text--start",children:"변경자"}),e("th",{scope:"row",className:"text--start",children:"변경 일시"})]})}),e("tbody",{children:new Array(20).fill("").map((i,r)=>a("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"1"}),e("td",{className:"text--start",children:"시나리오 A"}),e("td",{className:"text--ellipsis",children:"ID:admin2,Name:임시 관리자,IP:172.16.219.2"}),e("td",{className:"text--ellipsis",children:"2022-03-02 05:44:49"})]},r))})]})})]})}),e("div",{className:"split__item col col--auto",children:a("div",{className:"scroll-wrapper",children:[a("div",{className:"heading-group",children:[e("strong",{className:"heading--3",children:"사용 테스트 데이터"}),e("div",{className:"heading-group__actions",children:e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--delete-dash"})})})]}),e("div",{className:"table scroll",children:a("table",{children:[a("colgroup",{children:[e("col",{style:{width:36}}),e("col",{style:{width:60}}),e("col",{})]}),e("thead",{children:a("tr",{children:[e("th",{scope:"row",children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("th",{scope:"row",className:"text--start",children:"순서"}),e("th",{scope:"row",className:"text--start",children:"테스트 데이터 이름"})]})}),e("tbody",{children:new Array(20).fill("").map((i,r)=>a("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"1"}),e("td",{className:"text--start",children:"시나리오 A"})]},r))})]})})]})})]})})]})})]}));var c,l,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  useEffect(() => {
    new IRDatePicker({
      div: (document.getElementById("date_picker") as HTMLDivElement)
    });
  }, []);
  return <Dialog visible={true} style={{
    width: 1014,
    height: 736
  }}>\r
            <DialogHeader title="케이스 추가" />\r
            <DialogContent>\r
                <div className="split split--vertical">\r
                    <div className="split__item flex--none height--auto">\r
                        <div className="row align-items--center">\r
                            <div className="col col--none">\r
                                <div className="form-item">\r
                                    <div className="form-item__label width--auto">룰 이름</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input width--xl">\r
                                            <input type="text" className="input__native" />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="col col--divider" />\r
                            <div className="col col--none">\r
                                <div className="form-item">\r
                                    <div className="form-item__label width--auto">실행 횟수</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input width--xxs">\r
                                            <input type="number" className="input__native" />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="col col--divider" />\r
                            <div className="col col--none">\r
                                <div className="form-item">\r
                                    <div className="form-item__label width--auto">날짜 지정</div>\r
                                    <div className="form-item__control">\r
                                        <div id="date_picker" className="width--sm" />\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="col col--divider" />\r
                            <div className="col col--none">\r
                                <div className="checkbox">\r
                                    <label className="checkbox__wrapper">\r
                                        <input type="checkbox" className="checkbox__input" />\r
                                        <span className="checkbox__text">오류 시 종료</span>\r
                                    </label>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item">\r
                        <div className="split">\r
                            <div className="split__item col col--7">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group">\r
                                        <strong className="heading--3">모든 테스트 데이터</strong>\r
                                        <div className="heading-group__actions">\r
                                            <button type="button" className="button button--icon">\r
                                                <i className="ir-icon ir-icon--add-test-case" />\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                    <div className="table scroll">\r
                                        <table>\r
                                            <colgroup>\r
                                                <col style={{
                        width: 36
                      }} />\r
                                                <col style={{
                        width: 60
                      }} />\r
                                                <col />\r
                                                <col style={{
                        width: 120
                      }} />\r
                                                <col style={{
                        width: 120
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
                                                    <th scope="row" className="text--start">순서</th>\r
                                                    <th scope="row" className="text--start">테스트 데이터 이름</th>\r
                                                    <th scope="row" className="text--start">변경자</th>\r
                                                    <th scope="row" className="text--start">변경 일시</th>\r
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
                                                        <td className="text--start">1</td>\r
                                                        <td className="text--start">시나리오 A</td>\r
                                                        <td className="text--ellipsis">ID:admin2,Name:임시 관리자,IP:172.16.219.2</td>\r
                                                        <td className="text--ellipsis">2022-03-02 05:44:49</td>\r
                                                    </tr>)}\r
                                            </tbody>\r
                                        </table>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="split__item col col--auto">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group">\r
                                        <strong className="heading--3">사용 테스트 데이터</strong>\r
                                        <div className="heading-group__actions">\r
                                            <button type="button" className="button button--icon">\r
                                                <i className="ir-icon ir-icon--delete-dash" />\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                    <div className="table scroll">\r
                                        <table>\r
                                            <colgroup>\r
                                                <col style={{
                        width: 36
                      }} />\r
                                                <col style={{
                        width: 60
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
                                                    <th scope="row" className="text--start">순서</th>\r
                                                    <th scope="row" className="text--start">테스트 데이터 이름</th>\r
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
                                                        <td className="text--start">1</td>\r
                                                        <td className="text--start">시나리오 A</td>\r
                                                    </tr>)}\r
                                            </tbody>\r
                                        </table>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
        </Dialog>;
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const g=["스펙트럼_케이스_추가"];export{g as __namedExportsOrder,k as default,t as 스펙트럼_케이스_추가};
