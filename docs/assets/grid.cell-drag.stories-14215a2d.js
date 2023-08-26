import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{D as t,a,L as i}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const w={title:"JS Components/Grid"},n=()=>r(t,{children:[e(a,{children:"IRGrid"}),r("p",{children:[e("code",{children:"SingleCellDragPlugin"}),"을 이용하여 단일 셀 Drag 기능을 활성화 할 수 있습니다. 단, MouseCellSelectorPlugin과는 같이 사용할 수 없습니다."]}),r("p",{children:["셀의 ",e("code",{children:"draggable"})," 속성이 true로 지정된 셀에서 drag가 시작될 수 있으며, 기본 기능은 cell의 object 개체가 필요합니다."]}),e(i,{html:r("div",{style:{display:"flex",flexDirection:"row",height:500,columnGap:8},children:[e("div",{id:"ir_grid1",style:{flex:1}}),e("div",{id:"ir_grid2",style:{flex:1}})]}),code:`
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

`})]});var l,o,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const C=["CellDrag"];export{n as CellDrag,C as __namedExportsOrder,w as default};
//# sourceMappingURL=grid.cell-drag.stories-14215a2d.js.map
