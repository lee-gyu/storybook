import{j as n,a as e}from"./jsx-runtime-KzWSGvcx.js";import{D as i,a as l,L as s}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const C={title:"JS Components/Select"},t=()=>n(i,{children:[e(l,{children:"Event"}),n("p",{children:[e("code",{children:"onChange"})," 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다."]}),e(s,{fixedHeight:400,html:n("select",{style:{display:"none"},children:[e("option",{"data-key":"A",children:"한국어"}),e("option",{children:"English"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select"),
    onChange: function (select, option) {
        console.log( this.value )
        alert(select.value + "," + option.getAttribute("data-key"))
    }
});
`})]});var o,r,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Event</DocTitle>\r
            <p><code>onChange</code> 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<select style={{
      display: "none"
    }}>\r
                        <option data-key="A">한국어</option>\r
                        <option>English</option>\r
                    </select>} code={/* javascript */\`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select"),
    onChange: function (select, option) {
        console.log( this.value )
        alert(select.value + "," + option.getAttribute("data-key"))
    }
});
\`} />\r
        </Doc>;
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const m=["Event"];export{t as Event,m as __namedExportsOrder,C as default};
