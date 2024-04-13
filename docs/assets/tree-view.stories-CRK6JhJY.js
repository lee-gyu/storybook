import{j as n,a as e,F as i}from"./jsx-runtime-CjohWU4o.js";import{D as c,a as l,L as d}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const m={title:"JS Components/TreeView"},t=()=>n(c,{children:[e(l,{children:"IRTreeView"}),e("p",{children:"기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다."}),e(d,{html:n(i,{children:[n("div",{style:{marginBottom:4},children:[n("label",{children:[e("input",{id:"chk_header_visible",defaultChecked:!0,type:"checkbox"}),"header visible"]}),n("label",{children:[e("input",{id:"chk_toggle_columns",defaultChecked:!0,type:"checkbox"}),"Toggle Columns"]}),n("label",{children:[e("input",{id:"chk_toggle_multi_select",type:"checkbox"}),"Multi Select"]})]}),e("div",{id:"container",style:{display:"grid",width:320,height:300,border:"1px solid var(--border-color)"}})]}),code:`
import { IRTreeView } from "./dist/index.js";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 3,
        text: ["헤더", "폴더", "룰(메인)"],
        width: ["*", 48, 70],
    }
} );

container.appendChild( tree.element );

tree.addHook( "contextMenu", console.log);

tree.addNode({
    key: "test",
    caption: "비활성화",
    disabled: true,
});

for ( let i = 0; i < 100; i++ )
{
    tree.addNode({
        key: String(i),
        caption: "컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",
        columns: [ "0", "0" ]
    });
}

tree.addNode({
    parentKey: "0",
    key: "0-1",
    caption: "자식 노드",
});

chk_header_visible.onchange = (ev) => {
    tree.displayHeader = ev.currentTarget.checked;
}

chk_toggle_columns.onchange = (ev) => {
    tree.setColumnCount( ev.currentTarget.checked ? 3 : 1);
    tree.autoSizeColumn(0);
}

chk_toggle_multi_select.onchange = (ev) => {
    tree.multiSelect = ev.currentTarget.checked;
}

`})]});var r,o,u;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRTreeView</DocTitle>\r
            <p>기존 IRTree의 구조적인 문제를 개선하여 고성능의 확장성 높고, 다양한 기능을 제공하는 확장 버전의 Tree UI 컴포넌트 입니다.</p>\r
            <LiveEditor html={<>\r
                        <div style={{
        marginBottom: 4
      }}>\r
                            <label>\r
                                <input id="chk_header_visible" defaultChecked type="checkbox" />header visible\r
                            </label>\r
                            <label>\r
                                <input id="chk_toggle_columns" defaultChecked type="checkbox" />Toggle Columns\r
                            </label>\r
                            <label>\r
                                <input id="chk_toggle_multi_select" type="checkbox" />Multi Select\r
                            </label>\r
                        </div>\r
                        <div id="container" style={{
        display: "grid",
        width: 320,
        height: 300,
        border: "1px solid var(--border-color)"
      }}></div>\r
                    </>} code={/* javascript */\`
import { IRTreeView } from "./dist/index.js";

const tree = new IRTreeView( {
    showIcon: true,
    defaultIcon: "ir-icon--folder-fill",
    defaultIconColor: "var(--blue)",
    displayHeader: true,
    headerRow: {
        columnCount: 3,
        text: ["헤더", "폴더", "룰(메인)"],
        width: ["*", 48, 70],
    }
} );

container.appendChild( tree.element );

tree.addHook( "contextMenu", console.log);

tree.addNode({
    key: "test",
    caption: "비활성화",
    disabled: true,
});

for ( let i = 0; i < 100; i++ )
{
    tree.addNode({
        key: String(i),
        caption: "컬럼 텍스트의 길이는 몇글자 ㅇㅇㅇ abc091823917823981729381729378",
        columns: [ "0", "0" ]
    });
}

tree.addNode({
    parentKey: "0",
    key: "0-1",
    caption: "자식 노드",
});

chk_header_visible.onchange = (ev) => {
    tree.displayHeader = ev.currentTarget.checked;
}

chk_toggle_columns.onchange = (ev) => {
    tree.setColumnCount( ev.currentTarget.checked ? 3 : 1);
    tree.autoSizeColumn(0);
}

chk_toggle_multi_select.onchange = (ev) => {
    tree.multiSelect = ev.currentTarget.checked;
}

\`} />\r
        </Doc>;
}`,...(u=(o=t.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const g=["Basic"];export{t as Basic,g as __namedExportsOrder,m as default};
