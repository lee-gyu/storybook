import{j as t,a as n,F as d}from"./jsx-runtime-CjohWU4o.js";import{D as s,a as l,L as a}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const m={title:"JS Components/Grid"},r=()=>t(s,{children:[n(l,{children:"IRGrid"}),n(a,{html:t(d,{children:[t("div",{className:"mb--sm",children:[n("button",{id:"btn_bulk",className:"button",children:"Append Bulk Data (Slow)"}),n("button",{id:"btn_bulk2",className:"button",children:"Append Bulk Data (Improved)"}),n("button",{id:"btn_clear",className:"button",children:"Clear"})]}),n("div",{id:"ir_grid",style:{height:500,width:"100%"}})]}),code:`
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

`})]});var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <LiveEditor html={<>\r
                        <div className="mb--sm">\r
                            <button id="btn_bulk" className="button">Append Bulk Data (Slow)</button>\r
                            <button id="btn_bulk2" className="button">Append Bulk Data (Improved)</button>\r
                            <button id="btn_clear" className="button">Clear</button>\r
                        </div>\r
                        <div id="ir_grid" style={{
        height: 500,
        width: "100%"
      }}></div>\r
                    </>} code={/* javascript */\`
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

\`} />\r
        </Doc>;
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const f=["BulkData"];export{r as BulkData,f as __namedExportsOrder,m as default};
