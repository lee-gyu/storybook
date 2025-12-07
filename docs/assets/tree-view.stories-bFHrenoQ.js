import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as r,c as t,L as o,V as i}from"./version-tag-Buic5uEj.js";import"./iframe-BmvT9HBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx57Rlms.js";const d=`import { IRSplitContainer, IRContextMenu } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#treeContainer", "#temp"],\r
    options: { direction: "horizontal" },\r
} );\r
\r
const menu = new IRContextMenu( {\r
    items: [\r
        {\r
            id: "node.add",\r
            type: "command-button",\r
            label: "노드 추가",\r
        },\r
        {\r
            id: "node.remove",\r
            type: "command-button",\r
            label: "노드 제거",\r
        },\r
        {\r
            id: "node.expand",\r
            type: "command-button",\r
            label: "노드 열기",\r
        },\r
        {\r
            id: "node.collapse",\r
            type: "command-button",\r
            label: "노드 접기",\r
        },\r
    ],\r
} );\r
\r
globalThis.menu = menu;\r
`,l=`import { IRTreeView, uuid } from "@innorules/ir-style";\r
\r
/** IRTreeView 생성 */\r
const tree = new IRTreeView( {\r
    /** 체크박스 옵션 설정 */\r
    showCheckbox: true,\r
    checkboxOptions: {\r
        layout: "column",\r
    },\r
    /** 아이콘 옵션 설정 */\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--ir-blue-4)",\r
    /** 헤더 설정 */\r
    displayHeader: true,\r
    headerRow: {\r
        columnCount: 4,\r
        text: ["헤더", "폴더", "룰(메인)", "ext."],\r
        width: ["*", "48px", "70px", "48px"],\r
    },\r
    /** 여러 노드 선택 가능 여부 설정 */\r
    multiSelect: true,\r
} );\r
\r
tree.mountElement( treeContainer );\r
\r
/** IRTreeView AddHook */\r
tree.addHook( "contextMenu", ( ev ) => menu.showAtPoint( ev.clientX, ev.clientY ) );\r
tree.addHook( "nodeExpanded", ( node ) => console.log( "nodeExpanded", node ) );\r
tree.addHook( "nodeCollapsed", ( node ) => console.log( "nodeCollapsed", node ) );\r
tree.addHook( "nodeClick", ( ev, node ) => console.log( "nodeClick", node ) );\r
tree.addHook( "nodeDoubleClick", ( ev, node ) => console.log( "nodeDoubleClick", node ) );\r
tree.addHook( "nodeSelect", ( node ) => console.log( "nodeSelect", node ) );\r
tree.addHook( "nodeSelectionChange", ( nodeList ) => console.log( "nodeSelectionChange", nodeList ) );\r
tree.addHook( "nodeRelease", ( node ) => console.log( "nodeRelease", node ) );\r
\r
/** API 데모 (체크박스, 버튼 영역) */\r
chk_header_visible.onchange = ( ev ) => tree.displayHeader = ev.currentTarget.checked;\r
chk_toggle_columns.onchange = ( ev ) => tree.setColumnCount( ev.currentTarget.checked ? 4 : 1 );\r
chk_toggle_multi_select.onchange = ( ev ) => tree.multiSelect = ev.currentTarget.checked;\r
\r
btn_clear.onclick = () => tree.clear();\r
// 선택된 노드 모두 출력\r
btn_print_selection.onclick = () => console.log( tree.getSelectedNodes() );\r
// 모든 노드 리스트 출력\r
btn_print_list.onclick = () => console.log( tree.getSortedNodeList() );\r
\r
btn_add.onclick = () => tree.addNode( { key: uuid(), caption: uuid() } );\r
btn_add_child.onclick = () =>\r
{\r
    const selected = tree.getSelectedNodeOrNull();\r
\r
    if( selected )\r
        tree.addNode( { parentKey: selected.key, key: uuid(), caption: uuid() } );\r
};\r
\r
btn_remove.onclick = async () =>\r
{\r
    const selected = tree.getSelectedNodes();\r
\r
    for( const { key } of selected )\r
        await tree.removeNode( key );\r
};\r
\r
btn_clear_children.onclick = () =>\r
{\r
    const selected = tree.getSelectedNodes();\r
\r
    selected.forEach( ( node ) => tree.clearChildNodes( node.key ) );\r
};\r
\r
btn_expand_all.onclick = async () =>\r
{\r
    await tree.expandAll();\r
};\r
\r
btn_collapse_all.onclick = async () =>\r
{\r
    await tree.collapseAll();\r
};\r
\r
btn_auto_size.onclick = async () =>\r
{\r
    await tree.autoSizeColumn( 0 );\r
};\r
\r
btn_auto_size2.onclick = async () =>\r
{\r
    await tree.autoSizeColumn( 1 );\r
    await tree.autoSizeColumn( 2 );\r
    await tree.autoSizeColumn( 3 );\r
};\r
\r
btn_scroll.onclick = () =>\r
{\r
    tree.scrollToNode( txt_value.value );\r
};\r
\r
/** API 데모 (TreeView) */\r
// 노드 추가\r
const node = tree.addNode( {\r
    key: "test1",\r
    caption: "비활성화",\r
    disabled: true,\r
} );\r
\r
// 노드의 텍스트 설정\r
node.setColumnText( 0, "텍스트   변경  2   23" );\r
node.setColumnText( 1, "5" );\r
\r
// 여러 노드 추가\r
for( let i = 0; i < 5; i++ )\r
{\r
    tree.addNode( {\r
        key: \`test-\${i}\`,\r
        caption: \`test-\${i}\`,\r
        columns: ["0", "4", "5"],\r
    } );\r
}\r
\r
// 노드 리스트 추가\r
tree.addNodeList(\r
    { parentKey: "test-0" },\r
    [\r
        { key: "1-0", caption: "자식1" },\r
        { key: "1-1", caption: "자식2" },\r
        { key: "1-2", caption: "자식3", expanded: true },\r
    ],\r
);\r
\r
// 깊이 있는 노드 추가 예시\r
const deppDepthNode = {\r
    key: "5",\r
    caption: "5",\r
    expanded: true,\r
    children: [],\r
};\r
\r
const dumStr = "41d2#@561__..28& 6__-23)]{4612가414한글124000";\r
\r
( function( depth )\r
{\r
    let cur = deppDepthNode;\r
\r
    for( let i = 0; i < depth; i++ )\r
    {\r
        const key = ["5", i, dumStr].join( "-" );\r
        cur.children = [{ key, caption: key, expanded: true, children: [] }];\r
        cur = cur.children[0];\r
    }\r
} )( 50 );\r
\r
deppDepthNode.children = [\r
    ...Array.from( { length: 5 }, ( _, i ) => ( { key: ["5", i].join( "--" ), caption: i.toString() } ) ),\r
    ...deppDepthNode.children,\r
];\r
\r
tree.addNode( deppDepthNode );\r
tree.addNode( { parentKey: "1-2", key: "1-2-0", caption: "parentKey 1-2의 자식노드" } );\r
\r
// 특정 노드 확장\r
tree.expandNode( "test-0" );\r
\r
// 노드 중간 삽입 예시 1\r
tree.addNode( {\r
    insertKey: "test-0",\r
    key: "insert",\r
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandable",\r
    expandable: true,\r
    expanded: true,\r
    columns: ["", "34", "45"],\r
    children: [\r
        { key: "insert-0", caption: "insert의 자식노드" },\r
    ],\r
} );\r
\r
// 노드 중간 삽입 예시 2\r
tree.addNodeList(\r
    { insertKey: "test-0" },\r
    [\r
        {\r
            key: "insert2",\r
            caption: "textColor blue insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",\r
            textColor: "var(--ir-blue-6)",\r
        },\r
        {\r
            key: "insert3",\r
            caption: "text",\r
            columns: ["1", "", "4"],\r
        },\r
    ],\r
);\r
\r
// 자식 노드 추가 예시\r
tree.addNodeList(\r
    { parentKey: "test-1" },\r
    [\r
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--ir-css-primary-active-color)" },\r
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--ir-css-danger-color)" },\r
        {\r
            key: "0-3",\r
            caption: "자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3",\r
            iconColor: "var(--yellow)",\r
            expanded: true,\r
            children: [\r
                { key: "0-3-0", caption: "grand" },\r
                { key: "0-3-1", caption: "grand2" },\r
            ],\r
        },\r
    ],\r
);\r
\r
window.__TREE_VIEW__ = tree;`,a=`<div class="flex flex--column gap--sm mb--sm">\r
    <div class="flex align-items--center gap-x--sm">\r
        <label>\r
            <input id="chk_header_visible" checked type="checkbox" />header visible\r
        </label>\r
        <label>\r
            <input id="chk_toggle_columns" checked type="checkbox" />Toggle Columns\r
        </label>\r
        <label>\r
            <input id="chk_toggle_multi_select" checked type="checkbox" />Multi Select\r
        </label>\r
    </div>\r
    <div class="flex align-items--center gap-x--sm">\r
        <button id="btn_clear" class="button">Clear</button>\r
        <button id="btn_print_selection" class="button">Print Selected</button>\r
        <button id="btn_print_list" class="button">Print List</button>\r
        <button id="btn_add" class="button">Add</button>\r
        <button id="btn_add_child" class="button">Add Child</button>\r
        <button id="btn_remove" class="button">Remove</button>\r
        <button id="btn_clear_children" class="button">Remove Children</button>\r
        <button id="btn_expand_all" class="button">Expand All</button>\r
        <button id="btn_collapse_all" class="button">Collapse All</button>\r
        <button id="btn_auto_size" class="button">AutoSize</button>\r
        <button id="btn_auto_size2" class="button">AutoSize2</button>\r
    </div>\r
    <div class="flex align-items--center gap-x--sm">\r
        <input id="txt_value" class="input__native" value="5" style="width: 200px" />\r
        <button id="btn_scroll" class="button">Scroll</button>\r
    </div>\r
</div>\r
\r
<!-- IRTreeView -->\r
<div>\r
    <div id="treeContainer" class="border"></div>\r
    <div id="temp"></div>\r
</div>`,c=`#treeContainer {\r
    display: grid;\r
    height: 300px;\r
}\r
`,s=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/types/_innorules_tree-view.IRTreeViewArgs.html","IRTreeViewArgs"]];function u(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView"}),e.jsx("p",{children:"기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다."}),e.jsx(t,{docList:s}),e.jsx(o,{htmlRaw:a,css:c,code:d,exampleCode:l})]})}u.__docgenInfo={description:"",methods:[],displayName:"Basic"};const p=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const tree = new IRTreeView( {\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
    displayHeader: true,\r
    headerRow: {\r
        columnCount: 3,\r
        text: ["헤더", "폴더", "룰(메인)"],\r
        width: ["*", "48px", "70px"],\r
    },\r
} );\r
\r
tree.mountElement( treeContainer );\r
\r
globalThis.tree = tree;`,h=`const nodeDataList = [];\r
\r
for( let i = 0; i < 50000; i++ )\r
{\r
    nodeDataList.push( {\r
        key: String( i ),\r
        caption: String( i ),\r
        columns: ["0", "0"],\r
    } );\r
}\r
\r
tree.addNodeList( {}, nodeDataList );`,g='<div id="treeContainer" class="border"></div>',m=`#treeContainer {\r
    display: grid;\r
    width: 320px;\r
    height: 300px;\r
}\r
`,y=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"]];function x(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView BulkData"}),e.jsx("p",{children:"50,000 Row 처리 케이스"}),e.jsx(t,{docList:y}),e.jsx(o,{htmlRaw:g,css:m,code:p,exampleCode:h})]})}x.__docgenInfo={description:"",methods:[],displayName:"BulkData"};const k=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const tree = new IRTreeView( {\r
    showCheckbox: true,\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--ir-blue-4)",\r
    displayHeader: true,\r
    multiSelect: true,\r
    headerRow: {\r
        text: ["전체 선택"],\r
        hasCheckbox: true,\r
    },\r
} );\r
\r
tree.mountElement( treeContainer );\r
\r
tree.addHook( "nodeChangeChecked", ( node, checked ) =>\r
{\r
    console.log( "nodeKey: " + node.key + ", cur: " + checked );\r
} );\r
\r
for( let i = 0; i < 20; i++ )\r
{\r
    const parentKey = String( i );\r
    const nodeData = {\r
        key: parentKey,\r
        caption: parentKey,\r
        expanded: true,\r
        children: [],\r
    };\r
\r
    for( let j = 0; j < 5; j++ )\r
    {\r
        const childKey = i + "-" + j;\r
        const childNode = {\r
            key: childKey,\r
            caption: childKey,\r
            object: { data: childKey },\r
            children: [],\r
        };\r
\r
        nodeData.children.push( childNode );\r
\r
        for( let k = 0; k < 5; k++ )\r
        {\r
            const childKey = i + "-" + j + "-" + k;\r
\r
            childNode.children.push( {\r
                key: childKey,\r
                caption: childKey,\r
                disabled: i > 10 && j === 3 && k === 2,\r
                object: { data: childKey },\r
            } );\r
        }\r
    }\r
\r
    tree.addNode( nodeData );\r
}\r
\r
globalThis.tree = tree;`,w=`import { IRTreeViewCascadeCheckingPlugin } from "@innorules/ir-style";\r
\r
tree.addPlugin( new IRTreeViewCascadeCheckingPlugin( {\r
    onChanged( updateInfoList )\r
    {\r
        // 체크 변경 사항에 대한 목록 추적\r
        console.log( updateInfoList );\r
    },\r
} ) );\r
`,b=`#treeContainer {
    width: 320px;
    height: 400px;
    display: grid;
}
`,C='<div id="treeContainer" class="border"></div>',f=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/classes/_innorules_tree-view.IRTreeViewCascadeCheckingPlugin.html","IRTreeViewCascadeCheckingPlugin"]];function v(){return e.jsx("input",{type:"checkbox",className:"checkbox__input","data-state":"sub-checked",style:{pointerEvents:"none"}})}function _(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView CascadeCheckingPlugin"}),e.jsx(i,{children:"ir-style@^2.14.0"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeViewCascadeCheckingPlugin"}),"을 이용하여 부모/자식 간의 체크 상태 전파 기능을 추가할 수 있습니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," 상태의 자식 노드로 체크됩니다."]}),e.jsxs("li",{children:[e.jsx(v,{})," ",e.jsx("code",{children:"subChecked"}),": 모두 체크되어 있지 않고, 1개 이상 체크된 경우 true"]})]}),e.jsx(t,{docList:f}),e.jsx(o,{css:b,htmlRaw:C,code:k,exampleCode:w})]})}_.__docgenInfo={description:"",methods:[],displayName:"CascadeChecking"};const I=`const args = {\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
    displayHeader: true,\r
    headerRow: {\r
        columnCount: 2,\r
        text: ["헤더", "Title!"],\r
        width: ["*", "60px"],\r
    },\r
};\r
\r
globalThis.args = args;\r
\r
globalThis.setupTree = ( tree1, tree2, tree3 ) =>\r
{\r
    const treeList = [tree1, tree2, tree3];\r
\r
    tree1.mountElement( tc1 );\r
    tree2.mountElement( tc2 );\r
    tree3.mountElement( tc3 );\r
\r
    treeList.forEach( ( tree ) =>\r
    {\r
        const nodeDataList = [];\r
\r
        for( let i = 0; i < 100; i++ )\r
        {\r
            const nodeData = {\r
                key: String( i ),\r
                caption: String( i ),\r
                columns: ["0"],\r
                children: [],\r
            };\r
\r
            for( let j = 0; j < 10; j++ )\r
            {\r
                const childKey = i + "-" + j;\r
\r
                nodeData.children.push( {\r
                    key: childKey,\r
                    caption: i + "-" + j,\r
                    columns: ["1"],\r
                    children: [{\r
                        key: childKey + "-0",\r
                        caption: "자식",\r
                        columns: ["2"],\r
                        hasCheckbox: false,\r
                        children: [{\r
                            key: childKey + "-0-0",\r
                            caption: "자식2",\r
                            hasCheckbox: false,\r
                        }],\r
                    }],\r
                } );\r
            }\r
\r
            nodeDataList.push( nodeData );\r
        }\r
        tree.addNodeList( {}, nodeDataList );\r
    } );\r
};`,R=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const tree1 = new IRTreeView( {\r
    ...args,\r
} );\r
\r
const tree2 = new IRTreeView( {\r
    ...args,\r
    checkboxOptions: {\r
        layout: "column",\r
    },\r
} );\r
\r
const tree3 = new IRTreeView( {\r
    ...args,\r
    checkboxOptions: {\r
        layout: "column",\r
        ui: "favorite",\r
    },\r
} );\r
\r
const treeList = [tree1, tree2, tree3];\r
treeList.forEach( ( tree, treeId ) =>\r
{\r
    tree.addHook( "headerChangeChecking", () => true );\r
    tree.addHook( "headerChangeChecked", ( checked ) => console.log( "tree" + treeId + "::headerChangeChecked", checked ) );\r
    tree.addHook( "nodeChangeChecked", ( node, checked ) => console.log( "tree" + treeId + "::nodeChangeChecked", checked ) );\r
} );\r
\r
setupTree( tree1, tree2, tree3 );`,T=`<div class="divWrapper">\r
    <div id="tc1" class="border"></div>\r
    <div id="tc2" class="border"></div>\r
    <div id="tc3" class="border"></div>\r
