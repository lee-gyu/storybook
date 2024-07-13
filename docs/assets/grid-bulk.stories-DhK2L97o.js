import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{D as e,a as l,L as s}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const b={title:"JS Components/Grid"},t=()=>n.jsxs(e,{children:[n.jsx(l,{children:"IRGrid"}),n.jsx(s,{html:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb--sm",children:[n.jsx("button",{id:"btn_bulk",className:"button",children:"Append Bulk Data (Slow)"}),n.jsx("button",{id:"btn_bulk2",className:"button",children:"Append Bulk Data (Improved)"}),n.jsx("button",{id:"btn_clear",className:"button",children:"Clear"}),n.jsx("button",{id:"btn_hide",className:"button",children:"all hide"}),n.jsx("button",{id:"btn_visible",className:"button",children:"all visible"})]}),n.jsx("div",{id:"ir_grid",style:{height:500,width:"100%"}})]}),code:`
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"BulkData"};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <LiveEditor html={<>\r
                        <div className="mb--sm">\r
                            <button id="btn_bulk" className="button">Append Bulk Data (Slow)</button>\r
                            <button id="btn_bulk2" className="button">Append Bulk Data (Improved)</button>\r
                            <button id="btn_clear" className="button">Clear</button>\r
                            <button id="btn_hide" className="button">all hide</button>\r
                            <button id="btn_visible" className="button">all visible</button>\r
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

btn_hide.onclick = () => {
    grid.setRowVisibleBulk(1, Array( grid.getRowCount() - 1 ).fill(false));
}

btn_visible.onclick = () => {
    grid.setRowVisibleBulk(1, Array( grid.getRowCount() - 1 ).fill(true));
}

\`} />\r
        </Doc>;
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["BulkData"];export{t as BulkData,g as __namedExportsOrder,b as default};
