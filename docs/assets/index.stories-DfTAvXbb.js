import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as o,L as l}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const i=`import { createFloatingHandler } from "@innorules/ir-style";

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

document.getElementById( "rect" ).onmousedown = ( e ) =>
{
    if( e.target === btn_toggle ) return;

    btn_toggle.style.top = e.offsetY + "px";
    btn_toggle.style.left = e.offsetX + "px";
};`,r="",s=`<div id="rect" class="border" style="height: 400px; position: relative;">
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
</div>`,g={title:"JS Utility/FloatingHandler"},n=()=>t.jsxs(e,{children:[t.jsx(o,{children:"createFloatingHandler"}),t.jsx(l,{css:r,htmlRaw:s,code:i})]});n.__docgenInfo={description:"",methods:[],displayName:"FloatingHandler"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createFloatingHandler</DocTitle>\r
            <LiveEditor css={css} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...n.parameters?.docs?.source}}};const p=["FloatingHandler"];export{n as FloatingHandler,p as __namedExportsOrder,g as default};
