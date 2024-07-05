import{j as n,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as l,a as u,L as i}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const R={title:"JS Components/Grid"},r=()=>n(l,{children:[e(u,{children:"IRGrid"}),n("p",{children:[e("code",{children:"cellRenderer"}),"인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다."]}),e(i,{html:e("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
import * as libGrid from "./dist/grid.js";

// 함수형 렌더러
const customRenderer = (row, col, data) => {
    const element = document.createElement("div");

    element.className = "ir_grid_cell_content";
    element.innerHTML = "text = <span style='color: red;'>[xyz]</span>";

    return element;
};

// 클래스형 렌더러
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 3:
                    return customRenderer(row, col, data);
                default:
                    return defaultRenderer;
            }
        }
    },
    defaultColumnCellFormat: { },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 2
    }
})

`})]});var t,o,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>\r
                <code>cellRenderer</code>인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다.\r
            </p>\r
            <LiveEditor html={<div id="ir_grid" style={{
      height: 500,
      width: 1300
    }}></div>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

// 함수형 렌더러
const customRenderer = (row, col, data) => {
    const element = document.createElement("div");

    element.className = "ir_grid_cell_content";
    element.innerHTML = "text = <span style='color: red;'>[xyz]</span>";

    return element;
};

// 클래스형 렌더러
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 10,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 3:
                    return customRenderer(row, col, data);
                default:
                    return defaultRenderer;
            }
        }
    },
    defaultColumnCellFormat: { },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 2
    }
})

\`} />\r
        </Doc>;
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const p=["CustomRenderer"];export{r as CustomRenderer,p as __namedExportsOrder,R as default};
