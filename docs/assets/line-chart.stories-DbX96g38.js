import{j as o,a as t}from"./jsx-runtime-CjohWU4o.js";import{D as i,a as l,L as d}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const m={title:"JS Components/Chart"},e=()=>o(i,{children:[t(l,{children:"IRLineChart"}),t("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),t(d,{html:t("div",{id:"chart",style:{width:"100%",height:500}}),code:`
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
`})]});var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const D=["LineChart"];export{e as LineChart,D as __namedExportsOrder,m as default};
