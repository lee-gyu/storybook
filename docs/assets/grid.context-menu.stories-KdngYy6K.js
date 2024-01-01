import{j as t,a as n,F as d}from"./jsx-runtime-KzWSGvcx.js";import{D as l,a as c,L as a}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const p={title:"JS Components/Grid"},e=()=>t(l,{children:[n(c,{children:"IRGrid"}),n(a,{html:n(d,{children:n("div",{id:"ir_grid",style:{height:500,width:800}})}),code:`
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

`})]});var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const w=["ContextMenu"];export{e as ContextMenu,w as __namedExportsOrder,p as default};
