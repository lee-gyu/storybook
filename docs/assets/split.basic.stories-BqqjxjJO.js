import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as l,a,L as d}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const _={title:"JS Utility/Create Split Container"},o=Array.from({length:20}).map((z,i)=>e.jsxs("p",{children:["Panel ",i]},i)),c=e.jsx(e.Fragment,{children:Array.from({length:100}).map((z,i)=>e.jsxs("span",{children:["Panel ",i]},i))}),s=()=>e.jsxs(l,{children:[e.jsx(a,{children:"createSplitContainer"}),e.jsxs("p",{children:[e.jsx("code",{children:"createSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),e.jsx(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsx("style",{children:".gutter{ background-color: var(--background-color) }"}),e.jsxs("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e.jsx("div",{id:"split-0",className:"split-panel",children:"panel 1"}),e.jsx("div",{id:"split-1",className:"split-panel",children:"panel 2"}),e.jsxs("div",{id:"split-2",className:"split-panel",children:[e.jsx("div",{id:"split-3",className:"split-panel",children:"panel 3"}),e.jsxs("div",{id:"split-4",className:"split-panel",style:{display:"flex"},children:[e.jsx("div",{id:"split-5",className:"split-panel",children:o}),e.jsx("div",{id:"split-6",className:"split-panel",children:c})]})]})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1', '#split-2'])

createSplitContainer(['#split-3', '#split-4'], {
    direction:"vertical",
    borderColor: "border-light",
    gutterCls: "thin"
})

createSplitContainer(['#split-5', '#split-6'], { borderColor: "border-light" })
                `})]}),t=()=>e.jsxs(l,{children:[e.jsx(a,{children:"Size 설정"}),e.jsxs("p",{children:[e.jsx("code",{children:"sizes"}),"를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,",e.jsx("br",{}),e.jsx("code",{children:"minSize(default: 100px), maxSize"}),"의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.",e.jsx("br",{}),e.jsx("code",{children:"Infinity"}),"는 ",e.jsx("code",{children:"minSize"}),"에서 사용 시 설정된 패널 초기 크기로 지정되고, ",e.jsx("code",{children:"maxSize"}),"에서 사용 시 무한으로 늘어날 수 있습니다."]}),e.jsx(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e.jsx("div",{id:"split-0",className:"split-panel",children:o}),e.jsx("div",{id:"split-1",className:"split-panel",children:c})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1'], {
    sizes: [20, 80],
    minSize: 150,
    maxSize: [700, Infinity]
})
                `})]}),r=()=>e.jsxs(l,{children:[e.jsx(a,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onDrag"})," 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:"onDragStart"})," 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:"onDragEnd"})," 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다. "]}),e.jsx(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e.jsx("div",{id:"split-0",className:"split-panel",children:o}),e.jsx("div",{id:"split-1",className:"split-panel",children:c})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1'], {
    onDrag: (sizes) => console.log(sizes),
    onDragStart: (sizes) => console.log("start : ", sizes),
    onDragEnd: (sizes) => console.log("end : ", sizes),
})

                `})]}),n=()=>e.jsxs(l,{children:[e.jsx(a,{children:"API"}),e.jsxs("p",{children:[e.jsx("code",{children:"setSizes([25, 75])"})," 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:"getSizes"})," resize된 백분율 배열을 반환합니다.",e.jsx("br",{}),e.jsx("code",{children:"collapse(index)"})," 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)",e.jsx("br",{}),e.jsx("code",{children:"destroy(preserveStyles? = false, preserveGutters? = false)"})," split을 제거합니다. (preserveStyle: CSS 제거 여부, preserveGutters: gutter 제거 여부)"]}),e.jsx(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ir-flex ir-gap-x-xxs ir-p-xs",style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("button",{id:"btn1",className:"button",children:"Get Size"}),e.jsx("button",{id:"btn2",className:"button",children:"Collapse"}),e.jsx("button",{id:"btn3",className:"button",children:"Destroy"})]}),e.jsxs("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e.jsx("div",{id:"split-0",className:"split-panel",children:o}),e.jsx("div",{id:"split-1",className:"split-panel",children:c})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";

const split = createSplitContainer(['#split-0', '#split-1']);

btn1.onclick = () => alert(split.getSizes());
btn2.onclick = () => split.collapse(0);
btn3.onclick = () => split.destroy(false);

split.setSizes([25, 75]);
                `})]});s.__docgenInfo={description:"",methods:[],displayName:"createSplitContainer"};t.__docgenInfo={description:"",methods:[],displayName:"Size"};r.__docgenInfo={description:"",methods:[],displayName:"Event"};n.__docgenInfo={description:"",methods:[],displayName:"API"};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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

