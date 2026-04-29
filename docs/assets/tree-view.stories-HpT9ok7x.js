import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./context-C6uFeUW4.js";import{t as s}from"./jsx-runtime-6sF1Ejqi.js";var ee,te=e((()=>{ee=`import { IRSplitContainer, IRContextMenu } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#treeContainer", "#temp"],
    options: { direction: "horizontal" },
} );

const menu = new IRContextMenu( {
    items: [
        {
            id: "node.add",
            type: "command-button",
            label: "노드 추가",
        },
        {
            id: "node.remove",
            type: "command-button",
            label: "노드 제거",
        },
        {
            id: "node.expand",
            type: "command-button",
            label: "노드 열기",
        },
        {
            id: "node.collapse",
            type: "command-button",
            label: "노드 접기",
        },
    ],
} );

globalThis.menu = menu;
`})),c,ne=e((()=>{c=`import { IRTreeView, uuid } from "@innorules/ir-style";

/** IRTreeView 생성 */
const tree = new IRTreeView( {
    /** 체크박스 옵션 설정 */
    showCheckbox: true,
    checkboxOptions: {
        layout: "column",
    },
    /** 아이콘 옵션 설정 */
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--ir-blue-4)",
    /** 헤더 설정 */
    displayHeader: true,
    headerRow: {
        columnCount: 4,
        text: ["헤더", "폴더", "룰(메인)", "ext."],
        width: ["*", "48px", "70px", "48px"],
    },
    /** 여러 노드 선택 가능 여부 설정 */
    multiSelect: true,
} );

tree.mountElement( treeContainer );

/** IRTreeView AddHook */
tree.addHook( "contextMenu", ( ev ) => menu.showAtPoint( ev.clientX, ev.clientY ) );
tree.addHook( "nodeExpanded", ( node ) => console.log( "nodeExpanded", node ) );
tree.addHook( "nodeCollapsed", ( node ) => console.log( "nodeCollapsed", node ) );
tree.addHook( "nodeClick", ( ev, node ) => console.log( "nodeClick", node ) );
tree.addHook( "nodeDoubleClick", ( ev, node ) => console.log( "nodeDoubleClick", node ) );
tree.addHook( "nodeSelect", ( node ) => console.log( "nodeSelect", node ) );
tree.addHook( "nodeSelectionChange", ( nodeList ) => console.log( "nodeSelectionChange", nodeList ) );
tree.addHook( "nodeRelease", ( node ) => console.log( "nodeRelease", node ) );

/** API 데모 (체크박스, 버튼 영역) */
chk_header_visible.onchange = ( ev ) => tree.displayHeader = ev.currentTarget.checked;
chk_toggle_columns.onchange = ( ev ) => tree.setColumnCount( ev.currentTarget.checked ? 4 : 1 );
chk_toggle_multi_select.onchange = ( ev ) => tree.multiSelect = ev.currentTarget.checked;

btn_clear.onclick = () => tree.clear();
// 선택된 노드 모두 출력
btn_print_selection.onclick = () => console.log( tree.getSelectedNodes() );
// 모든 노드 리스트 출력
btn_print_list.onclick = () => console.log( tree.getSortedNodeList() );

btn_add.onclick = () => tree.addNode( { key: uuid(), caption: uuid() } );
btn_add_child.onclick = () =>
{
    const selected = tree.getSelectedNodeOrNull();

    if( selected )
        tree.addNode( { parentKey: selected.key, key: uuid(), caption: uuid() } );
};

btn_remove.onclick = async () =>
{
    const selected = tree.getSelectedNodes();

    for( const { key } of selected )
        await tree.removeNode( key );
};

btn_clear_children.onclick = () =>
{
    const selected = tree.getSelectedNodes();

    selected.forEach( ( node ) => tree.clearChildNodes( node.key ) );
};

btn_expand_all.onclick = async () =>
{
    await tree.expandAll();
};

btn_collapse_all.onclick = async () =>
{
    await tree.collapseAll();
};

btn_auto_size.onclick = async () =>
{
    await tree.autoSizeColumn( 0 );
};

btn_auto_size2.onclick = async () =>
{
    await tree.autoSizeColumn( 1 );
    await tree.autoSizeColumn( 2 );
    await tree.autoSizeColumn( 3 );
};

btn_scroll.onclick = () =>
{
    tree.scrollToNode( txt_value.value );
};

/** API 데모 (TreeView) */
// 노드 추가
const node = tree.addNode( {
    key: "test1",
    caption: "비활성화",
    disabled: true,
} );

// 노드의 텍스트 설정
node.setColumnText( 0, "텍스트   변경  2   23" );
node.setColumnText( 1, "5" );

