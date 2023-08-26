import{j as t,a as n,F as l}from"./jsx-runtime-e43ccb36.js";import{D as r,a,L as c}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const s={title:"React Components/Context Menu"},e=()=>t(r,{children:[n(a,{children:"Context Menu"}),t("p",{children:[n("code",{children:"Context Menu"})," 클래스를 이용하여 메뉴를 출력합니다."]}),n(c,{fixedHeight:600,html:t(l,{children:[n("div",{id:"btn",className:"button button--primary mb--lg",children:"Menu"}),n("div",{id:"test_area",className:"border width--screen height--xxl"})]}),code:`
import { IRContextMenuAdapter } from "./dist/react.js";

const menu = new IRContextMenuAdapter({
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
            icon: "ir-icon--rule",
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
    ]
})

menu.updateItems((items) => {
    items[0].disabled = true;
    items[5].children[1].label = "변경된 셀";
})

test_area.addEventListener( "contextmenu", (ev) => {
    ev.preventDefault();
    menu.showAtPoint( ev.clientX, ev.clientY );
} )

btn.addEventListener( "click", () => {
    menu.showByElement(btn, "bottom-start", 5);
})

menu.onCommandButtonClick = (ev, id) => {
    console.log(ev,id);
}
`})]});var d,i,o;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>Context Menu</DocTitle>\r
            <p><code>Context Menu</code> 클래스를 이용하여 메뉴를 출력합니다.</p>\r
            <LiveEditor fixedHeight={600} html={<>\r
                        <div id="btn" className="button button--primary mb--lg">Menu</div>\r
                        <div id="test_area" className="border width--screen height--xxl"></div>\r
                    </>} code={\`
import { IRContextMenuAdapter } from "./dist/react.js";

const menu = new IRContextMenuAdapter({
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
            icon: "ir-icon--rule",
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
    ]
})

menu.updateItems((items) => {
    items[0].disabled = true;
    items[5].children[1].label = "변경된 셀";
})

test_area.addEventListener( "contextmenu", (ev) => {
    ev.preventDefault();
    menu.showAtPoint( ev.clientX, ev.clientY );
} )

btn.addEventListener( "click", () => {
    menu.showByElement(btn, "bottom-start", 5);
})

menu.onCommandButtonClick = (ev, id) => {
    console.log(ev,id);
}
\`} />\r
        </Doc>;
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const y=["Basic"];export{e as Basic,y as __namedExportsOrder,s as default};
//# sourceMappingURL=context-menu.basic.stories-e14b7612.js.map
