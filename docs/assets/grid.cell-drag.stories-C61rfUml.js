import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as d,a as t,L as a}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const C={title:"JS Components/Grid"},r=()=>e.jsxs(d,{children:[e.jsx(t,{children:"IRGrid"}),e.jsxs("p",{children:[e.jsx("code",{children:"SingleCellDragPlugin"}),"을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다."]}),e.jsxs("p",{children:["셀의 ",e.jsx("code",{children:"draggable"})," 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다."]}),e.jsx(a,{html:e.jsxs("div",{style:{display:"flex",flexDirection:"row",height:500,columnGap:8},children:[e.jsx("div",{id:"ir_grid1",style:{flex:1}}),e.jsx("div",{id:"ir_grid2",style:{flex:1}})]}),code:`
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

        grid.setText(row, col, json.name)
        grid.setObject(row, col, json)
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

`})]});r.__docgenInfo={description:"",methods:[],displayName:"CellDrag"};var n,l,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p><code>SingleCellDragPlugin</code>을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다.</p>\r
            <p>셀의 <code>draggable</code> 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다.</p>\r
            <LiveEditor html={<div style={{
      display: "flex",
      flexDirection: "row",
      height: 500,
      columnGap: 8
    }}>\r
                        <div id="ir_grid1" style={{
        flex: 1
      }}></div>\r
                        <div id="ir_grid2" style={{
        flex: 1
      }}></div>\r
                    </div>} code={/* javascript */\`
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

        grid.setText(row, col, json.name)
        grid.setObject(row, col, json)
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

\`} />\r
        </Doc>;
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const s=["CellDrag"];export{r as CellDrag,s as __namedExportsOrder,C as default};
