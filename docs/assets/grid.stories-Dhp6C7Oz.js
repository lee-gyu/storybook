import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as r,a as t,L as i}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const o=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"API 사용 샘플"}),e.jsx(i,{fixedHeight:700,html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[e.jsx("button",{className:"button",id:"btn_add_row",children:"add row"}),e.jsx("button",{className:"button",id:"btn_add_col",children:"add col"}),e.jsx("button",{className:"button",id:"btn_insert_row",children:"insert row"}),e.jsx("button",{className:"button",id:"btn_insert_col",children:"insert col"}),e.jsx("button",{className:"button",id:"btn_remove_row",children:"remove row"}),e.jsx("button",{className:"button",id:"btn_remove_col",children:"remove col"}),e.jsx("button",{className:"button",id:"btn_auto_height",children:"auto height"}),e.jsx("button",{className:"button",id:"btn_auto_width",children:"auto width"}),e.jsx("button",{className:"button",id:"btn_clear_rows",children:"clear"}),e.jsx("button",{className:"button",id:"btn_merge",children:"merge selection"}),e.jsx("button",{className:"button",id:"btn_split",children:"split"}),e.jsx("button",{className:"button",id:"btn_reset",children:"re-create"}),e.jsx("button",{className:"button",id:"btn_hide_rows",children:"hide rows"}),e.jsx("button",{className:"button",id:"btn_show_rows",children:"show rows"}),e.jsx("button",{className:"button",id:"btn_hide_columns",children:"hide columns"}),e.jsx("button",{className:"button",id:"btn_check_commands",children:"show commands"}),e.jsx("button",{className:"button",id:"btn_col_span_disabled",children:"copy options"}),e.jsx("button",{className:"button",id:"btn_copy",children:"copy"}),e.jsx("button",{className:"button",id:"btn_paste",children:"paste"}),e.jsx("button",{className:"button",id:"btn_task",children:"Do Task"}),e.jsx("button",{className:"button",id:"btn_freeze_rows",children:"행 고정"}),e.jsx("button",{className:"button",id:"btn_freeze_cols",children:"열 고정"}),e.jsxs("div",{className:"flex align-items--center gap--md",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,id:"chk_rowSpan"}),e.jsx("span",{children:"copyOptions.rowSpan"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,id:"chk_colSpan"}),e.jsx("span",{children:"copyOptions.colSpan"})]})]})]}),e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
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

// 테스트 사용성을 위해, click 이후 IRGrid에 포커스를 줌
window.addEventListener("click", (ev) => {
    ev.target instanceof HTMLButtonElement &&
        grid.focus();
});

function createGrid() {
    const grid = new libGrid.IRGrid({
        contextElement: ir_grid,
        body: {
            rowCount: 20
        },
        defaultColumnCellFormat: {
            all: { verticalAlign: "middle" }
        },
        colHeader: {
            rowCount: 1,
            colCount: 20,
            cellRenderer: (row, col, data) => {

                if (col > 0) {
                    data.text = col.toString();
                }

                return defaultRenderer(row, col, data);
            }
        },
        rowHeader: {
            colCount: 2,
            cellRenderer: (row, col, data) => {
                switch (col) {
                    case 0:
                        return rowNoRenderer(row, col, data);
                    case 1:
                        data.text = "Test";
                        return defaultRenderer(row, col, data);
                }
            }
        },
        undoManagerOptions: {
            stackLength: 256,
            disabled: false
        }
    })

    grid.onSelectCell = (cell) => {
        console.log(cell.metaInfo.text)
    }
    grid.onMountedRow = (row) => grid.autoSizeRow(row);
    grid.onContextMenu = (ev, cell) => {
        if (cell)
            console.log("contextmenu", { row: cell.row, col: cell.col })
        else
            console.log("contextmenu", "cell is null")
    }

    window.grid = grid;

    return grid;
}

let grid = createGrid();

btn_add_row.onclick = () => {
    grid.commandManager.doRecording( "Add row", () => {
        const row = grid.addRow();

        grid.setText(row, 2, "ABC\\nBCD")
        grid.setCell(row, 3, { icon: "type-boolean-return" })
        grid.selectRow(row);
    } )
};
btn_add_col.onclick = () => {
    grid.commandManager.doRecording( "Add column", () => {
        grid.addColumn( 80 )
    });
}

btn_insert_row.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Insert row", () => {
            grid.insertRows(selection.top, 1 + selection.bottom - selection.top, 70)
            grid.setRowTextColor(selection.top, "blue")
        });
    }
}

btn_insert_col.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Insert column", () => {
            grid.insertColumns(selection.left, 1 + selection.right - selection.left, 50)
        });
    }
}

btn_copy.onclick = () => grid.copyToClipboard();
btn_paste.onclick = () => grid.pasteFromClipboard();

btn_remove_row.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Remove row", () => {
            grid.removeRows(selection.top, selection.bottom)
        });
    }
}

btn_remove_col.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Remove column", () => {
            grid.removeColumns(selection.left, selection.right)
        });
    }
}

btn_auto_height.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Rows auto size", () => {
            grid.autoSizeRows(selection.top, selection.bottom)
        });
    }
}

btn_auto_width.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Columns auto size", () => {
            grid.autoSizeColumns(selection.left, selection.right)
        });
    }
}

btn_clear_rows.onclick = () => grid.clearRows();

btn_task.onclick = () => grid.afterRender(() => console.log("after render"))

btn_merge.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Merge cell", () => {
            grid.mergeCells(selection.top, selection.left, selection.bottom, selection.right)
        });
    }
};

btn_split.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Split cell", () => {
            grid.splitCells(selection.top, selection.left)
        });
    }
};

btn_reset.onclick = () => grid = createGrid();

btn_hide_rows.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Hide row", () => {
            for (let r = selection.top; r <= selection.bottom; ++r) {
                grid.setRowVisible(r, false)
            }
        });
    }
};

btn_show_rows.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Show row", () => {
            for (let r = selection.top; r <= selection.bottom; ++r) {
                grid.setRowVisible(r, true)
            }
        });
    }
}

btn_hide_columns.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Hide column", () => {
            for (let c = selection.left; c <= selection.right; ++c) {
                grid.setColumnVisible(c, false)
            }
        });
    }
};

btn_col_span_disabled.onclick = () => {
    grid.setClipboardOptions( {colSpan: false} );
}

