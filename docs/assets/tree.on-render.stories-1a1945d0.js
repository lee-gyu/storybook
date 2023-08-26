import{j as o,a as e}from"./jsx-runtime-e43ccb36.js";import{D as i,a as l,L as a}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const u={title:"JS Components/Tree"},n=()=>o(i,{children:[e(l,{children:"Tree"}),o("p",{children:[e("code",{children:"onRenderNode"})," 이벤트를 이용하여 노드 스타일을 커스터마이징 할 수 있습니다."]}),e(a,{fixedHeight:300,html:e("div",{id:"tree"}),code:`
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

`})]});var t,r,d;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const f=["onRender"];export{f as __namedExportsOrder,u as default,n as onRender};
//# sourceMappingURL=tree.on-render.stories-1a1945d0.js.map
