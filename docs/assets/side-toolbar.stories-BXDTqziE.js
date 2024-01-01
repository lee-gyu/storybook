import{j as o,a as t}from"./jsx-runtime-KzWSGvcx.js";import{D as s,a as l,L as e}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const _={title:"HTML Components/Side Toolbar"},n=()=>o(s,{children:[t(l,{children:"Side Toolbar"}),t(e,{fixedHeight:400,html:o("div",{className:"side-toolbar",children:[t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})}),o("div",{className:"menu-container",children:[t("button",{type:"button",className:"side-toolbar__button",children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--add-return"})}),t("div",{className:"menu menu--top-right",children:o("ul",{className:"menu__list",children:[t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"조건 추가"})}),t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"조건 변경"})}),t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"조건 삽입"})}),t("li",{className:"menu__item",children:t("button",{type:"button",className:"menu__button",children:"조건 삭제"})})]})})]})]}),code:`
document.querySelector('.menu-container .side-toolbar__button').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
                `}),t("p",{children:t("strong",{children:"비활성화:"})}),t(e,{html:o("div",{className:"side-toolbar",children:[t("button",{type:"button",className:"side-toolbar__button",disabled:!0,children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--check-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button",disabled:!0,children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"})}),t("button",{type:"button",className:"side-toolbar__button",disabled:!0,children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--row-del2"})}),t("button",{type:"button",className:"side-toolbar__button",disabled:!0,children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--copy"})}),t("button",{type:"button",className:"side-toolbar__button",disabled:!0,children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--paste"})}),t("button",{type:"button",className:"side-toolbar__button",disabled:!0,children:t("i",{className:"side-toolbar__icon ir-icon ir-icon--add-return"})})]})})]});var i,a,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Side Toolbar</DocTitle>\r
            <LiveEditor fixedHeight={400} html={<div className="side-toolbar">\r
                        <button type="button" className="side-toolbar__button">\r
                            <i className="side-toolbar__icon ir-icon ir-icon--check-all-rectangle"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button">\r
                            <i className="side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button">\r
                            <i className="side-toolbar__icon ir-icon ir-icon--row-del2"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button">\r
                            <i className="side-toolbar__icon ir-icon ir-icon--copy"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button">\r
                            <i className="side-toolbar__icon ir-icon ir-icon--paste"></i>\r
                        </button>\r
                        <div className="menu-container">\r
                            <button type="button" className="side-toolbar__button">\r
                                <i className="side-toolbar__icon ir-icon ir-icon--add-return"></i>\r
                            </button>\r
                            <div className="menu menu--top-right">\r
                                <ul className="menu__list">\r
                                    <li className="menu__item">\r
                                        <button type="button" className="menu__button">조건 추가</button>\r
                                    </li>\r
                                    <li className="menu__item">\r
                                        <button type="button" className="menu__button">조건 변경</button>\r
                                    </li>\r
                                    <li className="menu__item">\r
                                        <button type="button" className="menu__button">조건 삽입</button>\r
                                    </li>\r
                                    <li className="menu__item">\r
                                        <button type="button" className="menu__button">조건 삭제</button>\r
                                    </li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                    </div>} code={\`
document.querySelector('.menu-container .side-toolbar__button').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-visible');
});
                \`} />\r
            <p><strong>비활성화:</strong></p>\r
            <LiveEditor html={<div className="side-toolbar">\r
                        <button type="button" className="side-toolbar__button" disabled>\r
                            <i className="side-toolbar__icon ir-icon ir-icon--check-all-rectangle"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button" disabled>\r
                            <i className="side-toolbar__icon ir-icon ir-icon--uncheck-all-rectangle"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button" disabled>\r
                            <i className="side-toolbar__icon ir-icon ir-icon--row-del2"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button" disabled>\r
                            <i className="side-toolbar__icon ir-icon ir-icon--copy"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button" disabled>\r
                            <i className="side-toolbar__icon ir-icon ir-icon--paste"></i>\r
                        </button>\r
                        <button type="button" className="side-toolbar__button" disabled>\r
                            <i className="side-toolbar__icon ir-icon ir-icon--add-return"></i>\r
                        </button>\r
                    </div>} />\r
        </Doc>;
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["SideToolbar"];export{n as SideToolbar,m as __namedExportsOrder,_ as default};
