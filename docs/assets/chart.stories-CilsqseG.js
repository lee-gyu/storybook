import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as n,a as t,L as e}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const o=`import { IRLineChart } from "@innorules/ir-style/lib/esm/chart.js";\r
\r
new IRLineChart(\r
    {\r
        contextElement: document.getElementById( "chart" ),\r
        title: "Line 차트 예제",\r
        labels: ["A", "B", "C", "D"],\r
        dataSource: [\r
            {\r
                label: "1분기",\r
                data: [10, 20, 30, 40],\r
                borderColor: "rgb(255, 99, 132)",\r
            },\r
            {\r
                label: "2분기",\r
                data: [20, 30, 40, 10],\r
                borderColor: "skyblue",\r
            },\r
            {\r
                label: "3분기",\r
                data: [5, 15, 40, 25],\r
                borderColor: "lightgray",\r
            },\r
        ],\r
    },\r
);`,a=`<div id='chart' style="width:'100%'; height:500"></div>`;function i(){return r.jsxs(n,{children:[r.jsx(t,{children:"IRLineChart"}),r.jsx("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),r.jsx(e,{htmlRaw:a,code:o})]})}i.__docgenInfo={description:"",methods:[],displayName:"LineChart"};const l=`import { IRPieChart } from "@innorules/ir-style/lib/esm/chart.js";\r
\r
new IRPieChart(\r
    {\r
        contextElement: document.getElementById( "chart" ),\r
        title: "Pie 차트 예제",\r
        dataSource: [\r
            {\r
                label: "A",\r
                data: [300],\r
                color: "rgb(255, 99, 132)",\r
            },\r
            {\r
                label: "B",\r
                data: [200],\r
                color: "rgb(54, 162, 235)",\r
            },\r
            {\r
                label: "C",\r
                data: [100],\r
                color: "rgb(255, 205, 86)",\r
            },\r
        ],\r
    },\r
);`,s=`<div id="chart" style="width:'100%'; height:500"></div>`;function d(){return r.jsxs(n,{children:[r.jsx(t,{children:"IRPieChart"}),r.jsx("p",{children:"원형 차트를 표현하는 컴포넌트입니다."}),r.jsx(e,{htmlRaw:s,code:l})]})}d.__docgenInfo={description:"",methods:[],displayName:"PieChart"};const b={title:"JS Components/IRChart"},p=["LineChart","PieChart"];export{i as LineChart,d as PieChart,p as __namedExportsOrder,b as default};
