import{j as n}from"./jsx-runtime-Y5Ju2SGo.js";import{D as e,a as t,L as i}from"./version-tag-D9L4qBs8.js";import"./index-eCxJ45ll.js";const d=`import { IRContextMenu } from "@innorules/ir-style";

const CONTEXT_ITEMS = {
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

const menu = new IRContextMenu( CONTEXT_ITEMS );
const menu2 = new IRContextMenu( CONTEXT_ITEMS );

menu.updateItems( ( items ) =>
{
    items[0].disabled = true;
    items[5].children[1].label = "변경된 셀";
} );

test_area.addEventListener( "contextmenu", ( ev ) =>
{
    ev.preventDefault();
    menu.showAtPoint( ev.clientX, ev.clientY );
} );

test_area2.addEventListener( "contextmenu", ( ev ) =>
{
    ev.preventDefault();
    menu2.showAtPoint( 0, 240 );
} );

btn.addEventListener( "click", () =>
{
    menu.showByElement( btn, "bottom-start" );
} );

btn2.addEventListener( "click", () =>
{
    menu2.showByElement( btn2, "right-start", 8 );
} );

menu.onCommandButtonClick = ( args ) =>
{
    console.log( args );
};`,o=`<div>
    <div id="btn" class="button button--primary mb--lg">Menu</div>
    <div id="btn2" class="button mb--lg">offset</div>
</div>
<div id="test_area" class="border width--full height--xl"></div>
<div id="test_area2" class="border width--full height--xl"></div>`;function l(){return n.jsxs(e,{children:[n.jsx(t,{children:"IRContextMenu"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRContextMenu"})," 클래스를 이용하여 메뉴를 출력합니다."]}),n.jsx(i,{fixedHeight:600,htmlRaw:o,code:d})]})}l.__docgenInfo={description:"",methods:[],displayName:"Basic"};const s={title:"JS Components/IRContextMenu"},m=["Basic"];export{l as Basic,m as __namedExportsOrder,s as default};
