import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a as r,L as a}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const d={title:"JS Utility/SessionAPI"},t=()=>e.jsxs(i,{children:[e.jsx(r,{children:"Loading"}),e.jsx("p",{children:"Session API를 이용하여 같은 세션 내 탭 이벤트를 호출합니다."}),e.jsx(a,{css:"",html:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"button",id:"new_tab",children:"New Tab"}),e.jsx("button",{className:"button",id:"set_item",children:"set item"}),e.jsx("button",{className:"button",id:"remove_item",children:"remove item"}),e.jsx("button",{className:"button",id:"clear_item",children:"clear item"})]}),code:`
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

`})]});t.__docgenInfo={description:"",methods:[],displayName:"SessionAPI"};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const p=["SessionAPI"];export{t as SessionAPI,p as __namedExportsOrder,d as default};
