import{a as e,j as a}from"./jsx-runtime-KzWSGvcx.js";import{r as c}from"./index-DogsOklH.js";import{P as p}from"./pf-biz-app-VkUryjgB.js";import{r as m}from"./index-y6IAO1dD.js";import"./timePicker.elements-RVnBiWo6.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./common-LJtgn8WU.js";import"./select-KmN-oMMw.js";import"./index-eYBRYqm7.js";import"./datePicker-143Z-Tg8.js";import"./clipboard-NFyc1dad.js";import"./dom-fI5bczoz.js";function b(){return e("div",{className:"dialog is-visible",children:a("div",{className:"dialog__wrapper",style:{width:368},children:[a("div",{className:"dialog__header",children:[e("strong",{className:"dialog__header-title",children:"다이얼로그"}),e("div",{className:"dialog__header-actions",children:e("button",{type:"button",className:"dialog__button-close",children:e("i",{className:"ir-icon ir-icon--close"})})})]}),a("div",{className:"dialog__content",children:[e("p",{children:"산출식"}),e("div",{className:"border mt--sm border-radius--md",style:{height:240}})]}),e("div",{className:"dialog__footer",children:a("div",{className:"button-group ml--auto",children:[e("button",{className:"button button--outline",children:"취소"}),e("button",{className:"button button--primary",children:"적용"})]})})]})})}function h(){return e("div",{className:"dialog is-visible",children:a("div",{className:"dialog__wrapper",style:{width:368},children:[a("div",{className:"dialog__header",children:[e("strong",{className:"dialog__header-title",children:"다이얼로그"}),e("div",{className:"dialog__header-actions",children:e("button",{type:"button",className:"dialog__button-close",children:e("i",{className:"ir-icon ir-icon--close"})})})]}),a("div",{className:"dialog__content p--none",children:[e("div",{className:"panel__header",children:"ABC"}),e("div",{className:"panel__content",children:"AAA"})]}),e("div",{className:"dialog__footer",children:a("div",{className:"button-group ml--auto",children:[e("button",{className:"button button--outline",children:"취소"}),e("button",{className:"button button--primary",children:"적용"})]})})]})})}function n(t){const{visible:s,children:l}=t;return s?(console.log("visible"),m.createPortal(l,document.querySelector(t.selector))):null}try{n.displayName="Modal",n.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},selector:{defaultValue:null,description:"",name:"selector",required:!0,type:{name:"string"}}}}}catch{}const F={title:"PF Examples/퍼블리싱"},i=()=>{const[t,s]=c.useState(!1),[l,u]=c.useState(!1);return a(p,{headerText:"상품데이터 변경이력 조회",children:[a("main",{className:"flex flex--column flex--auto overflow-y--auto",children:[a("div",{className:"panel",children:[a("div",{className:"panel__header gap-x--xs",children:[e("span",{className:"label",children:"유형"}),e("div",{className:"width--lg",children:e("select",{"data-ir-select":!0,style:{display:"none"}})}),e("span",{className:"label",children:"세부유형"}),e("div",{className:"width--lg",children:e("select",{"data-ir-select":!0,style:{display:"none"}})}),e("button",{className:"button button--primary",onClick:()=>s(!0),children:"다이얼로그 Open"}),e("button",{className:"button button--secondary",onClick:()=>u(!0),children:"다이얼로그2 Open"})]}),a("div",{className:"flex",children:[a("div",{className:"flex flex--column",children:[a("div",{className:"panel__row gap-x--xs ",children:[a("label",{className:"checkbox__wrapper min-width--3xs",children:[e("input",{type:"checkbox",className:"checkbox__input",defaultChecked:!0}),e("span",{className:"checkbox__text",children:"신규"})]}),a("label",{className:"checkbox__wrapper min-width--3xs",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"수정"})]}),a("label",{className:"checkbox__wrapper min-width--3xs",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"삭제"})]}),e("div",{className:"divider divider--vertical"}),a("label",{className:"checkbox__wrapper min-width--xs",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"항목변경"})]}),a("label",{className:"checkbox__wrapper min-width--xs",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"구조변경"})]}),a("label",{className:"checkbox__wrapper min-width--xs",children:[e("input",{type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"표준항목변경"})]}),e("div",{className:"divider divider--vertical"}),a("div",{className:"input-date-range",children:[e("div",{"data-ir-date-picker":!0,"data-ir-date-picker-checkbox":!0,className:"width--lg"}),e("span",{className:"input-date-range__separator"}),e("div",{"data-ir-date-picker":!0,className:"width--lg"})]})]}),e("div",{className:"divider"}),a("div",{className:"panel__row gap-x--xs",children:[e("span",{className:"label",children:"코드"}),e("div",{className:"input width--md",children:e("input",{type:"text",className:"input__native"})}),e("span",{className:"label",children:"항목명"}),a("div",{className:"row",children:[e("div",{className:"width--xs",children:e("select",{"data-ir-select":!0,className:"select--right-edge",style:{display:"none"},children:e("option",{children:"포함하는"})})}),e("div",{className:"input input--left-edge width--lg",children:e("input",{type:"text",className:"input__native border-left-none"})})]}),e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--search"})}),e("span",{className:"label",children:"사용자 정보(이름/ID/IP)"}),e("div",{className:"input width--xl",children:e("input",{type:"text",className:"input__native"})})]})]}),e("div",{className:"divider divider--vertical"}),a("div",{className:"flex flex--column gap-y--px",children:[a("div",{className:"panel__row gap-x--xs",children:[e("span",{className:"label",children:"검색개수"}),e("div",{className:"width--xs",children:e("select",{"data-ir-select":!0,style:{display:"none"},children:e("option",{children:"10"})})}),e("button",{type:"button",className:"button button--icon",children:e("i",{className:"ir-icon ir-icon--search"})})]}),a("div",{className:"panel__row gap-x--xs",children:[e("button",{type:"button",className:"button button--outline",children:"이전"}),e("div",{className:"form-item__label text--center width--auto px--xxs",children:"0 / 0"}),e("button",{type:"button",className:"button button--outline",disabled:!0,children:"다음"}),e("button",{type:"button",className:"button button--icon button--outline",disabled:!0,children:e("i",{className:"ir-icon ir-icon--excel"})})]})]})]})]}),e("div",{className:"panel__content border-t--px flex--auto overflow-y--auto min-height--none",children:e("div",{"data-ir-grid":!0})})]}),e(n,{visible:t,selector:"#ir_dialog",children:e(b,{})}),e(n,{visible:l,selector:"#ir_dialog",children:e(h,{})})]})};var r,d,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return <PFBizApp headerText="상품데이터 변경이력 조회">\r
            <main className="flex flex--column flex--auto overflow-y--auto">\r
                <div className='panel'>\r
                    <div className='panel__header gap-x--xs'>\r
                        <span className='label'>유형</span>\r
                        <div className='width--lg'>\r
                            <select data-ir-select style={{
              display: "none"
            }}></select>\r
                        </div>\r
                        <span className='label'>세부유형</span>\r
                        <div className='width--lg'>\r
                            <select data-ir-select style={{
              display: "none"
            }}></select>\r
                        </div>\r
                        <button className="button button--primary" onClick={() => setVisible(true)}>다이얼로그 Open</button>\r
                        <button className="button button--secondary" onClick={() => setVisible2(true)}>다이얼로그2 Open</button>\r
                    </div>\r
                    <div className='flex'>\r
                        <div className='flex flex--column'>\r
                            <div className='panel__row gap-x--xs '>\r
                                <label className="checkbox__wrapper min-width--3xs">\r
                                    <input type="checkbox" className="checkbox__input" defaultChecked={true} /><span className="checkbox__text">신규</span>\r
                                </label>\r
                                <label className="checkbox__wrapper min-width--3xs">\r
                                    <input type="checkbox" className="checkbox__input" /><span className="checkbox__text">수정</span>\r
                                </label>\r
                                <label className="checkbox__wrapper min-width--3xs">\r
                                    <input type="checkbox" className="checkbox__input" /><span className="checkbox__text">삭제</span>\r
                                </label>\r
                                <div className='divider divider--vertical'></div>\r
                                <label className="checkbox__wrapper min-width--xs">\r
                                    <input type="checkbox" className="checkbox__input" /><span className="checkbox__text">항목변경</span>\r
                                </label>\r
                                <label className="checkbox__wrapper min-width--xs">\r
                                    <input type="checkbox" className="checkbox__input" /><span className="checkbox__text">구조변경</span>\r
                                </label>\r
                                <label className="checkbox__wrapper min-width--xs">\r
                                    <input type="checkbox" className="checkbox__input" /><span className="checkbox__text">표준항목변경</span>\r
                                </label>\r
                                <div className='divider divider--vertical'></div>\r
                                <div className="input-date-range">\r
                                    <div data-ir-date-picker data-ir-date-picker-checkbox className="width--lg"></div>\r
                                    <span className="input-date-range__separator"></span>\r
                                    <div data-ir-date-picker className='width--lg'></div>\r
                                </div>\r
                            </div>\r
                            <div className='divider'></div>\r
                            <div className='panel__row gap-x--xs'>\r
                                <span className='label'>코드</span>\r
                                <div className="input width--md">\r
                                    <input type="text" className='input__native' />\r
                                </div>\r
                                <span className='label'>항목명</span>\r
                                <div className='row'>\r
                                    <div className='width--xs'>\r
                                        <select data-ir-select className='select--right-edge' style={{
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
                        <div className='flex flex--column gap-y--px'>\r
                            <div className='panel__row gap-x--xs'>\r
                                <span className='label'>검색개수</span>\r
                                <div className='width--xs'>\r
                                    <select data-ir-select style={{
                  display: "none"
                }}>\r
                                        <option>10</option>\r
                                    </select>\r
                                </div>\r
                                <button type="button" className="button button--icon"><i className="ir-icon ir-icon--search"></i></button>\r
                            </div>\r
                            <div className='panel__row gap-x--xs'>\r
                                <button type="button" className="button button--outline">이전</button>\r
                                <div className='form-item__label text--center width--auto px--xxs'>0 / 0</div>\r
                                <button type="button" className="button button--outline" disabled>다음</button>\r
                                <button type="button" className="button button--icon button--outline" disabled><i className="ir-icon ir-icon--excel"></i></button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className='panel__content border-t--px flex--auto overflow-y--auto min-height--none'>\r
                    <div data-ir-grid></div>\r
                </div>\r
            </main>\r
            <Modal visible={visible} selector="#ir_dialog">\r
                <PFDialogSample />\r
            </Modal>\r
            <Modal visible={visible2} selector="#ir_dialog">\r
                <PFDialogSample2 />\r
            </Modal>\r
        </PFBizApp>;
}`,...(o=(d=i.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const P=["상품데이터_변경이력_조회"];export{P as __namedExportsOrder,F as default,i as 상품데이터_변경이력_조회};
