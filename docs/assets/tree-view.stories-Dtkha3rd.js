import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as n,a as t,L as o,V as a}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";function c(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeView"}),e.jsx("p",{children:"Checkbox 사용 케이스 (inner, column 레이아웃 2가지 모드 제공, ui는 checkbox, favorite 2가지 스타일 제공)"}),e.jsx(o,{html:e.jsxs("div",{style:{display:"grid",gap:8,gridAutoFlow:"column",gridAutoColumns:"300px",height:300},children:[e.jsx("div",{id:"tc1",className:"border"}),e.jsx("div",{id:"tc2",className:"border"}),e.jsx("div",{id:"tc3",className:"border"})]}),code:`
import { IRTreeView } from "./dist/index.js";

const args = {
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 2,
        text: ["헤더", "Title!"],
        width: ["*", "60px"],
    }
};

const tree1 = new IRTreeView( {
    ...args,
} );

const tree2 = new IRTreeView( {
    ...args,
    checkboxOptions: {
        layout: "column"
    }
} );

const tree3 = new IRTreeView( {
    ...args,
    checkboxOptions: {
        layout: "column",
        ui: "favorite"
    }
} );

const treeList = [tree1, tree2, tree3];

tree1.mountElement( tc1 );
tree2.mountElement( tc2 );
tree3.mountElement( tc3 );

treeList.forEach( (tree, treeId) => {
    const nodeDataList = [];

    for (let i = 0; i < 100; i++)
    {
        const nodeData = {
            key: String(i),
            caption: String(i),
            columns: [ "0" ],
            children: []
        };

        for (let j = 0; j < 10; j++)
        {
            const childKey = i + "-" + j;

            nodeData.children.push({
                key: childKey,
                caption: i + "-" + j,
                columns: [ "1" ],
                children: [{
                    key: childKey + "-0",
                    caption: "자식",
                    columns: [ "2" ],
                    hasCheckbox: false,
                    children: [{
                        key: childKey + "-0-0",
                        caption: "자식2",
                        hasCheckbox: false,
                    }]
                }]
            });
        }

        nodeDataList.push(nodeData);
    }
    tree.addNodeList({}, nodeDataList);

    tree.addHook( "headerChangeChecking", () => true );
    tree.addHook( "headerChangeChecked", (checked) => console.log( "tree" + treeId + "::headerChangeChecked", checked ) );
    tree.addHook( "nodeChangeChecked", (node, checked) => console.log( "tree" + treeId + "::nodeChangeChecked", checked ) );
    tree.addHook( "nodeSelectionChange", () => console.log( "tree" + treeId + "::nodeSelectionChange" ) );
});

`})]})}c.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};function s(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeView"}),e.jsx("p",{children:"50,000 Row 처리 케이스"}),e.jsx(o,{html:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",marginBottom:4,columnGap:8,alignItems:"center"}}),e.jsx("div",{id:"container",style:{display:"grid",width:320,height:300,border:"1px solid var(--border-color)"}})]}),code:`
import { IRTreeView } from "./dist/index.js";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 3,
        text: ["헤더", "폴더", "룰(메인)"],
        width: ["*", "48px", "70px"],
    }
} );

tree.mountElement( container );

const nodeDataList = [];

for ( let i = 0; i < 50000; i++ )
{
    nodeDataList.push({
        key: String(i),
        caption: String(i),
        columns: [ "0", "0" ]
    });
}

tree.addNodeList({}, nodeDataList);

`})]})}s.__docgenInfo={description:"",methods:[],displayName:"BulkData"};function u(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeView"}),e.jsx("p",{children:"DragDrop 처리 케이스 (현재 예제에서는 rootNode는 dragging 처리 불가)"}),e.jsx(o,{html:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"240px 1fr",gridTemplateRows:"minmax(0,1fr)",height:300,gap:8},children:[e.jsx("div",{id:"treeContainer",className:"border"}),e.jsx("div",{id:"gridContainer",style:{display:"grid"}})]}),code:`
import { IRTreeView } from "./dist/index.js";
import { IRGrid } from "./dist/grid.js";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
} );

