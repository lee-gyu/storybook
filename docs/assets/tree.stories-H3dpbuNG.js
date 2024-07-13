import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as d,a as r,L as t}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const c={title:"JS Components/Tree"},n=()=>e.jsxs(d,{children:[e.jsx(r,{children:"Tree"}),e.jsxs("p",{children:[e.jsx("code",{children:"IRTree"})," 클래스를 활용하여 트리 컴포넌트를 생성할 수 있습니다."]}),e.jsx(t,{fixedHeight:300,html:e.jsx("div",{id:"tree"}),code:`
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
`})]});n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var u,o,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(C=(o=n.parameters)==null?void 0:o.docs)==null?void 0:C.source}}};const s=["Basic"];export{n as Basic,s as __namedExportsOrder,c as default};
