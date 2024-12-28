import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as t,a as s,V as o,L as n}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const r=Array.from({length:20}).map((l,i)=>e.jsxs("p",{children:["Panel ",i]},i)),d=e.jsx(e.Fragment,{children:Array.from({length:100}).map((l,i)=>e.jsxs("span",{children:["Panel ",i]},i))}),c=()=>e.jsxs(t,{children:[e.jsx(s,{children:"IRSplitContainer"}),e.jsx(o,{children:"ir-style@^2.16.0"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),e.jsxs("p",{children:["※ 구버전은 ",e.jsx("code",{children:"createSplitContainer"})," 함수 사용"]}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsxs("div",{style:{height:"100%"},children:[e.jsx("div",{id:"split-0",children:"panel 1"}),e.jsx("div",{id:"split-1",children:"panel 2"}),e.jsxs("div",{id:"split-2",children:[e.jsx("div",{id:"split-3",children:"panel 3"}),e.jsxs("div",{id:"split-4",children:[e.jsx("div",{id:"split-5",children:r}),e.jsx("div",{id:"split-6",children:d})]})]})]})}),code:`
import { IRSplitContainer } from "./dist/index.js";

new IRSplitContainer( {
    elements: ['#split-0', '#split-1', '#split-2']
})

new IRSplitContainer({
    elements: ['#split-3', '#split-4'],
    options: {
        direction:"vertical",
        borderColor: "border-light",
        gutterCls: "thin"
    }
})

new IRSplitContainer({
    elements: ['#split-5', '#split-6'],
    options: { borderColor: "border-light" }
})
`})]}),p=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Size 설정"}),e.jsxs("p",{children:[e.jsx("code",{children:"sizes"}),"를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,",e.jsx("br",{}),e.jsx("code",{children:"minSize(default: 100px), maxSize"}),"의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.",e.jsx("br",{}),e.jsx("code",{children:"Infinity"}),"는 ",e.jsx("code",{children:"minSize"}),"에서 사용 시 설정된 패널 초기 크기로 지정되고, ",e.jsx("code",{children:"maxSize"}),"에서 사용 시 무한으로 늘어날 수 있습니다."]}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs("div",{style:{height:"100%"},children:[e.jsx("div",{id:"split-0",children:r}),e.jsx("div",{id:"split-1",children:d})]}),code:`
import { IRSplitContainer } from "./dist/index.js";

new IRSplitContainer({
    elements: ['#split-0', '#split-1'],
    options: {
        sizes: [20, 80],
        minSize: 150,
        maxSize: [700, Infinity]
    }
})
`})]}),a=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onDrag"})," 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:"onDragStart"})," 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:"onDragEnd"})," 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다. "]}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs("div",{style:{height:"100%"},children:[e.jsx("div",{id:"split-0",children:r}),e.jsx("div",{id:"split-1",children:d})]}),code:`
import { IRSplitContainer } from "./dist/index.js";

new IRSplitContainer({
    elements: ['#split-0', '#split-1'],
    options: {
        onDrag: (sizes) => console.log(sizes),
        onDragStart: (sizes) => console.log("start : ", sizes),
        onDragEnd: (sizes) => console.log("end : ", sizes),
    }
})
`})]}),x=()=>e.jsxs(t,{children:[e.jsx(s,{children:"API"}),e.jsxs("p",{children:[e.jsx("code",{children:"setSizes([25, 75])"})," 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.",e.jsx("br",{}),e.jsx("code",{children:"getSizes"})," resize된 백분율 배열을 반환합니다.",e.jsx("br",{}),e.jsx("code",{children:"collapse(index)"})," 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)",e.jsx("br",{}),e.jsx("code",{children:"destroy(preserveStyles? = false, preserveGutters? = false)"})," split을 제거합니다. (preserveStyle: CSS 제거 여부, preserveGutters: gutter 제거 여부)"]}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ir-flex ir-gap-x-xxs ir-p-xs",style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("button",{id:"btn1",className:"button",children:"Get Size"}),e.jsx("button",{id:"btn2",className:"button",children:"Collapse"}),e.jsx("button",{id:"btn3",className:"button",children:"Destroy"})]}),e.jsxs("div",{style:{height:"100%"},children:[e.jsx("div",{id:"split-0",children:r}),e.jsx("div",{id:"split-1",children:d})]})]}),code:`
import { IRSplitContainer } from "./dist/index.js";

