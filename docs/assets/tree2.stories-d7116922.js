import{j as d,a as e,F as i}from"./jsx-runtime-e43ccb36.js";import{D as c,a,L as s}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const h={title:"JS Components/Tree2"},n=()=>d(c,{children:[e(a,{children:"IRTree2"}),d("p",{children:[e("code",{children:"IRTree2"})," 클래스를 활용하여 노드 출력 성능이 향상된 트리 컴포넌트를 생성할 수 있습니다."]}),e(s,{fixedHeight:450,html:d(i,{children:[e("style",{children:`
                    #tree {
                        height: 400px;
                    }
                    `}),e("div",{id:"tree"})]}),code:`
import { IRTree2 } from "./dist/index.js";

const tree = new IRTree2( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
} );

// 노드 추가
const nodeA = tree.addRootNode( {
    caption: "A",
    expand: true
} );

const nodeB = tree.addRootNode( {
    caption: "B"
} );

const nodeA1 = tree.addChildNode( nodeA.uuid, {
    caption: "A-1"
} )

tree.addChildNode( nodeA.uuid, {
    caption: "A-2"
} )

tree.addChildNode( nodeA1.uuid, {
    caption: "A-1-1"
} )

tree.addChildNode( nodeA1.uuid, {
    caption: "A-1-2"
} )


`})]});var t,o,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRTree2</DocTitle>\r
            <p><code>IRTree2</code> 클래스를 활용하여 노드 출력 성능이 향상된 트리 컴포넌트를 생성할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={450} html={<>\r
                    <style>{\`
                    #tree {
                        height: 400px;
                    }
                    \`}</style>\r
                    <div id="tree"></div>\r
                </>} code={/* javascript */\`
import { IRTree2 } from "./dist/index.js";

const tree = new IRTree2( {
    // 생성하려는 element 지정
    contextElement: document.querySelector( "#tree" ),
} );

// 노드 추가
const nodeA = tree.addRootNode( {
    caption: "A",
    expand: true
} );

const nodeB = tree.addRootNode( {
    caption: "B"
} );

const nodeA1 = tree.addChildNode( nodeA.uuid, {
    caption: "A-1"
} )

tree.addChildNode( nodeA.uuid, {
    caption: "A-2"
} )

tree.addChildNode( nodeA1.uuid, {
    caption: "A-1-1"
} )

tree.addChildNode( nodeA1.uuid, {
    caption: "A-1-2"
} )


\`} />\r
        </Doc>;
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const A=["Basic"];export{n as Basic,A as __namedExportsOrder,h as default};
//# sourceMappingURL=tree2.stories-d7116922.js.map
