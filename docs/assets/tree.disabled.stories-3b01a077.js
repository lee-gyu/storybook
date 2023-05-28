import{j as o,a as e}from"./jsx-runtime-d057ca55.js";import{D as i,a,L as l}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const u={title:"JS Components/Tree"},n=()=>o(i,{children:[e(a,{children:"Tree"}),o("p",{children:[e("code",{children:"IRTreeNode.disabled"})," 속성을 이용하여 비활성화할 수 있습니다. (해당 노드 마우스 이벤트 무력화 및 비활성화 스타일 적용)"]}),e(l,{fixedHeight:300,html:e("div",{id:"tree"}),code:`
import { IRTree, Palette } from "./dist/index.js";

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
node.iconColor = Palette.BIZ_NO_AUTH;

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

`})]});var d,t,r;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree</DocTitle>\r
            <p><code>IRTreeNode.disabled</code> 속성을 이용하여 비활성화할 수 있습니다. (해당 노드 마우스 이벤트 무력화 및 비활성화 스타일 적용)</p>\r
            <LiveEditor fixedHeight={300} html={<div id="tree"></div>} code={/* javascript */\`
import { IRTree, Palette } from "./dist/index.js";

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
node.iconColor = Palette.BIZ_NO_AUTH;

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
}`,...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const f=["Disabled"];export{n as Disabled,f as __namedExportsOrder,u as default};
//# sourceMappingURL=tree.disabled.stories-3b01a077.js.map
