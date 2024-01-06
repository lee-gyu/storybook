import{j as i,a as r}from"./jsx-runtime-KzWSGvcx.js";import{D as l,a as o,L as c}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const m={title:"JS Components/Grid"},e=()=>i(l,{children:[r(o,{children:"IRGrid"}),r(c,{html:r("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox({ });
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect({
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" }
    ]
});
const datePickerRenderer = libGrid.renderGridDatePicker({})
const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 2000,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 2:
                    return checkBoxRenderer();
                case 3:
                    return selectRenderer();
                case 4:
                    return datePickerRenderer();
                default:
                    return defaultRenderer();
            }
        }
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [5]: { editable: false },
        [6]: { disabled: true }
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 2,
        defaultSize: 50,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer();
                case 1:
                    return defaultRenderer();
            }
        }
    }
})


`})]});var n,t,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <LiveEditor html={<div id="ir_grid" style={{
      height: 500,
      width: 1300
    }}></div>} code={\`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox({ });
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect({
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" }
    ]
});
const datePickerRenderer = libGrid.renderGridDatePicker({})
const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 2000,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 2:
                    return checkBoxRenderer();
                case 3:
                    return selectRenderer();
                case 4:
                    return datePickerRenderer();
                default:
                    return defaultRenderer();
            }
        }
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [5]: { editable: false },
        [6]: { disabled: true }
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 2,
        defaultSize: 50,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer();
                case 1:
                    return defaultRenderer();
            }
        }
    }
})


\`} />\r
        </Doc>;
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const w=["Rows2000"];export{e as Rows2000,w as __namedExportsOrder,m as default};
