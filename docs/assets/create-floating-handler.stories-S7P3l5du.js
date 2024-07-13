import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a as r,L as a}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const g={title:"JS Utility/Create Floating Handler"},s=`
body > div {
    height: 500px;
    overflow: auto;
}`,n=()=>e.jsxs(i,{children:[e.jsx(r,{children:"createFloatingHandler"}),e.jsx(a,{css:s,html:e.jsxs("div",{style:{height:900,position:"relative"},children:[e.jsx("button",{className:"button button--primary absolute",id:"btn_toggle",children:"toggle menu"}),e.jsx("template",{id:"context_menu",children:e.jsx("div",{className:"menu",children:e.jsxs("ul",{className:"menu__list",children:[e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--rule-open"}),"룰 열기"]})}),e.jsx("li",{className:"menu__item",children:e.jsxs("button",{type:"button",className:"menu__button",children:[e.jsx("i",{className:"menu__icon ir-icon ir-icon--rule-open"}),"폴더 경로"]})})]})})})]}),code:`
import { createFloatingHandler } from "./dist/index.js";

const floatingHandler = createFloatingHandler( {
    refElement: document.getElementById( "btn_toggle" ),
    floatingTemplateElement: document.getElementById( "context_menu" ),
} );

btn_toggle.onclick = () => {
    if (!floatingHandler.isVisible)
        floatingHandler.show();
    else
        floatingHandler.hide();
}


document.onmousedown = (e) => {
    if (e.target === btn_toggle) return;

    btn_toggle.style.top = e.clientY + "px";
    btn_toggle.style.left = e.clientX + "px";
}


`})]});n.__docgenInfo={description:"",methods:[],displayName:"CreateFloatingHandler"};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createFloatingHandler</DocTitle>\r
            <LiveEditor css={css} html={<div style={{
      height: 900,
      position: "relative"
    }}>\r
                        <button className="button button--primary absolute" id="btn_toggle">toggle menu</button>\r
                        <template id="context_menu">\r
                            <div className="menu">\r
                                <ul className="menu__list">\r
                                    <li className="menu__item">\r
                                        <button type="button" className="menu__button">\r
                                            <i className="menu__icon ir-icon ir-icon--rule-open"></i>룰 열기\r
                                        </button>\r
                                    </li>\r
                                    <li className="menu__item">\r
                                        <button type="button" className="menu__button">\r
                                            <i className="menu__icon ir-icon ir-icon--rule-open"></i>폴더 경로\r
                                        </button>\r
                                    </li>\r
                                </ul>\r
                            </div>\r
                        </template>\r
                    </div>} code={/* javascript */\`
import { createFloatingHandler } from "./dist/index.js";

const floatingHandler = createFloatingHandler( {
    refElement: document.getElementById( "btn_toggle" ),
    floatingTemplateElement: document.getElementById( "context_menu" ),
} );

btn_toggle.onclick = () => {
    if (!floatingHandler.isVisible)
        floatingHandler.show();
    else
        floatingHandler.hide();
}


document.onmousedown = (e) => {
    if (e.target === btn_toggle) return;

    btn_toggle.style.top = e.clientY + "px";
    btn_toggle.style.left = e.clientX + "px";
}


\`} />\r
        </Doc>;
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const _=["CreateFloatingHandler"];export{n as CreateFloatingHandler,_ as __namedExportsOrder,g as default};
