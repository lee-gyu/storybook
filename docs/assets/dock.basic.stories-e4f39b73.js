import{j as n,a as o,F as d}from"./jsx-runtime-e43ccb36.js";import{D as i,a,L as s}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const L={title:"JS Components/Dock"},e=()=>n(i,{children:[o(a,{children:"IRDockLayout"}),n("p",{children:[o("code",{children:"IRDockLayout"})," 컴포넌트를 이용하여 패널 내부 도킹, 모달, 영역 리사이징 등을 유연하게 조절할 수 있는 레이아웃을 구성할 수 있습니다."]}),o(s,{html:o(d,{children:o("div",{id:"container",style:{height:600,border:"1px solid black"}})}),code:`
import { IRDockLayout } from "./dist/index.js";

const dockLayout = new IRDockLayout( );
const tempWindow = document.createElement("div");

tempWindow.innerHTML = "Hello World";

document.querySelector("#container").appendChild(dockLayout.containerElement);

dockLayout.addWindow(tempWindow, "새 창");

`})]});var t,r,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRDockLayout</DocTitle>\r
            <p><code>IRDockLayout</code> 컴포넌트를 이용하여 패널 내부 도킹, 모달, 영역 리사이징 등을 유연하게 조절할 수 있는 레이아웃을 구성할 수 있습니다.</p>\r
            <LiveEditor html={<>\r
                        <div id="container" style={{
        height: 600,
        border: "1px solid black"
      }}></div>\r
                    </>} code={\`
import { IRDockLayout } from "./dist/index.js";

const dockLayout = new IRDockLayout( );
const tempWindow = document.createElement("div");

tempWindow.innerHTML = "Hello World";

document.querySelector("#container").appendChild(dockLayout.containerElement);

dockLayout.addWindow(tempWindow, "새 창");

\`} />\r
        </Doc>;
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const k=["Basic"];export{e as Basic,k as __namedExportsOrder,L as default};
//# sourceMappingURL=dock.basic.stories-e4f39b73.js.map
