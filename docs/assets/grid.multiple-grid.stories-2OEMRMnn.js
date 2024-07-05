import{j as d,a as i,F as o}from"./jsx-runtime-CjohWU4o.js";import{D as s,a as l,L as a}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const _={title:"JS Components/Grid"},r=()=>d(s,{children:[i(l,{children:"IRGrid"}),i(a,{html:d(o,{children:[i("style",{children:`
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
                    `}),d("div",{className:"grid-wrapper",children:[i("div",{id:"ir_grid1"}),i("div",{id:"ir_grid2"}),i("div",{id:"ir_grid3"}),i("div",{id:"ir_grid4"})]})]}),code:`
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

`})]});var n,e,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(t=(e=r.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const v=["Multiple"];export{r as Multiple,v as __namedExportsOrder,_ as default};
