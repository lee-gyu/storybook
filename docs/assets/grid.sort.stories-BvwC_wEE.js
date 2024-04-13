import{j as t,a as e,F as l}from"./jsx-runtime-CjohWU4o.js";import{D as d,a as c,L as a}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const b={title:"JS Components/Grid"},r=()=>t(d,{children:[e(c,{children:"IRGrid"}),e("p",{children:"열을 클릭하여 정렬 실행"}),e(a,{html:t(l,{children:[e("button",{type:"button",id:"btn_reset_sort",className:"button mb--sm",children:"정렬 초기화"}),t("label",{children:[e("input",{type:"checkbox",id:"chk_toggle_column_click",defaultChecked:!0}),"열 클릭 활성화"]}),e("br",{}),e("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
import * as libGrid from "./dist/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const radioCellRenderer = new libGrid.IRGridRadioCellRenderer( {} );
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
        cellRenderer: (row, col) => {
            if (col === 5) return radioCellRenderer;
            if (col === 6) return checkboxCellRenderer;

            return defaultCellRenderer;
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 7
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

// 디버깅용 전역 변수화
window.grid = grid;

grid.setCell(0, 1, { text :"Number" })
grid.setCell(0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" })
grid.setCell(0, 3, { text: "Text", icon: "type-string" })
grid.setCell(0, 4, { text: "Text", icon: "type-string" })
grid.setCell(0, 5, { text: "Radio" })
grid.setCell(0, 6, { text: "체크박스" })

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 1, (id + 1).toString() )
        grid.setText(id + 1, 2, Math.floor(Math.random() * 10000).toString() )
        grid.setText(id + 1, 3, Math.floor(Math.random() * 10000).toString(16) )
        grid.setText(id + 1, 4, Math.floor(Math.random() * 20).toString() )
        grid.setCell(id + 1, 5, { label :"Radio" } )
        grid.setCell(id + 1, 6, { label :"Check" } )
    } )

const sortManager = libGrid.createIRGridColumnSortManager(grid)

sortManager.setNumberColumns( 1, 2 );
sortManager.overrideColumnClickEvent();

btn_reset_sort.onclick = () => sortManager.clearSortOrder();
chk_toggle_column_click.onchange = () => {
    sortManager.enabledColumnClick = chk_toggle_column_click.checked
}

`})]});var n,o,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>열을 클릭하여 정렬 실행</p>\r
            <LiveEditor html={<>\r
                        <button type='button' id="btn_reset_sort" className='button mb--sm'>정렬 초기화</button>\r
                        <label>\r
                            <input type='checkbox' id="chk_toggle_column_click" defaultChecked />열 클릭 활성화\r
                        </label>\r
                        <br />\r
                        <div id="ir_grid" style={{
        height: 500,
        width: 800
      }}></div>\r
                    </>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const defaultCellRenderer = new libGrid.IRGridDefaultCellRenderer();
const radioCellRenderer = new libGrid.IRGridRadioCellRenderer( {} );
const checkboxCellRenderer = new libGrid.IRGridCheckboxRenderer( {} );

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
        cellRenderer: (row, col) => {
            if (col === 5) return radioCellRenderer;
            if (col === 6) return checkboxCellRenderer;

            return defaultCellRenderer;
        },
    },
    colHeader: {
        rowCount: 1,
        colCount: 7
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

// 디버깅용 전역 변수화
window.grid = grid;

grid.setCell(0, 1, { text :"Number" })
grid.setCell(0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" })
grid.setCell(0, 3, { text: "Text", icon: "type-string" })
grid.setCell(0, 4, { text: "Text", icon: "type-string" })
grid.setCell(0, 5, { text: "Radio" })
grid.setCell(0, 6, { text: "체크박스" })

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 1, (id + 1).toString() )
        grid.setText(id + 1, 2, Math.floor(Math.random() * 10000).toString() )
        grid.setText(id + 1, 3, Math.floor(Math.random() * 10000).toString(16) )
        grid.setText(id + 1, 4, Math.floor(Math.random() * 20).toString() )
        grid.setCell(id + 1, 5, { label :"Radio" } )
        grid.setCell(id + 1, 6, { label :"Check" } )
    } )

const sortManager = libGrid.createIRGridColumnSortManager(grid)

sortManager.setNumberColumns( 1, 2 );
sortManager.overrideColumnClickEvent();

btn_reset_sort.onclick = () => sortManager.clearSortOrder();
chk_toggle_column_click.onchange = () => {
    sortManager.enabledColumnClick = chk_toggle_column_click.checked
}

\`} />\r
        </Doc>;
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["Sort"];export{r as Sort,h as __namedExportsOrder,b as default};
