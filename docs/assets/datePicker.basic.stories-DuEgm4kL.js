import{j as e}from"./index-BVpe1bT6.js";import{D as c,a as n,L as o}from"./doc-content-BzTGzIX_.js";import"./index-RYns6xqu.js";const p={title:"JS Components/IRDatePicker"},t=()=>e.jsxs(c,{children:[e.jsx(n,{children:"DatePicker"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRDatePicker"})," 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 ",e.jsx("code",{children:"format"})," 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)"]}),e.jsx(o,{fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"date_picker",style:{width:300}}),e.jsx("br",{}),e.jsx("div",{id:"date_picker2",style:{width:200}})]}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker")
})

new IRDatePicker({
    div: document.getElementById("date_picker2"),
    format: "MM/DD/YYYY"
})
`})]});t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var i,r,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>DatePicker</DocTitle>\r
            <p><code>IRDatePicker</code> 컴포넌트를 활용하여 날짜를 선택하는 입력 컨트롤을 표현할 수 있으며 <code>format</code> 속성으로 날짜 서식을 지정할 수 있습니다. (기본 값 : YYYY-MM-DD)</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <div id="date_picker" style={{
        width: 300
      }}></div>\r
                        <br />\r
                        <div id="date_picker2" style={{
        width: 200
      }}></div>\r
                    </>} code={\`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({
    div: document.getElementById("date_picker")
})

new IRDatePicker({
    div: document.getElementById("date_picker2"),
    format: "MM/DD/YYYY"
})
\`} />\r
        </Doc>;
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const D=["Basic"];export{t as Basic,D as __namedExportsOrder,p as default};