const split = new IRSplitContainer( { elements: ['#split-0', '#split-1']});

btn1.onclick = () => alert(split.getSizes());
btn2.onclick = () => split.collapse(0);
btn3.onclick = () => split.destroy(false);

split.setSizes([25, 75]);
                `})]});c.__docgenInfo={description:"",methods:[],displayName:"Basic"};p.__docgenInfo={description:"",methods:[],displayName:"Size"};a.__docgenInfo={description:"",methods:[],displayName:"Event"};x.__docgenInfo={description:"",methods:[],displayName:"API"};const h=Array.from({length:20}).map((l,i)=>e.jsxs("p",{children:["Panel ",i]},i)),j=e.jsx(e.Fragment,{children:Array.from({length:100}).map((l,i)=>e.jsxs("span",{children:["Panel ",i]},i))}),m=()=>e.jsxs(t,{children:[e.jsx(s,{children:"IRSplitContainer"}),e.jsx("p",{children:"thin 스타일을 적용하여 얇은 영역 나누기가 가능합니다."}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:400,html:e.jsx(e.Fragment,{children:e.jsxs("div",{style:{height:"100%"},children:[e.jsx("div",{id:"split-0",children:"panel 1"}),e.jsx("div",{id:"split-1",children:"panel 2"}),e.jsxs("div",{id:"split-2",children:[e.jsx("div",{id:"split-3",children:"panel 3"}),e.jsxs("div",{id:"split-4",children:[e.jsx("div",{id:"split-5",children:h}),e.jsx("div",{id:"split-6",children:j})]})]})]})}),code:`
import { IRSplitContainer } from "./dist/index.js";

new IRSplitContainer({
    elements: ['#split-0', '#split-1', '#split-2'],
    options: { gutterCls: "thin" }
})

new IRSplitContainer({
    elements: ['#split-3', '#split-4'],
    options: {
        direction: "vertical",
        gutterCls: "thin"
    }
})

