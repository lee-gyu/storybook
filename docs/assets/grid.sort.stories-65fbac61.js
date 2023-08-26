import{j as e,a as r,F as d}from"./jsx-runtime-e43ccb36.js";import{D as l,a,L as c}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const h={title:"JS Components/Grid"},t=()=>e(l,{children:[r(a,{children:"IRGrid"}),r("p",{children:"열을 클릭하여 정렬 실행"}),r(c,{html:e(d,{children:[r("button",{type:"button",id:"btn_reset_sort",className:"button mb--sm",children:"정렬 초기화"}),e("label",{children:[r("input",{type:"checkbox",id:"chk_toggle_column_click",defaultChecked:!0}),"열 클릭 활성화"]}),r("br",{}),r("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

grid.setCell(0, 1, { text :"Number" })
grid.setCell(0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" })
grid.setCell(0, 3, { text: "Text", icon: "type-string" })
grid.setCell(0, 4, { text: "Text", icon: "type-string" })

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 1, (id + 1).toString() )
        grid.setText(id + 1, 2, Math.floor(Math.random() * 10000).toString() )
        grid.setText(id + 1, 3, Math.floor(Math.random() * 10000).toString(16) )
        grid.setText(id + 1, 4, Math.floor(Math.random() * 20).toString() )
    } )

const sortManager = libGrid.createIRGridColumnSortManager(grid)

sortManager.setNumberColumns( 1, 2 );
sortManager.overrideColumnClickEvent();

btn_reset_sort.onclick = () => sortManager.clearSortOrder();
chk_toggle_column_click.onchange = () => {
    sortManager.enabledColumnClick = chk_toggle_column_click.checked
}

`})]});var o,i,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 5
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

grid.setCell(0, 1, { text :"Number" })
grid.setCell(0, 2, { text: "Number", icon: "type-number", iconColor: "var(--primary)" })
grid.setCell(0, 3, { text: "Text", icon: "type-string" })
grid.setCell(0, 4, { text: "Text", icon: "type-string" })

Array.from( { length: 24 } )
    .forEach( (_, id) => {
        grid.setText(id + 1, 1, (id + 1).toString() )
        grid.setText(id + 1, 2, Math.floor(Math.random() * 10000).toString() )
        grid.setText(id + 1, 3, Math.floor(Math.random() * 10000).toString(16) )
        grid.setText(id + 1, 4, Math.floor(Math.random() * 20).toString() )
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const b=["Sort"];export{t as Sort,b as __namedExportsOrder,h as default};
//# sourceMappingURL=grid.sort.stories-65fbac61.js.map