const grid = new IRGrid({
    contextElement: gridContainer
});

tree.mountElement( treeContainer );

for ( let i = 0; i < 20; i++ )
{
    const parentKey = String(i);
    const nodeData = {
        key: parentKey,
        caption: parentKey,
        expanded: true,
        children: []
    };

    for ( let j = 0; j < 5; j++ )
    {
        const childKey = i + "-" + j;
        nodeData.children.push({
            key: childKey,
            caption: childKey,
            object: { data: childKey }
        });
    }

    tree.addNode(nodeData);
}

// tree drag hook
tree.addHook("nodeCheckDragging", (ev, node) => {
    if (node.isRootNode()) return false;
});

tree.addHook("nodeDragStart", (ev, node) => {
    ev.dataTransfer.setData("text/plain", node.caption);
});

// grid drop event 처리
grid.onDropOnCell = (row, col, ev) => {
    const data = ev.dataTransfer.getData("text/plain");

    if (!data) return;

    grid.setText(row, col, data);
}

`})]})}u.__docgenInfo={description:"",methods:[],displayName:"DragDrop"};function p(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeViewDragDropMovePlugin"}),e.jsxs("ol",{className:"ir-list-disc ir-pl-[20px] ir-mb-[8px]",children:[e.jsx("li",{children:"canNodeMoveStart dragStart 시작 검사"}),e.jsx("li",{children:"canNodeMoveDragOver dragOver 처리 검사"}),e.jsx("li",{children:"canNodeMoveDrop drop 처리 여부 검사"})]}),e.jsx(o,{html:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"340px 340px",gridTemplateRows:"minmax(0,1fr)",height:300,gap:8},children:[e.jsx("div",{id:"treeContainer1",className:"border"}),e.jsx("div",{id:"treeContainer2",className:"border"})]}),code:`
import {
    IRTreeView,
    IRTreeViewDragDropMovePlugin,
    IRConfirm
} from "./dist/index.js";

const args = {
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
};

const tree1 = new IRTreeView( {
    ...args,
    headerRow: {
        columnCount: 2,
        text: ["트리1"],
        width: ["*", "24px"]
    }
} );
const tree2 = new IRTreeView( {
    ...args,
    headerRow: {
        columnCount: 2,
        text: ["트리2"],
        width: ["*", "24px"]
    }
} );

// 플러그인 추가
tree1.addPlugin( new IRTreeViewDragDropMovePlugin({
    canNodeMoveStart: (node) => node.caption !== "0-1",
    canNodeMoveDragOver: (isSelf, node, cursor) => isSelf && node.caption !== "0-7",
    onDropNodeData(isSelf, srcData, targetData) {
        console.log("tree1.onDropNodeData", isSelf, srcData, targetData);
        // 내부 이동만 처리
        if (!isSelf) return;

        tree1.moveNode(srcData.srcNodeData.key, {
            targetKey: targetData.nodeKey,
            position: targetData.cursorType
        });
    },
    onDragEnd(isSelf, srcData) {
        console.log("tree1.drag-end", isSelf, srcData);
    }
}) );

tree2.addPlugin( new IRTreeViewDragDropMovePlugin({
    canNodeMoveDrop: (context) => {
        return new Promise((resolve) => new IRConfirm({
            buttonType: ["ok", "cancel"],
            contentElement: "정말 추가하시겠습니까?",
            onClick: (type) => resolve(type === "ok"),
            escButton: "cancel",
            enterButton: "ok",
        }).show());
    },
    onDragEnd(isSelf, srcData) {
        console.log("tree2.drag-end", isSelf, srcData);
    },
    onDropNodeData(isSelf, srcData, targetData) {
        console.log("tree2.onDropNodeData", isSelf, srcData, targetData);

        // 외부 이동만 처리
        if (isSelf) return;

        tree2.addNode({
            insertKey: targetData.nodeKey,
            position: targetData.cursorType,
            ...srcData.srcNodeData
        });

        tree1.removeNode(srcData.srcNodeData.key);
    }
}) );


