import{j as e,a as i,F as a}from"./jsx-runtime-CjohWU4o.js";import{D as d,a as c,L as o}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const N={title:"JS Utility/Create Split Container"},C=Array.from({length:20}).map((p,t)=>e("p",{children:["Panel ",t]},t)),u=i(a,{children:Array.from({length:100}).map((p,t)=>e("span",{children:["Panel ",t]},t))}),l=()=>e(d,{children:[i(c,{children:"createSplitContainer"}),e("p",{children:[i("code",{children:"createSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),i(o,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e(a,{children:[i("style",{children:".gutter{ background-color: var(--background-color) }"}),e("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[i("div",{id:"split-0",className:"split-panel",children:"panel 1"}),i("div",{id:"split-1",className:"split-panel",children:"panel 2"}),e("div",{id:"split-2",className:"split-panel",children:[i("div",{id:"split-3",className:"split-panel",children:"panel 3"}),e("div",{id:"split-4",className:"split-panel",style:{display:"flex"},children:[i("div",{id:"split-5",className:"split-panel",children:C}),i("div",{id:"split-6",className:"split-panel",children:u})]})]})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1', '#split-2'], { gutterCls: "thin" })

createSplitContainer(['#split-3', '#split-4'], {
    direction: "vertical",
    gutterCls: "thin"
})

createSplitContainer(['#split-5', '#split-6'], { gutterCls: "thin" })
                `})]});var n,r,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createSplitContainer</DocTitle>\r
            <p><code>createSplitContainer</code>을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다.</p>\r
            <LiveEditor css={\`
#live_editor_wrapper {
    padding: 0
}
\`} fixedHeight={400} html={<>\r
                    <style>\r
                        {\`.gutter{ background-color: var(--background-color) }\`}\r
                    </style>\r
                    <div className="split-container" style={{
        display: "flex",
        height: "100%"
      }}>\r
                        <div id="split-0" className="split-panel">panel 1</div>\r
                        <div id="split-1" className="split-panel">panel 2</div>\r
                        <div id="split-2" className="split-panel">\r
                            <div id="split-3" className="split-panel">panel 3</div>\r
                            <div id="split-4" className="split-panel" style={{
            display: "flex"
          }}>\r
                                <div id="split-5" className="split-panel">{DUMMY_ELEMENTS}</div>\r
                                <div id="split-6" className="split-panel">{DUMMY_ELEMENTS2}</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </>} code={\`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1', '#split-2'], { gutterCls: "thin" })

createSplitContainer(['#split-3', '#split-4'], {
    direction: "vertical",
    gutterCls: "thin"
})

createSplitContainer(['#split-5', '#split-6'], { gutterCls: "thin" })
                \`} />\r
        </Doc>;
}`,...(s=(r=l.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const D=["thinStyle"];export{D as __namedExportsOrder,N as default,l as thinStyle};