new IRSplitContainer({
    elements: ['#split-5', '#split-6'],
    options: { gutterCls: "thin" }
})
`})]});m.__docgenInfo={description:"",methods:[],displayName:"thinStyle"};const g=Array.from({length:20}).map((l,i)=>e.jsxs("p",{children:["Panel ",i]},i)),v=e.jsx(e.Fragment,{children:Array.from({length:100}).map((l,i)=>e.jsxs("span",{children:["Panel ",i]},i))}),S=()=>e.jsxs(t,{children:[e.jsx(s,{children:"GutterClickAction"}),e.jsx(o,{children:"ir-style@^2.14.0"}),e.jsx("p",{children:"gutterClickAction: `toggleVisible` 옵션을 사용하면 첫번째 Gutter를 클릭할 때마다 좌측 패널이 자동으로 접히거나 펼쳐진다."}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}
`,fixedHeight:500,html:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("button",{id:"btnToggle",className:"button",children:"toggle visible"})}),e.jsxs("div",{id:"container",className:"border-t--px border-b--px",style:{height:"400px"},children:[e.jsxs("div",{id:"split-0",children:[e.jsx("div",{id:"split-01"}),e.jsx("div",{id:"split-02"})]}),e.jsx("div",{id:"split-1",children:e.jsx("div",{id:"tree-view"})}),e.jsx("div",{id:"split-1-1",children:"panel 2"}),e.jsxs("div",{id:"split-2",children:[e.jsx("div",{id:"split-3",children:e.jsx("div",{id:"grid"})}),e.jsxs("div",{id:"split-4",children:[e.jsx("div",{id:"split-5",children:g}),e.jsx("div",{id:"split-6",children:v})]})]})]})]}),code:`
import { IRGrid, IRGridRowNoHeaderCellRenderer, IRGridDefaultCellRenderer } from "./dist/grid.js";
import { IRSplitContainer, IRTreeView } from "./dist/index.js";

btnToggle.onclick = () => container.style.display = container.style.display === "none" ? "" : "none";

function createIRGrid()
{
    const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );
    const defaultRenderer = new IRGridDefaultCellRenderer();

    const grid = new IRGrid( {
        contextElement: document.getElementById( "grid" ),
        body: {
            rowCount: 10,
        },
        colHeader: {
            rowCount: 1,
            colCount: 5,
            cellRenderer: ( row, col, data ) =>
            {
                if( col > 0 )
                    data.text = col.toString();

                return defaultRenderer;
            },
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: ( row, col, data ) => col === 0 ? rowNoRenderer : defaultRenderer,
        },
    } );

    return grid;
}

function createIRTreeView()
{
    const tree = new IRTreeView( {
        multiSelect: true,
        showIcon: true,
        showCheckbox: true,
        defaultIcon: "ir-icon--folder-fill",
        defaultIconColor: "var(--blue)",
        displayHeader: true,
        headerRow: {
            columnCount: 4,
            text: ["헤더", "폴더", "룰(메인)"],
            width: ["*", "48px", "70px"],
        },
        checkboxOptions: {
            layout: "column",
        },
    } );

    tree.mountElement( document.getElementById( "tree-view" ) );

    for( let i = 0; i < 50; i++ )
    {
        tree.addNode( {
            key: String( i ),
            caption: String( i ),
            columns: [ "0", "4", "5" ],
        } );
    }

    return tree;
}

createIRGrid();
createIRTreeView();

new IRSplitContainer({
    elements: ['#split-0', '#split-1', '#split-1-1', '#split-2'],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    }
});

new IRSplitContainer({
    elements: ['#split-01', '#split-02'],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0
    }
})


new IRSplitContainer({
    elements: ['#split-3', '#split-4'],
    options: {
        direction:"vertical",
        gutterClickAction: "toggleVisible",
        minSize: 0,
    }
});

new IRSplitContainer({
    elements: ['#split-5', '#split-6'],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    }
});
`})]}),u=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Deep Nested Case"}),e.jsx(o,{children:"ir-style@^2.14.0"}),e.jsx("p",{children:"중첩된 splitter 테스트"}),e.jsx(n,{css:`
#live_editor_wrapper {
    padding: 0
}`,fixedHeight:400,html:e.jsxs("div",{className:"border-b--px height--block",children:[e.jsx("div",{id:"split-0"}),e.jsxs("div",{id:"split-1",style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{className:"border-b--px",style:{height:"60px"}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{id:"split-2"}),e.jsxs("div",{id:"split-3",children:[e.jsx("div",{id:"split-4"}),e.jsx("div",{id:"split-5"})]})]})]})]}),code:`
import { IRSplitContainer } from "./dist/index.js";

new IRSplitContainer({
    elements: ['#split-0', '#split-1'],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0
    }
})

new IRSplitContainer({
    elements: ['#split-2', '#split-3'],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0
    }
})

new IRSplitContainer({
    elements: ['#split-4', '#split-5'],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0
    }
})
`})]});S.__docgenInfo={description:"",methods:[],displayName:"GutterClickAction"};u.__docgenInfo={description:"",methods:[],displayName:"DeepNestedCase"};const R={title:"JS Components/IRSplitContainer"},b=["Basic","API","Event","Size","thinStyle","DeepNestedCase","GutterClickAction"];export{x as API,c as Basic,u as DeepNestedCase,a as Event,S as GutterClickAction,p as Size,b as __namedExportsOrder,R as default,m as thinStyle};
