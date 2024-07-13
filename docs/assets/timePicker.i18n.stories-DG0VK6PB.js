import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{D as o,a as c,L as m}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const p={title:"JS Components/TimePicker"},e=()=>i.jsxs(o,{children:[i.jsx(c,{children:"Localization"}),i.jsxs("p",{children:[i.jsx("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),i.jsx(m,{fixedHeight:400,html:i.jsx(i.Fragment,{children:i.jsx("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker, i18n } from "./dist/index.js";

i18n.timePicker.am = "AM";
i18n.timePicker.pm = "PM";
i18n.timePicker.btnNow = "Now";

new IRTimePicker({
    contextElement: time_picker
})
`})]});e.__docgenInfo={description:"",methods:[],displayName:"Localization"};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Localization</DocTitle>\r
            <p><code>i18n</code>의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                        <div id="time_picker" style={{
        width: 200
      }}></div>\r
                    </>} code={\`
import { IRTimePicker, i18n } from "./dist/index.js";

i18n.timePicker.am = "AM";
i18n.timePicker.pm = "PM";
i18n.timePicker.btnNow = "Now";

new IRTimePicker({
    contextElement: time_picker
})
\`} />\r
        </Doc>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const l=["Localization"];export{e as Localization,l as __namedExportsOrder,p as default};
