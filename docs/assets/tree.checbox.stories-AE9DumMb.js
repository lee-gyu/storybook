import{j as a,a as d}from"./jsx-runtime-KzWSGvcx.js";import{D as C,a as i,L as l}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const A={title:"JS Components/Tree"},e=()=>a(C,{children:[d(i,{children:"Checkbox Node"}),a("p",{children:[d("code",{children:"checkboxNode"})," 옵션을 주어 노드에 체크박스를 추가할 수 있습니다. 아래의 이벤트를 추가로 사용할 수 있습니다."]}),d(l,{fixedHeight:300,html:d("div",{style:{height:"200px",width:"300px",overflow:"auto"},children:d("div",{id:"tree"})}),code:`
import { IRTree, Palette, renderCheckboxTreeNode } from "./dist/index.js";

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

console.log( tree.getOrderedNodes().map(node => node.caption) );

`})]});var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Checkbox Node</DocTitle>\r
            <p><code>checkboxNode</code> 옵션을 주어 노드에 체크박스를 추가할 수 있습니다. 아래의 이벤트를 추가로 사용할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={300} html={<div style={{
      height: "200px",
      width: "300px",
      overflow: "auto"
    }}>\r
                        <div id="tree"></div>\r
                    </div>} code={/* javascript */\`
import { IRTree, Palette, renderCheckboxTreeNode } from "./dist/index.js";

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

console.log( tree.getOrderedNodes().map(node => node.caption) );

\`} />\r
        </Doc>;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const c=["Checkbox"];export{e as Checkbox,c as __namedExportsOrder,A as default};