btn_check_commands.onclick = () => {
    console.log( grid.commandManager )
}

btn_freeze_rows.onclick = () => {
    const selection = grid.getSelection();

    if (!selection) return;

    grid.freezeRows( selection.bottom );
}

btn_freeze_cols.onclick = () => {
    const selection = grid.getSelection();

    if (!selection) return;

    grid.freezeColumn( selection.right - 1 );
}

chk_rowSpan.onclick = (ev) => {
    grid.setClipboardOptions( { rowSpan: ev.target.checked } );
}

chk_colSpan.onclick = (ev) => {
    grid.setClipboardOptions( { colSpan: ev.target.checked } );
}

`})]});o.__docgenInfo={description:"",methods:[],displayName:"APIDemo"};const l=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"Grid"}),"형태로 사용자 상호작용을 처리하는 UI 컴포넌트입니다.",e.jsx("br",{}),e.jsx("code",{children:"cellRenderer"}),"를 이용하여 셀 출력 내용을 지정합니다."]}),e.jsx(i,{html:e.jsx("div",{id:"ir_grid",style:{height:500,width:800}}),code:`
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

grid.onSelectCell = (cell) => console.log("Clicked! row: " + cell.row + ", col: " + cell.col);

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

grid.setCell(4, 1, { text: "only memo", hasMemo: true, memo: "메모" })
grid.setCell(4, 2, { text: "memo & err", hasMemo: true, memo: "메모 & 에러", isError: true })
grid.setCell(4, 4, { hasMemo: true, isError: true, memo: "에러 메모 테스트", memoIntent: "error" })

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

`})]});l.__docgenInfo={description:"",methods:[],displayName:"Basic"};const n=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"cellRenderer"}),"를 재정의하여 여러 타입의 셀을 출력할 수 있습니다."]}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb--lg",children:e.jsx("button",{id:"btn_check_commands",className:"button",children:"Check commands"})}),e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
import * as libGrid from "./dist/grid.js";

const checkBoxRenderer = new libGrid.IRGridCheckboxRenderer({
    onCheckboxClick: (row, col, checked) => console.log(row + "," + col + ":" + checked)
});

const radioRenderer = new libGrid.IRGridRadioCellRenderer({
    onRadioClick: (row, col) => console.log(row + "," + col)
});

const items = [
    { value: "kr", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" },
    { value: "en2", text: "English 길이를 길게" },
    { value: "en3", text: "English3\\n길게길게\\n3줄" },
    { value: "en4", text: "English4 English4 English4 English4 English4 " },
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
    onDateClick: (row, col, text) => console.log(text),
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
`})]});n.__docgenInfo={description:"",methods:[],displayName:"CellRenderer"};const d=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb--sm",children:[e.jsx("button",{id:"btn_bulk",className:"button",children:"Append Bulk Data (Slow)"}),e.jsx("button",{id:"btn_bulk2",className:"button",children:"Append Bulk Data (Improved)"}),e.jsx("button",{id:"btn_clear",className:"button",children:"Clear"}),e.jsx("button",{id:"btn_hide",className:"button",children:"all hide"}),e.jsx("button",{id:"btn_visible",className:"button",children:"all visible"})]}),e.jsx("div",{id:"ir_grid",style:{height:500,width:"100%"}})]}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 0,
    },
    colHeader: {
        rowCount: 1,
        colCount: 50
    },
    rowHeader: {
        colCount: 1,
    }
})

window.grid = grid;

const BULK_ROWS = 1000;

for (let j = 1; j < grid.getColCount(); j++) {
    grid.setText(0, j, String( j ));
}

function bulkInsert1() {
    for (let i = 0; i < BULK_ROWS; i++) {
        const rowNo = grid.addRow();

        grid.setText(rowNo, 0, String(i + 1));

        for (let j = 1; j < grid.getColCount(); j++) {
            grid.setText(rowNo, j, i + "," + j);
        }
    }
}

function bulkInsert2() {
    for (let i = 0; i < BULK_ROWS; i++) {
        const rowNo = grid.addRow();

        grid.setRowInfo(rowNo, {
            textData: rowArrayBuffer(rowNo, grid.getColCount()),
        });
    }
}

function timeElapsed(func) {
    const start = performance.now();
    func();
    const end = performance.now();

    console.log(end - start);

}

btn_bulk.onclick = () => {
    timeElapsed(bulkInsert1);
}

function rowArrayBuffer(rowNo, size) {
    const arr = [String(rowNo)];

    for (let j = 1; j < size; j++) {
        arr.push(rowNo + "," + j);
    }

    return arr;
}

btn_bulk2.onclick = () => {
    timeElapsed(bulkInsert2);
}

btn_clear.onclick = () => grid.clearRows();

btn_hide.onclick = () => {
    grid.setRowVisibleBulk(1, Array( grid.getRowCount() - 1 ).fill(false));
}

btn_visible.onclick = () => {
    grid.setRowVisibleBulk(1, Array( grid.getRowCount() - 1 ).fill(true));
}

`})]});d.__docgenInfo={description:"",methods:[],displayName:"BulkData"};const s=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"헤더 없는 버전 테스트"}),e.jsx(i,{html:e.jsx("div",{id:"ir_grid",style:{height:500,width:800}}),code:`
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


`})]});s.__docgenInfo={description:"",methods:[],displayName:"NoHeader"};const c=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"SingleCellDragPlugin"}),"을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다."]}),e.jsxs("p",{children:["셀의 ",e.jsx("code",{children:"draggable"})," 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다."]}),e.jsx(i,{html:e.jsxs("div",{style:{display:"flex",flexDirection:"row",height:500,columnGap:8},children:[e.jsx("div",{id:"ir_grid1",style:{flex:1}}),e.jsx("div",{id:"ir_grid2",style:{flex:1}})]}),code:`
import * as libGrid from "./dist/grid.js";

const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);
const defaultRenderer = libGrid.renderGridCellDefault();

