import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as d,a as t,L as C}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const p={title:"JS Components/Tree"},n=()=>e.jsxs(d,{children:[e.jsx(t,{children:"Tree drag from node"}),e.jsx("p",{children:"트리 노드를 드래그하여 다른 컴포넌트 및 개체에 Drop할 수 있습니다. (기본 동작은 Node에 저장된 object가 json string으로 전달됩니다.)"}),e.jsx(C,{fixedHeight:300,css:`
#drop_zone > * {
    pointer-events: none;
}
                `,html:e.jsxs("div",{style:{display:"flex",height:500,columnGap:8},children:[e.jsx("div",{id:"tree",style:{width:300}}),e.jsxs("div",{id:"drop_zone",style:{flex:1},children:[e.jsx("p",{children:"트리 노드를 drag하여 여기에 drop하세요"}),e.jsx("br",{}),e.jsx("div",{id:"drop_show"})]})]}),code:`
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

`})]});n.__docgenInfo={description:"",methods:[],displayName:"NodeDrag"};var o,r,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(u=(r=n.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const B=["NodeDrag"];export{n as NodeDrag,B as __namedExportsOrder,p as default};
