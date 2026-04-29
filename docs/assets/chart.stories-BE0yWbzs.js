import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import { IRLineChart } from "@innorules/ir-style/lib/esm/chart.js";

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
);`})),c,l=e((()=>{c=`<div id='chart' style="width: 100%; height: 500px"></div>`}));function u(){return(0,d.jsxs)(n,{children:[(0,d.jsx)(t,{children:`IRLineChart`}),(0,d.jsx)(`p`,{children:`선형 차트를 표현하는 컴포넌트입니다.`}),(0,d.jsx)(r,{htmlRaw:c,code:o})]})}var d,f=e((()=>{s(),l(),i(),d=a(),u.__docgenInfo={description:``,methods:[],displayName:`LineChart`}})),p,m=e((()=>{p=`import { IRPieChart } from "@innorules/ir-style/lib/esm/chart.js";

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
);`})),h,g=e((()=>{h=`<div id="chart" style="width: 100%; height: 500px"></div>`}));function _(){return(0,v.jsxs)(n,{children:[(0,v.jsx)(t,{children:`IRPieChart`}),(0,v.jsx)(`p`,{children:`원형 차트를 표현하는 컴포넌트입니다.`}),(0,v.jsx)(r,{htmlRaw:h,code:p})]})}var v,y=e((()=>{m(),g(),i(),v=a(),_.__docgenInfo={description:``,methods:[],displayName:`PieChart`}})),b,x;e((()=>{f(),y(),b={title:`JS Components/IRChart`},x=[`LineChart`,`PieChart`]}))();export{u as LineChart,_ as PieChart,x as __namedExportsOrder,b as default};