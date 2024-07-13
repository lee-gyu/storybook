import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{D as t,a as d,L as o}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const c={title:"JS Components/Grid"},n=()=>i.jsxs(t,{children:[i.jsx(d,{children:"IRGrid ColumnFill"}),i.jsx("p",{children:"ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)"}),i.jsxs("p",{children:["colHeader의 ",i.jsx("code",{children:"maxSize"}),"를 9999로 설정해야 열 크기 제한 문제가 없습니다."]}),i.jsx(o,{fixedHeight:600,html:i.jsxs(i.Fragment,{children:[i.jsx("button",{id:"btn1",className:"button",children:"visible on/off"}),i.jsxs("div",{className:"split-container flex background--light",children:[i.jsx("div",{id:"split1",children:i.jsx("div",{id:"ir_grid",className:"",style:{height:500,width:"100%",display:"none"}})}),i.jsx("div",{id:"split2"})]})]}),code:`
import { createSplitContainer } from "./dist/index.js";
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

grid.addPlugin(libGrid.ColumnFillPlugin({
    columnWeight: [ "120px", 1, 1, 1, 2 ]
}))

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

createSplitContainer( [
    "#split1",
    "#split2"
], {
} );

`})]});n.__docgenInfo={description:"",methods:[],displayName:"ColumnFill"};var e,r,l;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRGrid ColumnFill</DocTitle>\r
        <p>ColumnFill 플러그인을 등록하여 현재 Context 크기에 맞게 모든 열 크기를 균등 분배합니다. (추후 설정된 너비는 각 너비에 맞게 고루 분배됨)</p>\r
        <p>colHeader의 <code>maxSize</code>를 9999로 설정해야 열 크기 제한 문제가 없습니다.</p>\r
        <LiveEditor fixedHeight={600} html={<>\r
                    <button id="btn1" className='button'>visible on/off</button>\r
                    <div className="split-container flex background--light">\r
                        <div id="split1">\r
                            <div id="ir_grid" className="" style={{
          height: 500,
          width: "100%",
          display: "none"
        }}></div>\r
                        </div>\r
                        <div id="split2"></div>\r
                    </div>\r
                </>} code={\`
import { createSplitContainer } from "./dist/index.js";
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

grid.addPlugin(libGrid.ColumnFillPlugin({
    columnWeight: [ "120px", 1, 1, 1, 2 ]
}))

btn1.onclick = () => {

    if (ir_grid.style.display) {
        ir_grid.style.removeProperty("display");
    } else {
        ir_grid.style.display = "none";
    }
}

createSplitContainer( [
    "#split1",
    "#split2"
], {
} );

\`} />\r
    </Doc>`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const m=["ColumnFill"];export{n as ColumnFill,m as __namedExportsOrder,c as default};
