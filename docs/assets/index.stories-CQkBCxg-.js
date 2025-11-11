import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as r,L as o}from"./version-tag-DqccibA3.js";import"./iframe-D3tc5L3-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQMUxHhF.js";const l=`import { createFloatingHandler } from "@innorules/ir-style";\r
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
document.getElementById( "rect" ).onmousedown = ( e ) =>\r
{\r
    if( e.target === btn_toggle ) return;\r
\r
    btn_toggle.style.top = e.offsetY + "px";\r
    btn_toggle.style.left = e.offsetX + "px";\r
};`,i="",s=`<div id="rect" class="border" style="height: 400px; position: relative;">\r
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
</div>`,g={title:"JS Utility/FloatingHandler"},n=()=>t.jsxs(e,{children:[t.jsx(r,{children:"createFloatingHandler"}),t.jsx(o,{css:i,htmlRaw:s,code:l})]});n.__docgenInfo={description:"",methods:[],displayName:"FloatingHandler"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createFloatingHandler</DocTitle>\r
            <LiveEditor css={css} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...n.parameters?.docs?.source}}};const p=["FloatingHandler"];export{n as FloatingHandler,p as __namedExportsOrder,g as default};