// 여러 노드 추가
for( let i = 0; i < 5; i++ )
{
    tree.addNode( {
        key: \`test-\${i}\`,
        caption: \`test-\${i}\`,
        columns: ["0", "4", "5"],
    } );
}

// 노드 리스트 추가
tree.addNodeList(
    { parentKey: "test-0" },
    [
        { key: "1-0", caption: "자식1" },
        { key: "1-1", caption: "자식2" },
        { key: "1-2", caption: "자식3", expanded: true },
    ],
);

// 깊이 있는 노드 추가 예시
const deppDepthNode = {
    key: "5",
    caption: "5",
    expanded: true,
    children: [],
};

const dumStr = "41d2#@561__..28& 6__-23)]{4612가414한글124000";

( function( depth )
{
    let cur = deppDepthNode;

    for( let i = 0; i < depth; i++ )
    {
        const key = ["5", i, dumStr].join( "-" );
        cur.children = [{ key, caption: key, expanded: true, children: [] }];
        cur = cur.children[0];
    }
} )( 50 );

deppDepthNode.children = [
    ...Array.from( { length: 5 }, ( _, i ) => ( { key: ["5", i].join( "--" ), caption: i.toString() } ) ),
    ...deppDepthNode.children,
];

tree.addNode( deppDepthNode );
tree.addNode( { parentKey: "1-2", key: "1-2-0", caption: "parentKey 1-2의 자식노드" } );

// 특정 노드 확장
tree.expandNode( "test-0" );

// 노드 중간 삽입 예시 1
tree.addNode( {
    insertKey: "test-0",
    key: "insert",
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandable",
    expandable: true,
    expanded: true,
    columns: ["", "34", "45"],
    children: [
        { key: "insert-0", caption: "insert의 자식노드" },
    ],
} );

// 노드 중간 삽입 예시 2
tree.addNodeList(
    { insertKey: "test-0" },
    [
        {
            key: "insert2",
            caption: "textColor blue insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",
            textColor: "var(--ir-blue-6)",
        },
        {
            key: "insert3",
            caption: "text",
            columns: ["1", "", "4"],
        },
    ],
);

// 자식 노드 추가 예시
tree.addNodeList(
    { parentKey: "test-1" },
    [
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--ir-css-primary-active-color)" },
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--ir-css-danger-color)" },
        {
            key: "0-3",
            caption: "자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3",
            iconColor: "var(--yellow)",
            expanded: true,
            children: [
                { key: "0-3-0", caption: "grand" },
                { key: "0-3-1", caption: "grand2" },
            ],
        },
    ],
);

window.__TREE_VIEW__ = tree;`})),l,re=e((()=>{l=`<div class="flex flex--column gap--sm mb--sm">
    <div class="flex align-items--center gap-x--sm">
        <label>
            <input id="chk_header_visible" checked type="checkbox" />header visible
        </label>
        <label>
            <input id="chk_toggle_columns" checked type="checkbox" />Toggle Columns
        </label>
        <label>
            <input id="chk_toggle_multi_select" checked type="checkbox" />Multi Select
        </label>
    </div>
    <div class="flex align-items--center gap-x--sm">
        <button id="btn_clear" class="button">Clear</button>
        <button id="btn_print_selection" class="button">Print Selected</button>
        <button id="btn_print_list" class="button">Print List</button>
        <button id="btn_add" class="button">Add</button>
        <button id="btn_add_child" class="button">Add Child</button>
        <button id="btn_remove" class="button">Remove</button>
        <button id="btn_clear_children" class="button">Remove Children</button>
        <button id="btn_expand_all" class="button">Expand All</button>
        <button id="btn_collapse_all" class="button">Collapse All</button>
        <button id="btn_auto_size" class="button">AutoSize</button>
        <button id="btn_auto_size2" class="button">AutoSize2</button>
    </div>
    <div class="flex align-items--center gap-x--sm">
        <input id="txt_value" class="input__native" value="5" style="width: 200px" />
        <button id="btn_scroll" class="button">Scroll</button>
    </div>
</div>

<!-- IRTreeView -->
<div>
    <div id="treeContainer" class="border"></div>
    <div id="temp"></div>
</div>`})),ie,ae=e((()=>{ie=`#treeContainer {
    display: grid;
    height: 300px;
}
`}));function oe(){return(0,u.jsxs)(r,{children:[(0,u.jsx)(t,{children:`IRTreeView`}),(0,u.jsx)(`p`,{children:`기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다.`}),(0,u.jsx)(i,{docList:se}),(0,u.jsx)(a,{htmlRaw:l,css:ie,code:ee,exampleCode:c})]})}var u,se,ce=e((()=>{te(),ne(),re(),ae(),o(),u=s(),se=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/types/_innorules_tree-view.IRTreeViewArgs.html`,`IRTreeViewArgs`]],oe.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),d,le=e((()=>{d=`import { IRTreeView } from "@innorules/ir-style";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 3,
        text: ["헤더", "폴더", "룰(메인)"],
        width: ["*", "48px", "70px"],
    },
} );

tree.mountElement( treeContainer );

globalThis.tree = tree;`})),f,ue=e((()=>{f=`const nodeDataList = [];

for( let i = 0; i < 50000; i++ )
{
    nodeDataList.push( {
        key: String( i ),
        caption: String( i ),
        columns: ["0", "0"],
    } );
}