(function() {
    const grid = new libGrid.IRGrid({
        contextElement: ir_grid1,
        body: {
            rowCount: 32,
        },
        colHeader: {
            rowCount: 1,
            colCount: 16,
            cellRenderer: (row, col, data) => {
                if (col > 1)
                    data.text = col.toString();

                return defaultRenderer();
            }
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: (row, col, data) =>
                col === 0 ? rowNoRenderer() : defaultRenderer()
        },
        plugins: [
            libGrid.SingleCellDragPlugin(),
            libGrid.CellDropPlugin(),
            libGrid.DefaultKeyPlugin()
        ],
        defaultColumnCellFormat: {
            all: { draggable: true },
            // 1번 열 drag 기능 비활성화
            [1]: { draggable: false },
        },
    })

    grid.onDropOnCell = (row, col, ev) => {
        const data = ev.dataTransfer.getData("application/json")
        const json = JSON.parse(data)

        grid.commandManager.doRecording("Drag-Drop", () => {
            grid.setText(row, col, json.name)
            grid.setObject(row, col, json)
        });
    }

    grid.mergeCells(2, 2, 3, 3);

    grid.setText(0, 1, "Drag 막힘")
    grid.setText(2, 2, "Drag 활성화 셀")
    grid.setObject(2, 2, { name: "Drag 활성화 셀" } )

})();

(function() {
    const grid = new libGrid.IRGrid({
        contextElement: ir_grid2,
        body: {
            rowCount: 32,
        },
        colHeader: {
            rowCount: 1,
            colCount: 16,
            cellRenderer: (row, col, data) => {
                if (col !== 0)
                    data.text = col.toString();

                return defaultRenderer(row, col, data);
            }
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: (row, col, data) =>
                col === 0 ? rowNoRenderer(row, col, data) : defaultRenderer(row, col, data)
        },
        plugins: [
            libGrid.SingleCellDragPlugin(),
            libGrid.CellDropPlugin(),
            libGrid.DefaultKeyPlugin()
        ],
        defaultColumnCellFormat: {
            all: { draggable: true },
        },
    })

    grid.onDropOnCell = (row, col, ev) => {
        const data = ev.dataTransfer.getData("application/json")
        const json = JSON.parse(data)

        grid.commandManager.doRecording("Drag-Drop", () => {
            grid.setText(row, col, json.name)
            grid.setObject(row, col, json)
        })
    }

    grid.mergeCells(1, 1, 2, 3);

})();

`})]});c.__docgenInfo={description:"",methods:[],displayName:"CellDrag"};const a=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid ColumnFill"}),e.jsx("p",{children:"ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)"}),e.jsxs("p",{children:["colHeader의 ",e.jsx("code",{children:"maxSize"}),"를 9999로 설정해야 열 크기 제한 문제가 없습니다."]}),e.jsx(i,{fixedHeight:600,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"btn1",className:"button",children:"visible on/off"}),e.jsxs("div",{className:"split-container flex background--light",children:[e.jsx("div",{id:"split1",children:e.jsx("div",{id:"ir_grid",className:"",style:{height:500,width:"100%",display:"none"}})}),e.jsx("div",{id:"split2"})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5,
        maxSize: 9999
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

grid.setColumnWidth(0, 80)
grid.setColumnWidth(1, 80)
grid.setColumnWidth(2, 120)
grid.setColumnWidth(3, 120)
grid.setColumnWidth(4, 160)

grid.addPlugin(libGrid.ColumnFillPlugin({
    columnWeight: [ "120px", 1, 1, 1, 2 ]
}))

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

createSplitContainer( [
    "#split1",
    "#split2"
], {
} );

`})]});a.__docgenInfo={description:"",methods:[],displayName:"ColumnFill"};const g=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid Configuration"}),e.jsx("p",{children:"Grid 내부 패딩을 조절할 수 있습니다."}),e.jsx(i,{fixedHeight:600,html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"ir_grid",className:"",style:{height:500}})}),code:`
import * as libGrid from "./dist/grid.js";
import { getThemeStore } from "./dist/index.js";

getThemeStore().setStoreValue("grid.paddingTop", 3);
getThemeStore().setStoreValue("grid.paddingBottom", 4);
getThemeStore().setStoreValue("grid.paddingLeft", 6);
getThemeStore().setStoreValue("grid.paddingRight", 6);
getThemeStore().setStoreValue("grid.defaultRowHeight", 24);

const checkBoxRenderer = new libGrid.IRGridCheckboxRenderer({});
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer({});

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    colHeader: {
        rowCount: 1,
        colCount: 5,
        maxSize: 9999
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    },
    body: {
        rowCount: 30,
        cellRenderer: (row, col) => {
            return col === 1
                ? checkBoxRenderer
                : defaultRenderer;
        }
    },
    defaultColumnCellFormat: {
        ["body_1"]: { icon: "save" }
    }
})

grid.setColumnWidth(0, 80)
grid.setColumnWidth(1, 80)
grid.setColumnWidth(2, 120)
grid.setColumnWidth(3, 120)
grid.setColumnWidth(4, 160)

`})]});g.__docgenInfo={description:"",methods:[],displayName:"GridConfig"};const u=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx(i,{html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})}),code:`
import { IRContextMenuAdapter } from "./dist/react.js";
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 8
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(2, "실행판단식", "조건식")
    }
})

const menu = new IRContextMenuAdapter( {
    items: [
        {
            id: "search-rule",
            type: "command-button",
            label: "룰 찾기",
            icon: "ir-icon--search-rule"
        },
        {
            id: "div1",
            type: "divider",
        },
        {
            id: "rule-dropdown",
            type: "dropdown",
            label: "테이블 조작",
            children: [
                {
                    id: "add-row",
                    type: "command-button",
                    label: "행 추가",
                    icon: "ir-icon--row-add"
                },
            ]
        }
    ]
} );

menu.onCommandButtonClick = ( {ev, item} ) => {
    if (item.id === "add-row")
        grid.addRow();
}

grid.onContextMenu = (ev, cell) => {
    if (cell)
        grid.selectCell(cell.row, cell.col);

    menu.showAtPoint(ev.clientX, ev.clientY);
}

grid.mergeCells(2, 1, 3, 3);

