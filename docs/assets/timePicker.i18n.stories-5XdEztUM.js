import{j as r,a as i,F as c}from"./jsx-runtime-CjohWU4o.js";import{D as m,a as s,L as a}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const k={title:"JS Components/TimePicker"},e=()=>r(m,{children:[i(s,{children:"Localization"}),r("p",{children:[i("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),i(a,{fixedHeight:400,html:i(c,{children:i("div",{id:"time_picker",style:{width:200}})}),code:`
import { IRTimePicker, i18n } from "./dist/index.js";

i18n.timePicker.am = "AM";
i18n.timePicker.pm = "PM";
i18n.timePicker.btnNow = "Now";

new IRTimePicker({
    contextElement: time_picker
})
`})]});var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const D=["Localization"];export{e as Localization,D as __namedExportsOrder,k as default};
