import{j as n,a as e,F as l}from"./jsx-runtime-d057ca55.js";import{D as i,a as s,L as c}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const m={title:"JS Components/Grid"},r=()=>n(i,{children:[e(s,{children:"IRGrid"}),n("p",{children:[e("code",{children:"cellRenderer"}),"를 재정의하여 여러 타입의 셀을 출력할 수 있습니다."]}),e(c,{html:n(l,{children:[e("div",{className:"mb--lg",children:e("button",{id:"btn_check_commands",className:"button",children:"Check commands"})}),e("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox({
    onCheckboxClick: (row, col, checked) => alert(row + "," + col + ":" + checked)
});

const radioRenderer = libGrid.renderGridRadio({
    onRadioClick: (row, col) => alert(row + "," + col)
});

const items = [
    { value: "kr", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" }
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = libGrid.renderGridSelect({
    items,
    onChange: (row, col, value, text, beforeValue, beforeText) => {
        console.log(row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText)
    }
});
const datePickerRenderer = libGrid.renderGridDatePicker({
    onDateClick: (row, col, text) => alert(text),
    minDate: new Date()
})

const progressRenderer = libGrid.renderGridProgress({})
const progressRenderer2 = libGrid.renderGridProgress({min: 0, max: 30, defaultIntent: "danger"})
const buttonRenderer = libGrid.renderGridButton({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    defaultLabel: "자동 높이",
    defaultIcon: "add"
})

const iconButtonRenderer = libGrid.renderGridCellIconButton({
    onClick: (ev, row, col) => {
        grid.autoSizeColumn(col);
    },
})

const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 0,
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
                case 7:
                    return progressRenderer2();
                case 8:
                    return buttonRenderer();
                case 9:
                    return radioRenderer();
                case 10:
                    return iconButtonRenderer();
                default:
                    return defaultRenderer;
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
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer();
                case 1:
                    return defaultRenderer;
            }
        }
    }
})

// for debugging
window.grid = grid;

btn_check_commands.onclick = () => {
    console.log(grid.commandManager)
}

grid.onUndo = (cmd) => {
    console.log(cmd)
}

grid.onRedo = (cmd) => {
    console.log(cmd)
}

grid.onSelectCell = (cell) => {
    console.log(\`Clicked! row: \${cell.row}, col: \${cell.col}\`)
    console.log(cell.metaInfo)
};

Array.from({length: 50})
    .forEach(() => grid.addRow())

Array.from({length: 10})
    .forEach(() => grid.addColumn())

grid.removeRow(8)
grid.removeRows(40, 49)
grid.removeColumn(7)
grid.removeColumns(7, 10)

grid.setText(0, 1, "-")
grid.setText(0, 2, "2")
grid.setText(0, 3, "3")
grid.setText(0, 4, "4")
grid.setText(0, 5, "5")
grid.setText(0, 6, "6")
grid.setText(0, 7, "7")
grid.setText(0, 8, "8")
grid.setText(0, 9, "9")
grid.setText(3, 9, "true")
grid.setText(0, 10, "10")
grid.setCell(0, 0, {
    icon: "flowrule-if-node",
    text: "행 번호",
    horizontalAlign: "left",
    verticalAlign: "bottom"
})

grid.setText(1, 5)
grid.setCell(1, 10, { text: "Icon", icon: "save" })

grid.setCell(1, 2, { readonly: true, label: "레이블레이블레이블레이블" })
grid.setCell(2, 2, { disabled: true })
grid.setCell(3, 2, { readonly: true, disabled: true })
grid.setCell(1, 3, { readonly: true })
grid.setCell(2, 3, { disabled: true })
grid.setCell(3, 3, { readonly: true, disabled: true })
grid.setCell(1, 4, { readonly: true })
grid.setCell(2, 4, { disabled: true })
grid.setCell(3, 4, { readonly: true, disabled: true })
grid.setCell(10, 8, { disabled: true })

grid.setText(1, 2, "true")
grid.setText(1, 3, "한국어")
grid.setText(2, 3, "한국어")
grid.setText(5, 3, "English")
grid.setText(1, 5, "100")
grid.setText(2, 5, "0")
grid.setText(3, 5, "50")
grid.setText(4, 5, "10")
grid.setCell(5, 5, { intent: "warning" })
grid.setText(5, 5, "5")
grid.setText(1, 7, "100")
grid.setText(2, 7, "50")
grid.setText(3, 7, "10")
grid.setText(4, 7, "5")
grid.setText(5, 7, "3")
grid.setText(6, 7, "1")

grid.autoSizeColumn(2)
grid.setColumnWidth(3, 150)
grid.selectRange(3, 3, 5, 5)
grid.setColumnWidth(4, 150)

grid.setText(1, 1, "ABC")
grid.setText(1, 4, "2022-06-01")
grid.setText(2, 4, "2022-06-15")
grid.setText(3, 4, "2022-06-30")
grid.setText(4, 4, "2022-07-15")

grid.setObject(1, 1, { a: 1 })
console.log(grid.getObject(1, 1))
console.log(grid.getObject(1, 2))

grid.setRowTextColor(1, "blue")
grid.setCell(1, 3, { textColor: "red", backColor: "black" })
grid.setRowHeight(1, 100);
grid.setCell(1, 8, { intent: "primary"})
grid.setCell(2, 8, { intent: "secondary"})

grid.setCell(2, 9, { disabled: true })

grid.autoSizeColumns(3, 7)
grid.freezeColumn(3)
grid.freezeRows(2)
`})]});var t,d,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p><code>cellRenderer</code>를 재정의하여 여러 타입의 셀을 출력할 수 있습니다.</p>\r
            <LiveEditor html={<>\r
                        <div className="mb--lg">\r
                            <button id="btn_check_commands" className="button">Check commands</button>\r
                        </div>\r
                        <div id="ir_grid" style={{
        height: 500,
        width: 1300
      }}></div>\r
                    </>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = libGrid.renderGridCheckbox({
    onCheckboxClick: (row, col, checked) => alert(row + "," + col + ":" + checked)
});

const radioRenderer = libGrid.renderGridRadio({
    onRadioClick: (row, col) => alert(row + "," + col)
});

const items = [
    { value: "kr", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" }
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = libGrid.renderGridSelect({
    items,
    onChange: (row, col, value, text, beforeValue, beforeText) => {
        console.log(row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText)
    }
});
const datePickerRenderer = libGrid.renderGridDatePicker({
    onDateClick: (row, col, text) => alert(text),
    minDate: new Date()
})

const progressRenderer = libGrid.renderGridProgress({})
const progressRenderer2 = libGrid.renderGridProgress({min: 0, max: 30, defaultIntent: "danger"})
const buttonRenderer = libGrid.renderGridButton({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    defaultLabel: "자동 높이",
    defaultIcon: "add"
})

const iconButtonRenderer = libGrid.renderGridCellIconButton({
    onClick: (ev, row, col) => {
        grid.autoSizeColumn(col);
    },
})

const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 0,
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
                case 7:
                    return progressRenderer2();
                case 8:
                    return buttonRenderer();
                case 9:
                    return radioRenderer();
                case 10:
                    return iconButtonRenderer();
                default:
                    return defaultRenderer;
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
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer();
                case 1:
                    return defaultRenderer;
            }
        }
    }
})