`})]});u.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};const m=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"cellRenderer"}),"인터페이스를 임의로 작성하여 다양한 셀 형태를 출력할 수 있습니다."]}),e.jsx(i,{html:e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
import * as libGrid from "./dist/grid.js";

// 함수형 렌더러
const customRenderer = (row, col, data) => {
    const element = document.createElement("div");

    // IRGrid 기본 셀 패딩 적용을 위해 속성 설정
    element.setAttribute( "data-has-px", "" );
    element.setAttribute( "data-has-py", "" );

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

`})]});m.__docgenInfo={description:"",methods:[],displayName:"CustomRenderer"};const x=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"좌측 Tree 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다."}),e.jsx(i,{html:e.jsxs("div",{style:{display:"flex",height:500,columnGap:8},children:[e.jsx("div",{id:"tree",style:{width:300}}),e.jsx("div",{id:"ir_grid",style:{height:"100%",width:"100%"}})]}),code:`
import { IRTree } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

const rowNoRenderer = libGrid.renderRowNoHeaderCell(1);
const defaultRenderer = libGrid.renderGridCellDefault();

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 100,
    },
    colHeader: {
        rowCount: 2,
        colCount: 15
    },
    rowHeader: {
        colCount: 3,
        cellRenderer: (row, col, data) => {
            switch (col) {
                case 0:
                    return rowNoRenderer()
                default:
                    return defaultRenderer()
            }
        }
    },
    defaultColumnCellFormat: {
        [5]: { dropDisabled: true },
    },
})

grid.freezeRows(5)
grid.freezeColumns(5)
grid.setText(0, 5, "drop 비활성화")

grid.onDropOnCell = (row, col, ev) => {
    const data = ev.dataTransfer.getData("application/json")
    const json = JSON.parse(data)

    grid.commandManager.doRecording("Drag-Drop", () => {
        grid.setText(row, col, json.name)
    })
}

grid.setCell(3, 3, { disabled: true });
grid.mergeCells(4, 6, 6, 9);

const tree = new IRTree( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
    data: {
        id: 0,
        name: "",
    },
} );

// 노드 추가
const node = tree.addChild( null, "이노은행", {
    id: 1,
    name: "이노은행",
} );

// 자식 노드 추가 (부모 노드가 첫 번재 인자)
const b = tree.addChild( node, "계좌", {
    id: 2,
    name: "계좌",
} );

b.iconClass = "ir-icon--folder-open-outline"

tree.addChild( node, "카드", {
    id: 5,
    name: "카드",
} );

tree.expandAll();


`})]});x.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};const h=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"헤더를 드래그하여 셀 내용 교체"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb--lg",style:{alignItems:"center",columnGap:"4px"},children:["source: ",e.jsx("div",{className:"input",style:{display:"inline-block",width:100},children:e.jsx("input",{id:"input_source",className:"input__native"})}),"target: ",e.jsx("div",{className:"input",style:{display:"inline-block",width:100},children:e.jsx("input",{id:"input_target",className:"input__native"})}),e.jsx("button",{type:"button",id:"btn_exchange_row",className:"button",children:"행 교체"}),e.jsx("button",{type:"button",id:"btn_exchange_col",className:"button",children:"열 교체"}),e.jsx("button",{type:"button",id:"btn_on",className:"button ml--xl",children:"Drag On"}),e.jsx("button",{type:"button",id:"btn_off",className:"button",children:"Drag Off"}),e.jsx("button",{type:"button",id:"btn_merge",className:"button ml--xl",children:"셀 병합"}),e.jsx("button",{type:"button",id:"btn_freeze",className:"button",children:"행 고정"}),e.jsx("button",{type:"button",id:"btn_freeze_col",className:"button",children:"열 고정"})]}),e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
import * as libGrid from "./dist/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );
const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: { rowCount: 0 },
    colHeader: {
        rowCount: 1,
        colCount: 16,
    },
    rowHeader: {
        colCount: 1,
    },
})

window.__grid = grid;

function addRow() {
    const rowNo = grid.addRow();

    grid.cell(rowNo, 6).cellRenderer = checkboxCellRenderer;

}

Array.from( {length:30} ).forEach(addRow);

grid.setText(0, 1, "1")
grid.setText(0, 2, "2")
grid.setText(0, 3, "3")
grid.setText(0, 4, "4")
grid.setText(0, 5, "5")
grid.setText(0, 6, "6")

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 0, id + 1)
        grid.setText(id + 1, 1, id)
        grid.setText(id + 1, 2, "text-" + id )
        grid.setText(id + 1, 3, "text2-"  + id )
        grid.setText(id + 1, 4, "text3"  + id )
        grid.setCell(id + 1, 5, {text: "String", icon: "add"})
        grid.setCell(id + 1, 6, { label :"Check" } )
    } )

grid.setText(6,6, "true");
grid.mergeCells(4,3,5,4);

btn_exchange_row.onclick = () => {
    const source = input_source.value.split(",").map((val) => parseInt(val, 10));
    const target = input_target.value.split(",").map((val) => parseInt(val, 10));

    grid.commandManager.doRecording("Exchange Rows", () => {
        grid.exchangeRows(source, target);
    });
}
btn_exchange_col.onclick = () => {
    const source = input_source.value.split(",").map((val) => parseInt(val, 10));
    const target = input_target.value.split(",").map((val) => parseInt(val, 10));

    grid.commandManager.doRecording("Exchange Columns", () => {
        grid.exchangeColumns(source, target);
    });
}

const exchangePlugin = new libGrid.IRGridExchangeByHeaderCellPlugin();
grid.addPlugin(exchangePlugin);

btn_on.onclick = () => {
    grid.addPlugin(exchangePlugin);
}
btn_off.onclick = () => {
    grid.removePlugin(exchangePlugin);
}
btn_merge.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording("Merge", () => {
            grid.mergeCells(selection.top, selection.left, selection.bottom, selection.right)
        });
    }
}
btn_freeze.onclick = () => {
    const selection = grid.getSelection();
    if (!selection) return;

    grid.freezeRows(selection.bottom)
}

