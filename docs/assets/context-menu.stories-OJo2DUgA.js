import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r,a as e,c as t,L as i}from"./version-tag-B2V-8a8w.js";import"./iframe-72AAcSIy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfaMo4xr.js";const o=`export const CONTEXT_ITEMS = {\r
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
globalThis.CONTEXT_ITEMS = CONTEXT_ITEMS;\r
`,d=`import { IRContextMenu } from "@innorules/ir-style";\r
\r
const menu1 = new IRContextMenu( CONTEXT_ITEMS );\r
const menu2 = new IRContextMenu( CONTEXT_ITEMS );\r
\r
/** 상단 test_area */\r
test_area1.addEventListener( "contextmenu", ( ev ) =>\r
{\r
    ev.preventDefault();\r
    menu1.showAtPoint( ev.clientX, ev.clientY );\r
} );\r
\r
/** 하단 test_area */\r
test_area2.addEventListener( "contextmenu", ( ev ) =>\r
{\r
    ev.preventDefault();\r
    menu2.showAtPoint( 0, 240 );\r
} );\r
\r
/** 버튼으로 메뉴 출력 */\r
btn1.addEventListener( "click", () =>\r
{\r
    menu1.showByElement( btn1, "bottom-start" );\r
} );\r
\r
btn2.addEventListener( "click", () =>\r
{\r
    menu2.showByElement( btn2, "right-start", 8 );\r
} );\r
\r
/** updateItems API 예시 */\r
menu1.updateItems( ( items ) =>\r
{\r
    items[0].disabled = true;\r
    items[5].children[1].label = "변경된 셀";\r
} );\r
\r
/** onCommandButtonClick API 예시 */\r
menu1.onCommandButtonClick = ( args ) =>\r
{\r
    console.log( args );\r
};`,l=`<div>\r
    <div id="btn1" class="button button--primary mb--lg">Menu</div>\r
    <div id="btn2" class="button mb--lg">offset</div>\r
</div>\r
<div id="test_area1" class="border width--full height--xl"></div>\r
<div id="test_area2" class="border width--full height--xl"></div>`,a=[["/classes/_innorules_solid-ui.IRContextMenu.html","IRContextMenu"]];function s(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRContextMenu"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRContextMenu"})," 클래스를 이용하여 메뉴를 출력합니다."]}),n.jsx(t,{docList:a}),n.jsx(i,{fixedHeight:500,htmlRaw:l,code:o,exampleCode:d})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const v={title:"JS Components/IRContextMenu"},y=["Basic"];export{s as Basic,y as __namedExportsOrder,v as default};
