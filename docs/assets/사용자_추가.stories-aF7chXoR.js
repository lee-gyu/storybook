import{j as r,a as e,F as t}from"./jsx-runtime-KzWSGvcx.js";import{r as d}from"./index-DogsOklH.js";import"./timePicker.elements-RVnBiWo6.js";import{I as u}from"./select-KmN-oMMw.js";import{I as n}from"./datePicker-143Z-Tg8.js";import{D as o,a as m,b as h,c as p}from"./dialog.header-jt6yyT8t.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./index-eYBRYqm7.js";import"./index-xS4YNjdq.js";const B={title:"Builder Examples/메인"},a=()=>(d.useEffect(()=>{document.querySelectorAll("select").forEach(s=>new u(s)),new n({div:document.getElementById("datepicker_start"),checkbox:!0,disabled:!0}),new n({div:document.getElementById("datepicker_end"),checkbox:!0,disabled:!0})},[]),r(o,{visible:!0,style:{width:1014,height:736},children:[e(m,{title:"사용자 추가"}),e(h,{children:r("div",{className:"split split--vertical",children:[r("div",{className:"split__item flex--none height--auto",children:[r("div",{className:"form-group",children:[r("div",{className:"form-group__item",children:[r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"사용자 ID"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"사용자 ID를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"사용자 이름"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"사용자 이름를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"비밀번호"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"비밀번호를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"비밀번호(확인)"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"비밀번호를 입력하십시오(확인)."})})})]})]}),r("div",{className:"form-group__item",children:[r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"직위(옵션)"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"직위를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"전화번호(옵션)"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"전화번호를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"부서(옵션)"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"부서를 입력하십시오."})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"계정 시작/종료일"}),e("div",{className:"form-item__control",children:r("div",{className:"input-date-range",children:[e("div",{id:"datepicker_start"}),e("span",{className:"input-date-range__separator"}),e("div",{id:"datepicker_end"})]})})]})]})]}),r("div",{className:"callout",children:[e("strong",{className:"callout__title",children:"비밀번호 규칙"}),e("p",{className:"callout__paragraph",children:"ID와 동일한 비밀번호 사용 불가 / 최대 길이 : 50"})]})]}),e("div",{className:"split__item",children:r("div",{className:"split",children:[e("div",{className:"split__item",children:r("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:e("strong",{className:"heading--4 line-height--loose",children:"역할"})}),e("div",{className:"table scroll mt--none",children:r("table",{children:[r("colgroup",{children:[e("col",{style:{width:"36px"}}),e("col",{}),e("col",{style:{width:"54px"}})]}),e("thead",{children:r("tr",{children:[e("th",{scope:"row",children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("th",{scope:"row",className:"text--start",children:"역할"}),e("th",{scope:"row",children:"활성화"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"룰 시스템 접속"}),e("td",{children:"Y"})]}),r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"전체 기능 실행"}),e("td",{children:"Y"})]}),r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"룰 시스템 정보 관리"}),e("td",{children:"Y"})]}),r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"룰 빌더 관리"}),e("td",{children:"Y"})]}),r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"룰 서비스 활용"}),e("td",{children:"Y"})]}),r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"룰 개발"}),e("td",{children:"Y"})]}),r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{className:"text--start",children:"승인/이관 관리"}),e("td",{children:"Y"})]})]})]})})]})}),e("div",{className:"split__item",children:r("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:e("strong",{className:"heading--4 line-height--loose",children:"권한"})}),e("div",{className:"table scroll mt--none",children:r("table",{children:[e("colgroup",{children:e("col",{})}),e("thead",{children:e("tr",{children:e("th",{scope:"row",className:"text--start",children:"권한 이름"})})})]})})]})}),r("div",{className:"split__item",children:[r("div",{className:"heading-group",children:[e("strong",{className:"heading--4",children:"허용 IP 대역"}),e("div",{className:"heading-group__actions",children:r("button",{type:"button",className:"button",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--row"}),"최종행 추가"]})})]}),e("div",{className:"grid",children:".grid"})]})]})})]})}),e(p,{left:r(t,{children:[r("button",{type:"button",className:"button",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--authentication"})," 권한/역할 조회"]}),e("div",{className:"checkbox",children:r("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"비활성화 포함"})]})})]}),right:r(t,{children:[e("div",{className:"checkbox",children:r("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"사용자 계속 추가"})]})}),e("button",{type:"button",className:"button button--primary",children:"확인"})]})})]}));var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll("select").forEach(element => new IRSelect(element));
    new IRDatePicker({
      div: (document.getElementById("datepicker_start") as HTMLDivElement),
      checkbox: true,
      disabled: true
    });
    new IRDatePicker({
      div: (document.getElementById("datepicker_end") as HTMLDivElement),
      checkbox: true,
      disabled: true
    });
  }, []);
  return <Dialog visible={true} style={{
    width: 1014,
    height: 736
  }}>\r
            <DialogHeader title="사용자 추가" />\r
            <DialogContent>\r
                <div className="split split--vertical">\r
                    <div className="split__item flex--none height--auto">\r
                        <div className="form-group">\r
                            <div className="form-group__item">\r
                                <div className="form-item">\r
                                    <div className="form-item__label">사용자 ID</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="사용자 ID를 입력하십시오." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item">\r
                                    <div className="form-item__label">사용자 이름</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="사용자 이름를 입력하십시오." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item">\r
                                    <div className="form-item__label">비밀번호</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="password" className="input__native" placeholder="비밀번호를 입력하십시오." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item">\r
                                    <div className="form-item__label">비밀번호(확인)</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="비밀번호를 입력하십시오(확인)." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="form-group__item">\r
                                <div className="form-item">\r
                                    <div className="form-item__label">직위(옵션)</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="직위를 입력하십시오." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item">\r
                                    <div className="form-item__label">전화번호(옵션)</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="전화번호를 입력하십시오." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item">\r
                                    <div className="form-item__label">부서(옵션)</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input">\r
                                            <input type="text" className="input__native" placeholder="부서를 입력하십시오." />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className="form-item">\r
                                    <div className="form-item__label">계정 시작/종료일</div>\r
                                    <div className="form-item__control">\r
                                        <div className="input-date-range">\r
                                            <div id="datepicker_start" />\r
                                            <span className="input-date-range__separator" />\r
                                            <div id="datepicker_end" />\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div className="callout">\r
                            <strong className="callout__title">비밀번호 규칙</strong>\r
                            <p className="callout__paragraph">ID와 동일한 비밀번호 사용 불가 / 최대 길이 : 50</p>\r
                        </div>\r
                    </div>\r
                    <div className="split__item">\r
                        <div className="split">\r
                            <div className="split__item">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group">\r
                                        <strong className="heading--4 line-height--loose">역할</strong>\r
                                    </div>\r
                                    <div className="table scroll mt--none">\r
                                        <table>\r
                                            <colgroup>\r
                                                <col style={{
                        width: "36px"
                      }} />\r
                                                <col />\r
                                                <col style={{
                        width: "54px"
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
                                                    <th scope="row" className="text--start">역할</th>\r
                                                    <th scope="row">활성화</th>\r
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
                                                    <td className="text--start">룰 시스템 접속</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                                <tr>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">전체 기능 실행</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                                <tr>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">룰 시스템 정보 관리</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                                <tr>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">룰 빌더 관리</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                                <tr>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">룰 서비스 활용</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                                <tr>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">룰 개발</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                                <tr>\r
                                                    <td>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" />\r
                                                            </label>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start">승인/이관 관리</td>\r
                                                    <td>Y</td>\r
                                                </tr>\r
                                            </tbody>\r
                                        </table>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="scroll-wrapper">\r
                                    <div className="heading-group">\r
                                        <strong className="heading--4 line-height--loose">권한</strong>\r
                                    </div>\r
                                    <div className="table scroll mt--none">\r
                                        <table>\r
                                            <colgroup>\r
                                                <col />\r
                                            </colgroup>\r
                                            <thead>\r
                                                <tr>\r
                                                    <th scope="row" className="text--start">권한 이름</th>\r
                                                </tr>\r
                                            </thead>\r
                                        </table>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className="split__item">\r
                                <div className="heading-group">\r
                                    <strong className="heading--4">허용 IP 대역</strong>\r
                                    <div className="heading-group__actions">\r
                                        <button type="button" className="button">\r
                                            <i className="button__icon-prefix ir-icon ir-icon--row" />\r
                                        최종행 추가\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div className="grid">.grid</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
            <DialogFooter left={<>\r
                        <button type="button" className="button">\r
                            <i className="button__icon-prefix ir-icon ir-icon--authentication" /> 권한/역할 조회\r
                        </button>\r
                        <div className="checkbox">\r
                            <label className="checkbox__wrapper">\r
                                <input type="checkbox" className="checkbox__input" />\r
                                <span className="checkbox__text">비활성화 포함</span>\r
                            </label>\r
                        </div>\r
                    </>} right={<>\r
                        <div className="checkbox">\r
                            <label className="checkbox__wrapper">\r
                                <input type="checkbox" className="checkbox__input" />\r
                                <span className="checkbox__text">사용자 계속 추가</span>\r
                            </label>\r
                        </div>\r
                        <button type="button" className="button button--primary">\r
                            확인\r
                        </button>\r
                    </>} />\r
        </Dialog>;
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const y=["사용자_추가"];export{y as __namedExportsOrder,B as default,a as 사용자_추가};