btn_freeze_col.onclick = () => {
    const selection = grid.getSelection();
    if (!selection) return;

    grid.freezeColumns(selection.left)
}
`})]});h.__docgenInfo={description:"",methods:[],displayName:"Exchange"};const b=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid Finder"}),e.jsx("p",{children:"Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다."}),e.jsx(i,{css:"",html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"search",children:[e.jsxs("div",{className:"search__input-group",children:[e.jsx("div",{className:"search__input-group-row",children:e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label width--xxs",children:"검색어"}),e.jsx("div",{className:"form-item__control",children:e.jsx("div",{className:"input",children:e.jsx("input",{id:"search_text",type:"text",className:"input__native"})})})]})}),e.jsx("div",{id:"control_panel",className:"search__input-group-row",children:e.jsxs("div",{className:"row gap-x--3xl mt--xxl",children:[e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"ignore_case",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"대소문자 구분"})]})}),e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"match_all",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"전체 텍스트 일치"})]})})]}),e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"all",defaultChecked:!0}),e.jsx("span",{className:"radio__text",children:"모두"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"selection"}),e.jsx("span",{className:"radio__text",children:"선택한 영역"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"selected-row"}),e.jsx("span",{className:"radio__text",children:"선택한 행"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"selected-col"}),e.jsx("span",{className:"radio__text",children:"선택한 열"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"custom"}),e.jsx("span",{className:"radio__text",children:"임의 범위(0,0 ~ 10,10)"})]})})]}),e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"direction",value:"by-rows",defaultChecked:!0}),e.jsx("span",{className:"radio__text",children:"행 우선"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"direction",value:"by-columns"}),e.jsx("span",{className:"radio__text",children:"열 우선"})]})})]}),e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"has_header_rows",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"헤더 행 포함"})]})}),e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"has_header_cols",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"헤더 열 포함"})]})})]})]})})]}),e.jsx("button",{id:"btn",type:"button",className:"button button--tertiary",children:"다음 찾기"}),e.jsx("button",{id:"btn_cursor",type:"button",className:"button button--tertiary",children:"Set Cursor"})]}),e.jsx("br",{}),e.jsx("input",{id:"replace",type:"text",placeholder:"변경할 내용"}),e.jsx("button",{id:"btn_replace",className:"button",children:"모두 변경"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{id:"ir_grid",style:{height:500,width:"100%"}})]}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 30
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

const finder = grid.createFinder();

function getOptions() {
    return {
        ignoreCase: ignore_case.checked === false,
        matchAll: match_all.checked === true,
        text: search_text.value,
        area: Array.from(document.querySelectorAll("input[name='area']")).filter(input => input.checked)[0].value,
        direction: Array.from(document.querySelectorAll("input[name='direction']")).filter(input => input.checked)[0].value,
        customRange: { top: 0, bottom: 10, left: 0, right: 10 },
        hasHeaderRows: has_header_rows.checked,
        hasHeaderColumns: has_header_cols.checked,
    }
}

btn.onclick = () => {
    const cell = finder.findNext(getOptions());

    if (cell) {
        grid.selectCell(cell.row, cell.col)
        grid.scrollInView(cell.row, cell.col)
    }
    else
        alert("찾을 수 없음!");
}

btn_replace.onclick = () => {
    const cells = finder.getAllMatchedCell(getOptions());

    for (const cell of cells) {
        cell.text = cell.text.replace(new RegExp(search_text.value), replace.value)
    }
}

btn_cursor.onclick = () => {
    const cell = grid.activeCell;

    if (!cell) return;

    finder.setCursor(cell.row, cell.col);
}

grid.setText(1, 1, "1");
grid.setText(2, 2, "1");
grid.setText(3, 2, "1");
grid.setText(4, 1, "1");
grid.setText(5, 5, "1");
grid.setText(1, 2, "1bc");
grid.setText(1, 3, "A");
grid.setText(1, 4, "a");
grid.setText(2, 4, "aBc");
grid.setText(3, 4, "ABC");
grid.setText(4, 4, "abc");

Array.from({length: 15})
    .forEach( (_, r) => {
        grid.setText(1, 5 + r, "1")
        grid.setText(r + 10, 1, "1")
    });

`})]});b.__docgenInfo={description:"",methods:[],displayName:"Finder"};const w=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx(i,{html:e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
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


`})]});w.__docgenInfo={description:"",methods:[],displayName:"Rows2000"};const p=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"헤더를 드래그하여 행/열 이동"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb--lg",style:{alignItems:"center",columnGap:"4px"},children:["source: ",e.jsx("div",{className:"input",style:{display:"inline-block",width:100},children:e.jsx("input",{id:"input_source",className:"input__native"})}),"target: ",e.jsx("div",{className:"input",style:{display:"inline-block",width:100},children:e.jsx("input",{id:"input_target",className:"input__native"})}),e.jsx("button",{type:"button",id:"btn_move_row",className:"button",children:"행 이동"}),e.jsx("button",{type:"button",id:"btn_move_col",className:"button",children:"열 이동"}),e.jsx("button",{type:"button",id:"btn_on",className:"button ml--xl",children:"Row Drag On"}),e.jsx("button",{type:"button",id:"btn_off",className:"button",children:"Row Drag Off"}),e.jsx("button",{type:"button",id:"btn_merge",className:"button ml--xl",children:"셀 병합"}),e.jsx("button",{type:"button",id:"btn_freeze",className:"button",children:"행 고정"}),e.jsx("button",{type:"button",id:"btn_freeze_col",className:"button",children:"열 고정"})]}),e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
import * as libGrid from "./dist/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );
const rowNoRenderer = new libGrid.IRGridRowNoHeaderCellRenderer(1);

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: { rowCount: 0 },
    colHeader: {
        rowCount: 1,
        colCount: 16,
    },
    rowHeader: {
        colCount: 1,
    },
})

window.__grid = grid;

function addRow() {
    const rowNo = grid.addRow();

    grid.cell(rowNo, 6).cellRenderer = checkboxCellRenderer;

}

Array.from( {length:30} ).forEach(addRow);

grid.setText(0, 1, "1")
grid.setText(0, 2, "2")
grid.setText(0, 3, "3")
grid.setText(0, 4, "4")
grid.setText(0, 5, "5")
grid.setText(0, 6, "6")

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 0, id + 1)
        grid.setText(id + 1, 1, id)
        grid.setText(id + 1, 2, "text-" + id )
        grid.setText(id + 1, 3, "text2-"  + id )
        grid.setText(id + 1, 4, "text3"  + id )
        grid.setCell(id + 1, 5, {text: "String", icon: "add"})
        grid.setCell(id + 1, 6, { label :"Check" } )
    } )

grid.setText(6,6, "true");
grid.mergeCells(4,3,5,4);

btn_move_row.onclick = () => {
    const source = input_source.value.split(",").map((val) => parseInt(val, 10));
    const target = parseInt(input_target.value, 10);

    grid.commandManager.doRecording("Move Rows", () => {
        grid.moveRows(source, target);
    });
}
btn_move_col.onclick = () => {
    const source = input_source.value.split(",").map((val) => parseInt(val, 10));
    const target = parseInt(input_target.value, 10);

    grid.commandManager.doRecording("Move Columns", () => {
        grid.moveColumns(source, target);
    });
}

const moveRowPlugin = new libGrid.IRGridMoveRowsPlugin();
const moveColPlugin = new libGrid.IRGridMoveColumnsPlugin();

grid.addPlugin(moveRowPlugin);
grid.addPlugin(moveColPlugin);

btn_on.onclick = () => {
    grid.addPlugin(moveRowPlugin);
}
btn_off.onclick = () => {
    grid.removePlugin(moveRowPlugin);
}
btn_merge.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording("Merge", () => {
            grid.mergeCells(selection.top, selection.left, selection.bottom, selection.right)
        });
    }
}
btn_freeze.onclick = () => {
    const selection = grid.getSelection();
    if (!selection) return;

    grid.freezeRows(selection.bottom)
}

btn_freeze_col.onclick = () => {
    const selection = grid.getSelection();
    if (!selection) return;

    grid.freezeColumns(selection.left)
}
`})]});p.__docgenInfo={description:"",methods:[],displayName:"HeaderMove"};const C=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
                    .grid-wrapper {
                        height: 600px;
                        display: grid;
                        gap: 8px;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                    }

                    .ir_grid:focus {
                        outline: 1px solid red;
                    }
                    `}),e.jsxs("div",{className:"grid-wrapper",children:[e.jsx("div",{id:"ir_grid1"}),e.jsx("div",{id:"ir_grid2"}),e.jsx("div",{id:"ir_grid3"}),e.jsx("div",{id:"ir_grid4"})]})]}),code:`
