import{j as i}from"./jsx-runtime-DEdD30eg.js";import{D as p,a as n,L as d}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const x={title:"JS Utility/Create Split Container"},c=Array.from({length:20}).map((a,e)=>i.jsxs("p",{children:["Panel ",e]},e)),o=i.jsx(i.Fragment,{children:Array.from({length:100}).map((a,e)=>i.jsxs("span",{children:["Panel ",e]},e))}),t=()=>i.jsxs(p,{children:[i.jsx(n,{children:"createSplitContainer"}),i.jsxs("p",{children:[i.jsx("code",{children:"createSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),i.jsx(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:i.jsxs(i.Fragment,{children:[i.jsx("style",{children:".gutter{ background-color: var(--background-color) }"}),i.jsxs("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[i.jsx("div",{id:"split-0",className:"split-panel",children:"panel 1"}),i.jsx("div",{id:"split-1",className:"split-panel",children:"panel 2"}),i.jsxs("div",{id:"split-2",className:"split-panel",children:[i.jsx("div",{id:"split-3",className:"split-panel",children:"panel 3"}),i.jsxs("div",{id:"split-4",className:"split-panel",style:{display:"flex"},children:[i.jsx("div",{id:"split-5",className:"split-panel",children:c}),i.jsx("div",{id:"split-6",className:"split-panel",children:o})]})]})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1', '#split-2'], { gutterCls: "thin" })

createSplitContainer(['#split-3', '#split-4'], {
    direction: "vertical",
    gutterCls: "thin"
})

createSplitContainer(['#split-5', '#split-6'], { gutterCls: "thin" })
                `})]});t.__docgenInfo={description:"",methods:[],displayName:"thinStyle"};var l,s,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["thinStyle"];export{g as __namedExportsOrder,x as default,t as thinStyle};
