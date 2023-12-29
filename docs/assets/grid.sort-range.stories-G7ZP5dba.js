import{j as e,a as n,F as d}from"./jsx-runtime-KzWSGvcx.js";import{D as a,a as l,L as s}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const g={title:"JS Components/Grid"},t=()=>e(a,{children:[n(l,{children:"IRGrid"}),n("p",{children:"열을 클릭하여 정렬 실행"}),n(s,{html:e(d,{children:[e("div",{children:[n("button",{type:"button",id:"btn_sort",className:"button mb--sm",children:"정렬"}),n("span",{children:"정렬 Column"}),n("div",{className:"input",style:{display:"inline-block",width:200},children:n("input",{type:"text",className:"input__native",id:"input_column",defaultValue:"2"})}),n("span",{children:"시작 Row"}),n("div",{className:"input",style:{display:"inline-block",width:200},children:n("input",{type:"number",className:"input__native",id:"input_start_row",defaultValue:"5"})}),n("span",{children:"종료 Row"}),n("div",{className:"input",style:{display:"inline-block",width:200},children:n("input",{type:"number",className:"input__native",id:"input_end_row",defaultValue:"12"})})]}),n("br",{}),n("div",{id:"ir_grid",style:{height:500,width:800}})]}),code:`
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

const sortHandler = libGrid.createInferenceSortHandler( { grid } );

btn_sort.onclick = () => {
    const start = parseInt(input_start_row.value, 10);
    const end = parseInt(input_end_row.value, 10);
    const column = parseInt(input_column.value, 10);

    sortHandler.sortColumn(column, "ASC", start, end)
}

`})]});var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <p>열을 클릭하여 정렬 실행</p>\r
            <LiveEditor html={<>\r
                        <div>\r
                            <button type='button' id="btn_sort" className='button mb--sm'>정렬</button>\r
                            <span>정렬 Column</span>\r
                            <div className="input" style={{
          display: "inline-block",
          width: 200
        }}>\r
                                <input type="text" className="input__native" id="input_column" defaultValue="2" />\r
                            </div>\r
                            <span>시작 Row</span>\r
                            <div className="input" style={{
          display: "inline-block",
          width: 200
        }}>\r
                                <input type="number" className="input__native" id="input_start_row" defaultValue="5" />\r
                            </div>\r
                            <span>종료 Row</span>\r
                            <div className="input" style={{
          display: "inline-block",
          width: 200
        }}>\r
                                <input type="number" className="input__native" id="input_end_row" defaultValue="12" />\r
                            </div>\r
                        </div>\r
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

const sortHandler = libGrid.createInferenceSortHandler( { grid } );

btn_sort.onclick = () => {
    const start = parseInt(input_start_row.value, 10);
    const end = parseInt(input_end_row.value, 10);
    const column = parseInt(input_column.value, 10);

    sortHandler.sortColumn(column, "ASC", start, end)
}

\`} />\r
        </Doc>;
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const _=["SortRange"];export{t as SortRange,_ as __namedExportsOrder,g as default};
