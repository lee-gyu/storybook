import{j as u,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as t,a as d,L as i}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const D={title:"JS Components/Tree"},n=()=>u(t,{children:[e(d,{children:"Tree"}),u("p",{children:[e("code",{children:"onRenderNode"})," 이벤트를 이용하여 노드 스타일을 커스터마이징 할 수 있습니다."]}),e(i,{fixedHeight:300,html:e("div",{id:"tree"}),code:`
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

// 노드 렌더 스타일 커스터마이징
tree.onRenderNode = (node, element) => {
    element.querySelector(".tree__label-text").style.color = "red";
}

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

tree.expandAll();

`})]});var o,r,C;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree</DocTitle>\r
            <p><code>onRenderNode</code> 이벤트를 이용하여 노드 스타일을 커스터마이징 할 수 있습니다.</p>\r
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

// 노드 렌더 스타일 커스터마이징
tree.onRenderNode = (node, element) => {
    element.querySelector(".tree__label-text").style.color = "red";
}

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

tree.expandAll();

\`} />\r
        </Doc>;
}`,...(C=(r=n.parameters)==null?void 0:r.docs)==null?void 0:C.source}}};const m=["onRender"];export{m as __namedExportsOrder,D as default,n as onRender};
