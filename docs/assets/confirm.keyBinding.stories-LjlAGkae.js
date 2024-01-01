import{j as e,a as n,F as r}from"./jsx-runtime-KzWSGvcx.js";import{D as s,a as c,L as C}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const m={title:"JS Components/Confirm"},t=()=>e(s,{children:[n(c,{children:"KeyBinding"}),e("p",{children:[n("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n(C,{fixedHeight:300,html:e(r,{children:[n("button",{id:"btn_yes",className:"button",children:"예"}),n("button",{id:"btn_no",className:"button",children:"아니오"})]}),code:`
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
`})]});var o,i,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const y=["KeyBinding"];export{t as KeyBinding,y as __namedExportsOrder,m as default};
