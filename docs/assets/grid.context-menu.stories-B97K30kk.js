import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a as d,L as l}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const m={title:"JS Components/Grid"},n=()=>e.jsxs(i,{children:[e.jsx(d,{children:"IRGrid"}),e.jsx(l,{html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"ir_grid",style:{height:500,width:800}})}),code:`
import { IRContextMenuAdapter } from "./dist/react.js";
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 8
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(2, "실행판단식", "조건식")
    }
})

const menu = new IRContextMenuAdapter( {
    items: [
        {
            id: "search-rule",
            type: "command-button",
            label: "룰 찾기",
            icon: "ir-icon--search-rule"
        },
        {
            id: "div1",
            type: "divider",
        },
        {
            id: "rule-dropdown",
            type: "dropdown",
            label: "테이블 조작",
            children: [
                {
                    id: "add-row",
                    type: "command-button",
                    label: "행 추가",
                    icon: "ir-icon--row-add"
                },
            ]
        }
    ]
} );

menu.onCommandButtonClick = ( {ev, item} ) => {
    if (item.id === "add-row")
        grid.addRow();
}

grid.onContextMenu = (ev, cell) => {
    if (cell)
        grid.selectCell(cell.row, cell.col);

    menu.showAtPoint(ev.clientX, ev.clientY);
}

grid.mergeCells(2, 1, 3, 3);

`})]});n.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};var r,o,t;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <LiveEditor html={<>\r
                    <div id="ir_grid" style={{
        height: 500,
        width: 800
      }}></div>\r
                </>} code={/* javascript */\`
import { IRContextMenuAdapter } from "./dist/react.js";
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 5,
    },
    colHeader: {
        rowCount: 2,
        colCount: 8
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(2, "실행판단식", "조건식")
    }
})

const menu = new IRContextMenuAdapter( {
    items: [
        {
            id: "search-rule",
            type: "command-button",
            label: "룰 찾기",
            icon: "ir-icon--search-rule"
        },
        {
            id: "div1",
            type: "divider",
        },
        {
            id: "rule-dropdown",
            type: "dropdown",
            label: "테이블 조작",
            children: [
                {
                    id: "add-row",
                    type: "command-button",
                    label: "행 추가",
                    icon: "ir-icon--row-add"
                },
            ]
        }
    ]
} );

menu.onCommandButtonClick = ( {ev, item} ) => {
    if (item.id === "add-row")
        grid.addRow();
}

grid.onContextMenu = (ev, cell) => {
    if (cell)
        grid.selectCell(cell.row, cell.col);

    menu.showAtPoint(ev.clientX, ev.clientY);
}

grid.mergeCells(2, 1, 3, 3);

\`} />\r
        </Doc>;
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const C=["ContextMenu"];export{n as ContextMenu,C as __namedExportsOrder,m as default};
