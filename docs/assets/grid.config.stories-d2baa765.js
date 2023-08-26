import{j as o,a as i,F as t}from"./jsx-runtime-e43ccb36.js";import{D as s,a as l,L as g}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const C={title:"JS Components/Grid"},r=()=>o(s,{children:[i(l,{children:"IRGrid Configuration"}),i("p",{children:"Grid 내부 패딩을 조절할 수 있습니다."}),i(g,{fixedHeight:600,html:i(t,{children:i("div",{id:"ir_grid",className:"",style:{height:500}})}),code:`
import * as libGrid from "./dist/grid.js";
import { IR_STYLE_CONFIG } from "./dist/index.js";

IR_STYLE_CONFIG.grid.paddingTop = 3;
IR_STYLE_CONFIG.grid.paddingBottom = 4;
IR_STYLE_CONFIG.grid.paddingLeft = 6;
IR_STYLE_CONFIG.grid.paddingRight = 6;
IR_STYLE_CONFIG.grid.defaultRowHeight = 24;

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

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

`})]});var d,n,e;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRGrid Configuration</DocTitle>\r
        <p>Grid 내부 패딩을 조절할 수 있습니다.</p>\r
        <LiveEditor fixedHeight={600} html={<>\r
                    <div id="ir_grid" className="" style={{
      height: 500
    }}></div>\r
                </>} code={\`
import * as libGrid from "./dist/grid.js";
import { IR_STYLE_CONFIG } from "./dist/index.js";

IR_STYLE_CONFIG.grid.paddingTop = 3;
IR_STYLE_CONFIG.grid.paddingBottom = 4;
IR_STYLE_CONFIG.grid.paddingLeft = 6;
IR_STYLE_CONFIG.grid.paddingRight = 6;
IR_STYLE_CONFIG.grid.defaultRowHeight = 24;

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

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

\`} />\r
    </Doc>`,...(e=(n=r.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const p=["GridConfig"];export{r as GridConfig,p as __namedExportsOrder,C as default};
//# sourceMappingURL=grid.config.stories-d2baa765.js.map
