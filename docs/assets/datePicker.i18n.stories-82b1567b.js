import{j as o,a as n}from"./jsx-runtime-e43ccb36.js";import{D as c,a as m,L as a}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const p={title:"JS Components/DatePicker"},e=()=>o(c,{children:[n(m,{children:"다국어 지원"}),o("p",{children:[n("code",{children:"i18n"})," 개체 멤버를 이용하여 사용자 정의 텍스트를 지정할 수 있습니다."]}),n(a,{fixedHeight:400,html:n("div",{className:"input"}),code:`
import { IRDatePicker, i18n } from "./dist/index.js";

i18n.setLocale("en");

i18n.datePicker.btnToday = "Today";
i18n.datePicker.titleFormat = "MMMM YYYY";
i18n.datePicker.dateFormat = "MM/DD/YYYY";

i18n.common.sun = "Sun";
i18n.common.mon = "Mon";
i18n.common.tue = "Tue";
i18n.common.wed = "Wed";
i18n.common.wed = "Wed";
i18n.common.thu = "Thu";
i18n.common.fri = "Fri";
i18n.common.sat = "Sat";

new IRDatePicker({
    div: document.querySelector(".input"),
})`})]});var i,t,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>다국어 지원</DocTitle>\r
            <p><code>i18n</code> 개체 멤버를 이용하여 사용자 정의 텍스트를 지정할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<div className="input"></div>} code={\`
import { IRDatePicker, i18n } from "./dist/index.js";

i18n.setLocale("en");

i18n.datePicker.btnToday = "Today";
i18n.datePicker.titleFormat = "MMMM YYYY";
i18n.datePicker.dateFormat = "MM/DD/YYYY";

i18n.common.sun = "Sun";
i18n.common.mon = "Mon";
i18n.common.tue = "Tue";
i18n.common.wed = "Wed";
i18n.common.wed = "Wed";
i18n.common.thu = "Thu";
i18n.common.fri = "Fri";
i18n.common.sat = "Sat";

new IRDatePicker({
    div: document.querySelector(".input"),
})\`} />\r
        </Doc>;
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const D=["localization"];export{D as __namedExportsOrder,p as default,e as localization};
//# sourceMappingURL=datePicker.i18n.stories-82b1567b.js.map
