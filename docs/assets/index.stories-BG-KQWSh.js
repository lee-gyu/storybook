import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as l,a as i,L as s}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const a=`import { createFloatingHandler } from "@innorules/ir-style";\r
\r
const floatingHandler = createFloatingHandler( {\r
    refElement: document.getElementById( "btn_toggle" ),\r
    floatingTemplateElement: document.getElementById( "context_menu" ),\r
} );\r
\r
btn_toggle.onclick = () =>\r
{\r
    if( !floatingHandler.isVisible )\r
        floatingHandler.show();\r
    else\r
        floatingHandler.hide();\r
};\r
\r
document.onmousedown = ( e ) =>\r
{\r
    if( e.target === btn_toggle ) return;\r
\r
    btn_toggle.style.top = e.clientY + "px";\r
    btn_toggle.style.left = e.clientX + "px";\r
};`,c=`<div style="height: 900px; position: relative;">\r
    <button class="button button--primary absolute" id="btn_toggle">toggle menu</button>\r
    <template id="context_menu">\r
        <div class="menu">\r
            <ul class="menu__list">\r
                <li class="menu__item">\r
                    <button type="button" class="menu__button">\r
                        <i class="menu__icon ir-icon ir-icon--rule-open"></i>룰 열기\r
                    </button>\r
                </li>\r
                <li class="menu__item">\r
                    <button type="button" class="menu__button">\r
                        <i class="menu__icon ir-icon ir-icon--rule-open"></i>폴더 경로\r
                    </button>\r
                </li>\r
            </ul>\r
        </div>\r
    </template>\r
</div>`,_={title:"JS Utility/FloatingHandler"},d=`
body > div {
    height: 500px;
    overflow: auto;
}`,n=()=>t.jsxs(l,{children:[t.jsx(i,{children:"createFloatingHandler"}),t.jsx(s,{css:d,htmlRaw:c,code:a})]});n.__docgenInfo={description:"",methods:[],displayName:"FloatingHandler"};var e,r,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createFloatingHandler</DocTitle>\r
            <LiveEditor css={css} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const b=["FloatingHandler"];export{n as FloatingHandler,b as __namedExportsOrder,_ as default};
