import{j as e,a as t}from"./jsx-runtime-e43ccb36.js";import{r as o}from"./index-1b03fe98.js";import"./timePicker.elements-3c8a0aec.js";import{c as d}from"./split-container-32aaeac5.js";import{I as m}from"./select-35a4c028.js";import{D as p,a as h,b as u}from"./dialog.header-5e992610.js";import{T as N,a as i}from"./tabs-b45ed552.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-d6235da7.js";import"./v4-a960c1f4.js";import"./index-91038615.js";const A={title:"JS Utility/Create Split Container"},a=()=>(o.useEffect(()=>{document.querySelectorAll("select").forEach(n=>new m(n)),d(["#split-0","#split-1"],{direction:"vertical",minSize:[180,240]})},[]),e(p,{visible:!0,style:{width:605,height:700},children:[t(h,{title:"[DEV] 항목 정보: 1",refresh:!0}),t(u,{children:e("div",{className:"split split--vertical split-container",children:[t("div",{id:"split-0",className:"split__item split-panel",children:e(N,{activeId:"tab-use",children:[t(i,{id:"tab-use",title:"사용",children:t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{}),t("col",{}),t("col",{style:{width:"36px"}})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",className:"text--start",children:"항목 이름"}),t("th",{scope:"row",className:"text--start",children:"항목 별칭"}),t("th",{scope:"row",children:t("span",{className:"a11y-hidden",children:"사용 항목 삭제"})})]})}),t("tbody",{children:new Array(20).fill("").map((n,r)=>e("tr",{children:[t("td",{className:"text--start",children:e("div",{className:"rule-name",children:[t("i",{className:"ir-icon ir-icon--rule-type-table"}),t("span",{className:"rule-name__text",children:"금융 상품"})]})}),t("td",{className:"text--start text--ellipsis",children:"PRODUCT"}),t("td",{children:t("button",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--close"})})})]},r))})]})})}),t(i,{id:"tab-all",title:"전체",children:e("div",{className:"scroll-wrapper",children:[e("div",{className:"row",children:[e("div",{className:"col col--auto search",children:[t("select",{className:"width--sm",children:t("option",{children:"이름"})}),t("div",{className:"input",children:t("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})}),t("button",{type:"button",className:"button button--primary",children:"검색"})]}),t("div",{className:"col col--divider"}),e("div",{className:"col col--none button-group",children:[t("button",{className:"icon-button",children:t("i",{className:"ir-icon ir-icon--page-prev"})}),t("button",{className:"icon-button",children:t("i",{className:"ir-icon ir-icon--page-next"})})]})]}),t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{}),t("col",{}),t("col",{style:{width:"36px"}})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",className:"text--start",children:"항목 이름"}),t("th",{scope:"row",className:"text--start",children:"항목 별칭"}),t("th",{scope:"row",children:t("span",{className:"a11y-hidden",children:"사용 항목 추가"})})]})}),t("tbody",{children:new Array(20).fill("").map((n,r)=>e("tr",{children:[t("td",{className:"text--start",children:e("div",{className:"rule-name",children:[t("i",{className:"ir-icon ir-icon--rule-type-table"}),t("span",{className:"rule-name__text",children:"금융 상품"})]})}),t("td",{className:"text--start text--ellipsis",children:"PRODUCT"}),t("td",{children:t("button",{className:"icon-button icon-button--sm",children:t("i",{className:"ir-icon ir-icon--add"})})})]},r))})]})})]})}),t("button",{type:"button",className:"icon-button ml--auto",children:t("i",{className:"ir-icon ir-icon--preference-fill"})})]})}),t("div",{id:"split-1",className:"split__item split-panel",children:e("div",{className:"scroll-wrapper",children:[e("div",{className:"heading-group",children:[t("strong",{className:"heading--3",children:"참조값 : [2]"}),t("button",{type:"button",className:"icon-button",children:t("i",{className:"ir-icon ir-icon--refresh"})}),t("div",{className:"heading-group__actions",children:t("button",{type:"button",className:"icon-button icon-button--lg",children:t("i",{className:"ir-icon ir-icon--close"})})})]}),e("div",{className:"search",children:[t("select",{className:"width--sm",children:t("option",{children:"이름"})}),t("div",{className:"input",children:t("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})}),t("button",{type:"button",className:"button button--primary",children:"검색"})]}),t("div",{className:"table scroll",children:e("table",{children:[e("colgroup",{children:[t("col",{style:{width:"120px"}}),t("col",{}),t("col",{})]}),t("thead",{children:e("tr",{children:[t("th",{scope:"row",children:"순서"}),t("th",{scope:"row",className:"text--start",children:"참조값 코드"}),t("th",{scope:"row",className:"text--start",children:"참조값 이름"})]})}),t("tbody",{children:new Array(20).fill("").map((n,r)=>e("tr",{children:[t("td",{children:"1"}),t("td",{className:"text--start",children:"20"}),t("td",{className:"text--start",children:"20"})]},r))})]})})]})})]})})]}));var s,l,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll("select").forEach(element => new IRSelect(element));
    createSplitContainer(["#split-0", "#split-1"], {
      direction: "vertical",
      minSize: [180, 240]
    });
  }, []);
  return <Dialog visible={true} style={{
    width: 605,
    height: 700
  }}>\r
            <DialogHeader title="[DEV] 항목 정보: 1" refresh={true} />\r
            <DialogContent>\r
                <div className="split split--vertical split-container">\r
                    <div id="split-0" className="split__item split-panel">\r
                        <Tabs activeId="tab-use">\r
                            <Tab id="tab-use" title="사용">\r
                                <div className="table scroll">\r
                                    <table>\r
                                        <colgroup>\r
                                            <col />\r
                                            <col />\r
                                            <col style={{
                      width: "36px"
                    }} />\r
                                        </colgroup>\r
                                        <thead>\r
                                            <tr>\r
                                                <th scope="row" className="text--start">항목 이름</th>\r
                                                <th scope="row" className="text--start">항목 별칭</th>\r
                                                <th scope="row"><span className="a11y-hidden">사용 항목 삭제</span></th>\r
                                            </tr>\r
                                        </thead>\r
                                        <tbody>\r
                                            {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                <td className="text--start">\r
                                                    <div className="rule-name">\r
                                                        <i className="ir-icon ir-icon--rule-type-table" />\r
                                                        <span className="rule-name__text">금융 상품</span>\r
                                                    </div>\r
                                                </td>\r
                                                <td className="text--start text--ellipsis">PRODUCT</td>\r
                                                <td>\r
                                                    <button className="icon-button icon-button--sm">\r
                                                        <i className="ir-icon ir-icon--close" />\r
                                                    </button>\r
                                                </td>\r
                                            </tr>)}\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </Tab>\r
                            <Tab id="tab-all" title="전체">\r
                                <div className="scroll-wrapper">\r
                                    <div className="row">\r
                                        <div className="col col--auto search">\r
                                            <select className="width--sm">\r
                                                <option>이름</option>\r
                                            </select>\r
                                            <div className="input">\r
                                                <input type="text" className="input__native" placeholder="검색어를 입력하십시오." />\r
                                            </div>\r
                                            <button type="button" className="button button--primary">검색</button>\r
                                        </div>\r
                                        <div className="col col--divider" />\r
                                        <div className="col col--none button-group">\r
                                            <button className="icon-button"><i className="ir-icon ir-icon--page-prev" /></button>\r
                                            <button className="icon-button"><i className="ir-icon ir-icon--page-next" /></button>\r
                                        </div>\r
                                    </div>\r
                                    <div className="table scroll">\r
                                        <table>\r
                                            <colgroup>\r
                                                <col />\r
                                                <col />\r
                                                <col style={{
                        width: "36px"
                      }} />\r
                                            </colgroup>\r
                                            <thead>\r
                                                <tr>\r
                                                    <th scope="row" className="text--start">항목 이름</th>\r
                                                    <th scope="row" className="text--start">항목 별칭</th>\r
                                                    <th scope="row"><span className="a11y-hidden">사용 항목 추가</span></th>\r
                                                </tr>\r
                                            </thead>\r
                                            <tbody>\r
                                                {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                                    <td className="text--start">\r
                                                        <div className="rule-name">\r
                                                            <i className="ir-icon ir-icon--rule-type-table" />\r
                                                            <span className="rule-name__text">금융 상품</span>\r
                                                        </div>\r
                                                    </td>\r
                                                    <td className="text--start text--ellipsis">PRODUCT</td>\r
                                                    <td>\r
                                                        <button className="icon-button icon-button--sm">\r
                                                            <i className="ir-icon ir-icon--add" />\r
                                                        </button>\r
                                                    </td>\r
                                                </tr>)}\r
                                            </tbody>\r
                                        </table>\r
                                    </div>\r
                                </div>\r
                            </Tab>\r
                            <button type="button" className="icon-button ml--auto">\r
                                <i className="ir-icon ir-icon--preference-fill" />\r
                            </button>\r
                        </Tabs>\r
                    </div>\r
                    <div id="split-1" className="split__item split-panel">\r
                        <div className="scroll-wrapper">\r
                            <div className="heading-group">\r
                                <strong className="heading--3">참조값 : [2]</strong>\r
                                <button type="button" className="icon-button">\r
                                    <i className="ir-icon ir-icon--refresh" />\r
                                </button>\r
                                <div className="heading-group__actions">\r
                                    <button type="button" className="icon-button icon-button--lg">\r
                                        <i className="ir-icon ir-icon--close" />\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div className="search">\r
                                <select className="width--sm">\r
                                    <option>이름</option>\r
                                </select>\r
                                <div className="input">\r
                                    <input type="text" className="input__native" placeholder="검색어를 입력하십시오." />\r
                                </div>\r
                                <button type="button" className="button button--primary">검색</button>\r
                            </div>\r
                            <div className="table scroll">\r
                                <table>\r
                                    <colgroup>\r
                                        <col style={{
                    width: "120px"
                  }} />\r
                                        <col />\r
                                        <col />\r
                                    </colgroup>\r
                                    <thead>\r
                                        <tr>\r
                                            <th scope="row">순서</th>\r
                                            <th scope="row" className="text--start">참조값 코드</th>\r
                                            <th scope="row" className="text--start">참조값 이름</th>\r
                                        </tr>\r
                                    </thead>\r
                                    <tbody>\r
                                        {new Array(20).fill("").map((_, key) => <tr key={key}>\r
                                            <td>1</td>\r
                                            <td className="text--start">20</td>\r
                                            <td className="text--start">20</td>\r
                                        </tr>)}\r
                                    </tbody>\r
                                </table>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
        </Dialog>;
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const E=["항목_정보"];export{E as __namedExportsOrder,A as default,a as 항목_정보};
//# sourceMappingURL=항목_정보.stories-07d33f30.js.map
