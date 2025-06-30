import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as o,L as l}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const i=`import { createFloatingHandler } from "@innorules/ir-style";

const floatingHandler = createFloatingHandler( {
    refElement: document.getElementById( "btn_toggle" ),
    floatingTemplateElement: document.getElementById( "context_menu" ),
} );

btn_toggle.onclick = () =>
{
    if( !floatingHandler.isVisible )
        floatingHandler.show();
    else
        floatingHandler.hide();
};

document.onmousedown = ( e ) =>
{
    if( e.target === btn_toggle ) return;

    btn_toggle.style.top = e.clientY + "px";
    btn_toggle.style.left = e.clientX + "px";
};`,r=`<div style="height: 900px; position: relative;">
    <button class="button button--primary absolute" id="btn_toggle">toggle menu</button>
    <template id="context_menu">
        <div class="menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <button type="button" class="menu__button">
                        <i class="menu__icon ir-icon ir-icon--rule-open"></i>룰 열기
                    </button>
                </li>
                <li class="menu__item">
                    <button type="button" class="menu__button">
                        <i class="menu__icon ir-icon ir-icon--rule-open"></i>폴더 경로
                    </button>
                </li>
            </ul>
        </div>
    </template>
</div>`,u={title:"JS Utility/FloatingHandler"},s=`
body > div {
    height: 500px;
    overflow: auto;
}`,n=()=>t.jsxs(e,{children:[t.jsx(o,{children:"createFloatingHandler"}),t.jsx(l,{css:s,htmlRaw:r,code:i})]});n.__docgenInfo={description:"",methods:[],displayName:"FloatingHandler"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createFloatingHandler</DocTitle>\r
            <LiveEditor css={css} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...n.parameters?.docs?.source}}};const g=["FloatingHandler"];export{n as FloatingHandler,g as __namedExportsOrder,u as default};
