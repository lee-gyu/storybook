import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { createLoadingHandler } from "@innorules/ir-style";

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
    } );`})),c,l=e((()=>{c=`#live_editor_wrapper {
    height: 300px;
    overflow: auto;
}

.demo-panel {
    margin-bottom: 5px;
    display: inline-block;
    border: 1px solid black;
    cursor: pointer;
}
`})),u,d,f,p,m;e((()=>{s(),l(),i(),u=a(),d={title:`JS Utility/Loading`},f=[50,100,70,100,60,40,75,100,80,50,60,65,100,70,80,100,50,40,50,85,65,100,70,55,200,150,140,130,120],p=()=>(0,u.jsxs)(n,{children:[(0,u.jsx)(t,{children:`Loading`}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`createLoadingHandler`}),`를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다.`]}),(0,u.jsx)(r,{css:c,html:(0,u.jsx)(u.Fragment,{children:f.map((e,t)=>(0,u.jsx)(`div`,{id:`panel_${t}`,className:`demo-panel`,style:{width:e,height:e},children:t},t))}),code:o})]}),p.__docgenInfo={description:``,methods:[],displayName:`Loading`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Doc>
            <DocTitle>Loading</DocTitle>
            <p><code>createLoadingHandler</code>를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다.</p>
            <LiveEditor css={css} html={<>
                    {panelList.map((size, id) => <div key={id} id={\`panel_\${id}\`} className="demo-panel" style={{
        width: size,
        height: size
      }}>{id}</div>)}
                </>} code={code} />
        </Doc>;
}`,...p.parameters?.docs?.source}}},m=[`Loading`]}))();export{p as Loading,m as __namedExportsOrder,d as default};