// nodeMoved hook
tree1.addHook( "nodeMoved", (node, position) => {
    console.log("[nodeMoved]", node.key, position);
} );

tree1.mountElement( treeContainer1 );
tree2.mountElement( treeContainer2 );

const treeList = [tree1, tree2];


treeList.forEach((tree, treeId) => {
    let row = 0;

    for ( let i = 0; i < 2; i++ )
    {
        const parentKey = treeId + "-" + ++row;
        const nodeData = {
            key: parentKey,
            caption: parentKey,
            expanded: true,
            children: []
        };

        for ( let j = 0; j < 5; j++ )
        {
            const childKey = treeId + "-" + ++row;
            nodeData.children.push({
                key: childKey,
                caption: childKey,
                columns: [String(row)],
                object: { data: childKey }
            });
        }

        tree.addNode(nodeData);
    }
});


`})]})}p.__docgenInfo={description:"",methods:[],displayName:"DragDropMove"};function h(){return e.jsx("input",{type:"checkbox",className:"checkbox__input","data-state":"sub-checked",style:{pointerEvents:"none"}})}function m(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeView"}),e.jsx(a,{children:"ir-style@^2.14.0"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeViewCascadeCheckingPlugin"}),"을 이용하여 부모/자식 간의 체크 상태 전파 기능을 추가할 수 있습니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," 상태의 자식 노드로 체크됩니다."]}),e.jsxs("li",{children:[e.jsx(h,{})," ",e.jsx("code",{children:"subChecked"}),": 모두 체크되어 있지 않고, 1개 이상 체크된 경우 true"]})]}),e.jsx(o,{html:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"320px 1fr",gridTemplateRows:"minmax(0,1fr)",height:300,gap:8},children:e.jsx("div",{id:"treeContainer",className:"border"})}),code:`
import {
    IRTreeView,
    IRTreeViewCascadeCheckingPlugin
} from "./dist/index.js";

const tree = new IRTreeView( {
    showCheckbox: true,
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    multiSelect: true,
    headerRow: {
        text: [ "전체 선택" ],
        hasCheckbox: true
    }
} );

tree.addPlugin( new IRTreeViewCascadeCheckingPlugin({
    onChanged( updateInfoList ) {
        console.log( updateInfoList );
    }
}) );
tree.mountElement( treeContainer );

tree.addHook( "nodeChangeChecked", ( node, checked ) => {
    console.log( "nodeKey: " + node.key + ", cur: " + checked );
} );

for ( let i = 0; i < 20; i++ )
{
    const parentKey = String(i);
    const nodeData = {
        key: parentKey,
        caption: parentKey,
        expanded: true,
        children: []
    };

    for ( let j = 0; j < 5; j++ )
    {
        const childKey = i + "-" + j;
        const childNode = {
            key: childKey,
            caption: childKey,
            object: { data: childKey },
            children: []
        };

        nodeData.children.push(childNode);

        for ( let k = 0; k < 5; k++ )
        {
            const childKey = i + "-" + j + "-" + k;

            childNode.children.push({
                key: childKey,
                caption: childKey,
                disabled: i > 10 && j === 3 && k === 2,
                object: { data: childKey }
            });
        }
    }

    tree.addNode(nodeData);
}

`})]})}m.__docgenInfo={description:"",methods:[],displayName:"CascadeChecking"};function b(){return e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeView"}),e.jsx(a,{children:"ir-style@^2.14.1"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeViewColStickyPlugin"}),"을 이용하여 Content 컬럼을 제외한 우측 컬럼을 고정할 수 있습니다.",e.jsx("br",{}),"※ 최대 5개만 고정이 가능합니다."]}),e.jsx(o,{html:e.jsxs(e.Fragment,{children:[e.jsx("button",{id:"change_btn",className:"button mb--lg",children:"룰(메인) 너비 변경"}),e.jsx("button",{id:"change_col_btn1",className:"button",children:"3 Column Count"}),e.jsx("button",{id:"change_col_btn2",className:"button",children:"4 Column Count"}),e.jsx("button",{id:"change_col_btn3",className:"button",children:"5 Column Count"}),e.jsx("button",{id:"remove_btn",className:"button",children:"Remove Plugin"}),e.jsxs("div",{className:"split-container",children:[e.jsx("div",{id:"treeview",style:{display:"grid",width:700,height:300,border:"1px solid var(--border-color)"}}),e.jsx("div",{id:"temp"})]})]}),code:`
import {
    IRTreeView,
    IRTreeViewColStickyPlugin,
    uuid,
    createSplitContainer
} from "./dist/index.js";

