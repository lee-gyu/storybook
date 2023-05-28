import{j as e,a as i,F as l}from"./jsx-runtime-d057ca55.js";import{D as t,a as s,L as a}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const C={title:"JS Components/Grid"},n=()=>e(t,{children:[i(s,{children:"IRGrid ColumnFill"}),i("p",{children:"ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)"}),e("p",{children:["colHeader의 ",i("code",{children:"maxSize"}),"를 9999로 설정해야 열 크기 제한 문제가 없습니다."]}),i(a,{fixedHeight:600,html:e(l,{children:[i("button",{id:"btn1",className:"button",children:"visible on/off"}),i("div",{id:"ir_grid",className:"",style:{height:500,width:"100%",display:"none"}})]}),code:`
import * as libGrid from "./dist/grid.js";

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

grid.addPlugin(libGrid.ColumnFillPlugin())

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

`})]});var r,o,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRGrid ColumnFill</DocTitle>\r
        <p>ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)</p>\r
        <p>colHeader의 <code>maxSize</code>를 9999로 설정해야 열 크기 제한 문제가 없습니다.</p>\r
        <LiveEditor fixedHeight={600} html={<>\r
                    <button id="btn1" className='button'>visible on/off</button>\r
                    <div id="ir_grid" className="" style={{
      height: 500,
      width: "100%",
      display: "none"
    }}></div>\r
                </>} code={\`
import * as libGrid from "./dist/grid.js";

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

grid.addPlugin(libGrid.ColumnFillPlugin())

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

\`} />\r
    </Doc>`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const p=["ColumnFill"];export{n as ColumnFill,p as __namedExportsOrder,C as default};
//# sourceMappingURL=grid.column-fill.stories-8f48fa86.js.map
