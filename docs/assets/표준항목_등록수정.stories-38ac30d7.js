import{a as t,j as e,F as o}from"./jsx-runtime-e43ccb36.js";import{P as s,a as c,b as d}from"./common-71494616.js";import{b as r}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const N={title:"PF Examples/퍼블리싱"},n=()=>t(r,{code:`
import { IRSelect, IRDatePicker, IRTree, IRListView } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

/* Select */
(function() {
    document.querySelectorAll("select")
            .forEach( el => {
                new IRSelect(el);
            });
})();

/* Tree */
(function () {
    const tree = new IRTree( { contextElement: ir_tree });

    function addChildWithIcon(text, parent = null) {
        const node = tree.addChild(parent, text)

        node.iconClass = "ir-icon--document-fill";

        return node;
    }

    const [nodeA, nodeB] = [
        addChildWithIcon("Node A"),
        addChildWithIcon("Node B")
    ]

    addChildWithIcon("A", nodeA)
    addChildWithIcon("B", nodeA)
    addChildWithIcon("C", nodeA)
    addChildWithIcon("D", nodeA)
    addChildWithIcon("E", nodeA)
    addChildWithIcon("F", nodeA)
    addChildWithIcon("G", nodeA)

    addChildWithIcon("A", nodeB)
    addChildWithIcon("B", nodeB)
    addChildWithIcon("C", nodeB)
    addChildWithIcon("D", nodeB)
    addChildWithIcon("E", nodeB)
    addChildWithIcon("F", nodeB)
    addChildWithIcon("G", nodeB)

    tree.expandAll()

})();

/* Grid */
(function() {
    const grid = new libGrid.IRGrid({
        contextElement: grid1,
        colHeader: {
            rowCount: 1,
            colCount: 10
        },
        rowHeader: {
            colCount: 1
        },
        body: {
            rowCount: 50
        }
    });

    const bottomGrid = new libGrid.IRGrid({
        contextElement: grid2,
        colHeader: {
            rowCount: 1,
            colCount: 10
        },
        rowHeader: {
            colCount: 1
        },
        body: {
            rowCount: 50
        }
    });
})();

/* ListView */
(function() {
    const listView = new IRListView({
        contextElement: list_view,
        columns: ["유형", "세부 유형", "항목 그룹", "항목 이름", "항목 별칭"]
    });

    listView.addItem("1", ["1", "2", "3", "4"])
    listView.addItem("2", ["1", "2", "3", "4"])
    listView.addItem("3", ["1", "2", "3", "4"])
    listView.addItem("4", ["1", "2", "3", "4"])
    listView.addItem("5", ["1", "2", "3", "4"])
})();

/* Tab Control */
(function () {
    const tabContentPanels = tab.querySelectorAll(".tabs__panel")
    const tabButtons = tab.querySelectorAll(".tabs__nav-button")

    tabButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                [ ...tabButtons, ...tabContentPanels]
                    .forEach(el => el.classList.remove("is-active"))

                tab.querySelector(button.getAttribute("data-tab")).classList.add("is-active")
                button.classList.add("is-active")

            })
        })

})();

`,html:e(o,{children:[t(s,{}),e("div",{className:"app flex flex--column",children:[t(c,{text:"표준항목 등록/수정"}),e("main",{className:"flex flex--column flex--auto background--light-secondary gap-y--sm py--sm px--sm overflow-y--auto",children:[e("div",{className:"flex flex--auto gap-x--sm",children:[e("div",{className:"panel panel--radius",style:{width:400},children:[e("div",{className:"panel__header gap-x--sm",children:[t("span",{className:"label",children:"분류"}),t("div",{className:"width--lg",children:t("select",{style:{display:"none"}})})]}),e("div",{className:"panel__header gap-x--sm",children:[t("button",{type:"button",className:"icon-button",children:t("i",{className:"ir-icon ir-icon--expand-children-rectangle"})}),t("button",{type:"button",className:"icon-button",children:t("i",{className:"ir-icon ir-icon--collapse-children-rectangle"})}),t("button",{type:"button",className:"icon-button",children:t("i",{className:"ir-icon ir-icon--refresh"})}),t("button",{type:"button",className:"button button--outline ml--auto",children:"항목그룹 관리"})]}),t("div",{className:"panel__content",children:t("div",{className:"flex-content-wrapper",children:t("div",{id:"ir_tree",className:"flex-content-pin"})})})]}),e("div",{className:"panel panel--radius",style:{flex:1},children:[t("div",{className:"panel__header",children:t("span",{className:"tag tag--primary",children:"테이블 A"})}),e("div",{className:"panel__header gap-x--sm",children:[t("span",{className:"label",children:"업무구분"}),t("div",{className:"width--lg",children:t("select",{style:{display:"none"}})}),t("button",{type:"button",className:"button button--icon button--outline",children:t("i",{className:"ir-icon ir-icon--setting"})}),t("span",{className:"label ml--lg",children:"결과내 표준항목 검색"}),e("div",{className:"input width--auto",children:[t("input",{type:"text",className:"input__native",placeholder:"검색어 입력"}),t("button",{className:"input__suffix",children:t("i",{className:"ir-icon ir-icon--search"})})]}),t("button",{type:"button",className:"button button--outline ml--auto",children:"자동 순번"})]}),t("div",{className:"panel__content",children:t("div",{className:"flex-content-wrapper",children:t("div",{id:"grid1",className:"flex-content-pin"})})}),e("div",{className:"panel__footer",children:[t("span",{className:"label",children:"항목 설명"}),t("button",{type:"button",className:"button button--outline min-width--none ml--auto",children:"적용"})]}),t("div",{className:"panel__footer",children:e("div",{className:"button-group ml--auto",children:[e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--excel"}),"엑셀 저장"]}),e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"항목찾기/추가"]}),e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"항목 삭제"]}),e("button",{type:"button",className:"button button--secondary",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--save"}),"항목 저장"]})]})})]})]}),e("div",{className:"flex flex--auto gap-x--sm",children:[e("div",{className:"panel panel--radius",style:{width:400},children:[e("div",{className:"panel__header",children:[t("span",{className:"label",children:"표준 항목 검색"}),t("button",{type:"button",className:"icon-button ml--auto",children:t("i",{className:"ir-icon ir-icon--excel"})})]}),e("div",{className:"panel__header gap-x--sm",children:[t("span",{className:"label",children:"검색 대상"}),t("div",{className:"width--lg",children:t("select",{style:{display:"none"},children:t("option",{children:"항목 이름"})})}),t("span",{className:"label ml--lg",children:"검색어"}),t("div",{className:"flex--auto",children:e("div",{className:"input",children:[t("input",{type:"text",className:"input__native",placeholder:"검색어 입력"}),t("button",{className:"input__suffix",children:t("i",{className:"ir-icon ir-icon--search"})})]})})]}),t("div",{className:"panel__content",children:t("div",{className:"flex-content-wrapper",children:t("div",{id:"list_view",className:"flex-content-pin"})})})]}),t("div",{className:"panel panel--radius flex-content-wrapper",style:{flex:1},children:e("div",{id:"tab",className:"tabs tabs--light flex-content-pin",children:[e("div",{className:"tabs__nav",children:[t("button",{"data-tab":"#tab_content1",type:"button",className:"tabs__nav-button is-active",children:"허용 값"}),t("button",{"data-tab":"#tab_content2",type:"button",className:"tabs__nav-button",children:"패널2"}),t("button",{"data-tab":"#tab_content3",type:"button",className:"tabs__nav-button",children:"패널3"})]}),e("div",{className:"tabs__content",children:[t("div",{id:"tab_content1",className:"tabs__panel p--none is-active",children:e("div",{className:"panel height--block",children:[t("div",{className:"panel__header",children:t("span",{className:"tag tag--primary",children:"테이블 A"})}),e("div",{className:"panel__header gap-x--sm",children:[t("span",{className:"label",children:"결과내 표준항목 검색"}),e("div",{className:"input width--auto",children:[t("input",{type:"text",className:"input__native",placeholder:"검색어 입력"}),t("button",{className:"input__suffix",children:t("i",{className:"ir-icon ir-icon--search"})})]})]}),t("div",{className:"panel__content",children:t("div",{className:"flex-content-wrapper",children:t("div",{id:"grid2",className:"flex-content-pin"})})}),t("div",{className:"panel__footer",children:e("div",{className:"button-group ml--auto",children:[e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--excel"}),"엑셀 저장"]}),e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"항목찾기/추가"]}),e("button",{type:"button",className:"button button--outline",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"항목 삭제"]}),e("button",{type:"button",className:"button button--secondary",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--save"}),"항목 저장"]})]})})]})}),t("div",{id:"tab_content2",className:"tabs__panel",children:"Second Panel"}),t("div",{id:"tab_content3",className:"tabs__panel",children:"Third Panel"})]})]})})]})]}),t(d,{})]})]})});var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <LiveEditorForExamples code={/* javascript */\`
import { IRSelect, IRDatePicker, IRTree, IRListView } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

/* Select */
(function() {
    document.querySelectorAll("select")
            .forEach( el => {
                new IRSelect(el);
            });
})();

/* Tree */
(function () {
    const tree = new IRTree( { contextElement: ir_tree });

    function addChildWithIcon(text, parent = null) {
        const node = tree.addChild(parent, text)

        node.iconClass = "ir-icon--document-fill";

        return node;
    }

    const [nodeA, nodeB] = [
        addChildWithIcon("Node A"),
        addChildWithIcon("Node B")
    ]

    addChildWithIcon("A", nodeA)
    addChildWithIcon("B", nodeA)
    addChildWithIcon("C", nodeA)
    addChildWithIcon("D", nodeA)
    addChildWithIcon("E", nodeA)
    addChildWithIcon("F", nodeA)
    addChildWithIcon("G", nodeA)

    addChildWithIcon("A", nodeB)
    addChildWithIcon("B", nodeB)
    addChildWithIcon("C", nodeB)
    addChildWithIcon("D", nodeB)
    addChildWithIcon("E", nodeB)
    addChildWithIcon("F", nodeB)
    addChildWithIcon("G", nodeB)

    tree.expandAll()

})();

/* Grid */
(function() {
    const grid = new libGrid.IRGrid({
        contextElement: grid1,
        colHeader: {
            rowCount: 1,
            colCount: 10
        },
        rowHeader: {
            colCount: 1
        },
        body: {
            rowCount: 50
        }
    });

    const bottomGrid = new libGrid.IRGrid({
        contextElement: grid2,
        colHeader: {
            rowCount: 1,
            colCount: 10
        },
        rowHeader: {
            colCount: 1
        },
        body: {
            rowCount: 50
        }
    });
})();

/* ListView */
(function() {
    const listView = new IRListView({
        contextElement: list_view,
        columns: ["유형", "세부 유형", "항목 그룹", "항목 이름", "항목 별칭"]
    });

    listView.addItem("1", ["1", "2", "3", "4"])
    listView.addItem("2", ["1", "2", "3", "4"])
    listView.addItem("3", ["1", "2", "3", "4"])
    listView.addItem("4", ["1", "2", "3", "4"])
    listView.addItem("5", ["1", "2", "3", "4"])
})();

/* Tab Control */
(function () {
    const tabContentPanels = tab.querySelectorAll(".tabs__panel")
    const tabButtons = tab.querySelectorAll(".tabs__nav-button")

    tabButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                [ ...tabButtons, ...tabContentPanels]
                    .forEach(el => el.classList.remove("is-active"))

                tab.querySelector(button.getAttribute("data-tab")).classList.add("is-active")
                button.classList.add("is-active")

            })
        })

})();

\`} html={<>\r
                    <PFCommonStyle />\r
                    <div className="app flex flex--column">\r
                        <PFHeader text='표준항목 등록/수정' />\r
                        <main className="flex flex--column flex--auto background--light-secondary gap-y--sm py--sm px--sm overflow-y--auto">\r
                            <div className='flex flex--auto gap-x--sm'>\r
                                <div className='panel panel--radius' style={{
            width: 400
          }}>\r
                                    <div className="panel__header gap-x--sm">\r
                                        <span className='label'>분류</span>\r
                                        <div className='width--lg'>\r
                                            <select style={{
                  display: "none"
                }}></select>\r
                                        </div>\r
                                    </div>\r
                                    <div className="panel__header gap-x--sm">\r
                                        <button type="button" className="icon-button"><i className="ir-icon ir-icon--expand-children-rectangle"></i></button>\r
                                        <button type="button" className="icon-button"><i className="ir-icon ir-icon--collapse-children-rectangle"></i></button>\r
                                        <button type="button" className="icon-button"><i className="ir-icon ir-icon--refresh"></i></button>\r
                                        <button type="button" className="button button--outline ml--auto">항목그룹 관리</button>\r
                                    </div>\r
                                    <div className="panel__content">\r
                                        <div className='flex-content-wrapper'>\r
                                            <div id="ir_tree" className='flex-content-pin'></div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className='panel panel--radius' style={{
            flex: 1
          }}>\r
                                    <div className="panel__header">\r
                                        <span className="tag tag--primary">테이블 A</span>\r
                                    </div>\r
                                    <div className="panel__header gap-x--sm">\r
                                        <span className='label'>업무구분</span>\r
                                        <div className='width--lg'>\r
                                            <select style={{
                  display: "none"
                }}></select>\r
                                        </div>\r
                                        <button type="button" className="button button--icon button--outline"><i className="ir-icon ir-icon--setting"></i></button>\r
                                        <span className='label ml--lg'>결과내 표준항목 검색</span>\r
                                        <div className="input width--auto">\r
                                            <input type="text" className="input__native" placeholder="검색어 입력" />\r
                                            <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                        </div>\r
                                        <button type="button" className="button button--outline ml--auto">자동 순번</button>\r
                                    </div>\r
                                    <div className="panel__content">\r
                                        <div className='flex-content-wrapper'>\r
                                            <div id='grid1' className='flex-content-pin'></div>\r
                                        </div>\r
                                    </div>\r
                                    <div className="panel__footer">\r
                                        <span className='label'>항목 설명</span>\r
                                        <button type="button" className="button button--outline min-width--none ml--auto">적용</button>\r
                                    </div>\r
                                    <div className="panel__footer">\r
                                        <div className="button-group ml--auto">\r
                                            <button type="button" className="button button--outline">\r
                                                <i className="button__icon-prefix ir-icon ir-icon--excel"></i>엑셀 저장\r
                                            </button>\r
                                            <button type="button" className="button button--outline">\r
                                                <i className="button__icon-prefix ir-icon ir-icon--add-circle-fill"></i>항목찾기/추가\r
                                            </button>\r
                                            <button type="button" className="button button--outline">\r
                                                <i className="button__icon-prefix ir-icon ir-icon--delete"></i>항목 삭제\r
                                            </button>\r
                                            <button type="button" className="button button--secondary">\r
                                                <i className="button__icon-prefix ir-icon ir-icon--save"></i>항목 저장\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className='flex flex--auto gap-x--sm'>\r
                                <div className='panel panel--radius' style={{
            width: 400
          }}>\r
                                    <div className="panel__header">\r
                                        <span className="label">표준 항목 검색</span>\r
                                        <button type="button" className="icon-button ml--auto"><i className="ir-icon ir-icon--excel"></i></button>\r
                                    </div>\r
                                    <div className="panel__header gap-x--sm">\r
                                        <span className="label">검색 대상</span>\r
                                        <div className='width--lg'>\r
                                            <select style={{
                  display: "none"
                }}>\r
                                                <option>항목 이름</option>\r
                                            </select>\r
                                        </div>\r
                                        <span className='label ml--lg'>검색어</span>\r
                                        <div className='flex--auto'>\r
                                            <div className="input">\r
                                                <input type="text" className="input__native" placeholder="검색어 입력" />\r
                                                <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div className="panel__content">\r
                                        <div className='flex-content-wrapper'>\r
                                            <div id='list_view' className='flex-content-pin'>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div className='panel panel--radius flex-content-wrapper' style={{
            flex: 1
          }}>\r
                                    <div id="tab" className="tabs tabs--light flex-content-pin">\r
                                        <div className="tabs__nav">\r
                                            <button data-tab="#tab_content1" type="button" className="tabs__nav-button is-active">허용 값</button>\r
                                            <button data-tab="#tab_content2" type="button" className="tabs__nav-button">패널2</button>\r
                                            <button data-tab="#tab_content3" type="button" className="tabs__nav-button">패널3</button>\r
                                        </div>\r
                                        <div className="tabs__content">\r
                                            <div id="tab_content1" className="tabs__panel p--none is-active">\r
                                                <div className='panel height--block'>\r
                                                    <div className="panel__header">\r
                                                        <span className="tag tag--primary">테이블 A</span>\r
                                                    </div>\r
                                                    <div className="panel__header gap-x--sm">\r
                                                        <span className="label">결과내 표준항목 검색</span>\r
                                                        <div className="input width--auto">\r
                                                            <input type="text" className="input__native" placeholder="검색어 입력" />\r
                                                            <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="panel__content">\r
                                                        <div className='flex-content-wrapper'>\r
                                                            <div id="grid2" className='flex-content-pin'></div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="panel__footer">\r
                                                        <div className="button-group ml--auto">\r
                                                            <button type="button" className="button button--outline">\r
                                                                <i className="button__icon-prefix ir-icon ir-icon--excel"></i>엑셀 저장\r
                                                            </button>\r
                                                            <button type="button" className="button button--outline">\r
                                                                <i className="button__icon-prefix ir-icon ir-icon--add-circle-fill"></i>항목찾기/추가\r
                                                            </button>\r
                                                            <button type="button" className="button button--outline">\r
                                                                <i className="button__icon-prefix ir-icon ir-icon--delete"></i>항목 삭제\r
                                                            </button>\r
                                                            <button type="button" className="button button--secondary">\r
                                                                <i className="button__icon-prefix ir-icon ir-icon--save"></i>항목 저장\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                            <div id="tab_content2" className="tabs__panel">Second Panel</div>\r
                                            <div id="tab_content3" className="tabs__panel">Third Panel</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </main>\r
                        <PFFooter />\r
                    </div>\r
                </>} />;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const _=["표준항목_등록수정"];export{_ as __namedExportsOrder,N as default,n as 표준항목_등록수정};
//# sourceMappingURL=표준항목_등록수정.stories-38ac30d7.js.map
