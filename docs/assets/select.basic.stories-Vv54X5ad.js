import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as s,a as c,L as i}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const p={title:"JS Components/IRSelect"},t=()=>e.jsxs(s,{children:[e.jsx(c,{children:"IRSelect"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRSelect"})," 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다."]}),e.jsx(i,{fixedHeight:150,html:e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
                        :root {
                            background-color: #a0a0a0;
                        }
                        `}),e.jsx("div",{style:{width:160},children:e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{children:"한국어"}),e.jsx("option",{children:"English"}),e.jsx("option",{children:"매우 긴 텍스트 입니다. 이것은"})]})})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                `})]});t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRSelect</DocTitle>\r
            <p><code>IRSelect</code> 클래스를 활용하여 신규 디자인 select 스타일을 표현합니다.</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <style>{\`
                        :root {
                            background-color: #a0a0a0;
                        }
                        \`}</style>\r
                        <div style={{
        width: 160
      }}>\r
                            <select style={{
          display: "none"
        }}>\r
                                <option>한국어</option>\r
                                <option>English</option>\r
                                <option>매우 긴 텍스트 입니다. 이것은</option>\r
                            </select>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select")
});
                \`} />\r
        </Doc>;
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["Basic"];export{t as Basic,m as __namedExportsOrder,p as default};
