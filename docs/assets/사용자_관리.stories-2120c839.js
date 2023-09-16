import{j as e,a as t}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./timePicker.elements-78bcdb3d.js";import{I as o}from"./select-1c98d1a7.js";import{D as d,a as h,b as p}from"./dialog.header-5e992610.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-c7da6992.js";import"./v4-a960c1f4.js";import"./index-91038615.js";const k={title:"Builder Examples/메인"},n=()=>(i.useEffect(()=>{document.querySelectorAll("select").forEach(r=>new o(r))},[]),e(d,{visible:!0,style:{width:1014,height:736},children:[t(h,{title:"사용자 관리"}),t(p,{children:e("div",{className:"split split--vertical",children:[t("div",{className:"split__item height--xxl",children:e("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:[t("strong",{className:"heading--4",children:"모든 그룹"}),t("div",{className:"heading-group__actions",children:e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--user-group"}),"그롭 관리"]})})]}),t("div",{className:"table scroll mt--none",children:e("table",{children:[e("colgroup",{children:[t("col",{}),t("col",{})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"col",className:"text--start",children:"이관자"}),t("th",{scope:"col",children:"소속 여부"})]})}),e("tbody",{children:[e("tr",{children:[t("td",{className:"sticky z-index--floating text--start",style:{top:"36px"},children:"모든 사용자"}),t("td",{className:"sticky z-index--floating",style:{top:"36px"}})]}),new Array(20).fill("").map((r,l)=>e("tr",{children:[t("td",{className:"text--start",children:"사용자"}),t("td",{})]},l))]})]})})]})}),t("div",{className:"split__item",children:e("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:[t("strong",{className:"heading--4",children:"사용자 그룹"}),t("span",{className:"tag tag--primary",children:"모든 사용자"})]}),e("div",{className:"row",children:[e("div",{className:"col col--none search",children:[t("select",{className:"width--sm",children:t("option",{children:"룰 이름"})}),t("div",{className:"input width--xl",children:t("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})}),t("button",{type:"button",className:"button button--tertiary",children:"찾기"})]}),e("div",{className:"col col--none ml--auto button-group",children:[e("button",{type:"button",className:"button button--sm",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"추가"]}),e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--authentication"}),"역할 일괄 변경"]}),e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--ip"}),"사용자 IP 일괄 변경"]}),e("button",{type:"button",className:"button",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--rule-apply"}),"전체 이관"]})]})]}),t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{style:{width:"36px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"360px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}}),t("col",{style:{width:"140px"}})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"col",className:"text--start",children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("th",{scope:"col",className:"text--start",children:"사용자 ID"}),t("th",{scope:"col",className:"text--start",children:"사용자 이름"}),t("th",{scope:"col",className:"text--start",children:"계정 시작일"}),t("th",{scope:"col",className:"text--start",children:"계정 종료일"}),t("th",{scope:"col",className:"text--start",children:"역할"}),t("th",{scope:"col",children:"허용 IP 대역"}),t("th",{scope:"col",children:"최종 로그인 일시"}),t("th",{scope:"col",children:"휴면 계정"}),t("th",{scope:"col",children:"비밀번호 오류 횟수 초과"}),t("th",{scope:"col",children:"비밀번호 오류 횟수"}),t("th",{scope:"col",children:"비밀번호 최종 변경일"}),t("th",{scope:"col",children:"비밀번호 변경 기한"})]})}),t("tbody",{children:new Array(20).fill("").map((r,l)=>e("tr",{children:[t("td",{children:t("div",{className:"checkbox",children:t("label",{className:"checkbox__wrapper",children:t("input",{type:"checkbox",className:"checkbox__input"})})})}),t("td",{className:"text--start",children:"admin"}),t("td",{className:"text--start",children:"임시 관리자"}),t("td",{className:"text--start",children:"2022-03-07"}),t("td",{className:"text--start",children:"9999-12-31"}),t("td",{className:"text--start text--ellipsis",children:"룰 시스템 접속,전체 기능 실행,룰 시스템 정보 관리,룰 빌더 관리,룰 서비스 활용,룰 개발,승인/이관 관리"}),t("td",{}),t("td",{children:"2022-03-07 07:34:19"}),t("td",{}),t("td",{}),t("td",{}),t("td",{children:"2022-03-07"}),t("td",{})]},l))})]})})]})})]})})]}));var c,s,a;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll("select").forEach(element => new IRSelect(element));
  }, []);
  return <Dialog visible={true} style={{
    width: 1014,
    height: 736
  }}>\r
            <DialogHeader title="사용자 관리" />\r
            <DialogContent>\r
                <div className="split split--vertical">\r
                    <div className="split__item height--xxl">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <strong className="heading--4">모든 그룹</strong>\r
                                <div className="heading-group__actions">\r
                                    <button type="button" className="button">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--user-group" />\r
                                    그롭 관리\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div className="table scroll mt--none">\r
                                <table>\r
                                    <colgroup>\r
                                        <col />\r
                                        <col />\r
                                    </colgroup>\r
                                    <thead>\r
                                        <tr>\r
                                            <th scope="col" className="text--start">이관자</th>\r
                                            <th scope="col">소속 여부</th>\r
                                        </tr>\r
                                    </thead>\r
                                    <tbody>\r
                                        <tr>\r
                                            <td className="sticky z-index--floating text--start" style={{
                      top: "36px"
                    }}>모든 사용자</td>\r
                                            <td className="sticky z-index--floating" style={{
                      top: "36px"
                    }} />\r
                                        </tr>\r
                                        {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                <td className="text--start">사용자</td>\r
                                                <td />\r
                                            </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className="split__item">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <strong className="heading--4">사용자 그룹</strong>\r
                                <span className="tag tag--primary">모든 사용자</span>\r
                            </div>\r
                            <div className="row">\r
                                <div className="col col--none search">\r
                                    <select className="width--sm">\r
                                        <option>룰 이름</option>\r
                                    </select>\r
                                    <div className="input width--xl">\r
                                        <input type="text" className="input__native" placeholder="검색어를 입력하십시오." />\r
                                    </div>\r
                                    <button type="button" className="button button--tertiary">찾기</button>\r
                                </div>\r
                                <div className="col col--none ml--auto button-group">\r
                                    <button type="button" className="button button--sm">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--add-circle-fill" />\r
                                    추가\r
                                    </button>\r
                                    <button type="button" className="button">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--authentication" />\r
                                    역할 일괄 변경\r
                                    </button>\r
                                    <button type="button" className="button">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--ip" />\r
                                    사용자 IP 일괄 변경\r
                                    </button>\r
                                    <button type="button" className="button">\r
                                        <i className="button__icon-prefix ir-icon ir-icon--rule-apply" />\r
                                    전체 이관\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div className="table scroll">\r
                                <table>\r
                                    <colgroup>\r
                                        <col style={{
                    width: "36px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "360px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                        <col style={{
                    width: "140px"
                  }} />\r
                                    </colgroup>\r
                                    <thead>\r
                                        <tr>\r
                                            <th scope="col" className="text--start">\r
                                                <div className="checkbox">\r
                                                    <label className="checkbox__wrapper">\r
                                                        <input type="checkbox" className="checkbox__input" />\r
                                                    </label>\r
                                                </div>\r
                                            </th>\r
                                            <th scope="col" className="text--start">사용자 ID</th>\r
                                            <th scope="col" className="text--start">사용자 이름</th>\r
                                            <th scope="col" className="text--start">계정 시작일</th>\r
                                            <th scope="col" className="text--start">계정 종료일</th>\r
                                            <th scope="col" className="text--start">역할</th>\r
                                            <th scope="col">허용 IP 대역</th>\r
                                            <th scope="col">최종 로그인 일시</th>\r
                                            <th scope="col">휴면 계정</th>\r
                                            <th scope="col">비밀번호 오류 횟수 초과</th>\r
                                            <th scope="col">비밀번호 오류 횟수</th>\r
                                            <th scope="col">비밀번호 최종 변경일</th>\r
                                            <th scope="col">비밀번호 변경 기한</th>\r
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
                                            <td className="text--start">admin</td>\r
                                            <td className="text--start">임시 관리자</td>\r
                                            <td className="text--start">2022-03-07</td>\r
                                            <td className="text--start">9999-12-31</td>\r
                                            <td className="text--start text--ellipsis">룰 시스템 접속,전체 기능 실행,룰 시스템 정보 관리,룰 빌더 관리,룰 서비스 활용,룰 개발,승인/이관 관리</td>\r
                                            <td />\r
                                            <td>2022-03-07 07:34:19</td>\r
                                            <td />\r
                                            <td />\r
                                            <td />\r
                                            <td>2022-03-07</td>\r
                                            <td />\r
                                        </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
        </Dialog>;
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const D=["사용자_관리"];export{D as __namedExportsOrder,k as default,n as 사용자_관리};
//# sourceMappingURL=사용자_관리.stories-2120c839.js.map
