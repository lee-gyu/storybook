import{j as n,F as s,a as t}from"./jsx-runtime-KzWSGvcx.js";import{u,a as c,P as r}from"./common-boi0_l96.js";import"./index-DogsOklH.js";import"./timePicker.elements-Q0xqtR9Q.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./select-ye26dHUk.js";import"./index--oTrqKKK.js";import"./datePicker-zU491wOI.js";import"./clipboard-NFyc1dad.js";import"./dom-fI5bczoz.js";const y={title:"PF Examples/퍼블리싱"},e=()=>(u(),c("select"),n(s,{children:[t(r,{}),n("div",{className:"app flex flex--column",children:[n("header",{className:"flex flex--none justify-content--space-between py--xs px--xxl background--sapphire-pattern",children:[t("div",{className:"flex--none",children:n("div",{className:"text-switch",children:[t("button",{type:"button",className:"text-switch__button is-active",children:"개발"}),t("button",{type:"button",className:"text-switch__button",children:"검증"}),t("button",{type:"button",className:"text-switch__button",children:"운영"})]})}),t("div",{className:"flex flex--none align-self--center text--white",children:t("h2",{children:"사용자 관리"})}),n("div",{className:"flex flex--none align-self--center gap-x--xl",children:[t("button",{type:"button",className:"icon-button icon-button--md",children:t("i",{className:"ir-icon ir-icon--home-fill ir-icon--white"})}),t("button",{type:"button",className:"icon-button icon-button--md",children:t("i",{className:"ir-icon ir-icon--user-outline ir-icon--white"})}),t("button",{type:"button",className:"icon-button icon-button--md",children:t("i",{className:"ir-icon ir-icon--user-management-outline ir-icon--white"})}),t("button",{type:"button",className:"icon-button icon-button--md",children:t("i",{className:"ir-icon ir-icon--preference-outline ir-icon--white"})}),t("button",{type:"button",className:"icon-button icon-button--md",children:t("i",{className:"ir-icon ir-icon--information-circle-outline ir-icon--white"})}),t("button",{type:"button",className:"icon-button icon-button--md",children:t("i",{className:"ir-icon ir-icon--logout-outline ir-icon--white"})})]})]}),n("main",{className:"flex flex--column flex--auto background--light-secondary gap-y--xs overflow-y--auto",children:[n("div",{className:"tabs tabs--light flex--auto",children:[n("div",{className:"tabs__nav",children:[t("button",{type:"button",className:"tabs__nav-button is-active",children:"사용자 관리"}),t("button",{type:"button",className:"tabs__nav-button",children:"사용자 그룹 관리"})]}),n("div",{className:"tabs__content",children:[t("div",{className:"tabs__panel is-active"}),t("div",{className:"tabs__panel"})]})]}),n("div",{className:"tabs tabs--light flex--auto",children:[n("div",{className:"tabs__nav",children:[t("button",{type:"button",className:"tabs__nav-button is-active",children:"접속권한 설정"}),t("button",{type:"button",className:"tabs__nav-button",children:"유형그룹권한 설정"}),t("button",{type:"button",className:"tabs__nav-button",children:"유형권한 설정"}),t("button",{type:"button",className:"tabs__nav-button",children:"업무권한 설정"}),t("button",{type:"button",className:"tabs__nav-button",children:"이관권한 설정"}),t("button",{type:"button",className:"tabs__nav-button",children:"메뉴권한 설정"}),t("button",{type:"button",className:"tabs__nav-button",children:"룰권한 설정"})]}),n("div",{className:"tabs__content",children:[t("div",{className:"tabs__panel is-active",children:"First Panel"}),t("div",{className:"tabs__panel",children:"Second Panel"}),t("div",{className:"tabs__panel",children:"Third Panel"})]})]})]}),n("footer",{className:"shadow--sm",children:[n("div",{className:"flex gap-x--xs background--light py--xs px--xs",children:[n("button",{type:"button",className:"button button--outline ml--auto width--md",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"}),"저장"]}),n("button",{type:"button",className:"button button--outline width--md",children:[t("i",{className:"button__icon-prefix ir-icon ir-icon--rule-type-table"}),"닫기"]})]}),n("div",{className:"flex justify-content--space-between py--xs px--xxl text--tertiary text--h5",children:[t("span",{children:"김이노"}),t("span",{children:"Copyright 2022. INNORULES Corporation. All rights reserved."}),t("span",{children:"InnoProduct Web 5.3"})]})]})]})]}));var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  useV2Theme();
  useIRSelect("select");
  return <>\r
            <PFCommonStyle />\r
            <div className="app flex flex--column">\r
                <header className="flex flex--none justify-content--space-between py--xs px--xxl background--sapphire-pattern">\r
                    <div className="flex--none">\r
                        <div className="text-switch">\r
                            <button type="button" className="text-switch__button is-active">개발</button>\r
                            <button type="button" className="text-switch__button">검증</button>\r
                            <button type="button" className="text-switch__button">운영</button>\r
                        </div>\r
                    </div>\r
                    <div className='flex flex--none align-self--center text--white'>\r
                        <h2>사용자 관리</h2>\r
                    </div>\r
                    <div className="flex flex--none align-self--center gap-x--xl">\r
                        <button type="button" className="icon-button icon-button--md">\r
                            <i className="ir-icon ir-icon--home-fill ir-icon--white" />\r
                        </button>\r
                        <button type="button" className="icon-button icon-button--md">\r
                            <i className="ir-icon ir-icon--user-outline ir-icon--white" />\r
                        </button>\r
                        <button type="button" className="icon-button icon-button--md">\r
                            <i className="ir-icon ir-icon--user-management-outline ir-icon--white" />\r
                        </button>\r
                        <button type="button" className="icon-button icon-button--md">\r
                            <i className="ir-icon ir-icon--preference-outline ir-icon--white" />\r
                        </button>\r
                        <button type="button" className="icon-button icon-button--md">\r
                            <i className="ir-icon ir-icon--information-circle-outline ir-icon--white" />\r
                        </button>\r
                        <button type="button" className="icon-button icon-button--md">\r
                            <i className="ir-icon ir-icon--logout-outline ir-icon--white" />\r
                        </button>\r
                    </div>\r
                </header>\r
                <main className="flex flex--column flex--auto background--light-secondary gap-y--xs overflow-y--auto">\r
                    <div className="tabs tabs--light flex--auto">\r
                        <div className="tabs__nav">\r
                            <button type="button" className="tabs__nav-button is-active">사용자 관리</button>\r
                            <button type="button" className="tabs__nav-button">사용자 그룹 관리</button>\r
                        </div>\r
                        <div className="tabs__content">\r
                            <div className="tabs__panel is-active">\r
                            </div>\r
                            <div className="tabs__panel"></div>\r
                        </div>\r
                    </div>\r
\r
                    <div className="tabs tabs--light flex--auto">\r
                        <div className="tabs__nav">\r
                            <button type="button" className="tabs__nav-button is-active">접속권한 설정</button>\r
                            <button type="button" className="tabs__nav-button">유형그룹권한 설정</button>\r
                            <button type="button" className="tabs__nav-button">유형권한 설정</button>\r
                            <button type="button" className="tabs__nav-button">업무권한 설정</button>\r
                            <button type="button" className="tabs__nav-button">이관권한 설정</button>\r
                            <button type="button" className="tabs__nav-button">메뉴권한 설정</button>\r
                            <button type="button" className="tabs__nav-button">룰권한 설정</button>\r
                        </div>\r
                        <div className="tabs__content">\r
                            <div className="tabs__panel is-active">First Panel</div>\r
                            <div className="tabs__panel">Second Panel</div>\r
                            <div className="tabs__panel">Third Panel</div>\r
                        </div>\r
                    </div>\r
\r
                </main>\r
                <footer className='shadow--sm'>\r
                    <div className='flex gap-x--xs background--light py--xs px--xs'>\r
                        <button type="button" className="button button--outline ml--auto width--md">\r
                            <i className="button__icon-prefix ir-icon ir-icon--rule-type-table"></i>저장</button>\r
                        <button type="button" className="button button--outline width--md">\r
                            <i className="button__icon-prefix ir-icon ir-icon--rule-type-table"></i>닫기</button>\r
                    </div>\r
                    <div className='flex justify-content--space-between py--xs px--xxl text--tertiary text--h5'>\r
                        <span>김이노</span>\r
                        <span>Copyright 2022. INNORULES Corporation. All rights reserved.</span>\r
                        <span>InnoProduct Web 5.3</span>\r
                    </div>\r
                </footer>\r
            </div>\r
        </>;
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const f=["사용자관리"];export{f as __namedExportsOrder,y as default,e as 사용자관리};
