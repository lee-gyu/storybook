import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as r,a as i,L as c}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const p={title:"JS Components/Select"},t=()=>e.jsxs(r,{children:[e.jsx(i,{children:"Event"}),e.jsxs("p",{children:[e.jsx("code",{children:"onChange"})," 이벤트를 이용하여 값 변경 시 이벤트를 받을 수 있습니다."]}),e.jsx(c,{fixedHeight:400,html:e.jsxs("select",{style:{display:"none"},children:[e.jsx("option",{"data-key":"A",children:"한국어"}),e.jsx("option",{children:"English"})]}),code:`
import { IRSelect } from "./dist/index.js";

new IRSelect({
    contextElement: document.querySelector("select"),
    onChange: function (select, option) {
        console.log( this.value )
        alert(select.value + "," + option.getAttribute("data-key"))
    }
});
`})]});t.__docgenInfo={description:"",methods:[],displayName:"Event"};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const C=["Event"];export{t as Event,C as __namedExportsOrder,p as default};