import * as libGrid from "./dist/grid.js";

const gridList = [];

for (let i = 1; i <= 4; i++) {
    gridList.push(
        new libGrid.IRGrid({
            contextElement: document.getElementById( "ir_grid" + i ),
            body: {
                rowCount: 5,
            },
            colHeader: {
                rowCount: 1,
                colCount: 6
            },
        })
    );
}

window.__GRID_LIST = gridList;

`})]});C.__docgenInfo={description:"",methods:[],displayName:"Multiple"};const _=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid Overflow Panel"}),e.jsx("p",{children:"IRGrid가 overflow될 경우 Grid의 스크롤 제어를 간편하게 할 수 있는 편의 기능을 제공한다."}),e.jsx(i,{fixedHeight:500,html:e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:"btn_freeze_rows",className:"button mb--sm",children:"행 고정"}),e.jsx("button",{type:"button",id:"btn_freeze_cols",className:"button mb--sm",children:"열 고정"}),e.jsx("button",{type:"button",id:"btn_merge",className:"button mb--sm",children:"셀 병합"}),e.jsx("button",{className:"button",id:"btn_hide_rows",children:"행 숨김"}),e.jsx("button",{className:"button",id:"btn_show_rows",children:"행 표시"}),e.jsx("button",{className:"button",id:"btn_hide_columns",children:"열 숨김"}),e.jsx("button",{className:"button",id:"btn_show_columns",children:"열 표시"}),e.jsx("br",{}),e.jsx("div",{id:"ir_grid"})]}),code:`
import * as libGrid from "./dist/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 20,
        cellRenderer: (row, col, data) => {
            if (col > 0) {
                data.text = col.toString();
            }
            return defaultCellRenderer;
        }
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

// 디버깅용 전역 변수화
window.grid = grid;


btn_freeze_rows.onclick = () => {
    const selection = grid.getSelection();

    if (!selection) return;

    grid.freezeRows( selection.bottom );
}

btn_freeze_cols.onclick = () => {
    const selection = grid.getSelection();

    if (!selection) return;

    grid.freezeColumns( selection.right );
}

btn_merge.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Merge cell", () => {
            grid.mergeCells(selection.top, selection.left, selection.bottom, selection.right)
        });
    }
};


btn_hide_rows.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Hide row", () => {
            for (let r = selection.top; r <= selection.bottom; ++r) {
                grid.setRowVisible(r, false)
            }
        });
    }
};

btn_show_rows.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Show row", () => {
            for (let r = selection.top; r <= selection.bottom; ++r) {
                grid.setRowVisible(r, true)
            }
        });
    }
}

btn_show_columns.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Show column", () => {
            for (let c = selection.left; c <= selection.right; ++c) {
                grid.setColumnVisible(c, true)
            }
        });
    }
};

btn_hide_columns.onclick = () => {
    const selection = grid.getSelection();

    if (selection) {
        grid.commandManager.doRecording( "Hide column", () => {
            for (let c = selection.left; c <= selection.right; ++c) {
                grid.setColumnVisible(c, false)
            }
        });
    }
};


grid.addPlugin(new libGrid.IRGridOverflowPanelPlugin({
    style: {
        height: 400,
        width: "100%"
    }
}));

`})]});_.__docgenInfo={description:"",methods:[],displayName:"OverflowPanel"};const R=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{}),e.jsx(i,{html:e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}}),code:`
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
        libGrid.RowSelectionPlugin(),
        libGrid.DefaultKeyPlugin( { rowSelection: true } )
    ]
})

grid.onSelectCell = (cell) => console.log(cell.row)