createSplitContainer(["#treeview", "#temp"], { direction: "horizontal" })

const tree = new IRTreeView( {
    multiSelect: true,
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 4,
        text: ["헤더", "폴더", "룰(메인)", "ext."],
        width: ["*", "48px", "70px", "48px"],
    },
    checkboxOptions: {
        layout: "column"
    },
} );

const treeViewColStickyPlugin = new IRTreeViewColStickyPlugin();
tree.mountElement( treeview );
tree.addPlugin( treeViewColStickyPlugin );

const node = tree.addNode({
    key: "test",
    caption: "비활성화",
    disabled: true,
});

for ( let i = 0; i < 5; i++ )
{
    tree.addNode({
        key: String(i),
        caption: String(i),
        columns: [ "0", "4", "5" ]
    });
}

// 중간 삽입 케이스
tree.addNode({
    insertKey: "0",
    key: "insert",
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandableexpandable & expandableexpandable & expandable",
    expandable: true,
    columns: [ "", "34", "45" ]
});

tree.addNode({
    insertKey: "0",
    key: "insert4",
    caption: "리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 리턴 별칭 저장 실패 테스트 트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트트",
    expandable: true,
    columns: [ "", "34", "" ]
});

tree.addNodeList(
    { insertKey: "0" },
    [
        {
            key: "insert2",
            caption: "insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",
            columns: [ "4", "", "" ]
        },
        {
            key: "insert3",
            caption: "text",
            columns: [ "1", "", "4" ]
        }
    ]
);

// 자식 노드 추가 케이스
tree.addNodeList(
    { parentKey: "0" },
    [
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--primary-active)" },
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--danger)" },
        {
            key: "0-3",
            caption: "자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3",
            iconColor: "var(--yellow)",
            expanded: true,
            children: [
                { key: "0-3-0", caption: "grand" },
                { key: "0-3-1", caption: "grand2" }
            ]
        }
    ]);

tree.addNodeList(
    { parentKey: "1" },
    [
        { key: "1-0", caption: "자식" },
        { key: "1-1", caption: "자식" },
        { key: "1-2", caption: "자식" },
    ]);


const deppDepthNode = {
    key: "5",
    caption: "5",
    expanded: true,
    columns: ["0", "1", "1"]
};

const dumStr = "41d2#@561__..28& 6__-23)]{4612가414한글124000";

(function(depth) {
    let cur = deppDepthNode;

    for (let i = 0; i < 20; i++) {
        const key = ["5", i, dumStr].join("-");
        cur.children = [{ key, caption: key, expanded: true, children: [], columns: ["0", "1", "1"] }];
        cur = cur.children[0];
    }
})(50);


tree.addNode(deppDepthNode);
tree.addNode({ parentKey: "1-2", key: "1-2-0", caption: "자식" });

tree.autoSizeColumn(0);

