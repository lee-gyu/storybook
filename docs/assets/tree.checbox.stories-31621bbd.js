import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{D as a,a as i,L as c}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const m={title:"JS Components/Tree"},d=()=>n(a,{children:[e(i,{children:"Checkbox Node"}),n("p",{children:[e("code",{children:"checkboxNode"})," 옵션을 주어 노드에 체크박스를 추가할 수 있습니다. 아래의 이벤트를 추가로 사용할 수 있습니다."]}),e(c,{fixedHeight:300,html:e("div",{style:{height:"200px",width:"300px",overflow:"auto"},children:e("div",{id:"tree"})}),code:`
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
tree.addChild(nodes[0], "0-B")
tree.addChild(nodes[0], "0-C")
tree.addChild(nodes[0], "0-D")

tree.addChild(a0, "A-0")
tree.addChild(a0, "A-1")
tree.addChild(a0, "A-2")
tree.addChild(a0, "A-3")

tree.expandAll();

`})]});var r,t,o;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
tree.addChild(nodes[0], "0-B")
tree.addChild(nodes[0], "0-C")
tree.addChild(nodes[0], "0-D")

tree.addChild(a0, "A-0")
tree.addChild(a0, "A-1")
tree.addChild(a0, "A-2")
tree.addChild(a0, "A-3")

tree.expandAll();

\`} />\r
        </Doc>;
}`,...(o=(t=d.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const p=["Checkbox"];export{d as Checkbox,p as __namedExportsOrder,m as default};
//# sourceMappingURL=tree.checbox.stories-31621bbd.js.map
