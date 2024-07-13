import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{D as d,a as t,L as s}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const m={title:"JS Components/Grid"},o=()=>r.jsxs(d,{children:[r.jsx(t,{children:"IRGrid"}),r.jsx("p",{children:"헤더 없는 버전 테스트"}),r.jsx(s,{html:r.jsx("div",{id:"ir_grid",style:{height:500,width:800}}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 50,
    },
    colHeader: {
        rowCount: 0,
        colCount: 15
    },
    rowHeader: {
        colCount: 0
    }
})

window.grid = grid;


`})]});o.__docgenInfo={description:"",methods:[],displayName:"NoHeader"};var i,e,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>헤더 없는 버전 테스트</p>\r
            <LiveEditor html={<div id="ir_grid" style={{
      height: 500,
      width: 800
    }}></div>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 50,
    },
    colHeader: {
        rowCount: 0,
        colCount: 15
    },
    rowHeader: {
        colCount: 0
    }
})

window.grid = grid;


\`} />\r
        </Doc>;
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const p=["NoHeader"];export{o as NoHeader,p as __namedExportsOrder,m as default};
