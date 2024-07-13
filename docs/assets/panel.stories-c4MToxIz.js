import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a as r,L as l}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const m={title:"HTML Components/Panel"},n=()=>e.jsxs(i,{children:[e.jsx(r,{children:"Panel"}),e.jsx(l,{fixedHeight:700,css:`
#live_editor_wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgb(229, 229, 229);
    height: 100%;
}
            `,html:e.jsxs("div",{className:"flex flex--column flex--auto gap-y--sm",children:[e.jsxs("div",{className:"flex gap-x--sm",style:{height:400},children:[e.jsx("div",{className:"panel relative",style:{width:460},children:e.jsxs("div",{className:"panel__content top left bottom right",children:[e.jsx("div",{className:"title-bar-header",children:e.jsx("h4",{className:"title-bar-header__text",children:"일반"})}),e.jsx("div",{className:"panel__content-wrapper",children:"..."}),e.jsxs("div",{className:"title-bar-header",children:[e.jsx("h4",{className:"title-bar-header__text",children:"질문서 답변유형코드 설정"}),e.jsx("i",{className:"ir-icon ir-icon--setting"})]}),e.jsxs("div",{className:"panel__content-wrapper",children:["미리보기",e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"width--lg",children:e.jsx("select",{id:"select1"})}),e.jsx("div",{className:"form-item__label width--auto pl--xxl",children:"선택 값"}),e.jsx("div",{className:"width--lg",children:e.jsx("select",{id:"select2"})})]})]})]})}),e.jsxs("div",{className:"panel flex--auto",children:[e.jsxs("div",{className:"panel__header",children:[e.jsx("h4",{className:"panel__header-text",children:"기준항목 선택"}),e.jsxs("div",{className:"button-group",children:[e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"기준항목 추가"]}),e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"기준항목 삭제"]})]})]}),e.jsxs("div",{className:"panel__header gap-x--xs",children:[e.jsx("select",{id:"select3",className:"width--lg",children:e.jsx("option",{children:"항목이름"})}),e.jsx("select",{id:"select4",className:"width--lg",children:e.jsx("option",{children:"포함하는"})}),e.jsxs("div",{className:"input",children:[e.jsx("input",{type:"text",className:"input__native",placeholder:"검색어 입력"}),e.jsx("button",{className:"input__suffix",children:e.jsx("i",{className:"ir-icon ir-icon--search"})})]})]}),e.jsx("div",{className:"panel__content position",children:e.jsxs("div",{className:"flex-content-pin",children:[e.jsx("div",{className:"title-bar-header",children:e.jsx("h4",{className:"title-bar-header__text",children:"검색개수 ComboBox 설정"})}),e.jsx("div",{className:"panel__content-wrapper",children:"..."}),e.jsx("div",{className:"title-bar-header",children:e.jsx("h4",{className:"title-bar-header__text",children:"CheckBox 값 설정 설정"})}),e.jsx("div",{className:"panel__content-wrapper",children:"..."}),e.jsx("div",{className:"title-bar-header",children:e.jsx("h4",{className:"title-bar-header__text",children:"변경사유 입력 기간 설정"})}),e.jsx("div",{className:"panel__content-wrapper",children:"..."}),e.jsx("div",{className:"title-bar-header",children:e.jsx("h4",{className:"title-bar-header__text",children:"상품데이터 유효성 검사"})}),e.jsx("div",{className:"panel__content-wrapper",children:"..."})]})}),e.jsx("div",{className:"panel__footer",children:e.jsxs("div",{className:"button-group ml--auto",children:[e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--add-circle-fill"}),"항목 추가"]}),e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--delete"}),"항목 삭제"]}),e.jsxs("button",{type:"button",className:"button button--outline",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--save"}),"항목 저장"]})]})})]})]}),e.jsxs("div",{className:"flex flex--auto gap-x--sm",children:[e.jsxs("div",{className:"panel",style:{width:394},children:[e.jsxs("div",{className:"panel__content",children:["asd",e.jsx("br",{}),"asd",e.jsx("br",{}),"asd",e.jsx("br",{}),"asd",e.jsx("br",{}),"asd",e.jsx("br",{})]}),e.jsxs("div",{className:"panel__footer panel__footer--button",children:[e.jsx("i",{className:"button__icon-prefix ir-icon ir-icon--search"}),"조회"]})]}),e.jsx("div",{className:"panel flex--auto"})]})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect( select1 );
new IRSelect( { contextElement: select2, disabled: true });
new IRSelect( select3 );
new IRSelect( select4 );


`})]});n.__docgenInfo={description:"",methods:[],displayName:"Panel"};var t,s,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Panel</DocTitle>\r
        <LiveEditor fixedHeight={700} css={/* css */\`
#live_editor_wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgb(229, 229, 229);
    height: 100%;
}
            \`} html={<div className="flex flex--column flex--auto gap-y--sm">\r
                    <div className='flex gap-x--sm' style={{
      height: 400
    }}>\r
                        <div className="panel relative" style={{
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
                        <div className="panel flex--auto">\r
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
                    <div className='flex flex--auto gap-x--sm'>\r
                        <div className="panel" style={{
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
                        <div className="panel flex--auto">\r
                        </div>\r
                    </div>\r
                </div>} code={/* javascript */\`
import { IRSelect } from "./dist/index.js";

new IRSelect( select1 );
new IRSelect( { contextElement: select2, disabled: true });
new IRSelect( select3 );
new IRSelect( select4 );


\`} />\r
    </Doc>`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const x=["Panel"];export{n as Panel,x as __namedExportsOrder,m as default};
