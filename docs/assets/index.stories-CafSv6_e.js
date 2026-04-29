import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { createFloatingHandler } from "@innorules/ir-style";

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
};`})),c=e((()=>{})),l,u=e((()=>{l=`<div id="rect" class="border" style="height: 400px; position: relative;">
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
</div>`})),d,f,p,m;e((()=>{s(),c(),u(),i(),d=a(),f={title:`JS Utility/FloatingHandler`},p=()=>(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`createFloatingHandler`}),(0,d.jsx)(r,{css:``,htmlRaw:l,code:o})]}),p.__docgenInfo={description:``,methods:[],displayName:`FloatingHandler`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Doc>
            <DocTitle>createFloatingHandler</DocTitle>
            <LiveEditor css={css} htmlRaw={htmlRaw} code={code} />
        </Doc>;
}`,...p.parameters?.docs?.source}}},m=[`FloatingHandler`]}))();export{p as FloatingHandler,m as __namedExportsOrder,f as default};