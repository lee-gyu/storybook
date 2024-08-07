import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as r,a as l,L as o}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const s={title:"JS Components/Tree"},d=()=>e.jsxs(r,{children:[e.jsx(l,{children:"Checkbox Node"}),e.jsxs("p",{children:[e.jsx("code",{children:"checkboxNode"})," 옵션을 주어 노드에 체크박스를 추가할 수 있습니다. 아래의 이벤트를 추가로 사용할 수 있습니다."]}),e.jsx(o,{fixedHeight:300,html:e.jsxs("div",{children:[e.jsx("button",{id:"btn_add",className:"button",children:"Add Node"}),e.jsx("button",{id:"btn_remove",className:"button",children:"Remove Selected Node"}),e.jsx("button",{id:"btn_expand",className:"button",children:"Expand All"}),e.jsx("button",{id:"btn_collapse",className:"button",children:"Collapse All"}),e.jsx("button",{id:"btn_print_sub",className:"button",children:"print subchecked"}),e.jsx("div",{style:{height:"200px",width:"300px",overflow:"auto"},children:e.jsx("div",{id:"tree"})})]}),code:`
import { IRTree, renderCheckboxTreeNode } from "./dist/index.js";

const tree = new IRTree( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
    data: {
        id: 0,
        name: "",
    },
    renderer: renderCheckboxTreeNode({
        onCheck: (node) => {
            console.log(node.caption, node.checked)
        }
    })
} );

// 노드 추가
const nodes = Array.from( { length: 30 } ).map( (data, id) => tree.addChild(null, id.toString()) )

const a0 = tree.addChild(nodes[0], "0-A")
const a22 = tree.addChild(nodes[22], "22-A")

a0.checked = true;
a0.iconClass = "ir-icon--add";

tree.addChild( a22, "22-A-0" );
tree.addChild( a22, "22-A-1" );
tree.addChild( a22, "22-A-2" );
tree.addChild( a22, "22-A-3" );
tree.addChild( a22, "22-A-4" );
tree.addChild( a22, "22-A-5" );
tree.addChild( a22, "22-A-6" );
tree.addChild( a22, "22-A-7" );
tree.addChild( a22, "22-A-8" );
tree.addChild( a22, "22-A-9" );
tree.addChild( a22, "22-A-10" );
tree.addChild( a22, "22-A-11" );
tree.addChild( a22, "22-A-12" );
tree.addChild( a22, "22-A-13" );
tree.addChild( a22, "22-A-14" );
tree.addChild( a22, "22-A-15" );
tree.addChild( a22, "22-A-16" );

const order = tree.addChild( null, "order", 0, 0 );
tree.addChild(order, "order-1" );

const b0 = tree.addChild(nodes[0], "0-B")
tree.addChild(nodes[0], "0-C")
tree.addChild(nodes[0], "0-D")

tree.addChild(b0, "B-0")
tree.addChild(b0, "B-1")
tree.addChild(b0, "B-2")
tree.addChild(b0, "B-3")
tree.addChild(b0, "B-4")
tree.addChild(b0, "B-5")
tree.addChild(b0, "B-6")
tree.addChild(b0, "B-7")
tree.addChild(b0, "B-8")
tree.addChild(b0, "B-9")
tree.addChild(b0, "B-10")
tree.addChild(b0, "B-11")
tree.addChild(b0, "B-12")
tree.addChild(b0, "B-13")
tree.addChild(b0, "B-14")
tree.addChild(b0, "B-15")
tree.addChild(b0, "B-16")
tree.addChild(b0, "B-17")
tree.addChild(b0, "B-18")
tree.addChild(b0, "B-19")
tree.addChild(b0, "B-20")
tree.addChild(b0, "B-21")
tree.addChild(b0, "B-22")

tree.addChild(a0, "A-0")
tree.addChild(a0, "A-1")
tree.addChild(a0, "A-2")
tree.addChild(a0, "A-3")
tree.addChild(a0, "A-4")
tree.addChild(a0, "A-5")
tree.addChild(a0, "A-6")
tree.addChild(a0, "A-7")
tree.addChild(a0, "A-8")
tree.addChild(a0, "A-9")
tree.addChild(a0, "A-10")
tree.addChild(a0, "A-11")
tree.addChild(a0, "A-12")

tree.expandAll();
tree.onSelectNode = (node) => {
    console.log(node.caption)
}

console.log( tree.getOrderedNodes().map(node => node.caption) );

btn_add.onclick = () => {
    tree.addChild(null, "Add Node");
}
btn_remove.onclick = () => {
    if ( !tree.selected ) return;

    tree.removeNodeByUUID(tree.selected.uuid);
}
btn_expand.onclick = () => {
    tree.expandAll();
}
btn_collapse.onclick = () => {
    tree.collapseAll();
}

btn_print_sub.onclick = () => {
    tree.getOrderedNodes().forEach((node) => {
        console.log(node.caption, node.subChecked)
    });
}
`})]});d.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};var t,n,a;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Checkbox Node</DocTitle>\r
            <p><code>checkboxNode</code> 옵션을 주어 노드에 체크박스를 추가할 수 있습니다. 아래의 이벤트를 추가로 사용할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={300} html={<div>\r
                        <button id="btn_add" className="button">Add Node</button>\r
                        <button id="btn_remove" className="button">Remove Selected Node</button>\r
                        <button id="btn_expand" className="button">Expand All</button>\r
                        <button id="btn_collapse" className="button">Collapse All</button>\r
                        <button id="btn_print_sub" className="button">print subchecked</button>\r
                        <div style={{
        height: "200px",
        width: "300px",
        overflow: "auto"
      }}>\r
                            <div id="tree"></div>\r
                        </div>\r
                    </div>} code={/* javascript */\`
import { IRTree, renderCheckboxTreeNode } from "./dist/index.js";

const tree = new IRTree( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
    // Data Interface 지정 (해당 모델로 Node 내부 Data 모델 제네릭 지정됨)
    data: {
        id: 0,
        name: "",
    },
    renderer: renderCheckboxTreeNode({
        onCheck: (node) => {
            console.log(node.caption, node.checked)
        }
    })
} );

// 노드 추가
const nodes = Array.from( { length: 30 } ).map( (data, id) => tree.addChild(null, id.toString()) )

const a0 = tree.addChild(nodes[0], "0-A")
const a22 = tree.addChild(nodes[22], "22-A")

a0.checked = true;
a0.iconClass = "ir-icon--add";

tree.addChild( a22, "22-A-0" );
tree.addChild( a22, "22-A-1" );
tree.addChild( a22, "22-A-2" );
tree.addChild( a22, "22-A-3" );
tree.addChild( a22, "22-A-4" );
tree.addChild( a22, "22-A-5" );
tree.addChild( a22, "22-A-6" );
tree.addChild( a22, "22-A-7" );
tree.addChild( a22, "22-A-8" );
tree.addChild( a22, "22-A-9" );
tree.addChild( a22, "22-A-10" );
tree.addChild( a22, "22-A-11" );
tree.addChild( a22, "22-A-12" );
tree.addChild( a22, "22-A-13" );
tree.addChild( a22, "22-A-14" );
tree.addChild( a22, "22-A-15" );
tree.addChild( a22, "22-A-16" );

const order = tree.addChild( null, "order", 0, 0 );
tree.addChild(order, "order-1" );

const b0 = tree.addChild(nodes[0], "0-B")
tree.addChild(nodes[0], "0-C")
tree.addChild(nodes[0], "0-D")

tree.addChild(b0, "B-0")
tree.addChild(b0, "B-1")
tree.addChild(b0, "B-2")
tree.addChild(b0, "B-3")
tree.addChild(b0, "B-4")
tree.addChild(b0, "B-5")
tree.addChild(b0, "B-6")
tree.addChild(b0, "B-7")
tree.addChild(b0, "B-8")
tree.addChild(b0, "B-9")
tree.addChild(b0, "B-10")
tree.addChild(b0, "B-11")
tree.addChild(b0, "B-12")
tree.addChild(b0, "B-13")
tree.addChild(b0, "B-14")
tree.addChild(b0, "B-15")
tree.addChild(b0, "B-16")
tree.addChild(b0, "B-17")
tree.addChild(b0, "B-18")
tree.addChild(b0, "B-19")
tree.addChild(b0, "B-20")
tree.addChild(b0, "B-21")
tree.addChild(b0, "B-22")

tree.addChild(a0, "A-0")
tree.addChild(a0, "A-1")
tree.addChild(a0, "A-2")
tree.addChild(a0, "A-3")
tree.addChild(a0, "A-4")
tree.addChild(a0, "A-5")
tree.addChild(a0, "A-6")
tree.addChild(a0, "A-7")
tree.addChild(a0, "A-8")
tree.addChild(a0, "A-9")
tree.addChild(a0, "A-10")
tree.addChild(a0, "A-11")
tree.addChild(a0, "A-12")

tree.expandAll();
tree.onSelectNode = (node) => {
    console.log(node.caption)
}

console.log( tree.getOrderedNodes().map(node => node.caption) );

btn_add.onclick = () => {
    tree.addChild(null, "Add Node");
}
btn_remove.onclick = () => {
    if ( !tree.selected ) return;

    tree.removeNodeByUUID(tree.selected.uuid);
}
btn_expand.onclick = () => {
    tree.expandAll();
}
btn_collapse.onclick = () => {
    tree.collapseAll();
}

btn_print_sub.onclick = () => {
    tree.getOrderedNodes().forEach((node) => {
        console.log(node.caption, node.subChecked)
    });
}
\`} />\r
        </Doc>;
}`,...(a=(n=d.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const u=["Checkbox"];export{d as Checkbox,u as __namedExportsOrder,s as default};