`})]});R.__docgenInfo={description:"",methods:[],displayName:"RowSelection"};const f=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"열을 클릭하여 정렬 실행"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:"btn_reset_sort",className:"button mb--sm",children:"정렬 초기화"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_column_click",defaultChecked:!0}),"열 클릭 활성화"]}),e.jsx("br",{}),e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
import * as libGrid from "./dist/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const radioCellRenderer = new libGrid.IRGridRadioCellRenderer( {} );
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 50,
        cellRenderer: (row, col) => {
            if (col === 5) return radioCellRenderer;
            if (col === 6) return checkboxCellRenderer;

            return defaultCellRenderer;
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 7
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

// 디버깅용 전역 변수화
window.grid = grid;

grid.setCell(0, 1, { text :"Number" })
grid.setCell(0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" })
grid.setCell(0, 3, { text: "Text", icon: "type-string" })
grid.setCell(0, 4, { text: "Text", icon: "type-string" })
grid.setCell(0, 5, { text: "Radio" })
grid.setCell(0, 6, { text: "체크박스" })

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 1, (id + 1).toString() )
        grid.setText(id + 1, 2, Math.floor(Math.random() * 10000).toString() )
        grid.setText(id + 1, 3, Math.floor(Math.random() * 10000).toString(16) )
        grid.setText(id + 1, 4, Math.floor(Math.random() * 20).toString() )
        grid.setCell(id + 1, 5, { label :"Radio" } )
        grid.setCell(id + 1, 6, { label :"Check" } )
    } )

grid.setText(25, 1, -100 );
grid.setText(26, 1, -20 );
grid.setText(27, 1, 0 );
grid.setText(28, 1, -200 );
grid.setText(29, 1, -999999 );
grid.setText(30, 1, "bb" );
grid.setText(31, 1, "ba" );
grid.setText(32, 1, "a" );
grid.setText(33, 1, "cc" );
grid.setText(34, 1, "zy" );
grid.setText(35, 1, "zi" );

const sortManager = libGrid.createIRGridColumnSortManager(grid)

sortManager.overrideColumnClickEvent();

btn_reset_sort.onclick = () => sortManager.clearSortOrder();
chk_toggle_column_click.onchange = () => {
    sortManager.enabledColumnClick = chk_toggle_column_click.checked
}

`})]});f.__docgenInfo={description:"",methods:[],displayName:"Sort"};const j=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"열을 클릭하여 정렬 실행"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("button",{type:"button",id:"btn_sort",className:"button mb--sm",children:"정렬"}),e.jsx("span",{children:"정렬 Column"}),e.jsx("div",{className:"input",style:{display:"inline-block",width:200},children:e.jsx("input",{type:"text",className:"input__native",id:"input_column",defaultValue:"2"})}),e.jsx("span",{children:"시작 Row"}),e.jsx("div",{className:"input",style:{display:"inline-block",width:200},children:e.jsx("input",{type:"number",className:"input__native",id:"input_start_row",defaultValue:"5"})}),e.jsx("span",{children:"종료 Row"}),e.jsx("div",{className:"input",style:{display:"inline-block",width:200},children:e.jsx("input",{type:"number",className:"input__native",id:"input_end_row",defaultValue:"12"})})]}),e.jsx("br",{}),e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

grid.setCell(0, 1, { text :"Number" })
grid.setCell(0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" })
grid.setCell(0, 3, { text: "Text", icon: "type-string" })
grid.setCell(0, 4, { text: "Text", icon: "type-string" })

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 1, (id + 1).toString() )
        grid.setText(id + 1, 2, Math.floor(Math.random() * 10000).toString() )
        grid.setText(id + 1, 3, Math.floor(Math.random() * 10000).toString(16) )
        grid.setText(id + 1, 4, Math.floor(Math.random() * 20).toString() )
    } )

const sortHandler = libGrid.createInferenceSortHandler( { grid } );

btn_sort.onclick = () => {
    const start = parseInt(input_start_row.value, 10);
    const end = parseInt(input_end_row.value, 10);
    const column = parseInt(input_column.value, 10);

    sortHandler.sortColumn(column, "ASC", start, end)
}

`})]});j.__docgenInfo={description:"",methods:[],displayName:"SortRange"};const v=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{children:"API 사용 샘플"}),e.jsx(i,{fixedHeight:500,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("button",{id:"btn_openDialog",className:"button",children:"Dialog 열기"})}),e.jsx("div",{id:"dial_grid",className:"dialog",children:e.jsxs("div",{className:"dialog__wrapper",style:{width:600,height:400},children:[e.jsx("div",{className:"dialog__header",children:"헤더"}),e.jsx("div",{className:"dialog__content",children:e.jsx("div",{id:"grid"})}),e.jsx("div",{className:"dialog__footer",children:e.jsx("button",{id:"btn_closeDialog",className:"button",children:"닫기"})})]})})]}),code:`
import { createPopover } from "./dist/index.js";
import * as libGrid from "./dist/grid.js";

const popoverHandler = createPopover({
    element: document.getElementById("dial_grid"),
    type: "dialog"
});

btn_openDialog.onclick = () => {
    const grid = new libGrid.IRGrid({
        contextElement: document.getElementById("grid")
    });

    popoverHandler.show();
};

btn_closeDialog.onclick = () => {
    popoverHandler.hide();
};


