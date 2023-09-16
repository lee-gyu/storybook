import{a as e,j as a,F as n}from"./jsx-runtime-e43ccb36.js";import{P as c,a as r,b as d}from"./common-71494616.js";import{b as o}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const N={title:"PF Examples/퍼블리싱"},i=()=>e(o,{code:`
import { IRSelect, IRDatePicker, IRTree } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

/* Select */
(function() {
    document.querySelectorAll("select")
            .forEach( el => new IRSelect(el));
})();


/* DatePicker */
(function() {
    document.querySelectorAll(".date-picker")
            .forEach( el => new IRDatePicker({ div: el }));
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
        addChildWithIcon("[A000]오브젝트001"),
        addChildWithIcon("[A001]오브젝트002"),
        addChildWithIcon("[A002]오브젝트003"),
        addChildWithIcon("[A003]오브젝트004"),
        addChildWithIcon("[A004]오브젝트005"),
        addChildWithIcon("[A005]오브젝트006"),
        addChildWithIcon("[A006]오브젝트007"),
        addChildWithIcon("[A007]오브젝트008"),
        addChildWithIcon("[A008]오브젝트009"),
        addChildWithIcon("[A009]오브젝트010"),
        addChildWithIcon("[A010]오브젝트011"),
        addChildWithIcon("[A011]오브젝트012"),
        addChildWithIcon("[A012]오브젝트013"),
        addChildWithIcon("[A013]오브젝트014"),
        addChildWithIcon("[A014]오브젝트015")
    ]
})();

/* Grid */
(function() {
    const grid = new libGrid.IRGrid({
        contextElement: grid1,
        colHeader: {
            rowCount: 1,
            colCount: 5
        },
        rowHeader: {
            colCount: 1
        },
        body: {
            rowCount: 5
        }
    });
})();
`,html:a(n,{children:[e(c,{}),a("div",{className:"app flex flex--column",children:[e(r,{text:"상품보험 항목 등록/수정"}),e("main",{className:"flex flex--column flex--auto background--light-secondary",children:a("div",{className:"tabs tabs--basic flex--auto",children:[a("div",{className:"tabs__nav",children:[e("button",{type:"button",className:"tabs__nav-button is-active",children:"Tab 01"}),e("button",{type:"button",className:"tabs__nav-button",children:"Tab 02"})]}),e("div",{className:"tabs__content",children:e("div",{className:"tabs__panel flex is-active",children:a("div",{className:"flex flex--auto gap-x--sm",children:[a("div",{className:"flex flex--column gap-y--sm",style:{width:400},children:[a("div",{className:"panel panel--radius",children:[a("div",{className:"panel__content flex flex--column gap-y--sm",children:[a("div",{className:"row align-items--center gap-x--sm",children:[e("div",{className:"label width--3xs",children:"유형"}),e("div",{className:"flex--auto",children:e("select",{children:e("option",{children:"asdf"})})})]}),a("div",{className:"row align-items--center gap-x--sm",children:[e("div",{className:"label width--3xs",children:"세부유형"}),e("div",{className:"flex--auto",children:e("select",{children:e("option",{children:"항목 이름"})})})]}),a("div",{className:"row align-items--center gap-x--sm",children:[e("div",{className:"label width--3xs",children:"상태"}),e("div",{className:"width--sm",children:e("select",{children:e("option",{children:"전체"})})}),e("div",{className:"label width--3xs",children:"기준일"}),e("div",{className:"date-picker flex--1"})]}),a("div",{className:"row align-items--center gap-x--sm",children:[e("div",{className:"label width--3xs",children:"검색어"}),e("div",{className:"input width--sm",children:e("input",{type:"text",className:"input__native"})}),e("div",{className:"label width--3xs",children:"개수"}),e("div",{className:"flex--1",children:e("select",{children:e("option",{children:"10"})})})]})]}),a("div",{className:"panel__footer panel__footer--button",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--search"}),"조회"]})]}),a("div",{className:"panel panel--radius flex--auto",children:[a("div",{className:"panel__header gap-x--xs",children:[e("div",{className:"label",children:"조회된"}),e("span",{className:"text--bold",children:"asdf"}),e("div",{className:"label",children:"개수"}),e("span",{className:"text--primary text--bold",children:"2"})]}),a("div",{className:"panel__header gap-x--sm",children:[e("button",{type:"button",className:"icon-button",children:e("i",{className:"ir-icon ir-icon--expand-children-rectangle"})}),e("button",{type:"button",className:"icon-button",children:e("i",{className:"ir-icon ir-icon--collapse-children-rectangle"})}),e("div",{children:e("div",{className:"divider divider--vertical"})}),a("div",{className:"input width--auto",children:[e("input",{type:"text",className:"input__native",placeholder:""}),e("button",{className:"input__suffix",children:e("i",{className:"ir-icon ir-icon--search"})})]}),e("button",{type:"button",className:"icon-button ml--auto",children:e("i",{className:"ir-icon ir-icon--excel"})})]}),e("div",{className:"panel__content",children:e("div",{className:"flex-content-wrapper",children:e("div",{id:"ir_tree",className:"flex-content-pin"})})}),a("div",{className:"panel__footer",children:[e("div",{className:"label",children:"1 / 1"}),a("div",{className:"button-group ml--auto",children:[e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--page-prev"})}),e("button",{type:"button",className:"icon-button icon-button--md",children:e("i",{className:"ir-icon ir-icon--page-next"})})]})]})]})]}),a("div",{className:"flex flex--column gap-y--sm flex--auto",children:[a("div",{className:"panel panel--radius",style:{height:500},children:[a("div",{className:"panel__header gap-x--xs",children:[e("div",{className:"label",children:"코드"}),e("span",{className:"tag tag--primary",children:"A000"}),e("div",{className:"label ml--lg",children:"이름"}),e("span",{className:"tag tag--primary",children:"오브젝트001"})]}),a("div",{className:"panel__header gap-x--xs",children:[e("div",{className:"label",children:"등록일자"}),e("span",{children:"2021-09-08 06:06:18"}),e("div",{className:"label ml--lg",children:"등록자ID"}),e("span",{children:"user"}),e("div",{className:"label ml--lg",children:"등록자명"}),e("span",{children:"유저"}),e("div",{className:"divider divider--vertical ml--lg"}),e("div",{className:"label ml--lg",children:"수정일자"}),e("span",{children:"2021-09-08 06:06:18"}),e("div",{className:"label ml--lg",children:"수정자ID"}),e("span",{children:"user"}),e("div",{className:"label ml--lg",children:"수정자명"}),e("span",{children:"유저"})]}),a("div",{className:"panel__header gap-x--xs",children:[e("div",{className:"label",children:"결과 대상"}),e("div",{className:"width--xs",children:e("select",{children:e("option",{children:"항목이름"})})}),e("div",{className:"width--xs",children:e("select",{children:e("option",{children:"포함하는"})})}),a("div",{className:"input width--lg",children:[e("input",{type:"text",className:"input__native",placeholder:""}),e("button",{className:"input__suffix",children:e("i",{className:"ir-icon ir-icon--search"})})]}),e("div",{className:"checkbox",children:a("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"관계항목조회"})]})}),e("span",{className:"ml--auto",children:"적용기간"}),e("div",{className:"width--auto",children:e("select",{children:e("option",{children:"2021-09-09 ~ 9999-12-31"})})})]}),a("div",{className:"flex flex--1",children:[e("div",{className:"panel__content flex--1",children:e("div",{className:"flex-content-wrapper",children:e("div",{id:"grid1",className:"flex-content-pin"})})}),e("div",{className:"background--light-secondary px--xxs"}),e("div",{className:"flex",children:a("div",{className:"panel__header px--lg gap-x--xs",children:[e("button",{type:"button",className:"button button--outline",children:"선택"}),e("button",{type:"button",className:"button button--outline",children:"전체 선택"})]})})]}),a("div",{className:"panel__footer gap-x--xs",children:[e("div",{className:"label",children:"항목개수"}),e("span",{children:"2"}),e("div",{className:"label ml--lg",children:"항목설명"}),e("div",{className:"input width--xxl",children:e("input",{type:"text",className:"input__native"})}),e("div",{className:"label ml--lg",children:"값 설명"}),e("div",{className:"input flex--1",children:e("input",{type:"text",className:"input__native"})})]})]}),a("div",{className:"panel panel--radius flex--auto",children:[e("div",{className:"panel__header",children:e("span",{className:"tag tag--primary",children:"*사이트"})}),a("div",{className:"flex flex--1",children:[a("div",{className:"panel width--4xl",children:[a("div",{className:"panel__header gap-x--xs",children:[e("div",{className:"label",children:"전체허용값"}),e("div",{className:"width--xxs ml--auto",children:e("select",{children:e("option",{children:"코드"})})}),a("div",{className:"input width--lg",children:[e("input",{type:"text",className:"input__native",placeholder:""}),e("button",{className:"input__suffix",children:e("i",{className:"ir-icon ir-icon--search"})})]})]}),e("div",{className:"panel__content",children:e("div",{className:"flex-content-wrapper",children:e("div",{id:"list_view1",className:"flex-content-pin"})})})]}),e("div",{className:"panel border border-top-none border-bottom-none px--lg"}),a("div",{className:"panel flex--1",children:[a("div",{className:"panel__header gap-x--xs",children:[e("div",{className:"label",children:"선택허용값"}),e("div",{className:"checkbox ml--lg",children:a("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"허용값 중복"})]})}),e("div",{className:"checkbox ml--lg",children:a("label",{className:"checkbox__wrapper",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"날짜 중복"})]})}),e("button",{type:"button",className:"button button--outline ml--auto",children:"자동 순번"})]}),e("div",{className:"panel__content",children:e("div",{className:"flex-content-wrapper",children:e("div",{id:"list_view2",className:"flex-content-pin"})})})]})]}),e("div",{className:"panel__footer",children:a("div",{className:"button-group ml--auto",children:[a("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--excel"}),"엑셀 저장"]}),a("button",{type:"button",className:"button button--secondary",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--save"}),"항목 저장"]})]})})]})]})]})})})]})}),e(d,{})]})]})});var l,s,t;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <LiveEditorForExamples code={/* javascript */\`
import { IRSelect, IRDatePicker, IRTree } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

/* Select */
(function() {
    document.querySelectorAll("select")
            .forEach( el => new IRSelect(el));
})();


/* DatePicker */
(function() {
    document.querySelectorAll(".date-picker")
            .forEach( el => new IRDatePicker({ div: el }));
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
        addChildWithIcon("[A000]오브젝트001"),
        addChildWithIcon("[A001]오브젝트002"),
        addChildWithIcon("[A002]오브젝트003"),
        addChildWithIcon("[A003]오브젝트004"),
        addChildWithIcon("[A004]오브젝트005"),
        addChildWithIcon("[A005]오브젝트006"),
        addChildWithIcon("[A006]오브젝트007"),
        addChildWithIcon("[A007]오브젝트008"),
        addChildWithIcon("[A008]오브젝트009"),
        addChildWithIcon("[A009]오브젝트010"),
        addChildWithIcon("[A010]오브젝트011"),
        addChildWithIcon("[A011]오브젝트012"),
        addChildWithIcon("[A012]오브젝트013"),
        addChildWithIcon("[A013]오브젝트014"),
        addChildWithIcon("[A014]오브젝트015")
    ]
})();

/* Grid */
(function() {
    const grid = new libGrid.IRGrid({
        contextElement: grid1,
        colHeader: {
            rowCount: 1,
            colCount: 5
        },
        rowHeader: {
            colCount: 1
        },
        body: {
            rowCount: 5
        }
    });
})();
\`} html={<>\r
                    <PFCommonStyle />\r
                    <div className="app flex flex--column">\r
                        <PFHeader text='상품보험 항목 등록/수정' />\r
                        <main className="flex flex--column flex--auto background--light-secondary">\r
                            <div className="tabs tabs--basic flex--auto">\r
                                <div className="tabs__nav">\r
                                    <button type="button" className="tabs__nav-button is-active">Tab 01</button>\r
                                    <button type="button" className="tabs__nav-button">Tab 02</button>\r
                                </div>\r
                                <div className="tabs__content">\r
                                    <div className="tabs__panel flex is-active">\r
                                        <div className='flex flex--auto gap-x--sm'>\r
                                            <div className='flex flex--column gap-y--sm' style={{
                  width: 400
                }}>\r
                                                <div className="panel panel--radius">\r
                                                    <div className="panel__content flex flex--column gap-y--sm">\r
                                                        <div className='row align-items--center gap-x--sm'>\r
                                                            <div className="label width--3xs">유형</div>\r
                                                            <div className='flex--auto'>\r
                                                                <select>\r
                                                                    <option>asdf</option>\r
                                                                </select>\r
                                                            </div>\r
                                                        </div>\r
                                                        <div className='row align-items--center gap-x--sm'>\r
                                                            <div className="label width--3xs">세부유형</div>\r
                                                            <div className='flex--auto'>\r
                                                                <select>\r
                                                                    <option>항목 이름</option>\r
                                                                </select>\r
                                                            </div>\r
                                                        </div>\r
                                                        <div className='row align-items--center gap-x--sm'>\r
                                                            <div className="label width--3xs">상태</div>\r
                                                            <div className='width--sm'>\r
                                                                <select>\r
                                                                    <option>전체</option>\r
                                                                </select>\r
                                                            </div>\r
                                                            <div className="label width--3xs">기준일</div>\r
                                                            <div className="date-picker flex--1"></div>\r
                                                        </div>\r
                                                        <div className='row align-items--center gap-x--sm'>\r
                                                            <div className="label width--3xs">검색어</div>\r
                                                            <div className="input width--sm">\r
                                                                <input type="text" className="input__native" />\r
                                                            </div>\r
                                                            <div className="label width--3xs">개수</div>\r
                                                            <div className="flex--1">\r
                                                                <select>\r
                                                                    <option>10</option>\r
                                                                </select>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="panel__footer panel__footer--button">\r
                                                        <i className="button__icon-prefix ir-icon ir-icon--search"></i>조회\r
                                                    </div>\r
                                                </div>\r
                                                <div className="panel panel--radius flex--auto">\r
                                                    <div className="panel__header gap-x--xs">\r
                                                        <div className="label">조회된</div>\r
                                                        <span className='text--bold'>asdf</span>\r
                                                        <div className="label">개수</div>\r
                                                        <span className='text--primary text--bold'>2</span>\r
                                                    </div>\r
                                                    <div className="panel__header gap-x--sm">\r
                                                        <button type="button" className="icon-button">\r
                                                            <i className="ir-icon ir-icon--expand-children-rectangle"></i></button>\r
                                                        <button type="button" className="icon-button">\r
                                                            <i className="ir-icon ir-icon--collapse-children-rectangle"></i></button>\r
                                                        <div>\r
                                                            <div className="divider divider--vertical"></div>\r
                                                        </div>\r
                                                        <div className="input width--auto">\r
                                                            <input type="text" className="input__native" placeholder="" />\r
                                                            <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                                        </div>\r
                                                        <button type="button" className="icon-button ml--auto"><i className="ir-icon ir-icon--excel"></i></button>\r
                                                    </div>\r
                                                    <div className="panel__content">\r
                                                        <div className='flex-content-wrapper'>\r
                                                            <div id="ir_tree" className='flex-content-pin'></div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="panel__footer">\r
                                                        <div className="label">1 / 1</div>\r
                                                        <div className='button-group ml--auto'>\r
                                                            <button type="button" className="icon-button icon-button--md">\r
                                                                <i className="ir-icon ir-icon--page-prev" />\r
                                                            </button>\r
                                                            <button type="button" className="icon-button icon-button--md">\r
                                                                <i className="ir-icon ir-icon--page-next" />\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                            <div className='flex flex--column gap-y--sm flex--auto'>\r
                                                <div className='panel panel--radius' style={{
                    height: 500
                  }}>\r
                                                    <div className="panel__header gap-x--xs">\r
                                                        <div className="label">코드</div>\r
                                                        <span className="tag tag--primary">A000</span>\r
                                                        <div className="label ml--lg">이름</div>\r
                                                        <span className="tag tag--primary">오브젝트001</span>\r
                                                    </div>\r
                                                    <div className="panel__header gap-x--xs">\r
                                                        <div className="label">등록일자</div>\r
                                                        <span>2021-09-08 06:06:18</span>\r
                                                        <div className="label ml--lg">등록자ID</div>\r
                                                        <span>user</span>\r
                                                        <div className="label ml--lg">등록자명</div>\r
                                                        <span>유저</span>\r
                                                        <div className="divider divider--vertical ml--lg"></div>\r
                                                        <div className="label ml--lg">수정일자</div>\r
                                                        <span>2021-09-08 06:06:18</span>\r
                                                        <div className="label ml--lg">수정자ID</div>\r
                                                        <span>user</span>\r
                                                        <div className="label ml--lg">수정자명</div>\r
                                                        <span>유저</span>\r
                                                    </div>\r
                                                    <div className="panel__header gap-x--xs">\r
                                                        <div className="label">결과 대상</div>\r
                                                        <div className='width--xs'>\r
                                                            <select>\r
                                                                <option>항목이름</option>\r
                                                            </select>\r
                                                        </div>\r
                                                        <div className='width--xs'>\r
                                                            <select>\r
                                                                <option>포함하는</option>\r
                                                            </select>\r
                                                        </div>\r
                                                        <div className="input width--lg">\r
                                                            <input type="text" className="input__native" placeholder="" />\r
                                                            <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                                        </div>\r
                                                        <div className="checkbox">\r
                                                            <label className="checkbox__wrapper">\r
                                                                <input type="checkbox" className="checkbox__input" checked />\r
                                                                <span className="checkbox__text">관계항목조회</span>\r
                                                            </label>\r
                                                        </div>\r
                                                        <span className='ml--auto'>적용기간</span>\r
                                                        <div className="width--auto">\r
                                                            <select>\r
                                                                <option>2021-09-09 ~ 9999-12-31</option>\r
                                                            </select>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="flex flex--1">\r
                                                        <div className='panel__content flex--1'>\r
                                                            <div className='flex-content-wrapper'>\r
                                                                <div id='grid1' className='flex-content-pin'></div>\r
                                                            </div>\r
                                                        </div>\r
                                                        <div className='background--light-secondary px--xxs'></div>\r
                                                        <div className='flex'>\r
                                                            <div className="panel__header px--lg gap-x--xs">\r
                                                                <button type='button' className='button button--outline'>선택</button>\r
                                                                <button type='button' className='button button--outline'>전체 선택</button>\r
                                                            </div>\r
\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="panel__footer gap-x--xs">\r
                                                        <div className="label">항목개수</div>\r
                                                        <span>2</span>\r
                                                        <div className="label ml--lg">항목설명</div>\r
                                                        <div className="input width--xxl">\r
                                                            <input type="text" className="input__native" />\r
                                                        </div>\r
                                                        <div className="label ml--lg">값 설명</div>\r
                                                        <div className="input flex--1">\r
                                                            <input type="text" className="input__native" />\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                                <div className='panel panel--radius flex--auto'>\r
                                                    <div className="panel__header">\r
                                                        <span className="tag tag--primary">*사이트</span>\r
                                                    </div>\r
                                                    <div className="flex flex--1">\r
                                                        <div className='panel width--4xl'>\r
                                                            <div className="panel__header gap-x--xs">\r
                                                                <div className="label">전체허용값</div>\r
                                                                <div className='width--xxs ml--auto'>\r
                                                                    <select>\r
                                                                        <option>코드</option>\r
                                                                    </select>\r
                                                                </div>\r
                                                                <div className="input width--lg">\r
                                                                    <input type="text" className="input__native" placeholder="" />\r
                                                                    <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                                                </div>\r
                                                            </div>\r
                                                            <div className="panel__content">\r
                                                                <div className='flex-content-wrapper'>\r
                                                                    <div id="list_view1" className='flex-content-pin'></div>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                        <div className='panel border border-top-none border-bottom-none px--lg'></div>\r
                                                        <div className='panel flex--1'>\r
                                                            <div className="panel__header gap-x--xs">\r
                                                                <div className="label">선택허용값</div>\r
                                                                <div className="checkbox ml--lg">\r
                                                                    <label className="checkbox__wrapper">\r
                                                                        <input type="checkbox" className="checkbox__input" />\r
                                                                        <span className="checkbox__text">허용값 중복</span>\r
                                                                    </label>\r
                                                                </div>\r
                                                                <div className="checkbox ml--lg">\r
                                                                    <label className="checkbox__wrapper">\r
                                                                        <input type="checkbox" className="checkbox__input" />\r
                                                                        <span className="checkbox__text">날짜 중복</span>\r
                                                                    </label>\r
                                                                </div>\r
                                                                <button type='button' className='button button--outline ml--auto'>자동 순번</button>\r
                                                            </div>\r
                                                            <div className="panel__content">\r
                                                                <div className='flex-content-wrapper'>\r
                                                                    <div id="list_view2" className='flex-content-pin'></div>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div className="panel__footer">\r
                                                        <div className="button-group ml--auto">\r
                                                            <button type="button" className="button button--outline">\r
                                                                <i className="button__icon-prefix ir-icon ir-icon--excel"></i>엑셀 저장\r
                                                            </button>\r
                                                            <button type="button" className="button button--secondary">\r
                                                                <i className="button__icon-prefix ir-icon ir-icon--save"></i>항목 저장\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                        </main>\r
                        <PFFooter />\r
                    </div>\r
                </>} />;
}`,...(t=(s=i.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const x=["상품보험_항목_등록수정"];export{x as __namedExportsOrder,N as default,i as 상품보험_항목_등록수정};
//# sourceMappingURL=상품보험_항목_등록수정.stories-461d43e8.js.map
