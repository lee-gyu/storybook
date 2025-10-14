import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as i,a as d,L as a}from"./version-tag-CkTpihZX.js";import"./iframe-jo4tttFm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDcoFm-e.js";const t=`import { createLoadingHandler } from "@innorules/ir-style";\r
\r
document.querySelectorAll( ".demo-panel" )\r
    .forEach( ( element ) =>\r
    {\r
        const loadingHandler = createLoadingHandler( {\r
            contextElement: element,\r
            onClick: () => loadingHandler.hide(),\r
            // 부드럽게 출력\r
            animated: true,\r
            // 지연 출력 (0.1초)\r
            startDelay: 100,\r
        } );\r
\r
        element.onclick = () => loadingHandler.show();\r
    } );`,s=`#live_editor_wrapper {\r
    height: 300px;\r
    overflow: auto;\r
}\r
\r
.demo-panel {\r
    margin-bottom: 5px;\r
    display: inline-block;\r
    border: 1px solid black;\r
    cursor: pointer;\r
}\r
`,x={title:"JS Utility/Loading"},l=[50,100,70,100,60,40,75,100,80,50,60,65,100,70,80,100,50,40,50,85,65,100,70,55,200,150,140,130,120],n=()=>e.jsxs(i,{children:[e.jsx(d,{children:"Loading"}),e.jsxs("p",{children:[e.jsx("code",{children:"createLoadingHandler"}),"를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다."]}),e.jsx(a,{css:s,html:e.jsx(e.Fragment,{children:l.map((o,r)=>e.jsx("div",{id:`panel_${r}`,className:"demo-panel",style:{width:o,height:o},children:r},r))}),code:t})]});n.__docgenInfo={description:"",methods:[],displayName:"Loading"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const L=["Loading"];export{n as Loading,L as __namedExportsOrder,x as default};