// for debugging
window.grid = grid;

btn_check_commands.onclick = () => {
    console.log(grid.commandManager)
}

grid.onUndo = (cmd) => {
    console.log(cmd)
}

grid.onRedo = (cmd) => {
    console.log(cmd)
}

grid.onSelectCell = (cell) => {
    console.log(\\\`Clicked! row: \\\${cell.row}, col: \\\${cell.col}\\\`)
    console.log(cell.metaInfo)
};

Array.from({length: 50})
    .forEach(() => grid.addRow())

Array.from({length: 10})
    .forEach(() => grid.addColumn())

grid.removeRow(8)
grid.removeRows(40, 49)
grid.removeColumn(7)
grid.removeColumns(7, 10)

grid.setText(0, 1, "-")
grid.setText(0, 2, "2")
grid.setText(0, 3, "3")
grid.setText(0, 4, "4")
grid.setText(0, 5, "5")
grid.setText(0, 6, "6")
grid.setText(0, 7, "7")
grid.setText(0, 8, "8")
grid.setText(0, 9, "9")
grid.setText(3, 9, "true")
grid.setText(0, 10, "10")
grid.setCell(0, 0, {
    icon: "flowrule-if-node",
    text: "행 번호",
    horizontalAlign: "left",
    verticalAlign: "bottom"
})

grid.setText(1, 5)
grid.setCell(1, 10, { text: "Icon", icon: "save" })

grid.setCell(1, 2, { readonly: true, label: "레이블레이블레이블레이블" })
grid.setCell(2, 2, { disabled: true })
grid.setCell(3, 2, { readonly: true, disabled: true })
grid.setCell(1, 3, { readonly: true })
grid.setCell(2, 3, { disabled: true })
grid.setCell(3, 3, { readonly: true, disabled: true })
grid.setCell(1, 4, { readonly: true })
grid.setCell(2, 4, { disabled: true })
grid.setCell(3, 4, { readonly: true, disabled: true })
grid.setCell(10, 8, { disabled: true })

grid.setText(1, 2, "true")
grid.setText(1, 3, "한국어")
grid.setText(2, 3, "한국어")
grid.setText(5, 3, "English")
grid.setText(1, 5, "100")
grid.setText(2, 5, "0")
grid.setText(3, 5, "50")
grid.setText(4, 5, "10")
grid.setCell(5, 5, { intent: "warning" })
grid.setText(5, 5, "5")
grid.setText(1, 7, "100")
grid.setText(2, 7, "50")
grid.setText(3, 7, "10")
grid.setText(4, 7, "5")
grid.setText(5, 7, "3")
grid.setText(6, 7, "1")

grid.autoSizeColumn(2)
grid.setColumnWidth(3, 150)
grid.selectRange(3, 3, 5, 5)
grid.setColumnWidth(4, 150)

grid.setText(1, 1, "ABC")
grid.setText(1, 4, "2022-06-01")
grid.setText(2, 4, "2022-06-15")
grid.setText(3, 4, "2022-06-30")
grid.setText(4, 4, "2022-07-15")

grid.setObject(1, 1, { a: 1 })
console.log(grid.getObject(1, 1))
console.log(grid.getObject(1, 2))

grid.setRowTextColor(1, "blue")
grid.setCell(1, 3, { textColor: "red", backColor: "black" })
grid.setRowHeight(1, 100);
grid.setCell(1, 8, { intent: "primary"})
grid.setCell(2, 8, { intent: "secondary"})

grid.setCell(2, 9, { disabled: true })

grid.autoSizeColumns(3, 7)
grid.freezeColumn(3)
grid.freezeRows(2)
\`} />\r
        </Doc>;
}`,...(o=(d=r.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const C=["CellRenderer"];export{r as CellRenderer,C as __namedExportsOrder,m as default};
//# sourceMappingURL=grid.cell-renderer.stories-13210061.js.map
