import{j as i,a as e,F as C}from"./jsx-runtime-CjohWU4o.js";import{D as u,a,L as d}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const T={title:"JS Utility/Create Split Container"},o=Array.from({length:20}).map((A,n)=>i("p",{children:["Panel ",n]},n)),c=e(C,{children:Array.from({length:100}).map((A,n)=>i("span",{children:["Panel ",n]},n))}),t=()=>i(u,{children:[e(a,{children:"createSplitContainer"}),i("p",{children:[e("code",{children:"createSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),e(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:i(C,{children:[e("style",{children:".gutter{ background-color: var(--background-color) }"}),i("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e("div",{id:"split-0",className:"split-panel",children:"panel 1"}),e("div",{id:"split-1",className:"split-panel",children:"panel 2"}),i("div",{id:"split-2",className:"split-panel",children:[e("div",{id:"split-3",className:"split-panel",children:"panel 3"}),i("div",{id:"split-4",className:"split-panel",style:{display:"flex"},children:[e("div",{id:"split-5",className:"split-panel",children:o}),e("div",{id:"split-6",className:"split-panel",children:c})]})]})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1', '#split-2'])

createSplitContainer(['#split-3', '#split-4'], {
    direction:"vertical",
    borderColor: "border-light",
    gutterCls: "thin"
})

createSplitContainer(['#split-5', '#split-6'], { borderColor: "border-light" })
                `})]}),r=()=>i(u,{children:[e(a,{children:"Size 설정"}),i("p",{children:[e("code",{children:"sizes"}),"를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,",e("br",{}),e("code",{children:"minSize(default: 100px), maxSize"}),"의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.",e("br",{}),e("code",{children:"Infinity"}),"는 ",e("code",{children:"minSize"}),"에서 사용 시 설정된 패널 초기 크기로 지정되고, ",e("code",{children:"maxSize"}),"에서 사용 시 무한으로 늘어날 수 있습니다."]}),e(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:i("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e("div",{id:"split-0",className:"split-panel",children:o}),e("div",{id:"split-1",className:"split-panel",children:c})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1'], {
    sizes: [20, 80],
    minSize: 150,
    maxSize: [700, Infinity]
})
                `})]}),s=()=>i(u,{children:[e(a,{children:"Event"}),i("p",{children:[e("code",{children:"onDrag"})," 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.",e("br",{}),e("code",{children:"onDragStart"})," 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.",e("br",{}),e("code",{children:"onDragEnd"})," 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다. "]}),e(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:i("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e("div",{id:"split-0",className:"split-panel",children:o}),e("div",{id:"split-1",className:"split-panel",children:c})]}),code:`
import { createSplitContainer } from "./dist/index.js";

createSplitContainer(['#split-0', '#split-1'], {
    onDrag: (sizes) => console.log(sizes),
    onDragStart: (sizes) => console.log("start : ", sizes),
    onDragEnd: (sizes) => console.log("end : ", sizes),
})

                `})]}),l=()=>i(u,{children:[e(a,{children:"API"}),i("p",{children:[e("code",{children:"setSizes([25, 75])"})," 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.",e("br",{}),e("code",{children:"getSizes"})," resize된 백분율 배열을 반환합니다.",e("br",{}),e("code",{children:"collapse(index)"})," 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)",e("br",{}),e("code",{children:"destroy(preserveStyles? = false, preserveGutters? = false)"})," split을 제거합니다. (preserveStyle: CSS 제거 여부, preserveGutters: gutter 제거 여부)"]}),e(d,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:i(C,{children:[i("div",{className:"ir-flex ir-gap-x-xxs ir-p-xs",style:{borderBottom:"1px solid var(--border-color)"},children:[e("button",{id:"btn1",className:"button",children:"Get Size"}),e("button",{id:"btn2",className:"button",children:"Collapse"}),e("button",{id:"btn3",className:"button",children:"Destroy"})]}),i("div",{className:"split-container",style:{display:"flex",height:"100%"},children:[e("div",{id:"split-0",className:"split-panel",children:o}),e("div",{id:"split-1",className:"split-panel",children:c})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";

const split = createSplitContainer(['#split-0', '#split-1']);

btn1.onclick = () => alert(split.getSizes());
btn2.onclick = () => split.collapse(0);
btn3.onclick = () => split.destroy(false);

split.setSizes([25, 75]);
                `})]});var p,B,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(m=(B=t.parameters)==null?void 0:B.docs)==null?void 0:m.source}}};var D,h,v;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,E,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(E=s.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var b,x,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const L=["createSplitContainer","Size","Event","API"];export{l as API,s as Event,r as Size,L as __namedExportsOrder,t as createSplitContainer,T as default};
