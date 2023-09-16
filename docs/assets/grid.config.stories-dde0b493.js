import{j as o,a as e,F as t}from"./jsx-runtime-e43ccb36.js";import{D as l,a,L as s}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const R={title:"JS Components/Grid"},r=()=>o(l,{children:[e(a,{children:"IRGrid Configuration"}),e("p",{children:"Grid 내부 패딩을 조절할 수 있습니다."}),e(s,{fixedHeight:600,html:e(t,{children:e("div",{id:"ir_grid",className:"",style:{height:500}})}),code:`
import * as libGrid from "./dist/grid.js";
import { IR_STYLE_CONFIG } from "./dist/index.js";

IR_STYLE_CONFIG.grid.paddingTop = 3;
IR_STYLE_CONFIG.grid.paddingBottom = 4;
IR_STYLE_CONFIG.grid.paddingLeft = 6;
IR_STYLE_CONFIG.grid.paddingRight = 6;
IR_STYLE_CONFIG.grid.defaultRowHeight = 24;

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

`})]});var d,i,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRGrid Configuration</DocTitle>\r
        <p>Grid 내부 패딩을 조절할 수 있습니다.</p>\r
        <LiveEditor fixedHeight={600} html={<>\r
                    <div id="ir_grid" className="" style={{
      height: 500
    }}></div>\r
                </>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";
import { IR_STYLE_CONFIG } from "./dist/index.js";

IR_STYLE_CONFIG.grid.paddingTop = 3;
IR_STYLE_CONFIG.grid.paddingBottom = 4;
IR_STYLE_CONFIG.grid.paddingLeft = 6;
IR_STYLE_CONFIG.grid.paddingRight = 6;
IR_STYLE_CONFIG.grid.defaultRowHeight = 24;

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

\`} />\r
    </Doc>`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const u=["GridConfig"];export{r as GridConfig,u as __namedExportsOrder,R as default};
//# sourceMappingURL=grid.config.stories-dde0b493.js.map
