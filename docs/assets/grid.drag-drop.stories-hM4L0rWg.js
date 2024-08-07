import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as t,a as i,L as u}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const c={title:"JS Components/Grid"},n=()=>e.jsxs(t,{children:[e.jsx(i,{children:"IRGrid"}),e.jsx("p",{children:"좌측 Tree 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다."}),e.jsx(u,{html:e.jsxs("div",{style:{display:"flex",height:500,columnGap:8},children:[e.jsx("div",{id:"tree",style:{width:300}}),e.jsx("div",{id:"ir_grid",style:{height:"100%",width:"100%"}})]}),code:`
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


`})]});n.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};var r,d,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>좌측 Tree 노드를 드래그하여 Grid Cell에 드롭할 수 있습니다.</p>\r
            <LiveEditor html={<div style={{
      display: "flex",
      height: 500,
      columnGap: 8
    }}>\r
                        <div id="tree" style={{
        width: 300
      }}></div>\r
                        <div id="ir_grid" style={{
        height: "100%",
        width: "100%"
      }}></div>\r
                    </div>} code={/* javascript */\`
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


\`} />\r
        </Doc>;
}`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const D=["DragDrop"];export{n as DragDrop,D as __namedExportsOrder,c as default};
