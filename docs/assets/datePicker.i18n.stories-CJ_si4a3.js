import{j as n}from"./jsx-runtime-DEdD30eg.js";import{D as r,a as c,L as m}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const l={title:"JS Components/IRDatePicker"},e=()=>n.jsxs(r,{children:[n.jsx(c,{children:"다국어 지원"}),n.jsxs("p",{children:[n.jsx("code",{children:"i18n"})," 개체 멤버를 이용하여 사용자 정의 텍스트를 지정할 수 있습니다."]}),n.jsx(m,{fixedHeight:400,html:n.jsx("div",{className:"input"}),code:`
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
})`})]});e.__docgenInfo={description:"",methods:[],displayName:"localization"};var o,i,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const u=["localization"];export{u as __namedExportsOrder,l as default,e as localization};