</div>`,D=`.divWrapper {\r
    display: grid;\r
    gap: 8px;\r
    grid-auto-flow: column;\r
    grid-auto-columns: 300px;\r
    height: 300px;\r
}\r
\r
#tc1,\r
#tc2,\r
#tc3 {\r
    display: grid;\r
}\r
`,j=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/types/_innorules_tree-view.IRTreeViewArgs.html","IRTreeViewArgs"]];function V(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView Checkbox"}),e.jsx("p",{children:"Checkbox 사용 케이스 (inner, column 레이아웃 2가지 모드 제공, ui는 checkbox, favorite 2가지 스타일 제공)"}),e.jsx(t,{docList:j}),e.jsx(o,{htmlRaw:T,css:D,code:I,exampleCode:R})]})}V.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const N=`import { IRTreeView } from "@innorules/ir-style";\r
import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const tree = new IRTreeView( {\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--ir-blue-4)",\r
} );\r
\r
const grid = new IRGrid( {\r
    contextElement: gridContainer,\r
} );\r
\r
tree.mountElement( treeContainer );\r
\r
for( let i = 0; i < 20; i++ )\r
{\r
    const parentKey = String( i );\r
    const nodeData = {\r
        key: parentKey,\r
        caption: parentKey,\r
        expanded: true,\r
        children: [],\r
    };\r
\r
    for( let j = 0; j < 5; j++ )\r
    {\r
        const childKey = i + "-" + j;\r
        nodeData.children.push( {\r
            key: childKey,\r
            caption: childKey,\r
            object: { data: childKey },\r
        } );\r
    }\r
\r
    tree.addNode( nodeData );\r
}\r
\r
globalThis.tree = tree;\r
globalThis.grid = grid;`,S=`// IRTreeView drag hook\r
tree.addHook( "nodeCheckDragging", ( ev, node ) =>\r
{\r
    if( node.isRootNode() ) return false;\r
} );\r
\r
tree.addHook( "nodeDragStart", ( ev, node ) =>\r
{\r
    ev.dataTransfer.setData( "text/plain", node.caption );\r
} );\r
\r
// IRGrid drop event 처리\r
grid.onDropOnCell = ( row, col, ev ) =>\r
{\r
    const data = ev.dataTransfer.getData( "text/plain" );\r
\r
    if( !data ) return;\r
\r
    grid.setText( row, col, data );\r
};`,P=`<div class="divWrapper">\r
    <div id="treeContainer" class="border"></div>\r
    <div id="gridContainer"></div>\r
