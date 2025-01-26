import{j as e}from"./jsx-runtime-CZmXTeUy.js";import{D as a,a as i,L as l}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const h={title:"JS Components/IRChart"},t=()=>e.jsxs(a,{children:[e.jsx(i,{children:"IRLineChart"}),e.jsx("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),e.jsx(l,{html:e.jsx("div",{id:"chart",style:{width:"100%",height:500}}),code:`
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
`})]});t.__docgenInfo={description:"",methods:[],displayName:"LineChart"};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Doc>\r
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
    </Doc>`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const m=["LineChart"];export{t as LineChart,m as __namedExportsOrder,h as default};
