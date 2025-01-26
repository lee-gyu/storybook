import{j as n}from"./jsx-runtime-CZmXTeUy.js";import{D as o,a as r,L as l}from"./version-tag-DohCfExP.js";import"./index-eCxJ45ll.js";const s={title:"JS Components/IRContextMenu"},e=()=>n.jsxs(o,{children:[n.jsx(r,{children:"IRContextMenu"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRContextMenu"})," 클래스를 이용하여 메뉴를 출력합니다."]}),n.jsx(l,{fixedHeight:600,html:n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("div",{id:"btn",className:"button button--primary mb--lg",children:"Menu"}),n.jsx("div",{id:"btn2",className:"button mb--lg",children:"offset"})]}),n.jsx("div",{id:"test_area",className:"border width--full height--xl"}),n.jsx("div",{id:"test_area2",className:"border width--full height--xl"})]}),code:`
import { IRContextMenu } from "./dist/index.js";
import { IRContextMenuAdapter } from "./dist/react.js";

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
                        }
                    ]
                },
                {
                    id: "7",
                    type: "command-button",
                    label: "행 편집",
                    disabled: true,
                },
            ],
        },
        { type: "divider"},
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
        { id: "div4", type:"divider"},
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
        { id: "div5", type:"divider"},
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
                }
            ]
        },
        { type: "divider" },
        { type: "divider" },
    ]
}

const menu = new IRContextMenu(CONTEXT_ITEMS)
const menu2 = new IRContextMenuAdapter(CONTEXT_ITEMS)

menu.updateItems((items) => {
    items[0].disabled = true;
    items[5].children[1].label = "변경된 셀";
})

test_area.addEventListener( "contextmenu", (ev) => {
    ev.preventDefault();
    menu.showAtPoint( ev.clientX, ev.clientY );
} )

test_area2.addEventListener( "contextmenu", (ev) => {
    ev.preventDefault();
    menu2.showAtPoint( 0, 240 );
} )

btn.addEventListener( "click", () => {
    menu.showByElement(btn, "bottom-start");
})

btn2.addEventListener( "click", () => {
    menu2.showByElement(btn2, "right-start", 8);
})

menu.onCommandButtonClick = ( args ) => {
    console.log( args );
}
`})]});e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var t,i,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRContextMenu</DocTitle>\r
            <p><code>IRContextMenu</code> 클래스를 이용하여 메뉴를 출력합니다.</p>\r
            <LiveEditor fixedHeight={600} html={<>\r
                        <div>\r
                            <div id="btn" className="button button--primary mb--lg">Menu</div>\r
                            <div id="btn2" className="button mb--lg">offset</div>\r
                        </div>\r
                        <div id="test_area" className="border width--full height--xl"></div>\r
                        <div id="test_area2" className="border width--full height--xl"></div>\r
                    </>} code={/* javascript */\`
import { IRContextMenu } from "./dist/index.js";
import { IRContextMenuAdapter } from "./dist/react.js";

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
                        }
                    ]
                },
                {
                    id: "7",
                    type: "command-button",
                    label: "행 편집",
                    disabled: true,
                },
            ],
        },
        { type: "divider"},
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
        { id: "div4", type:"divider"},
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
        { id: "div5", type:"divider"},
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
                }
            ]
        },
        { type: "divider" },
        { type: "divider" },
    ]
}

const menu = new IRContextMenu(CONTEXT_ITEMS)
const menu2 = new IRContextMenuAdapter(CONTEXT_ITEMS)

menu.updateItems((items) => {
    items[0].disabled = true;
    items[5].children[1].label = "변경된 셀";
})

test_area.addEventListener( "contextmenu", (ev) => {
    ev.preventDefault();
    menu.showAtPoint( ev.clientX, ev.clientY );
} )

test_area2.addEventListener( "contextmenu", (ev) => {
    ev.preventDefault();
    menu2.showAtPoint( 0, 240 );
} )

btn.addEventListener( "click", () => {
    menu.showByElement(btn, "bottom-start");
})

btn2.addEventListener( "click", () => {
    menu2.showByElement(btn2, "right-start", 8);
})

menu.onCommandButtonClick = ( args ) => {
    console.log( args );
}
\`} />\r
        </Doc>;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,s as default};
