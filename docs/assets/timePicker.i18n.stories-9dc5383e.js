import{j as r,a as i,F as c}from"./jsx-runtime-d057ca55.js";import{D as m,a as s,L as a}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const P={title:"JS Components/TimePicker"},e=()=>r(m,{children:[i(s,{children:"Localization"}),r("p",{children:[i("code",{children:"i18n"}),"의 데이터를 수정하여 다국어 표현을 추가할 수 있습니다."]}),i(a,{fixedHeight:400,html:i(c,{children:i("div",{id:"time_picker",style:{width:200}})}),code:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const h=["Localization"];export{e as Localization,h as __namedExportsOrder,P as default};
//# sourceMappingURL=timePicker.i18n.stories-9dc5383e.js.map
