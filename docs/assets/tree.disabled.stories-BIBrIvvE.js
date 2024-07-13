import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as C,a as r,L as t}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const c={title:"JS Components/Tree"},n=()=>e.jsxs(C,{children:[e.jsx(r,{children:"Tree"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTreeNode.disabled"})," 속성을 이용하여 비활성화할 수 있습니다. (해당 노드 마우스 이벤트 무력화 및 비활성화 스타일 적용)"]}),e.jsx(t,{fixedHeight:300,html:e.jsx("div",{id:"tree"}),code:`
import { IRTree } from "./dist/index.js";

const tree = new IRTree( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
    data: {
        id: 0,
        name: "",
    },
} );

// 노드 추가
const node = tree.addChild( null, "이노은행", {
    id: 1,
    name: "A",
} );

// 아이콘 지정
node.iconClass = "ir-icon--folder-fill";

// 아이콘 색상
node.iconColor = "var(--purple)";

// 자식 노드 추가 (부모 노드가 첫 번재 인자)
const b = tree.addChild( node, "계좌", {
    id: 2,
    name: "B",
} );

b.iconClass = "ir-icon--folder-open-outline"

tree.addChild( node, "카드", {
    id: 5,
    name: "C",
} );

// 노드 선택 이벤트
tree.onSelectNode = ( node ) =>
{
    console.log(node.data);
};

node.disabled = true;

tree.expandAll();

`})]});n.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var u,o,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree</DocTitle>\r
            <p><code>IRTreeNode.disabled</code> 속성을 이용하여 비활성화할 수 있습니다. (해당 노드 마우스 이벤트 무력화 및 비활성화 스타일 적용)</p>\r
            <LiveEditor fixedHeight={300} html={<div id="tree"></div>} code={/* javascript */\`
import { IRTree } from "./dist/index.js";

const tree = new IRTree( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
    data: {
        id: 0,
        name: "",
    },
} );

// 노드 추가
const node = tree.addChild( null, "이노은행", {
    id: 1,
    name: "A",
} );

// 아이콘 지정
node.iconClass = "ir-icon--folder-fill";

// 아이콘 색상
node.iconColor = "var(--purple)";

// 자식 노드 추가 (부모 노드가 첫 번재 인자)
const b = tree.addChild( node, "계좌", {
    id: 2,
    name: "B",
} );

b.iconClass = "ir-icon--folder-open-outline"

tree.addChild( node, "카드", {
    id: 5,
    name: "C",
} );

// 노드 선택 이벤트
tree.onSelectNode = ( node ) =>
{
    console.log(node.data);
};

node.disabled = true;

tree.expandAll();

\`} />\r
        </Doc>;
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const B=["Disabled"];export{n as Disabled,B as __namedExportsOrder,c as default};