change_btn.onclick = () => {
    const randomWidth = (Math.floor(Math.random() * 101) + 50) + "px";
    tree.setColumnWidth(2, randomWidth )
}
change_col_btn1.onclick = () => {
    tree.setColumnCount(3);
}
change_col_btn2.onclick = () => {
    tree.setColumnCount(4);
}
change_col_btn3.onclick = () => {
    tree.setColumnCount(5);
}
remove_btn.onclick = () => {
    tree.removePlugin(treeViewColStickyPlugin);
}
`})]})}b.__docgenInfo={description:"",methods:[],displayName:"StickyColumn"};const y={title:"JS Components/IRTreeView"},d=()=>e.jsxs(n,{children:[e.jsx(t,{children:"IRTreeView"}),e.jsx("p",{children:"기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다."}),e.jsx(o,{defaultCodeFold:[16],html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",marginBottom:8,columnGap:8,rowGap:4,alignItems:"center"},children:[e.jsxs("label",{children:[e.jsx("input",{id:"chk_header_visible",defaultChecked:!0,type:"checkbox"}),"header visible"]}),e.jsxs("label",{children:[e.jsx("input",{id:"chk_toggle_columns",defaultChecked:!0,type:"checkbox"}),"Toggle Columns"]}),e.jsxs("label",{children:[e.jsx("input",{id:"chk_toggle_multi_select",defaultChecked:!0,type:"checkbox"}),"Multi Select"]}),e.jsxs("select",{id:"cbLocale",children:[e.jsx("option",{children:"ko"}),e.jsx("option",{children:"en"}),e.jsx("option",{children:"ja"})]}),e.jsx("div",{style:{flexBasis:"100%"}}),e.jsx("button",{id:"btn_clear",className:"button",children:"Clear"}),e.jsx("button",{id:"btn_print_selection",className:"button",children:"Print Selected"}),e.jsx("button",{id:"btn_print_list",className:"button",children:"Print List"}),e.jsx("button",{id:"btn_add",className:"button",children:"Add"}),e.jsx("button",{id:"btn_add_child",className:"button",children:"Add Child"}),e.jsx("button",{id:"btn_remove",className:"button",children:"Remove"}),e.jsx("button",{id:"btn_clear_children",className:"button",children:"Remove Children"}),e.jsx("button",{id:"btn_expand_all",className:"button",children:"Expand All"}),e.jsx("button",{id:"btn_collapse_all",className:"button",children:"Collapse All"}),e.jsx("button",{id:"btn_auto_size",className:"button",children:"AutoSize"}),e.jsx("button",{id:"btn_auto_size2",className:"button",children:"AutoSize2"}),e.jsx("div",{style:{flexBasis:"100%"}}),e.jsx("input",{id:"txt_value",type:"text",defaultValue:"1",style:{width:140}}),e.jsx("button",{id:"btn_scroll",className:"button",children:"Scroll"})]}),e.jsxs("div",{children:[e.jsx("div",{id:"container",style:{display:"grid",height:300,border:"1px solid var(--border-color)"}}),e.jsx("div",{id:"temp"})]})]}),code:`
import { IRTreeView, uuid, createSplitContainer, i18n } from "./dist/index.js";
import { IRContextMenuAdapter } from "./dist/react.js";

createSplitContainer(["#container", "#temp"], { direction: "horizontal" })

const tree = new IRTreeView( {
    multiSelect: true,
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    // hiddenExpandIcon: true,
    // defaultRowHeight: 20,
    // removeIndent: true,
    headerRow: {
        columnCount: 4,
        text: ["헤더", "폴더", "룰(메인)", "ext."],
        width: ["*", "48px", "70px", "48px"],
    },
    checkboxOptions: {
        layout: "column"
    }
} );

const menu = new IRContextMenuAdapter({
    // blurDisabled: true,
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
        }
    ]
});

tree.mountElement( container );

tree.addHook( "contextMenu", (ev) => {
    menu.showAtPoint( ev.clientX, ev.clientY );
    console.log( "contextMenu selected::",tree.getSelectedNodes() );
});

const node = tree.addNode({
    key: "test",
    caption: "비활성화",
    disabled: true,
});

for ( let i = 0; i < 5; i++ )
{
    tree.addNode({
        key: String(i),
        caption: String(i),
        columns: [ "0", "4", "5" ]
    });
}

// 중간 삽입 케이스
tree.addNode({
    insertKey: "0",
    key: "insert",
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandable",
    expandable: true,
    columns: [ "", "34", "45" ]
});

tree.addNodeList(
    { insertKey: "0" },
    [
        {
            key: "insert2",
            caption: "insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",
        },
        {
            key: "insert3",
            caption: "text",
            columns: [ "1", "", "4" ]
        }
    ]
);

