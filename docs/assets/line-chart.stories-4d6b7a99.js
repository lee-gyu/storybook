import{j as o,a as e}from"./jsx-runtime-d057ca55.js";import{D as i,a as l,L as d}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const C={title:"JS Components/Chart"},t=()=>o(i,{children:[e(l,{children:"IRLineChart"}),e("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),e(d,{html:e("div",{id:"chart",style:{width:"100%",height:500}}),code:`
import { IRLineChart } from "./dist/chart.js";

const pieChart = new IRLineChart(
    {
        contextElement: document.getElementById("chart"),
        title: "Line 차트 예제",
        labels: ["A", "B", "C", "D"],
        dataSource: [
            {
                label: "1분기",
                data: [10, 20, 30, 40],
                borderColor: "rgb(255, 99, 132)"
            },
            {
                label: "2분기",
                data: [20, 30, 40, 10],
                borderColor: "skyblue"
            },
            {
                label: "3분기",
                data: [5, 15, 40, 25],
                borderColor: "lightgray"
            }
        ]
    })
`})]});var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRLineChart</DocTitle>\r
        <p>선형 차트를 표현하는 컴포넌트입니다.</p>\r
        <LiveEditor html={<div id='chart' style={{
    width: "100%",
    height: 500
  }}></div>} code={\`
import { IRLineChart } from "./dist/chart.js";

const pieChart = new IRLineChart(
    {
        contextElement: document.getElementById("chart"),
        title: "Line 차트 예제",
        labels: ["A", "B", "C", "D"],
        dataSource: [
            {
                label: "1분기",
                data: [10, 20, 30, 40],
                borderColor: "rgb(255, 99, 132)"
            },
            {
                label: "2분기",
                data: [20, 30, 40, 10],
                borderColor: "skyblue"
            },
            {
                label: "3분기",
                data: [5, 15, 40, 25],
                borderColor: "lightgray"
            }
        ]
    })
\`} />\r
    </Doc>`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const b=["LineChart"];export{t as LineChart,b as __namedExportsOrder,C as default};
//# sourceMappingURL=line-chart.stories-4d6b7a99.js.map
