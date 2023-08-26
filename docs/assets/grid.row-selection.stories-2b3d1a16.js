import{j as d,a as e}from"./jsx-runtime-e43ccb36.js";import{D as i,a as o,L as c}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const w={title:"JS Components/Grid"},r=()=>d(i,{children:[e(o,{children:"IRGrid"}),e("p",{}),e(c,{html:e("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
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
        rowCount: 50,
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
    },
    plugins: [
        libGrid.RowSelectionPlugin()
    ]
})

grid.onSelectCell = (cell) => console.log(cell.row)


`})]});var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>\r
\r
            </p>\r
            <LiveEditor html={<div id="ir_grid" style={{
      height: 500,
      width: 1300
    }}></div>} code={/* javascript */\`
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
        rowCount: 50,
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
    },
    plugins: [
        libGrid.RowSelectionPlugin()
    ]
})

grid.onSelectCell = (cell) => console.log(cell.row)


\`} />\r
        </Doc>;
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const G=["RowSelection"];export{r as RowSelection,G as __namedExportsOrder,w as default};
//# sourceMappingURL=grid.row-selection.stories-2b3d1a16.js.map
