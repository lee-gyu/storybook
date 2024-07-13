import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as r,a as d,L as t}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const D={title:"JS Components/Tree"},n=()=>e.jsxs(r,{children:[e.jsx(d,{children:"Tree drop on node"}),e.jsx("p",{children:"다른 개체에서 전달한 Drag 데이터를 노드에서 Drop으로 받아서 처리할 수 있습니다. IRTree의 아래 이벤트를 구성하여야 합니다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"onDragOverOnNode(node, event)"})," DragOver 시 호출될 이 이벤트이며, true를 리턴해야 drag 동작을 허용합니다."]}),e.jsxs("li",{children:[e.jsx("code",{children:"onDropOnNode(node, event)"})," 데이터가 drop되었을 시 호출될 이벤트입니다."]})]}),e.jsx("p",{children:"아래는 각 트리 노드 데이터를 drag-drop하면 하위 노드로 추가되도록 구현한 예제입니다."}),e.jsx(t,{fixedHeight:300,css:`
#drop_zone > * {
    pointer-events: none;
}
                `,html:e.jsxs("div",{style:{display:"flex",height:500,columnGap:8},children:[e.jsx("div",{id:"tree1",style:{width:300}}),e.jsx("div",{id:"tree2",style:{width:300}})]}),code:`
import { IRTree } from "./dist/index.js";

(function () {
    const tree = new IRTree( {
        // 생성하려는 element 지정
        contextElement: tree1,
        // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
        data: {
            id: 0,
            name: "",
        },
    } );

    // 노드 추가
    const node = tree.addChild( null, "파이리", { name: "파이리" } );

    // 아이콘 지정
    node.iconClass = "ir-icon--viewmode-card";

    // 자식 노드 추가 (부모 노드가 첫 번재 인자)
    const b = tree.addChild( node, "리자드", { name: "리자드" } );

    b.iconClass = "ir-icon--version-history"

    tree.addChild( node, "리자몽", { name: "리자몽" } );

    tree.expandAll();
    tree.onDragOverOnNode = () => true;
    tree.onDropOnNode = (node, ev) => {
        const obj = JSON.parse( ev.dataTransfer.getData("application/json") );

        tree.addChild(node, obj.name, obj)
    }
})();

(function () {
    const tree = new IRTree( {
        // 생성하려는 element 지정
        contextElement: tree2,
        // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
        data: {
            id: 0,
            name: "",
        },
    } );

    // 노드 추가
    const node = tree.addChild( null, "꼬부기", { name: "꼬부기" } );

    // 아이콘 지정
    node.iconClass = "ir-icon--add-test-case";

    // 자식 노드 추가 (부모 노드가 첫 번재 인자)
    const b = tree.addChild( node, "어니부기", { name: "어니부기" } );

    b.iconClass = "ir-icon--execute"

    tree.addChild( node, "거북왕", { name: "거북왕" } );

    tree.expandAll();
    tree.onDragOverOnNode = () => true;
    tree.onDropOnNode = (node, ev) => {
        const obj = JSON.parse( ev.dataTransfer.getData("application/json") );

        tree.addChild(node, obj.name, obj)
    }
})();

`})]});n.__docgenInfo={description:"",methods:[],displayName:"NodeDrop"};var u,C,o;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree drop on node</DocTitle>\r
            <p>다른 개체에서 전달한 Drag 데이터를 노드에서 Drop으로 받아서 처리할 수 있습니다. IRTree의 아래 이벤트를 구성하여야 합니다.</p>\r
            <ul>\r
                <li><code>onDragOverOnNode(node, event)</code> DragOver 시 호출될 이 이벤트이며, true를 리턴해야 drag 동작을 허용합니다.</li>\r
                <li><code>onDropOnNode(node, event)</code> 데이터가 drop되었을 시 호출될 이벤트입니다.</li>\r
            </ul>\r
            <p>아래는 각 트리 노드 데이터를 drag-drop하면 하위 노드로 추가되도록 구현한 예제입니다.</p>\r
            <LiveEditor fixedHeight={300} css={\`
#drop_zone > * {
    pointer-events: none;
}
                \`} html={<div style={{
      display: "flex",
      height: 500,
      columnGap: 8
    }}>\r
                        <div id="tree1" style={{
        width: 300
      }}></div>\r
                        <div id="tree2" style={{
        width: 300
      }}></div>\r
                    </div>} code={/* javascript */\`
import { IRTree } from "./dist/index.js";

(function () {
    const tree = new IRTree( {
        // 생성하려는 element 지정
        contextElement: tree1,
        // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
        data: {
            id: 0,
            name: "",
        },
    } );

    // 노드 추가
    const node = tree.addChild( null, "파이리", { name: "파이리" } );

    // 아이콘 지정
    node.iconClass = "ir-icon--viewmode-card";

    // 자식 노드 추가 (부모 노드가 첫 번재 인자)
    const b = tree.addChild( node, "리자드", { name: "리자드" } );

    b.iconClass = "ir-icon--version-history"

    tree.addChild( node, "리자몽", { name: "리자몽" } );

    tree.expandAll();
    tree.onDragOverOnNode = () => true;
    tree.onDropOnNode = (node, ev) => {
        const obj = JSON.parse( ev.dataTransfer.getData("application/json") );

        tree.addChild(node, obj.name, obj)
    }
})();

(function () {
    const tree = new IRTree( {
        // 생성하려는 element 지정
        contextElement: tree2,
        // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
        data: {
            id: 0,
            name: "",
        },
    } );

    // 노드 추가
    const node = tree.addChild( null, "꼬부기", { name: "꼬부기" } );

    // 아이콘 지정
    node.iconClass = "ir-icon--add-test-case";

    // 자식 노드 추가 (부모 노드가 첫 번재 인자)
    const b = tree.addChild( node, "어니부기", { name: "어니부기" } );

    b.iconClass = "ir-icon--execute"

    tree.addChild( node, "거북왕", { name: "거북왕" } );

    tree.expandAll();
    tree.onDragOverOnNode = () => true;
    tree.onDropOnNode = (node, ev) => {
        const obj = JSON.parse( ev.dataTransfer.getData("application/json") );

        tree.addChild(node, obj.name, obj)
    }
})();

\`} />\r
        </Doc>;
}`,...(o=(C=n.parameters)==null?void 0:C.docs)==null?void 0:o.source}}};const c=["NodeDrop"];export{n as NodeDrop,c as __namedExportsOrder,D as default};
