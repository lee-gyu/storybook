import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as t,L as e}from"./version-tag-DqccibA3.js";import"./iframe-D3tc5L3-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQMUxHhF.js";const o=`import { IRLineChart } from "@innorules/ir-style/lib/esm/chart.js";\r
\r
new IRLineChart(\r
    {\r
        // animation: false,\r
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
        plugins: {\r
            // 커스텀 시, 아래  URL Docs 참고할 것.\r
            // https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks\r
            // tooltip: {\r
            //     callbacks: {\r
            //         // 값 포맷/단위\r
            //         label: ( ctx ) => \`\${ctx.raw}원\`,\r
            //         title: ( items ) => \`X축: \${items[0].label}\`,\r
            //         footer: ( items ) => \`총 \${items.length}개\`,\r
            //     },\r
            // },\r
        },\r
    },\r
);`,a=`<div id='chart' style="width: 100%; height: 500px"></div>`;function i(){return r.jsxs(n,{children:[r.jsx(t,{children:"IRLineChart"}),r.jsx("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),r.jsx(e,{htmlRaw:a,code:o})]})}i.__docgenInfo={description:"",methods:[],displayName:"LineChart"};const l=`import { IRPieChart } from "@innorules/ir-style/lib/esm/chart.js";\r
\r
new IRPieChart(\r
    {\r
        // animation: false,\r
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
);`,s='<div id="chart" style="width: 100%; height: 500px"></div>';function c(){return r.jsxs(n,{children:[r.jsx(t,{children:"IRPieChart"}),r.jsx("p",{children:"원형 차트를 표현하는 컴포넌트입니다."}),r.jsx(e,{htmlRaw:s,code:l})]})}c.__docgenInfo={description:"",methods:[],displayName:"PieChart"};const C={title:"JS Components/IRChart"},x=["LineChart","PieChart"];export{i as LineChart,c as PieChart,x as __namedExportsOrder,C as default};