</div>`,K=`.divWrapper {\r
    display: grid;\r
    grid-template-columns: 240px 1fr;\r
    grid-template-rows: minmax(0, 1fr);\r
    height: 300px;\r
    gap: 8px;\r
}\r
\r
#treeContainer,\r
#gridContainer {\r
    display: grid;\r
}\r
`,$=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/types/_innorules_tree-view.IRTreeViewHook.html","IRTreeViewHook"]];function L(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView DragDrop"}),e.jsx("p",{children:"DragDrop 처리 케이스 (현재 예제에서는 rootNode는 dragging 처리 불가)"}),e.jsx(t,{docList:$}),e.jsx(o,{htmlRaw:P,css:K,code:N,exampleCode:S})]})}L.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};const E=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const args = {\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--ir-blue-4)",\r
    displayHeader: true,\r
};\r
\r
const tree1 = new IRTreeView( {\r
    ...args,\r
    headerRow: {\r
        columnCount: 2,\r
        text: ["트리1"],\r
        width: ["*", "24px"],\r
    },\r
} );\r
\r
const tree2 = new IRTreeView( {\r
    ...args,\r
    headerRow: {\r
        columnCount: 2,\r
        text: ["트리2"],\r
        width: ["*", "24px"],\r
    },\r
} );\r
\r
tree1.mountElement( treeContainer1 );\r
tree2.mountElement( treeContainer2 );\r
\r
// nodeMoved hook\r
tree1.addHook( "nodeMoved", ( node, position ) =>\r
{\r
    console.log( "[nodeMoved]", node.key, position );\r
} );\r
\r
const treeList = [tree1, tree2];\r
\r
treeList.forEach( ( tree, treeId ) =>\r
{\r
    let row = 0;\r
\r
    for( let i = 0; i < 2; i++ )\r
    {\r
        const parentKey = treeId + "-" + ++row;\r
        const nodeData = {\r
            key: parentKey,\r
            caption: parentKey,\r
            expanded: true,\r
            children: [],\r
        };\r
\r
        for( let j = 0; j < 5; j++ )\r
        {\r
            const childKey = treeId + "-" + ++row;\r
            nodeData.children.push( {\r
                key: childKey,\r
                caption: childKey,\r
                columns: [String( row )],\r
                object: { data: childKey },\r
            } );\r
        }\r
\r
        tree.addNode( nodeData );\r
    }\r
} );\r
\r
globalThis.tree1 = tree1;\r
globalThis.tree2 = tree2;`,M=`import {\r
    IRTreeViewDragDropMovePlugin,\r
    IRConfirm,\r
} from "@innorules/ir-style";\r
\r
// 플러그인 추가\r
tree1.addPlugin( new IRTreeViewDragDropMovePlugin( {\r
    canNodeMoveStart: ( node ) => node.caption !== "0-1",\r
    canNodeMoveDragOver: ( isSelf, node, cursor ) => isSelf && node.caption !== "0-7",\r
    onDropNodeData( isSelf, srcData, targetData )\r
    {\r
        console.log( "tree1.onDropNodeData", isSelf, srcData, targetData );\r
        // 내부 이동만 처리\r
        if( !isSelf ) return;\r
\r
        tree1.moveNode( srcData.srcNodeData.key, {\r
            targetKey: targetData.nodeKey,\r
            position: targetData.cursorType,\r
        } );\r
    },\r
    onDragEnd( isSelf, srcData )\r
    {\r
        console.log( "tree1.drag-end", isSelf, srcData );\r
    },\r
} ) );\r
\r
tree2.addPlugin( new IRTreeViewDragDropMovePlugin( {\r
    canNodeMoveDrop: ( context ) =>\r
    {\r
        return new Promise( ( resolve ) => new IRConfirm( {\r
            buttonType: ["ok", "cancel"],\r
            contentElement: "정말 추가하시겠습니까?",\r
            onClick: ( type ) => resolve( type === "ok" ),\r
            escButton: "cancel",\r
            enterButton: "ok",\r
        } ).show() );\r
    },\r
    onDragEnd( isSelf, srcData )\r
    {\r
        console.log( "tree2.drag-end", isSelf, srcData );\r
    },\r
    onDropNodeData( isSelf, srcData, targetData )\r
    {\r
        console.log( "tree2.onDropNodeData", isSelf, srcData, targetData );\r
\r
        // 외부 이동만 처리\r
        if( isSelf ) return;\r
\r
        tree2.addNode( {\r
            insertKey: targetData.nodeKey,\r
            position: targetData.cursorType,\r
            ...srcData.srcNodeData,\r
        } );\r
\r
        tree1.removeNode( srcData.srcNodeData.key );\r
    },\r
} ) );\r
`,H=`<div class="divWrapper">\r
    <div id="treeContainer1" class="border"></div>\r
    <div id="treeContainer2" class="border"></div>\r
</div>`,A=`.divWrapper {\r
    display: grid;\r
    grid-template-columns: 340px 340px;\r
    grid-template-rows: minmax(0, 1fr);\r
    height: 300px;\r
    gap: 8px;\r
}\r
\r
#treeContainer1,\r
#treeContainer2 {\r
    display: grid;\r
}\r
`,O=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/classes/_innorules_tree-view.IRTreeViewDragDropMovePlugin.html","IRTreeViewDragDropMovePlugin"]];function z(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView DragDropMovePlugin"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeViewDragDropMovePlugin"}),"을 이용하여 트리뷰 노드 간의 드래그 앤 드롭 이동 기능을 추가할 수 있습니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"canNodeMoveStart"})," dragStart 시작 검사"]}),e.jsxs("li",{children:[e.jsx("code",{children:"canNodeMoveDragOver"})," dragOver 처리 검사"]}),e.jsxs("li",{children:[e.jsx("code",{children:"canNodeMoveDrop"})," drop 처리 여부 검사"]})]}),e.jsx(t,{docList:O}),e.jsx(o,{htmlRaw:H,css:A,code:E,exampleCode:M})]})}z.__docgenInfo={description:"",methods:[],displayName:"DragDropMove"};const B=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const tree = new IRTreeView( {\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--ir-blue-4)",\r
    displayHeader: true,\r
    headerRow: {\r
        columnCount: 4,\r
        text: ["헤더", "폴더", "룰(메인)", "ext."],\r
        width: ["*", "48px", "70px", "48px"],\r
    },\r
    checkboxOptions: {\r
        layout: "column",\r
    },\r
} );\r
\r
tree.mountElement( treeContainer );\r
\r
for( let i = 0; i < 5; i++ )\r
{\r
    tree.addNode( {\r
        key: String( i ),\r
        caption: String( i ),\r
        columns: ["0", "4", "5"],\r
    } );\r
}\r
\r
const deppDepthNode = {\r
    key: "5",\r
    caption: "5",\r
    expanded: true,\r
    columns: ["0", "1", "1"],\r
};\r
\r
const dumStr = "node-deep-depth";\r
\r
( function()\r
{\r
    let cur = deppDepthNode;\r
\r
    for( let i = 0; i < 20; i++ )\r
    {\r
        const key = ["5", i, dumStr].join( "-" );\r
        cur.children = [{ key, caption: key, expanded: true, children: [], columns: ["0", "1", "1"] }];\r
        cur = cur.children[0];\r
    }\r
} )( 50 );\r
\r
tree.addNode( deppDepthNode );\r
\r
tree.autoSizeColumn( 0 );\r
\r
change_width_btn.onclick = () =>\r
{\r
    const randomWidth = ( Math.floor( Math.random() * 101 ) + 50 ) + "px";\r
    tree.setColumnWidth( 2, randomWidth );\r
};\r
change_col_btn1.onclick = () => tree.setColumnCount( 3 );\r
change_col_btn2.onclick = () => tree.setColumnCount( 4 );\r
change_col_btn3.onclick = () => tree.setColumnCount( 5 );\r
\r
globalThis.tree = tree;\r
`,U=`import { IRTreeViewColStickyPlugin } from "@innorules/ir-style";\r
\r
// IRTreeViewColStickyPlugin 플러그인 생성 및 추가\r
const treeViewColStickyPlugin = new IRTreeViewColStickyPlugin();\r
\r
tree.addPlugin( treeViewColStickyPlugin );\r
\r
remove_plugin_btn.onclick = () => tree.removePlugin( treeViewColStickyPlugin );\r
add_plugin_btn.onclick = () => tree.addPlugin( treeViewColStickyPlugin );`,W=`<div>\r
    <button id="change_width_btn" class="button mb--lg">룰(메인) 너비 변경</button>\r
    <button id="change_col_btn1" class="button">3 Column Count</button>\r
    <button id="change_col_btn2" class="button">4 Column Count</button>\r
    <button id="change_col_btn3" class="button">5 Column Count</button>\r
    <button id="remove_plugin_btn" class="button">Remove Plugin</button>\r
    <button id="add_plugin_btn" class="button">Add Plugin</button>\r
