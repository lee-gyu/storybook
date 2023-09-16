import{j as t,a as e}from"./jsx-runtime-e43ccb36.js";import{D as s,a as c,L as n}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const h={title:"HTML Components/Panel"},a=()=>t(s,{children:[e(c,{children:"Radius Panel"}),e(n,{fixedHeight:700,css:`
#live_editor_wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgb(229, 229, 229);
    height: 100%;
}
            `,html:t("div",{className:"flex flex--column flex--auto gap-y--xl",children:[t("div",{className:"flex gap-x--xl",style:{height:400},children:[e("div",{className:"panel panel--radius relative",style:{width:460},children:t("div",{className:"panel__content top left bottom right",children:[e("div",{className:"title-bar-header",children:e("h4",{className:"title-bar-header__text",children:"일반"})}),e("div",{className:"panel__content-wrapper",children:"..."}),t("div",{className:"title-bar-header",children:[e("h4",{className:"title-bar-header__text",children:"질문서 답변유형코드 설정"}),e("i",{className:"ir-icon ir-icon--setting"})]}),t("div",{className:"panel__content-wrapper",children:["미리보기",t("div",{className:"form-item",children:[e("div",{className:"width--lg",children:e("select",{id:"select1"})}),e("div",{className:"form-item__label width--auto pl--xxl",children:"선택 값"}),e("div",{className:"width--lg",children:e("select",{id:"select2"})})]})]})]})}),t("div",{className:"panel panel--radius flex--auto",children:[t("div",{className:"panel__header",children:[e("h4",{className:"panel__header-text",children:"기준항목 선택"}),t("div",{className:"button-group",children:[t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"기준항목 추가"]}),t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"기준항목 삭제"]})]})]}),t("div",{className:"panel__header gap-x--xs",children:[e("select",{id:"select3",className:"width--lg",children:e("option",{children:"항목이름"})}),e("select",{id:"select4",className:"width--lg",children:e("option",{children:"포함하는"})}),t("div",{className:"input",children:[e("input",{type:"text",className:"input__native",placeholder:"검색어 입력"}),e("button",{className:"input__suffix",children:e("i",{className:"ir-icon ir-icon--search"})})]})]}),e("div",{className:"panel__content position",children:t("div",{className:"flex-content-pin",children:[e("div",{className:"title-bar-header",children:e("h4",{className:"title-bar-header__text",children:"검색개수 ComboBox 설정"})}),e("div",{className:"panel__content-wrapper",children:"..."}),e("div",{className:"title-bar-header",children:e("h4",{className:"title-bar-header__text",children:"CheckBox 값 설정 설정"})}),e("div",{className:"panel__content-wrapper",children:"..."}),e("div",{className:"title-bar-header",children:e("h4",{className:"title-bar-header__text",children:"변경사유 입력 기간 설정"})}),e("div",{className:"panel__content-wrapper",children:"..."}),e("div",{className:"title-bar-header",children:e("h4",{className:"title-bar-header__text",children:"상품데이터 유효성 검사"})}),e("div",{className:"panel__content-wrapper",children:"..."})]})}),e("div",{className:"panel__footer",children:t("div",{className:"button-group ml--auto",children:[t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"항목 추가"]}),t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"항목 삭제"]}),t("button",{type:"button",className:"button button--outline",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--save"}),"항목 저장"]})]})})]})]}),t("div",{className:"flex flex--auto gap-x--xl",children:[t("div",{className:"panel panel--radius",style:{width:394},children:[t("div",{className:"panel__content",children:["asd",e("br",{}),"asd",e("br",{}),"asd",e("br",{}),"asd",e("br",{}),"asd",e("br",{})]}),t("div",{className:"panel__footer panel__footer--button",children:[e("i",{className:"button__icon-prefix ir-icon ir-icon--search"}),"조회"]})]}),e("div",{className:"panel panel--radius flex--auto"})]})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect( select1 );
new IRSelect( { contextElement: select2, disabled: true });
new IRSelect( select3 );
new IRSelect( select4 );


`})]});var i,l,r;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Radius Panel</DocTitle>\r
        <LiveEditor fixedHeight={700} css={/* css */\`
#live_editor_wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgb(229, 229, 229);
    height: 100%;
}
            \`} html={<div className="flex flex--column flex--auto gap-y--xl">\r
                    <div className='flex gap-x--xl' style={{
      height: 400
    }}>\r
                        <div className="panel panel--radius relative" style={{
        width: 460
      }}>\r
                            <div className="panel__content top left bottom right">\r
                                <div className="title-bar-header">\r
                                    <h4 className="title-bar-header__text">일반</h4>\r
                                </div>\r
\r
                                <div className='panel__content-wrapper'>\r
                                    ...\r
                                </div>\r
\r
                                <div className="title-bar-header">\r
                                    <h4 className="title-bar-header__text">질문서 답변유형코드 설정</h4>\r
                                    <i className="ir-icon ir-icon--setting"></i>\r
                                </div>\r
\r
                                <div className='panel__content-wrapper'>\r
                                    미리보기\r
                                    <div className='form-item'>\r
                                        <div className='width--lg'>\r
                                            <select id='select1'></select>\r
                                        </div>\r
                                        <div className='form-item__label width--auto pl--xxl'>선택 값</div>\r
                                        <div className='width--lg'>\r
                                            <select id='select2'></select>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div className="panel panel--radius flex--auto">\r
                            <div className="panel__header">\r
                                <h4 className="panel__header-text">기준항목 선택</h4>\r
                                <div className='button-group'>\r
                                    <button type="button" className="button button--outline">\r
                                        <i className='button__icon-prefix ir-icon ir-icon--add-circle-fill'></i>\r
                                        기준항목 추가\r
                                    </button>\r
                                    <button type="button" className="button button--outline">\r
                                        <i className='button__icon-prefix ir-icon ir-icon--delete'></i>\r
                                        기준항목 삭제\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div className="panel__header gap-x--xs">\r
                                <select id="select3" className='width--lg'>\r
                                    <option>항목이름</option>\r
                                </select>\r
                                <select id="select4" className='width--lg'>\r
                                    <option>포함하는</option>\r
                                </select>\r
                                <div className="input">\r
                                    <input type="text" className="input__native" placeholder="검색어 입력" />\r
                                    <button className="input__suffix"><i className="ir-icon ir-icon--search"></i></button>\r
                                </div>\r
                            </div>\r
                            <div className='panel__content position'>\r
                                <div className='flex-content-pin'>\r
                                    <div className="title-bar-header">\r
                                        <h4 className="title-bar-header__text">검색개수 ComboBox 설정</h4>\r
                                    </div>\r
                                    <div className='panel__content-wrapper'>\r
                                        ...\r
                                    </div>\r
                                    <div className="title-bar-header">\r
                                        <h4 className="title-bar-header__text">CheckBox 값 설정 설정</h4>\r
                                    </div>\r
                                    <div className='panel__content-wrapper'>\r
                                        ...\r
                                    </div>\r
                                    <div className="title-bar-header">\r
                                        <h4 className="title-bar-header__text">변경사유 입력 기간 설정</h4>\r
                                    </div>\r
                                    <div className='panel__content-wrapper'>\r
                                        ...\r
                                    </div>\r
                                    <div className="title-bar-header">\r
                                        <h4 className="title-bar-header__text">상품데이터 유효성 검사</h4>\r
                                    </div>\r
                                    <div className='panel__content-wrapper'>\r
                                        ...\r
                                    </div>\r
                                </div>\r
\r
                            </div>\r
                            <div className='panel__footer'>\r
                                <div className='button-group ml--auto'>\r
                                    <button type="button" className="button button--outline">\r
                                        <i className='button__icon-prefix ir-icon ir-icon--add-circle-fill'></i>\r
                                        항목 추가\r
                                    </button>\r
                                    <button type="button" className="button button--outline">\r
                                        <i className='button__icon-prefix ir-icon ir-icon--delete'></i>\r
                                        항목 삭제\r
                                    </button>\r
                                    <button type="button" className="button button--outline">\r
                                        <i className='button__icon-prefix ir-icon ir-icon--save'></i>\r
                                        항목 저장\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div className='flex flex--auto gap-x--xl'>\r
                        <div className="panel panel--radius" style={{
        width: 394
      }}>\r
                            <div className='panel__content'>\r
                                 asd<br />asd<br />asd<br />asd<br />asd<br />\r
                            </div>\r
                            <div className='panel__footer panel__footer--button'>\r
                                <i className='button__icon-prefix ir-icon ir-icon--search'></i>\r
                                    조회\r
                            </div>\r
                        </div>\r
                        <div className="panel panel--radius flex--auto">\r
                        </div>\r
                    </div>\r
                </div>} code={/* javascript */\`
import { IRSelect } from "./dist/index.js";

new IRSelect( select1 );
new IRSelect( { contextElement: select2, disabled: true });
new IRSelect( select3 );
new IRSelect( select4 );


\`} />\r
    </Doc>`,...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const _=["Panel"];export{a as Panel,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=panel.stories-c872416f.js.map
