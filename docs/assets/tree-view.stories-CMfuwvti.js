import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as e,a as r,L as t,V as o}from"./version-tag-CkTpihZX.js";import"./iframe-jo4tttFm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDcoFm-e.js";const i=`import { IRTreeView, uuid, IRSplitContainer, IRContextMenu, i18n } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#container", "#temp"],\r
    options: { direction: "horizontal" },\r
} );\r
\r
const tree = new IRTreeView( {\r
    multiSelect: true,\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
    // defaultTextColor: "var(--blue)",\r
    displayHeader: true,\r
    // hiddenExpandIcon: true,\r
    // defaultRowHeight: 20,\r
    // removeIndent: true,\r
    headerRow: {\r
        columnCount: 4,\r
        text: ["헤더", "폴더", "룰(메인)", "ext."],\r
        width: ["*", "48px", "70px", "48px"],\r
    },\r
    checkboxOptions: {\r
        layout: "column",\r
    },\r
    // features: {\r
    //     scrollOnExpand: true,\r
    //     scrollOnCollapse: true,\r
    // }\r
} );\r
\r
const menu = new IRContextMenu( {\r
    // blurDisabled: true,\r
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
tree.mountElement( container );\r
\r
tree.addHook( "contextMenu", ( ev ) =>\r
{\r
    menu.showAtPoint( ev.clientX, ev.clientY );\r
    console.log( "contextMenu selected::", tree.getSelectedNodes() );\r
} );\r
\r
const node = tree.addNode( {\r
    key: "test",\r
    caption: "비활성화",\r
    disabled: true,\r
} );\r
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
// 중간 삽입 케이스\r
tree.addNode( {\r
    insertKey: "0",\r
    key: "insert",\r
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandable",\r
    expandable: true,\r
    columns: ["", "34", "45"],\r
} );\r
\r
tree.addNodeList(\r
    { insertKey: "0" },\r
    [\r
        {\r
            key: "insert2",\r
            caption: "insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",\r
            // textColor: "var(--blue)",\r
        },\r
        {\r
            key: "insert3",\r
            caption: "text",\r
            columns: ["1", "", "4"],\r
        },\r
    ],\r
);\r
\r
// 자식 노드 추가 케이스\r
tree.addNodeList(\r
    { parentKey: "0" },\r
    [\r
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--primary-active)" },\r
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--danger)" },\r
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
tree.addNodeList(\r
    { parentKey: "1" },\r
    [\r
        { key: "1-0", caption: "자식" },\r
        { key: "1-1", caption: "자식" },\r
        { key: "1-2", caption: "자식" },\r
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
tree.addNode( { parentKey: "1-2", key: "1-2-0", caption: "자식" } );\r
\r
chk_header_visible.onchange = ( ev ) =>\r
{\r
    tree.displayHeader = ev.currentTarget.checked;\r
};\r
\r
chk_toggle_columns.onchange = ( ev ) =>\r
{\r
    tree.setColumnCount( ev.currentTarget.checked ? 4 : 1 );\r
    tree.autoSizeColumn( 0 );\r
};\r
\r
chk_toggle_multi_select.onchange = ( ev ) =>\r
{\r
    tree.multiSelect = ev.currentTarget.checked;\r
};\r
\r
btn_clear.onclick = () => tree.clear();\r
\r
btn_print_selection.onclick = () => console.log( tree.getSelectedNodes() );\r
\r
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
btn_scroll.onclick = () =>\r
{\r
    tree.scrollToNode( txt_value.value );\r
};\r
\r
btn_expand_all.onclick = () =>\r
{\r
    tree.expandAll();\r
};\r
\r
btn_collapse_all.onclick = () =>\r
{\r
    tree.collapseAll();\r
};\r
\r
btn_auto_size.onclick = () =>\r
{\r
    tree.autoSizeColumn( 0 );\r
};\r
\r
btn_auto_size2.onclick = () =>\r
{\r
    tree.autoSizeColumn( 1 );\r
    tree.autoSizeColumn( 2 );\r
    tree.autoSizeColumn( 3 );\r
};\r
\r
tree.addHook( "nodeExpanded", ( node ) => console.log( "nodeExpanded", node ) );\r
tree.addHook( "nodeCollapsed", ( node ) => console.log( "nodeCollapsed", node ) );\r
tree.addHook( "nodeClick", ( ev, node ) => console.log( "nodeClick", node ) );\r
tree.addHook( "nodeDoubleClick", ( ev, node ) => console.log( "nodeDoubleClick", node ) );\r
tree.addHook( "nodeSelect", ( node ) => console.log( "nodeSelect", node ) );\r
tree.addHook( "nodeSelectionChange", ( nodeList ) => console.log( "nodeSelectionChange", nodeList ) );\r
tree.addHook( "nodeRelease", ( node ) => console.log( "nodeRelease", node ) );\r
tree.addHook( "nodeAddSelect", ( node ) => console.log( "nodeAddSelect", node ) );\r
\r
tree.addHook( "focus", ( ev ) => console.log( "focus", ev ) );\r
tree.addHook( "blur", ( ev ) => console.log( "blur", ev ) );\r
\r
node.setColumnText( 0, "텍스트   변경  2   23" );\r
node.setColumnText( 1, "5" );\r
\r
tree.expandNode( "1" );\r
\r
cbLocale.onchange = () => i18n.setLocale( cbLocale.value );\r
\r
window.__TREE_VIEW__ = tree;`,d=`<div style="display: flex; flex-wrap: wrap; margin-bottom: 8px; column-gap: 8px; row-gap: 4px; align-items: center">\r
    <label>\r
        <input id="chk_header_visible" defaultChecked type="checkbox" />header visible\r
    </label>\r
    <label>\r
        <input id="chk_toggle_columns" defaultChecked type="checkbox" />Toggle Columns\r
    </label>\r
    <label>\r
        <input id="chk_toggle_multi_select" defaultChecked type="checkbox" />Multi Select\r
    </label>\r
    <select id="cbLocale">\r
        <option>ko</option>\r
        <option>en</option>\r
        <option>ja</option>\r
    </select>\r
    <div style="flex-basis: 100%"></div>\r
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
    <!-- flex 줄바꿈용 -->\r
    <div style="flex-basis: 100%"></div>\r
    <input id="txt_value" type="text" defaultValue="1" style="width: 140px" />\r
    <button id="btn_scroll" class="button">Scroll</button>\r
</div>\r
<div>\r
    <div id="container" style="display: grid; height: 300px; border: 1px solid var(--border-color)"></div>\r
    <div id="temp"></div>\r
</div>`;function l(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx("p",{children:"기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다."}),n.jsx(t,{defaultCodeFold:[16],htmlRaw:d,code:i})]})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};const a=`import { IRTreeView } from "@innorules/ir-style";\r
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
tree.mountElement( container );\r
\r
const nodeDataList = [];\r
\r
for( let i = 0; i < 50000; i++ )\r
{\r
    nodeDataList.push( {\r
        key: String( i ),\r
        caption: String( i ),\r
        columns: [ "0", "0" ],\r
    } );\r
}\r
\r
tree.addNodeList( {}, nodeDataList );`,c=`<div style="display: flex; margin-bottom: 4px; column-gap: 8px; align-items: center"></div>\r
<div id="container" style="display: grid; width: 320px; height: 300px; border: 1px solid var(--border-color)"></div>`;function s(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx("p",{children:"50,000 Row 처리 케이스"}),n.jsx(t,{htmlRaw:c,code:a})]})}s.__docgenInfo={description:"",methods:[],displayName:"BulkData"};const p=`import {\r
    IRTreeView,\r
    IRTreeViewCascadeCheckingPlugin,\r
} from "@innorules/ir-style";\r
\r
const tree = new IRTreeView( {\r
    showCheckbox: true,\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
    displayHeader: true,\r
    multiSelect: true,\r
    headerRow: {\r
        text: [ "전체 선택" ],\r
        hasCheckbox: true,\r
    },\r
} );\r
\r
tree.addPlugin( new IRTreeViewCascadeCheckingPlugin( {\r
    onChanged( updateInfoList )\r
    {\r
        console.log( updateInfoList );\r
    },\r
} ) );\r
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
}`,u=`<div style="display: grid; grid-template-columns: 320px 1fr; grid-template-rows: minmax(0,1fr); height: 300; gap: 8px">\r
    <div id="treeContainer" class="border"></div>\r
</div>`;function h(){return n.jsx("input",{type:"checkbox",className:"checkbox__input","data-state":"sub-checked",style:{pointerEvents:"none"}})}function m(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx(o,{children:"ir-style@^2.14.0"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRTreeViewCascadeCheckingPlugin"}),"을 이용하여 부모/자식 간의 체크 상태 전파 기능을 추가할 수 있습니다."]}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"disabled"})," 상태의 자식 노드로 체크됩니다."]}),n.jsxs("li",{children:[n.jsx(h,{})," ",n.jsx("code",{children:"subChecked"}),": 모두 체크되어 있지 않고, 1개 이상 체크된 경우 true"]})]}),n.jsx(t,{htmlRaw:u,code:p})]})}m.__docgenInfo={description:"",methods:[],displayName:"CascadeChecking"};const g=`import { IRTreeView } from "@innorules/ir-style";\r
\r
const args = {\r
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
\r
tree1.mountElement( tc1 );\r
tree2.mountElement( tc2 );\r
tree3.mountElement( tc3 );\r
\r
treeList.forEach( ( tree, treeId ) =>\r
{\r
    const nodeDataList = [];\r
\r
    for( let i = 0; i < 100; i++ )\r
    {\r
        const nodeData = {\r
            key: String( i ),\r
            caption: String( i ),\r
            columns: [ "0" ],\r
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
                columns: [ "1" ],\r
                children: [{\r
                    key: childKey + "-0",\r
                    caption: "자식",\r
                    columns: [ "2" ],\r
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
\r
    tree.addHook( "headerChangeChecking", () => true );\r
    tree.addHook( "headerChangeChecked", ( checked ) => console.log( "tree" + treeId + "::headerChangeChecked", checked ) );\r
    tree.addHook( "nodeChangeChecked", ( node, checked ) => console.log( "tree" + treeId + "::nodeChangeChecked", checked ) );\r
    tree.addHook( "nodeSelectionChange", () => console.log( "tree" + treeId + "::nodeSelectionChange" ) );\r
} );`,b=`<div style="display: grid; gap: 8px; grid-auto-flow: column; grid-auto-columns: 300px; height: 300px">\r
    <div id="tc1" class="border"></div>\r
    <div id="tc2" class="border"></div>\r
    <div id="tc3" class="border"></div>\r
</div>`;function x(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx("p",{children:"Checkbox 사용 케이스 (inner, column 레이아웃 2가지 모드 제공, ui는 checkbox, favorite 2가지 스타일 제공)"}),n.jsx(t,{htmlRaw:b,code:g})]})}x.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const y=`import { IRTreeView } from "@innorules/ir-style";\r
import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
const tree = new IRTreeView( {\r
    showIcon: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
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
// tree drag hook\r
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
// grid drop event 처리\r
grid.onDropOnCell = ( row, col, ev ) =>\r
{\r
    const data = ev.dataTransfer.getData( "text/plain" );\r
\r
    if( !data ) return;\r
\r
    grid.setText( row, col, data );\r
};`,k=`<div\r
    style="display: grid; grid-template-columns: 240px 1fr; grid-template-rows: minmax(0,1fr); height: 300px; gap: 8px">\r
    <div id="treeContainer" class="border"></div>\r
    <div id="gridContainer" style="display: grid"></div>\r
</div>`;function v(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx("p",{children:"DragDrop 처리 케이스 (현재 예제에서는 rootNode는 dragging 처리 불가)"}),n.jsx(t,{htmlRaw:k,code:y})]})}v.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};const w=`import {\r
    IRTreeView,\r
    IRTreeViewDragDropMovePlugin,\r
    IRConfirm,\r
} from "@innorules/ir-style";\r
\r
const args = {\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
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
const tree2 = new IRTreeView( {\r
    ...args,\r
    headerRow: {\r
        columnCount: 2,\r
        text: ["트리2"],\r
        width: ["*", "24px"],\r
    },\r
} );\r
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
\r
// nodeMoved hook\r
tree1.addHook( "nodeMoved", ( node, position ) =>\r
{\r
    console.log( "[nodeMoved]", node.key, position );\r
} );\r
\r
tree1.mountElement( treeContainer1 );\r
tree2.mountElement( treeContainer2 );\r
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
} );`,C=`<div\r
    style="display: grid; grid-template-columns: 340px 340px; grid-template-rows: minmax(0,1fr); height: 300px; gap: 8px">\r
    <div id="treeContainer1" class="border"></div>\r
    <div id="treeContainer2" class="border"></div>\r
</div>`;function f(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeViewDragDropMovePlugin"}),n.jsxs("ol",{className:"ir-list-disc ir-pl-[20px] ir-mb-[8px]",children:[n.jsx("li",{children:"canNodeMoveStart dragStart 시작 검사"}),n.jsx("li",{children:"canNodeMoveDragOver dragOver 처리 검사"}),n.jsx("li",{children:"canNodeMoveDrop drop 처리 여부 검사"})]}),n.jsx(t,{htmlRaw:C,code:w})]})}f.__docgenInfo={description:"",methods:[],displayName:"DragDropMove"};const _=`import {\r
    IRTreeView,\r
    IRTreeViewColStickyPlugin,\r
    IRSplitContainer,\r
} from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#treeview", "#temp"],\r
    options: { direction: "horizontal" },\r
} );\r
\r
const tree = new IRTreeView( {\r
    multiSelect: true,\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
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
const treeViewColStickyPlugin = new IRTreeViewColStickyPlugin();\r
tree.mountElement( treeview );\r
tree.addPlugin( treeViewColStickyPlugin );\r
\r
const node = tree.addNode( {\r
    key: "test",\r
    caption: "비활성화",\r
    disabled: true,\r
} );\r
\r
for( let i = 0; i < 5; i++ )\r
{\r
    tree.addNode( {\r
        key: String( i ),\r
        caption: String( i ),\r
        columns: [ "0", "4", "5" ],\r
    } );\r
}\r
\r
// 중간 삽입 케이스\r
tree.addNode( {\r
    insertKey: "0",\r
    key: "insert",\r
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandableexpandable & expandableexpandable & expandable",\r
    expandable: true,\r
    columns: [ "", "34", "45" ],\r
} );\r
\r
tree.addNode( {\r
    insertKey: "0",\r
    key: "insert4",\r
    caption: "리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트",\r
    expandable: true,\r
    columns: [ "", "34", "" ],\r
} );\r
\r
tree.addNodeList(\r
    { insertKey: "0" },\r
    [\r
        {\r
            key: "insert2",\r
            caption: "insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",\r
            columns: [ "4", "", "" ],\r
        },\r
        {\r
            key: "insert3",\r
            caption: "text",\r
            columns: [ "1", "", "4" ],\r
        },\r
    ],\r
);\r
\r
// 자식 노드 추가 케이스\r
tree.addNodeList(\r
    { parentKey: "0" },\r
    [\r
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--primary-active)" },\r
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--danger)" },\r
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
tree.addNodeList(\r
    { parentKey: "1" },\r
    [\r
        { key: "1-0", caption: "자식" },\r
        { key: "1-1", caption: "자식" },\r
        { key: "1-2", caption: "자식" },\r
    ],\r
);\r
\r
const deppDepthNode = {\r
    key: "5",\r
    caption: "5",\r
    expanded: true,\r
    columns: ["0", "1", "1"],\r
};\r
\r
const dumStr = "41d2#@561__..28& 6__-23)]{4612가414한글124000";\r
\r
( function( depth )\r
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
tree.addNode( { parentKey: "1-2", key: "1-2-0", caption: "자식" } );\r
\r
tree.autoSizeColumn( 0 );\r
\r
change_btn.onclick = () =>\r
{\r
    const randomWidth = ( Math.floor( Math.random() * 101 ) + 50 ) + "px";\r
    tree.setColumnWidth( 2, randomWidth );\r
};\r
change_col_btn1.onclick = () =>\r
{\r
    tree.setColumnCount( 3 );\r
};\r
change_col_btn2.onclick = () =>\r
{\r
    tree.setColumnCount( 4 );\r
};\r
change_col_btn3.onclick = () =>\r
{\r
    tree.setColumnCount( 5 );\r
};\r
remove_btn.onclick = () =>\r
{\r
    tree.removePlugin( treeViewColStickyPlugin );\r
};`,D=`<button id="change_btn" class="button mb--lg">룰(메인) 너비 변경</button>\r
<button id="change_col_btn1" class="button">3 Column Count</button>\r
<button id="change_col_btn2" class="button">4 Column Count</button>\r
<button id="change_col_btn3" class="button">5 Column Count</button>\r
<button id="remove_btn" class="button">Remove Plugin</button>\r
<div class="split-container">\r
    <div id="treeview" style="display: grid; width: 700px; height: 300px; border: 1px solid var(--border-color)">\r
    </div>\r
    <div id="temp"></div>\r
</div>`;function I(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx(o,{children:"ir-style@^2.14.1"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRTreeViewColStickyPlugin"}),"을 이용하여 Content 컬럼을 제외한 우측 컬럼을 고정할 수 있습니다.",n.jsx("br",{}),"※ 최대 5개만 고정이 가능합니다."]}),n.jsx(t,{htmlRaw:D,code:_})]})}I.__docgenInfo={description:"",methods:[],displayName:"StickyColumn"};const N=`import {\r
    IRTreeView,\r
    IRTreeViewTooltipPlugin,\r
    IRSplitContainer,\r
} from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#treeview", "#temp"],\r
    options: { direction: "horizontal", sizes: [70, 30] },\r
} );\r
\r
const tree = new IRTreeView( {\r
    multiSelect: true,\r
    showIcon: true,\r
    showCheckbox: true,\r
    defaultIcon: "ir-icon--folder-fill",\r
    defaultIconColor: "var(--blue)",\r
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
const tooltipPlugin = new IRTreeViewTooltipPlugin( {\r
    placement: "bottom-start",\r
    // interval: 60,\r
    // offset: 15,\r
    // refMode: "pointer",\r
    // tooltipPropKey: "tooltipText",\r
} );\r
tree.mountElement( treeview );\r
tree.addPlugin( tooltipPlugin );\r
\r
tree.addHook( "contextMenu", ( ev ) =>\r
{\r
    menu.showAtPoint( ev.clientX, ev.clientY );\r
    console.log( "contextMenu selected::", tree.getSelectedNodes() );\r
} );\r
\r
const node = tree.addNode( {\r
    key: "test",\r
    caption: "비활성화",\r
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
tree.addNode( {\r
    insertKey: "0",\r
    key: "insert",\r
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandable",\r
    expandable: true,\r
    columns: ["", "34", "45"],\r
} );\r
\r
tree.addNodeList(\r
    { insertKey: "0" },\r
    [\r
        {\r
            key: "insert2",\r
            caption: "insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 ",\r
        },\r
        {\r
            key: "insert3",\r
            caption: "",\r
            columns: ["1", "", "4"],\r
        },\r
    ],\r
);\r
\r
tree.addNodeList(\r
    { parentKey: "0" },\r
    [\r
        { key: "0-1", caption: "", iconColor: "var(--primary-active)" },\r
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--danger)" },\r
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
} )( 10 );\r
\r
deppDepthNode.children = [\r
    ...Array.from( { length: 5 }, ( _, i ) => ( { key: ["5", i].join( "--" ), caption: i.toString() } ) ),\r
    ...deppDepthNode.children,\r
];\r
\r
// 노드 데이터 변경 시\r
tree.updateNodeData( "insert", {\r
    caption: "changeDate",\r
} );\r
\r
tree.addNode( deppDepthNode );\r
\r
// tree.removePlugin(tooltipPlugin)\r
\r
// remove_btn.onclick = () => tree.removePlugin(tooltipPlugin);`,R=`<button id="remove_btn" class="button mb--lg">Remove Plugin</button>\r
<div>\r
    <div id="treeview" style="display: grid; height: 300px; border: 1px solid var(--border-color)"></div>\r
    <div id="temp"></div>\r
</div>`;function S(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRTreeView"}),n.jsx(o,{children:"ir-style@^2.17.0"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRTreeViewTooltipPlugin"}),"을 이용하여 tooltip 기능을 사용하실 수 있습니다.",n.jsx("br",{}),"※ 비활성화 노드와 빈 값은 툴팁이 적용되지 않습니다."]}),n.jsx(t,{htmlRaw:R,code:N})]})}S.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const L={title:"JS Components/IRTreeView"},E=["Basic","BulkData","CascadeChecking","Checkbox","DragDrop","DragDropMove","StickyColumn","Tooltip"];export{l as Basic,s as BulkData,m as CascadeChecking,x as Checkbox,v as DragDrop,f as DragDropMove,I as StickyColumn,S as Tooltip,E as __namedExportsOrder,L as default};