</div>\r
\r
<!-- IRTreeView -->\r
<div id="treeContainer" class="border"></div>`,G=`#treeContainer {\r
    display: grid;\r
    width: 700px;\r
    height: 300px;\r
}\r
`,J=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/classes/_innorules_tree-view.IRTreeViewColStickyPlugin.html","IRTreeViewColStickyPlugin"]];function X(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView ColStickyPlugin"}),e.jsx(i,{children:"ir-style@^2.14.1"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeViewColStickyPlugin"}),"을 이용하여 Content 컬럼을 제외한 우측 컬럼을 고정할 수 있습니다.",e.jsx("br",{}),"※ 최대 5개만 고정이 가능합니다."]}),e.jsx(t,{docList:J}),e.jsx(o,{htmlRaw:W,css:G,code:B,exampleCode:U})]})}X.__docgenInfo={description:"",methods:[],displayName:"StickyColumn"};const Y=`import {\r
    IRTreeView,\r
} from "@innorules/ir-style";\r
\r
globalThis.setupTree = ( treeContainer ) =>\r
{\r
    const tree = new IRTreeView( {\r
        showIcon: true,\r
        showCheckbox: true,\r
        defaultIcon: "ir-icon--folder-fill",\r
        defaultIconColor: "var(--ir-blue-4)",\r
        displayHeader: true,\r
        headerRow: {\r
            columnCount: 4,\r
            text: ["헤더", "폴더", "룰(메인)", "ext."],\r
            width: ["*", "48px", "70px", "48px"],\r
        },\r
        checkboxOptions: {\r
            layout: "column",\r
        },\r
    } );\r
\r
    tree.mountElement( treeContainer );\r
\r
    tree.addNode( {\r
        key: "test",\r
        caption: "비활성화 노드와 빈 값은 툴팁이 표시되지 않습니다.",\r
        disabled: true,\r
        tooltipText: "[노드] 비활성화",\r
    } );\r
\r
    for( let i = 0; i < 5; i++ )\r
    {\r
        tree.addNode( {\r
            key: String( i ),\r
            caption: String( i ),\r
            columns: ["0", "4", "5"],\r
            tooltipText: \`[노드] \${String( i )}\`,\r
        } );\r
    }\r
\r
    tree.addNodeList(\r
        { insertKey: "0" },\r
        [\r
            {\r
                key: "insert3",\r
                caption: "",\r
                columns: ["1", "", "4"],\r
            },\r
            {\r
                key: "insert2",\r
                caption: "insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2  insert2 insert2 insert2 insert2",\r
            },\r
        ],\r
    );\r
\r
    const deppDepthNode = {\r
        key: "5",\r
        caption: "5",\r
        expanded: true,\r
        children: [],\r
    };\r
\r
    const dumStr = "test-node";\r
\r
    ( function( depth )\r
    {\r
        let cur = deppDepthNode;\r
\r
        for( let i = 0; i < depth; i++ )\r
        {\r
            const key = ["5", i, dumStr].join( "-" );\r
            cur.children = [{ key, caption: key, expanded: true, children: [] }];\r
            cur = cur.children[0];\r
        }\r
    } )( 10 );\r
\r
    deppDepthNode.children = [\r
        ...Array.from( { length: 5 }, ( _, i ) => ( { key: ["5", i].join( "--" ), caption: i.toString() } ) ),\r
        ...deppDepthNode.children,\r
    ];\r
\r
    tree.addNode( deppDepthNode );\r
\r
    return tree;\r
};`,q=`import {\r
    IRTreeViewTooltipPlugin,\r
} from "@innorules/ir-style";\r
\r
const tree = setupTree( treeContainer );\r
\r
const tooltipPlugin = new IRTreeViewTooltipPlugin( {\r
    // placement: "bottom-start",\r
    // interval: 60,\r
    // offset: 15,\r
    /** "pointer"로 지정시 마우스 포인터 위치를 기준으로 툴팁 표시 */\r
    // refMode: "pointer",\r
    /** "tooltipText"로 지정시 \`node.data.tooltipText\` 값을 사용 */\r
    // tooltipPropKey: "tooltipText",\r
} );\r
\r
tree.addPlugin( tooltipPlugin );\r
\r
remove_plugin_btn.onclick = () => tree.removePlugin( tooltipPlugin );\r
add_plugin_btn.onclick = () => tree.addPlugin( tooltipPlugin );\r
`,F=`#treeContainer {\r
    display: grid;\r
    width: 700px;\r
    height: 300px;\r
}\r
`,Q=`<div>\r
    <button id="remove_plugin_btn" class="button mb--lg">Remove Plugin</button>\r
    <button id="add_plugin_btn" class="button mb--lg">Add Plugin</button>\r
</div>\r
\r
<!-- IRTreeView -->\r
<div id="treeContainer" class="border"></div>`,Z=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/classes/_innorules_tree-view.IRTreeViewTooltipPlugin.html","IRTreeViewTooltipPlugin"]];function ee(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView TooltipPlugin"}),e.jsx(i,{children:"ir-style@^2.17.0"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeViewTooltipPlugin"}),"을 이용하여 tooltip 기능을 사용하실 수 있습니다.",e.jsx("br",{}),"※ 비활성화 노드와 빈 값은 툴팁이 적용되지 않습니다."]}),e.jsx(t,{docList:Z}),e.jsx(o,{css:F,htmlRaw:Q,code:Y,exampleCode:q})]})}ee.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const ne=`import { IRTreeViewDragDropMovePlugin, uuid } from "@innorules/ir-style";\r
\r
function addRootNode( tree, key, caption )\r
{\r
    tree.addNode( { key, caption } );\r
}\r
\r
function addChildren( tree, parentKey, children )\r
{\r
    tree.addNodeList( { parentKey }, children );\r
}\r
\r
// 한 줄 체인 + 옵션으로 마지막 노드 자식들 추가\r
function addChain( tree, rootKey, rootCaption, depth, lastNodeChildrenCount )\r
{\r
    let chainParent = rootKey;\r
\r
    tree.addNode( {\r
        key: chainParent,\r
        caption: rootCaption,\r
    } );\r
\r
    for( let i = 1; i <= depth; i++ )\r
    {\r
        const key = \`\${rootKey}-\${i}\`;\r
        tree.addNode( {\r
            parentKey: chainParent,\r
            key,\r
            caption: key,\r
        } );\r
        chainParent = key;\r
    }\r
\r
    if( lastNodeChildrenCount > 0 )\r
    {\r
        const lastKey = \`\${rootKey}-\${depth}\`;\r
        const children = [];\r
\r
        for( let i = 1; i <= lastNodeChildrenCount; i++ )\r
        {\r
            children.push( {\r
                parentKey: lastKey,\r
                key: \`\${lastKey}-child-\${i}\`,\r
                caption: \`\${rootCaption} child \${i}\`,\r
            } );\r
        }\r
\r
        for( const child of children )\r
        {\r
            tree.addNode( {\r
                parentKey: child.parentKey,\r
                key: child.key,\r
                caption: uuid(),\r
            } );\r
        }\r
    }\r
}\r
\r
// case-1: 형제/마지막 자식 패턴들\r
function buildCase1( tree )\r
{\r
    addRootNode( tree, "case-1", "형제/마지막 자식 패턴" );\r
\r
    addChildren(\r
        tree,\r
        "case-1",\r
        [\r
            { key: "case-1-1", caption: "1-1" },\r
            { key: "case-1-2", caption: "1-2" },\r
            { key: "case-1-3", caption: "1-3" },\r
        ],\r
    );\r
\r
    addChildren(\r
        tree,\r
        "case-1-2",\r
        [\r
            { key: "case-1-2-1", caption: "1-2-1" },\r
            { key: "case-1-2-2", caption: "1-2-2" },\r
            { key: "case-1-2-3", caption: "1-2-3" },\r
        ],\r
    );\r
\r
    addChildren(\r
        tree,\r
        "case-1-2-2",\r
        [\r
            { key: "case-1-2-2-1", caption: "1-2-2-1" },\r
            { key: "case-1-2-2-2", caption: "1-2-2-2" },\r
            { key: "case-1-2-2-3", caption: "1-2-2-3" },\r
        ],\r
    );\r
\r
    addChildren(\r
        tree,\r
        "case-1-3",\r
        [\r
            { key: "case-1-3-1", caption: "1-3-1" },\r
            { key: "case-1-3-2", caption: "1-3-2" },\r
        ],\r
    );\r
}\r
\r
// case-2: 위 형제 때문에 │가 이어지는 패턴\r
function buildCase2( tree )\r
{\r
    addRootNode( tree, "case-2", "위 형제 때문에 │가 이어지는 패턴" );\r
\r
    addChildren(\r
        tree,\r
        "case-2",\r
        [\r
            { key: "case-2-1", caption: "2-1" },\r
            {\r
                key: "case-2-2",\r
                caption: "2-2",\r
                expanded: true,\r
            },\r
        ],\r
    );\r
\r
    addChildren(\r
        tree,\r
        "case-2-2",\r
        [\r
            { key: "case-2-2-1", caption: "2-2-1" },\r
            {\r
                key: "case-2-2-2",\r
                caption: "2-2-2",\r
                expanded: true,\r
            },\r
        ],\r
    );\r
\r
    addChildren(\r
        tree,\r
        "case-2-2-2",\r
        [\r
            { key: "case-2-2-2-1", caption: "2-2-2-1" },\r
            { key: "case-2-2-2-2", caption: "2-2-2-2" },\r
        ],\r
    );\r
}\r
\r
// case-4: 한 줄 체인 + 마지막 노드 아래에 자식들\r
function buildCase4( tree )\r
{\r
    // depth 10 체인 + 마지막 노드 아래에 40개 자식\r
    addChain( tree, "case-4", "한줄 체인 + 마지막 노드 40개 자식 노드", 10, 40 );\r
}\r
\r
function initTreeView( tree )\r
{\r
    tree.mountElement( treeContainer );\r
\r
    buildCase1( tree );\r
    buildCase2( tree );\r
    buildCase4( tree );\r
\r
    tree.expandAll();\r
\r
    tree.addPlugin( new IRTreeViewDragDropMovePlugin( {\r
        onDropNodeData( isSelf, srcData, targetData )\r
        {\r
            if( !isSelf ) return;\r
\r
            tree.moveNode( srcData.srcNodeData.key, {\r
                targetKey: targetData.nodeKey,\r
                position: targetData.cursorType,\r
            } );\r
        },\r
    } ) );\r
}\r
\r
globalThis.initTreeView = initTreeView;`,re=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const tree = new IRTreeView( {\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--ir-blue-4)",\r
    displayHeader: true,\r
    headerRow: {\r
        columnCount: 1,\r
        text: ["헤더"],\r
        width: ["*"],\r
    },\r
    hiddenExpandIcon: false,\r
    /** 노드의 depth 선 여부 설정 */\r
    showOutlines: true,\r
} );\r
\r
initTreeView( tree );`,te='<div id="treeContainer" class="border"></div>',oe=`#treeContainer {\r
    display: grid;\r
    width: 600px;\r
    height: 400px;\r
}\r
`,ie=[["/classes/_innorules_tree-view.IRTreeView.html","IRTreeView"],["/types/_innorules_tree-view.IRTreeViewArgs.html","IRTreeViewArgs"]];function de(){return e.jsxs(n,{children:[e.jsx(r,{children:"IRTreeView Outlines"}),e.jsx(i,{children:"ir-style@^2.23.0"}),e.jsxs("p",{children:[e.jsx("code",{children:"showOutlines: true"})," 옵션을 활성화하면 각 노드의 Depth에 따라 라인선(│, ├, └)이 자동으로 표시됩니다."]}),e.jsx(t,{docList:ie}),e.jsx(o,{htmlRaw:te,css:oe,code:ne,exampleCode:re})]})}de.__docgenInfo={description:"",methods:[],displayName:"Basic"};const pe={title:"JS Components/IRTreeView"},he=["Basic","BulkData","CascadeChecking","Checkbox","DragDrop","DragDropMove","StickyColumn","Tooltip","Outlines"];export{u as Basic,x as BulkData,_ as CascadeChecking,V as Checkbox,L as DragDrop,z as DragDropMove,de as Outlines,X as StickyColumn,ee as Tooltip,he as __namedExportsOrder,pe as default};
