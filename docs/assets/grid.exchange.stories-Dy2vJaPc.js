import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as o,a as l,L as d}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const u={title:"JS Components/Grid"},n=()=>e.jsxs(o,{children:[e.jsx(l,{children:"IRGrid"}),e.jsx("p",{children:"헤더를 드래그하여 셀 내용 교체"}),e.jsx(d,{html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb--lg",style:{alignItems:"center",columnGap:"4px"},children:["source: ",e.jsx("div",{className:"input",style:{display:"inline-block",width:100},children:e.jsx("input",{id:"input_source",className:"input__native"})}),"target: ",e.jsx("div",{className:"input",style:{display:"inline-block",width:100},children:e.jsx("input",{id:"input_target",className:"input__native"})}),e.jsx("button",{type:"button",id:"btn_exchange_row",className:"button",children:"행 교체"}),e.jsx("button",{type:"button",id:"btn_exchange_col",className:"button",children:"열 교체"}),e.jsx("button",{type:"button",id:"btn_on",className:"button ml--xl",children:"Drag On"}),e.jsx("button",{type:"button",id:"btn_off",className:"button",children:"Drag Off"}),e.jsx("button",{type:"button",id:"btn_merge",className:"button ml--xl",children:"셀 병합"}),e.jsx("button",{type:"button",id:"btn_freeze",className:"button",children:"행 고정"}),e.jsx("button",{type:"button",id:"btn_freeze_col",className:"button",children:"열 고정"})]}),e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
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
`})]});n.__docgenInfo={description:"",methods:[],displayName:"Exchange"};var t,i,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>헤더를 드래그하여 셀 내용 교체</p>\r
            <LiveEditor html={<>\r
                        <div className="flex mb--lg" style={{
        alignItems: "center",
        columnGap: "4px"
      }}>\r
                        source: <div className="input" style={{
          display: "inline-block",
          width: 100
        }}>\r
                                <input id="input_source" className="input__native" />\r
                            </div>\r
                        target: <div className="input" style={{
          display: "inline-block",
          width: 100
        }}>\r
                                <input id="input_target" className="input__native" />\r
                            </div>\r
                            <button type='button' id="btn_exchange_row" className='button'>행 교체</button>\r
                            <button type='button' id="btn_exchange_col" className='button'>열 교체</button>\r
                            <button type='button' id="btn_on" className='button ml--xl'>Drag On</button>\r
                            <button type='button' id="btn_off" className='button'>Drag Off</button>\r
                            <button type='button' id="btn_merge" className='button ml--xl'>셀 병합</button>\r
                            <button type='button' id="btn_freeze" className='button'>행 고정</button>\r
                            <button type='button' id="btn_freeze_col" className='button'>열 고정</button>\r
                        </div>\r
                        <div id="ir_grid" style={{
        height: 500,
        width: 800
      }}></div>\r
                    </>} code={/* javascript */\`
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
\`} />\r
        </Doc>;
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const b=["Exchange"];export{n as Exchange,b as __namedExportsOrder,u as default};
