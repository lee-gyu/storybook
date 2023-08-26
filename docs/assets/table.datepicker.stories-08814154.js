import{j as r,a as e,F as n}from"./jsx-runtime-e43ccb36.js";import{D as o,a,L as l}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const b={title:"HTML Components/Table"},t=()=>r(o,{children:[e(a,{children:"Table"}),e("p",{children:"표를 표현할 수 있는 스타일입니다."}),e(l,{fixedHeight:400,html:r(n,{children:[e("style",{children:`
td.date-picker-cell input {
    border: none;
}`}),e("div",{className:"table table--border",children:r("table",{children:[r("colgroup",{children:[e("col",{style:{width:"30%"}}),e("col",{})]}),e("tbody",{children:r("tr",{children:[e("th",{scope:"row",children:"룰 이름"}),e("td",{className:"date-picker-cell",children:e("div",{id:"date_picker"})})]})})]})})]}),code:`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({ div: date_picker })`})]});var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Table</DocTitle>\r
        <p>표를 표현할 수 있는 스타일입니다.</p>\r
        <LiveEditor fixedHeight={400} html={<>\r
                <style>{\`
td.date-picker-cell input {
    border: none;
}\`}\r
                </style>\r
                <div className="table table--border">\r
                    <table>\r
                        <colgroup>\r
                            <col style={{
            width: "30%"
          }} />\r
                            <col />\r
                        </colgroup>\r
                        <tbody>\r
                            <tr>\r
                                <th scope="row">룰 이름</th>\r
                                <td className="date-picker-cell">\r
                                    <div id="date_picker"></div>\r
                                </td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
            </>} code={\`
import { IRDatePicker } from "./dist/index.js";

new IRDatePicker({ div: date_picker })\`} />\r
    </Doc>`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["DatePicker"];export{t as DatePicker,k as __namedExportsOrder,b as default};
//# sourceMappingURL=table.datepicker.stories-08814154.js.map
