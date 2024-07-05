import{j as e,a as n,F as c}from"./jsx-runtime-CjohWU4o.js";import{D as l,a as d,L as s}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const _={title:"JS Components/Grid"},t=()=>e(l,{children:[n(d,{children:"IRGrid"}),n("p",{children:"API 사용 샘플"}),n(s,{fixedHeight:700,html:e(c,{children:[e("div",{className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[n("button",{className:"button",id:"btn_add_row",children:"add row"}),n("button",{className:"button",id:"btn_add_col",children:"add col"}),n("button",{className:"button",id:"btn_insert_row",children:"insert row"}),n("button",{className:"button",id:"btn_insert_col",children:"insert col"}),n("button",{className:"button",id:"btn_remove_row",children:"remove row"}),n("button",{className:"button",id:"btn_remove_col",children:"remove col"}),n("button",{className:"button",id:"btn_auto_height",children:"auto height"}),n("button",{className:"button",id:"btn_auto_width",children:"auto width"}),n("button",{className:"button",id:"btn_clear_rows",children:"clear"}),n("button",{className:"button",id:"btn_merge",children:"merge selection"}),n("button",{className:"button",id:"btn_split",children:"split"}),n("button",{className:"button",id:"btn_reset",children:"re-create"}),n("button",{className:"button",id:"btn_hide_rows",children:"hide rows"}),n("button",{className:"button",id:"btn_show_rows",children:"show rows"}),n("button",{className:"button",id:"btn_hide_columns",children:"hide columns"}),n("button",{className:"button",id:"btn_check_commands",children:"show commands"}),n("button",{className:"button",id:"btn_col_span_disabled",children:"copy options"}),n("button",{className:"button",id:"btn_copy",children:"copy"}),n("button",{className:"button",id:"btn_paste",children:"paste"}),n("button",{className:"button",id:"btn_task",children:"Do Task"}),n("button",{className:"button",id:"btn_freeze_rows",children:"행 고정"}),n("button",{className:"button",id:"btn_freeze_cols",children:"열 고정"}),e("div",{className:"flex align-items--center gap--md",children:[e("label",{children:[n("input",{type:"checkbox",defaultChecked:!0,id:"chk_rowSpan"}),n("span",{children:"copyOptions.rowSpan"})]}),e("label",{children:[n("input",{type:"checkbox",defaultChecked:!0,id:"chk_colSpan"}),n("span",{children:"copyOptions.colSpan"})]})]})]}),n("div",{id:"ir_grid",style:{height:500,width:1300}})]}),code:`
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

`})]});var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>API 사용 샘플</p>\r
            <LiveEditor fixedHeight={700} html={<>\r
                        <div className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_add_row'>add row</button>\r
                            <button className='button' id='btn_add_col'>add col</button>\r
                            <button className='button' id='btn_insert_row'>insert row</button>\r
                            <button className='button' id='btn_insert_col'>insert col</button>\r
                            <button className='button' id='btn_remove_row'>remove row</button>\r
                            <button className='button' id='btn_remove_col'>remove col</button>\r
                            <button className='button' id='btn_auto_height'>auto height</button>\r
                            <button className='button' id='btn_auto_width'>auto width</button>\r
                            <button className='button' id='btn_clear_rows'>clear</button>\r
                            <button className='button' id='btn_merge'>merge selection</button>\r
                            <button className='button' id='btn_split'>split</button>\r
                            <button className='button' id='btn_reset'>re-create</button>\r
                            <button className='button' id='btn_hide_rows'>hide rows</button>\r
                            <button className='button' id='btn_show_rows'>show rows</button>\r
                            <button className='button' id='btn_hide_columns'>hide columns</button>\r
                            <button className='button' id='btn_check_commands'>show commands</button>\r
                            <button className='button' id='btn_col_span_disabled'>copy options</button>\r
                            <button className='button' id='btn_copy'>copy</button>\r
                            <button className='button' id='btn_paste'>paste</button>\r
                            <button className='button' id='btn_task'>Do Task</button>\r
                            <button className='button' id='btn_freeze_rows'>행 고정</button>\r
                            <button className='button' id='btn_freeze_cols'>열 고정</button>\r
                            <div className="flex align-items--center gap--md">\r
                                <label>\r
                                    <input type="checkbox" defaultChecked id="chk_rowSpan" />\r
                                    <span>copyOptions.rowSpan</span>\r
                                </label>\r
                                <label>\r
                                    <input type="checkbox" defaultChecked id="chk_colSpan" />\r
                                    <span>copyOptions.colSpan</span>\r
                                </label>\r
                            </div>\r
                        </div>\r
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

        grid.setText(row, 2, "ABC\\\\nBCD")
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

\`} />\r
        </Doc>;
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const w=["APIDemo"];export{t as APIDemo,w as __namedExportsOrder,_ as default};
