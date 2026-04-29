import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,r,s as i,t as a}from"./context-C6uFeUW4.js";import{t as o}from"./jsx-runtime-6sF1Ejqi.js";var s,c=e((()=>{s=`export const CONTEXT_ITEMS = {
    // blurDisabled: true,
    items: [
        {
            id: "1",
            type: "command-button",
            label: "룰 찾기",
            icon: "ir-icon--rule",
        },
        { type: "divider" },
        {
            id: "2",
            type: "command-button",
            label: "내용 찾기",
            icon: "ir-icon--rule",
        },
        {
            id: "3",
            type: "command-button",
            label: "내용 바꾸기 길게 길게 길게 길게",
            icon: "",
        },
        { type: "divider" },
        {
            id: "dropdown1",
            type: "dropdown",
            label: "행",
            icon: "ir-icon--rule",
            children: [
                {
                    id: "4",
                    type: "command-button",
                    label: "행 삽입",
                },
                {
                    id: "5",
                    type: "command-button",
                    label: "행 삭제",
                },
                {
                    id: "6",
                    type: "dropdown",
                    label: "최종행 추가",
                    children: [
                        {
                            id: "row_1",
                            type: "command-button",
                            label: "취소",
                        },
                    ],
                },
                {
                    id: "7",
                    type: "command-button",
                    label: "행 편집",
                    disabled: true,
                },
            ],
        },
        { type: "divider" },
        {
            id: "dropdown2",
            type: "dropdown",
            label: "열",
            icon: "ir-icon--rule",
            children: [
                {
                    icon: "ir-icon--save",
                    id: "8",
                    type: "command-button",
                    label: "열 삽입",
                },
                {
                    id: "9",
                    type: "command-button",
                    label: "열 삭제",
                },
                {
                    id: "10",
                    type: "command-button",
                    label: "최종열 추가",
                },
                {
                    id: "11",
                    type: "command-button",
                    label: "열 채우기",
                    disabled: true,
                },
            ],
        },
        { id: "div4", type: "divider" },
        {
            id: "dropdown3",
            type: "dropdown",
            label: "셀",
            icon: "ir-icon--rule",
            children: [
                {
                    id: "12",
                    type: "command-button",
                    label: "셀 병합",
                },
            ],
        },
        { id: "div5", type: "divider" },
        {
            id: "13",
            type: "command-button",
            label: "리턴 항목 찾기",
            icon: "ir-icon--rule",
        },
        {
            id: "14",
            type: "dropdown",
            label: "문자열 변환",
            icon: "ir-icon--rule",
            children: [
                {
                    id: "a",
                    type: "command-button",
                    label: "a",
                },
                {
                    id: "b",
                    type: "command-button",
                    label: "b",
                },
                {
                    id: "c",
                    type: "command-button",
                    label: "c",
                },
            ],
        },
        { type: "divider" },
        { type: "divider" },
    ],
};

globalThis.CONTEXT_ITEMS = CONTEXT_ITEMS;
`})),l,u=e((()=>{l=`import { IRContextMenu } from "@innorules/ir-style";

const menu1 = new IRContextMenu( CONTEXT_ITEMS );
const menu2 = new IRContextMenu( CONTEXT_ITEMS );

/** 상단 test_area */
test_area1.addEventListener( "contextmenu", ( ev ) =>
{
    ev.preventDefault();
    menu1.showAtPoint( ev.clientX, ev.clientY );
} );

/** 하단 test_area */
test_area2.addEventListener( "contextmenu", ( ev ) =>
{
    ev.preventDefault();
    menu2.showAtPoint( 0, 240 );
} );

/** 버튼으로 메뉴 출력 */
btn1.addEventListener( "click", () =>
{
    menu1.showByElement( btn1, "bottom-start" );
} );

btn2.addEventListener( "click", () =>
{
    menu2.showByElement( btn2, "right-start", 8 );
} );

/** updateItems API 예시 */
menu1.updateItems( ( items ) =>
{
    items[0].disabled = true;
    items[5].children[1].label = "변경된 셀";
} );

/** onCommandButtonClick API 예시 */
menu1.onCommandButtonClick = ( args ) =>
{
    console.log( args );
};`})),d,f=e((()=>{d=`<div>
    <div id="btn1" class="button button--primary mb--lg">Menu</div>
    <div id="btn2" class="button mb--lg">offset</div>
</div>
<div id="test_area1" class="border width--full height--xl"></div>
<div id="test_area2" class="border width--full height--xl"></div>`}));function p(){return(0,m.jsxs)(n,{children:[(0,m.jsx)(t,{children:`IRContextMenu`}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`IRContextMenu`}),` 클래스를 이용하여 메뉴를 출력합니다.`]}),(0,m.jsx)(r,{docList:h}),(0,m.jsx)(i,{fixedHeight:500,htmlRaw:d,code:s,exampleCode:l})]})}var m,h,g=e((()=>{c(),u(),f(),a(),m=o(),h=[[`/classes/_innorules_solid-ui.IRContextMenu.html`,`IRContextMenu`]],p.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),_,v;e((()=>{g(),_={title:`JS Components/IRContextMenu`},v=[`Basic`]}))();export{p as Basic,v as __namedExportsOrder,_ as default};