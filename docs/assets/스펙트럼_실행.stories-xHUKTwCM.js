import{j as e,a as t}from"./jsx-runtime-KzWSGvcx.js";import{D as i,a as o,b as d}from"./dialog.header-jt6yyT8t.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const p={title:"Builder Examples/메인/스펙트럼"},r=()=>e(i,{visible:!0,style:{width:1400,height:736},children:[t(o,{title:"[개발] 스펙트럼 실행: 이노보험 이벤트 당첨자 목록"}),t(d,{children:e("div",{className:"split",children:[t("div",{className:"split__item",children:e("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:[t("strong",{className:"heading--3",children:"시나리오 테스트"}),t("div",{className:"heading-group__actions",children:t("button",{type:"button",className:"button button--sm",children:"추가"})})]}),t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{style:{width:80}}),t("col",{}),t("col",{style:{width:100}}),t("col",{style:{width:100}}),t("col",{style:{width:58}})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",className:"text--start",children:"시나리오 ID"}),t("th",{scope:"row",className:"text--start",children:"시나리오 이름"}),t("th",{scope:"row",className:"text--start",children:"변경자"}),t("th",{scope:"row",className:"text--start",children:"변경 일시"}),t("th",{scope:"row",children:t("span",{className:"a11y-hidden",children:"수정 및 삭제"})})]})}),t("tbody",{children:new Array(20).fill("").map((c,s)=>e("tr",{children:[t("td",{className:"text--start",children:"1"}),t("td",{className:"text--start",children:"시나리오 A"}),t("td",{className:"text--ellipsis",children:"ID:admin2,Name:임시 관리자,IP:172.16.219.2"}),t("td",{className:"text--ellipsis",children:"2022-03-02 05:44:49"}),t("td",{children:e("div",{className:"button-group",children:[t("button",{type:"button",className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--edit"})}),t("button",{type:"button",className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--close"})})]})})]},s))})]})})]})}),t("div",{className:"split__item",children:e("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:[t("strong",{className:"heading--3",children:"케이스 리스트: A"}),t("div",{className:"heading-group__actions",children:t("button",{type:"button",className:"button button--sm",children:"추가"})})]}),t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{style:{width:70}}),t("col",{}),t("col",{style:{width:70}}),t("col",{style:{width:90}}),t("col",{style:{width:70}}),t("col",{style:{width:100}}),t("col",{style:{width:100}})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",className:"text--start",children:"케이스 ID"}),t("th",{scope:"row",className:"text--start",children:"케이스 이름"}),t("th",{scope:"row",children:"실행 횟수"}),t("th",{scope:"row",children:"오류 시 종료"}),t("th",{scope:"row",children:"날짜 지정"}),t("th",{scope:"row",className:"text--start",children:"변경자"}),t("th",{scope:"row",className:"text--start",children:"변경 일시"})]})}),t("tbody",{children:new Array(20).fill("").map((c,s)=>e("tr",{children:[t("td",{className:"text--start",children:"1"}),t("td",{className:"text--start",children:"B"}),t("td",{children:"10"}),t("td",{children:"Y"}),t("td",{}),t("td",{className:"text--ellipsis",children:"ID:admin2,Name:임시 관리자,IP:172.16.219.2"}),t("td",{className:"text--ellipsis",children:"2022-03-02 05:44:49"})]},s))})]})})]})})]})})]});var n,a,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Dialog visible={true} style={{
    width: 1400,
    height: 736
  }}>\r
            <DialogHeader title="[개발] 스펙트럼 실행: 이노보험 이벤트 당첨자 목록" />\r
            <DialogContent>\r
                <div className="split">\r
                    <div className="split__item">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <strong className="heading--3">시나리오 테스트</strong>\r
                                <div className="heading-group__actions">\r
                                    <button type="button" className="button button--sm">추가</button>\r
                                </div>\r
                            </div>\r
                            <div className="table scroll">\r
                                <table>\r
                                    <colgroup>\r
                                        <col style={{
                    width: 80
                  }} />\r
                                        <col />\r
                                        <col style={{
                    width: 100
                  }} />\r
                                        <col style={{
                    width: 100
                  }} />\r
                                        <col style={{
                    width: 58
                  }} />\r
                                    </colgroup>\r
                                    <thead>\r
                                        <tr>\r
                                            <th scope="row" className="text--start">시나리오 ID</th>\r
                                            <th scope="row" className="text--start">시나리오 이름</th>\r
                                            <th scope="row" className="text--start">변경자</th>\r
                                            <th scope="row" className="text--start">변경 일시</th>\r
                                            <th scope="row">\r
                                                <span className="a11y-hidden">수정 및 삭제</span>\r
                                            </th>\r
                                        </tr>\r
                                    </thead>\r
                                    <tbody>\r
                                        {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                <td className="text--start">1</td>\r
                                                <td className="text--start">시나리오 A</td>\r
                                                <td className="text--ellipsis">ID:admin2,Name:임시 관리자,IP:172.16.219.2</td>\r
                                                <td className="text--ellipsis">2022-03-02 05:44:49</td>\r
                                                <td>\r
                                                    <div className="button-group">\r
                                                        <button type="button" className="icon-button icon-button--sm">\r
                                                            <i className="ir-icon ir-icon--edit" />\r
                                                        </button>\r
                                                        <button type="button" className="icon-button icon-button--sm">\r
                                                            <i className="ir-icon ir-icon--close" />\r
                                                        </button>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <strong className="heading--3">케이스 리스트: A</strong>\r
                                <div className="heading-group__actions">\r
                                    <button type="button" className="button button--sm">추가</button>\r
                                </div>\r
                            </div>\r
                            <div className="table scroll">\r
                                <table>\r
                                    <colgroup>\r
                                        <col style={{
                    width: 70
                  }} />\r
                                        <col />\r
                                        <col style={{
                    width: 70
                  }} />\r
                                        <col style={{
                    width: 90
                  }} />\r
                                        <col style={{
                    width: 70
                  }} />\r
                                        <col style={{
                    width: 100
                  }} />\r
                                        <col style={{
                    width: 100
                  }} />\r
                                    </colgroup>\r
                                    <thead>\r
                                        <tr>\r
                                            <th scope="row" className="text--start">케이스 ID</th>\r
                                            <th scope="row" className="text--start">케이스 이름</th>\r
                                            <th scope="row">실행 횟수</th>\r
                                            <th scope="row">오류 시 종료</th>\r
                                            <th scope="row">날짜 지정</th>\r
                                            <th scope="row" className="text--start">변경자</th>\r
                                            <th scope="row" className="text--start">변경 일시</th>\r
                                        </tr>\r
                                    </thead>\r
                                    <tbody>\r
                                        {new Array(20).fill("").map((_, index) => <tr key={index}>\r
                                                <td className="text--start">1</td>\r
                                                <td className="text--start">B</td>\r
                                                <td>10</td>\r
                                                <td>Y</td>\r
                                                <td></td>\r
                                                <td className="text--ellipsis">ID:admin2,Name:임시 관리자,IP:172.16.219.2</td>\r
                                                <td className="text--ellipsis">2022-03-02 05:44:49</td>\r
                                            </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
        </Dialog>;
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const N=["스펙트럼_실행"];export{N as __namedExportsOrder,p as default,r as 스펙트럼_실행};
