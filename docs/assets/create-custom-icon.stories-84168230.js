import{j as o,a as n}from"./jsx-runtime-e43ccb36.js";import{D as s,a as c,L as l}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const d={title:"JS Utility/CreateCustomIcon"},t=()=>o(s,{children:[n(c,{children:"createCustomIcon"}),o("p",{children:[n("code",{children:"createCustomIcon"}),"를 이용하여 특정 svg 아이콘 스타일을 추가합니다."]}),n(l,{html:o("div",{children:[n("i",{className:"ir-icon ir-icon--custom-icon-string"}),n("i",{className:"ir-icon ir-icon--custom-icon-number"})]}),code:`
import { createCustomIcon } from "./dist/index.js";

createCustomIcon({
    name: "custom-icon-string",
    svg: \`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <path fill="red" d="M26.3,35h7.4l1.8,5h4.2l-7.9-21.7h-3.8L20.2,40h4.2L26.3,35z M30,24.9l2.2,6.1h-4.5L30,24.9z" />
    <path fill="red" d="M14,14h32v21h4V10H10v40h17v-4H14V14z" />
    <g>
        <path fill="#2B3C56" d="M56,46H37v4h19V46z" />
        <path fill="#2B3C56" d="M33,48l10,8V40L33,48z" />
    </g>
</svg>\`
},
    {
        name: "custom-icon-number",
        svg: \`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <path fill="red" d="M14,14h32v21h4V10H10v40h17v-4H14V14z" />
    <path fill="red" d="M37,36.5h-4.5v-17h-4l-4.5,6h4.5v11H24v4h13V36.5z" />
    <g>
        <path fill="#2B3C56" d="M56,46H37v4h19V46z" />
        <path fill="#2B3C56" d="M33,48l10,8V40L33,48z" />
    </g>
</svg>\`
    }
)
`})]});var i,r,e;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>createCustomIcon</DocTitle>\r
            <p><code>createCustomIcon</code>를 이용하여 특정 svg 아이콘 스타일을 추가합니다.</p>\r
            <LiveEditor html={<div>\r
                    <i className="ir-icon ir-icon--custom-icon-string"></i>\r
                    <i className="ir-icon ir-icon--custom-icon-number"></i>\r
                </div>} code={/* javascript */\`
import { createCustomIcon } from "./dist/index.js";

createCustomIcon({
    name: "custom-icon-string",
    svg: \\\`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <path fill="red" d="M26.3,35h7.4l1.8,5h4.2l-7.9-21.7h-3.8L20.2,40h4.2L26.3,35z M30,24.9l2.2,6.1h-4.5L30,24.9z" />
    <path fill="red" d="M14,14h32v21h4V10H10v40h17v-4H14V14z" />
    <g>
        <path fill="#2B3C56" d="M56,46H37v4h19V46z" />
        <path fill="#2B3C56" d="M33,48l10,8V40L33,48z" />
    </g>
</svg>\\\`
},
    {
        name: "custom-icon-number",
        svg: \\\`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <path fill="red" d="M14,14h32v21h4V10H10v40h17v-4H14V14z" />
    <path fill="red" d="M37,36.5h-4.5v-17h-4l-4.5,6h4.5v11H24v4h13V36.5z" />
    <g>
        <path fill="#2B3C56" d="M56,46H37v4h19V46z" />
        <path fill="#2B3C56" d="M33,48l10,8V40L33,48z" />
    </g>
</svg>\\\`
    }
)
\`} />\r
        </Doc>;
}`,...(e=(r=t.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const p=["CreateCustomIcon"];export{t as CreateCustomIcon,p as __namedExportsOrder,d as default};
//# sourceMappingURL=create-custom-icon.stories-84168230.js.map
