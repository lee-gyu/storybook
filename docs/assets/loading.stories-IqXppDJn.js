import{j as r,a as e,F as l}from"./jsx-runtime-CjohWU4o.js";import{D as c,a as s,L as u}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const B={title:"JS Utility/Loading"},m=[50,100,70,100,60,40,75,100,80,50,60,65,100,70,80,100,50,40,50,85,65,100,70,55,200,150,140,130,120],n=()=>r(c,{children:[e(s,{children:"Loading"}),r("p",{children:[e("code",{children:"createLoadingHandler"}),"를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다."]}),e(u,{css:`
#live_editor_wrapper {
    height: 300px;
    overflow: auto;
}

.demo-panel {
    margin-bottom: 5px;
    display: inline-block;
    border: 1px solid black;
    cursor: pointer;
}

                `,html:e(l,{children:m.map((a,o)=>e("div",{id:`panel_${o}`,className:"demo-panel",style:{width:a,height:a},children:o},o))}),code:`
import { createLoadingHandler } from "./dist/index.js";

document.querySelectorAll(".demo-panel")
    .forEach(element => {
        const loadingHandler = createLoadingHandler({
            contextElement: element,
            onClick: () => loadingHandler.hide(),
            // 부드럽게 출력
            animated: true,
            // 지연 출력 (0.1초)
            startDelay: 100,
        })

        element.onclick = () => loadingHandler.show();
    })`})]});var i,d,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Loading</DocTitle>\r
            <p><code>createLoadingHandler</code>를 이용하여 특정 레이아웃에 loading UI를 적용합니다. 해당 영역은 dimmed 처리됩니다.</p>\r
            <LiveEditor css={\`
#live_editor_wrapper {
    height: 300px;
    overflow: auto;
}

.demo-panel {
    margin-bottom: 5px;
    display: inline-block;
    border: 1px solid black;
    cursor: pointer;
}

                \`} html={<>\r
                    {panelList.map((size, id) => <div key={id} id={\`panel_\${id}\`} className="demo-panel" style={{
        width: size,
        height: size
      }}>{id}</div>)}\r
                </>} code={/* javascript */\`
import { createLoadingHandler } from "./dist/index.js";

document.querySelectorAll(".demo-panel")
    .forEach(element => {
        const loadingHandler = createLoadingHandler({
            contextElement: element,
            onClick: () => loadingHandler.hide(),
            // 부드럽게 출력
            animated: true,
            // 지연 출력 (0.1초)
            startDelay: 100,
        })

        element.onclick = () => loadingHandler.show();
    })\`} />\r
        </Doc>;
}`,...(t=(d=n.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const L=["Loading"];export{n as Loading,L as __namedExportsOrder,B as default};
