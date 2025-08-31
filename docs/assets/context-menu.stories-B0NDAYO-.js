import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as e,L as t}from"./version-tag-9vMQgyJG.js";import"./iframe-CKHoihc2.js";import"./index-Dprm-oae.js";const i=`import { IRContextMenu } from "@innorules/ir-style";\r
\r
const CONTEXT_ITEMS = {\r
    // blurDisabled: true,\r
    items: [\r
        {\r
            id: "1",\r
            type: "command-button",\r
            label: "룰 찾기",\r
            icon: "ir-icon--rule",\r
        },\r
        { type: "divider" },\r
        {\r
            id: "2",\r
            type: "command-button",\r
            label: "내용 찾기",\r
            icon: "ir-icon--rule",\r
        },\r
        {\r
            id: "3",\r
            type: "command-button",\r
            label: "내용 바꾸기 길게 길게 길게 길게",\r
            icon: "",\r
        },\r
        { type: "divider" },\r
        {\r
            id: "dropdown1",\r
            type: "dropdown",\r
            label: "행",\r
            icon: "ir-icon--rule",\r
            children: [\r
                {\r
                    id: "4",\r
                    type: "command-button",\r
                    label: "행 삽입",\r
                },\r
                {\r
                    id: "5",\r
                    type: "command-button",\r
                    label: "행 삭제",\r
                },\r
                {\r
                    id: "6",\r
                    type: "dropdown",\r
                    label: "최종행 추가",\r
                    children: [\r
                        {\r
                            id: "row_1",\r
                            type: "command-button",\r
                            label: "취소",\r
                        },\r
                    ],\r
                },\r
                {\r
                    id: "7",\r
                    type: "command-button",\r
                    label: "행 편집",\r
                    disabled: true,\r
                },\r
            ],\r
        },\r
        { type: "divider" },\r
        {\r
            id: "dropdown2",\r
            type: "dropdown",\r
            label: "열",\r
            icon: "ir-icon--rule",\r
            children: [\r
                {\r
                    icon: "ir-icon--save",\r
                    id: "8",\r
                    type: "command-button",\r
                    label: "열 삽입",\r
                },\r
                {\r
                    id: "9",\r
                    type: "command-button",\r
                    label: "열 삭제",\r
                },\r
                {\r
                    id: "10",\r
                    type: "command-button",\r
                    label: "최종열 추가",\r
                },\r
                {\r
                    id: "11",\r
                    type: "command-button",\r
                    label: "열 채우기",\r
                    disabled: true,\r
                },\r
            ],\r
        },\r
        { id: "div4", type: "divider" },\r
        {\r
            id: "dropdown3",\r
            type: "dropdown",\r
            label: "셀",\r
            icon: "ir-icon--rule",\r
            children: [\r
                {\r
                    id: "12",\r
                    type: "command-button",\r
                    label: "셀 병합",\r
                },\r
            ],\r
        },\r
        { id: "div5", type: "divider" },\r
        {\r
            id: "13",\r
            type: "command-button",\r
            label: "리턴 항목 찾기",\r
            icon: "ir-icon--rule",\r
        },\r
        {\r
            id: "14",\r
            type: "dropdown",\r
            label: "문자열 변환",\r
            icon: "ir-icon--rule",\r
            children: [\r
                {\r
                    id: "a",\r
                    type: "command-button",\r
                    label: "a",\r
                },\r
                {\r
                    id: "b",\r
                    type: "command-button",\r
                    label: "b",\r
                },\r
                {\r
                    id: "c",\r
                    type: "command-button",\r
                    label: "c",\r
                },\r
            ],\r
        },\r
        { type: "divider" },\r
        { type: "divider" },\r
    ],\r
};\r
\r
const menu = new IRContextMenu( CONTEXT_ITEMS );\r
const menu2 = new IRContextMenu( CONTEXT_ITEMS );\r
\r
menu.updateItems( ( items ) =>\r
{\r
    items[0].disabled = true;\r
    items[5].children[1].label = "변경된 셀";\r
} );\r
\r
test_area.addEventListener( "contextmenu", ( ev ) =>\r
{\r
    ev.preventDefault();\r
    menu.showAtPoint( ev.clientX, ev.clientY );\r
} );\r
\r
test_area2.addEventListener( "contextmenu", ( ev ) =>\r
{\r
    ev.preventDefault();\r
    menu2.showAtPoint( 0, 240 );\r
} );\r
\r
btn.addEventListener( "click", () =>\r
{\r
    menu.showByElement( btn, "bottom-start" );\r
} );\r
\r
btn2.addEventListener( "click", () =>\r
{\r
    menu2.showByElement( btn2, "right-start", 8 );\r
} );\r
\r
menu.onCommandButtonClick = ( args ) =>\r
{\r
    console.log( args );\r
};`,d=`<div>\r
    <div id="btn" class="button button--primary mb--lg">Menu</div>\r
    <div id="btn2" class="button mb--lg">offset</div>\r
</div>\r
<div id="test_area" class="border width--full height--xl"></div>\r
<div id="test_area2" class="border width--full height--xl"></div>`;function o(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRContextMenu"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRContextMenu"})," 클래스를 이용하여 메뉴를 출력합니다."]}),n.jsx(t,{fixedHeight:600,htmlRaw:d,code:i})]})}o.__docgenInfo={description:"",methods:[],displayName:"Basic"};const s={title:"JS Components/IRContextMenu"},u=["Basic"];export{o as Basic,u as __namedExportsOrder,s as default};
