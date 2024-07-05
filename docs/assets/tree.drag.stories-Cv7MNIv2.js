import{j as o,a as e}from"./jsx-runtime-CjohWU4o.js";import{D as t,a as C,L as i}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const c={title:"JS Components/Tree"},n=()=>o(t,{children:[e(C,{children:"Tree drag from node"}),e("p",{children:"트리 노드를 드래그하여 다른 컴포넌트 및 개체에 Drop할 수 있습니다. (기본 동작은 Node에 저장된 object가 json string으로 전달됩니다.)"}),e(i,{fixedHeight:300,css:`
#drop_zone > * {
    pointer-events: none;
}
                `,html:o("div",{style:{display:"flex",height:500,columnGap:8},children:[e("div",{id:"tree",style:{width:300}}),o("div",{id:"drop_zone",style:{flex:1},children:[e("p",{children:"트리 노드를 drag하여 여기에 drop하세요"}),e("br",{}),e("div",{id:"drop_show"})]})]}),code:`
import { IRTree } from "./dist/index.js";

drop_zone.ondragover = (ev) => {
    ev.preventDefault();
}

drop_zone.ondragleave = (ev) => { }

drop_zone.ondrop = (ev) => {
    drop_show.innerHTML = ev.dataTransfer.getData("application/json");
}

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

`})]});var r,u,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Tree drag from node</DocTitle>\r
            <p>트리 노드를 드래그하여 다른 컴포넌트 및 개체에 Drop할 수 있습니다. (기본 동작은 Node에 저장된 object가 json string으로 전달됩니다.)</p>\r
            <LiveEditor fixedHeight={300} css={\`
#drop_zone > * {
    pointer-events: none;
}
                \`} html={<div style={{
      display: "flex",
      height: 500,
      columnGap: 8
    }}>\r
                        <div id="tree" style={{
        width: 300
      }}></div>\r
                        <div id="drop_zone" style={{
        flex: 1
      }}>\r
                            <p>트리 노드를 drag하여 여기에 drop하세요</p>\r
                            <br />\r
                            <div id="drop_show"></div>\r
                        </div>\r
                    </div>} code={/* javascript */\`
import { IRTree } from "./dist/index.js";

drop_zone.ondragover = (ev) => {
    ev.preventDefault();
}

drop_zone.ondragleave = (ev) => { }

drop_zone.ondrop = (ev) => {
    drop_show.innerHTML = ev.dataTransfer.getData("application/json");
}

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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const D=["NodeDrag"];export{n as NodeDrag,D as __namedExportsOrder,c as default};
