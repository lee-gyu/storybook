import{j as n,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as r,a,L as s}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const _={title:"JS Utility/Create Floating Handler"},c=`
body > div {
    height: 500px;
    overflow: auto;
}`,t=()=>n(r,{children:[e(a,{children:"createFloatingHandler"}),e(s,{css:c,html:n("div",{style:{height:900,position:"relative"},children:[e("button",{className:"button button--primary absolute",id:"btn_toggle",children:"toggle menu"}),e("template",{id:"context_menu",children:e("div",{className:"menu",children:n("ul",{className:"menu__list",children:[e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"}),"룰 열기"]})}),e("li",{className:"menu__item",children:n("button",{type:"button",className:"menu__button",children:[e("i",{className:"menu__icon ir-icon ir-icon--rule-open"}),"폴더 경로"]})})]})})})]}),code:`
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


`})]});var l,o,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["CreateFloatingHandler"];export{t as CreateFloatingHandler,b as __namedExportsOrder,_ as default};