// 자식 노드 추가 케이스
tree.addNodeList(
    { parentKey: "0" },
    [
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--primary-active)" },
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--danger)" },
        {
            key: "0-3",
            caption: "자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3",
            iconColor: "var(--yellow)",
            expanded: true,
            children: [
                { key: "0-3-0", caption: "grand" },
                { key: "0-3-1", caption: "grand2" }
            ]
        }
    ]);

tree.addNodeList(
    { parentKey: "1" },
    [
        { key: "1-0", caption: "자식" },
        { key: "1-1", caption: "자식" },
        { key: "1-2", caption: "자식" },
    ]);


const deppDepthNode = {
    key: "5",
    caption: "5",
    expanded: true,
};

const dumStr = "41d2#@561__..28& 6__-23)]{4612가414한글124000";

(function(depth) {
    let cur = deppDepthNode;

    for (let i = 0; i < 50; i++) {
        const key = ["5", i, dumStr].join("-");
        cur.children = [{ key, caption: key, expanded: true, children: [] }];
        cur = cur.children[0];
    }
})(50);


tree.addNode(deppDepthNode);
tree.addNode({ parentKey: "1-2", key: "1-2-0", caption: "자식" });

chk_header_visible.onchange = (ev) => {
    tree.displayHeader = ev.currentTarget.checked;
}

chk_toggle_columns.onchange = (ev) => {
    tree.setColumnCount( ev.currentTarget.checked ? 4 : 1);
    tree.autoSizeColumn(0);
}

chk_toggle_multi_select.onchange = (ev) => {
    tree.multiSelect = ev.currentTarget.checked;
}

btn_clear.onclick = () => tree.clear();

btn_print_selection.onclick = () => console.log( tree.getSelectedNodes() );

btn_print_list.onclick = () => console.log( tree.getSortedNodeList() );

btn_add.onclick = () => tree.addNode( { key: uuid(), caption: uuid() } );
btn_add_child.onclick = () => {
    const selected = tree.getSelectedNodeOrNull();

    if (selected)
        tree.addNode( { parentKey: selected.key, key: uuid(), caption: uuid() } );
}

btn_remove.onclick = async () => {
    const selected = tree.getSelectedNodes();

    for (const { key } of selected)
        await tree.removeNode( key );
}

btn_clear_children.onclick = () => {
    const selected = tree.getSelectedNodes();

    selected.forEach( node => tree.clearChildNodes( node.key ) );
}

btn_scroll.onclick = () => {
    tree.scrollToNode( txt_value.value);
}

btn_expand_all.onclick = () => {
    tree.expandAll();
}

btn_collapse_all.onclick = () => {
    tree.collapseAll();
}

btn_auto_size.onclick = () => {
    tree.autoSizeColumn(0);
}

btn_auto_size2.onclick = () => {
    tree.autoSizeColumn(1);
    tree.autoSizeColumn(2);
    tree.autoSizeColumn(3);
}

tree.addHook( "nodeExpanded", (node) => console.log( "nodeExpanded", node ) );
tree.addHook( "nodeCollapsed", (node) => console.log( "nodeCollapsed", node ) );
tree.addHook( "nodeClick", (ev, node) => console.log( "nodeClick", node ) );
tree.addHook( "nodeDoubleClick", (ev, node) => console.log( "nodeDoubleClick", node ) );
tree.addHook( "nodeSelect", (node) => console.log( "nodeSelect", node ) );
tree.addHook( "nodeSelectionChange", (nodeList) => console.log( "nodeSelectionChange", nodeList ) );
tree.addHook( "nodeRelease", (node) => console.log( "nodeRelease", node ) );
tree.addHook( "nodeAddSelect", (node) => console.log( "nodeAddSelect", node ) );

tree.addHook( "focus", (ev) => console.log( "focus", ev ) );
tree.addHook( "blur", (ev) => console.log( "blur", ev ) );

node.setColumnText(0, "텍스트 변경");
node.setColumnText(1, "5");

tree.expandNode("1");

cbLocale.onchange = () => i18n.setLocale( cbLocale.value );

