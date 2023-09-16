import{j as o,a as e,F as r}from"./jsx-runtime-e43ccb36.js";import{D as a,a as m,L as c}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const b={title:"JS Utility/SessionAPI"},t=()=>o(a,{children:[e(m,{children:"Loading"}),e("p",{children:"Session API를 이용하여 같은 세션 내 탭 이벤트를 호출합니다."}),e(c,{css:"",html:o(r,{children:[e("button",{className:"button",id:"new_tab",children:"New Tab"}),e("button",{className:"button",id:"set_item",children:"set item"}),e("button",{className:"button",id:"remove_item",children:"remove item"}),e("button",{className:"button",id:"clear_item",children:"clear item"})]}),code:`
import { openNewWindow, postSetItem, postRemoveItem, postClear } from "./dist/index.js";


new_tab.onclick = () => {
    openNewWindow( {
        url: "/iframe.html?id=js-utility-sessionapi--session-api&viewMode=story",
        target: "$NEW_SESSION"
    });
}

set_item.onclick = () => {
    postSetItem( "auth", "ABC" );
}

remove_item.onclick = () => {
    postRemoveItem( "auth" );
}

clear_item.onclick = () => {
    postClear( );
}

`})]});var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Loading</DocTitle>\r
            <p>Session API를 이용하여 같은 세션 내 탭 이벤트를 호출합니다.</p>\r
            <LiveEditor css={\`\`} html={<>\r
                    <button className="button" id="new_tab">New Tab</button>\r
                    <button className="button" id="set_item">set item</button>\r
                    <button className="button" id="remove_item">remove item</button>\r
                    <button className="button" id="clear_item">clear item</button>\r
                </>} code={/* javascript */\`
import { openNewWindow, postSetItem, postRemoveItem, postClear } from "./dist/index.js";


new_tab.onclick = () => {
    openNewWindow( {
        url: "/iframe.html?id=js-utility-sessionapi--session-api&viewMode=story",
        target: "$NEW_SESSION"
    });
}

set_item.onclick = () => {
    postSetItem( "auth", "ABC" );
}

remove_item.onclick = () => {
    postRemoveItem( "auth" );
}

clear_item.onclick = () => {
    postClear( );
}

\`} />\r
        </Doc>;
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["SessionAPI"];export{t as SessionAPI,_ as __namedExportsOrder,b as default};
//# sourceMappingURL=session.api.stories-21fb7510.js.map
