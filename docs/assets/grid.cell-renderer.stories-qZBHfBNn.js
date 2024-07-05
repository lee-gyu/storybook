import{j as n,a as e,F as o}from"./jsx-runtime-CjohWU4o.js";import{D as i,a as u,L as s}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const x={title:"JS Components/Grid"},r=()=>n(i,{children:[e(u,{children:"IRGrid"}),n("p",{children:[e("code",{children:"cellRenderer"}),"를 재정의하여 여러 타입의 셀을 출력할 수 있습니다."]}),e(s,{html:n(o,{children:[e("div",{className:"mb--lg",children:e("button",{id:"btn_check_commands",className:"button",children:"Check commands"})}),e("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = new libGrid.IRGridCheckboxRenderer({
    onCheckboxClick: (row, col, checked) => alert(row + "," + col + ":" + checked)
});

const radioRenderer = new libGrid.IRGridRadioCellRenderer({
    onRadioClick: (row, col) => alert(row + "," + col)
});

const items = [
    { value: "kr", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" },
    { value: "en2", text: "English 길이를 길게" },
    { value: "en3", text: "English3" },
    { value: "en4", text: "English4" },
    { value: "en5", text: "English5" },
    { value: "en7", text: "English6" },
    { value: "en8", text: "English7" },
    { value: "en9", text: "English8" },
    { value: "en11", text: "English9" }
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = new libGrid.IRGridSelectCellRenderer({
    items,
    onChange: (row, col, value, text, beforeValue, beforeText) => {
        console.log(row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText)
    },
    allowCustomText: true,
    customDisplayTextFunc: (value, text, custom) => {
        if (!custom) return text;
        if (text === "") return "";

        return [ "(X)", text ].join(" ");
    },
    showErrorIfCustomText: true
});

const selectRenderer2 = new libGrid.IRGridSelectCellRenderer({
    items,
    allowEdit: true,
});

const datePickerRenderer = new libGrid.IRGridDatePickerRenderer({
    onDateClick: (row, col, text) => alert(text),
    minDate: new Date()
})

const progressRenderer = new libGrid.IRGridProgressRenderer({})
const progressRenderer2 = new libGrid.IRGridProgressRenderer({min: 0, max: 30, defaultIntent: "danger"})
const buttonRenderer = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    defaultIcon: "add"
})

const iconDividerButtonRenderer = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    iconDividerStyle: true,
    defaultLabel: "버튼 레이블",
    defaultIcon: "ellipsis"
})

const iconDividerButtonRenderer2 = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    iconDividerStyle: true,
    defaultLabel: "조건 룰",
    defaultIcon: "search-rule"
})

const outlineButtonRenderer = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        console.log(col);
        grid.autoSizeColumn(col);
    },
    defaultLabel: "자동부여",
    outlineStyle: true
})

const iconButtonRenderer = new libGrid.IRGridDefaultCellIconButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeColumn(col);
    },
})

