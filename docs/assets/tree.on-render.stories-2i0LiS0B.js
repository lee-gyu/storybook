import{j as u,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as r,a as d,L as i}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const B={title:"JS Components/Tree"},n=()=>u(r,{children:[e(d,{children:"Tree"}),u("p",{children:[e("code",{children:"onRenderNode"})," 이벤트를 이용하여 노드 스타일을 커스터마이징 할 수 있습니다."]}),e(i,{fixedHeight:300,html:e("div",{id:"tree"}),code:`
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

tree.expandAll();

`})]});var o,t,C;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree</DocTitle>\r
            <p><code>onRenderNode</code> 이벤트를 이용하여 노드 스타일을 커스터마이징 할 수 있습니다.</p>\r
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

tree.expandAll();

\`} />\r
        </Doc>;
}`,...(C=(t=n.parameters)==null?void 0:t.docs)==null?void 0:C.source}}};const D=["onRender"];export{D as __namedExportsOrder,B as default,n as onRender};
