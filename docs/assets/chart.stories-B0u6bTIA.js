import{j as n}from"./jsx-runtime-Y5Ju2SGo.js";import{D as t,a as e,L as r}from"./version-tag-DunVkkeT.js";import"./index-eCxJ45ll.js";const o=`import { IRLineChart } from "@innorules/ir-style/lib/esm/chart.js";

new IRLineChart(
    {
        contextElement: document.getElementById( "chart" ),
        title: "Line 차트 예제",
        labels: ["A", "B", "C", "D"],
        dataSource: [
            {
                label: "1분기",
                data: [10, 20, 30, 40],
                borderColor: "rgb(255, 99, 132)",
            },
            {
                label: "2분기",
                data: [20, 30, 40, 10],
                borderColor: "skyblue",
            },
            {
                label: "3분기",
                data: [5, 15, 40, 25],
                borderColor: "lightgray",
            },
        ],
    },
);`,a=`<div id='chart' style="width:'100%'; height:500"></div>`;function i(){return n.jsxs(t,{children:[n.jsx(e,{children:"IRLineChart"}),n.jsx("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),n.jsx(r,{htmlRaw:a,code:o})]})}i.__docgenInfo={description:"",methods:[],displayName:"LineChart"};const l=`import { IRPieChart } from "@innorules/ir-style/lib/esm/chart.js";

new IRPieChart(
    {
        contextElement: document.getElementById( "chart" ),
        title: "Pie 차트 예제",
        dataSource: [
            {
                label: "A",
                data: [300],
                color: "rgb(255, 99, 132)",
            },
            {
                label: "B",
                data: [200],
                color: "rgb(54, 162, 235)",
            },
            {
                label: "C",
                data: [100],
                color: "rgb(255, 205, 86)",
            },
        ],
    },
);`,s=`<div id="chart" style="width:'100%'; height:500"></div>`;function d(){return n.jsxs(t,{children:[n.jsx(e,{children:"IRPieChart"}),n.jsx("p",{children:"원형 차트를 표현하는 컴포넌트입니다."}),n.jsx(r,{htmlRaw:s,code:l})]})}d.__docgenInfo={description:"",methods:[],displayName:"PieChart"};const C={title:"JS Components/IRChart"},b=["LineChart","PieChart"];export{i as LineChart,d as PieChart,b as __namedExportsOrder,C as default};
