import{j as e,a as n,F as s}from"./jsx-runtime-e43ccb36.js";import{D as c,a,L as p}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const u={title:"JS Components/Confirm"},t=()=>e(c,{children:[n(a,{children:"KeyBinding"}),e("p",{children:[n("code",{children:"enterButton"})," 값을 지정하여 엔터 키에 대한 기본 클릭 버튼을 지정합니다."]}),n(p,{fixedHeight:300,html:e(s,{children:[n("button",{id:"btn_yes",className:"button",children:"예"}),n("button",{id:"btn_no",className:"button",children:"아니오"})]}),code:`
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
`})]});var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const b=["KeyBinding"];export{t as KeyBinding,b as __namedExportsOrder,u as default};
//# sourceMappingURL=confirm.keyBinding.stories-d037242e.js.map
