import{j as u,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as d,a as r,L as a}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const D={title:"JS Components/Tree"},n=()=>u(d,{children:[e(r,{children:"Tree"}),u("p",{children:[e("code",{children:"IRTree"})," 클래스를 활용하여 트리 컴포넌트를 생성할 수 있습니다."]}),e(a,{fixedHeight:300,html:e("div",{id:"tree"}),code:`
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

// 노드 더블 클릭 이벤트 (미지정 시 노드 펼치고 닫힘 토글 동작 수행)
tree.onDblClick = (node) => {
    alert(node.data.name)
}

// 노드 expanding 이벤트
tree.onExpanding = (node) => {
    alert("Expanding: " + node.data.name)

    return true;
}
`})]});var o,C,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree</DocTitle>\r
            <p><code>IRTree</code> 클래스를 활용하여 트리 컴포넌트를 생성할 수 있습니다.</p>\r
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
}`,...(t=(C=n.parameters)==null?void 0:C.docs)==null?void 0:t.source}}};const s=["Basic"];export{n as Basic,s as __namedExportsOrder,D as default};
