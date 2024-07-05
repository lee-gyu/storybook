import{j as u,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as d,a as t,L as a}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const s={title:"JS Components/Tree"},n=()=>u(d,{children:[e(t,{children:"Tree"}),u("p",{children:[e("code",{children:"IRTree"})," 클래스를 활용하여 트리 컴포넌트를 생성할 수 있습니다."]}),e(a,{fixedHeight:300,html:e("div",{id:"tree"}),code:`
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

// 노드 더블 클릭 이벤트 (미지정 시 노드 펼치고 닫힘 토글 동작 수행)
tree.onDblClick = (node) => {
    alert(node.data.name)
}

// 노드 expanding 이벤트
tree.onExpanding = (node) => {
    alert("Expanding: " + node.data.name)

    return true;
}
`})]});var o,C,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree</DocTitle>\r
            <p><code>IRTree</code> 클래스를 활용하여 트리 컴포넌트를 생성할 수 있습니다.</p>\r
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

// 노드 더블 클릭 이벤트 (미지정 시 노드 펼치고 닫힘 토글 동작 수행)
tree.onDblClick = (node) => {
    alert(node.data.name)
}

// 노드 expanding 이벤트
tree.onExpanding = (node) => {
    alert("Expanding: " + node.data.name)

    return true;
}
\`} />\r
        </Doc>;
}`,...(r=(C=n.parameters)==null?void 0:C.docs)==null?void 0:r.source}}};const m=["Basic"];export{n as Basic,m as __namedExportsOrder,s as default};
