import{j as d,a as r}from"./jsx-runtime-CjohWU4o.js";import{D as t,a as s,L as c}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const g={title:"JS Components/Grid"},o=()=>d(t,{children:[r(s,{children:"IRGrid"}),r("p",{children:"헤더 없는 버전 테스트"}),r(c,{html:r("div",{id:"ir_grid",style:{height:500,width:800}}),code:`
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


`})]});var i,n,e;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(e=(n=o.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const C=["NoHeader"];export{o as NoHeader,C as __namedExportsOrder,g as default};
