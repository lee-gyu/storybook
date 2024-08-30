import{j as n}from"./index-BVpe1bT6.js";import{D as s,a as r,L as c}from"./doc-content-BzTGzIX_.js";import"./index-RYns6xqu.js";const a={title:"JS Components/IRConfirm"},t=()=>n.jsxs(s,{children:[n.jsx(r,{children:"KeyBinding"}),n.jsxs("p",{children:[n.jsx("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n.jsx(c,{fixedHeight:300,html:n.jsxs(n.Fragment,{children:[n.jsx("button",{id:"btn_yes",className:"button",children:"예"}),n.jsx("button",{id:"btn_no",className:"button",children:"아니오"})]}),code:`
import { IRConfirm } from "./dist/index.js";

btn_yes.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "yes",
        contentElement: $("<span/>").text("예, 아니오"),
    }).show();
}

btn_no.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "no",
        escButton: "yes",
        contentElement: $("<span/>").text("예, 아니오"),
    }).show();
}
`})]});t.__docgenInfo={description:"",methods:[],displayName:"KeyBinding"};var e,o,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>KeyBinding</DocTitle>\r
            <p><code>enterButton</code> 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다.</p>\r
            <LiveEditor fixedHeight={300} html={<>\r
                        <button id="btn_yes" className="button">예</button>\r
                        <button id="btn_no" className="button">아니오</button>\r
                    </>} code={\`
import { IRConfirm } from "./dist/index.js";

btn_yes.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "yes",
        contentElement: $("<span/>").text("예, 아니오"),
    }).show();
}

btn_no.onclick = () => {
    new IRConfirm({
        buttonType: ["no", "yes"],
        iconType: "question",
        onClick: (type) => alert(type),
        enterButton: "no",
        escButton: "yes",
        contentElement: $("<span/>").text("예, 아니오"),
    }).show();
}
\`} />\r
        </Doc>;
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const l=["KeyBinding"];export{t as KeyBinding,l as __namedExportsOrder,a as default};
