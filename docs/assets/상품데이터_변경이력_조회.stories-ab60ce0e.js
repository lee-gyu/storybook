import{a as e,j as a,F as c}from"./jsx-runtime-e43ccb36.js";import{P as r,a as n,b as d}from"./common-71494616.js";import{b as o}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const b={title:"PF Examples/퍼블리싱"},s=()=>e(o,{code:`
import { IRSelect, IRDatePicker } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

document.querySelectorAll("select")
        .forEach( el => {
            new IRSelect(el);
        });

document.querySelectorAll(".date-picker")
        .forEach( el => {
            new IRDatePicker( {
                div: el,
                checkbox: true
            } )
        });

new libGrid.IRGrid({
    contextElement: grid,
    colHeader: {
        rowCount: 1
    },
    body: {
        rowCount: 100
    }
})

            `,html:a(c,{children:[e(r,{}),a("div",{className:"app flex flex--column",children:[e(n,{text:"상품데이터 변경이력 조회"}),a("main",{className:"flex flex--column flex--auto background--light-secondary gap-y--xs py--sm px--sm overflow-y--auto",children:[a("div",{className:"panel panel--radius",children:[a("div",{className:"panel__header px--lg gap-x--xs",children:[e("span",{className:"label",children:"유형"}),e("div",{className:"width--lg",children:e("select",{style:{display:"none"}})}),e("span",{className:"label",children:"세부유형"}),e("div",{className:"width--lg",children:e("select",{style:{display:"none"}})})]}),a("div",{className:"flex",children:[a("div",{className:"flex flex--column",children:[a("div",{className:"row align-items--center py--xs px--lg gap-x--xs ",children:[a("label",{className:"checkbox__wrapper min-width--3xs",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"신규"})]}),a("label",{className:"checkbox__wrapper min-width--3xs",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"수정"})]}),a("label",{className:"checkbox__wrapper min-width--3xs",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"삭제"})]}),e("div",{className:"divider divider--vertical"}),a("label",{className:"checkbox__wrapper min-width--xs",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"항목변경"})]}),a("label",{className:"checkbox__wrapper min-width--xs",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"구조변경"})]}),a("label",{className:"checkbox__wrapper min-width--xs",children:[e("input",{type:"checkbox",className:"checkbox__input",checked:!0}),e("span",{className:"checkbox__text",children:"표준항목변경"})]}),e("div",{className:"divider divider--vertical"}),a("div",{className:"input-date-range",children:[e("div",{className:"date-picker width--lg"}),e("span",{className:"input-date-range__separator"}),e("div",{className:"date-picker width--lg"})]})]}),e("div",{className:"divider"}),a("div",{className:"row align-items--center py--xs px--lg gap-x--xs",children:[e("span",{className:"label",children:"코드"}),e("div",{className:"input width--md",children:e("input",{type:"text",className:"input__native"})}),e("span",{className:"label",children:"항목명"}),a("div",{className:"row",children:[e("div",{className:"width--xs",children:e("select",{className:"select--right-edge",style:{display:"none"},children:e("option",{children:"포함하는"})})}),e("div",{className:"input input--left-edge width--lg",children:e("input",{type:"text",className:"input__native border-left-none"})})]}),e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--search"})}),e("span",{className:"label",children:"사용자 정보(이름/ID/IP)"}),e("div",{className:"input width--xl",children:e("input",{type:"text",className:"input__native"})})]})]}),e("div",{className:"divider divider--vertical"}),a("div",{className:"flex flex--column",children:[a("div",{className:"row align-items--center py--xs px--lg gap-x--xs",children:[e("span",{className:"label",children:"검색개수"}),e("div",{className:"width--xs",children:e("select",{style:{display:"none"},children:e("option",{children:"10"})})}),e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--search"})})]}),a("div",{className:"row align-items--center py--xs px--lg gap-x--xs",children:[e("button",{type:"button",className:"button button--outline",disabled:!0,children:"이전"}),e("div",{className:"form-item__label text--center width--auto px--xxs",children:"0 / 0"}),e("button",{type:"button",className:"button button--outline",disabled:!0,children:"다음"}),e("button",{type:"button",className:"button button--icon button--outline",disabled:!0,children:e("i",{className:"ir-icon ir-icon--excel"})})]})]})]})]}),e("div",{className:"panel panel--radius flex--auto py--lg px--lg overflow-y--auto",style:{minHeight:0},children:e("div",{id:"grid"})})]}),e(d,{})]})]})});var l,t,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <LiveEditorForExamples code={/* javascript */\`
import { IRSelect, IRDatePicker } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

document.querySelectorAll("select")
        .forEach( el => {
            new IRSelect(el);
        });

document.querySelectorAll(".date-picker")
        .forEach( el => {
            new IRDatePicker( {
                div: el,
                checkbox: true
            } )
        });

new libGrid.IRGrid({
    contextElement: grid,
    colHeader: {
        rowCount: 1
    },
    body: {
        rowCount: 100
    }
})

            \`} html={<>\r
                    <PFCommonStyle />\r
                    <div className="app flex flex--column">\r
                        <PFHeader text='상품데이터 변경이력 조회' />\r
                        <main className="flex flex--column flex--auto background--light-secondary gap-y--xs py--sm px--sm overflow-y--auto">\r
                            <div className='panel panel--radius'>\r
                                <div className='panel__header px--lg gap-x--xs'>\r
                                    <span className='label'>유형</span>\r
                                    <div className='width--lg'>\r
                                        <select style={{
                display: "none"
              }}></select>\r
                                    </div>\r
                                    <span className='label'>세부유형</span>\r
                                    <div className='width--lg'>\r
                                        <select style={{
                display: "none"
              }}></select>\r
                                    </div>\r
                                </div>\r
                                <div className='flex'>\r
                                    <div className='flex flex--column'>\r
                                        <div className='row align-items--center py--xs px--lg gap-x--xs '>\r
                                            <label className="checkbox__wrapper min-width--3xs">\r
                                                <input type="checkbox" className="checkbox__input" checked /><span className="checkbox__text">신규</span>\r
                                            </label>\r
                                            <label className="checkbox__wrapper min-width--3xs">\r
                                                <input type="checkbox" className="checkbox__input" checked /><span className="checkbox__text">수정</span>\r
                                            </label>\r
                                            <label className="checkbox__wrapper min-width--3xs">\r
                                                <input type="checkbox" className="checkbox__input" checked /><span className="checkbox__text">삭제</span>\r
                                            </label>\r
                                            <div className='divider divider--vertical'></div>\r
                                            <label className="checkbox__wrapper min-width--xs">\r
                                                <input type="checkbox" className="checkbox__input" checked /><span className="checkbox__text">항목변경</span>\r
                                            </label>\r
                                            <label className="checkbox__wrapper min-width--xs">\r
                                                <input type="checkbox" className="checkbox__input" checked /><span className="checkbox__text">구조변경</span>\r
                                            </label>\r
                                            <label className="checkbox__wrapper min-width--xs">\r
                                                <input type="checkbox" className="checkbox__input" checked /><span className="checkbox__text">표준항목변경</span>\r
                                            </label>\r
                                            <div className='divider divider--vertical'></div>\r
                                            <div className="input-date-range">\r
                                                <div className="date-picker width--lg"></div>\r
                                                <span className="input-date-range__separator"></span>\r
                                                <div className='date-picker width--lg'></div>\r
                                            </div>\r
                                        </div>\r
                                        <div className='divider'></div>\r
                                        <div className='row align-items--center py--xs px--lg gap-x--xs'>\r
                                            <span className='label'>코드</span>\r
                                            <div className="input width--md">\r
                                                <input type="text" className='input__native' />\r
                                            </div>\r
                                            <span className='label'>항목명</span>\r
                                            <div className='row'>\r
                                                <div className='width--xs'>\r
                                                    <select className='select--right-edge' style={{
                      display: "none"
                    }}>\r
                                                        <option>포함하는</option>\r
                                                    </select>\r
                                                </div>\r
                                                <div className='input input--left-edge width--lg'>\r
                                                    <input type="text" className='input__native border-left-none' />\r
                                                </div>\r
                                            </div>\r
                                            <button type="button" className="button button--icon"><i className="ir-icon ir-icon--search"></i></button>\r
                                            <span className='label'>사용자 정보(이름/ID/IP)</span>\r
                                            <div className="input width--xl">\r
                                                <input type="text" className='input__native' />\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div className='divider divider--vertical'></div>\r
                                    <div className='flex flex--column'>\r
                                        <div className='row align-items--center py--xs px--lg gap-x--xs'>\r
                                            <span className='label'>검색개수</span>\r
                                            <div className='width--xs'>\r
                                                <select style={{
                    display: "none"
                  }}>\r
                                                    <option>10</option>\r
                                                </select>\r
                                            </div>\r
                                            <button type="button" className="button button--icon"><i className="ir-icon ir-icon--search"></i></button>\r
                                        </div>\r
                                        <div className='row align-items--center py--xs px--lg gap-x--xs'>\r
                                            <button type="button" className="button button--outline" disabled>이전</button>\r
                                            <div className='form-item__label text--center width--auto px--xxs'>0 / 0</div>\r
                                            <button type="button" className="button button--outline" disabled>다음</button>\r
                                            <button type="button" className="button button--icon button--outline" disabled><i className="ir-icon ir-icon--excel"></i></button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div className='panel panel--radius flex--auto py--lg px--lg overflow-y--auto' style={{
          minHeight: 0
        }}>\r
                                <div id="grid"></div>\r
                            </div>\r
                        </main>\r
                        <PFFooter />\r
                    </div>\r
                </>} />;
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const N=["상품데이터_변경이력_조회"];export{N as __namedExportsOrder,b as default,s as 상품데이터_변경이력_조회};
//# sourceMappingURL=상품데이터_변경이력_조회.stories-ab60ce0e.js.map
