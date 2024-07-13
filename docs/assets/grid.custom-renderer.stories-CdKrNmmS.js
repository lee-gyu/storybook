import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as d,a as l,L as u}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const m={title:"JS Components/Grid"},r=()=>e.jsxs(d,{children:[e.jsx(l,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"cellRenderer"}),"인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다."]}),e.jsx(u,{html:e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
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

`})]});r.__docgenInfo={description:"",methods:[],displayName:"CustomRenderer"};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const C=["CustomRenderer"];export{r as CustomRenderer,C as __namedExportsOrder,m as default};
