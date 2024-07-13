import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{D as t,a as o,L as s}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const g={title:"JS Components/Grid"},r=()=>i.jsxs(t,{children:[i.jsx(o,{children:"IRGrid"}),i.jsx(s,{html:i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
                    .grid-wrapper {
                        height: 600px;
                        display: grid;
                        gap: 8px;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                    }

                    .ir_grid:focus {
                        outline: 1px solid red;
                    }
                    `}),i.jsxs("div",{className:"grid-wrapper",children:[i.jsx("div",{id:"ir_grid1"}),i.jsx("div",{id:"ir_grid2"}),i.jsx("div",{id:"ir_grid3"}),i.jsx("div",{id:"ir_grid4"})]})]}),code:`
import * as libGrid from "./dist/grid.js";

const gridList = [];

for (let i = 1; i <= 4; i++) {
    gridList.push(
        new libGrid.IRGrid({
            contextElement: document.getElementById( "ir_grid" + i ),
            body: {
                rowCount: 5,
            },
            colHeader: {
                rowCount: 1,
                colCount: 6
            },
        })
    );
}

window.__GRID_LIST = gridList;

`})]});r.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var d,n,e;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid</DocTitle>\r
            <LiveEditor html={<>\r
                    <style>{\`
                    .grid-wrapper {
                        height: 600px;
                        display: grid;
                        gap: 8px;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                    }

                    .ir_grid:focus {
                        outline: 1px solid red;
                    }
                    \`}</style>\r
                    <div className="grid-wrapper">\r
                        <div id="ir_grid1"></div>\r
                        <div id="ir_grid2"></div>\r
                        <div id="ir_grid3"></div>\r
                        <div id="ir_grid4"></div>\r
                    </div>\r
                </>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const gridList = [];

for (let i = 1; i <= 4; i++) {
    gridList.push(
        new libGrid.IRGrid({
            contextElement: document.getElementById( "ir_grid" + i ),
            body: {
                rowCount: 5,
            },
            colHeader: {
                rowCount: 1,
                colCount: 6
            },
        })
    );
}

window.__GRID_LIST = gridList;

\`} />\r
        </Doc>;
}`,...(e=(n=r.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const m=["Multiple"];export{r as Multiple,m as __namedExportsOrder,g as default};
