import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as d,L as a}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const t=`import { createLoadingHandler } from "@innorules/ir-style";

document.querySelectorAll( ".demo-panel" )
    .forEach( ( element ) =>
    {
        const loadingHandler = createLoadingHandler( {
            contextElement: element,
            onClick: () => loadingHandler.hide(),
            // 부드럽게 출력
            animated: true,
            // 지연 출력 (0.1초)
            startDelay: 100,
        } );

        element.onclick = () => loadingHandler.show();
    } );`,s=`#live_editor_wrapper {
    height: 300px;
    overflow: auto;
}

.demo-panel {
    margin-bottom: 5px;
    display: inline-block;
    border: 1px solid black;
    cursor: pointer;
}
`,h={title:"JS Utility/Loading"},l=[50,100,70,100,60,40,75,100,80,50,60,65,100,70,80,100,50,40,50,85,65,100,70,55,200,150,140,130,120],n=()=>e.jsxs(r,{children:[e.jsx(d,{children:"Loading"}),e.jsxs("p",{children:[e.jsx("code",{children:"createLoadingHandler"}),"를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다."]}),e.jsx(a,{css:s,html:e.jsx(e.Fragment,{children:l.map((i,o)=>e.jsx("div",{id:`panel_${o}`,className:"demo-panel",style:{width:i,height:i},children:o},o))}),code:t})]});n.__docgenInfo={description:"",methods:[],displayName:"Loading"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Loading</DocTitle>\r
            <p><code>createLoadingHandler</code>를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다.</p>\r
            <LiveEditor css={css} html={<>\r
                    {panelList.map((size, id) => <div key={id} id={\`panel_\${id}\`} className="demo-panel" style={{
        width: size,
        height: size
      }}>{id}</div>)}\r
                </>} code={code} />\r
        </Doc>;
}`,...n.parameters?.docs?.source}}};const x=["Loading"];export{n as Loading,x as __namedExportsOrder,h as default};