createSplitContainer(['#split-0', '#split-1', '#split-2'])

createSplitContainer(['#split-3', '#split-4'], {
    direction:"vertical",
    borderColor: "border-light",
    gutterCls: "thin"
})

createSplitContainer(['#split-5', '#split-6'], { borderColor: "border-light" })
                \`} />\r
        </Doc>;
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,v,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Size 설정</DocTitle>\r
            <p><code>sizes</code>를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,<br />\r
                <code>minSize(default: 100px), maxSize</code>의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.<br />\r
                <code>Infinity</code>는 <code>minSize</code>에서 사용 시 설정된 패널 초기 크기로 지정되고, <code>maxSize</code>에서 사용 시 무한으로 늘어날 수 있습니다.\r
            </p>\r
            <LiveEditor css={\`
#live_editor_wrapper {
    padding: 0
}
\`} fixedHeight={400} html={<div className="split-container" style={{
      display: "flex",
      height: "100%"
    }}>\r
                    <div id="split-0" className="split-panel">\r
                        {DUMMY_ELEMENTS}\r
                    </div>\r
                    <div id="split-1" className="split-panel">\r
                        {DUMMY_ELEMENTS2}\r
                    </div>\r
                </div>} code={\`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1'], {
    sizes: [20, 80],
    minSize: 150,
    maxSize: [700, Infinity]
})
                \`} />\r
        </Doc>;
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var g,j,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Event</DocTitle>\r
            <p><code>onDrag</code> 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.<br />\r
                <code>onDragStart</code> 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.<br />\r
                <code>onDragEnd</code> 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다. </p>\r
\r
            <LiveEditor css={\`
#live_editor_wrapper {
    padding: 0
}
\`} fixedHeight={400} html={<div className="split-container" style={{
      display: "flex",
      height: "100%"
    }}>\r
                    <div id="split-0" className="split-panel">\r
                        {DUMMY_ELEMENTS}\r
                    </div>\r
                    <div id="split-1" className="split-panel">\r
                        {DUMMY_ELEMENTS2}\r
                    </div>\r
                </div>} code={\`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1'], {
    onDrag: (sizes) => console.log(sizes),
    onDragStart: (sizes) => console.log("start : ", sizes),
    onDragEnd: (sizes) => console.log("end : ", sizes),
})

                \`} />\r
        </Doc>;
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var N,u,f;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>API</DocTitle>\r
            <p><code>setSizes([25, 75])</code> 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.<br />\r
                <code>getSizes</code> resize된 백분율 배열을 반환합니다.<br />\r
                <code>collapse(index)</code> 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)<br />\r
                <code>destroy(preserveStyles? = false, preserveGutters? = false)</code> split을 제거합니다. (preserveStyle: CSS 제거 여부, preserveGutters: gutter 제거 여부)\r
            </p>\r
\r
            <LiveEditor css={\`
#live_editor_wrapper {
    padding: 0
}
\`} fixedHeight={400} html={<>\r
                <div className="ir-flex ir-gap-x-xxs ir-p-xs" style={{
        borderBottom: "1px solid var(--border-color)"
      }}>\r
                    <button id="btn1" className="button">Get Size</button>\r
                    <button id="btn2" className="button">Collapse</button>\r
                    <button id="btn3" className="button">Destroy</button>\r
                </div>\r
                <div className="split-container" style={{
        display: "flex",
        height: "100%"
      }}>\r
                    <div id="split-0" className="split-panel">\r
                        {DUMMY_ELEMENTS}\r
                    </div>\r
                    <div id="split-1" className="split-panel">\r
                        {DUMMY_ELEMENTS2}\r
                    </div>\r
                </div>\r
            </>} code={\`
import { createSplitContainer } from "./dist/index.js";

const split = createSplitContainer(['#split-0', '#split-1']);

btn1.onclick = () => alert(split.getSizes());
btn2.onclick = () => split.collapse(0);
btn3.onclick = () => split.destroy(false);

split.setSizes([25, 75]);
                \`} />\r
        </Doc>;
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const C=["createSplitContainer","Size","Event","API"];export{n as API,r as Event,t as Size,C as __namedExportsOrder,s as createSplitContainer,_ as default};
