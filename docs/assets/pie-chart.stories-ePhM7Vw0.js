import{j as n,a as t}from"./jsx-runtime-KzWSGvcx.js";import{D as i,a as c,L as l}from"./doc-content-Bip4Hiu4.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const u={title:"JS Components/Chart"},e=()=>n(i,{children:[t(c,{children:"IRPieChart"}),t("p",{children:"원형 차트를 표현하는 컴포넌트입니다."}),t(l,{html:t("div",{id:"chart",style:{width:"100%",height:500}}),code:`
import { IRPieChart } from "./dist/chart.js";

const pieChart = new IRPieChart(
    {
        contextElement: document.getElementById("chart"),
        title: "Pie 차트 예제",
        dataSource: [
            {
                label: "A",
                data: [300],
                color: "rgb(255, 99, 132)"
            },
            {
                label: "B",
                data: [200],
                color: "rgb(54, 162, 235)"
            },
            {
                label: "C",
                data: [100],
                color: "rgb(255, 205, 86)"
            }
        ]
    })
`})]});var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>IRPieChart</DocTitle>\r
        <p>원형 차트를 표현하는 컴포넌트입니다.</p>\r
        <LiveEditor html={<div id='chart' style={{
    width: "100%",
    height: 500
  }}></div>} code={\`
import { IRPieChart } from "./dist/chart.js";

const pieChart = new IRPieChart(
    {
        contextElement: document.getElementById("chart"),
        title: "Pie 차트 예제",
        dataSource: [
            {
                label: "A",
                data: [300],
                color: "rgb(255, 99, 132)"
            },
            {
                label: "B",
                data: [200],
                color: "rgb(54, 162, 235)"
            },
            {
                label: "C",
                data: [100],
                color: "rgb(255, 205, 86)"
            }
        ]
    })
\`} />\r
    </Doc>`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const m=["PieChart"];export{e as PieChart,m as __namedExportsOrder,u as default};