`})]});v.__docgenInfo={description:"",methods:[],displayName:"GridOnDialog"};const G=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx(i,{html:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb--lg",children:e.jsx("button",{id:"btn_check_commands",className:"button",children:"Check commands"})}),e.jsx("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
import * as libGrid from "./dist/grid.js";

const items = [
    { value: "ko", text: "한국어" },
    { value: "en", text: "English" },
    { value: "sp", text: "Spanish" },
    { value: "en2", text: "English 길이를 길게" },
    { value: "en3", text: "English3\\n길게길게\\n3줄" },
    { value: "en4", text: "English4 English4 English4 English4 English4 " },
    { value: "en5", text: "English" },
    { value: "en7", text: "English" },
    { value: "en8", text: "English" },
    { value: "en9", text: "English" },
    { value: "en11", text: "English" }
];

const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const selectRenderer = new libGrid.IRGridSelectCellRenderer({
    items,
    allowClear: true,
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
    allowClear: true,
    mappingType: "value",
    onChange: (row, col) => {
        grid.setCell(row, col, {});
    }
});

const selectRenderer3 = new libGrid.IRGridSelectCellRenderer({
    items,
    allowEdit: true,
});

const selectRenderer4 = new libGrid.IRGridSelectCellRenderer({
    items,
    allowEdit: true,
    mappingType: "value",
    showErrorIfCustomText: true,
});

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 20,
        cellRenderer: (row, col, data) => {

            switch (col) {
                case 3: return selectRenderer;
                case 4: return selectRenderer2;
                case 5: return selectRenderer3;
                case 6: return selectRenderer4;
                default: return defaultRenderer;
            }
        }
    },
    colHeader: {
        rowCount: 1,
        colCount: 12,
        defaultSize: 120
    },
    rowHeader: {
        colCount: 1,
    }
})

// for debugging
window.grid = grid;

grid.setText(1, 3, "English");
grid.setText(1, 4, "en");
grid.setText(2, 4, "ko");
grid.setText(1, 5, "English");

grid.setText(6, 3, "unmatched");
grid.setText(6, 4, "unmatched");
grid.setText(6, 5, "unmatched");
grid.setText(6, 6, "unmatched");

grid.setText(7, 3, "en4");
grid.setText(7, 4, "en4");
grid.setText(7, 5, "en4");
grid.setText(7, 6, "en4");

grid.hook.addHook( "cellEditDoneBeforeRender", (row, col, context) => {
    if (col === 2)
        context.text = "1";
} );

grid.autoSizeColumns(0, 10);

`})]});G.__docgenInfo={description:"",methods:[],displayName:"SelectMapping"};const N=()=>e.jsxs(r,{children:[e.jsx(t,{children:"IRGrid"}),e.jsx("p",{}),e.jsx(i,{html:e.jsxs("div",{children:[e.jsx("button",{id:"remove_btn",className:"button",children:"TablePlugin 제거"}),e.jsxs("div",{className:"flex gap-x--3xl mt--lg",children:[e.jsx("div",{id:"ir_grid",style:{height:500,width:700}}),e.jsx("div",{id:"ir_grid2"})]})]}),code:`
import * as libGrid from "./dist/grid.js";
import { IRContextMenuAdapter } from "./dist/react.js";

const checkRenderer = new libGrid.IRGridCheckboxRenderer({});
const defaultRenderer = new libGrid.IRGridDefaultCellRenderer();
const iconButtonRenderer = new libGrid.IRGridDefaultCellIconButtonRenderer({
    onClick: (ev, row, col) => {
    },
})

function defaultCellRenderer(row, col, data)
{
    switch (col) {
        case 0:
            return checkRenderer;
        case 6:
            return iconButtonRenderer;
        default:
            return defaultRenderer;
    }
}

const rowCount = 50;
const plugins = [
    new libGrid.IRGridTablePlugin({
        onRowClick(grid, row) {console.log(row)},
        freezeLastColumn: true,
    }),
    new libGrid.IRGridResizerPlugin({
            enabledColResizer: true,
            disabledColumns: [0, 6]
    }),
    new libGrid.IRGridPopoverPlugin( {
        memoInterval: 0,
        tooltipInterval: 0,
        hideTooltipWhenHasMemo: true,
    } ),
    new libGrid.IRGridSingleCellDragPlugin()
];

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount,
        cellRenderer: defaultCellRenderer
    },
    colHeader: {
        rowCount: 1,
        colCount: 7,
        minSize: 10,
        cellRenderer: defaultCellRenderer
    },
    rowHeader: {
        colCount: 0,
        defaultSize: 32,
    },
    defaultColumnCellFormat: {
        all: { draggable: true },
        [0]: { disabled: true },
    },
    plugins
})

const menu = new IRContextMenuAdapter( {
    items: [
        {
            id: "edit",
            type: "command-button",
            label: "변경",
            icon: "ir-icon--edit"
        },
        {
            id: "delete",
            type: "command-button",
            label: "삭제",
            icon: "ir-icon--delete"
        },
        {
            id: "pw-edit",
            type: "command-button",
            label: "비밀번호 변경",
            icon: "ir-icon--lock"
        },
    ]
} );

grid.setText(0, 1, "사용자 ID")
grid.setCell(0, 1, {horizontalAlign: "left"})
grid.setText(0, 2, "사용자 이름")
grid.setCell(0, 2, {horizontalAlign: "left"})
grid.setText(0, 3, "계정 시작일")
grid.setText(0, 4, "계정 종료일")
grid.setText(0, 5, "역할")
grid.setCell(0, 5, {horizontalAlign: "left"})


Array.from( { length: rowCount } )
    .forEach( (_, id) => {
        const randId = Math.floor(Math.random() * 10000).toString();
        grid.setCell(id + 1, 1, {text: randId, object: {name: randId}})
        grid.setCell(id + 1, 2, {text: "AAAAAAAAAA", object: {name: "AAAAAAAAAA"}})
        grid.setCell(id + 1, 3, {text: "2024-10-08", object: {name: "2024-10-08"}})
        grid.setCell(id + 1, 4, {text: "9999-12-31", object: {name: "9999-12-31"}})
        grid.setCell(id + 1, 5, {text: "룰 시스템 접속, 전체 기능 실행", object: {name: "룰 시스템 접속, 전체 기능 실행"}})
        grid.setCell(id + 1, 6, { icon: "edit", tooltip: "역할 변경" })
    } )

grid.setColumnWidth(0, 50);
grid.setColumnWidth(6, 50);

remove_btn.onclick = () => {
    grid.removePlugin(plugins[0]);
}

checkRenderer.onCheckboxClick = (row, col, checked) => {
    if ( row === 0 )
    {
        for (let i = 1; i < rowCount; i++) {
            grid.setText(i, 0, checked);
        }
    }
    else
    {
        let allChecked = true;
        for (let i = 1; i < rowCount; i++) {
            if (grid.getText(i, 0) !== "true")
            {
                allChecked = false;
                break;
            }
        }
        grid.setText(0, 0, allChecked);
    }
}

menu.onCommandButtonClick = ( {ev, item} ) => {
    console.log( item )
}

grid.onContextMenu = (ev, cell) => {
    menu.showAtPoint(ev.clientX, ev.clientY);
}


(function() {
    const grid = new libGrid.IRGrid({
        contextElement: ir_grid2,
        colHeader: {
            rowCount: 1,
            colCount: 5,
        },
        rowHeader: { colCount: 1 },
    })

    grid.onDropOnCell = (row, col, ev) => {
        const data = ev.dataTransfer.getData("application/json")
        const json = JSON.parse(data)

        grid.commandManager.doRecording("Drag-Drop", () => {
            grid.setText(row, col, json.name)
            grid.setObject(row, col, json)
        })
    }
})();

`})]});N.__docgenInfo={description:"",methods:[],displayName:"GridTable"};const T={title:"JS Components/IRGrid"},S=["APIDemo","Basic","CellRenderer","BulkData","NoHeader","CellDrag","ColumnFill","GridConfig","ContextMenu","CustomRenderer","DragDrop","Exchange","Finder","Rows2000","HeaderMove","Multiple","OverflowPanel","RowSelection","Sort","SortRange","GridOnDialog","SelectMapping","GridTable"];export{o as APIDemo,l as Basic,d as BulkData,c as CellDrag,n as CellRenderer,a as ColumnFill,u as ContextMenu,m as CustomRenderer,x as DragDrop,h as Exchange,b as Finder,g as GridConfig,v as GridOnDialog,N as GridTable,p as HeaderMove,C as Multiple,s as NoHeader,_ as OverflowPanel,R as RowSelection,w as Rows2000,G as SelectMapping,f as Sort,j as SortRange,S as __namedExportsOrder,T as default};