tree.addNodeList( {}, nodeDataList );`})),p,de=e((()=>{p=`<div id="treeContainer" class="border"></div>`})),m,fe=e((()=>{m=`#treeContainer {
    display: grid;
    width: 320px;
    height: 300px;
}
`}));function h(){return(0,g.jsxs)(r,{children:[(0,g.jsx)(t,{children:`IRTreeView BulkData`}),(0,g.jsx)(`p`,{children:`50,000 Row 처리 케이스`}),(0,g.jsx)(i,{docList:_}),(0,g.jsx)(a,{htmlRaw:p,css:m,code:d,exampleCode:f})]})}var g,_,pe=e((()=>{le(),ue(),de(),fe(),o(),g=s(),_=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`]],h.__docgenInfo={description:``,methods:[],displayName:`BulkData`}})),v,me=e((()=>{v=`import { IRTreeView } from "@innorules/ir-style";

const tree = new IRTreeView( {
    showCheckbox: true,
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--ir-blue-4)",
    displayHeader: true,
    multiSelect: true,
    headerRow: {
        text: ["전체 선택"],
        hasCheckbox: true,
    },
} );

tree.mountElement( treeContainer );

tree.addHook( "nodeChangeChecked", ( node, checked ) =>
{
    console.log( "nodeKey: " + node.key + ", cur: " + checked );
} );

for( let i = 0; i < 20; i++ )
{
    const parentKey = String( i );
    const nodeData = {
        key: parentKey,
        caption: parentKey,
        expanded: true,
        children: [],
    };

    for( let j = 0; j < 5; j++ )
    {
        const childKey = i + "-" + j;
        const childNode = {
            key: childKey,
            caption: childKey,
            object: { data: childKey },
            children: [],
        };

        nodeData.children.push( childNode );

        for( let k = 0; k < 5; k++ )
        {
            const childKey = i + "-" + j + "-" + k;

            childNode.children.push( {
                key: childKey,
                caption: childKey,
                disabled: i > 10 && j === 3 && k === 2,
                object: { data: childKey },
            } );
        }
    }

    tree.addNode( nodeData );
}

globalThis.tree = tree;`})),y,he=e((()=>{y=`import { IRTreeViewCascadeCheckingPlugin } from "@innorules/ir-style";

tree.addPlugin( new IRTreeViewCascadeCheckingPlugin( {
    onChanged( updateInfoList )
    {
        // 체크 변경 사항에 대한 목록 추적
        console.log( updateInfoList );
    },
} ) );
`})),b,ge=e((()=>{b=`#treeContainer {
    width: 320px;
    height: 400px;
    display: grid;
}
`})),x,_e=e((()=>{x=`<div id="treeContainer" class="border"></div>`}));function ve(){return(0,C.jsx)(`input`,{type:`checkbox`,className:`checkbox__input`,"data-state":`sub-checked`,style:{pointerEvents:`none`}})}function S(){return(0,C.jsxs)(r,{children:[(0,C.jsx)(t,{children:`IRTreeView CascadeCheckingPlugin`}),(0,C.jsx)(n,{children:`ir-style@^2.14.0`}),(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`code`,{children:`IRTreeViewCascadeCheckingPlugin`}),`을 이용하여 부모/자식 간의 체크 상태 전파 기능을 추가할 수 있습니다.`]}),(0,C.jsxs)(`ul`,{children:[(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`code`,{children:`disabled`}),` 상태의 자식 노드로 체크됩니다.`]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(ve,{}),` `,(0,C.jsx)(`code`,{children:`subChecked`}),`: 모두 체크되어 있지 않고, 1개 이상 체크된 경우 true`]})]}),(0,C.jsx)(i,{docList:w}),(0,C.jsx)(a,{css:b,htmlRaw:x,code:v,exampleCode:y})]})}var C,w,ye=e((()=>{me(),he(),ge(),_e(),o(),C=s(),w=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/classes/_innorules_tree-view.IRTreeViewCascadeCheckingPlugin.html`,`IRTreeViewCascadeCheckingPlugin`]],S.__docgenInfo={description:``,methods:[],displayName:`CascadeChecking`}})),T,be=e((()=>{T=`const args = {
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 2,
        text: ["헤더", "Title!"],
        width: ["*", "60px"],
    },
};

globalThis.args = args;

globalThis.setupTree = ( tree1, tree2, tree3 ) =>
{
    const treeList = [tree1, tree2, tree3];

    tree1.mountElement( tc1 );
    tree2.mountElement( tc2 );
    tree3.mountElement( tc3 );

    treeList.forEach( ( tree ) =>
    {
        const nodeDataList = [];

        for( let i = 0; i < 100; i++ )
        {
            const nodeData = {
                key: String( i ),
                caption: String( i ),
                columns: ["0"],
                children: [],
            };

            for( let j = 0; j < 10; j++ )
            {
                const childKey = i + "-" + j;

                nodeData.children.push( {
                    key: childKey,
                    caption: i + "-" + j,
                    columns: ["1"],
                    children: [{
                        key: childKey + "-0",
                        caption: "자식",
                        columns: ["2"],
                        hasCheckbox: false,
                        children: [{
                            key: childKey + "-0-0",
                            caption: "자식2",
                            hasCheckbox: false,
                        }],
                    }],
                } );
            }

            nodeDataList.push( nodeData );
        }
        tree.addNodeList( {}, nodeDataList );
    } );
};`})),E,xe=e((()=>{E=`import { IRTreeView } from "@innorules/ir-style";

const tree1 = new IRTreeView( {
    ...args,
} );

const tree2 = new IRTreeView( {
    ...args,
    checkboxOptions: {
        layout: "column",
    },
} );

const tree3 = new IRTreeView( {
    ...args,
    checkboxOptions: {
        layout: "column",
        ui: "favorite",
    },
} );

const treeList = [tree1, tree2, tree3];
treeList.forEach( ( tree, treeId ) =>
{
    tree.addHook( "headerChangeChecking", () => true );
    tree.addHook( "headerChangeChecked", ( checked ) => console.log( "tree" + treeId + "::headerChangeChecked", checked ) );
    tree.addHook( "nodeChangeChecked", ( node, checked ) => console.log( "tree" + treeId + "::nodeChangeChecked", checked ) );
} );

setupTree( tree1, tree2, tree3 );`})),D,Se=e((()=>{D=`<div class="divWrapper">
    <div id="tc1" class="border"></div>
    <div id="tc2" class="border"></div>
    <div id="tc3" class="border"></div>
</div>`})),O,Ce=e((()=>{O=`.divWrapper {
    display: grid;
    gap: 8px;
    grid-auto-flow: column;
    grid-auto-columns: 300px;
    height: 300px;
}

#tc1,
#tc2,
#tc3 {
    display: grid;
}
`}));function k(){return(0,A.jsxs)(r,{children:[(0,A.jsx)(t,{children:`IRTreeView Checkbox`}),(0,A.jsx)(`p`,{children:`Checkbox 사용 케이스 (inner, column 레이아웃 2가지 모드 제공, ui는 checkbox, favorite 2가지 스타일 제공)`}),(0,A.jsx)(i,{docList:j}),(0,A.jsx)(a,{htmlRaw:D,css:O,code:T,exampleCode:E})]})}var A,j,we=e((()=>{be(),xe(),Se(),Ce(),o(),A=s(),j=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/types/_innorules_tree-view.IRTreeViewArgs.html`,`IRTreeViewArgs`]],k.__docgenInfo={description:``,methods:[],displayName:`Checkbox`}})),M,Te=e((()=>{M=`import { IRTreeView } from "@innorules/ir-style";
import { IRGrid } from "@innorules/ir-style/lib/esm/grid.js";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--ir-blue-4)",
} );

const grid = new IRGrid( {
    contextElement: gridContainer,
} );

tree.mountElement( treeContainer );

for( let i = 0; i < 20; i++ )
{
    const parentKey = String( i );
    const nodeData = {
        key: parentKey,
        caption: parentKey,
        expanded: true,
        children: [],
    };

    for( let j = 0; j < 5; j++ )
    {
        const childKey = i + "-" + j;
        nodeData.children.push( {
            key: childKey,
            caption: childKey,
            object: { data: childKey },
        } );
    }

    tree.addNode( nodeData );
}

globalThis.tree = tree;
globalThis.grid = grid;`})),N,Ee=e((()=>{N=`// IRTreeView drag hook
tree.addHook( "nodeCheckDragging", ( ev, node ) =>
{
    if( node.isRootNode() ) return false;
} );

tree.addHook( "nodeDragStart", ( ev, node ) =>
{
    ev.dataTransfer.setData( "text/plain", node.caption );
} );

// IRGrid drop event 처리
grid.onDropOnCell = ( row, col, ev ) =>
{
    const data = ev.dataTransfer.getData( "text/plain" );

    if( !data ) return;

    grid.setText( row, col, data );
};`})),P,De=e((()=>{P=`<div class="divWrapper">
    <div id="treeContainer" class="border"></div>
    <div id="gridContainer"></div>
</div>`})),F,Oe=e((()=>{F=`.divWrapper {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: minmax(0, 1fr);
    height: 300px;
    gap: 8px;
}

#treeContainer,
#gridContainer {
    display: grid;
}
`}));function I(){return(0,L.jsxs)(r,{children:[(0,L.jsx)(t,{children:`IRTreeView DragDrop`}),(0,L.jsx)(`p`,{children:`DragDrop 처리 케이스 (현재 예제에서는 rootNode는 dragging 처리 불가)`}),(0,L.jsx)(i,{docList:R}),(0,L.jsx)(a,{htmlRaw:P,css:F,code:M,exampleCode:N})]})}var L,R,ke=e((()=>{Te(),Ee(),De(),Oe(),o(),L=s(),R=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/types/_innorules_tree-view.IRTreeViewHook.html`,`IRTreeViewHook`]],I.__docgenInfo={description:``,methods:[],displayName:`DragDrop`}})),z,Ae=e((()=>{z=`import { IRTreeView } from "@innorules/ir-style";

const args = {
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--ir-blue-4)",
    displayHeader: true,
};

const tree1 = new IRTreeView( {
    ...args,
    headerRow: {
        columnCount: 2,
        text: ["트리1"],
        width: ["*", "24px"],
    },
} );

const tree2 = new IRTreeView( {
    ...args,
    headerRow: {
        columnCount: 2,
        text: ["트리2"],
        width: ["*", "24px"],
    },
} );

tree1.mountElement( treeContainer1 );
tree2.mountElement( treeContainer2 );

// nodeMoved hook
tree1.addHook( "nodeMoved", ( node, position ) =>
{
    console.log( "[nodeMoved]", node.key, position );
} );

const treeList = [tree1, tree2];

treeList.forEach( ( tree, treeId ) =>
{
    let row = 0;

    for( let i = 0; i < 2; i++ )
    {
        const parentKey = treeId + "-" + ++row;
        const nodeData = {
            key: parentKey,
            caption: parentKey,
            expanded: true,
            children: [],
        };

        for( let j = 0; j < 5; j++ )
        {
            const childKey = treeId + "-" + ++row;
            nodeData.children.push( {
                key: childKey,
                caption: childKey,
                columns: [String( row )],
                object: { data: childKey },
            } );
        }

        tree.addNode( nodeData );
    }
} );

globalThis.tree1 = tree1;
globalThis.tree2 = tree2;`})),B,je=e((()=>{B=`import {
    IRTreeViewDragDropMovePlugin,
    IRConfirm,
} from "@innorules/ir-style";

// 플러그인 추가
tree1.addPlugin( new IRTreeViewDragDropMovePlugin( {
    canNodeMoveStart: ( node ) => node.caption !== "0-1",
    canNodeMoveDragOver: ( isSelf, node, cursor ) => isSelf && node.caption !== "0-7",
    onDropNodeData( isSelf, srcData, targetData )
    {
        console.log( "tree1.onDropNodeData", isSelf, srcData, targetData );
        // 내부 이동만 처리
        if( !isSelf ) return;

        tree1.moveNode( srcData.srcNodeData.key, {
            targetKey: targetData.nodeKey,
            position: targetData.cursorType,
        } );
    },
    onDragEnd( isSelf, srcData )
    {
        console.log( "tree1.drag-end", isSelf, srcData );
    },
} ) );

tree2.addPlugin( new IRTreeViewDragDropMovePlugin( {
    canNodeMoveDrop: ( context ) =>
    {
        return new Promise( ( resolve ) => new IRConfirm( {
            buttonType: ["ok", "cancel"],
            contentElement: "정말 추가하시겠습니까?",
            onClick: ( type ) => resolve( type === "ok" ),
            escButton: "cancel",
            enterButton: "ok",
        } ).show() );
    },
    onDragEnd( isSelf, srcData )
    {
        console.log( "tree2.drag-end", isSelf, srcData );
    },
    onDropNodeData( isSelf, srcData, targetData )
    {
        console.log( "tree2.onDropNodeData", isSelf, srcData, targetData );

        // 외부 이동만 처리
        if( isSelf ) return;

        tree2.addNode( {
            insertKey: targetData.nodeKey,
            position: targetData.cursorType,
            ...srcData.srcNodeData,
        } );

        tree1.removeNode( srcData.srcNodeData.key );
    },
} ) );
`})),V,Me=e((()=>{V=`<div class="divWrapper">
    <div id="treeContainer1" class="border"></div>
    <div id="treeContainer2" class="border"></div>
</div>`})),H,Ne=e((()=>{H=`.divWrapper {
    display: grid;
    grid-template-columns: 340px 340px;
    grid-template-rows: minmax(0, 1fr);
    height: 300px;
    gap: 8px;
}

#treeContainer1,
#treeContainer2 {
    display: grid;
}
`}));function U(){return(0,W.jsxs)(r,{children:[(0,W.jsx)(t,{children:`IRTreeView DragDropMovePlugin`}),(0,W.jsxs)(`p`,{children:[(0,W.jsx)(`code`,{children:`IRTreeViewDragDropMovePlugin`}),`을 이용하여 트리뷰 노드 간의 드래그 앤 드롭 이동 기능을 추가할 수 있습니다.`]}),(0,W.jsxs)(`ul`,{children:[(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`code`,{children:`canNodeMoveStart`}),` dragStart 시작 검사`]}),(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`code`,{children:`canNodeMoveDragOver`}),` dragOver 처리 검사`]}),(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`code`,{children:`canNodeMoveDrop`}),` drop 처리 여부 검사`]})]}),(0,W.jsx)(i,{docList:G}),(0,W.jsx)(a,{htmlRaw:V,css:H,code:z,exampleCode:B})]})}var W,G,Pe=e((()=>{Ae(),je(),Me(),Ne(),o(),W=s(),G=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/classes/_innorules_tree-view.IRTreeViewDragDropMovePlugin.html`,`IRTreeViewDragDropMovePlugin`]],U.__docgenInfo={description:``,methods:[],displayName:`DragDropMove`}})),K,Fe=e((()=>{K=`import { IRTreeView } from "@innorules/ir-style";

const tree = new IRTreeView( {
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--ir-blue-4)",
    displayHeader: true,
    headerRow: {
        columnCount: 4,
        text: ["헤더", "폴더", "룰(메인)", "ext."],
        width: ["*", "48px", "70px", "48px"],
    },
    checkboxOptions: {
        layout: "column",
    },
} );

tree.mountElement( treeContainer );

for( let i = 0; i < 5; i++ )
{
    tree.addNode( {
        key: String( i ),
        caption: String( i ),
        columns: ["0", "4", "5"],
    } );
}

const deppDepthNode = {
    key: "5",
    caption: "5",
    expanded: true,
    columns: ["0", "1", "1"],
};

const dumStr = "node-deep-depth";

( function()
{
    let cur = deppDepthNode;

    for( let i = 0; i < 20; i++ )
    {
        const key = ["5", i, dumStr].join( "-" );
        cur.children = [{ key, caption: key, expanded: true, children: [], columns: ["0", "1", "1"] }];
        cur = cur.children[0];
    }
} )( 50 );

tree.addNode( deppDepthNode );

tree.autoSizeColumn( 0 );

change_width_btn.onclick = () =>
{
    const randomWidth = ( Math.floor( Math.random() * 101 ) + 50 ) + "px";
    tree.setColumnWidth( 2, randomWidth );
};
change_col_btn1.onclick = () => tree.setColumnCount( 3 );
change_col_btn2.onclick = () => tree.setColumnCount( 4 );
change_col_btn3.onclick = () => tree.setColumnCount( 5 );

globalThis.tree = tree;
`})),q,Ie=e((()=>{q=`import { IRTreeViewColStickyPlugin } from "@innorules/ir-style";

// IRTreeViewColStickyPlugin 플러그인 생성 및 추가
const treeViewColStickyPlugin = new IRTreeViewColStickyPlugin();

tree.addPlugin( treeViewColStickyPlugin );

remove_plugin_btn.onclick = () => tree.removePlugin( treeViewColStickyPlugin );
add_plugin_btn.onclick = () => tree.addPlugin( treeViewColStickyPlugin );`})),J,Le=e((()=>{J=`<div>
    <button id="change_width_btn" class="button mb--lg">룰(메인) 너비 변경</button>
    <button id="change_col_btn1" class="button">3 Column Count</button>
    <button id="change_col_btn2" class="button">4 Column Count</button>
    <button id="change_col_btn3" class="button">5 Column Count</button>
    <button id="remove_plugin_btn" class="button">Remove Plugin</button>
    <button id="add_plugin_btn" class="button">Add Plugin</button>
</div>

<!-- IRTreeView -->
<div id="treeContainer" class="border"></div>`})),Re,ze=e((()=>{Re=`#treeContainer {
    display: grid;
    width: 700px;
    height: 300px;
}
`}));function Be(){return(0,Y.jsxs)(r,{children:[(0,Y.jsx)(t,{children:`IRTreeView ColStickyPlugin`}),(0,Y.jsx)(n,{children:`ir-style@^2.14.1`}),(0,Y.jsxs)(`p`,{children:[(0,Y.jsx)(`code`,{children:`IRTreeViewColStickyPlugin`}),`을 이용하여 Content 컬럼을 제외한 우측 컬럼을 고정할 수 있습니다.`,(0,Y.jsx)(`br`,{}),`※ 최대 5개만 고정이 가능합니다.`]}),(0,Y.jsx)(i,{docList:Ve}),(0,Y.jsx)(a,{htmlRaw:J,css:Re,code:K,exampleCode:q})]})}var Y,Ve,He=e((()=>{Fe(),Ie(),Le(),ze(),o(),Y=s(),Ve=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/classes/_innorules_tree-view.IRTreeViewColStickyPlugin.html`,`IRTreeViewColStickyPlugin`]],Be.__docgenInfo={description:``,methods:[],displayName:`StickyColumn`}})),Ue,We=e((()=>{Ue=`import {
    IRTreeView,
} from "@innorules/ir-style";

globalThis.setupTree = ( treeContainer ) =>
{
    const tree = new IRTreeView( {
        showIcon: true,
        showCheckbox: true,
        defaultIcon: "ir-icon--folder-fill",
        defaultIconColor: "var(--ir-blue-4)",
        displayHeader: true,
        headerRow: {
            columnCount: 4,
            text: ["헤더", "폴더", "룰(메인)", "ext."],
            width: ["*", "48px", "70px", "48px"],
        },
        checkboxOptions: {
            layout: "column",
        },
    } );

    tree.mountElement( treeContainer );

    tree.addNode( {
        key: "test",
        caption: "비활성화 노드와 빈 값은 툴팁이 표시되지 않습니다.",
        disabled: true,
        tooltipText: "[노드] 비활성화",
    } );

    for( let i = 0; i < 5; i++ )
    {
        tree.addNode( {
            key: String( i ),
            caption: String( i ),
            columns: ["0", "4", "5"],
            tooltipText: \`[노드] \${String( i )}\`,
        } );
    }

    tree.addNodeList(
        { insertKey: "0" },
        [
            {
                key: "insert3",
                caption: "",
                columns: ["1", "", "4"],
            },
            {
                key: "insert2",
                caption: "insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2 insert2  insert2 insert2 insert2 insert2",
            },
        ],
    );

    const deppDepthNode = {
        key: "5",
        caption: "5",
        expanded: true,
        children: [],
    };

    const dumStr = "test-node";

    ( function( depth )
    {
        let cur = deppDepthNode;

        for( let i = 0; i < depth; i++ )
        {
            const key = ["5", i, dumStr].join( "-" );
            cur.children = [{ key, caption: key, expanded: true, children: [] }];
            cur = cur.children[0];
        }
    } )( 10 );

    deppDepthNode.children = [
        ...Array.from( { length: 5 }, ( _, i ) => ( { key: ["5", i].join( "--" ), caption: i.toString() } ) ),
        ...deppDepthNode.children,
    ];

    tree.addNode( deppDepthNode );

    return tree;
};`})),Ge,Ke=e((()=>{Ge=`import {
    IRTreeViewTooltipPlugin,
} from "@innorules/ir-style";

const tree = setupTree( treeContainer );

const tooltipPlugin = new IRTreeViewTooltipPlugin( {
    // placement: "bottom-start",
    // interval: 60,
    // offset: 15,
    /** "pointer"로 지정시 마우스 포인터 위치를 기준으로 툴팁 표시 */
    // refMode: "pointer",
    /** "tooltipText"로 지정시 \`node.data.tooltipText\` 값을 사용 */
    // tooltipPropKey: "tooltipText",
} );

tree.addPlugin( tooltipPlugin );

remove_plugin_btn.onclick = () => tree.removePlugin( tooltipPlugin );
add_plugin_btn.onclick = () => tree.addPlugin( tooltipPlugin );
`})),qe,Je=e((()=>{qe=`#treeContainer {
    display: grid;
    width: 700px;
    height: 300px;
}
`})),Ye,Xe=e((()=>{Ye=`<div>
    <button id="remove_plugin_btn" class="button mb--lg">Remove Plugin</button>
    <button id="add_plugin_btn" class="button mb--lg">Add Plugin</button>
</div>

<!-- IRTreeView -->
<div id="treeContainer" class="border"></div>`}));function Ze(){return(0,X.jsxs)(r,{children:[(0,X.jsx)(t,{children:`IRTreeView TooltipPlugin`}),(0,X.jsx)(n,{children:`ir-style@^2.17.0`}),(0,X.jsxs)(`p`,{children:[(0,X.jsx)(`code`,{children:`IRTreeViewTooltipPlugin`}),`을 이용하여 tooltip 기능을 사용하실 수 있습니다.`,(0,X.jsx)(`br`,{}),`※ 비활성화 노드와 빈 값은 툴팁이 적용되지 않습니다.`]}),(0,X.jsx)(i,{docList:Qe}),(0,X.jsx)(a,{css:qe,htmlRaw:Ye,code:Ue,exampleCode:Ge})]})}var X,Qe,$e=e((()=>{We(),Ke(),Je(),Xe(),o(),X=s(),Qe=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/classes/_innorules_tree-view.IRTreeViewTooltipPlugin.html`,`IRTreeViewTooltipPlugin`]],Ze.__docgenInfo={description:``,methods:[],displayName:`Tooltip`}})),Z,et=e((()=>{Z=`import { IRTreeViewDragDropMovePlugin, uuid } from "@innorules/ir-style";

function addRootNode( tree, key, caption )
{
    tree.addNode( { key, caption } );
}

function addChildren( tree, parentKey, children )
{
    tree.addNodeList( { parentKey }, children );
}

// 한 줄 체인 + 옵션으로 마지막 노드 자식들 추가
function addChain( tree, rootKey, rootCaption, depth, lastNodeChildrenCount )
{
    let chainParent = rootKey;

    tree.addNode( {
        key: chainParent,
        caption: rootCaption,
    } );

    for( let i = 1; i <= depth; i++ )
    {
        const key = \`\${rootKey}-\${i}\`;
        tree.addNode( {
            parentKey: chainParent,
            key,
            caption: key,
        } );
        chainParent = key;
    }

    if( lastNodeChildrenCount > 0 )
    {
        const lastKey = \`\${rootKey}-\${depth}\`;
        const children = [];

        for( let i = 1; i <= lastNodeChildrenCount; i++ )
        {
            children.push( {
                parentKey: lastKey,
                key: \`\${lastKey}-child-\${i}\`,
                caption: \`\${rootCaption} child \${i}\`,
            } );
        }

        for( const child of children )
        {
            tree.addNode( {
                parentKey: child.parentKey,
                key: child.key,
                caption: uuid(),
            } );
        }
    }
}

// case-1: 형제/마지막 자식 패턴들
function buildCase1( tree )
{
    addRootNode( tree, "case-1", "형제/마지막 자식 패턴" );

    addChildren(
        tree,
        "case-1",
        [
            { key: "case-1-1", caption: "1-1" },
            { key: "case-1-2", caption: "1-2" },
            { key: "case-1-3", caption: "1-3" },
        ],
    );

    addChildren(
        tree,
        "case-1-2",
        [
            { key: "case-1-2-1", caption: "1-2-1" },
            { key: "case-1-2-2", caption: "1-2-2" },
            { key: "case-1-2-3", caption: "1-2-3" },
        ],
    );

    addChildren(
        tree,
        "case-1-2-2",
        [
            { key: "case-1-2-2-1", caption: "1-2-2-1" },
            { key: "case-1-2-2-2", caption: "1-2-2-2" },
            { key: "case-1-2-2-3", caption: "1-2-2-3" },
        ],
    );

    addChildren(
        tree,
        "case-1-3",
        [
            { key: "case-1-3-1", caption: "1-3-1" },
            { key: "case-1-3-2", caption: "1-3-2" },
        ],
    );
}

// case-2: 위 형제 때문에 │가 이어지는 패턴
function buildCase2( tree )
{
    addRootNode( tree, "case-2", "위 형제 때문에 │가 이어지는 패턴" );

    addChildren(
        tree,
        "case-2",
        [
            { key: "case-2-1", caption: "2-1" },
            {
                key: "case-2-2",
                caption: "2-2",
                expanded: true,
            },
        ],
    );

    addChildren(
        tree,
        "case-2-2",
        [
            { key: "case-2-2-1", caption: "2-2-1" },
            {
                key: "case-2-2-2",
                caption: "2-2-2",
                expanded: true,
            },
        ],
    );

    addChildren(
        tree,
        "case-2-2-2",
        [
            { key: "case-2-2-2-1", caption: "2-2-2-1" },
            { key: "case-2-2-2-2", caption: "2-2-2-2" },
        ],
    );
}

// case-4: 한 줄 체인 + 마지막 노드 아래에 자식들
function buildCase4( tree )
{
    // depth 10 체인 + 마지막 노드 아래에 40개 자식
    addChain( tree, "case-4", "한줄 체인 + 마지막 노드 40개 자식 노드", 10, 40 );
}

function initTreeView( tree )
{
    tree.mountElement( treeContainer );

    buildCase1( tree );
    buildCase2( tree );
    buildCase4( tree );

    tree.expandAll();

    tree.addPlugin( new IRTreeViewDragDropMovePlugin( {
        onDropNodeData( isSelf, srcData, targetData )
        {
            if( !isSelf ) return;

            tree.moveNode( srcData.srcNodeData.key, {
                targetKey: targetData.nodeKey,
                position: targetData.cursorType,
            } );
        },
    } ) );
}

globalThis.initTreeView = initTreeView;`})),tt,nt=e((()=>{tt=`import { IRTreeView } from "@innorules/ir-style";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--ir-blue-4)",
    displayHeader: true,
    headerRow: {
        columnCount: 1,
        text: ["헤더"],
        width: ["*"],
    },
    hiddenExpandIcon: false,
    /** 노드의 depth 선 여부 설정 */
    showOutlines: true,
} );

initTreeView( tree );`})),rt,it=e((()=>{rt=`<div id="treeContainer" class="border"></div>`})),at,ot=e((()=>{at=`#treeContainer {
    display: grid;
    width: 600px;
    height: 400px;
}
`}));function st(){return(0,Q.jsxs)(r,{children:[(0,Q.jsx)(t,{children:`IRTreeView Outlines`}),(0,Q.jsx)(n,{children:`ir-style@^2.23.0`}),(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`code`,{children:`showOutlines: true`}),` 옵션을 활성화하면 각 노드의 Depth에 따라 라인선(│, ├, └)이 자동으로 표시됩니다.`]}),(0,Q.jsx)(i,{docList:ct}),(0,Q.jsx)(a,{htmlRaw:rt,css:at,code:Z,exampleCode:tt})]})}var Q,ct,lt=e((()=>{et(),nt(),it(),ot(),o(),Q=s(),ct=[[`/classes/_innorules_tree-view.IRTreeView.html`,`IRTreeView`],[`/types/_innorules_tree-view.IRTreeViewArgs.html`,`IRTreeViewArgs`]],st.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),ut,$;e((()=>{ce(),pe(),ye(),we(),ke(),Pe(),He(),$e(),lt(),ut={title:`JS Components/IRTreeView`},$=[`Basic`,`BulkData`,`CascadeChecking`,`Checkbox`,`DragDrop`,`DragDropMove`,`StickyColumn`,`Tooltip`,`Outlines`]}))();export{oe as Basic,h as BulkData,S as CascadeChecking,k as Checkbox,I as DragDrop,U as DragDropMove,st as Outlines,Be as StickyColumn,Ze as Tooltip,$ as __namedExportsOrder,ut as default};