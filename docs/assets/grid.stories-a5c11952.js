import{j as o,a as e}from"./jsx-runtime-d057ca55.js";import{D as d,a as n,L as s}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const m={title:"JS Components/Grid"},r=()=>o(d,{children:[e(n,{children:"IRGrid"}),o("p",{children:[e("code",{children:"Grid"}),"형태로 사용자 상호작용을 처리하는 UI 컴포넌트입니다.",e("br",{}),e("code",{children:"cellRenderer"}),"를 이용하여 셀 출력 내용을 지정합니다."]}),e(s,{html:e("div",{id:"ir_grid",style:{height:500,width:800}}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 15
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(2, "실행판단식", "조건식")
    }
})

window.grid = grid;

grid.onSelectCell = (cell) => console.log(\`Clicked! row: \${cell.row}, col: \${cell.col}\`);

Array.from( { length: 20 }, () => grid.addRow() )

grid.mergeCells(0, 0, 1, 0);
grid.mergeCells(0, 1, 0, 3);
grid.mergeCells(0, 4, 1, 4);

grid.setText(0, 1, "리턴 선택(디폴트)")
grid.setText(2, 1, "폰트")
grid.setText(1, 1, "설명")
grid.setText(1, 2, "[나이]")
grid.setText(1, 3, "[결과]")
grid.setText(2, 2, "10")
grid.setText(2, 3, "10000")

grid.setCell(1, 1, {isError: true })
grid.setCell(1, 3, {isError: true })
grid.setCell(2, 1, {isError: true, fontSize: "20px" })
grid.setCell(2, 2, {isError: true })
grid.setCell(2, 3, {isError: true })
grid.setCell(1, 2, { icon: "type-boolean-return", isError: true })
grid.setCell(3, 2, { icon: "type-boolean-return", iconColor: "rgb(255, 0, 0)" })
grid.setCell(3, 3, { text: "10,000 (잠금)", editable: false })

grid.setCell(4, 1, { text: "only memo", hasMemo: true, tooltip: "메모" })
grid.setCell(4, 2, { text: "memo & err", hasMemo: true, tooltip: "메모 & 에러", isError: true })
grid.setCell(4, 4, { hasMemo: true, tooltip: "툴팁 테스트" })

grid.mergeCells(2, 1, 3, 1)
grid.mergeCells(4, 1, 4, 3)
grid.mergeCells(5, 2, 6, 4)

grid.setColumnWidth(4, 150)
grid.setColumnWidth(5, 70)
grid.setRowHeight(2, 100)
grid.addColumn()
grid.addColumn(100)

grid.onEditKeyDown = (ev, row, col, data) => {
    console.log(\`Cell Key Events row : \${row}, col: \${col}\`);
    console.log(data);
    console.log(ev);
}

// 마운트된 후 자동 높이 조정
grid.onMountedRow = (row) => grid.autoSizeRow(row);

`})]});var t,l,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>\r
                <code>Grid</code>형태로 사용자 상호작용을 처리하는 UI 컴포넌트입니다.<br />\r
                <code>cellRenderer</code>를 이용하여 셀 출력 내용을 지정합니다.\r
            </p>\r
            <LiveEditor html={<div id="ir_grid" style={{
      height: 500,
      width: 800
    }}></div>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 15
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(2, "실행판단식", "조건식")
    }
})

window.grid = grid;

grid.onSelectCell = (cell) => console.log(\\\`Clicked! row: \\\${cell.row}, col: \\\${cell.col}\\\`);

Array.from( { length: 20 }, () => grid.addRow() )

grid.mergeCells(0, 0, 1, 0);
grid.mergeCells(0, 1, 0, 3);
grid.mergeCells(0, 4, 1, 4);

grid.setText(0, 1, "리턴 선택(디폴트)")
grid.setText(2, 1, "폰트")
grid.setText(1, 1, "설명")
grid.setText(1, 2, "[나이]")
grid.setText(1, 3, "[결과]")
grid.setText(2, 2, "10")
grid.setText(2, 3, "10000")

grid.setCell(1, 1, {isError: true })
grid.setCell(1, 3, {isError: true })
grid.setCell(2, 1, {isError: true, fontSize: "20px" })
grid.setCell(2, 2, {isError: true })
grid.setCell(2, 3, {isError: true })
grid.setCell(1, 2, { icon: "type-boolean-return", isError: true })
grid.setCell(3, 2, { icon: "type-boolean-return", iconColor: "rgb(255, 0, 0)" })
grid.setCell(3, 3, { text: "10,000 (잠금)", editable: false })

grid.setCell(4, 1, { text: "only memo", hasMemo: true, tooltip: "메모" })
grid.setCell(4, 2, { text: "memo & err", hasMemo: true, tooltip: "메모 & 에러", isError: true })
grid.setCell(4, 4, { hasMemo: true, tooltip: "툴팁 테스트" })

grid.mergeCells(2, 1, 3, 1)
grid.mergeCells(4, 1, 4, 3)
grid.mergeCells(5, 2, 6, 4)

grid.setColumnWidth(4, 150)
grid.setColumnWidth(5, 70)
grid.setRowHeight(2, 100)
grid.addColumn()
grid.addColumn(100)

grid.onEditKeyDown = (ev, row, col, data) => {
    console.log(\\\`Cell Key Events row : \\\${row}, col: \\\${col}\\\`);
    console.log(data);
    console.log(ev);
}

// 마운트된 후 자동 높이 조정
grid.onMountedRow = (row) => grid.autoSizeRow(row);

\`} />\r
        </Doc>;
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const u=["Basic"];export{r as Basic,u as __namedExportsOrder,m as default};
//# sourceMappingURL=grid.stories-a5c11952.js.map
