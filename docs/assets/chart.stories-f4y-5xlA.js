import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as e,L as r}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const o=`import { IRLineChart } from "@innorules/ir-style/lib/esm/chart.js";

new IRLineChart(
    {
        // animation: false,
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
        plugins: {
            // 커스텀 시, 아래  URL Docs 참고할 것.
            // https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks
            // tooltip: {
            //     callbacks: {
            //         // 값 포맷/단위
            //         label: ( ctx ) => \`\${ctx.raw}원\`,
            //         title: ( items ) => \`X축: \${items[0].label}\`,
            //         footer: ( items ) => \`총 \${items.length}개\`,
            //     },
            // },
        },
    },
);`,a=`<div id='chart' style="width: 100%; height: 500px"></div>`;function i(){return n.jsxs(t,{children:[n.jsx(e,{children:"IRLineChart"}),n.jsx("p",{children:"선형 차트를 표현하는 컴포넌트입니다."}),n.jsx(r,{htmlRaw:a,code:o})]})}i.__docgenInfo={description:"",methods:[],displayName:"LineChart"};const l=`import { IRPieChart } from "@innorules/ir-style/lib/esm/chart.js";

new IRPieChart(
    {
        // animation: false,
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
);`,s='<div id="chart" style="width: 100%; height: 500px"></div>';function c(){return n.jsxs(t,{children:[n.jsx(e,{children:"IRPieChart"}),n.jsx("p",{children:"원형 차트를 표현하는 컴포넌트입니다."}),n.jsx(r,{htmlRaw:s,code:l})]})}c.__docgenInfo={description:"",methods:[],displayName:"PieChart"};const C={title:"JS Components/IRChart"},x=["LineChart","PieChart"];export{i as LineChart,c as PieChart,x as __namedExportsOrder,C as default};
