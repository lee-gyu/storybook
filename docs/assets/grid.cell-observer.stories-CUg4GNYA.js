import{j as n,a as e,F as o}from"./jsx-runtime-CjohWU4o.js";import{D as t,a as u,L as c}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const b={title:"JS Components/Grid"},r=()=>n(t,{children:[e(u,{children:"IRGrid CellObserverPlugin"}),n("p",{children:[e("code",{children:"CellObserverPlugin"}),"을 이용하여 셀의 변경 내용을 호출받습니다. (체크박스, select 등의 모든 셀 변경 이벤트 처리)",e("br",{}),e("code",{children:"onEditDoneCell"}),"은 F2를 통한 입력 박스 이벤트만을 호출 받음."]}),e(c,{defaultCodeFold:[5,15],html:n(o,{children:[e("p",{id:"info"}),e("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox({ });
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect({
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" }
    ] });
const datePickerRenderer = libGrid.renderGridDatePicker({})
const progressRenderer = libGrid.renderGridProgress({})
const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 40,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 2:
                    return checkBoxRenderer();
                case 3:
                    return selectRenderer();
                case 4:
                    return datePickerRenderer();
                case 5:
                    return progressRenderer();
                default:
                    return defaultRenderer();
            }
        }
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120
    },
    defaultColumnCellFormat: {
        [2]: { horizontalAlign: "center" }
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: (row, col, data) => {
            return rowNoRenderer();
        }
    }
})

grid.addPlugin( libGrid.CellObserverPlugin( {
    onCellInfoChanged: (grid, row, col) => {
        info.innerText = "최근 변경된 셀 : " + row + "," + col
    }
} ) )

`})]});var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid CellObserverPlugin</DocTitle>\r
            <p>\r
                <code>CellObserverPlugin</code>을 이용하여 셀의 변경 내용을 호출받습니다. (체크박스, select 등의 모든 셀 변경 이벤트 처리)<br />\r
                <code>onEditDoneCell</code>은 F2를 통한 입력 박스 이벤트만을 호출 받음.\r
            </p>\r
            <LiveEditor
    // 접는 코드로 magic number 허용
    // eslint-disable-next-line no-magic-numbers
    defaultCodeFold={[5, 15]} html={<>\r
                        <p id="info"></p>\r
                        <div id="ir_grid" style={{
        height: 500,
        width: 1300
      }}></div>\r
                    </>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox({ });
const defaultRenderer = libGrid.renderGridCellDefault();
const selectRenderer = libGrid.renderGridSelect({
    items: [
        { value: "kr", text: "한국어" },
        { value: "en", text: "English" },
        { value: "sp", text: "Spanish" }
    ] });
const datePickerRenderer = libGrid.renderGridDatePicker({})
const progressRenderer = libGrid.renderGridProgress({})
const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 40,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 2:
                    return checkBoxRenderer();
                case 3:
                    return selectRenderer();
                case 4:
                    return datePickerRenderer();
                case 5:
                    return progressRenderer();
                default:
                    return defaultRenderer();
            }
        }
    },
    colHeader: {
        rowCount: 1,
        colCount: 9,
        defaultSize: 120
    },
    defaultColumnCellFormat: {
        [2]: { horizontalAlign: "center" }
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: (row, col, data) => {
            return rowNoRenderer();
        }
    }
})

grid.addPlugin( libGrid.CellObserverPlugin( {
    onCellInfoChanged: (grid, row, col) => {
        info.innerText = "최근 변경된 셀 : " + row + "," + col
    }
} ) )

\`} />\r
        </Doc>;
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const R=["CellObserver"];export{r as CellObserver,R as __namedExportsOrder,b as default};
