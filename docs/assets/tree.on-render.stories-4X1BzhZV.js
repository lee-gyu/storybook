import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as C,a as t,L as d}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const s={title:"JS Components/Tree"},n=()=>e.jsxs(C,{children:[e.jsx(t,{children:"Tree"}),e.jsxs("p",{children:[e.jsx("code",{children:"onRenderNode"})," 이벤트를 이용하여 노드 스타일을 커스터마이징 할 수 있습니다."]}),e.jsx(d,{fixedHeight:300,html:e.jsx("div",{id:"tree"}),code:`
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

`})]});n.__docgenInfo={description:"",methods:[],displayName:"onRender"};var u,o,r;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const B=["onRender"];export{B as __namedExportsOrder,s as default,n as onRender};
