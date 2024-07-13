import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as t,a as u,L as C}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const c={title:"JS Components/Tree"},n=()=>e.jsxs(t,{children:[e.jsx(u,{children:"순서 변경"}),e.jsx("p",{children:"기존 노드 순서 변경"}),e.jsx(C,{fixedHeight:300,css:`
#drop_zone > * {
    pointer-events: none;
}
                `,html:e.jsx("div",{style:{display:"flex",height:"100%",columnGap:8,overflow:"auto"},children:e.jsx("div",{id:"tree1",style:{width:300}})}),code:`
import { IRTree, setTreeDragDropReorder } from "./dist/index.js";

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
const node = tree.addChild( null, "파이리" );

// 아이콘 지정
node.iconClass = "ir-icon--viewmode-card";

// 자식 노드 추가 (부모 노드가 첫 번재 인자)
const b = tree.addChild( node, "리자드" );

b.iconClass = "ir-icon--version-history"

tree.addChild( node, "리자몽" );
tree.addChild( null, "이상해씨" );
tree.addChild( null, "미뇽" );

tree.expandAll();

tree.onNodeMoved = (node, before) => console.log("이전 위치: " + before + ", 현재 위치: " + node.order)

setTreeDragDropReorder( tree );

`})]});n.__docgenInfo={description:"",methods:[],displayName:"Reorder"};var r,o,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>순서 변경</DocTitle>\r
            <p>기존 노드 순서 변경</p>\r
            <LiveEditor fixedHeight={300} css={\`
#drop_zone > * {
    pointer-events: none;
}
                \`} html={<div style={{
      display: "flex",
      height: "100%",
      columnGap: 8,
      overflow: "auto"
    }}>\r
                        <div id="tree1" style={{
        width: 300
      }}></div>\r
                    </div>} code={/* javascript */\`
import { IRTree, setTreeDragDropReorder } from "./dist/index.js";

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
const node = tree.addChild( null, "파이리" );

// 아이콘 지정
node.iconClass = "ir-icon--viewmode-card";

// 자식 노드 추가 (부모 노드가 첫 번재 인자)
const b = tree.addChild( node, "리자드" );

b.iconClass = "ir-icon--version-history"

tree.addChild( node, "리자몽" );
tree.addChild( null, "이상해씨" );
tree.addChild( null, "미뇽" );

tree.expandAll();

tree.onNodeMoved = (node, before) => console.log("이전 위치: " + before + ", 현재 위치: " + node.order)

setTreeDragDropReorder( tree );

\`} />\r
        </Doc>;
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const D=["Reorder"];export{n as Reorder,D as __namedExportsOrder,c as default};