window.__TREE_VIEW__ = tree;
`})]});d.__docgenInfo={description:"",methods:[],displayName:"Basic"};var r,i,l;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRTreeView</DocTitle>\r
            <p>기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다.</p>\r
            <LiveEditor defaultCodeFold={[16]} html={<>\r
                        <div style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: 8,
        columnGap: 8,
        rowGap: 4,
        alignItems: "center"
      }}>\r
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
                            <div style={{
          flexBasis: "100%"
        }}></div>\r
                            <button id="btn_clear" className="button">Clear</button>\r
                            <button id="btn_print_selection" className="button">Print Selected</button>\r
                            <button id="btn_print_list" className="button">Print List</button>\r
                            <button id="btn_add" className="button">Add</button>\r
                            <button id="btn_add_child" className="button">Add Child</button>\r
                            <button id="btn_remove" className="button">Remove</button>\r
                            <button id="btn_clear_children" className="button">Remove Children</button>\r
                            <button id="btn_expand_all" className="button">Expand All</button>\r
                            <button id="btn_collapse_all" className="button">Collapse All</button>\r
                            <button id="btn_auto_size" className="button">AutoSize</button>\r
                            <button id="btn_auto_size2" className="button">AutoSize2</button>\r
                            {/* flex 줄바꿈용 */}\r
                            <div style={{
          flexBasis: "100%"
        }}></div>\r
                            <input id="txt_value" type="text" defaultValue="1" style={{
          width: 140
        }} />\r
                            <button id="btn_scroll" className="button">Scroll</button>\r
                        </div>\r
                        <div>\r
                            <div id="container" style={{
          display: "grid",
          height: 300,
          border: "1px solid var(--border-color)"
        }}></div>\r
                            <div id="temp"></div>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { IRTreeView, uuid, createSplitContainer, i18n } from "./dist/index.js";
import { IRContextMenuAdapter } from "./dist/react.js";

createSplitContainer(["#container", "#temp"], { direction: "horizontal" })

const tree = new IRTreeView( {
    multiSelect: true,
    showIcon: true,
    showCheckbox: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    // hiddenExpandIcon: true,
    // defaultRowHeight: 20,
    // removeIndent: true,
    headerRow: {
        columnCount: 4,
        text: ["헤더", "폴더", "룰(메인)", "ext."],
        width: ["*", "48px", "70px", "48px"],
    },
    checkboxOptions: {
        layout: "column"
    }
} );

const menu = new IRContextMenuAdapter({
    // blurDisabled: true,
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
        }
    ]
});

tree.mountElement( container );

tree.addHook( "contextMenu", (ev) => {
    menu.showAtPoint( ev.clientX, ev.clientY );
    console.log( "contextMenu selected::",tree.getSelectedNodes() );
});

const node = tree.addNode({
    key: "test",
    caption: "비활성화",
    disabled: true,
});

for ( let i = 0; i < 5; i++ )
{
    tree.addNode({
        key: String(i),
        caption: String(i),
        columns: [ "0", "4", "5" ]
    });
}

// 중간 삽입 케이스
tree.addNode({
    insertKey: "0",
    key: "insert",
    caption: "insert & expandable insert & expandable insert & expandable insert & expandable insert & expandable, & expandable & expandable",
    expandable: true,
    columns: [ "", "34", "45" ]
});

tree.addNodeList(
    { insertKey: "0" },
    [
        {
            key: "insert2",
            caption: "insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378insert2 컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",
        },
        {
            key: "insert3",
            caption: "text",
            columns: [ "1", "", "4" ]
        }
    ]
);

// 자식 노드 추가 케이스
tree.addNodeList(
    { parentKey: "0" },
    [
        { key: "0-1", caption: "자식 노드1", iconColor: "var(--primary-active)" },
        { key: "0-2", caption: "자식 노드2", iconColor: "var(--danger)" },
        {
            key: "0-3",
            caption: "자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3 자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3자식 노드3",
            iconColor: "var(--yellow)",
            expanded: true,
            children: [
                { key: "0-3-0", caption: "grand" },
                { key: "0-3-1", caption: "grand2" }
            ]
        }
    ]);

tree.addNodeList(
    { parentKey: "1" },
    [
        { key: "1-0", caption: "자식" },
        { key: "1-1", caption: "자식" },
        { key: "1-2", caption: "자식" },
    ]);


const deppDepthNode = {
    key: "5",
    caption: "5",
    expanded: true,
};

const dumStr = "41d2#@561__..28& 6__-23)]{4612가414한글124000";

(function(depth) {
    let cur = deppDepthNode;

    for (let i = 0; i < 50; i++) {
        const key = ["5", i, dumStr].join("-");
        cur.children = [{ key, caption: key, expanded: true, children: [] }];
        cur = cur.children[0];
    }
})(50);


tree.addNode(deppDepthNode);
tree.addNode({ parentKey: "1-2", key: "1-2-0", caption: "자식" });

chk_header_visible.onchange = (ev) => {
    tree.displayHeader = ev.currentTarget.checked;
}

chk_toggle_columns.onchange = (ev) => {
    tree.setColumnCount( ev.currentTarget.checked ? 4 : 1);
    tree.autoSizeColumn(0);
}

chk_toggle_multi_select.onchange = (ev) => {
    tree.multiSelect = ev.currentTarget.checked;
}

btn_clear.onclick = () => tree.clear();

btn_print_selection.onclick = () => console.log( tree.getSelectedNodes() );

btn_print_list.onclick = () => console.log( tree.getSortedNodeList() );

btn_add.onclick = () => tree.addNode( { key: uuid(), caption: uuid() } );
btn_add_child.onclick = () => {
    const selected = tree.getSelectedNodeOrNull();

    if (selected)
        tree.addNode( { parentKey: selected.key, key: uuid(), caption: uuid() } );
}

btn_remove.onclick = async () => {
    const selected = tree.getSelectedNodes();

    for (const { key } of selected)
        await tree.removeNode( key );
}

btn_clear_children.onclick = () => {
    const selected = tree.getSelectedNodes();

    selected.forEach( node => tree.clearChildNodes( node.key ) );
}

btn_scroll.onclick = () => {
    tree.scrollToNode( txt_value.value);
}

btn_expand_all.onclick = () => {
    tree.expandAll();
}

btn_collapse_all.onclick = () => {
    tree.collapseAll();
}

btn_auto_size.onclick = () => {
    tree.autoSizeColumn(0);
}

btn_auto_size2.onclick = () => {
    tree.autoSizeColumn(1);
    tree.autoSizeColumn(2);
    tree.autoSizeColumn(3);
}

tree.addHook( "nodeExpanded", (node) => console.log( "nodeExpanded", node ) );
tree.addHook( "nodeCollapsed", (node) => console.log( "nodeCollapsed", node ) );
tree.addHook( "nodeClick", (ev, node) => console.log( "nodeClick", node ) );
tree.addHook( "nodeDoubleClick", (ev, node) => console.log( "nodeDoubleClick", node ) );
tree.addHook( "nodeSelect", (node) => console.log( "nodeSelect", node ) );
tree.addHook( "nodeSelectionChange", (nodeList) => console.log( "nodeSelectionChange", nodeList ) );
tree.addHook( "nodeRelease", (node) => console.log( "nodeRelease", node ) );
tree.addHook( "nodeAddSelect", (node) => console.log( "nodeAddSelect", node ) );

tree.addHook( "focus", (ev) => console.log( "focus", ev ) );
tree.addHook( "blur", (ev) => console.log( "blur", ev ) );

node.setColumnText(0, "텍스트 변경");
node.setColumnText(1, "5");

tree.expandNode("1");

cbLocale.onchange = () => i18n.setLocale( cbLocale.value );

window.__TREE_VIEW__ = tree;
\`} />\r
        </Doc>;
}`,...(l=(i=d.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Basic","Checkbox","BulkData","DragDrop","DragDropMove","CascadeChecking","StickyColumn"];export{d as Basic,s as BulkData,m as CascadeChecking,c as Checkbox,u as DragDrop,p as DragDropMove,b as StickyColumn,C as __namedExportsOrder,y as default};