const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 0,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 2:
                    return checkBoxRenderer;
                case 3:
                    return selectRenderer;
                case 4:
                    return datePickerRenderer;
                case 5:
                    return progressRenderer;
                case 6:
                    return outlineButtonRenderer;
                case 7:
                    return progressRenderer2;
                case 8:
                    return buttonRenderer;
                case 9:
                    return radioRenderer;
                case 10:
                    return iconButtonRenderer;
                case 11:
                    return iconDividerButtonRenderer;
                case 12:
                    return iconDividerButtonRenderer2;
                case 13:
                    return selectRenderer2;
                default:
                    return defaultRenderer;
            }
        }
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [4]: { memo: "메모", hasMemo: true },
        [5]: { editable: false },
        ["body_6"]: { disabled: true },
        // 7 ~ 10열은 테스트 동작을 위해 지우는 동작이 있으므로 주의
    },
    colHeader: {
        rowCount: 1,
        colCount: 12,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 2,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer;
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
    console.log("Clicked! row: " + cell.row + ", col: " + cell.col)
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
grid.setCell(2, 10, { text: "", icon: "save" })
grid.setCell(3, 10, { text: "", icon: "save", horizontalAlign: "center" })

grid.setCell(1, 11, { text: "다중Row\\n다중다중\\n다중 텍스트", icon: "save" })
grid.setCell(2, 11, { text: "다중Row\\n다중다중\\n다중 텍스트" })
grid.setCell(3, 11, { text: "123\\n456\\n..." })
grid.setCell(4, 11, { text: "1\\n2\\n3" })
grid.setCell(4, 11, { text: "길고 긴 텍스트 테스트 길이 너비" })

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

grid.setCell(2, 8, { label: "저장" })
grid.setCell(3, 8, { label: "룰 저장22019191 10-101" })
grid.setCell(3, 11, { label: "A\\nB\\nC" })

grid.setText(1, 2, "true")
grid.setText(1, 3, "한국어")
grid.setText(2, 3, "한국어")
grid.setText(5, 3, "English")
grid.setText(6, 3, "임의 텍스트")
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

grid.autoSizeColumns(3, 7);
grid.freezeColumn(3);
grid.freezeRows(2);

grid.setCell(1, 6, { disabled: false, backColor: "var(--background-color)" });
grid.setCell(2, 6, { disabled: false });

grid.setCell(2, 6, { label: "달디다고 달디달고 달디단 밤양갱" })

(function() {
    const rowNo = grid.addRow();

    grid.setCell(rowNo, 6, { disabled: false, backColor: "var(--background-color)" });
})();

`})]});var t,l,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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

const checkBoxRenderer = new libGrid.IRGridCheckboxRenderer({
    onCheckboxClick: (row, col, checked) => alert(row + "," + col + ":" + checked)
});

const radioRenderer = new libGrid.IRGridRadioCellRenderer({
    onRadioClick: (row, col) => alert(row + "," + col)
});

const items = [
    { value: "kr", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" },
    { value: "en2", text: "English 길이를 길게" },
    { value: "en3", text: "English3" },
    { value: "en4", text: "English4" },
    { value: "en5", text: "English5" },
    { value: "en7", text: "English6" },
    { value: "en8", text: "English7" },
    { value: "en9", text: "English8" },
    { value: "en11", text: "English9" }
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = new libGrid.IRGridSelectCellRenderer({
    items,
    onChange: (row, col, value, text, beforeValue, beforeText) => {
        console.log(row + "," + col + ":" + value + "," + text + ", beforeValue: " + beforeValue + ", beforeText: " + beforeText)
    },
    allowCustomText: true,
    customDisplayTextFunc: (value, text, custom) => {
        if (!custom) return text;
        if (text === "") return "";

        return [ "(X)", text ].join(" ");
    },
    showErrorIfCustomText: true
});

const selectRenderer2 = new libGrid.IRGridSelectCellRenderer({
    items,
    allowEdit: true,
});

const datePickerRenderer = new libGrid.IRGridDatePickerRenderer({
    onDateClick: (row, col, text) => alert(text),
    minDate: new Date()
})

const progressRenderer = new libGrid.IRGridProgressRenderer({})
const progressRenderer2 = new libGrid.IRGridProgressRenderer({min: 0, max: 30, defaultIntent: "danger"})
const buttonRenderer = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    defaultIcon: "add"
})

const iconDividerButtonRenderer = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    iconDividerStyle: true,
    defaultLabel: "버튼 레이블",
    defaultIcon: "ellipsis"
})

const iconDividerButtonRenderer2 = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeRow(row);
    },
    iconDividerStyle: true,
    defaultLabel: "조건 룰",
    defaultIcon: "search-rule"
})

const outlineButtonRenderer = new libGrid.IRGridButtonRenderer({
    onClick: (ev, row, col) => {
        console.log(col);
        grid.autoSizeColumn(col);
    },
    defaultLabel: "자동부여",
    outlineStyle: true
})

const iconButtonRenderer = new libGrid.IRGridDefaultCellIconButtonRenderer({
    onClick: (ev, row, col) => {
        grid.autoSizeColumn(col);
    },
})

const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 0,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 2:
                    return checkBoxRenderer;
                case 3:
                    return selectRenderer;
                case 4:
                    return datePickerRenderer;
                case 5:
                    return progressRenderer;
                case 6:
                    return outlineButtonRenderer;
                case 7:
                    return progressRenderer2;
                case 8:
                    return buttonRenderer;
                case 9:
                    return radioRenderer;
                case 10:
                    return iconButtonRenderer;
                case 11:
                    return iconDividerButtonRenderer;
                case 12:
                    return iconDividerButtonRenderer2;
                case 13:
                    return selectRenderer2;
                default:
                    return defaultRenderer;
            }
        }
    },
    defaultColumnCellFormat: {
        all: { verticalAlign: "middle" },
        [2]: { horizontalAlign: "center" },
        [4]: { memo: "메모", hasMemo: true },
        [5]: { editable: false },
        ["body_6"]: { disabled: true },
        // 7 ~ 10열은 테스트 동작을 위해 지우는 동작이 있으므로 주의
    },
    colHeader: {
        rowCount: 1,
        colCount: 12,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 2,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer;
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
    console.log("Clicked! row: " + cell.row + ", col: " + cell.col)
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
grid.setCell(2, 10, { text: "", icon: "save" })
grid.setCell(3, 10, { text: "", icon: "save", horizontalAlign: "center" })

grid.setCell(1, 11, { text: "다중Row\\\\n다중다중\\\\n다중 텍스트", icon: "save" })
grid.setCell(2, 11, { text: "다중Row\\\\n다중다중\\\\n다중 텍스트" })
grid.setCell(3, 11, { text: "123\\\\n456\\\\n..." })
grid.setCell(4, 11, { text: "1\\\\n2\\\\n3" })
grid.setCell(4, 11, { text: "길고 긴 텍스트 테스트 길이 너비" })

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

grid.setCell(2, 8, { label: "저장" })
grid.setCell(3, 8, { label: "룰 저장22019191 10-101" })
grid.setCell(3, 11, { label: "A\\\\nB\\\\nC" })

grid.setText(1, 2, "true")
grid.setText(1, 3, "한국어")
grid.setText(2, 3, "한국어")
grid.setText(5, 3, "English")
grid.setText(6, 3, "임의 텍스트")
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

grid.autoSizeColumns(3, 7);
grid.freezeColumn(3);
grid.freezeRows(2);

grid.setCell(1, 6, { disabled: false, backColor: "var(--background-color)" });
grid.setCell(2, 6, { disabled: false });

grid.setCell(2, 6, { label: "달디다고 달디달고 달디단 밤양갱" })

(function() {
    const rowNo = grid.addRow();

    grid.setCell(rowNo, 6, { disabled: false, backColor: "var(--background-color)" });
})();

\`} />\r
        </Doc>;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const b=["CellRenderer"];export{r as CellRenderer,b as __namedExportsOrder,x as default};
