import{j as o,a as e,F as n}from"./jsx-runtime-CjohWU4o.js";import{D as l,a,L as s}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const C={title:"JS Components/Grid"},r=()=>o(l,{children:[e(a,{children:"IRGrid Configuration"}),e("p",{children:"Grid 내부 패딩을 조절할 수 있습니다."}),e(s,{fixedHeight:600,html:e(n,{children:e("div",{id:"ir_grid",className:"",style:{height:500}})}),code:`
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

`})]});var t,d,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRGrid Configuration</DocTitle>\r
        <p>Grid 내부 패딩을 조절할 수 있습니다.</p>\r
        <LiveEditor fixedHeight={600} html={<>\r
                    <div id="ir_grid" className="" style={{
      height: 500
    }}></div>\r
                </>} code={/* javascript */\`
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

\`} />\r
    </Doc>`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const p=["GridConfig"];export{r as GridConfig,p as __namedExportsOrder,C as default};
