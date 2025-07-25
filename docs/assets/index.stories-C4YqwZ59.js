import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as i,a as r,L as s}from"./version-tag-D7uYrt-q.js";import"./iframe-BlmI-0N5.js";import"./index-CxOA-kXO.js";const a=`import { createFloatingHandler } from "@innorules/ir-style";

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
};`,c=`<div style="height: 900px; position: relative;">
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
</div>`,_={title:"JS Utility/FloatingHandler"},d=`
body > div {
    height: 500px;
    overflow: auto;
}`,n=()=>t.jsxs(i,{children:[t.jsx(r,{children:"createFloatingHandler"}),t.jsx(s,{css:d,htmlRaw:c,code:a})]});n.__docgenInfo={description:"",methods:[],displayName:"FloatingHandler"};var e,o,l;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createFloatingHandler</DocTitle>\r
            <LiveEditor css={css} htmlRaw={htmlRaw} code={code} />\r
        </Doc>;
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const b=["FloatingHandler"];export{n as FloatingHandler,b as __namedExportsOrder,_ as default};
